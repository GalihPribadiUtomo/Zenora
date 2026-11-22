import React, { useState, useMemo } from 'react';
import { 
  Volume2, 
  Sparkles, 
  BookOpen, 
  Search, 
  Filter,
  Layers,
  Pencil,
  Check
} from 'lucide-react';
import { KanaItem, KanaType, KanaGroup, KanaRow } from '../types';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';
import { speakJapanese, sound } from '../utils/audio';
import { KanaDetailModal } from './KanaDetailModal';
import { KanaPracticeModal } from './KanaPracticeModal';
import { KanaEducationalGuides } from './KanaEducationalGuides';

interface KanaSectionProps {
  learnedKanaChars: string[];
  onToggleLearned: (char: string) => void;
}

export const KanaSection: React.FC<KanaSectionProps> = ({
  learnedKanaChars,
  onToggleLearned
}) => {
  const [activeType, setActiveType] = useState<KanaType>('hiragana');
  const [activeGroup, setActiveGroup] = useState<KanaGroup | 'all'>('gojuon');
  const [selectedKanaModal, setSelectedKanaModal] = useState<KanaItem | null>(null);
  const [isPracticeModalOpen, setIsPracticeModalOpen] = useState(false);
  const [activeViewSection, setActiveViewSection] = useState<'table' | 'guides'>('table');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'semua' | 'belum' | 'hafal'>('semua');

  const currentDataset = activeType === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;
  const totalChars = currentDataset.length;

  // Count learned characters for current active type
  const learnedCount = currentDataset.filter(k => learnedKanaChars.includes(k.char)).length;
  const unmasteredCount = totalChars - learnedCount;
  const progressPct = totalChars > 0 ? Math.round((learnedCount / totalChars) * 100) : 0;

  // Filtered dataset based on search, group, and mastery status
  const filteredData = useMemo(() => {
    return currentDataset.filter(item => {
      // Group filter
      if (activeGroup !== 'all' && item.group !== activeGroup) {
        return false;
      }

      // Mastery filter
      const isLearned = learnedKanaChars.includes(item.char);
      if (filterStatus === 'hafal' && !isLearned) return false;
      if (filterStatus === 'belum' && isLearned) return false;

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchChar = item.char.toLowerCase().includes(query);
        const matchRomaji = item.romaji.toLowerCase().includes(query);
        const matchMeaningEn = item.example?.meaningEn?.toLowerCase().includes(query);
        const matchMeaningId = item.example?.meaningId?.toLowerCase().includes(query);
        const matchWord = item.example?.word?.toLowerCase().includes(query);
        if (!matchChar && !matchRomaji && !matchMeaningEn && !matchMeaningId && !matchWord) {
          return false;
        }
      }

      return true;
    });
  }, [currentDataset, activeGroup, filterStatus, searchQuery, learnedKanaChars]);

  // Gojuon rows configuration for 46 basic characters
  const gojuonRows: { key: KanaRow; label: string; columns: (string | null)[] }[] = [
    { key: 'a', label: 'Baris A (Vokal Dasar)', columns: ['a', 'i', 'u', 'e', 'o'] },
    { key: 'ka', label: 'Baris KA (か行)', columns: ['ka', 'ki', 'ku', 'ke', 'ko'] },
    { key: 'sa', label: 'Baris SA (さ行)', columns: ['sa', 'shi', 'su', 'se', 'so'] },
    { key: 'ta', label: 'Baris TA (た行)', columns: ['ta', 'chi', 'tsu', 'te', 'to'] },
    { key: 'na', label: 'Baris NA (な行)', columns: ['na', 'ni', 'nu', 'ne', 'no'] },
    { key: 'ha', label: 'Baris HA (は行)', columns: ['ha', 'hi', 'fu', 'he', 'ho'] },
    { key: 'ma', label: 'Baris MA (ま行)', columns: ['ma', 'mi', 'mu', 'me', 'mo'] },
    { key: 'ya', label: 'Baris YA (や行)', columns: ['ya', null, 'yu', null, 'yo'] },
    { key: 'ra', label: 'Baris RA (ら行)', columns: ['ra', 'ri', 'ru', 're', 'ro'] },
    { key: 'wa', label: 'Baris WA & N (わ・ん)', columns: ['wa', null, null, null, 'wo', 'n'] }
  ];

  // Category counts for quick tabs
  const groupCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: currentDataset.length,
      gojuon: 0,
      dakuten: 0,
      handakuten: 0,
      youon: 0,
      small: 0,
      modern: 0,
      special: 0
    };
    currentDataset.forEach(k => {
      if (counts[k.group] !== undefined) {
        counts[k.group]++;
      }
    });
    return counts;
  }, [currentDataset]);

  return (
    <div className="space-y-8 text-left pb-16">
      {/* 1. Header & Learning Stats Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/25 p-6 sm:p-8 shadow-[0_15px_45px_rgba(12,27,51,0.9)]">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-gradient-to-br from-[#1F3760]/20 via-[#8FB4E3]/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-72 h-72 rounded-full bg-[#16294A]/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16294A] border border-[#8FB4E3]/30 text-xs font-bold text-[#8FB4E3] shadow-[0_0_12px_rgba(143,180,227,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#8FB4E3]" />
              <span>Japanese Writing System · Modul Lengkap</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#EEF1F6] tracking-tight">
              Kuasai{' '}
              <span className="bg-gradient-to-r from-white via-[#EEF1F6] to-[#8FB4E3] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(143,180,227,0.3)]">
                Hiragana & Katakana
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#8793A8] leading-relaxed">
              Pelajari seluruh aksara bahasa Jepang mulai dari Gojuon 46 karakter dasar, Dakuten, Handakuten,
              Youon (kombinasi), Kana Kecil, variasi pelafalan modern, hingga tanda ortografi resmi dengan animasi
              urutan goresan dan latihan kanvas interaktif.
            </p>
          </div>

          {/* Quick Mastery Status Widget */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-[#0C1B33]/70 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#8FB4E3]/25 shadow-xs">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1F3760] to-[#274474] border border-[#8FB4E3]/30 flex items-center justify-center text-[#EEF1F6] font-black text-lg shadow-[0_0_15px_rgba(143,180,227,0.3)] font-mono">
                {progressPct}%
              </div>
              <div>
                <div className="text-xs font-bold text-[#8793A8] uppercase tracking-wider">Progress {activeType === 'hiragana' ? 'Hiragana' : 'Katakana'}</div>
                <div className="text-lg font-black text-[#EEF1F6] flex items-baseline gap-2">
                  <span>{learnedCount}</span>
                  <span className="text-xs font-bold text-[#8793A8]">/ {totalChars} Dikuasai</span>
                </div>
                <div className="text-xs font-semibold text-[#8FB4E3]">
                  {unmasteredCount} karakter tersisa
                </div>
              </div>
            </div>

            <div className="h-px sm:h-12 w-full sm:w-px bg-[#8FB4E3]/15" />

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playClick();
                  setIsPracticeModalOpen(true);
                }}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] border border-[#8FB4E3]/40 font-bold text-xs shadow-[0_0_15px_rgba(143,180,227,0.3)] transition-all active:scale-95"
              >
                <Pencil className="w-3.5 h-3.5 text-[#8FB4E3]" />
                <span>Mode Latihan</span>
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar Line */}
        <div className="relative mt-6 pt-4 border-t border-[#8FB4E3]/15">
          <div className="w-full bg-[#0C1B33]/80 border border-[#8FB4E3]/20 h-2.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#1F3760] to-[#8FB4E3] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(143,180,227,0.5)]"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* 2. Top Navigation Tabs: Hiragana vs Katakana & View Switcher */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Main Kana Switcher Tabs */}
        <div className="inline-flex p-1.5 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/25 shadow-xs">
          <button
            onClick={() => {
              sound.playClick();
              setActiveType('hiragana');
            }}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
              activeType === 'hiragana'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-md'
                : 'text-[#8793A8] hover:text-[#EEF1F6]'
            }`}
          >
            <span className="text-base font-japanese">ひらがな</span>
            <span>Hiragana</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
              activeType === 'hiragana' ? 'bg-[#0C1B33] text-[#8FB4E3] border border-[#8FB4E3]/30' : 'bg-white/5 text-[#8793A8]'
            }`}>
              {HIRAGANA_DATA.length}
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveType('katakana');
            }}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
              activeType === 'katakana'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-md'
                : 'text-[#8793A8] hover:text-[#EEF1F6]'
            }`}
          >
            <span className="text-base font-japanese">カタカナ</span>
            <span>Katakana</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
              activeType === 'katakana' ? 'bg-[#0C1B33] text-[#8FB4E3] border border-[#8FB4E3]/30' : 'bg-white/5 text-[#8793A8]'
            }`}>
              {KATAKANA_DATA.length}
            </span>
          </button>
        </div>

        {/* View Switcher: Tabel Karakter vs Panduan Kaidah */}
        <div className="inline-flex p-1 rounded-xl bg-[#16294A] border border-[#8FB4E3]/25 shadow-xs">
          <button
            onClick={() => setActiveViewSection('table')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeViewSection === 'table'
                ? 'bg-[#1F3760] text-[#EEF1F6] shadow-2xs font-black border border-[#8FB4E3]/30'
                : 'text-[#8793A8] hover:text-[#EEF1F6]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#8FB4E3]" />
            <span>Tabel & Kartu Aksara</span>
          </button>
          <button
            onClick={() => setActiveViewSection('guides')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeViewSection === 'guides'
                ? 'bg-[#1F3760] text-[#EEF1F6] shadow-2xs font-black border border-[#8FB4E3]/30'
                : 'text-[#8793A8] hover:text-[#EEF1F6]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#8FB4E3]" />
            <span>Panduan & Aturan Fonetik</span>
          </button>
        </div>
      </div>

      {/* 3. Conditional View: Table View or Educational Guides */}
      {activeViewSection === 'guides' ? (
        <KanaEducationalGuides />
      ) : (
        <div className="space-y-6">
          {/* Category Filter Pills Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: 'gojuon', label: 'Gojuon (46 Dasar)', count: groupCounts.gojuon },
              { id: 'dakuten', label: 'Dakuten (Tanda Tenten)', count: groupCounts.dakuten },
              { id: 'handakuten', label: 'Handakuten (Maru)', count: groupCounts.handakuten },
              { id: 'youon', label: 'Youon (Kombinasi 拗音)', count: groupCounts.youon },
              { id: 'small', label: 'Kana Kecil (促音・拗音)', count: groupCounts.small },
              { id: 'modern', label: 'Bunyi Modern / Serapan', count: groupCounts.modern },
              { id: 'special', label: 'Tanda Khusus (ー・ゝ)', count: groupCounts.special },
              { id: 'all', label: 'Semua Aksara', count: groupCounts.all }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveGroup(tab.id as KanaGroup | 'all');
                }}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeGroup === tab.id
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                    : 'bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/20'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono font-black ${
                  activeGroup === tab.id ? 'bg-[#0C1B33] text-[#8FB4E3] border border-[#8FB4E3]/30' : 'bg-white/5 text-[#8FB4E3]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search & Status Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#16294A] p-3.5 rounded-2xl border border-[#8FB4E3]/25 shadow-xs">
            {/* Live Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8793A8]" />
              <input
                type="text"
                placeholder="Cari karakter, romaji (mis. 'ka', 'shi'), atau arti kata..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0C1B33]/80 border border-[#8FB4E3]/25 text-xs font-medium text-[#EEF1F6] placeholder:text-[#8793A8] focus:outline-hidden focus:ring-2 focus:ring-[#8FB4E3]/30 focus:border-[#8FB4E3]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#8793A8] hover:text-[#EEF1F6]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mastery Status Filter */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <span className="text-xs font-bold text-[#8793A8] flex items-center gap-1 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#8FB4E3]" />
                <span>Filter:</span>
              </span>
              {(['semua', 'belum', 'hafal'] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${
                    filterStatus === status
                      ? 'bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/30 shadow-xs'
                      : 'bg-[#0C1B33]/60 text-[#8793A8] hover:text-[#EEF1F6]'
                  }`}
                >
                  {status === 'semua' ? 'Semua' : status === 'belum' ? 'Belum Dihafal' : 'Sudah Dikuasai'}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Display Content: Gojuon Row Layout (if basic selected and no search) OR Modern Card Grid */}
          {activeGroup === 'gojuon' && !searchQuery.trim() && filterStatus === 'semua' ? (
            /* Traditional Japanese 5-Column Gojuon Table */
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold text-[#8793A8] px-1">
                <span>Tabel 50 Bunyi Gojuon (五十音) · Tersusun berdasarkan baris konsonan & vokal A-I-U-E-O</span>
                <span className="hidden sm:inline">Klik kartu untuk animasi goresan & latihan menulis</span>
              </div>

              <div className="space-y-3">
                {gojuonRows.map(row => {
                  return (
                    <div 
                      key={row.key} 
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-[#8FB4E3]/50 transition-colors"
                    >
                      <div className="w-44 shrink-0">
                        <div className="text-xs font-black text-[#EEF1F6]">{row.label}</div>
                        <div className="text-[10px] font-semibold text-[#8793A8]">5 Vokal / Suku Kata</div>
                      </div>

                      {/* 5 Column Grid */}
                      <div className="grid grid-cols-5 gap-2 sm:gap-3 flex-1">
                        {row.columns.map((romaji, colIdx) => {
                          if (!romaji) {
                            return (
                              <div 
                                key={`empty-${colIdx}`} 
                                className="h-20 sm:h-24 rounded-2xl bg-[#0C1B33]/60 border border-dashed border-[#8FB4E3]/20 flex items-center justify-center text-xs text-[#8793A8]/40 font-mono"
                              >
                                —
                              </div>
                            );
                          }

                          const item = currentDataset.find(k => k.romaji.toLowerCase() === romaji.toLowerCase() && k.group === 'gojuon');
                          if (!item) {
                            return (
                              <div key={romaji} className="h-20 sm:h-24 rounded-2xl bg-[#0C1B33]/60 border border-dashed border-[#8FB4E3]/20 flex items-center justify-center text-xs text-[#8793A8]/40 font-mono">
                                {romaji}
                              </div>
                            );
                          }

                          const isLearned = learnedKanaChars.includes(item.char);

                          return (
                            <KanaGridCard
                              key={item.id}
                              item={item}
                              isLearned={isLearned}
                              onSelect={() => setSelectedKanaModal(item)}
                              onToggleLearned={() => onToggleLearned(item.char)}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Modern Card Grid Layout for Dakuten, Youon, Small, Extended Modern sounds, or Search results */
            <div>
              <div className="flex items-center justify-between mb-4 text-xs font-bold text-[#8793A8]">
                <span>Menampilkan {filteredData.length} karakter</span>
                {searchQuery && (
                  <span>Hasil pencarian: "{searchQuery}"</span>
                )}
              </div>

              {filteredData.length === 0 ? (
                <div className="py-16 text-center bg-[#16294A] rounded-3xl border border-[#8FB4E3]/25 p-8 shadow-xs">
                  <div className="w-16 h-16 rounded-2xl bg-[#0C1B33] border border-[#8FB4E3]/25 flex items-center justify-center mx-auto text-[#8FB4E3] mb-3">
                    <Search className="w-8 h-8 text-[#8FB4E3]" />
                  </div>
                  <h3 className="text-base font-black text-[#EEF1F6] mb-1">Karakter Tidak Ditemukan</h3>
                  <p className="text-xs text-[#8793A8] max-w-sm mx-auto">
                    Tidak ada karakter Kana yang sesuai dengan kata kunci atau filter saat ini.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setFilterStatus('semua');
                      setActiveGroup('all');
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 text-xs font-bold shadow-xs hover:brightness-110 transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {filteredData.map(item => {
                    const isLearned = learnedKanaChars.includes(item.char);
                    return (
                      <KanaGridCard
                        key={item.id}
                        item={item}
                        isLearned={isLearned}
                        onSelect={() => setSelectedKanaModal(item)}
                        onToggleLearned={() => onToggleLearned(item.char)}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 5. Modals */}
      {selectedKanaModal && (
        <KanaDetailModal
          kana={selectedKanaModal}
          onClose={() => setSelectedKanaModal(null)}
          isLearned={learnedKanaChars.includes(selectedKanaModal.char)}
          onToggleLearned={onToggleLearned}
          onSelectKana={(kana) => setSelectedKanaModal(kana)}
        />
      )}

      {isPracticeModalOpen && (
        <KanaPracticeModal
          isOpen={isPracticeModalOpen}
          kanaType={activeType}
          onClose={() => setIsPracticeModalOpen(false)}
        />
      )}
    </div>
  );
};

// Reusable Sub-Component: Kana Grid Cell Card
interface KanaGridCardProps {
  item: KanaItem;
  isLearned: boolean;
  onSelect: () => void;
  onToggleLearned: () => void;
}

const KanaGridCard: React.FC<KanaGridCardProps> = ({
  item,
  isLearned,
  onSelect,
  onToggleLearned
}) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative rounded-2xl p-3 sm:p-4 text-center cursor-pointer transition-all duration-200 border flex flex-col justify-between shadow-[0_4px_16px_rgba(12,27,51,0.4)] ${
        isLearned
          ? 'bg-gradient-to-b from-[#0F3025] to-[#16294A] border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-md'
          : 'bg-[#16294A] border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50 hover:shadow-[0_4px_20px_rgba(143,180,227,0.15)] hover:-translate-y-0.5'
      }`}
    >
      {/* Top action row */}
      <div className="flex items-center justify-between gap-1 mb-1">
        {/* Audio Pronunciation Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            speakJapanese(item.char);
          }}
          className="p-1 rounded-lg text-[#8793A8] hover:text-[#8FB4E3] hover:bg-[#0C1B33] transition-colors"
          title={`Dengarkan pelafalan ${item.char}`}
          aria-label={`Pronounce ${item.char}`}
        >
          <Volume2 className="w-3.5 h-3.5" />
        </button>

        {/* Learned Checkmark Toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleLearned();
            if (!isLearned) sound.playCorrect();
          }}
          className={`p-1 rounded-lg transition-all ${
            isLearned
              ? 'text-emerald-400 bg-emerald-500/20 border border-emerald-500/30'
              : 'text-[#8793A8]/40 group-hover:text-[#8793A8] hover:bg-[#0C1B33]'
          }`}
          title={isLearned ? 'Sudah Dikuasai' : 'Tandai Hafal'}
          aria-label="Toggle mastery"
        >
          <Check className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Japanese Character */}
      <div className="my-1.5">
        <span className="font-japanese text-3xl sm:text-4xl font-bold text-[#EEF1F6] group-hover:text-[#8FB4E3] transition-colors inline-block leading-none">
          {item.char}
        </span>
      </div>

      {/* Romaji & Subtitle */}
      <div className="space-y-0.5 mt-1">
        <div className="text-xs font-black font-mono text-[#8FB4E3] uppercase tracking-wide">
          {item.romaji}
        </div>
        <div className="text-[10px] font-semibold text-[#8793A8] truncate px-1">
          {item.example?.word || `${item.strokeCount} goresan`}
        </div>
      </div>

      {/* Subtle indicator bar */}
      <div className={`mt-2 h-1 w-full rounded-full transition-colors ${
        isLearned ? 'bg-emerald-500' : 'bg-transparent group-hover:bg-[#8FB4E3]/40'
      }`} />
    </div>
  );
};
