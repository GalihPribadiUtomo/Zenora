import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  PenTool, 
  CheckCircle2, 
  Volume2, 
  Filter, 
  BookOpen,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { KANJI_DATA } from '../data/kanjiData';
import { KanjiItem, JLPTLevel, KanjiCategory } from '../types';
import { speakJapanese, sound } from '../utils/audio';

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
  const [searchQuery, setSearchQuery] = useState('');

  // JLPT Level cards data with dynamic counts
  const levels = [
    { 
      level: 'N5', 
      name: 'Pemula', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N5').length, 
      color: 'from-emerald-500 to-teal-600', 
      bg: 'bg-emerald-50 text-emerald-700' 
    },
    { 
      level: 'N4', 
      name: 'Dasar', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N4').length, 
      color: 'from-sky-500 to-blue-600', 
      bg: 'bg-sky-50 text-sky-700' 
    },
    { 
      level: 'N3', 
      name: 'Menengah', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N3').length, 
      color: 'from-amber-500 to-orange-600', 
      bg: 'bg-amber-50 text-amber-700' 
    },
    { 
      level: 'N2', 
      name: 'Menengah Atas', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N2').length, 
      color: 'from-indigo-500 to-purple-600', 
      bg: 'bg-indigo-50 text-indigo-700' 
    },
    { 
      level: 'N1', 
      name: 'Mahir', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N1').length, 
      color: 'from-purple-500 to-fuchsia-600', 
      bg: 'bg-purple-50 text-purple-700' 
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
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      k.kanji.toLowerCase().includes(q) ||
      k.reading.toLowerCase().includes(q) ||
      k.meaning.toLowerCase().includes(q) ||
      k.onyomi.toLowerCase().includes(q) ||
      k.kunyomi.toLowerCase().includes(q);
    return matchesLevel && matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8 text-left pb-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBF8] border border-[#29264B]/20 text-[#29264B] text-xs font-black uppercase tracking-wider mb-2 font-mono">
            Kanji Hub · {KANJI_DATA.length} Kanji Lengkap N5 & N4
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#29264B] tracking-tight flex items-center gap-3 font-['Manrope']">
            Kanji · 漢字
          </h1>
          <p className="text-[#77738A] text-sm mt-1">
            Pelajari {KANJI_DATA.length} Kanji dengan panduan cara nulis berurutan, sistem bacaan lengkap Onyomi & Kunyomi, dan kanvas jiplak interaktif.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#77738A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari Kanji (karakter, On, Kun, arti)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#E9E2F0] text-sm text-[#29264B] placeholder-[#77738A]/60 focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/40 focus:border-[#6555A5] shadow-2xs transition-all"
            />
          </div>
        </div>
      </div>

      {/* JLPT LEVEL CARDS */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#77738A] uppercase tracking-wider">
            Pilih Level JLPT
          </h3>
          {selectedLevel !== 'ALL' && (
            <button
              onClick={() => setSelectedLevel('ALL')}
              className="text-xs font-bold text-[#6555A5] hover:text-[#29264B] transition-colors"
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
                className={`card-soft p-4 rounded-3xl cursor-pointer border transition-all text-left relative overflow-hidden group ${
                  isSelected 
                    ? 'border-[#6555A5] ring-2 ring-[#6555A5]/15 shadow-md bg-white' 
                    : 'border-[#E9E2F0] bg-white hover:border-[#6555A5]/40 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r ${lvl.color} text-white shadow-xs`}>
                    {lvl.level}
                  </span>
                  <span className="text-[11px] font-bold text-[#77738A]">
                    {lvl.name}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="text-2xl font-black text-[#29264B] font-['Manrope']">
                    {totalInLevel} <span className="text-xs font-bold text-[#77738A]">Kanji</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 w-full bg-[#F0EBF8] rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${totalInLevel > 0 ? (learnedInLevel / totalInLevel) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-[#77738A] mt-1 block">
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
          <h3 className="text-xs font-bold text-[#77738A] uppercase tracking-wider">
            Filter Kategori Tema
          </h3>
          {selectedCategory !== 'Semua' && (
            <button
              onClick={() => setSelectedCategory('Semua')}
              className="text-xs font-bold text-[#6555A5] hover:text-[#29264B] transition-colors"
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
                ? 'bg-gradient-to-r from-[#29264B] to-[#6555A5] text-white shadow-xs'
                : 'bg-white hover:bg-[#F8F3FA] text-[#77738A] border border-[#E9E2F0]'
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
                    ? 'bg-gradient-to-r from-[#29264B] to-[#6555A5] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F8F3FA] text-[#77738A] border border-[#E9E2F0]'
                }`}
              >
                <span>{cat}</span>
                <span className="opacity-75 text-[10px] font-mono ml-0.5">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* KANJI CARDS GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-[#77738A]">
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
                className={`card-soft card-soft-hover p-4 sm:p-4 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between group ${
                  isLearned ? 'border-emerald-200 bg-emerald-50/20' : 'border-[#E9E2F0] bg-white'
                }`}
              >
                <div>
                  {/* Top: ID & Strokes */}
                  <div className="flex items-center justify-between text-[#77738A] text-xs mb-1">
                    <span className="font-mono text-[11px] font-bold">#{kanji.id}</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[#F0EBF8] text-[#77738A]">
                      {kanji.strokeCount}画
                    </span>
                  </div>

                  {/* Big Kanji Character */}
                  <div className="py-2 text-center">
                    <span className="kanji-font text-5xl sm:text-6xl font-black text-[#29264B] group-hover:scale-110 transition-transform inline-block select-none">
                      {kanji.kanji}
                    </span>
                  </div>

                  {/* Main Reading & Meaning */}
                  <div className="text-center mt-1">
                    <p className="text-sm font-black text-[#29264B] font-['Manrope']">
                      {kanji.reading}
                    </p>
                    <p className="text-xs font-bold text-[#6555A5] truncate mt-0.5">
                      {kanji.meaning}
                    </p>
                  </div>

                  {/* ONYOMI & KUNYOMI MINI BADGES */}
                  <div className="mt-2.5 pt-2 border-t border-[#E9E2F0] space-y-1">
                    {kanji.onyomi && kanji.onyomi !== '—' && (
                      <div className="flex items-center gap-1 text-[10px] text-[#29264B] bg-[#F0EBF8] px-1.5 py-0.5 rounded-md font-mono border border-[#6555A5]/20" title={`Onyomi: ${kanji.onyomi}`}>
                        <span className="font-black text-[#6555A5]">音</span>
                        <span className="truncate">{kanji.onyomi}</span>
                      </div>
                    )}
                    {kanji.kunyomi && kanji.kunyomi !== '—' && (
                      <div className="flex items-center gap-1 text-[10px] text-[#29264B] bg-[#EDF5F9] px-1.5 py-0.5 rounded-md font-mono border border-[#85B9D1]/30" title={`Kunyomi: ${kanji.kunyomi}`}>
                        <span className="font-black text-[#85B9D1]">訓</span>
                        <span className="truncate">{kanji.kunyomi}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: Cara Nulis Pill & Checkmark */}
                <div className="mt-3 pt-2.5 border-t border-[#E9E2F0] flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#6555A5] group-hover:text-[#29264B] transition-colors">
                    <PenTool className="w-3 h-3 text-[#6555A5]" />
                    <span>Cara Nulis</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLearned(kanji.id);
                      if (!isLearned) sound.playCorrect();
                    }}
                    className={`p-1 rounded-md transition-colors ${
                      isLearned ? 'text-emerald-600' : 'text-slate-300 hover:text-emerald-500'
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
