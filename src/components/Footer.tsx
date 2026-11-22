import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#2457C5]/20 bg-[#080F20] backdrop-blur-md py-8 px-4 text-center mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B85B5] font-medium">
        <div className="flex items-center gap-3">
          <img
            src="/zenora-icon.png"
            alt="ZENORA Icon"
            className="w-7 h-7 object-contain drop-shadow-xs"
          />
          <div className="text-left">
            <span className="font-black text-white font-['Manrope'] tracking-wider text-sm block">ZENORA</span>
            <span className="text-[10px] text-[#55B9F5] font-semibold">Blue Sakura Future Edition</span>
          </div>
          <span className="text-[#6B85B5] hidden lg:inline border-l border-[#2457C5]/25 pl-3 py-1">
            Platform Belajar Bahasa Jepang Modern • Kana 312 • Kotoba 2.910 • Kanji 329
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-white/8 border border-[#2457C5]/25 text-[11px] font-bold text-[#55B9F5] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#55B9F5]" />
            <span>Interactive Learning</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#8975E8]/12 border border-[#2457C5]/25 text-[11px] font-bold text-[#C4B5FF] flex items-center gap-1.5">
            <Compass className="w-3 h-3 text-[#8975E8]" />
            <span>Minna no Nihongo & JLPT N5–N4</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
