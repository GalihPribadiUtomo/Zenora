import React from 'react';
import { Sparkles, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#7857FF]/15 bg-[#080D2B] backdrop-blur-md py-8 px-4 text-center mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737FA8] font-medium">
        <div className="flex items-center gap-3">
          <img
            src="/zenora-icon.png"
            alt="ZENORA Icon"
            className="w-7 h-7 object-contain drop-shadow-xs"
          />
          <div className="text-left">
            <span className="font-black text-[#F5F6FF] font-['Manrope'] tracking-wider text-sm block">ZENORA</span>
            <span className="text-[10px] text-[#7857FF] font-semibold">Midnight Navy & Biru Perak Edition</span>
          </div>
          <span className="text-[#737FA8] hidden lg:inline border-l border-[#7857FF]/20 pl-3 py-1">
            Platform Belajar Bahasa Jepang Modern • Kana 312 • Kotoba 2.910 • Kanji 424
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#0D1238] border border-[#7857FF]/25 text-[11px] font-bold text-[#7857FF] flex items-center gap-1.5 shadow-2xs">
            <Sparkles className="w-3 h-3 text-[#7857FF]" />
            <span>Interactive Learning</span>
          </span>
          <span className="px-2.5 py-1 rounded-full bg-[#12194A] border border-[#7857FF]/25 text-[11px] font-bold text-[#F5F6FF] flex items-center gap-1.5 shadow-2xs">
            <Compass className="w-3 h-3 text-[#7857FF]" />
            <span>Minna no Nihongo & JLPT N5–N4</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
