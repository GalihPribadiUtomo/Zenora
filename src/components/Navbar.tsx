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
  Check
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
  user,
  onOpenAuth,
  onSignOut,
  isSyncing = false,
}) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const handleNav = (
    tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'latihan'
  ) => {
    if (soundEnabled) sound.playClick();
    setActiveTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-2 sm:pt-3 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-2xl sm:rounded-3xl bg-[#101C3D]/95 backdrop-blur-xl border border-[#2457C5]/30 shadow-[0_10px_35px_rgba(16,28,61,0.35)] transition-all">
        <div className="flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8 gap-4">

          {/* Logo & Brand: ZENORA */}
          <div
            onClick={() => handleNav('beranda')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            {/* Desktop Brand */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="relative">
                <img
                  src="/zenora-icon.png"
                  alt="ZENORA"
                  className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(85,185,245,0.4)] group-hover:scale-105 transition-transform"
                />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#55B9F5] ring-2 ring-[#101C3D] animate-pulse"></span>
              </div>
              <div>
                <span className="font-black text-2xl tracking-tight font-['Manrope'] bg-gradient-to-r from-white via-[#DCE9FF] to-[#55B9F5] bg-clip-text text-transparent block leading-tight">
                  ZENORA
                </span>
                <span className="text-[10px] text-[#55B9F5] font-bold font-mono tracking-widest block uppercase">
                  Blue Sakura Future
                </span>
              </div>
            </div>

            {/* Mobile Compact Brand */}
            <div className="flex sm:hidden items-center gap-2">
              <img
                src="/zenora-icon.png"
                alt="ZENORA"
                className="w-9 h-9 object-contain drop-shadow-[0_0_8px_rgba(85,185,245,0.4)]"
              />
              <span className="font-black text-lg tracking-tight font-['Manrope'] text-white">
                ZENORA
              </span>
            </div>
          </div>

          {/* Navigation Tabs - Floating Cyber-Zen Glass Bar */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 bg-[#0B142B]/80 rounded-2xl border border-[#2457C5]/30 shadow-inner">

            {/* Beranda */}
            <button
              onClick={() => handleNav('beranda')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'beranda'
                  ? 'bg-gradient-to-r from-[#2457C5] to-[#1A3A82] text-white shadow-[0_0_15px_rgba(85,185,245,0.35)] border border-[#55B9F5]/40'
                  : 'text-[#DCE9FF]/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'beranda' ? 'text-[#55B9F5]' : 'text-[#DCE9FF]/60'}`} />
              <span>Beranda</span>
            </button>

            {/* Aksara Kana */}
            <button
              onClick={() => handleNav('kana')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'kana'
                  ? 'bg-gradient-to-r from-[#2457C5] to-[#1A3A82] text-white shadow-[0_0_15px_rgba(85,185,245,0.35)] border border-[#55B9F5]/40'
                  : 'text-[#DCE9FF]/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <Languages className={`w-4 h-4 ${activeTab === 'kana' ? 'text-[#55B9F5]' : 'text-[#DCE9FF]/60'}`} />
              <span>Kana</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#55B9F5]/20 text-[#55B9F5] border border-[#55B9F5]/30">
                あ・ア
              </span>
            </button>

            {/* Materi Bab 1-50 (Tata Bahasa, Kaiwa, Kotoba, Kanji) */}
            <button
              onClick={() => handleNav('kotoba')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'kotoba'
                  ? 'bg-gradient-to-r from-[#2457C5] to-[#1A3A82] text-white shadow-[0_0_15px_rgba(85,185,245,0.35)] border border-[#55B9F5]/40'
                  : 'text-[#DCE9FF]/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <BookOpen className={`w-4 h-4 ${activeTab === 'kotoba' ? 'text-[#55B9F5]' : 'text-[#DCE9FF]/60'}`} />
              <span>Materi Bab 1–50</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#55B9F5]/20 text-[#55B9F5] border border-[#55B9F5]/30">
                Bunpou & Kaiwa
              </span>
            </button>

            {/* Kanji (N5 & N4) */}
            <button
              onClick={() => handleNav('kanji')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'kanji'
                  ? 'bg-gradient-to-r from-[#2457C5] to-[#1A3A82] text-white shadow-[0_0_15px_rgba(85,185,245,0.35)] border border-[#55B9F5]/40'
                  : 'text-[#DCE9FF]/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <PenTool className={`w-4 h-4 ${activeTab === 'kanji' ? 'text-[#55B9F5]' : 'text-[#DCE9FF]/60'}`} />
              <span>Kanji</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-[#8975E8]/25 text-[#DCE9FF] border border-[#8975E8]/40">
                N5–N4
              </span>
            </button>

            {/* Mode Latihan */}
            <button
              onClick={() => handleNav('latihan')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'latihan'
                  ? 'bg-gradient-to-r from-[#2457C5] to-[#1A3A82] text-white shadow-[0_0_15px_rgba(85,185,245,0.35)] border border-[#55B9F5]/40'
                  : 'text-[#DCE9FF]/75 hover:text-white hover:bg-white/5'
              }`}
            >
              <Award className={`w-4 h-4 ${activeTab === 'latihan' ? 'text-[#55B9F5]' : 'text-[#DCE9FF]/60'}`} />
              <span>Latihan</span>
              <span className="w-2 h-2 rounded-full bg-[#55B9F5] shadow-[0_0_8px_#55B9F5]"></span>
            </button>

          </nav>

          {/* Action Tools: Search, Audio, Database Auth */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Quick Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-[#DCE9FF] hover:text-white border border-white/15 transition-all text-xs font-semibold shadow-xs"
              title="Cari (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-[#55B9F5]" />
              <span className="hidden lg:inline text-xs">Cari</span>
              <kbd className="hidden sm:inline-flex items-center text-[10px] font-mono bg-white/10 text-[#DCE9FF] px-1.5 py-0.5 rounded border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Audio Pronunciation Mute/Unmute */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) sound.playClick();
              }}
              className={`p-2 rounded-xl border transition-all ${
                soundEnabled
                  ? 'bg-white/10 text-[#55B9F5] border-white/15 hover:bg-white/20'
                  : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10'
              }`}
              title={soundEnabled ? 'Suara Audio Aktif' : 'Suara Dimatikan'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Database & Cloud Sync Account Pill */}
            <div className="relative">
              {user ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#2457C5] to-[#163882] text-white border border-[#55B9F5]/40 text-xs font-bold transition-all shadow-[0_0_12px_rgba(85,185,245,0.3)]"
                  >
                    <Cloud className={`w-3.5 h-3.5 text-[#55B9F5] ${isSyncing ? 'animate-pulse' : ''}`} />
                    <span className="max-w-[80px] sm:max-w-[120px] truncate">
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-[#101C3D] border border-[#2457C5]/40 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 text-left">
                      <div className="px-3 py-2 border-b border-white/10 mb-1">
                        <span className="text-[10px] text-[#55B9F5] font-bold block uppercase tracking-wider font-mono">
                          Akun Terhubung
                        </span>
                        <span className="text-xs font-bold text-white block truncate">
                          {user.email}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onOpenAuth();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-[#DCE9FF] hover:text-white hover:bg-white/10 transition-colors"
                      >
                        <Database className="w-3.5 h-3.5 text-[#55B9F5]" />
                        <span>Pengaturan Database</span>
                      </button>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onSignOut();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Keluar Akun</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={onOpenAuth}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2457C5] to-[#55B9F5] hover:brightness-110 text-white font-bold text-xs shadow-[0_0_15px_rgba(85,185,245,0.35)] transition-all active:scale-95"
                >
                  <Database className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline">Database</span>
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Mobile Navigation Row (Bottom Bar in Header for Small Devices) */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-white/10 px-2 gap-1 overflow-x-auto">
          {[
            { id: 'beranda', label: 'Beranda', icon: Sparkles },
            { id: 'kana', label: 'Kana', icon: Languages },
            { id: 'kotoba', label: 'Materi 1–50', icon: BookOpen },
            { id: 'kanji', label: 'Kanji', icon: PenTool },
            { id: 'latihan', label: 'Latihan', icon: Award },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as any)}
                className={`flex flex-col items-center py-1 px-2.5 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2457C5] to-[#163882] text-white shadow-xs'
                    : 'text-[#DCE9FF]/70 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-[#55B9F5]' : ''}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
