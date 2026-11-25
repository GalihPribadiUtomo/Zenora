import React, { useState, useEffect } from 'react';
import {
  X,
  Brain,
  Volume2,
  Eye,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  Flame,
  Clock
} from 'lucide-react';
import { SrsItem, UserStats } from '../types';
import { getDueSrsItems, reviewSrsItem, SRS_LEVEL_LABELS } from '../utils/srsService';
import { speakJapanese, sound } from '../utils/audio';

interface SrsReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: UserStats;
  onActivityComplete?: (reviewedCount: number) => void;
}

export const SrsReviewModal: React.FC<SrsReviewModalProps> = ({
  isOpen,
  onClose,
  stats,
  onActivityComplete
}) => {
  const [dueQueue, setDueQueue] = useState<SrsItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);
  const [rememberedCount, setRememberedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const due = getDueSrsItems(stats).slice(0, 20);
      setDueQueue(due);
      setCurrentIndex(0);
      setIsRevealed(false);
      setReviewedCount(0);
      setRememberedCount(0);
      setIsFinished(due.length === 0);
    }
  }, [isOpen, stats]);

  if (!isOpen) return null;

  const currentItem = dueQueue[currentIndex];

  const handleRate = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentItem) return;
    if (rating === 'again') {
      sound.playIncorrect();
    } else {
      sound.playCorrect();
      setRememberedCount((prev) => prev + 1);
    }

    reviewSrsItem(currentItem.id, rating);
    const nextReviewed = reviewedCount + 1;
    setReviewedCount(nextReviewed);

    if (currentIndex + 1 < dueQueue.length) {
      setCurrentIndex((prev) => prev + 1);
      setIsRevealed(false);
    } else {
      setIsFinished(true);
      sound.playFanfare();
      if (onActivityComplete) {
        onActivityComplete(nextReviewed);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-5 py-6 sm:py-8 bg-[#08152F]/90 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl my-auto rounded-3xl bg-[#111F38] border border-[#3978D6]/35 shadow-[0_25px_70px_rgba(8, 21, 47,0.95)] text-[#F2F6FC] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#3978D6] via-[#69C9DF] to-[#45C6A5]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3978D6]/20 bg-[#08152F]/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#3978D6]/20 border border-[#3978D6]/40 text-[#83B7EE]">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white font-['Manrope']">
                Sistem Review Spasi (SRS)
              </h3>
              <p className="text-[11px] text-[#A9BBD3]">
                {isFinished
                  ? 'Semua jadwal review hari ini selesai'
                  : `Kartu ${currentIndex + 1} dari ${dueQueue.length} · Antrean Aktif`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#172945] text-[#A9BBD3] hover:text-white transition-colors"
            aria-label="Tutup SRS"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {isFinished ? (
            <div className="text-center space-y-5 py-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#45C6A5]/20 to-[#69C9DF]/20 border border-[#45C6A5]/40 flex items-center justify-center text-[#45C6A5]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-white font-['Manrope']">
                  {reviewedCount > 0 ? 'Review SRS Selesai!' : 'Tidak Ada Antrean Jatuh Tempo'}
                </h4>
                <p className="text-xs sm:text-sm text-[#A9BBD3] mt-1.5 max-w-sm mx-auto">
                  {reviewedCount > 0
                    ? `Anda berhasil mengulas ${reviewedCount} kartu (${rememberedCount} diingat dengan baik). Jadwal review berikutnya sudah disesuaikan otomatis.`
                    : 'Semua kartu yang Anda pelajari masih dalam masa retensi optimal. Tandai lebih banyak materi atau kembali lagi nanti!'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white font-bold text-xs shadow-lg hover:brightness-110 transition-all"
              >
                Kembali ke Dashboard
              </button>
            </div>
          ) : currentItem ? (
            <div className="space-y-6">
              {/* Type & Level Meta */}
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-[#172945] border border-[#3978D6]/30 text-[11px] font-bold uppercase font-mono text-[#83B7EE]">
                  {currentItem.type === 'kana' ? 'Kana' : currentItem.type === 'kanji' ? 'Kanji' : 'Kosakata'}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#A9BBD3]">
                  <Clock className="w-3.5 h-3.5 text-[#69C9DF]" />
                  <span>{SRS_LEVEL_LABELS[currentItem.level] || 'Baru'}</span>
                </span>
              </div>

              {/* Front Card */}
              <div className="relative p-8 rounded-3xl bg-[#08152F] border border-[#3978D6]/30 text-center shadow-inner">
                <button
                  onClick={() => speakJapanese(currentItem.front)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#172945] hover:bg-[#111F38] text-[#83B7EE] border border-[#3978D6]/30 transition-colors"
                  title="Putar Audio"
                >
                  <Volume2 className="w-4 h-4" />
                </button>

                <div className="kanji-font text-5xl sm:text-6xl font-black text-white select-none">
                  {currentItem.front}
                </div>

                {!isRevealed ? (
                  <p className="text-xs text-[#7186A5] mt-4">
                    Ingat cara baca & artinya dalam hati, lalu buka jawaban.
                  </p>
                ) : (
                  <div className="mt-5 pt-5 border-t border-[#3978D6]/20 space-y-2 animate-fade-in">
                    <div className="text-base font-bold text-[#69C9DF] font-mono">
                      {currentItem.reading}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {currentItem.meaning}
                    </div>
                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-[#45C6A5] bg-[#45C6A5]/10 px-2.5 py-0.5 rounded-full">
                      <Flame className="w-3 h-3" />
                      <span>Streak benar: {currentItem.correctStreak}x</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              {!isRevealed ? (
                <button
                  onClick={() => {
                    sound.playClick();
                    setIsRevealed(true);
                    speakJapanese(currentItem.front);
                  }}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-white font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(57, 120, 214,0.35)] transition-all active:scale-98"
                >
                  <Eye className="w-4 h-4" />
                  <span>Tampilkan Jawaban</span>
                </button>
              ) : (
                <div className="space-y-2">
                  <p className="text-[11px] font-bold text-center text-[#A9BBD3] uppercase tracking-wider">
                    Seberapa mudah Anda mengingat kartu ini?
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      onClick={() => handleRate('again')}
                      className="p-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-300 text-xs font-bold transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5 mx-auto mb-1" />
                      <div>Lupa</div>
                      <div className="text-[10px] opacity-75 font-mono">10 mnt</div>
                    </button>
                    <button
                      onClick={() => handleRate('hard')}
                      className="p-2.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 mx-auto mb-1" />
                      <div>Sulit</div>
                      <div className="text-[10px] opacity-75 font-mono">12 jam</div>
                    </button>
                    <button
                      onClick={() => handleRate('good')}
                      className="p-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mx-auto mb-1" />
                      <div>Ingat</div>
                      <div className="text-[10px] opacity-75 font-mono">1–3 hr</div>
                    </button>
                    <button
                      onClick={() => handleRate('easy')}
                      className="p-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-bold transition-all"
                    >
                      <Brain className="w-3.5 h-3.5 mx-auto mb-1" />
                      <div>Mudah</div>
                      <div className="text-[10px] opacity-75 font-mono">7–14 hr</div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
