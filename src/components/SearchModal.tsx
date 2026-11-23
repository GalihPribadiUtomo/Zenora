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
  Clock 
} from 'lucide-react';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { ALL_KANA_DATA } from '../data/kanaData';
import { applyCustomKotoba } from '../utils/kotobaStorage';
import { KanjiItem } from '../types';
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

  // Combine Kotoba with custom stored words
  const allKotoba = useMemo(() => {
    return applyCustomKotoba(KOTOBA_DATA);
  }, []);

  // Filtered queries across 3 datasets
  const q = query.trim().toLowerCase();

  const kanjiMatches = useMemo(() => {
    if (!q) return [];
    return KANJI_DATA.filter((k) => {
      return (
        k.kanji.toLowerCase().includes(q) ||
        k.reading.toLowerCase().includes(q) ||
        k.onyomi.toLowerCase().includes(q) ||
        k.kunyomi.toLowerCase().includes(q) ||
        k.meaning.toLowerCase().includes(q) ||
        k.meaningEn.toLowerCase().includes(q) ||
        k.category.toLowerCase().includes(q) ||
        k.jlpt.toLowerCase() === q ||
        (q === 'n5' && k.jlpt === 'N5') ||
        (q === 'n4' && k.jlpt === 'N4')
      );
    });
  }, [q]);

  const kotobaMatches = useMemo(() => {
    if (!q) return [];
    return allKotoba.filter((w) => {
      const matchesBab = q.startsWith('bab ') ? String(w.bab) === q.replace('bab ', '').trim() : false;
      return (
        matchesBab ||
        w.kanji.toLowerCase().includes(q) ||
        w.kana.toLowerCase().includes(q) ||
        w.romaji.toLowerCase().includes(q) ||
        w.arti.toLowerCase().includes(q) ||
        w.kategori.toLowerCase().includes(q) ||
        String(w.bab) === q
      );
    });
  }, [q, allKotoba]);

  const kanaMatches = useMemo(() => {
    if (!q) return [];
    return ALL_KANA_DATA.filter((item) => {
      return (
        item.char.toLowerCase().includes(q) ||
        item.romaji.toLowerCase() === q ||
        item.romaji.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        (item.example && item.example.word.toLowerCase().includes(q)) ||
        (item.example && item.example.meaningId.toLowerCase().includes(q))
      );
    });
  }, [q]);

  const totalResults = kanjiMatches.length + kotobaMatches.length + kanaMatches.length;

  const handlePlayAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    speakJapanese(text);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 sm:pt-20 bg-[#080D2B]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-[#0D1238] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#7857FF]/35 text-[#F5F6FF] overflow-hidden flex flex-col max-h-[85vh] text-left animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Gradient Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#080D2B] via-[#7857FF] to-[#F5F6FF]"></div>

        {/* Search Bar Input Row */}
        <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-[#7857FF]/20 bg-[#0D1238]/90">
          <Search className="w-5 h-5 text-[#7857FF] shrink-0" />
          
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
            className="w-full text-sm sm:text-base font-semibold focus:outline-hidden text-[#F5F6FF] placeholder-[#737FA8] font-['Manrope']"
            autoFocus
          />

          {query ? (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1.5 text-[#737FA8] hover:text-[#F5F6FF] hover:bg-[#080D2B] rounded-xl transition-colors"
              title="Bersihkan input pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono bg-[#080D2B] text-[#737FA8] px-2 py-1 rounded-lg border border-[#7857FF]/25 shadow-2xs">
              ESC
            </kbd>
          )}
        </div>

        {/* Filter Category Tabs (Active only when searching) */}
        {q && (
          <div className="flex items-center gap-1.5 px-4 sm:px-6 py-2.5 bg-[#080D2B]/60 border-b border-[#7857FF]/20 overflow-x-auto text-xs font-bold">
            <button
              onClick={() => setActiveTab('semua')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'semua'
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40 shadow-xs'
                  : 'text-[#737FA8] hover:text-[#F5F6FF]'
              }`}
            >
              <span>Semua</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === 'semua' ? 'bg-[#080D2B]/50 text-[#7857FF]' : 'bg-[#080D2B] text-[#737FA8]'
              }`}>
                {totalResults}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kanji')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'kanji'
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40 shadow-xs'
                  : 'text-[#737FA8] hover:text-[#F5F6FF]'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Kanji</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === 'kanji' ? 'bg-[#080D2B]/50 text-[#7857FF]' : 'bg-[#080D2B] text-[#737FA8]'
              }`}>
                {kanjiMatches.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kotoba')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'kotoba'
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40 shadow-xs'
                  : 'text-[#737FA8] hover:text-[#F5F6FF]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kosakata</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === 'kotoba' ? 'bg-[#080D2B]/50 text-[#7857FF]' : 'bg-[#080D2B] text-[#737FA8]'
              }`}>
                {kotobaMatches.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kana')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === 'kana'
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40 shadow-xs'
                  : 'text-[#737FA8] hover:text-[#F5F6FF]'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>Kana (Aksara)</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                activeTab === 'kana' ? 'bg-[#080D2B]/50 text-[#7857FF]' : 'bg-[#080D2B] text-[#737FA8]'
              }`}>
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
                  <div className="flex items-center justify-between text-xs font-bold text-[#737FA8] uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#7857FF]" />
                      <span>Pencarian Terakhir</span>
                    </span>
                    <button
                      onClick={clearRecentSearches}
                      className="text-[#737FA8] hover:text-red-400 font-semibold lowercase transition-colors text-[11px]"
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
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#080D2B] hover:bg-[#12194A] text-xs font-semibold text-[#F5F6FF] border border-[#7857FF]/25 transition-colors"
                      >
                        <Clock className="w-3 h-3 text-[#7857FF]" />
                        <span>{term}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Popular Tags / Quick Suggestions */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold text-[#737FA8] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#7857FF]" />
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
                      className="px-3.5 py-1.5 rounded-xl bg-[#080D2B] hover:bg-[#12194A] text-xs font-bold text-[#F5F6FF] border border-[#7857FF]/25 hover:border-[#7857FF] shadow-2xs transition-all active:scale-95"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Database Overview Information */}
              <div className="p-4 rounded-2xl bg-[#080D2B]/60 border border-[#7857FF]/25 flex items-center justify-between text-xs text-[#737FA8]">
                <div>
                  <span className="font-bold text-[#F5F6FF] block">Cakupan Database Pencarian ZENORA:</span>
                  <span>{allKotoba.length} Kosakata · {KANJI_DATA.length} Kanji N5 & N4 · {ALL_KANA_DATA.length} Aksara Kana</span>
                </div>
                <kbd className="hidden sm:inline font-mono bg-[#080D2B] px-2 py-1 rounded border border-[#7857FF]/25 text-[10px] text-[#F5F6FF]">
                  Ketik apa saja untuk mulai
                </kbd>
              </div>
            </div>
          )}

          {/* SECTION 1: KANJI RESULTS */}
          {(activeTab === 'semua' || activeTab === 'kanji') && kanjiMatches.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#F5F6FF] uppercase tracking-wider flex items-center gap-1.5">
                  <PenTool className="w-3.5 h-3.5 text-[#7857FF]" />
                  <span>Kanji Terkait ({kanjiMatches.length})</span>
                </span>
                {kanjiMatches.length > 6 && activeTab === 'semua' && (
                  <button
                    onClick={() => setActiveTab('kanji')}
                    className="text-xs font-bold text-[#7857FF] hover:underline"
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
                    className="p-3.5 rounded-2xl border border-[#7857FF]/20 hover:border-[#7857FF]/50 bg-[#080D2B]/70 hover:bg-[#12194A] cursor-pointer flex items-center justify-between gap-3 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7857FF] to-[#945CFF] border border-[#7857FF]/30 text-[#F5F6FF] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                        <span className="kanji-font text-2xl font-black">{k.kanji}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-black text-[#F5F6FF] font-['Manrope'] truncate">
                            {k.reading}
                          </span>
                          <span className="text-[9px] bg-[#080D2B] text-[#7857FF] font-black px-1.5 py-0.5 rounded border border-[#7857FF]/30 shrink-0">
                            {k.jlpt}
                          </span>
                        </div>
                        <span className="text-xs text-[#737FA8] block truncate font-medium">
                          {k.meaning}
                        </span>
                        <span className="text-[10px] text-[#7857FF] font-mono block truncate">
                          {k.onyomi?.split('・')[0]} · {k.kunyomi?.split('・')[0]}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handlePlayAudio(e, k.reading)}
                      className="p-2 rounded-xl hover:bg-[#080D2B] text-[#737FA8] hover:text-[#F5F6FF] transition-colors border border-transparent hover:border-[#7857FF]/25"
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
                <span className="text-xs font-bold text-[#F5F6FF] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#7857FF]" />
                  <span>Kosakata Minna no Nihongo ({kotobaMatches.length})</span>
                </span>
                {kotobaMatches.length > 8 && activeTab === 'semua' && (
                  <button
                    onClick={() => setActiveTab('kotoba')}
                    className="text-xs font-bold text-[#7857FF] hover:underline"
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
                    className="p-3.5 rounded-2xl border border-[#7857FF]/20 hover:border-[#7857FF]/50 bg-[#080D2B]/70 hover:bg-[#12194A] cursor-pointer flex items-center justify-between gap-3 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <button
                        onClick={(e) => handlePlayAudio(e, w.kana || w.kanji)}
                        className="p-2 rounded-xl bg-[#080D2B] hover:bg-[#12194A] text-[#737FA8] hover:text-[#F5F6FF] transition-colors border border-[#7857FF]/25 shrink-0"
                        title="Dengarkan audio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>

                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="kanji-font text-lg sm:text-xl font-black text-[#F5F6FF]">
                            {w.kanji}
                          </span>
                          <span className="text-xs font-bold text-[#7857FF]">
                            {w.kana}
                          </span>
                          <span className="text-[11px] font-mono text-[#737FA8] hidden sm:inline">
                            ({w.romaji})
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#F5F6FF] truncate">
                          {w.arti}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-bold bg-[#080D2B] text-[#F5F6FF] border border-[#7857FF]/30 px-2 py-0.5 rounded-lg">
                        Bab {w.bab}
                      </span>
                      <span className="text-[10px] font-medium text-[#737FA8] hidden md:inline">
                        {w.kategori}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#737FA8] group-hover:text-[#F5F6FF] group-hover:translate-x-0.5 transition-all" />
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
                <span className="text-xs font-bold text-[#F5F6FF] uppercase tracking-wider flex items-center gap-1.5">
                  <Languages className="w-3.5 h-3.5 text-[#7857FF]" />
                  <span>Aksara Kana (Hiragana & Katakana) ({kanaMatches.length})</span>
                </span>
                {kanaMatches.length > 6 && activeTab === 'semua' && (
                  <button
                    onClick={() => setActiveTab('kana')}
                    className="text-xs font-bold text-[#7857FF] hover:underline"
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
                    className="p-3.5 rounded-2xl border border-[#7857FF]/20 hover:border-[#7857FF]/50 bg-[#080D2B]/70 hover:bg-[#12194A] cursor-pointer flex items-center justify-between gap-3 transition-all group shadow-2xs"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7857FF] to-[#945CFF] border border-[#7857FF]/30 text-[#F5F6FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <span className="kanji-font text-2xl font-black">{item.char}</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-mono font-bold text-[#F5F6FF] uppercase">
                            /{item.romaji}/
                          </span>
                          <span className="text-[9px] bg-[#080D2B] text-[#7857FF] font-bold px-1.5 py-0.5 rounded border border-[#7857FF]/30 uppercase">
                            {item.type}
                          </span>
                        </div>
                        {item.example && (
                          <span className="text-[11px] text-[#737FA8] block truncate">
                            {item.example.word} ({item.example.meaningId})
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={(e) => handlePlayAudio(e, item.char)}
                      className="p-2 rounded-xl hover:bg-[#080D2B] text-[#737FA8] hover:text-[#F5F6FF] transition-colors border border-transparent hover:border-[#7857FF]/25"
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
              <div className="w-12 h-12 rounded-2xl bg-[#080D2B] text-[#7857FF] mx-auto flex items-center justify-center border border-[#7857FF]/25">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="font-black text-base text-[#F5F6FF] font-['Manrope']">
                Tidak Ditemukan Hasil
              </h4>
              <p className="text-xs text-[#737FA8] max-w-sm mx-auto leading-relaxed">
                Tidak ada Kanji, Kosakata, atau Kana yang cocok dengan kata pencarian <strong>"{query}"</strong>. Coba periksa ejaan romaji atau gunakan kata kunci umum lainnya.
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer Bar with Keyboard Hints */}
        <div className="px-6 py-3 border-t border-[#7857FF]/20 bg-[#080D2B]/60 flex items-center justify-between text-[11px] text-[#737FA8] font-medium">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="font-mono bg-[#080D2B] px-1.5 py-0.5 rounded border border-[#7857FF]/25 text-[10px] text-[#F5F6FF]">↵</kbd>
              <span>Simpan Riwayat</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="font-mono bg-[#080D2B] px-1.5 py-0.5 rounded border border-[#7857FF]/25 text-[10px] text-[#F5F6FF]">ESC</kbd>
              <span>Tutup</span>
            </span>
          </div>

          <span className="font-bold text-[#7857FF]">
            ZENORA Global Search
          </span>
        </div>

      </div>
    </div>
  );
};
