import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Briefcase, 
  Play, 
  BarChart3, 
  User as UserIcon, 
  Moon,
  Sparkles,
  ChevronDown,
  Languages,
  PenTool,
  BookMarked
} from 'lucide-react';
import { sound } from '../../utils/audio';

export type MainAppTab = 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik' | 'profil';

interface SidebarProps {
  activeTab: string;
  onNavigateTab: (tab: MainAppTab) => void;
  onOpenAuth: () => void;
  user: any;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onNavigateTab,
  onOpenAuth,
  user,
  darkMode = true,
  onToggleDarkMode
}) => {
  const isBeranda = activeTab === 'beranda';
  const isMateri = activeTab === 'kotoba' || activeTab === 'kana' || activeTab === 'kanji';
  const isSsw = activeTab === 'ssw';
  const isLatihan = activeTab === 'latihan';
  const isAnalitik = activeTab === 'analitik';
  const isProfil = activeTab === 'profil';

  const [materiExpanded, setMateriExpanded] = useState(isMateri);

  return (
    <aside className="w-60 xl:w-64 shrink-0 h-screen sticky top-0 flex flex-col justify-between bg-[#080D2B] border-r border-[#7857FF]/15 p-4 z-40 select-none overflow-y-auto">
      
      {/* Top Section: Logo & Nav items */}
      <div className="space-y-6">
        
        {/* Brand Logo */}
        <div 
          onClick={() => {
            sound.playClick();
            onNavigateTab('beranda');
          }}
          className="flex items-center gap-3 px-2 py-2 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7857FF] via-[#945CFF] to-[#329BFF] p-0.5 shadow-[0_0_20px_rgba(120,87,255,0.4)] group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="text-white font-black text-xl">
              Z
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-white font-['Manrope']">
                ZENORA
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#171D50] text-[#AAB3D5] border border-[#7857FF]/20">
                日本語
              </span>
            </div>
            <span className="text-[10px] text-[#737FA8] font-medium tracking-tight">
              Midnight Japan Edition
            </span>
          </div>
        </div>

        {/* Navigation Menu - Unified Purple & Electric Blue Theme */}
        <nav className="space-y-1.5 pt-1">
          
          {/* 1. Beranda */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('beranda');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group ${
              isBeranda 
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]' 
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
            }`}
          >
            <Home className={`w-5 h-5 transition-transform group-hover:scale-110 ${isBeranda ? 'text-white' : 'text-[#7857FF]'}`} />
            <span>Beranda</span>
          </button>

          {/* 2. Materi (Accordion / Submenu) */}
          <div>
            <div
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
                isMateri 
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]' 
                  : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
              }`}
              onClick={() => {
                sound.playClick();
                if (!isMateri) {
                  onNavigateTab('kotoba');
                  setMateriExpanded(true);
                } else {
                  setMateriExpanded(!materiExpanded);
                }
              }}
            >
              <div className="flex items-center gap-3.5">
                <BookOpen className={`w-5 h-5 transition-transform group-hover:scale-110 ${isMateri ? 'text-white' : 'text-[#7857FF]'}`} />
                <span>Materi</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${materiExpanded ? 'rotate-180' : ''}`} />
            </div>

            {/* Sub-menu Materi with Unified Styling */}
            {materiExpanded && (
              <div className="pl-4 pr-1 py-1 space-y-1 mt-1 border-l-2 border-[#7857FF]/30 ml-4 animate-fade-in">
                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kotoba');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'kotoba' 
                      ? 'bg-gradient-to-r from-[#7857FF]/30 to-[#945CFF]/30 text-white border border-[#7857FF]/50 shadow-[0_0_12px_rgba(120,87,255,0.25)]' 
                      : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/50'
                  }`}
                >
                  <BookMarked className={`w-4 h-4 ${activeTab === 'kotoba' ? 'text-white' : 'text-[#7857FF]'}`} />
                  <span>Bab 1–50 (Minna)</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kana');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'kana' 
                      ? 'bg-gradient-to-r from-[#7857FF]/30 to-[#945CFF]/30 text-white border border-[#7857FF]/50 shadow-[0_0_12px_rgba(120,87,255,0.25)]' 
                      : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/50'
                  }`}
                >
                  <Languages className={`w-4 h-4 ${activeTab === 'kana' ? 'text-white' : 'text-[#7857FF]'}`} />
                  <span>Hiragana & Katakana</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kanji');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'kanji' 
                      ? 'bg-gradient-to-r from-[#7857FF]/30 to-[#945CFF]/30 text-white border border-[#7857FF]/50 shadow-[0_0_12px_rgba(120,87,255,0.25)]' 
                      : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/50'
                  }`}
                >
                  <PenTool className={`w-4 h-4 ${activeTab === 'kanji' ? 'text-white' : 'text-[#7857FF]'}`} />
                  <span>Kanji N5 & N4 (424)</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. SSW with Matching Unified Purple Badge */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('ssw');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group ${
              isSsw 
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]' 
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <Briefcase className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSsw ? 'text-white' : 'text-[#7857FF]'}`} />
              <span>SSW</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide transition-all ${
              isSsw 
                ? 'bg-white/20 text-white border border-white/30' 
                : 'bg-[#7857FF]/20 text-[#B46BFF] border border-[#7857FF]/40 shadow-[0_0_10px_rgba(120,87,255,0.25)]'
            }`}>
              Tokutei!
            </span>
          </button>

          {/* 4. Latihan */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('latihan');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group ${
              isLatihan 
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]' 
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
            }`}
          >
            <Play className={`w-5 h-5 transition-transform group-hover:scale-110 ${isLatihan ? 'text-white' : 'text-[#7857FF]'}`} />
            <span>Latihan</span>
          </button>

          {/* 5. Analitik */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('analitik');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group ${
              isAnalitik 
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]' 
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
            }`}
          >
            <BarChart3 className={`w-5 h-5 transition-transform group-hover:scale-110 ${isAnalitik ? 'text-white' : 'text-[#7857FF]'}`} />
            <span>Analitik</span>
          </button>

          {/* 6. Profil */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('profil');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group ${
              isProfil
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]'
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
            }`}
          >
            <UserIcon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isProfil ? 'text-white' : 'text-[#7857FF]'}`} />
            <span>{user ? (user.email?.split('@')[0] || 'Profil') : 'Profil'}</span>
          </button>

        </nav>
      </div>

      {/* Bottom Section: Japanese Torii Atmosphere & Dark Mode Toggle */}
      <div className="space-y-4 pt-4 border-t border-[#7857FF]/15">
        
        {/* Japanese Atmospheric Graphic Mini Card */}
        <div className="relative rounded-2xl overflow-hidden p-3.5 border border-[#7857FF]/25 bg-gradient-to-b from-[#12194A]/90 to-[#080D2B] shadow-inner group">
          <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity bg-cover bg-center"
               style={{ backgroundImage: `url('/assets/homepage/zenora-jlpt.jpg')` }} />
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 text-[#B46BFF] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#7857FF]" />
              <span>Jepang Menantimu</span>
            </div>
            <p className="text-[11px] text-[#AAB3D5] leading-tight font-medium">
              Tetap konsisten berlatih setiap hari menuju impianmu!
            </p>
          </div>
        </div>

        {/* Dark Mode Switch */}
        <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-[#AAB3D5]">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#7857FF]" />
            <span>Mode Gelap</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              if (onToggleDarkMode) onToggleDarkMode();
            }}
            className="relative w-11 h-6 rounded-full bg-[#12194A] border border-[#7857FF]/40 p-0.5 transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            <div 
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-[#7857FF] to-[#945CFF] shadow-[0_0_10px_rgba(120,87,255,0.6)] transform transition-transform duration-200 ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

      </div>

    </aside>
  );
};
