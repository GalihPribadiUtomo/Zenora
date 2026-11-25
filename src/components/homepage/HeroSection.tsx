import React from 'react';
import { 
  Play, 
  BarChart2, 
  Flame, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface HeroSectionProps {
  onStartLearning: () => void;
  onViewProgress: () => void;
  learnedKotobaCount: number;
  learnedKanjiCount: number;
  totalKotoba: number;
  totalKanji: number;
  streakDays: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onViewProgress,
  learnedKotobaCount,
  learnedKanjiCount,
  totalKotoba,
  totalKanji,
  streakDays
}) => {
  // Calculate total learned items & realistic dynamic percentage
  const totalLearned = learnedKotobaCount + learnedKanjiCount;
  const totalItems = (totalKotoba || 2910) + (totalKanji || 424);
  const actualPct = totalItems > 0 ? Math.round((totalLearned / totalItems) * 100) : 0;
  
  // Display percentage: show actual, or starter anchor of 72% if simulating master level or display actual
  const displayPct = actualPct > 0 ? actualPct : 72;
  const displayStreak = streakDays > 0 ? streakDays : 18;

  // SVG circular progress calculation (radius = 54, circumference = 2 * PI * 54 = 339.29)
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (displayPct / 100) * circumference;

  return (
    <section className="relative w-full rounded-3xl overflow-hidden border border-[#263D60] shadow-[0_20px_60px_-15px_rgba(8,21,47,0.95),0_0_35px_rgba(36,86,166,0.18)] bg-[#08152F]">
      
      {/* Background Hero Image with Atmospheric Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('/assets/homepage/zenora-hero-japan.jpg')` }}
      >
        {/* Dark gradient overlay for text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152F] via-[#08152F]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-transparent to-[#08152F]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(36,86,166,0.22),transparent_60%)]" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 min-h-[460px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Sparkle Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111F38]/85 backdrop-blur-md border border-[#263D60] text-[#F2F6FC] text-xs font-bold tracking-wide shadow-[0_0_15px_rgba(36,86,166,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#69C9DF] animate-pulse" />
              <span>Selamat datang kembali!</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F2F6FC] font-['Manrope'] tracking-tight leading-[1.15]">
                Kuasai Bahasa Jepang
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Manrope'] tracking-tight leading-[1.15] bg-gradient-to-r from-[#83B7EE] via-[#3978D6] to-[#69C9DF] text-transparent bg-clip-text drop-shadow-[0_4px_25px_rgba(36,86,166,0.4)]">
                Lebih Mudah & Terstruktur
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-[#A9BBD3] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Belajar dengan metode modern, materi terlengkap, dan latihan interaktif yang dirancang khusus untuk perjalanan belajar bahasa Jepangmu.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onStartLearning();
                }}
                className="px-6 py-3.5 rounded-2xl neon-btn-primary text-white font-black text-sm sm:text-base flex items-center gap-2.5 active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span>Mulai Belajar</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onViewProgress();
                }}
                className="px-5 py-3.5 rounded-2xl bg-[#111F38]/85 hover:bg-[#172945] text-[#F2F6FC] font-bold text-sm sm:text-base border border-[#263D60] backdrop-blur-md hover:border-[#3978D6]/60 transition-all flex items-center gap-2 active:scale-95 shadow-lg cursor-pointer"
              >
                <BarChart2 className="w-4 h-4 text-[#3978D6]" />
                <span>Lihat Progress</span>
              </button>
            </div>

          </div>

          {/* Right Column: Floating Learning Progress Widget */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-3xl p-6 glass-midnight-card border border-[#263D60] shadow-[0_25px_50px_rgba(8,21,47,0.9),0_0_30px_rgba(36,86,166,0.2)] backdrop-blur-2xl text-left animate-float-gentle">
              
              {/* Widget Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#83B7EE]" />
                  <span>Progress Belajar</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#45C6A5]/15 text-[#45C6A5] border border-[#45C6A5]/30 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  +12%
                </span>
              </div>

              {/* Circular Progress Gauge */}
              <div className="relative flex items-center justify-center py-2">
                <svg className="w-36 h-36 transform -rotate-90">
                  {/* Track Circle */}
                  <circle
                    cx="72"
                    cy="72"
                    r={radius}
                    className="stroke-[#172945]"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  {/* Progress Circle with Ocean Blue Gradient */}
                  <circle
                    cx="72"
                    cy="72"
                    r={radius}
                    stroke="url(#oceanBlueGradient)"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* SVG Gradient Definition */}
                  <defs>
                    <linearGradient id="oceanBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2456A6" />
                      <stop offset="50%" stopColor="#3978D6" />
                      <stop offset="100%" stopColor="#69C9DF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-3xl font-black text-[#F2F6FC] font-['Manrope'] tracking-tight">
                    {displayPct}%
                  </span>
                  <span className="text-[11px] font-semibold text-[#A9BBD3]">
                    Total Progress
                  </span>
                </div>
              </div>

              {/* Streak Stat & Mini Sparkline */}
              <div className="mt-3 pt-4 border-t border-[#263D60] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#E9BD72]/15 border border-[#E9BD72]/30 text-[#E9BD72]">
                    <Flame className="w-4 h-4 fill-[#E9BD72]" />
                  </div>
                  <div>
                    <span className="block text-sm font-black text-white">
                      {displayStreak} Hari
                    </span>
                    <span className="text-[10px] text-[#7186A5] font-medium uppercase tracking-wider">
                      Streak Belajar
                    </span>
                  </div>
                </div>

                {/* Mini Wave Sparkline */}
                <div className="w-24 h-8 flex items-end">
                  <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                    <path
                      d="M0 25 Q 20 10, 40 18 T 80 5 T 100 12"
                      fill="none"
                      stroke="#3978D6"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="12" r="3" fill="#69C9DF" className="animate-ping" />
                    <circle cx="100" cy="12" r="3" fill="#69C9DF" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
