import React, { useState, useRef, useEffect } from 'react';
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
  ChevronDown,
  Briefcase,
  Layers,
  FileText,
  Menu,
  X,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { sound } from '../utils/audio';
import type { User } from '@supabase/supabase-js';

export type MainNavTab = 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan';

interface NavbarProps {
  activeTab: MainNavTab;
  setActiveTab: (tab: MainNavTab) => void;
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
  onNavigateSubMateri?: (sub: 'kana' | 'materi-bab' | 'kanji' | 'kotoba-bunpou' | 'kotoba' | 'bunpou') => void;
  onNavigateSubLatihan?: (sub: '18-modes' | 'jlpt' | 'jft') => void;
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
  onNavigateSubMateri,
  onNavigateSubLatihan
}) => {
  // Dropdown states
  const [materiDropdownOpen, setMateriDropdownOpen] = useState(false);
  const [latihanDropdownOpen, setLatihanDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMateriAccordion, setMobileMateriAccordion] = useState(true);
  const [mobileLatihanAccordion, setMobileLatihanAccordion] = useState(false);

  const materiDropdownRef = useRef<HTMLDivElement>(null);
  const latihanDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (materiDropdownRef.current && !materiDropdownRef.current.contains(target)) {
        setMateriDropdownOpen(false);
      }
      if (latihanDropdownRef.current && !latihanDropdownRef.current.contains(target)) {
        setLatihanDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (tab: MainNavTab) => {
    if (soundEnabled) sound.playClick();
    setActiveTab(tab);
    setMateriDropdownOpen(false);
    setLatihanDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  // Sub-menu Materi items (Tepat 3 Menu Bersih: Kana, Tata Bahasa & Kosakata, Kanji)
  const materiSubItems = [
    {
      id: 'kana',
      title: 'Hiragana & Katakana',
      subtitle: 'Pondasi 46 aksara dasar, variasi dakuten & kanvas menulis',
      icon: Languages,
      badge: 'Aksara',
      action: () => {
        handleNav('kana');
        onNavigateSubMateri?.('kana');
      }
    },
    {
      id: 'materi-bab',
      title: 'Tata Bahasa & Kosakata',
      subtitle: 'Kurikulum Bab 1–50 terpadu, contoh kalimat & audio',
      icon: BookOpen,
      badge: 'Bab 1–50',
      action: () => {
        handleNav('kotoba');
        onNavigateSubMateri?.('materi-bab');
      }
    },
    {
      id: 'kanji',
      title: 'Kanji N5 & N4',
      subtitle: '424 Kanji lengkap dengan animasi goresan, makna & kuis',
      icon: PenTool,
      badge: '424 Kanji',
      action: () => {
        handleNav('kanji');
        onNavigateSubMateri?.('kanji');
      }
    }
  ];

  // Sub-menu Latihan items (persis seperti diagram)
  const latihanSubItems = [
    {
      id: '18-modes',
      title: '18 Mode Latihan Bab',
      subtitle: 'Pilihan ganda, susun kalimat, listening, dokkai & menulis kanvas',
      icon: Sparkles,
      action: () => {
        handleNav('latihan');
        onNavigateSubLatihan?.('18-modes');
      }
    },
    {
      id: 'jlpt',
      title: 'Simulasi Resmi JLPT N5 & N4',
      subtitle: 'Format lembar kertas resmi, mark sheet pensil 2B & soal bintang ★',
      icon: Award,
      badge: 'N5・N4',
      badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
      action: () => {
        handleNav('latihan');
        onNavigateSubLatihan?.('jlpt');
      }
    },
    {
      id: 'jft',
      title: 'Simulasi Resmi JFT-Basic A2',
      subtitle: 'Format komputer CBT Prometric resmi untuk Visa Tokutei Ginou',
      icon: ShieldCheck,
      badge: 'CBT A2',
      badgeColor: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
      action: () => {
        handleNav('latihan');
        onNavigateSubLatihan?.('jft');
      }
    }
  ];

  const isMateriActive = ['kana', 'kotoba', 'kanji'].includes(activeTab);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080D2B]/95 backdrop-blur-xl border-b border-[#7857FF]/20 shadow-[0_4px_30px_rgba(8,13,43,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Desktop & Tablet Row */}
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">

          {/* 1. BRANDING & LOGO (KIRI - Compact & Elegant) */}
          <div
            onClick={() => handleNav('beranda')}
            className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-[#7857FF]/15 blur-md group-hover:bg-[#7857FF]/30 transition-all"></div>
              <img
                src="/zenora-icon.png"
                alt="ZENORA"
                className="relative w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_2px_8px_rgba(120,87,255,0.35)] group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-xl sm:text-2xl tracking-tight font-['Manrope'] bg-gradient-to-r from-[#F5F6FF] via-[#F5F6FF] to-[#7857FF] bg-clip-text text-transparent">
                ZENORA
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-wider bg-[#12194A] text-[#7857FF] border border-[#7857FF]/30">
                日本語
              </span>
            </div>
          </div>

          {/* 2. STRUKTUR 4 PILAR NAVIGASI UTAMA (DESKTOP) */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 bg-[#0D1238]/80 rounded-2xl border border-[#7857FF]/20 shadow-inner">
            
            {/* Pilar 1: Beranda */}
            <button
              onClick={() => handleNav('beranda')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 ${
                activeTab === 'beranda'
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] shadow-[0_2px_12px_rgba(120,87,255,0.25)] border border-[#7857FF]/40'
                  : 'text-[#737FA8] hover:text-[#F5F6FF] hover:bg-white/5'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'beranda' ? 'text-[#7857FF]' : 'text-[#737FA8]'}`} />
              <span>Beranda</span>
            </button>

            {/* Pilar 2: Materi Dropdown (Kana, Bab 1-50, Kanji, Kotoba, Bunpou) */}
            <div className="relative" ref={materiDropdownRef}>
              <button
                onClick={() => {
                  if (soundEnabled) sound.playClick();
                  setMateriDropdownOpen(!materiDropdownOpen);
                  setLatihanDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 ${
                  isMateriActive || materiDropdownOpen
                    ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] shadow-[0_2px_12px_rgba(120,87,255,0.25)] border border-[#7857FF]/40'
                    : 'text-[#737FA8] hover:text-[#F5F6FF] hover:bg-white/5'
                }`}
              >
                <BookOpen className={`w-4 h-4 ${isMateriActive ? 'text-[#7857FF]' : 'text-[#737FA8]'}`} />
                <span>Materi</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${materiDropdownOpen ? 'rotate-180 text-[#7857FF]' : 'text-[#737FA8]'}`} />
              </button>

              {/* Floating Dropdown Menu Materi */}
              {materiDropdownOpen && (
                <div className="absolute left-0 mt-3 w-88 sm:w-96 rounded-3xl bg-[#0D1238] border border-[#7857FF]/30 shadow-2xl p-3 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-white/10 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#7857FF] font-mono block">
                      MODUL PEMBELAJARAN
                    </span>
                    <span className="text-xs text-[#AAB3D5] block">
                      Pilih aspek materi bahasa Jepang
                    </span>
                  </div>

                  <div className="space-y-1">
                    {materiSubItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="w-full p-2.5 rounded-2xl hover:bg-[#12194A] transition-colors flex items-start gap-3 text-left group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#080D2B] border border-[#7857FF]/20 flex items-center justify-center shrink-0 group-hover:border-[#7857FF]/50 transition-colors">
                            <Icon className="w-4 h-4 text-[#7857FF]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-[#F5F6FF] group-hover:text-[#7857FF] transition-colors truncate">
                                {item.title}
                              </span>
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-md bg-[#080D2B] text-[#7857FF] border border-[#7857FF]/20 shrink-0 font-mono">
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#737FA8] line-clamp-1 mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Pilar 3: SSW Portal */}
            <button
              onClick={() => handleNav('ssw')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 ${
                activeTab === 'ssw'
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] shadow-[0_2px_12px_rgba(120,87,255,0.25)] border border-[#7857FF]/40'
                  : 'text-[#737FA8] hover:text-[#F5F6FF] hover:bg-white/5'
              }`}
            >
              <Briefcase className={`w-4 h-4 ${activeTab === 'ssw' ? 'text-[#7857FF]' : 'text-[#737FA8]'}`} />
              <span>SSW</span>
              <span className="text-[9px] font-black px-1.5 py-0.2 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                Tokutei
              </span>
            </button>

            {/* Pilar 4: Latihan Hub (18 Mode, JLPT, JFT) */}
            <div className="relative" ref={latihanDropdownRef}>
              <button
                onClick={() => {
                  if (soundEnabled) sound.playClick();
                  setLatihanDropdownOpen(!latihanDropdownOpen);
                  setMateriDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all duration-200 ${
                  activeTab === 'latihan' || latihanDropdownOpen
                    ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] shadow-[0_2px_12px_rgba(120,87,255,0.25)] border border-[#7857FF]/40'
                    : 'text-[#737FA8] hover:text-[#F5F6FF] hover:bg-white/5'
                }`}
              >
                <Award className={`w-4 h-4 ${activeTab === 'latihan' ? 'text-[#7857FF]' : 'text-[#737FA8]'}`} />
                <span>Latihan</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${latihanDropdownOpen ? 'rotate-180 text-[#7857FF]' : 'text-[#737FA8]'}`} />
              </button>

              {/* Floating Dropdown Menu Latihan */}
              {latihanDropdownOpen && (
                <div className="absolute right-0 mt-3 w-88 sm:w-96 rounded-3xl bg-[#0D1238] border border-[#7857FF]/30 shadow-2xl p-3 z-50 text-left animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-white/10 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#7857FF] font-mono block">
                      HUB EVALUASI & SERTIFIKASI
                    </span>
                    <span className="text-xs text-[#AAB3D5] block">
                      18 Mode per bab & Simulasi Ujian Resmi
                    </span>
                  </div>

                  <div className="space-y-1">
                    {latihanSubItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={item.action}
                          className="w-full p-2.5 rounded-2xl hover:bg-[#12194A] transition-colors flex items-start gap-3 text-left group"
                        >
                          <div className="w-8 h-8 rounded-xl bg-[#080D2B] border border-[#7857FF]/20 flex items-center justify-center shrink-0 group-hover:border-[#7857FF]/50 transition-colors">
                            <Icon className="w-4 h-4 text-[#7857FF]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-[#F5F6FF] group-hover:text-[#7857FF] transition-colors truncate">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded-md border shrink-0 font-mono ${item.badgeColor || 'bg-[#080D2B] text-[#7857FF] border-[#7857FF]/20'}`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#737FA8] line-clamp-1 mt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* 3. UTILITY NAVIGATION (KANAN - Minimalist Icon Buttons) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

            {/* Compact Search Icon Button */}
            <button
              onClick={onOpenSearch}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0D1238] hover:bg-[#12194A] text-[#7857FF] hover:text-[#F5F6FF] border border-[#7857FF]/20 hover:border-[#7857FF]/40 transition-all flex items-center justify-center shadow-xs group"
              title="Cari Kosakata, Kanji, atau Materi (Ctrl + K)"
              aria-label="Pencarian"
            >
              <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Compact Audio Toggle Icon Button */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) sound.playClick();
              }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl border transition-all flex items-center justify-center shadow-xs ${
                soundEnabled
                  ? 'bg-[#0D1238] text-[#7857FF] border-[#7857FF]/30 hover:bg-[#12194A]'
                  : 'bg-[#0D1238]/60 text-[#737FA8] border-white/10 hover:bg-[#0D1238]'
              }`}
              title={soundEnabled ? 'Audio Suara: Aktif' : 'Audio Suara: Hening'}
              aria-label="Audio Suara"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Compact Cloud Sync Icon Button with Status Dot */}
            <div className="relative" ref={userDropdownRef}>
              {user ? (
                <div>
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded-xl bg-[#0D1238] hover:bg-[#12194A] text-[#F5F6FF] border border-[#7857FF]/30 transition-all shadow-xs"
                    title={`Tersinkronisasi sebagai ${user.email}`}
                  >
                    <div className="relative">
                      <Cloud className={`w-4 h-4 text-[#7857FF] ${isSyncing ? 'animate-pulse' : ''}`} />
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    </div>
                    <span className="hidden md:inline max-w-[90px] truncate text-xs font-bold">
                      {user.user_metadata?.full_name || user.email?.split('@')[0]}
                    </span>
                    <ChevronDown className="w-3 h-3 text-[#737FA8] hidden md:block" />
                  </button>

                  {userDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#0D1238] border border-[#7857FF]/30 shadow-2xl p-2 z-50 text-left animate-in fade-in zoom-in-95">
                      <div className="px-3.5 py-2.5 border-b border-white/10 mb-1">
                        <span className="text-[10px] text-[#7857FF] font-bold block uppercase tracking-wider font-mono">
                          Tersinkronisasi ke Cloud
                        </span>
                        <span className="text-xs font-bold text-[#F5F6FF] block truncate mt-0.5">
                          {user.email}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          onOpenAuth();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#F5F6FF] hover:bg-[#12194A] transition-colors"
                      >
                        <Database className="w-4 h-4 text-[#7857FF]" />
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
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#7857FF] to-[#945CFF] hover:brightness-110 text-[#F5F6FF] border border-[#7857FF]/30 text-xs font-bold shadow-xs transition-all active:scale-95"
                  title="Hubungkan Sinkronisasi Cloud Supabase"
                >
                  <Cloud className="w-4 h-4 text-[#7857FF]" />
                  <span className="hidden sm:inline text-xs">Sync Cloud</span>
                </button>
              )}
            </div>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => {
                if (soundEnabled) sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0D1238] hover:bg-[#12194A] text-[#F5F6FF] border border-[#7857FF]/20 flex items-center justify-center transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

      </div>

      {/* 4. MOBILE / TABLET DRAWER ACCORDION PANEL */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#7857FF]/20 bg-[#080D2B]/98 backdrop-blur-2xl p-4 space-y-3 text-left animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
          
          {/* 1. Beranda */}
          <button
            onClick={() => handleNav('beranda')}
            className={`w-full flex items-center gap-3 p-3 rounded-2xl text-sm font-bold transition-all ${
              activeTab === 'beranda'
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40'
                : 'text-[#AAB3D5] hover:bg-white/5'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#7857FF]" />
            <span>Beranda</span>
          </button>

          {/* 2. Materi (Accordion) */}
          <div className="rounded-2xl border border-[#7857FF]/20 bg-[#0D1238]/40 overflow-hidden">
            <button
              onClick={() => setMobileMateriAccordion(!mobileMateriAccordion)}
              className="w-full flex items-center justify-between p-3 text-sm font-bold text-[#F5F6FF]"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-[#7857FF]" />
                <span>Materi Pembelajaran</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#737FA8] transition-transform ${mobileMateriAccordion ? 'rotate-180' : ''}`} />
            </button>

            {mobileMateriAccordion && (
              <div className="p-2 space-y-1 bg-[#080D2B]/60 border-t border-[#7857FF]/15">
                {materiSubItems.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        sub.action();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#12194A] text-xs font-semibold text-[#AAB3D5] hover:text-[#F5F6FF]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-[#7857FF]" />
                        <span>{sub.title}</span>
                      </div>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-[#0D1238] text-[#7857FF] border border-[#7857FF]/20">
                        {sub.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* 3. SSW Portal */}
          <button
            onClick={() => handleNav('ssw')}
            className={`w-full flex items-center justify-between p-3 rounded-2xl text-sm font-bold transition-all ${
              activeTab === 'ssw'
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40'
                : 'text-[#AAB3D5] hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-[#7857FF]" />
              <span>SSW (Tokutei Ginou)</span>
            </div>
            <span className="text-[10px] font-mono font-black px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              Kerja Jepang
            </span>
          </button>

          {/* 4. Latihan Hub (Accordion) */}
          <div className="rounded-2xl border border-[#7857FF]/20 bg-[#0D1238]/40 overflow-hidden">
            <button
              onClick={() => setMobileLatihanAccordion(!mobileLatihanAccordion)}
              className="w-full flex items-center justify-between p-3 text-sm font-bold text-[#F5F6FF]"
            >
              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-[#7857FF]" />
                <span>Latihan & Ujian Resmi</span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[#737FA8] transition-transform ${mobileLatihanAccordion ? 'rotate-180' : ''}`} />
            </button>

            {mobileLatihanAccordion && (
              <div className="p-2 space-y-1 bg-[#080D2B]/60 border-t border-[#7857FF]/15">
                {latihanSubItems.map((sub) => {
                  const Icon = sub.icon;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        sub.action();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#12194A] text-xs font-semibold text-[#AAB3D5] hover:text-[#F5F6FF]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-3.5 h-3.5 text-[#7857FF]" />
                        <span>{sub.title}</span>
                      </div>
                      {sub.badge && (
                        <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded border ${sub.badgeColor || 'bg-[#0D1238] text-[#7857FF] border-[#7857FF]/20'}`}>
                          {sub.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}

    </header>
  );
};
