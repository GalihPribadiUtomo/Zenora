import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';

export const MotivationalChibiCard: React.FC = () => {
  return (
    <div className="relative rounded-3xl p-4 bg-gradient-to-r from-[var(--bg-surface)] via-[var(--bg-elevated)] to-[var(--bg-elevated)] border border-[var(--border)] shadow-[0_10px_30px_rgba(8,21,47,0.7)] overflow-hidden text-left flex items-center justify-between group">
      
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#69C9DF]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Left Message */}
      <div className="space-y-1.5 pr-2 z-10">
        <div className="flex items-center gap-1.5 text-[#E9BD72]">
          <Trophy className="w-4 h-4 fill-[#E9BD72]" />
          <span className="text-[10px] font-black uppercase tracking-wider text-[#E9BD72]">
            Semangat Belajar!
          </span>
        </div>
        
        <p className="text-xs sm:text-sm font-black text-[var(--text-primary)] leading-snug font-['Manrope']">
          Terus pertahankan semangat belajarmu!
        </p>

        <p className="text-[11px] text-[var(--text-secondary)] leading-tight">
          Konsistensi 15 menit sehari membawamu lolos JLPT.
        </p>
      </div>

      {/* Right: Anime Chibi Student Illustration */}
      <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#2456A6]/40 to-[#69C9DF]/30 blur-md group-hover:blur-lg transition-all" />
        <img
          src="/assets/homepage/zenora-motivation.jpg"
          alt="Zenora Chibi Student"
          className="relative w-full h-full object-cover rounded-2xl border border-[#3978D6]/40 shadow-[0_0_15px_rgba(36,86,166,0.4)] group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -top-1 -right-1 text-[var(--secondary-accent)] animate-bounce">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
      </div>

    </div>
  );
};
