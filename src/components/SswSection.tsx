import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  HeartHandshake, 
  Utensils, 
  Factory, 
  Sprout, 
  Building2, 
  Hotel, 
  ShieldCheck, 
  ExternalLink,
  BookOpen,
  Languages,
  Clock,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/audio';

interface SswSectionProps {
  onNavigateToJft: () => void;
  onNavigateToBab?: (bab: number) => void;
}

export const SswSection: React.FC<SswSectionProps> = ({ 
  onNavigateToJft, 
  onNavigateToBab 
}) => {
  const [selectedField, setSelectedField] = useState<string>('kaigo');

  const sswFields = [
    {
      id: 'kaigo',
      title: 'Kaigo (Caregiver / Perawat Lansia)',
      japanese: '介護',
      icon: HeartHandshake,
      badge: 'Permintaan Tertinggi',
      badgeColor: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
      description: 'Membantu aktivitas kehidupan sehari-hari lansia di panti jompo (care facility) di Jepang: makan, mandi, mobilitas fisik, dan komunikasi sosial.',
      examReq: 'JFT-Basic A2 (atau JLPT N4) + Ujian Keperawatan Kaigo Hyoka Shiken',
      vocabulary: [
        { jp: '介助 (かいじょ)', romaji: 'kaijo', id: 'bantuan / pertolongan fisik' },
        { jp: '車椅子 (くるまいす)', romaji: 'kurumaisu', id: 'kursi roda' },
        { jp: '体温 (たいおん)', romaji: 'taion', id: 'suhu tubuh' },
        { jp: '血圧 (けつあつ)', romaji: 'ketsuatsu', id: 'tekanan darah' },
        { jp: '利用者 (りようしゃ)', romaji: 'riyousha', id: 'pengguna jasa / lansia' }
      ]
    },
    {
      id: 'food_service',
      title: 'Food Service (Restoran & Kuliner)',
      japanese: '外食業',
      icon: Utensils,
      badge: 'Sangat Populer',
      badgeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
      description: 'Bekerja di industri restoran dan gerai makanan Jepang: pelayanan pelanggan (hall staff), pengolahan makanan di dapur (kitchen staff), dan sanitasi.',
      examReq: 'JFT-Basic A2 (atau JLPT N4) + Gaishokugyou Ginou Sokutei Shiken',
      vocabulary: [
        { jp: 'いらっしゃいませ', romaji: 'irasshaimase', id: 'selamat datang (sapaan tamu)' },
        { jp: '注文 (ちゅうもん)', romaji: 'chuumon', id: 'pesanan makanan' },
        { jp: '会計 (かいけい)', romaji: 'kaikei', id: 'pembayaran / kasir' },
        { jp: '衛生 (えいせい)', romaji: 'eisei', id: 'kebersihan / sanitasi' },
        { jp: '調理 (ちょうり)', romaji: 'chouri', id: 'memasak / pengolahan' }
      ]
    },
    {
      id: 'manufacturing',
      title: 'Pengolahan Makanan & Minuman',
      japanese: '飲食料品製造業',
      icon: Factory,
      badge: 'Banyak Lowongan',
      badgeColor: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
      description: 'Bekerja di pabrik pengolahan bento, roti, makanan beku, atau minuman dengan standar kebersihan HACCP Jepang.',
      examReq: 'JFT-Basic A2 (atau JLPT N4) + Inshokuryouhin Seizou Shiken',
      vocabulary: [
        { jp: '手洗い (てあらい)', romaji: 'tearai', id: 'cuci tangan higienis' },
        { jp: '殺菌 (さっきん)', romaji: 'sakkin', id: 'sterilisasi kuman' },
        { jp: '賞味期限 (しょうみきげん)', romaji: 'shoumikigen', id: 'tanggal kedaluwarsa' },
        { jp: '異物混入 (いぶつこんにゅう)', romaji: 'ibutsu konnyuu', id: 'kontaminasi benda asing' },
        { jp: '包装 (ほうそう)', romaji: 'housou', id: 'pengemasan / packaging' }
      ]
    },
    {
      id: 'agriculture',
      title: 'Pertanian & Peternakan',
      japanese: '農業',
      icon: Sprout,
      badge: 'Suasana Alam',
      badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      description: 'Budidaya sayur mayur, buah-buahan di rumah kaca (greenhouse), atau pemeliharaan ternak sapi perah dan unggas di berbagai prefektur Jepang.',
      examReq: 'JFT-Basic A2 (atau JLPT N4) + Nogyo Ginou Sokutei Shiken',
      vocabulary: [
        { jp: '収穫 (しゅうかく)', romaji: 'shuukaku', id: 'panen' },
        { jp: '出荷 (しゅっか)', romaji: 'shukka', id: 'pengiriman hasil panen' },
        { jp: '肥料 (ひりょう)', romaji: 'hiryou', id: 'pupuk' },
        { jp: 'ビニールハウス', romaji: 'biniiru hausu', id: 'rumah kaca plastik' },
        { jp: '選別 (せんべつ)', romaji: 'senbetsu', id: 'penyortiran kualitas' }
      ]
    },
    {
      id: 'hospitality',
      title: 'Akomodasi & Perhotelan',
      japanese: '宿泊業',
      icon: Hotel,
      badge: 'Interaksi Bahasa',
      badgeColor: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
      description: 'Pelayanan tamu di hotel modern atau Ryokan tradisional Jepang: resepsionis, pembersihan kamar, jamuan makan malam kaiseki.',
      examReq: 'JFT-Basic A2 (atau JLPT N4) + Shukuhaku Ginou Shiken',
      vocabulary: [
        { jp: '予約 (よやく)', romaji: 'yoyaku', id: 'reservasi' },
        { jp: '客室 (きゃくしつ)', romaji: 'kyakushitsu', id: 'kamar tamu hotel' },
        { jp: 'フロント', romaji: 'furonto', id: 'meja depan resepsionis' },
        { jp: 'ご案内 (ごあんない)', romaji: 'goannai', id: 'memandu / informasi' },
        { jp: 'チェックアウト', romaji: 'chekku auto', id: 'proses keluar kamar' }
      ]
    },
    {
      id: 'building_cleaning',
      title: 'Pembersihan Gedung (Building Cleaning)',
      japanese: 'ビルクリーニング',
      icon: Building2,
      badge: 'Pekerjaan Teratur',
      badgeColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
      description: 'Pemeliharaan kebersihan gedung perkantoran, pusat perbelanjaan, dan stasiun dengan mesin pembersih modern.',
      examReq: 'JFT-Basic A2 (atau JLPT N4) + Biru Kuriiningu Shiken',
      vocabulary: [
        { jp: '清掃 (せいそう)', romaji: 'seisou', id: 'pembersihan' },
        { jp: '洗剤 (せんざい)', romaji: 'senzai', id: 'sabun / deterjen' },
        { jp: '安全靴 (あんぜんぐつ)', romaji: 'anzengutsu', id: 'sepatu pelindung keselamatan' },
        { jp: '床 (ゆか)', romaji: 'yuka', id: 'lantai' },
        { jp: '点検 (てんけん)', romaji: 'tenken', id: 'pemeriksaan / inspeksi' }
      ]
    }
  ];

  const currentFieldData = sswFields.find(f => f.id === selectedField) || sswFields[0];

  return (
    <div className="space-y-8 text-left pb-16">
      
      {/* ── Hero Banner SSW ── */}
      <div className="relative overflow-hidden rounded-3xl border border-[#8FB4E3]/25 shadow-[0_20px_60px_-15px_rgba(12,27,51,0.9),0_0_40px_rgba(143,180,227,0.12)] bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] p-6 sm:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16294A]/80 border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_12px_rgba(143,180,227,0.2)]">
              <Briefcase className="w-4 h-4 text-[#8FB4E3]" />
              Tokutei Ginou (特定技能) · Specified Skilled Worker (SSW)
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#EEF1F6] tracking-tight font-['Manrope'] flex items-center gap-3">
              <Award className="w-8 h-8 text-[#8FB4E3]" />
              Pusat Pembelajaran & Persiapan Kerja SSW
            </h1>

            <p className="text-[#CBD8EC] text-sm sm:text-base leading-relaxed max-w-2xl">
              Panduan terpadu karir dan persiapan ujian visa kerja terampil Jepang (SSW 1 & SSW 2). Kuasai 2 syarat mutlak kelulusan: <span className="text-[#8FB4E3] font-bold">Ujian Bahasa (JFT-Basic A2 / JLPT N4)</span> dan <span className="text-emerald-400 font-bold">Ujian Keterampilan Teknis (Skill Test)</span>.
            </p>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onNavigateToJft();
            }}
            className="self-start md:self-auto inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:brightness-110 text-white text-xs sm:text-sm font-black shadow-lg transition-all shrink-0 active:scale-95"
          >
            <FileCheck className="w-4 h-4" />
            <span>Mulai Simulasi JFT-Basic A2</span>
          </button>
        </div>
      </div>

      {/* ── 2 Syarat Utama Kelulusan Visa SSW ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Syarat 1: Bahasa Jepang */}
        <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-7 space-y-4 shadow-lg flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#8FB4E3] px-2.5 py-1 rounded-lg bg-[#0C1B33] border border-[#8FB4E3]/20">
                Syarat Mutlak #1
              </span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Bahasa Jepang
              </span>
            </div>

            <h3 className="text-xl font-black text-[#EEF1F6] font-['Manrope']">
              Lulus JFT-Basic A2 atau JLPT N4
            </h3>

            <p className="text-xs sm:text-sm text-[#CBD8EC] leading-relaxed">
              Standar kompetensi percakapan kerja sehari-hari di Jepang. Anda wajib lulus ujian CBT <strong>JFT-Basic A2</strong> (skor ≥ 200/250) atau ujian resmi <strong>JLPT N4</strong> (skor ≥ 90/180).
            </p>
          </div>

          <div className="pt-4 border-t border-[#8FB4E3]/15 flex items-center justify-between">
            <span className="text-xs text-[#8793A8]">
              Tersedia latihan soal CBT resmi
            </span>
            <button
              onClick={() => {
                sound.playClick();
                onNavigateToJft();
              }}
              className="text-xs font-bold text-[#8FB4E3] hover:text-[#EEF1F6] flex items-center gap-1 transition-colors"
            >
              <span>Uji Simulasi Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Syarat 2: Ujian Keterampilan */}
        <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-7 space-y-4 shadow-lg flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#8FB4E3] px-2.5 py-1 rounded-lg bg-[#0C1B33] border border-[#8FB4E3]/20">
                Syarat Mutlak #2
              </span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Keterampilan Teknis
              </span>
            </div>

            <h3 className="text-xl font-black text-[#EEF1F6] font-['Manrope']">
              Lulus Ujian Keahlian Bidang (Skill Test)
            </h3>

            <p className="text-xs sm:text-sm text-[#CBD8EC] leading-relaxed">
              Ujian teori & praktik sesuai bidang kerja pilihan Anda di Jepang (misal: <em>Kaigo Hyoka Shiken</em> untuk perawat lansia, atau <em>Gaishokugyou</em> untuk staf restoran).
            </p>
          </div>

          <div className="pt-4 border-t border-[#8FB4E3]/15 flex items-center justify-between">
            <span className="text-xs text-[#8793A8]">
              12 Sektor resmi dibuka di Jepang
            </span>
            <span className="text-xs font-bold text-[#8FB4E3]">
              Pilih bidang di bawah ↓
            </span>
          </div>
        </div>

      </div>

      {/* ── 12 Bidang Industri Kerja SSW Resmi ── */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[#EEF1F6] font-['Manrope']">
            Sektor Bidang Industri Kerja SSW Populer
          </h2>
          <p className="text-xs sm:text-sm text-[#8793A8]">
            Pilih sektor di bawah untuk melihat ringkasan tugas, syarat ujian teknis, dan bank kosakata kerja khusus.
          </p>
        </div>

        {/* Tab Switcher Bidang */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {sswFields.map((field) => {
            const Icon = field.icon;
            const isSelected = selectedField === field.id;
            return (
              <button
                key={field.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedField(field.id);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#1F3760] to-[#274474] border-[#8FB4E3] shadow-md ring-2 ring-[#8FB4E3]/40'
                    : 'bg-[#16294A] border-[#8FB4E3]/20 hover:border-[#8FB4E3]/40 text-[#CBD8EC]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-[#8FB4E3]' : 'text-[#8793A8]'}`} />
                <div>
                  <span className="text-xs font-bold text-[#EEF1F6] block truncate">
                    {field.japanese}
                  </span>
                  <span className="text-[10px] text-[#8793A8] block truncate">
                    {field.title.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail Kartu Bidang Terpilih */}
        <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#8FB4E3]/15">
            <div>
              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border inline-block mb-1.5 ${currentFieldData.badgeColor}`}>
                {currentFieldData.badge}
              </span>
              <h3 className="text-2xl font-black text-[#EEF1F6] font-['Manrope']">
                {currentFieldData.title}
              </h3>
              <p className="text-xs font-bold text-[#8FB4E3] font-mono mt-0.5">
                Nama Resmi: {currentFieldData.japanese}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/20 text-xs text-[#CBD8EC] max-w-sm">
              <span className="font-bold text-[#8FB4E3] block mb-0.5">Syarat Ujian Teknis:</span>
              <span>{currentFieldData.examReq}</span>
            </div>
          </div>

          <p className="text-sm text-[#EEF1F6] leading-relaxed">
            {currentFieldData.description}
          </p>

          {/* Kosakata Spesifik Bidang */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider block">
              Kosakata Khusus Tempat Kerja ({currentFieldData.japanese}):
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {currentFieldData.vocabulary.map((v, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/20 flex flex-col justify-between"
                >
                  <span className="text-base font-bold text-[#EEF1F6] japanese-text">
                    {v.jp}
                  </span>
                  <div className="flex items-center justify-between text-xs mt-1">
                    <span className="font-mono text-[#8FB4E3]">{v.romaji}</span>
                    <span className="text-[#CBD8EC]">{v.id}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
