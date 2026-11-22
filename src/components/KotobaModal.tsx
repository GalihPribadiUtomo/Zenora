import React, { useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  Star, 
  BookOpen, 
  Tag
} from 'lucide-react';
import { KotobaItem } from '../types';
import { speakJapanese, sound } from '../utils/audio';
import { getKotobaSentences } from '../data/kotobaSentencesData';
import { SentenceCard } from './SentenceCard';
import { FuriganaText } from './FuriganaText';

interface KotobaModalProps {
  word: KotobaItem | null;
  onClose: () => void;
  isLearned: boolean;
  isBookmarked: boolean;
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
}

export const KotobaModal: React.FC<KotobaModalProps> = ({
  word,
  onClose,
  isLearned,
  isBookmarked,
  onToggleLearned,
  onToggleBookmark
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!word) return null;

  const sentences = getKotobaSentences(word);
  const targetHighlight = word.kanji || word.kana;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#0C1B33]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto rounded-3xl bg-[#16294A] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#8FB4E3]/25 text-[#EEF1F6] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0C1B33] via-[#8FB4E3] to-[#EEF1F6]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#8FB4E3]/20 bg-[#16294A]/90">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/30 text-xs font-black uppercase tracking-wider font-mono shadow-xs">
              Bab {word.bab} · #{word.no}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#8793A8] bg-[#0C1B33] px-2.5 py-1 rounded-xl border border-[#8FB4E3]/25">
              <Tag className="w-3 h-3 text-[#8FB4E3]" />
              {word.kategori}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onToggleBookmark(word.id);
                sound.playClick();
              }}
              className={`p-2 rounded-xl border transition-all ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-400 fill-amber-400 border-amber-500/40 shadow-2xs'
                  : 'bg-[#0C1B33] hover:bg-amber-500/20 text-[#8793A8] hover:text-amber-400 border-[#8FB4E3]/25'
              }`}
              title={isBookmarked ? 'Hapus dari favorit' : 'Simpan ke favorit'}
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>

            <button
              onClick={() => {
                onToggleLearned(word.id);
                if (!isLearned) sound.playCorrect();
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isLearned
                  ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 shadow-xs'
                  : 'bg-[#0C1B33] hover:bg-emerald-950/30 hover:text-emerald-300 text-[#EEF1F6] border border-[#8FB4E3]/25'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isLearned ? 'Sudah Dihafal' : 'Tandai Hafal'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#0C1B33] text-[#8793A8] hover:text-[#EEF1F6] transition-colors"
              aria-label="Tutup jendela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Main Word Hero Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1F3760] via-[#223F6D] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/35 shadow-md relative overflow-hidden">
            {/* Watermark Kanji Background */}
            <div className="absolute -right-4 -bottom-6 text-[120px] font-black kanji-font text-white/5 pointer-events-none select-none">
              {word.kanji || word.kana}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#8FB4E3] font-mono tracking-wider block mb-1">
                  {word.kana}
                </span>
                <h1 className="kanji-font text-4xl sm:text-5xl font-black text-[#EEF1F6] tracking-tight drop-shadow-sm leading-relaxed">
                  <FuriganaText text={word.kanji || word.kana} reading={word.kana} />
                </h1>
                <p className="text-sm font-mono text-[#8793A8] mt-1">
                  {word.romaji}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => speakJapanese(word.kana || word.kanji)}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0C1B33]/80 hover:bg-[#0C1B33] text-[#EEF1F6] transition-all shadow-xs border border-[#8FB4E3]/30 active:scale-95"
                  title="Dengarkan pelafalan kosakata"
                >
                  <Volume2 className="w-5 h-5 text-[#8FB4E3]" />
                  <span className="text-xs font-black uppercase tracking-wider">Audio Kata</span>
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-[#8FB4E3]/20 relative z-10">
              <span className="text-xs text-[#8FB4E3] font-medium block">Arti Bahasa Indonesia:</span>
              <p className="text-xl sm:text-2xl font-black text-[#EEF1F6] font-['Manrope'] mt-0.5">
                {word.arti}
              </p>
            </div>
          </div>

          {/* 4 Contoh Kalimat Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#8FB4E3]/20 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-[#EEF1F6] flex items-center gap-2 font-['Manrope']">
                  <BookOpen className="w-4 h-4 text-[#8FB4E3]" />
                  <span>4 Contoh Kalimat Kosakata 「{word.kanji || word.kana}」</span>
                </h3>
                <p className="text-xs text-[#8793A8] mt-0.5">
                  Tersusun dalam 4 kartu (01, 02, 03, 04) dengan furigana, romaji, terjemahan EN & ID, serta audio pelafalan.
                </p>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#0C1B33] border border-[#8FB4E3]/25 text-[#8FB4E3] text-xs font-black font-mono">
                4 Contoh Kalimat
              </span>
            </div>

            {/* 4 Sentence Cards Grid */}
            <div className="grid grid-cols-1 gap-4">
              {sentences.map((item, idx) => (
                <SentenceCard
                  key={idx}
                  index={idx}
                  sentence={item.sentence}
                  furigana={item.furigana}
                  romaji={item.romaji}
                  english={item.english}
                  indonesian={item.indonesian}
                  highlight={item.highlight || targetHighlight}
                  grammarNote={item.grammarNote}
                  isPlaceholder={item.isPlaceholder}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
