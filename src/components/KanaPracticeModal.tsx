import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Eye, 
  PenTool, 
  Headphones, 
  ArrowRight
} from 'lucide-react';
import { KanaItem, KanaType } from '../types';
import { HIRAGANA_DATA, KATAKANA_DATA } from '../data/kanaData';
import { speakJapanese, sound } from '../utils/audio';
import { recordMistake, resolveMistake } from '../utils/exerciseGenerator';
import { KanaCanvasPractice } from './KanaCanvasPractice';
import { KanaStrokePlayer } from './KanaStrokePlayer';

interface KanaPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  kanaType: KanaType;
  onRecordResult?: (score: number, total: number) => void;
}

type PracticeMode = 'recognition' | 'listening' | 'writing';

export const KanaPracticeModal: React.FC<KanaPracticeModalProps> = ({
  isOpen,
  onClose,
  kanaType,
  onRecordResult
}) => {
  const [mode, setMode] = useState<PracticeMode>('recognition');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questions, setQuestions] = useState<KanaItem[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showWritingAnswer, setShowWritingAnswer] = useState(false);

  const rawPool = kanaType === 'hiragana' ? HIRAGANA_DATA : KATAKANA_DATA;
  // Filter out non-syllable punctuation/small markers so every quiz item has a clean phonetic reading
  const pool = rawPool.filter(k => k.group !== 'special' && k.group !== 'small');
  const TOTAL_QUESTIONS = 10;

  // Initialize randomized quiz
  const initQuiz = (targetMode: PracticeMode) => {
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, TOTAL_QUESTIONS);
    setQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowWritingAnswer(false);
    setMode(targetMode);
  };

  useEffect(() => {
    if (isOpen) {
      initQuiz(mode);
    }
  }, [isOpen, kanaType]);

  // Setup options for current question
  useEffect(() => {
    if (questions.length === 0 || currentIndex >= questions.length) return;
    const currentQ = questions[currentIndex];

    if (mode === 'recognition') {
      // Options are unique romajis
      const uniqueWrongRomajis = Array.from(
        new Set(pool.filter(k => k.romaji !== currentQ.romaji).map(k => k.romaji))
      )
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const allOpts = [...uniqueWrongRomajis, currentQ.romaji].sort(() => 0.5 - Math.random());
      setOptions(allOpts);
    } else if (mode === 'listening') {
      // Options are characters with unique romajis to avoid ambiguous sound-alikes
      const wrongChars = pool
        .filter(k => k.char !== currentQ.char && k.romaji !== currentQ.romaji)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(k => k.char);
      const allOpts = [...wrongChars, currentQ.char].sort(() => 0.5 - Math.random());
      setOptions(allOpts);
      speakJapanese(currentQ.char);
    }
    setSelectedOption(null);
    setIsAnswered(false);
    setShowWritingAnswer(false);
  }, [currentIndex, questions, mode]);

  if (!isOpen) return null;

  const currentKana = questions[currentIndex];

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const isCorrect = 
      mode === 'recognition' 
        ? opt === currentKana.romaji 
        : opt === currentKana.char;

    const mistakeId = `kana_${kanaType}_${mode}_${currentKana.id}`;

    if (isCorrect) {
      sound.playCorrect();
      setScore(prev => prev + 1);
      resolveMistake(mistakeId);
    } else {
      sound.playIncorrect();
      recordMistake({
        id: mistakeId,
        bab: 0,
        mode: 'multiple-choice',
        title: `Latihan ${kanaType === 'hiragana' ? 'Hiragana' : 'Katakana'}`,
        instruction: mode === 'recognition' ? 'Pilih romaji yang sesuai untuk karakter berikut:' : 'Pilih karakter yang sesuai dengan pelafalan:',
        question: mode === 'recognition' ? currentKana.char : `Bunyi "${currentKana.romaji}"`,
        japaneseText: currentKana.char,
        reading: currentKana.romaji,
        audioText: currentKana.char,
        options,
        correctAnswer: mode === 'recognition' ? currentKana.romaji : currentKana.char,
        explanation: `${currentKana.char} dibaca "${currentKana.romaji}" (${currentKana.rowLabel}). Contoh: ${currentKana.example?.word || '-'}`
      });
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      sound.playFanfare();
      if (onRecordResult) {
        onRecordResult(score + (isAnswered && (selectedOption === (mode === 'recognition' ? currentKana.romaji : currentKana.char)) ? 1 : 0), TOTAL_QUESTIONS);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[var(--bg-sidebar)]/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl my-auto rounded-3xl bg-[var(--bg-surface)] shadow-[0_20px_60px_-15px_rgba(8, 21, 47,0.95)] border border-[#3978D6]/25 text-[var(--text-primary)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--bg-sidebar)] via-[var(--bg-elevated)] to-[#3978D6]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3978D6]/20 bg-[var(--bg-sidebar)]/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/30 text-xs font-black uppercase font-mono shadow-xs">
              Latihan {kanaType === 'hiragana' ? 'Hiragana' : 'Katakana'}
            </span>
            {!isFinished && (
              <span className="text-xs font-mono font-bold text-[var(--text-muted)]">
                Soal {currentIndex + 1} / {questions.length}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        {!isFinished && (
          <div className="flex items-center gap-1.5 px-6 pt-4 pb-2 border-b border-[#3978D6]/15 bg-[var(--bg-surface)]">
            <button
              onClick={() => initQuiz('recognition')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                mode === 'recognition'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'bg-[var(--bg-sidebar)]/60 text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[#3978D6]/15'
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-[#3978D6]" />
              <span>Pengenalan Huruf</span>
            </button>

            <button
              onClick={() => initQuiz('listening')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                mode === 'listening'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'bg-[var(--bg-sidebar)]/60 text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[#3978D6]/15'
              }`}
            >
              <Headphones className="w-3.5 h-3.5 text-[#3978D6]" />
              <span>Latihan Audio</span>
            </button>

            <button
              onClick={() => initQuiz('writing')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                mode === 'writing'
                  ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                  : 'bg-[var(--bg-sidebar)]/60 text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[#3978D6]/15'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 text-[#3978D6]" />
              <span>Latihan Menulis</span>
            </button>
          </div>
        )}

        {/* Quiz Body */}
        <div className="p-6 sm:p-8">
          
          {/* RESULTS SCREEN */}
          {isFinished ? (
            <div className="text-center space-y-6 py-4">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] border border-[#3978D6]/30 text-white flex items-center justify-center shadow-lg shadow-[#08152F]/50">
                <Award className="w-10 h-10 text-[#3978D6]" />
              </div>

              <div>
                <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider font-mono">
                  Sesi Latihan Tuntas!
                </span>
                <h3 className="text-3xl font-black text-[var(--text-primary)] mt-1 font-['Manrope']">
                  Skor Anda: {score} / {questions.length}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  {score >= 8 
                    ? 'Luar biasa! Pemahaman karakter Anda sangat tajam.' 
                    : score >= 5 
                    ? 'Cukup bagus! Ulangi beberapa kali lagi untuk memantapkan memori.' 
                    : 'Terus berlatih! Ulangi sesi latihan untuk memperkuat ingatan visual.'}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => initQuiz(mode)}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-[var(--text-primary)] border border-[#3978D6]/40 font-bold text-sm shadow-md transition-all active:scale-95"
                >
                  <RotateCcw className="w-4 h-4 text-[#3978D6]" />
                  <span>Coba Lagi</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-2xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/25 font-bold text-sm transition-colors"
                >
                  Selesai
                </button>
              </div>
            </div>
          ) : currentKana ? (
            
            <div className="space-y-6">
              
              {/* MODE A: CHARACTER RECOGNITION */}
              {mode === 'recognition' && (
                <div className="space-y-6 text-center">
                  <div className="p-8 rounded-3xl bg-[var(--bg-sidebar)] border border-[#3978D6]/25 shadow-xs relative">
                    <span className="kanji-font text-8xl font-black text-[var(--text-primary)] select-none block">
                      {currentKana.char}
                    </span>
                    <button
                      onClick={() => speakJapanese(currentKana.char)}
                      className="absolute top-4 right-4 p-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/25 shadow-2xs"
                      title="Dengarkan bunyi"
                    >
                      <Volume2 className="w-4 h-4 text-[#3978D6]" />
                    </button>
                  </div>

                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Pilih Romaji yang Sesuai:
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {options.map((opt, idx) => {
                      let btnStyle = 'bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border-[#3978D6]/20';
                      if (isAnswered) {
                        if (opt === currentKana.romaji) {
                          btnStyle = 'bg-emerald-500/20 text-emerald-400 border-emerald-500 shadow-xs ring-2 ring-emerald-500/30';
                        } else if (opt === selectedOption) {
                          btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500 shadow-xs';
                        } else {
                          btnStyle = 'opacity-40 bg-[var(--bg-sidebar)]/40 text-[var(--text-muted)]/50 border-transparent';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(opt)}
                          disabled={isAnswered}
                          className={`p-4 rounded-2xl border text-xl font-mono font-black transition-all shadow-2xs ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MODE B: LISTENING PRACTICE */}
              {mode === 'listening' && (
                <div className="space-y-6 text-center">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--bg-sidebar)] to-[var(--bg-elevated)] border border-[#3978D6]/25 text-[var(--text-primary)] shadow-md space-y-3">
                    <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-widest block">
                      Dengarkan Bunyi Karakter:
                    </span>

                    <button
                      onClick={() => speakJapanese(currentKana.char)}
                      className="p-5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/30 transition-transform active:scale-95 shadow-md mx-auto inline-block"
                      title="Putar ulang suara"
                    >
                      <Volume2 className="w-8 h-8 text-[#3978D6]" />
                    </button>

                    <p className="text-xs text-[var(--text-muted)] font-medium">
                      Klik ikon untuk memutar ulang audio
                    </p>
                  </div>

                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
                    Pilih Karakter Jepang yang Terdengar:
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {options.map((opt, idx) => {
                      let btnStyle = 'bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border-[#3978D6]/20';
                      if (isAnswered) {
                        if (opt === currentKana.char) {
                          btnStyle = 'bg-emerald-500/20 text-emerald-400 border-emerald-500 shadow-xs ring-2 ring-emerald-500/30';
                        } else if (opt === selectedOption) {
                          btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500 shadow-xs';
                        } else {
                          btnStyle = 'opacity-40 bg-[var(--bg-sidebar)]/40 text-[var(--text-muted)]/50 border-transparent';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(opt)}
                          disabled={isAnswered}
                          className={`p-4 rounded-2xl border kanji-font text-3xl font-black transition-all shadow-2xs ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* MODE C: WRITING PRACTICE */}
              {mode === 'writing' && (
                <div className="space-y-5">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/25">
                    <div>
                      <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block font-mono">
                        Target Karakter:
                      </span>
                      <h4 className="text-2xl font-black text-[var(--text-primary)] font-mono">
                        {currentKana.romaji.toUpperCase()} ({currentKana.pronunciation})
                      </h4>
                    </div>

                    <button
                      onClick={() => speakJapanese(currentKana.char)}
                      className="p-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/25"
                      title="Dengarkan pelafalan"
                    >
                      <Volume2 className="w-4 h-4 text-[#3978D6]" />
                    </button>
                  </div>

                  {/* Handwriting Canvas */}
                  {!showWritingAnswer ? (
                    <div className="space-y-4">
                      <KanaCanvasPractice
                        char={currentKana.char}
                        strokeCount={currentKana.strokeCount}
                        writingTips={currentKana.writingTips}
                      />

                      <div className="flex items-center justify-center pt-2">
                        <button
                          onClick={() => setShowWritingAnswer(true)}
                          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/25 font-bold text-xs shadow-2xs"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#3978D6]" />
                          <span>Tampilkan Urutan Goresan Resmi</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="p-3 bg-[var(--bg-sidebar)] rounded-2xl border border-[#3978D6]/25 text-center">
                        <KanaStrokePlayer
                          char={currentKana.char}
                          strokeCount={currentKana.strokeCount}
                          writingTips={currentKana.writingTips}
                        />
                      </div>

                      <button
                        onClick={() => setShowWritingAnswer(false)}
                        className="w-full py-2.5 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] text-xs font-bold border border-[#3978D6]/25"
                      >
                        ← Kembali ke Kanvas Menulis
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Bottom Next Button Bar */}
              {(isAnswered || mode === 'writing') && (
                <div className="pt-4 border-t border-[#3978D6]/15 flex items-center justify-between">
                  <div className="text-xs">
                    {mode !== 'writing' && isAnswered && (
                      <span className={`font-bold flex items-center gap-1.5 ${
                        (mode === 'recognition' ? selectedOption === currentKana.romaji : selectedOption === currentKana.char)
                          ? 'text-emerald-400'
                          : 'text-rose-400'
                      }`}>
                        {(mode === 'recognition' ? selectedOption === currentKana.romaji : selectedOption === currentKana.char)
                          ? <CheckCircle2 className="w-4 h-4" />
                          : <XCircle className="w-4 h-4" />}
                        <span>
                          {(mode === 'recognition' ? selectedOption === currentKana.romaji : selectedOption === currentKana.char)
                            ? 'Jawaban Anda Tepat!'
                            : `Kurang Tepat. Jawaban: ${mode === 'recognition' ? currentKana.romaji : currentKana.char}`}
                        </span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-[var(--text-primary)] border border-[#3978D6]/40 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
                  >
                    <span>{currentIndex + 1 === questions.length ? 'Lihat Hasil' : 'Soal Berikutnya'}</span>
                    <ArrowRight className="w-4 h-4 text-[#3978D6]" />
                  </button>
                </div>
              )}

            </div>
          ) : null}

        </div>
      </div>
    </div>
  );
};
