import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  PenTool,
  Award,
  Search,
  Volume2,
  VolumeX,
  Languages,
  Database,
  Cloud,
  LogOut,
  Flame,
  ChevronDown
} from 'lucide-react';
import { sound } from '../utils/audio';
import type { User } from '@supabase/supabase-js';

interface NavbarProps {
  activeTab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'latihan';
  setActiveTab: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'latihan') => void;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  onOpenSearch: () => void;
  learnedKotobaCount: number;
  learnedKanjiCount: number;
  streakDays: number;
  user: User | null;
  onOpenAuth: () => void;
  onSignOut: () => void;
  isSyncing?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  soundEnabled,
  setSoundEnabled,
  onOpenSearch,
  streakDays,
  user,
  onOpenAuth,
  onSignOut,
  isSyncing = false,
}) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleNav = (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'latihan') => {
    if (soundEnabled) sound.playClick();
    setActiveTab(tab);
  };

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: Sparkles },
    { id: 'kana', label: 'Kana', icon: Languages },
    { id: 'kotoba', label: 'Materi 1–50', icon: BookOpen },
    { id: 'kanji', label: 'Kanji', icon: PenTool },
    { id: 'latihan', label: 'Latihan', icon: Award },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0C1B33]/90 backdrop-blur-xl border-b border-[#8FB4E3]/20 shadow-[0_4px_30px_rgba(12,27,51,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Top Header Row */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* 1. BRAND & LOGO (LEFT) */}
          <div
            onClick={() => handleNav('beranda')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-[#8FB4E3]/15 blur-md group-hover:bg-[#8FB4E3]/25 transition-all"></div>
              <img
                src="/zenora-icon.png"
                alt="ZENORA"
                className="relative w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_2px_8px_rgba(143,180,227,0.35)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tight font-['Manrope'] bg-gradient-to-r from-[#EEF1F6] via-[#EEF1F6] to-[#8FB4E3] bg-clip-text text-transparent">
                  ZENORA
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wider bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/30">
                  日本語
                </span>
              </div>
              <span className="hidden sm:block text-[11px] text-[#8793A8] font-medium tracking-wide">
                Nihongo Mastery Platform
              </span>
            </div>
          </div>

          {/* 2. MINIMALIST CENTER NAVIGATION (DESKTOP) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 bg-[#16294A]/80 rounded-2xl border border-[#8FB4E3]/20 shadow-inner">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] shadow-[0_2px_12px_rgba(143,180,227,0.25)] border border-[#8FB4E3]/40'
                      : 'text-[#8793A8] hover:text-[#EEF1F6] hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#8FB4E3]' : 'text-[#8793A8]'}`} />
                  <span>{item.label}</span>
                  {item.id === 'latihan' && (
                    <span className="hidden xl:inline-block text-[9px] font-black px-1.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                      JLPT/JFT
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. RIGHT ACTIONS (SEARCH, SOUND, CLOUD SYNC) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">

            {/* Streak Counter Badge (Desktop) */}
            {streakDays > 0 && (
              <div 
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#16294A] border border-amber-400/25 text-amber-300 text-xs font-bold"
                title={`${streakDays} Hari Belajar Berturut-turut`}
              >
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{streakDays}</span>
              </div>
            )}

            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/20 hover:border-[#8FB4E3]/40 transition-all text-xs font-semibold shadow-xs group"
              title="Cari Kosakata, Kanji, atau Materi (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-[#8FB4E3] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs text-[#8793A8] group-hover:text-[#EEF1F6]">Cari</span>
              <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono bg-[#0C1B33] text-[#8FB4E3] px-1.5 py-0.5 rounded border border-[#8FB4E3]/20">
                ⌘K
              </kbd>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) sound.playClick();
              }}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled
                  ? 'bg-[#16294A] text-[#8FB4E3] border-[#8FB4E3]/30 hover:bg-[#1F3760] shadow-xs'
                  : 'bg-[#16294A]/60 text-[#8793A8] border-white/10 hover:bg-[#16294A]'
              }`}
              title={soundEnabled ? 'Audio Suara: Aktif' : 'Audio Suara: Hening'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Cloud Sync & Account State */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] border border-[#8FB4E3]/35 text-xs font-bold transition-all shadow-[0_2px_12px_rgba(143,180,227,0.2)]"
                  >
                    <div className="relative">
                      <Cloud className={`w-3.5 h-3.5 text-[#8FB4E3] ${isSyncing ? 'animate-pulse' : ''}`} />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="max-w-[80px] sm:max-w-[120px] truncate text-xs">
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#8793A8]" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/30 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 text-left">
                      <div className="px-3.5 py-2.5 border-b border-white/10 mb-1">
                        <span className="text-[10px] text-[#8FB4E3] font-bold block uppercase tracking-wider font-mono">
                          Tersinkronisasi ke Cloud
                        </span>
                        <span className="text-xs font-bold text-[#EEF1F6] block truncate mt-0.5">
                          {user.email}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onOpenAuth();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#EEF1F6] hover:bg-[#1F3760] transition-colors"
                      >
                        <Database className="w-4 h-4 text-[#8FB4E3]" />
                        <span>Kelola Database & Cloud</span>
                      </button>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onSignOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:text-rose-200 hover:bg-rose-500/15 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Keluar Akun</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:from-[#274474] hover:to-[#365c9c] text-[#EEF1F6] border border-[#8FB4E3]/40 text-xs font-bold shadow-[0_2px_14px_rgba(143,180,227,0.2)] transition-all active:scale-95 group"
                  title="Masuk / Hubungkan Cloud Supabase"
                >
                  <Cloud className="w-4 h-4 text-[#8FB4E3] group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">Sinkron Cloud</span>
                  <span className="sm:hidden text-xs">Sync</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* 4. MOBILE / TABLET NAVIGATION BAR (SHOWN ON SCREENS < 1024px) */}
        <div className="flex lg:hidden items-center justify-around py-2.5 border-t border-white/10 gap-1 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/35 shadow-xs'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#8FB4E3]' : ''}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
