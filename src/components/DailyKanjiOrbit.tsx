import React, { useState } from 'react';
import { Volume2, Calendar } from 'lucide-react';
import { KanjiItem } from '../types';
import { getDailyKanji, DailyKanjiInfo } from '../utils/dailyKanji';
import { speakJapanese, sound } from '../utils/audio';
import { DailyKanjiDetailModal } from './DailyKanjiDetailModal';

interface DailyKanjiOrbitProps {
  onSelectKanji: (kanji: KanjiItem) => void;
}

export const DailyKanjiOrbit: React.FC<DailyKanjiOrbitProps> = ({
  onSelectKanji,
}) => {
  const [dailyData] = useState<DailyKanjiInfo>(() => getDailyKanji());
  const [previewKanji, setPreviewKanji] = useState<KanjiItem | null>(null);

  const { kanjis, displayDate } = dailyData;

  // The 4 diagonal positions: Top-Left, Top-Right, Bottom-Right, Bottom-Left
  // Perfectly spaced at 90-degree intervals diagonally around the center circle
  const cardPositions = [
    {
      id: 'top-left',
      containerClass: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
      label: 'Atas Kiri',
    },
    {
      id: 'top-right',
      containerClass: 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
      label: 'Atas Kanan',
    },
    {
      id: 'bottom-right',
      containerClass: 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
      label: 'Bawah Kanan',
    },
    {
      id: 'bottom-left',
      containerClass: 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
      label: 'Bawah Kiri',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center select-none">
      
      {/* DESKTOP & TABLET VIEW: SPACIOUS ROTATING ORBIT (sm and up) */}
      <div className="hidden sm:flex relative w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] aspect-square items-center justify-center orbit-container">
        
        {/* Outer Soft Futuristic Ambient Glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#6555A5]/12 via-[#85B9D1]/12 to-[#F0EBF8] blur-2xl pointer-events-none" />

        {/* Orbit Track Guide Line: Perfectly matches the 4 diagonal card centers (82% diameter) */}
        <div className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-[#6555A5]/25 pointer-events-none" />

        {/* Daily Kanji Rotating Orbit Ring */}
        <div className="absolute inset-0 flex items-center justify-center animate-zenora-orbit pointer-events-auto">
          {/* Inner square: 58% size ensures diagonal corners sit precisely at 82% circular track with >40px clearance */}
          <div className="relative w-[58%] h-[58%]">
            {kanjis.map((k, idx) => {
              const pos = cardPositions[idx % 4];
              return (
                <div
                  key={k.id}
                  className={`absolute ${pos.containerClass} z-20`}
                >
                  {/* Counter-rotating Card so text and Kanji ALWAYS remain upright and readable */}
                  <div className="animate-zenora-counter-orbit">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                        setPreviewKanji(k);
                      }}
                      className="group relative p-3 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white shadow-md shadow-[#29264B]/8 border border-[#E9E2F0] hover:border-[#6555A5] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex flex-col items-center min-w-[70px] sm:min-w-[80px]"
                      title={`Kanji Hari Ini: ${k.kanji} (${k.meaning}) · Klik untuk detail`}
                    >
                      {/* Small Daily Badge Tag */}
                      <span className="absolute -top-2 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#29264B] to-[#6555A5] text-white text-[8px] font-black uppercase tracking-wider font-mono shadow-2xs">
                        #{idx + 1}
                      </span>

                      {/* Kanji Character */}
                      <span className="font-japanese text-2xl sm:text-3xl font-black text-[#29264B] group-hover:text-[#6555A5] transition-colors leading-none my-1">
                        {k.kanji}
                      </span>

                      {/* Reading or Onyomi Subtitle */}
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#77738A] group-hover:text-[#29264B] transition-colors truncate max-w-[60px] sm:max-w-[72px] text-center">
                        {k.reading || k.onyomi?.split('・')[0] || ''}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Central Circle Plate (Comfortably sized with ample clearance from orbiting cards) */}
        <div className="relative z-10 w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-white shadow-xl shadow-[#29264B]/8 border border-[#E9E2F0] flex flex-col items-center justify-center p-3 sm:p-4 text-center">
          
          {/* Daily Date Badge Pill */}
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F0EBF8] border border-[#6555A5]/20 text-[#6555A5] text-[10px] font-black uppercase tracking-wider font-mono mb-1.5">
            <Calendar className="w-3 h-3 text-[#85B9D1]" />
            <span>{displayDate.split(',')[0]}</span>
          </div>

          {/* Zenora Logo Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mb-1 rounded-2xl bg-gradient-to-br from-[#F0EBF8] to-white flex items-center justify-center shadow-xs border border-[#E9E2F0] p-2">
            <img
              src="/zenora-icon.png"
              alt="ZENORA"
              className="w-full h-full object-contain drop-shadow-2xs hover:scale-105 transition-transform"
            />
          </div>

          <div className="text-sm sm:text-base font-black text-[#29264B] font-['Manrope'] tracking-wider leading-none">
            ZENORA
          </div>
          <div className="text-[9px] sm:text-[10px] text-[#6555A5] font-bold font-mono tracking-wider uppercase mt-1">
            Learn · Practice · Master
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#77738A] mt-0.5 font-medium">
            4 Kanji Dinamis Setiap Hari
          </div>

          {/* Mini Audio Button */}
          <button
            onClick={() => {
              sound.playClick();
              speakJapanese('日本語の勉強はとても楽しいです');
            }}
            className="mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#29264B] text-[10px] sm:text-[11px] font-bold transition-all border border-[#E9E2F0] shadow-2xs active:scale-95"
            title="Dengarkan Contoh Kalimat Bahasa Jepang"
          >
            <Volume2 className="w-3 h-3 text-[#85B9D1]" />
            <span>Dengarkan Contoh</span>
          </button>
        </div>

      </div>

      {/* MOBILE VIEW: CLEAN 2x2 GRID AROUND/BELOW LOGO (< sm) */}
      <div className="flex sm:hidden flex-col items-center w-full max-w-sm py-2">
        {/* Central Logo Circle */}
        <div className="w-44 h-44 rounded-full bg-white shadow-lg shadow-[#29264B]/8 border border-[#E9E2F0] flex flex-col items-center justify-center p-3 text-center mb-4">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F0EBF8] border border-[#6555A5]/20 text-[#6555A5] text-[9px] font-black uppercase tracking-wider font-mono mb-1">
            <Calendar className="w-2.5 h-2.5 text-[#85B9D1]" />
            <span>{displayDate.split(',')[0]}</span>
          </div>

          <div className="w-12 h-12 mb-1 rounded-xl bg-gradient-to-br from-[#F0EBF8] to-white flex items-center justify-center shadow-xs border border-[#E9E2F0] p-1.5">
            <img
              src="/zenora-icon.png"
              alt="ZENORA"
              className="w-full h-full object-contain drop-shadow-2xs"
            />
          </div>

          <div className="text-sm font-black text-[#29264B] font-['Manrope'] tracking-wider leading-none">
            ZENORA
          </div>
          <div className="text-[9px] text-[#6555A5] font-bold font-mono tracking-wider uppercase mt-0.5">
            Learn · Practice · Master
          </div>

          <button
            onClick={() => {
              sound.playClick();
              speakJapanese('日本語の勉強はとても楽しいです');
            }}
            className="mt-2 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#29264B] text-[10px] font-bold transition-all border border-[#E9E2F0] shadow-2xs"
          >
            <Volume2 className="w-2.5 h-2.5 text-[#85B9D1]" />
            <span>Dengarkan</span>
          </button>
        </div>

        {/* 2x2 Daily Kanji Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5 w-full">
          {kanjis.map((k, idx) => (
            <div
              key={k.id}
              onClick={() => {
                sound.playClick();
                setPreviewKanji(k);
              }}
              className="p-3 rounded-2xl bg-white shadow-2xs border border-[#E9E2F0] hover:border-[#6555A5] active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F0EBF8] to-white border border-[#E9E2F0] flex items-center justify-center shrink-0">
                <span className="font-japanese text-2xl font-black text-[#29264B]">
                  {k.kanji}
                </span>
              </div>
              <div className="min-w-0 text-left">
                <div className="text-[9px] font-mono font-bold text-[#6555A5] truncate">
                  {k.reading || k.onyomi?.split('・')[0] || ''}
                </div>
                <div className="text-xs font-bold text-[#29264B] truncate">
                  {k.meaning}
                </div>
                <div className="text-[9px] text-[#77738A] font-mono">
                  {k.jlpt} · {k.strokeCount} Goresan
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Kanji Detail Modal */}
      {previewKanji && (
        <DailyKanjiDetailModal
          kanji={previewKanji}
          displayDate={displayDate}
          onClose={() => setPreviewKanji(null)}
          onOpenFullDetail={(k) => onSelectKanji(k)}
        />
      )}

    </div>
  );
};
