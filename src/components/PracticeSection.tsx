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
  Flame,
  HelpCircle,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import { QuizMode, QuizSubject, KotobaCategory, KanjiCategory, QuizQuestion } from '../types';
import { speakJapanese, sound } from '../utils/audio';

interface PracticeSectionProps {
  initialBab?: number | null;
  onRecordResult?: (score: number, total: number, mode: QuizMode, subject: QuizSubject) => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  initialBab,
  onRecordResult
}) => {
  // Setup state
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
        // Wrong options from pool
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
        // Kanji question
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

    // If matching mode, set up pairs
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
    setIsQuizActive(true);
  };

  const handleSelectOption = (opt: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(opt);
    setIsAnswerSubmitted(true);

    const currentQ = questions[currentIdx];
    if (opt.toLowerCase().trim() === currentQ.correctAnswer.toLowerCase().trim()) {
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

    const currentQ = questions[currentIdx];
    const targetRomaji = currentQ.metadata?.romaji?.toLowerCase().trim() || currentQ.correctAnswer.toLowerCase().trim();
    const isRight = typedInput.toLowerCase().trim() === targetRomaji;

    if (isRight) {
      sound.playCorrect();
      setScore(prev => prev + 1);
    } else {
      sound.playIncorrect();
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setIsCardFlipped(false);
      setTypedInput('');
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

  // Handle matching game click
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

      // Check if all matched
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
      
      {/* Quiz Setting Screen (Screenshot 8) */}
      {!isQuizActive && (
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBF8] border border-[#29264B]/20 text-[#29264B] text-xs font-black uppercase tracking-wider font-mono">
              Pusat Latihan Interaktif
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#29264B] tracking-tight font-['Manrope']">
              Latihan Mandiri
            </h1>
            <p className="text-[#77738A] text-sm sm:text-base">
              Uji hafalan Kotoba dan Kanji dengan 4 cara berlatih interaktif.
            </p>
          </div>

          {/* Subject Switcher (Kotoba vs Kanji) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 p-1.5 bg-[#F0EBF8]/80 rounded-2xl border border-[#E9E2F0] w-full max-w-xs shadow-xs">
              <button
                onClick={() => {
                  sound.playClick();
                  setSubject('kotoba');
                }}
                className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
                  subject === 'kotoba'
                    ? 'bg-gradient-to-r from-[#29264B] to-[#6555A5] text-white shadow-xs'
                    : 'text-[#77738A] hover:text-[#29264B]'
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
                    ? 'bg-gradient-to-r from-[#29264B] to-[#6555A5] text-white shadow-xs'
                    : 'text-[#77738A] hover:text-[#29264B]'
                }`}
              >
                Kanji
              </button>
            </div>
          </div>

          {/* 4 Mode Cards (Screenshot 8) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Mode 1 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('multiple-choice');
              }}
              className={`card-soft p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between ${
                mode === 'multiple-choice'
                  ? 'border-[#6555A5] ring-2 ring-[#6555A5]/15 bg-[#F0EBF8]/50'
                  : 'border-[#E9E2F0] bg-white hover:border-[#6555A5]/40'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0EBF8] border border-[#6555A5]/20 flex items-center justify-center text-[#29264B] mb-3">
                  <Award className="w-6 h-6 text-[#6555A5]" />
                </div>
                <h3 className="font-extrabold text-base text-[#29264B] mb-1 font-['Manrope']">Pilihan Ganda</h3>
                <p className="text-xs text-[#77738A] leading-relaxed">
                  Pilih arti yang tepat dari 4 pilihan yang disajikan.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'multiple-choice' ? 'text-[#6555A5]' : 'text-slate-400'}`}>
                {mode === 'multiple-choice' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

            {/* Mode 2 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('flashcard');
              }}
              className={`card-soft p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between ${
                mode === 'flashcard'
                  ? 'border-[#6555A5] ring-2 ring-[#6555A5]/15 bg-[#F0EBF8]/50'
                  : 'border-[#E9E2F0] bg-white hover:border-[#6555A5]/40'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0EBF8] border border-[#6555A5]/20 flex items-center justify-center text-[#6555A5] mb-3">
                  <Layers className="w-6 h-6 text-[#6555A5]" />
                </div>
                <h3 className="font-extrabold text-base text-[#29264B] mb-1 font-['Manrope']">Kartu Hafalan</h3>
                <p className="text-xs text-[#77738A] leading-relaxed">
                  Balik kartu, lalu tandai hafal atau belum untuk spaced repetition.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'flashcard' ? 'text-[#6555A5]' : 'text-slate-400'}`}>
                {mode === 'flashcard' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

            {/* Mode 3 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('matching');
              }}
              className={`card-soft p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between ${
                mode === 'matching'
                  ? 'border-amber-500 ring-2 ring-amber-500/20 bg-amber-50/20'
                  : 'border-[#E9E2F0] bg-white hover:border-amber-200'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50/80 border border-amber-100 flex items-center justify-center text-amber-600 mb-3">
                  <Shuffle className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-[#29264B] mb-1 font-['Manrope']">Menjodohkan</h3>
                <p className="text-xs text-[#77738A] leading-relaxed">
                  Pasangkan kata Jepang dengan terjemahan artinya secara langsung.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'matching' ? 'text-amber-600' : 'text-slate-400'}`}>
                {mode === 'matching' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

            {/* Mode 4 */}
            <div
              onClick={() => {
                sound.playClick();
                setMode('typing');
              }}
              className={`card-soft p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between ${
                mode === 'typing'
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/20'
                  : 'border-[#E9E2F0] bg-white hover:border-emerald-200'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                  <Keyboard className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-[#29264B] mb-1 font-['Manrope']">Ketik Romaji</h3>
                <p className="text-xs text-[#77738A] leading-relaxed">
                  Baca kata Jepang, lalu ketik romajinya untuk melatih kecepatan.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'typing' ? 'text-emerald-600' : 'text-slate-400'}`}>
                {mode === 'typing' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

          </div>

          {/* Filter Selection Panel (Screenshot 8 Bottom) */}
          <div className="card-soft p-6 sm:p-7 rounded-3xl border border-[#E9E2F0] bg-white shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Bab Selector */}
              {subject === 'kotoba' && (
                <div>
                  <label className="block text-xs font-bold text-[#77738A] uppercase tracking-wider mb-2">
                    Bab
                  </label>
                  <select
                    value={selectedBab}
                    onChange={(e) => setSelectedBab(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E9E2F0] bg-[#F8F3FA]/70 text-[#29264B] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/40"
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
                <label className="block text-xs font-bold text-[#77738A] uppercase tracking-wider mb-2">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E2F0] bg-[#F8F3FA]/70 text-[#29264B] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/40"
                >
                  <option value="ALL">Semua Kategori</option>
                  {subject === 'kotoba' ? (
                    <>
                      <option value="Kata Kerja">Kata Kerja</option>
                      <option value="Kata Sifat">Kata Sifat</option>
                      <option value="Waktu & Angka">Waktu & Angka</option>
                      <option value="Makanan & Minuman">Makanan & Minuman</option>
                      <option value="Tubuh & Kesehatan">Tubuh & Kesehatan</option>
                      <option value="Orang & Keluarga">Orang & Keluarga</option>
                      <option value="Tempat & Arah">Tempat & Arah</option>
                      <option value="Umum & Ungkapan">Umum & Ungkapan</option>
                    </>
                  ) : (
                    <>
                      <option value="Angka & Waktu">Angka & Waktu</option>
                      <option value="Alam & Cuaca">Alam & Cuaca</option>
                      <option value="Manusia & Keluarga">Manusia & Keluarga</option>
                      <option value="Tempat & Bangunan">Tempat & Bangunan</option>
                      <option value="Aktivitas & Kata Kerja">Aktivitas & Kata Kerja</option>
                      <option value="Tubuh">Tubuh</option>
                      <option value="Warna & Benda">Warna & Benda</option>
                    </>
                  )}
                </select>
              </div>

              {/* Jumlah Soal */}
              <div>
                <label className="block text-xs font-bold text-[#77738A] uppercase tracking-wider mb-2">
                  Jumlah Soal
                </label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9E2F0] bg-[#F8F3FA]/70 text-[#29264B] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/40"
                >
                  <option value={5}>5 Soal Singkat</option>
                  <option value={10}>10 Soal Standar</option>
                  <option value={20}>20 Soal Tantangan</option>
                </select>
              </div>

            </div>

            {/* Launch Button */}
            <div className="mt-6 pt-5 border-t border-[#E9E2F0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#77738A] font-medium">
                {subject === 'kotoba' ? '2.910 kata' : '240 kanji'} siap dijadikan bahan latihan.
              </span>
              <button
                onClick={generateQuestions}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#29264B] to-[#6555A5] hover:brightness-105 text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#29264B]/20 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Mulai Latihan</span>
                <ArrowRight className="w-5 h-5" />
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
              className="text-xs font-bold text-[#77738A] hover:text-[#29264B]"
            >
              ✕ Keluar Latihan
            </button>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#77738A]">
                Soal {currentIdx + 1} / {questions.length}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Skor: {score}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-[#E9E2F0] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#29264B] to-[#6555A5] transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* 1. MULTIPLE CHOICE MODE */}
          {mode === 'multiple-choice' && (
            <div className="card-soft p-6 sm:p-8 rounded-3xl border border-[#E9E2F0] bg-white space-y-6">
              
              {/* Question Header */}
              <div className="text-center py-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="kanji-font text-5xl sm:text-6xl font-black text-[#29264B]">
                    {currentQ.question}
                  </h2>
                  <button
                    onClick={() => speakJapanese(currentQ.audioText)}
                    className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] border border-[#E9E2F0]/50"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {currentQ.subQuestion && (
                  <p className="text-sm font-bold text-[#6555A5]">
                    {currentQ.subQuestion}
                  </p>
                )}
                <p className="text-xs text-[#77738A]">Pilih arti yang tepat:</p>
              </div>

              {/* 4 Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === currentQ.correctAnswer;
                  
                  let btnStyle = 'border-[#E9E2F0] bg-white hover:bg-[#F8F3FA] text-[#29264B]';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'border-rose-500 bg-rose-50 text-rose-800 font-bold';
                    } else {
                      btnStyle = 'border-[#E9E2F0] opacity-40 text-slate-400';
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
                      {isAnswerSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                      {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-600" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswerSubmitted && (
                <div className="pt-4 border-t border-[#E9E2F0] flex items-center justify-between">
                  <span className="text-xs text-[#77738A] font-medium">
                    {currentQ.explanation}
                  </span>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#29264B] to-[#6555A5] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    Lanjut →
                  </button>
                </div>
              )}

            </div>
          )}

          {/* 2. TYPING ROMAJI MODE */}
          {mode === 'typing' && (
            <div className="card-soft p-6 sm:p-8 rounded-3xl border border-[#E9E2F0] bg-white space-y-6">
              <div className="text-center py-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="kanji-font text-5xl sm:text-6xl font-black text-[#29264B]">
                    {currentQ.question}
                  </h2>
                  <button
                    onClick={() => speakJapanese(currentQ.audioText)}
                    className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] border border-[#E9E2F0]/50"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-[#6555A5]">
                  {currentQ.subQuestion}
                </p>
                <p className="text-xs text-[#77738A]">Ketik ejaan romaji atau artinya lalu tekan Enter:</p>
              </div>

              <form onSubmit={handleCheckTyping} className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={typedInput}
                    disabled={isAnswerSubmitted}
                    onChange={(e) => setTypedInput(e.target.value)}
                    placeholder="Ketik romaji di sini (contoh: watashi, tabemasu)..."
                    className="flex-1 px-4 py-3 rounded-2xl border border-[#E9E2F0] text-base font-mono focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/40"
                    autoFocus
                  />
                  {!isAnswerSubmitted && (
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-2xl bg-[#29264B] text-white font-bold text-sm shadow-xs"
                    >
                      Cek
                    </button>
                  )}
                </div>
              </form>

              {isAnswerSubmitted && (
                <div className="pt-4 border-t border-[#E9E2F0] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#29264B] block">
                      Jawaban Benar: <span className="font-mono text-[#6555A5]">{currentQ.metadata?.romaji || currentQ.correctAnswer}</span>
                    </span>
                    <span className="text-xs text-[#77738A]">{currentQ.explanation}</span>
                  </div>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#29264B] to-[#6555A5] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-xs"
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
                className="w-full h-80 rounded-3xl cursor-pointer p-8 flex flex-col justify-between text-center card-soft bg-white border border-[#E9E2F0] shadow-xl"
              >
                <span className="text-xs text-[#77738A] font-bold uppercase tracking-wider">
                  Klik untuk melihat jawaban
                </span>

                <div className="my-auto space-y-2">
                  {!isCardFlipped ? (
                    <>
                      <h2 className="kanji-font text-6xl font-black text-[#29264B]">
                        {currentQ.question}
                      </h2>
                      <p className="text-xl font-bold text-[#6555A5]">
                        {currentQ.subQuestion}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-3xl font-extrabold text-[#29264B] font-['Manrope']">
                        {currentQ.correctAnswer}
                      </h3>
                      <p className="text-xs text-[#77738A] font-mono">
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
                    className="p-2 rounded-xl bg-[#F8F3FA] hover:bg-[#F0EBF8] text-[#77738A] border border-[#E9E2F0]"
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
                  className="px-5 py-2.5 rounded-xl bg-[#F0EBF8] hover:bg-[#E9E2F0] text-[#77738A] hover:text-[#29264B] font-bold text-sm transition-colors"
                >
                  Belum Hafal
                </button>
                <button
                  onClick={() => {
                    sound.playCorrect();
                    setScore(prev => prev + 1);
                    handleNextQuestion();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 text-white font-bold text-sm shadow-xs transition-all"
                >
                  Sudah Hafal!
                </button>
              </div>
            </div>
          )}

          {/* 4. MATCHING GAME VIEW */}
          {mode === 'matching' && (
            <div className="card-soft p-6 sm:p-8 rounded-3xl border border-[#E9E2F0] bg-white space-y-4">
              <p className="text-xs font-bold text-[#77738A] uppercase tracking-wider text-center">
                Klik kartu kata Jepang di kiri/atas, lalu klik pasangannya artinya
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {matchingPairs.map((card) => {
                  const isSelected = selectedJpCard === card.id || selectedIdCard === card.id;

                  let style = 'bg-[#F8F3FA]/70 border-[#E9E2F0] hover:border-[#6555A5]/40 hover:bg-[#F0EBF8]/50 text-[#29264B]';
                  if (card.matched) {
                    style = 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60 pointer-events-none line-through';
                  } else if (isSelected) {
                    style = 'bg-gradient-to-r from-[#29264B] to-[#6555A5] border-[#29264B] text-white shadow-md scale-102';
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
        <div className="card-soft p-8 sm:p-12 rounded-3xl border border-[#E9E2F0] bg-white text-center max-w-xl mx-auto space-y-6 shadow-sm">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shadow-sm">
            <Sparkles className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#29264B] tracking-tight font-['Manrope']">
              Latihan Selesai!
            </h2>
            <p className="text-[#77738A] text-sm mt-1">
              Bagus sekali! Kamu telah menyelesaikan sesi latihan hafalan ini.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F8F3FA]/80 border border-[#E9E2F0] flex items-center justify-around">
            <div>
              <span className="text-xs text-[#77738A] font-bold block">Skor Benar</span>
              <span className="text-3xl font-black text-emerald-600 font-['Manrope']">
                {score} / {questions.length}
              </span>
            </div>
            <div className="h-10 w-px bg-[#E9E2F0]"></div>
            <div>
              <span className="text-xs text-[#77738A] font-bold block">Akurasi</span>
              <span className="text-3xl font-black text-[#6555A5] font-['Manrope']">
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
              className="px-6 py-3 rounded-2xl bg-[#F0EBF8] hover:bg-[#E9E2F0] text-[#29264B] font-bold text-sm transition-colors border border-[#E9E2F0]"
            >
              Kembali ke Menu
            </button>

            <button
              onClick={generateQuestions}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#29264B] to-[#6555A5] hover:brightness-105 text-white font-bold text-sm shadow-xs transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Ulangi Latihan
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
