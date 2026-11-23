import React, { useState, useEffect, useCallback } from 'react';
import {
  Briefcase,
  Award,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
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
  Sparkles,
  ChevronDown,
  ChevronRight,
  Layers,
  Target,
  MessageSquare,
  AlertTriangle,
  Info,
  GraduationCap,
  BarChart3,
  RotateCcw,
  Eye,
  LucideIcon,
  ListChecks,
  Brain,
  Lightbulb,
  ClipboardCheck,
  Users,
  Image as ImageIcon,
  ZoomIn,
  X
} from 'lucide-react';
import { sound } from '../utils/audio';
import { SSW_ALL_SECTORS } from '../data/ssw';
import { SswContentRenderer } from './SswContentRenderer';
import type { SswSectorData, SswSectorId, SswLessonChapter, SswQuizQuestion, SswCategoryType, SswUserProgress } from '../types/ssw';

// ── Icon Map ──
const ICON_MAP: Record<string, LucideIcon> = {
  HeartHandshake, Utensils, Factory, Sprout, Hotel, Building2
};

// ── Category Metadata ──
const CATEGORY_META: Record<SswCategoryType, { label: string; icon: LucideIcon; color: string }> = {
  pengenalan: { label: 'Pengenalan Bidang', icon: BookOpen, color: 'text-blue-400' },
  kosakata: { label: 'Kosakata Kerja', icon: Languages, color: 'text-amber-400' },
  komunikasi: { label: 'Komunikasi Kerja', icon: MessageSquare, color: 'text-emerald-400' },
  keterampilan: { label: 'Keterampilan & K3', icon: ShieldCheck, color: 'text-purple-400' },
  persiapan_ujian: { label: 'Persiapan Ujian', icon: Target, color: 'text-rose-400' }
};

// ── Storage Keys ──
const SSW_PROGRESS_KEY = 'zenora_ssw_progress_v1';

const loadSswProgress = (): SswUserProgress => {
  try {
    const raw = localStorage.getItem(SSW_PROGRESS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    completedLessonIds: [],
    lastActiveSectorId: 'kaigo',
    quizScores: {}
  };
};

const saveSswProgress = (p: SswUserProgress) => {
  try {
    localStorage.setItem(SSW_PROGRESS_KEY, JSON.stringify(p));
  } catch {}
};

// ── Props ──
interface SswSectionProps {
  onNavigateToJft: () => void;
  onNavigateToBab?: (bab: number) => void;
}

// ── Main Component ──
export const SswSection: React.FC<SswSectionProps> = ({
  onNavigateToJft,
  onNavigateToBab
}) => {
  // View states
  const [view, setView] = useState<'hub' | 'sector' | 'chapter' | 'quiz' | 'exam'>('hub');
  const [selectedSectorId, setSelectedSectorId] = useState<SswSectorId>('kaigo');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('');
  const [progress, setProgress] = useState<SswUserProgress>(loadSswProgress);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<SswQuizQuestion[]>([]);
  const [quizTitle, setQuizTitle] = useState('');
  const [quizCurrentIdx, setQuizCurrentIdx] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizShowReview, setQuizShowReview] = useState(false);

  // Image preview modal state
  const [previewImage, setPreviewImage] = useState<{ url: string; title: string; caption?: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && previewImage) {
        setPreviewImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [previewImage]);

  // Save progress on change
  useEffect(() => {
    saveSswProgress(progress);
  }, [progress]);

  // Derived data
  const selectedSector = SSW_ALL_SECTORS.find(s => s.id === selectedSectorId) || SSW_ALL_SECTORS[0];
  const selectedChapter = selectedSector.chapters.find(ch => ch.id === selectedChapterId);

  const SectorIcon = ICON_MAP[selectedSector.iconName] || Briefcase;

  const markChapterComplete = useCallback((chapterId: string) => {
    setProgress(prev => ({
      ...prev,
      completedLessonIds: prev.completedLessonIds.includes(chapterId)
        ? prev.completedLessonIds
        : [...prev.completedLessonIds, chapterId]
    }));
  }, []);

  const openSector = (id: SswSectorId) => {
    sound.playClick();
    setSelectedSectorId(id);
    setProgress(prev => ({ ...prev, lastActiveSectorId: id }));
    setView('sector');
  };

  const openChapter = (chapterId: string) => {
    sound.playClick();
    setSelectedChapterId(chapterId);
    setProgress(prev => ({ ...prev, lastActiveChapterId: chapterId }));
    setView('chapter');
  };

  const startQuiz = (questions: SswQuizQuestion[], title: string) => {
    sound.playClick();
    setQuizQuestions(questions);
    setQuizTitle(title);
    setQuizCurrentIdx(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizShowReview(false);
    setView('quiz');
  };

  const startExamSimulation = () => {
    sound.playClick();
    const exam = selectedSector.examSimulation;
    setQuizQuestions(exam.questions);
    setQuizTitle(exam.title);
    setQuizCurrentIdx(0);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizShowReview(false);
    setView('exam');
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    const correctCount = quizQuestions.reduce((acc, q) => {
      return acc + (quizAnswers[q.id] === q.correctAnswerIndex ? 1 : 0);
    }, 0);
    const quizId = `${selectedSectorId}_${view === 'exam' ? 'exam' : selectedChapterId}`;
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...prev.quizScores,
        [quizId]: {
          score: correctCount,
          total: quizQuestions.length,
          percentage: Math.round((correctCount / quizQuestions.length) * 100),
          date: new Date().toISOString()
        }
      }
    }));
  };

  const goBack = () => {
    sound.playClick();
    if (view === 'chapter') setView('sector');
    else if (view === 'sector') setView('hub');
    else if (view === 'quiz' || view === 'exam') setView(selectedChapterId ? 'chapter' : 'sector');
    else setView('hub');
  };

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: HUB — Overview Semua Sektor
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (view === 'hub') {
    return (
      <div className="space-y-8 text-left pb-16">
        {/* Hero Banner */}
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
                Panduan terpadu karir dan persiapan ujian visa kerja terampil Jepang (SSW 1 & SSW 2). Kuasai <span className="text-[#8FB4E3] font-bold">Ujian Bahasa (JFT-Basic A2 / JLPT N4)</span> dan <span className="text-emerald-400 font-bold">Ujian Keterampilan Teknis (Skill Test)</span> per sektor industri.
              </p>
            </div>

            <button
              onClick={() => { sound.playClick(); onNavigateToJft(); }}
              className="self-start md:self-auto inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:brightness-110 text-white text-xs sm:text-sm font-black shadow-lg transition-all shrink-0 active:scale-95"
            >
              <FileCheck className="w-4 h-4" />
              <span>Mulai Simulasi JFT-Basic A2</span>
            </button>
          </div>
        </div>

        {/* 2 Syarat Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-7 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#8FB4E3] px-2.5 py-1 rounded-lg bg-[#0C1B33] border border-[#8FB4E3]/20">Syarat Mutlak #1</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Bahasa Jepang</span>
              </div>
              <h3 className="text-xl font-black text-[#EEF1F6] font-['Manrope']">Lulus JFT-Basic A2 atau JLPT N4</h3>
              <p className="text-xs sm:text-sm text-[#CBD8EC] leading-relaxed">Standar kompetensi percakapan kerja sehari-hari. Wajib lulus ujian CBT <strong>JFT-Basic A2</strong> (skor ≥ 200/250) atau ujian resmi <strong>JLPT N4</strong> (skor ≥ 90/180).</p>
            </div>
            <div className="pt-4 border-t border-[#8FB4E3]/15 flex items-center justify-between">
              <span className="text-xs text-[#8793A8]">Latihan soal CBT tersedia</span>
              <button onClick={() => { sound.playClick(); onNavigateToJft(); }} className="text-xs font-bold text-[#8FB4E3] hover:text-[#EEF1F6] flex items-center gap-1 transition-colors">
                <span>Uji Simulasi Sekarang</span><ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-7 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#8FB4E3] px-2.5 py-1 rounded-lg bg-[#0C1B33] border border-[#8FB4E3]/20">Syarat Mutlak #2</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Keterampilan Teknis</span>
              </div>
              <h3 className="text-xl font-black text-[#EEF1F6] font-['Manrope']">Lulus Ujian Keahlian Bidang (Skill Test)</h3>
              <p className="text-xs sm:text-sm text-[#CBD8EC] leading-relaxed">Ujian teori & praktik sesuai bidang kerja pilihan Anda di Jepang. Pilih sektor di bawah untuk memulai pembelajaran.</p>
            </div>
            <div className="pt-4 border-t border-[#8FB4E3]/15 flex items-center justify-between">
              <span className="text-xs text-[#8793A8]">{SSW_ALL_SECTORS.length} Sektor resmi tersedia</span>
              <span className="text-xs font-bold text-[#8FB4E3]">Pilih bidang di bawah ↓</span>
            </div>
          </div>
        </div>

        {/* Grid Sektor */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#EEF1F6] font-['Manrope']">Pilih Sektor Bidang Pekerjaan</h2>
            <p className="text-xs sm:text-sm text-[#8793A8]">Pelajari materi, kosakata kerja, komunikasi, keterampilan teknis, dan latih ujian keahlian per sektor.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SSW_ALL_SECTORS.map((sector) => {
              const Icon = ICON_MAP[sector.iconName] || Briefcase;
              const completedChapters = sector.chapters.filter(ch => progress.completedLessonIds.includes(ch.id)).length;
              const totalChapters = sector.chapters.length;
              const progressPct = totalChapters > 0 ? Math.round((completedChapters / totalChapters) * 100) : 0;

              return (
                <button
                  key={sector.id}
                  onClick={() => openSector(sector.id)}
                  className="p-5 rounded-3xl bg-[#16294A] border border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50 text-left transition-all flex flex-col gap-4 group hover:shadow-[0_0_30px_rgba(143,180,227,0.1)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0C1B33] border border-[#8FB4E3]/25 flex items-center justify-center group-hover:border-[#8FB4E3]/60 transition-colors">
                      <Icon className="w-6 h-6 text-[#8FB4E3]" />
                    </div>
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${sector.badgeColor}`}>{sector.badge}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-[#EEF1F6] font-['Manrope'] group-hover:text-[#8FB4E3] transition-colors">{sector.japaneseName}</h3>
                    <p className="text-xs text-[#8793A8] mt-0.5">{sector.name}</p>
                  </div>

                  <p className="text-[11px] text-[#CBD8EC] leading-relaxed line-clamp-2">{sector.tagline}</p>

                  {/* Progress Bar */}
                  <div className="space-y-1.5 pt-2 border-t border-[#8FB4E3]/10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#8793A8]">Progres Belajar</span>
                      <span className="text-[10px] font-bold text-[#8FB4E3] font-mono">{completedChapters}/{totalChapters} bab</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#0C1B33] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#8FB4E3] to-emerald-400 transition-all duration-500"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: SECTOR — Daftar Bab per Sektor
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (view === 'sector') {
    const completedChapters = selectedSector.chapters.filter(ch => progress.completedLessonIds.includes(ch.id)).length;
    const totalChapters = selectedSector.chapters.length;

    return (
      <div className="space-y-6 text-left pb-16">
        {/* Back Button */}
        <button onClick={goBack} className="flex items-center gap-2 text-xs font-bold text-[#8793A8] hover:text-[#8FB4E3] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Hub SSW
        </button>

        {/* Sector Header */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] border border-[#8FB4E3]/25 p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0C1B33] border border-[#8FB4E3]/30 flex items-center justify-center">
                <SectorIcon className="w-7 h-7 text-[#8FB4E3]" />
              </div>
              <div>
                <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border inline-block mb-1 ${selectedSector.badgeColor}`}>{selectedSector.badge}</span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#EEF1F6] font-['Manrope']">{selectedSector.japaneseName}</h2>
                <p className="text-sm text-[#CBD8EC]">{selectedSector.name}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="text-right">
                <span className="text-[10px] text-[#8793A8] block">Progres</span>
                <span className="text-lg font-black text-[#8FB4E3] font-mono">{completedChapters}/{totalChapters}</span>
              </div>
              <button
                onClick={startExamSimulation}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-black shadow-lg transition-all active:scale-95"
              >
                <GraduationCap className="w-4 h-4" /> Simulasi Ujian {selectedSector.japaneseName}
              </button>
            </div>
          </div>

          {/* Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#8FB4E3]/15">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-[#8FB4E3] uppercase tracking-wider">Lingkungan Kerja</span>
              <p className="text-xs text-[#CBD8EC] leading-relaxed">{selectedSector.overview.workEnvironment}</p>
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-black text-[#8FB4E3] uppercase tracking-wider">Syarat Ujian Teknis</span>
              <p className="text-xs text-[#CBD8EC] leading-relaxed">{selectedSector.overview.technicalExamName}</p>
              <p className="text-xs text-[#8793A8]">Penyelenggara: {selectedSector.overview.examOrganizer}</p>
              <p className="text-xs text-emerald-400 font-bold">Kelulusan: {selectedSector.overview.passRequirement}</p>
            </div>
          </div>
        </div>

        {/* Chapter List */}
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#EEF1F6] font-['Manrope']">Kurikulum Pembelajaran ({totalChapters} Bab)</h3>

          {selectedSector.chapters.map((ch) => {
            const catMeta = CATEGORY_META[ch.category];
            const CatIcon = catMeta.icon;
            const isCompleted = progress.completedLessonIds.includes(ch.id);
            const quizKey = `${selectedSectorId}_${ch.id}`;
            const quizResult = progress.quizScores[quizKey];

            return (
              <button
                key={ch.id}
                onClick={() => openChapter(ch.id)}
                className={`w-full p-4 sm:p-5 rounded-2xl border text-left transition-all flex items-center gap-4 group ${
                  isCompleted
                    ? 'bg-[#16294A] border-emerald-500/30 hover:border-emerald-500/50'
                    : 'bg-[#16294A] border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isCompleted ? 'bg-emerald-500/20 border border-emerald-500/40' : 'bg-[#0C1B33] border border-[#8FB4E3]/20'
                }`}>
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <span className="text-sm font-black text-[#8FB4E3] font-mono">{ch.chapterNumber}</span>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider ${catMeta.color}`}>
                      <CatIcon className="w-3 h-3" /> {catMeta.label}
                    </span>
                    <span className="text-[9px] text-[#8793A8] font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" /> ~{ch.estimatedMinutes} menit
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#EEF1F6] mt-1 group-hover:text-[#8FB4E3] transition-colors truncate">{ch.title}</h4>
                  <p className="text-[11px] text-[#8793A8] truncate">{ch.japaneseTitle}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {quizResult && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg font-mono ${
                      quizResult.percentage >= 70 ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                    }`}>{quizResult.percentage}%</span>
                  )}
                  <ChevronRight className="w-4 h-4 text-[#8793A8] group-hover:text-[#8FB4E3] transition-colors" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Official References */}
        <div className="rounded-2xl bg-[#0C1B33]/60 border border-[#8FB4E3]/15 p-5 space-y-3">
          <span className="text-[10px] font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5" /> Sumber Referensi Resmi
          </span>
          {selectedSector.officialReferences.map((ref, idx) => (
            <div key={idx} className="text-xs text-[#CBD8EC]">
              <span className="font-bold text-[#EEF1F6]">{ref.title}</span>
              <span className="text-[#8793A8] block">{ref.agency} — {ref.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: CHAPTER — Halaman Bab Pembelajaran
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (view === 'chapter' && selectedChapter) {
    const ch = selectedChapter;
    const catMeta = CATEGORY_META[ch.category];
    const CatIcon = catMeta.icon;
    const isCompleted = progress.completedLessonIds.includes(ch.id);

    // Find next chapter
    const currentIdx = selectedSector.chapters.findIndex(c => c.id === ch.id);
    const nextChapter = selectedSector.chapters[currentIdx + 1];
    const prevChapter = selectedSector.chapters[currentIdx - 1];

    return (
      <div className="space-y-6 text-left pb-16 max-w-4xl mx-auto">
        {/* Back + Navigation */}
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="flex items-center gap-2 text-xs font-bold text-[#8793A8] hover:text-[#8FB4E3] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke {selectedSector.japaneseName}
          </button>
          <div className="flex items-center gap-1.5">
            {prevChapter && (
              <button onClick={() => openChapter(prevChapter.id)} className="text-[10px] text-[#8793A8] hover:text-[#8FB4E3] px-2 py-1 rounded-lg hover:bg-[#16294A]">← Bab {prevChapter.chapterNumber}</button>
            )}
            {nextChapter && (
              <button onClick={() => openChapter(nextChapter.id)} className="text-[10px] text-[#8793A8] hover:text-[#8FB4E3] px-2 py-1 rounded-lg hover:bg-[#16294A]">Bab {nextChapter.chapterNumber} →</button>
            )}
          </div>
        </div>

        {/* Chapter Header */}
        <div className="rounded-3xl bg-gradient-to-br from-[#16294A] to-[#1F3760] border border-[#8FB4E3]/25 p-6 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${catMeta.color}`}>
              <CatIcon className="w-3.5 h-3.5" /> {catMeta.label}
            </span>
            <span className="text-[10px] text-[#8793A8] font-mono">Bab {ch.chapterNumber} · ~{ch.estimatedMinutes} menit</span>
            {isCompleted && <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Selesai</span>}
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-[#EEF1F6] font-['Manrope']">{ch.title}</h2>
          <p className="text-sm text-[#8FB4E3] font-mono">{ch.japaneseTitle}</p>
        </div>

        {/* Tujuan Pembelajaran */}
        <div className="rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 space-y-3">
          <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5"><Target className="w-4 h-4" /> Tujuan Pembelajaran</span>
          <ul className="space-y-2">
            {ch.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#EEF1F6] leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Penjelasan Materi Utama */}
        <div className="rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 sm:p-7 space-y-4">
          <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Materi Pembelajaran</span>
          <div className="ssw-content-text">
            <SswContentRenderer content={ch.contentExplanation} />
          </div>
        </div>

        {/* Key Terms / Istilah Kunci */}
        <div className="rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 space-y-4">
          <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5"><Languages className="w-4 h-4" /> Istilah Kunci Bahasa Jepang</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ch.keyTerms.map((term, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/15 space-y-1.5">
                <span className="text-lg font-bold text-[#EEF1F6] japanese-text block">{term.japanese}</span>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-[#8FB4E3]">{term.kana}</span>
                  <span className="text-[#8793A8]">({term.romaji})</span>
                </div>
                <p className="text-xs text-[#CBD8EC] font-semibold">{term.indonesian}</p>
                {term.note && <p className="text-[10px] text-[#8793A8] italic">※ {term.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Case Study / Studi Kasus Tempat Kerja */}
        {ch.workplaceCaseStudy && (
          <div className="rounded-2xl bg-[#16294A] border border-amber-500/25 p-5 space-y-4">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5"><Users className="w-4 h-4" /> Studi Kasus Tempat Kerja</span>
            <h4 className="text-sm font-bold text-[#EEF1F6]">{ch.workplaceCaseStudy.title}</h4>
            <p className="text-xs text-[#CBD8EC] leading-relaxed bg-[#0C1B33]/50 p-3 rounded-xl border border-[#8FB4E3]/10 italic">{ch.workplaceCaseStudy.scenario}</p>

            {ch.workplaceCaseStudy.dialogue && ch.workplaceCaseStudy.dialogue.length > 0 && (
              <div className="space-y-3">
                {ch.workplaceCaseStudy.dialogue.map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#0C1B33]/40 border border-[#8FB4E3]/10 space-y-1">
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="font-black text-[#8FB4E3]">{d.speaker}</span>
                      <span className="text-[#8793A8]">({d.role})</span>
                    </div>
                    <p className="text-sm text-[#EEF1F6] japanese-text font-medium">{d.japanese}</p>
                    <p className="text-[11px] text-[#8793A8]">{d.kana}</p>
                    <p className="text-xs text-[#CBD8EC]">→ {d.indonesian}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Pelajaran:</span>
              <p className="text-xs text-[#EEF1F6] mt-1">{ch.workplaceCaseStudy.takeaway}</p>
            </div>
          </div>
        )}

        {/* Visual Diagram */}
        {ch.visualDiagram && (
          <div className="rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 space-y-4">
            <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5"><BarChart3 className="w-4 h-4" /> {ch.visualDiagram.title}</span>
            <div className={`grid gap-3 ${
              ch.visualDiagram.type === 'grid' ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4' :
              ch.visualDiagram.type === 'table' ? 'grid-cols-1' :
              ch.visualDiagram.type === 'steps' ? 'grid-cols-1' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {ch.visualDiagram.items.map((item, i) => (
                <div key={i} className={`p-3.5 rounded-xl border space-y-1 ${
                  ch.visualDiagram!.type === 'warning'
                    ? 'bg-amber-500/5 border-amber-500/20'
                    : ch.visualDiagram!.type === 'steps'
                    ? 'bg-[#0C1B33]/60 border-[#8FB4E3]/15 relative pl-10'
                    : 'bg-[#0C1B33]/60 border-[#8FB4E3]/15'
                }`}>
                  {ch.visualDiagram!.type === 'steps' && (
                    <div className="absolute left-3 top-3 w-5 h-5 rounded-full bg-[#8FB4E3]/20 border border-[#8FB4E3]/40 flex items-center justify-center">
                      <span className="text-[10px] font-black text-[#8FB4E3]">{i + 1}</span>
                    </div>
                  )}
                  <span className="text-xs font-bold text-[#EEF1F6] block">{item.label}</span>
                  <p className="text-[11px] text-[#CBD8EC] leading-relaxed">{item.description}</p>
                  {item.highlight && <span className="text-[10px] font-mono text-[#8FB4E3]">{item.highlight}</span>}
                  {item.badge && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#8FB4E3]/10 text-[#8FB4E3] border border-[#8FB4E3]/20 inline-block">{item.badge}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Galeri Ilustrasi & Diagram Resmi */}
        {ch.illustrations && ch.illustrations.length > 0 && (
          <div className="rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5">
                <ImageIcon className="w-4 h-4" /> Galeri Ilustrasi & Diagram Resmi ({ch.illustrations.length})
              </span>
              <span className="text-[10px] text-[#8793A8] italic">Klik gambar untuk memperbesar</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ch.illustrations.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    sound.playClick();
                    setPreviewImage({ url: item.url, title: item.title, caption: item.caption });
                  }}
                  className="group cursor-pointer rounded-xl bg-[#0C1B33]/70 border border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50 transition-all duration-200 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-0.5"
                >
                  <div className="relative aspect-4/3 bg-black/40 overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="p-2 rounded-full bg-[#1F3760]/90 text-white border border-[#8FB4E3]/40 shadow-md">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                    {item.tag && (
                      <span className="absolute top-2 left-2 text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#0C1B33]/90 text-[#8FB4E3] border border-[#8FB4E3]/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-3 space-y-1 flex-1 flex flex-col justify-between">
                    <div>
                      <h5 className="text-xs font-bold text-[#EEF1F6] group-hover:text-[#8FB4E3] transition-colors">{item.title}</h5>
                      {item.japaneseTitle && (
                        <p className="text-[11px] text-[#8793A8] font-mono japanese-text">{item.japaneseTitle}</p>
                      )}
                    </div>
                    <p className="text-[11px] text-[#CBD8EC] line-clamp-2 mt-1">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Poin Penting */}
        <div className="rounded-2xl bg-amber-500/5 border border-amber-500/25 p-5 space-y-3">
          <span className="text-xs font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5"><AlertTriangle className="w-4 h-4" /> Poin Penting yang Harus Diingat</span>
          <ul className="space-y-2">
            {ch.importantPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[#EEF1F6] leading-relaxed">
                <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rangkuman */}
        <div className="rounded-2xl bg-[#0C1B33]/60 border border-[#8FB4E3]/15 p-5 space-y-2">
          <span className="text-xs font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5"><ListChecks className="w-4 h-4" /> Rangkuman</span>
          <p className="text-sm text-[#EEF1F6] leading-relaxed">{ch.summary}</p>
        </div>

        {/* Referensi */}
        <div className="rounded-2xl bg-[#0C1B33]/40 border border-[#8FB4E3]/10 p-4 space-y-1">
          <span className="text-[10px] font-black text-[#8793A8] uppercase tracking-wider">Referensi Resmi</span>
          <p className="text-[11px] text-[#CBD8EC]">{ch.officialReference.documentTitle}</p>
          <p className="text-[10px] text-[#8793A8]">{ch.officialReference.agency} — {ch.officialReference.source}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {ch.practiceQuestions.length > 0 && (
            <button
              onClick={() => startQuiz(ch.practiceQuestions, `Latihan Bab ${ch.chapterNumber}: ${ch.title}`)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] border border-[#8FB4E3]/30 text-sm font-black shadow-lg transition-all active:scale-95"
            >
              <Brain className="w-4 h-4 text-[#8FB4E3]" /> Mulai Latihan Soal ({ch.practiceQuestions.length} soal)
            </button>
          )}

          {!isCompleted && (
            <button
              onClick={() => { markChapterComplete(ch.id); sound.playClick(); }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-sm font-black shadow-lg transition-all active:scale-95"
            >
              <CheckCircle2 className="w-4 h-4" /> Tandai Selesai
            </button>
          )}

          {nextChapter && (
            <button
              onClick={() => openChapter(nextChapter.id)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/20 text-sm font-bold transition-all"
            >
              Bab Berikutnya <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Lightbox Image Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-[#0C1B33] border border-[#8FB4E3]/30 shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-[#8FB4E3]/15 flex items-center justify-between bg-[#16294A]">
                <div className="space-y-0.5 pr-4">
                  <h3 className="text-sm sm:text-base font-bold text-[#EEF1F6]">{previewImage.title}</h3>
                  {previewImage.caption && (
                    <p className="text-xs text-[#CBD8EC]">{previewImage.caption}</p>
                  )}
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-2 rounded-xl bg-[#0C1B33] text-[#8793A8] hover:text-white hover:bg-[#1F3760] transition-colors shrink-0 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Body */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/60 min-h-[300px]">
                <img
                  src={previewImage.url}
                  alt={previewImage.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 bg-[#16294A] border-t border-[#8FB4E3]/15 flex items-center justify-between text-[11px] text-[#8793A8]">
                <span>Modul Pembelajaran Resmi Tokutei Ginou OTAFF</span>
                <span className="hidden sm:inline">Tekan ESC atau klik luar untuk menutup</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: QUIZ / EXAM — Latihan & Simulasi Ujian
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if ((view === 'quiz' || view === 'exam') && quizQuestions.length > 0) {
    const q = quizQuestions[quizCurrentIdx];
    const isExam = view === 'exam';
    const totalQuestions = quizQuestions.length;
    const answeredCount = Object.keys(quizAnswers).length;

    // Results view
    if (quizSubmitted && !quizShowReview) {
      const correctCount = quizQuestions.reduce((acc, qu) => acc + (quizAnswers[qu.id] === qu.correctAnswerIndex ? 1 : 0), 0);
      const percentage = Math.round((correctCount / totalQuestions) * 100);
      const passed = isExam ? percentage >= (selectedSector.examSimulation.passingScorePercentage || 60) : percentage >= 60;

      return (
        <div className="space-y-6 text-left pb-16 max-w-3xl mx-auto">
          <button onClick={goBack} className="flex items-center gap-2 text-xs font-bold text-[#8793A8] hover:text-[#8FB4E3] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </button>

          <div className={`rounded-3xl border p-8 text-center space-y-4 ${
            passed ? 'bg-emerald-500/5 border-emerald-500/30' : 'bg-amber-500/5 border-amber-500/30'
          }`}>
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
              passed ? 'bg-emerald-500/20' : 'bg-amber-500/20'
            }`}>
              {passed ? <CheckCircle2 className="w-10 h-10 text-emerald-400" /> : <AlertTriangle className="w-10 h-10 text-amber-400" />}
            </div>

            <h2 className="text-2xl font-black text-[#EEF1F6] font-['Manrope']">
              {passed ? 'Selamat! Anda Lulus 🎉' : 'Belum Lulus — Pelajari Kembali'}
            </h2>

            <div className="flex items-center justify-center gap-6">
              <div>
                <span className={`text-4xl font-black font-mono ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>{percentage}%</span>
                <span className="text-xs text-[#8793A8] block">Skor</span>
              </div>
              <div>
                <span className="text-4xl font-black font-mono text-[#8FB4E3]">{correctCount}/{totalQuestions}</span>
                <span className="text-xs text-[#8793A8] block">Jawaban Benar</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button onClick={() => setQuizShowReview(true)} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/30 text-[#EEF1F6] text-xs font-bold hover:bg-[#1F3760] transition-all">
                <Eye className="w-4 h-4 text-[#8FB4E3]" /> Lihat Pembahasan
              </button>
              <button onClick={() => { setQuizCurrentIdx(0); setQuizAnswers({}); setQuizSubmitted(false); }} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/30 text-[#EEF1F6] text-xs font-bold hover:bg-[#1F3760] transition-all">
                <RotateCcw className="w-4 h-4 text-[#8FB4E3]" /> Ulangi
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Review mode
    if (quizSubmitted && quizShowReview) {
      return (
        <div className="space-y-6 text-left pb-16 max-w-3xl mx-auto">
          <button onClick={() => setQuizShowReview(false)} className="flex items-center gap-2 text-xs font-bold text-[#8793A8] hover:text-[#8FB4E3] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Hasil
          </button>

          <h2 className="text-xl font-black text-[#EEF1F6] font-['Manrope']">Pembahasan Jawaban</h2>

          {quizQuestions.map((qu, idx) => {
            const userAnswer = quizAnswers[qu.id];
            const isCorrect = userAnswer === qu.correctAnswerIndex;

            return (
              <div key={qu.id} className={`rounded-2xl border p-5 space-y-3 ${
                isCorrect ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isCorrect ? '✓ Benar' : '✗ Salah'} — Soal {idx + 1}
                  </span>
                </div>
                <p className="text-sm text-[#EEF1F6] japanese-text">{qu.questionText}</p>

                {qu.situation && <p className="text-xs text-[#8793A8] italic">Situasi: {qu.situation}</p>}
                {qu.translation && <p className="text-xs text-[#CBD8EC]">Terjemahan: {qu.translation}</p>}

                <div className="space-y-1.5">
                  {qu.options.map((opt, oi) => (
                    <div key={oi} className={`p-2.5 rounded-xl text-xs flex items-start gap-2 ${
                      oi === qu.correctAnswerIndex ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300' :
                      oi === userAnswer && oi !== qu.correctAnswerIndex ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300' :
                      'bg-[#0C1B33]/30 text-[#8793A8]'
                    }`}>
                      <span className="font-mono font-bold shrink-0">{oi + 1}.</span>
                      <span className="japanese-text">{opt}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-[#0C1B33]/50 border border-[#8FB4E3]/10">
                  <span className="text-[10px] font-bold text-[#8FB4E3]">Pembahasan:</span>
                  <p className="text-xs text-[#EEF1F6] mt-1 leading-relaxed">{qu.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Active quiz question
    return (
      <div className="space-y-6 text-left pb-16 max-w-3xl mx-auto">
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="flex items-center gap-2 text-xs font-bold text-[#8793A8] hover:text-[#8FB4E3] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Keluar
          </button>
          <span className="text-xs font-bold text-[#8793A8] font-mono">{quizCurrentIdx + 1} / {totalQuestions}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#0C1B33] overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#8FB4E3] to-emerald-400 transition-all duration-300" style={{ width: `${((quizCurrentIdx + 1) / totalQuestions) * 100}%` }} />
        </div>

        {/* Title */}
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg ${isExam ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' : 'bg-[#8FB4E3]/15 text-[#8FB4E3] border border-[#8FB4E3]/30'}`}>
            {isExam ? 'Simulasi Ujian' : 'Latihan'}
          </span>
          <span className="text-xs text-[#8793A8] truncate">{quizTitle}</span>
        </div>

        {/* Question */}
        <div className="rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 p-5 sm:p-6 space-y-4">
          <p className="text-sm sm:text-base text-[#EEF1F6] font-semibold leading-relaxed japanese-text">{q.questionText}</p>

          {q.situation && <p className="text-xs text-[#8793A8] italic bg-[#0C1B33]/40 p-2 rounded-lg">Situasi: {q.situation}</p>}
          {q.passageText && <div className="text-xs text-[#CBD8EC] bg-[#0C1B33]/40 p-3 rounded-xl border border-[#8FB4E3]/10 whitespace-pre-line japanese-text">{q.passageText}</div>}
          {q.translation && <p className="text-xs text-[#CBD8EC]">→ {q.translation}</p>}

          <div className="space-y-2.5 pt-2">
            {q.options.map((opt, oi) => {
              const isSelected = quizAnswers[q.id] === oi;
              return (
                <button
                  key={oi}
                  onClick={() => {
                    sound.playClick();
                    setQuizAnswers(prev => ({ ...prev, [q.id]: oi }));
                  }}
                  className={`w-full p-3.5 rounded-xl text-left text-sm transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-[#1F3760] border-2 border-[#8FB4E3] text-[#EEF1F6] shadow-[0_0_15px_rgba(143,180,227,0.2)]'
                      : 'bg-[#0C1B33]/50 border border-[#8FB4E3]/15 text-[#CBD8EC] hover:border-[#8FB4E3]/40'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 font-black text-xs ${
                    isSelected ? 'bg-[#8FB4E3] text-[#0C1B33]' : 'bg-[#16294A] text-[#8793A8] border border-[#8FB4E3]/20'
                  }`}>{oi + 1}</span>
                  <span className="japanese-text pt-0.5">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => { if (quizCurrentIdx > 0) { sound.playClick(); setQuizCurrentIdx(prev => prev - 1); } }}
            disabled={quizCurrentIdx === 0}
            className="px-4 py-2.5 rounded-xl bg-[#16294A] border border-[#8FB4E3]/20 text-[#8793A8] text-xs font-bold disabled:opacity-30 hover:text-[#EEF1F6] transition-all"
          >
            ← Sebelumnya
          </button>

          <div className="flex gap-1 overflow-x-auto">
            {quizQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { sound.playClick(); setQuizCurrentIdx(idx); }}
                className={`w-7 h-7 rounded-lg text-[10px] font-bold shrink-0 transition-all ${
                  idx === quizCurrentIdx ? 'bg-[#8FB4E3] text-[#0C1B33]' :
                  quizAnswers[quizQuestions[idx].id] !== undefined ? 'bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/30' :
                  'bg-[#0C1B33] text-[#8793A8] border border-[#8FB4E3]/10'
                }`}
              >{idx + 1}</button>
            ))}
          </div>

          {quizCurrentIdx < totalQuestions - 1 ? (
            <button
              onClick={() => { sound.playClick(); setQuizCurrentIdx(prev => prev + 1); }}
              className="px-4 py-2.5 rounded-xl bg-[#16294A] border border-[#8FB4E3]/20 text-[#EEF1F6] text-xs font-bold hover:bg-[#1F3760] transition-all"
            >
              Berikutnya →
            </button>
          ) : (
            <button
              onClick={submitQuiz}
              disabled={answeredCount < totalQuestions}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-black disabled:opacity-50 hover:brightness-110 transition-all active:scale-95"
            >
              Kumpulkan ({answeredCount}/{totalQuestions})
            </button>
          )}
        </div>
      </div>
    );
  }

  // Fallback
  return <div className="text-center text-[#8793A8] py-20">Memuat...</div>;
};
