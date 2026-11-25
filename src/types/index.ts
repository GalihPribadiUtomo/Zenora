export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export type KotobaCategory = 
  | 'Kata Kerja'
  | 'Kata Sifat'
  | 'Waktu & Angka'
  | 'Makanan & Minuman'
  | 'Tubuh & Kesehatan'
  | 'Orang & Keluarga'
  | 'Tempat & Arah'
  | 'Umum & Ungkapan';

export type KanjiCategory =
  | 'Angka & Waktu'
  | 'Alam & Cuaca'
  | 'Manusia & Keluarga'
  | 'Tempat & Bangunan'
  | 'Makanan & Minuman'
  | 'Aktivitas & Kata Kerja'
  | 'Tubuh'
  | 'Arah & Posisi'
  | 'Warna & Benda'
  | 'Sifat & Keadaan'
  | 'Bunga & Tumbuhan'
  | 'Hewan';

export interface KanjiSentenceExample {
  sentence: string;      // Kalimat Jepang asli
  furigana: string;      // Bacaan furigana lengkap
  romaji: string;        // Transkripsi romaji
  english: string;       // Terjemahan bahasa Inggris (English)
  indonesian: string;    // Terjemahan bahasa Indonesia (Indonesia)
  grammarNote?: string;  // Penjelasan pola kalimat edukatif
  isPlaceholder?: boolean; // Penanda slot struktur jika data belum tersedia
}

export interface KotobaSentenceExample {
  sentence: string;      // Kalimat Jepang asli
  furigana: string;      // Bacaan furigana lengkap
  romaji: string;        // Transkripsi romaji
  english: string;       // Terjemahan bahasa Inggris (English)
  indonesian: string;    // Terjemahan bahasa Indonesia (Indonesia)
  highlight?: string;    // Karakter / kata yang di-highlight
  grammarNote?: string;  // Penjelasan tata bahasa tambahan
  isPlaceholder?: boolean; // Penanda slot struktur jika data belum tersedia
}

export interface KanjiItem {
  id: number;
  kanji: string;
  reading: string;
  meaning: string;
  meaningEn: string;
  strokeCount: number;
  onyomi: string;
  kunyomi: string;
  jlpt: JLPTLevel;
  category: KanjiCategory;
  bab?: number;
  strokeRules?: string;
  strokeOrderGuide?: string[];
  radicals?: string;
  components?: { kanji: string; meaning: string }[];
  sentences?: KanjiSentenceExample[];
  examples?: {
    word: string;
    reading: string;
    meaning: string;
  }[];
}

export interface KotobaItem {
  id: string;
  no: number;
  bab: number;
  kanji: string;
  kana: string;
  romaji: string;
  arti: string;
  kategori: KotobaCategory;
  sentences?: KotobaSentenceExample[];
}

export interface ChapterInfo {
  bab: number;
  title: string;
  book: 'I' | 'II';
  totalKata: number;
  categories: {
    name: KotobaCategory;
    count: number;
    color: string;
  }[];
}

export type QuizMode = 'multiple-choice' | 'flashcard' | 'matching' | 'typing';
export type QuizSubject = 'kotoba' | 'kanji';

export type ExerciseMode = 
  | 'multiple-choice'
  | 'matching'
  | 'fill-blank'
  | 'sentence-arrange'
  | 'writing-practice'
  | 'listening'
  | 'reading'
  | 'speaking'
  | 'vocab-test'
  | 'kanji-test'
  | 'grammar-test'
  | 'translation'
  | 'error-correction'
  | 'conversation-complete'
  | 'mixed-review'
  | 'timed-exam'
  | 'review-mistakes'
  | 'final-exam';

export interface ExerciseQuestion {
  id: string;
  bab: number;
  mode: ExerciseMode;
  title: string;
  instruction: string;
  question: string;
  japaneseText?: string;
  reading?: string;
  audioText?: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
  sentenceTokens?: string[]; // for sentence-arrange
  blankSentence?: string; // for fill-blank
  readingPassage?: string; // for reading
  speaker?: string; // for kaiwa/speaking
  matchingPairs?: { id: string; left: string; right: string }[]; // for matching
  errorPartIndex?: number; // for error-correction
  targetWritingChar?: string; // for writing practice
  timeLimitSeconds?: number; // for timed-exam
}

export interface QuizQuestion {
  id: string;
  subject: QuizSubject;
  question: string;
  subQuestion?: string;
  correctAnswer: string;
  options: string[];
  explanation?: string;
  audioText: string;
  metadata?: any;
}

export type KanaType = 'hiragana' | 'katakana';
export type KanaGroup = 'gojuon' | 'dakuon' | 'dakuten' | 'handakuten' | 'youon' | 'small' | 'modern' | 'special';
export type KanaRow = 'a' | 'ka' | 'sa' | 'ta' | 'na' | 'ha' | 'ma' | 'ya' | 'ra' | 'wa' | 'n' | 'ga' | 'za' | 'da' | 'ba' | 'pa' | 'combo' | 'special';

export interface KanaExampleWord {
  word: string;
  romaji: string;
  meaningEn: string;
  meaningId: string;
}

export interface KanaItem {
  id: string;
  char: string;
  equivalentChar: string;
  romaji: string;
  pronunciation: string;
  type: KanaType;
  group: KanaGroup;
  row: KanaRow;
  rowLabel: string;
  strokeCount: number;
  writingTips: string;
  example: KanaExampleWord;
  additionalExample?: KanaExampleWord;
}

export interface SrsItem {
  id: string;
  type: 'kana' | 'kanji' | 'kotoba';
  front: string;
  reading: string;
  meaning: string;
  level: number; // 0 to 5
  nextReviewAt: number; // timestamp ms
  lastReviewedAt?: number;
  correctStreak: number;
}

export interface UserStats {
  learnedKotobaIds: string[];
  learnedKanjiIds: number[];
  learnedKanaChars: string[];
  bookmarkedKotobaIds: string[];
  bookmarkedKanjiIds: number[];
  quizHistory: {
    date: string;
    score: number;
    total: number;
    mode: QuizMode;
    subject: QuizSubject;
  }[];
  streakDays: number;
  lastActiveDate: string;
  dailyGoalTarget?: number;
  dailyActivityMap?: Record<string, number>;
}

export interface PolaKalimatItem {
  id: number;
  japanese: string;
  romaji: string;
  indonesian: string;
}

export interface ContohKalimatItem {
  id: number;
  question?: string;
  answer: string;
  romaji: string;
  indonesian: string;
}

export interface KaiwaDialogItem {
  speaker: string;
  role?: string;
  japanese: string;
  romaji: string;
  indonesian: string;
}

export interface KaiwaItem {
  title: string;
  situasi?: string;
  tokoh: string[];
  dialogs: KaiwaDialogItem[];
}

export interface TataBahasaPoint {
  point: number;
  title: string;
  polaFormat?: string;
  explanation: string;
  examples: {
    japanese: string;
    romaji: string;
    indonesian: string;
  }[];
}

export interface ReferensiInfoItem {
  title: string;
  description?: string;
  items?: {
    japanese: string;
    romaji: string;
    indonesian: string;
  }[];
  notes?: string[];
}

export interface ChapterLesson {
  bab: number;
  title: string;
  subTitle?: string;
  summary: string;
  polaKalimat: PolaKalimatItem[];
  contohKalimat: ContohKalimatItem[];
  percakapan: KaiwaItem;
  tataBahasa: TataBahasaPoint[];
  referensiInfo?: ReferensiInfoItem;
}

// ==========================================
// JLPT & JFT-BASIC EXAM SIMULATION TYPES
// ==========================================

export type ExamType = 'JLPT_N5' | 'JLPT_N4' | 'JFT_BASIC_A2';

export type ExamSectionType = 
  | 'gengo_chishiki' // 文字・語彙 (Moji / Goi)
  | 'bunpou_dokkai'  // 文法・読解 (Grammar & Reading)
  | 'choukai'        // 聴解 (Listening)
  | 'jft_moji_goi'   // JFT: Huruf dan Kosakata
  | 'jft_kaiwa'      // JFT: Percakapan dan Ungkapan
  | 'jft_choukai'    // JFT: Mendengarkan
  | 'jft_dokkai';    // JFT: Membaca

export interface ExamQuestion {
  id: string;
  mondaiNumber: number;            // Nomor kelompok soal (misal: 1 untuk 問題１)
  mondaiTitle: string;             // Judul instruksi kelompok soal
  questionNumber: number;          // Nomor urut soal
  questionText: string;            // Teks kalimat soal
  passageText?: string;            // Wacana bacaan (untuk Dokkai)
  audioScript?: string;            // Skrip audio dialog yang diucapkan (Choukai)
  audioSituation?: string;         // Panduan situasi audio
  options: string[];               // 4 pilihan jawaban
  correctAnswerIndex: number;      // Indeks jawaban benar (0, 1, 2, atau 3)
  explanation: string;             // Pembahasan mendalam
  indonesianTranslation?: string;  // Terjemahan kalimat soal & opsi
  isStarQuestion?: boolean;        // Apakah soal susun kalimat posisi bintang ★
  starSlots?: string[];            // 4 komponen kata untuk disusun jika soal bintang
}

export interface ExamSection {
  id: string;
  type: ExamSectionType;
  title: string;
  japaneseTitle: string;
  timeLimitMinutes: number;        // Waktu resmi (menit)
  passingScore: number;            // Kriteria batas lulus bagian
  maxScore: number;                // Skor maksimal bagian
  instructions: string;
  questions: ExamQuestion[];
}

export interface ExamPackage {
  id: ExamType;
  title: string;
  level: string;                   // "N5", "N4", "A2"
  subtitle: string;
  description: string;
  totalTimeMinutes: number;
  totalQuestions: number;
  maxScore: number;
  passingScore: number;
  badgeColor: string;
  sections: ExamSection[];
}
