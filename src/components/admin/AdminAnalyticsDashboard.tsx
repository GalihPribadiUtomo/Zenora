import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ShieldCheck,
  Users,
  Activity,
  BookOpen,
  Award,
  TrendingUp,
  RefreshCw,
  Search,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Database,
  ArrowUpDown,
  Eye,
  X,
  ExternalLink,
  Layers
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { KOTOBA_DATA } from '../../data/kotobaData';
import { KANJI_DATA } from '../../data/kanjiData';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../../data/kanaData';
import { SSW_ALL_SECTORS } from '../../data/ssw';
import { CHAPTERS_DATA } from '../../data/chaptersData';
import { loadChapterLesson } from '../../data/materi';
import { getInitialStats } from '../../utils/storage';
import { loadAllCustomMateri } from '../../utils/materiStorage';
import { applyCustomKotoba } from '../../utils/kotobaStorage';
import { sound } from '../../utils/audio';
import {
  StatCard,
  ChartCard,
  ProgressBar,
  SmoothLineChart,
  EmptyState,
  LoadingSkeleton,
  ErrorState,
  LineChartPoint
} from '../analytics/AnalyticsPrimitives';

type AdminPeriod = 'today' | '7d' | '30d' | '90d';

interface SafeUserRow {
  id: string;
  label: string;
  status: 'Aktif' | 'Jarang Aktif';
  lastActive: string;
  sessions: number;
  progressPct: number;
  avgAccuracy: number | null;
}

interface ContentAuditRow {
  bab: number;
  title: string;
  bunpou: number;
  bunkei: number;
  reibun: number;
  kaiwa: number;
  kotoba: number;
  complete: boolean;
}

interface AdminAnalyticsDashboardProps {
  currentUser: any;
  onNavigateAdminTab: (tab: 'overview' | 'analytics' | 'materi' | 'kotoba' | 'ssw' | 'cbt' | 'announcements' | 'database') => void;
}

export const AdminAnalyticsDashboard: React.FC<AdminAnalyticsDashboardProps> = ({
  currentUser,
  onNavigateAdminTab,
}) => {
  const [period, setPeriod] = useState<AdminPeriod>('30d');
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>(() => new Date().toLocaleTimeString('id-ID'));
  const [dataSourceMode, setDataSourceMode] = useState<'cloud' | 'local'>('local');

  // Cloud / Platform Metrics
  const [profilesList, setProfilesList] = useState<SafeUserRow[]>([]);
  const [learnedBreakdown, setLearnedBreakdown] = useState({
    kotoba: 0,
    kanji: 0,
    kana: 0,
  });
  const [syncErrorCount, setSyncErrorCount] = useState(0);
  const [dbReachable, setDbReachable] = useState<boolean>(false);

  // Content Completeness Audit (Bab 1-50)
  const [contentAudit, setContentAudit] = useState<ContentAuditRow[]>([]);
  const [auditLoading, setAuditLoading] = useState(true);

  // User Table Controls
  const [userSearch, setUserSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Aktif' | 'Jarang Aktif'>('all');
  const [sortField, setSortField] = useState<'lastActive' | 'progressPct' | 'sessions'>('lastActive');
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedUserDetail, setSelectedUserDetail] = useState<SafeUserRow | null>(null);

  // Category Mastery Filter
  const [selectedMateriCat, setSelectedMateriCat] = useState<string>('all');

  const localStats = useMemo(() => getInitialStats(), []);
  const customKotoba = useMemo(() => applyCustomKotoba(KOTOBA_DATA), []);
  const customMateri = useMemo(() => loadAllCustomMateri(), []);

  const maskIdentity = (rawId: string, email?: string | null) => {
    if (email && email.includes('@')) {
      const [name, domain] = email.split('@');
      const maskedName = name.length <= 2 ? `${name[0] || '*'}*` : `${name.slice(0, 2)}***`;
      return `${maskedName}@${domain}`;
    }
    return `USR-${rawId.slice(0, 6).toUpperCase()}`;
  };

  const fetchPlatformAnalytics = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    let errCount = 0;

    try {
      if (supabase && isSupabaseConfigured) {
        const { data: profiles, error: profErr } = await supabase
          .from('profiles')
          .select('id, streak_days, last_active_date, updated_at')
          .limit(200);

        const { data: learnedRows, error: learnedErr } = await supabase
          .from('user_learned_items')
          .select('user_id, item_type')
          .limit(5000);

        if (!profErr && profiles) {
          setDbReachable(true);
          setDataSourceMode('cloud');

          const countByUser = new Map<string, { kotoba: number; kanji: number; kana: number }>();
          let totalKotoba = 0;
          let totalKanji = 0;
          let totalKana = 0;

          (learnedRows || []).forEach((r: any) => {
            const entry = countByUser.get(r.user_id) || { kotoba: 0, kanji: 0, kana: 0 };
            if (r.item_type === 'kotoba') { entry.kotoba++; totalKotoba++; }
            else if (r.item_type === 'kanji') { entry.kanji++; totalKanji++; }
            else if (r.item_type === 'kana') { entry.kana++; totalKana++; }
            countByUser.set(r.user_id, entry);
          });

          if (learnedErr) errCount++;

          setLearnedBreakdown({ kotoba: totalKotoba, kanji: totalKanji, kana: totalKana });

          const totalCatalog = customKotoba.length + KANJI_DATA.length + HIRAGANA_DATA.length + KATAKANA_DATA.length;
          const nowMs = Date.now();

          const mapped: SafeUserRow[] = profiles.map((p: any) => {
            const counts = countByUser.get(p.id) || { kotoba: 0, kanji: 0, kana: 0 };
            const totalUserLearned = counts.kotoba + counts.kanji + counts.kana;
            const lastDateStr = p.last_active_date || p.updated_at || '';
            const lastMs = lastDateStr ? new Date(lastDateStr).getTime() : 0;
            const daysAgo = lastMs ? Math.floor((nowMs - lastMs) / 86400000) : 999;
            const isCurrent = currentUser?.id === p.id;

            return {
              id: p.id,
              label: isCurrent ? maskIdentity(p.id, currentUser?.email) : maskIdentity(p.id),
              status: daysAgo <= 7 ? 'Aktif' : 'Jarang Aktif',
              lastActive: lastDateStr ? lastDateStr.split('T')[0] : '-',
              sessions: Math.max(p.streak_days || 0, totalUserLearned > 0 ? 1 : 0),
              progressPct: totalCatalog > 0 ? Math.min(100, Math.round((totalUserLearned / totalCatalog) * 100)) : 0,
              avgAccuracy: isCurrent && localStats.quizHistory?.length
                ? Math.round(
                    localStats.quizHistory.reduce((a, q) => a + (q.score / (q.total || 1)) * 100, 0) /
                      localStats.quizHistory.length
                  )
                : null,
            };
          });

          setProfilesList(mapped);
          setSyncErrorCount(errCount);
          setLastUpdated(new Date().toLocaleTimeString('id-ID'));
          setIsLoading(false);
          return;
        }
        if (profErr) errCount++;
      }

      // Honest local telemetry fallback when cloud profiles table is unavailable or offline
      setDbReachable(false);
      setDataSourceMode('local');
      const totalCatalog = customKotoba.length + KANJI_DATA.length + HIRAGANA_DATA.length + KATAKANA_DATA.length;
      const localLearnedCount =
        (localStats.learnedKotobaIds?.length || 0) +
        (localStats.learnedKanjiIds?.length || 0) +
        (localStats.learnedKanaChars?.length || 0);
      const localQuizzes = localStats.quizHistory || [];
      const localAvgAcc =
        localQuizzes.length > 0
          ? Math.round(localQuizzes.reduce((a, q) => a + (q.score / (q.total || 1)) * 100, 0) / localQuizzes.length)
          : null;

      setLearnedBreakdown({
        kotoba: localStats.learnedKotobaIds?.length || 0,
        kanji: localStats.learnedKanjiIds?.length || 0,
        kana: localStats.learnedKanaChars?.length || 0,
      });

      setProfilesList([
        {
          id: currentUser?.id || 'local-session',
          label: currentUser?.email ? maskIdentity(currentUser.id, currentUser.email) : 'Sesi Lokal Aktif',
          status: 'Aktif',
          lastActive: localStats.lastActiveDate || new Date().toISOString().split('T')[0],
          sessions: Object.values(localStats.dailyActivityMap || {}).reduce((a, b) => a + b, 0),
          progressPct: totalCatalog > 0 ? Math.min(100, Math.round((localLearnedCount / totalCatalog) * 100)) : 0,
          avgAccuracy: localAvgAcc,
        },
      ]);
      setSyncErrorCount(errCount);
      setLastUpdated(new Date().toLocaleTimeString('id-ID'));
    } catch (e) {
      console.error('Admin analytics fetch error:', e);
      setLoadError('Gagal memuat data analitik platform.');
      setSyncErrorCount((c) => c + 1);
    } finally {
      setIsLoading(false);
    }
  }, [currentUser, customKotoba.length, localStats]);

  // Run read-only content completeness audit across Bab 1-50
  const runContentAudit = useCallback(async () => {
    setAuditLoading(true);
    try {
      const rows: ContentAuditRow[] = await Promise.all(
        CHAPTERS_DATA.map(async (ch) => {
          const lesson = await loadChapterLesson(ch.bab);
          const bp = lesson?.tataBahasa?.length || 0;
          const bk = lesson?.polaKalimat?.length || 0;
          const rb = lesson?.contohKalimat?.length || 0;
          const kw = lesson?.percakapan?.dialogs?.length || 0;
          const kt = customKotoba.filter((w) => w.bab === ch.bab).length;
          return {
            bab: ch.bab,
            title: ch.title,
            bunpou: bp,
            bunkei: bk,
            reibun: rb,
            kaiwa: kw,
            kotoba: kt,
            complete: bp > 0 && bk > 0 && rb > 0 && kw > 0 && kt > 0,
          };
        })
      );
      setContentAudit(rows);
    } catch (e) {
      console.error('Content audit failed:', e);
    } finally {
      setAuditLoading(false);
    }
  }, [customKotoba]);

  useEffect(() => {
    fetchPlatformAnalytics();
    runContentAudit();
  }, [fetchPlatformAnalytics, runContentAudit]);

  // Period window calculations
  const periodDaysCount = period === 'today' ? 1 : period === '7d' ? 7 : period === '30d' ? 30 : 90;

  // Derived Platform Metrics
  const totalUsers = profilesList.length;
  const activeUsersCount = useMemo(() => {
    const cutoff = Date.now() - periodDaysCount * 86400000;
    return profilesList.filter((u) => {
      if (!u.lastActive || u.lastActive === '-') return false;
      return new Date(u.lastActive).getTime() >= cutoff;
    }).length;
  }, [profilesList, periodDaysCount]);

  const quizHistory = localStats.quizHistory || [];
  const periodQuizzes = useMemo(() => {
    const cutoff = Date.now() - periodDaysCount * 86400000;
    return quizHistory.filter((q) => {
      const t = new Date(q.date).getTime();
      return !Number.isNaN(t) && t >= cutoff;
    });
  }, [quizHistory, periodDaysCount]);

  const totalSessionsInPeriod = useMemo(() => {
    const map = localStats.dailyActivityMap || {};
    let sum = 0;
    for (let i = 0; i < periodDaysCount; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      sum += map[d.toISOString().split('T')[0]] || 0;
    }
    return sum;
  }, [localStats.dailyActivityMap, periodDaysCount]);

  const avgQuizAccuracy = useMemo(() => {
    if (periodQuizzes.length === 0) return 0;
    return Math.round(
      periodQuizzes.reduce((acc, q) => acc + (q.score / (q.total || 1)) * 100, 0) / periodQuizzes.length
    );
  }, [periodQuizzes]);

  const passRatePct = useMemo(() => {
    if (periodQuizzes.length === 0) return 0;
    const passed = periodQuizzes.filter((q) => (q.score / (q.total || 1)) * 100 >= 70).length;
    return Math.round((passed / periodQuizzes.length) * 100);
  }, [periodQuizzes]);

  // Chart Series (Real Activity & User Active Trend)
  const globalActivitySeries: LineChartPoint[] = useMemo(() => {
    const map = localStats.dailyActivityMap || {};
    const pointsCount = period === 'today' ? 1 : Math.min(periodDaysCount, 30);
    return Array.from({ length: pointsCount }, (_, idx) => {
      const d = new Date();
      d.setDate(d.getDate() - (pointsCount - 1 - idx));
      const key = d.toISOString().split('T')[0];
      const activeOnDay = profilesList.filter((u) => u.lastActive === key).length;
      return {
        label: d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' }),
        fullLabel: d.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' }),
        value: map[key] || 0,
        secondaryValue: activeOnDay,
      };
    });
  }, [localStats.dailyActivityMap, period, periodDaysCount, profilesList]);

  // Category Mastery Breakdown (6 categories)
  const categoryMastery = useMemo(() => {
    const n5Total = KANJI_DATA.filter((k) => k.jlpt === 'N5').length;
    const n4Total = KANJI_DATA.filter((k) => k.jlpt === 'N4').length;
    const learnedKanjiSet = new Set(localStats.learnedKanjiIds || []);
    const n5Learned = KANJI_DATA.filter((k) => k.jlpt === 'N5' && learnedKanjiSet.has(k.id)).length;
    const n4Learned = KANJI_DATA.filter((k) => k.jlpt === 'N4' && learnedKanjiSet.has(k.id)).length;

    const hiraganaSet = new Set(HIRAGANA_DATA.map((h) => h.char));
    const katakanaSet = new Set(KATAKANA_DATA.map((k) => k.char));
    const hiraLearned = (localStats.learnedKanaChars || []).filter((c) => hiraganaSet.has(c)).length;
    const kataLearned = (localStats.learnedKanaChars || []).filter((c) => katakanaSet.has(c)).length;

    let sswCompleted = 0;
    const sswTotalChapters = SSW_ALL_SECTORS.reduce((a, s) => a + s.chapters.length, 0);
    try {
      const raw = localStorage.getItem('zenora_ssw_progress_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        Object.values(parsed || {}).forEach((sec: any) => {
          sswCompleted += sec?.completedChapters?.length || 0;
        });
      }
    } catch { /* ignore */ }

    const items = [
      {
        id: 'minna',
        name: 'Minna no Nihongo',
        total: customKotoba.length,
        completed: learnedBreakdown.kotoba,
        pct: customKotoba.length > 0 ? Math.round((learnedBreakdown.kotoba / customKotoba.length) * 100) : 0,
      },
      {
        id: 'hiragana',
        name: 'Hiragana',
        total: HIRAGANA_DATA.length,
        completed: hiraLearned,
        pct: HIRAGANA_DATA.length > 0 ? Math.round((hiraLearned / HIRAGANA_DATA.length) * 100) : 0,
      },
      {
        id: 'katakana',
        name: 'Katakana',
        total: KATAKANA_DATA.length,
        completed: kataLearned,
        pct: KATAKANA_DATA.length > 0 ? Math.round((kataLearned / KATAKANA_DATA.length) * 100) : 0,
      },
      {
        id: 'kanji_n5',
        name: 'Kanji N5',
        total: n5Total,
        completed: n5Learned,
        pct: n5Total > 0 ? Math.round((n5Learned / n5Total) * 100) : 0,
      },
      {
        id: 'kanji_n4',
        name: 'Kanji N4',
        total: n4Total,
        completed: n4Learned,
        pct: n4Total > 0 ? Math.round((n4Learned / n4Total) * 100) : 0,
      },
      {
        id: 'ssw',
        name: 'SSW (6 Sektor)',
        total: sswTotalChapters,
        completed: sswCompleted,
        pct: sswTotalChapters > 0 ? Math.round((sswCompleted / sswTotalChapters) * 100) : 0,
      },
    ];

    return selectedMateriCat === 'all' ? items : items.filter((i) => i.id === selectedMateriCat);
  }, [customKotoba.length, learnedBreakdown.kotoba, localStats.learnedKanjiIds, localStats.learnedKanaChars, selectedMateriCat]);

  // Filtered, Sorted, Paginated User Table
  const filteredUsers = useMemo(() => {
    const q = userSearch.trim().toLowerCase();
    const filtered = profilesList.filter((u) => {
      const matchSearch = !q || u.label.toLowerCase().includes(q) || u.id.toLowerCase().includes(q);
      const matchStatus = statusFilter === 'all' || u.status === statusFilter;
      return matchSearch && matchStatus;
    });

    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortField === 'progressPct') cmp = a.progressPct - b.progressPct;
      else if (sortField === 'sessions') cmp = a.sessions - b.sessions;
      else cmp = a.lastActive.localeCompare(b.lastActive);
      return sortAsc ? cmp : -cmp;
    });
  }, [profilesList, userSearch, statusFilter, sortField, sortAsc]);

  const pageSize = 8;
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));
  const pagedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);

  const incompleteChapters = contentAudit.filter((c) => !c.complete);
  const customModifiedCount = Object.keys(customMateri).length;

  // Most attempted quiz subject
  const topQuizSubject = useMemo(() => {
    if (periodQuizzes.length === 0) return '-';
    const freq: Record<string, number> = {};
    periodQuizzes.forEach((q) => {
      freq[q.subject] = (freq[q.subject] || 0) + 1;
    });
    return Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0] || '-';
  }, [periodQuizzes]);

  return (
    <div className="space-y-6 animate-fade-in">

      {/* 1. HEADER ADMIN ANALITIK */}
      <div className="rounded-3xl p-6 sm:p-7 bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--card-shadow)] flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/12 border border-[var(--primary)]/25 text-[var(--primary)] text-xs font-extrabold tracking-wider uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              ADMIN ANALYTICS
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                dataSourceMode === 'cloud'
                  ? 'bg-[#27B99A]/15 text-[#27B99A] border-[#27B99A]/30'
                  : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border)]'
              }`}
            >
              {dataSourceMode === 'cloud' ? 'Cloud Database Connected' : 'Local Telemetry Mode'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope']">
            Analitik & Statistik Platform
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] max-w-2xl">
            Pemantauan metrik pengguna, aktivitas belajar global, performa kuis, kelengkapan materi Bab 1–50, serta status sinkronisasi sistem.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          {/* Period Filter */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs">
            {(
              [
                { id: 'today', label: 'Hari Ini' },
                { id: '7d', label: '7 Hari' },
                { id: '30d', label: '30 Hari' },
                { id: '90d', label: '90 Hari' },
              ] as const
            ).map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setPeriod(opt.id);
                }}
                className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                  period === opt.id
                    ? 'bg-[var(--primary)] text-white shadow-xs'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              sound.playClick();
              fetchPlatformAnalytics();
              runContentAudit();
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[var(--primary)]/12 border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] transition-all cursor-pointer"
            title={`Terakhir diperbarui: ${lastUpdated}`}
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[var(--primary)] ${isLoading ? 'animate-spin' : ''}`} />
            <span>{lastUpdated}</span>
          </button>
        </div>
      </div>

      {loadError && <ErrorState message={loadError} onRetry={fetchPlatformAnalytics} />}

      {/* 2. EMPAT KARTU STATISTIK PLATFORM */}
      {isLoading ? (
        <LoadingSkeleton rows={2} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Total Pengguna"
            value={totalUsers}
            badgeText={dataSourceMode === 'cloud' ? 'Terdaftar' : 'Lokal'}
            icon={Users}
            tone="blue"
            footerText="Akun tercatat sesuai cakupan otorisasi"
          />

          <StatCard
            title="Pengguna Aktif"
            value={activeUsersCount}
            subValue={`/ ${totalUsers}`}
            badgeText={period === 'today' ? 'DAU' : period === '7d' ? 'WAU' : 'MAU'}
            progressPct={totalUsers > 0 ? Math.round((activeUsersCount / totalUsers) * 100) : 0}
            icon={Activity}
            tone="cyan"
            footerText={`Aktif dalam rentang ${period === 'today' ? 'hari ini' : `${periodDaysCount} hari`}`}
          />

          <StatCard
            title="Aktivitas Pembelajaran"
            value={totalSessionsInPeriod}
            badgeText={`${periodQuizzes.length} Kuis`}
            icon={BookOpen}
            tone="sapphire"
            footerText={`Total item dikuasai: ${learnedBreakdown.kotoba + learnedBreakdown.kanji + learnedBreakdown.kana}`}
          />

          <StatCard
            title="Performa Pembelajaran"
            value={`${avgQuizAccuracy}%`}
            badgeText={`Lulus ${passRatePct}%`}
            progressPct={avgQuizAccuracy}
            icon={Award}
            tone="emerald"
            footerText={periodQuizzes.length > 0 ? `Kategori terbanyak: ${topQuizSubject}` : 'Belum ada ujian pada periode ini'}
          />
        </div>
      )}

      {/* 3 & 4. GRAFIK AKTIVITAS BELAJAR GLOBAL & PERTUMBUHAN */}
      <ChartCard
        title="Grafik Aktivitas Global & Pengguna Aktif"
        subtitle="Tren harian sesi belajar dan jumlah pengguna aktif pada periode terpilih."
        icon={TrendingUp}
      >
        <SmoothLineChart
          data={globalActivitySeries}
          primaryLabel="Aktivitas Pembelajaran"
          secondaryLabel="Pengguna Aktif"
        />
      </ChartCard>

      {/* 5 & 6. ANALITIK PENGUASAAN MATERI & ANALITIK KUIS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <ChartCard
          title="Analitik Penguasaan Materi"
          subtitle="Cakupan & tingkat penyelesaian lintas 6 kategori pembelajaran."
          icon={Layers}
          className="lg:col-span-7"
          rightSlot={
            <select
              value={selectedMateriCat}
              onChange={(e) => setSelectedMateriCat(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] cursor-pointer"
              aria-label="Filter kategori materi"
            >
              <option value="all">Semua Kategori (6)</option>
              <option value="minna">Minna no Nihongo</option>
              <option value="hiragana">Hiragana</option>
              <option value="katakana">Katakana</option>
              <option value="kanji_n5">Kanji N5</option>
              <option value="kanji_n4">Kanji N4</option>
              <option value="ssw">SSW (6 Sektor)</option>
            </select>
          }
        >
          <div className="space-y-3.5">
            {categoryMastery.map((cat) => (
              <div key={cat.id} className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[var(--text-primary)]">{cat.name}</span>
                  <span className="font-mono text-[var(--primary)]">
                    {cat.completed} / {cat.total} ({cat.pct}%)
                  </span>
                </div>
                <ProgressBar pct={cat.pct} tone="sapphire" heightClass="h-2" />
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard
          title="Analitik Kuis & Ujian"
          subtitle="Ringkasan evaluasi ujian dan tingkat kelulusan (ambang >=70%)."
          icon={Award}
          className="lg:col-span-5"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] block">Total Percobaan</span>
              <span className="text-2xl font-black text-[var(--text-primary)] font-['Manrope']">{periodQuizzes.length}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] block">Rata-rata Nilai</span>
              <span className="text-2xl font-black text-[var(--primary)] font-['Manrope']">{avgQuizAccuracy}%</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] block">Tingkat Kelulusan</span>
              <span className="text-2xl font-black text-[#27B99A] font-['Manrope']">{passRatePct}%</span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
              <span className="text-[11px] font-semibold text-[var(--text-muted)] block">Kategori Terbanyak</span>
              <span className="text-sm font-black text-[var(--text-primary)] capitalize block mt-1 truncate">{topQuizSubject}</span>
            </div>
          </div>
          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
            Metrik dihitung langsung dari riwayat ujian/latihan yang tersimpan tanpa data simulasi.
          </p>
        </ChartCard>
      </div>

      {/* 7. TABEL ANALITIK PENGGUNA (RBAC & PRIVACY-SAFE) */}
      <ChartCard
        title="Analitik Pengguna (Privasi Terlindungi)"
        subtitle="Daftar pengguna sesuai otorisasi RBAC tanpa menampilkan kredensial atau token sensitif."
        icon={Users}
        rightSlot={
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={userSearch}
                onChange={(e) => { setUserSearch(e.target.value); setPage(1); }}
                placeholder="Cari ID / akun..."
                className="pl-8 pr-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs text-[var(--text-primary)]"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value as any); setPage(1); }}
              className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs font-bold text-[var(--text-primary)] cursor-pointer"
            >
              <option value="all">Semua Status</option>
              <option value="Aktif">Aktif</option>
              <option value="Jarang Aktif">Jarang Aktif</option>
            </select>
          </div>
        }
      >
        {pagedUsers.length === 0 ? (
          <EmptyState
            title="Tidak ada pengguna ditemukan"
            description="Coba ubah kata kunci pencarian atau filter status."
          />
        ) : (
          <div className="space-y-4">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-[var(--border)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th>Identitas</th>
                    <th>Status</th>
                    <th>
                      <button
                        type="button"
                        onClick={() => { setSortField('lastActive'); setSortAsc(sortField === 'lastActive' ? !sortAsc : false); }}
                        className="inline-flex items-center gap-1 cursor-pointer"
                      >
                        Aktivitas Terakhir <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th>
                      <button
                        type="button"
                        onClick={() => { setSortField('sessions'); setSortAsc(sortField === 'sessions' ? !sortAsc : false); }}
                        className="inline-flex items-center gap-1 cursor-pointer"
                      >
                        Sesi <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th>
                      <button
                        type="button"
                        onClick={() => { setSortField('progressPct'); setSortAsc(sortField === 'progressPct' ? !sortAsc : false); }}
                        className="inline-flex items-center gap-1 cursor-pointer"
                      >
                        Progres <ArrowUpDown className="w-3 h-3" />
                      </button>
                    </th>
                    <th>Akurasi</th>
                    <th className="text-right">Detail</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  {pagedUsers.map((u) => (
                    <tr key={u.id}>
                      <td className="font-bold text-[var(--text-primary)] font-mono">{u.label}</td>
                      <td>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                            u.status === 'Aktif'
                              ? 'bg-[#27B99A]/15 text-[#27B99A]'
                              : 'bg-[var(--bg-elevated)] text-[var(--text-muted)]'
                          }`}
                        >
                          {u.status}
                        </span>
                      </td>
                      <td className="font-mono">{u.lastActive}</td>
                      <td className="font-bold text-[var(--text-primary)]">{u.sessions}</td>
                      <td>
                        <div className="flex items-center gap-2 min-w-[110px]">
                          <ProgressBar pct={u.progressPct} tone="blue" heightClass="h-1.5" />
                          <span className="font-mono font-bold text-[var(--primary)]">{u.progressPct}%</span>
                        </div>
                      </td>
                      <td className="font-bold">{u.avgAccuracy !== null ? `${u.avgAccuracy}%` : '-'}</td>
                      <td className="text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedUserDetail(u)}
                          className="p-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--primary)] hover:brightness-110 cursor-pointer"
                          title="Lihat ringkasan"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 gap-3 md:hidden">
              {pagedUsers.map((u) => (
                <div key={u.id} className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-[var(--text-primary)]">{u.label}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${u.status === 'Aktif' ? 'bg-[#27B99A]/15 text-[#27B99A]' : 'bg-[var(--bg-card)] text-[var(--text-muted)]'}`}>
                      {u.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[var(--text-secondary)]">
                    <span>Terakhir: {u.lastActive}</span>
                    <span>Sesi: {u.sessions}</span>
                    <span>Akurasi: {u.avgAccuracy !== null ? `${u.avgAccuracy}%` : '-'}</span>
                  </div>
                  <ProgressBar pct={u.progressPct} tone="blue" heightClass="h-1.5" />
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] pt-1">
              <span>
                Halaman <strong className="text-[var(--text-primary)]">{page}</strong> dari {totalPages} ({filteredUsers.length} pengguna)
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="p-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] disabled:opacity-40 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  disabled={page >= totalPages}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="p-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] disabled:opacity-40 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </ChartCard>

      {/* 8 & 9. ANALITIK KONTEN PEMBELAJARAN & STATUS SISTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <ChartCard
          title="Analitik Kelengkapan Konten (Bab 1–50)"
          subtitle="Audit baca-saja untuk Bunpou, Bunkei, Reibun, Kaiwa, dan Kotoba."
          icon={BookOpen}
          className="lg:col-span-7"
          rightSlot={
            <button
              type="button"
              onClick={() => { sound.playClick(); onNavigateAdminTab('materi'); }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--primary)]/12 border border-[var(--primary)]/25 text-xs font-bold text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-all cursor-pointer"
            >
              <span>Buka CMS Materi</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          }
        >
          {auditLoading ? (
            <LoadingSkeleton rows={3} />
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                  <span className="text-[11px] text-[var(--text-muted)] block">Total Bab</span>
                  <span className="text-xl font-black text-[var(--text-primary)]">{contentAudit.length} / 50</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                  <span className="text-[11px] text-[var(--text-muted)] block">Bab Lengkap</span>
                  <span className="text-xl font-black text-[#27B99A]">{contentAudit.length - incompleteChapters.length}</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                  <span className="text-[11px] text-[var(--text-muted)] block">Bab Belum Lengkap</span>
                  <span className={`text-xl font-black ${incompleteChapters.length > 0 ? 'text-[#E56B78]' : 'text-[#27B99A]'}`}>
                    {incompleteChapters.length}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]">
                  <span className="text-[11px] text-[var(--text-muted)] block">Override CMS</span>
                  <span className="text-xl font-black text-[var(--primary)]">{customModifiedCount} Bab</span>
                </div>
              </div>

              {incompleteChapters.length === 0 ? (
                <div className="p-3.5 rounded-2xl bg-[#27B99A]/12 border border-[#27B99A]/30 flex items-center gap-2.5 text-xs font-bold text-[#27B99A]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Seluruh Bab 1–50 memiliki Bunpou, Bunkei, Reibun, Kaiwa, dan Kotoba yang lengkap.</span>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-[#E56B78]/10 border border-[#E56B78]/30 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#E56B78]">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Ditemukan {incompleteChapters.length} bab dengan kategori belum lengkap:</span>
                  </div>
                  <p className="text-[var(--text-secondary)]">
                    Bab: {incompleteChapters.map((c) => c.bab).join(', ')}
                  </p>
                </div>
              )}
            </div>
          )}
        </ChartCard>

        <ChartCard
          title="Status Sistem & Sinkronisasi"
          subtitle="Kondisi layanan penyimpanan & integritas data tanpa mengekspos kredensial."
          icon={Database}
          className="lg:col-span-5"
        >
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
              <span className="font-semibold text-[var(--text-secondary)]">Layanan Database Cloud</span>
              <span className={`font-bold px-2.5 py-0.5 rounded-full ${dbReachable ? 'bg-[#27B99A]/15 text-[#27B99A]' : 'bg-[#E9B45E]/15 text-[#E9B45E]'}`}>
                {dbReachable ? 'Terhubung' : 'Mode Lokal'}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
              <span className="font-semibold text-[var(--text-secondary)]">Error Pengambilan Data</span>
              <span className={`font-black font-mono ${syncErrorCount > 0 ? 'text-[#E56B78]' : 'text-[#27B99A]'}`}>
                {syncErrorCount}
              </span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
              <span className="font-semibold text-[var(--text-secondary)]">Pembaruan Terakhir</span>
              <span className="font-mono font-bold text-[var(--text-primary)]">{lastUpdated}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between">
              <span className="font-semibold text-[var(--text-secondary)]">Katalog SSW Aktif</span>
              <span className="font-bold text-[var(--primary)]">{SSW_ALL_SECTORS.length} Sektor · 30 Bab</span>
            </div>
          </div>
        </ChartCard>
      </div>

      {/* Safe User Detail Modal */}
      {selectedUserDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in">
          <div className="w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-black text-[var(--text-primary)] font-['Manrope']">
                Ringkasan Pengguna
              </h4>
              <button
                type="button"
                onClick={() => setSelectedUserDetail(null)}
                className="p-1.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-secondary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between py-2 border-b border-[var(--border)]">
                <span className="text-[var(--text-muted)]">Identitas</span>
                <span className="font-mono font-bold text-[var(--text-primary)]">{selectedUserDetail.label}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border)]">
                <span className="text-[var(--text-muted)]">Status</span>
                <span className="font-bold text-[var(--text-primary)]">{selectedUserDetail.status}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border)]">
                <span className="text-[var(--text-muted)]">Aktivitas Terakhir</span>
                <span className="font-mono text-[var(--text-primary)]">{selectedUserDetail.lastActive}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--border)]">
                <span className="text-[var(--text-muted)]">Total Sesi / Streak</span>
                <span className="font-bold text-[var(--text-primary)]">{selectedUserDetail.sessions}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[var(--text-muted)]">Progres Keseluruhan</span>
                <span className="font-bold text-[var(--primary)]">{selectedUserDetail.progressPct}%</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
