import React from 'react';
import { 
  Home, 
  BookOpen, 
  Briefcase, 
  Play, 
  BarChart3, 
  User as UserIcon, 
  Moon,
  Sparkles
} from 'lucide-react';
import { sound } from '../../utils/audio';

export type SidebarTab = 'beranda' | 'materi' | 'ssw' | 'latihan' | 'analitik' | 'profil';

interface SidebarProps {
  activeTab: string;
  onNavigateTab: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan') => void;
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

  return (
    <aside className="w-60 xl:w-64 shrink-0 h-screen sticky top-0 flex flex-col justify-between bg-[#080D2B] border-r border-[#7857FF]/15 p-4 z-40 select-none">
      
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
            <img 
              src="/zenora-icon.png" 
              alt="Zenora Icon" 
              className="w-full h-full object-contain rounded-2xl"
              onError={(e) => {
                // Fallback to text if icon not loaded
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-black text-xl pointer-events-none">
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

        {/* Navigation Menu */}
        <nav className="space-y-1.5 pt-2">
          
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

          {/* 2. Materi */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('kotoba');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group ${
              isMateri 
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white shadow-[0_0_25px_rgba(120,87,255,0.45)]' 
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70'
            }`}
          >
            <BookOpen className={`w-5 h-5 transition-transform group-hover:scale-110 ${isMateri ? 'text-white' : 'text-[#7857FF]'}`} />
            <span>Materi</span>
          </button>

          {/* 3. SSW with Tokutei Badge */}
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
              <Briefcase className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSsw ? 'text-white' : 'text-[#329BFF]'}`} />
              <span>SSW</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-[#00D6A3]/15 text-[#00D6A3] border border-[#00D6A3]/30 shadow-[0_0_10px_rgba(0,214,163,0.2)]">
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
              // Scroll to stats section on homepage or trigger analytics
              const statsEl = document.getElementById('learning-stats-section');
              if (statsEl) {
                statsEl.scrollIntoView({ behavior: 'smooth' });
              } else {
                onNavigateTab('latihan');
              }
            }}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70 transition-all duration-200 group"
          >
            <BarChart3 className="w-5 h-5 text-[#329BFF] transition-transform group-hover:scale-110" />
            <span>Analitik</span>
          </button>

          {/* 6. Profil */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenAuth();
            }}
            className="w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/70 transition-all duration-200 group"
          >
            <UserIcon className="w-5 h-5 text-[#FF70C8] transition-transform group-hover:scale-110" />
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
            <div className="flex items-center gap-1.5 text-[#FF70C8] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
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
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-[#7857FF] to-[#329BFF] shadow-[0_0_10px_rgba(120,87,255,0.6)] transform transition-transform duration-200 ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

      </div>

    </aside>
  );
};
