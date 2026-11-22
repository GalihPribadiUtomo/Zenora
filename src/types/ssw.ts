// ============================================================================
// SSW (SPECIFIED SKILLED WORKER / TOKUTEI GINOU) TYPES — ZENORA
// ============================================================================

export type SswSectorId = 
  | 'kaigo' 
  | 'food_service' 
  | 'manufacturing' 
  | 'agriculture' 
  | 'hospitality' 
  | 'building_cleaning';

export type SswCategoryType = 
  | 'pengenalan'      // A. Pengenalan Bidang & Lingkungan Kerja
  | 'kosakata'        // B. Kosakata Khusus Pekerjaan & Situasi Kerja
  | 'komunikasi'      // C. Komunikasi di Tempat Kerja (Instruksi, Keigo, Ho-Ren-So)
  | 'keterampilan'    // D. Pengetahuan & Keterampilan Kerja (K3, SOP, Teknis)
  | 'persiapan_ujian';// E. Persiapan Ujian (Kisi-kisi, Contoh Soal & Pembahasan)

export interface SswVocabItem {
  id: string;
  kanji: string;
  kana: string;
  romaji: string;
  arti: string;
  categoryTag?: string;
  exampleSentence?: {
    jp: string;
    kana: string;
    romaji: string;
    id: string;
  };
}

export interface SswDialogueItem {
  speaker: string;
  role: string;
  japanese: string;
  kana: string;
  romaji: string;
  indonesian: string;
}

export interface SswQuizQuestion {
  id: string;
  questionNumber: number;
  questionText: string;
  situation?: string;
  passageText?: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  translation?: string;
}

export interface SswKeyTerm {
  japanese: string;
  kana: string;
  romaji: string;
  indonesian: string;
  note?: string;
}

export interface SswVisualDiagram {
  title: string;
  subtitle?: string;
  type: 'steps' | 'table' | 'cards' | 'warning' | 'grid';
  items: {
    label: string;
    description: string;
    highlight?: string;
    badge?: string;
  }[];
}

export interface SswLessonChapter {
  id: string;
  sectorId: SswSectorId;
  category: SswCategoryType;
  chapterNumber: number;
  title: string;
  japaneseTitle: string;
  estimatedMinutes: number;
  objectives: string[];
  contentExplanation: string; // Penjelasan materi komprehensif Bahasa Indonesia
  keyTerms: SswKeyTerm[];
  workplaceCaseStudy?: {
    title: string;
    scenario: string;
    dialogue?: SswDialogueItem[];
    takeaway: string;
  };
  visualDiagram?: SswVisualDiagram;
  importantPoints: string[];
  summary: string;
  practiceQuestions: SswQuizQuestion[];
  officialReference: {
    source: string;
    agency: string;
    documentTitle: string;
  };
}

export interface SswSectorOverview {
  workEnvironment: string;
  mainDuties: string[];
  technicalExamName: string;
  examOrganizer: string;
  passRequirement: string;
  salaryInsight?: string;
}

export interface SswSectorData {
  id: SswSectorId;
  name: string;
  japaneseName: string;
  romajiName: string;
  iconName: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  overview: SswSectorOverview;
  officialReferences: {
    title: string;
    agency: string;
    description: string;
  }[];
  chapters: SswLessonChapter[];
  examSimulation: {
    title: string;
    subtitle: string;
    timeMinutes: number;
    passingScorePercentage: number;
    questions: SswQuizQuestion[];
  };
}

// User SSW Progress State
export interface SswUserProgress {
  completedLessonIds: string[];
  lastActiveSectorId: SswSectorId;
  lastActiveChapterId?: string;
  quizScores: Record<string, {
    score: number;
    total: number;
    percentage: number;
    date: string;
  }>;
}
