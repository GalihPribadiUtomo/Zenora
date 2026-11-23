import React, { useState } from 'react';
import { Sidebar } from './homepage/Sidebar';
import { TopNavigation } from './homepage/TopNavigation';
import { HeroSection } from './homepage/HeroSection';
import { QuickAccess } from './homepage/QuickAccess';
import { RecommendationsSection } from './homepage/RecommendationsSection';
import { LearningStatsWidget } from './homepage/LearningStatsWidget';
import { MotivationalChibiCard } from './homepage/MotivationalChibiCard';
import { MidnightFooter } from './homepage/MidnightFooter';
import { KanjiItem } from '../types';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { sound } from '../utils/audio';
import { X } from 'lucide-react';
import type { User } from '@supabase/supabase-js';

export interface HomeDashboardProps {
  onNavigate: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan') => void;
  onSelectKanji: (kanji: KanjiItem) => void;
  onSelectChapter: (bab: number) => void;
  learnedKotobaCount?: number;
  learnedKanjiCount?: number;
  streakDays?: number;
  learnedKanjiIds: number[];
  learnedKotobaIds: string[];
  stats?: any;
  user?: User | null;
  onOpenSearch?: () => void;
  onOpenAuth?: () => void;
  soundEnabled?: boolean;
  setSoundEnabled?: (val: boolean) => void;
  isSyncing?: boolean;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  onSelectKanji,
  onSelectChapter,
  learnedKotobaCount = 0,
  learnedKanjiCount = 0,
  streakDays = 0,
  learnedKanjiIds = [],
  learnedKotobaIds = [],
  stats,
  user = null,
  onOpenSearch = () => {},
  onOpenAuth = () => {},
  soundEnabled = true,
  setSoundEnabled = () => {},
  isSyncing = false
}) => {
  const totalKanji = KANJI_DATA.length; // 424
  const totalKotoba = KOTOBA_DATA.length; // 2910
  
  // Mobile drawer state
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleScrollToStats = () => {
    const el = document.getElementById('learning-stats-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex bg-[#080D2B] text-[#F5F6FF] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#7857FF] selection:text-white antialiased">
      
      {/* 1. DESKTOP SIDEBAR (Visible on lg and above) */}
      <div className="hidden lg:block shrink-0">
        <Sidebar
          activeTab="beranda"
          onNavigateTab={onNavigate}
          onOpenAuth={onOpenAuth}
          user={user}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileDrawerOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
          <div className="relative w-72 max-w-[85vw] h-full bg-[#080D2B] z-10 flex flex-col shadow-2xl">
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-2 rounded-xl bg-[#0D1238] border border-[#7857FF]/30 text-[#AAB3D5]"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar
                activeTab="beranda"
                onNavigateTab={(t) => {
                  setMobileDrawerOpen(false);
                  onNavigate(t);
                }}
                onOpenAuth={() => {
                  setMobileDrawerOpen(false);
                  onOpenAuth();
                }}
                user={user}
                darkMode={darkMode}
                onToggleDarkMode={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen overflow-x-hidden">
        
        {/* TOP NAVIGATION BAR */}
        <TopNavigation
          onOpenSearch={onOpenSearch}
          onOpenAuth={onOpenAuth}
          user={user}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          isSyncing={isSyncing}
          onOpenMobileMenu={() => setMobileDrawerOpen(true)}
          streakDays={streakDays}
        />

        {/* MAIN BODY SCROLLABLE CONTAINER */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10">
          
          {/* SECTION 1: HERO SHOWCASE (Mount Fuji, Pagoda, Moon, Sakura + Floating Progress Gauge) */}
          <HeroSection
            onStartLearning={() => onNavigate('kotoba')}
            onViewProgress={handleScrollToStats}
            learnedKotobaCount={learnedKotobaIds.length}
            learnedKanjiCount={learnedKanjiIds.length}
            totalKotoba={totalKotoba}
            totalKanji={totalKanji}
            streakDays={streakDays}
          />

          {/* SECTION 2: QUICK ACCESS (5 Horizontal Shortcut Cards) */}
          <QuickAccess
            onNavigate={onNavigate}
            onScrollToStats={handleScrollToStats}
          />

          {/* SECTION 3: RECOMMENDATIONS GRID & STATS / CHIBI SIDEBAR */}
          <section className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            
            {/* Left 4 Recommendation Cards (xl:col-span-8 or 9) */}
            <div className="xl:col-span-8 2xl:col-span-9">
              <RecommendationsSection
                onNavigate={onNavigate}
                totalKanji={totalKanji}
                totalKotoba={totalKotoba}
              />
            </div>

            {/* Right Column: Statistics Widget & Motivational Anime Chibi Card (xl:col-span-4 or 3) */}
            <div className="xl:col-span-4 2xl:col-span-3 space-y-6">
              
              {/* Learning Stats Wave Chart */}
              <LearningStatsWidget
                quizHistory={stats?.quizHistory || []}
                learnedKotobaCount={learnedKotobaIds.length}
                learnedKanjiCount={learnedKanjiIds.length}
              />

              {/* Motivational Anime Chibi Card */}
              <MotivationalChibiCard />

            </div>

          </section>

          {/* SECTION 4: MINIMALIST FOOTER */}
          <MidnightFooter />

        </main>

      </div>

    </div>
  );
};
