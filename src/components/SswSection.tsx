import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  Users,
  Image as ImageIcon,
  ZoomIn,
  X,
  Compass,
  TrendingUp,
  MapPin,
  Check,
  Building
} from 'lucide-react';
import { sound } from '../utils/audio';
import { SSW_ALL_SECTORS } from '../data/ssw';
import { SswContentRenderer } from './SswContentRenderer';
import { FuriganaText } from './FuriganaText';
import type { SswSectorData, SswSectorId, SswLessonChapter, SswQuizQuestion, SswCategoryType, SswUserProgress } from '../types/ssw';

// ── Icon Map ──
const ICON_MAP: Record<string, LucideIcon> = {
  HeartHandshake, Utensils, Factory, Sprout, Hotel, Building2
};

// ── Category Metadata ──
const CATEGORY_META: Record<SswCategoryType, { label: string; icon: LucideIcon; color: string; bg: string }> = {
  pengenalan: { label: 'Pengenalan Bidang', icon: BookOpen, color: 'text-[var(--secondary-accent)]', bg: 'bg-[#69C9DF]/15 border-[#69C9DF]/30' },
  kosakata: { label: 'Kosakata Kerja', icon: Languages, color: 'text-[#E9BD72]', bg: 'bg-[#E9BD72]/15 border-[#E9BD72]/30' },
  komunikasi: { label: 'Komunikasi Kerja', icon: MessageSquare, color: 'text-[#45C6A5]', bg: 'bg-[#45C6A5]/15 border-[#45C6A5]/30' },
  keterampilan: { label: 'Keterampilan & K3', icon: ShieldCheck, color: 'text-[#2456A6]', bg: 'bg-[#2456A6]/15 border-[#2456A6]/30' },
  persiapan_ujian: { label: 'Persiapan Ujian', icon: Target, color: 'text-[#FF70C8]', bg: 'bg-[#FF70C8]/15 border-[#FF70C8]/30' }
};

// Sector Color Accents
const SECTOR_ACCENTS: Record<SswSectorId, { gradient: string; glow: string; border: string }> = {
  kaigo: {
    gradient: 'from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-surface)]',
    glow: 'rgba(57, 120, 214,0.3)',
    border: 'border-[#3978D6]/40'
  },
  food_service: {
    gradient: 'from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)]',
    glow: 'rgba(255,112,200,0.3)',
    border: 'border-[#FF70C8]/40'
  },
  manufacturing: {
    gradient: 'from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[#172554]',
    glow: 'rgba(50,155,255,0.3)',
    border: 'border-[#69C9DF]/40'
  },
  agriculture: {
    gradient: 'from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[#064E3B]',
    glow: 'rgba(0,214,163,0.3)',
    border: 'border-[#45C6A5]/40'
  },
  hospitality: {
    gradient: 'from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)]',
    glow: 'rgba(131, 183, 238,0.3)',
    border: 'border-[#83B7EE]/40'
  },
  building_cleaning: {
    gradient: 'from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)]',
    glow: 'rgba(36, 86, 166,0.3)',
    border: 'border-[#2456A6]/40'
  }
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

  // Global progress calculation across all sectors
  const { totalAllChapters, completedAllChapters, overallPercentage } = useMemo(() => {
    const total = SSW_ALL_SECTORS.reduce((acc, s) => acc + s.chapters.length, 0);
    const completed = progress.completedLessonIds.length;
    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { totalAllChapters: total, completedAllChapters: completed, overallPercentage: pct };
  }, [progress.completedLessonIds]);

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

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: HUB — PREMIUM JAPANESE CAREER ACADEMY
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (view === 'hub') {
    const featuredSector = SSW_ALL_SECTORS.find(s => s.id === progress.lastActiveSectorId) || SSW_ALL_SECTORS[0];
    const FeaturedIcon = ICON_MAP[featuredSector.iconName] || Briefcase;
    const featuredCompleted = featuredSector.chapters.filter(ch => progress.completedLessonIds.includes(ch.id)).length;
    const featuredPct = Math.round((featuredCompleted / featuredSector.chapters.length) * 100);

    return (
      <div className="space-y-10 text-left pb-20 animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* ── 1. CINEMATIC HERO SECTION ── */}
        <div className="relative overflow-hidden rounded-3xl border border-[#3978D6]/30 shadow-[0_24px_70px_-15px_rgba(8, 21, 47,0.95),0_0_50px_rgba(57, 120, 214,0.2)] bg-[var(--bg-sidebar)] min-h-[420px] flex items-center">
          
          {/* Background image & deep gradients */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-1000"
            style={{ backgroundImage: `url('/assets/ssw/ssw-hero-career.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-sidebar)] via-[var(--bg-sidebar)]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-sidebar)] via-transparent to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: 8 cols */}
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-elevated)]/90 border border-[#3978D6]/40 text-[var(--text-primary)] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(57, 120, 214,0.3)]">
                  <Sparkles className="w-4 h-4 text-[#E9BD72]" />
                  Specified Skilled Worker · 特定技能 (Tokutei Ginou)
                </div>

                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--text-primary)] tracking-tight font-['Manrope'] leading-[1.1]">
                    Your Journey to <br />
                    <span className="bg-gradient-to-r from-[#3978D6] via-[#2456A6] to-[#69C9DF] bg-clip-text text-transparent">
                      Work in Japan
                    </span>
                  </h1>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-2xl pt-1">
                    Akademi persiapan komprehensif visa kerja terampil Jepang (SSW 1 & SSW 2). Kuasai kurikulum resmi, komunikasi kerja (Ho-Ren-So), standar keselamatan, dan simulasi ujian teknis sesuai standar kementerian Jepang.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <button
                    onClick={() => openSector(featuredSector.id)}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl neon-btn-primary text-white text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 cursor-pointer"
                  >
                    <Briefcase className="w-4 h-4" />
                    <span>Lanjutkan Belajar: {featuredSector.japaneseName}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => { sound.playClick(); onNavigateToJft(); }}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[var(--bg-surface)]/90 hover:bg-[var(--bg-elevated)] border border-[#3978D6]/40 text-[var(--text-primary)] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <FileCheck className="w-4 h-4 text-[var(--secondary-accent)]" />
                    <span>Simulasi CBT JFT-Basic A2</span>
                  </button>
                </div>
              </div>

              {/* Right Column: 4 cols - Readiness Circular Gauge Widget */}
              <div className="lg:col-span-4">
                <div className="rounded-3xl bg-[var(--bg-surface)]/80 backdrop-blur-xl border border-[#3978D6]/35 p-6 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                      Kesiapan Karier SSW
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#3978D6]/20 text-[var(--text-primary)] border border-[#3978D6]/30 text-[10px] font-bold">
                      Progress Global
                    </span>
                  </div>

                  <div className="flex items-center gap-5">
                    {/* Circular percentage */}
                    <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-[#08152F]"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-[#3978D6]"
                          strokeDasharray={`${overallPercentage}, 100`}
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute text-center">
                        <span className="text-2xl font-black text-[var(--text-primary)] font-['Manrope']">{overallPercentage}%</span>
                        <span className="text-[9px] text-[var(--text-muted)] block uppercase">Selesai</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="text-xs font-bold text-[var(--text-primary)]">
                        {completedAllChapters} dari {totalAllChapters} Bab Selesai
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                        {overallPercentage >= 60 
                          ? 'Kesiapan Anda tinggi! Latih ujian CBT per sektor.' 
                          : 'Selesaikan materi dasar dan kuasai kosakata per sektor.'}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#3978D6]/15 flex items-center justify-between text-xs text-[var(--text-muted)]">
                    <span>Sektor Terakhir:</span>
                    <span className="text-[var(--text-primary)] font-bold">{featuredSector.japaneseName} ({featuredPct}%)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── 2. TWO MANDATORY REQUIREMENTS ROADMAP ── */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-[#3978D6]" />
              2 Syarat Mutlak Visa Kerja Tokutei Ginou
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Untuk memperoleh visa SSW 1 dari Imigrasi Jepang, kedua sertifikasi berikut wajib dimiliki
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Requirement 1 */}
            <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/30 p-6 sm:p-8 space-y-5 shadow-lg flex flex-col justify-between hover:border-[#3978D6]/60 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] text-xs font-bold font-mono">
                    Syarat #1 · Bahasa Jepang
                  </span>
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Standar A2
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  Lulus JFT-Basic A2 atau JLPT N4
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Kemampuan percakapan praktis sehari-hari dan di tempat kerja. Ujian resmi diselenggarakan menggunakan komputer (CBT) dengan passing score:
                </p>

                <ul className="space-y-2 pt-2 text-xs text-[var(--text-primary)]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3978D6] shrink-0" />
                    <span><strong>JFT-Basic A2:</strong> Skor minimal 200 / 250 (Penyelenggara: The Japan Foundation)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#3978D6] shrink-0" />
                    <span><strong>JLPT N4:</strong> Lulus skor total minimal 90 / 180</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#3978D6]/15 flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">Simulasi CBT tersedia gratis</span>
                <button
                  onClick={() => { sound.playClick(); onNavigateToJft(); }}
                  className="text-xs font-black text-[#3978D6] hover:text-[var(--text-primary)] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Buka Simulasi CBT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Requirement 2 */}
            <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#69C9DF]/30 p-6 sm:p-8 space-y-5 shadow-lg flex flex-col justify-between hover:border-[#69C9DF]/60 transition-all">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[var(--bg-sidebar)] border border-[#69C9DF]/30 text-[var(--secondary-accent)] text-xs font-bold font-mono">
                    Syarat #2 · Keterampilan Teknis
                  </span>
                  <span className="text-xs font-bold text-[var(--secondary-accent)] flex items-center gap-1">
                    <Award className="w-4 h-4" /> Skill Test
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  Lulus Ujian Keahlian Bidang (Tokutei Ginou)
                </h3>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  Ujian evaluasi pengetahuan teori dan tes praktik kerja sesuai bidang pekerjaan yang Anda pilih. Materi mencakup SOP, sanitasi, dan keselamatan kerja:
                </p>

                <ul className="space-y-2 pt-2 text-xs text-[var(--text-primary)]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--secondary-accent)] shrink-0" />
                    <span>Tersedia kurikulum 5 bab lengkap per sektor industri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[var(--secondary-accent)] shrink-0" />
                    <span>Latihan soal bergambar standar OTAFF & Prometric</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#69C9DF]/15 flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">6 Sektor Industri Resmi</span>
                <span className="text-xs font-bold text-[var(--secondary-accent)]">Pilih Sektor di Bawah ↓</span>
              </div>
            </div>

          </div>
        </div>

        {/* ── 3. INDUSTRY SECTOR EXPLORER (Asymmetric Layout) ── */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#2456A6] uppercase tracking-wider mb-1">
                <Compass className="w-3.5 h-3.5" /> Eksplorasi Sektor Industri (産業分野)
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope']">
                Pilih Sektor Karier Anda di Jepang
              </h2>
            </div>
            <span className="text-xs text-[var(--text-secondary)]">
              6 Sektor Resmi dengan Kurikulum Pembelajaran Mandiri
            </span>
          </div>

          {/* Featured Sector Card (Large Asymmetric Display) */}
          <div 
            onClick={() => openSector(featuredSector.id)}
            className="group relative overflow-hidden rounded-3xl border border-[#3978D6]/40 bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)] p-6 sm:p-10 shadow-[0_20px_50px_rgba(8, 21, 47,0.8)] cursor-pointer hover:border-[#3978D6] transition-all duration-300"
          >
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/40 flex items-center justify-center text-[#3978D6] shadow-inner group-hover:scale-110 transition-transform">
                    <FeaturedIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#E9BD72] block">
                      ★ Sektor Paling Populer & Sedang Anda Pelajari
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-3">
                      {featuredSector.japaneseName}
                      <span className="text-lg sm:text-xl font-bold text-[var(--text-secondary)]">
                        ({featuredSector.name})
                      </span>
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed">
                  {featuredSector.tagline}
                </p>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                  {featuredSector.overview.workEnvironment}
                </p>

                {/* Badges & Meta */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[#3978D6]/30 text-[var(--text-primary)] text-xs font-bold">
                    Ujian: {featuredSector.overview.technicalExamName}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                    Kelulusan: {featuredSector.overview.passRequirement}
                  </span>
                </div>
              </div>

              {/* Progress & CTA */}
              <div className="rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 p-5 min-w-[260px] space-y-4 shrink-0">
                <div>
                  <div className="flex items-center justify-between text-xs font-bold mb-1.5">
                    <span className="text-[var(--text-secondary)]">Progres Kurikulum</span>
                    <span className="text-[#2456A6] font-mono">{featuredCompleted} / {featuredSector.chapters.length} Bab</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--bg-elevated)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#3978D6] to-[#45C6A5] transition-all duration-700"
                      style={{ width: `${featuredPct}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openSector(featuredSector.id);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-black shadow-md transition-all flex items-center justify-center gap-2 group-hover:brightness-110"
                >
                  <span>Buka Sektor Lengkap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          {/* Remaining 5 Sectors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SSW_ALL_SECTORS.filter(s => s.id !== featuredSector.id).map((sector) => {
              const Icon = ICON_MAP[sector.iconName] || Briefcase;
              const completedCh = sector.chapters.filter(ch => progress.completedLessonIds.includes(ch.id)).length;
              const totalCh = sector.chapters.length;
              const pct = Math.round((completedCh / totalCh) * 100);
              const accent = SECTOR_ACCENTS[sector.id] || SECTOR_ACCENTS.kaigo;

              return (
                <div
                  key={sector.id}
                  onClick={() => openSector(sector.id)}
                  className={`group rounded-3xl bg-gradient-to-br ${accent.gradient} border ${accent.border} p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(8, 21, 47,0.9)]`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 flex items-center justify-center text-[#3978D6] group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full border ${sector.badgeColor}`}>
                        {sector.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[var(--text-primary)] font-['Manrope'] group-hover:text-[#2456A6] transition-colors">
                        {sector.japaneseName}
                      </h3>
                      <p className="text-xs font-bold text-[var(--text-secondary)] mt-0.5">
                        {sector.name}
                      </p>
                    </div>

                    <p className="text-xs text-[var(--text-primary)] leading-relaxed line-clamp-2">
                      {sector.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#3978D6]/15 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[var(--text-muted)]">Progres Bab</span>
                      <span className="text-[#3978D6] font-bold">{completedCh} / {totalCh}</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[var(--bg-sidebar)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#3978D6] to-[#69C9DF] transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ── 4. JAPANESE WORKPLACE CULTURE & CAREER GUIDES (HO-REN-SO) ── */}
        <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[#3978D6]/30 p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 text-[#E9BD72]">
            <Award className="w-6 h-6" />
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[var(--text-primary)] font-['Manrope']">
                Kunci Sukses Bekerja di Perusahaan Jepang: 報連相 (Ho-Ren-So)
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Tiga pilar komunikasi mutlak yang wajib dikuasai pekerja terampil asing
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#3978D6] uppercase block">
                1. 報告 (HOUKOKU) · Laporan
              </span>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                Melaporkan perkembangan dan hasil tugas kepada atasan secara berkala, terutama saat tugas selesai atau terjadi kendala tak terduga.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[var(--secondary-accent)] uppercase block">
                2. 連絡 (RENRAKU) · Kontak / Informasi
              </span>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                Menyampaikan fakta dan informasi penting kepada rekan kerja atau tim tanpa opini pribadi, memastikan semua pihak memahami situasi.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 space-y-2">
              <span className="text-xs font-mono font-bold text-[#45C6A5] uppercase block">
                3. 相談 (SOUDAN) · Konsultasi
              </span>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                Meminta saran atau berdiskusi dengan atasan atau senior saat Anda ragu, bingung, atau menghadapi masalah sebelum mengambil keputusan.
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: SECTOR — ROADMAP KURIKULUM & SECTOR PROFILE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (view === 'sector') {
    const completedChapters = selectedSector.chapters.filter(ch => progress.completedLessonIds.includes(ch.id)).length;
    const totalChapters = selectedSector.chapters.length;
    const pct = Math.round((completedChapters / totalChapters) * 100);

    return (
      <div className="space-y-8 text-left pb-20 animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Back navigation */}
        <button
          onClick={goBack}
          className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
          <span>Kembali ke Akademi Karier SSW</span>
        </button>

        {/* Sector Hero Profile */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)] border border-[#3978D6]/30 p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/40 flex items-center justify-center text-[#3978D6] shadow-inner">
                  <SectorIcon className="w-8 h-8" />
                </div>
                <div>
                  <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border inline-block mb-1 ${selectedSector.badgeColor}`}>
                    {selectedSector.badge}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] font-['Manrope']">
                    {selectedSector.japaneseName}
                  </h1>
                  <p className="text-sm font-bold text-[var(--text-secondary)]">{selectedSector.name} ({selectedSector.romajiName})</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-primary)] max-w-2xl leading-relaxed pt-1">
                {selectedSector.tagline}
              </p>
            </div>

            {/* Exam Simulation CTA & Stats */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-center">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase font-bold block">
                  Progres Kurikulum Sektor
                </span>
                <span className="text-2xl font-black text-[#2456A6] font-['Manrope']">
                  {completedChapters} / {totalChapters} Bab ({pct}%)
                </span>
              </div>

              <button
                onClick={startExamSimulation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Simulasi Skill Test {selectedSector.japaneseName}</span>
              </button>
            </div>

          </div>

          {/* Sector Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#3978D6]/15">
            <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/15 space-y-1.5">
              <span className="text-[10px] font-black text-[#3978D6] uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" /> Lingkungan Kerja di Jepang
              </span>
              <p className="text-xs text-[var(--text-primary)] leading-relaxed">
                {selectedSector.overview.workEnvironment}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/15 space-y-1.5">
              <span className="text-[10px] font-black text-[var(--secondary-accent)] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" /> Standar Ujian Keahlian (Skill Test)
              </span>
              <p className="text-xs text-[var(--text-primary)] font-bold">
                {selectedSector.overview.technicalExamName}
              </p>
              <p className="text-[11px] text-[var(--text-secondary)]">
                Penyelenggara: {selectedSector.overview.examOrganizer} · Standar Lulus: {selectedSector.overview.passRequirement}
              </p>
            </div>
          </div>
        </div>

        {/* ── INTERACTIVE LEARNING ROADMAP (Timeline) ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                Roadmap Kurikulum Pembelajaran ({totalChapters} Bab)
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Pelajari setiap bab secara berurutan untuk mempersiapkan diri menghadapi ujian resmi
              </p>
            </div>
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-3 relative before:absolute before:inset-0 before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-[#3978D6] before:via-[#69C9DF] before:to-transparent">
            {selectedSector.chapters.map((ch, idx) => {
              const catMeta = CATEGORY_META[ch.category];
              const CatIcon = catMeta.icon;
              const isCompleted = progress.completedLessonIds.includes(ch.id);
              const quizKey = `${selectedSectorId}_${ch.id}`;
              const quizResult = progress.quizScores[quizKey];

              return (
                <div
                  key={ch.id}
                  onClick={() => openChapter(ch.id)}
                  className={`relative pl-14 p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between gap-4 group ${
                    isCompleted
                      ? 'bg-[var(--bg-surface)] border-emerald-500/35 hover:border-emerald-500/60 shadow-md'
                      : 'bg-[var(--bg-surface)] border-[#3978D6]/25 hover:border-[#3978D6]/60 hover:shadow-[0_8px_24px_rgba(57, 120, 214,0.2)]'
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center font-black text-xs z-10 ${
                    isCompleted
                      ? 'bg-emerald-500 text-white shadow-[0_0_12px_rgba(0,214,163,0.6)]'
                      : 'bg-[var(--bg-elevated)] border-2 border-[#3978D6] text-[var(--text-primary)]'
                  }`}>
                    {isCompleted ? <Check className="w-4 h-4" /> : ch.chapterNumber}
                  </div>

                  <div className="space-y-1 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${catMeta.bg} ${catMeta.color}`}>
                        <CatIcon className="w-3 h-3 inline mr-1" />
                        {catMeta.label}
                      </span>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1">
                        <Clock className="w-3 h-3" /> ~{ch.estimatedMinutes} menit
                      </span>
                      {isCompleted && (
                        <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Selesai
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[var(--text-primary)] font-['Manrope'] group-hover:text-[#2456A6] transition-colors truncate">
                      Bab {ch.chapterNumber}: {ch.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] font-mono japanese-text truncate">
                      {ch.japaneseTitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {quizResult && (
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold ${
                        quizResult.percentage >= 70
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      }`}>
                        Skor: {quizResult.percentage}%
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Official References */}
        <div className="rounded-3xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 p-6 space-y-3">
          <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider flex items-center gap-2">
            <Info className="w-4 h-4" /> Dokumen Referensi Resmi & Standar Kurikulum
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {selectedSector.officialReferences.map((ref, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[#3978D6]/15 text-xs">
                <span className="font-bold text-[var(--text-primary)] block">{ref.title}</span>
                <span className="text-[var(--text-muted)] block text-[11px] mt-0.5">{ref.agency} — {ref.description}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: CHAPTER — DETAIL PEMBELAJARAN BAB LENGKAP
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (view === 'chapter' && selectedChapter) {
    const ch = selectedChapter;
    const catMeta = CATEGORY_META[ch.category];
    const CatIcon = catMeta.icon;
    const isCompleted = progress.completedLessonIds.includes(ch.id);

    const currentIdx = selectedSector.chapters.findIndex(c => c.id === ch.id);
    const nextChapter = selectedSector.chapters[currentIdx + 1];
    const prevChapter = selectedSector.chapters[currentIdx - 1];

    return (
      <div className="space-y-6 text-left pb-20 max-w-4xl mx-auto animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={goBack}
            className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
            <span>Kembali ke Kurikulum {selectedSector.japaneseName}</span>
          </button>

          <div className="flex items-center gap-2">
            {prevChapter && (
              <button
                onClick={() => openChapter(prevChapter.id)}
                className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[#3978D6]/20 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                ← Bab {prevChapter.chapterNumber}
              </button>
            )}
            {nextChapter && (
              <button
                onClick={() => openChapter(nextChapter.id)}
                className="px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] border border-[#3978D6]/20 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                Bab {nextChapter.chapterNumber} →
              </button>
            )}
          </div>
        </div>

        {/* Chapter Hero */}
        <div className="rounded-3xl bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-surface)] border border-[#3978D6]/35 p-6 sm:p-8 space-y-3 shadow-xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${catMeta.bg} ${catMeta.color}`}>
              <CatIcon className="w-3.5 h-3.5 inline mr-1" />
              {catMeta.label}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)]">
              Bab {ch.chapterNumber} · ~{ch.estimatedMinutes} menit
            </span>
            {isCompleted && (
              <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Selesai
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope']">
            Bab {ch.chapterNumber}: {ch.title}
          </h1>
          <p className="text-base text-[var(--text-primary)] font-mono japanese-text">
            {ch.japaneseTitle}
          </p>
        </div>

        {/* Objectives */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 space-y-3">
          <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider flex items-center gap-2">
            <Target className="w-4 h-4" /> Tujuan Pembelajaran (Gool)
          </span>
          <ul className="space-y-2 pt-1">
            {ch.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Explanation (SswContentRenderer) */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 sm:p-8 space-y-4">
          <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Materi & Pembahasan Lengkap
          </span>
          <div className="ssw-content-text pt-2 leading-relaxed text-sm sm:text-base text-[var(--text-primary)]">
            <SswContentRenderer content={ch.contentExplanation} />
          </div>
        </div>

        {/* Key Terms */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 space-y-4">
          <span className="text-xs font-mono font-bold text-[#E9BD72] uppercase tracking-wider flex items-center gap-2">
            <Languages className="w-4 h-4" /> Istilah Kunci Tempat Kerja ({ch.keyTerms.length})
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {ch.keyTerms.map((term, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 space-y-1.5">
                <div className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  <FuriganaText text={term.japanese} reading={term.kana} />
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-mono text-[#3978D6] font-bold">{term.kana}</span>
                  <span className="text-[var(--text-muted)]">({term.romaji})</span>
                </div>
                <p className="text-xs text-[var(--text-primary)] font-medium pt-1 border-t border-[#3978D6]/15">
                  {term.indonesian}
                </p>
                {term.note && <p className="text-[10px] text-[var(--text-muted)] italic">※ {term.note}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Case Study */}
        {ch.workplaceCaseStudy && (
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-amber-500/30 p-6 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4" /> Studi Kasus & Percakapan Kerja Nyata
            </span>
            <h3 className="text-base font-black text-[var(--text-primary)]">{ch.workplaceCaseStudy.title}</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-sidebar)]/60 p-4 rounded-2xl border border-[#3978D6]/15 italic">
              {ch.workplaceCaseStudy.scenario}
            </p>

            {ch.workplaceCaseStudy.dialogue && ch.workplaceCaseStudy.dialogue.length > 0 && (
              <div className="space-y-3 pt-2">
                {ch.workplaceCaseStudy.dialogue.map((d, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/50 border border-[#3978D6]/15 space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-black text-[#3978D6]">{d.speaker}</span>
                      <span className="text-[var(--text-muted)]">({d.role})</span>
                    </div>
                    <div className="text-base text-[var(--text-primary)] font-medium py-1">
                      <FuriganaText text={d.japanese} reading={d.kana} />
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">{d.kana}</p>
                    <p className="text-xs text-[var(--text-secondary)]">→ {d.indonesian}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-1">Pelajaran Penting:</span>
              <p className="text-xs text-[var(--text-primary)]">{ch.workplaceCaseStudy.takeaway}</p>
            </div>
          </div>
        )}

        {/* Visual Diagram */}
        {ch.visualDiagram && (
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> {ch.visualDiagram.title}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {ch.visualDiagram.items.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/70 border border-[#3978D6]/20 space-y-1">
                  <span className="text-xs font-bold text-[var(--text-primary)] block">{item.label}</span>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                  {item.highlight && <span className="text-[10px] font-mono text-[#3978D6] font-bold block pt-1">{item.highlight}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Illustrations Gallery */}
        {ch.illustrations && ch.illustrations.length > 0 && (
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> Galeri Ilustrasi & Diagram Resmi ({ch.illustrations.length})
              </span>
              <span className="text-[10px] text-[var(--text-muted)] italic">Klik gambar untuk memperbesar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ch.illustrations.map((item, i) => (
                <div
                  key={i}
                  onClick={() => {
                    sound.playClick();
                    setPreviewImage({ url: item.url, title: item.title, caption: item.caption });
                  }}
                  className="group cursor-pointer rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/20 hover:border-[#3978D6]/60 overflow-hidden flex flex-col hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-4/3 bg-black/40 flex items-center justify-center p-2">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ZoomIn className="w-5 h-5 text-[var(--text-primary)]" />
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[#2456A6] transition-colors">{item.title}</h4>
                    <p className="text-[10px] text-[var(--text-secondary)] line-clamp-2 mt-1">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Important Points & Summary */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 space-y-4">
          <span className="text-xs font-mono font-bold text-[#E9BD72] uppercase tracking-wider flex items-center gap-2">
            <Lightbulb className="w-4 h-4" /> Poin Penting & Rangkuman
          </span>
          <ul className="space-y-2">
            {ch.importantPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-primary)] leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E9BD72] mt-1.5 shrink-0" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] pt-3 border-t border-[#3978D6]/15 leading-relaxed">
            {ch.summary}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {ch.practiceQuestions.length > 0 && (
            <button
              onClick={() => startQuiz(ch.practiceQuestions, `Latihan Bab ${ch.chapterNumber}: ${ch.title}`)}
              className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Brain className="w-4 h-4" />
              <span>Mulai Latihan Soal ({ch.practiceQuestions.length} Soal)</span>
            </button>
          )}

          {!isCompleted && (
            <button
              onClick={() => { markChapterComplete(ch.id); sound.playClick(); }}
              className="flex-1 py-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Tandai Bab Selesai</span>
            </button>
          )}

          {nextChapter && (
            <button
              onClick={() => openChapter(nextChapter.id)}
              className="flex-1 py-3.5 px-5 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border border-[#3978D6]/30 text-[var(--text-primary)] text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Bab Berikutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Lightbox Image Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col rounded-3xl bg-[var(--bg-sidebar)] border border-[#3978D6]/40 shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-[#3978D6]/20 flex items-center justify-between bg-[var(--bg-surface)]">
                <div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{previewImage.title}</h3>
                  {previewImage.caption && <p className="text-xs text-[var(--text-secondary)]">{previewImage.caption}</p>}
                </div>
                <button onClick={() => setPreviewImage(null)} className="p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)]">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 flex items-center justify-center bg-black/60 overflow-auto">
                <img src={previewImage.url} alt={previewImage.title} className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl" />
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW: QUIZ / EXAM — SSW CBT SIMULATION ENGINE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if ((view === 'quiz' || view === 'exam') && quizQuestions.length > 0) {
    const q = quizQuestions[quizCurrentIdx];
    const isExam = view === 'exam';
    const totalQuestions = quizQuestions.length;
    const answeredCount = Object.keys(quizAnswers).length;

    // Results
    if (quizSubmitted && !quizShowReview) {
      const correctCount = quizQuestions.reduce((acc, qu) => acc + (quizAnswers[qu.id] === qu.correctAnswerIndex ? 1 : 0), 0);
      const percentage = Math.round((correctCount / totalQuestions) * 100);
      const passingMark = isExam ? (selectedSector.examSimulation.passingScorePercentage || 60) : 60;
      const passed = percentage >= passingMark;

      return (
        <div className="space-y-6 text-left pb-20 max-w-3xl mx-auto animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
          <button onClick={goBack} className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
            <span>Kembali</span>
          </button>

          <div className={`rounded-3xl border p-8 sm:p-10 text-center space-y-6 ${
            passed ? 'bg-[var(--bg-surface)] border-emerald-500/40 shadow-[0_0_40px_rgba(0,214,163,0.2)]' : 'bg-[var(--bg-surface)] border-amber-500/40'
          }`}>
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center ${
              passed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {passed ? <CheckCircle2 className="w-10 h-10" /> : <AlertTriangle className="w-10 h-10" />}
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope']">
                {passed ? 'Selamat! Anda Lulus Evaluasi 🎉' : 'Belum Mencapai Nilai Kelulusan'}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                {passed 
                  ? `Skor Anda melampaui passing mark ${passingMark}% untuk ${quizTitle}` 
                  : `Passing mark standar adalah ${passingMark}%. Ulangi materi dan coba lagi.`}
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 pt-2">
              <div>
                <span className={`text-4xl sm:text-5xl font-black font-mono ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {percentage}%
                </span>
                <span className="text-xs text-[var(--text-muted)] block font-bold mt-1">Skor Akhir</span>
              </div>
              <div className="w-px h-12 bg-[#3978D6]/20" />
              <div>
                <span className="text-4xl sm:text-5xl font-black font-mono text-[#3978D6]">
                  {correctCount}/{totalQuestions}
                </span>
                <span className="text-xs text-[var(--text-muted)] block font-bold mt-1">Jawaban Benar</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <button
                onClick={() => setQuizShowReview(true)}
                className="px-6 py-3 rounded-2xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-elevated)] border border-[#3978D6]/40 text-[var(--text-primary)] text-xs sm:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#3978D6]" />
                <span>Lihat Pembahasan Jawaban</span>
              </button>

              <button
                onClick={() => { setQuizCurrentIdx(0); setQuizAnswers({}); setQuizSubmitted(false); }}
                className="px-6 py-3 rounded-2xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] border border-[#3978D6]/25 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Ulangi Ujian</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Review mode
    if (quizSubmitted && quizShowReview) {
      return (
        <div className="space-y-6 text-left pb-20 max-w-3xl mx-auto animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
          <button onClick={() => setQuizShowReview(false)} className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
            <span>Kembali ke Ringkasan Nilai</span>
          </button>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
            Pembahasan & Evaluasi Jawaban ({totalQuestions} Soal)
          </h2>

          <div className="space-y-4">
            {quizQuestions.map((qu, idx) => {
              const userAnswer = quizAnswers[qu.id];
              const isCorrect = userAnswer === qu.correctAnswerIndex;

              return (
                <div
                  key={qu.id}
                  className={`rounded-3xl border p-6 space-y-3 ${
                    isCorrect ? 'bg-[var(--bg-surface)] border-emerald-500/30' : 'bg-[var(--bg-surface)] border-rose-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold font-mono">
                    <span className={isCorrect ? 'text-emerald-400' : 'text-rose-400'}>
                      {isCorrect ? '✓ Benar' : '✗ Salah'} · Soal {idx + 1}
                    </span>
                  </div>

                  <div className="text-sm sm:text-base text-[var(--text-primary)] font-bold leading-relaxed pt-1">
                    <FuriganaText text={qu.questionText} />
                  </div>

                  {qu.situation && <p className="text-xs text-[var(--text-muted)] italic">Situasi: {qu.situation}</p>}
                  {qu.translation && <p className="text-xs text-[var(--text-secondary)]">Terjemahan: {qu.translation}</p>}

                  <div className="space-y-2 pt-1">
                    {qu.options.map((opt, oi) => (
                      <div
                        key={oi}
                        className={`p-3 rounded-xl text-xs flex items-start gap-2.5 ${
                          oi === qu.correctAnswerIndex
                            ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold'
                            : oi === userAnswer && oi !== qu.correctAnswerIndex
                            ? 'bg-rose-500/20 border border-rose-500/40 text-rose-300'
                            : 'bg-[var(--bg-sidebar)]/40 text-[var(--text-muted)]'
                        }`}
                      >
                        <span className="font-mono font-bold shrink-0">{oi + 1}.</span>
                        <div className="flex-1 leading-relaxed">
                          <FuriganaText text={opt} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/20 text-xs">
                    <span className="font-bold text-[#3978D6] block mb-1">Penjelasan Pembahasan:</span>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{qu.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    // Active Quiz Question Interface
    return (
      <div className="space-y-6 text-left pb-20 max-w-3xl mx-auto animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">
        
        {/* Header bar */}
        <div className="flex items-center justify-between">
          <button onClick={goBack} className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
            <span>Keluar Latihan</span>
          </button>
          <span className="text-xs font-mono font-bold text-[#2456A6]">
            Soal {quizCurrentIdx + 1} dari {totalQuestions}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 rounded-full bg-[var(--bg-sidebar)] overflow-hidden border border-[#3978D6]/20">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#3978D6] to-[#69C9DF] transition-all duration-300"
            style={{ width: `${((quizCurrentIdx + 1) / totalQuestions) * 100}%` }}
          />
        </div>

        {/* Question card */}
        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/30 p-6 sm:p-8 space-y-5 shadow-xl">
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[#3978D6]/30 text-[var(--text-primary)] text-xs font-bold font-mono">
              {isExam ? 'Ujian Keahlian Teknis' : 'Latihan Bab'}
            </span>
            <div className="text-base sm:text-lg text-[var(--text-primary)] font-bold leading-relaxed pt-2">
              <FuriganaText text={q.questionText} />
            </div>
          </div>

          {q.situation && (
            <p className="text-xs text-[var(--text-secondary)] italic bg-[var(--bg-sidebar)]/60 p-3 rounded-xl border border-[#3978D6]/15">
              Situasi: {q.situation}
            </p>
          )}

          {q.passageText && (
            <div className="text-xs sm:text-sm text-[var(--text-primary)] bg-[var(--bg-sidebar)] p-4 rounded-2xl border border-[#3978D6]/20 whitespace-pre-line leading-relaxed">
              <FuriganaText text={q.passageText} />
            </div>
          )}

          {q.translation && (
            <p className="text-xs text-[var(--text-muted)]">
              Arti: {q.translation}
            </p>
          )}

          {/* Options */}
          <div className="space-y-3 pt-2">
            {q.options.map((opt, oi) => {
              const isSelected = quizAnswers[q.id] === oi;
              return (
                <button
                  key={oi}
                  onClick={() => {
                    sound.playClick();
                    setQuizAnswers(prev => ({ ...prev, [q.id]: oi }));
                  }}
                  className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm transition-all flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--bg-elevated)] border-2 border-[#3978D6] text-[var(--text-primary)] shadow-[0_0_20px_rgba(57, 120, 214,0.3)]'
                      : 'bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 text-[var(--text-secondary)] hover:border-[#3978D6]/50 hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                    isSelected ? 'bg-[#3978D6] text-white' : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[#3978D6]/20'
                  }`}>
                    {oi + 1}
                  </span>
                  <div className="flex-1 pt-0.5 leading-relaxed">
                    <FuriganaText text={opt} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => { if (quizCurrentIdx > 0) { sound.playClick(); setQuizCurrentIdx(prev => prev - 1); } }}
            disabled={quizCurrentIdx === 0}
            className="px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[#3978D6]/20 text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-30 cursor-pointer"
          >
            ← Sebelumnya
          </button>

          <div className="flex gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-md">
            {quizQuestions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { sound.playClick(); setQuizCurrentIdx(idx); }}
                className={`w-7 h-7 rounded-lg text-[10px] font-bold shrink-0 transition-all ${
                  idx === quizCurrentIdx
                    ? 'bg-[#3978D6] text-white shadow-md'
                    : quizAnswers[quizQuestions[idx].id] !== undefined
                    ? 'bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/40'
                    : 'bg-[var(--bg-sidebar)] text-[var(--text-muted)] border border-[#3978D6]/15'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {quizCurrentIdx < totalQuestions - 1 ? (
            <button
              onClick={() => { sound.playClick(); setQuizCurrentIdx(prev => prev + 1); }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              Selanjutnya →
            </button>
          ) : (
            <button
              onClick={submitQuiz}
              disabled={answeredCount < totalQuestions}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-black shadow-lg transition-all active:scale-95 disabled:opacity-40 cursor-pointer"
            >
              Kumpulkan ({answeredCount}/{totalQuestions})
            </button>
          )}
        </div>

      </div>
    );
  }

  return <div className="text-center text-[var(--text-muted)] py-20">Memuat SSW Career Academy...</div>;
};
