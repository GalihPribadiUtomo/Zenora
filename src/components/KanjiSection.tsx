import React, { useState } from 'react';
import { 
  Search, 
  PenTool, 
  CheckCircle2
} from 'lucide-react';
import { KANJI_DATA } from '../data/kanjiData';
import { KanjiItem, JLPTLevel, KanjiCategory } from '../types';
import { sound } from '../utils/audio';

interface KanjiSectionProps {
  onSelectKanji: (kanji: KanjiItem) => void;
  learnedKanjiIds: number[];
  onToggleLearned: (id: number) => void;
}

export const KanjiSection: React.FC<KanjiSectionProps> = ({
  onSelectKanji,
  learnedKanjiIds,
  onToggleLearned,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'ALL'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [selectedBab, setSelectedBab] = useState<number | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // JLPT Level cards data with Palet 04 Midnight Navy styling
  const levels = [
    { 
      level: 'N5', 
      name: 'Pemula', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N5').length, 
      color: 'from-[#16294A] to-[#1F3760]', 
      bg: 'bg-[#1F3760] text-[#8FB4E3]' 
    },
    { 
      level: 'N4', 
      name: 'Dasar', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N4').length, 
      color: 'from-[#1F3760] to-[#274474]', 
      bg: 'bg-[#16294A] text-[#8FB4E3]' 
    },
    { 
      level: 'N3', 
      name: 'Menengah', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N3').length, 
      color: 'from-[#1F3760] to-[#8FB4E3]', 
      bg: 'bg-[#16294A] text-[#CBD8EC]' 
    },
    { 
      level: 'N2', 
      name: 'Menengah Atas', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N2').length, 
      color: 'from-[#16294A] to-[#274474]', 
      bg: 'bg-[#0C1B33] text-[#EEF1F6]' 
    },
    { 
      level: 'N1', 
      name: 'Mahir', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N1').length, 
      color: 'from-[#16294A] via-[#1F3760] to-[#8FB4E3]', 
      bg: 'bg-[#1F3760] text-[#8FB4E3]' 
    },
  ];

  // All distinct categories
  const categories: KanjiCategory[] = [
    'Angka & Waktu',
    'Alam & Cuaca',
    'Manusia & Keluarga',
    'Tempat & Bangunan',
    'Makanan & Minuman',
    'Aktivitas & Kata Kerja',
    'Tubuh',
    'Arah & Posisi',
    'Warna & Benda',
    'Sifat & Keadaan',
    'Bunga & Tumbuhan',
    'Hewan'
  ];

  // Filter Kanji
  const filteredKanji = KANJI_DATA.filter((k) => {
    const matchesLevel = selectedLevel === 'ALL' || k.jlpt === selectedLevel;
    const matchesCat = selectedCategory === 'Semua' || k.category === selectedCategory;
    const matchesBab = selectedBab === 'ALL' || k.bab === selectedBab;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      k.kanji.toLowerCase().includes(q) ||
      k.reading.toLowerCase().includes(q) ||
      k.meaning.toLowerCase().includes(q) ||
      k.onyomi.toLowerCase().includes(q) ||
      k.kunyomi.toLowerCase().includes(q);
    return matchesLevel && matchesCat && matchesBab && matchesSearch;
  });

  return (
    <div className="space-y-8 text-left pb-16">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] rounded-3xl border border-[#8FB4E3]/25 shadow-[0_20px_60px_-15px_rgba(12,27,51,0.9)] p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16294A] border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-black uppercase tracking-wider mb-2 font-mono">
              Kanji Hub · {KANJI_DATA.length} Kanji Lengkap N5 & N4
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#EEF1F6] tracking-tight flex items-center gap-3 font-['Manrope']">
              Kanji · 漢字
            </h1>
            <p className="text-[#8793A8] text-sm mt-1">
              Pelajari {KANJI_DATA.length} Kanji dengan panduan cara nulis berurutan, sistem bacaan lengkap Onyomi & Kunyomi, dan kanvas jiplak interaktif.
            </p>
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[#8793A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Kanji (karakter, On, Kun, arti)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/25 text-sm text-[#EEF1F6] placeholder-[#8793A8] focus:outline-hidden focus:ring-2 focus:ring-[#8FB4E3]/30 focus:border-[#8FB4E3] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* JLPT LEVEL CARDS */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#8793A8] uppercase tracking-wider">
            Pilih Level JLPT
          </h3>
          {selectedLevel !== 'ALL' && (
            <button
              onClick={() => setSelectedLevel('ALL')}
              className="text-xs font-bold text-[#8FB4E3] hover:text-[#EEF1F6] transition-colors"
            >
              Lihat Semua Level ({KANJI_DATA.length} Kanji)
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
          {levels.map((lvl) => {
            const isSelected = selectedLevel === lvl.level;
            const learnedInLevel = KANJI_DATA.filter(k => k.jlpt === lvl.level && learnedKanjiIds.includes(k.id)).length;
            const totalInLevel = lvl.count;

            return (
              <div
                key={lvl.level}
                onClick={() => {
                  sound.playClick();
                  setSelectedLevel(isSelected ? 'ALL' : (lvl.level as JLPTLevel));
                }}
                className={`p-4 rounded-3xl cursor-pointer border transition-all text-left relative overflow-hidden group shadow-[0_4px_16px_rgba(12,27,51,0.4)] ${
                  isSelected 
                    ? 'border-[#8FB4E3] ring-2 ring-[#8FB4E3]/30 bg-[#1F3760]' 
                    : 'border-[#8FB4E3]/20 bg-[#16294A] hover:border-[#8FB4E3]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r ${lvl.color} text-[#EEF1F6] border border-[#8FB4E3]/30 shadow-xs`}>
                    {lvl.level}
                  </span>
                  <span className="text-[11px] font-bold text-[#8793A8]">
                    {lvl.name}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="text-2xl font-black text-[#EEF1F6] font-['Manrope']">
                    {totalInLevel} <span className="text-xs font-bold text-[#8793A8]">Kanji</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 w-full bg-[#0C1B33] border border-[#8FB4E3]/15 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${totalInLevel > 0 ? (learnedInLevel / totalInLevel) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-[#8793A8] mt-1 block">
                    {learnedInLevel} dihafal
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* KATEGORI FILTER */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#8793A8] uppercase tracking-wider">
            Filter Kategori Tema
          </h3>
          {selectedCategory !== 'Semua' && (
            <button
              onClick={() => setSelectedCategory('Semua')}
              className="text-xs font-bold text-[#8FB4E3] hover:text-[#EEF1F6] transition-colors"
            >
              Semua Kategori
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              sound.playClick();
              setSelectedCategory('Semua');
            }}
            className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all ${
              selectedCategory === 'Semua'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                : 'bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/20'
            }`}
          >
            Semua ({KANJI_DATA.length})
          </button>

          {categories.map((cat) => {
            const count = KANJI_DATA.filter(k => k.category === cat && (selectedLevel === 'ALL' || k.jlpt === selectedLevel)).length;
            if (count === 0 && selectedLevel !== 'ALL') return null;

            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                    : 'bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/20'
                }`}
              >
                <span>{cat}</span>
                <span className="opacity-75 text-[10px] font-mono ml-0.5">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FILTER BAB MINNA NO NIHONGO (BAB 1–50) */}
      <div className="p-4 rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8FB4E3]" />
            <h3 className="text-xs font-bold text-[#EEF1F6] uppercase tracking-wider font-['Manrope']">
              Filter Bab Minna no Nihongo (Bab 1–50)
            </h3>
          </div>
          {selectedBab !== 'ALL' && (
            <button
              onClick={() => setSelectedBab('ALL')}
              className="text-xs font-bold text-[#8FB4E3] hover:text-[#EEF1F6] transition-colors text-left"
            >
              Reset Filter Bab (Tampilkan Semua)
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => {
              sound.playClick();
              setSelectedBab('ALL');
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedBab === 'ALL'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                : 'bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/15'
            }`}
          >
            Semua Bab
          </button>
          {Array.from({ length: 50 }, (_, i) => i + 1).map((b) => {
            const count = KANJI_DATA.filter((k) => k.bab === b).length;
            const isSelected = selectedBab === b;
            return (
              <button
                key={b}
                onClick={() => {
                  sound.playClick();
                  setSelectedBab(isSelected ? 'ALL' : b);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                    : 'bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/15'
                }`}
              >
                <span>Bab {b}</span>
                {count > 0 && (
                  <span className="text-[10px] opacity-75 font-mono">({count})</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* KANJI CARDS GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-[#8793A8]">
          <span>Menampilkan {filteredKanji.length} Kanji</span>
          <span>Klik kartu untuk panduan cara nulis & kanvas latihan</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredKanji.map((kanji) => {
            const isLearned = learnedKanjiIds.includes(kanji.id);

            return (
              <div
                key={kanji.id}
                onClick={() => {
                  sound.playClick();
                  onSelectKanji(kanji);
                }}
                className={`p-4 sm:p-4 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between group shadow-[0_4px_16px_rgba(12,27,51,0.4)] ${
                  isLearned ? 'border-emerald-500/30 bg-[#0F3025]' : 'border-[#8FB4E3]/20 bg-[#16294A] hover:border-[#8FB4E3]/50'
                }`}
              >
                <div>
                  {/* Top: ID, Bab & Strokes */}
                  <div className="flex items-center justify-between text-[#8793A8] text-xs mb-1">
                    <span className="font-mono text-[11px] font-bold">#{kanji.id}</span>
                    <div className="flex items-center gap-1">
                      {kanji.bab && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#0C1B33] text-[#CBD8EC] border border-[#8FB4E3]/25">
                          Bab {kanji.bab}
                        </span>
                      )}
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#0C1B33] text-[#8FB4E3] border border-[#8FB4E3]/20">
                        {kanji.strokeCount}画
                      </span>
                    </div>
                  </div>

                  {/* Big Kanji Character */}
                  <div className="py-2 text-center">
                    <span className="kanji-font text-5xl sm:text-6xl font-black text-[#EEF1F6] group-hover:scale-110 group-hover:text-[#8FB4E3] transition-all inline-block select-none">
                      {kanji.kanji}
                    </span>
                  </div>

                  {/* Main Reading & Meaning */}
                  <div className="text-center mt-1">
                    <p className="text-sm font-black text-[#EEF1F6] font-['Manrope']">
                      {kanji.reading}
                    </p>
                    <p className="text-xs font-bold text-[#8FB4E3] truncate mt-0.5">
                      {kanji.meaning}
                    </p>
                  </div>

                  {/* ONYOMI & KUNYOMI MINI BADGES */}
                  <div className="mt-2.5 pt-2 border-t border-[#8FB4E3]/15 space-y-1">
                    {kanji.onyomi && kanji.onyomi !== '—' && (
                      <div className="flex items-center gap-1 text-[10px] text-[#CBD8EC] bg-[#0C1B33] px-1.5 py-0.5 rounded-md font-mono border border-[#8FB4E3]/20" title={`Onyomi: ${kanji.onyomi}`}>
                        <span className="font-black text-[#8FB4E3]">音</span>
                        <span className="truncate">{kanji.onyomi}</span>
                      </div>
                    )}
                    {kanji.kunyomi && kanji.kunyomi !== '—' && (
                      <div className="flex items-center gap-1 text-[10px] text-[#CBD8EC] bg-[#1F3760]/70 px-1.5 py-0.5 rounded-md font-mono border border-[#8FB4E3]/20" title={`Kunyomi: ${kanji.kunyomi}`}>
                        <span className="font-black text-[#EEF1F6]">訓</span>
                        <span className="truncate">{kanji.kunyomi}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: Cara Nulis Pill & Checkmark */}
                <div className="mt-3 pt-2.5 border-t border-[#8FB4E3]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#8FB4E3] group-hover:text-[#EEF1F6] transition-colors">
                    <PenTool className="w-3 h-3 text-[#8FB4E3]" />
                    <span>Cara Nulis</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLearned(kanji.id);
                      if (!isLearned) sound.playCorrect();
                    }}
                    className={`p-1 rounded-md transition-colors ${
                      isLearned ? 'text-emerald-400' : 'text-[#8793A8]/40 hover:text-emerald-400'
                    }`}
                    title={isLearned ? 'Sudah hafal' : 'Tandai sudah hafal'}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
