import React from 'react';
import { Volume2, Info, AlertCircle } from 'lucide-react';
import { speakJapanese } from '../utils/audio';
import { FuriganaText } from './FuriganaText';

export interface SentenceCardProps {
  index: number;
  sentence: string;
  furigana: string;
  romaji: string;
  english: string;
  indonesian: string;
  highlight?: string;
  grammarNote?: string;
  isPlaceholder?: boolean;
}

export const SentenceCard: React.FC<SentenceCardProps> = ({
  index,
  sentence,
  furigana,
  romaji,
  english,
  indonesian,
  highlight,
  grammarNote,
  isPlaceholder = false
}) => {
  const numberStr = String(index + 1).padStart(2, '0');

  // Split sentence to highlight target kanji/kotoba
  const renderHighlightedSentence = () => {
    if (!highlight || isPlaceholder) {
      return <span>{sentence}</span>;
    }

    const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'g');
    const parts = sentence.split(regex);

    return parts.map((part, i) => {
      if (part === highlight) {
        return (
          <span
            key={i}
            className="px-2 py-0.5 mx-0.5 rounded-lg bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[#F2F6FC] inline-block shadow-2xs font-black border border-[#3978D6]/40"
          >
            {part}
          </span>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  return (
    <div
      className={`relative p-5 sm:p-6 rounded-3xl border transition-all ${
        isPlaceholder
          ? 'bg-[#111F38]/60 border-dashed border-[#3978D6]/25'
          : 'bg-[#111F38] hover:bg-[#172945]/40 border-[#3978D6]/20 hover:border-[#3978D6]/40 shadow-xs hover:shadow-md'
      }`}
    >
      {/* Top Bar: Number Badge + Status / Audio */}
      <div className="flex items-center justify-between mb-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] text-[#F2F6FC] border border-[#3978D6]/30 font-mono font-black text-xs shadow-xs tracking-wider">
            {numberStr}
          </span>
          <span className="text-xs font-bold text-[#7186A5] uppercase tracking-wider font-mono">
            {isPlaceholder ? `Slot Contoh ${numberStr}` : `Contoh Kalimat ${numberStr}`}
          </span>
        </div>

        {isPlaceholder ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-950/40 text-amber-300 border border-amber-500/40">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Data Belum Tersedia</span>
          </span>
        ) : (
          <button
            onClick={() => speakJapanese(sentence)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#08152F] hover:bg-[#172945] text-[#F2F6FC] border border-[#3978D6]/25 hover:border-[#3978D6]/50 shadow-2xs transition-all active:scale-95"
            title="Dengarkan pelafalan kalimat bahasa Jepang"
            aria-label="Putar audio kalimat"
          >
            <Volume2 className="w-4 h-4 text-[#3978D6]" />
            <span className="text-xs font-bold hidden sm:inline">Audio</span>
          </button>
        )}
      </div>

      {/* Main Focus: Japanese sentence & Furigana CONTOH PERTAMA */}
      {isPlaceholder ? (
        <div className="py-3 px-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 my-2">
          <p className="text-sm font-semibold text-amber-200 leading-relaxed">
            Struktur 4 kalimat telah disiapkan untuk entri ini. Contoh kalimat kurasi bahasa Jepang untuk nomor {numberStr} akan segera diisi secara akurat dan alami sesuai kaidah tata bahasa.
          </p>
        </div>
      ) : (
        <div className="my-2.5 space-y-1">
          {/* Japanese Sentence with Furigana directly on top of Kanji */}
          <div className="text-xl sm:text-2xl font-black text-[#F2F6FC] kanji-font leading-loose tracking-wide">
            <FuriganaText text={sentence} />
          </div>

          {/* Romaji */}
          {romaji && (
            <p className="text-sm text-[#3978D6] font-semibold pt-0.5">
              {romaji}
            </p>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#3978D6]/20 to-transparent my-3.5" />

      {/* Translations: English & Indonesia with distinct labels */}
      <div className="space-y-2.5">
        {/* English */}
        <div className="flex items-start gap-2.5">
          <span className="px-2 py-0.5 rounded-md bg-[#08152F] text-[#3978D6] text-[10px] font-black uppercase tracking-wider font-mono shrink-0 mt-0.5 border border-[#3978D6]/25">
            EN
          </span>
          <p className="text-xs sm:text-sm font-semibold text-[#F2F6FC] leading-relaxed">
            {english || (isPlaceholder ? 'Example sentence slot 0' + (index + 1) + ' — curated translation coming soon' : '—')}
          </p>
        </div>

        {/* Indonesia */}
        <div className="flex items-start gap-2.5">
          <span className="px-2 py-0.5 rounded-md bg-emerald-950/40 text-emerald-300 text-[10px] font-black uppercase tracking-wider font-mono shrink-0 mt-0.5 border border-emerald-500/30">
            ID
          </span>
          <p className="text-xs sm:text-sm font-bold text-[#F2F6FC] leading-relaxed">
            {indonesian || (isPlaceholder ? 'Slot contoh kalimat 0' + (index + 1) + ' — terjemahan kurasi akan segera hadir' : '—')}
          </p>
        </div>
      </div>

      {/* Optional Grammar Note */}
      {grammarNote && !isPlaceholder && (
        <div className="mt-3.5 p-3 rounded-2xl bg-[#08152F]/60 border border-[#3978D6]/20 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#3978D6] shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-black text-[#F2F6FC] uppercase tracking-wider block text-[10px] mb-0.5">
              Catatan Tata Bahasa:
            </span>
            <p className="text-[#7186A5] font-medium leading-relaxed">
              {grammarNote}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
