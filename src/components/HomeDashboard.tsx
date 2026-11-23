import React from 'react';
import { HeroSection } from './homepage/HeroSection';
import { QuickAccess } from './homepage/QuickAccess';
import { RecommendationsSection } from './homepage/RecommendationsSection';
import { LearningStatsWidget } from './homepage/LearningStatsWidget';
import { MotivationalChibiCard } from './homepage/MotivationalChibiCard';
import { MidnightFooter } from './homepage/MidnightFooter';
import { KanjiItem } from '../types';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';

export interface HomeDashboardProps {
  onNavigate: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik') => void;
  onSelectKanji: (kanji: KanjiItem) => void;
  onSelectChapter: (bab: number) => void;
  learnedKotobaCount?: number;
  learnedKanjiCount?: number;
  streakDays?: number;
  learnedKanjiIds: number[];
  learnedKotobaIds: string[];
  stats?: any;
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
  stats
}) => {
  const totalKanji = KANJI_DATA.length; // 424
  const totalKotoba = KOTOBA_DATA.length; // 2910

  const handleScrollToStats = () => {
    const el = document.getElementById('learning-stats-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('analitik');
    }
  };

  return (
    <div className="space-y-8 sm:space-y-10 animate-fade-in text-left">
      
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
        
        {/* Left 4 Recommendation Cards */}
        <div className="xl:col-span-8 2xl:col-span-9">
          <RecommendationsSection
            onNavigate={onNavigate}
            totalKanji={totalKanji}
            totalKotoba={totalKotoba}
          />
        </div>

        {/* Right Column: Statistics Widget & Motivational Anime Chibi Card */}
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

    </div>
  );
};
