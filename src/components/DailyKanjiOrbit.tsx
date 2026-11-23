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
      
      {/* DESKTOP & TABLET VIEW: ROTATING CELESTIAL ORBIT (sm and up) */}
      <div className="hidden sm:flex relative w-full max-w-[440px] md:max-w-[480px] lg:max-w-[520px] aspect-square items-center justify-center orbit-container">
        
        {/* Midnight Navy & Biru Perak Ambient Celestial Glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#0D1238]/40 via-[#7857FF]/15 to-transparent blur-3xl pointer-events-none" />

        {/* Orbit Track Guide Line */}
        <div className="absolute w-[82%] h-[82%] rounded-full border border-dashed border-[#7857FF]/30 shadow-[0_0_30px_rgba(120,87,255,0.15)] pointer-events-none" />

        {/* Daily Kanji Rotating Orbit Ring */}
        <div className="absolute inset-0 flex items-center justify-center animate-zenora-orbit pointer-events-auto">
          <div className="relative w-[58%] h-[58%]">
            {kanjis.map((k, idx) => {
              const pos = cardPositions[idx % 4];
              return (
                <div
                  key={k.id}
                  className={`absolute ${pos.containerClass} z-20`}
                >
                  {/* Counter-rotating Card so text and Kanji ALWAYS remain upright */}
                  <div className="animate-zenora-counter-orbit">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                        setPreviewKanji(k);
                      }}
                      className="group relative p-3 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-[#0D1238] backdrop-blur-md shadow-[0_4px_20px_rgba(8,13,43,0.6)] border border-[#7857FF]/30 hover:border-[#7857FF] hover:shadow-[0_0_25px_rgba(120,87,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex flex-col items-center min-w-[70px] sm:min-w-[80px]"
                      title={`Kanji Hari Ini: ${k.kanji} (${k.meaning}) · Klik untuk detail`}
                    >
                      {/* Daily Badge Tag */}
                      <span className="absolute -top-2 px-1.5 py-0.5 rounded-full bg-gradient-to-r from-[#12194A] to-[#7857FF] text-[#080D2B] text-[8px] font-black uppercase tracking-wider font-mono shadow-[0_0_8px_rgba(120,87,255,0.4)]">
                        #{idx + 1}
                      </span>

                      {/* Kanji Character */}
                      <span className="font-japanese text-2xl sm:text-3xl font-black text-[#F5F6FF] group-hover:text-[#7857FF] transition-colors leading-none my-1 drop-shadow-sm">
                        {k.kanji}
                      </span>

                      {/* Reading or Onyomi Subtitle */}
                      <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#7857FF] group-hover:text-white transition-colors truncate max-w-[60px] sm:max-w-[72px] text-center">
                        {k.reading || k.onyomi?.split('・')[0] || ''}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Central Circle Plate (Holographic Star Core) */}
        <div className="relative z-10 w-48 h-48 sm:w-52 sm:h-52 lg:w-56 lg:h-56 rounded-full bg-gradient-to-b from-[#0D1238] to-[#080D2B] shadow-[0_0_40px_rgba(8,13,43,0.8)] border border-[#7857FF]/35 flex flex-col items-center justify-center p-3 sm:p-4 text-center">
          
          {/* Daily Date Badge Pill */}
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#080D2B] border border-[#7857FF]/30 text-[#7857FF] text-[10px] font-black uppercase tracking-wider font-mono mb-1.5">
            <Calendar className="w-3 h-3 text-[#7857FF]" />
            <span>{displayDate.split(',')[0]}</span>
          </div>

          {/* Zenora Logo Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 mb-1 rounded-2xl bg-[#080D2B]/80 flex items-center justify-center shadow-xs border border-[#7857FF]/25 p-2">
            <img
              src="/zenora-icon.png"
              alt="ZENORA"
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(120,87,255,0.35)] hover:scale-105 transition-transform"
            />
          </div>

          <div className="text-sm sm:text-base font-black text-[#F5F6FF] font-['Manrope'] tracking-wider leading-none">
            ZENORA
          </div>
          <div className="text-[9px] sm:text-[10px] text-[#7857FF] font-bold font-mono tracking-wider uppercase mt-1">
            Midnight Navy & Biru Perak
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#737FA8] mt-0.5 font-medium">
            4 Kanji Dinamis Setiap Hari
          </div>

          {/* Mini Audio Button */}
          <button
            onClick={() => {
              sound.playClick();
              speakJapanese('日本語の勉強はとても楽しいです');
            }}
            className="mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1238] hover:bg-[#12194A] text-[#F5F6FF] text-[10px] sm:text-[11px] font-bold transition-all border border-[#7857FF]/25 shadow-xs active:scale-95"
            title="Dengarkan Contoh Kalimat Bahasa Jepang"
          >
            <Volume2 className="w-3 h-3 text-[#7857FF]" />
            <span>Dengarkan Contoh</span>
          </button>
        </div>

      </div>

      {/* MOBILE VIEW: CLEAN 2x2 GRID (< sm) */}
      <div className="flex sm:hidden flex-col items-center w-full max-w-sm py-2">
        <div className="w-44 h-44 rounded-full bg-gradient-to-b from-[#0D1238] to-[#080D2B] shadow-[0_0_30px_rgba(8,13,43,0.8)] border border-[#7857FF]/35 flex flex-col items-center justify-center p-3 text-center mb-4">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#080D2B] border border-[#7857FF]/30 text-[#7857FF] text-[9px] font-black uppercase tracking-wider font-mono mb-1">
            <Calendar className="w-2.5 h-2.5 text-[#7857FF]" />
            <span>{displayDate.split(',')[0]}</span>
          </div>

          <div className="w-12 h-12 mb-1 rounded-xl bg-[#080D2B]/80 flex items-center justify-center shadow-xs border border-[#7857FF]/25 p-1.5">
            <img
              src="/zenora-icon.png"
              alt="ZENORA"
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(120,87,255,0.35)]"
            />
          </div>

          <div className="text-sm font-black text-[#F5F6FF] font-['Manrope'] tracking-wider leading-none">
            ZENORA
          </div>
          <div className="text-[9px] text-[#7857FF] font-bold font-mono tracking-wider uppercase mt-0.5">
            Midnight Navy & Biru Perak
          </div>

          <button
            onClick={() => {
              sound.playClick();
              speakJapanese('日本語の勉強はとても楽しいです');
            }}
            className="mt-2 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0D1238] hover:bg-[#12194A] text-[#F5F6FF] text-[10px] font-bold transition-all border border-[#7857FF]/25"
          >
            <Volume2 className="w-2.5 h-2.5 text-[#7857FF]" />
            <span>Dengarkan</span>
          </button>
        </div>

        {/* 2x2 Daily Kanji Cards Grid */}
        <div className="grid grid-cols-2 gap-2.5 w-full">
          {kanjis.map((k) => (
            <div
              key={k.id}
              onClick={() => {
                sound.playClick();
                setPreviewKanji(k);
              }}
              className="p-3 rounded-2xl bg-[#0D1238] shadow-md border border-[#7857FF]/25 hover:border-[#7857FF] active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
            >
              <div className="w-11 h-11 rounded-xl bg-[#080D2B] border border-[#7857FF]/30 flex items-center justify-center shrink-0">
                <span className="font-japanese text-2xl font-black text-[#F5F6FF]">
                  {k.kanji}
                </span>
              </div>
              <div className="min-w-0 text-left">
                <div className="text-[9px] font-mono font-bold text-[#7857FF] truncate">
                  {k.reading || k.onyomi?.split('・')[0] || ''}
                </div>
                <div className="text-xs font-bold text-[#F5F6FF] truncate">
                  {k.meaning}
                </div>
                <div className="text-[9px] text-[#737FA8] font-mono">
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
