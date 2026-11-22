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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto rounded-3xl bg-[#0D1830] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#2457C5]/30 text-[#DCE9FF] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2457C5]/25 bg-[#121F3D]/90">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white text-xs font-black uppercase tracking-wider font-mono shadow-xs">
              Bab {word.bab} · #{word.no}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#6B85B5] bg-[#0D1830] px-2.5 py-1 rounded-xl border border-[#2457C5]/25">
              <Tag className="w-3 h-3 text-[#55B9F5]" />
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
                  ? 'bg-amber-50 text-amber-500 fill-amber-400 border-amber-200 shadow-2xs'
                  : 'bg-[#0D1830] hover:bg-amber-50 text-[#6B85B5] hover:text-amber-500 border-[#2457C5]/25'
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
                  ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-500/30 shadow-xs'
                  : 'bg-[#0D1830] hover:bg-emerald-500/15 hover:text-emerald-700 text-[#DCE9FF] border border-[#2457C5]/25'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isLearned ? 'Sudah Dihafal' : 'Tandai Hafal'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#0D1830]/15/12 text-[#6B85B5] hover:text-[#DCE9FF] transition-colors"
              aria-label="Tutup jendela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Main Word Hero Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#101C3D] via-[#1B367A] to-[#2457C5] text-white shadow-md shadow-[#101C3D]/20 relative overflow-hidden">
            {/* Watermark Kanji Background */}
            <div className="absolute -right-4 -bottom-6 text-[120px] font-black kanji-font text-white/5 pointer-events-none select-none">
              {word.kanji || word.kana}
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#55B9F5] font-mono tracking-wider block mb-1">
                  {word.kana}
                </span>
                <h1 className="kanji-font text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm">
                  {word.kanji || word.kana}
                </h1>
                <p className="text-sm font-mono text-[#DCE9FF] mt-1">
                  {word.romaji}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => speakJapanese(word.kana || word.kanji)}
                  className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#0D1830]/15 hover:bg-[#0D1830]/15/25 text-white transition-all shadow-xs border border-white/20 active:scale-95"
                  title="Dengarkan pelafalan kosakata"
                >
                  <Volume2 className="w-5 h-5 text-[#55B9F5]" />
                  <span className="text-xs font-black uppercase tracking-wider">Audio Kata</span>
                </button>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/15 relative z-10">
              <span className="text-xs text-[#55B9F5] font-medium block">Arti Bahasa Indonesia:</span>
              <p className="text-xl sm:text-2xl font-black text-white font-['Manrope'] mt-0.5">
                {word.arti}
              </p>
            </div>
          </div>

          {/* 4 Contoh Kalimat Section */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2457C5]/25 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-[#DCE9FF] flex items-center gap-2 font-['Manrope']">
                  <BookOpen className="w-4 h-4 text-[#55B9F5]" />
                  <span>4 Contoh Kalimat Kosakata 「{word.kanji || word.kana}」</span>
                </h3>
                <p className="text-xs text-[#6B85B5] mt-0.5">
                  Tersusun dalam 4 kartu (01, 02, 03, 04) dengan furigana, romaji, terjemahan EN & ID, serta audio pelafalan.
                </p>
              </div>

              <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#0D1830]/8 border border-[#2457C5]/25 text-[#55B9F5] text-xs font-black font-mono">
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
