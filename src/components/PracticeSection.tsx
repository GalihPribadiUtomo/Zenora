import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Layers, 
  Shuffle, 
  Keyboard, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Volume2, 
  Sparkles,
  BookOpen,
  CheckSquare,
  Play,
  Zap,
  BookX
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import { QuizMode, QuizSubject, QuizQuestion } from '../types';
import { speakJapanese, sound } from '../utils/audio';
import { ChapterExerciseSection } from './ChapterExerciseSection';
import { JlptExamSection } from './JlptExamSection';
import { ParticleConjugationDrill } from './ParticleConjugationDrill';
import { MistakeNotebookModal } from './MistakeNotebookModal';
import { loadChapterLesson, ChapterLesson } from '../data/materi';

interface PracticeSectionProps {
  initialBab?: number | null;
  onRecordResult?: (score: number, total: number, mode: QuizMode, subject: QuizSubject) => void;
  initialPracticeType?: '18-modes' | 'jlpt-jft' | 'classic' | 'particle-conj';
  initialExamPackageId?: string;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  initialBab,
  onRecordResult,
  initialPracticeType = '18-modes',
  initialExamPackageId
}) => {
  // Setup state
  const [practiceType, setPracticeType] = useState<'18-modes' | 'jlpt-jft' | 'classic' | 'particle-conj'>(initialPracticeType);
  const [mistakeModalOpen, setMistakeModalOpen] = useState(false);
  const [activeExerciseBab, setActiveExerciseBab] = useState<number>(initialBab || 1);
  const [exerciseLesson, setExerciseLesson] = useState<ChapterLesson | null>(null);
  const [examPackageId, setExamPackageId] = useState<string | undefined>(initialExamPackageId);

  useEffect(() => {
    if (initialPracticeType) {
      setPracticeType(initialPracticeType);
    }
  }, [initialPracticeType]);

  useEffect(() => {
    if (initialExamPackageId) {
      setExamPackageId(initialExamPackageId);
    }
  }, [initialExamPackageId]);

  useEffect(() => {
    loadChapterLesson(activeExerciseBab).then((data) => {
      setExerciseLesson(data);
    });
  }, [activeExerciseBab]);

  const [subject, setSubject] = useState<QuizSubject>('kotoba');
  const [mode, setMode] = useState<QuizMode>('multiple-choice');
  const [selectedBab, setSelectedBab] = useState<number | 'ALL'>(initialBab || 'ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [questionCount, setQuestionCount] = useState<number>(10);

  // Active quiz state
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [typedInput, setTypedInput] = useState('');

  // Matching game state
  const [matchingPairs, setMatchingPairs] = useState<{ id: string; text: string; pairId: string; type: 'jp' | 'id'; matched: boolean }[]>([]);
  const [selectedJpCard, setSelectedJpCard] = useState<string | null>(null);
  const [selectedIdCard, setSelectedIdCard] = useState<string | null>(null);

  // Flashcard practice state in quiz
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Prepare questions pool
  const generateQuestions = () => {
    let rawPool: any[] = [];

    if (subject === 'kotoba') {
      rawPool = KOTOBA_DATA.filter((k) => {
        const matchesBab = selectedBab === 'ALL' || k.bab === selectedBab;
        const matchesCat = selectedCategory === 'ALL' || k.kategori === selectedCategory;
        return matchesBab && matchesCat;
      });
      if (rawPool.length === 0) rawPool = KOTOBA_DATA;
    } else {
      rawPool = KANJI_DATA.filter((k) => {
        const matchesCat = selectedCategory === 'ALL' || k.category === selectedCategory;
        return matchesCat;
      });
      if (rawPool.length === 0) rawPool = KANJI_DATA;
    }

    // Shuffle pool
    const shuffled = [...rawPool].sort(() => 0.5 - Math.random());
    const sliceCount = Math.min(questionCount, shuffled.length);
    const chosenItems = shuffled.slice(0, sliceCount);

    // Build question objects
    const newQuestions: QuizQuestion[] = chosenItems.map((item, idx) => {
      if (subject === 'kotoba') {
        const otherOptions = rawPool
          .filter(k => k.id !== item.id)
          .map(k => k.arti)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        const options = [item.arti, ...otherOptions].sort(() => 0.5 - Math.random());

        return {
          id: `q_${idx}`,
          subject: 'kotoba',
          question: item.kanji,
          subQuestion: item.kana,
          correctAnswer: item.arti,
          options,
          audioText: item.kana || item.kanji,
          explanation: `${item.kanji} (${item.kana}) = ${item.arti} [${item.romaji}]`,
          metadata: item
        };
      } else {
        const otherOptions = rawPool
          .filter(k => k.id !== item.id)
          .map(k => k.meaning)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        const options = [item.meaning, ...otherOptions].sort(() => 0.5 - Math.random());

        return {
          id: `q_${idx}`,
          subject: 'kanji',
          question: item.kanji,
          subQuestion: `${item.reading} (${item.onyomi})`,
          correctAnswer: item.meaning,
          options,
          audioText: item.reading,
          explanation: `${item.kanji} [${item.reading}] = ${item.meaning}. ON: ${item.onyomi}, KUN: ${item.kunyomi}`,
          metadata: item
        };
      }
    });

    if (mode === 'matching') {
      const pairCount = Math.min(6, chosenItems.length);
      const pairItems = chosenItems.slice(0, pairCount);
      
      const jpCards = pairItems.map(it => ({
        id: `jp_${it.id}`,
        text: subject === 'kotoba' ? `${it.kanji} (${it.kana})` : `${it.kanji} (${it.reading})`,
        pairId: String(it.id),
        type: 'jp' as const,
        matched: false
      }));

      const idCards = pairItems.map(it => ({
        id: `id_${it.id}`,
        text: subject === 'kotoba' ? it.arti : it.meaning,
        pairId: String(it.id),
        type: 'id' as const,
        matched: false
      })).sort(() => 0.5 - Math.random());

      setMatchingPairs([...jpCards, ...idCards]);
    }

    setQuestions(newQuestions);
    setCurrentIdx(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setIsFinished(false);
    setTypedInput('');
    setIsCardFlipped(false);
    setIsQuizActive(true);
    sound.playClick();
  };

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(opt);
    setIsAnswerSubmitted(true);

    const isCorrect = opt === questions[currentIdx].correctAnswer;
    if (isCorrect) {
      sound.playCorrect();
      setScore(prev => prev + 1);
    } else {
      sound.playIncorrect();
    }
  };

  const handleCheckTyping = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswerSubmitted || !typedInput.trim()) return;

    setIsAnswerSubmitted(true);
    const cleanInput = typedInput.trim().toLowerCase();
    const currentQ = questions[currentIdx];
    
    const isRomajiMatch = currentQ.metadata?.romaji?.toLowerCase() === cleanInput;
    const isArtiMatch = currentQ.correctAnswer.toLowerCase().includes(cleanInput);

    if (isRomajiMatch || isArtiMatch) {
      sound.playCorrect();
      setScore(prev => prev + 1);
    } else {
      sound.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    sound.playClick();
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setTypedInput('');
      setIsCardFlipped(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    sound.playFanfare();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onRecordResult) {
      onRecordResult(score, questions.length, mode, subject);
    }
  };

  const handleCardClick = (card: typeof matchingPairs[0]) => {
    if (card.matched) return;

    if (card.type === 'jp') {
      setSelectedJpCard(card.id);
      if (selectedIdCard) {
        checkMatch(card.id, selectedIdCard);
      }
    } else {
      setSelectedIdCard(card.id);
      if (selectedJpCard) {
        checkMatch(selectedJpCard, card.id);
      }
    }
  };

  const checkMatch = (jpId: string, idId: string) => {
    const jp = matchingPairs.find(c => c.id === jpId);
    const id = matchingPairs.find(c => c.id === idId);

    if (jp && id && jp.pairId === id.pairId) {
      sound.playCorrect();
      setMatchingPairs(prev => prev.map(c => (c.id === jpId || c.id === idId ? { ...c, matched: true } : c)));
      setScore(prev => prev + 1);
      setSelectedJpCard(null);
      setSelectedIdCard(null);

      const remaining = matchingPairs.filter(c => !c.matched && c.id !== jpId && c.id !== idId);
      if (remaining.length === 0) {
        setTimeout(() => finishQuiz(), 500);
      }
    } else {
      sound.playIncorrect();
      setTimeout(() => {
        setSelectedJpCard(null);
        setSelectedIdCard(null);
      }, 500);
    }
  };

  const currentQ = questions[currentIdx];

  return (
    <div className="space-y-8 text-left pb-16 max-w-5xl mx-auto">

      {/* Main Mode Switcher: 18 Modes vs Partikel & Konjugasi vs JLPT/JFT vs Classic */}
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[var(--bg-surface)] rounded-2xl border border-[#3978D6]/25 max-w-4xl w-full shadow-[0_4px_20px_rgba(8,21,47,0.6)]">
          <button
            onClick={() => {
              sound.playClick();
              setPracticeType('18-modes');
              setIsQuizActive(false);
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              practiceType === '18-modes'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_20px_rgba(57,120,214,0.45)] border border-[#3978D6]/40'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
            }`}
          >
            <Sparkles className={`w-4 h-4 ${practiceType === '18-modes' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
            <span>18 Mode (Bab 1–50)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setPracticeType('particle-conj');
              setIsQuizActive(false);
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              practiceType === 'particle-conj'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_20px_rgba(57,120,214,0.45)] border border-[#3978D6]/40'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
            }`}
          >
            <Zap className={`w-4 h-4 ${practiceType === 'particle-conj' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
            <span>Partikel & Konjugasi</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setPracticeType('jlpt-jft');
              setIsQuizActive(false);
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center justify-center gap-1.5 ${
              practiceType === 'jlpt-jft'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_20px_rgba(57,120,214,0.45)] border border-[#3978D6]/40'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
            }`}
          >
            <Award className={`w-4 h-4 ${practiceType === 'jlpt-jft' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
            <span className="flex items-center gap-1">
              Simulasi JLPT & JFT
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                practiceType === 'jlpt-jft' 
                  ? 'bg-white/20 text-[var(--text-primary)] border border-white/30' 
                  : 'bg-[#3978D6]/20 text-[var(--text-primary)] border border-[#3978D6]/40'
              }`}>
                N5・N4・A2
              </span>
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setPracticeType('classic');
            }}
            className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
              practiceType === 'classic'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-[0_0_20px_rgba(57,120,214,0.45)] border border-[#3978D6]/40'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]/60'
            }`}
          >
            <Layers className={`w-4 h-4 ${practiceType === 'classic' ? 'text-[var(--text-primary)]' : 'text-[#3978D6]'}`} />
            <span>Flashcard & Ketik</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setMistakeModalOpen(true);
            }}
            className="py-2.5 px-3.5 rounded-xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/35 flex items-center justify-center gap-1.5 transition-all"
            title="Buka Buku Catatan Kesalahan"
          >
            <BookX className="w-4 h-4" />
            <span className="hidden sm:inline">Catatan Salah</span>
          </button>
        </div>
      </div>

      {/* ── VIEW: PARTIKEL & KONJUGASI ── */}
      {practiceType === 'particle-conj' && (
        <ParticleConjugationDrill
          onComplete={(s, t) => {
            if (onRecordResult) onRecordResult(s, t, 'multiple-choice', 'kotoba');
          }}
        />
      )}

      <MistakeNotebookModal
        isOpen={mistakeModalOpen}
        onClose={() => setMistakeModalOpen(false)}
      />

      {/* ── VIEW 0: SIMULASI JLPT & JFT (N5, N4, A2) ── */}
      {practiceType === 'jlpt-jft' && (
        <JlptExamSection 
          onBackToPractice={() => setPracticeType('18-modes')} 
          initialPackageId={examPackageId}
        />
      )}

      {/* ── VIEW 1: 18 MODES COMPREHENSIVE PRACTICE WITH BAB SELECTOR ── */}
      {practiceType === '18-modes' && (
        <div className="space-y-6">
          {/* Chapter Quick Picker Bar */}
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[#3978D6]/25 space-y-3 shadow-xs">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-[#3978D6] uppercase tracking-wider font-mono flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                Pilih Bab Latihan:
              </span>
              <span className="text-xs font-bold text-[var(--text-primary)] bg-[var(--bg-sidebar)] px-3 py-1 rounded-xl border border-[#3978D6]/30">
                Sedang Dipilih: 第{activeExerciseBab}課 (Bab {activeExerciseBab})
              </span>
            </div>

            {/* Horizontal Scrollable Bab Buttons 1..50 */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
              {Array.from({ length: 50 }, (_, i) => i + 1).map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    sound.playClick();
                    setActiveExerciseBab(b);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                    activeExerciseBab === b
                      ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-md font-black scale-105'
                      : 'bg-[var(--bg-sidebar)]/60 hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[#3978D6]/15'
                  }`}
                >
                  Bab {b}
                </button>
              ))}
            </div>
          </div>

          {/* 18-Mode Exercise Interactive Section */}
          <ChapterExerciseSection
            bab={activeExerciseBab}
            lesson={exerciseLesson}
            chapterWords={KOTOBA_DATA.filter((k) => k.bab === activeExerciseBab)}
            chapterKanji={KANJI_DATA.filter((k) => k.bab === activeExerciseBab)}
          />
        </div>
      )}

      {/* ── VIEW 2: CLASSIC FLASHCARD / TYPING / MATCHING ── */}
      {practiceType === 'classic' && !isQuizActive && (
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[#3978D6]/30 text-[#3978D6] text-xs font-black uppercase tracking-wider font-mono">
              Pusat Latihan Interaktif
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[var(--text-primary)] tracking-tight font-['Manrope']">
              Latihan Mandiri
            </h1>
            <p className="text-[var(--text-muted)] text-sm sm:text-base">
              Uji hafalan Kotoba dan Kanji dengan 4 cara berlatih interaktif.
            </p>
          </div>

          {/* Subject Switcher (Kotoba vs Kanji) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 p-1.5 bg-[var(--bg-surface)] rounded-2xl border border-[#3978D6]/25 w-full max-w-xs shadow-xs">
              <button
                onClick={() => {
                  sound.playClick();
                  setSubject('kotoba');
                }}
                className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
                  subject === 'kotoba'
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.3)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Kotoba
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  setSubject('kanji');
                }}
                className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
                  subject === 'kanji'
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.3)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                Kanji
              </button>
            </div>
          </div>

          {/* 4 Mode Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Mode 1 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('multiple-choice');
              }}
              className={`p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between shadow-[0_4px_16px_rgba(8,21,47,0.4)] group hover:-translate-y-1 ${
                mode === 'multiple-choice'
                  ? 'border-sky-400 ring-2 ring-sky-400/30 bg-[var(--bg-elevated)] shadow-[0_0_25px_rgba(14,165,233,0.3)]'
                  : 'border-[#3978D6]/20 bg-[var(--bg-surface)] hover:border-sky-400/50'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/30 flex items-center justify-center text-white shadow-[0_0_18px_rgba(6,182,212,0.4)] mb-3 group-hover:scale-110 transition-transform">
                  <CheckSquare className="w-6 h-6 text-[var(--text-primary)] stroke-[2.2] drop-shadow-sm" />
                </div>
                <h3 className="font-extrabold text-base text-[var(--text-primary)] group-hover:text-[var(--text-primary)] mb-1 font-['Manrope']">Pilihan Ganda</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Pilih arti yang tepat dari 4 pilihan yang disajikan.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 flex items-center gap-1 ${mode === 'multiple-choice' ? 'text-sky-400' : 'text-[var(--text-muted)]/60'}`}>
                {mode === 'multiple-choice' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

            {/* Mode 2 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('flashcard');
              }}
              className={`p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between shadow-[0_4px_16px_rgba(8,21,47,0.4)] group hover:-translate-y-1 ${
                mode === 'flashcard'
                  ? 'border-[#3978D6] ring-2 ring-[#3978D6]/30 bg-[var(--bg-elevated)] shadow-[0_0_25px_rgba(57,120,214,0.3)]'
                  : 'border-[#3978D6]/20 bg-[var(--bg-surface)] hover:border-[#3978D6]/50'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] border border-[#83B7EE]/35 flex items-center justify-center text-white shadow-[0_0_18px_rgba(57,120,214,0.4)] mb-3 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-[var(--text-primary)] stroke-[2.2] drop-shadow-sm" />
                </div>
                <h3 className="font-extrabold text-base text-[var(--text-primary)] group-hover:text-[var(--text-primary)] mb-1 font-['Manrope']">Kartu Hafalan</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Balik kartu, lalu tandai hafal atau belum untuk spaced repetition.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 flex items-center gap-1 ${mode === 'flashcard' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]/60'}`}>
                {mode === 'flashcard' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

            {/* Mode 3 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('matching');
              }}
              className={`p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between shadow-[0_4px_16px_rgba(8,21,47,0.4)] group hover:-translate-y-1 ${
                mode === 'matching'
                  ? 'border-[#69C9DF] ring-2 ring-[#69C9DF]/30 bg-[var(--bg-elevated)] shadow-[0_0_25px_rgba(105,201,223,0.3)]'
                  : 'border-[#3978D6]/20 bg-[var(--bg-surface)] hover:border-[#69C9DF]/50'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#3978D6] to-[#69C9DF] border border-[#83B7EE]/35 flex items-center justify-center text-white shadow-[0_0_18px_rgba(105,201,223,0.4)] mb-3 group-hover:scale-110 transition-transform">
                  <Shuffle className="w-6 h-6 text-[var(--text-primary)] stroke-[2.2] drop-shadow-sm" />
                </div>
                <h3 className="font-extrabold text-base text-[var(--text-primary)] group-hover:text-[var(--text-primary)] mb-1 font-['Manrope']">Menjodohkan</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Pasangkan kata Jepang dengan terjemahan artinya secara langsung.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 flex items-center gap-1 ${mode === 'matching' ? 'text-[var(--secondary-accent)]' : 'text-[var(--text-muted)]/60'}`}>
                {mode === 'matching' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

            {/* Mode 4 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('typing');
              }}
              className={`p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between shadow-[0_4px_16px_rgba(8,21,47,0.4)] group hover:-translate-y-1 ${
                mode === 'typing'
                  ? 'border-emerald-500 ring-2 ring-emerald-500/30 bg-[var(--bg-elevated)] shadow-[0_0_25px_rgba(16,185,129,0.3)]'
                  : 'border-[#3978D6]/20 bg-[var(--bg-surface)] hover:border-emerald-500/40'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 border border-emerald-300/30 flex items-center justify-center text-white shadow-[0_0_18px_rgba(16,185,129,0.4)] mb-3 group-hover:scale-110 transition-transform">
                  <Keyboard className="w-6 h-6 text-[var(--text-primary)] stroke-[2.2] drop-shadow-sm" />
                </div>
                <h3 className="font-extrabold text-base text-[var(--text-primary)] group-hover:text-[var(--text-primary)] mb-1 font-['Manrope']">Ketik Romaji</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                  Baca kata Jepang, lalu ketik romajinya untuk melatih kecepatan.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 flex items-center gap-1 ${mode === 'typing' ? 'text-emerald-400' : 'text-[var(--text-muted)]/60'}`}>
                {mode === 'typing' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

          </div>

          {/* Filter Selection Panel */}
          <div className="p-6 sm:p-7 rounded-3xl border border-[#3978D6]/25 bg-[var(--bg-surface)] shadow-[0_4px_24px_rgba(8,21,47,0.5)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Bab Selector */}
              {subject === 'kotoba' && (
                <div>
                  <label className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Bab
                  </label>
                  <select
                    value={selectedBab}
                    onChange={(e) => setSelectedBab(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#3978D6]/25 bg-[var(--bg-sidebar)]/80 text-[var(--text-primary)] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/40"
                  >
                    <option value="ALL">Semua Bab (1–50)</option>
                    {Array.from({ length: 50 }, (_, i) => i + 1).map((b) => (
                      <option key={b} value={b}>Bab {b}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Kategori Selector */}
              <div>
                <label className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#3978D6]/25 bg-[var(--bg-sidebar)]/80 text-[var(--text-primary)] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/40"
                >
                  <option value="ALL">Semua Kategori</option>
                  {subject === 'kotoba' ? (
                    <>
                      <option value="Kata Kerja">Kata Kerja</option>
                      <option value="Kata Sifat">Kata Sifat</option>
                      <option value="Waktu &amp; Angka">Waktu &amp; Angka</option>
                      <option value="Makanan &amp; Minuman">Makanan &amp; Minuman</option>
                      <option value="Tubuh &amp; Kesehatan">Tubuh &amp; Kesehatan</option>
                      <option value="Orang &amp; Keluarga">Orang &amp; Keluarga</option>
                      <option value="Tempat &amp; Arah">Tempat &amp; Arah</option>
                      <option value="Umum &amp; Ungkapan">Umum &amp; Ungkapan</option>
                    </>
                  ) : (
                    <>
                      <option value="Angka &amp; Waktu">Angka &amp; Waktu</option>
                      <option value="Alam &amp; Cuaca">Alam &amp; Cuaca</option>
                      <option value="Manusia &amp; Keluarga">Manusia &amp; Keluarga</option>
                      <option value="Tempat &amp; Bangunan">Tempat &amp; Bangunan</option>
                      <option value="Aktivitas &amp; Kata Kerja">Aktivitas &amp; Kata Kerja</option>
                      <option value="Tubuh">Tubuh</option>
                      <option value="Warna &amp; Benda">Warna &amp; Benda</option>
                    </>
                  )}
                </select>
              </div>

              {/* Jumlah Soal */}
              <div>
                <label className="block text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                  Jumlah Soal
                </label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#3978D6]/25 bg-[var(--bg-sidebar)]/80 text-[var(--text-primary)] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/40"
                >
                  <option value={5}>5 Soal Singkat</option>
                  <option value={10}>10 Soal Standar</option>
                  <option value={20}>20 Soal Tantangan</option>
                </select>
              </div>

            </div>

            {/* Launch Button */}
            <div className="mt-6 pt-5 border-t border-[#3978D6]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[var(--text-muted)] font-medium">
                {subject === 'kotoba' ? '2.910 kata' : `${KANJI_DATA.length} kanji`} siap dijadikan bahan latihan.
              </span>
              <button
                onClick={generateQuestions}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-[var(--text-primary)] border border-[#3978D6]/40 font-extrabold text-sm sm:text-base shadow-[0_8px_30px_-5px_rgba(57,120,214,0.3)] transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Mulai Latihan</span>
                <ArrowRight className="w-5 h-5 text-[#3978D6]" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* Active Quiz View */}
      {isQuizActive && !isFinished && currentQ && (
        <div className="space-y-6 max-w-3xl mx-auto">
          
          {/* Top Info Bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsQuizActive(false)}
              className="text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              ✕ Keluar Latihan
            </button>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[var(--text-muted)]">
                Soal {currentIdx + 1} / {questions.length}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/12 text-emerald-400 border border-emerald-500/30">
                Skor: {score}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-[var(--bg-sidebar)] border border-[#3978D6]/20 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[var(--bg-elevated)] via-[var(--bg-elevated)] to-[#3978D6] transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* 1. MULTIPLE CHOICE MODE */}
          {mode === 'multiple-choice' && (
            <div key={currentIdx} className="p-6 sm:p-8 rounded-3xl border border-[#3978D6]/25 bg-[var(--bg-surface)] space-y-6 shadow-[0_4px_24px_rgba(8,21,47,0.5)] animate-slide-up">
              
              {/* Question Header */}
              <div className="text-center py-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="kanji-font text-5xl sm:text-6xl font-black text-[var(--text-primary)]">
                    {currentQ.question}
                  </h2>
                  <button
                    onClick={() => speakJapanese(currentQ.audioText)}
                    className="p-2 rounded-xl bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/25 btn-interactive cursor-pointer"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {currentQ.subQuestion && (
                  <p className="text-sm font-bold text-[#3978D6]">
                    {currentQ.subQuestion}
                  </p>
                )}
                <p className="text-xs text-[var(--text-muted)]">Pilih arti yang tepat:</p>
              </div>

              {/* 4 Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === currentQ.correctAnswer;
                  
                  let btnStyle = 'border-[#3978D6]/20 bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] hover:border-[#3978D6]/50 text-[var(--text-primary)] btn-interactive';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-500/15 text-emerald-400 font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-success-pulse';
                    } else if (isSelected) {
                      btnStyle = 'border-rose-500 bg-rose-500/15 text-rose-300 font-bold shadow-[0_0_20px_rgba(244,63,94,0.3)] animate-shake-soft';
                    } else {
                      btnStyle = 'border-[#3978D6]/10 opacity-40 text-[var(--text-muted)]/60';
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-4 rounded-2xl border text-sm font-semibold transition-all text-left flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswerSubmitted && (
                <div className="pt-4 border-t border-[#3978D6]/15 flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    {currentQ.explanation}
                  </span>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-[var(--text-primary)] border border-[#3978D6]/40 font-bold text-xs sm:text-sm shadow-[0_4px_15px_rgba(57,120,214,0.3)] transition-colors"
                  >
                    Lanjut →
                  </button>
                </div>
              )}

            </div>
          )}

          {/* 2. TYPING ROMAJI MODE */}
          {mode === 'typing' && (
            <div className="p-6 sm:p-8 rounded-3xl border border-[#3978D6]/25 bg-[var(--bg-surface)] space-y-6 shadow-[0_4px_24px_rgba(8,21,47,0.5)]">
              <div className="text-center py-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="kanji-font text-5xl sm:text-6xl font-black text-[var(--text-primary)]">
                    {currentQ.question}
                  </h2>
                  <button
                    onClick={() => speakJapanese(currentQ.audioText)}
                    className="p-2 rounded-xl bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/25"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-[#3978D6]">
                  {currentQ.subQuestion}
                </p>
                <p className="text-xs text-[var(--text-muted)]">Ketik ejaan romaji atau artinya lalu tekan Enter:</p>
              </div>

              <form onSubmit={handleCheckTyping} className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={typedInput}
                    disabled={isAnswerSubmitted}
                    onChange={(e) => setTypedInput(e.target.value)}
                    placeholder="Ketik romaji di sini (contoh: watashi, tabemasu)..."
                    className="flex-1 px-4 py-3 rounded-2xl border border-[#3978D6]/25 bg-[var(--bg-sidebar)]/80 text-[var(--text-primary)] text-base font-mono placeholder-[var(--text-muted)]/60 focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/40"
                    autoFocus
                  />
                  {!isAnswerSubmitted && (
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 font-bold text-sm shadow-[0_4px_15px_rgba(57,120,214,0.3)] hover:brightness-110 transition-colors"
                    >
                      Cek
                    </button>
                  )}
                </div>
              </form>

              {isAnswerSubmitted && (
                <div className="pt-4 border-t border-[#3978D6]/15 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[var(--text-primary)] block">
                      Jawaban Benar: <span className="font-mono text-[#3978D6]">{currentQ.metadata?.romaji || currentQ.correctAnswer}</span>
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">{currentQ.explanation}</span>
                  </div>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-[var(--text-primary)] border border-[#3978D6]/40 font-bold text-xs sm:text-sm shadow-[0_4px_15px_rgba(57,120,214,0.3)]"
                  >
                    Lanjut →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 3. FLASHCARD CAROUSEL IN PRACTICE */}
          {mode === 'flashcard' && (
            <div className="space-y-6">
              <div
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                className="w-full h-80 rounded-3xl cursor-pointer p-8 flex flex-col justify-between text-center bg-[var(--bg-surface)] border border-[#3978D6]/25 shadow-[0_20px_60px_-15px_rgba(8,21,47,0.9)]"
              >
                <span className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider">
                  Klik untuk melihat jawaban
                </span>

                <div className="my-auto space-y-2">
                  {!isCardFlipped ? (
                    <>
                      <h2 className="kanji-font text-6xl font-black text-[var(--text-primary)]">
                        {currentQ.question}
                      </h2>
                      <p className="text-xl font-bold text-[#3978D6]">
                        {currentQ.subQuestion}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-3xl font-extrabold text-[var(--text-primary)] font-['Manrope']">
                        {currentQ.correctAnswer}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] font-mono">
                        {currentQ.explanation}
                      </p>
                    </>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakJapanese(currentQ.audioText);
                    }}
                    className="p-2 rounded-xl bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/25"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => {
                    sound.playIncorrect();
                    handleNextQuestion();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] font-bold text-sm transition-colors border border-[#3978D6]/20"
                >
                  Belum Hafal
                </button>
                <button
                  onClick={() => {
                    sound.playCorrect();
                    setScore(prev => prev + 1);
                    handleNextQuestion();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 text-white font-bold text-sm shadow-[0_4px_15px_rgba(16,185,129,0.3)] transition-all"
                >
                  Sudah Hafal!
                </button>
              </div>
            </div>
          )}

          {/* 4. MATCHING GAME VIEW */}
          {mode === 'matching' && (
            <div className="p-6 sm:p-8 rounded-3xl border border-[#3978D6]/25 bg-[var(--bg-surface)] space-y-4 shadow-[0_4px_24px_rgba(8,21,47,0.5)]">
              <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider text-center">
                Klik kartu kata Jepang di kiri/atas, lalu klik pasangannya artinya
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {matchingPairs.map((card) => {
                  const isSelected = selectedJpCard === card.id || selectedIdCard === card.id;

                  let style = 'bg-[var(--bg-sidebar)]/80 border-[#3978D6]/20 hover:border-[#3978D6]/50 hover:bg-[var(--bg-elevated)] text-[var(--text-primary)]';
                  if (card.matched) {
                    style = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 opacity-60 pointer-events-none line-through';
                  } else if (isSelected) {
                    style = 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] border-[#3978D6] text-[var(--text-primary)] shadow-[0_0_20px_rgba(57,120,214,0.3)] scale-102';
                  }

                  return (
                    <button
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center min-h-[70px] ${style}`}
                    >
                      {card.text}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      )}

      {/* Finished Result Screen */}
      {isFinished && (
        <div className="p-8 sm:p-12 rounded-3xl border border-[#3978D6]/25 bg-[var(--bg-surface)] text-center max-w-xl mx-auto space-y-6 shadow-[0_20px_60px_-15px_rgba(8,21,47,0.9)]">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 flex items-center justify-center text-[#3978D6] shadow-[0_0_30px_rgba(57,120,214,0.2)]">
            <Sparkles className="w-10 h-10 text-[#3978D6]" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-[var(--text-primary)] tracking-tight font-['Manrope']">
              Latihan Selesai!
            </h2>
            <p className="text-[var(--text-muted)] text-sm mt-1">
              Bagus sekali! Kamu telah menyelesaikan sesi latihan hafalan ini.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 flex items-center justify-around">
            <div>
              <span className="text-xs text-[var(--text-muted)] font-bold block">Skor Benar</span>
              <span className="text-3xl font-black text-emerald-400 font-['Manrope']">
                {score} / {questions.length}
              </span>
            </div>
            <div className="h-10 w-px bg-[#3978D6]/20"></div>
            <div>
              <span className="text-xs text-[var(--text-muted)] font-bold block">Akurasi</span>
              <span className="text-3xl font-black text-[#3978D6] font-['Manrope']">
                {questions.length > 0 ? Math.round((score / questions.length) * 100) : 0}%
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                sound.playClick();
                setIsQuizActive(false);
              }}
              className="px-6 py-3 rounded-2xl bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-sm transition-colors border border-[#3978D6]/20"
            >
              Kembali ke Menu
            </button>

            <button
              onClick={generateQuestions}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] hover:brightness-110 text-[var(--text-primary)] border border-[#3978D6]/40 font-bold text-sm shadow-[0_4px_15px_rgba(57,120,214,0.3)] transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4 text-[#3978D6]" />
              Ulangi Latihan
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
