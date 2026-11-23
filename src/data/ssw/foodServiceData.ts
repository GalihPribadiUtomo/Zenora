import { SswSectorData } from '../../types/ssw';

export const FOOD_SERVICE_SECTOR_DATA: SswSectorData = {
  id: 'food_service',
  name: 'Food Service (Industri Restoran & Kuliner)',
  japaneseName: '外食業',
  romajiName: 'Gaishokugyou',
  iconName: 'Utensils',
  tagline: 'Menguasai keramahan pelayanan tamu (Omotenashi), standar kebersihan HACCP, dan teknik pengolahan kuliner Jepang berstandar internasional.',
  badge: 'Sangat Populer',
  badgeColor: 'text-amber-400 bg-amber-500/15 border-amber-500/30',
  overview: {
    workEnvironment: 'Bekerja di restoran keluarga (famiresu), kedai ramen/udon, izakaya, restoran sushi, kafe cepat saji, atau hotel dining di seluruh prefektur Jepang dengan ritme kerja dinamis dan terorganisir.',
    mainDuties: [
      'Pelayanan pelanggan di hall (menyapa tamu, mengantar tempat duduk, mencatat pesanan, menyajikan hidangan, kasir).',
      'Pengolahan makanan di dapur (persiapan bahan baku/shikomi, memasak sesuai resep standar, plating, sanitasi alat).',
      'Pembersihan dan sanitasi sesuai regulasi HACCP (sterilisasi talenan, pemilahan pisau, kontrol suhu lemari es).',
      'Pemeriksaan dan pelabelan tanggal kedaluwarsa serta pengelolaan bahan baku alergen.'
    ],
    technicalExamName: 'Food Service Industry Skills Proficiency Test (外食業特定技能測定試験)',
    examOrganizer: 'OTAFF (一般社団法人外国人食品産業技能評価機構) & MAFF (農林水産省)',
    passRequirement: 'Lulus tes tertulis CBT (skor ≥ 65%) mencakup Manajemen Kebersihan, Pelayanan Tamu, dan Pengolahan Kuliner + JFT-Basic A2 / JLPT N4.',
    salaryInsight: 'Gaji rata-rata berkisar antara ¥195.000 hingga ¥260.000/bulan (ditambah uang lembur, insentif shift malam, dan makan staf / ma-kanai).'
  },
  officialReferences: [
    {
      title: 'Food Service Industry Specified Skilled Worker Learning Textbook (外食業特定技能学習用テキスト)',
      agency: 'OTAFF & Ministry of Agriculture, Forestry and Fisheries (MAFF)',
      description: 'Buku ajar resmi 3 modul: Manajemen Sanitasi Makanan (HACCP), Pengolahan Masakan, dan Pelayanan Pelanggan.'
    },
    {
      title: 'Food Sanitation Act and HACCP Guidelines (食品衛生法およびHACCPの基準)',
      agency: 'Ministry of Health, Labour and Welfare (MHLW)',
      description: 'Regulasi keamanan pangan, pengendalian mikroorganisme patogen, dan pencegahan alergi makanan di restoran.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG & STRUKTUR RESTORAN JEPANG
    // ------------------------------------------------------------------------
    {
      id: 'food_ch1',
      sectorId: 'food_service',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Struktur Kerja Restoran Jepang & Filosofi Omotenashi',
      japaneseTitle: '外食業の役割とおもてなしの心',
      estimatedMinutes: 25,
      objectives: [
        'Memahami pembagian peran antara staf pelayanan (Hall Staff) dan staf dapur (Kitchen Staff).',
        'Menginternalisasi nilai keramahan tulus khas Jepang (Omotenashi / おもてなし).',
        'Mengenal alur kerja operasional restoran mulai dari persiapan buka (Opening), jam sibuk (Peak Hour), hingga tutup (Closing).'
      ],
      contentExplanation: `
Industri restoran (*Gaishokugyou*) di Jepang sangat dihormati karena mencerminkan budaya keramahan kelas dunia yang dikenal sebagai **Omotenashi (おもてなし)**. Omotenashi berarti melayani pelanggan dengan sepenuh hati, mengantisipasi kebutuhan pelanggan sebelum mereka memintanya, tanpa mengharapkan imbalan langsung (di Jepang tidak ada budaya uang tip/tipping).

Struktur Kerja Restoran dibagi menjadi dua departemen utama:
1. **Departemen Pelayanan (ホール業務 - Hōru Gyōmu)**:
   - Wajah depan restoran.
   - Bertanggung jawab atas kesan pertama tamu, kebersihan meja, kecepatan penyajian, kenyamanan suasana, dan ketepatan transaksi pembayaran di kasir (*reji*).
2. **Departemen Dapur (キッチン業務 / 調理業務 - Kicchin Gyōmu / Chōri Gyōmu)**:
   - Jantung operasional kuliner.
   - Bertanggung jawab atas konsistensi cita rasa sesuai standar SOP restoran (*manuaru*), kecepatan memasak (*supeedo*), keamanan pangan, dan pencegahan limbah bahan baku (*loss reduction*).

Kedua bagian ini dihubungkan oleh koordinasi suara yang tegas dan saling menyahut (*Koe-dashi* / 声出し) untuk memastikan makanan disajikan selagi panas (*atsukan*) atau selagi dingin segar (*tsumetai*).
      `,
      illustrations: [
        {
          title: 'Kontrol Suhu Penyimpanan Dingin & Higiene Restoran',
          japaneseTitle: '温度管理と食中毒予防',
          caption: 'Manajemen batas suhu dingin dan waktu untuk mencegah pertumbuhan bakteri patogen di dapur restoran.',
          url: '/images/ssw/suhu_mikroorganisme.png',
          tag: 'Higiene Dapur'
        },
        {
          title: 'Prosedur Cuci Tangan 6 Langkah Higienis',
          japaneseTitle: '衛生的な手洗い手順',
          caption: 'Standar kebersihan tangan staf dapur dan staf pelayanan meja restoran Jepang.',
          url: '/images/ssw/langkah_cuci_tangan.png',
          tag: 'Sanitasi'
        }
      ],
      keyTerms: [
        {
          japanese: 'おもてなし',
          kana: 'おもてなし',
          romaji: 'omotenashi',
          indonesian: 'Keramahan dan ketulusan pelayanan khas Jepang',
          note: 'Melayani dengan empati tanpa mengharap tip.'
        },
        {
          japanese: 'ホール',
          kana: 'ほーる',
          romaji: 'hōru',
          indonesian: 'Area ruang makan restoran tempat tamu duduk (Dining Hall)',
          note: 'Stafnya disebut Hall Staff (ホールスタッフ).'
        },
        {
          japanese: '厨房 / キッチン',
          kana: 'ちゅうぼう / きっちん',
          romaji: 'chuubou / kicchin',
          indonesian: 'Dapur tempat pengolahan dan memasak makanan',
          note: 'Stafnya disebut Kitchen Staff (調理スタッフ).'
        },
        {
          japanese: '回転率',
          kana: 'かいてんりつ',
          romaji: 'kaitenritsu',
          indonesian: 'Tingkat perputaran meja pelanggan',
          note: 'Kecepatan pembersihan meja (bakkingu) sangat menentukan omset restoran.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Situasi Jam Makan Siang (Lunch Peak Hour) di Restoran Teishoku',
        scenario: 'Pukul 12:15 siang, pelanggan kantor berbondong-bondong datang. Staf hall baru bernama Doni bertugas menyambut dan mendudukkan tamu.',
        dialogue: [
          {
            speaker: 'Doni (Hall Staff)',
            role: 'Staf Hall',
            japanese: 'いらっしゃいませ！何名様でしょうか？',
            kana: 'いらっしゃいませ！なんめいさまでしょうか？',
            romaji: 'Irasshaimase! Nan-mei-sama deshoushou ka?',
            indonesian: 'Selamat datang! Untuk berapa orang meja yang dibutuhkan?'
          },
          {
            speaker: 'Pelanggan',
            role: 'Tamu Kantor',
            japanese: '二人です。奥のテーブル席は空いていますか？',
            kana: 'ふたりです。おくの てーぶるせきは あいていますか？',
            romaji: 'Futari desu. Oku no teeburu-seki wa aite imasu ka?',
            indonesian: 'Dua orang. Apakah meja di bagian dalam ada yang kosong?'
          },
          {
            speaker: 'Doni (Hall Staff)',
            role: 'Staf Hall',
            japanese: 'かしこまりました。ただいまテーブルをご用意いたしますので、少々お待ちくださいませ。',
            kana: 'かしこまりました。ただいま てーぶるを ごよういいたしますので、しょうしょう おまちくださいませ。',
            romaji: 'Kashikomarimashita. Tadaima teeburu wo goyoui itashimasu node, shoushou omachi kudasaimase.',
            indonesian: 'Baik, saya mengerti. Meja sedang kami siapkan sekarang, mohon berkenan menunggu sebentar.'
          }
        ],
        takeaway: 'Gunakan frasa Keigo baku "Kashikomarimashita" (bukan "Wakarimashita") saat menerima permintaan pelanggan di restoran.'
      },
      visualDiagram: {
        title: 'Alur Siklus Pelayanan Tamu di Hall Restoran',
        type: 'steps',
        items: [
          {
            label: '1. Menyambut (Outai)',
            description: '"Irasshaimase!" dengan senyum ramah dan menanyakan jumlah tamu (Nan-mei-sama).'
          },
          {
            label: '2. Memandu Meja (Annai)',
            description: 'Memandu tamu ke meja yang bersih, menyajikan Oshibori (handuk basah) dan air dingin (Ohiya).'
          },
          {
            label: '3. Mencatat Pesanan (Oodaa-tori)',
            description: 'Mengulang pesanan dengan teliti (Fukushou) dan menanyakan konfirmasi alergi makanan.'
          },
          {
            label: '4. Menyajikan (Teikyou) & Kasir (Kaikei)',
            description: 'Menyajikan hidangan dari sisi kiri/kanan tamu dengan hati-hati, lalu transaksi di kasir.'
          }
        ]
      },
      importantPoints: [
        'Di restoran Jepang, "Wakarimashita" dianggap kurang formal kepada tamu; gunakan "Kashikomarimashita".',
        'Sebelum restoran buka (Opening), cek seluruh botol kecap (shouyu-sashi) dan bumbu meja dari noda lengket.',
        'Jangan pernah menyentuh bagian dalam cangkir atau bagian sendok yang masuk ke mulut tamu.'
      ],
      summary: 'Industri restoran Jepang memadukan efisiensi kecepatan kerja di dapur dengan kehangatan budaya Omotenashi di meja pelanggan.',
      practiceQuestions: [
        {
          id: 'food_ch1_q1',
          questionNumber: 1,
          questionText: 'レストランのホールスタッフがお客様から注文を受けた際の返答として、最も適切な言葉遣いを一つ選びなさい。',
          situation: 'Respon bahasa yang paling tepat saat menerima pesanan tamu di restoran.',
          options: [
            '「了解しました（りょうかいしました）。すぐに作ります。」',
            '「わかりました。ちょっと待ってね。」',
            '「かしこまりました。ご注文を繰り返させていただきます。」',
            '「オッケーです。厨房に伝えておきます。」'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. "Kashikomarimashita" adalah ungkapan hormat standar industri kuliner Jepang. "Ryoukai shimashita" hanya digunakan antar-rekan sejajar/militer, sedangkan "Wakarimashita / Okkee" terlalu kasual dan tidak sopan untuk tamu.',
          translation: 'Pilihlah ungkapan bahasa yang paling tepat bagi staf hall saat menerima pesanan dari pelanggan.'
        }
      ],
      officialReference: {
        source: 'OTAFF Official Textbook',
        agency: 'Organization for Food Preparation and Restaurant Services',
        documentTitle: '接客全般の基礎知識 (Pengetahuan Dasar Pelayanan Tamu Restoran)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: KOSAKATA KHUSUS PEKERJAAN & ALERGEN
    // ------------------------------------------------------------------------
    {
      id: 'food_ch2',
      sectorId: 'food_service',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Kosakata Dapur, Bumbu Dashi & 8 Bahan Alergen Wajib',
      japaneseTitle: '厨房器具・調味料・特定原材料（アレルギー8品目）',
      estimatedMinutes: 30,
      objectives: [
        'Menghafal 8 Bahan Alergen Wajib (Tokutei Genzairyou 8 Hinmoku) yang dapat berakibat fatal jika terkonsumsi oleh tamu yang memiliki alergi.',
        'Menguasai nama-nama alat memasak, pisau dapur, dan perlengkapan saji restoran.',
        'Mengenal kosakata teknik memasak dasar Jepang (Kiru, Niru, Yaku, Musu, Ageru).'
      ],
      contentExplanation: `
Dalam industri makanan di Jepang, penanganan **Alergi Makanan (食物アレルギー - Shokumotsu Arerugii)** adalah masalah hidup dan mati (*anaphylactic shock*). 

![8 Bahan Baku Spesifik (Alergen Wajib) & 20 Bahan Rekomendasi Resmi Jepang](/images/ssw/alergen_8_wajib.png)

Hukum Standar Pelabelan Pangan Jepang menetapkan **8 Bahan Baku Spesifik (特定原材料 - Tokutei Genzairyou 8 Hinmoku)** yang WAJIB dicantumkan dan diwaspadai:
1. **Telur (卵 - Tamago)**
2. **Susu (乳 - Nyuu / Miruku)**
3. **Gandum (小麦 - Komugi)**
4. **Soba / Gandum Kuda (そば - Soba)**
5. **Kacang Tanah (落花生 / ピーナッツ - Rakkasei / Piinattsu)**
6. **Udang (えび - Ebi)**
7. **Kepiting (かに - Kani)**
8. **Kenari / Walnut (くるみ - Kurumi)** *(Resmi ditetapkan sebagai bahan wajib ke-8 sejak revisi regulasi CAA / OTAFF 2023–2024)*.

Selain 8 bahan wajib di atas, terdapat **20 Bahan Rekomendasi (特定原材料に準ずるもの 20品目)** seperti kedelai (大豆), daging sapi (牛肉), daging ayam (鶏肉), daging babi (豚肉), salmon (さけ), apel (りんご), pisang (バナナ), dsb.

Jika pelanggan bertanya: *"Apakah saus ini mengandung udang atau gandum?"*, staf hall **DILARANG KERAS MENEBAK-NEBAK**. Selalu katakan: *"Kashikomarimashita. Chuubou no tantousha ni kakunin itashimasu"* (Baik, saya akan konfirmasikan ke penanggung jawab dapur), lalu periksa buku resep alergen resmi restoran (*arerugii hyou*).

Selain itu, staf dapur wajib menguasai 5 metode dasar memasak Jepang yang disingkat **Sa-Shi-Su-Se-So** untuk urutan memasukkan bumbu:
- **Sa (砂糖 - Satou / Gula)**
- **Shi (塩 - Shio / Garam)**
- **Su (酢 - Su / Cuka)**
- **Se (醤油 - Shouyu / Kecap Asin - zaman dahulu ditulis Seuyu)**
- **So (味噌 - Miso / Pasta Kedelai)**
      `,
      illustrations: [
        {
          title: 'Daftar Resmi 8 Bahan Alergen Wajib (特定原材料 8品目)',
          japaneseTitle: '特定原材料 8品目と表示基準',
          caption: 'Daftar bahan baku alergen yang wajib diwaspadai dan dilarang keras menebak kandungannya saat ditanya pelanggan.',
          url: '/images/ssw/alergen_8_wajib.png',
          tag: 'Alergen Wajib'
        }
      ],
      keyTerms: [
        {
          japanese: '食物アレルギー',
          kana: 'しょくもつあれるぎー',
          romaji: 'shokumotsu arerugii',
          indonesian: 'Alergi makanan',
          note: 'Dapat memicu syok anafilaksis dan kematian bila salah saji.'
        },
        {
          japanese: '特定原材料',
          kana: 'とくていげんざいりょう',
          romaji: 'tokutei genzairyou',
          indonesian: 'Bahan pangan alergen wajib berlabel (8 bahan)',
          note: 'Wajib dihafal untuk ujian OTAFF: Telur, Susu, Gandum, Soba, Kacang tanah, Udang, Kepiting, dan Walnut (Kenari).'
        },
        {
          japanese: '包丁',
          kana: 'ほうちょう',
          romaji: 'houchou',
          indonesian: 'Pisau dapur profesional',
          note: 'Santoku-bouchou (serbaguna), Deba-bouchou (ikan), Nakiri-bouchou (sayur).'
        },
        {
          japanese: 'まな板',
          kana: 'まないた',
          romaji: 'manaita',
          indonesian: 'Talenan alas potong',
          note: 'Wajib dipilah warnanya: merah (daging mentah), biru (ikan), hijau (sayur).'
        },
        {
          japanese: '下ごしらえ / 仕込み',
          kana: 'したごしらえ / しこみ',
          romaji: 'shitagoshirae / shikomi',
          indonesian: 'Persiapan awal bahan makanan sebelum jam buka',
          note: 'Mengupas, memotong, memarinasi bumbu.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus Alergi di Meja 4: Tamu Bertanya Kandungan Soba & Gandum',
        scenario: 'Seorang turis asing memesan semangkuk tempura udon dan bertanya apakah adonan tepung tempura mengandung alergen kacang atau soba karena anaknya alergi parah.',
        dialogue: [
          {
            speaker: 'Pelanggan',
            role: 'Tamu',
            japanese: 'すみません、この天ぷらはそば粉（そばこ）やピーナッツ油を使っていますか？子どもに重いアレルギーがあるんです。',
            kana: 'すみません、この てんぷらは そばこや ぴーなっつゆを つかっていますか？こどもに おもい あれるぎーが あるんです。',
            romaji: 'Sumimasen, kono tenpura wa sobako ya piinattsu-yu wo tsukatte imasu ka? Kodomo ni omoi arerugii ga arun desu.',
            indonesian: 'Permisi, apakah tempura ini menggunakan tepung soba atau minyak kacang tanah? Anak saya alergi berat.'
          },
          {
            speaker: 'Reza (Hall Staff)',
            role: 'Staf Hall',
            japanese: '大事なことでございますので、厨房の責任者に原材料表を確認してまいります。少々お待ちいただけますでしょうか。',
            kana: 'だいじなことで ございますので、ちゅうぼうの せきにんしゃに げんざいりょうひょうを かくにんしてまいります。しょうしょう おまちいただけますでしょうか。',
            romaji: 'Daiji na koto de gozaimasu node, chuubou no sekininsha ni genzairyou-hyou wo kakunin shite mairimasu. Shoushou omachi itadakemasu deshou ka.',
            indonesian: 'Karena ini hal yang sangat penting, saya akan segera memeriksa tabel bahan baku ke kepala dapur. Mohon berkenan menunggu sebentar.'
          }
        ],
        takeaway: 'Jangan pernah mengatakan "Mungkin aman kok" (Daijoubu da to omoimasu). Ketidakpastian dalam alergen makanan adalah bahaya pidana di Jepang.'
      },
      visualDiagram: {
        title: '8 Bahan Alergen Pangan Wajib di Jepang (Tokutei Genzairyou)',
        type: 'grid',
        items: [
          { label: '1. Tamago (卵)', description: 'Telur ayam & produk olahan telur.' },
          { label: '2. Nyuu (乳)', description: 'Susu sapi, keju, mentega, krim.' },
          { label: '3. Komugi (小麦)', description: 'Tepung terigu gandum, roti, mie ramen.' },
          { label: '4. Soba (そば)', description: 'Gandum soba (alergen fatal reaksi cepat).' },
          { label: '5. Rakkasei (落花生)', description: 'Kacang tanah / selai kacang.' },
          { label: '6. Ebi (えび)', description: 'Udang dan olahan bumbu krustasea.' },
          { label: '7. Kani (かに)', description: 'Kepiting laut & kepiting air tawar.' },
          { label: '8. Kurumi (くるみ)', description: 'Kacang kenari / walnut (wajib resmi sejak 2023).' }
        ]
      },
      importantPoints: [
        'Hafalkan 8 bahan alergen wajib di luar kepala karena selalu muncul di minimal 3 nomor soal ujian OTAFF.',
        'Minyak bekas menggoreng udang tidak boleh digunakan kembali untuk menggoreng makanan bagi tamu alergi makanan laut.',
        'Urutan bumbu Sa-Shi-Su-Se-So: Gula dimasukkan lebih dulu karena molekulnya lebih besar daripada garam.'
      ],
      summary: 'Pemahaman mendalam mengenai bahan baku, peralatan dapur, dan kepatuhan mutlak terhadap 8 alergen wajib melindungi keselamatan nyawa pelanggan restoran.',
      practiceQuestions: [
        {
          id: 'food_ch2_q1',
          questionNumber: 1,
          questionText: '日本の食品表示法で、パッケージやメニュー等への表示が義務付けられている「特定原材料（8品目）」に含まれないものを一つ選びなさい。',
          situation: 'Bahan yang BUKAN merupakan salah satu dari 8 Alergen Wajib di Jepang.',
          options: [
            'そば（蕎麦）',
            '落花生（ピーナッツ）',
            '大豆（だいず）',
            'くるみ（胡桃）'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Daizu (kedelai) termasuk dalam kategori "Bahan Rekomendasi 20 Bahan (特定原材料に準ずるもの)", BUKAN 8 Bahan Wajib. 8 Bahan Wajib hukum adalah: Telur, Susu, Gandum, Soba, Kacang tanah, Udang, Kepiting, dan Kenari (くるみ).',
          translation: 'Pilihlah satu bahan yang TIDAK termasuk dalam 8 Bahan Baku Spesifik Wajib (Tokutei Genzairyou 8 Hinmoku).'
        }
      ],
      officialReference: {
        source: 'Consumer Affairs Agency (CAA / 消費者庁) & OTAFF',
        agency: 'Food Sanitation Division',
        documentTitle: '食物アレルギー表示に関するガイドライン (Panduan Pelabelan Alergi Makanan)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: KOMUNIKASI & 7 FRASA SAKTI PELAYANAN RESTORAN
    // ------------------------------------------------------------------------
    {
      id: 'food_ch3',
      sectorId: 'food_service',
      category: 'komunikasi',
      chapterNumber: 3,
      title: '7 Frasa Sakti Pelayanan Tamu (Sabbisu 7 Dai Yougo) & Penanganan Komplain',
      japaneseTitle: '接客の基本用語（7大用語）とクレーム対応',
      estimatedMinutes: 30,
      objectives: [
        'Melafalkan dan menguasai 7 Frasa Utama Pelayanan Pelanggan (接客の7大用語) dengan artikulasi dan postur ojigi yang tepat.',
        'Menerapkan tata bahasa Keigo formal saat menyajikan hidangan dan memproses struk kasir.',
        'Menguasai SOP 4 langkah menangani keluhan/komplain pelanggan (Kureemu Taiou) secara tenang dan bertanggung jawab.'
      ],
      contentExplanation: `
Di setiap restoran Jepang, sebelum jam buka operasional, seluruh staf berkumpul untuk *Chourei* (briefing pagi) dan bersama-sama melafalkan **7 Frasa Sakti Pelayanan (接客の7大用語 - Sekkyaku no Nana Dai Yougo)**:

1. **いらっしゃいませ (Irasshaimase)**: Selamat datang! (Membungkuk 30–45 derajat / Ojigi).
2. **かしこまりました (Kashikomarimashita)**: Baik, saya memahami instruksi/pesanan Anda.
3. **少々お待ちくださいませ (Shoushou omachi kudasaimase)**: Mohon berkenan menunggu sebentar.
4. **お待たせいたしました (Omatase itashimashita)**: Maaf telah membuat Anda menunggu (diucapkan saat hidangan tiba di meja).
5. **大変申し訳ございません (Taihen moushiwake gozaimasen)**: Kami sungguh-sungguh memohon maaf (saat terjadi kesalahan/komplain).
6. **恐れ入りますが… (Osoreirimasu ga...)**: Mohon maaf sebelumnya, bisakah Anda... (kata pembuka saat meminta pelanggan melakukan sesuatu, misal: menunggu di antrean).
7. **ありがとうございました。またお越しくださいませ (Arigatou gozaimashita. Mata okoshi kudasaimase)**: Terima kasih banyak. Kami menantikan kehadiran Anda kembali.

**SOP Menangani Komplain (クレーム対応 - Kureemu Taiou)**:
Jika pelanggan komplain (misal: sup dingin, atau ditemukan helai rambut dalam salad):
- **Langkah 1**: Dengarkan sampai tuntas tanpa membantah, lakukan permintaan maaf awal atas ketidaknyamanan yang dialami tamu (*Taihen moushiwake gozaimasen*).
- **Langkah 2**: Segera amankan piring bermasalah dan catat fakta kronologinya.
- **Langkah 3**: Laporkan segera kepada Manajer / Tenchou (*Tenchou ni houkoku*). Jangan mengambil keputusan ganti rugi uang sendiri.
- **Langkah 4**: Manajer bersama staf mendatangi meja dan menawarkan penggantian makanan baru yang higienis.
      `,
      keyTerms: [
        {
          japanese: '接客の7大用語',
          kana: 'せっきゃくのななだいようご',
          romaji: 'sekkyaku no nanadai yougo',
          indonesian: '7 Frasa Utama Pelayanan Restoran',
          note: 'Wajib diucapkan dengan senyum tulus dan intonasi ceria.'
        },
        {
          japanese: 'お待たせいたしました',
          kana: 'おまたせいたしました',
          romaji: 'omatase itashimashita',
          indonesian: 'Terima kasih telah menunggu',
          note: 'Selalu diucapkan saat meletakkan piring di hadapan tamu.'
        },
        {
          japanese: '大変申し訳ございません',
          kana: 'たいへんもうしわけございません',
          romaji: 'taihen moushiwake gozaimasen',
          indonesian: 'Kami sungguh-sungguh meminta maaf',
          note: 'Ungkapan permohonan maaf level tertinggi; hindari sekadar "Gomen nasai".'
        },
        {
          japanese: '店長',
          kana: 'てんちょう',
          romaji: 'tenchou',
          indonesian: 'Manajer restoran / kepala gerai toko',
          note: 'Orang pertama yang wajib dihubungi saat ada komplain atau kecelakaan kerja.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Sup Miso Tumpah Mengenai Celana Pelanggan',
        scenario: 'Saat menyajikan nampan makan siang, pelayan baru Anisa tidak sengaja tersenggol anak kecil sehingga sedikit kuah sup miso mengenai tepi celana pelanggan di meja 2.',
        dialogue: [
          {
            speaker: 'Anisa (Staf Hall)',
            role: 'Staf Hall',
            japanese: '大変申し訳ございません！お洋服は大丈夫でしょうか？すぐに新しいおしぼりをお持ちいたします！',
            kana: 'たいへん もうしわけございません！おようふくは だいじょうぶでしょうか？すぐに あたらしい おしぼりを おもちいたします！',
            romaji: 'Taihen moushiwake gozaimasen! Oyoufuku wa daijoubu deshou ka? Sugu ni atarashii oshibori wo omochi itashimasu!',
            indonesian: 'Saya sungguh-sungguh meminta maaf! Apakah pakaian Bapak baik-baik saja? Saya akan segera membawakan handuk bersih yang baru!'
          },
          {
            speaker: 'Pelanggan',
            role: 'Tamu',
            japanese: 'あちゃー、熱くはなかったけどシミになりそうだね。',
            kana: 'あちゃー、あつくは なかったけど しみになりそうだね。',
            romaji: 'Achaa, atsuku wa nakatta kedo shimi ni narisou da ne.',
            indonesian: 'Waduh, memang tidak terlalu panas sih, tapi sepertinya bakal meninggalkan noda.'
          },
          {
            speaker: 'Tenchou (Manajer)',
            role: 'Manajer Restoran',
            japanese: 'お客様、誠に申し訳ございません。責任者の鈴木でございます。クリーニング代のお支払いをさせていただきます。',
            kana: 'おきゃくさま、まことに もうしわけございません。せきにんしゃの すずきで ございます。くりーにんぐだいの おしはらいを させていただきます。',
            romaji: 'Okyaku-sama, makoto ni moushiwake gozaimasen. Sekininsha no Suzuki de gozaimasu. Kuriiningu-dai no oshiharai wo sasete itadakimasu.',
            indonesian: 'Bapak pelanggan, kami sungguh-sungguh memohon maaf. Saya Suzuki, manajer penanggung jawab restoran. Kami akan menanggung biaya cuci pembersihan (laundry) pakaian Bapak.'
          }
        ],
        takeaway: 'Jangan berdebat soal siapa yang salah. Utamakan keselamatan kulit tamu dari luka bakar, minta maaf dengan tulus, dan panggil manajer sesegera mungkin.'
      },
      visualDiagram: {
        title: '4 Langkah Emas Menangani Komplain Pelanggan Restoran',
        type: 'steps',
        items: [
          {
            label: '1. O-wabi (Meminta Maaf Atas Ketidaknyamanan)',
            description: '"Taihen moushiwake gozaimasen", tunjukkan empati dan dengarkan sampai akhir.'
          },
          {
            label: '2. Jijitsu Kakunin (Konfirmasi Fakta Masalah)',
            description: 'Periksa makanan atau insiden tanpa menyalahkan tamu maupun rekan dapur.'
          },
          {
            label: '3. Tenchou Houkoku (Lapor Cepat ke Manajer)',
            description: 'Beritahu manajer gerai mengenai nomor meja, nama tamu, dan kronologi kejadian.'
          },
          {
            label: '4. Daitai-an (Solusi Penggantian Makanan Baru)',
            description: 'Sajikan hidangan baru yang sempurna secepatnya atau tawarkan alternatif pengganti.'
          }
        ]
      },
      importantPoints: [
        'Dilarang mengatakan "Gomen nasai" atau "Sumimasen" saat menghadapi komplain resmi; gunakan "Taihen moushiwake gozaimasen".',
        'Saat mengantarkan tamu ke meja, jalanlah sekitar 2-3 langkah di depan tamu dan seringlah menengok ke belakang untuk memastikan tamu mengikuti.',
        'Jangan menghitung uang kembalian di bawah meja; hitung secara transparan di hadapan pelanggan di atas nampan kasir (*tsuritosen*).'
      ],
      summary: '7 frasa sakti pelayanan dan ketenangan dalam menangani komplain merupakan tolok ukur profesionalisme staf restoran Jepang dalam mempertahankan reputasi bisnis.',
      practiceQuestions: [
        {
          id: 'food_ch3_q1',
          questionNumber: 1,
          questionText: '料理をお客様のテーブルにお持ちした際、料理を置く瞬間に発する言葉として最も適切なものを一つ選びなさい。',
          situation: 'Ucapan wajib saat menyajikan hidangan di atas meja pelanggan.',
          options: [
            '「どうぞ、食べてください。」',
            '「お待たせいたしました。ご注文の牛丼定食でございます。」',
            '「早く食べないと冷めてしまいますよ。」',
            '「かしこまりました。お水も飲んでください。」'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Standar baku pelayanan adalah menyebutkan: "Omatase itashimashita (Maaf telah menunggu) + Nama hidangan yang dipesan + desu / de gozaimasu".',
          translation: 'Pilihlah ungkapan yang paling tepat saat meletakkan hidangan ke meja pelanggan.'
        }
      ],
      officialReference: {
        source: 'Japan Food Service Association (JF) & OTAFF',
        agency: 'Ministry of Agriculture, Forestry and Fisheries',
        documentTitle: '外食産業における接客マナーとコミュニケーション (Etika Pelayanan Tamu Restoran)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: HIGIENITAS PANGAN & STANDAR HACCP
    // ------------------------------------------------------------------------
    {
      id: 'food_ch4',
      sectorId: 'food_service',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'Sanitasi Restoran, Pencegahan Norovirus & Regulasi HACCP',
      japaneseTitle: '衛生管理の基本とHACCP・食中毒予防の3原則',
      estimatedMinutes: 35,
      objectives: [
        'Menguasai 3 Prinsip Pencegahan Keracunan Makanan (食中毒予防の3原則): Jangan Menempelkan, Jangan Membiarkan Berkembang Biak, dan Musnahkan dengan Panas.',
        'Memahami bahaya virus mematikan Norovirus dan prosedur cuci tangan 2 putaran higienis.',
        'Menerapkan sistem pencatatan HACCP untuk suhu kulkas (< 10°C) dan suhu pusat pemanasan makanan (≥ 75°C selama minimal 1 menit).'
      ],
      contentExplanation: `
Sejak Juni 2021, seluruh fasilitas penyedia makanan di Jepang diwajibkan oleh undang-undang menerapkan standar **HACCP (Hazard Analysis and Critical Control Point)**.

**3 Prinsip Utama Pencegahan Keracunan Makanan (食中毒予防の3原則)**:
1. **Jangan Menempelkan (つけない - Tsukenai) / Pencegahan Kontaminasi Silang**:
   - Cuci tangan higienis dengan sabun sebelum memegang makanan.
   - Bedakan pisau dan talenan (*manaita no irowake*): Talenan merah khusus daging sapi/ayam mentah, talenan biru khusus ikan laut mentah, talenan hijau khusus sayuran segar.
2. **Jangan Membiarkan Berkembang Biak (増やさない - Fuyasanai) / Kontrol Suhu Waktu**:
   - Mikroorganisme berkembang pesat pada suhu antara 20°C hingga 50°C (zona bahaya / danger zone).
   - Simpan bahan baku pada lemari pendingin (*reizouko*) bersuhu di bawah 10°C (ideal < 4°C), atau lemari pembeku (*reitouko*) di bawah -15°C (ideal -18°C).
3. **Musnahkan dengan Panas (やっつける - Yattsukeru) / Sterilisasi Panas**:
   - Panaskan bagian tengah makanan (*chuushin ondo*) hingga mencapai **minimal 75°C selama 1 menit atau lebih**.
   - Khusus untuk kerang tiram (*kaki*) atau makanan laut berisiko Norovirus, panaskan hingga **85°C – 90°C selama minimal 90 detik**.

**Ancaman Utama: Norovirus (ノロウイルス)**
Norovirus adalah virus yang sangat menular dan tahan terhadap alkohol pembersih biasa. Jika seorang staf mengalami diare atau muntah, staf tersebut **DILARANG MASUK KE AREA DAPUR**. Muntahan harus dibersihkan menggunakan larutan desinfektan **Sodium Hipoklorit (次亜塩素酸ナトリウム - Jia-ensosan Natoriumu)** konsentrasi tinggi, bukan sekadar alkohol spray.
      `,
      keyTerms: [
        {
          japanese: '食中毒予防の3原則',
          kana: 'しょくちゅうどくよぼうのさんげんそく',
          romaji: 'shokuchuudoku yobou no san-gensoku',
          indonesian: '3 Prinsip Pencegahan Keracunan Makanan',
          note: 'Tsukenai (jangan tempelkan), Fuyasanai (jangan biarkan biak), Yattsukeru (musnahkan).'
        },
        {
          japanese: 'ノロウイルス',
          kana: 'のろういるす',
          romaji: 'norowirusu',
          indonesian: 'Norovirus',
          note: 'Penyebab utama keracunan massal di musim dingin; tidak mati oleh semprotan alkohol biasa.'
        },
        {
          japanese: '中心温度',
          kana: 'ちゅうしんおんど',
          romaji: 'chuushin ondo',
          indonesian: 'Suhu titik tengah makanan',
          note: 'Wajib diukur dengan termometer tusuk probe: minimal 75°C selama ≥ 1 menit.'
        },
        {
          japanese: '次亜塩素酸ナトリウム',
          kana: 'じあえんそさんなとりうむ',
          romaji: 'jia-ensosan natoriumu',
          indonesian: 'Sodium Hipoklorit / larutan pemutih klorin',
          note: 'Zat kimia resmi untuk mematikan Norovirus dan sanitasi kuman spora.'
        }
      ],
      workplaceCaseStudy: {
        title: 'SOP Cuci Tangan 2 Putaran di Dapur Sebelum Memasak',
        scenario: 'Koki Kenji mengawasi staf baru Bima yang baru saja kembali dari toilet dan hendak memotong daging ayam katsu.',
        dialogue: [
          {
            speaker: 'Kenji (Kepala Koki)',
            role: 'Head Chef',
            japanese: 'ビマくん、トイレの後は「2度洗い（にどあらい）」をしたかい？爪ブラシを使って指先までしっかり擦ったかな？',
            kana: 'ビマくん、といれの あとは「にどあらい」を したかい？つめぶらしを つかって ゆびさきまで しっかり すったかな？',
            romaji: 'Bima-kun, toire no ato wa "nido-arai" wo shita kai? Tsume-burashi wo tsukatte yubisaki made shikkari sutta ka na?',
            indonesian: 'Bima, setelah dari toilet apakah kamu sudah cuci tangan 2 putaran? Sudahkah menyikat ujung kuku dengan sikat kuku?'
          },
          {
            speaker: 'Bima (Staf Dapur)',
            role: 'Staf Kitchen',
            japanese: 'はい！石鹸で30秒洗い、流水ですすいだ後、もう一度同じ手順を繰り返しました。仕上げにアルコール消毒も完了しています！',
            kana: 'はい！せっけんで さんじゅうびょう あらい、りゅうすいで すすいだあと、もういちど おなじ てじゅんを くりかえしました。しあげに あるこーるしょうどくも かんりょうしています！',
            romaji: 'Hai! Sekken de 30-byou arai, ryuusui de susuida ato, mou ichido onaji tejun wo kurikaeshimashita. Shiage ni arukooru shoudoku mo kanryou shite imasu!',
            indonesian: 'Siap! Saya cuci dengan sabun 30 detik, bilas air mengalir, lalu mengulangi prosedur yang sama sekali lagi. Terakhir sudah disemprot alkohol desinfektan!'
          }
        ],
        takeaway: 'Mencuci tangan 2 putaran (2-do arai) setelah dari toilet adalah aturan wajib di restoran Jepang untuk memastikan sisa partikel virus tidak berpindah ke bahan makanan siap saji.'
      },
      visualDiagram: {
        title: 'Standar Kontrol Suhu HACCP Dapur Restoran',
        type: 'warning',
        items: [
          {
            label: 'Lemari Pembeku (Freezer)',
            description: 'Suhu wajib di bawah -15°C (Standar restoran: -18°C s/d -20°C).'
          },
          {
            label: 'Lemari Pendingin (Chiller)',
            description: 'Suhu wajib di bawah 10°C (Standar keamanan: 0°C s/d 4°C).'
          },
          {
            label: 'Zona Bahaya Kuman (Danger Zone)',
            description: '20°C – 50°C: Bakteri Salmonella & E. coli membelah diri setiap 20 menit!'
          },
          {
            label: 'Suhu Matang Pusat (Cooking Core)',
            description: 'Minimal 75°C selama 1 menit (Khusus daging unggas & kerang tiram ≥ 85°C).'
          }
        ]
      },
      importantPoints: [
        'Kain lap meja (Dakin) tidak boleh dicampur dengan kain lap peralatan makan atau lap tangan staf.',
        'Jika tangan terluka lecet, tutup dengan plester kedap air (waterproof) dan WAJIB mengenakan sarung tangan plastik (nitrile gloves) sebelum memegang makanan.',
        'Pengukuran suhu lemari pendingin wajib dicatat dalam lembar logbook HACCP minimal dua kali sehari (pagi dan sore).'
      ],
      summary: 'Regulasi HACCP dan 3 prinsip pencegahan keracunan makanan memastikan setiap hidangan yang disajikan higienis, bebas kontaminasi patogen, dan mematuhi undang-undang pangan Jepang.',
      practiceQuestions: [
        {
          id: 'food_ch4_q1',
          questionNumber: 1,
          questionText: '食中毒予防の「3原則」として、正しい組み合わせを一つ選びなさい。',
          situation: '3 Prinsip pencegahan keracunan makanan di dapur restoran.',
          options: [
            '「見ない」「触らない」「買わない」',
            '「つけない」「増やさない」「やっつける」',
            '「早く作る」「安く売る」「多く食べる」',
            '「冷やす」「温める」「混ぜる」'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. 3 Prinsip Pencegahan Keracunan Makanan resmi Kementerian Kesehatan Jepang adalah: 1. つけない (Jangan menempelkan bakteri/kontaminasi), 2. 増やさない (Jangan membiarkan berkembang biak/kontrol suhu dingin), 3. やっつける (Musnahkan dengan pemanasan matang).',
          translation: 'Pilihlah kombinasi yang benar mengenai "3 Prinsip Pencegahan Keracunan Makanan".'
        }
      ],
      officialReference: {
        source: 'Ministry of Health, Labour and Welfare (MHLW) & MAFF',
        agency: 'Food Safety Committee of Japan',
        documentTitle: '外食事業者向けHACCP導入の手引き (Panduan Penerapan HACCP untuk Pelaku Bisnis Restoran)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: PERSIAPAN UJIAN & BANK SOAL RESMI OTAFF
    // ------------------------------------------------------------------------
    {
      id: 'food_ch5',
      sectorId: 'food_service',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Strategi Kelulusan Ujian Resmi OTAFF Gaishokugyou & Pembahasan Kasus',
      japaneseTitle: '外食業特定技能測定試験の傾向と合格戦略',
      estimatedMinutes: 40,
      objectives: [
        'Memahami proporsi bobot soal ujian OTAFF: Manajemen Sanitasi (HACCP), Pengolahan Masakan, dan Pelayanan Tamu.',
        'Menguasai trik membaca soal studi kasus bergambar yang sering mengecoh.',
        'Mengerjakan simulasi soal pilihan ganda standar ujian resmi dengan skor target ≥ 70%.'
      ],
      contentExplanation: `
Ujian **Food Service Industry Skills Proficiency Test (外食業特定技能測定試験)** diselenggarakan oleh lembaga resmi **OTAFF** melalui sistem tes komputer CBT Prometric di Indonesia dan Jepang.

Struktur Ujian Resmi OTAFF:
- **Waktu Ujian**: 80 Menit.
- **Jumlah Soal**: 45 Soal Pilihan Ganda (Tersedia dalam teks bahasa Jepang berfurigana lengkap dan terjemahan bahasa Indonesia di layar CBT resmi).
- **Kriteria Kelulusan**: Nilai minimal **65%** dari total skor keseluruhan.
- **Komposisi Materi**:
  1. **Manajemen Kebersihan & Sanitasi (衛生管理 - Eisei Kanri)**: Sekitar 35% soal (HACCP, cuci tangan, pencegahan keracunan makanan, mikroorganisme).
  2. **Pengolahan & Masakan (調理 - Chōri)**: Sekitar 35% soal (Teknik potong pisau, urutan bumbu, konversi takaran, penyimpanan bahan baku).
  3. **Pelayanan Pelanggan (接客 - Sekkyaku)**: Sekitar 30% soal (7 frasa sakti, penanganan alergen, pembayaran kasir, penanganan komplain).

Kunci sukses kelulusan: Soal-soal manajemen kebersihan (HACCP) memiliki tingkat kegagalan tertinggi karena memerlukan pemahaman angka pasti (seperti suhu 75°C selama 1 menit, suhu kulkas di bawah 10°C, pemutih 200 ppm untuk muntahan Norovirus). Hafalkan angka-angka parameter kunci ini!
      `,
      keyTerms: [
        {
          japanese: 'OTAFF',
          kana: 'おたっふ',
          romaji: 'otaffu',
          indonesian: 'Lembaga Evaluasi Keterampilan Industri Pangan Asing Resmi Jepang',
          note: 'Penyelenggara tunggal ujian keahlian Food Service dan Food Manufacturing.'
        },
        {
          japanese: '受講票',
          kana: 'じゅこうひょう',
          romaji: 'jukouhyou',
          indonesian: 'Kartu tanda peserta ujian CBT Prometric',
          note: 'Wajib dibawa bersama paspor/KTP asli saat hari ujian.'
        },
        {
          japanese: '合格基準点',
          kana: 'ごうかくきじゅんてん',
          romaji: 'goukaku kijunten',
          indonesian: 'Ambang batas nilai kelulusan',
          note: 'Standar OTAFF adalah minimal 65% nilai total.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Contoh Soal Resmi OTAFF: Kontaminasi Silang Daging Ayam & Sayuran',
        scenario: 'Seorang staf dapur sedang menyiapkan pesanan Ayam Goreng Karaage dan Salad Sayur Mentah di meja kerja yang sama.',
        dialogue: [
          {
            speaker: 'Soal Ujian OTAFF',
            role: 'CBT Prometric',
            japanese: '生鶏肉（なまけいにく）を切った包丁とまな板を使って、そのまま生野菜サラダを切った。この行動が引き起こす食中毒の原因菌として、最も可能性が高いものを一つ選びなさい。',
            kana: 'なまけいにくを きった ほうちょうと まないたを つかって、そのまま なまやさいさらだを きった。この こうどうが ひきおこす しょくちゅうどくの げんいんきんとして、もっとも かのうせいが たかい ものを ひとつ えらびなさい。',
            romaji: 'Nama-keiniku wo kitta houchou to manaita wo tsukatte, sono mama nama-yasai sarada wo kitta. Kono koudou ga hikiokosu shokuchuudoku no gen-inkin toshite, mottomo kanousei ga takai mono wo hitotsu erabinasai.',
            indonesian: 'Setelah memotong daging ayam mentah dengan pisau dan talenan, staf tersebut langsung menggunakannya untuk memotong salad sayur mentah tanpa dicuci terlebih dahulu. Bakteri apa yang paling mungkin mencemari sayuran tersebut?'
          }
        ],
        takeaway: 'Daging ayam mentah secara alami membawa bakteri **Campylobacter (カンピロバクター)** atau Salmonella. Jika alat potong tidak dicuci dan langsung dipakai memotong sayuran yang dimakan mentah, bakteri tersebut akan masuk ke tubuh tamu dan menyebabkan diare berdarah.'
      },
      visualDiagram: {
        title: 'Rangkuman Bakteri & Virus Utama Ujian OTAFF',
        type: 'table',
        items: [
          {
            label: 'Campylobacter (カンピロバクター)',
            description: 'Berasal dari daging ayam mentah / jeroan unggas. Gejala demam & diare akut.',
            highlight: 'Daging ayam mentah'
          },
          {
            label: 'Salmonella (サルモネラ)',
            description: 'Berasal dari cangkang telur mentah dan daging babi. Wajib simpan telur di kulkas.',
            highlight: 'Telur & daging'
          },
          {
            label: 'Staphylococcus aureus (黄色ブドウ球菌)',
            description: 'Berasal dari luka bisul/goresan di tangan manusia. Tahan panas jika racun enterotoksin terbentuk.',
            highlight: 'Luka tangan staf'
          },
          {
            label: 'Norovirus (ノロウイルス)',
            description: 'Berasal dari kerang tiram mentah atau tangan staf pembawa virus. Sangat menular.',
            highlight: 'Kerang & muntahan'
          }
        ]
      },
      importantPoints: [
        'Soal ujian OTAFF disajikan dalam bahasa Jepang sederhana (dengan furigana) dan terjemahan bahasa Indonesia, tetapi istilah teknis seperti "HACCP" dan "Campylobacter" tetap dalam huruf katakana/alfabet.',
        'Wajib memeriksa waktu timer CBT di pojok kanan atas layar komputer Prometric.',
        'Jika ragu menjawab nomor tertentu, gunakan fitur "Flag / Review" untuk menandai dan mengecek ulang sebelum submit final.'
      ],
      summary: 'Kelulusan ujian OTAFF Food Service dapat diraih dengan memahami 3 prinsip pencegahan keracunan makanan, karakteristik bakteri patogen, 8 bahan alergen wajib, serta 7 frasa sakti pelayanan tamu.',
      practiceQuestions: [
        {
          id: 'food_ch5_q1',
          questionNumber: 1,
          questionText: '加熱調理（かねつちょうり）における中心温度の測定に関する説明として、正しいものを一つ選びなさい。',
          situation: 'Ketentuan pengukuran suhu pemanasan inti makanan menurut standar HACCP.',
          options: [
            '食材の表面が温かければ、中心温度を測る必要はない。',
            '中心温度計の針先を食材の最も厚みのある中心部に刺し、75℃以上で1分間以上加熱されていることを確認する。',
            'スープの温度は鍋の底だけを測れば、全体が混ざっていなくても問題ない。',
            '一度沸騰させた料理は、常温の室内に半日放置しても細菌は絶対に繁殖しない。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Standar baku HACCP mengharuskan jarum termometer ditusuk ke bagian paling tebal di tengah makanan hingga menunjukkan suhu minimal 75°C selama 1 menit atau lebih.',
          translation: 'Pilihlah penjelasan yang benar mengenai pengukuran suhu inti pada proses memasak panas.'
        },
        {
          id: 'food_ch5_q2',
          questionNumber: 2,
          questionText: '手のひらに化膿（かのう）した傷がある調理スタッフの行動として、最も適切なものを一つ選びなさい。',
          situation: 'Tindakan yang tepat bagi staf yang memiliki luka bernanah di telapak tangan.',
          options: [
            '傷口を気にせず、素手でそのまま生野菜や刺身を盛り付ける。',
            '絆創膏を貼れば、黄色ブドウ球菌は出ないため普段通り素手で作業する。',
            '責任者に報告し、食品に直接触れる作業から外れるか、耐水性絆創膏の上から手袋を着用して交差汚染を防ぐ。',
            '傷口をアルコールで拭いた後、包丁で傷を切り取ってから仕事に戻る。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Luka bernanah adalah sarang utama bakteri Staphylococcus aureus (黄色ブドウ球菌) yang menghasilkan racun enterotoksin mematikan. Staf wajib melapor ke manajer dan tidak boleh memegang makanan siap saji secara langsung.',
          translation: 'Pilihlah tindakan yang paling tepat bagi staf dapur yang memiliki luka bernanah di telapak tangannya.'
        }
      ],
      officialReference: {
        source: 'OTAFF (外国人食品産業技能評価機構)',
        agency: 'Ministry of Agriculture, Forestry and Fisheries (MAFF)',
        documentTitle: '外食業特定技能測定試験 サンプル問題集 (Kumpulan Soal Contoh Resmi Ujian OTAFF)'
      }
    }
  ],
  examSimulation: {
    title: 'Simulasi Resmi Ujian OTAFF Food Service (Gaishokugyou)',
    subtitle: 'Standar Ujian Teori & Praktik CBT OTAFF / Prometric (Lengkap 5 Soal Komprehensif)',
    timeMinutes: 20,
    passingScorePercentage: 65,
    questions: [
      {
        id: 'food_sim_q1',
        questionNumber: 1,
        questionText: 'ノロウイルスに汚染された調理台や床の消毒に使用する薬剤として、最も適切なものを一つ選びなさい。',
        situation: 'Cairan desinfektan yang efektif mematikan Norovirus pada meja dapur atau lantai.',
        options: [
          'エタノール（消毒用アルコール）',
          '次亜塩素酸ナトリウム（じあえんそさんなとりうむ）希釈液',
          '水道水のみの拭き取り',
          '中性洗剤（食器用洗剤）を薄めた水'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Norovirus tidak memiliki selubung lipid (non-enveloped virus) sehingga kebal terhadap alkohol biasa. Satu-satunya desinfektan kimiawi yang efektif membunuhnya adalah Sodium Hipoklorit (次亜塩素酸ナトリウム).',
        translation: 'Pilihlah zat desinfektan yang paling tepat untuk membersihkan meja dapur yang terkontaminasi Norovirus.'
      },
      {
        id: 'food_sim_q2',
        questionNumber: 2,
        questionText: 'お客様にお冷（おひや：冷たいお水）を提供する際、グラスの持ち方として衛生上最も適切なものを一つ選びなさい。',
        situation: 'Cara memegang gelas air minum tamu yang benar sesuai standar sanitasi.',
        options: [
          'お客様の口が触れるグラスの飲み口（上部）を手で上から掴む。',
          'グラスの中に指を2本入れて内側から引っ掛けて持ち上げる。',
          'グラスの下部または底面を持ち、飲み口に指が触れないようにする。',
          '両手のひらでグラス全体を包み込むようにして手汗をつけながら運ぶ。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Menjaga kebersihan gelas dengan memegang bagian bawah/alas gelas agar bibir gelas yang tersentuh mulut tamu tetap steril dari kuman tangan.',
        translation: 'Pilihlah cara memegang gelas air minum tamu yang paling higienis.'
      },
      {
        id: 'food_sim_q3',
        questionNumber: 3,
        questionText: '冷蔵庫（れいぞうこ）内の食材管理として、先入れ先出し（さきいれさきだし）の正しい説明を一つ選びなさい。',
        situation: 'Prinsip manajemen bahan baku First In First Out (FIFO / 先入れ先出し).',
        options: [
          '新しく入荷した食材を一番手前に置き、古い食材は奥に押し込んでおくこと。',
          '賞味期限が近い古い食材から先に使い、新しく届いた食材は奥に保管すること。',
          '期限に関係なく、自分が一番使いやすい食材だけを毎回選んで使うこと。',
          'すべての食材の賞味期限シールを剥がして、見た目で判断すること。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Prinsip "Saki-ire Saki-dashi" (First In First Out) memastikan bahan baku yang datang lebih awal / tanggal kedaluwarsanya lebih dekat dihabiskan terlebih dahulu guna mencegah makanan basi.',
        translation: 'Pilihlah penjelasan yang benar mengenai prinsip First In First Out (FIFO) di lemari pendingin.'
      },
      {
        id: 'food_sim_q4',
        questionNumber: 4,
        questionText: '会計時にお客様から10,000円札を受け取り、代金が3,500円であった場合の正しい言葉遣いを一つ選びなさい。',
        situation: 'Bahasa Keigo yang tepat saat menerima uang pembayaran di kasir restoran.',
        options: [
          '「1万円からでよろしいですか？はい、お釣り。」',
          '「10,000円お預かりいたします。6,500円のお返しでございます。」',
          '「10,000円ちょうどいただきます。お釣りはいらないですね。」',
          '「3,500円もらいました。残りは財布にしまってください。」'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Standar Keigo kasir resmi: Saat uang diterima lebih dari tagihan, gunakan "〇〇-en o-azukari itashimasu" (Saya terima/titip uang Rp...) lalu serahkan kembalian "〇〇-en no okaeshi de gozaimasu". Frasa "1 man-en kara" adalah kesalahan tata bahasa populer (Baitogo).',
        translation: 'Pilihlah kalimat bahasa yang tepat saat menerima uang tunai pecahan 10.000 yen untuk pembayaran tagihan 3.500 yen.'
      },
      {
        id: 'food_sim_q5',
        questionNumber: 5,
        questionText: '加熱調理したカレーやシチューを大量に鍋ごと室温でゆっくり冷ました場合、増殖しやすい芽胞形成菌（熱に強い菌）として代表的なものを一つ選びなさい。',
        situation: 'Bakteri pembentuk spora tahan panas yang sering berkembang biak di panci kari yang dibiarkan dingin perlahan di suhu ruang.',
        options: [
          'ウェルシュ菌（うぇるしゅきん）',
          'インフルエンザウイルス',
          'ピロリ菌',
          '乳酸菌'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Clostridium perfringens (ウェルシュ菌 / Welsh kin) adalah bakteri anaerob tahan panas pembentuk spora. Saat panci kari didiamkan di suhu ruang, spora bakteri akan berkecambah dan memproduksi racun. Kari yang dimasak banyak harus segera dibagi ke wadah dangkal dan didinginkan cepat dengan es.',
        translation: 'Pilihlah bakteri pembentuk spora tahan panas yang sering berkembang biak pada hidangan berkuah kental (kari/semur) yang dibiarkan dingin perlahan di suhu ruang.'
      }
    ]
  }
};
