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
  Play,
  Check,
  Monitor,
  Printer,
  Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ExamPackage, ExamSection, ExamQuestion, ExamType } from '../types';
import { JLPT_EXAM_PACKAGES } from '../data/jlptExamData';
import { FuriganaText } from './FuriganaText';
import { speakJapanese, sound } from '../utils/audio';

interface JlptExamSectionProps {
  onBackToPractice?: () => void;
  initialPackageId?: string;
}

// Lingkaran opsi resmi ① ② ③ ④
const CIRCLED_NUMBERS = ['①', '②', '③', '④'];
const CBT_LETTERS = ['A', 'B', 'C', 'D'];

export const JlptExamSection: React.FC<JlptExamSectionProps> = ({ onBackToPractice, initialPackageId }) => {
  // Paket aktif
  const defaultPkg = (initialPackageId ? JLPT_EXAM_PACKAGES.find(p => p.id === initialPackageId) : null) || JLPT_EXAM_PACKAGES[0];
  const [selectedPackage, setSelectedPackage] = useState<ExamPackage>(defaultPkg);
  
  // State alur: 'selection' -> 'cover' -> 'running' -> 'results' -> 'review'
  const [examState, setExamState] = useState<'selection' | 'cover' | 'running' | 'results' | 'review'>('selection');

  // Mode ujian: 'full' atau 'section'
  const [examMode, setExamMode] = useState<'full' | 'section'>('full');
  const [selectedSectionIdx, setSelectedSectionIdx] = useState<number>(0);

  // Gaya antarmuka: 'paper' (Kertas Ujian & Mark Sheet 2B JLPT) atau 'cbt' (Prometric CBT JFT)
  const [uiTheme, setUiTheme] = useState<'paper' | 'cbt' | 'zenora'>(defaultPkg.id === 'JFT_BASIC_A2' ? 'cbt' : 'paper');

  // Sinkronisasi jika initialPackageId berubah
  useEffect(() => {
    if (initialPackageId) {
      const pkg = JLPT_EXAM_PACKAGES.find(p => p.id === initialPackageId);
      if (pkg) {
        setSelectedPackage(pkg);
        setUiTheme(pkg.id === 'JFT_BASIC_A2' ? 'cbt' : 'paper');
        setExamState('selection');
      }
    }
  }, [initialPackageId]);

  // Nomor pendaftaran & nama peserta (Otentik)
  const [examineeNumber] = useState<string>('24B-01928-10023');
  const [examineeName] = useState<string>('ZENORA CANDIDATE');

  // Seksi & Soal aktif
  const [currentSectionIdx, setCurrentSectionIdx] = useState<number>(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);

  // Jawaban: Record<questionId, selectedOptionIndex>
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  // Soal ditandai ragu-ragu: Record<questionId, boolean>
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Susunan soal bintang ★: Record<questionId, string[]>
  const [starArrangements, setStarArrangements] = useState<Record<string, string[]>>({});

  // Timer
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Audio Choukai
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Modal konfirmasi
  const [showConfirmSubmit, setShowConfirmSubmit] = useState<boolean>(false);
  const [showMarkSheetModal, setShowMarkSheetModal] = useState<boolean>(false);

  const activeSections: ExamSection[] = examMode === 'full' 
    ? selectedPackage.sections 
    : [selectedPackage.sections[selectedSectionIdx]];

  const currentSection: ExamSection = activeSections[currentSectionIdx] || activeSections[0];
  const currentQuestion: ExamQuestion = currentSection?.questions[currentQuestionIdx] || currentSection?.questions[0];

  // Inisialisasi: masuk ke lembar sampul resmi (cover)
  const openExamCover = (pkg: ExamPackage, mode: 'full' | 'section', secIdx: number = 0) => {
    setSelectedPackage(pkg);
    setExamMode(mode);
    setSelectedSectionIdx(secIdx);
    
    // Set tema default berdasarkan jenis ujian
    if (pkg.id === 'JFT_BASIC_A2') {
      setUiTheme('cbt');
    } else {
      setUiTheme('paper');
    }

    setExamState('cover');
    sound.playClick();
  };

  // Mulai ujian setelah membaca petunjuk cover
  const startExamFromCover = () => {
    setCurrentSectionIdx(0);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setFlaggedQuestions({});
    setStarArrangements({});
    setElapsedSeconds(0);
    setIsTimerPaused(false);

    const targetMinutes = examMode === 'full' 
      ? selectedPackage.totalTimeMinutes 
      : selectedPackage.sections[selectedSectionIdx].timeLimitMinutes;
    setTimeRemainingSeconds(targetMinutes * 60);

    setExamState('running');
    sound.playClick();
  };

  // Timer countdown
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
    alert('時間です！ (Waktu ujian telah habis). Lembar jawaban Anda telah dikumpulkan secara otomatis.');
    finishExam();
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSelectAnswer = (qId: string, optIdx: number) => {
    sound.playClick();
    setUserAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

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
      updated = current.filter(w => w !== word);
    } else {
      if (current.length < 4) {
        updated = [...current, word];
      } else {
        return;
      }
    }

    setStarArrangements(prev => ({ ...prev, [q.id]: updated }));

    // Di soal bintang JLPT resmi, slot ke-3 adalah posisi ★
    if (updated.length >= 3) {
      const starWord = updated[2];
      const optIndex = q.options.indexOf(starWord);
      if (optIndex !== -1) {
        setUserAnswers(prev => ({ ...prev, [q.id]: optIndex }));
      }
    }
  };

  // Putar Audio Choukai dengan Nada Chime JLPT Asli
  const playAudioQuestionWithChime = (q: ExamQuestion) => {
    if (!q.audioScript || isPlayingAudio) return;
    setIsPlayingAudio(true);
    
    // Putar lonceng chime 4 nada khas JLPT terlebih dahulu, lalu bacakan soal
    sound.playJlptChime(() => {
      speakJapanese(q.audioScript!);
      setTimeout(() => {
        setIsPlayingAudio(false);
      }, 5000);
    });
  };

  const handleNext = () => {
    sound.playClick();
    if (currentQuestionIdx < currentSection.questions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else if (currentSectionIdx < activeSections.length - 1) {
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

  const finishExam = () => {
    setShowConfirmSubmit(false);
    setExamState('results');
    sound.playFanfare();

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  // Hitung Skor & Status Kelulusan Resmi
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
  // VIEW 1: SELECTION MENU (KATALOG PAKET UJIAN)
  // =========================================================================
  if (examState === 'selection') {
    return (
      <div className="space-y-8 text-left pb-16">
        
        {/* Banner Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-[#3978D6]/25 shadow-[0_20px_60px_-15px_rgba(8,21,47,0.9),0_0_40px_rgba(57, 120, 214,0.12)] bg-gradient-to-br from-[var(--bg-sidebar)] via-[var(--bg-surface)] to-[var(--bg-elevated)] p-6 sm:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)]/80 border border-[#3978D6]/30 text-[#3978D6] text-xs font-black tracking-wider uppercase font-mono shadow-[0_0_12px_rgba(57,120,214,0.2)]">
                <ShieldCheck className="w-4 h-4 text-[#3978D6]" />
                Simulasi Ujian Otentik 1:1 Sesuai Lembar Asli
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight font-['Manrope'] flex items-center gap-3">
                <Award className="w-8 h-8 text-[#3978D6]" />
                Simulasi Resmi JLPT & JFT-Basic
              </h1>

              <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-2xl">
                Pengalaman ujian persis seperti aslinya: format buku soal resmi (問題冊子), lembar jawaban pensil 2B (マークシート), soal susun bintang ★, audio choukai dengan lonceng chime JLPT resmi, hingga antarmuka CBT Prometric resmi untuk JFT-Basic.
              </p>
            </div>

            {onBackToPractice && (
              <button
                onClick={onBackToPractice}
                className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 hover:bg-[var(--bg-surface)] text-[#3978D6] hover:text-[var(--text-primary)] border border-[#3978D6]/25 text-xs font-bold transition-all shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali ke Latihan Bab</span>
              </button>
            )}
          </div>
        </div>

        {/* Exam Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {JLPT_EXAM_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 hover:border-[#3978D6]/60 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(8,21,47,0.5)] group hover:-translate-y-1"
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
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#3978D6]">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.totalTimeMinutes} Menit</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope'] group-hover:text-[#3978D6] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-bold text-[#3978D6] mt-1 font-mono">
                    {pkg.subtitle}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mt-3 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Seksi Details */}
                <div className="space-y-2 pt-3 border-t border-[#3978D6]/15">
                  <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
                    Seksi Lembar Ujian:
                  </span>
                  <div className="space-y-1.5">
                    {pkg.sections.map((sec) => (
                      <div 
                        key={sec.id}
                        className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/15"
                      >
                        <span className="font-bold text-[var(--text-primary)] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3978D6]" />
                          {sec.title}
                        </span>
                        <span className="text-[#3978D6] font-mono text-[11px]">
                          {sec.timeLimitMinutes} mnt · {sec.questions.length} soal
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Syarat Kelulusan */}
                <div className="p-3 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/20 flex items-center justify-between text-xs">
                  <span className="text-[var(--text-muted)] font-medium">Syarat Kelulusan:</span>
                  <span className="font-bold text-emerald-400 font-mono">
                    Minimal {pkg.passingScore} / {pkg.maxScore} Poin
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-[#3978D6]/15 space-y-2.5">
                <button
                  onClick={() => openExamCover(pkg, 'full')}
                  className="w-full py-3.5 px-4 rounded-xl font-black text-sm text-[#08152F] bg-gradient-to-r from-[#F2F6FC] to-[#3978D6] hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <FileText className="w-4 h-4" />
                  <span>Buka Lembar Ujian Resmi ({pkg.totalTimeMinutes} Menit)</span>
                </button>

                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  {pkg.sections.map((sec, sIdx) => (
                    <button
                      key={sec.id}
                      onClick={() => openExamCover(pkg, 'section', sIdx)}
                      className="py-1.5 px-2 rounded-lg bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[11px] font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20 transition-colors truncate text-center"
                    >
                      {sec.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 2: AUTHENTIC TEST BOOKLET COVER (SAMPUL RESMI SEBELUM UJIAN DIMULAI)
  // =========================================================================
  if (examState === 'cover') {
    const isJft = selectedPackage.id === 'JFT_BASIC_A2';

    return (
      <div className="max-w-3xl mx-auto space-y-6 text-left pb-16 animate-fade-in">
        
        {/* Back button */}
        <button
          onClick={() => setExamState('selection')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold border border-[#3978D6]/25 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
          <span>Kembali ke Pilihan Paket</span>
        </button>

        {/* Sampul Ujian Otentik (Kertas Booklet JLPT / CBT Cover) */}
        <div className={`p-8 sm:p-12 rounded-3xl border-4 shadow-2xl transition-all ${
          uiTheme === 'paper' 
            ? 'bg-[#F9F7F1] text-[#1E1E1E] border-[#2A2A2A]' 
            : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[#3978D6]/40'
        }`}>
          
          {/* Header Lembaga Resmi */}
          <div className="text-center space-y-2 pb-6 border-b-2 border-current">
            <span className="text-xs font-black tracking-widest uppercase font-mono block">
              {isJft 
                ? 'THE JAPAN FOUNDATION · PROMETRIC TESTING SYSTEM'
                : '独立行政法人 国際交流基金 / 公益財団法人 日本国際教育支援協会'}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black font-['Noto_Serif_JP',serif] tracking-tight">
              {isJft 
                ? 'JFT-Basic 国際交流基金日本語基礎テスト'
                : '日本語能力試験 · JAPANESE-LANGUAGE PROFICIENCY TEST'}
            </h1>
            <div className="inline-block px-4 py-1 rounded-md border-2 border-current font-mono font-black text-lg sm:text-xl mt-1">
              LEVEL {selectedPackage.level} · {examMode === 'full' ? '全セクション (FULL EXAM)' : activeSections[0].japaneseTitle}
            </div>
          </div>

          {/* Kotak Identitas Peserta Resmi */}
          <div className="my-6 p-5 rounded-xl border-2 border-current space-y-3 font-mono">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-current/30 pb-2">
              <span className="text-xs font-bold">受験番号 (REGISTRATION NO.):</span>
              <span className="text-base font-black tracking-widest bg-black/5 dark:bg-white/10 px-3 py-1 rounded border border-current">
                {examineeNumber}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold">氏名 (EXAMINEE NAME):</span>
              <span className="text-base font-black tracking-wider uppercase">
                {examineeName}
              </span>
            </div>
          </div>

          {/* 受験上の注意 (Petunjuk Resmi Peserta) */}
          <div className="space-y-3 text-xs leading-relaxed">
            <h3 className="font-black text-sm uppercase tracking-wider border-b border-current/30 pb-1">
              受験上の注意 (Petunjuk Penting Pelaksanaan Ujian):
            </h3>
            <ol className="list-decimal list-inside space-y-2 font-medium">
              <li>
                <strong>試験が 始まるまで、問題用紙を めくってはいけません。</strong>
                <span className="block pl-5 text-[11px] opacity-80">
                  (Jangan membuka halaman soal sebelum tombol "Mulai Ujian" di bawah ditekan).
                </span>
              </li>
              <li>
                <strong>解答用紙（マークシート）には、えんぴつで 濃く マークして ください。</strong>
                <span className="block pl-5 text-[11px] opacity-80">
                  (Gunakan pensil untuk menghitamkan bulatan jawaban pada lembar jawaban マークシート).
                </span>
              </li>
              <li>
                <strong>試験時間は {examMode === 'full' ? selectedPackage.totalTimeMinutes : activeSections[0].timeLimitMinutes} 分です。</strong>
                <span className="block pl-5 text-[11px] opacity-80">
                  (Durasi ujian resmi: {examMode === 'full' ? selectedPackage.totalTimeMinutes : activeSections[0].timeLimitMinutes} menit. Waktu akan dihitung mundur secara otomatis).
                </span>
              </li>
              <li>
                <strong>聴解（リスニング）では、チャイム音の あとに 音声が 流れます。</strong>
                <span className="block pl-5 text-[11px] opacity-80">
                  (Pada seksi mendengar, audio percakapan didahului bunyi lonceng chime resmi JLPT).
                </span>
              </li>
            </ol>
          </div>

          {/* Theme switcher toggle */}
          <div className="mt-8 pt-4 border-t border-current/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-bold">Pilih Tampilan Simulasi:</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setUiTheme('paper')}
                className={`px-3 py-1.5 rounded-lg border font-bold flex items-center gap-1.5 ${
                  uiTheme === 'paper' 
                    ? 'bg-black text-[var(--text-primary)] border-black' 
                    : 'bg-white/80 text-black border-black/30'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Lembar Kertas JLPT</span>
              </button>
              <button
                onClick={() => setUiTheme('cbt')}
                className={`px-3 py-1.5 rounded-lg border font-bold flex items-center gap-1.5 ${
                  uiTheme === 'cbt' 
                    ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border-[#3978D6]' 
                    : 'bg-white/80 text-black border-black/30'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Prometric CBT</span>
              </button>
            </div>
          </div>

          {/* Tombol Mulai */}
          <div className="mt-8 pt-6 border-t-2 border-current text-center">
            <button
              onClick={startExamFromCover}
              className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-base text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:brightness-110 shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-3 mx-auto"
            >
              <Check className="w-5 h-5" />
              <span>試験を始める · MULAI MENGERJAKAN UJIAN</span>
            </button>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 3: RUNNING EXAM (TAMPILAN LEMBAR SOAL & LEMBAR JAWABAN PERSIS ASLINYA)
  // =========================================================================
  if (examState === 'running') {
    const isWarningTime = timeRemainingSeconds <= 300 && timeRemainingSeconds > 0;
    const answeredCount = Object.keys(userAnswers).length;
    const allQuestionsInSection = currentSection.questions;
    const isCurrentQuestionFlagged = !!flaggedQuestions[currentQuestion.id];
    const currentChosenOption = userAnswers[currentQuestion.id];

    // Cek apakah soal ini adalah soal pertama dalam Mondai untuk menampilkan contoh （れい）
    const isFirstQuestionInMondai = currentQuestionIdx === 0 || 
      allQuestionsInSection[currentQuestionIdx - 1]?.mondaiNumber !== currentQuestion.mondaiNumber;

    return (
      <div className="space-y-6 text-left pb-16 max-w-6xl mx-auto animate-fade-in">
        
        {/* Top Control Bar: CBT / Paper Header */}
        <div className={`p-4 rounded-2xl border shadow-xl flex flex-wrap items-center justify-between gap-4 transition-all ${
          uiTheme === 'paper'
            ? 'bg-[#F9F7F1] text-[#1E1E1E] border-[#2A2A2A]/40'
            : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[#3978D6]/30'
        }`}>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-black border uppercase">
              {selectedPackage.level} · {currentSection.title}
            </span>
            <div className="hidden sm:block">
              <span className="text-xs font-bold block">
                受験番号: {examineeNumber}
              </span>
              <span className="text-[11px] opacity-75">
                {currentSection.japaneseTitle}
              </span>
            </div>
          </div>

          {/* Countdown Timer Resmi */}
          <div className="flex items-center gap-2.5">
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-xl border font-mono font-black text-base shadow-inner ${
              isWarningTime 
                ? 'bg-rose-500/20 border-rose-500 text-rose-600 animate-pulse'
                : uiTheme === 'paper' 
                  ? 'bg-white border-[#2A2A2A]/40 text-[#1E1E1E]' 
                  : 'bg-[var(--bg-sidebar)] border-[#3978D6]/30 text-[#3978D6]'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTime(timeRemainingSeconds)}</span>
            </div>

            <button
              onClick={() => setIsTimerPaused(!isTimerPaused)}
              className="p-2 rounded-xl border transition-colors bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
              title={isTimerPaused ? "Lanjutkan" : "Jeda"}
            >
              {isTimerPaused ? <Play className="w-4 h-4 text-emerald-500" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* Tombol Mark Sheet (OMR) toggle di mobile */}
            <button
              onClick={() => setShowMarkSheetModal(!showMarkSheetModal)}
              className="lg:hidden px-3 py-1.5 rounded-xl border font-mono text-xs font-bold bg-amber-400/20 text-amber-700 dark:text-amber-300 border-amber-400/40"
            >
              マークシート
            </button>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-bold shadow-md transition-all"
            >
              Kumpulkan
            </button>
          </div>
        </div>

        {/* Layout Grid: Lembar Soal (Kiri) & Lembar Jawaban マークシート (Kanan) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* KOLOM KIRI (8 Kolom): LEMBAR SOAL UJIAN ASLI */}
          <div className={`lg:col-span-8 rounded-3xl border-2 p-6 sm:p-9 space-y-6 shadow-2xl transition-all ${
            uiTheme === 'paper'
              ? 'bg-[#FCFAF5] text-[#1E1E1E] border-[#2A2A2A]/40'
              : 'bg-[var(--bg-surface)] text-[var(--text-primary)] border-[#3978D6]/30'
          }`}>
            
            {/* Header Mondai */}
            <div className="space-y-3 pb-4 border-b-2 border-current/20">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="uppercase tracking-widest">
                  {currentSection.japaneseTitle} · 問題 {currentQuestion.mondaiNumber}
                </span>

                <button
                  onClick={() => toggleFlagQuestion(currentQuestion.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all border ${
                    isCurrentQuestionFlagged
                      ? 'bg-amber-400/20 border-amber-400 text-amber-600 dark:text-amber-300'
                      : 'border-current/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isCurrentQuestionFlagged ? 'fill-current' : ''}`} />
                  <span>{isCurrentQuestionFlagged ? '後で確認 (Ditandai)' : '後で確認 (Tandai)'}</span>
                </button>
              </div>

              {/* Teks Instruksi Soal Resmi */}
              <p className="text-sm sm:text-base font-bold japanese-text leading-relaxed">
                {currentQuestion.mondaiTitle}
              </p>

              {/* CONTOH SOAL RESMI （れい） PADA SETIAP AWAL MONDAI */}
              {isFirstQuestionInMondai && (
                <div className="p-4 rounded-2xl border border-dashed border-current/30 bg-black/[0.02] dark:bg-white/[0.02] space-y-2 text-xs">
                  <span className="font-black font-mono px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 inline-block">
                    （れい） Contoh Soal Resmi
                  </span>
                  <p className="font-bold japanese-text text-sm">
                    きのう、<u>友だち</u>に 会いました。
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono font-bold">
                    <span>① ともだち</span>
                    <span>② きょうだい</span>
                    <span>③ かぞく</span>
                    <span>④ せんせい</span>
                  </div>
                  <div className="text-[11px] opacity-80 pt-1 border-t border-current/10">
                    正しい 答えは ①ですから、解答用紙の ①を 黒く マークします。
                    <span className="inline-flex items-center gap-1 ml-2 font-mono font-black">
                      [れい] ● ② ③ ④
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Dokkai / Wacana Bacaan Resmi */}
            {currentQuestion.passageText && (
              <div className="p-6 rounded-2xl border-2 border-current/30 bg-white/60 dark:bg-[var(--bg-sidebar)]/80 space-y-2 shadow-inner">
                <span className="text-xs font-mono font-black uppercase tracking-wider block mb-1">
                  【 読解本文 · TEKS WACANA 】
                </span>
                <p className="text-base sm:text-lg font-medium japanese-text leading-loose whitespace-pre-line">
                  {currentQuestion.passageText}
                </p>
              </div>
            )}

            {/* Choukai / Audio Mendengarkan dengan Chime Lonceng */}
            {currentQuestion.audioScript && (
              <div className="p-5 rounded-2xl border-2 border-current/30 bg-white/60 dark:bg-[var(--bg-sidebar)]/80 space-y-3 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Headphones className="w-4 h-4" />
                    聴解音声 · AUDIO PERCAKAPAN
                  </span>
                  <span className="text-[11px] opacity-75 italic">
                    Didahului bunyi lonceng chime JLPT resmi
                  </span>
                </div>

                {currentQuestion.audioSituation && (
                  <p className="text-xs font-semibold italic opacity-90">
                    {currentQuestion.audioSituation}
                  </p>
                )}

                <button
                  onClick={() => playAudioQuestionWithChime(currentQuestion)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'animate-bounce text-[#3978D6]' : ''}`} />
                  <span>{isPlayingAudio ? 'Memutar Audio Percakapan...' : 'Putar Audio Soal (Dengarkan Chime)'}</span>
                </button>
              </div>
            )}

            {/* Pertanyaan Nomor Soal */}
            <div className="space-y-4 pt-2">
              <div className="flex items-baseline gap-2">
                <span className="font-mono font-black text-lg sm:text-xl">
                  問{currentQuestion.questionNumber}
                </span>
                <h3 
                  className="text-xl sm:text-2xl font-bold japanese-text leading-relaxed flex-1"
                  dangerouslySetInnerHTML={{ __html: currentQuestion.questionText }}
                />
              </div>

              {/* Soal Susun Bintang Interaktif ★ */}
              {currentQuestion.isStarQuestion && currentQuestion.starSlots && (
                <div className="p-4 rounded-2xl border-2 border-dashed border-current/40 bg-black/[0.02] dark:bg-white/[0.02] space-y-3">
                  <span className="text-xs font-bold block">
                    Susun 4 kata berikut (posisi ke-3 bertanda ★ adalah jawaban soal):
                  </span>

                  {/* 4 Slot Kalimat */}
                  <div className="flex items-center gap-2">
                    {[0, 1, 2, 3].map((slotIdx) => {
                      const wordAtSlot = (starArrangements[currentQuestion.id] || [])[slotIdx];
                      const isStar = slotIdx === 2;
                      return (
                        <div
                          key={slotIdx}
                          className={`flex-1 py-3 px-2 rounded-xl text-center border-2 text-xs sm:text-sm font-bold transition-all ${
                            isStar
                              ? 'border-amber-400 bg-amber-400/20 text-amber-700 dark:text-amber-300 ring-2 ring-amber-400/40'
                              : 'border-current/30 bg-white/50 dark:bg-white/5'
                          }`}
                        >
                          <span className="block text-[10px] font-mono opacity-70">
                            {isStar ? '★ (Bintang)' : `[${slotIdx + 1}]`}
                          </span>
                          <span className="japanese-text font-bold block truncate mt-0.5">
                            {wordAtSlot || '＿＿'}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Pilihan Kata Bintang */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentQuestion.starSlots.map((word, wIdx) => {
                      const isUsed = (starArrangements[currentQuestion.id] || []).includes(word);
                      return (
                        <button
                          key={wIdx}
                          onClick={() => handleStarChoiceClick(currentQuestion, word)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                            isUsed 
                              ? 'bg-emerald-500/20 border-emerald-500 text-emerald-700 dark:text-emerald-300'
                              : 'bg-white/80 dark:bg-[var(--bg-elevated)] border-current/30 hover:border-current'
                          }`}
                        >
                          {word} {isUsed ? '✓' : '+'}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Pilihan Ganda Resmi ① ② ③ ④ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentQuestion.options.map((opt, optIdx) => {
                  const isSelected = currentChosenOption === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(currentQuestion.id, optIdx)}
                      className={`p-4 rounded-2xl text-left border-2 transition-all flex items-start gap-3 ${
                        isSelected
                          ? 'border-current bg-black/10 dark:bg-white/10 ring-2 ring-current font-black scale-[1.01]'
                          : 'border-current/20 hover:border-current/50 bg-black/[0.01] dark:bg-white/[0.02]'
                      }`}
                    >
                      <span className="w-7 h-7 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 font-mono border border-current">
                        {uiTheme === 'cbt' ? CBT_LETTERS[optIdx] : CIRCLED_NUMBERS[optIdx]}
                      </span>
                      <span className="text-base sm:text-lg font-bold japanese-text leading-relaxed flex-1">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigasi Bawah */}
            <div className="mt-8 pt-4 border-t-2 border-current/20 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIdx === 0 && currentSectionIdx === 0}
                className="px-4 py-2.5 rounded-xl border border-current/30 hover:border-current disabled:opacity-30 text-xs font-bold transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>前の問題 (Sebelumnya)</span>
              </button>

              <span className="text-xs font-mono font-bold">
                問 {currentQuestionIdx + 1} / {allQuestionsInSection.length}
              </span>

              <button
                onClick={handleNext}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-md hover:brightness-110 transition-all flex items-center gap-2"
              >
                <span>{currentQuestionIdx < allQuestionsInSection.length - 1 ? '次の問題 (Berikutnya)' : '終了 (Kumpulkan)'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* KOLOM KANAN (4 Kolom): LEMBAR JAWABAN マークシート (OPTICAL MARK SHEET) */}
          <div className="hidden lg:block lg:col-span-4 rounded-3xl border-2 border-dashed border-[#2A2A2A]/40 dark:border-[#3978D6]/30 bg-[#F4EFE6] dark:bg-[var(--bg-surface)] p-5 space-y-4 shadow-xl text-[#1E1E1E] dark:text-[var(--text-primary)]">
            
            {/* Header Lembar Jawaban */}
            <div className="text-center pb-3 border-b-2 border-current/30 space-y-1">
              <span className="text-[10px] font-black uppercase font-mono tracking-widest block opacity-75">
                OPTICAL MARK READER SHEET
              </span>
              <h3 className="font-['Noto_Serif_JP',serif] font-black text-sm tracking-wider">
                解答用紙（マークシート）
              </h3>
              <p className="text-[10px] opacity-70">
                Hitamkan bulatan pensil 2B untuk memilih jawaban
              </p>
            </div>

            {/* Petunjuk Pengisian Pensil 2B */}
            <div className="p-2.5 rounded-xl border border-current/20 bg-black/5 dark:bg-white/5 flex items-center justify-between text-[11px] font-mono">
              <span>マーク例 (Contoh):</span>
              <span className="font-bold flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-[#1E1E1E] dark:bg-[#F2F6FC] inline-block shadow-sm" /> 良い (Benar)
                <span className="w-3.5 h-3.5 rounded-full border border-current inline-block ml-2" /> 悪い (Salah)
              </span>
            </div>

            {/* Kisi Mark Sheet 1..N */}
            <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
              {allQuestionsInSection.map((q, idx) => {
                const chosenOpt = userAnswers[q.id];
                const isFlagged = !!flaggedQuestions[q.id];
                const isCurrent = idx === currentQuestionIdx;

                return (
                  <div
                    key={q.id}
                    onClick={() => {
                      sound.playClick();
                      setCurrentQuestionIdx(idx);
                    }}
                    className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isCurrent 
                        ? 'border-current bg-black/10 dark:bg-white/10 ring-2 ring-current font-black' 
                        : 'border-current/20 hover:border-current/50'
                    }`}
                  >
                    <span className="text-xs font-mono font-bold w-12 flex items-center gap-1">
                      問{q.questionNumber}
                      {isFlagged && <span className="text-amber-500 font-black">★</span>}
                    </span>

                    {/* 4 Bulatan Pensil 2B (1) (2) (3) (4) */}
                    <div className="flex items-center gap-2">
                      {[0, 1, 2, 3].map((numIdx) => {
                        const isShaded = chosenOpt === numIdx;
                        return (
                          <button
                            key={numIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectAnswer(q.id, numIdx);
                            }}
                            className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center transition-all ${
                              isShaded
                                ? 'bg-[#1E1E1E] dark:bg-[#F2F6FC] text-[#F4EFE6] dark:text-[#08152F] shadow-inner font-black scale-105'
                                : 'border border-current hover:bg-black/10 dark:hover:bg-white/10 opacity-75'
                            }`}
                            title={`Jawaban ${numIdx + 1}`}
                          >
                            {numIdx + 1}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Submit */}
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all mt-2"
            >
              解答用紙を提出する · Kumpulkan Ujian
            </button>
          </div>
        </div>

        {/* Modal Lembar Jawaban untuk Layar Smartphone */}
        {showMarkSheetModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in lg:hidden">
            <div className="max-w-sm w-full rounded-3xl bg-[#F4EFE6] dark:bg-[var(--bg-surface)] text-[#1E1E1E] dark:text-[var(--text-primary)] p-6 space-y-4 shadow-2xl border-2 border-current">
              <div className="flex items-center justify-between pb-2 border-b border-current/20">
                <h3 className="font-black text-sm font-['Noto_Serif_JP',serif]">
                  解答用紙（マークシート）
                </h3>
                <button
                  onClick={() => setShowMarkSheetModal(false)}
                  className="p-1 text-xs font-bold"
                >
                  ✕ Tutup
                </button>
              </div>

              <div className="space-y-2 max-h-[350px] overflow-y-auto">
                {allQuestionsInSection.map((q, idx) => {
                  const chosenOpt = userAnswers[q.id];
                  return (
                    <div key={q.id} className="flex items-center justify-between p-2 rounded-xl border border-current/20">
                      <span className="text-xs font-mono font-bold">問{q.questionNumber}</span>
                      <div className="flex items-center gap-2">
                        {[0, 1, 2, 3].map((numIdx) => (
                          <button
                            key={numIdx}
                            onClick={() => handleSelectAnswer(q.id, numIdx)}
                            className={`w-7 h-7 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                              chosenOpt === numIdx 
                                ? 'bg-current text-[var(--text-primary)] dark:text-black font-black' 
                                : 'border border-current'
                            }`}
                          >
                            {numIdx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={() => setShowMarkSheetModal(false)}
                className="w-full py-2.5 rounded-xl bg-black dark:bg-white text-[var(--text-primary)] dark:text-black font-bold text-xs"
              >
                Selesai Mengisi
              </button>
            </div>
          </div>
        )}

        {/* Modal Konfirmasi Pengumpulan */}
        {showConfirmSubmit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="max-w-md w-full rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/40 p-6 sm:p-8 space-y-5 text-center shadow-2xl text-[var(--text-primary)]">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-black font-['Manrope']">
                  試験を終了しますか？ (Kumpulkan Ujian?)
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                  Anda telah mengisi <span className="font-bold text-[#3978D6]">{answeredCount}</span> dari <span className="font-bold text-[var(--text-primary)]">{currentSection.questions.length}</span> soal pada seksi ini. Lembar jawaban akan dievaluasi dengan sistem penilaian resmi JLPT / JFT.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowConfirmSubmit(false)}
                  className="flex-1 py-2.5 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] text-xs font-bold border border-[#3978D6]/25 transition-colors"
                >
                  Kembali Cek Soal
                </button>
                <button
                  onClick={finishExam}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-110 text-white text-xs font-bold shadow-md transition-all"
                >
                  Kumpulkan Sekarang
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

  // =========================================================================
  // VIEW 4: OFFICIAL CERTIFICATE & SCORE REPORT (合否結果通知書 RESMI)
  // =========================================================================
  if (examState === 'results') {
    const res = calculateResults();

    return (
      <div className="space-y-8 text-left pb-16 max-w-4xl mx-auto animate-fade-in">
        
        {/* Lembar Sertifikat Resmi (合否結果通知書 / Score Report) */}
        <div className="relative overflow-hidden rounded-3xl border-4 border-[#2A2A2A] dark:border-[#3978D6]/40 bg-[#FCFAF5] dark:bg-[var(--bg-surface)] text-[#1E1E1E] dark:text-[var(--text-primary)] p-8 sm:p-12 shadow-2xl">
          
          {/* Header Sertifikat */}
          <div className="text-center space-y-2 pb-6 border-b-2 border-current">
            <span className="text-xs font-black uppercase font-mono tracking-widest opacity-80 block">
              JAPANESE-LANGUAGE PROFICIENCY TEST · CERTIFICATE OF RESULTS AND SCORES
            </span>
            <h1 className="text-2xl sm:text-4xl font-black font-['Noto_Serif_JP',serif] tracking-tight">
              日本語能力試験 · 合否結果通知書
            </h1>
            <p className="text-xs font-mono font-bold opacity-75">
              OFFICIAL EXAMINATION SCORE REPORT · ZENORA NIHONGO PLATFORM
            </p>
          </div>

          {/* Data Peserta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-xl border border-current/20 text-xs font-mono">
            <div>
              <span className="opacity-70 block">氏名 (EXAMINEE NAME):</span>
              <span className="font-black text-sm uppercase">{examineeName}</span>
            </div>
            <div>
              <span className="opacity-70 block">受験番号 (REGISTRATION NO.):</span>
              <span className="font-black text-sm">{examineeNumber}</span>
            </div>
            <div>
              <span className="opacity-70 block">受験レベル (LEVEL):</span>
              <span className="font-black text-sm">{selectedPackage.level}</span>
            </div>
            <div>
              <span className="opacity-70 block">試験区分 (EXAM TYPE):</span>
              <span className="font-black text-sm">{selectedPackage.title}</span>
            </div>
          </div>

          {/* Stempel Cap Hanko Kelulusan Resmi (Hanko Merah Khas Jepang) */}
          <div className="my-8 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border-2 border-current/30 bg-black/[0.02] dark:bg-white/[0.02]">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono font-bold opacity-75 block">
                総合合否判定 (OFFICIAL RESULT DECISION):
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-['Noto_Serif_JP',serif] tracking-tight">
                {res.isOverallPassed ? (
                  <span className="text-emerald-600 dark:text-emerald-400">合 格 (PASSED)</span>
                ) : (
                  <span className="text-rose-600 dark:text-rose-400">不 合 格 (FAILED)</span>
                )}
              </h2>
              <p className="text-xs opacity-80 mt-1 max-w-md">
                {res.isOverallPassed
                  ? 'Selamat! Anda telah memenuhi ambang batas total skor dan seluruh batas gugur seksi resmi.'
                  : 'Skor Anda belum mencapai ambang batas kelulusan resmi. Evaluasi pembahasan soal untuk memperkuat pemahaman.'}
              </p>
            </div>

            {/* Hanko Merah Otentik */}
            <div className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center p-2 font-['Noto_Serif_JP',serif] font-black transform -rotate-12 select-none shadow-md ${
              res.isOverallPassed 
                ? 'border-emerald-600 text-emerald-600 dark:border-emerald-400 dark:text-emerald-400' 
                : 'border-rose-600 text-rose-600 dark:border-rose-400 dark:text-rose-400'
            }`}>
              <span className="text-[10px] tracking-widest border-b border-current pb-0.5">日本能力試験</span>
              <span className="text-xl my-0.5">{res.isOverallPassed ? '合 格' : '不合格'}</span>
              <span className="text-[9px] tracking-wider border-t border-current pt-0.5">検定判定印</span>
            </div>
          </div>

          {/* Tabel Nilai Resmi */}
          <div className="space-y-3 font-mono">
            <span className="text-xs font-bold block uppercase tracking-wider">
              得点等内訳 (Detailed Section Scores):
            </span>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-2 border-current">
                <thead>
                  <tr className="border-b-2 border-current bg-black/5 dark:bg-white/5 font-black">
                    <th className="p-3">得点区分 (Section)</th>
                    <th className="p-3 text-center">得点 (Score)</th>
                    <th className="p-3 text-center">配点 (Max)</th>
                    <th className="p-3 text-center">基準点 (Pass Mark)</th>
                    <th className="p-3 text-center">判定 (Result)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-current/20">
                  {res.sectionResults.map((s, idx) => (
                    <tr key={idx}>
                      <td className="p-3 font-bold">{s.section.title} ({s.section.japaneseTitle})</td>
                      <td className="p-3 text-center font-black text-sm">{s.score}</td>
                      <td className="p-3 text-center opacity-70">{s.maxScore}</td>
                      <td className="p-3 text-center opacity-70">≥ {s.passingScore}</td>
                      <td className="p-3 text-center font-bold">
                        {s.passed ? (
                          <span className="text-emerald-600 dark:text-emerald-400">合格</span>
                        ) : (
                          <span className="text-rose-600 dark:text-rose-400">基準未満</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-current font-black text-sm bg-black/5 dark:bg-white/5">
                    <td className="p-3">総合得点 (TOTAL SCORE)</td>
                    <td className="p-3 text-center text-base">{res.scaledTotalScore}</td>
                    <td className="p-3 text-center opacity-70">{res.maxScore}</td>
                    <td className="p-3 text-center opacity-70">≥ {res.passingScore}</td>
                    <td className="p-3 text-center">
                      {res.isOverallPassed ? (
                        <span className="text-emerald-600 dark:text-emerald-400">合格</span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400">不合格</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 pt-6 border-t-2 border-current/30 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setExamState('review')}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-110 flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#3978D6]" />
              <span>Lihat Pembahasan Lengkap Semua Soal</span>
            </button>

            <button
              onClick={() => startExamFromCover()}
              className="px-6 py-3 rounded-xl border border-current hover:bg-black/10 dark:hover:bg-white/10 text-xs sm:text-sm font-bold flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Ujian Ini</span>
            </button>

            <button
              onClick={() => setExamState('selection')}
              className="px-6 py-3 rounded-xl border border-current/30 hover:border-current text-xs sm:text-sm font-bold"
            >
              Pilih Paket Ujian Lain
            </button>
          </div>

        </div>

      </div>
    );
  }

  // =========================================================================
  // VIEW 5: ANSWER REVIEW (PEMBAHASAN EDUKATIF SOAL)
  // =========================================================================
  if (examState === 'review') {
    return (
      <div className="space-y-6 text-left pb-16 max-w-4xl mx-auto animate-fade-in">
        
        {/* Top Review Bar */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--bg-surface)] border border-[#3978D6]/25 text-[var(--text-primary)]">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-sidebar)] text-xs font-black font-mono text-[#3978D6]">
              REVIEW
            </span>
            <h2 className="text-base font-black font-['Manrope']">
              Pembahasan Edukatif: {selectedPackage.title}
            </h2>
          </div>

          <button
            onClick={() => setExamState('results')}
            className="px-4 py-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-xs font-bold border border-[#3978D6]/25"
          >
            Kembali ke Nilai
          </button>
        </div>

        {/* List Soal */}
        <div className="space-y-6">
          {activeSections.map((sec) => (
            <div key={sec.id} className="space-y-4">
              <h3 className="text-lg font-black text-[#3978D6] font-['Manrope'] pb-2 border-b border-[#3978D6]/20">
                {sec.title} · {sec.japaneseTitle}
              </h3>

              <div className="space-y-4">
                {sec.questions.map((q) => {
                  const userAnswerIdx = userAnswers[q.id];
                  const isCorrect = userAnswerIdx === q.correctAnswerIndex;

                  return (
                    <div
                      key={q.id}
                      className={`rounded-3xl border p-6 space-y-4 shadow-[0_4px_16px_rgba(8,21,47,0.4)] ${
                        isCorrect 
                          ? 'bg-[var(--bg-surface)] border-emerald-500/30'
                          : 'bg-[var(--bg-surface)] border-rose-500/30'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#3978D6]">
                          Mondai {q.mondaiNumber} · Soal #{q.questionNumber}
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

                      <div className="space-y-1">
                        <p 
                          className="text-lg font-bold text-[var(--text-primary)] japanese-text leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: q.questionText }}
                        />
                        {q.indonesianTranslation && (
                          <p className="text-xs text-[var(--text-secondary)]">
                            Arti: {q.indonesianTranslation}
                          </p>
                        )}
                      </div>

                      {/* Opsi */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {q.options.map((opt, oIdx) => {
                          const isTheCorrectOne = oIdx === q.correctAnswerIndex;
                          const isTheUserChoice = oIdx === userAnswerIdx;

                          let style = 'bg-[var(--bg-sidebar)]/60 border-[#3978D6]/15 text-[var(--text-muted)]';
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
                                {CIRCLED_NUMBERS[oIdx]} {opt}
                              </span>
                              {isTheCorrectOne && (
                                <span className="text-[10px] font-black uppercase text-emerald-400">
                                  Kunci Benar
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

                      {/* Penjelasan */}
                      <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 space-y-1 text-xs">
                        <span className="font-bold text-[#3978D6] uppercase tracking-wider block">
                          Pembahasan Edukatif:
                        </span>
                        <div className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          <FuriganaText text={q.explanation} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExamState('results')}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] text-sm font-bold border border-[#3978D6]/40 shadow-md"
          >
            Selesai Meninjau Pembahasan
          </button>
        </div>

      </div>
    );
  }

  return null;
};
