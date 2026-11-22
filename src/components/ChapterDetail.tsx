import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  CheckCircle2, 
  Star, 
  Layers, 
  List, 
  LayoutGrid, 
  Award,
  Search,
  BookOpen,
  Pencil,
  Trash2,
  FileText,
  MessageSquare,
  Sparkles,
  Info,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { KotobaItem, KanjiItem, ChapterLesson } from '../types';
import { KANJI_DATA } from '../data/kanjiData';
import { loadChapterLesson } from '../data/materi';
import { speakJapanese, sound } from '../utils/audio';
import { KotobaModal } from './KotobaModal';
import { KotobaEditModal } from './KotobaEditModal';
import { KotobaDeleteModal } from './KotobaDeleteModal';
import { ChapterExerciseSection } from './ChapterExerciseSection';
import { persistKotobaEdit, persistKotobaDelete, applyCustomKotoba } from '../utils/kotobaStorage';

interface ChapterDetailProps {
  bab: number;
  onBack: () => void;
  onSelectChapter: (bab: number) => void;
  allKotoba: KotobaItem[];
  learnedKotobaIds: string[];
  bookmarkedKotobaIds: string[];
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onStartQuiz: (bab: number) => void;
  onSelectKanji?: (kanji: KanjiItem) => void;
}

export const ChapterDetail: React.FC<ChapterDetailProps> = ({
  bab,
  onBack,
  onSelectChapter,
  allKotoba,
  learnedKotobaIds,
  bookmarkedKotobaIds,
  onToggleLearned,
  onToggleBookmark,
  onStartQuiz,
  onSelectKanji
}) => {
  // Main Chapter Detail Tabs
  const [sectionTab, setSectionTab] = useState<'bunpou' | 'bunkei' | 'kaiwa' | 'kotoba' | 'kanji' | 'latihan'>('bunpou');

  // Lesson data loaded lazily
  const [lesson, setLesson] = useState<ChapterLesson | null>(null);
  const [isLoadingLesson, setIsLoadingLesson] = useState(true);

  // Kotoba State
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'table' | 'flashcard'>('card');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedKotobaModal, setSelectedKotobaModal] = useState<KotobaItem | null>(null);

  // Local state with user edits and deletes applied
  const [localKotoba, setLocalKotoba] = useState<KotobaItem[]>(() => applyCustomKotoba(allKotoba));
  const [editingWord, setEditingWord] = useState<KotobaItem | null>(null);
  const [deletingWord, setDeletingWord] = useState<KotobaItem | null>(null);

  // Load lesson dynamically per chapter
  useEffect(() => {
    let isMounted = true;
    setIsLoadingLesson(true);
    loadChapterLesson(bab).then((data) => {
      if (isMounted) {
        setLesson(data);
        setIsLoadingLesson(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [bab]);

  useEffect(() => {
    setLocalKotoba(applyCustomKotoba(allKotoba));
  }, [allKotoba]);

  const handleSaveEdit = (updated: KotobaItem) => {
    persistKotobaEdit(updated);
    setLocalKotoba(applyCustomKotoba(allKotoba));
  };

  const handleConfirmDelete = (id: string) => {
    persistKotobaDelete(id);
    setLocalKotoba(applyCustomKotoba(allKotoba));
  };

  // Filter kotoba for this chapter
  const chapterWords = localKotoba.filter(k => k.bab === bab);

  // Filter kanji for this chapter
  const chapterKanji = KANJI_DATA.filter(k => k.bab === bab);

  // Categories present in this chapter
  const categoriesInChapter = Array.from(new Set(chapterWords.map(k => k.kategori)));

  // Filtered by category & search query
  const filteredWords = chapterWords.filter(word => {
    const matchesCat = selectedCategory === 'Semua' || word.kategori === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      word.kanji.toLowerCase().includes(q) ||
      word.kana.toLowerCase().includes(q) ||
      word.romaji.toLowerCase().includes(q) ||
      word.arti.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const learnedCount = chapterWords.filter(k => learnedKotobaIds.includes(k.id)).length;

  const currentFlashcard = filteredWords[flashcardIndex] || filteredWords[0];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % filteredWords.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  return (
    <div className="space-y-6 text-left pb-16">
      
      {/* ── Top Navigation Row ── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] text-sm font-bold border border-[#8FB4E3]/25 shadow-xs hover:border-[#8FB4E3] transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-[#8FB4E3]" />
          <span>Daftar Bab</span>
        </button>

        <div className="flex items-center gap-2">
          {bab > 1 && (
            <button
              onClick={() => {
                sound.playClick();
                onSelectChapter(bab - 1);
              }}
              className="px-3.5 py-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] hover:text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/20 shadow-xs transition-colors"
            >
              ← Bab {bab - 1}
            </button>
          )}

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('latihan');
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] border border-[#8FB4E3]/40 text-xs sm:text-sm font-bold shadow-[0_4px_15px_rgba(143,180,227,0.25)] transition-all active:scale-95"
          >
            <Award className="w-4 h-4 text-[#8FB4E3]" />
            <span>Latihan Bab {bab} (18 Mode)</span>
          </button>

          {bab < 50 && (
            <button
              onClick={() => {
                sound.playClick();
                onSelectChapter(bab + 1);
              }}
              className="px-3.5 py-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] hover:text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/20 shadow-xs transition-colors"
            >
              <span>Bab {bab + 1} →</span>
            </button>
          )}
        </div>
      </div>

      {/* ── Chapter Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl border border-[#8FB4E3]/25 shadow-[0_20px_60px_-15px_rgba(12,27,51,0.9),0_0_40px_rgba(143,180,227,0.12)] bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] p-6 sm:p-8 text-[#EEF1F6]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16294A]/80 border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-black uppercase tracking-wider font-mono">
                Minna no Nihongo {bab <= 25 ? 'Shokyu I' : 'Shokyu II'} · Bab {bab}
              </span>
              {lesson?.subTitle && (
                <span className="text-xs font-bold text-[#8FB4E3] bg-[#16294A] px-2.5 py-1 rounded-full border border-[#8FB4E3]/30">
                  {lesson.subTitle}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[#EEF1F6] tracking-tight font-['Manrope']">
              第{bab}課 · {lesson?.title || `Pelajaran ${bab}`}
            </h1>

            <p className="text-sm text-[#8793A8] max-w-2xl leading-relaxed">
              {lesson?.summary || 'Kuasai tata bahasa (Bunpou), pola kalimat (Bunkei), contoh (Reibun), percakapan (Kaiwa), kosakata, dan kanji terkait pada bab ini.'}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/20 text-center min-w-[80px]">
              <span className="text-[11px] font-bold text-[#8793A8] block uppercase">Kosakata</span>
              <span className="text-lg font-black text-[#8FB4E3] font-['Manrope']">{chapterWords.length}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/20 text-center min-w-[80px]">
              <span className="text-[11px] font-bold text-[#8793A8] block uppercase">Kanji</span>
              <span className="text-lg font-black text-[#EEF1F6] font-['Manrope']">{chapterKanji.length}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/20 text-center min-w-[80px]">
              <span className="text-[11px] font-bold text-[#8793A8] block uppercase">Hafal</span>
              <span className="text-lg font-black text-emerald-400 font-['Manrope']">{learnedCount}</span>
            </div>
          </div>
        </div>

        {/* ── 5 Tab Navigation: Bunpou | Bunkei & Reibun | Kaiwa | Kotoba | Kanji ── */}
        <div className="mt-8 pt-4 border-t border-[#8FB4E3]/20 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('bunpou');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              sectionTab === 'bunpou'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                : 'bg-[#16294A]/60 hover:bg-[#16294A] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/15'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#8FB4E3]" />
            <span>文法 Tata Bahasa ({lesson?.tataBahasa?.length || 0})</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('bunkei');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              sectionTab === 'bunkei'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                : 'bg-[#16294A]/60 hover:bg-[#16294A] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/15'
            }`}
          >
            <FileText className="w-4 h-4 text-[#8FB4E3]" />
            <span>文型・例文 Pola & Contoh</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('kaiwa');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              sectionTab === 'kaiwa'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                : 'bg-[#16294A]/60 hover:bg-[#16294A] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/15'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-[#8FB4E3]" />
            <span>会話 Percakapan</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('kotoba');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              sectionTab === 'kotoba'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                : 'bg-[#16294A]/60 hover:bg-[#16294A] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/15'
            }`}
          >
            <Layers className="w-4 h-4 text-[#8FB4E3]" />
            <span>言葉 Kosakata ({chapterWords.length})</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('kanji');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              sectionTab === 'kanji'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                : 'bg-[#16294A]/60 hover:bg-[#16294A] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/15'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#8FB4E3]" />
            <span>漢字 Kanji Bab Ini ({chapterKanji.length})</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('latihan');
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
              sectionTab === 'latihan'
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                : 'bg-[#16294A]/60 hover:bg-[#16294A] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/15'
            }`}
          >
            <Award className="w-4 h-4 text-[#8FB4E3]" />
            <span>練習 Latihan Bab (18 Mode)</span>
          </button>
        </div>
      </div>

      {/* ── TAB 1: TATA BAHASA (BUNPOU) ── */}
      {sectionTab === 'bunpou' && (
        <div className="space-y-6">
          {isLoadingLesson ? (
            <div className="p-12 text-center text-[#8793A8]">
              <div className="w-8 h-8 border-2 border-[#8FB4E3] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm font-semibold">Memuat materi tata bahasa Bab {bab}...</p>
            </div>
          ) : lesson?.tataBahasa && lesson.tataBahasa.length > 0 ? (
            <div className="space-y-6">
              {lesson.tataBahasa.map((item) => (
                <div
                  key={item.point}
                  className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/20 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_rgba(12,27,51,0.5)] hover:border-[#8FB4E3]/50 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1F3760] to-[#274474] border border-[#8FB4E3]/30 text-[#8FB4E3] text-sm font-black flex items-center justify-center font-['Manrope'] shadow-xs">
                        {item.point}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-[#EEF1F6] font-['Manrope']">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  {/* Formula / Format Box */}
                  {item.polaFormat && (
                    <div className="p-3.5 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/25 text-[#8FB4E3] font-mono text-xs sm:text-sm font-bold flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-[#1F3760] text-[#EEF1F6] text-[11px] uppercase tracking-wider border border-[#8FB4E3]/30">
                        Pola
                      </span>
                      <span>{item.polaFormat}</span>
                    </div>
                  )}

                  {/* Explanation text */}
                  <p className="text-sm text-[#EEF1F6]/90 leading-relaxed whitespace-pre-line font-medium">
                    {item.explanation}
                  </p>

                  {/* Examples */}
                  {item.examples && item.examples.length > 0 && (
                    <div className="space-y-3 pt-3 border-t border-[#8FB4E3]/15">
                      <h4 className="text-xs font-bold text-[#8793A8] uppercase tracking-wider">
                        Contoh Kalimat Penggunaan:
                      </h4>
                      <div className="space-y-2.5">
                        {item.examples.map((ex, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-[#0C1B33]/60 border border-[#8FB4E3]/15 flex items-start justify-between gap-3 group hover:border-[#8FB4E3]/40 transition-all"
                          >
                            <div className="space-y-1">
                              <p className="text-base font-bold text-[#EEF1F6] japanese-text">
                                {ex.japanese}
                              </p>
                              <p className="text-xs text-[#8FB4E3] font-mono">
                                {ex.romaji}
                              </p>
                              <p className="text-xs text-[#8793A8]">
                                {ex.indonesian}
                              </p>
                            </div>
                            <button
                              onClick={() => speakJapanese(ex.japanese)}
                              className="p-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 transition-colors shrink-0"
                              title="Dengarkan audio"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Referensi & Budaya Card */}
              {lesson.referensiInfo && (
                <div className="rounded-3xl bg-gradient-to-br from-[#16294A] to-[#1F3760] border border-[#8FB4E3]/30 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_rgba(12,27,51,0.5)]">
                  <div className="flex items-center gap-2.5 text-[#8FB4E3]">
                    <Info className="w-5 h-5 text-[#8FB4E3]" />
                    <h3 className="text-lg font-black text-[#EEF1F6] font-['Manrope']">
                      {lesson.referensiInfo.title}
                    </h3>
                  </div>
                  {lesson.referensiInfo.description && (
                    <p className="text-sm text-[#EEF1F6]/85 leading-relaxed">
                      {lesson.referensiInfo.description}
                    </p>
                  )}
                  {lesson.referensiInfo.notes && (
                    <ul className="space-y-1.5 list-disc list-inside text-xs text-[#8793A8]">
                      {lesson.referensiInfo.notes.map((note, idx) => (
                        <li key={idx}>{note}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-[#8793A8] bg-[#16294A] rounded-3xl border border-[#8FB4E3]/20">
              Belum ada data tata bahasa khusus untuk bab ini.
            </div>
          )}
        </div>
      )}

      {/* ── TAB 2: POLA & CONTOH KALIMAT (BUNKEI & REIBUN) ── */}
      {sectionTab === 'bunkei' && (
        <div className="space-y-8">
          {/* Bunkei / Pola Kalimat */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FB4E3]" />
              <h3 className="text-lg font-black text-[#EEF1F6] uppercase tracking-wider font-['Manrope']">
                文型 · Pola Kalimat Inti (Bunkei)
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lesson?.polaKalimat.map((pola) => (
                <div
                  key={pola.id}
                  className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 space-y-2 hover:border-[#8FB4E3]/40 transition-all flex flex-col justify-between shadow-[0_4px_16px_rgba(12,27,51,0.4)]"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#8FB4E3] px-2 py-0.5 rounded-md bg-[#0C1B33]/80 border border-[#8FB4E3]/20">
                        Pola #{pola.id}
                      </span>
                      <button
                        onClick={() => speakJapanese(pola.japanese)}
                        className="p-1.5 rounded-xl bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 transition-colors"
                        title="Dengarkan audio"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-lg font-bold text-[#EEF1F6] japanese-text">
                      {pola.japanese}
                    </p>
                    <p className="text-xs text-[#8FB4E3] font-mono">
                      {pola.romaji}
                    </p>
                  </div>
                  <p className="text-xs text-[#8793A8] pt-2 border-t border-[#8FB4E3]/15">
                    {pola.indonesian}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Reibun / Contoh Kalimat */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8FB4E3]" />
              <h3 className="text-lg font-black text-[#EEF1F6] uppercase tracking-wider font-['Manrope']">
                例文 · Contoh Kalimat Tanya-Jawab (Reibun)
              </h3>
            </div>

            <div className="space-y-3">
              {lesson?.contohKalimat.map((ex) => (
                <div
                  key={ex.id}
                  className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 space-y-2.5 hover:border-[#8FB4E3]/40 transition-all shadow-[0_4px_16px_rgba(12,27,51,0.4)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      {ex.question && (
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-black text-[#8FB4E3] font-mono mt-0.5">Q:</span>
                          <p className="text-base font-bold text-[#EEF1F6] japanese-text">
                            {ex.question}
                          </p>
                        </div>
                      )}
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-black text-emerald-400 font-mono mt-0.5">A:</span>
                        <p className="text-base font-bold text-[#EEF1F6] japanese-text">
                          {ex.answer}
                        </p>
                      </div>
                      <p className="text-xs text-[#8FB4E3] font-mono pl-5">
                        {ex.romaji}
                      </p>
                      <p className="text-xs text-[#8793A8] pl-5">
                        {ex.indonesian}
                      </p>
                    </div>

                    <button
                      onClick={() => speakJapanese(`${ex.question || ''} ${ex.answer}`)}
                      className="p-2 rounded-xl bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 transition-colors shrink-0"
                      title="Dengarkan dialog"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 3: PERCAKAPAN (KAIWA) ── */}
      {sectionTab === 'kaiwa' && (
        <div className="space-y-6">
          {lesson?.percakapan ? (
            <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-8 space-y-6 shadow-[0_4px_24px_rgba(12,27,51,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#8FB4E3]/15">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8FB4E3] uppercase tracking-wider block mb-1">
                    Percakapan Otentik Minna no Nihongo
                  </span>
                  <h2 className="text-2xl font-black text-[#EEF1F6] font-['Manrope']">
                    {lesson.percakapan.title}
                  </h2>
                  {lesson.percakapan.situasi && (
                    <p className="text-xs text-[#8793A8] mt-1 italic">
                      Situasi: {lesson.percakapan.situasi}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => {
                    const fullText = lesson.percakapan.dialogs.map(d => `${d.speaker}、${d.japanese}`).join('。 ');
                    speakJapanese(fullText);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[#1F3760] to-[#274474] border border-[#8FB4E3]/40 text-[#EEF1F6] text-xs font-bold hover:brightness-110 shadow-xs transition-all shrink-0"
                >
                  <Volume2 className="w-4 h-4 text-[#8FB4E3]" />
                  <span>Putar Seluruh Dialog</span>
                </button>
              </div>

              {/* Dialog Lines */}
              <div className="space-y-4">
                {lesson.percakapan.dialogs.map((dialog, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#0C1B33]/60 border border-[#8FB4E3]/15 hover:border-[#8FB4E3]/40 transition-all flex items-start gap-4"
                  >
                    {/* Speaker Avatar Badge */}
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#16294A] to-[#1F3760] border border-[#8FB4E3]/30 text-[#8FB4E3] font-black text-xs flex items-center justify-center shrink-0 shadow-sm font-['Manrope']">
                      {dialog.speaker.slice(0, 2)}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#EEF1F6]">
                          {dialog.speaker}
                        </span>
                        {dialog.role && (
                          <span className="text-[10px] text-[#8793A8]">
                            ({dialog.role})
                          </span>
                        )}
                      </div>
                      <p className="text-base font-bold text-[#EEF1F6] japanese-text">
                        {dialog.japanese}
                      </p>
                      <p className="text-xs text-[#8FB4E3] font-mono">
                        {dialog.romaji}
                      </p>
                      <p className="text-xs text-[#8793A8]">
                        {dialog.indonesian}
                      </p>
                    </div>

                    <button
                      onClick={() => speakJapanese(dialog.japanese)}
                      className="p-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 transition-colors shrink-0"
                      title="Dengarkan kalimat ini"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-[#8793A8] bg-[#16294A] rounded-3xl border border-[#8FB4E3]/20">
              Percakapan untuk bab ini sedang disiapkan.
            </div>
          )}
        </div>
      )}

      {/* ── TAB 4: KOSAKATA (KOTOBA) ── */}
      {sectionTab === 'kotoba' && (
        <div className="space-y-6">
          {/* Controls row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Search within chapter */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#8793A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari kata di Bab ini (Kanji, Romaji, Arti)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/25 text-sm text-[#EEF1F6] placeholder-[#8793A8] focus:outline-hidden focus:border-[#8FB4E3] transition-all"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/25 self-start sm:self-auto">
              <button
                onClick={() => setViewMode('card')}
                className={`p-2 rounded-xl text-xs font-bold transition-colors ${
                  viewMode === 'card'
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
                title="Tampilan Kartu"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-xl text-xs font-bold transition-colors ${
                  viewMode === 'table'
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
                title="Tampilan Tabel"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('flashcard')}
                className={`p-2 rounded-xl text-xs font-bold transition-colors ${
                  viewMode === 'flashcard'
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
                title="Mode Flashcard"
              >
                <Layers className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('Semua')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === 'Semua'
                  ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                  : 'bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/20'
              }`}
            >
              Semua ({chapterWords.length})
            </button>
            {categoriesInChapter.map((cat) => {
              const count = chapterWords.filter((k) => k.kategori === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                      : 'bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-[10px] opacity-75 font-mono">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Words Render Modes */}
          {viewMode === 'card' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWords.map((word) => {
                const isLearned = learnedKotobaIds.includes(word.id);
                const isBookmarked = bookmarkedKotobaIds.includes(word.id);

                return (
                  <div
                    key={word.id}
                    onClick={() => setSelectedKotobaModal(word)}
                    className={`rounded-3xl border p-5 flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01] shadow-[0_4px_16px_rgba(12,27,51,0.4)] ${
                      isLearned
                        ? 'border-emerald-500/30 bg-[#0F3025]'
                        : 'border-[#8FB4E3]/20 bg-[#16294A] hover:border-[#8FB4E3]/50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#8793A8] mb-2">
                        <span className="font-mono font-bold">#{word.no}</span>
                        <span className="px-2 py-0.5 rounded-md bg-[#0C1B33] text-[#8FB4E3] border border-[#8FB4E3]/25 font-bold text-[10px]">
                          {word.kategori}
                        </span>
                      </div>

                      <div className="my-2">
                        <h3 className="text-2xl font-black text-[#EEF1F6] japanese-text">
                          {word.kanji}
                        </h3>
                        <p className="text-xs text-[#8FB4E3] font-bold mt-0.5">
                          {word.kana} · <span className="font-mono">{word.romaji}</span>
                        </p>
                      </div>

                      <p className="text-sm font-semibold text-[#8793A8] line-clamp-2 mt-2">
                        {word.arti}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#8FB4E3]/15 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakJapanese(word.kanji);
                          }}
                          className="p-1.5 rounded-xl bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 transition-colors"
                          title="Dengarkan audio"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleBookmark(word.id);
                          }}
                          className={`p-1.5 rounded-xl transition-colors ${
                            isBookmarked ? 'text-amber-400 bg-amber-400/10' : 'text-[#8793A8] hover:text-[#EEF1F6]'
                          }`}
                          title="Bookmark"
                        >
                          <Star className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingWord(word);
                          }}
                          className="p-1.5 rounded-xl text-[#8793A8] hover:text-[#EEF1F6] transition-colors"
                          title="Edit kata"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeletingWord(word);
                          }}
                          className="p-1.5 rounded-xl text-[#8793A8] hover:text-rose-400 transition-colors"
                          title="Hapus kata"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLearned(word.id);
                          if (!isLearned) sound.playCorrect();
                        }}
                        className={`p-1.5 rounded-xl transition-colors ${
                          isLearned ? 'text-emerald-400' : 'text-[#8793A8]/40 hover:text-emerald-400'
                        }`}
                        title={isLearned ? 'Sudah hafal' : 'Tandai sudah hafal'}
                      >
                        <CheckCircle2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {viewMode === 'table' && (
            <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 overflow-hidden shadow-[0_4px_24px_rgba(12,27,51,0.5)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#0C1B33] text-[#8793A8] text-xs font-bold uppercase tracking-wider border-b border-[#8FB4E3]/20">
                    <tr>
                      <th className="p-4">No</th>
                      <th className="p-4">Kanji</th>
                      <th className="p-4">Kana / Romaji</th>
                      <th className="p-4">Arti Indonesia</th>
                      <th className="p-4">Kategori</th>
                      <th className="p-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#8FB4E3]/15">
                    {filteredWords.map((word) => (
                      <tr
                        key={word.id}
                        onClick={() => setSelectedKotobaModal(word)}
                        className="hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <td className="p-4 font-mono font-bold text-[#8793A8]">#{word.no}</td>
                        <td className="p-4 font-bold text-[#EEF1F6] text-base japanese-text">{word.kanji}</td>
                        <td className="p-4 text-[#8FB4E3] font-mono text-xs">{word.kana} ({word.romaji})</td>
                        <td className="p-4 text-[#EEF1F6]">{word.arti}</td>
                        <td className="p-4 text-xs text-[#8793A8]">{word.kategori}</td>
                        <td className="p-4 text-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speakJapanese(word.kanji);
                            }}
                            className="p-1.5 rounded-lg bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {viewMode === 'flashcard' && currentFlashcard && (
            <div className="max-w-xl mx-auto space-y-6">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="min-h-[280px] rounded-3xl bg-gradient-to-br from-[#16294A] to-[#1F3760] border border-[#8FB4E3]/30 shadow-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-[#8FB4E3]"
              >
                {!isFlipped ? (
                  <div className="space-y-4">
                    <span className="text-xs font-mono text-[#8793A8] uppercase tracking-wider block">
                      Klik kartu untuk melihat arti
                    </span>
                    <h2 className="text-5xl font-black text-[#EEF1F6] japanese-text">
                      {currentFlashcard.kanji}
                    </h2>
                    <p className="text-lg font-bold text-[#8FB4E3]">
                      {currentFlashcard.kana}
                    </p>
                    <p className="text-xs text-[#8793A8] font-mono">
                      {currentFlashcard.romaji}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                      Arti & Terjemahan
                    </span>
                    <h3 className="text-2xl font-bold text-[#EEF1F6]">
                      {currentFlashcard.arti}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[#0C1B33] border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-bold inline-block">
                      {currentFlashcard.kategori}
                    </span>
                  </div>
                )}
              </div>

              {/* Flashcard Nav */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevFlashcard}
                  className="px-4 py-2 rounded-xl bg-[#16294A] border border-[#8FB4E3]/25 text-[#EEF1F6] text-xs font-bold hover:bg-[#1F3760]"
                >
                  ← Sebelumnya
                </button>
                <span className="text-xs font-mono text-[#8793A8]">
                  {flashcardIndex + 1} / {filteredWords.length}
                </span>
                <button
                  onClick={handleNextFlashcard}
                  className="px-4 py-2 rounded-xl bg-[#16294A] border border-[#8FB4E3]/25 text-[#EEF1F6] text-xs font-bold hover:bg-[#1F3760]"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 5: KANJI BAB INI (KANJI) ── */}
      {sectionTab === 'kanji' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-black text-[#EEF1F6] font-['Manrope']">
                Kanji Terkait Bab {bab}
              </h3>
              <p className="text-xs text-[#8793A8]">
                Daftar huruf Kanji yang dipelajari dan sering muncul pada kosakata Bab {bab}. Klik kartu untuk membuka panduan coretan & kanvas menulis.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#16294A] border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-bold font-mono">
              {chapterKanji.length} Kanji
            </span>
          </div>

          {chapterKanji.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {chapterKanji.map((kanji) => {
                return (
                  <div
                    key={kanji.id}
                    onClick={() => {
                      sound.playClick();
                      if (onSelectKanji) onSelectKanji(kanji);
                    }}
                    className="p-4 rounded-3xl bg-[#16294A] border border-[#8FB4E3]/20 hover:border-[#8FB4E3] cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between text-center group shadow-[0_4px_16px_rgba(12,27,51,0.4)]"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-[#8793A8] mb-1 font-mono">
                        <span>#{kanji.id}</span>
                        <span className="px-1.5 py-0.5 rounded bg-[#0C1B33] text-[#8FB4E3] border border-[#8FB4E3]/20">
                          {kanji.strokeCount}画
                        </span>
                      </div>
                      <div className="py-2">
                        <span className="kanji-font text-5xl font-black text-[#EEF1F6] group-hover:text-[#8FB4E3] transition-colors inline-block select-none">
                          {kanji.kanji}
                        </span>
                      </div>
                      <p className="text-xs font-black text-[#EEF1F6] font-['Manrope']">
                        {kanji.reading}
                      </p>
                      <p className="text-[11px] font-bold text-[#8FB4E3] truncate mt-0.5">
                        {kanji.meaning}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#8FB4E3]/15 flex items-center justify-center gap-1 text-[10px] text-[#8FB4E3] font-bold">
                      <span>Lihat Detail</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-8 text-center text-[#8793A8] bg-[#16294A] rounded-3xl border border-[#8FB4E3]/20">
              Tidak ada kanji pengenalan baru khusus pada bab ini, atau seluruh kanji telah dipelajari pada bab pengantar sebelumnya.
            </div>
          )}
        </div>
      )}

      {/* ── TAB 6: LATIHAN BAB (18 MODE LENGKAP) ── */}
      {sectionTab === 'latihan' && (
        <ChapterExerciseSection
          bab={bab}
          lesson={lesson}
          chapterWords={chapterWords}
          chapterKanji={chapterKanji}
        />
      )}

      {/* ── Modals: Kotoba Detail, Edit, Delete ── */}
      {selectedKotobaModal && (
        <KotobaModal
          word={selectedKotobaModal}
          onClose={() => setSelectedKotobaModal(null)}
          isLearned={learnedKotobaIds.includes(selectedKotobaModal.id)}
          isBookmarked={bookmarkedKotobaIds.includes(selectedKotobaModal.id)}
          onToggleLearned={onToggleLearned}
          onToggleBookmark={onToggleBookmark}
        />
      )}

      {editingWord && (
        <KotobaEditModal
          isOpen={!!editingWord}
          word={editingWord}
          onClose={() => setEditingWord(null)}
          onSave={handleSaveEdit}
        />
      )}

      {deletingWord && (
        <KotobaDeleteModal
          isOpen={!!deletingWord}
          word={deletingWord}
          onClose={() => setDeletingWord(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

    </div>
  );
};
