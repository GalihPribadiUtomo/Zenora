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
}
