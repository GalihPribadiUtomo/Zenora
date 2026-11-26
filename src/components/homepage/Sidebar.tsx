import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Briefcase, 
  Play, 
  BarChart3, 
  User as UserIcon, 
  Moon,
  Sun,
  Monitor,
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
import { ThemePreference } from '../../utils/themeService';

export type MainAppTab = 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik' | 'profil' | 'admin';

interface SidebarProps {
  activeTab: string;
  onNavigateTab: (tab: MainAppTab) => void;
  onOpenAuth: () => void;
  user: any;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
  themePreference?: ThemePreference;
  onChangeThemePreference?: (pref: ThemePreference) => void;
  isAdminMode?: boolean;
  isGuest?: boolean;
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
  themePreference = darkMode ? 'dark' : 'light',
  onChangeThemePreference,
  isAdminMode = false,
  isGuest = false,
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

  const activeNavClass = darkMode
    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_8px_20px_-4px_rgba(36,86,166,0.45)]'
    : 'bg-gradient-to-r from-[#2866B5] to-[#4389D4] text-white shadow-[0_8px_18px_-4px_rgba(40,102,181,0.35)]';
  const inactiveNavClass = darkMode
    ? 'text-[var(--sidebar-text)] hover:text-[#F2F6FC] hover:bg-[#111F38]'
    : 'text-[var(--sidebar-text)] hover:text-[#172B46] hover:bg-[#DCE7F6]/70';
  const activeSubNavClass = darkMode
    ? 'bg-gradient-to-r from-[#2456A6]/30 to-[#3978D6]/30 text-white border border-[#3978D6]/50'
    : 'bg-[#2866B5]/12 text-[#214F91] border border-[#2866B5]/30';
  const inactiveSubNavClass = darkMode
    ? 'text-[var(--sidebar-text)] hover:text-[#F2F6FC] hover:bg-[#111F38]'
    : 'text-[var(--sidebar-text)] hover:text-[#172B46] hover:bg-[#DCE7F6]/60';

  return (
    <aside className="w-60 xl:w-64 shrink-0 h-screen sticky top-0 flex flex-col justify-between bg-[var(--bg-sidebar)] border-r border-[var(--border-subtle)] p-4 z-40 select-none overflow-y-auto transition-colors duration-200">
      
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
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2456A6] via-[#3978D6] to-[#69C9DF] p-0.5 shadow-[0_0_20px_rgba(36,86,166,0.35)] group-hover:scale-105 transition-transform flex items-center justify-center">
            <span className="text-[var(--text-primary)] font-black text-xl">
              Z
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-[var(--text-primary)] font-['Manrope']">
                ZENORA
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[var(--bg-elevated)] text-[var(--primary)] border border-[var(--border)]">
                日本語
              </span>
            </div>
            <span className="text-[10px] text-[var(--text-muted)] font-medium tracking-tight">
              {darkMode ? 'Midnight Ocean Edition' : 'Luxury Arctic Blue'}
            </span>
          </div>
        </div>

        {/* Admin Mode Active Badge & Exit Switcher */}
        {isAdminMode && (
          <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#2456A6]/20 via-[#102447] to-[#3978D6]/20 border border-[#3978D6]/40 shadow-[0_0_20px_rgba(36,86,166,0.25)] flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#45C6A5] animate-pulse" />
              <span className="text-xs font-black tracking-wider text-[var(--text-primary)] font-['Manrope']">
                MODE ADMIN
              </span>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                if (onExitAdminMode) onExitAdminMode();
              }}
              className="text-[10px] font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
              title="Keluar dari sesi Admin dan kembali ke Mode Siswa"
            >
              <LogOut className="w-3 h-3 text-[var(--secondary-accent)]" />
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
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isBeranda ? activeNavClass : inactiveNavClass
            }`}
          >
            <Home className={`w-[18px] h-[18px] shrink-0 transition-transform group-hover:scale-105 ${isBeranda ? 'text-white' : 'text-[var(--primary)]'}`} />
            <span>Beranda</span>
          </button>

          {/* 2. Materi (Accordion / Submenu) */}
          <div>
            <div
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
                isMateri ? activeNavClass : inactiveNavClass
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
              <div className="flex items-center gap-3">
                <BookOpen className={`w-[18px] h-[18px] shrink-0 transition-transform group-hover:scale-105 ${isMateri ? 'text-white' : 'text-[var(--primary)]'}`} />
                <span>Materi</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${materiExpanded ? 'rotate-180' : ''}`} />
            </div>

            {/* Sub-menu Materi with Midnight Ocean Styling */}
            {materiExpanded && (
              <div className="pl-3.5 pr-1 py-1 space-y-1 mt-1 border-l-2 border-[var(--border-subtle)] ml-4 animate-fade-in">
                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kotoba');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'kotoba' ? activeSubNavClass : inactiveSubNavClass
                  }`}
                >
                  <BookMarked className={`w-4 h-4 shrink-0 ${activeTab === 'kotoba' ? (darkMode ? 'text-white' : 'text-[#2866B5]') : 'text-[var(--primary)]'}`} />
                  <span>Bab 1–50 (Minna)</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kana');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'kana' ? activeSubNavClass : inactiveSubNavClass
                  }`}
                >
                  <Languages className={`w-4 h-4 shrink-0 ${activeTab === 'kana' ? (darkMode ? 'text-white' : 'text-[#2866B5]') : 'text-[var(--primary)]'}`} />
                  <span>Hiragana & Katakana</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigateTab('kanji');
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'kanji' ? activeSubNavClass : inactiveSubNavClass
                  }`}
                >
                  <PenTool className={`w-4 h-4 shrink-0 ${activeTab === 'kanji' ? (darkMode ? 'text-white' : 'text-[#2866B5]') : 'text-[var(--primary)]'}`} />
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
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isSsw ? activeNavClass : inactiveNavClass
            }`}
          >
            <div className="flex items-center gap-3">
              <Briefcase className={`w-[18px] h-[18px] shrink-0 transition-transform group-hover:scale-105 ${isSsw ? 'text-white' : 'text-[var(--primary)]'}`} />
              <span>SSW</span>
            </div>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide transition-all ${
              isSsw 
                ? 'bg-white/20 text-white border border-white/30' 
                : 'bg-[var(--primary)]/12 text-[var(--primary)] border border-[var(--primary)]/30'
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
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isLatihan ? activeNavClass : inactiveNavClass
            }`}
          >
            <Play className={`w-[18px] h-[18px] shrink-0 transition-transform group-hover:scale-105 ${isLatihan ? 'text-white' : 'text-[var(--primary)]'}`} />
            <span>Latihan</span>
          </button>

          {/* 5. Analitik */}
          <button
            onClick={() => {
              sound.playClick();
              onNavigateTab('analitik');
            }}
            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 group cursor-pointer ${
              isAnalitik ? activeNavClass : inactiveNavClass
            }`}
          >
            <BarChart3 className={`w-[18px] h-[18px] shrink-0 transition-transform group-hover:scale-105 ${isAnalitik ? 'text-white' : 'text-[var(--primary)]'}`} />
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
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
            }`}
          >
            <UserIcon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isProfil ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
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
                  : 'text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border)] hover:border-[#3978D6]/70'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <ShieldCheck className={`w-5 h-5 transition-transform group-hover:scale-110 ${isAdmin ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
                <span>Admin & CMS</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#2456A6]/40 text-[var(--text-primary)] border border-[#3978D6]/50 shadow-xs">
                PRO
              </span>
            </button>
          )}

        </nav>
      </div>

      {/* Bottom Section: Japanese Torii Atmosphere & Dark Mode Toggle */}
      <div className="space-y-4 pt-4 border-t border-[var(--border)]">
        
        {/* Japanese Atmospheric Graphic Mini Card */}
        <div className="relative rounded-2xl overflow-hidden p-3.5 border border-[var(--border)] bg-gradient-to-b from-[var(--bg-surface)]/90 to-[var(--bg-sidebar)] shadow-inner group">
          <div className="absolute inset-0 opacity-25 group-hover:opacity-40 transition-opacity bg-cover bg-center"
               style={{ backgroundImage: `url('/assets/homepage/zenora-jlpt.jpg')` }} />
          <div className="relative z-10">
            <div className="flex items-center gap-1.5 text-[var(--soft-sky)] text-xs font-bold mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#3978D6]" />
              <span>Jepang Menantimu</span>
            </div>
            <p className="text-[11px] text-[var(--text-secondary)] leading-tight font-medium">
              Tetap konsisten berlatih setiap hari menuju impianmu!
            </p>
          </div>
        </div>

        {/* Discrete Portal Administrator for Teachers/Staff (Hidden for Guest mode) */}
        {!isAdminMode && !isGuest && (
          <button
            onClick={() => {
              sound.playClick();
              if (onOpenAdminAuth) onOpenAdminAuth();
            }}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-[11px] font-semibold text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border)] transition-all group cursor-pointer"
            title="Masuk sebagai Administrator atau Instruktur"
          >
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[#3978D6] transition-colors" />
              <span>Portal Staf & Admin</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
          </button>
        )}

        {/* Theme Mode Switcher (Gelap / Terang / Ikuti Sistem) */}
        <div className="p-2 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] space-y-2">
          <div className="flex items-center justify-between px-1 text-[11px] font-bold text-[var(--text-secondary)]">
            <div className="flex items-center gap-1.5">
              {darkMode ? (
                <Moon className="w-3.5 h-3.5 text-[var(--primary)]" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-[var(--primary)]" />
              )}
              <span>Tema Tampilan</span>
            </div>
            <span className="text-[10px] font-semibold text-[var(--text-muted)]">
              {themePreference === 'system' ? 'Sistem' : darkMode ? 'Gelap' : 'Terang'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)]">
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                if (onChangeThemePreference) onChangeThemePreference('light');
                else if (darkMode && onToggleDarkMode) onToggleDarkMode();
              }}
              className={`flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                themePreference === 'light'
                  ? 'bg-gradient-to-r from-[#2866B5] to-[#4389D4] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              title="Mode Terang (Luxury Arctic Blue)"
            >
              <Sun className="w-3 h-3" />
              <span>Terang</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                if (onChangeThemePreference) onChangeThemePreference('dark');
                else if (!darkMode && onToggleDarkMode) onToggleDarkMode();
              }}
              className={`flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                themePreference === 'dark'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              title="Mode Gelap (Luxury Midnight Ocean Blue)"
            >
              <Moon className="w-3 h-3" />
              <span>Gelap</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                if (onChangeThemePreference) onChangeThemePreference('system');
              }}
              className={`flex items-center justify-center gap-1 py-1.5 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                themePreference === 'system'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-sm'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              title="Ikuti Preferensi Sistem Perangkat"
            >
              <Monitor className="w-3 h-3" />
              <span>Sistem</span>
            </button>
          </div>
        </div>

      </div>

    </aside>
  );
};
