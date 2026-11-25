import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const MidnightFooter: React.FC = () => {
  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-[#263D60] text-left text-xs text-[#7186A5]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Platform details */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#2456A6] to-[#3978D6] flex items-center justify-center text-white font-black text-xs shadow-[0_0_10px_rgba(36,86,166,0.4)]">
            Z
          </div>
          <div>
            <span className="font-black text-[#F2F6FC] font-['Manrope'] tracking-wide">
              ZENORA
            </span>
            <span className="mx-2 text-[#3978D6]">·</span>
            <span className="text-[#A9BBD3]">
              Midnight Ocean Edition
            </span>
          </div>
        </div>

        {/* Kurikulum & Tech badges */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg-[#172945] border border-[#263D60] text-[#A9BBD3] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#69C9DF]" />
            <span>Minna no Nihongo & JLPT N5–N4</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#172945] border border-[#263D60] text-[#A9BBD3]">
            424 Kanji · 2.910 Kotoba
          </span>
        </div>

      </div>
    </footer>
  );
};
