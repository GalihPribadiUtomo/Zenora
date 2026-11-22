import React, { useState } from 'react';
import { Search, CheckCircle2, BookOpen } from 'lucide-react';
import { CHAPTERS_DATA } from '../data/chaptersData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KanjiItem } from '../types';
import { ChapterDetail } from './ChapterDetail';
import { sound } from '../utils/audio';

interface KotobaSectionProps {
  selectedBab: number | null;
  setSelectedBab: (bab: number | null) => void;
  learnedKotobaIds: string[];
  bookmarkedKotobaIds: string[];
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onStartQuiz: (bab: number) => void;
  onSelectKanji?: (kanji: KanjiItem) => void;
}

export const KotobaSection: React.FC<KotobaSectionProps> = ({
  selectedBab,
  setSelectedBab,
  learnedKotobaIds,
  bookmarkedKotobaIds,
  onToggleLearned,
  onToggleBookmark,
  onStartQuiz,
  onSelectKanji,
}) => {
  const [activeBook, setActiveBook] = useState<'I' | 'II'>('I');
  const [searchQuery, setSearchQuery] = useState('');

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
        onSelectKanji={onSelectKanji}
      />
    );
  }

  const currentChapters = CHAPTERS_DATA.filter((ch) => ch.book === activeBook);
  const filteredChapters = currentChapters.filter((ch) => {
    const q = searchQuery.toLowerCase();
    return ch.bab.toString().includes(q) || ch.title.toLowerCase().includes(q);
  });

  const totalLearned = learnedKotobaIds.length;
  const totalWords = KOTOBA_DATA.length;

  return (
    <div className="space-y-8 text-left pb-16">

      {/* ── Dark Hero Header ── */}
      <div className="relative overflow-hidden rounded-3xl border border-[#8FB4E3]/25 shadow-[0_20px_60px_-15px_rgba(12,27,51,0.9),0_0_40px_rgba(143,180,227,0.12)] bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760]">
        {/* Glow blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#8FB4E3]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#16294A]/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16294A]/80 border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_12px_rgba(143,180,227,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FB4E3] animate-pulse" />
                Minna no Nihongo I & II · Materi Lengkap Bab 1–50
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#EEF1F6] tracking-tight font-['Manrope'] flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#8FB4E3]" />
                Materi & Pelajaran Bab 1–50
              </h1>

              <p className="text-[#8793A8] text-sm sm:text-base leading-relaxed max-w-xl">
                Akses lengkap pembelajaran Minna no Nihongo Bab 1–50: <span className="text-[#8FB4E3] font-bold">Tata Bahasa (Bunpou)</span>, <span className="text-[#8FB4E3] font-bold">Pola Kalimat (Bunkei)</span>, <span className="text-[#8FB4E3] font-bold">Percakapan Interaktif (Kaiwa)</span>, <span className="text-[#8FB4E3] font-bold">2.910 Kosakata</span>, dan <span className="text-[#EEF1F6] font-bold">Kanji</span> terkait. Pilih nomor bab untuk mulai belajar!
              </p>

              {/* Progress bar */}
              <div className="max-w-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-[#8793A8] font-semibold">Progress Hafalan</span>
                  <span className="text-xs text-[#8FB4E3] font-bold">
                    {totalLearned} / {totalWords}
                  </span>
                </div>
                <div className="h-2 bg-[#0C1B33]/60 rounded-full overflow-hidden border border-[#8FB4E3]/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#1F3760] to-[#8FB4E3] shadow-[0_0_8px_rgba(143,180,227,0.5)] transition-all duration-700"
                    style={{ width: `${Math.max(1, Math.round((totalLearned / totalWords) * 100))}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#8FB4E3] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari bab atau kata..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/25 text-sm text-[#EEF1F6] placeholder-[#8793A8] focus:outline-none focus:ring-2 focus:ring-[#8FB4E3]/30 focus:border-[#8FB4E3] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Book Tabs ── */}
      <div className="flex items-center gap-2 p-1.5 bg-[#16294A] rounded-2xl border border-[#8FB4E3]/25 max-w-lg shadow-[0_4px_20px_rgba(12,27,51,0.5)]">
        {(['I', 'II'] as const).map((book) => (
          <button
            key={book}
            onClick={() => { sound.playClick(); setActiveBook(book); }}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
              activeBook === book
                ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-[0_0_16px_rgba(143,180,227,0.25)]'
                : 'text-[#8793A8] hover:text-[#EEF1F6] hover:bg-white/5'
            }`}
          >
            Minna no Nihongo {book} · Bab {book === 'I' ? '1–25' : '26–50'}
          </button>
        ))}
      </div>

      {/* ── Chapters Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {filteredChapters.map((chapter) => {
          const wordsInBab = KOTOBA_DATA.filter((k) => k.bab === chapter.bab);
          const learnedCount = wordsInBab.filter((k) => learnedKotobaIds.includes(k.id)).length;
          const pct = chapter.totalKata > 0 ? Math.round((learnedCount / chapter.totalKata) * 100) : 0;
          const isDone = pct === 100;

          return (
            <div
              key={chapter.bab}
              onClick={() => { sound.playClick(); setSelectedBab(chapter.bab); }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer border transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(143,180,227,0.25)] p-4 flex flex-col justify-between ${
                isDone
                  ? 'bg-gradient-to-br from-[#0F3025] to-[#16294A] border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  : 'bg-[#16294A] border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50 shadow-[0_4px_16px_rgba(12,27,51,0.4)]'
              }`}
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-[#1F3760]/20 to-[#8FB4E3]/10 rounded-2xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold text-[#8793A8] uppercase tracking-wider font-mono">
                    第{chapter.bab}課
                  </span>
                  {learnedCount > 0 && (
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full flex items-center gap-0.5 ${
                      isDone
                        ? 'text-emerald-400 bg-emerald-500/15 border border-emerald-500/30'
                        : 'text-[#8FB4E3] bg-[#8FB4E3]/10 border border-[#8FB4E3]/30'
                    }`}>
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      {pct}%
                    </span>
                  )}
                </div>

                <h3 className={`text-3xl sm:text-4xl font-black tracking-tight group-hover:text-[#8FB4E3] transition-colors font-['Manrope'] ${
                  isDone ? 'text-emerald-400' : 'text-[#EEF1F6]'
                }`}>
                  {chapter.bab}
                </h3>

                <p className="text-[11px] font-semibold text-[#8793A8] mt-1">
                  {chapter.totalKata} kata · {learnedCount} hafal
                </p>

                {/* Badge fitur materi di bab ini */}
                <div className="flex flex-wrap gap-1 mt-2">
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#1F3760]/60 text-[#8FB4E3] border border-[#8FB4E3]/30">
                    文法 Bunpou
                  </span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-[#0C1B33]/80 text-[#8793A8] border border-[#8FB4E3]/20">
                    会話 Kaiwa
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="relative z-10 mt-4 pt-3 border-t border-[#8FB4E3]/15">
                <div className="w-full h-1.5 rounded-full overflow-hidden bg-[#0C1B33]/80 flex">
                  {chapter.categories.length > 0 ? (
                    chapter.categories.map((c, i) => (
                      <div
                        key={i}
                        style={{ width: `${(c.count / chapter.totalKata) * 100}%`, backgroundColor: c.color }}
                        className="h-full opacity-70"
                        title={`${c.name}: ${c.count} kata`}
                      />
                    ))
                  ) : (
                    <div
                      className="h-full bg-gradient-to-r from-[#1F3760] to-[#8FB4E3] rounded-full shadow-[0_0_6px_rgba(143,180,227,0.4)]"
                      style={{ width: `${Math.max(4, pct)}%` }}
                    />
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
