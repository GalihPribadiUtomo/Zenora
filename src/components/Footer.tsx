import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[#E9E2F0] bg-white py-8 px-4 text-center mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77738A] font-medium">
        <div className="flex items-center gap-3">
          <img
            src="/zenora-icon.png"
            alt="ZENORA Icon"
            className="w-7 h-7 object-contain drop-shadow-2xs"
          />
          <span className="font-extrabold text-[#29264B] font-['Manrope'] tracking-wider text-sm">ZENORA</span>
          <span className="text-[#77738A] hidden sm:inline">— Learn • Practice • Master (Minna no Nihongo & Kanji)</span>
        </div>

      </div>
    </footer>
  );
};