import React, { useState, useEffect, useRef } from 'react';
import {
  CheckSquare,
  Shuffle,
  Edit3,
  AlignLeft,
  PenTool,
  Headphones,
  BookOpen,
  Mic,
  Layers,
  Hash,
  FileText,
  Languages,
  AlertCircle,
  MessageSquare,
  RefreshCw,
  Clock,
  RotateCcw,
  Award,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Volume2,
  Sparkles,
  ChevronLeft,
  Flame,
  Eraser
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  ExerciseMode, 
  ExerciseQuestion, 
  KotobaItem, 
  KanjiItem,
  ChapterLesson
} from '../types';
import { speakJapanese, sound } from '../utils/audio';
import { 
  EXERCISE_MODES_LIST, 
  generateExerciseQuestions, 
  recordMistake, 
  resolveMistake,
  ExerciseModeMeta 
} from '../utils/exerciseGenerator';

interface ChapterExerciseSectionProps {
  bab: number;
  lesson: ChapterLesson | null;
  chapterWords: KotobaItem[];
  chapterKanji: KanjiItem[];
  onFinishExercise?: (score: number, total: number, mode: ExerciseMode) => void;
}

// Icon mapper for dynamic mode list
const ICON_COMPONENTS: Record<string, React.FC<{ className?: string }>> = {
  CheckSquare,
  Shuffle,
  Edit3,
  AlignLeft,
  PenTool,
  Headphones,
  BookOpen,
  Mic,
  Layers,
  Hash,
  FileText,
  Languages,
  AlertCircle,
  MessageSquare,
  RefreshCw,
  Clock,
  RotateCcw,
  Award
};

export const ChapterExerciseSection: React.FC<ChapterExerciseSectionProps> = ({
  bab,
  lesson,
  chapterWords,
  chapterKanji,
  onFinishExercise
}) => {
  // Category filter in exercise hub
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  // Active quiz state
  const [activeMode, setActiveMode] = useState<ExerciseMode | null>(null);
  const [questions, setQuestions] = useState<ExerciseQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Timed exam timer
  const [timeLeft, setTimeLeft] = useState<number>(15);
  const timerRef = useRef<any>(null);

  // Sentence arrangement state
  const [userArrangedTokens, setUserArrangedTokens] = useState<string[]>([]);

  // Matching game state
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);

  // Writing canvas state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Speaking state
  const [isSpeakingActive, setIsSpeakingActive] = useState(false);

  // Start selected mode
  const handleStartMode = (mode: ExerciseMode) => {
    sound.playClick();
    const generated = generateExerciseQuestions(mode, bab, lesson, chapterWords, chapterKanji, 10);
    setQuestions(generated);
    setActiveMode(mode);
    setCurrentIdx(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setIsFinished(false);
    setUserArrangedTokens([]);
    setMatchedPairs([]);
    setSelectedLeft(null);

    if (generated[0]?.timeLimitSeconds) {
      setTimeLeft(generated[0].timeLimitSeconds);
    }
  };

  // Timer countdown for timed-exam & final-exam
  useEffect(() => {
    if (!activeMode || isFinished || isAnswerSubmitted) return;
    const currentQ = questions[currentIdx];
    if (!currentQ?.timeLimitSeconds) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          handleTimeExpired();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeMode, currentIdx, isFinished, isAnswerSubmitted, questions]);

  const handleTimeExpired = () => {
    if (isAnswerSubmitted) return;
    sound.playIncorrect();
    setIsAnswerSubmitted(true);
    const currentQ = questions[currentIdx];
    if (currentQ) recordMistake(currentQ);
  };

  // Check Multiple Choice / Test Answer
  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(option);
    setIsAnswerSubmitted(true);

    const currentQ = questions[currentIdx];
    const isCorrect = option === currentQ.correctAnswer;

    if (isCorrect) {
      sound.playCorrect();
      setScore((prev) => prev + 1);
      resolveMistake(currentQ.id);
    } else {
      sound.playIncorrect();
      recordMistake(currentQ);
    }
  };

  // Sentence Arrangement: click token
  const handleTokenClick = (token: string, fromUserList: boolean) => {
    sound.playClick();
    if (fromUserList) {
      setUserArrangedTokens((prev) => prev.filter((_, i) => i !== prev.lastIndexOf(token)));
    } else {
      setUserArrangedTokens((prev) => [...prev, token]);
    }
  };

  // Sentence Arrangement: submit
  const handleCheckArrangement = () => {
    if (isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const currentQ = questions[currentIdx];
    const userString = userArrangedTokens.join(' ').trim();
    const correctString = currentQ.correctAnswer.trim();

    if (userString === correctString) {
      sound.playCorrect();
      setScore((prev) => prev + 1);
      resolveMistake(currentQ.id);
    } else {
      sound.playIncorrect();
      recordMistake(currentQ);
    }
  };

  // Matching: match click
  const handleMatchClick = (side: 'left' | 'right', id: string) => {
    sound.playClick();
    if (side === 'left') {
      setSelectedLeft(id);
    } else if (side === 'right' && selectedLeft) {
      if (selectedLeft === id) {
        // Correct pair!
        sound.playCorrect();
        setMatchedPairs((prev) => [...prev, id]);
        setSelectedLeft(null);

        const currentQ = questions[currentIdx];
        if (currentQ.matchingPairs && matchedPairs.length + 1 >= currentQ.matchingPairs.length) {
          setIsAnswerSubmitted(true);
          setScore((prev) => prev + 1);
        }
      } else {
        // Wrong pair
        sound.playIncorrect();
        setSelectedLeft(null);
      }
    }
  };

  // Next Question
  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIdx + 1 < questions.length) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
      setUserArrangedTokens([]);
      setMatchedPairs([]);
      setSelectedLeft(null);

      const nextQ = questions[nextIdx];
      if (nextQ?.timeLimitSeconds) {
        setTimeLeft(nextQ.timeLimitSeconds);
      }
      clearCanvas();
    } else {
      // Quiz Finished!
      setIsFinished(true);
      sound.playFanfare();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      if (onFinishExercise && activeMode) {
        onFinishExercise(score, questions.length, activeMode);
      }
    }
  };

  // Canvas drawing handlers for Writing Practice
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#8FB4E3';
    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Filter modes by category
  const categories = ['Semua', 'Dasar', 'Tata Bahasa', 'Keterampilan', 'Ujian & Review'];
  const filteredModes = EXERCISE_MODES_LIST.filter(m => {
    if (selectedCategory === 'Semua') return true;
    return m.category === selectedCategory;
  });

  // Current question helper
  const currentQ = questions[currentIdx];

  // ─────────────────────────────────────────────────────────────
  // RENDER: FINISHED RESULTS SCREEN
  // ─────────────────────────────────────────────────────────────
  if (isFinished) {
    const pct = Math.round((score / Math.max(1, questions.length)) * 100);
    const isPassed = pct >= 70;

    return (
      <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] border border-[#8FB4E3]/30 text-center text-[#EEF1F6] space-y-6 shadow-2xl">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#1F3760] to-[#8FB4E3] border border-[#8FB4E3]/40 p-0.5 shadow-[0_0_30px_rgba(143,180,227,0.35)] flex items-center justify-center">
          <Award className="w-10 h-10 text-[#EEF1F6] animate-bounce" />
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#8FB4E3] font-black">
            Latihan Selesai · Bab {bab}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1 font-['Manrope']">
            {isPassed ? 'Luar Biasa! お疲れ様でした！' : 'Tetap Semangat! 頑張ってください！'}
          </h2>
          <p className="text-sm text-[#8793A8] max-w-md mx-auto mt-2">
            Anda telah menyelesaikan latihan <span className="text-[#8FB4E3] font-bold">{activeMode}</span> untuk materi Bab {bab}.
          </p>
        </div>

        {/* Score Ring / Card */}
        <div className="inline-block p-6 rounded-3xl bg-[#0C1B33]/70 border border-[#8FB4E3]/25 backdrop-blur-md">
          <span className="text-5xl sm:text-6xl font-black font-['Manrope'] bg-gradient-to-r from-white via-[#EEF1F6] to-[#8FB4E3] bg-clip-text text-transparent">
            {pct}%
          </span>
          <div className="text-xs font-semibold text-[#8793A8] mt-2">
            Benar <span className="text-[#8FB4E3] font-bold">{score}</span> dari <span className="text-[#EEF1F6] font-bold">{questions.length}</span> soal
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            onClick={() => handleStartMode(activeMode!)}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] font-bold text-sm border border-[#8FB4E3]/40 shadow-[0_0_20px_rgba(143,180,227,0.3)] transition-all active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-[#8FB4E3]" />
            <span>Ulangi Mode Ini</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveMode(null);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] font-bold text-sm border border-[#8FB4E3]/25 transition-all active:scale-95"
          >
            <Layers className="w-4 h-4 text-[#8FB4E3]" />
            <span>Pilih Mode Latihan Lain</span>
          </button>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // RENDER: ACTIVE EXERCISE SESSION
  // ─────────────────────────────────────────────────────────────
  if (activeMode && currentQ) {
    return (
      <div className="space-y-6 text-left">
        {/* Top Bar Navigation */}
        <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/25 shadow-xs">
          <button
            onClick={() => {
              sound.playClick();
              setActiveMode(null);
            }}
            className="flex items-center gap-2 text-xs font-bold text-[#8793A8] hover:text-[#EEF1F6] transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#8FB4E3]" />
            <span>Keluar Latihan</span>
          </button>

          {/* Progress */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#8FB4E3]">
              Soal {currentIdx + 1} / {questions.length}
            </span>
            <div className="w-24 sm:w-36 h-2 rounded-full bg-[#0C1B33] border border-[#8FB4E3]/20 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#1F3760] to-[#8FB4E3] rounded-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Timer if applicable */}
          {currentQ.timeLimitSeconds ? (
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-bold border ${
              timeLeft <= 5 
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                : 'bg-[#0C1B33] text-[#8FB4E3] border-[#8FB4E3]/30'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{timeLeft}s</span>
            </div>
          ) : (
            <div className="text-xs font-semibold text-[#8793A8]">
              Skor: <span className="text-[#8FB4E3] font-bold">{score}</span>
            </div>
          )}
        </div>

        {/* Question Card Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] border border-[#8FB4E3]/25 shadow-xl space-y-6">
          {/* Header Info */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16294A] border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-bold font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#8FB4E3]" />
              <span>{currentQ.title}</span>
            </div>

            {currentQ.audioText && (
              <button
                onClick={() => {
                  sound.playClick();
                  speakJapanese(currentQ.audioText!);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0C1B33]/80 hover:bg-[#1F3760] text-[#8FB4E3] text-xs font-bold border border-[#8FB4E3]/30 transition-colors"
                title="Dengarkan Audio"
              >
                <Volume2 className="w-4 h-4" />
                <span>Audio</span>
              </button>
            )}
          </div>

          {/* Instruction */}
          <p className="text-sm font-semibold text-[#8793A8]">
            {currentQ.instruction}
          </p>

          {/* Reading Passage if Dokkai */}
          {currentQ.readingPassage && (
            <div className="p-4 rounded-2xl bg-[#0C1B33]/90 border border-[#8FB4E3]/20 whitespace-pre-line text-sm text-[#EEF1F6] leading-relaxed font-sans">
              {currentQ.readingPassage}
            </div>
          )}

          {/* Question Main Highlight */}
          <div className="text-center py-4 px-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#EEF1F6] font-['Manrope'] tracking-wide">
              {currentQ.question}
            </h3>
            {currentQ.reading && (
              <p className="text-xs sm:text-sm font-mono text-[#8FB4E3] mt-1">
                {currentQ.reading}
              </p>
            )}
          </div>

          {/* ── QUESTION BODY BY MODE ── */}

          {/* A. SENTENCE ARRANGEMENT */}
          {currentQ.mode === 'sentence-arrange' && (
            <div className="space-y-4">
              {/* Target Drop Zone */}
              <div className="min-h-[56px] p-3 rounded-2xl bg-[#0C1B33]/60 border-2 border-dashed border-[#8FB4E3]/30 flex flex-wrap items-center gap-2">
                {userArrangedTokens.length === 0 ? (
                  <span className="text-xs text-[#8793A8] italic px-2">
                    Klik potongan kata di bawah untuk menyusun kalimat...
                  </span>
                ) : (
                  userArrangedTokens.map((tok, i) => (
                    <button
                      key={i}
                      onClick={() => handleTokenClick(tok, true)}
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 text-sm font-bold shadow-xs hover:opacity-80 transition-opacity"
                    >
                      {tok} ✕
                    </button>
                  ))
                )}
              </div>

              {/* Source Tokens */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                {currentQ.sentenceTokens?.map((tok, i) => (
                  <button
                    key={i}
                    onClick={() => handleTokenClick(tok, false)}
                    className="px-4 py-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/25 text-sm font-bold transition-all shadow-xs"
                  >
                    {tok}
                  </button>
                ))}
              </div>

              {!isAnswerSubmitted && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleCheckArrangement}
                    disabled={userArrangedTokens.length === 0}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 disabled:opacity-50 text-[#EEF1F6] border border-[#8FB4E3]/40 font-bold text-xs shadow-md transition-all"
                  >
                    Periksa Susunan
                  </button>
                </div>
              )}
            </div>
          )}

          {/* B. MATCHING GAME */}
          {currentQ.mode === 'matching' && currentQ.matchingPairs && (
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column (Japanese) */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#8FB4E3] uppercase block mb-1">
                  Bahasa Jepang
                </span>
                {currentQ.matchingPairs.map((p) => {
                  const isMatched = matchedPairs.includes(p.id);
                  const isSelected = selectedLeft === p.id;
                  return (
                    <button
                      key={p.id}
                      disabled={isMatched}
                      onClick={() => handleMatchClick('left', p.id)}
                      className={`w-full p-3 rounded-xl text-xs sm:text-sm font-bold text-left transition-all ${
                        isMatched
                          ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 opacity-60'
                          : isSelected
                          ? 'bg-[#1F3760] border-[#8FB4E3] text-[#EEF1F6] shadow-[0_0_15px_rgba(143,180,227,0.3)]'
                          : 'bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/20'
                      }`}
                    >
                      {p.left}
                    </button>
                  );
                })}
              </div>

              {/* Right Column (Indonesian) */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#8FB4E3] uppercase block mb-1">
                  Arti Indonesia
                </span>
                {currentQ.matchingPairs
                  .slice()
                  .reverse()
                  .map((p) => {
                    const isMatched = matchedPairs.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        disabled={isMatched}
                        onClick={() => handleMatchClick('right', p.id)}
                        className={`w-full p-3 rounded-xl text-xs sm:text-sm font-bold text-left transition-all ${
                          isMatched
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400 opacity-60'
                            : 'bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/20'
                        }`}
                      >
                        {p.right}
                      </button>
                    );
                  })}
              </div>
            </div>
          )}

          {/* C. WRITING PRACTICE CANVAS */}
          {currentQ.mode === 'writing-practice' && (
            <div className="space-y-4 flex flex-col items-center">
              <div className="relative w-64 h-64 rounded-2xl bg-[#0C1B33] border-2 border-[#8FB4E3]/30 shadow-inner overflow-hidden">
                {/* Background watermark of the character */}
                <div className="absolute inset-0 flex items-center justify-center text-7xl font-black text-white/5 pointer-events-none select-none font-sans">
                  {currentQ.targetWritingChar}
                </div>
                {/* Center cross guide lines */}
                <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#8FB4E3]/15 pointer-events-none" />
                <div className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#8FB4E3]/15 pointer-events-none" />

                <canvas
                  ref={canvasRef}
                  width={256}
                  height={256}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full cursor-crosshair touch-none"
                />
              </div>

              {/* Canvas controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={clearCanvas}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/25"
                >
                  <Eraser className="w-3.5 h-3.5 text-[#8FB4E3]" />
                  <span>Hapus Kanvas</span>
                </button>
                <button
                  onClick={() => {
                    sound.playCorrect();
                    setIsAnswerSubmitted(true);
                    setScore((prev) => prev + 1);
                  }}
                  disabled={isAnswerSubmitted}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 text-xs font-bold shadow-md hover:brightness-110"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8FB4E3]" />
                  <span>Selesai Menulis</span>
                </button>
              </div>
            </div>
          )}

          {/* D. SPEAKING / KAIWA INTERACTIVE PRACTICE */}
          {currentQ.mode === 'speaking' && (
            <div className="space-y-4 text-center">
              <div className="p-4 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/25">
                <span className="text-xs font-mono text-[#8FB4E3] block mb-1">
                  Tokoh: {currentQ.speaker || 'Penutur'}
                </span>
                <p className="text-xl sm:text-2xl font-black text-[#EEF1F6]">
                  {currentQ.question}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    speakJapanese(currentQ.question);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16294A] text-[#8FB4E3] text-xs font-bold border border-[#8FB4E3]/30 hover:bg-[#1F3760]"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Dengarkan Intonasi Asli</span>
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setIsSpeakingActive(!isSpeakingActive);
                    if (!isAnswerSubmitted) {
                      setTimeout(() => {
                        sound.playCorrect();
                        setIsAnswerSubmitted(true);
                        setScore((prev) => prev + 1);
                      }, 1500);
                    }
                  }}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSpeakingActive
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-md'
                  }`}
                >
                  <Mic className="w-4 h-4 text-[#8FB4E3]" />
                  <span>{isSpeakingActive ? 'Mendengarkan Suara...' : 'Latih Ucapkan'}</span>
                </button>
              </div>
            </div>
          )}

          {/* E. MULTIPLE CHOICE / OPTIONS GRID (For 14 other modes) */}
          {currentQ.options && currentQ.options.length > 0 && currentQ.mode !== 'sentence-arrange' && currentQ.mode !== 'matching' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQ.correctAnswer;
                let btnStyle = 'bg-[#16294A] hover:bg-[#1F3760] text-[#EEF1F6] border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500/20 text-emerald-400 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-500/20 text-rose-300 border-rose-500';
                  } else {
                    btnStyle = 'bg-[#16294A]/40 text-[#8793A8]/40 border-transparent';
                  }
                }

                return (
                  <button
                    key={i}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(opt)}
                    className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-bold transition-all flex items-center justify-between gap-3 active:scale-[0.98] ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation Box on Submit */}
          {isAnswerSubmitted && currentQ.explanation && (
            <div className="p-4 rounded-2xl bg-[#0C1B33]/90 border border-[#8FB4E3]/25 text-xs sm:text-sm text-[#EEF1F6]/90 space-y-1">
              <span className="font-bold text-[#8FB4E3] block">Pembahasan:</span>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswerSubmitted && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] border border-[#8FB4E3]/40 font-black text-sm shadow-[0_0_20px_rgba(143,180,227,0.3)] transition-all active:scale-95"
              >
                <span>{currentIdx + 1 === questions.length ? 'Lihat Hasil Akhir' : 'Soal Selanjutnya'}</span>
                <ArrowRight className="w-4 h-4 text-[#8FB4E3]" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // RENDER: EXERCISE HUB (Grid 18 Modes for this Chapter)
  // ─────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 text-left">
      {/* Hero Header */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] border border-[#8FB4E3]/25 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16294A] border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-black uppercase font-mono mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#8FB4E3]" />
              <span>Pusat Latihan Interaktif · 第{bab}課</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#EEF1F6] font-['Manrope']">
              18 Mode Latihan & Ujian Bab {bab}
            </h2>
            <p className="text-xs sm:text-sm text-[#8793A8] max-w-xl mt-1 leading-relaxed">
              Uji dan kuasai kosakata, pola kalimat, kanji, pendengaran, terjemahan, dan percakapan Bab {bab} dengan 18 format latihan interaktif.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3.5 py-2 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-bold font-mono">
              18 Mode Lengkap
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-[#8FB4E3]/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-md'
                  : 'bg-[#16294A] hover:bg-[#1F3760] text-[#8793A8] border border-[#8FB4E3]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid 18 Modes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredModes.map((meta) => {
          const IconComp = ICON_COMPONENTS[meta.icon] || Sparkles;
          return (
            <div
              key={meta.id}
              onClick={() => handleStartMode(meta.id)}
              className="group relative overflow-hidden rounded-2xl bg-[#16294A] hover:bg-[#1F3760] border border-[#8FB4E3]/20 hover:border-[#8FB4E3]/50 p-5 cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(12,27,51,0.5)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] border border-[#8FB4E3]/30 flex items-center justify-center text-[#8FB4E3] shadow-xs group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0C1B33] text-[#8793A8] border border-[#8FB4E3]/20">
                    {meta.category}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#8FB4E3] font-bold">
                  {meta.jpName}
                </div>
                <h3 className="text-base font-bold text-[#EEF1F6] group-hover:text-[#8FB4E3] transition-colors mt-0.5">
                  {meta.name}
                </h3>
                <p className="text-xs text-[#8793A8] mt-2 leading-relaxed">
                  {meta.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#8FB4E3]/15 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#8FB4E3] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Mulai Latihan &rarr;
                </span>
                <span className="text-[10px] text-[#8793A8]">10 Soal</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
