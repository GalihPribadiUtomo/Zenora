import React, { useState } from 'react';
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
  Sparkles 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import { QuizMode, QuizSubject, QuizQuestion } from '../types';
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
      
      {/* Quiz Setting Screen */}
      {!isQuizActive && (
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE9FF] border border-[#2457C5]/20 text-[#101C3D] text-xs font-black uppercase tracking-wider font-mono">
              Pusat Latihan Interaktif
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#101C3D] tracking-tight font-['Manrope']">
              Latihan Mandiri
            </h1>
            <p className="text-[#4A5B82] text-sm sm:text-base">
              Uji hafalan Kotoba dan Kanji dengan 4 cara berlatih interaktif.
            </p>
          </div>

          {/* Subject Switcher (Kotoba vs Kanji) */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 p-1.5 bg-[#F0F5FF] rounded-2xl border border-[#D2E2FC] w-full max-w-xs shadow-xs">
              <button
                onClick={() => {
                  sound.playClick();
                  setSubject('kotoba');
                }}
                className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center ${
                  subject === 'kotoba'
                    ? 'bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white shadow-xs'
                    : 'text-[#4A5B82] hover:text-[#101C3D]'
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
                    ? 'bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white shadow-xs'
                    : 'text-[#4A5B82] hover:text-[#101C3D]'
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
              className={`card-soft p-5 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between ${
                mode === 'multiple-choice'
                  ? 'border-[#2457C5] ring-2 ring-[#2457C5]/15 bg-[#DCE9FF]/50'
                  : 'border-[#D2E2FC] bg-white hover:border-[#2457C5]/40'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCE9FF] border border-[#2457C5]/20 flex items-center justify-center text-[#2457C5] mb-3">
                  <Award className="w-6 h-6 text-[#2457C5]" />
                </div>
                <h3 className="font-extrabold text-base text-[#101C3D] mb-1 font-['Manrope']">Pilihan Ganda</h3>
                <p className="text-xs text-[#4A5B82] leading-relaxed">
                  Pilih arti yang tepat dari 4 pilihan yang disajikan.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'multiple-choice' ? 'text-[#2457C5]' : 'text-slate-400'}`}>
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
                  ? 'border-[#55B9F5] ring-2 ring-[#55B9F5]/20 bg-[#DCE9FF]/40'
                  : 'border-[#D2E2FC] bg-white hover:border-[#55B9F5]/40'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#DCE9FF] border border-[#55B9F5]/30 flex items-center justify-center text-[#2457C5] mb-3">
                  <Layers className="w-6 h-6 text-[#2457C5]" />
                </div>
                <h3 className="font-extrabold text-base text-[#101C3D] mb-1 font-['Manrope']">Kartu Hafalan</h3>
                <p className="text-xs text-[#4A5B82] leading-relaxed">
                  Balik kartu, lalu tandai hafal atau belum untuk spaced repetition.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'flashcard' ? 'text-[#2457C5]' : 'text-slate-400'}`}>
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
                  ? 'border-[#8975E8] ring-2 ring-[#8975E8]/20 bg-[#F0F5FF]'
                  : 'border-[#D2E2FC] bg-white hover:border-[#8975E8]/40'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] border border-[#8975E8]/30 flex items-center justify-center text-[#8975E8] mb-3">
                  <Shuffle className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-[#101C3D] mb-1 font-['Manrope']">Menjodohkan</h3>
                <p className="text-xs text-[#4A5B82] leading-relaxed">
                  Pasangkan kata Jepang dengan terjemahan artinya secara langsung.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'matching' ? 'text-[#8975E8]' : 'text-slate-400'}`}>
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
                  : 'border-[#D2E2FC] bg-white hover:border-emerald-200'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                  <Keyboard className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-base text-[#101C3D] mb-1 font-['Manrope']">Ketik Romaji</h3>
                <p className="text-xs text-[#4A5B82] leading-relaxed">
                  Baca kata Jepang, lalu ketik romajinya untuk melatih kecepatan.
                </p>
              </div>
              <span className={`text-[11px] font-bold mt-4 ${mode === 'typing' ? 'text-emerald-600' : 'text-slate-400'}`}>
                {mode === 'typing' ? '✓ Terpilih' : 'Pilih mode'}
              </span>
            </div>

          </div>

          {/* Filter Selection Panel */}
          <div className="card-soft p-6 sm:p-7 rounded-3xl border border-[#D2E2FC] bg-white shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Bab Selector */}
              {subject === 'kotoba' && (
                <div>
                  <label className="block text-xs font-bold text-[#4A5B82] uppercase tracking-wider mb-2">
                    Bab
                  </label>
                  <select
                    value={selectedBab}
                    onChange={(e) => setSelectedBab(e.target.value === 'ALL' ? 'ALL' : Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D2E2FC] bg-[#F0F5FF]/80 text-[#101C3D] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/40"
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
                <label className="block text-xs font-bold text-[#4A5B82] uppercase tracking-wider mb-2">
                  Kategori
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D2E2FC] bg-[#F0F5FF]/80 text-[#101C3D] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/40"
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
                <label className="block text-xs font-bold text-[#4A5B82] uppercase tracking-wider mb-2">
                  Jumlah Soal
                </label>
                <select
                  value={questionCount}
                  onChange={(e) => setQuestionCount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#D2E2FC] bg-[#F0F5FF]/80 text-[#101C3D] text-sm font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/40"
                >
                  <option value={5}>5 Soal Singkat</option>
                  <option value={10}>10 Soal Standar</option>
                  <option value={20}>20 Soal Tantangan</option>
                </select>
              </div>

            </div>

            {/* Launch Button */}
            <div className="mt-6 pt-5 border-t border-[#D2E2FC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#4A5B82] font-medium">
                {subject === 'kotoba' ? '2.910 kata' : '329 kanji'} siap dijadikan bahan latihan.
              </span>
              <button
                onClick={generateQuestions}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-extrabold text-sm sm:text-base shadow-md shadow-[#101C3D]/20 transition-all flex items-center justify-center gap-2 active:scale-95"
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
              className="text-xs font-bold text-[#4A5B82] hover:text-[#101C3D]"
            >
              ✕ Keluar Latihan
            </button>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#4A5B82]">
                Soal {currentIdx + 1} / {questions.length}
              </span>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Skor: {score}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-[#DCE9FF] overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5] transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          {/* 1. MULTIPLE CHOICE MODE */}
          {mode === 'multiple-choice' && (
            <div className="card-soft p-6 sm:p-8 rounded-3xl border border-[#D2E2FC] bg-white space-y-6">
              
              {/* Question Header */}
              <div className="text-center py-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="kanji-font text-5xl sm:text-6xl font-black text-[#101C3D]">
                    {currentQ.question}
                  </h2>
                  <button
                    onClick={() => speakJapanese(currentQ.audioText)}
                    className="p-2 rounded-xl bg-[#F0F5FF] hover:bg-[#DCE9FF] text-[#4A5B82] hover:text-[#101C3D] border border-[#D2E2FC]/60"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                {currentQ.subQuestion && (
                  <p className="text-sm font-bold text-[#2457C5]">
                    {currentQ.subQuestion}
                  </p>
                )}
                <p className="text-xs text-[#4A5B82]">Pilih arti yang tepat:</p>
              </div>

              {/* 4 Choices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedAnswer === opt;
                  const isCorrect = opt === currentQ.correctAnswer;
                  
                  let btnStyle = 'border-[#D2E2FC] bg-white hover:bg-[#F0F5FF] text-[#101C3D]';
                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                    } else if (isSelected) {
                      btnStyle = 'border-red-500 bg-red-50 text-red-800 font-bold';
                    } else {
                      btnStyle = 'border-[#D2E2FC] opacity-40 text-slate-400';
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
                      {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next */}
              {isAnswerSubmitted && (
                <div className="pt-4 border-t border-[#D2E2FC] flex items-center justify-between">
                  <span className="text-xs text-[#4A5B82] font-medium">
                    {currentQ.explanation}
                  </span>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                  >
                    Lanjut →
                  </button>
                </div>
              )}

            </div>
          )}

          {/* 2. TYPING ROMAJI MODE */}
          {mode === 'typing' && (
            <div className="card-soft p-6 sm:p-8 rounded-3xl border border-[#D2E2FC] bg-white space-y-6">
              <div className="text-center py-4 space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <h2 className="kanji-font text-5xl sm:text-6xl font-black text-[#101C3D]">
                    {currentQ.question}
                  </h2>
                  <button
                    onClick={() => speakJapanese(currentQ.audioText)}
                    className="p-2 rounded-xl bg-[#F0F5FF] hover:bg-[#DCE9FF] text-[#4A5B82] hover:text-[#101C3D] border border-[#D2E2FC]/60"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm font-bold text-[#2457C5]">
                  {currentQ.subQuestion}
                </p>
                <p className="text-xs text-[#4A5B82]">Ketik ejaan romaji atau artinya lalu tekan Enter:</p>
              </div>

              <form onSubmit={handleCheckTyping} className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={typedInput}
                    disabled={isAnswerSubmitted}
                    onChange={(e) => setTypedInput(e.target.value)}
                    placeholder="Ketik romaji di sini (contoh: watashi, tabemasu)..."
                    className="flex-1 px-4 py-3 rounded-2xl border border-[#D2E2FC] text-base font-mono focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/40"
                    autoFocus
                  />
                  {!isAnswerSubmitted && (
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-2xl bg-[#101C3D] text-white font-bold text-sm shadow-xs hover:bg-[#2457C5] transition-colors"
                    >
                      Cek
                    </button>
                  )}
                </div>
              </form>

              {isAnswerSubmitted && (
                <div className="pt-4 border-t border-[#D2E2FC] flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#101C3D] block">
                      Jawaban Benar: <span className="font-mono text-[#2457C5]">{currentQ.metadata?.romaji || currentQ.correctAnswer}</span>
                    </span>
                    <span className="text-xs text-[#4A5B82]">{currentQ.explanation}</span>
                  </div>
                  <button
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-xs"
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
                className="w-full h-80 rounded-3xl cursor-pointer p-8 flex flex-col justify-between text-center card-soft bg-white border border-[#D2E2FC] shadow-xl"
              >
                <span className="text-xs text-[#4A5B82] font-bold uppercase tracking-wider">
                  Klik untuk melihat jawaban
                </span>

                <div className="my-auto space-y-2">
                  {!isCardFlipped ? (
                    <>
                      <h2 className="kanji-font text-6xl font-black text-[#101C3D]">
                        {currentQ.question}
                      </h2>
                      <p className="text-xl font-bold text-[#2457C5]">
                        {currentQ.subQuestion}
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-3xl font-extrabold text-[#101C3D] font-['Manrope']">
                        {currentQ.correctAnswer}
                      </h3>
                      <p className="text-xs text-[#4A5B82] font-mono">
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
                    className="p-2 rounded-xl bg-[#F0F5FF] hover:bg-[#DCE9FF] text-[#4A5B82] border border-[#D2E2FC]"
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
                  className="px-5 py-2.5 rounded-xl bg-[#F0F5FF] hover:bg-[#DCE9FF] text-[#4A5B82] hover:text-[#101C3D] font-bold text-sm transition-colors border border-[#D2E2FC]"
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
            <div className="card-soft p-6 sm:p-8 rounded-3xl border border-[#D2E2FC] bg-white space-y-4">
              <p className="text-xs font-bold text-[#4A5B82] uppercase tracking-wider text-center">
                Klik kartu kata Jepang di kiri/atas, lalu klik pasangannya artinya
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {matchingPairs.map((card) => {
                  const isSelected = selectedJpCard === card.id || selectedIdCard === card.id;

                  let style = 'bg-[#F0F5FF] border-[#D2E2FC] hover:border-[#2457C5]/50 hover:bg-[#E8F3FF] text-[#101C3D]';
                  if (card.matched) {
                    style = 'bg-emerald-50 border-emerald-300 text-emerald-800 opacity-60 pointer-events-none line-through';
                  } else if (isSelected) {
                    style = 'bg-gradient-to-r from-[#101C3D] to-[#2457C5] border-[#101C3D] text-white shadow-md scale-102';
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
        <div className="card-soft p-8 sm:p-12 rounded-3xl border border-[#D2E2FC] bg-white text-center max-w-xl mx-auto space-y-6 shadow-sm">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-[#DCE9FF] border border-[#2457C5]/20 flex items-center justify-center text-[#2457C5] shadow-sm">
            <Sparkles className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#101C3D] tracking-tight font-['Manrope']">
              Latihan Selesai!
            </h2>
            <p className="text-[#4A5B82] text-sm mt-1">
              Bagus sekali! Kamu telah menyelesaikan sesi latihan hafalan ini.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0F5FF] border border-[#D2E2FC] flex items-center justify-around">
            <div>
              <span className="text-xs text-[#4A5B82] font-bold block">Skor Benar</span>
              <span className="text-3xl font-black text-emerald-600 font-['Manrope']">
                {score} / {questions.length}
              </span>
            </div>
            <div className="h-10 w-px bg-[#D2E2FC]"></div>
            <div>
              <span className="text-xs text-[#4A5B82] font-bold block">Akurasi</span>
              <span className="text-3xl font-black text-[#2457C5] font-['Manrope']">
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
              className="px-6 py-3 rounded-2xl bg-[#F0F5FF] hover:bg-[#DCE9FF] text-[#101C3D] font-bold text-sm transition-colors border border-[#D2E2FC]"
            >
              Kembali ke Menu
            </button>

            <button
              onClick={generateQuestions}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-sm shadow-xs transition-all flex items-center gap-2"
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
