import React, { useState } from 'react';
import { 
  BookOpen, 
  PenTool, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Volume2, 
  Layers, 
  Clock, 
  Shuffle,
  Languages,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { KANJI_DATA } from '../data/kanjiData';
import { KOTOBA_DATA } from '../data/kotobaData';
import { speakJapanese, sound } from '../utils/audio';
import { KanjiItem } from '../types';
import { DailyKanjiOrbit } from './DailyKanjiOrbit';
import { getDailyKanji } from '../utils/dailyKanji';

interface HomeDashboardProps {
  onNavigate: (tab: 'kana' | 'kotoba' | 'kanji' | 'latihan') => void;
  learnedKotobaIds: string[];
  learnedKanjiIds: number[];
  onSelectKanji: (kanji: KanjiItem) => void;
  onSelectChapter: (bab: number) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  onNavigate,
  learnedKotobaIds,
  learnedKanjiIds,
  onSelectKanji,
  onSelectChapter
}) => {
  const totalKotoba = KOTOBA_DATA.length || 2910;
  const totalKanji = KANJI_DATA.length;

  // Kanji state with Next and Back navigation
  const [kanjiNavIndex, setKanjiNavIndex] = useState<number>(() => {
    return new Date().getDate() % (KANJI_DATA.length || 1);
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

  // Kotoba state with Next and Back navigation
  const [kotobaNavIndex, setKotobaNavIndex] = useState<number>(() => {
    return (new Date().getDate() * 7) % (KOTOBA_DATA.length || 1);
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

  const kotobaPct = Math.min(100, Math.round((learnedKotobaIds.length / totalKotoba) * 100));
  const kanjiPct = Math.min(100, Math.round((learnedKanjiIds.length / totalKanji) * 100));

  return (
    <div className="space-y-10 pb-16">
      
      {/* HERO SECTION - RICH EDUCATIONAL INTERFACE */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F0EBF8] via-[#F8F3FA] to-[#EDF5F9] p-6 sm:p-10 lg:p-12 border border-[#E9E2F0] shadow-sm">
        
        {/* Soft background decorative ambient light */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-[#85B9D1]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 -mb-10 w-80 h-80 bg-[#29264B]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#29264B] leading-[1.2] font-['Manrope']">
              Belajar Bahasa Jepang <br className="hidden sm:inline" />
              Jadi <span className="bg-gradient-to-r from-[#6555A5] via-[#7B6DB8] to-[#85B9D1] bg-clip-text text-transparent">Lebih Terstruktur</span> & Menyenangkan
            </h1>

            {/* Sub-headline */}
            <p className="text-[#77738A] text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              Kuasai bahasa Jepang dengan kosakata Minna no Nihongo yang terstruktur, Kanji N5–N4, 
              serta Hiragana dan Katakana modern. Lengkapi perjalanan belajarmu dengan animasi goresan interaktif, 
              latihan menulis digital, dan empat mode latihan untuk mengasah kemampuan setiap hari.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('kana');
                }}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#29264B] to-[#85B9D1] hover:brightness-105 text-white font-bold text-sm sm:text-base shadow-md shadow-[#29264B]/20 hover:shadow-lg hover:shadow-[#29264B]/25 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 active:scale-95"
              >
                <Languages className="w-5 h-5" />
                <span>Belajar Kana (あ・ア)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('kotoba');
                }}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-[#F8F3FA] text-[#29264B] font-bold text-sm sm:text-base border border-[#E9E2F0] shadow-2xs hover:border-[#85B9D1]/50 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
              >
                <BookOpen className="w-5 h-5 text-[#29264B]" />
                Mulai Kotoba
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('kanji');
                }}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-[#F8F3FA] text-[#29264B] font-bold text-sm sm:text-base border border-[#E9E2F0] shadow-2xs hover:border-[#85B9D1]/50 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
              >
                <PenTool className="w-5 h-5 text-[#29264B]" />
                Belajar Kanji
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onNavigate('latihan');
                }}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-[#F0EBF8] text-[#29264B] font-bold text-sm sm:text-base border border-[#E9E2F0] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95 shadow-2xs"
              >
                <Award className="w-5 h-5 text-[#85B9D1]" />
                Mode Latihan
              </button>
            </div>

            {/* Quick Stat Counter Cards */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-md">
              <div className="bg-white p-3.5 rounded-2xl border border-[#E9E2F0] shadow-2xs text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[#29264B] font-['Manrope']">50</span>
                <span className="text-[11px] text-[#77738A] font-bold uppercase tracking-wider">Bab Materi</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-[#E9E2F0] shadow-2xs text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[#29264B] font-['Manrope']">2.910</span>
                <span className="text-[11px] text-[#77738A] font-bold uppercase tracking-wider">Kosakata</span>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-[#E9E2F0] shadow-2xs text-center">
                <span className="block text-2xl sm:text-3xl font-black text-[#85B9D1] font-['Manrope']">{totalKanji}</span>
                <span className="text-[11px] text-[#77738A] font-bold uppercase tracking-wider">Kanji N5 & N4</span>
              </div>
            </div>

          </div>

          {/* Right: Daily Kanji Orbit Animation */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <DailyKanjiOrbit onSelectKanji={onSelectKanji} />
          </div>

        </div>

      </section>

      {/* PROGRESS OVERVIEW CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Kanji Hafal Progress */}
        <div className="card-soft p-6 sm:p-7 rounded-3xl relative overflow-hidden text-left border border-[#E9E2F0] bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold text-[#77738A] uppercase tracking-wider">Target Kemajuan</span>
              <h3 className="text-lg font-extrabold text-[#29264B] flex items-center gap-2 mt-0.5 font-['Manrope']">
                <PenTool className="w-5 h-5 text-[#29264B]" />
                <span>Penguasaan Kanji</span>
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#29264B] font-['Manrope']">
                {learnedKanjiIds.length} <span className="text-sm font-semibold text-[#77738A]">/ {totalKanji}</span>
              </div>
              <span className="text-xs font-bold text-[#29264B] bg-[#F0EBF8] px-2.5 py-0.5 rounded-full border border-[#29264B]/20">
                {kanjiPct}% Tuntas
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-[#F0EBF8] rounded-full overflow-hidden p-0.5 border border-[#E9E2F0]">
            <div 
              className="h-full bg-gradient-to-r from-[#29264B] to-[#85B9D1] rounded-full transition-all duration-700"
              style={{ width: `${Math.max(4, kanjiPct)}%` }}
            ></div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#77738A] font-medium">
            <span>{totalKanji} Kanji N5 & N4 Lengkap dengan Kun, On & Contoh Kalimat</span>
            <button 
              onClick={() => onNavigate('kanji')}
              className="text-[#29264B] hover:text-[#85B9D1] font-bold flex items-center gap-1 transition-colors"
            >
              Lanjutkan Belajar <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Kotoba Hafal Progress */}
        <div className="card-soft p-6 sm:p-7 rounded-3xl relative overflow-hidden text-left border border-[#E9E2F0] bg-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-[11px] font-bold text-[#77738A] uppercase tracking-wider">Target Kemajuan</span>
              <h3 className="text-lg font-extrabold text-[#29264B] flex items-center gap-2 mt-0.5 font-['Manrope']">
                <BookOpen className="w-5 h-5 text-[#85B9D1]" />
                <span>Penguasaan Kosakata (Kotoba)</span>
              </h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-black text-[#29264B] font-['Manrope']">
                {learnedKotobaIds.length} <span className="text-sm font-semibold text-[#77738A]">/ {totalKotoba}</span>
              </div>
              <span className="text-xs font-bold text-[#85B9D1] bg-[#EDF5F9] px-2.5 py-0.5 rounded-full border border-[#85B9D1]/20">
                {kotobaPct}% Tuntas
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-3 bg-[#F0EBF8] rounded-full overflow-hidden p-0.5 border border-[#E9E2F0]">
            <div 
              className="h-full bg-gradient-to-r from-[#85B9D1] to-[#A5C8DB] rounded-full transition-all duration-700"
              style={{ width: `${Math.max(4, kotobaPct)}%` }}
            ></div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-[#77738A] font-medium">
            <span>Bab 1–50 Terbagi ke 8 Kategori Tematik</span>
            <button 
              onClick={() => onNavigate('kotoba')}
              className="text-[#29264B] hover:text-[#85B9D1] font-bold flex items-center gap-1 transition-colors"
            >
              Buka Daftar Bab <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

      {/* FEATURED WIDGETS: KANJI & KOTOBA OF THE DAY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
        
        {/* Kanji of the Day */}
        <div className="lg:col-span-7 card-soft p-6 sm:p-8 rounded-3xl border border-[#E9E2F0] bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBF8] text-[#29264B] text-xs font-extrabold border border-[#29264B]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#85B9D1]" />
                Kanji Pilihan · Level {kanjiOfTheDay.jlpt} ({kanjiNavIndex + 1}/{totalKanji})
              </span>

              {/* Navigation Controls: Back, Audio, Next */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevKanji}
                  className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-all border border-[#E9E2F0] active:scale-95 shadow-2xs"
                  title="Kanji Sebelumnya (Back)"
                  aria-label="Kanji Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => speakJapanese(kanjiOfTheDay.reading)}
                  className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-all border border-[#E9E2F0] active:scale-95 shadow-2xs"
                  title="Dengarkan pengucapan audio"
                  aria-label="Dengarkan pengucapan audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextKanji}
                  className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-all border border-[#E9E2F0] active:scale-95 shadow-2xs"
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
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-[#29264B] to-[#3D3268] text-white flex flex-col items-center justify-center cursor-pointer shadow-md shadow-[#29264B]/15 hover:scale-105 transition-transform shrink-0"
              >
                <span className="kanji-font text-5xl sm:text-6xl font-black">{kanjiOfTheDay.kanji}</span>
                <span className="text-[10px] text-[#A5C8DB] font-bold mt-1 font-mono">{kanjiOfTheDay.strokeCount} Goresan</span>
              </div>

              {/* Kanji details */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xl sm:text-2xl font-black text-[#29264B] font-['Manrope']">
                    {kanjiOfTheDay.reading}
                  </span>
                  <span className="text-sm font-bold text-[#77738A]">
                    ({kanjiOfTheDay.meaning})
                  </span>
                </div>

                <div className="text-xs text-[#77738A] space-y-1">
                  <div>
                    <span className="font-bold text-[#29264B] bg-[#F0EBF8] px-1.5 py-0.5 rounded text-[10px] mr-1.5 border border-[#29264B]/20">
                      ON
                    </span>
                    <span className="font-mono text-[#29264B] font-bold">{kanjiOfTheDay.onyomi}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#85B9D1] bg-[#EDF5F9] px-1.5 py-0.5 rounded text-[10px] mr-1.5 border border-[#85B9D1]/20">
                      KUN
                    </span>
                    <span className="font-mono text-[#29264B] font-bold">{kanjiOfTheDay.kunyomi}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#77738A]">
                    Kategori: <strong className="text-[#29264B]">{kanjiOfTheDay.category}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E9E2F0] mt-6 flex items-center justify-between">
            <span className="text-xs text-[#77738A] font-medium">
              Pelajari urutan goresan, kanvas menulis, dan kalimat contoh
            </span>
            <button
              onClick={() => onSelectKanji(kanjiOfTheDay)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#29264B] to-[#85B9D1] hover:brightness-105 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Latih Kanji Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Kotoba of the Day */}
        <div className="lg:col-span-5 card-soft p-6 sm:p-8 rounded-3xl border border-[#E9E2F0] bg-white flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDF5F9] text-[#85B9D1] text-xs font-extrabold border border-[#85B9D1]/20">
                <BookOpen className="w-3.5 h-3.5 text-[#85B9D1]" />
                Kosakata Pilihan · Bab {kotobaOfTheDay.bab} ({kotobaNavIndex + 1}/{totalKotoba})
              </span>

              {/* Navigation Controls: Back, Audio, Next */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrevKotoba}
                  className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-all border border-[#E9E2F0] active:scale-95 shadow-2xs"
                  title="Kosakata Sebelumnya (Back)"
                  aria-label="Kosakata Sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                  onClick={() => speakJapanese(kotobaOfTheDay.kana || kotobaOfTheDay.kanji)}
                  className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-all border border-[#E9E2F0] active:scale-95 shadow-2xs"
                  title="Dengarkan pengucapan audio"
                  aria-label="Dengarkan pengucapan audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNextKotoba}
                  className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-all border border-[#E9E2F0] active:scale-95 shadow-2xs"
                  title="Kosakata Berikutnya (Next)"
                  aria-label="Kosakata Berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#29264B] kanji-font">
                  {kotobaOfTheDay.kanji}
                </span>
                <p className="text-sm font-bold text-[#85B9D1] mt-1">
                  {kotobaOfTheDay.kana}
                </p>
              </div>

              <div className="bg-[#F8F3FA] p-3.5 rounded-2xl border border-[#E9E2F0]">
                <span className="text-[10px] text-[#77738A] font-bold uppercase tracking-wider block mb-0.5">
                  Romaji & Arti
                </span>
                <p className="text-sm font-semibold text-[#29264B]">
                  <span className="font-mono text-[#29264B] font-bold">{kotobaOfTheDay.romaji}</span> — {kotobaOfTheDay.arti}
                </p>
              </div>

              <div className="inline-block px-2.5 py-1 rounded-lg bg-[#F0EBF8] text-[#29264B] text-xs font-bold border border-[#29264B]/15">
                {kotobaOfTheDay.kategori}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E9E2F0] mt-6 flex items-center justify-between">
            <span className="text-xs text-[#77738A] font-medium">
              Minna no Nihongo Bab {kotobaOfTheDay.bab}
            </span>
            <button
              onClick={() => onSelectChapter(kotobaOfTheDay.bab)}
              className="px-4 py-2 rounded-xl bg-[#29264B] hover:bg-[#29264B] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Buka Bab Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </section>

      {/* QUICK WORKOUT MODES */}
      <section className="text-left">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black text-[#29264B] font-['Manrope']">4 Cara Berlatih Hafalan</h2>
            <p className="text-sm text-[#77738A]">Pilih metode interaktif yang paling cocok untuk menguji daya ingat Anda.</p>
          </div>
          <button
            onClick={() => onNavigate('latihan')}
            className="text-xs font-bold text-[#85B9D1] hover:text-[#29264B] flex items-center gap-1 transition-colors"
          >
            <span>Buka Semua Latihan</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          
          {/* Card 1: Pilihan Ganda */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#E9E2F0] bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F0EBF8] border border-[#29264B]/20 flex items-center justify-center text-[#29264B] mb-4">
                <Award className="w-6 h-6 text-[#29264B]" />
              </div>
              <h4 className="font-black text-base text-[#29264B] mb-1 font-['Manrope']">Pilihan Ganda</h4>
              <p className="text-xs text-[#77738A] leading-relaxed">
                Pilih arti atau kanji yang tepat dari 4 opsi jawaban dengan timer dan streak point.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E9E2F0] flex items-center justify-between text-xs font-bold text-[#29264B]">
              <span>Mulai Kuis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Kartu Hafalan */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#E9E2F0] bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#EDF5F9] border border-[#85B9D1]/20 flex items-center justify-center text-[#85B9D1] mb-4">
                <Layers className="w-6 h-6 text-[#85B9D1]" />
              </div>
              <h4 className="font-black text-base text-[#29264B] mb-1 font-['Manrope']">Kartu Hafalan</h4>
              <p className="text-xs text-[#77738A] leading-relaxed">
                Balik kartu 3D interaktif, lalu tandai sudah hafal atau belum untuk pengulangan berkala.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E9E2F0] flex items-center justify-between text-xs font-bold text-[#85B9D1]">
              <span>Buka Flashcard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Menjodohkan */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#E9E2F0] bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 mb-4">
                <Shuffle className="w-6 h-6 text-amber-600" />
              </div>
              <h4 className="font-black text-base text-[#29264B] mb-1 font-['Manrope']">Menjodohkan</h4>
              <p className="text-xs text-[#77738A] leading-relaxed">
                Hubungkan kata bahasa Jepang dengan terjemahan artinya secara interaktif.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E9E2F0] flex items-center justify-between text-xs font-bold text-amber-700">
              <span>Mainkan Game</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: Ketik Romaji */}
          <div 
            onClick={() => onNavigate('latihan')}
            className="card-soft card-soft-hover p-5 rounded-3xl cursor-pointer border border-[#E9E2F0] bg-white flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-black text-base text-[#29264B] mb-1 font-['Manrope']">Ketik Romaji</h4>
              <p className="text-xs text-[#77738A] leading-relaxed">
                Baca huruf Jepang yang muncul, lalu ketik ejaan romajinya secepat dan setepat mungkin.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E9E2F0] flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Tes Ketik</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
