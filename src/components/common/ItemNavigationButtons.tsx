import React, { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sound } from '../../utils/audio';

export interface ItemNavigationButtonsProps {
  currentIndex: number;
  totalCount: number;
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  prevLabel?: string;
  nextLabel?: string;
  itemTypeLabel?: string; // e.g. "Huruf", "Kanji", "Karakter"
  enableKeyboardShortcuts?: boolean;
  className?: string;
}

export const ItemNavigationButtons: React.FC<ItemNavigationButtonsProps> = ({
  currentIndex,
  totalCount,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  prevLabel,
  nextLabel,
  itemTypeLabel = 'Materi',
  enableKeyboardShortcuts = true,
  className = ''
}) => {
  // Optional keyboard navigation (ArrowLeft and ArrowRight)
  useEffect(() => {
    if (!enableKeyboardShortcuts) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is actively typing in an input or textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.isContentEditable
      ) {
        return;
      }

      if (e.key === 'ArrowLeft' && hasPrev) {
        e.preventDefault();
        sound.playClick();
        onPrev();
      } else if (e.key === 'ArrowRight' && hasNext) {
        e.preventDefault();
        sound.playClick();
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardShortcuts, hasPrev, hasNext, onPrev, onNext]);

  const handlePrevClick = () => {
    if (!hasPrev) return;
    sound.playClick();
    onPrev();
  };

  const handleNextClick = () => {
    if (!hasNext) return;
    sound.playClick();
    onNext();
  };

  const progressPercent = totalCount > 0 ? Math.round(((currentIndex + 1) / totalCount) * 100) : 0;

  return (
    <div 
      className={`pt-4 mt-6 border-t border-[#7857FF]/20 flex flex-col sm:flex-row items-center justify-between gap-3 ${className}`}
    >
      {/* 1. BUTTON: PREVIOUS (SEBELUMNYA) */}
      <button
        type="button"
        onClick={handlePrevClick}
        disabled={!hasPrev}
        aria-label="Materi Sebelumnya"
        className={`w-full sm:w-auto px-5 py-2.5 rounded-2xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold transition-all duration-200 select-none ${
          hasPrev
            ? 'bg-[#080D2B] hover:bg-[#12194A] text-[#F5F6FF] border border-[#7857FF]/35 hover:border-[#7857FF]/70 hover:shadow-[0_0_15px_rgba(120,87,255,0.25)] active:scale-95 cursor-pointer group'
            : 'bg-[#080D2B]/50 text-[#737FA8]/40 border border-white/5 opacity-40 cursor-not-allowed pointer-events-none'
        }`}
      >
        <ChevronLeft className={`w-4 h-4 transition-transform ${hasPrev ? 'group-hover:-translate-x-1 text-[#7857FF]' : 'text-current'}`} />
        <div className="flex flex-col text-left">
          <span className="leading-tight">Sebelumnya</span>
          {prevLabel && hasPrev && (
            <span className="text-[10px] font-mono text-[#7857FF] truncate max-w-[100px]">
              {prevLabel}
            </span>
          )}
        </div>
      </button>

      {/* 2. CENTER: POSITION & PROGRESS INDICATOR */}
      <div className="flex flex-col items-center gap-1.5 order-first sm:order-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080D2B] border border-[#7857FF]/25 text-xs font-mono font-bold text-[#F5F6FF] shadow-xs">
          <span className="text-[#7857FF] font-black">{currentIndex + 1}</span>
          <span className="text-[#737FA8]">/</span>
          <span className="text-[#AAB3D5]">{totalCount}</span>
          <span className="text-[10px] text-[#737FA8] font-sans font-normal uppercase tracking-wider pl-1">
            {itemTypeLabel}
          </span>
        </div>

        {/* Mini progress bar */}
        <div className="w-28 sm:w-36 h-1 bg-[#080D2B] rounded-full overflow-hidden border border-[#7857FF]/20">
          <div 
            className="h-full bg-gradient-to-r from-[#7857FF] to-[#945CFF] rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* 3. BUTTON: NEXT (BERIKUTNYA) */}
      <button
        type="button"
        onClick={handleNextClick}
        disabled={!hasNext}
        aria-label="Materi Berikutnya"
        className={`w-full sm:w-auto px-5 py-2.5 rounded-2xl flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold transition-all duration-200 select-none ${
          hasNext
            ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] hover:brightness-110 text-white border border-[#7857FF]/40 shadow-[0_0_20px_rgba(120,87,255,0.35)] active:scale-95 cursor-pointer group'
            : 'bg-[#080D2B]/50 text-[#737FA8]/40 border border-white/5 opacity-40 cursor-not-allowed pointer-events-none'
        }`}
      >
        <div className="flex flex-col text-right">
          <span className="leading-tight">Berikutnya</span>
          {nextLabel && hasNext && (
            <span className="text-[10px] font-mono text-purple-200 truncate max-w-[100px]">
              {nextLabel}
            </span>
          )}
        </div>
        <ChevronRight className={`w-4 h-4 transition-transform ${hasNext ? 'group-hover:translate-x-1 text-white' : 'text-current'}`} />
      </button>
    </div>
  );
};
