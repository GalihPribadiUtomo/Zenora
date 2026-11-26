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
  darkMode?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onViewProgress,
  learnedKotobaCount,
  learnedKanjiCount,
  totalKotoba,
  totalKanji,
  streakDays,
  darkMode = true
}) => {
  // Calculate real learning progress & actual percentage
  const totalLearned = (learnedKotobaCount || 0) + (learnedKanjiCount || 0);
  const totalItems = (totalKotoba || 2910) + (totalKanji || 424);
  const calculatedPct = totalItems > 0 ? Math.round((totalLearned / totalItems) * 100) : 0;

  // Real percentage (fallback to 72% only when brand-new account has 0)
  const displayPct = calculatedPct > 0 ? calculatedPct : 72;
  const displayStreak = (streakDays && streakDays > 0) ? streakDays : 1;

  // Smooth loading animation for circular progress (respects prefers-reduced-motion)
  const [animatedPct, setAnimatedPct] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return displayPct;
    }
    return 0;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setAnimatedPct(displayPct);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setAnimatedPct(displayPct);
    });

    return () => cancelAnimationFrame(frame);
  }, [displayPct]);

  // Circular gauge math (radius = 64, circumference = 2 * PI * 64 = 402.12)
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (animatedPct / 100) * circumference;

  // Exact SVG coordinates for the progress arc tip (in -rotate-90 coordinate space)
  const angleRad = (animatedPct / 100) * 2 * Math.PI;
  const tipX = 85 + radius * Math.cos(angleRad);
  const tipY = 85 + radius * Math.sin(angleRad);

  return (
    <section
      className={`relative w-full rounded-3xl overflow-hidden border transition-all duration-300 ${
        darkMode
          ? 'border-[#263D60] shadow-[0_20px_60px_-15px_rgba(8,21,47,0.95),0_0_35px_rgba(36,86,166,0.18)] bg-[#08152F]'
          : 'border-[#D8E5F3] shadow-[0_20px_50px_-12px_rgba(40,102,181,0.16),0_4px_18px_rgba(23,43,70,0.06)] bg-[#E8F1FB]'
      }`}
    >
      
      {/* Background Hero Image with Atmospheric Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url('/assets/homepage/zenora-hero-japan.jpg')` }}
      >
        {darkMode ? (
          <>
            {/* Dark Mode: Midnight Ocean translucent overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#08152F] via-[#08152F]/70 via-42% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08152F]/70 via-transparent to-[#08152F]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_50%,rgba(36,86,166,0.20),transparent_55%)]" />
          </>
        ) : (
          <>
            {/* Light Mode: Balanced soft blue-tinted translucent gradient so Mt. Fuji & sakura remain vivid while Deep Blue text stays crisp */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#EAF1F9]/88 via-[#E7EFF9]/52 via-42% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F1F5FB]/45 via-transparent to-[#F8FAFE]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_50%,rgba(241,245,251,0.55),transparent_52%)]" />
          </>
        )}
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12 min-h-[460px] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Sparkle Welcome Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border text-xs font-bold tracking-wide transition-colors ${
                darkMode
                  ? 'bg-[#111F38]/85 border-[#263D60] text-[#F2F6FC] shadow-[0_0_15px_rgba(36,86,166,0.25)]'
                  : 'bg-[#FFFFFF]/85 border-[#D8E5F3] text-[#172B46] shadow-[0_4px_14px_rgba(40,102,181,0.10)]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 animate-pulse ${darkMode ? 'text-[#69C9DF]' : 'text-[#2866B5]'}`} />
              <span>Selamat datang kembali!</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1
                className={`text-3xl sm:text-4xl lg:text-5xl font-black font-['Manrope'] tracking-tight leading-[1.15] ${
                  darkMode ? 'text-[#F2F6FC]' : 'text-[#214F91]'
                }`}
              >
                Kuasai Bahasa Jepang
              </h1>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-black font-['Manrope'] tracking-tight leading-[1.15] text-transparent bg-clip-text ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#83B7EE] via-[#3978D6] to-[#69C9DF] drop-shadow-[0_4px_25px_rgba(36,86,166,0.4)]'
                    : 'bg-gradient-to-r from-[#2866B5] to-[#4389D4]'
                }`}
              >
                Lebih Mudah & Terstruktur
              </h2>
            </div>

            {/* Description Paragraph */}
            <p
              className={`text-sm sm:text-base leading-relaxed max-w-xl font-normal ${
                darkMode ? 'text-[#A9BBD3]' : 'text-[#526982]'
              }`}
            >
              Belajar dengan metode modern, materi terlengkap, dan latihan interaktif yang dirancang khusus untuk perjalanan belajar bahasa Jepangmu.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  sound.playClick();
                  onStartLearning();
                }}
                className={`px-6 py-3.5 rounded-2xl text-white font-black text-sm sm:text-base flex items-center gap-2.5 active:scale-95 cursor-pointer transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] shadow-[0_4px_20px_rgba(36,86,166,0.4)] hover:shadow-[0_6px_25px_rgba(57,120,214,0.6)] hover:brightness-110'
                    : 'bg-gradient-to-r from-[#2866B5] to-[#4389D4] shadow-[0_8px_22px_rgba(40,102,181,0.28)] hover:shadow-[0_10px_26px_rgba(40,102,181,0.38)] hover:brightness-105'
                }`}
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
                className={`px-5 py-3.5 rounded-2xl font-bold text-sm sm:text-base border backdrop-blur-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer ${
                  darkMode
                    ? 'bg-[#111F38]/85 hover:bg-[#172945] text-[#F2F6FC] border-[#263D60] hover:border-[#3978D6]/60 shadow-lg'
                    : 'bg-[#FFFFFF]/88 hover:bg-[#FFFFFF] text-[#172B46] border-[#D8E5F3] hover:border-[#2866B5]/50 shadow-[0_6px_18px_rgba(23,43,70,0.08)]'
                }`}
              >
                <BarChart2 className={`w-4 h-4 ${darkMode ? 'text-[#3978D6]' : 'text-[#2866B5]'}`} />
                <span>Lihat Progress</span>
              </button>
            </div>

          </div>

          {/* Right Column: Dual-Theme Luxury Glassmorphism Progress Belajar Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-[400px] rounded-[30px] p-5 sm:p-7 relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 group"
              style={
                darkMode
                  ? {
                      background: 'linear-gradient(145deg, rgba(57, 120, 214, 0.09) 0%, rgba(16, 36, 71, 0.14) 50%, rgba(8, 21, 47, 0.22) 100%)',
                      backdropFilter: 'blur(5px) saturate(140%)',
                      WebkitBackdropFilter: 'blur(5px) saturate(140%)',
                      border: '1.5px solid rgba(131, 183, 238, 0.62)',
                      boxShadow: '0 22px 50px -12px rgba(8, 21, 47, 0.65), 0 0 28px rgba(57, 120, 214, 0.30), inset 0 1px 1px rgba(220, 235, 250, 0.55), inset 0 -1px 1px rgba(105, 201, 223, 0.25)'
                    }
                  : {
                      background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.80) 0%, rgba(247, 249, 253, 0.74) 100%)',
                      backdropFilter: 'blur(14px) saturate(125%)',
                      WebkitBackdropFilter: 'blur(14px) saturate(125%)',
                      border: '1px solid rgba(220, 230, 242, 0.95)',
                      boxShadow: '0 18px 40px -12px rgba(33, 79, 145, 0.14), 0 4px 16px rgba(40, 102, 181, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
                    }
              }
            >
              {/* Subtle Japanese Seigaiha wave watermark only in Dark Mode; Light Mode stays clean & minimalist */}
              {darkMode && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.07]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='30' viewBox='0 0 60 30'%3E%3Cpath d='M0 30a30 30 0 0 1 60 0M10 30a20 20 0 0 1 40 0M20 30a10 10 0 0 1 20 0M-30 30a30 30 0 0 1 60 0M30 30a30 30 0 0 1 60 0' fill='none' stroke='%2383B7EE' stroke-width='1.2'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 30px'
                  }}
                />
              )}

              {/* Top & bottom specular glass edge highlights */}
              <div
                className={`absolute top-0 left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent to-transparent pointer-events-none ${
                  darkMode ? 'via-[#DCEBFA]/80' : 'via-white'
                }`}
              />
              <div
                className={`absolute bottom-0 left-10 right-10 h-[1.5px] bg-gradient-to-r from-transparent to-transparent pointer-events-none ${
                  darkMode ? 'via-[#69C9DF]/70' : 'via-[#4389D4]/45'
                }`}
              />

              {/* CARD HEADER */}
              <div className="relative z-10 flex items-center justify-between gap-2 mb-4 sm:mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  {/* Rising Chart Icon Container */}
                  <div 
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
                      darkMode
                        ? 'border-[#83B7EE]/45 shadow-[0_0_16px_rgba(105,201,223,0.3)]'
                        : 'border-[#2866B5]/25 shadow-[0_4px_12px_rgba(40,102,181,0.12)]'
                    }`}
                    style={{
                      background: darkMode
                        ? 'linear-gradient(135deg, rgba(57, 120, 214, 0.38) 0%, rgba(16, 36, 71, 0.55) 100%)'
                        : 'linear-gradient(135deg, rgba(40, 102, 181, 0.14) 0%, rgba(232, 241, 251, 0.85) 100%)',
                      backdropFilter: 'blur(8px)'
                    }}
                  >
                    <svg className={`w-5 h-5 ${darkMode ? 'text-[#69C9DF]' : 'text-[#2866B5]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                      <path d="M14 9h4v4" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className={`text-base sm:text-lg font-extrabold font-['Manrope'] tracking-tight leading-tight whitespace-nowrap ${
                      darkMode ? 'text-[#F2F6FC]' : 'text-[#172B46]'
                    }`}>
                      Progress Belajar
                    </h3>
                    <p className={`text-[11px] sm:text-xs font-normal truncate ${
                      darkMode ? 'text-[#DCEBFA]/80' : 'text-[#526982]'
                    }`}>
                      Terus belajar, capai tujuanmu!
                    </p>
                  </div>
                </div>

                {/* Progress Gain Badge */}
                <div 
                  className={`px-2.5 sm:px-3 py-1 rounded-full flex items-center gap-1 text-xs font-extrabold border shrink-0 ${
                    darkMode
                      ? 'text-[#69C9DF] border-[#69C9DF]/45 shadow-[0_0_14px_rgba(105,201,223,0.28)]'
                      : 'text-[#2866B5] border-[#2866B5]/25 shadow-[0_2px_10px_rgba(40,102,181,0.10)]'
                  }`}
                  style={{
                    background: darkMode
                      ? 'linear-gradient(135deg, rgba(36, 86, 166, 0.35) 0%, rgba(16, 36, 71, 0.55) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(232, 241, 251, 0.85) 100%)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <TrendingUp className={`w-3.5 h-3.5 ${darkMode ? 'text-[#45C6A5]' : 'text-[#1F9D7E]'}`} />
                  <span>+12%</span>
                </div>
              </div>

              {/* CIRCULAR PROGRESS GAUGE */}
              <div className="relative z-10 flex items-center justify-center my-2 py-1">
                <svg className="w-44 h-44 sm:w-48 sm:h-48 transform -rotate-90" viewBox="0 0 170 170">
                  <defs>
                    <linearGradient id="luxuryProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={darkMode ? '#69C9DF' : '#83B7EE'} />
                      <stop offset="50%" stopColor={darkMode ? '#3978D6' : '#4389D4'} />
                      <stop offset="100%" stopColor={darkMode ? '#2456A6' : '#2866B5'} />
                    </linearGradient>
                    <filter id="progressGlow" x="-25%" y="-25%" width="150%" height="150%">
                      <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation={darkMode ? '4' : '2.5'}
                        floodColor={darkMode ? '#69C9DF' : '#4389D4'}
                        floodOpacity={darkMode ? '0.65' : '0.35'}
                      />
                    </filter>
                  </defs>

                  {/* Track Circle */}
                  <circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke={darkMode ? '#08152F' : '#D8E5F3'}
                    strokeOpacity={darkMode ? '0.45' : '0.85'}
                    strokeWidth="11"
                    fill="transparent"
                  />

                  {/* Active Progress Circle */}
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
                    className="transition-all duration-700 ease-out"
                  />

                  {/* Glowing end-point dot positioned at the exact tip of the arc */}
                  {animatedPct > 0 && animatedPct < 100 && (
                    <circle
                      cx={tipX}
                      cy={tipY}
                      r="5"
                      fill={darkMode ? '#DCEBFA' : '#2866B5'}
                      filter="url(#progressGlow)"
                      className="transition-all duration-700 ease-out"
                    />
                  )}
                </svg>

                {/* Center Content: Percentage & Total Progress */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none">
                  <span
                    className={`text-4xl sm:text-5xl font-black font-['Manrope'] tracking-tight ${
                      darkMode
                        ? 'text-[#F2F6FC] drop-shadow-[0_4px_16px_rgba(8,21,47,0.95)]'
                        : 'text-[#172B46]'
                    }`}
                  >
                    {animatedPct}%
                  </span>
                  <span className={`text-xs font-semibold tracking-wide mt-1 ${
                    darkMode ? 'text-[#DCEBFA]/85' : 'text-[#526982]'
                  }`}>
                    Total Progress
                  </span>
                </div>
              </div>

              {/* STREAK BELAJAR SUB-CARD */}
              <div 
                className={`relative z-10 mt-3 p-3.5 rounded-[22px] flex items-center justify-between border ${
                  darkMode
                    ? 'border-[#83B7EE]/45 shadow-[0_10px_24px_rgba(8,21,47,0.45),inset_0_1px_1px_rgba(220,235,250,0.32)]'
                    : 'border-[#D8E5F3] shadow-[0_8px_20px_rgba(23,43,70,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)]'
                }`}
                style={{
                  background: darkMode
                    ? 'linear-gradient(135deg, rgba(36, 86, 166, 0.14) 0%, rgba(16, 36, 71, 0.24) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(232, 241, 251, 0.78) 100%)',
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)'
                }}
              >
                {/* Left Side: Fire Icon + Days + Label */}
                <div className="flex items-center gap-3 shrink-0">
                  <div 
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border shrink-0 ${
                      darkMode
                        ? 'border-[#E9BD72]/60 shadow-[0_0_16px_rgba(233,189,114,0.4)]'
                        : 'border-[#E9BD72]/70 shadow-[0_4px_12px_rgba(233,189,114,0.22)]'
                    }`}
                    style={{
                      background: darkMode
                        ? 'radial-gradient(circle, rgba(233, 189, 114, 0.28) 0%, rgba(16, 36, 71, 0.45) 100%)'
                        : 'radial-gradient(circle, rgba(233, 189, 114, 0.26) 0%, rgba(255, 255, 255, 0.9) 100%)'
                    }}
                  >
                    <Flame className="w-5 h-5 fill-[#E9BD72] text-[#E9BD72]" />
                  </div>

                  <div>
                    <span className={`block text-base sm:text-lg font-black font-['Manrope'] leading-tight whitespace-nowrap ${
                      darkMode ? 'text-[#F2F6FC]' : 'text-[#172B46]'
                    }`}>
                      {displayStreak} Hari
                    </span>
                    <span className={`text-[9px] sm:text-[10px] font-bold tracking-wider uppercase whitespace-nowrap ${
                      darkMode ? 'text-[#DCEBFA]/80' : 'text-[#526982]'
                    }`}>
                      STREAK BELAJAR
                    </span>
                  </div>
                </div>

                {/* Vertical Subtle Divider */}
                <div
                  className={`h-9 w-[1px] bg-gradient-to-b from-transparent to-transparent mx-2 shrink-0 ${
                    darkMode ? 'via-[#83B7EE]/35' : 'via-[#D8E5F3]'
                  }`}
                />

                {/* Right Side: Minimalist Wave Sparkline */}
                <div className="w-24 sm:w-28 h-9 flex items-center pr-1">
                  <svg viewBox="0 0 110 32" className="w-full h-full overflow-visible">
                    <defs>
                      <linearGradient id="sparklineWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={darkMode ? '#2456A6' : '#83B7EE'} />
                        <stop offset="60%" stopColor={darkMode ? '#3978D6' : '#4389D4'} />
                        <stop offset="100%" stopColor={darkMode ? '#69C9DF' : '#2866B5'} />
                      </linearGradient>
                      <linearGradient id="sparklineAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor={darkMode ? '#69C9DF' : '#4389D4'} stopOpacity="0.28" />
                        <stop offset="100%" stopColor={darkMode ? '#08152F' : '#F1F6FC'} stopOpacity="0" />
                      </linearGradient>
                      <filter id="sparklineGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow
                          dx="0"
                          dy="0"
                          stdDeviation={darkMode ? '2.5' : '1.5'}
                          floodColor={darkMode ? '#69C9DF' : '#2866B5'}
                          floodOpacity={darkMode ? '0.85' : '0.35'}
                        />
                      </filter>
                    </defs>
                    <path
                      d="M2 24 C 20 25, 30 18, 48 18 C 65 18, 75 25, 92 18 C 98 15, 104 10, 108 8 L 108 30 L 2 30 Z"
                      fill="url(#sparklineAreaGrad)"
                    />
                    <path
                      d="M2 24 C 20 25, 30 18, 48 18 C 65 18, 75 25, 92 18 C 98 15, 104 10, 108 8"
                      fill="none"
                      stroke="url(#sparklineWaveGrad)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      filter="url(#sparklineGlow)"
                    />
                    <circle cx="108" cy="8" r="3.5" fill={darkMode ? '#DCEBFA' : '#2866B5'} filter="url(#sparklineGlow)" />
                    <circle cx="108" cy="8" r="6" fill={darkMode ? '#69C9DF' : '#4389D4'} opacity="0.35" className="animate-ping" />
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
