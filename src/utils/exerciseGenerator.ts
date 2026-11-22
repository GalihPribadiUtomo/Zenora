import { ExerciseMode, ExerciseQuestion, KotobaItem, KanjiItem, ChapterLesson } from '../types';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';

// Storage key for wrong answers
const MISTAKES_KEY = 'zenora_mistake_history';

export interface ExerciseModeMeta {
  id: ExerciseMode;
  name: string;
  jpName: string;
  category: 'Dasar' | 'Tata Bahasa' | 'Keterampilan' | 'Ujian & Review';
  icon: string;
  description: string;
  tagColor: string;
}

export const EXERCISE_MODES_LIST: ExerciseModeMeta[] = [
  {
    id: 'multiple-choice',
    name: 'Multiple Choice (Pilihan Ganda)',
    jpName: '選択問題',
    category: 'Dasar',
    icon: 'CheckSquare',
    description: 'Pilih jawaban yang paling tepat dari 4 opsi pilihan ganda seputar materi bab ini.',
    tagColor: 'from-[#2457C5] to-[#55B9F5]'
  },
  {
    id: 'matching',
    name: 'Matching (Mencocokkan)',
    jpName: 'マッチング',
    category: 'Dasar',
    icon: 'Shuffle',
    description: 'Cocokkan pasangan kata, kanji, atau pola kalimat Jepang dengan terjemahan Indonesia.',
    tagColor: 'from-[#55B9F5] to-[#8975E8]'
  },
  {
    id: 'fill-blank',
    name: 'Fill in the Blank (Mengisi Kosong)',
    jpName: '穴埋め問題',
    category: 'Tata Bahasa',
    icon: 'Edit3',
    description: 'Lengkapi bagian rumpang dalam kalimat dengan partikel atau bentuk kata kerja yang tepat.',
    tagColor: 'from-[#8975E8] to-[#2457C5]'
  },
  {
    id: 'sentence-arrange',
    name: 'Sentence Arrangement (Menyusun Kalimat)',
    jpName: '語順整序',
    category: 'Tata Bahasa',
    icon: 'AlignLeft',
    description: 'Susun potongan kata-kata acak menjadi kalimat bahasa Jepang yang gramatikal dan benar.',
    tagColor: 'from-[#2457C5] to-[#8975E8]'
  },
  {
    id: 'writing-practice',
    name: 'Writing Practice (Latihan Menulis)',
    jpName: '書き取り練習',
    category: 'Keterampilan',
    icon: 'PenTool',
    description: 'Latih kemampuan menulis goresan Kanji dan Kana bab ini pada kanvas digital interaktif.',
    tagColor: 'from-[#55B9F5] to-[#2457C5]'
  },
  {
    id: 'listening',
    name: 'Listening (Choukai)',
    jpName: '聴解練習',
    category: 'Keterampilan',
    icon: 'Headphones',
    description: 'Dengarkan audio penutur Jepang dan pilih jawaban yang sesuai dengan ujaran yang terdengar.',
    tagColor: 'from-[#8975E8] to-[#55B9F5]'
  },
  {
    id: 'reading',
    name: 'Reading (Dokkai)',
    jpName: '読解練習',
    category: 'Keterampilan',
    icon: 'BookOpen',
    description: 'Baca teks atau situasi pendek materi bab, lalu jawab pertanyaan pemahaman bacaan.',
    tagColor: 'from-[#2457C5] to-[#55B9F5]'
  },
  {
    id: 'speaking',
    name: 'Speaking (Kaiwa)',
    jpName: '会話発音',
    category: 'Keterampilan',
    icon: 'Mic',
    description: 'Latih pelafalan dialog kontekstual, dengarkan intonasi asli, dan tirukan secara interaktif.',
    tagColor: 'from-[#55B9F5] to-[#8975E8]'
  },
  {
    id: 'vocab-test',
    name: 'Vocabulary Test (Ujian Kosakata)',
    jpName: '語彙テスト',
    category: 'Ujian & Review',
    icon: 'Layers',
    description: 'Ujian komprehensif kosakata: arti, kanji, kana, dan cara penggunaan kata bab ini.',
    tagColor: 'from-[#2457C5] to-[#55B9F5]'
  },
  {
    id: 'kanji-test',
    name: 'Kanji Test (Ujian Kanji)',
    jpName: '漢字テスト',
    category: 'Ujian & Review',
    icon: 'Hash',
    description: 'Uji penguasaan Kanji bab ini: Onyomi, Kunyomi, arti, dan kata majemuk (jukugo).',
    tagColor: 'from-[#8975E8] to-[#2457C5]'
  },
  {
    id: 'grammar-test',
    name: 'Grammar Test (Ujian Tata Bahasa)',
    jpName: '文法テスト',
    category: 'Tata Bahasa',
    icon: 'FileText',
    description: 'Uji pemahaman rumus pola kalimat (Bunpou) dan aturan partikel Minna no Nihongo.',
    tagColor: 'from-[#2457C5] to-[#8975E8]'
  },
  {
    id: 'translation',
    name: 'Translation (Terjemahan Dua Arah)',
    jpName: '翻訳練習',
    category: 'Tata Bahasa',
    icon: 'Languages',
    description: 'Latihan menerjemahkan kalimat: Jepang ke Indonesia dan sebaliknya Indonesia ke Jepang.',
    tagColor: 'from-[#55B9F5] to-[#2457C5]'
  },
  {
    id: 'error-correction',
    name: 'Error Correction (Koreksi Kalimat)',
    jpName: '誤文訂正',
    category: 'Tata Bahasa',
    icon: 'AlertCircle',
    description: 'Temukan bagian kalimat yang salah (partikel/konjugasi) dan pilih koreksi yang tepat.',
    tagColor: 'from-[#8975E8] to-[#55B9F5]'
  },
  {
    id: 'conversation-complete',
    name: 'Conversation Completion (Lengkapi Kaiwa)',
    jpName: '会話完成',
    category: 'Keterampilan',
    icon: 'MessageSquare',
    description: 'Lengkapi dialog percakapan rumpang antar tokoh dengan respon yang paling santun dan logis.',
    tagColor: 'from-[#2457C5] to-[#55B9F5]'
  },
  {
    id: 'mixed-review',
    name: 'Mixed Review (Latihan Campuran Bab 1–50)',
    jpName: '総合復習',
    category: 'Ujian & Review',
    icon: 'RefreshCw',
    description: 'Latihan campuran acak lintas bab (Bab 1 sampai 50) untuk memperkuat daya ingat retensi.',
    tagColor: 'from-[#55B9F5] to-[#8975E8]'
  },
  {
    id: 'timed-exam',
    name: 'Timed Exam (Ujian Batas Waktu)',
    jpName: '時間制限テスト',
    category: 'Ujian & Review',
    icon: 'Clock',
    description: 'Simulasi ujian dengan penghitung waktu mundur per soal untuk melatih kecepatan respon.',
    tagColor: 'from-[#8975E8] to-[#2457C5]'
  },
  {
    id: 'review-mistakes',
    name: 'Review Mistakes (Ulangi Soal Salah)',
    jpName: '苦手克服',
    category: 'Ujian & Review',
    icon: 'RotateCcw',
    description: 'Latih ulang soal-soal yang pernah Anda jawab salah sebelumnya sampai Anda memahaminya.',
    tagColor: 'from-[#2457C5] to-[#8975E8]'
  },
  {
    id: 'final-exam',
    name: 'Final Examination (Ujian Akhir)',
    jpName: '総まとめ修了試験',
    category: 'Ujian & Review',
    icon: 'Award',
    description: 'Ujian akhir komprehensif menguji seluruh kompetensi kosakata, kanji, tata bahasa, dan membaca.',
    tagColor: 'from-[#2457C5] to-[#55B9F5]'
  }
];

// Record a mistaken question in LocalStorage
export function recordMistake(question: ExerciseQuestion) {
  try {
    const raw = localStorage.getItem(MISTAKES_KEY);
    const list: ExerciseQuestion[] = raw ? JSON.parse(raw) : [];
    // Avoid duplicate
    if (!list.some(q => q.id === question.id || (q.question === question.question && q.correctAnswer === question.correctAnswer))) {
      list.unshift(question);
      // Keep up to 100 mistakes
      localStorage.setItem(MISTAKES_KEY, JSON.stringify(list.slice(0, 100)));
    }
  } catch (e) {
    console.error('Failed to save mistake', e);
  }
}

// Remove mistake when answered correctly
export function resolveMistake(questionId: string) {
  try {
    const raw = localStorage.getItem(MISTAKES_KEY);
    if (!raw) return;
    const list: ExerciseQuestion[] = JSON.parse(raw);
    const updated = list.filter(q => q.id !== questionId);
    localStorage.setItem(MISTAKES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to remove mistake', e);
  }
}

// Get saved mistakes
export function getSavedMistakes(): ExerciseQuestion[] {
  try {
    const raw = localStorage.getItem(MISTAKES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Helper to shuffle array
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Universal Exercise Generator for all 18 modes across chapters 1-50
 */
export function generateExerciseQuestions(
  mode: ExerciseMode,
  bab: number,
  lesson: ChapterLesson | null,
  chapterWords: KotobaItem[],
  chapterKanji: KanjiItem[],
  count: number = 10
): ExerciseQuestion[] {
  const questions: ExerciseQuestion[] = [];
  const words = chapterWords.length > 0 ? chapterWords : KOTOBA_DATA.filter(k => k.bab === bab);
  const poolWords = words.length > 0 ? words : KOTOBA_DATA;
  const kanjiList = chapterKanji.length > 0 ? chapterKanji : KANJI_DATA.filter(k => k.bab === bab);
  const poolKanji = kanjiList.length > 0 ? kanjiList : KANJI_DATA;

  // 1. MULTIPLE CHOICE
  if (mode === 'multiple-choice') {
    const shuffledWords = shuffle(poolWords);
    const items = shuffledWords.slice(0, Math.min(count, shuffledWords.length));

    items.forEach((item, idx) => {
      const isJpToId = idx % 2 === 0;
      const otherWords = shuffle(poolWords.filter(w => w.id !== item.id)).slice(0, 3);

      if (isJpToId) {
        const options = shuffle([item.arti, ...otherWords.map(w => w.arti)]);
        questions.push({
          id: `mc_${bab}_${idx}`,
          bab,
          mode: 'multiple-choice',
          title: `Pilihan Ganda Bab ${bab}`,
          instruction: 'Pilih arti bahasa Indonesia yang paling tepat untuk kosakata berikut:',
          question: item.kanji || item.kana,
          japaneseText: item.kanji || item.kana,
          reading: `${item.kana} [${item.romaji}]`,
          audioText: item.kana || item.kanji,
          options,
          correctAnswer: item.arti,
          explanation: `${item.kanji} (${item.kana}) berarti "${item.arti}". Romaji: ${item.romaji}`
        });
      } else {
        const options = shuffle([item.kanji || item.kana, ...otherWords.map(w => w.kanji || w.kana)]);
        questions.push({
          id: `mc_${bab}_${idx}`,
          bab,
          mode: 'multiple-choice',
          title: `Pilihan Ganda Bab ${bab}`,
          instruction: 'Manakah penulisan bahasa Jepang yang tepat untuk arti berikut:',
          question: `"${item.arti}"`,
          reading: item.romaji,
          audioText: item.kana || item.kanji,
          options,
          correctAnswer: item.kanji || item.kana,
          explanation: `"${item.arti}" dalam bahasa Jepang adalah ${item.kanji} (${item.kana}).`
        });
      }
    });
  }

  // 2. MATCHING (Mencocokkan)
  else if (mode === 'matching') {
    const numSets = Math.min(3, Math.max(1, Math.floor(count / 5)));
    for (let s = 0; s < numSets; s++) {
      const sample = shuffle(poolWords).slice(s * 5, s * 5 + 5);
      if (sample.length >= 3) {
        const pairs = sample.map(item => ({
          id: item.id,
          left: item.kanji || item.kana,
          right: item.arti
        }));
        questions.push({
          id: `match_${bab}_${s}`,
          bab,
          mode: 'matching',
          title: `Mencocokkan Kata Bab ${bab} (Set ${s + 1})`,
          instruction: 'Cocokkan setiap kata bahasa Jepang di sebelah kiri dengan arti bahasa Indonesia yang tepat di sebelah kanan.',
          question: 'Cocokkan semua pasangan kata berikut:',
          correctAnswer: 'matched_all',
          matchingPairs: pairs,
          explanation: pairs.map(p => `${p.left} = ${p.right}`).join(', ')
        });
      }
    }
  }

  // 3. FILL IN THE BLANK (Tata Bahasa & Partikel)
  else if (mode === 'fill-blank') {
    const reibunList = lesson?.contohKalimat || [];
    const polaList = lesson?.polaKalimat || [];
    const tbList = lesson?.tataBahasa || [];
    const sentences: { jp: string; id: string; blankTarget: string; options: string[] }[] = [];

    // Extract sentences from lesson
    reibunList.forEach((r) => {
      const jpText = r.question ? `${r.question} ${r.answer}` : r.answer;
      const particles = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'から', 'まで'];
      for (const p of particles) {
        if (jpText.includes(` ${p} `) || jpText.includes(p)) {
          const splitSentence = jpText.replace(new RegExp(p, 'g'), ' [ ___ ] ');
          const distractors = shuffle(particles.filter(x => x !== p)).slice(0, 3);
          sentences.push({
            jp: splitSentence,
            id: r.indonesian,
            blankTarget: p,
            options: shuffle([p, ...distractors])
          });
          break;
        }
      }
    });

    // Fallback if not enough sentences
    if (sentences.length < 5) {
      const defaultParticles = ['は', 'を', 'に', 'で', 'が'];
      sentences.push(
        {
          jp: 'わたし [ ___ ] ミラー です。',
          id: 'Saya adalah Miller.',
          blankTarget: 'は',
          options: shuffle(['は', 'が', 'を', 'に'])
        },
        {
          jp: 'ごはん [ ___ ] たべます。',
          id: 'Makan nasi.',
          blankTarget: 'を',
          options: shuffle(['を', 'で', 'に', 'は'])
        },
        {
          jp: 'にほん [ ___ ] いきます。',
          id: 'Pergi ke Jepang.',
          blankTarget: 'へ',
          options: shuffle(['へ', 'を', 'で', 'は'])
        },
        {
          jp: 'うち [ ___ ] べんきょうします。',
          id: 'Belajar di rumah.',
          blankTarget: 'で',
          options: shuffle(['で', 'に', 'を', 'へ'])
        },
        {
          jp: '７じ [ ___ ] おきます。',
          id: 'Bangun pada jam 7.',
          blankTarget: 'に',
          options: shuffle(['に', 'で', 'を', 'は'])
        }
      );
    }

    shuffle(sentences).slice(0, count).forEach((item, idx) => {
      questions.push({
        id: `fb_${bab}_${idx}`,
        bab,
        mode: 'fill-blank',
        title: `Lengkapi Kalimat Bab ${bab}`,
        instruction: 'Pilih partikel atau kata yang tepat untuk melengkapi bagian rumpang berikut:',
        question: item.jp,
        blankSentence: item.jp,
        correctAnswer: item.blankTarget,
        options: item.options,
        explanation: `Arti kalimat: "${item.id}". Jawaban yang benar adalah partikel "${item.blankTarget}".`
      });
    });
  }

  // 4. SENTENCE ARRANGEMENT (Menyusun Kalimat)
  else if (mode === 'sentence-arrange') {
    const reibuns = lesson?.contohKalimat || [];
    const sourceList: { id: string; japanese: string; indonesian: string }[] = reibuns.length > 0
      ? reibuns.map((r) => ({
          id: String(r.id),
          japanese: r.question ? `${r.question} ${r.answer}` : r.answer,
          indonesian: r.indonesian
        }))
      : [
          { id: '1', japanese: 'わたし は にほんご を べんきょうします', indonesian: 'Saya belajar bahasa Jepang' },
          { id: '2', japanese: 'きのう ともだち と デパート へ いきました', indonesian: 'Kemarin pergi ke department store bersama teman' },
          { id: '3', japanese: 'あした としょかん で ほん を よみます', indonesian: 'Besok membaca buku di perpustakaan' }
        ];

    shuffle(sourceList).slice(0, count).forEach((item, idx) => {
      // Split sentence into 3 to 5 meaningful tokens
      const parts = item.japanese.split(' ').filter(Boolean);
      const tokens: string[] = parts.length >= 3 ? parts : (item.japanese.match(/.{1,4}/g) as string[]) || [item.japanese];
      const shuffledTokens = shuffle(tokens);

      questions.push({
        id: `sa_${bab}_${idx}`,
        bab,
        mode: 'sentence-arrange',
        title: `Susun Kalimat Bab ${bab}`,
        instruction: 'Susun potongan kata berikut agar membentuk kalimat bahasa Jepang yang tepat sesuai arti:',
        question: `Arti: "${item.indonesian}"`,
        sentenceTokens: shuffledTokens,
        correctAnswer: tokens.join(' '),
        audioText: item.japanese,
        explanation: `Susunan yang benar: ${item.japanese} (${item.indonesian})`
      });
    });
  }

  // 5. WRITING PRACTICE (Latihan Menulis Kanji/Kana)
  else if (mode === 'writing-practice') {
    const candidates = (poolKanji.length > 0 ? poolKanji : poolWords) as any[];
    shuffle(candidates).slice(0, count).forEach((item: any, idx: number) => {
      const char = item.kanji ? (item.kanji[0] || '日') : (item.char || 'あ');
      const reading = item.reading || item.kana || item.romaji;
      const meaning = item.meaning || item.arti || '';

      questions.push({
        id: `wp_${bab}_${idx}`,
        bab,
        mode: 'writing-practice',
        title: `Latihan Menulis Bab ${bab}`,
        instruction: `Tulis karakter berikut di atas kanvas digital dengan urutan goresan yang rapi:`,
        question: `Tulis: "${char}"`,
        targetWritingChar: char,
        reading,
        japaneseText: char,
        audioText: char,
        correctAnswer: char,
        explanation: `Karakter ${char} (${reading}) memiliki arti "${meaning}". Latih goresan Anda berulang kali.`
      });
    });
  }

  // 6. LISTENING (Choukai)
  else if (mode === 'listening') {
    shuffle(poolWords).slice(0, count).forEach((item, idx) => {
      const distractors = shuffle(poolWords.filter(w => w.id !== item.id)).slice(0, 3);
      const options = shuffle([item.arti, ...distractors.map(d => d.arti)]);

      questions.push({
        id: `lis_${bab}_${idx}`,
        bab,
        mode: 'listening',
        title: `Listening Bab ${bab} · 第${bab}課 聴解`,
        instruction: 'Dengarkan suara rekaman audio penutur Jepang, lalu pilih arti yang sesuai:',
        question: 'Tekan tombol suara untuk mendengarkan audio kata / kalimat:',
        japaneseText: item.kanji || item.kana,
        audioText: item.kana || item.kanji,
        reading: item.romaji,
        options,
        correctAnswer: item.arti,
        explanation: `Suara mengucapkan: ${item.kanji} (${item.kana}) = "${item.arti}".`
      });
    });
  }

  // 7. READING (Dokkai)
  else if (mode === 'reading') {
    const kaiwa = lesson?.percakapan;
    const situation = kaiwa?.situasi || `Situasi pembelajaran Bab ${bab}`;
    const dialogs = kaiwa?.dialogs || [];

    const passage = dialogs.length > 0 
      ? dialogs.slice(0, 4).map((l) => `${l.speaker}: 「${l.japanese}」 (${l.indonesian})`).join('\n')
      : `ミラーさんは 毎朝 7時に 起きます。朝ごはんを 食べて、会社へ 行きます。日本の 会社は 9時から 5時までです。`;

    questions.push(
      {
        id: `rd_${bab}_1`,
        bab,
        mode: 'reading',
        title: `Membaca Dokkai Bab ${bab} (Teks 1)`,
        instruction: 'Bacalah teks situasi/dialog berikut dengan seksama, kemudian jawab pertanyaan:',
        question: 'Berdasarkan konteks teks di atas, topik apa yang sedang dibicarakan?',
        readingPassage: passage,
        options: shuffle([
          kaiwa?.title || `Topik utama materi Bab ${bab}`,
          'Perjalanan liburan ke luar negeri',
          'Membeli tiket bioskop di stasiun',
          'Memasak masakan tradisional'
        ]),
        correctAnswer: kaiwa?.title || `Topik utama materi Bab ${bab}`,
        explanation: `Dialog tersebut mengangkat situasi: ${situation}.`
      },
      {
        id: `rd_${bab}_2`,
        bab,
        mode: 'reading',
        title: `Membaca Dokkai Bab ${bab} (Teks 2)`,
        instruction: 'Jawab pertanyaan pemahaman berdasarkan teks bacaan:',
        question: 'Siapakah tokoh yang terlibat dalam situasi teks di atas?',
        readingPassage: passage,
        options: shuffle([
          dialogs[0]?.speaker ? `${dialogs[0]?.speaker} dan rekannya` : 'Miller dan Suzuki',
          'Nobita dan Doraemon',
          'Shinchan dan Shiro',
          'Naruto dan Sasuke'
        ]),
        correctAnswer: dialogs[0]?.speaker ? `${dialogs[0]?.speaker} dan rekannya` : 'Miller dan Suzuki',
        explanation: `Tokoh yang berdialog adalah tokoh resmi Minna no Nihongo pada Bab ${bab}.`
      }
    );
  }

  // 8. SPEAKING (Kaiwa)
  else if (mode === 'speaking') {
    const dialogs = lesson?.percakapan?.dialogs || [];
    const sourceLines: { speaker: string; japanese: string; indonesian: string }[] = dialogs.length > 0
      ? dialogs.map(d => ({ speaker: d.speaker, japanese: d.japanese, indonesian: d.indonesian }))
      : [
          { speaker: 'Miller', japanese: 'こんにちは。わたしはミラーです。', indonesian: 'Halo. Saya adalah Miller.' },
          { speaker: 'Suzuki', japanese: 'はじめまして。よろしくおねがいします。', indonesian: 'Senang bertemu dengan Anda. Mohon bimbingannya.' }
        ];

    shuffle(sourceLines).slice(0, count).forEach((line, idx) => {
      questions.push({
        id: `spk_${bab}_${idx}`,
        bab,
        mode: 'speaking',
        title: `Latihan Berbicara Kaiwa Bab ${bab}`,
        instruction: 'Dengarkan contoh intonasi, lalu lafalkan kalimat Jepang berikut dengan jelas:',
        speaker: line.speaker,
        question: line.japanese,
        japaneseText: line.japanese,
        audioText: line.japanese,
        correctAnswer: line.japanese,
        explanation: `Arti kalimat: "${line.indonesian}". Latihlah berbicara sampai intonasi Anda lancar!`
      });
    });
  }

  // 9. VOCABULARY TEST (Ujian Kosakata)
  else if (mode === 'vocab-test') {
    const shuffled = shuffle(poolWords).slice(0, count);
    shuffled.forEach((w, idx) => {
      const otherWords = shuffle(poolWords.filter(x => x.id !== w.id)).slice(0, 3);
      const options = shuffle([w.arti, ...otherWords.map(x => x.arti)]);

      questions.push({
        id: `vt_${bab}_${idx}`,
        bab,
        mode: 'vocab-test',
        title: `Ujian Kosakata Bab ${bab}`,
        instruction: 'Pilih arti kosakata yang paling tepat:',
        question: `${w.kanji} (${w.kana})`,
        japaneseText: w.kanji,
        reading: w.kana,
        audioText: w.kana,
        options,
        correctAnswer: w.arti,
        explanation: `Kosakata: ${w.kanji} (${w.kana}) memiliki arti "${w.arti}" [${w.romaji}].`
      });
    });
  }

  // 10. KANJI TEST (Ujian Kanji)
  else if (mode === 'kanji-test') {
    const shuffled = shuffle(poolKanji).slice(0, count);
    shuffled.forEach((k, idx) => {
      const otherKanji = shuffle(poolKanji.filter(x => x.id !== k.id)).slice(0, 3);
      const isOnyomi = idx % 2 === 0;

      if (isOnyomi && k.onyomi) {
        const options = shuffle([k.onyomi, ...otherKanji.map(x => x.onyomi || x.kunyomi || 'オン')]);
        questions.push({
          id: `kt_${bab}_${idx}`,
          bab,
          mode: 'kanji-test',
          title: `Ujian Kanji Bab ${bab}`,
          instruction: 'Manakah cara baca Onyomi (音読み) yang tepat untuk kanji berikut:',
          question: k.kanji,
          japaneseText: k.kanji,
          audioText: k.onyomi.split(/[,、]/)[0] || k.kanji,
          options,
          correctAnswer: k.onyomi,
          explanation: `Kanji ${k.kanji} (${k.meaning}) memiliki Onyomi: ${k.onyomi} dan Kunyomi: ${k.kunyomi}.`
        });
      } else {
        const options = shuffle([k.meaning, ...otherKanji.map(x => x.meaning)]);
        questions.push({
          id: `kt_${bab}_${idx}`,
          bab,
          mode: 'kanji-test',
          title: `Ujian Kanji Bab ${bab}`,
          instruction: 'Apakah arti utama dari karakter kanji berikut:',
          question: k.kanji,
          japaneseText: k.kanji,
          audioText: k.reading || k.kanji,
          options,
          correctAnswer: k.meaning,
          explanation: `Kanji ${k.kanji} dibaca ${k.reading} dan bermakna "${k.meaning}".`
        });
      }
    });
  }

  // 11. GRAMMAR TEST (Ujian Tata Bahasa)
  else if (mode === 'grammar-test') {
    const tbList = lesson?.tataBahasa || [];
    if (tbList.length > 0) {
      tbList.forEach((tb: any, idx: number) => {
        const distractors = [
          'Partikel penunjuk waktu lampau',
          'Bentuk pasif kehormatan',
          'Ungkapan permohonan santun'
        ];
        const options = shuffle([tb.penjelasan.slice(0, 50) + '...', ...distractors]);

        questions.push({
          id: `gt_${bab}_${idx}`,
          bab,
          mode: 'grammar-test',
          title: `Ujian Tata Bahasa (Bunpou) Bab ${bab}`,
          instruction: 'Analisis pola tata bahasa berikut dan tentukan fungsinya:',
          question: `Pola: ${tb.pola}`,
          japaneseText: tb.pola,
          options,
          correctAnswer: options[0],
          explanation: `Pola [${tb.pola}] digunakan untuk: ${tb.penjelasan}. Contoh: ${tb.contohKalimat?.[0]?.japanese || ''}`
        });
      });
    } else {
      // Generic grammar fallback
      questions.push({
        id: `gt_${bab}_def`,
        bab,
        mode: 'grammar-test',
        title: `Ujian Tata Bahasa Bab ${bab}`,
        instruction: 'Pilih partikel subjek penanda topik kalimat dalam bahasa Jepang:',
        question: 'Partikel penanda topik kalimat adalah...',
        options: shuffle(['は (wa)', 'を (o)', 'へ (e)', 'で (de)']),
        correctAnswer: 'は (wa)',
        explanation: 'Partikel は (dibaca wa) berfungsi sebagai penanda topik atau pokok pembicaraan.'
      });
    }
  }

  // 12. TRANSLATION (Terjemahan Jepang-Indonesia & Indonesia-Jepang)
  else if (mode === 'translation') {
    const reibuns = lesson?.contohKalimat || [];
    const source: { id: string; japanese: string; indonesian: string }[] = reibuns.length > 0 
      ? reibuns.map((r) => ({
          id: String(r.id),
          japanese: r.question ? `${r.question} ${r.answer}` : r.answer,
          indonesian: r.indonesian
        }))
      : [
          { id: '1', japanese: 'これは なんですか。', indonesian: 'Ini apa?' },
          { id: '2', japanese: 'それは わたしの ほんです。', indonesian: 'Itu adalah buku saya.' },
          { id: '3', japanese: 'だれと いきますか。', indonesian: 'Pergi dengan siapa?' }
        ];

    shuffle(source).slice(0, count).forEach((item: { id: string; japanese: string; indonesian: string }, idx: number) => {
      const isJpToId = idx % 2 === 0;
      if (isJpToId) {
        const otherReibuns = shuffle(source.filter(r => r.id !== item.id)).slice(0, 3);
        const options = shuffle([item.indonesian, ...otherReibuns.map(r => r.indonesian)]);
        questions.push({
          id: `trans_${bab}_${idx}`,
          bab,
          mode: 'translation',
          title: `Terjemahan Jepang → Indonesia Bab ${bab}`,
          instruction: 'Terjemahkan kalimat bahasa Jepang berikut ke dalam bahasa Indonesia yang tepat:',
          question: item.japanese,
          japaneseText: item.japanese,
          audioText: item.japanese,
          options,
          correctAnswer: item.indonesian,
          explanation: `Kalimat "${item.japanese}" diterjemahkan menjadi "${item.indonesian}".`
        });
      } else {
        const otherReibuns = shuffle(source.filter(r => r.id !== item.id)).slice(0, 3);
        const options = shuffle([item.japanese, ...otherReibuns.map(r => r.japanese)]);
        questions.push({
          id: `trans_${bab}_${idx}`,
          bab,
          mode: 'translation',
          title: `Terjemahan Indonesia → Jepang Bab ${bab}`,
          instruction: 'Manakah kalimat bahasa Jepang yang tepat untuk terjemahan berikut:',
          question: `"${item.indonesian}"`,
          options,
          correctAnswer: item.japanese,
          audioText: item.japanese,
          explanation: `Terjemahan tepat untuk "${item.indonesian}" adalah ${item.japanese}.`
        });
      }
    });
  }

  // 13. ERROR CORRECTION (Memperbaiki Kesalahan Kalimat)
  else if (mode === 'error-correction') {
    const errorSets = [
      {
        wrong: 'わたし が がくせい です。 (Salah: partikel topik)',
        right: 'わたし は がくせい です。',
        instruction: 'Perbaiki kalimat tersebut agar gramatikal:',
        options: shuffle(['わたし は がくせい です。', 'わたし を がくせい です。', 'わたし に がくせい です。', 'わたし で がくせい です。']),
        explanation: 'Untuk menyatakan topik "Saya adalah murid", gunakan partikel は (wa).'
      },
      {
        wrong: 'ごはん に たべます。 (Salah: partikel objek)',
        right: 'ごはん を たべます。',
        instruction: 'Perbaiki partikel objek makanan:',
        options: shuffle(['ごはん を たべます。', 'ごはん は たべます。', 'ごはん で たべます。', 'ごはん へ たべます。']),
        explanation: 'Objek langsung dari kata kerja transitif (makan nasi) menggunakan partikel を (o).'
      },
      {
        wrong: 'とうきょう を いきます。 (Salah: partikel arah)',
        right: 'とうきょう へ いきます。',
        instruction: 'Perbaiki partikel penunjuk arah tujuan:',
        options: shuffle(['とうきょう へ いきます。', 'とうきょう で いきます。', 'とうきょう を いきます。', 'とうきょう から いきます。']),
        explanation: 'Tujuan perpindahan (pergi ke Tokyo) menggunakan partikel へ (e) atau に (ni).'
      },
      {
        wrong: 'バス に かえります。 (Salah: partikel alat transportasi)',
        right: 'バス で かえります。',
        instruction: 'Perbaiki partikel sarana transportasi:',
        options: shuffle(['バス で かえります。', 'バス を かえります。', 'バス へ かえります。', 'バス は かえります。']),
        explanation: 'Sarana/alat yang digunakan (pulang dengan bus) menggunakan partikel で (de).'
      }
    ];

    shuffle(errorSets).slice(0, count).forEach((item, idx) => {
      questions.push({
        id: `ec_${bab}_${idx}`,
        bab,
        mode: 'error-correction',
        title: `Koreksi Kesalahan Kalimat Bab ${bab}`,
        instruction: item.instruction,
        question: `Kalimat salah: "${item.wrong}"`,
        options: item.options,
        correctAnswer: item.right,
        explanation: item.explanation
      });
    });
  }

  // 14. CONVERSATION COMPLETION (Melengkapi Percakapan)
  else if (mode === 'conversation-complete') {
    const kaiwaLines = lesson?.percakapan?.dialogs || [];
    if (kaiwaLines.length >= 2) {
      for (let i = 0; i < Math.min(count, kaiwaLines.length - 1); i += 2) {
        const speaker1 = kaiwaLines[i];
        const speaker2 = kaiwaLines[i + 1];
        const distractors = [
          'いいえ、ちがいます。',
          'どうも ありがとうございます。',
          'すみません、わかりません。'
        ];
        const options = shuffle([speaker2.japanese, ...distractors]);

        questions.push({
          id: `cc_${bab}_${i}`,
          bab,
          mode: 'conversation-complete',
          title: `Lengkapi Percakapan Bab ${bab}`,
          instruction: 'Pilih kalimat balasan yang paling tepat dan sopan untuk melengkapi dialog berikut:',
          question: `${speaker1.speaker}: 「${speaker1.japanese}」\n${speaker2.speaker}: 「 [ ... ? ... ] 」`,
          japaneseText: speaker1.japanese,
          audioText: speaker1.japanese,
          options,
          correctAnswer: speaker2.japanese,
          explanation: `Respon tepat dari ${speaker2.speaker} adalah "${speaker2.japanese}" (${speaker2.indonesian}).`
        });
      }
    } else {
      questions.push({
        id: `cc_${bab}_fallback`,
        bab,
        mode: 'conversation-complete',
        title: `Lengkapi Percakapan Bab ${bab}`,
        instruction: 'Pilih balasan yang tepat saat pertama kali bertemu seseorang:',
        question: 'Miller: 「はじめまして。ミラーです。よろしくおねがいします。」\nTanaka: 「 [ ... ] 」',
        options: shuffle([
          '田中です。こちらこそ よろしくお願いします。',
          'さようなら。',
          'いただきます。',
          'ごちそうさまでした。'
        ]),
        correctAnswer: '田中です。こちらこそ よろしくお願いします。',
        explanation: 'Ucapan balasan salam perkenalan adalah "こちらこそ よろしくお願いします" (Sama-sama, senang berkenalan dengan Anda).'
      });
    }
  }

  // 15. MIXED REVIEW (Latihan Campuran Bab 1–50)
  else if (mode === 'mixed-review') {
    // Pick random words across all chapters
    const allWordsShuffled = shuffle(KOTOBA_DATA).slice(0, count);
    allWordsShuffled.forEach((w, idx) => {
      const otherWords = shuffle(KOTOBA_DATA.filter(x => x.id !== w.id)).slice(0, 3);
      const options = shuffle([w.arti, ...otherWords.map(x => x.arti)]);
      questions.push({
        id: `mix_${idx}`,
        bab: w.bab,
        mode: 'mixed-review',
        title: `Review Campuran (Bab ${w.bab})`,
        instruction: `Soal campuran Bab 1–50: Tentukan arti kosakata dari Bab ${w.bab} berikut:`,
        question: `${w.kanji} (${w.kana})`,
        japaneseText: w.kanji,
        reading: w.kana,
        audioText: w.kana,
        options,
        correctAnswer: w.arti,
        explanation: `Kosakata Bab ${w.bab}: ${w.kanji} (${w.kana}) = "${w.arti}".`
      });
    });
  }

  // 16. TIMED EXAM (Ujian Batas Waktu)
  else if (mode === 'timed-exam') {
    const shuffledWords = shuffle(poolWords).slice(0, count);
    shuffledWords.forEach((w, idx) => {
      const otherWords = shuffle(poolWords.filter(x => x.id !== w.id)).slice(0, 3);
      const options = shuffle([w.arti, ...otherWords.map(x => x.arti)]);
      questions.push({
        id: `timed_${bab}_${idx}`,
        bab,
        mode: 'timed-exam',
        timeLimitSeconds: 15, // 15 seconds per question
        title: `Ujian Batas Waktu Bab ${bab}`,
        instruction: 'Jawab sebelum waktu habis! Pilih arti kata berikut:',
        question: `${w.kanji} (${w.kana})`,
        japaneseText: w.kanji,
        audioText: w.kana,
        reading: w.kana,
        options,
        correctAnswer: w.arti,
        explanation: `Waktu Anda terbatas. ${w.kanji} (${w.kana}) berarti "${w.arti}".`
      });
    });
  }

  // 17. REVIEW MISTAKES (Ulangi Soal Salah)
  else if (mode === 'review-mistakes') {
    const mistakes = getSavedMistakes();
    if (mistakes.length > 0) {
      return mistakes.slice(0, count);
    } else {
      // Diagnostic questions if no mistakes stored yet
      const sample = shuffle(poolWords).slice(0, 5);
      return sample.map((w, idx) => {
        const otherWords = shuffle(poolWords.filter(x => x.id !== w.id)).slice(0, 3);
        return {
          id: `diag_${bab}_${idx}`,
          bab,
          mode: 'review-mistakes',
          title: `Latihan Diagnostik Bab ${bab}`,
          instruction: 'Anda belum memiliki riwayat soal salah. Coba soal latihan diagnostik ini:',
          question: `${w.kanji} (${w.kana})`,
          japaneseText: w.kanji,
          reading: w.kana,
          audioText: w.kana,
          options: shuffle([w.arti, ...otherWords.map(x => x.arti)]),
          correctAnswer: w.arti,
          explanation: `Jawaban benar: ${w.arti}`
        };
      });
    }
  }

  // 18. FINAL EXAMINATION (Ujian Akhir Komprehensif)
  else if (mode === 'final-exam') {
    // 20 comprehensive questions combining vocab, grammar, and kanji
    const examWords = shuffle(KOTOBA_DATA).slice(0, Math.min(count, 20));
    examWords.forEach((w, idx) => {
      const otherWords = shuffle(KOTOBA_DATA.filter(x => x.id !== w.id)).slice(0, 3);
      questions.push({
        id: `fe_${idx}`,
        bab: w.bab,
        mode: 'final-exam',
        timeLimitSeconds: 20,
        title: `Ujian Akhir Minna no Nihongo · Soal #${idx + 1}`,
        instruction: `[Ujian Akhir Bab 1–50] Pilih jawaban yang benar untuk materi Bab ${w.bab}:`,
        question: `${w.kanji} (${w.kana})`,
        japaneseText: w.kanji,
        reading: w.kana,
        audioText: w.kana,
        options: shuffle([w.arti, ...otherWords.map(x => x.arti)]),
        correctAnswer: w.arti,
        explanation: `Bab ${w.bab}: ${w.kanji} (${w.kana}) = "${w.arti}".`
      });
    });
  }

  return questions;
}
