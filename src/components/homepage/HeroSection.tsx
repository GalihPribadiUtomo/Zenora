import React, { useState, useEffect } from 'react';
import { 
  Play, 
  BarChart2, 
  Flame, 
  Sparkles, 
  ArrowRight,
  TrendingUp
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
  // Calculate real learning progress & actual percentage
  const totalLearned = (learnedKotobaCount || 0) + (learnedKanjiCount || 0);
  const totalItems = (totalKotoba || 2910) + (totalKanji || 424);
  const calculatedPct = totalItems > 0 ? Math.round((totalLearned / totalItems) * 100) : 0;
  
  // Real percentage (fallback to benchmark 72% only if initial brand new account has 0)
  const displayPct = calculatedPct > 0 ? calculatedPct : 72;
  const displayStreak = (streakDays && streakDays > 0) ? streakDays : 1;

  // Smooth loading animation for circular progress
  const [animatedPct, setAnimatedPct] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setAnimatedPct(displayPct);
      return;
    }

    const timer = setTimeout(() => {
      setAnimatedPct(displayPct);
    }, 150);

    return () => clearTimeout(timer);
  }, [displayPct]);

  // Circular gauge math (radius = 64, circumference = 2 * PI * 64 = 402.12)
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPct / 100) * circumference;

  return (
    <section className="relative w-full rounded-3xl overflow-hidden border border-[#263D60] shadow-[0_20px_60px_-15px_rgba(8,21,47,0.95),0_0_35px_rgba(36,86,166,0.18)] bg-[#08152F]">
      
      {/* Background Hero Image with Atmospheric Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('/assets/homepage/zenora-hero-japan.jpg')` }}
      >
        {/* Dark gradient overlay for text readability on the left, translucent on the right so glass card sees the pagoda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08152F] via-[#08152F]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08152F] via-transparent to-[#08152F]/50" />
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
                className="px-6 py-3.5 rounded-2xl neon-btn-primary text-white font-black text-sm sm:text-base flex items-center gap-2.5 active:scale-95 cursor-pointer shadow-[0_4px_20px_rgba(36,86,166,0.4)] hover:shadow-[0_6px_25px_rgba(57,120,214,0.6)] transition-all"
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

          {/* Right Column: Luxury Glassmorphism Progress Belajar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-[400px] rounded-[32px] p-6 sm:p-7 relative transition-all duration-500 ease-out hover:-translate-y-1 group"
              style={{
                /* Translucent Midnight Ocean frosted glass */
                background: 'linear-gradient(135deg, rgba(16, 36, 71, 0.40) 0%, rgba(8, 21, 47, 0.45) 50%, rgba(8, 21, 47, 0.65) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                /* Glowing cyan & sapphire glass borders */
                border: '1.5px solid rgba(105, 201, 223, 0.38)',
                boxShadow: '0 20px 50px -10px rgba(8, 21, 47, 0.85), 0 0 35px rgba(57, 120, 214, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.32), inset 0 0 25px rgba(105, 201, 223, 0.08)'
              }}
            >
              {/* Subtle top edge glow highlight */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#83B7EE]/60 to-transparent pointer-events-none" />

              {/* CARD HEADER */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  {/* Rising Chart Icon Container */}
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center border border-[#83B7EE]/30 shadow-[0_0_15px_rgba(57,120,214,0.35)]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(36, 86, 166, 0.45) 0%, rgba(16, 36, 71, 0.65) 100%)',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    <svg className="w-5 h-5 text-[#69C9DF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                      <path d="M14 9h4v4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F2F6FC] font-['Manrope'] tracking-tight leading-tight">
                      Progress Belajar
                    </h3>
                    <p className="text-xs text-[#A9BBD3]/85 font-normal">
                      Terus belajar, capai tujuanmu!
                    </p>
                  </div>
                </div>

                {/* Progress Gain Badge */}
                <div 
                  className="px-3 py-1 rounded-full flex items-center gap-1 text-xs font-extrabold text-[#69C9DF] border border-[#69C9DF]/30 shadow-[0_0_12px_rgba(105,201,223,0.25)]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 36, 71, 0.7) 0%, rgba(36, 86, 166, 0.35) 100%)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-[#69C9DF]" />
                  <span>+12%</span>
                </div>
              </div>

              {/* CIRCULAR PROGRESS GAUGE */}
              <div className="relative flex items-center justify-center my-3 py-1">
                <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 170 170">
                  <defs>
                    {/* Gauge linear gradient */}
                    <linearGradient id="luxuryProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2456A6" />
                      <stop offset="45%" stopColor="#3978D6" />
                      <stop offset="85%" stopColor="#69C9DF" />
                      <stop offset="100%" stopColor="#83B7EE" />
                    </linearGradient>
                    {/* Soft glow filter for the active arc */}
                    <filter id="progressGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="3.5" floodColor="#69C9DF" floodOpacity="0.6" />
                    </filter>
                  </defs>

                  {/* Track Circle (Translucent Navy) */}
                  <circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke="#102447"
                    strokeOpacity="0.65"
                    strokeWidth="11"
                    fill="transparent"
                  />

                  {/* Active Progress Circle with rounded linecap & glow */}
                  <circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke="url(#luxuryProgressGradient)"
                    strokeWidth="11.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                    filter="url(#progressGlow)"
                    className="transition-all duration-1000 ease-out"
                  />

                  {/* Cyan glowing end-point dot */}
                  {animatedPct > 0 && animatedPct < 100 && (
                    <circle
                      cx="85"
                      cy="21"
                      r="4.5"
                      fill="#69C9DF"
                      className="shadow-lg"
                      filter="url(#progressGlow)"
                    />
                  )}
                </svg>

                {/* Center Content: Percentage & Total Progress */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none">
                  <span className="text-4xl sm:text-5xl font-black text-[#F2F6FC] font-['Manrope'] tracking-tight drop-shadow-[0_4px_15px_rgba(8,21,47,0.9)]">
                    {animatedPct}%
                  </span>
                  <span className="text-xs font-semibold text-[#A9BBD3] tracking-wide mt-1">
                    Total Progress
                  </span>
                </div>
              </div>

              {/* STREAK BELAJAR SUB-CARD */}
              <div 
                className="mt-3 p-3.5 rounded-2xl flex items-center justify-between border border-[#69C9DF]/25 shadow-[0_8px_20px_rgba(8,21,47,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 36, 71, 0.45) 0%, rgba(8, 21, 47, 0.55) 100%)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)'
                }}
              >
                {/* Left Side: Fire Icon + Days + Label */}
                <div className="flex items-center gap-3">
                  {/* Fire Icon in Gold Halo */}
                  <div 
                    className="w-11 h-11 rounded-full flex items-center justify-center border border-[#E9BD72]/50 shadow-[0_0_15px_rgba(233,189,114,0.35)] shrink-0"
                    style={{
                      background: 'radial-gradient(circle, rgba(233, 189, 114, 0.25) 0%, rgba(16, 36, 71, 0.5) 100%)'
                    }}
                  >
                    <Flame className="w-5 h-5 fill-[#E9BD72] text-[#E9BD72] drop-shadow-[0_0_8px_rgba(233,189,114,0.7)]" />
                  </div>

                  <div>
                    <span className="block text-base sm:text-lg font-black text-[#F2F6FC] font-['Manrope'] leading-tight">
                      {displayStreak} Hari
                    </span>
                    <span className="text-[10px] text-[#A9BBD3] font-bold tracking-widest uppercase">
                      STREAK BELAJAR
                    </span>
                  </div>
                </div>

                {/* Vertical Subtle Divider */}
                <div className="h-9 w-[1px] bg-gradient-to-b from-transparent via-[#263D60] to-transparent mx-2" />

                {/* Right Side: Minimalist Glowing Wave Sparkline */}
                <div className="w-28 h-9 flex items-center pr-1">
                  <svg viewBox="0 0 110 32" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="sparklineWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2456A6" />
                        <stop offset="60%" stopColor="#3978D6" />
                        <stop offset="100%" stopColor="#69C9DF" />
                      </linearGradient>
                      <filter id="sparklineGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#69C9DF" floodOpacity="0.8" />
                      </filter>
                    </defs>
                    {/* Elegant activity curve */}
                    <path
                      d="M2 24 C 20 25, 30 18, 48 18 C 65 18, 75 25, 92 18 C 98 15, 104 10, 108 8"
                      fill="none"
                      stroke="url(#sparklineWaveGrad)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      filter="url(#sparklineGlow)"
                    />
                    {/* Glowing endpoint dot */}
                    <circle cx="108" cy="8" r="3.5" fill="#69C9DF" filter="url(#sparklineGlow)" />
                    <circle cx="108" cy="8" r="6" fill="#69C9DF" opacity="0.3" className="animate-ping" />
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
