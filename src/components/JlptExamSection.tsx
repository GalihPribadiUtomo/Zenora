import React, { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Bookmark, 
  Volume2, 
  RotateCcw, 
  ArrowLeft, 
  ArrowRight, 
  HelpCircle,
  FileText,
  Headphones,
  BookOpen,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Pause,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ExamPackage, ExamSection, ExamQuestion, ExamType } from '../types';
import { JLPT_EXAM_PACKAGES } from '../data/jlptExamData';
import { speakJapanese, sound } from '../utils/audio';
import { FuriganaText } from './FuriganaText';

interface JlptExamSectionProps {
  onBackToPractice?: () => void;
}

export const JlptExamSection: React.FC<JlptExamSectionProps> = ({ onBackToPractice }) => {
  // State pilihan paket
  const [selectedPackage, setSelectedPackage] = useState<ExamPackage>(JLPT_EXAM_PACKAGES[0]);
  const [examState, setExamState] = useState<'selection' | 'running' | 'results' | 'review'>('selection');

  // Mode ujian: 'full' (seluruh seksi terintegrasi) atau 'section' (hanya satu seksi pilihan)
  const [examMode, setExamMode] = useState<'full' | 'section'>('full');
  const [selectedSectionIdx, setSelectedSectionIdx] = useState<number>(0);

  // Soal & Navigasi
  const [currentSectionIdx, setCurrentSectionIdx] = useState<number>(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);

  // Jawaban pengguna: Record<questionId, selectedOptionIndex>
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  // Soal yang ditandai ragu-ragu: Set<questionId>
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Soal bintang ★: state susunan kata temporer per questionId
  const [starArrangements, setStarArrangements] = useState<Record<string, string[]>>({});

  // Timer
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Audio Choukai state
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Modal konfirmasi selesai
  const [showConfirmSubmit, setShowConfirmSubmit] = useState<boolean>(false);

  const activeSections: ExamSection[] = examMode === 'full' 
    ? selectedPackage.sections 
    : [selectedPackage.sections[selectedSectionIdx]];

  const currentSection: ExamSection = activeSections[currentSectionIdx] || activeSections[0];
  const currentQuestion: ExamQuestion = currentSection?.questions[currentQuestionIdx] || currentSection?.questions[0];

  // Inisialisasi Ujian
  const startExam = (pkg: ExamPackage, mode: 'full' | 'section', secIdx: number = 0) => {
    setSelectedPackage(pkg);
    setExamMode(mode);
    setSelectedSectionIdx(secIdx);
    setCurrentSectionIdx(0);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setStarArrangements({});
    setElapsedSeconds(0);
    setIsTimerPaused(false);

    // Hitung total waktu
    const targetMinutes = mode === 'full' 
      ? pkg.totalTimeMinutes 
      : pkg.sections[secIdx].timeLimitMinutes;
    setTimeRemainingSeconds(targetMinutes * 60);

    setExamState('running');
    sound.playClick();
  };

  // Timer Countdown Effect
  useEffect(() => {
    if (examState === 'running' && !isTimerPaused && timeRemainingSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimeRemainingSeconds(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleAutoSubmit();
            return 0;
          }
          return prev - 1;
        });
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examState, isTimerPaused, timeRemainingSeconds]);

  const handleAutoSubmit = () => {
    sound.playIncorrect();
    alert('Waktu ujian telah habis! Lembar jawaban Anda otomatis dikumpulkan.');
    finishExam();
  };

  // Format detik ke format MM:SS atau HH:MM:SS
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Pilih jawaban
  const handleSelectAnswer = (qId: string, optIdx: number) => {
    sound.playClick();
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  // Toggle bendera ragu-ragu
  const toggleFlagQuestion = (qId: string) => {
    sound.playClick();
    setFlaggedQuestions(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  // Handler interaktif soal bintang ★
  const handleStarChoiceClick = (q: ExamQuestion, word: string) => {
    sound.playClick();
    const current = starArrangements[q.id] || [];
    let updated: string[];
    if (current.includes(word)) {
      // Hapus jika sudah dipilih
      updated = current.filter(w => w !== word);
    } else {
      if (current.length < 4) {
        updated = [...current, word];
      } else {
        return;
      }
    }

    setStarArrangements(prev => ({ ...prev, [q.id]: updated }));

    // Jika sudah terisi 4 slot, tentukan kata yang menempati slot ke-3 (posisi ★)
    if (updated.length >= 3) {
      const starWord = updated[2]; // Slot ke-3 (indeks 2) adalah posisi bintang ★
      const optIndex = q.options.indexOf(starWord);
      if (optIndex !== -1) {
        setUserAnswers(prev => ({ ...prev, [q.id]: optIndex }));
      }
    }
  };

  // Putar Audio Choukai
  const playAudioQuestion = (q: ExamQuestion) => {
    if (!q.audioScript) return;
    setIsPlayingAudio(true);
    speakJapanese(q.audioScript);
    setTimeout(() => {
      setIsPlayingAudio(false);
    }, 4000);
  };

  // Navigasi soal
  const handleNext = () => {
    sound.playClick();
    if (currentQuestionIdx < currentSection.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else if (currentSectionIdx < activeSections.length - 1) {
      // Pindah ke seksi berikutnya
      setCurrentSectionIdx(prev => prev + 1);
      setCurrentQuestionIdx(0);
    } else {
      setShowConfirmSubmit(true);
    }
  };

  const handlePrev = () => {
    sound.playClick();
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx(prev => prev - 1);
    } else if (currentSectionIdx > 0) {
      const prevSecIdx = currentSectionIdx - 1;
      setCurrentSectionIdx(prevSecIdx);
      setCurrentQuestionIdx(activeSections[prevSecIdx].questions.length - 1);
    }
  };

  // Selesaikan Ujian & Hitung Skor Resmi
  const finishExam = () => {
    setShowConfirmSubmit(false);
    setExamState('results');
    sound.playFanfare();

    // Jalankan efek selebrasi
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // Kalkulasi Skor
  const calculateResults = () => {
    let totalCorrect = 0;
    let totalQuestionsCount = 0;

    const sectionResults = activeSections.map(sec => {
      let secCorrect = 0;
      sec.questions.forEach(q => {
        if (userAnswers[q.id] === q.correctAnswerIndex) {
          secCorrect++;
        }
      });
      totalCorrect += secCorrect;
      totalQuestionsCount += sec.questions.length;

      const secScore = sec.questions.length > 0
        ? Math.round((secCorrect / sec.questions.length) * sec.maxScore)
        : 0;
      const passedSection = secScore >= sec.passingScore;

      return {
        section: sec,
        correct: secCorrect,
        total: sec.questions.length,
        score: secScore,
        maxScore: sec.maxScore,
        passingScore: sec.passingScore,
        passed: passedSection
      };
    });

    const scaledTotalScore = Math.round(
      sectionResults.reduce((acc, curr) => acc + curr.score, 0)
    );

    // Kriteria kelulusan resmi JLPT / JFT:
    // 1. Total score >= passingScore
    // 2. Setiap seksi harus lulus ambang batas gugur (sectional pass marks)
    const passedAllSections = sectionResults.every(s => s.passed);
    const passedTotal = scaledTotalScore >= selectedPackage.passingScore;
    const isOverallPassed = passedAllSections && passedTotal;

    return {
      totalCorrect,
      totalQuestionsCount,
      scaledTotalScore,
      maxScore: selectedPackage.maxScore,
      passingScore: selectedPackage.passingScore,
      isOverallPassed,
      sectionResults
    };
  };

  // =========================================================================
  // VIEW 1: SELECTION MENU (PILIH PAKET JLPT N5, N4, JFT-A2)
  // =========================================================================
  if (examState === 'selection') {
    return (
      <div className="space-y-8 text-left pb-16">
        
        {/* Header Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl border border-[#8FB4E3]/25 shadow-[0_20px_60px_-15px_rgba(12,27,51,0.9),0_0_40px_rgba(143,180,227,0.12)] bg-gradient-to-br from-[#0C1B33] via-[#16294A] to-[#1F3760] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16294A]/80 border border-[#8FB4E3]/30 text-[#8FB4E3] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_12px_rgba(143,180,227,0.2)]">
                <ShieldCheck className="w-4 h-4 text-[#8FB4E3]" />
                Simulasi Ujian Resmi Standar Japan Foundation & JEES
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[#EEF1F6] tracking-tight font-['Manrope'] flex items-center gap-3">
                <Award className="w-8 h-8 text-[#8FB4E3]" />
                Simulasi Ujian JLPT & JFT-Basic
              </h1>

              <p className="text-[#CBD8EC] text-sm sm:text-base leading-relaxed max-w-2xl">
                Uji kesiapan sertifikasi bahasa Jepang Anda dengan format 100% autentik sesuai lembar ujian resmi. Dilengkapi sistem timer resmi hitung mundur, soal susun kalimat posisi bintang ★, audio choukai natural, kriteria kelulusan resmi, dan pembahasan komprehensif.
              </p>
            </div>

            {onBackToPractice && (
              <button
                onClick={onBackToPractice}
                className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0C1B33]/80 hover:bg-[#16294A] text-[#8FB4E3] hover:text-[#EEF1F6] border border-[#8FB4E3]/25 text-xs font-bold transition-all shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Latihan Bab</span>
              </button>
            )}
          </div>
        </div>

        {/* Exam Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {JLPT_EXAM_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 hover:border-[#8FB4E3]/60 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(12,27,51,0.5)] group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-black tracking-wider font-mono uppercase border"
                    style={{ 
                      color: pkg.badgeColor, 
                      backgroundColor: `${pkg.badgeColor}15`,
                      borderColor: `${pkg.badgeColor}40`
                    }}
                  >
                    Level {pkg.level}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#8FB4E3]">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.totalTimeMinutes} Menit</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#EEF1F6] font-['Manrope'] group-hover:text-[#8FB4E3] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-bold text-[#8FB4E3] mt-1 font-mono">
                    {pkg.subtitle}
                  </p>
                  <p className="text-sm text-[#CBD8EC] mt-3 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Seksi Details */}
                <div className="space-y-2 pt-3 border-t border-[#8FB4E3]/15">
                  <span className="text-[11px] font-bold text-[#8793A8] uppercase tracking-wider block">
                    Cakupan Seksi Ujian:
                  </span>
                  <div className="space-y-1.5">
                    {pkg.sections.map((sec, idx) => (
                      <div 
                        key={sec.id}
                        className="flex items-center justify-between text-xs p-2 rounded-xl bg-[#0C1B33]/60 border border-[#8FB4E3]/15"
                      >
                        <span className="font-bold text-[#EEF1F6] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8FB4E3]" />
                          {sec.title}
                        </span>
                        <span className="text-[#8FB4E3] font-mono text-[11px]">
                          {sec.timeLimitMinutes} mnt · {sec.questions.length} soal
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Syarat Kelulusan */}
                <div className="p-3 rounded-xl bg-[#0C1B33]/80 border border-[#8FB4E3]/20 flex items-center justify-between text-xs">
                  <span className="text-[#8793A8] font-medium">Passing Mark:</span>
                  <span className="font-bold text-emerald-400 font-mono">
                    Minimal {pkg.passingScore} / {pkg.maxScore} Poin
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#8FB4E3]/15 space-y-2">
                <button
                  onClick={() => startExam(pkg, 'full')}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-[#0C1B33] bg-gradient-to-r from-[#EEF1F6] to-[#8FB4E3] hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Award className="w-4 h-4" />
                  <span>Mulai Simulasi Penuh ({pkg.totalTimeMinutes} Menit)</span>
                </button>

                {/* Section Quick Drill */}
                <div className="pt-1">
                  <span className="text-[10px] text-[#8793A8] font-bold uppercase tracking-wider block text-center mb-1.5">
                    Atau Latihan Per Seksi:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {pkg.sections.map((sec, sIdx) => (
                      <button
                        key={sec.id}
                        onClick={() => startExam(pkg, 'section', sIdx)}
                        className="py-1.5 px-2 rounded-lg bg-[#0C1B33] hover:bg-[#1F3760] text-[11px] font-bold text-[#CBD8EC] hover:text-[#EEF1F6] border border-[#8FB4E3]/20 transition-colors truncate text-center"
                        title={sec.title}
                      >
                        {sec.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: RUNNING EXAM (SIMULASI SEDANG BERJALAN)
  // =========================================================================
  if (examState === 'running') {
    const isWarningTime = timeRemainingSeconds <= 300 && timeRemainingSeconds > 0;
    const answeredCount = Object.keys(userAnswers).length;
    const allQuestionsInSection = currentSection.questions;
    const isCurrentQuestionFlagged = !!flaggedQuestions[currentQuestion.id];
    const currentChosenOption = userAnswers[currentQuestion.id];

    return (
      <div className="space-y-6 text-left pb-16 max-w-6xl mx-auto">
        
        {/* Top Control Bar: Paket Title, Timer, Status */}
        <div className="sticky top-20 z-30 p-4 rounded-2xl bg-[#0C1B33]/95 backdrop-blur-xl border border-[#8FB4E3]/30 shadow-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span 
              className="px-2.5 py-1 rounded-lg text-xs font-black font-mono uppercase border"
              style={{ 
                color: selectedPackage.badgeColor,
                backgroundColor: `${selectedPackage.badgeColor}15`,
                borderColor: `${selectedPackage.badgeColor}40`
              }}
            >
              {selectedPackage.level}
            </span>
            <div>
              <h2 className="text-sm sm:text-base font-black text-[#EEF1F6] font-['Manrope']">
                {selectedPackage.title}
              </h2>
              <span className="text-xs font-bold text-[#8FB4E3]">
                {currentSection.japaneseTitle} ({currentSection.title})
              </span>
            </div>
          </div>

          {/* Timer Display */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border font-mono font-black text-sm sm:text-base transition-colors ${
              isWarningTime 
                ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 animate-pulse'
                : 'bg-[#16294A] border-[#8FB4E3]/30 text-[#8FB4E3]'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>

            <button
              onClick={() => setIsTimerPaused(!isTimerPaused)}
              className="p-2 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#8FB4E3] border border-[#8FB4E3]/25 transition-colors"
              title={isTimerPaused ? "Lanjutkan Timer" : "Jeda Timer"}
            >
              {isTimerPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-bold shadow-md transition-all"
            >
              Kumpulkan
            </button>
          </div>
        </div>

        {/* Section Tabs (if full exam mode) */}
        {examMode === 'full' && (
          <div className="flex items-center gap-2 p-1.5 bg-[#16294A] rounded-2xl border border-[#8FB4E3]/20 overflow-x-auto">
            {activeSections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => {
                  sound.playClick();
                  setCurrentSectionIdx(idx);
                  setCurrentQuestionIdx(0);
                }}
                className={`py-2 px-4 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  currentSectionIdx === idx
                    ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
              >
                {sec.title} ({sec.questions.length} Soal)
              </button>
            ))}
          </div>
        )}

        {/* Main Grid: Soal (Kiri) & Palet Navigasi (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          
          {/* KOLOM KIRI (3/4): SOAL */}
          <div className="lg:col-span-3 rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-6 sm:p-8 space-y-6 shadow-[0_4px_24px_rgba(12,27,51,0.5)]">
            
            {/* Mondai Title & Header Soal */}
            <div className="space-y-2 pb-4 border-b border-[#8FB4E3]/15">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#8FB4E3] uppercase tracking-wider">
                  Mondai {currentQuestion.mondaiNumber} · Soal #{currentQuestion.questionNumber}
                </span>

                <button
                  onClick={() => toggleFlagQuestion(currentQuestion.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                    isCurrentQuestionFlagged
                      ? 'bg-amber-400/20 border-amber-400/50 text-amber-300'
                      : 'bg-[#0C1B33]/60 border-[#8FB4E3]/20 text-[#8793A8] hover:text-[#EEF1F6]'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isCurrentQuestionFlagged ? 'fill-amber-400' : ''}`} />
                  <span>{isCurrentQuestionFlagged ? 'Ditandai Ragu' : 'Tandai Ragu-ragu'}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-[#8FB4E3] japanese-text leading-relaxed">
                {currentQuestion.mondaiTitle}
              </p>
            </div>

            {/* Jika ada Dokkai (Wacana Bacaan) */}
            {currentQuestion.passageText && (
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/30 space-y-2 shadow-inner">
                <span className="text-xs font-mono font-black text-[#8FB4E3] uppercase tracking-wider block mb-1">
                  [ Wacana Bacaan Dokkai ]
                </span>
                <p className="text-base sm:text-lg font-medium text-[#EEF1F6] japanese-text leading-relaxed whitespace-pre-line">
                  {currentQuestion.passageText}
                </p>
              </div>
            )}

            {/* Jika ada Choukai (Mendengarkan Audio) */}
            {currentQuestion.audioScript && (
              <div className="p-5 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/30 space-y-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black text-[#8FB4E3] uppercase tracking-wider flex items-center gap-1.5">
                    <Headphones className="w-4 h-4" />
                    Audio Percakapan Choukai
                  </span>
                  <span className="text-[11px] text-[#8793A8] italic">
                    Dengarkan audio sebelum menjawab
                  </span>
                </div>

                {currentQuestion.audioSituation && (
                  <p className="text-xs font-semibold text-[#CBD8EC] italic">
                    {currentQuestion.audioSituation}
                  </p>
                )}

                <button
                  onClick={() => playAudioQuestion(currentQuestion)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] text-xs sm:text-sm font-bold border border-[#8FB4E3]/40 shadow-md transition-all active:scale-95"
                >
                  <Volume2 className={`w-4 h-4 text-[#8FB4E3] ${isPlayingAudio ? 'animate-bounce' : ''}`} />
                  <span>{isPlayingAudio ? 'Memutar Audio Percakapan...' : 'Putar Audio Soal (Dengarkan)'}</span>
                </button>
              </div>
            )}

            {/* Teks Pertanyaan Utama */}
            <div className="space-y-3">
              <h3 
                className="text-xl sm:text-2xl font-bold text-[#EEF1F6] japanese-text leading-relaxed"
                dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }}
              />

              {/* INTERAKTIF: Soal Susun Bintang ★ */}
              {currentQuestion.isStarQuestion && currentQuestion.starSlots && (
                <div className="p-4 rounded-2xl bg-[#0C1B33]/70 border border-[#8FB4E3]/25 space-y-3">
                  <span className="text-xs font-bold text-[#8FB4E3] block">
                    Klik kata di bawah untuk menyusun urutan kalimat (posisi ke-3 adalah bintang ★):
                  </span>

                  {/* Slot Urutan */}
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3].map((slotIdx) => {
                      const wordAtSlot = (starArrangements[currentQuestion.id] || [])[slotIdx];
                      const isStarSlot = slotIdx === 2;
                      return (
                        <div
                          key={slotIdx}
                          className={`flex-1 py-2.5 px-2 rounded-xl text-center border text-xs sm:text-sm font-bold transition-all ${
                            isStarSlot 
                              ? 'border-amber-400 bg-amber-400/10 text-amber-300 ring-2 ring-amber-400/30'
                              : 'border-[#8FB4E3]/30 bg-[#16294A] text-[#EEF1F6]'
                          }`}
                        >
                          <span className="block text-[10px] text-[#8793A8] font-mono">
                            {isStarSlot ? '★ Posisi Bintang' : `Slot ${slotIdx + 1}`}
                          </span>
                          <span className="japanese-text font-bold block truncate">
                            {wordAtSlot || '___'}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pilihan Kata untuk Diklik */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentQuestion.starSlots.map((word, wIdx) => {
                      const isUsed = (starArrangements[currentQuestion.id] || []).includes(word);
                      return (
                        <button
                          key={wIdx}
                          onClick={() => handleStarChoiceClick(currentQuestion, word)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                            isUsed 
                              ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                              : 'bg-[#1F3760] hover:bg-[#274474] text-[#EEF1F6] border-[#8FB4E3]/30'
                          }`}
                        >
                          {word} {isUsed ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Pilihan Jawaban 1, 2, 3, 4 */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-[#8793A8] uppercase tracking-wider block">
                Pilihan Jawaban:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isSelected = currentChosenOption === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(currentQuestion.id, optIdx)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] border-[#8FB4E3] text-[#EEF1F6] shadow-[0_0_20px_rgba(143,180,227,0.3)] ring-2 ring-[#8FB4E3]/50 scale-[1.01]'
                          : 'bg-[#0C1B33]/60 hover:bg-[#0C1B33] border-[#8FB4E3]/20 text-[#CBD8EC] hover:border-[#8FB4E3]/40'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                        isSelected 
                          ? 'bg-[#8FB4E3] text-[#0C1B33]'
                          : 'bg-[#16294A] text-[#8FB4E3] border border-[#8FB4E3]/30'
                      }`}>
                        {optIdx + 1}
                      </span>
                      <span className="text-base sm:text-lg font-bold japanese-text leading-relaxed flex-1">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigasi Soal Bawah */}
            <div className="mt-8 pt-4 border-t border-[#8FB4E3]/20 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIdx === 0 && currentSectionIdx === 0}
                className="px-4 py-2.5 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] disabled:opacity-40 disabled:hover:bg-[#0C1B33] text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/20 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Sebelumnya</span>
              </button>

              <span className="text-xs font-mono font-bold text-[#8FB4E3]">
                {currentQuestionIdx + 1} / {allQuestionsInSection.length}
              </span>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] hover:brightness-110 text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/40 shadow-xs transition-all flex items-center gap-2"
              >
                <span>{currentQuestionIdx < allQuestionsInSection.length - 1 ? 'Berikutnya' : 'Selesai'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* KOLOM KANAN (1/4): PALET NOMOR SOAL */}
          <div className="lg:col-span-1 rounded-3xl bg-[#16294A] border border-[#8FB4E3]/25 p-5 space-y-4 shadow-[0_4px_24px_rgba(12,27,51,0.5)]">
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-[#EEF1F6] uppercase tracking-wider font-mono">
                Lembar Jawaban Soal
              </h3>
              <p className="text-[11px] text-[#8793A8]">
                {answeredCount} dari {currentSection.questions.length} soal terjawab
              </p>
            </div>

            {/* Indikator Status Warna */}
            <div className="flex flex-col gap-1.5 text-[10px] text-[#8793A8] font-medium pb-2 border-b border-[#8FB4E3]/15">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-[#8FB4E3] text-[#0C1B33] inline-block" />
                <span>Sudah Terjawab</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-amber-400 inline-block" />
                <span>Ditandai (Ragu-ragu)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-md bg-[#0C1B33] border border-[#8FB4E3]/30 inline-block" />
                <span>Belum Dijawab</span>
              </div>
            </div>

            {/* Matrix Palette Grid 1..N */}
            <div className="grid grid-cols-5 gap-2 max-h-[360px] overflow-y-auto pr-1">
              {currentSection.questions.map((q, idx) => {
                const isAnswered = userAnswers[q.id] !== undefined;
                const isFlagged = !!flaggedQuestions[q.id];
                const isCurrent = idx === currentQuestionIdx;

                let btnBg = 'bg-[#0C1B33] text-[#8793A8] border-[#8FB4E3]/20';
                if (isFlagged) {
                  btnBg = 'bg-amber-400/30 text-amber-200 border-amber-400 font-black';
                } else if (isAnswered) {
                  btnBg = 'bg-[#8FB4E3] text-[#0C1B33] border-[#8FB4E3] font-black shadow-xs';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      sound.playClick();
                      setCurrentQuestionIdx(idx);
                    }}
                    className={`h-9 rounded-xl border text-xs font-mono font-bold flex items-center justify-center transition-all ${btnBg} ${
                      isCurrent ? 'ring-2 ring-white scale-110 z-10' : 'hover:border-[#8FB4E3]'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Quick Submit Button */}
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-bold transition-all shadow-md mt-2"
            >
              Kumpulkan Ujian
            </button>
          </div>
        </div>

        {/* Modal Konfirmasi Submit */}
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="max-w-md w-full rounded-3xl bg-[#16294A] border border-[#8FB4E3]/40 p-6 sm:p-8 space-y-5 text-center shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#EEF1F6] font-['Manrope']">
                  Kumpulkan Lembar Jawaban?
                </h3>
                <p className="text-xs text-[#CBD8EC] mt-1.5 leading-relaxed">
                  Anda telah menjawab <span className="font-bold text-[#8FB4E3]">{answeredCount}</span> dari total <span className="font-bold text-[#EEF1F6]">{currentSection.questions.length}</span> soal. Apakah Anda yakin ingin menyelesaikan simulasi sekarang?
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#CBD8EC] text-xs font-bold border border-[#8FB4E3]/25 transition-colors"
                >
                  Kembali Cek Soal
                </button>
                <button
                  onClick={finishExam}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-bold shadow-md transition-all"
                >
                  Ya, Selesaikan
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // =========================================================================
  // VIEW 3: EXAM RESULTS (HASIL & SKOR RESMI KELULUSAN)
  // =========================================================================
  if (examState === 'results') {
    const res = calculateResults();

    return (
      <div className="space-y-8 text-left pb-16 max-w-4xl mx-auto animate-fade-in">
        
        {/* Result Header Hero */}
        <div className={`relative overflow-hidden rounded-3xl border p-8 sm:p-10 shadow-2xl text-center space-y-5 ${
          res.isOverallPassed 
            ? 'bg-gradient-to-br from-[#0C1B33] via-[#0F3025] to-[#16294A] border-emerald-500/40 shadow-emerald-500/10'
            : 'bg-gradient-to-br from-[#0C1B33] via-[#2D1A25] to-[#16294A] border-rose-500/40 shadow-rose-500/10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider border">
            {selectedPackage.title} · Hasil Resmi
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl font-black font-['Manrope'] tracking-tight">
              {res.isOverallPassed ? (
                <span className="text-emerald-400">合格 · LULUS</span>
              ) : (
                <span className="text-rose-400">不合格 · BELUM LULUS</span>
              )}
            </h1>
            <p className="text-sm sm:text-base text-[#CBD8EC] mt-2 max-w-lg mx-auto">
              {res.isOverallPassed
                ? 'Selamat! Anda telah memenuhi ambang batas total dan seluruh batas gugur seksi resmi.'
                : 'Jangan berkecil hati. Analisis pembahasan di bawah untuk memperkuat bagian yang masih kurang.'}
            </p>
          </div>

          {/* Nilai Utama */}
          <div className="flex justify-center items-center gap-6 pt-2">
            <div className="p-4 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/30 min-w-[140px]">
              <span className="text-[11px] font-bold text-[#8793A8] uppercase tracking-wider block">Total Skor Resmi</span>
              <span className="text-3xl sm:text-4xl font-black text-[#EEF1F6] font-mono">
                {res.scaledTotalScore} <span className="text-base text-[#8FB4E3]">/ {res.maxScore}</span>
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/30 min-w-[140px]">
              <span className="text-[11px] font-bold text-[#8793A8] uppercase tracking-wider block">Syarat Lulus</span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                ≥ {res.passingScore}
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown Skor per Seksi */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-[#EEF1F6] font-['Manrope']">
            Rincian Nilai per Seksi Ujian:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {res.sectionResults.map((secRes, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/20 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8FB4E3]">
                    {secRes.section.title}
                  </span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase border ${
                    secRes.passed
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  }`}>
                    {secRes.passed ? 'Lulus Seksi' : 'Di Bawah Batas'}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-[#EEF1F6] font-mono">
                    {secRes.score} <span className="text-xs text-[#8793A8]">/ {secRes.maxScore}</span>
                  </span>
                  <span className="text-xs font-semibold text-[#CBD8EC]">
                    {secRes.correct} dari {secRes.total} benar
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 w-full bg-[#0C1B33] rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${secRes.passed ? 'bg-emerald-400' : 'bg-rose-400'}`}
                    style={{ width: `${Math.min(100, Math.round((secRes.score / secRes.maxScore) * 100))}%` }}
                  />
                </div>
                <span className="text-[10px] text-[#8793A8] block">
                  Batas gugur seksi: ≥ {secRes.passingScore} Poin
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-[#8FB4E3]/20">
          <button
            onClick={() => setExamState('review')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] text-sm font-bold border border-[#8FB4E3]/40 shadow-md hover:brightness-110 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-[#8FB4E3]" />
            <span>Lihat Pembahasan Lengkap Semua Soal</span>
          </button>

          <button
            onClick={() => startExam(selectedPackage, examMode, selectedSectionIdx)}
            className="px-6 py-3 rounded-xl bg-[#16294A] hover:bg-[#1F3760] text-[#8FB4E3] hover:text-[#EEF1F6] text-sm font-bold border border-[#8FB4E3]/25 flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Simulasi Ini</span>
          </button>

          <button
            onClick={() => setExamState('selection')}
            className="px-6 py-3 rounded-xl bg-[#0C1B33] hover:bg-[#16294A] text-[#CBD8EC] text-sm font-bold border border-[#8FB4E3]/20"
          >
            Pilih Paket Ujian Lain
          </button>
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 4: ANSWER REVIEW (PEMBAHASAN DETAIL SOAL)
  // =========================================================================
  if (examState === 'review') {
    return (
      <div className="space-y-6 text-left pb-16 max-w-4xl mx-auto">
        
        {/* Top Review Bar */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[#16294A] border border-[#8FB4E3]/25">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg bg-[#0C1B33] text-xs font-black font-mono text-[#8FB4E3]">
              REVIEW
            </span>
            <h2 className="text-base font-black text-[#EEF1F6] font-['Manrope']">
              Pembahasan Lengkap: {selectedPackage.title}
            </h2>
          </div>

          <button
            onClick={() => setExamState('results')}
            className="px-4 py-2 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#EEF1F6] text-xs font-bold border border-[#8FB4E3]/25"
          >
            Kembali ke Nilai
          </button>
        </div>

        {/* List Soal & Pembahasan */}
        <div className="space-y-6">
          {activeSections.map((sec, sIdx) => (
            <div key={sec.id} className="space-y-4">
              <h3 className="text-lg font-black text-[#8FB4E3] font-['Manrope'] pb-2 border-b border-[#8FB4E3]/20">
                {sec.title} · {sec.japaneseTitle}
              </h3>

              <div className="space-y-4">
                {sec.questions.map((q, qIdx) => {
                  const userAnswerIdx = userAnswers[q.id];
                  const isCorrect = userAnswerIdx === q.correctAnswerIndex;
                  const isAnswered = userAnswerIdx !== undefined;

                  return (
                    <div
                      key={q.id}
                      className={`rounded-3xl border p-6 space-y-4 shadow-[0_4px_16px_rgba(12,27,51,0.4)] ${
                        isCorrect 
                          ? 'bg-[#16294A] border-emerald-500/30'
                          : 'bg-[#16294A] border-rose-500/30'
                      }`}
                    >
                      {/* Soal Meta */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#8FB4E3]">
                          Nomor #{q.questionNumber}
                        </span>

                        <span className={`px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 text-xs ${
                          isCorrect 
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Benar (+Skor)' : 'Salah'}
                        </span>
                      </div>

                      {/* Teks Soal */}
                      <div className="space-y-1">
                        <p 
                          className="text-lg font-bold text-[#EEF1F6] japanese-text leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: q.questionText }}
                        />
                        {q.indonesianTranslation && (
                          <p className="text-xs text-[#CBD8EC]">
                            Arti: {q.indonesianTranslation}
                          </p>
                        )}
                      </div>

                      {/* Opsi Jawaban */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isTheCorrectOne = oIdx === q.correctAnswerIndex;
                          const isTheUserChoice = oIdx === userAnswerIdx;

                          let style = 'bg-[#0C1B33]/60 border-[#8FB4E3]/15 text-[#8793A8]';
                          if (isTheCorrectOne) {
                            style = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-bold';
                          } else if (isTheUserChoice && !isCorrect) {
                            style = 'bg-rose-500/20 border-rose-500/50 text-rose-200 font-bold';
                          }

                          return (
                            <div 
                              key={oIdx}
                              className={`p-3 rounded-xl border text-xs sm:text-sm flex items-center justify-between ${style}`}
                            >
                              <span className="japanese-text font-bold">
                                {oIdx + 1}. {opt}
                              </span>
                              {isTheCorrectOne && (
                                <span className="text-[10px] font-black uppercase text-emerald-400">
                                  Kunci Jawaban
                                </span>
                              )}
                              {isTheUserChoice && !isCorrect && (
                                <span className="text-[10px] font-black uppercase text-rose-400">
                                  Jawaban Anda
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Penjelasan Detail */}
                      <div className="p-4 rounded-2xl bg-[#0C1B33]/80 border border-[#8FB4E3]/25 space-y-1 text-xs">
                        <span className="font-bold text-[#8FB4E3] uppercase tracking-wider block">
                          Pembahasan Edukatif:
                        </span>
                        <p className="text-sm text-[#CBD8EC] leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Back to Results */}
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExamState('results')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] text-sm font-bold border border-[#8FB4E3]/40 shadow-md"
          >
            Selesai Meninjau Pembahasan
          </button>
        </div>

      </div>
    );
  }

  return null;
};
