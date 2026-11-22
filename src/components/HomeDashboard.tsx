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
                    onNavigate('kana');
                  }}
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#2457C5] to-[#55B9F5] hover:brightness-110 text-white font-black text-sm sm:text-base shadow-[0_0_25px_rgba(85,185,245,0.45)] hover:shadow-[0_0_35px_rgba(85,185,245,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2.5 active:scale-95"
                >
                  <Languages className="w-5 h-5 text-white" />
                  <span>Belajar Kana (あ・ア)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    onNavigate('kotoba');
                  }}
                  className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
                >
                  <BookOpen className="w-5 h-5 text-[#55B9F5]" />
                  <span>Mulai Kotoba</span>
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
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center shadow-xs">
                  <span className="block text-2xl sm:text-3xl font-black text-white font-['Manrope']">50</span>
                  <span className="text-[11px] text-[#DCE9FF]/70 font-bold uppercase tracking-wider">Bab Materi</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center shadow-xs">
                  <span className="block text-2xl sm:text-3xl font-black text-[#55B9F5] font-['Manrope']">2.910</span>
                  <span className="text-[11px] text-[#DCE9FF]/70 font-bold uppercase tracking-wider">Kosakata</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 text-center shadow-xs">
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

      {/* QUICK WORKOUT MODES (4 BENTO WORKOUT CARDS) */}
      <section className="text-left">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-[#DCE9FF] font-['Manrope']">4 Cara Berlatih Hafalan</h2>
            <p className="text-sm text-[#6B85B5]">Pilih metode interaktif yang paling cocok untuk menguji daya ingat Anda.</p>
          </div>
          <button
            onClick={() => onNavigate('latihan')}
            className="text-xs font-bold text-[#55B9F5] hover:text-[#55B9F5] flex items-center gap-1 transition-colors"
          >
            <span>Buka Semua Latihan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Pilihan Ganda */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#2457C5] bg-[#0D1830] flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/15 border border-[#2457C5]/20 flex items-center justify-center text-[#55B9F5] mb-4">
                <Award className="w-6 h-6 text-[#55B9F5]" />
              </div>
              <h4 className="font-black text-base text-[#DCE9FF] mb-1 font-['Manrope']">Pilihan Ganda</h4>
              <p className="text-xs text-[#6B85B5] leading-relaxed">
                Pilih arti atau kanji yang tepat dari 4 opsi jawaban dengan timer dan streak point.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#2457C5]/25 flex items-center justify-between text-xs font-bold text-[#55B9F5]">
              <span>Mulai Kuis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Kartu Hafalan */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#55B9F5] bg-[#0D1830] flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#2457C5]/12 border border-[#55B9F5]/30 flex items-center justify-center text-[#55B9F5] mb-4">
                <Layers className="w-6 h-6 text-[#55B9F5]" />
              </div>
              <h4 className="font-black text-base text-[#DCE9FF] mb-1 font-['Manrope']">Kartu Hafalan</h4>
              <p className="text-xs text-[#6B85B5] leading-relaxed">
                Balik kartu 3D interaktif, lalu tandai sudah hafal atau belum untuk pengulangan berkala.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#2457C5]/25 flex items-center justify-between text-xs font-bold text-[#55B9F5]">
              <span>Buka Flashcard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Menjodohkan */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-[#8975E8] bg-[#0D1830] flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/8 border border-[#8975E8]/30 flex items-center justify-center text-[#8975E8] mb-4">
                <Shuffle className="w-6 h-6 text-[#8975E8]" />
              </div>
              <h4 className="font-black text-base text-[#DCE9FF] mb-1 font-['Manrope']">Menjodohkan</h4>
              <p className="text-xs text-[#6B85B5] leading-relaxed">
                Hubungkan kata bahasa Jepang dengan terjemahan artinya secara interaktif.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#2457C5]/25 flex items-center justify-between text-xs font-bold text-[#8975E8]">
              <span>Mainkan Game</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: Ketik Romaji */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#2457C5]/30 hover:border-emerald-400 bg-[#0D1830] flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-400 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-black text-base text-[#DCE9FF] mb-1 font-['Manrope']">Ketik Romaji</h4>
              <p className="text-xs text-[#6B85B5] leading-relaxed">
                Baca huruf Jepang yang muncul, lalu ketik ejaan romajinya secepat dan setepat mungkin.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#2457C5]/25 flex items-center justify-between text-xs font-bold text-emerald-400">
              <span>Tes Ketik</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
