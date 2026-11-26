import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  VolumeX,
  CheckCircle2, 
  Star, 
  Layers, 
  List, 
  LayoutGrid, 
  Award,
  Search,
  BookOpen,
  Braces,
  MessageSquareText,
  MessagesSquare,
  Pencil,
  Trash2,
  FileText,
  MessageSquare,
  Sparkles,
  Info,
  ExternalLink,
  Play,
  Pause,
  Square,
  SkipForward
} from 'lucide-react';
import { KotobaItem, KanjiItem, ChapterLesson } from '../types';
import { KANJI_DATA } from '../data/kanjiData';
import { loadChapterLesson } from '../data/materi';
import { speakJapanese, sound } from '../utils/audio';
import { KotobaModal } from './KotobaModal';
import { KotobaEditModal } from './KotobaEditModal';
import { KotobaDeleteModal } from './KotobaDeleteModal';
import { ChapterExerciseSection } from './ChapterExerciseSection';
import { FuriganaText } from './FuriganaText';
import { ShadowingMicButton } from './ShadowingMicButton';
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
  isAdminMode?: boolean;
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
  onSelectKanji,
  isAdminMode = false
}) => {
  // Main Chapter Detail Tabs: 'all' displays full comprehensive lesson on 1 page!
  const [sectionTab, setSectionTab] = useState<'all' | 'bunpou' | 'bunkei' | 'kaiwa' | 'kotoba' | 'kanji' | 'latihan'>('all');

  // Lesson data loaded lazily
  const [lesson, setLesson] = useState<ChapterLesson | null>(null);
  const [isLoadingLesson, setIsLoadingLesson] = useState(true);
  const [lessonError, setLessonError] = useState<string | null>(null);
  const [mutedSpeaker, setMutedSpeaker] = useState<string | null>(null);

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

  // Load lesson dynamically per chapter and listen to admin updates
  useEffect(() => {
    let isMounted = true;
    const fetchLesson = () => {
      setIsLoadingLesson(true);
      setLessonError(null);
      loadChapterLesson(bab)
        .then((data) => {
          if (isMounted) {
            if (!data) {
              setLessonError(`Gagal memuat data materi Bab ${bab}. Silakan coba muat ulang.`);
            }
            setLesson(data);
            setIsLoadingLesson(false);
          }
        })
        .catch((err) => {
          console.error(`Failed loading chapter ${bab}:`, err);
          if (isMounted) {
            setLessonError(`Terjadi kesalahan saat memuat materi Bab ${bab}.`);
            setIsLoadingLesson(false);
          }
        });
    };
    fetchLesson();

    const handleUpdate = () => {
      fetchLesson();
    };
    window.addEventListener('zenora_materi_updated', handleUpdate);

    return () => {
      isMounted = false;
      window.removeEventListener('zenora_materi_updated', handleUpdate);
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

  // Auto-Play Audio Playlist state (Kotoba hands-free listening)
  const [isPlaylistPlaying, setIsPlaylistPlaying] = useState(false);
  const [playlistIndex, setPlaylistIndex] = useState(0);

  useEffect(() => {
    setIsPlaylistPlaying(false);
    setPlaylistIndex(0);
  }, [bab]);

  useEffect(() => {
    if (!isPlaylistPlaying || filteredWords.length === 0) return;
    const item = filteredWords[playlistIndex];
    if (!item) {
      setIsPlaylistPlaying(false);
      return;
    }
    speakJapanese(item.kana || item.kanji);
    const timer = setTimeout(() => {
      if (playlistIndex + 1 < filteredWords.length) {
        setPlaylistIndex((prev) => prev + 1);
      } else {
        setIsPlaylistPlaying(false);
        setPlaylistIndex(0);
      }
    }, 2600);
    return () => clearTimeout(timer);
  }, [isPlaylistPlaying, playlistIndex, filteredWords]);

  /* ─────────────────────────────────────────────────────────────
     RENDER SECTION 1: BUNPOU (TATA BAHASA)
     ───────────────────────────────────────────────────────────── */
  const renderBunpouSection = () => (
    <div className="space-y-6">
      {isLoadingLesson ? (
        <div className="p-12 text-center text-[var(--text-muted)]">
          <div className="w-8 h-8 border-2 border-[#3978D6] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm font-semibold">Memuat materi tata bahasa Bab {bab}...</p>
        </div>
      ) : lessonError ? (
        <div className="p-8 text-center bg-red-500/10 rounded-3xl border border-red-500/30 space-y-3">
          <p className="text-sm font-bold text-red-400">{lessonError}</p>
          <button
            onClick={() => {
              setIsLoadingLesson(true);
              setLessonError(null);
              loadChapterLesson(bab).then((d) => {
                setLesson(d);
                if (!d) setLessonError(`Gagal memuat data materi Bab ${bab}.`);
                setIsLoadingLesson(false);
              });
            }}
            className="px-4 py-2 rounded-xl bg-[#2866B5] text-white text-xs font-bold hover:brightness-110 transition-all cursor-pointer"
          >
            Muat Ulang Bab {bab}
          </button>
        </div>
      ) : lesson?.tataBahasa && lesson.tataBahasa.length > 0 ? (
        <div className="space-y-6">
          {lesson.tataBahasa.map((item) => (
            <div
              key={item.point}
              className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_rgba(8,21,47,0.7)] hover:border-[#3978D6]/60 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] border border-[#3978D6]/40 text-white text-sm font-black flex items-center justify-center font-['Manrope'] shadow-[0_0_10px_rgba(57,120,214,0.4)]">
                    {item.point}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                    <FuriganaText text={item.title} />
                  </h2>
                </div>
              </div>

              {/* Formula / Format Box */}
              {item.polaFormat && (
                <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/90 border border-[#3978D6]/35 text-[var(--text-primary)] text-sm sm:text-base font-bold flex flex-wrap items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#3978D6] text-white text-xs uppercase tracking-wider border border-[#3978D6]/40 shrink-0 font-bold shadow-[0_0_8px_rgba(57,120,214,0.5)]">
                    Pola
                  </span>
                  <span className="japanese-text leading-relaxed text-[var(--text-primary)]"><FuriganaText text={item.polaFormat} /></span>
                </div>
              )}

              {/* Explanation text */}
              <p className="text-base text-[var(--text-primary)] leading-relaxed whitespace-pre-line font-medium">
                {item.explanation}
              </p>

              {/* Examples */}
              {item.examples && item.examples.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-[#3978D6]/15">
                  <h4 className="text-xs font-black text-[#2456A6] uppercase tracking-wider">
                    Contoh Kalimat Penggunaan:
                  </h4>
                  <div className="space-y-3">
                    {item.examples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 flex items-start justify-between gap-3 group hover:border-[#3978D6]/50 transition-all"
                      >
                        <div className="space-y-1.5 flex-1">
                          <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] japanese-text leading-relaxed">
                            <FuriganaText text={ex.japanese} />
                          </p>
                          <p className="text-sm font-semibold text-[var(--secondary-accent)]">
                            {ex.romaji}
                          </p>
                          <p className="text-sm font-medium text-[var(--text-secondary)]">
                            {ex.indonesian}
                          </p>
                        </div>
                        <button
                          onClick={() => speakJapanese(ex.japanese)}
                          className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#3978D6] text-[var(--text-primary)] hover:text-[var(--text-primary)] border border-[#3978D6]/25 transition-all shrink-0 cursor-pointer"
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
            <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[#3978D6]/35 p-6 sm:p-8 space-y-4 shadow-[0_4px_20px_rgba(8,21,47,0.7)]">
              <div className="flex items-center gap-2.5 text-[#2456A6]">
                <Info className="w-5 h-5 text-[#3978D6]" />
                <h3 className="text-xl font-black text-[var(--text-primary)] font-['Manrope']">
                  {lesson.referensiInfo.title}
                </h3>
              </div>
              {lesson.referensiInfo.description && (
                <p className="text-base text-[var(--text-primary)] leading-relaxed">
                  {lesson.referensiInfo.description}
                </p>
              )}
              {lesson.referensiInfo.notes && (
                <ul className="space-y-2 list-disc list-inside text-sm text-[var(--text-secondary)] leading-relaxed">
                  {lesson.referensiInfo.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-3xl border border-[#3978D6]/20">
          Belum ada data tata bahasa khusus untuk bab ini.
        </div>
      )}
    </div>
  );

  /* ─────────────────────────────────────────────────────────────
     RENDER SECTION 2: BUNKEI & REIBUN (POLA & CONTOH KALIMAT)
     ───────────────────────────────────────────────────────────── */
  const renderBunkeiSection = () => (
    <div className="space-y-8">
      {/* Bunkei / Pola Kalimat */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Braces className="w-5 h-5 text-[#3978D6]" />
          <h3 className="text-lg font-black text-[var(--text-primary)] uppercase tracking-wider font-['Manrope']">
            文型 · Pola Kalimat Inti (Bunkei)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lesson?.polaKalimat.map((pola) => (
            <div
              key={pola.id}
              className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/20 p-5 space-y-2 hover:border-[#3978D6]/40 transition-all flex flex-col justify-between shadow-[0_4px_16px_rgba(8,21,47,0.4)]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#3978D6] px-2.5 py-1 rounded-md bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 font-mono">
                    Pola #{pola.id}
                  </span>
                  <button
                    onClick={() => speakJapanese(pola.japanese)}
                    className="p-2 rounded-xl bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/20 transition-colors cursor-pointer"
                    title="Dengarkan audio"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] japanese-text leading-relaxed">
                  <FuriganaText text={pola.japanese} />
                </p>
                <p className="text-sm font-semibold text-[var(--secondary-accent)]">
                  {pola.romaji}
                </p>
              </div>
              <p className="text-sm font-medium text-[var(--text-secondary)] pt-2.5 border-t border-[#3978D6]/15">
                {pola.indonesian}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reibun / Contoh Kalimat */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquareText className="w-5 h-5 text-[var(--secondary-accent)]" />
          <h3 className="text-xl font-black text-[var(--text-primary)] uppercase tracking-wider font-['Manrope']">
            例文 · Contoh Kalimat Tanya-Jawab (Reibun)
          </h3>
        </div>

        <div className="space-y-3">
          {lesson?.contohKalimat.map((ex) => (
            <div
              key={ex.id}
              className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/20 p-5 sm:p-6 space-y-3 hover:border-[#3978D6]/40 transition-all shadow-[0_4px_16px_rgba(8,21,47,0.4)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  {ex.question && (
                    <div className="flex items-start gap-2.5">
                      <span className="text-sm font-black text-[#3978D6] font-mono mt-1 shrink-0">Q:</span>
                      <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] japanese-text leading-relaxed">
                        <FuriganaText text={ex.question} />
                      </p>
                    </div>
                  )}
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm font-black text-emerald-400 font-mono mt-1 shrink-0">A:</span>
                    <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] japanese-text leading-relaxed">
                      <FuriganaText text={ex.answer} />
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-[var(--secondary-accent)] pl-6">
                    {ex.romaji}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-secondary)] pl-6">
                    {ex.indonesian}
                  </p>
                </div>

                <button
                  onClick={() => speakJapanese(`${ex.question || ''} ${ex.answer}`)}
                  className="p-2.5 rounded-xl bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/20 transition-colors shrink-0 cursor-pointer"
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
  );

  /* ─────────────────────────────────────────────────────────────
     RENDER SECTION 3: KAIWA (PERCAKAPAN)
     ───────────────────────────────────────────────────────────── */
  const renderKaiwaSection = () => (
    <div className="space-y-6">
      {lesson?.percakapan ? (
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 sm:p-8 space-y-6 shadow-[0_4px_24px_rgba(8,21,47,0.5)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#3978D6]/15">
            <div>
              <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider block mb-1">
                Percakapan Otentik Minna no Nihongo
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] leading-relaxed">
                <FuriganaText text={lesson.percakapan.title} />
              </h2>
              {lesson.percakapan.situasi && (
                <p className="text-sm text-[var(--text-secondary)] mt-1.5 italic">
                  Situasi: {lesson.percakapan.situasi}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {/* Roleplay Mute Selector */}
              {Array.from(new Set(lesson.percakapan.dialogs.map(d => d.speaker))).length > 1 && (
                <div className="flex items-center gap-1.5 bg-[var(--bg-sidebar)] px-3 py-1.5 rounded-2xl border border-[#3978D6]/25">
                  <VolumeX className="w-3.5 h-3.5 text-[var(--soft-sky)]" />
                  <select
                    value={mutedSpeaker || ''}
                    onChange={(e) => setMutedSpeaker(e.target.value || null)}
                    className="bg-transparent text-xs font-bold text-[var(--text-secondary)] focus:outline-none cursor-pointer"
                    title="Mute peran tokoh tertentu untuk latihan roleplay"
                  >
                    <option value="" className="bg-[var(--bg-sidebar)]">Semua Tokoh (Normal)</option>
                    {Array.from(new Set(lesson.percakapan.dialogs.map(d => d.speaker))).map((sp) => (
                      <option key={sp} value={sp} className="bg-[var(--bg-sidebar)]">
                        Bisukan: {sp} (Peran Anda)
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                onClick={() => {
                  const fullText = lesson.percakapan.dialogs
                    .filter(d => d.speaker !== mutedSpeaker)
                    .map(d => `${d.speaker}、${d.japanese}`)
                    .join('。 ');
                  if (fullText) speakJapanese(fullText);
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] border border-[#3978D6]/40 text-[var(--text-primary)] text-xs font-bold hover:brightness-110 shadow-xs transition-all shrink-0 cursor-pointer"
              >
                <Volume2 className="w-4 h-4 text-[#3978D6]" />
                <span>{mutedSpeaker ? 'Putar Mode Roleplay' : 'Putar Seluruh Dialog'}</span>
              </button>
            </div>
          </div>

          {/* Dialog Lines */}
          <div className="space-y-4">
            {lesson.percakapan.dialogs.map((dialog, idx) => {
              const isMuted = mutedSpeaker === dialog.speaker;
              return (
              <div
                key={idx}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-start gap-4 ${
                  isMuted
                    ? 'bg-[#3978D6]/10 border-[#3978D6]/50 shadow-[0_0_20px_rgba(57,120,214,0.15)]'
                    : 'bg-[var(--bg-sidebar)]/70 border-[#3978D6]/20 hover:border-[#3978D6]/45'
                }`}
              >
                {/* Speaker Avatar Badge */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[#3978D6]/35 text-[#3978D6] font-black text-sm flex items-center justify-center shrink-0 shadow-sm font-['Manrope']">
                  {dialog.speaker.slice(0, 2)}
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                      <FuriganaText text={dialog.speaker} />
                    </span>
                    {dialog.role && (
                      <span className="text-xs font-medium text-[#3978D6]">
                        ({dialog.role})
                      </span>
                    )}
                    {isMuted && (
                      <span className="px-2 py-0.5 rounded-full bg-[#3978D6]/25 text-[var(--text-primary)] text-[10px] font-bold">
                        Giliran Anda Bicara
                      </span>
                    )}
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-[var(--text-primary)] japanese-text leading-relaxed pt-1">
                    <FuriganaText text={dialog.japanese} />
                  </p>
                  <p className="text-sm font-semibold text-[var(--secondary-accent)]">
                    {dialog.romaji}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-secondary)]">
                    {dialog.indonesian}
                  </p>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => speakJapanese(dialog.japanese)}
                    className="p-2.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/20 transition-colors shrink-0 cursor-pointer"
                    title="Dengarkan kalimat ini"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <ShadowingMicButton targetJapanese={dialog.japanese} />
                </div>
              </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-3xl border border-[#3978D6]/20">
          Percakapan untuk bab ini sedang disiapkan.
        </div>
      )}
    </div>
  );

  /* ─────────────────────────────────────────────────────────────
     RENDER SECTION 4: KOTOBA (KOSAKATA)
     ───────────────────────────────────────────────────────────── */
  const renderKotobaSection = () => (
    <div className="space-y-6">
      {/* Controls row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search within chapter */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata di Bab ini (Kanji, Romaji, Arti)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[var(--bg-surface)] border border-[#3978D6]/25 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden focus:border-[#3978D6] transition-all"
          />
        </div>

        {/* View Mode Toggle & Auto-Play Playlist */}
        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {filteredWords.length > 0 && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsPlaylistPlaying((prev) => !prev);
                }}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-[#2866B5] to-[#4389D4] text-white text-xs font-bold cursor-pointer"
                title="Putar otomatis kosakata bab ini"
              >
                {isPlaylistPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                <span>{isPlaylistPlaying ? `Jeda (${playlistIndex + 1}/${filteredWords.length})` : 'Auto-Play Audio'}</span>
              </button>
              {isPlaylistPlaying && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setPlaylistIndex((prev) => (prev + 1) % filteredWords.length);
                    }}
                    className="p-1.5 rounded-lg bg-[var(--bg-elevated)] text-[var(--primary)] cursor-pointer"
                    title="Kata berikutnya"
                  >
                    <SkipForward className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setIsPlaylistPlaying(false);
                      setPlaylistIndex(0);
                    }}
                    className="p-1.5 rounded-lg bg-[var(--bg-elevated)] text-[#E56B78] cursor-pointer"
                    title="Hentikan playlist"
                  >
                    <Square className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          )}

          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[var(--bg-surface)] border border-[#3978D6]/25">
          <button
            onClick={() => setViewMode('card')}
            className={`p-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              viewMode === 'card'
                ? 'bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/40'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            title="Tampilan Kartu"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              viewMode === 'table'
                ? 'bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/40'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            title="Tampilan Tabel"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('flashcard')}
            className={`p-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
              viewMode === 'flashcard'
                ? 'bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/40'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            title="Mode Flashcard"
          >
            <Layers className="w-4 h-4" />
          </button>
        </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setSelectedCategory('Semua')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            selectedCategory === 'Semua'
              ? 'bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
              : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/20'
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
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/20'
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
                className={`rounded-3xl border p-5 flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01] shadow-[0_4px_16px_rgba(8,21,47,0.4)] ${
                  isLearned
                    ? 'border-emerald-500/30 bg-[#0F3025]'
                    : 'border-[#3978D6]/20 bg-[var(--bg-surface)] hover:border-[#3978D6]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-2">
                    <span className="font-mono font-bold">#{word.no}</span>
                    <span className="px-2 py-0.5 rounded-md bg-[var(--bg-sidebar)] text-[#3978D6] border border-[#3978D6]/25 font-bold text-[10px]">
                      {word.kategori}
                    </span>
                  </div>

                  <div className="my-2">
                    <h3 className="text-3xl font-black text-[var(--text-primary)] japanese-text leading-relaxed">
                      <FuriganaText text={word.kanji} reading={word.kana} />
                    </h3>
                    <p className="text-sm font-bold text-[#3978D6] mt-1">
                      {word.kana} · <span className="font-mono text-xs">{word.romaji}</span>
                    </p>
                  </div>

                  <p className="text-base font-semibold text-[var(--text-primary)] line-clamp-2 mt-2 leading-snug">
                    {word.arti}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#3978D6]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakJapanese(word.kanji);
                      }}
                      className="p-1.5 rounded-xl bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/20 transition-colors cursor-pointer"
                      title="Dengarkan audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(word.id);
                      }}
                      className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                        isBookmarked ? 'text-amber-400 bg-amber-400/10' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                      }`}
                      title="Bookmark"
                    >
                      <Star className="w-4 h-4" />
                    </button>

                    {/* Hak mengubah & menghapus kosakata HANYA untuk Admin */}
                    {isAdminMode && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingWord(word);
                          }}
                          className="p-1.5 rounded-xl text-[var(--secondary-accent)] hover:text-[var(--text-primary)] hover:bg-[#69C9DF]/20 transition-colors cursor-pointer"
                          title="Edit kata (Akses Admin)"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setDeletingWord(word);
                          }}
                          className="p-1.5 rounded-xl text-rose-400 hover:text-rose-200 hover:bg-rose-500/20 transition-colors cursor-pointer"
                          title="Hapus kata (Akses Admin)"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLearned(word.id);
                      if (!isLearned) sound.playCorrect();
                    }}
                    className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                      isLearned ? 'text-emerald-400' : 'text-[var(--text-muted)]/40 hover:text-emerald-400'
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
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 overflow-hidden shadow-[0_4px_24px_rgba(8,21,47,0.5)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--bg-sidebar)] text-[#3978D6] text-xs font-black uppercase tracking-wider border-b border-[#3978D6]/20">
                <tr>
                  <th className="p-4">No</th>
                  <th className="p-4">Kanji</th>
                  <th className="p-4">Kana / Romaji</th>
                  <th className="p-4">Arti Indonesia</th>
                  <th className="p-4">Kategori</th>
                  <th className="p-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3978D6]/15">
                {filteredWords.map((word) => (
                  <tr
                    key={word.id}
                    onClick={() => setSelectedKotobaModal(word)}
                    className="hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <td className="p-4 font-mono font-bold text-[#3978D6]">#{word.no}</td>
                    <td className="p-4 font-bold text-[var(--text-primary)] text-xl japanese-text leading-relaxed">
                      <FuriganaText text={word.kanji} reading={word.kana} />
                    </td>
                    <td className="p-4 text-[#3978D6] text-sm font-semibold">{word.kana} <span className="font-mono text-xs text-[var(--text-secondary)]">({word.romaji})</span></td>
                    <td className="p-4 text-base font-medium text-[var(--text-primary)]">{word.arti}</td>
                    <td className="p-4 text-xs font-semibold text-[#3978D6]">{word.kategori}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakJapanese(word.kanji);
                        }}
                        className="p-1.5 rounded-lg bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/20 cursor-pointer"
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
            className="min-h-[280px] rounded-3xl bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[#3978D6]/30 shadow-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:border-[#3978D6]"
          >
            {!isFlipped ? (
              <div className="space-y-4">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                  Klik kartu untuk melihat arti
                </span>
                <h2 className="text-5xl font-black text-[var(--text-primary)] japanese-text leading-relaxed">
                  <FuriganaText text={currentFlashcard.kanji} reading={currentFlashcard.kana} />
                </h2>
                <p className="text-xl font-bold text-[#3978D6]">
                  {currentFlashcard.kana}
                </p>
                <p className="text-sm font-semibold text-[var(--text-secondary)]">
                  {currentFlashcard.romaji}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">
                  Arti & Terjemahan
                </span>
                <h3 className="text-3xl font-extrabold text-[var(--text-primary)] leading-snug">
                  {currentFlashcard.arti}
                </h3>
                <span className="px-3.5 py-1 rounded-full bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[#3978D6] text-xs font-bold inline-block">
                  {currentFlashcard.kategori}
                </span>
              </div>
            )}
          </div>

          {/* Flashcard Nav */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevFlashcard}
              className="px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[#3978D6]/25 text-[var(--text-primary)] text-xs font-bold hover:bg-[var(--bg-elevated)] cursor-pointer"
            >
              ← Sebelumnya
            </button>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              {flashcardIndex + 1} / {filteredWords.length}
            </span>
            <button
              onClick={handleNextFlashcard}
              className="px-4 py-2 rounded-xl bg-[var(--bg-surface)] border border-[#3978D6]/25 text-[var(--text-primary)] text-xs font-bold hover:bg-[var(--bg-elevated)] cursor-pointer"
            >
              Selanjutnya →
            </button>
          </div>
        </div>
      )}
    </div>
  );

  /* ─────────────────────────────────────────────────────────────
     RENDER SECTION 5: KANJI BAB INI
     ───────────────────────────────────────────────────────────── */
  const renderKanjiSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
            Kanji Terkait Bab {bab}
          </h3>
          <p className="text-xs text-[var(--text-muted)]">
            Daftar huruf Kanji yang dipelajari dan sering muncul pada kosakata Bab {bab}. Klik kartu untuk membuka panduan coretan & kanvas menulis.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[#3978D6]/30 text-[#3978D6] text-xs font-bold font-mono">
          {chapterKanji.length} Kanji
        </span>
      </div>

      {chapterKanji.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {chapterKanji.map((kanji) => (
            <div
              key={kanji.id}
              onClick={() => {
                sound.playClick();
                if (onSelectKanji) onSelectKanji(kanji);
              }}
              className="p-4 rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/20 hover:border-[#3978D6] cursor-pointer transition-all hover:scale-[1.02] flex flex-col justify-between text-center group shadow-[0_4px_16px_rgba(8,21,47,0.4)]"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] mb-1 font-mono">
                  <span>#{kanji.id}</span>
                  <span className="px-1.5 py-0.5 rounded bg-[var(--bg-sidebar)] text-[#3978D6] border border-[#3978D6]/20">
                    {kanji.strokeCount}画
                  </span>
                </div>
                <div className="py-2">
                  <span className="kanji-font text-5xl font-black text-[var(--text-primary)] group-hover:text-[#3978D6] transition-colors inline-block select-none">
                    {kanji.kanji}
                  </span>
                </div>
                <p className="text-xs font-black text-[var(--text-primary)] font-['Manrope']">
                  {kanji.reading}
                </p>
                <p className="text-[11px] font-bold text-[#3978D6] truncate mt-0.5">
                  {kanji.meaning}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#3978D6]/15 flex items-center justify-center gap-1 text-[10px] text-[#3978D6] font-bold">
                <span>Lihat Detail</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-surface)] rounded-3xl border border-[#3978D6]/20">
          Tidak ada kanji pengenalan baru khusus pada bab ini, atau seluruh kanji telah dipelajari pada bab pengantar sebelumnya.
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6 text-left pb-16">
      
      {/* ── Top Navigation Row ── */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-sm font-bold border border-[#3978D6]/30 shadow-xs hover:border-[#3978D6]/60 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
          <span>Daftar Bab</span>
        </button>

        <div className="flex items-center gap-2">
          {bab > 1 && (
            <button
              onClick={() => {
                sound.playClick();
                onSelectChapter(bab - 1);
              }}
              className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-bold border border-[#3978D6]/20 shadow-xs transition-colors cursor-pointer"
            >
              ← Bab {bab - 1}
            </button>
          )}

          <button
            onClick={() => {
              sound.playClick();
              setSectionTab('latihan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl neon-btn-primary text-white text-xs sm:text-sm font-bold shadow-[0_4px_15px_rgba(57,120,214,0.4)] transition-all active:scale-95 cursor-pointer"
          >
            <Award className="w-4 h-4 text-[var(--text-primary)]" />
            <span>Latihan Bab {bab} (18 Mode)</span>
          </button>

          {bab < 50 && (
            <button
              onClick={() => {
                sound.playClick();
                onSelectChapter(bab + 1);
              }}
              className="px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-bold border border-[#3978D6]/20 shadow-xs transition-colors cursor-pointer"
            >
              <span>Bab {bab + 1} →</span>
            </button>
          )}
        </div>
      </div>

      {/* ── Chapter Hero Banner ── */}
      <div className="relative overflow-hidden rounded-3xl border border-[#3978D6]/25 shadow-[0_20px_60px_-15px_rgba(8,21,47,0.9),0_0_40px_rgba(57, 120, 214,0.15)] bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)] p-6 sm:p-8 text-[var(--text-primary)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-elevated)]/80 border border-[#3978D6]/35 text-[var(--text-primary)] text-xs font-black uppercase tracking-wider font-mono">
                Minna no Nihongo {bab <= 25 ? 'Shokyu I' : 'Shokyu II'} · Bab {bab}
              </span>
              {lesson?.subTitle && (
                <span className="text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-elevated)] px-2.5 py-1 rounded-full border border-[#3978D6]/30">
                  {lesson.subTitle}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight font-['Manrope']">
              第{bab}課 · {lesson?.title || `Pelajaran ${bab}`}
            </h1>

            <p className="text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {lesson?.summary || 'Kuasai tata bahasa (Bunpou), pola kalimat (Bunkei), contoh (Reibun), percakapan (Kaiwa), kosakata, dan kanji terkait pada bab ini.'}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-center min-w-[80px]">
              <span className="text-[11px] font-bold text-[var(--text-muted)] block uppercase">Kosakata</span>
              <span className="text-lg font-black text-[#2456A6] font-['Manrope']">{chapterWords.length}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-center min-w-[80px]">
              <span className="text-[11px] font-bold text-[var(--text-muted)] block uppercase">Kanji</span>
              <span className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">{chapterKanji.length}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-center min-w-[80px]">
              <span className="text-[11px] font-bold text-[var(--text-muted)] block uppercase">Hafal</span>
              <span className="text-lg font-black text-[#45C6A5] font-['Manrope']">{learnedCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── STICKY TAB NAVIGATION: SEMUA MATERI (1 HALAMAN) + 6 TAB SPESIFIK ── */}
      <div className="sticky top-[72px] z-30 bg-[var(--bg-sidebar)]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-[#3978D6]/25 flex flex-wrap items-center gap-2 shadow-[0_10px_30px_rgba(8,21,47,0.8)]">
        
        {/* TAB 0: SEMUA MATERI DALAM 1 HALAMAN */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('all');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'all'
              ? 'bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <Layers className={`w-4 h-4 ${sectionTab === 'all' ? 'text-[var(--text-primary)]' : 'text-[var(--secondary-accent)]'}`} />
          <span>📖 Semua Materi (1 Halaman)</span>
        </button>

        {/* TAB 1: TATA BAHASA */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('bunpou');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'bunpou'
              ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <BookOpen className={`w-4 h-4 ${sectionTab === 'bunpou' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
          <span>文法 Tata Bahasa ({lesson?.tataBahasa?.length || 0})</span>
        </button>

        {/* TAB 2: POLA & CONTOH */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('bunkei');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'bunkei'
              ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <Braces className={`w-4 h-4 ${sectionTab === 'bunkei' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
          <span>文型・例文 Pola & Contoh</span>
        </button>

        {/* TAB 3: PERCAKAPAN */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('kaiwa');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'kaiwa'
              ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <MessagesSquare className={`w-4 h-4 ${sectionTab === 'kaiwa' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
          <span>会話 Percakapan</span>
        </button>

        {/* TAB 4: KOSAKATA */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('kotoba');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'kotoba'
              ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <Layers className={`w-4 h-4 ${sectionTab === 'kotoba' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
          <span>言葉 Kosakata ({chapterWords.length})</span>
        </button>

        {/* TAB 5: KANJI */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('kanji');
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'kanji'
              ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <Sparkles className={`w-4 h-4 ${sectionTab === 'kanji' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
          <span>漢字 Kanji Bab Ini ({chapterKanji.length})</span>
        </button>

        {/* TAB 6: LATIHAN BAB */}
        <button
          onClick={() => {
            sound.playClick();
            setSectionTab('latihan');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
            sectionTab === 'latihan'
              ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57,120,214,0.45)]'
              : 'bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
          }`}
        >
          <Award className={`w-4 h-4 ${sectionTab === 'latihan' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
          <span>練習 Latihan Bab (18 Mode)</span>
        </button>
      </div>

      {/* ── SECTION CONTENT RENDERING ── */}

      {/* MODE ALL: MENAMPILKAN SEMUA MATERI SECARA UTUH DALAM 1 HALAMAN */}
      {sectionTab === 'all' && (
        <div className="space-y-12">
          
          {/* Section 1: Tata Bahasa (Bunpou) */}
          <section id="section-bunpou" className="space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/30">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-[#3978D6]" />
                <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  文法 · Tata Bahasa Minna no Nihongo Bab {bab}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[#3978D6]/30">
                {lesson?.tataBahasa?.length || 0} Poin Materi
              </span>
            </div>
            {renderBunpouSection()}
          </section>

          {/* Section 2: Pola Kalimat & Contoh Kalimat (Bunkei & Reibun) */}
          <section id="section-bunkei" className="space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/30">
              <div className="flex items-center gap-2.5">
                <Braces className="w-6 h-6 text-[#3978D6]" />
                <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  文型・例文 · Pola Kalimat & Contoh Kalimat Bab {bab}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[#3978D6]/30">
                {lesson?.polaKalimat?.length || 0} Pola · {lesson?.contohKalimat?.length || 0} Contoh
              </span>
            </div>
            {renderBunkeiSection()}
          </section>

          {/* Section 3: Percakapan (Kaiwa) */}
          <section id="section-kaiwa" className="space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/30">
              <div className="flex items-center gap-2.5">
                <MessagesSquare className="w-6 h-6 text-[#3978D6]" />
                <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  会話 · Percakapan Otentik Bab {bab}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[#3978D6]/30">
                {lesson?.percakapan?.dialogs?.length || 0} Dialog
              </span>
            </div>
            {renderKaiwaSection()}
          </section>

          {/* Section 4: Kosakata (Kotoba) */}
          <section id="section-kotoba" className="space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/30">
              <div className="flex items-center gap-2.5">
                <Layers className="w-6 h-6 text-[#3978D6]" />
                <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  言葉 · Kosakata Minna no Nihongo Bab {bab}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[#3978D6]/30">
                {chapterWords.length} Kosakata
              </span>
            </div>
            {renderKotobaSection()}
          </section>

          {/* Section 5: Kanji Bab Ini */}
          <section id="section-kanji" className="space-y-4 scroll-mt-24">
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/30">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-[#3978D6]" />
                <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  漢字 · Kanji Terkait Bab {bab}
                </h2>
              </div>
              <span className="text-xs font-mono font-bold text-[var(--text-primary)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[#3978D6]/30">
                {chapterKanji.length} Huruf Kanji
              </span>
            </div>
            {renderKanjiSection()}
          </section>

          {/* Section 6: Latihan CTA Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-[#3978D6]/20 via-[var(--bg-elevated)] to-[#69C9DF]/20 border border-[#3978D6]/40 text-center space-y-4 shadow-[0_0_30px_rgba(57,120,214,0.25)]">
            <Award className="w-12 h-12 text-[#2456A6] mx-auto animate-bounce" />
            <h3 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope']">
              Uji Penguasaan Bab {bab} Sekarang!
            </h3>
            <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto">
              Tersedia 18 mode latihan interaktif: kuis pilihan ganda, flashcard cerdas, tebak arti, susun pola kalimat, hingga simulasi ujian JLPT/JFT!
            </p>
            <button
              onClick={() => {
                sound.playClick();
                setSectionTab('latihan');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-2xl neon-btn-primary text-white font-bold text-base shadow-[0_4px_20px_rgba(57,120,214,0.4)] transition-all active:scale-95 cursor-pointer"
            >
              Buka Latihan Bab {bab} (18 Mode) →
            </button>
          </div>

        </div>
      )}

      {/* INDIVIDUAL TABS */}
      {sectionTab === 'bunpou' && renderBunpouSection()}
      {sectionTab === 'bunkei' && renderBunkeiSection()}
      {sectionTab === 'kaiwa' && renderKaiwaSection()}
      {sectionTab === 'kotoba' && renderKotobaSection()}
      {sectionTab === 'kanji' && renderKanjiSection()}
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

      {isAdminMode && editingWord && (
        <KotobaEditModal
          isOpen={!!editingWord}
          word={editingWord}
          onClose={() => setEditingWord(null)}
          onSave={handleSaveEdit}
        />
      )}

      {isAdminMode && deletingWord && (
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
