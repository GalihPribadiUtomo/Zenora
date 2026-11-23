import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const MidnightFooter: React.FC = () => {
  return (
    <footer className="w-full mt-10 pt-6 pb-8 border-t border-[#7857FF]/15 text-left text-xs text-[#737FA8]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand & Platform details */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#7857FF] to-[#329BFF] flex items-center justify-center text-white font-black text-xs shadow-[0_0_10px_rgba(120,87,255,0.4)]">
            Z
          </div>
          <div>
            <span className="font-black text-white font-['Manrope'] tracking-wide">
              ZENORA
            </span>
            <span className="mx-2 text-[#7857FF]">·</span>
            <span className="text-[#AAB3D5]">
              Midnight Japan Edition
            </span>
          </div>
        </div>

        {/* Kurikulum & Tech badges */}
        <div className="flex items-center gap-2 text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg-[#12194A] border border-[#7857FF]/20 text-[#AAB3D5] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#FF70C8]" />
            <span>Minna no Nihongo & JLPT N5–N4</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#12194A] border border-[#7857FF]/20 text-[#AAB3D5]">
            424 Kanji · 2.910 Kotoba
          </span>
        </div>

      </div>
    </footer>
  );
};
