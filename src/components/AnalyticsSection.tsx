import React, { useMemo, useState } from 'react';
import {
  TrendingUp,
  Flame,
  BookOpen,
  PenTool,
  Languages,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Trophy,
  Lightbulb,
  CheckCircle2,
  Target,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { sound } from '../utils/audio';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import { ALL_KANA_DATA } from '../data/kanaData';
import {
  StatCard,
  ChartCard,
  ProgressBar,
  SmoothLineChart,
  ActivityHeatmap,
  EmptyState,
  LineChartPoint
} from './analytics/AnalyticsPrimitives';

interface QuizRecord {
  date: string;
  score: number;
  total: number;
  mode: string;
  subject: string;
}

interface AnalyticsSectionProps {
  stats: {
    learnedKotobaIds: string[];
    learnedKanjiIds: number[];
    learnedKanaChars?: string[];
    streakDays: number;
    dailyActivityMap?: Record<string, number>;
    quizHistory?: QuizRecord[];
  };
  onNavigate: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan') => void;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ stats, onNavigate }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d'>('7d');
  const [expandedQuizIdx, setExpandedQuizIdx] = useState<number | null>(null);

  // Actual dataset totals (no hardcoded outdated numbers)
  const totalKotoba = KOTOBA_DATA.length;
  const totalKanji = KANJI_DATA.length;
  const totalKana = ALL_KANA_DATA.length;

  const learnedKotoba = new Set(stats.learnedKotobaIds || []).size;
  const learnedKanji = new Set(stats.learnedKanjiIds || []).size;
  const learnedKana = new Set(stats.learnedKanaChars || []).size;
  const streak = stats.streakDays || 0;

  const kotobaPct = totalKotoba > 0 ? Math.round((learnedKotoba / totalKotoba) * 100) : 0;
  const kanjiPct = totalKanji > 0 ? Math.round((learnedKanji / totalKanji) * 100) : 0;
  const kanaPct = totalKana > 0 ? Math.round((learnedKana / totalKana) * 100) : 0;

  const history = stats.quizHistory || [];
  const totalQuizzes = history.length;
  const avgScore = totalQuizzes > 0
    ? Math.round(history.reduce((acc, q) => acc + (q.score / (q.total || 1)) * 100, 0) / totalQuizzes)
    : 0;

  const activityMap = stats.dailyActivityMap || {};

  // Build 84-day (12 weeks) activity heatmap
  const heatmapDays = useMemo(() => {
    return Array.from({ length: 84 }, (_, idx) => {
      const d = new Date();
      d.setDate(d.getDate() - (83 - idx));
      const key = d.toISOString().split('T')[0];
      return { date: key, count: activityMap[key] || 0 };
    });
  }, [activityMap]);

  // Build real 7d / 30d activity & accuracy trend from actual dailyActivityMap + quizHistory
  const trendData: LineChartPoint[] = useMemo(() => {
    const numDays = selectedTimeframe === '7d' ? 7 : 30;
    const quizByDate = new Map<string, number[]>();
    history.forEach((q) => {
      const dateKey = (q.date || '').split('T')[0];
      if (!dateKey) return;
      const pct = Math.round((q.score / (q.total || 1)) * 100);
      const arr = quizByDate.get(dateKey) || [];
      arr.push(pct);
      quizByDate.set(dateKey, arr);
    });

    const hasAnyQuizInWindow = Array.from({ length: numDays }).some((_, idx) => {
      const d = new Date();
      d.setDate(d.getDate() - (numDays - 1 - idx));
      return quizByDate.has(d.toISOString().split('T')[0]);
    });

    return Array.from({ length: numDays }, (_, idx) => {
      const d = new Date();
      d.setDate(d.getDate() - (numDays - 1 - idx));
      const key = d.toISOString().split('T')[0];
      const dayLabel =
        numDays === 7
          ? d.toLocaleDateString('id-ID', { weekday: 'short' })
          : d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
      const fullLabel = d.toLocaleDateString('id-ID', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      });
      const dayQuizzes = quizByDate.get(key);
      const dayAvgQuiz =
        dayQuizzes && dayQuizzes.length > 0
          ? Math.round(dayQuizzes.reduce((a, b) => a + b, 0) / dayQuizzes.length)
          : undefined;

      return {
        label: dayLabel,
        fullLabel,
        value: activityMap[key] || 0,
        secondaryValue: hasAnyQuizInWindow ? (dayAvgQuiz ?? 0) : undefined,
      };
    });
  }, [selectedTimeframe, activityMap, history]);

  // 7-day activity comparison for Streak & Insights
  const last7Total = useMemo(
    () => heatmapDays.slice(-7).reduce((sum, d) => sum + d.count, 0),
    [heatmapDays]
  );
  const prev7Total = useMemo(
    () => heatmapDays.slice(-14, -7).reduce((sum, d) => sum + d.count, 0),
    [heatmapDays]
  );
  const weeklyDeltaPct =
    prev7Total > 0 ? Math.round(((last7Total - prev7Total) / prev7Total) * 100) : null;

  // Exam Readiness Scores (preserving existing formula)
  const n5Readiness = Math.min(100, Math.round(
    (Math.min(1, learnedKotoba / 800) * 40) +
    (Math.min(1, learnedKanji / 110) * 35) +
    (Math.min(1, learnedKana / 92) * 15) +
    ((avgScore / 100) * 10)
  ));
  const n4Readiness = Math.min(100, Math.round(
    (Math.min(1, learnedKotoba / 1800) * 45) +
    (Math.min(1, learnedKanji / 300) * 40) +
    ((avgScore / 100) * 15)
  ));
  const jftReadiness = Math.min(100, Math.round(
    (Math.min(1, learnedKotoba / 1200) * 45) +
    (Math.min(1, learnedKanji / 150) * 30) +
    ((avgScore / 100) * 25)
  ));

  const getReadinessStatus = (pct: number) => {
    if (learnedKotoba + learnedKanji + learnedKana < 10 && totalQuizzes === 0) {
      return { label: 'Belum cukup data', cls: 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border)]' };
    }
    if (pct >= 75) {
      return { label: 'Siap', cls: 'bg-[#27B99A]/15 text-[#27B99A] border-[#27B99A]/30' };
    }
    if (pct >= 50) {
      return { label: 'Berkembang', cls: 'bg-[var(--primary)]/15 text-[var(--primary)] border-[var(--primary)]/30' };
    }
    if (pct >= 15) {
      return { label: 'Perlu peningkatan', cls: 'bg-[#E9B45E]/15 text-[#E9B45E] border-[#E9B45E]/30' };
    }
    return { label: 'Belum cukup data', cls: 'bg-[var(--bg-elevated)] text-[var(--text-muted)] border-[var(--border)]' };
  };

  // Real Learning Insights
  const insights = useMemo(() => {
    const categories = [
      { key: 'kotoba' as const, label: 'Kosakata (Minna)', pct: kotobaPct, count: learnedKotoba },
      { key: 'kanji' as const, label: 'Kanji N5 & N4', pct: kanjiPct, count: learnedKanji },
      { key: 'kana' as const, label: 'Hiragana & Katakana', pct: kanaPct, count: learnedKana },
    ];
    const sorted = [...categories].sort((a, b) => b.pct - a.pct);
    const strongest = sorted[0];
    const weakest = sorted[sorted.length - 1];

    const list: Array<{
      title: string;
      description: string;
      tone: 'positive' | 'focus' | 'neutral';
      actionLabel: string;
      actionTab: 'kotoba' | 'kanji' | 'kana' | 'latihan';
    }> = [];

    if (strongest.count > 0) {
      list.push({
        title: `Materi Paling Dikuasai: ${strongest.label}`,
        description: `Kamu telah menguasai ${strongest.pct}% (${strongest.count} item) pada bagian ini. Pertahankan ritme belajarmu!`,
        tone: 'positive',
        actionLabel: 'Lanjutkan',
        actionTab: strongest.key,
      });
    } else {
      list.push({
        title: 'Mulai Bangun Progres Awalmu',
        description: 'Tandai kosakata, kanji, atau aksara kana yang sudah dipelajari agar sistem dapat memetakan kekuatanmu.',
        tone: 'neutral',
        actionLabel: 'Buka Materi',
        actionTab: 'kotoba',
      });
    }

    list.push({
      title: `Fokus Peningkatan: ${weakest.label}`,
      description: `Penguasaan saat ini ${weakest.pct}% (${weakest.count} item). Menambah 5–10 item baru akan meningkatkan kesiapan ujianmu.`,
      tone: 'focus',
      actionLabel: `Pelajari ${weakest.label.split(' ')[0]}`,
      actionTab: weakest.key,
    });

    if (totalQuizzes === 0) {
      list.push({
        title: 'Rekomendasi Latihan Berikutnya',
        description: 'Belum ada riwayat kuis tercatat. Coba mode latihan Pilihan Ganda atau Matching untuk mengukur akurasi awalmu.',
        tone: 'neutral',
        actionLabel: 'Mulai Latihan',
        actionTab: 'latihan',
      });
    } else {
      list.push({
        title: `Performa Latihan (${totalQuizzes} Sesi)`,
        description:
          weeklyDeltaPct !== null
            ? `Rata-rata akurasi ${avgScore}%. Aktivitas 7 hari terakhir (${last7Total} aksi) ${weeklyDeltaPct >= 0 ? 'naik' : 'turun'} ${Math.abs(weeklyDeltaPct)}% dibanding minggu sebelumnya.`
            : `Rata-rata akurasi kamu ${avgScore}% dari ${totalQuizzes} sesi latihan yang telah diselesaikan.`,
        tone: avgScore >= 75 ? 'positive' : 'focus',
        actionLabel: 'Latihan Lagi',
        actionTab: 'latihan',
      });
    }

    return list;
  }, [kotobaPct, kanjiPct, kanaPct, learnedKotoba, learnedKanji, learnedKana, totalQuizzes, avgScore, weeklyDeltaPct, last7Total]);

  return (
    <div className="space-y-8 text-left animate-fade-in pb-12">

      {/* 1. HEADER ANALITIK SISWA */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-[var(--bg-card)] border border-[var(--border)] shadow-[var(--card-shadow)] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[var(--primary)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--primary)] text-xs font-extrabold tracking-wider uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ANALYTICS & LEARNING INTELLIGENCE</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-[var(--text-primary)] font-['Manrope'] tracking-tight">
              Analitik & Progres Belajar
            </h1>
            <p className="text-sm text-[var(--text-secondary)] max-w-xl leading-relaxed">
              Pantau penguasaan kosakata, aksara Hiragana & Katakana, Kanji N5/N4, skor akurasi latihan, dan konsistensi belajar harianmu.
            </p>
          </div>

          {/* Kartu Streak Belajar */}
          <div className="flex items-center gap-4 bg-[var(--bg-elevated)] border border-[var(--border)] p-4 sm:p-5 rounded-2xl shrink-0 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[var(--accent-gold)]/15 border border-[var(--accent-gold)]/35 flex items-center justify-center text-[var(--accent-gold)]">
              <Flame className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
                  {streak} Hari
                </span>
                {weeklyDeltaPct !== null && (
                  <span
                    className={`text-[11px] font-extrabold px-2 py-0.5 rounded-full ${
                      weeklyDeltaPct >= 0
                        ? 'bg-[#27B99A]/15 text-[#27B99A]'
                        : 'bg-[#E9B45E]/15 text-[#E9B45E]'
                    }`}
                  >
                    {weeklyDeltaPct >= 0 ? `+${weeklyDeltaPct}%` : `${weeklyDeltaPct}%`} / 7h
                  </span>
                )}
              </div>
              <span className="block text-xs font-semibold text-[var(--text-secondary)]">
                {streak >= 7
                  ? 'Konsistensi sangat baik!'
                  : streak >= 1
                  ? 'Streak belajar aktif'
                  : 'Mulai sesi belajarmu hari ini'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EMPAT KARTU STATISTIK UTAMA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Penguasaan Kosakata"
          value={learnedKotoba}
          subValue={`/ ${totalKotoba}`}
          badgeText={`${kotobaPct}%`}
          progressPct={kotobaPct}
          icon={BookOpen}
          tone="blue"
          onClick={() => { sound.playClick(); onNavigate('kotoba'); }}
          footerText="Minna no Nihongo Bab 1–50"
        />

        <StatCard
          title="Penguasaan Kanji"
          value={learnedKanji}
          subValue={`/ ${totalKanji}`}
          badgeText={`${kanjiPct}%`}
          progressPct={kanjiPct}
          icon={PenTool}
          tone="sapphire"
          onClick={() => { sound.playClick(); onNavigate('kanji'); }}
          footerText="Kanji JLPT N5 & N4"
        />

        <StatCard
          title="Hiragana & Katakana"
          value={learnedKana}
          subValue={`/ ${totalKana}`}
          badgeText={`${kanaPct}%`}
          progressPct={kanaPct}
          icon={Languages}
          tone="cyan"
          onClick={() => { sound.playClick(); onNavigate('kana'); }}
          footerText="Gojuon, Dakuten, Youon & Serapan"
        />

        <StatCard
          title="Rata-rata Akurasi"
          value={`${avgScore}%`}
          badgeText={`${totalQuizzes} Kuis`}
          progressPct={avgScore}
          icon={Trophy}
          tone="emerald"
          onClick={() => { sound.playClick(); onNavigate('latihan'); }}
          footerText={totalQuizzes > 0 ? 'Berdasarkan seluruh sesi latihan' : 'Belum ada sesi kuis tercatat'}
        />
      </div>

      {/* 3. GRAFIK TREN AKTIVITAS BELAJAR */}
      <ChartCard
        title="Tren Aktivitas & Akurasi Belajar"
        subtitle="Intensitas aktivitas harian aktual dan perkembangan akurasi kuis pada periode terpilih."
        icon={TrendingUp}
        rightSlot={
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-xs">
            <button
              type="button"
              onClick={() => { sound.playClick(); setSelectedTimeframe('7d'); }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                selectedTimeframe === '7d'
                  ? 'bg-[var(--primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              7 Hari Terakhir
            </button>
            <button
              type="button"
              onClick={() => { sound.playClick(); setSelectedTimeframe('30d'); }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                selectedTimeframe === '30d'
                  ? 'bg-[var(--primary)] text-white shadow-xs'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              30 Hari
            </button>
          </div>
        }
      >
        <SmoothLineChart
          data={trendData}
          primaryLabel="Aktivitas Harian"
          secondaryLabel={totalQuizzes > 0 ? 'Akurasi Kuis (%)' : undefined}
        />
      </ChartCard>

      {/* 4 & 5. PETA AKTIVITAS 12 MINGGU & SKOR KESIAPAN UJIAN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <ChartCard
          title="Peta Aktivitas 12 Minggu"
          subtitle="Rekam konsistensi harian selama 84 hari terakhir."
          icon={Calendar}
          className="lg:col-span-7"
          rightSlot={
            <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)]">
              84 Hari
            </span>
          }
        >
          <ActivityHeatmap days={heatmapDays} />
        </ChartCard>

        <ChartCard
          title="Skor Kesiapan Ujian"
          subtitle="Estimasi kesiapan berdasarkan kosakata, kanji, kana, dan akurasi latihan."
          icon={Target}
          className="lg:col-span-5"
        >
          <div className="space-y-4">
            {[
              { label: 'JLPT N5', pct: n5Readiness, tone: 'emerald' as const, note: 'Target: ~800 kosakata, 110 kanji N5, kana dasar' },
              { label: 'JFT-Basic A2 (SSW)', pct: jftReadiness, tone: 'cyan' as const, note: 'Target: ~1.200 kosakata, 150 kanji & akurasi' },
              { label: 'JLPT N4', pct: n4Readiness, tone: 'blue' as const, note: 'Target: ~1.800 kosakata, 300 kanji N5+N4' },
            ].map((exam) => {
              const status = getReadinessStatus(exam.pct);
              return (
                <div key={exam.label} className="p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-black text-[var(--text-primary)]">{exam.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${status.cls}`}>
                        {status.label}
                      </span>
                      <span className="text-xs font-black font-mono text-[var(--primary)]">{exam.pct}%</span>
                    </div>
                  </div>
                  <ProgressBar pct={exam.pct} tone={exam.tone} heightClass="h-2" />
                  <p className="text-[11px] text-[var(--text-muted)]">{exam.note}</p>
                </div>
              );
            })}
          </div>
        </ChartCard>
      </div>

      {/* 7. INSIGHT BELAJAR */}
      <ChartCard
        title="Insight Belajar"
        subtitle="Rekomendasi otomatis berdasarkan data penguasaan dan aktivitas belajarmu."
        icon={Lightbulb}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {insights.map((ins, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex flex-col justify-between gap-3"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      ins.tone === 'positive'
                        ? 'bg-[#27B99A]'
                        : ins.tone === 'focus'
                        ? 'bg-[#E9B45E]'
                        : 'bg-[var(--primary)]'
                    }`}
                  />
                  <h4 className="text-xs sm:text-sm font-black text-[var(--text-primary)]">
                    {ins.title}
                  </h4>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {ins.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onNavigate(ins.actionTab);
                }}
                className="self-start inline-flex items-center gap-1 text-xs font-bold text-[var(--primary)] hover:underline cursor-pointer"
              >
                <span>{ins.actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </ChartCard>

      {/* 6. RIWAYAT UJIAN DAN LATIHAN */}
      <ChartCard
        title="Riwayat Ujian & Sesi Latihan"
        subtitle="Catatan hasil kuis dan simulasi ujian terakhir yang telah dikerjakan."
        icon={Clock}
        rightSlot={
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onNavigate('latihan');
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl neon-btn-primary text-white text-xs font-bold cursor-pointer"
          >
            <span>Mulai Ujian Baru</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        }
      >
        {history.length > 0 ? (
          <div className="space-y-2.5">
            {history.slice(-10).reverse().map((item, idx) => {
              const pct = Math.round((item.score / (item.total || 1)) * 100);
              const isExpanded = expandedQuizIdx === idx;
              const passed = pct >= 70;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedQuizIdx(isExpanded ? null : idx)}
                    className="w-full p-3.5 flex items-center justify-between gap-3 text-left hover:bg-[var(--bg-card)]/60 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-xl font-black text-xs flex items-center justify-center shrink-0 border ${
                          passed
                            ? 'bg-[#27B99A]/15 text-[#27B99A] border-[#27B99A]/30'
                            : 'bg-[#E9B45E]/15 text-[#E9B45E] border-[#E9B45E]/30'
                        }`}
                      >
                        {pct}%
                      </div>
                      <div className="min-w-0">
                        <span className="text-sm font-bold text-[var(--text-primary)] block truncate capitalize">
                          {item.subject} · {item.mode}
                        </span>
                        <span className="text-[11px] text-[var(--text-muted)]">
                          {new Date(item.date).toLocaleDateString('id-ID', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <span className="text-sm font-black text-[var(--primary)]">
                          {item.score} / {item.total}
                        </span>
                        <span className="block text-[10px] text-[var(--text-secondary)]">Benar</span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[var(--text-muted)]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-3.5 pt-2 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--text-secondary)] bg-[var(--bg-card)]/50">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${passed ? 'text-[#27B99A]' : 'text-[#E9B45E]'}`} />
                        Status: <strong className="text-[var(--text-primary)]">{passed ? 'Lulus Target (>=70%)' : 'Perlu Latihan Ulang'}</strong>
                      </span>
                      <span>
                        Salah: <strong className="text-[var(--text-primary)]">{Math.max(0, item.total - item.score)} soal</strong>
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <EmptyState
            title="Belum ada riwayat kuis atau ujian"
            description="Selesaikan salah satu sesi latihan atau simulasi ujian JLPT/JFT untuk merekam akurasi dan perkembanganmu."
            action={
              <button
                type="button"
                onClick={() => { sound.playClick(); onNavigate('latihan'); }}
                className="px-4 py-2 rounded-xl neon-btn-primary text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>Mulai Latihan Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            }
          />
        )}
      </ChartCard>

    </div>
  );
};
