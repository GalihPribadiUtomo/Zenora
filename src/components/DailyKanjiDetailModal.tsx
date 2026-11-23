import React, { useEffect } from 'react';
import { X, Sparkles, Volume2, ArrowRight, BookOpen } from 'lucide-react';
import { KanjiItem } from '../types';
import { speakJapanese, sound } from '../utils/audio';

interface DailyKanjiDetailModalProps {
  kanji: KanjiItem | null;
  displayDate: string;
  onClose: () => void;
  onOpenFullDetail: (kanji: KanjiItem) => void;
}

export const DailyKanjiDetailModal: React.FC<DailyKanjiDetailModalProps> = ({
  kanji,
  displayDate,
  onClose,
  onOpenFullDetail,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && kanji) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [kanji, onClose]);

  if (!kanji) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#0D1238] shadow-[0_20px_60px_-15px_rgba(8,13,43,0.9)] border border-[#7857FF]/25 text-[#F5F6FF] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0D1238] via-[#12194A] to-[#7857FF]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#7857FF]/20 bg-[#080D2B]/90">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#12194A] to-[#7857FF] text-[#080D2B] text-[11px] font-black uppercase tracking-wider font-mono shadow-xs">
              KANJI HARI INI
            </span>
            <span className="text-xs font-bold text-[#737FA8] bg-[#0D1238] px-2.5 py-1 rounded-xl border border-[#7857FF]/20">
              {displayDate}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-white/10 text-[#737FA8] hover:text-[#F5F6FF] transition-colors"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-5">
          
          {/* Main Hero Card for the Kanji */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#080D2B] via-[#0D1238] to-[#12194A] text-[#F5F6FF] relative overflow-hidden flex items-center justify-between gap-4 border border-[#7857FF]/25 shadow-lg">
            <div className="space-y-1 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#080D2B] text-[#7857FF] border border-[#7857FF]/30">
                  {kanji.jlpt}
                </span>
                <span className="text-xs font-bold text-[#AAB3D5]">
                  {kanji.category}
                </span>
              </div>
              <h2 className="text-2xl font-black text-[#F5F6FF] font-['Manrope']">
                {kanji.meaning}
              </h2>
              <p className="text-xs text-[#7857FF] font-mono">
                {kanji.meaningEn} · {kanji.strokeCount} Goresan
              </p>
            </div>

            {/* Kanji Character & Audio */}
            <div className="flex flex-col items-center relative z-10 shrink-0">
              <span className="kanji-font text-6xl font-black text-[#F5F6FF] drop-shadow-sm select-none">
                {kanji.kanji}
              </span>
              <button
                onClick={() => {
                  sound.playClick();
                  speakJapanese(kanji.kanji);
                }}
                className="mt-1 flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#080D2B]/80 hover:bg-[#12194A] text-[#F5F6FF] text-[11px] font-bold transition-all active:scale-95 border border-[#7857FF]/25"
                title="Dengarkan pengucapan"
              >
                <Volume2 className="w-3.5 h-3.5 text-[#7857FF]" />
                <span>Audio</span>
              </button>
            </div>

            {/* Background Watermark */}
            <div className="absolute -right-4 -bottom-8 text-9xl font-black font-japanese text-white/5 pointer-events-none select-none">
              {kanji.kanji}
            </div>
          </div>

          {/* Readings: Onyomi & Kunyomi */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#080D2B] border border-[#7857FF]/20 space-y-1">
              <div className="text-[10px] font-black text-[#7857FF] uppercase tracking-wider font-mono">
                音読み (On'yomi)
              </div>
              <div className="kanji-font text-sm font-bold text-[#F5F6FF] leading-tight">
                {kanji.onyomi || '—'}
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#080D2B] border border-[#7857FF]/20 space-y-1">
              <div className="text-[10px] font-black text-[#7857FF] uppercase tracking-wider font-mono">
                訓読み (Kun'yomi)
              </div>
              <div className="kanji-font text-sm font-bold text-[#F5F6FF] leading-tight">
                {kanji.kunyomi || '—'}
              </div>
            </div>
          </div>

          {/* Sample Compound Words (Jukugo) */}
          {kanji.examples && kanji.examples.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#737FA8] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#7857FF]" />
                <span>Contoh Kosakata (Jukugo):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {kanji.examples.slice(0, 2).map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#080D2B] border border-[#7857FF]/25 flex items-center justify-between gap-2 shadow-2xs"
                  >
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="kanji-font font-black text-sm text-[#F5F6FF]">
                          {ex.word}
                        </span>
                        <span className="text-[11px] font-mono text-[#7857FF]">
                          【{ex.reading}】
                        </span>
                      </div>
                      <div className="text-[11px] text-[#737FA8] font-medium">
                        {ex.meaning}
                      </div>
                    </div>
                    <button
                      onClick={() => speakJapanese(ex.word)}
                      className="p-1.5 rounded-lg hover:bg-[#0D1238] text-[#737FA8] hover:text-[#F5F6FF] transition-colors"
                      title="Dengarkan kata"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Button: Pelajari Lebih Lanjut */}
          <div className="pt-2">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
                onOpenFullDetail(kanji);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#12194A] to-[#7857FF] hover:brightness-110 text-[#080D2B] font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#080D2B]" />
              <span>Pelajari Kanji Ini Lebih Lanjut (Animasi Goresan & Latihan Tulis)</span>
              <ArrowRight className="w-4 h-4 text-[#080D2B]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
