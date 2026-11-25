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
  BookMarked,
  ShieldCheck,
  Lock,
  ChevronRight,
  LogOut
} from 'lucide-react';
import { sound } from '../../utils/audio';

export type MainAppTab = 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik' | 'profil' | 'admin';

interface SidebarProps {
  activeTab: string;
  onNavigateTab: (tab: MainAppTab) => void;
  onOpenAuth: () => void;
  user: any;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  isAdminMode?: boolean;
  onOpenAdminAuth?: () => void;
  onExitAdminMode?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onNavigateTab,
  onOpenAuth,
  user,
  darkMode = true,
  onToggleDarkMode,
  isAdminMode = false,
  onOpenAdminAuth,
  onExitAdminMode
}) => {
  const isBeranda = activeTab === 'beranda';
  const isMateri = activeTab === 'kotoba' || activeTab === 'kana' || activeTab === 'kanji';
  const isSsw = activeTab === 'ssw';
  const isLatihan = activeTab === 'latihan';
  const isAnalitik = activeTab === 'analitik';
  const isProfil = activeTab === 'profil';
  const isAdmin = activeTab === 'admin';

  const [materiExpanded, setMateriExpanded] = useState(isMateri);

  return (
    <aside className="w-60 xl:w-64 shrink-0 h-screen sticky top-0 flex flex-col justify-between bg-[#08152F] border-r border-[#263D60] p-4 z-40 select-none overflow-y-auto">
      
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
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2456A6] via-[#3978D6] to-[#69C9DF] p-0.5 shadow-[0_0_20px_rgba(36,86,166,0.4)] group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="text-white font-black text-xl">
              Z
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-[#F2F6FC] font-['Manrope']">
                ZENORA
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#172945] text-[#83B7EE] border border-[#263D60]">
                日本語
              </span>
            </div>
            <span className="text-[10px] text-[#7186A5] font-medium tracking-tight">
              Midnight Ocean Edition
            </span>
          </div>
        </div>

        {/* Admin Mode Active Badge & Exit Switcher */}
        {isAdminMode && (
          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#2456A6]/20 via-[#102447] to-[#3978D6]/20 border border-[#3978D6]/40 shadow-[0_0_20px_rgba(36,86,166,0.25)] flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#45C6A5] animate-pulse" />
              <span className="text-xs font-black tracking-wider text-[#F2F6FC] font-['Manrope']">
                MODE ADMIN
              </span>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                if (onExitAdminMode) onExitAdminMode();
              }}
              className="text-[10px] font-bold text-[#A9BBD3] hover:text-[#F2F6FC] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
              title="Keluar dari sesi Admin dan kembali ke Mode Siswa"
            >
              <LogOut className="w-3 h-3 text-[#69C9DF]" />
              <span>Mode Siswa</span>
            </button>
          </div>
        )}

        {/* Navigation Menu - Luxury Midnight Ocean Theme */}
        <nav className="space-y-1.5 pt-1">
          
          {/* 1. Beranda */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('beranda');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isBeranda 
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)]' 
                : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
            }`}
          >
            <Home className={`w-5 h-5 transition-transform group-hover:scale-110 ${isBeranda ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>Beranda</span>
          </button>

          {/* 2. Materi (Accordion / Submenu) */}
          <div>
            <div
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
                isMateri 
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)]' 
                  : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
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
                <BookOpen className={`w-5 h-5 transition-transform group-hover:scale-110 ${isMateri ? 'text-white' : 'text-[#3978D6]'}`} />
                <span>Materi</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${materiExpanded ? 'rotate-180' : ''}`} />
            </div>

            {/* Sub-menu Materi with Midnight Ocean Styling */}
            {materiExpanded && (
              <div className="pl-4 pr-1 py-1 space-y-1 mt-1 border-l-2 border-[#263D60] ml-4 animate-fade-in">
                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kotoba');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'kotoba' 
                      ? 'bg-gradient-to-r from-[#2456A6]/30 to-[#3978D6]/30 text-white border border-[#3978D6]/50 shadow-[0_0_12px_rgba(36,86,166,0.25)]' 
                      : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
                  }`}
                >
                  <BookMarked className={`w-4 h-4 ${activeTab === 'kotoba' ? 'text-white' : 'text-[#3978D6]'}`} />
                  <span>Bab 1–50 (Minna)</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kana');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'kana' 
                      ? 'bg-gradient-to-r from-[#2456A6]/30 to-[#3978D6]/30 text-white border border-[#3978D6]/50 shadow-[0_0_12px_rgba(36,86,166,0.25)]' 
                      : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
                  }`}
                >
                  <Languages className={`w-4 h-4 ${activeTab === 'kana' ? 'text-white' : 'text-[#3978D6]'}`} />
                  <span>Hiragana & Katakana</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kanji');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'kanji' 
                      ? 'bg-gradient-to-r from-[#2456A6]/30 to-[#3978D6]/30 text-white border border-[#3978D6]/50 shadow-[0_0_12px_rgba(36,86,166,0.25)]' 
                      : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
                  }`}
                >
                  <PenTool className={`w-4 h-4 ${activeTab === 'kanji' ? 'text-white' : 'text-[#3978D6]'}`} />
                  <span>Kanji N5 & N4 (424)</span>
                </button>
              </div>
            )}
          </div>

          {/* 3. SSW with Midnight Ocean Badge */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('ssw');
            }}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isSsw 
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)]' 
                : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <Briefcase className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSsw ? 'text-white' : 'text-[#3978D6]'}`} />
              <span>SSW</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide transition-all ${
              isSsw 
                ? 'bg-white/20 text-white border border-white/30' 
                : 'bg-[#2456A6]/20 text-[#83B7EE] border border-[#3978D6]/40 shadow-[0_0_10px_rgba(36,86,166,0.25)]'
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
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isLatihan 
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)]' 
                : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
            }`}
          >
            <Play className={`w-5 h-5 transition-transform group-hover:scale-110 ${isLatihan ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>Latihan</span>
          </button>

          {/* 5. Analitik */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('analitik');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isAnalitik 
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)]' 
                : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
            }`}
          >
            <BarChart3 className={`w-5 h-5 transition-transform group-hover:scale-110 ${isAnalitik ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>Analitik</span>
          </button>

          {/* 6. Profil */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('profil');
            }}
            className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isProfil
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)]'
                : 'text-[#A9BBD3] hover:text-[#F2F6FC] hover:bg-[#111F38]'
            }`}
          >
            <UserIcon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isProfil ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>{user ? (user.email?.split('@')[0] || 'Profil') : 'Profil'}</span>
          </button>

          {/* 7. Admin & CMS Console (Tampil HANYA jika berada dalam Mode Admin) */}
          {isAdminMode && (
            <button
              onClick={() => {
                sound.playClick();
                onNavigateTab('admin');
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl font-bold text-sm transition-all duration-200 group animate-fade-in cursor-pointer ${
                isAdmin
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_25px_rgba(36,86,166,0.45)] ring-1 ring-[#3978D6]'
                  : 'text-[#F2F6FC] bg-[#111F38] border border-[#263D60] hover:border-[#3978D6]/70'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <ShieldCheck className={`w-5 h-5 transition-transform group-hover:scale-110 ${isAdmin ? 'text-white' : 'text-[#3978D6]'}`} />
                <span>Admin & CMS</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#2456A6]/40 text-[#F2F6FC] border border-[#3978D6]/50 shadow-xs">
                PRO
              </span>
            </button>
          )}

        </nav>
      </div>

      {/* Bottom Section: Japanese Torii Atmosphere & Dark Mode Toggle */}
      <div className="space-y-4 pt-4 border-t border-[#263D60]">
        
        {/* Japanese Atmospheric Graphic Mini Card */}
        <div className="relative rounded-2xl overflow-hidden p-3.5 border border-[#263D60] bg-gradient-to-b from-[#111F38]/90 to-[#08152F] shadow-inner group">
          <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity bg-cover bg-center"
               style={{ backgroundImage: `url('/assets/homepage/zenora-jlpt.jpg')` }} />
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 text-[#83B7EE] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#3978D6]" />
              <span>Jepang Menantimu</span>
            </div>
            <p className="text-[11px] text-[#A9BBD3] leading-tight font-medium">
              Tetap konsisten berlatih setiap hari menuju impianmu!
            </p>
          </div>
        </div>

        {/* Discrete Portal Administrator for Teachers/Staff */}
        {!isAdminMode && (
          <button
            onClick={() => {
              sound.playClick();
              if (onOpenAdminAuth) onOpenAdminAuth();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[11px] font-semibold text-[#7186A5] hover:text-[#A9BBD3] hover:bg-[#111F38] border border-transparent hover:border-[#263D60] transition-all group cursor-pointer"
            title="Masuk sebagai Administrator atau Instruktur"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[#7186A5] group-hover:text-[#3978D6] transition-colors" />
              <span>Portal Staf & Admin</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </button>
        )}

        {/* Dark Mode Switch */}
        <div className="flex items-center justify-between px-2 py-1 text-xs font-semibold text-[#A9BBD3]">
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-[#3978D6]" />
            <span>Mode Gelap</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              if (onToggleDarkMode) onToggleDarkMode();
            }}
            className="relative w-11 h-6 rounded-full bg-[#111F38] border border-[#263D60] p-0.5 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            <div 
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-[#2456A6] to-[#3978D6] shadow-[0_0_10px_rgba(36,86,166,0.6)] transform transition-transform duration-200 ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

      </div>

    </aside>
  );
};
