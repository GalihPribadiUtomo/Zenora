import React, { useState, useEffect } from 'react';
import {
  X,
  BookX,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Trash2,
  Volume2,
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';
import { ExerciseQuestion } from '../types';
import { getSavedMistakes, resolveMistake } from '../utils/exerciseGenerator';
import { speakJapanese, sound } from '../utils/audio';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPracticeComplete?: (resolvedCount: number) => void;
}

export const MistakeNotebookModal: React.FC<MistakeNotebookModalProps> = ({
  isOpen,
  onClose,
  onPracticeComplete
}) => {
  const [mistakes, setMistakes] = useState<ExerciseQuestion[]>([]);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resolvedInSession, setResolvedInSession] = useState(0);
  const [quizList, setQuizList] = useState<ExerciseQuestion[]>([]);

  const loadMistakes = () => {
    setMistakes(getSavedMistakes());
  };

  useEffect(() => {
    if (isOpen) {
      loadMistakes();
      setIsQuizMode(false);
      setQuizIndex(0);
      setSelectedOption(null);
      setIsSubmitted(false);
      setResolvedInSession(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleResolve = (id: string) => {
    sound.playClick();
    resolveMistake(id);
    loadMistakes();
  };

  const handleStartRetryQuiz = () => {
    if (mistakes.length === 0) return;
    sound.playClick();
    const usable = mistakes.filter((m) => m.options && m.options.length >= 2);
    const target = usable.length > 0 ? usable : mistakes;
    setQuizList(target.slice(0, 15));
    setQuizIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setResolvedInSession(0);
    setIsQuizMode(true);
  };

  const currentQ = quizList[quizIndex];

  const handleAnswer = (opt: string) => {
    if (isSubmitted || !currentQ) return;
    setSelectedOption(opt);
    setIsSubmitted(true);

    if (opt === currentQ.correctAnswer) {
      sound.playCorrect();
      resolveMistake(currentQ.id);
      setResolvedInSession((prev) => prev + 1);
    } else {
      sound.playIncorrect();
    }
  };

  const handleNextQuiz = () => {
    sound.playClick();
    if (quizIndex + 1 < quizList.length) {
      setQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsQuizMode(false);
      loadMistakes();
      sound.playFanfare();
      if (onPracticeComplete && resolvedInSession > 0) {
        onPracticeComplete(resolvedInSession);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-5 py-6 sm:py-8 bg-[var(--bg-sidebar)]/90 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-auto rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/35 shadow-[0_25px_70px_rgba(8, 21, 47,0.95)] text-[var(--text-primary)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 via-[#3978D6] to-[#69C9DF]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3978D6]/20 bg-[var(--bg-sidebar)]/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300">
              <BookX className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-black text-[var(--text-primary)] font-['Manrope']">
                Buku Catatan Kesalahan (Mistake Notebook)
              </h3>
              <p className="text-[11px] text-[var(--text-secondary)]">
                {isQuizMode
                  ? `Latih Ulang: Soal ${quizIndex + 1} / ${quizList.length}`
                  : `${mistakes.length} soal tersimpan untuk dipelajari ulang`}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-5">
          {isQuizMode && currentQ ? (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[var(--soft-sky)] uppercase">
                    {currentQ.title}
                  </span>
                  {currentQ.audioText && (
                    <button
                      onClick={() => speakJapanese(currentQ.audioText!)}
                      className="p-2 rounded-xl bg-[var(--bg-elevated)] text-[var(--soft-sky)] hover:text-[var(--text-primary)] border border-[#3978D6]/30"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <p className="text-xs text-[var(--text-secondary)]">{currentQ.instruction}</p>
                <div className="text-xl sm:text-2xl font-black text-[var(--text-primary)] kanji-font">
                  {currentQ.question}
                </div>
              </div>

              {currentQ.options && currentQ.options.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentQ.options.map((opt, idx) => {
                    let style = 'bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] border-[#3978D6]/25 text-[var(--text-primary)]';
                    if (isSubmitted) {
                      if (opt === currentQ.correctAnswer) {
                        style = 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
                      } else if (opt === selectedOption) {
                        style = 'bg-rose-500/20 border-rose-500 text-rose-300';
                      } else {
                        style = 'opacity-40 bg-[var(--bg-sidebar)] border-transparent text-[var(--text-muted)]';
                      }
                    }
                    return (
                      <button
                        key={idx}
                        disabled={isSubmitted}
                        onClick={() => handleAnswer(opt)}
                        className={`p-4 rounded-2xl border text-sm font-bold text-left transition-all ${style}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 space-y-2">
                  <div className="text-xs text-[var(--text-secondary)]">Jawaban Benar:</div>
                  <div className="text-base font-black text-emerald-400">{currentQ.correctAnswer}</div>
                  {!isSubmitted && (
                    <button
                      onClick={() => handleAnswer(currentQ.correctAnswer)}
                      className="mt-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold"
                    >
                      Tandai Sudah Paham
                    </button>
                  )}
                </div>
              )}

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-[var(--bg-elevated)]/70 border border-[#3978D6]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="text-xs space-y-1">
                    <div className={`font-bold flex items-center gap-1.5 ${selectedOption === currentQ.correctAnswer ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {selectedOption === currentQ.correctAnswer ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>{selectedOption === currentQ.correctAnswer ? 'Benar! Dihapus dari daftar kesalahan.' : `Kurang tepat. Jawaban: ${currentQ.correctAnswer}`}</span>
                    </div>
                    {currentQ.explanation && <p className="text-[var(--text-secondary)]">{currentQ.explanation}</p>}
                  </div>

                  <button
                    onClick={handleNextQuiz}
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white text-xs font-bold"
                  >
                    <span>{quizIndex + 1 === quizList.length ? 'Selesai' : 'Berikutnya'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ) : mistakes.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-black text-[var(--text-primary)]">Catatan Kesalahan Bersih!</h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-sm mx-auto mt-1">
                  Belum ada soal yang tercatat salah. Setiap jawaban yang kurang tepat di kuis Kana, Bab 1–50, atau Partikel akan otomatis tersimpan di sini.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/25">
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Sparkles className="w-4 h-4 text-[var(--soft-sky)]" />
                  <span>Latih ulang soal-soal ini sampai benar untuk menghapusnya otomatis dari daftar.</span>
                </div>
                <button
                  onClick={handleStartRetryQuiz}
                  className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-black shadow-md hover:brightness-110 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Latih Ulang Semua ({Math.min(15, mistakes.length)})</span>
                </button>
              </div>

              <div className="space-y-3">
                {mistakes.map((m) => (
                  <div
                    key={m.id}
                    className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded-md bg-[var(--bg-elevated)] text-[10px] font-mono font-bold text-[var(--soft-sky)] border border-[#3978D6]/30">
                          {m.title}
                        </span>
                        {m.bab > 0 && (
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">Bab {m.bab}</span>
                        )}
                      </div>
                      <div className="text-sm font-bold text-[var(--text-primary)] kanji-font truncate">
                        {m.question}
                      </div>
                      <div className="text-xs text-emerald-400 font-semibold">
                        Jawaban Benar: {m.correctAnswer}
                      </div>
                      {m.explanation && (
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">{m.explanation}</p>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {m.audioText && (
                        <button
                          onClick={() => speakJapanese(m.audioText!)}
                          className="p-2 rounded-xl bg-[var(--bg-elevated)] text-[var(--soft-sky)] hover:text-[var(--text-primary)] border border-[#3978D6]/25"
                          title="Dengarkan"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                      <button
                        onClick={() => handleResolve(m.id)}
                        className="p-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-400 border border-emerald-500/30"
                        title="Tandai sudah dikuasai & hapus"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
