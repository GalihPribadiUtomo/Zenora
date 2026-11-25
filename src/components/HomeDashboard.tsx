import React, { useState } from 'react';
import { Brain, Target, BookX, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HeroSection } from './homepage/HeroSection';
import { QuickAccess } from './homepage/QuickAccess';
import { RecommendationsSection } from './homepage/RecommendationsSection';
import { LearningStatsWidget } from './homepage/LearningStatsWidget';
import { MotivationalChibiCard } from './homepage/MotivationalChibiCard';
import { MidnightFooter } from './homepage/MidnightFooter';
import { SrsReviewModal } from './SrsReviewModal';
import { MistakeNotebookModal } from './MistakeNotebookModal';
import { getDueSrsItems } from '../utils/srsService';
import { getSavedMistakes } from '../utils/exerciseGenerator';
import { sound } from '../utils/audio';
import { KanjiItem, UserStats } from '../types';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';

export interface HomeDashboardProps {
  onNavigate: (tab: 'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik') => void;
  onSelectKanji: (kanji: KanjiItem) => void;
  onSelectChapter: (bab: number) => void;
  onRecordActivity?: (count: number) => void;
  learnedKotobaCount?: number;
  learnedKanjiCount?: number;
  streakDays?: number;
  learnedKanjiIds: number[];
  learnedKotobaIds: string[];
  stats?: UserStats;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  onSelectKanji,
  onSelectChapter,
  onRecordActivity,
  learnedKotobaCount = 0,
  learnedKanjiCount = 0,
  streakDays = 0,
  learnedKanjiIds = [],
  learnedKotobaIds = [],
  stats
}) => {
  const [srsOpen, setSrsOpen] = useState(false);
  const [mistakesOpen, setMistakesOpen] = useState(false);

  const totalKanji = KANJI_DATA.length; // 424
  const totalKotoba = KOTOBA_DATA.length; // 2910

  const today = new Date().toISOString().split('T')[0];
  const todayCount = stats?.dailyActivityMap?.[today] || 0;
  const dailyGoal = stats?.dailyGoalTarget || 15;
  const dailyPct = Math.min(100, Math.round((todayCount / dailyGoal) * 100));

  const dueSrsCount = stats ? getDueSrsItems(stats).length : 0;
  const savedMistakesCount = getSavedMistakes().length;

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

      {/* SECTION 2.5: SMART STUDY HUB (DAILY GOAL, SRS REVIEW, MISTAKE NOTEBOOK) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Target Harian */}
        <div className="p-5 rounded-3xl bg-[#111F38] border border-[#263D60] shadow-lg flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-black text-[#F2F6FC]">Target Belajar Harian</div>
                <div className="text-[11px] text-[#A9BBD3]">{todayCount} / {dailyGoal} aktivitas hari ini</div>
              </div>
            </div>
            {dailyPct >= 100 && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                <CheckCircle2 className="w-3 h-3" /> Tercapai
              </span>
            )}
          </div>
          <div className="w-full h-2.5 rounded-full bg-[#08152F] border border-[#263D60] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#45C6A5] to-[#3978D6] rounded-full transition-all duration-500"
              style={{ width: `${dailyPct}%` }}
            />
          </div>
        </div>

        {/* 2. Waktunya Review SRS */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-[#111F38] to-[#172945] border border-[#263D60] shadow-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#2456A6]/20 border border-[#3978D6]/40 text-[#83B7EE]">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#F2F6FC]">Review Spasi (SRS)</div>
              <div className="text-[11px] text-[#A9BBD3]">
                <strong className="text-[#83B7EE]">{dueSrsCount} kartu</strong> siap diulas
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              setSrsOpen(true);
            }}
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all cursor-pointer"
          >
            <span>Mulai</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3. Buku Catatan Kesalahan */}
        <div className="p-5 rounded-3xl bg-[#111F38] border border-rose-500/25 shadow-lg flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300">
              <BookX className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-black text-[#F2F6FC]">Catatan Kesalahan</div>
              <div className="text-[11px] text-[#A9BBD3]">
                <strong className="text-rose-300">{savedMistakesCount} soal</strong> perlu diulang
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              sound.playClick();
              setMistakesOpen(true);
            }}
            className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#172945] hover:bg-[#1c3254] text-[#F2F6FC] border border-rose-500/35 text-xs font-bold transition-all cursor-pointer"
          >
            <span>Buka</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Modals for SRS & Mistake Notebook */}
      {stats && (
        <SrsReviewModal
          isOpen={srsOpen}
          onClose={() => setSrsOpen(false)}
          stats={stats}
          onActivityComplete={(cnt) => onRecordActivity && onRecordActivity(cnt)}
        />
      )}
      <MistakeNotebookModal
        isOpen={mistakesOpen}
        onClose={() => setMistakesOpen(false)}
        onPracticeComplete={(cnt) => onRecordActivity && onRecordActivity(cnt)}
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
