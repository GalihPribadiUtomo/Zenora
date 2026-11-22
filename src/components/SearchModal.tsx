import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  PenTool, 
  Languages, 
  ArrowRight, 
  Volume2, 
  Sparkles, 
  Clock, 
  Trash2, 
  CornerDownLeft,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { ALL_KANA_DATA } from '../data/kanaData';
import { applyCustomKotoba } from '../utils/kotobaStorage';
import { KotobaItem, KanjiItem, KanaItem } from '../types';
import { speakJapanese, sound } from '../utils/audio';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectKanji: (kanji: KanjiItem) => void;
  onSelectBab: (bab: number) => void;
  onNavigate?: (tab: 'kana' | 'kotoba' | 'kanji' | 'latihan') => void;
}

type SearchCategoryTab = 'semua' | 'kanji' | 'kotoba' | 'kana';

const POPULAR_TAGS = [
  { label: 'JLPT N5', query: 'N5' },
  { label: 'JLPT N4', query: 'N4' },
  { label: 'Kata Kerja', query: 'Kata Kerja' },
  { label: 'Makanan & Minuman', query: 'Makanan' },
  { label: 'Waktu & Angka', query: 'Waktu' },
  { label: 'Salam & Ungkapan', query: 'Salam' },
  { label: 'Bab 1', query: 'Bab 1' },
  { label: 'Hiragana Dasar', query: 'a i u e o' },
  { label: 'Katakana', query: 'Katakana' },
];

const RECENT_SEARCHES_KEY = 'zenora_recent_searches_v1';

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectKanji,
  onSelectBab,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchCategoryTab>('semua');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load recent searches from localStorage
  useEffect(() => {
    if (isOpen) {
      try {
        const raw = localStorage.getItem(RECENT_SEARCHES_KEY);
        if (raw) setRecentSearches(JSON.parse(raw));
      } catch (e) {
        console.error('Failed to load recent searches', e);
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const saveRecentSearch = (term: string) => {
    const cleaned = term.trim();
    if (!cleaned) return;
    try {
      const updated = [cleaned, ...recentSearches.filter((s) => s.toLowerCase() !== cleaned.toLowerCase())].slice(0, 6);
      setRecentSearches(updated);
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save recent search', e);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  // Handle Ctrl+K and Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Active custom-edited Kotoba data
  const allKotoba = useMemo(() => applyCustomKotoba(KOTOBA_DATA), []);

  const q = query.toLowerCase().trim();

  // Search Kanji
  const kanjiMatches = useMemo(() => {
    if (!q) return [];
    return KANJI_DATA.filter((k) => {
      return (
        k.kanji.includes(q) ||
        k.reading.toLowerCase().includes(q) ||
        k.meaning.toLowerCase().includes(q) ||
        (k.meaningEn && k.meaningEn.toLowerCase().includes(q)) ||
        (k.onyomi && k.onyomi.toLowerCase().includes(q)) ||
        (k.kunyomi && k.kunyomi.toLowerCase().includes(q)) ||
        k.jlpt.toLowerCase() === q ||
        k.category.toLowerCase().includes(q)
      );
    }).slice(0, 24);
  }, [q]);

  // Search Kotoba (including user custom edits/deletes)
  const kotobaMatches = useMemo(() => {
    if (!q) return [];
    
    // Check if query is looking for a chapter, e.g. "bab 5" or "bab 20"
    const babMatch = q.match(/^bab\s*(\d+)$/i);
    if (babMatch) {
      const babNum = parseInt(babMatch[1], 10);
      return allKotoba.filter((k) => k.bab === babNum).slice(0, 30);
    }

    return allKotoba.filter((k) => {
      return (
        k.kanji.includes(q) ||
        k.kana.toLowerCase().includes(q) ||
        k.romaji.toLowerCase().includes(q) ||
        k.arti.toLowerCase().includes(q) ||
        k.kategori.toLowerCase().includes(q)
      );
    }).slice(0, 30);
  }, [q, allKotoba]);

  // Search Kana (Hiragana & Katakana, 312 characters)
  const kanaMatches = useMemo(() => {
    if (!q) return [];
    return ALL_KANA_DATA.filter((k) => {
      const matchChar = k.char.includes(q) || (k.equivalentChar && k.equivalentChar.includes(q));
      const matchRomaji = k.romaji.toLowerCase().includes(q);
      const matchPron = k.pronunciation.toLowerCase().includes(q);
      const matchRow = k.rowLabel.toLowerCase().includes(q);
      const matchType = k.type.toLowerCase() === q;
      const matchEx = 
        (k.example?.word && k.example.word.includes(q)) ||
        (k.example?.meaningId && k.example.meaningId.toLowerCase().includes(q)) ||
        (k.example?.meaningEn && k.example.meaningEn.toLowerCase().includes(q));
      return matchChar || matchRomaji || matchPron || matchRow || matchType || matchEx;
    }).slice(0, 20);
  }, [q]);

  const totalResults = kanjiMatches.length + kotobaMatches.length + kanaMatches.length;

  if (!isOpen) return null;

  // Helper to play audio without closing modal
  const handlePlayAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    sound.playClick();
    speakJapanese(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-[#E9E2F0] overflow-hidden flex flex-col text-left max-h-[85vh]"
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#29264B] via-[#6555A5] to-[#85B9D1]" />

        {/* Search Input Bar */}
        <div className="relative border-b border-[#E9E2F0] p-4 sm:p-5 flex items-center bg-white gap-3">
          <div className="p-2 rounded-xl bg-[#F0EBF8] text-[#6555A5] shrink-0 border border-[#E9E2F0]">
            <Search className="w-5 h-5" />
          </div>
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && query.trim()) {
                saveRecentSearch(query.trim());
              }
            }}
            placeholder="Cari kata, kanji, kana, romaji, arti, bab (contoh: tabemasu, 日, あ, Bab 3)..."
            className="w-full text-sm sm:text-base font-semibold focus:outline-hidden text-[#29264B] placeholder-[#77738A]/60 font-['Manrope']"
            autoFocus
          />

          {query ? (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1.5 text-[#77738A] hover:text-[#29264B] hover:bg-[#F0EBF8] rounded-xl transition-colors"
              title="Bersihkan input pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono bg-[#F8F3FA] text-[#77738A] px-2 py-1 rounded-lg border border-[#E9E2F0] shadow-2xs">
              ESC
            </kbd>
          )}
        </div>

        {/* Filter Category Tabs (Active only when searching) */}
        {q && (
          <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 bg-[#F8F3FA] border-b border-[#E9E2F0] overflow-x-auto text-xs font-bold">
            <button
              onClick={() => setActiveTab('semua')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'semua'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B]'
              }`}
            >
              <span>Semua</span>
              <span className="text-[10px] bg-[#F0EBF8] text-[#6555A5] px-1.5 py-0.5 rounded-full">
                {totalResults}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kanji')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'kanji'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B]'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 text-[#6555A5]" />
              <span>Kanji</span>
              <span className="text-[10px] bg-[#F0EBF8] text-[#6555A5] px-1.5 py-0.5 rounded-full">
                {kanjiMatches.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kotoba')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'kotoba'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#85B9D1]" />
              <span>Kosakata</span>
              <span className="text-[10px] bg-[#F0EBF8] text-[#29264B] px-1.5 py-0.5 rounded-full">
                {kotobaMatches.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kana')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'kana'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B]'
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-[#6555A5]" />
              <span>Kana (Aksara)</span>
              <span className="text-[10px] bg-[#F0EBF8] text-[#6555A5] px-1.5 py-0.5 rounded-full">
                {kanaMatches.length}
              </span>
            </button>
          </div>
        )}

        {/* Results & Suggestions Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* EMPTY QUERY: SUGGESTIONS & RECENT SEARCHES */}
          {!q && (
            <div className="space-y-6">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#77738A] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Pencarian Terakhir</span>
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      className="text-[#77738A] hover:text-rose-500 font-semibold lowercase transition-colors text-[11px]"
                    >
                      hapus riwayat
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((term, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setQuery(term);
                          saveRecentSearch(term);
                        }}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-xs font-semibold text-[#29264B] border border-[#E9E2F0] transition-colors"
                      >
                        <Clock className="w-3 h-3 text-[#77738A]" />
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Tags / Quick Suggestions */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-[#77738A] uppercase tracking-wider block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#85B9D1]" />
                  <span>Kategori & Pencarian Populer</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_TAGS.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setQuery(tag.query);
                        saveRecentSearch(tag.query);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#F0EBF8] text-xs font-bold text-[#29264B] border border-[#E9E2F0] hover:border-[#6555A5]/40 shadow-2xs transition-all active:scale-95"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Database Overview Information */}
              <div className="p-4 rounded-2xl bg-[#F8F3FA] border border-[#E9E2F0] flex items-center justify-between text-xs text-[#77738A]">
                <div>
                  <span className="font-bold text-[#29264B] block">Cakupan Database Pencarian ZENORA:</span>
                  <span>{allKotoba.length} Kosakata · {KANJI_DATA.length} Kanji N5 & N4 · {ALL_KANA_DATA.length} Aksara Kana</span>
                </div>
                <kbd className="hidden sm:inline font-mono bg-white px-2 py-1 rounded border border-[#E9E2F0] text-[10px]">
                  Ketik apa saja untuk mulai
                </kbd>
              </div>
            </div>
          )}

          {/* SECTION 1: KANJI RESULTS */}
          {(activeTab === 'semua' || activeTab === 'kanji') && kanjiMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#29264B] uppercase tracking-wider flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-[#6555A5]" />
                  <span>Kanji Terkait ({kanjiMatches.length})</span>
                </span>
                {kanjiMatches.length > 6 && activeTab === 'semua' && (
                  <button
                    onClick={() => setActiveTab('kanji')}
                    className="text-xs font-bold text-[#6555A5] hover:underline"
                  >
                    Lihat semua kanji ({kanjiMatches.length})
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {(activeTab === 'kanji' ? kanjiMatches : kanjiMatches.slice(0, 6)).map((k) => (
                  <div
                    key={k.id}
                    onClick={() => {
                      saveRecentSearch(query);
                      onSelectKanji(k);
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl border border-[#E9E2F0] hover:border-[#6555A5] bg-white hover:bg-[#F8F3FA] cursor-pointer flex items-center justify-between gap-3 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#29264B] to-[#43376E] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <span className="kanji-font text-2xl font-black">{k.kanji}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-[#29264B] font-['Manrope'] truncate">
                            {k.reading}
                          </span>
                          <span className="text-[9px] bg-[#F0EBF8] text-[#6555A5] font-black px-1.5 py-0.5 rounded border border-[#6555A5]/20 shrink-0">
                            {k.jlpt}
                          </span>
                        </div>
                        <span className="text-xs text-[#77738A] block truncate font-medium">
                          {k.meaning}
                        </span>
                        <span className="text-[10px] text-[#85B9D1] font-mono block truncate">
                          {k.onyomi?.split('・')[0]} · {k.kunyomi?.split('・')[0]}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handlePlayAudio(e, k.reading)}
                      className="p-2 rounded-xl hover:bg-white text-[#77738A] hover:text-[#29264B] transition-colors border border-transparent hover:border-[#E9E2F0]"
                      title="Dengarkan pengucapan"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 2: KOTOBA (VOCABULARY) RESULTS */}
          {(activeTab === 'semua' || activeTab === 'kotoba') && kotobaMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#29264B] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#85B9D1]" />
                  <span>Kosakata Minna no Nihongo ({kotobaMatches.length})</span>
                </span>
                {kotobaMatches.length > 8 && activeTab === 'semua' && (
                  <button
                    onClick={() => setActiveTab('kotoba')}
                    className="text-xs font-bold text-[#6555A5] hover:underline"
                  >
                    Lihat semua ({kotobaMatches.length})
                  </button>
                )}
              </div>

              <div className="space-y-2">
                {(activeTab === 'kotoba' ? kotobaMatches : kotobaMatches.slice(0, 8)).map((w) => (
                  <div
                    key={w.id}
                    onClick={() => {
                      saveRecentSearch(query);
                      onSelectBab(w.bab);
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl border border-[#E9E2F0] hover:border-[#85B9D1] bg-white hover:bg-[#F8F3FA] cursor-pointer flex items-center justify-between gap-3 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <button
                        onClick={(e) => handlePlayAudio(e, w.kana || w.kanji)}
                        className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-colors border border-[#E9E2F0] shrink-0"
                        title="Dengarkan audio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="kanji-font text-lg sm:text-xl font-black text-[#29264B]">
                            {w.kanji}
                          </span>
                          <span className="text-xs font-bold text-[#6555A5]">
                            {w.kana}
                          </span>
                          <span className="text-[11px] font-mono text-[#77738A] hidden sm:inline">
                            ({w.romaji})
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#29264B] truncate">
                          {w.arti}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold bg-[#F0EBF8] text-[#29264B] border border-[#29264B]/15 px-2 py-0.5 rounded-lg">
                        Bab {w.bab}
                      </span>
                      <span className="text-[10px] font-medium text-[#77738A] hidden md:inline">
                        {w.kategori}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#77738A] group-hover:text-[#29264B] group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SECTION 3: KANA (HIRAGANA & KATAKANA) RESULTS */}
          {(activeTab === 'semua' || activeTab === 'kana') && kanaMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#29264B] uppercase tracking-wider flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-[#6555A5]" />
                  <span>Aksara Kana (Hiragana & Katakana) ({kanaMatches.length})</span>
                </span>
                {kanaMatches.length > 6 && activeTab === 'semua' && (
                  <button
                    onClick={() => setActiveTab('kana')}
                    className="text-xs font-bold text-[#6555A5] hover:underline"
                  >
                    Lihat semua kana ({kanaMatches.length})
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {(activeTab === 'kana' ? kanaMatches : kanaMatches.slice(0, 6)).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      saveRecentSearch(query);
                      onNavigate?.('kana');
                      onClose();
                    }}
                    className="p-3.5 rounded-2xl border border-[#E9E2F0] hover:border-[#6555A5] bg-white hover:bg-[#F8F3FA] cursor-pointer flex items-center justify-between gap-3 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F0EBF8] to-white border border-[#E9E2F0] text-[#29264B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="kanji-font text-2xl font-black">{item.char}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono font-bold text-[#29264B] uppercase">
                            /{item.romaji}/
                          </span>
                          <span className="text-[9px] bg-[#EDF5F9] text-[#85B9D1] font-bold px-1.5 py-0.5 rounded uppercase">
                            {item.type}
                          </span>
                        </div>
                        {item.example && (
                          <span className="text-[11px] text-[#77738A] block truncate">
                            {item.example.word} ({item.example.meaningId})
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handlePlayAudio(e, item.char)}
                      className="p-2 rounded-xl hover:bg-white text-[#77738A] hover:text-[#29264B] transition-colors border border-transparent hover:border-[#E9E2F0]"
                      title="Dengarkan pengucapan"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NO RESULTS FOUND */}
          {q && totalResults === 0 && (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0EBF8] text-[#6555A5] mx-auto flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-black text-base text-[#29264B] font-['Manrope']">
                Tidak Ditemukan Hasil
              </h4>
              <p className="text-xs text-[#77738A] max-w-sm mx-auto leading-relaxed">
                Tidak ada Kanji, Kosakata, atau Kana yang cocok dengan kata pencarian <strong>"{query}"</strong>. Coba periksa ejaan romaji atau gunakan kata kunci umum lainnya.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer Bar with Keyboard Hints */}
        <div className="px-6 py-3 border-t border-[#E9E2F0] bg-[#F8F3FA] flex items-center justify-between text-[11px] text-[#77738A] font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E9E2F0] text-[10px]">↵</kbd>
              <span>Simpan Riwayat</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E9E2F0] text-[10px]">ESC</kbd>
              <span>Tutup</span>
            </span>
          </div>

          <span className="font-bold text-[#6555A5]">
            ZENORA Global Search
          </span>
        </div>

      </div>
    </div>
  );
};
