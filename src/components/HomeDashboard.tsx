import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  PenTool, 
  Award, 
  Layers, 
  Shuffle, 
  Clock, 
  ArrowRight, 
  Volume2, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  Languages
} from 'lucide-react';
import { DailyKanjiOrbit } from './DailyKanjiOrbit';
import { KanjiItem, KotobaItem } from '../types';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { speakJapanese, sound } from '../utils/audio';

interface HomeDashboardProps {
  onNavigate: (tab: 'kana' | 'kotoba' | 'kanji' | 'latihan') => void;
  onSelectKanji: (kanji: KanjiItem) => void;
  onSelectChapter: (bab: number) => void;
  learnedKotobaCount?: number;
  learnedKanjiCount?: number;
  streakDays?: number;
  learnedKanjiIds: number[];
  learnedKotobaIds: string[];
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  onSelectKanji,
  onSelectChapter,
  learnedKotobaCount,
  learnedKanjiCount,
  streakDays,
  learnedKanjiIds,
  learnedKotobaIds,
}) => {
  const totalKanji = KANJI_DATA.length; // 329
  const totalKotoba = KOTOBA_DATA.length; // 2910
  
  const kanjiPct = Math.round((learnedKanjiIds.length / totalKanji) * 100) || 0;
  const kotobaPct = Math.round((learnedKotobaIds.length / totalKotoba) * 100) || 0;

  // Interactive Kanji of the Day Index & Navigation
  const [kanjiNavIndex, setKanjiNavIndex] = useState(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return dayOfYear % KANJI_DATA.length;
  });

  const kanjiOfTheDay = KANJI_DATA[kanjiNavIndex] || KANJI_DATA[0];

  const handlePrevKanji = () => {
    sound.playClick();
    setKanjiNavIndex((prev) => (prev - 1 + KANJI_DATA.length) % KANJI_DATA.length);
  };

  const handleNextKanji = () => {
    sound.playClick();
    setKanjiNavIndex((prev) => (prev + 1) % KANJI_DATA.length);
  };

  // Interactive Kotoba of the Day Index & Navigation
  const [kotobaNavIndex, setKotobaNavIndex] = useState(() => {
    const today = new Date();
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    return (dayOfYear * 7) % KOTOBA_DATA.length;
  });

  const kotobaOfTheDay = KOTOBA_DATA[kotobaNavIndex] || KOTOBA_DATA[0];

  const handlePrevKotoba = () => {
    sound.playClick();
    setKotobaNavIndex((prev) => (prev - 1 + KOTOBA_DATA.length) % KOTOBA_DATA.length);
  };

  const handleNextKotoba = () => {
    sound.playClick();
    setKotobaNavIndex((prev) => (prev + 1) % KOTOBA_DATA.length);
  };

  return (
    <div className="space-y-10 sm:space-y-12">
      
      {/* HERO SECTION: CYBER-ZEN BLUE SAKURA SHOWCASE */}
      <section className="relative overflow-hidden text-left">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left border border-[#2457C5]/40 shadow-[0_20px_60px_-15px_rgba(16,28,61,0.6),0_0_50px_rgba(85,185,245,0.18)] bg-gradient-to-br from-[#101C3D] via-[#142654] to-[#0B142B] text-white">
          
          {/* Subtle Ambient Glow Spheres */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#2457C5]/25 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#55B9F5]/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Vision, Headline, Actions, Stats */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Futuristic Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#55B9F5]/40 text-[#55B9F5] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_15px_rgba(85,185,245,0.3)]">
                <span className="w-2 h-2 rounded-full bg-[#55B9F5] animate-ping" />
                <span>Blue Sakura Future · V3.0</span>
                <span className="text-white/40">|</span>
                <span className="text-[#DCE9FF]">Minna no Nihongo & JLPT N5–N4</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Manrope'] leading-[1.12]">
                Kuasai Bahasa Jepang <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-white via-[#DCE9FF] to-[#55B9F5] text-transparent bg-clip-text drop-shadow-[0_4px_20px_rgba(85,185,245,0.4)]">
                  Terstruktur & Presisi
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-[#DCE9FF]/85 text-sm sm:text-base leading-relaxed max-w-xl">
                Platform pembelajaran bahasa Jepang modern dengan 312 aksara Kana, 2.910 kosakata Minna no Nihongo Bab 1–50, {totalKanji} Kanji JLPT N5 & N4, animasi goresan interaktif, serta 4 mode latihan mandiri.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kotoba');
                  }}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#2457C5] to-[#55B9F5] hover:brightness-110 text-white font-black text-sm sm:text-base shadow-[0_0_25px_rgba(85,185,245,0.45)] hover:shadow-[0_0_35px_rgba(85,185,245,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 active:scale-95"
                >
                  <BookOpen className="w-5 h-5 text-white" />
                  <span>Materi Bab 1–50</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kana');
                  }}
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
                >
                  <Languages className="w-5 h-5 text-[#55B9F5]" />
                  <span>Aksara Kana (あ・ア)</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kanji');
                  }}
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
                >
                  <PenTool className="w-5 h-5 text-[#55B9F5]" />
                  <span>Belajar Kanji</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigate('latihan');
                  }}
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
                >
                  <Award className="w-5 h-5 text-[#8975E8]" />
                  <span>Mode Latihan</span>
                </button>
              </div>

              {/* 3 Quick Stat Counter Cards */}
              <div className="grid grid-cols-3 gap-3 pt-4 max-w-md">
                <div 
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kotoba');
                  }}
                  className="bg-white/10 hover:bg-white/15 cursor-pointer backdrop-blur-md p-3.5 rounded-2xl border border-[#55B9F5]/30 hover:border-[#55B9F5]/60 text-center shadow-xs transition-all hover:-translate-y-0.5 group"
                  title="Klik untuk membuka Materi Bab 1–50"
                >
                  <span className="block text-2xl sm:text-3xl font-black text-white font-['Manrope'] group-hover:text-[#55B9F5] transition-colors">50</span>
                  <span className="text-[11px] text-[#55B9F5] font-black uppercase tracking-wider flex items-center justify-center gap-1">
                    Bab Materi &rarr;
                  </span>
                </div>
                <div 
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kotoba');
                  }}
                  className="bg-white/10 hover:bg-white/15 cursor-pointer backdrop-blur-md p-3.5 rounded-2xl border border-white/15 hover:border-[#55B9F5]/40 text-center shadow-xs transition-all hover:-translate-y-0.5 group"
                  title="Klik untuk membuka Kosakata"
                >
                  <span className="block text-2xl sm:text-3xl font-black text-[#55B9F5] font-['Manrope']">2.910</span>
                  <span className="text-[11px] text-[#DCE9FF]/70 font-bold uppercase tracking-wider">Kosakata</span>
                </div>
                <div 
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kanji');
                  }}
                  className="bg-white/10 hover:bg-white/15 cursor-pointer backdrop-blur-md p-3.5 rounded-2xl border border-white/15 hover:border-[#8975E8]/40 text-center shadow-xs transition-all hover:-translate-y-0.5 group"
                  title="Klik untuk membuka Kanji N5 & N4"
                >
                  <span className="block text-2xl sm:text-3xl font-black text-[#8975E8] font-['Manrope']">{totalKanji}</span>
                  <span className="text-[11px] text-[#DCE9FF]/70 font-bold uppercase tracking-wider">Kanji N5 & N4</span>
                </div>
              </div>

            </div>

            {/* Right Column: Daily Kanji Orbit Hologram */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <DailyKanjiOrbit onSelectKanji={onSelectKanji} />
            </div>

          </div>

        </div>
      </section>

      {/* PROGRESS OVERVIEW BENTO DUO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Kanji Hafal Progress */}
        <div className="card-soft p-6 sm:p-7 rounded-3xl relative overflow-hidden text-left border border-[#2457C5]/30 bg-[#0D1830] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold text-[#6B85B5] uppercase tracking-wider">Target Kemajuan</span>
              <h3 className="text-lg font-extrabold text-[#DCE9FF] flex items-center gap-2 mt-0.5 font-['Manrope']">
                <PenTool className="w-5 h-5 text-[#55B9F5]" />
                <span>Penguasaan Kanji</span>
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#DCE9FF] font-['Manrope']">
                {learnedKanjiIds.length} <span className="text-sm font-semibold text-[#6B85B5]">/ {totalKanji}</span>
              </div>
              <span className="text-xs font-bold text-[#55B9F5] bg-white/8 px-2.5 py-0.5 rounded-full border border-[#2457C5]/25">
                {kanjiPct}% Tuntas
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-white/8 rounded-full overflow-hidden p-0.5 border border-[#2457C5]/25">
            <div 
              className="h-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5] rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(85,185,245,0.5)]"
              style={{ width: `${Math.max(4, kanjiPct)}%` }}
            ></div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#6B85B5] font-medium">
            <span>{totalKanji} Kanji N5 & N4 Lengkap dengan Kun, On & Kalimat Contoh</span>
            <button 
              onClick={() => onNavigate('kanji')}
              className="text-[#55B9F5] hover:text-[#55B9F5] font-bold flex items-center gap-1 transition-colors"
            >
              Lanjutkan Belajar <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Kotoba Hafal Progress */}
        <div className="card-soft p-6 sm:p-7 rounded-3xl relative overflow-hidden text-left border border-[#2457C5]/30 bg-[#0D1830] shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold text-[#6B85B5] uppercase tracking-wider">Target Kemajuan</span>
              <h3 className="text-lg font-extrabold text-[#DCE9FF] flex items-center gap-2 mt-0.5 font-['Manrope']">
                <BookOpen className="w-5 h-5 text-[#8975E8]" />
                <span>Penguasaan Kosakata (Kotoba)</span>
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#DCE9FF] font-['Manrope']">
                {learnedKotobaIds.length} <span className="text-sm font-semibold text-[#6B85B5]">/ {totalKotoba}</span>
              </div>
              <span className="text-xs font-bold text-[#8975E8] bg-[#2457C5]/12 px-2.5 py-0.5 rounded-full border border-[#2457C5]/25">
                {kotobaPct}% Tuntas
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-white/8 rounded-full overflow-hidden p-0.5 border border-[#2457C5]/25">
            <div 
              className="h-full bg-gradient-to-r from-[#2457C5] via-[#55B9F5] to-[#8975E8] rounded-full transition-all duration-700 shadow-[0_0_8px_rgba(137,117,232,0.5)]"
              style={{ width: `${Math.max(4, kotobaPct)}%` }}
            ></div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#6B85B5] font-medium">
            <span>Bab 1–50 Terbagi ke 8 Kategori Tematik Lengkap</span>
            <button 
              onClick={() => onNavigate('kotoba')}
              className="text-[#55B9F5] hover:text-[#55B9F5] font-bold flex items-center gap-1 transition-colors"
            >
              Buka Daftar Bab <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

      {/* FEATURED WIDGETS: KANJI & KOTOBA OF THE DAY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
        
        {/* Kanji of the Day */}
        <div className="lg:col-span-7 card-soft p-6 sm:p-8 rounded-3xl border border-[#2457C5]/30 bg-[#0D1830] flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/8 text-[#55B9F5] text-xs font-extrabold border border-[#2457C5]/25">
                <Sparkles className="w-3.5 h-3.5 text-[#55B9F5]" />
                Kanji Pilihan · Level {kanjiOfTheDay.jlpt} ({kanjiNavIndex + 1}/{totalKanji})
              </span>

              {/* Navigation Controls: Back, Audio, Next */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevKanji}
                  className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-[#6B85B5] hover:text-[#DCE9FF] transition-all border border-[#2457C5]/25 active:scale-95 shadow-xs"
                  title="Kanji Sebelumnya (Back)"
                  aria-label="Kanji Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => speakJapanese(kanjiOfTheDay.reading)}
                  className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-[#6B85B5] hover:text-[#DCE9FF] transition-all border border-[#2457C5]/25 active:scale-95 shadow-xs"
                  title="Dengarkan pengucapan audio"
                  aria-label="Dengarkan pengucapan audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextKanji}
                  className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-[#6B85B5] hover:text-[#DCE9FF] transition-all border border-[#2457C5]/25 active:scale-95 shadow-xs"
                  title="Kanji Berikutnya (Next)"
                  aria-label="Kanji Berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-6 mt-4">
              {/* Big Kanji Badge */}
              <div 
                onClick={() => onSelectKanji(kanjiOfTheDay)}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#101C3D] to-[#2457C5] text-white flex flex-col items-center justify-center cursor-pointer shadow-md shadow-[#101C3D]/15 hover:scale-105 transition-transform shrink-0"
              >
                <span className="kanji-font text-5xl sm:text-6xl font-black">{kanjiOfTheDay.kanji}</span>
                <span className="text-[10px] text-[#55B9F5] font-bold mt-1 font-mono">{kanjiOfTheDay.strokeCount} Goresan</span>
              </div>

              {/* Kanji details */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-black text-[#DCE9FF] font-['Manrope']">
                    {kanjiOfTheDay.reading}
                  </span>
                  <span className="text-sm font-bold text-[#6B85B5]">
                    ({kanjiOfTheDay.meaning})
                  </span>
                </div>

                <div className="text-xs text-[#6B85B5] space-y-1">
                  <div>
                    <span className="font-bold text-[#55B9F5] bg-white/8 px-1.5 py-0.5 rounded text-[10px] mr-1.5 border border-[#2457C5]/25">
                      ON
                    </span>
                    <span className="font-mono text-[#DCE9FF] font-bold">{kanjiOfTheDay.onyomi}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#8975E8] bg-[#2457C5]/12 px-1.5 py-0.5 rounded text-[10px] mr-1.5 border border-[#2457C5]/25">
                      KUN
                    </span>
                    <span className="font-mono text-[#DCE9FF] font-bold">{kanjiOfTheDay.kunyomi}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#6B85B5]">
                    Kategori: <strong className="text-[#DCE9FF]">{kanjiOfTheDay.category}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#2457C5]/25 mt-6 flex items-center justify-between">
            <span className="text-xs text-[#6B85B5] font-medium">
              Pelajari urutan goresan, kanvas menulis, dan kalimat contoh
            </span>
            <button
              onClick={() => onSelectKanji(kanjiOfTheDay)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Latih Kanji Ini</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#55B9F5]" />
            </button>
          </div>
        </div>

        {/* Kotoba of the Day */}
        <div className="lg:col-span-5 card-soft p-6 sm:p-8 rounded-3xl border border-[#2457C5]/30 bg-[#0D1830] flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2457C5]/12 text-[#55B9F5] text-xs font-extrabold border border-[#2457C5]/25">
                <BookOpen className="w-3.5 h-3.5 text-[#55B9F5]" />
                Kosakata Pilihan · Bab {kotobaOfTheDay.bab} ({kotobaNavIndex + 1}/{totalKotoba})
              </span>

              {/* Navigation Controls: Back, Audio, Next */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevKotoba}
                  className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-[#6B85B5] hover:text-[#DCE9FF] transition-all border border-[#2457C5]/25 active:scale-95 shadow-xs"
                  title="Kosakata Sebelumnya (Back)"
                  aria-label="Kosakata Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => speakJapanese(kotobaOfTheDay.kana || kotobaOfTheDay.kanji)}
                  className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-[#6B85B5] hover:text-[#DCE9FF] transition-all border border-[#2457C5]/25 active:scale-95 shadow-xs"
                  title="Dengarkan pengucapan audio"
                  aria-label="Dengarkan pengucapan audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextKotoba}
                  className="p-2 rounded-xl bg-white/8 hover:bg-white/15 text-[#6B85B5] hover:text-[#DCE9FF] transition-all border border-[#2457C5]/25 active:scale-95 shadow-xs"
                  title="Kosakata Berikutnya (Next)"
                  aria-label="Kosakata Berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#DCE9FF] kanji-font">
                  {kotobaOfTheDay.kanji}
                </span>
                <p className="text-sm font-bold text-[#55B9F5] mt-1">
                  {kotobaOfTheDay.kana}
                </p>
              </div>

              <div className="bg-white/8 p-3.5 rounded-2xl border border-[#2457C5]/25">
                <span className="text-[10px] text-[#6B85B5] font-bold uppercase tracking-wider block mb-0.5">
                  Romaji & Arti
                </span>
                <p className="text-sm font-semibold text-[#DCE9FF]">
                  <span className="font-mono text-[#55B9F5] font-bold">{kotobaOfTheDay.romaji}</span> — {kotobaOfTheDay.arti}
                </p>
              </div>

              <div className="inline-block px-2.5 py-1 rounded-lg bg-[#2457C5]/12 text-[#55B9F5] text-xs font-bold border border-[#2457C5]/25">
                {kotobaOfTheDay.kategori}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#2457C5]/25 mt-6 flex items-center justify-between">
            <span className="text-xs text-[#6B85B5] font-medium">
              Minna no Nihongo Bab {kotobaOfTheDay.bab}
            </span>
            <button
              onClick={() => onSelectChapter(kotobaOfTheDay.bab)}
              className="px-4 py-2 rounded-xl bg-[#101C3D] hover:bg-[#2457C5] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Buka Bab Ini</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#55B9F5]" />
            </button>
          </div>
        </div>

      </section>

      {/* 4 PILLARS OF ZENORA (HERO PORTAL CARDS) */}
      <section className="text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#55B9F5]/30 text-[#55B9F5] text-xs font-mono font-bold uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ekosistem Pembelajaran Zenora</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-['Manrope']">
              4 Pilar Utama Pembelajaran
            </h2>
            <p className="text-xs sm:text-sm text-[#A5BDE8]">
              Kurikulum terstruktur dari pengenalan aksara, materi komprehensif, kanji beranimasi, hingga 18 mode ujian interaktif.
            </p>
          </div>
          <button
            onClick={() => onNavigate('latihan')}
            className="text-xs font-bold text-[#55B9F5] hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Buka 18 Mode Latihan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Pillar 1: Materi Bab 1-50 */}
          <div 
            onClick={() => {
              sound.playClick();
              onNavigate('kotoba');
            }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#55B9F5]/60 bg-gradient-to-b from-[#0D1830] to-[#0A1224] p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(16,28,61,0.5)] hover:shadow-[0_15px_40px_rgba(85,185,245,0.25)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <BookOpen className="w-20 h-20 text-[#55B9F5]" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2457C5] to-[#55B9F5] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(85,185,245,0.4)] group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#55B9F5] font-black uppercase tracking-wider block mb-1">
                Minna no Nihongo I & II
              </span>
              <h4 className="font-black text-lg text-white mb-1.5 font-['Manrope'] group-hover:text-[#55B9F5] transition-colors">
                Materi Bab 1–50
              </h4>
              <p className="text-xs text-[#A5BDE8]/80 leading-relaxed">
                Tata bahasa (Bunpou), pola & contoh kalimat (Bunkei/Reibun), percakapan (Kaiwa), dan 2.910 kosakata.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#55B9F5]">
              <span>Buka Materi Bab</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 2: Aksara Kana */}
          <div 
            onClick={() => {
              sound.playClick();
              onNavigate('kana');
            }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#55B9F5]/60 bg-gradient-to-b from-[#0D1830] to-[#0A1224] p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(16,28,61,0.5)] hover:shadow-[0_15px_40px_rgba(85,185,245,0.25)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Languages className="w-20 h-20 text-[#55B9F5]" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1A3A82] to-[#55B9F5] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(85,185,245,0.35)] group-hover:scale-110 transition-transform">
                <Languages className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#55B9F5] font-black uppercase tracking-wider block mb-1">
                Aksara Dasar
              </span>
              <h4 className="font-black text-lg text-white mb-1.5 font-['Manrope'] group-hover:text-[#55B9F5] transition-colors">
                Hiragana & Katakana
              </h4>
              <p className="text-xs text-[#A5BDE8]/80 leading-relaxed">
                312 karakter lengkap: Gojuon, Dakuon, Handakuon, Yoon, serta kanvas menulis interaktif dengan panduan goresan.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#55B9F5]">
              <span>Mulai Belajar Kana</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 3: Kanji N5 & N4 */}
          <div 
            onClick={() => {
              sound.playClick();
              onNavigate('kanji');
            }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#8975E8]/60 bg-gradient-to-b from-[#0D1830] to-[#0A1224] p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(16,28,61,0.5)] hover:shadow-[0_15px_40px_rgba(137,117,232,0.25)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <PenTool className="w-20 h-20 text-[#8975E8]" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2457C5] to-[#8975E8] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(137,117,232,0.35)] group-hover:scale-110 transition-transform">
                <PenTool className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#8975E8] font-black uppercase tracking-wider block mb-1">
                JLPT N5 & N4
              </span>
              <h4 className="font-black text-lg text-white mb-1.5 font-['Manrope'] group-hover:text-[#8975E8] transition-colors">
                Kanji Interaktif
              </h4>
              <p className="text-xs text-[#A5BDE8]/80 leading-relaxed">
                424 Kanji lengkap dengan animasi urutan goresan, kanvas menulis digital, Onyomi & Kunyomi, serta kalimat contoh.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#8975E8]">
              <span>Jelajahi Kanji</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pillar 4: 18 Mode Latihan & Ujian */}
          <div 
            onClick={() => {
              sound.playClick();
              onNavigate('latihan');
            }}
            className="group relative overflow-hidden rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#55B9F5]/60 bg-gradient-to-b from-[#0D1830] to-[#0A1224] p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(16,28,61,0.5)] hover:shadow-[0_15px_40px_rgba(85,185,245,0.25)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award className="w-20 h-20 text-[#55B9F5]" />
            </div>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2457C5] to-[#55B9F5] flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(85,185,245,0.4)] group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-[#55B9F5] font-black uppercase tracking-wider block mb-1">
                Evaluasi Terpadu
              </span>
              <h4 className="font-black text-lg text-white mb-1.5 font-['Manrope'] group-hover:text-[#55B9F5] transition-colors">
                18 Mode Latihan
              </h4>
              <p className="text-xs text-[#A5BDE8]/80 leading-relaxed">
                Pilihan Ganda, Matching, Rumpang, Susun Kalimat, Choukai, Dokkai, Kaiwa, Menulis, Timed Exam, dan Ujian Akhir.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#55B9F5]">
              <span>Mulai Latihan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
