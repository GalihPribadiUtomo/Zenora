import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';

export const MotivationalChibiCard: React.FC = () => {
  return (
    <div className="relative rounded-3xl p-4 bg-gradient-to-r from-[#0D1238] via-[#12194A] to-[#171D50] border border-[#7857FF]/30 shadow-[0_10px_30px_rgba(8,13,43,0.7)] overflow-hidden text-left flex items-center justify-between group">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF70C8]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Left Message */}
      <div className="space-y-1.5 pr-2 z-10">
        <div className="flex items-center gap-1.5 text-[#FFC857]">
          <Trophy className="w-4 h-4 fill-[#FFC857]" />
          <span className="text-[10px] font-black uppercase tracking-wider text-[#FFC857]">
            Semangat Belajar!
          </span>
        </div>
        
        <p className="text-xs sm:text-sm font-black text-white leading-snug font-['Manrope']">
          Terus pertahankan semangat belajarmu!
        </p>

        <p className="text-[11px] text-[#AAB3D5] leading-tight">
          Konsistensi 15 menit sehari membawamu lolos JLPT.
        </p>
      </div>

      {/* Right: Anime Chibi Student Illustration */}
      <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#7857FF]/40 to-[#FF70C8]/40 blur-md group-hover:blur-lg transition-all" />
        <img
          src="/assets/homepage/zenora-motivation.jpg"
          alt="Zenora Chibi Student"
          className="relative w-full h-full object-cover rounded-2xl border border-[#7857FF]/40 shadow-[0_0_15px_rgba(120,87,255,0.4)] group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -top-1 -right-1 text-[#FF70C8] animate-bounce">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

    </div>
  );
};
