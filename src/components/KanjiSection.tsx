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
  onSelectKanji: (kanji: KanjiItem, list?: KanjiItem[]) => void;
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
  const [kanjiFontStyle, setKanjiFontStyle] = useState<'klee' | 'serif' | 'sans'>('klee');

  // JLPT Level cards data with Palet 04 Midnight Navy styling
  const levels = [
    { 
      level: 'N5', 
      name: 'Pemula', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N5').length, 
      color: 'from-[var(--bg-surface)] to-[var(--bg-elevated)]', 
      bg: 'bg-[var(--bg-elevated)] text-[#3978D6]' 
    },
    { 
      level: 'N4', 
      name: 'Dasar', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N4').length, 
      color: 'from-[#2456A6] to-[#3978D6]', 
      bg: 'bg-[var(--bg-surface)] text-[#3978D6]' 
    },
    { 
      level: 'N3', 
      name: 'Menengah', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N3').length, 
      color: 'from-[var(--bg-elevated)] to-[#3978D6]', 
      bg: 'bg-[var(--bg-surface)] text-[var(--text-secondary)]' 
    },
    { 
      level: 'N2', 
      name: 'Menengah Atas', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N2').length, 
      color: 'from-[var(--bg-surface)] to-[var(--bg-elevated)]', 
      bg: 'bg-[var(--bg-sidebar)] text-[var(--text-primary)]' 
    },
    { 
      level: 'N1', 
      name: 'Mahir', 
      count: KANJI_DATA.filter(k => k.jlpt === 'N1').length, 
      color: 'from-[var(--bg-surface)] via-[var(--bg-elevated)] to-[#3978D6]', 
      bg: 'bg-[var(--bg-elevated)] text-[#3978D6]' 
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
      <div className="bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)] rounded-3xl border border-[#3978D6]/25 shadow-[0_20px_60px_-15px_rgba(8,21,47,0.9)] p-6 sm:p-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[#3978D6]/30 text-[#3978D6] text-xs font-black uppercase tracking-wider mb-2 font-mono">
              Kanji Hub · {KANJI_DATA.length} Kanji Lengkap N5 & N4
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight flex items-center gap-3 font-['Manrope']">
              Kanji · 漢字
            </h1>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              Pelajari {KANJI_DATA.length} Kanji dengan panduan cara nulis berurutan, sistem bacaan lengkap Onyomi & Kunyomi, dan kanvas jiplak interaktif.
            </p>
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari Kanji (karakter, On, Kun, arti)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* JLPT LEVEL CARDS */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
            Pilih Level JLPT
          </h3>
          {selectedLevel !== 'ALL' && (
            <button
              onClick={() => setSelectedLevel('ALL')}
              className="text-xs font-bold text-[#3978D6] hover:text-[var(--text-primary)] transition-colors"
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
                className={`p-4 rounded-3xl cursor-pointer border transition-all text-left relative overflow-hidden group shadow-[0_4px_16px_rgba(8,21,47,0.4)] ${
                  isSelected 
                    ? 'border-[#3978D6] ring-2 ring-[#3978D6]/30 bg-[var(--bg-elevated)]' 
                    : 'border-[#3978D6]/20 bg-[var(--bg-surface)] hover:border-[#3978D6]/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-1 rounded-xl text-xs font-black bg-gradient-to-r ${lvl.color} text-[var(--text-primary)] border border-[#3978D6]/30 shadow-xs`}>
                    {lvl.level}
                  </span>
                  <span className="text-[11px] font-bold text-[var(--text-muted)]">
                    {lvl.name}
                  </span>
                </div>

                <div className="mt-2">
                  <div className="text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                    {totalInLevel} <span className="text-xs font-bold text-[var(--text-muted)]">Kanji</span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 w-full bg-[var(--bg-sidebar)] border border-[#3978D6]/15 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${totalInLevel > 0 ? (learnedInLevel / totalInLevel) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-[var(--text-muted)] mt-1 block">
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
          <h3 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
            Filter Kategori Tema
          </h3>
          {selectedCategory !== 'Semua' && (
            <button
              onClick={() => setSelectedCategory('Semua')}
              className="text-xs font-bold text-[#3978D6] hover:text-[var(--text-primary)] transition-colors"
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
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/20'
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
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                    : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/20'
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
      <div className="p-4 rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3978D6]" />
            <h3 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider font-['Manrope']">
              Filter Bab Minna no Nihongo (Bab 1–50)
            </h3>
          </div>
          {selectedBab !== 'ALL' && (
            <button
              onClick={() => setSelectedBab('ALL')}
              className="text-xs font-bold text-[#3978D6] hover:text-[var(--text-primary)] transition-colors text-left"
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
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                : 'bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/15'
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
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                    : 'bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/15'
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-bold text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="text-[var(--text-primary)]">Menampilkan {filteredKanji.length} Kanji</span>
            <span className="text-[var(--text-muted)]/60">•</span>
            <span className="text-[#3978D6]">Klik kartu untuk panduan cara nulis & kanvas latihan</span>
          </div>

          {/* SAKELAR GAYA FONT KANJI */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-surface)] border border-[#3978D6]/25 self-start sm:self-auto shadow-xs">
            <span className="text-[10px] uppercase font-mono text-[#3978D6] px-2 font-black">Font:</span>
            <button
              onClick={() => {
                sound.playClick();
                setKanjiFontStyle('klee');
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                kanjiFontStyle === 'klee'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              title="Font Buku Teks Edukasi Jepang (Goresan tangan sangat jelas, presisi dan alami)"
            >
              Edukasi (Klee)
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setKanjiFontStyle('serif');
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                kanjiFontStyle === 'serif'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              title="Font Kaligrafi Tradisional Mincho (Tajam, bersudut elegan dan kontras)"
            >
              Kaligrafi (Mincho)
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setKanjiFontStyle('sans');
              }}
              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                kanjiFontStyle === 'sans'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
              title="Font Cetak Modern Gothic (Sans-serif tebal)"
            >
              Cetak (Gothic)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredKanji.map((kanji) => {
            const isLearned = learnedKanjiIds.includes(kanji.id);

            return (
              <div
                key={kanji.id}
                onClick={() => {
                  sound.playClick();
                  onSelectKanji(kanji, filteredKanji);
                }}
                className={`p-4 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between group shadow-[var(--card-shadow)] ${
                  isLearned
                    ? 'border-[var(--success-border)] bg-[var(--success-bg)]'
                    : 'border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--primary)] hover:shadow-[var(--card-hover-shadow)]'
                }`}
              >
                <div>
                  {/* Top: ID, Bab & Strokes */}
                  <div className="flex items-center justify-between text-[var(--text-muted)] text-xs mb-1">
                    <span className="font-mono text-[11px] font-bold text-[var(--primary)]">#{kanji.id}</span>
                    <div className="flex items-center gap-1">
                      {kanji.bab && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border)]">
                          Bab {kanji.bab}
                        </span>
                      )}
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[var(--primary)] border border-[var(--border)] font-mono">
                        {kanji.strokeCount}画
                      </span>
                    </div>
                  </div>

                  {/* Big Kanji Character — Jelas, Tajam, dan Mengikuti Tema */}
                  <div className="py-2.5 text-center flex items-center justify-center min-h-[96px]">
                    <span className={`text-6xl sm:text-7xl ${
                      kanjiFontStyle === 'klee' ? 'kanji-font-klee font-semibold' :
                      kanjiFontStyle === 'serif' ? 'kanji-font-serif font-bold' :
                      'kanji-font-sans font-bold'
                    } text-[var(--text-primary)] group-hover:scale-110 group-hover:text-[var(--primary)] transition-all inline-block select-none leading-none`}>
                      {kanji.kanji}
                    </span>
                  </div>

                  {/* Main Reading & Meaning */}
                  <div className="text-center mt-1">
                    <p className="text-base font-extrabold text-[var(--text-primary)] font-['Manrope'] tracking-wide">
                      {kanji.reading}
                    </p>
                    <p className="text-xs font-bold text-[var(--primary)] truncate mt-0.5">
                      {kanji.meaning}
                    </p>
                  </div>

                  {/* ONYOMI & KUNYOMI MINI BADGES (Tema-aware & Kontras Tinggi) */}
                  <div className="mt-3 pt-2.5 border-t border-[var(--border)] space-y-1.5">
                    {kanji.onyomi && kanji.onyomi !== '—' && (
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] bg-[var(--bg-elevated)] px-2 py-1 rounded-xl border border-[var(--border)]" title={`Onyomi: ${kanji.onyomi}`}>
                        <span className="font-black text-[10px] px-1 py-0.2 rounded bg-[var(--bg-card)] text-[var(--primary)] border border-[var(--border)] shrink-0">音</span>
                        <span className="font-bold font-['Noto_Sans_JP'] tracking-wider truncate text-[var(--text-primary)]">{kanji.onyomi}</span>
                      </div>
                    )}
                    {kanji.kunyomi && kanji.kunyomi !== '—' && (
                      <div className="flex items-center gap-1.5 text-xs text-[var(--text-primary)] bg-[var(--bg-elevated)] px-2 py-1 rounded-xl border border-[var(--border)]" title={`Kunyomi: ${kanji.kunyomi}`}>
                        <span className="font-black text-[10px] px-1 py-0.2 rounded bg-[var(--bg-card)] text-[var(--furigana-color)] border border-[var(--border)] shrink-0">訓</span>
                        <span className="font-bold font-['Noto_Sans_JP'] tracking-wider truncate text-[var(--text-primary)]">{kanji.kunyomi}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: Cara Nulis Pill & Checkmark */}
                <div className="mt-3 pt-2.5 border-t border-[#3978D6]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-[#3978D6] group-hover:text-[var(--text-primary)] transition-colors">
                    <PenTool className="w-3 h-3 text-[#3978D6]" />
                    <span>Cara Nulis</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLearned(kanji.id);
                      if (!isLearned) sound.playCorrect();
                    }}
                    className={`p-1 rounded-md transition-colors ${
                      isLearned ? 'text-emerald-400' : 'text-[var(--text-muted)]/40 hover:text-emerald-400'
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
