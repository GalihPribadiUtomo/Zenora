import React, { useState, useMemo } from 'react';
import {
  User as UserIcon,
  Mail,
  Calendar,
  Award,
  Trophy,
  Star,
  Flame,
  BookOpen,
  PenTool,
  Languages,
  Target,
  BarChart3,
  Clock,
  CheckCircle2,
  Lock,
  Settings,
  Moon,
  Sun,
  Monitor,
  Cloud,
  CloudCheck,
  LogOut,
  LogIn,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Brain,
  Zap,
  Shield,
  Bell,
  Sparkles,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  ExternalLink,
  Download
} from 'lucide-react';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import type { UserStats, NotificationPreferences } from '../types';
import { sound } from '../utils/audio';
import { 
  getNotificationPreferences, 
  saveNotificationPreferences, 
  requestBrowserNotificationPermission 
} from '../utils/notificationService';
import { ThemePreference } from '../utils/themeService';
import { downloadMilestoneCertificate } from '../utils/certificateGenerator';

interface ProfileSectionProps {
  stats: UserStats;
  user: any; // Supabase User | null
  onOpenAuth: () => void;
  onSignOut: () => void;
  isSyncing: boolean;
  onSync: () => void;
  onNavigate: (tab: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  themePreference?: ThemePreference;
  onChangeThemePreference?: (pref: ThemePreference) => void;
  isAdminMode?: boolean;
  onOpenAdminAuth?: () => void;
  onExitAdminMode?: () => void;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'kotoba' | 'kanji' | 'quiz' | 'streak' | 'general';
  xp: number;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  stats,
  user,
  onOpenAuth,
  onSignOut,
  isSyncing,
  onSync,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  themePreference = darkMode ? 'dark' : 'light',
  onChangeThemePreference,
  isAdminMode = false,
  onOpenAdminAuth,
  onExitAdminMode
}) => {
  // Settings tab / accordions
  const [activeSettingsGroup, setActiveSettingsGroup] = useState<string | null>('personal');
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState<number>(() => {
    return parseInt(localStorage.getItem('zenora_daily_goal') || '30', 10);
  });
  const [targetJlpt, setTargetJlpt] = useState<string>(() => {
    return localStorage.getItem('zenora_target_jlpt') || 'N5';
  });
  const [remindersEnabled, setRemindersEnabled] = useState<boolean>(() => {
    return localStorage.getItem('zenora_reminders') !== 'false';
  });

  // Notification Preferences State
  const [notifPrefs, setNotifPrefs] = useState<NotificationPreferences>(() => getNotificationPreferences());
  const [browserPermStatus, setBrowserPermStatus] = useState<string>(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'unsupported';
  });

  const handleUpdateNotifPref = (key: keyof NotificationPreferences, value: any) => {
    sound.playClick();
    const next = { ...notifPrefs, [key]: value };
    setNotifPrefs(next);
    saveNotificationPreferences(next);
  };

  const handleRequestBrowserPerm = async () => {
    sound.playClick();
    const perm = await requestBrowserNotificationPermission();
    setBrowserPermStatus(perm);
    const next = { ...notifPrefs, browserNotifications: perm === 'granted' };
    setNotifPrefs(next);
    saveNotificationPreferences(next);
    if (perm === 'granted') sound.playCorrect();
  };

  const handleSetDailyGoal = (mins: number) => {
    sound.playClick();
    setDailyGoalMinutes(mins);
    localStorage.setItem('zenora_daily_goal', mins.toString());
  };

  const handleSetTargetJlpt = (level: string) => {
    sound.playClick();
    setTargetJlpt(level);
    localStorage.setItem('zenora_target_jlpt', level);
  };

  // Calculations for real user stats
  const totalKotobaLearned = stats.learnedKotobaIds.length;
  const totalKanjiLearned = stats.learnedKanjiIds.length;
  const totalKanaLearned = (stats.learnedKanaChars || []).length;
  const totalBookmarks = stats.bookmarkedKotobaIds.length + stats.bookmarkedKanjiIds.length;
  const totalQuizzes = stats.quizHistory.length;

  const averageQuizScore = useMemo(() => {
    if (stats.quizHistory.length === 0) return 0;
    const sum = stats.quizHistory.reduce((acc, q) => acc + (q.total > 0 ? (q.score / q.total) * 100 : 0), 0);
    return Math.round(sum / stats.quizHistory.length);
  }, [stats.quizHistory]);

  // XP calculation
  const totalXp = useMemo(() => {
    return (
      totalKotobaLearned * 10 +
      totalKanjiLearned * 25 +
      totalKanaLearned * 5 +
      totalQuizzes * 30 +
      stats.streakDays * 50
    );
  }, [totalKotobaLearned, totalKanjiLearned, totalKanaLearned, totalQuizzes, stats.streakDays]);

  // Level determination based on XP
  const { level, levelName, levelXpMin, levelXpMax, levelProgress } = useMemo(() => {
    const levels = [
      { lvl: 1, name: 'Shoshinsha (初心者 · Pemula)', min: 0, max: 500 },
      { lvl: 2, name: 'Gakusei (学生 · Pembelajar)', min: 500, max: 1500 },
      { lvl: 3, name: 'Chukyu (中級 · Terampil)', min: 1500, max: 3500 },
      { lvl: 4, name: 'Jokyu (上級 · Mahir)', min: 3500, max: 7000 },
      { lvl: 5, name: 'Tatsujin (達人 · Master)', min: 7000, max: 12000 },
      { lvl: 6, name: 'Sensei (先生 · Legenda)', min: 12000, max: 99999 }
    ];

    const current = levels.find(l => totalXp >= l.min && totalXp < l.max) || levels[levels.length - 1];
    const range = current.max - current.min;
    const progress = Math.min(100, Math.max(0, Math.round(((totalXp - current.min) / range) * 100)));

    return {
      level: current.lvl,
      levelName: current.name,
      levelXpMin: current.min,
      levelXpMax: current.max,
      levelProgress: progress
    };
  }, [totalXp]);

  // Achievements evaluation
  const achievements: Achievement[] = useMemo(() => {
    return [
      {
        id: 'kotoba_first',
        title: 'Langkah Pertama',
        description: 'Hafal kosakata bahasa Jepang pertamamu',
        icon: '🌱',
        category: 'kotoba',
        xp: 50,
        unlocked: totalKotobaLearned >= 1,
        progress: Math.min(1, totalKotobaLearned),
        maxProgress: 1
      },
      {
        id: 'kotoba_50',
        title: 'Kolektor Kata I',
        description: 'Kuasai 50 kosakata Minna no Nihongo',
        icon: '📖',
        category: 'kotoba',
        xp: 150,
        unlocked: totalKotobaLearned >= 50,
        progress: Math.min(50, totalKotobaLearned),
        maxProgress: 50
      },
      {
        id: 'kotoba_200',
        title: 'Kolektor Kata II',
        description: 'Kuasai 200 kosakata bahasa Jepang esensial',
        icon: '📚',
        category: 'kotoba',
        xp: 400,
        unlocked: totalKotobaLearned >= 200,
        progress: Math.min(200, totalKotobaLearned),
        maxProgress: 200
      },
      {
        id: 'kanji_first',
        title: 'Sentuhan Kanji',
        description: 'Kuasai goresan Kanji pertamamu',
        icon: '🖌️',
        category: 'kanji',
        xp: 100,
        unlocked: totalKanjiLearned >= 1,
        progress: Math.min(1, totalKanjiLearned),
        maxProgress: 1
      },
      {
        id: 'kanji_50',
        title: 'Penakluk N5',
        description: 'Kuasai 50 karakter Kanji dasar N5',
        icon: '⛩️',
        category: 'kanji',
        xp: 300,
        unlocked: totalKanjiLearned >= 50,
        progress: Math.min(50, totalKanjiLearned),
        maxProgress: 50
      },
      {
        id: 'kanji_150',
        title: 'Kanji Master',
        description: 'Kuasai 150 Kanji N5 & N4 interaktif',
        icon: '🏯',
        category: 'kanji',
        xp: 600,
        unlocked: totalKanjiLearned >= 150,
        progress: Math.min(150, totalKanjiLearned),
        maxProgress: 150
      },
      {
        id: 'kana_complete',
        title: 'Master Aksara',
        description: 'Kuasai seluruh huruf Hiragana & Katakana (152 kana)',
        icon: '🗾',
        category: 'general',
        xp: 350,
        unlocked: totalKanaLearned >= 152,
        progress: Math.min(152, totalKanaLearned),
        maxProgress: 152
      },
      {
        id: 'streak_3',
        title: 'Semangat Konsisten',
        description: 'Pertahankan streak belajar selama 3 hari beruntun',
        icon: '🔥',
        category: 'streak',
        xp: 150,
        unlocked: stats.streakDays >= 3,
        progress: Math.min(3, stats.streakDays),
        maxProgress: 3
      },
      {
        id: 'streak_7',
        title: 'Pejuang Disiplin',
        description: 'Capai streak belajar selama 7 hari berturut-turut',
        icon: '⚡',
        category: 'streak',
        xp: 350,
        unlocked: stats.streakDays >= 7,
        progress: Math.min(7, stats.streakDays),
        maxProgress: 7
      },
      {
        id: 'quiz_10',
        title: 'Penguji Mandiri',
        description: 'Selesaikan 10 sesi latihan kuis & ujian',
        icon: '🎯',
        category: 'quiz',
        xp: 200,
        unlocked: totalQuizzes >= 10,
        progress: Math.min(10, totalQuizzes),
        maxProgress: 10
      },
      {
        id: 'perfect_score',
        title: 'Kesempurnaan 100%',
        description: 'Raih nilai sempurna 100% pada latihan kuis',
        icon: '💎',
        category: 'quiz',
        xp: 250,
        unlocked: stats.quizHistory.some(q => q.total > 0 && q.score === q.total),
        progress: stats.quizHistory.some(q => q.total > 0 && q.score === q.total) ? 1 : 0,
        maxProgress: 1
      },
      {
        id: 'ssw_ambition',
        title: 'Siap Bekerja di Jepang',
        description: 'Buka modul karier SSW dan selesaikan bab persiapan kerja',
        icon: '💼',
        category: 'general',
        xp: 500,
        unlocked: totalXp >= 1000,
        progress: Math.min(1000, totalXp),
        maxProgress: 1000
      }
    ];
  }, [totalKotobaLearned, totalKanjiLearned, totalKanaLearned, totalQuizzes, stats.streakDays, stats.quizHistory, totalXp]);

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  // Heatmap calculation (last 28 days activity)
  const heatmapData = useMemo(() => {
    const days = [];
    const now = new Date();
    for (let i = 27; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      
      // Count activities on this date
      const quizCount = stats.quizHistory.filter(q => q.date && q.date.startsWith(dateStr)).length;
      const isToday = i === 0;
      const isActive = quizCount > 0 || (isToday && stats.streakDays > 0);
      const intensity = quizCount >= 5 ? 3 : quizCount >= 2 ? 2 : isActive ? 1 : 0;

      days.push({
        date: dateStr,
        dayName: d.toLocaleDateString('id-ID', { weekday: 'short' }),
        dayNum: d.getDate(),
        quizCount,
        intensity
      });
    }
    return days;
  }, [stats.quizHistory, stats.streakDays]);

  return (
    <div className="space-y-8 text-left pb-20 animate-fade-in font-['Plus_Jakarta_Sans',sans-serif]">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. PROFILE HERO SECTION (Personal Japanese Learning Dashboard)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative overflow-hidden rounded-3xl border border-[#3978D6]/30 shadow-[0_24px_70px_-15px_rgba(8,21,47,0.95),0_0_50px_rgba(57, 120, 214,0.2)] bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-surface)] p-6 sm:p-10">
        
        {/* Ambient atmospheric lighting */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#3978D6]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#69C9DF]/15 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 rounded-full bg-[#2456A6]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* Left: Avatar & User Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            {/* Glowing Avatar */}
            <div className="relative group shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#3978D6] via-[#2456A6] to-[#69C9DF] p-1 shadow-[0_0_30px_rgba(57,120,214,0.5)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[22px] bg-[var(--bg-sidebar)] flex flex-col items-center justify-center text-center overflow-hidden border border-white/20">
                  {user?.user_metadata?.avatar_url ? (
                    <img 
                      src={user.user_metadata.avatar_url} 
                      alt="Avatar" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl sm:text-5xl font-black bg-gradient-to-br from-white to-[#DCEBFA] bg-clip-text text-transparent font-['Manrope']">
                      {user?.email ? user.email.slice(0, 2).toUpperCase() : 'ゼ'}
                    </span>
                  )}
                </div>
              </div>

              {/* Verified / Online Level Badge */}
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-[11px] font-black border-2 border-[#08152F] shadow-lg flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3 text-[#E9BD72]" />
                Lv.{level}
              </div>
            </div>

            {/* User Title & Credentials */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[#3978D6]/40 text-[var(--text-primary)] text-xs font-bold font-mono">
                  {levelName}
                </span>
                {user ? (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Akun Terverifikasi
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold">
                    Mode Tamu (Lokal)
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)] font-['Manrope'] tracking-tight">
                {user?.user_metadata?.full_name || (user?.email ? user.email.split('@')[0] : 'Pelajar ZENORA')}
              </h1>

              <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)]">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#3978D6]" />
                  {user?.email || 'Belum tersinkron ke cloud'}
                </span>
                <span className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[var(--secondary-accent)]" />
                  Bergabung {user?.created_at ? new Date(user.created_at).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' }) : '2026'}
                </span>
              </div>

              {/* XP Progress Bar */}
              <div className="pt-2 max-w-md">
                <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
                  <span className="text-[var(--text-secondary)] flex items-center gap-1 font-bold">
                    <Zap className="w-3.5 h-3.5 text-[#E9BD72]" /> {totalXp.toLocaleString()} XP
                  </span>
                  <span className="text-[#2456A6] font-bold">
                    Target Lv.{level + 1} ({levelProgress}%)
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[var(--bg-sidebar)] border border-[#3978D6]/30 overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#3978D6] via-[#2456A6] to-[#69C9DF] shadow-[0_0_10px_rgba(57,120,214,0.7)] transition-all duration-700"
                    style={{ width: `${levelProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Action Buttons */}
          <div className="flex flex-row lg:flex-col gap-3 shrink-0">
            {user ? (
              <>
                <button
                  onClick={() => { sound.playClick(); onSync(); }}
                  disabled={isSyncing}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-elevated)] border border-[#3978D6]/40 text-[var(--text-primary)] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className={`w-4 h-4 text-[#3978D6] ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Menyinkronkan...' : 'Sinkron Cloud'}</span>
                </button>
                <button
                  onClick={() => { sound.playClick(); onSignOut(); }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[var(--bg-sidebar)]/80 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Akun</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => { sound.playClick(); onOpenAuth(); }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl neon-btn-primary text-white text-xs sm:text-sm font-black shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Masuk / Daftar Akun Cloud</span>
                </button>
                <button
                  onClick={() => { sound.playClick(); onSignOut(); }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[var(--bg-sidebar)]/80 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-bold transition-all active:scale-95 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar Mode Tamu</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. LEARNING STATISTICS (8 Real Data Cards)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2.5">
              <BarChart3 className="w-6 h-6 text-[#3978D6]" />
              Statistik Pembelajaran
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              Perkembangan belajar bahasa Jepang nyata Anda berdasarkan aktivitas & latihan
            </p>
          </div>
          <button
            onClick={() => { sound.playClick(); onNavigate('analitik'); }}
            className="text-xs font-bold text-[#3978D6] hover:text-[#2456A6] flex items-center gap-1 transition-colors"
          >
            <span>Buka Analitik Penuh</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Cards Grid - Row 1: Mastery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Kotoba */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-3 hover:border-[#3978D6]/60 hover:shadow-[0_10px_30px_rgba(57,120,214,0.15)] transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#3978D6]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#2456A6]">
                {Math.round((totalKotobaLearned / KOTOBA_DATA.length) * 100)}%
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] block">
                {totalKotobaLearned}
              </span>
              <p className="text-xs text-[var(--text-secondary)] font-semibold mt-0.5">
                Kosakata Dikuasai
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1">
                dari {KOTOBA_DATA.length} kosakata Minna
              </p>
            </div>
          </div>

          {/* Card 2: Kanji */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-3 hover:border-[#3978D6]/60 hover:shadow-[0_10px_30px_rgba(57,120,214,0.15)] transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[var(--bg-sidebar)] border border-[#69C9DF]/30 flex items-center justify-center">
                <PenTool className="w-5 h-5 text-[var(--secondary-accent)]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[var(--secondary-accent)]">
                {Math.round((totalKanjiLearned / KANJI_DATA.length) * 100)}%
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] block">
                {totalKanjiLearned}
              </span>
              <p className="text-xs text-[var(--text-secondary)] font-semibold mt-0.5">
                Kanji N5 & N4
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1">
                dari {KANJI_DATA.length} huruf target
              </p>
            </div>
          </div>

          {/* Card 3: Kana */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-3 hover:border-[#3978D6]/60 hover:shadow-[0_10px_30px_rgba(57,120,214,0.15)] transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[var(--bg-sidebar)] border border-[#FF70C8]/30 flex items-center justify-center">
                <Languages className="w-5 h-5 text-[#FF70C8]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#FF70C8]">
                {Math.round((totalKanaLearned / 152) * 100)}%
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] block">
                {totalKanaLearned}
              </span>
              <p className="text-xs text-[var(--text-secondary)] font-semibold mt-0.5">
                Aksara Kana
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1">
                Hiragana & Katakana
              </p>
            </div>
          </div>

          {/* Card 4: Streak Belajar */}
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-3 hover:border-[#3978D6]/60 hover:shadow-[0_10px_30px_rgba(57,120,214,0.15)] transition-all">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-[var(--bg-sidebar)] border border-[#E9BD72]/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-[#E9BD72]" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#E9BD72]">
                Konsisten
              </span>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-1.5">
                {stats.streakDays} <span className="text-base font-bold text-[var(--text-secondary)]">Hari</span>
              </span>
              <p className="text-xs text-[var(--text-secondary)] font-semibold mt-0.5">
                Streak Belajar
              </p>
              <p className="text-[10px] text-[var(--text-muted)] mt-1">
                Terus pertahankan setiap hari!
              </p>
            </div>
          </div>

        </div>

        {/* 4 Cards Grid - Row 2: Performance */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-2">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-bold block">Total Latihan</span>
            <span className="text-2xl font-black text-[var(--text-primary)] font-['Manrope']">{totalQuizzes}</span>
            <p className="text-xs text-[var(--text-secondary)]">Sesi latihan diselesaikan</p>
          </div>

          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-2">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-bold block">Akurasi Rata-rata</span>
            <span className="text-2xl font-black text-[#45C6A5] font-['Manrope']">{averageQuizScore}%</span>
            <p className="text-xs text-[var(--text-secondary)]">Rata-rata skor evaluasi kuis</p>
          </div>

          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-2">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-bold block">Disimpan</span>
            <span className="text-2xl font-black text-[#E9BD72] font-['Manrope']">{totalBookmarks}</span>
            <p className="text-xs text-[var(--text-secondary)]">Kosakata & kanji ditandai</p>
          </div>

          <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-5 space-y-2">
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase font-bold block">Target Harian</span>
            <span className="text-2xl font-black text-[#3978D6] font-['Manrope']">{dailyGoalMinutes} Menit</span>
            <p className="text-xs text-[var(--text-secondary)]">Target konsistensi belajar</p>
          </div>

        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. ACHIEVEMENTS & TROPHIES SHOWCASE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2.5">
              <Trophy className="w-6 h-6 text-[#E9BD72]" />
              Koleksi Pencapaian (Achievements)
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {unlockedCount} dari {achievements.length} lencana kehormatan telah terbuka
            </p>
          </div>
          <span className="px-3 py-1.5 rounded-full bg-[var(--bg-elevated)] border border-[#3978D6]/40 text-[var(--text-primary)] text-xs font-black font-mono">
            {unlockedCount} / {achievements.length} Terbuka
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`p-4 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                ach.unlocked
                  ? 'bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-elevated)] border-[#3978D6]/50 shadow-[0_4px_20px_rgba(57,120,214,0.2)] hover:scale-[1.02]'
                  : 'bg-[var(--bg-sidebar)]/80 border-[#3978D6]/15 opacity-60'
              }`}
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                    ach.unlocked ? 'bg-[var(--bg-sidebar)] border border-[#3978D6]/40 shadow-inner' : 'bg-[var(--bg-surface)] grayscale'
                  }`}>
                    {ach.icon}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono ${
                    ach.unlocked
                      ? 'bg-[#3978D6]/20 text-[var(--text-primary)] border border-[#3978D6]/30'
                      : 'bg-white/5 text-[var(--text-muted)] border border-white/10'
                  }`}>
                    +{ach.xp} XP
                  </span>
                </div>

                <div>
                  <h3 className={`text-sm font-black font-['Manrope'] ${ach.unlocked ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                    {ach.title}
                  </h3>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mt-1">
                    {ach.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3978D6]/15 flex items-center justify-between text-[10px] font-mono">
                {ach.unlocked ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Terbuka
                  </span>
                ) : (
                  <span className="text-[var(--text-muted)] flex items-center gap-1">
                    <Lock className="w-3 h-3" /> {ach.progress}/{ach.maxProgress}
                  </span>
                )}
                <span className="text-[var(--text-muted)] uppercase font-bold">{ach.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. LEARNING ACTIVITY HEATMAP & RECENT LOGS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2.5">
            <Calendar className="w-6 h-6 text-[var(--secondary-accent)]" />
            Aktivitas Belajar (28 Hari Terakhir)
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Jejak konsistensi latihan dan sesi belajar harian Anda
          </p>
        </div>

        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 space-y-6">
          
          {/* Heatmap Grid */}
          <div>
            <div className="grid grid-cols-7 sm:grid-cols-14 md:grid-cols-28 gap-2">
              {heatmapData.map((d, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-xl flex flex-col items-center justify-center text-[10px] font-mono transition-transform hover:scale-110 cursor-default border ${
                    d.intensity === 3
                      ? 'bg-gradient-to-br from-[#2456A6] to-[#3978D6] border-[#83B7EE] text-white shadow-[0_0_10px_rgba(57,120,214,0.6)]'
                      : d.intensity === 2
                      ? 'bg-[#3978D6]/60 border-[#3978D6] text-white'
                      : d.intensity === 1
                      ? 'bg-[#3978D6]/25 border-[#3978D6]/40 text-[var(--text-primary)]'
                      : 'bg-[var(--bg-sidebar)] border-[#3978D6]/15 text-[var(--text-muted)]/40'
                  }`}
                  title={`${d.date}: ${d.quizCount} aktivitas`}
                >
                  <span className="text-[9px] font-bold">{d.dayNum}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mt-4 pt-3 border-t border-[#3978D6]/15">
              <span>Kurang aktif</span>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-md bg-[var(--bg-sidebar)] border border-[#3978D6]/20" />
                <span className="w-3 h-3 rounded-md bg-[#3978D6]/25 border border-[#3978D6]/40" />
                <span className="w-3 h-3 rounded-md bg-[#3978D6]/60" />
                <span className="w-3 h-3 rounded-md bg-gradient-to-br from-[#2456A6] to-[#3978D6]" />
              </div>
              <span>Sangat aktif</span>
            </div>
          </div>

          {/* Recent Quiz Logs */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#2456A6] uppercase tracking-wider">
              Aktivitas Terakhir
            </h3>

            {stats.quizHistory.length > 0 ? (
              <div className="space-y-2">
                {stats.quizHistory.slice(-5).reverse().map((qh, idx) => {
                  const pct = qh.total > 0 ? Math.round((qh.score / qh.total) * 100) : 0;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[var(--bg-elevated)] text-[#3978D6] flex items-center justify-center font-bold text-xs">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[var(--text-primary)] capitalize">
                            Latihan {qh.subject} ({qh.mode})
                          </p>
                          <p className="text-[10px] text-[var(--text-muted)]">
                            {new Date(qh.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`text-xs font-black font-mono ${pct >= 80 ? 'text-emerald-400' : pct >= 60 ? 'text-amber-400' : 'text-rose-400'}`}>
                          {qh.score} / {qh.total} ({pct}%)
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-xs text-[var(--text-muted)] italic">
                Belum ada riwayat kuis yang tersimpan. Mulai latihan pertama Anda di menu Latihan!
              </p>
            )}
          </div>

        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4.5. SERTIFIKAT DIGITAL & MILESTONE
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--card-shadow)] p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2">
              <Award className="w-5 h-5 text-[var(--accent-gold)]" />
              <span>Sertifikat Digital & Milestone</span>
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Unduh sertifikat PNG resmi ZENORA saat mencapai target pembelajaran.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              id: 'kana',
              title: 'Master Hiragana & Katakana',
              subtitle: 'Penguasaan Aksara Dasar & Serapan Jepang',
              current: stats.learnedKanaChars?.length || 0,
              target: 312,
              unlockAt: 92,
            },
            {
              id: 'minna1',
              title: 'Minna no Nihongo I',
              subtitle: 'Penyelesaian Kosakata & Tata Bahasa Dasar',
              current: stats.learnedKotobaIds.length,
              target: 360,
              unlockAt: 150,
            },
            {
              id: 'kanji_n5',
              title: 'Kanji JLPT N5',
              subtitle: 'Penguasaan 110 Karakter Kanji Dasar',
              current: stats.learnedKanjiIds.length,
              target: 110,
              unlockAt: 50,
            },
            {
              id: 'streak',
              title: 'Konsistensi Belajar',
              subtitle: 'Komitmen Harian Pembelajaran Bahasa Jepang',
              current: stats.streakDays,
              target: 7,
              unlockAt: 3,
            },
          ].map((cert) => {
            const unlocked = cert.current >= cert.unlockAt;
            const pct = Math.min(100, Math.round((cert.current / cert.unlockAt) * 100));
            return (
              <div
                key={cert.id}
                className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      unlocked
                        ? 'bg-[#27B99A]/15 text-[#27B99A]'
                        : 'bg-[var(--bg-card)] text-[var(--text-muted)]'
                    }`}>
                      {unlocked ? 'Terbuka' : `${pct}%`}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-black text-[var(--text-primary)] font-['Manrope']">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] leading-snug">
                    {cert.subtitle}
                  </p>
                </div>

                <button
                  type="button"
                  disabled={!unlocked}
                  onClick={() => {
                    sound.playClick();
                    downloadMilestoneCertificate({
                      recipientName: user?.email?.split('@')[0] || 'Pelajar ZENORA',
                      milestoneTitle: cert.title,
                      milestoneSubtitle: cert.subtitle,
                      completionText: `Pencapaian terverifikasi: ${cert.current} / ${cert.target}`,
                    });
                  }}
                  className={`w-full py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    unlocked
                      ? 'bg-gradient-to-r from-[#2866B5] to-[#4389D4] text-white hover:brightness-110 cursor-pointer'
                      : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)] cursor-not-allowed opacity-70'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{unlocked ? 'Unduh Sertifikat' : `Butuh ${cert.unlockAt}`}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. ACCOUNT SETTINGS (Grouped & Functional)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope'] flex items-center gap-2.5">
            <Settings className="w-6 h-6 text-[#3978D6]" />
            Pengaturan Akun & Preferensi
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Kelola data diri, target belajar, keamanan, dan preferensi tampilan ZENORA
          </p>
        </div>

        <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 divide-y divide-[#3978D6]/15 overflow-hidden">
          
          {/* Group A: Preferensi Belajar */}
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-[#3978D6]" />
              <div>
                <h3 className="text-sm font-black text-[var(--text-primary)] font-['Manrope']">Target Belajar Harian</h3>
                <p className="text-xs text-[var(--text-secondary)]">Tentukan berapa lama Anda ingin berlatih setiap hari</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              {[15, 30, 45, 60].map((mins) => (
                <button
                  key={mins}
                  onClick={() => handleSetDailyGoal(mins)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    dailyGoalMinutes === mins
                      ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.4)]'
                      : 'bg-[var(--bg-sidebar)] text-[var(--text-secondary)] border border-[#3978D6]/20 hover:text-[var(--text-primary)]'
                  }`}
                >
                  {mins} Menit
                </button>
              ))}
            </div>

            {/* Target JLPT */}
            <div className="pt-4 border-t border-[#3978D6]/15">
              <label className="text-xs font-bold text-[var(--text-secondary)] block mb-2">
                Target Ujian JLPT / Karier:
              </label>
              <div className="flex items-center gap-2">
                {['N5', 'N4', 'N3', 'SSW-Tokutei'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => handleSetTargetJlpt(lvl)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      targetJlpt === lvl
                        ? 'bg-[#3978D6] text-white shadow-md'
                        : 'bg-[var(--bg-sidebar)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[#3978D6]/15'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Group B: Tampilan & Audio */}
          <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {darkMode ? (
                <Moon className="w-5 h-5 text-[var(--primary)]" />
              ) : (
                <Sun className="w-5 h-5 text-[var(--primary)]" />
              )}
              <div>
                <h3 className="text-sm font-black text-[var(--text-primary)] font-['Manrope']">Mode Tampilan</h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  {themePreference === 'system'
                    ? `Mengikuti Sistem (${darkMode ? 'Luxury Midnight Ocean Blue' : 'Luxury Arctic Blue'})`
                    : darkMode
                      ? 'Dark Mode — Luxury Midnight Ocean Blue'
                      : 'Light Mode — Luxury Arctic Blue'}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onChangeThemePreference) onChangeThemePreference('light');
                  else if (darkMode) onToggleDarkMode();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themePreference === 'light'
                    ? 'bg-gradient-to-r from-[#2866B5] to-[#4389D4] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Terang</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onChangeThemePreference) onChangeThemePreference('dark');
                  else if (!darkMode) onToggleDarkMode();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themePreference === 'dark'
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Gelap</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  if (onChangeThemePreference) onChangeThemePreference('system');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  themePreference === 'system'
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Ikuti Sistem</span>
              </button>
            </div>
          </div>

          {/* Group C: Sinkronisasi Cloud & Keamanan */}
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Cloud className="w-5 h-5 text-[var(--secondary-accent)]" />
                <div>
                  <h3 className="text-sm font-black text-[var(--text-primary)] font-['Manrope']">Sinkronisasi Cloud Supabase</h3>
                  <p className="text-xs text-[var(--text-secondary)]">
                    {user ? `Terhubung sebagai ${user.email}` : 'Masuk untuk mencadangkan progres hafalan Anda'}
                  </p>
                </div>
              </div>

              {user ? (
                <button
                  onClick={() => { sound.playClick(); onSync(); }}
                  disabled={isSyncing}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-white text-xs font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Menyinkron...' : 'Sinkron Sekarang'}</span>
                </button>
              ) : (
                <button
                  onClick={() => { sound.playClick(); onOpenAuth(); }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Masuk Sekarang
                </button>
              )}
            </div>
          </div>

          {/* Group D: Pengaturan Notifikasi & Pengingat */}
          <div className="p-6 space-y-5 border-t border-[var(--border)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#2456A6]/20 border border-[#3978D6]/40 text-[var(--soft-sky)]">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[var(--text-primary)] font-['Manrope']">Pengaturan Notifikasi & Pengingat</h3>
                  <p className="text-xs text-[var(--text-secondary)]">Atur pengingat belajar harian, pencapaian milestone, dan preferensi suara</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {/* 1. Pengingat Belajar */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">Pengingat Belajar Harian</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Notifikasi jika target belajar belum terpenuhi</p>
                </div>
                <button
                  onClick={() => handleUpdateNotifPref('studyReminders', !notifPrefs.studyReminders)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    notifPrefs.studyReminders ? 'bg-[#3978D6]' : 'bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                    notifPrefs.studyReminders ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* 2. Progres Belajar */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">Pemberitahuan Progres & Streak</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Pencapaian milestone, streak hari, dan ujian</p>
                </div>
                <button
                  onClick={() => handleUpdateNotifPref('progressUpdates', !notifPrefs.progressUpdates)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    notifPrefs.progressUpdates ? 'bg-[#3978D6]' : 'bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                    notifPrefs.progressUpdates ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* 3. Materi Baru */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">Pembaruan Materi</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Info penambahan bab baru atau soal latihan</p>
                </div>
                <button
                  onClick={() => handleUpdateNotifPref('newMaterials', !notifPrefs.newMaterials)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    notifPrefs.newMaterials ? 'bg-[#3978D6]' : 'bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                    notifPrefs.newMaterials ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              {/* 4. Pengumuman Sistem */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">Pengumuman Admin & Komunitas</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Informasi jadwal ujian, tips belajar, dan server</p>
                </div>
                <button
                  onClick={() => handleUpdateNotifPref('announcements', !notifPrefs.announcements)}
                  className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                    notifPrefs.announcements ? 'bg-[#3978D6]' : 'bg-[var(--bg-elevated)]'
                  }`}
                >
                  <span className={`block w-4 h-4 rounded-full bg-white transition-transform ${
                    notifPrefs.announcements ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>

            {/* Jam Pengingat & Izin Browser */}
            <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--soft-sky)]" />
                <div>
                  <p className="text-xs font-bold text-[var(--text-primary)]">Waktu Pengingat Belajar</p>
                  <p className="text-[11px] text-[var(--text-muted)]">Pilih waktu harian yang paling nyaman untuk Anda</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {['07:00', '12:00', '18:00', '19:00', '20:00', '21:00'].map((timeStr) => (
                  <button
                    key={timeStr}
                    onClick={() => handleUpdateNotifPref('reminderTime', timeStr)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      notifPrefs.reminderTime === timeStr
                        ? 'bg-[#2456A6] text-white shadow-[0_0_10px_rgba(36,86,166,0.6)]'
                        : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border)]'
                    }`}
                  >
                    {timeStr}
                  </button>
                ))}
              </div>
            </div>

            {/* Web Browser Notification API Status & Button */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] border border-[#3978D6]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[var(--secondary-accent)]" />
                  <p className="text-xs font-bold text-[var(--text-primary)]">Izin Browser (Web Notification API)</p>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    browserPermStatus === 'granted'
                      ? 'bg-[#45C6A5]/20 text-[#45C6A5] border border-[#45C6A5]/40'
                      : browserPermStatus === 'denied'
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-[#E9BD72]/20 text-[#E9BD72] border border-[#E9BD72]/40'
                  }`}>
                    {browserPermStatus === 'granted' ? 'Diizinkan' : browserPermStatus === 'denied' ? 'Diblokir' : 'Belum Diatur'}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1">
                  Memungkinkan notifikasi langsung muncul di desktop/laptop Anda bahkan saat ZENORA tidak sedang dibuka di tab aktif.
                </p>
              </div>

              {browserPermStatus !== 'granted' && browserPermStatus !== 'unsupported' && (
                <button
                  onClick={handleRequestBrowserPerm}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-[0_0_12px_rgba(36,86,166,0.5)] hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
                >
                  Minta Izin Notifikasi
                </button>
              )}
            </div>
          </div>

          {/* Group D: Hak Akses Role (Siswa vs Admin) */}
          <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#3978D6]/15 bg-gradient-to-r from-[#3978D6]/10 via-transparent to-[#69C9DF]/10">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[var(--secondary-accent)] shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black text-[var(--text-primary)] font-['Manrope']">Hak Akses & Konsol Admin</h3>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${
                    isAdminMode
                      ? 'bg-[#00C99A]/20 text-[#00C99A] border-[#00C99A]/40'
                      : 'bg-[#3978D6]/25 text-[var(--soft-sky)] border-[#3978D6]/40'
                  }`}>
                    {isAdminMode ? 'Role: Administrator' : 'Role: Siswa'}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  {isAdminMode 
                    ? 'Sesi admin aktif. Anda memiliki akses penuh ke CMS kosakata, SSW, dan CBT.'
                    : 'Akses CMS dan pengelola sistem dibatasi untuk staf pengajar & administrator.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {isAdminMode ? (
                <>
                  <button
                    onClick={() => {
                      sound.playClick();
                      onNavigate('admin');
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-white text-xs font-bold shadow-[0_0_15px_rgba(57,120,214,0.4)] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Buka CMS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      sound.playClick();
                      if (onExitAdminMode) onExitAdminMode();
                    }}
                    className="px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] border border-[#3978D6]/30 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-bold transition-all cursor-pointer"
                    title="Keluar dari sesi Admin dan kembali ke Mode Siswa"
                  >
                    Mode Siswa
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    sound.playClick();
                    if (onOpenAdminAuth) onOpenAdminAuth();
                  }}
                  className="px-4 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] border border-[#3978D6]/40 hover:border-[#3978D6] text-[var(--text-primary)] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <Lock className="w-3.5 h-3.5 text-[var(--secondary-accent)]" />
                  <span>Verifikasi Akses Admin</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
