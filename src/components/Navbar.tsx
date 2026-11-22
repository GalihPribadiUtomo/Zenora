import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  PenTool,
  Award,
  Search,
  Volume2,
  VolumeX,
  Flame,
  Languages,
  Database,
  Cloud,
  LogOut,
  User as UserIcon,
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
  learnedKotobaCount,
  learnedKanjiCount,
  streakDays,
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
    <header className="sticky top-0 z-40 w-full glass-header shadow-xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 lg:gap-8">

          {/* Logo & Brand: ZENORA */}
          <div
            onClick={() => handleNav('beranda')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            {/* Desktop Full Logo */}
            <div className="hidden sm:flex items-center">
              <img
                src="/zenora-full.png"
                alt="ZENORA - Learn • Practice • Master"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-2xs group-hover:scale-[1.02] transition-transform"
              />
            </div>

            {/* Mobile Compact Brand */}
            <div className="flex sm:hidden items-center gap-2.5">
              <img
                src="/zenora-icon.png"
                alt="ZENORA"
                className="w-10 h-10 object-contain drop-shadow-2xs"
              />
              <div>
                <span className="font-black text-xl tracking-tight font-['Manrope'] text-[#29264B] block leading-none">
                  ZENORA
                </span>
                <span className="text-[9px] text-[#6555A5] font-bold font-mono tracking-wider block mt-1 uppercase">
                  Learn · Practice · Master
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs - Spacious, elegant & never crammed */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 p-1.5 px-2 bg-[#F8F3FA] rounded-2xl border border-[#E9E2F0] shadow-2xs">

            {/* Beranda */}
            <button
              onClick={() => handleNav('beranda')}
              className={`flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'beranda'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B] hover:bg-white/70'
              }`}
              title="Kembali ke Dashboard Utama Beranda"
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'beranda' ? 'text-[#6555A5]' : 'text-[#85B9D1]'}`} />
              <span>Beranda</span>
            </button>

            {/* Kana */}
            <button
              onClick={() => handleNav('kana')}
              className={`flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'kana'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B] hover:bg-white/70'
              }`}
              title="Modul Pembelajaran Hiragana & Katakana Modern (312 Karakter)"
            >
              <Languages className={`w-4 h-4 ${activeTab === 'kana' ? 'text-[#6555A5]' : 'text-[#85B9D1]'}`} />
              <span>Kana</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                activeTab === 'kana' ? 'bg-[#6555A5]/15 text-[#29264B]' : 'bg-[#F0EBF8] text-[#29264B]'
              }`}>
                あ・ア
              </span>
            </button>

            {/* Kotoba */}
            <button
              onClick={() => handleNav('kotoba')}
              className={`flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'kotoba'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B] hover:bg-white/70'
              }`}
              title="Kosakata Minna no Nihongo Bab 1–50 (2.910 Kata)"
            >
              <BookOpen className={`w-4 h-4 ${activeTab === 'kotoba' ? 'text-[#6555A5]' : 'text-[#85B9D1]'}`} />
              <span>Kotoba</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                activeTab === 'kotoba' ? 'bg-[#6555A5]/15 text-[#29264B]' : 'bg-[#F0EBF8] text-[#29264B]'
              }`}>
                Bab 1–50
              </span>
            </button>

            {/* Kanji */}
            <button
              onClick={() => handleNav('kanji')}
              className={`flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'kanji'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B] hover:bg-white/70'
              }`}
              title="Daftar 329 Kanji JLPT N5 & N4 Lengkap dengan Stroke Order"
            >
              <PenTool className={`w-4 h-4 ${activeTab === 'kanji' ? 'text-[#6555A5]' : 'text-[#85B9D1]'}`} />
              <span>Kanji</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                activeTab === 'kanji' ? 'bg-[#6555A5]/15 text-[#29264B]' : 'bg-[#F0EBF8] text-[#29264B]'
              }`}>
                N5–N4
              </span>
            </button>

            {/* Mode Latihan */}
            <button
              onClick={() => handleNav('latihan')}
              className={`flex items-center gap-2 px-3.5 lg:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === 'latihan'
                  ? 'bg-white text-[#29264B] shadow-xs border border-[#E9E2F0]'
                  : 'text-[#77738A] hover:text-[#29264B] hover:bg-white/70'
              }`}
              title="4 Mode Latihan Interaktif: Kuis, Flashcard, Menjodohkan & Ketik Romaji"
            >
              <Award className={`w-4 h-4 ${activeTab === 'latihan' ? 'text-[#6555A5]' : 'text-[#85B9D1]'}`} />
              <span>Mode Latihan</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#85B9D1] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#85B9D1]"></span>
              </span>
            </button>

          </nav>

          {/* Right Utility Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 shrink-0">

            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-xl bg-white hover:bg-[#F8F3FA] text-[#29264B] text-xs sm:text-sm font-semibold transition-colors border border-[#E9E2F0] shadow-2xs"
              title="Cari Kosakata atau Kanji (⌘K)"
            >
              <Search className="w-4 h-4 text-[#77738A]" />
              <span className="hidden sm:inline">Cari</span>
              <kbd className="hidden lg:inline text-[10px] font-mono bg-[#F8F3FA] px-1.5 py-0.5 rounded border border-[#E9E2F0] text-[#77738A]">
                ⌘K
              </kbd>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`p-2 rounded-xl border text-sm transition-colors ${
                soundEnabled
                  ? 'bg-white text-[#29264B] border-[#E9E2F0] shadow-2xs'
                  : 'bg-[#F0EBF8] text-slate-400 border-slate-200'
              }`}
              title={soundEnabled ? 'Suara Aktif' : 'Suara Dimatikan'}
              aria-label={soundEnabled ? 'Matikan suara' : 'Aktifkan suara'}
            >
              {soundEnabled
                ? <Volume2 className="w-4 h-4 text-[#29264B]" />
                : <VolumeX className="w-4 h-4" />}
            </button>

            {/* SUPABASE ACCOUNT & CLOUD SYNC BUTTON */}
            {!user ? (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-[#29264B] to-[#6555A5] hover:brightness-110 text-white text-xs font-bold shadow-xs transition-all active:scale-95"
                title="Masuk / Hubungkan Database Cloud Supabase"
              >
                <Database className="w-3.5 h-3.5 text-[#85B9D1]" />
                <span className="hidden sm:inline">Database</span>
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(prev => !prev)}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#F0EBF8] hover:bg-[#E9E2F0] text-[#29264B] border border-[#6555A5]/25 text-xs font-bold transition-all shadow-2xs"
                  title={`Akun: ${user.email} (Tersinkronisasi)`}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#29264B] to-[#6555A5] text-white text-[10px] flex items-center justify-center font-black">
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <span className="hidden md:inline max-w-[80px] lg:max-w-[110px] truncate">
                    {user.user_metadata?.full_name || user.email?.split('@')[0]}
                  </span>
                  <Cloud className={`w-3.5 h-3.5 ${isSyncing ? 'text-amber-500 animate-pulse' : 'text-emerald-600'}`} />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-[#E9E2F0] py-2 z-50 text-left animate-in fade-in duration-150"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-[#E9E2F0]">
                      <div className="text-[11px] font-bold text-[#77738A] uppercase tracking-wider">
                        Tersambung Supabase
                      </div>
                      <div className="text-xs font-black text-[#29264B] truncate mt-0.5">
                        {user.email}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-emerald-600 font-semibold">
                        <Check className="w-3 h-3" />
                        <span>Cloud Database Aktif</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        onOpenAuth();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-xs font-bold text-[#77738A] hover:text-[#29264B] hover:bg-[#F8F3FA] flex items-center gap-2 transition-colors"
                    >
                      <Database className="w-3.5 h-3.5 text-[#6555A5]" />
                      <span>Pengaturan Koneksi</span>
                    </button>

                    <button
                      onClick={() => {
                        onSignOut();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors border-t border-[#E9E2F0] mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Keluar (Sign Out)</span>
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-1.5 border-t border-[#E9E2F0] gap-1">

          <button
            onClick={() => handleNav('beranda')}
            className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'beranda'
                ? 'text-[#29264B] bg-[#F0EBF8]/80 font-black'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
            title="Beranda"
          >
            <Sparkles className={`w-4 h-4 ${activeTab === 'beranda' ? 'text-[#6555A5]' : ''}`} />
            <span>Beranda</span>
            {activeTab === 'beranda' && (
              <span className="w-1.5 h-0.5 rounded-full bg-[#6555A5]" />
            )}
          </button>

          <button
            onClick={() => handleNav('kana')}
            className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'kana'
                ? 'text-[#29264B] bg-[#F0EBF8]/80 font-black'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
            title="Kana (Hiragana & Katakana)"
          >
            <Languages className={`w-4 h-4 ${activeTab === 'kana' ? 'text-[#6555A5]' : ''}`} />
            <span>Kana</span>
            {activeTab === 'kana' && (
              <span className="w-1.5 h-0.5 rounded-full bg-[#6555A5]" />
            )}
          </button>

          <button
            onClick={() => handleNav('kotoba')}
            className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'kotoba'
                ? 'text-[#29264B] bg-[#F0EBF8]/80 font-black'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
            title="Kosakata Kotoba"
          >
            <BookOpen className={`w-4 h-4 ${activeTab === 'kotoba' ? 'text-[#6555A5]' : ''}`} />
            <span>Kotoba</span>
            {activeTab === 'kotoba' && (
              <span className="w-1.5 h-0.5 rounded-full bg-[#6555A5]" />
            )}
          </button>

          <button
            onClick={() => handleNav('kanji')}
            className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'kanji'
                ? 'text-[#29264B] bg-[#F0EBF8]/80 font-black'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
            title="Kanji N5 & N4"
          >
            <PenTool className={`w-4 h-4 ${activeTab === 'kanji' ? 'text-[#6555A5]' : ''}`} />
            <span>Kanji</span>
            {activeTab === 'kanji' && (
              <span className="w-1.5 h-0.5 rounded-full bg-[#6555A5]" />
            )}
          </button>

          <button
            onClick={() => handleNav('latihan')}
            className={`flex flex-col items-center gap-0.5 py-1 px-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'latihan'
                ? 'text-[#29264B] bg-[#F0EBF8]/80 font-black'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
            title="Mode Latihan"
          >
            <Award className={`w-4 h-4 ${activeTab === 'latihan' ? 'text-[#6555A5]' : ''}`} />
            <span>Latihan</span>
            {activeTab === 'latihan' && (
              <span className="w-1.5 h-0.5 rounded-full bg-[#6555A5]" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
};