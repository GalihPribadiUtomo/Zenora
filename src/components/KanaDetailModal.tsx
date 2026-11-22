import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  PenTool, 
  BookOpen, 
  Sparkles, 
  ArrowRightLeft
} from 'lucide-react';
import { KanaItem } from '../types';
import { speakJapanese, sound } from '../utils/audio';
import { KanaStrokePlayer } from './KanaStrokePlayer';
import { KanaCanvasPractice } from './KanaCanvasPractice';
import { ALL_KANA_DATA } from '../data/kanaData';

interface KanaDetailModalProps {
  kana: KanaItem | null;
  onClose: () => void;
  isLearned: boolean;
  onToggleLearned: (char: string) => void;
  onSelectKana: (kana: KanaItem) => void;
}

export const KanaDetailModal: React.FC<KanaDetailModalProps> = ({
  kana,
  onClose,
  isLearned,
  onToggleLearned,
  onSelectKana
}) => {
  const [activeTab, setActiveTab] = useState<'goresan' | 'latihan'>('goresan');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!kana) return null;

  // Find equivalent paired character (Hiragana <-> Katakana)
  const pairedKana = ALL_KANA_DATA.find(k => k.char === kana.equivalentChar);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#0C1B33]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#16294A] shadow-[0_20px_60px_-15px_rgba(12,27,51,0.95)] border border-[#8FB4E3]/25 text-[#EEF1F6] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#0C1B33] via-[#1F3760] to-[#8FB4E3]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#8FB4E3]/20 bg-[#0C1B33]/80">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/30 text-xs font-black uppercase tracking-wider font-mono shadow-xs">
              {kana.type === 'hiragana' ? 'ひらがな' : 'カタカナ'}
            </span>
            <span className="text-xs font-bold text-[#8793A8] bg-[#16294A] px-2.5 py-1 rounded-xl border border-[#8FB4E3]/20">
              {kana.rowLabel} · {kana.strokeCount} Goresan
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Mark Learned Toggle */}
            <button
              onClick={() => {
                onToggleLearned(kana.char);
                if (!isLearned) sound.playCorrect();
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isLearned 
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-xs' 
                  : 'bg-[#16294A] hover:bg-emerald-500/15 hover:text-emerald-400 text-[#EEF1F6] border border-[#8FB4E3]/25'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{isLearned ? 'Sudah Dikuasai' : 'Tandai Hafal'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#1F3760] text-[#8793A8] hover:text-[#EEF1F6] transition-colors"
              aria-label="Tutup jendela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          
          {/* Top Info Banner Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Column: Character Master Hero Card */}
            <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] border border-[#8FB4E3]/30 text-[#EEF1F6] shadow-md relative overflow-hidden">
              
              {/* Background Watermark */}
              <div className="absolute -right-4 -bottom-6 text-[150px] font-black kanji-font text-white/5 pointer-events-none select-none">
                {kana.char}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#8FB4E3] bg-[#0C1B33]/80 border border-[#8FB4E3]/20 px-2.5 py-1 rounded-lg">
                    {kana.type === 'hiragana' ? 'Hiragana' : 'Katakana'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#EEF1F6]">
                    Pelafalan: {kana.pronunciation}
                  </span>
                </div>

                {/* Big Character & Audio */}
                <div className="text-center py-4">
                  <span className="text-sm font-mono font-bold text-[#8FB4E3] tracking-widest block uppercase mb-1">
                    Romaji: {kana.romaji}
                  </span>
                  <h1 className="kanji-font text-8xl font-black text-[#EEF1F6] select-none drop-shadow-sm">
                    {kana.char}
                  </h1>
                </div>
              </div>

              {/* Bottom Actions of Left Card */}
              <div className="pt-4 border-t border-[#8FB4E3]/20 flex items-center justify-between gap-3">
                <button
                  onClick={() => speakJapanese(kana.char)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-[#0C1B33]/80 hover:bg-[#1F3760] text-[#EEF1F6] transition-all shadow-xs border border-[#8FB4E3]/20 active:scale-95"
                  title="Dengarkan pelafalan karakter"
                >
                  <Volume2 className="w-4 h-4 text-[#8FB4E3]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Audio Bunyi</span>
                </button>

                {/* Switch to Paired Kana (Hiragana <-> Katakana) */}
                {pairedKana && (
                  <button
                    onClick={() => onSelectKana(pairedKana)}
                    className="flex items-center gap-1.5 py-2.5 px-3.5 rounded-2xl bg-[#0C1B33]/60 hover:bg-[#1F3760] text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/20 transition-all"
                    title={`Beralih ke padanan ${pairedKana.type === 'hiragana' ? 'Hiragana' : 'Katakana'} (${pairedKana.char})`}
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5 text-[#8FB4E3]" />
                    <span>Lihat {pairedKana.char}</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Column: Contoh Kata Sederhana & Detail Edukasi */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              
              <div className="p-5 rounded-3xl space-y-4 border border-[#8FB4E3]/20 bg-[#0C1B33]/60 flex-1 shadow-[0_4px_16px_rgba(12,27,51,0.4)]">
                
                <div className="flex items-center justify-between border-b border-[#8FB4E3]/15 pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#8FB4E3]" />
                    <h4 className="text-xs font-bold text-[#EEF1F6] uppercase tracking-wider">
                      Contoh Kata Sederhana (Vocabulary)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#8793A8] font-mono">
                    Standar N5 & Minna no Nihongo
                  </span>
                </div>

                {/* Primary Example Word */}
                <div className="p-4 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="kanji-font text-2xl font-black text-[#EEF1F6]">
                        {kana.example.word}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#8FB4E3]">
                        ({kana.example.romaji})
                      </span>
                    </div>

                    <div className="pt-1.5 space-y-0.5 text-xs">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-bold text-[#8793A8] text-[10px] uppercase font-mono">EN:</span>
                        <span className="font-semibold text-[#CBD8EC]">{kana.example.meaningEn}</span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-black text-[#8FB4E3] text-[10px] uppercase font-mono">ID:</span>
                        <span className="font-bold text-[#EEF1F6]">{kana.example.meaningId}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => speakJapanese(kana.example.word)}
                    className="p-2.5 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 shadow-2xs transition-colors shrink-0"
                    title="Dengarkan pelafalan contoh kata"
                  >
                    <Volume2 className="w-4 h-4 text-[#8FB4E3]" />
                  </button>
                </div>

                {/* Additional Example Word (If available) */}
                {kana.additionalExample && (
                  <div className="p-3.5 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 flex items-start justify-between gap-3">
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="kanji-font text-xl font-black text-[#EEF1F6]">
                          {kana.additionalExample.word}
                        </span>
                        <span className="font-mono text-[#8793A8]">
                          ({kana.additionalExample.romaji})
                        </span>
                      </div>
                      <p className="text-[#EEF1F6] font-medium">
                        Arti: {kana.additionalExample.meaningId} · <span className="text-[#8793A8]">{kana.additionalExample.meaningEn}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => speakJapanese(kana.additionalExample!.word)}
                      className="p-2 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/20 transition-colors shrink-0"
                      title="Dengarkan audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Short Writing Rule Note */}
                <div className="p-3.5 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 text-xs text-[#EEF1F6] font-medium leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold text-[#8FB4E3] text-[11px] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#8FB4E3]" />
                    <span>Petunjuk Bentuk & Keseimbangan Huruf:</span>
                  </div>
                  <p className="text-[#8793A8]">{kana.writingTips}</p>
                </div>

              </div>

            </div>

          </div>

          {/* LOWER INTERACTIVE TABS: CARA MENULIS VS LATIHAN KANVAS */}
          <div className="rounded-3xl overflow-hidden border border-[#8FB4E3]/25 bg-[#0C1B33]/70 shadow-[0_4px_24px_rgba(12,27,51,0.5)]">
            
            {/* Tab Buttons */}
            <div className="flex items-center border-b border-[#8FB4E3]/20 bg-[#16294A] px-4 py-2 gap-2">
              <button
                onClick={() => setActiveTab('goresan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === 'goresan'
                    ? 'bg-[#1F3760] shadow-xs text-[#EEF1F6] border border-[#8FB4E3]/40'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8FB4E3]" />
                <span>書き順 Urutan Goresan & Animasi</span>
              </button>

              <button
                onClick={() => setActiveTab('latihan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === 'latihan'
                    ? 'bg-[#1F3760] shadow-xs text-[#EEF1F6] border border-[#8FB4E3]/40'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-[#8FB4E3]" />
                <span>なぞり書き Kanvas Latihan Menulis</span>
              </button>
            </div>

            {/* TAB CONTENT 1: STROKE ORDER ANIMATION */}
            {activeTab === 'goresan' && (
              <div className="p-6">
                <KanaStrokePlayer
                  char={kana.char}
                  strokeCount={kana.strokeCount}
                  writingTips={kana.writingTips}
                />
              </div>
            )}

            {/* TAB CONTENT 2: HANDWRITING CANVAS PRACTICE */}
            {activeTab === 'latihan' && (
              <div className="p-6">
                <KanaCanvasPractice
                  char={kana.char}
                  strokeCount={kana.strokeCount}
                  writingTips={kana.writingTips}
                />
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
