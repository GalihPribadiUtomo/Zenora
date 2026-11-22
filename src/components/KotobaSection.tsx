import React, { useState } from 'react';
import { Search, BookOpen, ChevronRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { ChapterDetail } from './ChapterDetail';
import { KotobaItem } from '../types';
import { sound } from '../utils/audio';

interface KotobaSectionProps {
  selectedBab: number | null;
  setSelectedBab: (bab: number | null) => void;
  learnedKotobaIds: string[];
  bookmarkedKotobaIds: string[];
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onStartQuiz: (bab: number) => void;
}

export const KotobaSection: React.FC<KotobaSectionProps> = ({
  selectedBab,
  setSelectedBab,
  learnedKotobaIds,
  bookmarkedKotobaIds,
  onToggleLearned,
  onToggleBookmark,
  onStartQuiz,
}) => {
  const [activeBook, setActiveBook] = useState<'I' | 'II'>('I');
  const [searchQuery, setSearchQuery] = useState('');

  // If a chapter is selected, show ChapterDetail
  if (selectedBab !== null) {
    return (
      <ChapterDetail
        bab={selectedBab}
        onBack={() => setSelectedBab(null)}
        onSelectChapter={(b) => setSelectedBab(b)}
        allKotoba={KOTOBA_DATA}
        learnedKotobaIds={learnedKotobaIds}
        bookmarkedKotobaIds={bookmarkedKotobaIds}
        onToggleLearned={onToggleLearned}
        onToggleBookmark={onToggleBookmark}
        onStartQuiz={onStartQuiz}
      />
    );
  }

  // Filter chapters by active book (I: 1-25, II: 26-50)
  const currentChapters = CHAPTERS_DATA.filter((ch) => ch.book === activeBook);

  // Search filter
  const filteredChapters = currentChapters.filter((ch) => {
    const q = searchQuery.toLowerCase();
    const matchesBab = ch.bab.toString().includes(q);
    const matchesTitle = ch.title.toLowerCase().includes(q);
    return matchesBab || matchesTitle;
  });

  return (
    <div className="space-y-8 text-left pb-16">
      
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBF8] border border-[#29264B]/20 text-[#29264B] text-xs font-black uppercase tracking-wider mb-2">
            Minna no Nihongo · Kosakata Lengkap
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-[#29264B] tracking-tight flex items-center gap-3 font-['Manrope']">
            Kotoba · 言葉
          </h1>
          <p className="text-[#77738A] text-sm mt-1">
            Pilih bab materi pembelajaran Minna no Nihongo, pilah kosakata berdasarkan kategori tematik, dan tandai hafalanmu.
          </p>
        </div>

        {/* Global Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#77738A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari kata (Jepang, romaji, arti)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#E9E2F0] text-sm text-[#29264B] placeholder-[#77738A]/60 focus:outline-hidden focus:ring-2 focus:ring-[#85B9D1]/40 focus:border-[#85B9D1] shadow-2xs transition-all"
          />
        </div>
      </div>

      {/* Book Tabs: Minna no Nihongo I vs II */}
      <div className="flex items-center gap-2 p-1.5 bg-[#F8F3FA] rounded-2xl border border-[#E9E2F0] max-w-md">
        <button
          onClick={() => {
            sound.playClick();
            setActiveBook('I');
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
            activeBook === 'I'
              ? 'bg-gradient-to-r from-[#29264B] to-[#85B9D1] text-white shadow-xs'
              : 'text-[#77738A] hover:text-[#29264B]'
          }`}
        >
          Minna no Nihongo I · Bab 1–25
        </button>

        <button
          onClick={() => {
            sound.playClick();
            setActiveBook('II');
          }}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
            activeBook === 'II'
              ? 'bg-gradient-to-r from-[#29264B] to-[#85B9D1] text-white shadow-xs'
              : 'text-[#77738A] hover:text-[#29264B]'
          }`}
        >
          Minna no Nihongo II · Bab 26–50
        </button>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {filteredChapters.map((chapter) => {
          // Count how many words in this bab are learned
          const wordsInBab = KOTOBA_DATA.filter((k) => k.bab === chapter.bab);
          const learnedCount = wordsInBab.filter((k) => learnedKotobaIds.includes(k.id)).length;
          const pct = chapter.totalKata > 0 ? Math.round((learnedCount / chapter.totalKata) * 100) : 0;

          return (
            <div
              key={chapter.bab}
              onClick={() => {
                sound.playClick();
                setSelectedBab(chapter.bab);
              }}
              className="card-soft card-soft-hover p-4 sm:p-5 rounded-3xl cursor-pointer border border-[#E9E2F0] bg-white flex flex-col justify-between group"
            >
              <div>
                {/* Bab Tag */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-[#77738A] uppercase tracking-wider font-mono">
                    第{chapter.bab}課
                  </span>
                  {learnedCount > 0 && (
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3" />
                      {pct}%
                    </span>
                  )}
                </div>

                {/* Big Bab Number */}
                <h3 className="text-3xl sm:text-4xl font-black text-[#29264B] tracking-tight group-hover:text-[#85B9D1] transition-colors font-['Manrope']">
                  {chapter.bab}
                </h3>

                <p className="text-xs font-semibold text-[#77738A] mt-1">
                  {chapter.totalKata} kata · {learnedCount} hafal
                </p>
              </div>

              {/* Multi-colored Category Progress Bar */}
              <div className="mt-4 pt-3 border-t border-[#E9E2F0]">
                <div className="w-full h-2 rounded-full overflow-hidden flex bg-[#F0EBF8]">
                  {chapter.categories.length > 0 ? (
                    chapter.categories.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: `${(c.count / chapter.totalKata) * 100}%`,
                          backgroundColor: c.color,
                        }}
                        className="h-full"
                        title={`${c.name}: ${c.count} kata`}
                      ></div>
                    ))
                  ) : (
                    <div
                      className="h-full bg-gradient-to-r from-[#29264B] to-[#85B9D1] rounded-full"
                      style={{ width: `${Math.max(5, pct)}%` }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
