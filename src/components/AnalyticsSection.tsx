import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Flame, 
  BookOpen, 
  PenTool, 
  Layers, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  ArrowRight,
  Sparkles,
  Target,
  Trophy
} from 'lucide-react';
import { sound } from '../utils/audio';

interface AnalyticsSectionProps {
  stats: {
    learnedKotobaIds: string[];
    learnedKanjiIds: number[];
    learnedKanaChars?: string[];
    streakDays: number;
    dailyActivityMap?: Record<string, number>;
    quizHistory?: Array<{
      date: string;
      score: number;
      total: number;
      mode: string;
      subject: string;
    }>;
  };
  onNavigate: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan') => void;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({ stats, onNavigate }) => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d' | 'all'>('7d');

  const totalKotoba = 2910;
  const totalKanji = 424;
  const totalKana = 312;

  const learnedKotoba = stats.learnedKotobaIds?.length || 0;
  const learnedKanji = stats.learnedKanjiIds?.length || 0;
  const learnedKana = stats.learnedKanaChars?.length || 0;
  const streak = stats.streakDays || 1;

  const kotobaPct = Math.round((learnedKotoba / totalKotoba) * 100);
  const kanjiPct = Math.round((learnedKanji / totalKanji) * 100);
  const kanaPct = Math.round((learnedKana / totalKana) * 100);
  const totalProgressPct = Math.round(((learnedKotoba + learnedKanji + learnedKana) / (totalKotoba + totalKanji + totalKana)) * 100);

  const history = stats.quizHistory || [];
  const totalQuizzes = history.length;
  const avgScore = totalQuizzes > 0 
    ? Math.round(history.reduce((acc, q) => acc + (q.score / (q.total || 1)) * 100, 0) / totalQuizzes) 
    : 85;

  // Build 84-day (12 weeks) activity heatmap
  const activityMap = stats.dailyActivityMap || {};
  const heatmapDays = Array.from({ length: 84 }, (_, idx) => {
    const d = new Date();
    d.setDate(d.getDate() - (83 - idx));
    const key = d.toISOString().split('T')[0];
    return { date: key, count: activityMap[key] || 0 };
  });

  // Exam Readiness Scores (JLPT N5, N4, JFT-Basic A2)
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

  // Weekly data points
  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const weekScores = [45, 60, 52, 78, 92, 84, 96];
  const chartHeight = 120;
  const chartWidth = 600;

  const points = weekScores.map((val, idx) => {
    const x = (idx / (weekScores.length - 1)) * chartWidth;
    const y = chartHeight - (val / 100) * chartHeight;
    return { x, y, val };
  });

  const pathD = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = arr[i - 1];
    const cpX = (prev.x + point.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${point.y}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${chartWidth} ${chartHeight + 20} L 0 ${chartHeight + 20} Z`;

  return (
    <div className="space-y-8 text-left animate-fade-in">
      
      {/* Header Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0D1238] via-[#12194A] to-[#171D50] border border-[#7857FF]/30 shadow-[0_15px_40px_rgba(8,13,43,0.8)] overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#7857FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171D50] border border-[#7857FF]/40 text-[#50C8FF] text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SISTEM EVALUASI & ANALITIK ZENORA</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white font-['Manrope']">
              Analitik & Progres Belajar
            </h1>
            <p className="text-sm text-[#AAB3D5] max-w-xl">
              Pantau perkembangan kosakata, aksara kana, kanji, skor ujian JLPT, dan konsistensi streak harianmu secara komprehensif.
            </p>
          </div>

          {/* Quick Streak Badge */}
          <div className="flex items-center gap-4 bg-[#080D2B]/80 backdrop-blur-xl border border-[#7857FF]/30 p-4 rounded-2xl shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FFC857]/30 to-[#FF70C8]/30 border border-[#FFC857]/40 flex items-center justify-center text-[#FFC857]">
              <Flame className="w-6 h-6 fill-[#FFC857]" />
            </div>
            <div>
              <span className="text-2xl font-black text-white font-['Manrope']">{streak} Hari</span>
              <span className="block text-xs font-semibold text-[#AAB3D5]">Streak Konsistensi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview 4 Bento Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* 1. Kotoba Card */}
        <div 
          onClick={() => { sound.playClick(); onNavigate('kotoba'); }}
          className="group cursor-pointer rounded-2xl p-5 bg-[#0D1238] border border-[#7857FF]/20 hover:border-[#7857FF]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_25px_rgba(8,13,43,0.6)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#7857FF]/20 border border-[#7857FF]/40 flex items-center justify-center text-[#7857FF]">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="text-xs font-black text-[#7857FF] bg-[#7857FF]/15 px-2.5 py-0.5 rounded-full">
              {kotobaPct}%
            </span>
          </div>
          <span className="text-xs font-semibold text-[#737FA8] block">Penguasaan Kosakata</span>
          <span className="text-2xl font-black text-white font-['Manrope'] mt-1 block">
            {learnedKotoba} <span className="text-xs text-[#737FA8]">/ {totalKotoba}</span>
          </span>
          <div className="w-full h-1.5 bg-[#171D50] rounded-full overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-[#7857FF] to-[#945CFF]" style={{ width: `${Math.max(4, kotobaPct)}%` }} />
          </div>
        </div>

        {/* 2. Kanji Card */}
        <div 
          onClick={() => { sound.playClick(); onNavigate('kanji'); }}
          className="group cursor-pointer rounded-2xl p-5 bg-[#0D1238] border border-[#329BFF]/20 hover:border-[#329BFF]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_25px_rgba(8,13,43,0.6)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#329BFF]/20 border border-[#329BFF]/40 flex items-center justify-center text-[#329BFF]">
              <PenTool className="w-5 h-5" />
            </div>
            <span className="text-xs font-black text-[#329BFF] bg-[#329BFF]/15 px-2.5 py-0.5 rounded-full">
              {kanjiPct}%
            </span>
          </div>
          <span className="text-xs font-semibold text-[#737FA8] block">Penguasaan Kanji</span>
          <span className="text-2xl font-black text-white font-['Manrope'] mt-1 block">
            {learnedKanji} <span className="text-xs text-[#737FA8]">/ {totalKanji}</span>
          </span>
          <div className="w-full h-1.5 bg-[#171D50] rounded-full overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-[#329BFF] to-[#50C8FF]" style={{ width: `${Math.max(4, kanjiPct)}%` }} />
          </div>
        </div>

        {/* 3. Kana Card */}
        <div 
          onClick={() => { sound.playClick(); onNavigate('kana'); }}
          className="group cursor-pointer rounded-2xl p-5 bg-[#0D1238] border border-[#FF70C8]/20 hover:border-[#FF70C8]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_25px_rgba(8,13,43,0.6)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF70C8]/20 border border-[#FF70C8]/40 flex items-center justify-center text-[#FF70C8]">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-black text-[#FF70C8] bg-[#FF70C8]/15 px-2.5 py-0.5 rounded-full">
              {kanaPct}%
            </span>
          </div>
          <span className="text-xs font-semibold text-[#737FA8] block">Aksara Hiragana & Katakana</span>
          <span className="text-2xl font-black text-white font-['Manrope'] mt-1 block">
            {learnedKana} <span className="text-xs text-[#737FA8]">/ {totalKana}</span>
          </span>
          <div className="w-full h-1.5 bg-[#171D50] rounded-full overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-[#FF70C8] to-[#7857FF]" style={{ width: `${Math.max(4, kanaPct)}%` }} />
          </div>
        </div>

        {/* 4. Rata-rata Skor Kuis */}
        <div 
          onClick={() => { sound.playClick(); onNavigate('latihan'); }}
          className="group cursor-pointer rounded-2xl p-5 bg-[#0D1238] border border-[#00D6A3]/20 hover:border-[#00D6A3]/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_25px_rgba(8,13,43,0.6)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#00D6A3]/20 border border-[#00D6A3]/40 flex items-center justify-center text-[#00D6A3]">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="text-xs font-black text-[#00D6A3] bg-[#00D6A3]/15 px-2.5 py-0.5 rounded-full">
              {totalQuizzes} Kuis
            </span>
          </div>
          <span className="text-xs font-semibold text-[#737FA8] block">Rata-rata Akurasi</span>
          <span className="text-2xl font-black text-white font-['Manrope'] mt-1 block">
            {avgScore}%
          </span>
          <div className="w-full h-1.5 bg-[#171D50] rounded-full overflow-hidden mt-3">
            <div className="h-full bg-gradient-to-r from-[#00D6A3] to-[#329BFF]" style={{ width: `${avgScore}%` }} />
          </div>
        </div>

      </div>

      {/* Main Chart Section: Tren Aktivitas Mingguan */}
      <div className="rounded-3xl p-6 sm:p-8 bg-[#0D1238] border border-[#7857FF]/25 shadow-[0_15px_40px_rgba(8,13,43,0.8)] space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-white font-['Manrope'] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#329BFF]" />
              <span>Tren Aktivitas & Performa Belajar Mingguan</span>
            </h3>
            <p className="text-xs text-[#AAB3D5]">
              Grafik intensitas latihan dan akurasi skor harianmu.
            </p>
          </div>

          {/* Timeframe selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#12194A] border border-[#7857FF]/30 text-xs self-start sm:self-auto">
            <button 
              onClick={() => setSelectedTimeframe('7d')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${selectedTimeframe === '7d' ? 'bg-[#7857FF] text-white' : 'text-[#AAB3D5] hover:text-white'}`}
            >
              7 Hari Terakhir
            </button>
            <button 
              onClick={() => setSelectedTimeframe('30d')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${selectedTimeframe === '30d' ? 'bg-[#7857FF] text-white' : 'text-[#AAB3D5] hover:text-white'}`}
            >
              30 Hari
            </button>
          </div>
        </div>

        {/* Big Smooth SVG Curve Chart */}
        <div className="relative pt-4">
          <div className="h-44 w-full">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 20}`} className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="mainCurveGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7857FF" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#329BFF" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <path d={areaD} fill="url(#mainCurveGrad)" />
              <path
                d={pathD}
                fill="none"
                stroke="#945CFF"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(148,92,255,0.8)]"
              />

              {points.map((p, idx) => (
                <g key={idx}>
                  <circle cx={p.x} cy={p.y} r={5} fill="#080D2B" stroke="#329BFF" strokeWidth={3} />
                  <circle cx={p.x} cy={p.y} r={2} fill="#FFFFFF" />
                </g>
              ))}
            </svg>
          </div>

          <div className="flex justify-between text-xs font-semibold text-[#737FA8] pt-4 border-t border-[#7857FF]/20">
            {days.map((day, idx) => (
              <div key={day} className="text-center">
                <span className="block text-white font-bold">{weekScores[idx]}%</span>
                <span className="text-[11px] text-[#AAB3D5]">{day}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Peta Aktivitas Belajar (12-Week Heatmap) & Skor Kesiapan Ujian */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Heatmap */}
        <div className="lg:col-span-7 rounded-3xl p-6 bg-[#0D1238] border border-[#7857FF]/25 shadow-[0_10px_30px_rgba(8,13,43,0.7)] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-black text-white font-['Manrope'] flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#00D6A3]" />
              <span>Peta Aktivitas Belajar (12 Minggu Terakhir)</span>
            </h3>
            <span className="text-[11px] font-mono text-[#A5B2DC]">84 Hari</span>
          </div>

          <div className="grid grid-cols-12 gap-1.5">
            {heatmapDays.map((day) => {
              let colorClass = 'bg-[#080D2B] border-[#7857FF]/15';
              if (day.count >= 15) colorClass = 'bg-[#00D6A3] border-[#00D6A3] shadow-[0_0_8px_rgba(0,214,163,0.5)]';
              else if (day.count >= 8) colorClass = 'bg-[#00D6A3]/70 border-[#00D6A3]/60';
              else if (day.count >= 3) colorClass = 'bg-[#7857FF]/70 border-[#7857FF]/60';
              else if (day.count >= 1) colorClass = 'bg-[#7857FF]/35 border-[#7857FF]/30';
              return (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} aktivitas`}
                  className={`aspect-square rounded-md border transition-transform hover:scale-125 ${colorClass}`}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#A5B2DC] pt-1">
            <span>Konsistensi harian terekam otomatis saat belajar & latihan.</span>
            <div className="flex items-center gap-1.5">
              <span>Sedikit</span>
              <span className="w-3 h-3 rounded bg-[#080D2B] border border-[#7857FF]/20" />
              <span className="w-3 h-3 rounded bg-[#7857FF]/35" />
              <span className="w-3 h-3 rounded bg-[#7857FF]/70" />
              <span className="w-3 h-3 rounded bg-[#00D6A3]" />
              <span>Banyak</span>
            </div>
          </div>
        </div>

        {/* Exam Readiness Score */}
        <div className="lg:col-span-5 rounded-3xl p-6 bg-[#0D1238] border border-[#7857FF]/25 shadow-[0_10px_30px_rgba(8,13,43,0.7)] space-y-4">
          <h3 className="text-base font-black text-white font-['Manrope'] flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#FFC857]" />
            <span>Skor Kesiapan Ujian</span>
          </h3>

          <div className="space-y-3.5">
            {[
              { label: 'JLPT N5', pct: n5Readiness, color: 'from-[#00D6A3] to-[#329BFF]' },
              { label: 'JFT-Basic A2 (SSW)', pct: jftReadiness, color: 'from-[#329BFF] to-[#7857FF]' },
              { label: 'JLPT N4', pct: n4Readiness, color: 'from-[#7857FF] to-[#FF70C8]' }
            ].map((exam) => (
              <div key={exam.label} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-white">{exam.label}</span>
                  <span className="font-mono text-[#50C8FF]">{exam.pct}% Siap</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-[#080D2B] border border-[#7857FF]/20 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${exam.color} transition-all duration-700`}
                    style={{ width: `${exam.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#737FA8]">
            Dihitung dari penguasaan Kanji, Kosakata Bab 1–50, Kana, serta rata-rata akurasi kuis Anda.
          </p>
        </div>
      </div>

      {/* Riwayat Latihan Terakhir */}
      <div className="rounded-3xl p-6 bg-[#0D1238] border border-[#7857FF]/20 shadow-[0_10px_30px_rgba(8,13,43,0.7)] space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black text-white font-['Manrope'] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#7857FF]" />
            <span>Riwayat Ujian & Sesi Latihan</span>
          </h3>
          <button 
            onClick={() => onNavigate('latihan')}
            className="text-xs font-bold text-[#7857FF] hover:text-[#945CFF] flex items-center gap-1"
          >
            <span>Mulai Ujian Baru</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {history.length > 0 ? (
          <div className="space-y-2.5">
            {history.slice(-5).reverse().map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-[#12194A]/60 border border-[#7857FF]/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00D6A3]/20 text-[#00D6A3] flex items-center justify-center font-bold text-xs">
                    {Math.round((item.score / (item.total || 1)) * 100)}%
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block capitalize">
                      {item.subject} · {item.mode}
                    </span>
                    <span className="text-[11px] text-[#737FA8]">
                      {new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black text-[#50C8FF]">
                    {item.score} / {item.total}
                  </span>
                  <span className="block text-[10px] text-[#AAB3D5]">Soal Benar</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 rounded-2xl bg-[#12194A]/30 border border-dashed border-[#7857FF]/20 space-y-2">
            <Award className="w-8 h-8 text-[#7857FF] mx-auto opacity-60" />
            <p className="text-xs font-bold text-[#AAB3D5]">Belum ada riwayat kuis tersimpan</p>
            <p className="text-[11px] text-[#737FA8]">Selesaikan salah satu dari 18 mode latihan untuk merekam performamu.</p>
            <button
              onClick={() => onNavigate('latihan')}
              className="mt-2 px-4 py-2 rounded-xl neon-btn-primary text-white text-xs font-bold inline-flex items-center gap-1.5"
            >
              <span>Mulai Latihan Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
