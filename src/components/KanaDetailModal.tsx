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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl my-auto rounded-3xl bg-white shadow-2xl border border-[#D2E2FC] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D2E2FC] bg-[#F0F5FF]/90">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white text-xs font-black uppercase tracking-wider font-mono shadow-xs">
              {kana.type === 'hiragana' ? 'ひらがな' : 'カタカナ'}
            </span>
            <span className="text-xs font-bold text-[#4A5B82] bg-white px-2.5 py-1 rounded-xl border border-[#D2E2FC]">
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
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 shadow-xs' 
                  : 'bg-white hover:bg-emerald-50 hover:text-emerald-700 text-[#101C3D] border border-[#D2E2FC]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{isLearned ? 'Sudah Dikuasai' : 'Tandai Hafal'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#DCE9FF] text-[#4A5B82] hover:text-[#101C3D] transition-colors"
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
            <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br from-[#101C3D] via-[#1B367A] to-[#2457C5] text-white shadow-md shadow-[#101C3D]/20 relative overflow-hidden">
              
              {/* Background Watermark */}
              <div className="absolute -right-4 -bottom-6 text-[150px] font-black kanji-font text-white/5 pointer-events-none select-none">
                {kana.char}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#55B9F5] bg-white/10 px-2.5 py-1 rounded-lg">
                    {kana.type === 'hiragana' ? 'Hiragana' : 'Katakana'}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#DCE9FF]">
                    Pelafalan: {kana.pronunciation}
                  </span>
                </div>

                {/* Big Character & Audio */}
                <div className="text-center py-4">
                  <span className="text-sm font-mono font-bold text-[#55B9F5] tracking-widest block uppercase mb-1">
                    Romaji: {kana.romaji}
                  </span>
                  <h1 className="kanji-font text-8xl font-black text-white select-none drop-shadow-sm">
                    {kana.char}
                  </h1>
                </div>
              </div>

              {/* Bottom Actions of Left Card */}
              <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                <button
                  onClick={() => speakJapanese(kana.char)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl bg-white/15 hover:bg-white/25 text-white transition-all shadow-xs border border-white/20 active:scale-95"
                  title="Dengarkan pelafalan karakter"
                >
                  <Volume2 className="w-4 h-4 text-[#55B9F5]" />
                  <span className="text-xs font-bold uppercase tracking-wider">Audio Bunyi</span>
                </button>

                {/* Switch to Paired Kana (Hiragana <-> Katakana) */}
                {pairedKana && (
                  <button
                    onClick={() => onSelectKana(pairedKana)}
                    className="flex items-center gap-1.5 py-2.5 px-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-[#DCE9FF] text-xs font-bold border border-white/15 transition-all"
                    title={`Beralih ke padanan ${pairedKana.type === 'hiragana' ? 'Hiragana' : 'Katakana'} (${pairedKana.char})`}
                  >
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                    <span>Lihat {pairedKana.char}</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Column: Contoh Kata Sederhana & Detail Edukasi */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              
              <div className="card-soft p-5 rounded-3xl space-y-4 border border-[#D2E2FC] bg-white flex-1">
                
                <div className="flex items-center justify-between border-b border-[#D2E2FC] pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#2457C5]" />
                    <h4 className="text-xs font-bold text-[#101C3D] uppercase tracking-wider">
                      Contoh Kata Sederhana (Vocabulary)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#4A5B82] font-mono">
                    Standar N5 & Minna no Nihongo
                  </span>
                </div>

                {/* Primary Example Word */}
                <div className="p-4 rounded-2xl bg-[#F0F5FF] border border-[#D2E2FC] flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="kanji-font text-2xl font-black text-[#101C3D]">
                        {kana.example.word}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#2457C5]">
                        ({kana.example.romaji})
                      </span>
                    </div>

                    <div className="pt-1.5 space-y-0.5 text-xs">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-bold text-[#4A5B82] text-[10px] uppercase font-mono">EN:</span>
                        <span className="font-semibold text-[#1A2A4E]">{kana.example.meaningEn}</span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-black text-[#2457C5] text-[10px] uppercase font-mono">ID:</span>
                        <span className="font-bold text-[#101C3D]">{kana.example.meaningId}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => speakJapanese(kana.example.word)}
                    className="p-2.5 rounded-xl bg-white hover:bg-[#E5EFFF] text-[#101C3D] border border-[#D2E2FC] shadow-2xs transition-colors shrink-0"
                    title="Dengarkan pelafalan contoh kata"
                  >
                    <Volume2 className="w-4 h-4 text-[#2457C5]" />
                  </button>
                </div>

                {/* Additional Example Word (If available) */}
                {kana.additionalExample && (
                  <div className="p-3.5 rounded-2xl bg-[#F0F5FF] border border-[#D2E2FC] flex items-start justify-between gap-3">
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="kanji-font text-xl font-black text-[#101C3D]">
                          {kana.additionalExample.word}
                        </span>
                        <span className="font-mono text-[#4A5B82]">
                          ({kana.additionalExample.romaji})
                        </span>
                      </div>
                      <p className="text-[#101C3D] font-medium">
                        Arti: {kana.additionalExample.meaningId} · <span className="text-[#4A5B82]">{kana.additionalExample.meaningEn}</span>
                      </p>
                    </div>

                    <button
                      onClick={() => speakJapanese(kana.additionalExample!.word)}
                      className="p-2 rounded-xl bg-white hover:bg-[#E5EFFF] text-[#4A5B82] hover:text-[#101C3D] border border-[#D2E2FC] transition-colors shrink-0"
                      title="Dengarkan audio"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Short Writing Rule Note */}
                <div className="p-3.5 rounded-2xl bg-[#E8F6FF] border border-[#BAE6FD] text-xs text-[#0C4A6E] font-medium leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold text-[#0369A1] text-[11px] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Petunjuk Bentuk & Keseimbangan Huruf:</span>
                  </div>
                  <p>{kana.writingTips}</p>
                </div>

              </div>

            </div>

          </div>

          {/* LOWER INTERACTIVE TABS: CARA MENULIS VS LATIHAN KANVAS */}
          <div className="card-soft rounded-3xl overflow-hidden border border-[#D2E2FC] bg-white">
            
            {/* Tab Buttons */}
            <div className="flex items-center border-b border-[#D2E2FC] bg-[#F0F5FF]/90 px-4 py-2 gap-2">
              <button
                onClick={() => setActiveTab('goresan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === 'goresan'
                    ? 'bg-white shadow-xs text-[#101C3D] border border-[#D2E2FC]'
                    : 'text-[#4A5B82] hover:text-[#101C3D]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#2457C5]" />
                <span>書き順 Urutan Goresan & Animasi</span>
              </button>

              <button
                onClick={() => setActiveTab('latihan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                  activeTab === 'latihan'
                    ? 'bg-white shadow-xs text-[#101C3D] border border-[#D2E2FC]'
                    : 'text-[#4A5B82] hover:text-[#101C3D]'
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-[#8975E8]" />
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
