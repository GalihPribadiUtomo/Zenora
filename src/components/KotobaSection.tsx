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
      <div className="relative overflow-hidden rounded-3xl border border-[#7857FF]/25 shadow-[0_20px_60px_-15px_rgba(8,13,43,0.9),0_0_40px_rgba(120,87,255,0.15)] bg-gradient-to-br from-[#080D2B] via-[#0D1238] to-[#12194A]">
        {/* Glow blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#7857FF]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-[#329BFF]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12194A]/80 border border-[#7857FF]/35 text-[#F5F6FF] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_12px_rgba(120,87,255,0.25)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7857FF] animate-pulse" />
                Minna no Nihongo I & II · Materi Lengkap Bab 1–50
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-['Manrope'] flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[#7857FF]" />
                Materi & Pelajaran Bab 1–50
              </h1>

              <p className="text-[#AAB3D5] text-sm sm:text-base leading-relaxed max-w-xl">
                Akses lengkap pembelajaran Minna no Nihongo Bab 1–50: <span className="text-[#945CFF] font-bold">Tata Bahasa (Bunpou)</span>, <span className="text-[#329BFF] font-bold">Pola Kalimat (Bunkei)</span>, <span className="text-[#945CFF] font-bold">Percakapan Interaktif (Kaiwa)</span>, <span className="text-[#329BFF] font-bold">2.910 Kosakata</span>, dan <span className="text-white font-bold">Kanji</span> terkait. Pilih nomor bab untuk mulai belajar!
              </p>

              {/* Progress bar */}
              <div className="max-w-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs text-[#737FA8] font-semibold">Progress Hafalan</span>
                  <span className="text-xs text-[#945CFF] font-bold">
                    {totalLearned} / {totalWords}
                  </span>
                </div>
                <div className="h-2 bg-[#080D2B] rounded-full overflow-hidden border border-[#7857FF]/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7857FF] to-[#329BFF] shadow-[0_0_8px_rgba(120,87,255,0.5)] transition-all duration-700"
                    style={{ width: `${Math.max(1, Math.round((totalLearned / totalWords) * 100))}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 text-[#7857FF] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari bab atau kata..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#080D2B]/80 border border-[#7857FF]/25 text-sm text-white placeholder-[#737FA8] focus:outline-none focus:ring-2 focus:ring-[#7857FF]/40 focus:border-[#7857FF] transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Book Tabs ── */}
      <div className="flex items-center gap-2 p-1.5 bg-[#0D1238] rounded-2xl border border-[#7857FF]/25 max-w-lg shadow-[0_4px_20px_rgba(8,13,43,0.6)]">
        {(['I', 'II'] as const).map((book) => (
          <button
            key={book}
            onClick={() => { sound.playClick(); setActiveBook(book); }}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
              activeBook === book
                ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-white border border-[#7857FF]/40 shadow-[0_0_20px_rgba(120,87,255,0.45)]'
                : 'text-[#AAB3D5] hover:text-white hover:bg-[#12194A]/60'
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
                  <span className="text-xs font-bold text-[#8FB4E3] uppercase tracking-wider font-mono">
                    第{chapter.bab}課
                  </span>
                  {learnedCount > 0 && (
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 ${
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

                <p className="text-xs font-semibold text-[#CBD8EC] mt-1">
                  {chapter.totalKata} kata · {learnedCount} hafal
                </p>

                {/* Badge fitur materi di bab ini */}
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/35">
                    文法 Bunpou
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#0C1B33] text-[#CBD8EC] border border-[#8FB4E3]/25">
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
