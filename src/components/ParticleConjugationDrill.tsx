import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Volume2,
  ArrowRight,
  RotateCcw,
  Award,
  BookOpen,
  Zap
} from 'lucide-react';
import { speakJapanese, sound } from '../utils/audio';
import { recordMistake, resolveMistake } from '../utils/exerciseGenerator';
import { FuriganaText } from './FuriganaText';

interface ParticleQuestion {
  id: string;
  sentenceBefore: string;
  sentenceAfter: string;
  fullSentence: string;
  translation: string;
  correct: string;
  options: string[];
  explanation: string;
  level: 'N5' | 'N4';
}

interface ConjugationItem {
  id: string;
  dictForm: string;
  reading: string;
  meaning: string;
  group: 'Gol. 1 (Godan)' | 'Gol. 2 (Ichidan)' | 'Gol. 3 (Tidak Beraturan)';
  targetFormName: string;
  correct: string;
  options: string[];
  hint: string;
}

const PARTICLE_BANK: ParticleQuestion[] = [
  {
    id: 'pt_1',
    sentenceBefore: '私',
    sentenceAfter: '毎日日本語を勉強します。',
    fullSentence: '私は毎日日本語を勉強します。',
    translation: 'Saya belajar bahasa Jepang setiap hari.',
    correct: 'は',
    options: ['は', 'が', 'を', 'に'],
    explanation: 'Partikel は (wa) menandai topik utama kalimat ("Saya").',
    level: 'N5'
  },
  {
    id: 'pt_2',
    sentenceBefore: '図書館',
    sentenceAfter: '本を借りました。',
    fullSentence: '図書館で本を借りました。',
    translation: 'Saya meminjam buku di perpustakaan.',
    correct: 'で',
    options: ['で', 'に', 'へ', 'を'],
    explanation: 'Partikel で (de) menandai tempat berlangsungnya suatu aktivitas/aksi ("meminjam di perpustakaan").',
    level: 'N5'
  },
  {
    id: 'pt_3',
    sentenceBefore: '教室',
    sentenceAfter: '机と椅子があります。',
    fullSentence: '教室に机と椅子があります。',
    translation: 'Di ruang kelas ada meja dan kursi.',
    correct: 'に',
    options: ['に', 'で', 'へ', 'と'],
    explanation: 'Untuk kata kerja keberadaan あります/います, lokasi ditandai dengan partikel に (ni), bukan で.',
    level: 'N5'
  },
  {
    id: 'pt_4',
    sentenceBefore: '友達',
    sentenceAfter: '映画を見に行きました。',
    fullSentence: '友達と映画を見に行きました。',
    translation: 'Saya pergi menonton film bersama teman.',
    correct: 'と',
    options: ['と', 'に', 'で', 'も'],
    explanation: 'Partikel と (to) berarti "bersama" ketika diikuti oleh orang.',
    level: 'N5'
  },
  {
    id: 'pt_5',
    sentenceBefore: 'バス',
    sentenceAfter: '会社へ行きます。',
    fullSentence: 'バスで会社へ行きます。',
    translation: 'Saya pergi ke kantor naik bus.',
    correct: 'で',
    options: ['で', 'に', 'を', 'から'],
    explanation: 'Partikel で (de) digunakan untuk menyatakan alat transportasi atau cara.',
    level: 'N5'
  },
  {
    id: 'pt_6',
    sentenceBefore: '日本語',
    sentenceAfter: '上手ですね。',
    fullSentence: '日本語が上手ですね。',
    translation: 'Bahasa Jepangnya mahir ya.',
    correct: 'が',
    options: ['が', 'を', 'は', 'に'],
    explanation: 'Kata sifat kemampuan/kesukaan seperti 上手 (jouzu), 好き (suki), 分かります selalu menggunakan partikel が (ga).',
    level: 'N5'
  },
  {
    id: 'pt_7',
    sentenceBefore: '駅',
    sentenceAfter: '歩いて10分かかります。',
    fullSentence: '駅から歩いて10分かかります。',
    translation: 'Dari stasiun berjalan kaki memakan waktu 10 menit.',
    correct: 'から',
    options: ['から', 'まで', 'に', 'で'],
    explanation: 'Partikel から (kara) menandai titik awal tempat atau waktu ("dari stasiun").',
    level: 'N5'
  },
  {
    id: 'pt_8',
    sentenceBefore: '田中さん',
    sentenceAfter: 'パソコンをもらいました。',
    fullSentence: '田中さんにパソコンをもらいました。',
    translation: 'Saya menerima laptop dari Pak Tanaka.',
    correct: 'に',
    options: ['に', 'を', 'が', 'へ'],
    explanation: 'Pada kata kerja menerima (もらいます), pihak pemberi ditandai dengan に (atau から).',
    level: 'N5'
  },
  {
    id: 'pt_9',
    sentenceBefore: '部屋をきれい',
    sentenceAfter: '掃除しました。',
    fullSentence: '部屋をきれいに掃除しました。',
    translation: 'Saya membersihkan kamar hingga bersih.',
    correct: 'に',
    options: ['に', 'を', 'で', 'が'],
    explanation: 'Kata sifat-na (きれい) berubah menjadi keterangan cara (adverb) dengan menambahkan に sebelum kata kerja.',
    level: 'N4'
  },
  {
    id: 'pt_10',
    sentenceBefore: '日本の料理',
    sentenceAfter: '中で寿司が一番好きです。',
    fullSentence: '日本の料理の中で寿司が一番好きです。',
    translation: 'Di antara masakan Jepang, saya paling suka sushi.',
    correct: 'の',
    options: ['の', 'に', 'で', 'と'],
    explanation: 'Pola ～の中で (di antara...) menghubungkan kata benda kategori dengan の.',
    level: 'N4'
  }
];

const CONJUGATION_BANK: ConjugationItem[] = [
  {
    id: 'cj_1',
    dictForm: '書く (かく)',
    reading: 'kaku',
    meaning: 'menulis',
    group: 'Gol. 1 (Godan)',
    targetFormName: 'Bentuk-Te (て形)',
    correct: '書いて',
    options: ['書いて', '書って', '書いで', '書きて'],
    hint: 'Godan berakhiran ～く berubah menjadi ～いて (kecuali 行く → 行って).'
  },
  {
    id: 'cj_2',
    dictForm: '食べる (たべる)',
    reading: 'taberu',
    meaning: 'makan',
    group: 'Gol. 2 (Ichidan)',
    targetFormName: 'Bentuk-Nai (ない形)',
    correct: '食べない',
    options: ['食べない', '食べらない', '食ばない', '食べなく'],
    hint: 'Ichidan cukup buang ～る lalu tambahkan ～ない.'
  },
  {
    id: 'cj_3',
    dictForm: '飲む (のむ)',
    reading: 'nomu',
    meaning: 'minum',
    group: 'Gol. 1 (Godan)',
    targetFormName: 'Bentuk-Ta (た形 / Lampau)',
    correct: '飲んだ',
    options: ['飲んだ', '飲った', '飲いた', '飲みた'],
    hint: 'Godan berakhiran ～む, ～ぶ, ～ぬ berubah menjadi ～んだ.'
  },
  {
    id: 'cj_4',
    dictForm: '来る (くる)',
    reading: 'kuru',
    meaning: 'datang',
    group: 'Gol. 3 (Tidak Beraturan)',
    targetFormName: 'Bentuk-Nai (ない形)',
    correct: '来ない (こない)',
    options: ['来ない (こない)', '来ない (きない)', '来らない (くらない)', '来れない (これない)'],
    hint: 'Perhatikan perubahan vokal tidak beraturan: 来る (kuru) → 来ない (konai).'
  },
  {
    id: 'cj_5',
    dictForm: 'する',
    reading: 'suru',
    meaning: 'melakukan',
    group: 'Gol. 3 (Tidak Beraturan)',
    targetFormName: 'Bentuk Potensial (Bisa)',
    correct: 'できる',
    options: ['できる', 'すれる', 'しられる', 'される'],
    hint: 'Bentuk potensial dari する selalu menjadi できる (bisa melakukan).'
  },
  {
    id: 'cj_6',
    dictForm: '泳ぐ (およぐ)',
    reading: 'oyogu',
    meaning: 'berenang',
    group: 'Gol. 1 (Godan)',
    targetFormName: 'Bentuk-Te (て形)',
    correct: '泳いで',
    options: ['泳いで', '泳いて', '泳って', '泳ぎて'],
    hint: 'Godan berakhiran ～ぐ berubah menjadi ～いで (berbunyi de).'
  },
  {
    id: 'cj_7',
    dictForm: '話す (はなす)',
    reading: 'hanasu',
    meaning: 'berbicara',
    group: 'Gol. 1 (Godan)',
    targetFormName: 'Bentuk Potensial (Bisa)',
    correct: '話せる',
    options: ['話せる', '話される', '話しる', '話そう'],
    hint: 'Godan vokal -u (su) bergeser ke baris -e (se) + る → 話せる.'
  },
  {
    id: 'cj_8',
    dictForm: '見る (みる)',
    reading: 'miru',
    meaning: 'melihat',
    group: 'Gol. 2 (Ichidan)',
    targetFormName: 'Bentuk Ajakan (よう形)',
    correct: '見よう',
    options: ['見よう', '見ろう', '見おう', '見ない'],
    hint: 'Ichidan buang ～る lalu tambahkan ～よう (ayo melihat).'
  }
];

interface ParticleConjugationDrillProps {
  onComplete?: (score: number, total: number) => void;
}

export const ParticleConjugationDrill: React.FC<ParticleConjugationDrillProps> = ({ onComplete }) => {
  const [drillType, setDrillType] = useState<'particle' | 'conjugation'>('particle');
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const total = drillType === 'particle' ? PARTICLE_BANK.length : CONJUGATION_BANK.length;
  const currentParticle = drillType === 'particle' ? PARTICLE_BANK[idx] : null;
  const currentConj = drillType === 'conjugation' ? CONJUGATION_BANK[idx] : null;

  const resetDrill = (nextType: 'particle' | 'conjugation') => {
    sound.playClick();
    setDrillType(nextType);
    setIdx(0);
    setSelected(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSelect = (opt: string) => {
    if (isSubmitted) return;
    setSelected(opt);
    setIsSubmitted(true);

    const correct = drillType === 'particle' ? currentParticle!.correct : currentConj!.correct;
    const mistakeId = drillType === 'particle' ? currentParticle!.id : currentConj!.id;

    if (opt === correct) {
      sound.playCorrect();
      setScore((prev) => prev + 1);
      resolveMistake(mistakeId);
    } else {
      sound.playIncorrect();
      if (drillType === 'particle' && currentParticle) {
        recordMistake({
          id: mistakeId,
          bab: 0,
          mode: 'fill-blank',
          title: `Latihan Partikel (${currentParticle.level})`,
          instruction: 'Pilih partikel yang paling tepat:',
          question: `${currentParticle.sentenceBefore} ( ___ ) ${currentParticle.sentenceAfter}`,
          audioText: currentParticle.fullSentence,
          options: currentParticle.options,
          correctAnswer: currentParticle.correct,
          explanation: currentParticle.explanation
        });
      } else if (drillType === 'conjugation' && currentConj) {
        recordMistake({
          id: mistakeId,
          bab: 0,
          mode: 'grammar-test',
          title: `Konjugasi ${currentConj.group}`,
          instruction: `Ubah ke ${currentConj.targetFormName}:`,
          question: `${currentConj.dictForm} — ${currentConj.meaning}`,
          options: currentConj.options,
          correctAnswer: currentConj.correct,
          explanation: currentConj.hint
        });
      }
    }
  };

  const handleNext = () => {
    sound.playClick();
    if (idx + 1 < total) {
      setIdx((prev) => prev + 1);
      setSelected(null);
      setIsSubmitted(false);
    } else {
      setIsFinished(true);
      sound.playFanfare();
      if (onComplete) onComplete(score, total);
    }
  };

  return (
    <div className="space-y-6 text-left animate-fade-in">
      {/* Header Switcher */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-[#08152F] via-[#111F38] to-[#172945] border border-[#3978D6]/35 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#08152F] border border-[#3978D6]/40 text-[#83B7EE] text-xs font-black font-mono mb-2">
            <Zap className="w-3.5 h-3.5" />
            <span>DRILL TATA BAHASA INTENSIF</span>
          </div>
          <h2 className="text-2xl font-black text-white font-['Manrope']">
            Latihan Partikel & Konjugasi Kata Kerja
          </h2>
          <p className="text-xs sm:text-sm text-[#A9BBD3] mt-1">
            Kuasai penggunaan partikel N5–N4 dan perubahan bentuk kata kerja (Te, Nai, Ta, Potensial) dengan pembahasan instan.
          </p>
        </div>

        <div className="inline-flex p-1.5 rounded-2xl bg-[#08152F] border border-[#3978D6]/30 shrink-0">
          <button
            onClick={() => resetDrill('particle')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              drillType === 'particle'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-md'
                : 'text-[#A9BBD3] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Partikel ({PARTICLE_BANK.length})</span>
          </button>
          <button
            onClick={() => resetDrill('conjugation')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              drillType === 'conjugation'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white shadow-md'
                : 'text-[#A9BBD3] hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Konjugasi ({CONJUGATION_BANK.length})</span>
          </button>
        </div>
      </div>

      {/* Main Drill Card */}
      {isFinished ? (
        <div className="p-8 rounded-3xl bg-[#111F38] border border-[#3978D6]/30 text-center space-y-5 shadow-xl">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#3978D6] to-[#69C9DF] flex items-center justify-center text-white shadow-lg">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">
              Drill {drillType === 'particle' ? 'Partikel' : 'Konjugasi'} Selesai!
            </h3>
            <p className="text-sm text-[#A9BBD3] mt-1">
              Skor Anda: <span className="text-[#45C6A5] font-black">{score}</span> / {total} ({Math.round((score / total) * 100)}%)
            </p>
          </div>
          <button
            onClick={() => resetDrill(drillType)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white font-bold text-xs shadow-md hover:brightness-110"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Drill Ini</span>
          </button>
        </div>
      ) : (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111F38] border border-[#3978D6]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#A9BBD3]">
            <span>Soal {idx + 1} / {total}</span>
            <span className="text-[#45C6A5] font-bold">Skor: {score}</span>
          </div>

          {drillType === 'particle' && currentParticle && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-[#08152F] border border-[#3978D6]/25 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#172945] border border-[#3978D6]/30 text-[10px] font-mono font-bold text-[#69C9DF]">
                    Level {currentParticle.level}
                  </span>
                  <button
                    onClick={() => speakJapanese(currentParticle.fullSentence)}
                    className="p-2 rounded-xl bg-[#172945] text-[#83B7EE] hover:text-white border border-[#3978D6]/30"
                    title="Dengarkan kalimat"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-xl sm:text-2xl font-black text-white leading-relaxed kanji-font">
                  <FuriganaText text={currentParticle.sentenceBefore} />
                  <span className="inline-block mx-2 px-4 py-0.5 rounded-xl bg-[#3978D6]/20 border border-[#3978D6]/60 text-[#83B7EE]">
                    {isSubmitted ? currentParticle.correct : '___'}
                  </span>
                  <FuriganaText text={currentParticle.sentenceAfter} />
                </div>
                <p className="text-xs sm:text-sm text-[#A9BBD3]">{currentParticle.translation}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {currentParticle.options.map((opt) => {
                  let btn = 'bg-[#08152F] hover:bg-[#172945] border-[#3978D6]/30 text-white';
                  if (isSubmitted) {
                    if (opt === currentParticle.correct) btn = 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
                    else if (opt === selected) btn = 'bg-rose-500/20 border-rose-500 text-rose-300';
                    else btn = 'opacity-40 bg-[#08152F] border-transparent text-[#7186A5]';
                  }
                  return (
                    <button
                      key={opt}
                      disabled={isSubmitted}
                      onClick={() => handleSelect(opt)}
                      className={`p-4 rounded-2xl border text-xl font-black kanji-font transition-all ${btn}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-[#172945]/70 border border-[#3978D6]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 text-xs">
                    <div className={`font-bold flex items-center gap-1.5 ${selected === currentParticle.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {selected === currentParticle.correct ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>{selected === currentParticle.correct ? 'Tepat sekali!' : `Kurang tepat. Jawaban: ${currentParticle.correct}`}</span>
                    </div>
                    <p className="text-[#A9BBD3]">{currentParticle.explanation}</p>
                  </div>
                  <button
                    onClick={handleNext}
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white text-xs font-bold"
                  >
                    <span>{idx + 1 === total ? 'Lihat Hasil' : 'Soal Berikutnya'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {drillType === 'conjugation' && currentConj && (
            <div className="space-y-5">
              <div className="p-6 rounded-2xl bg-[#08152F] border border-[#3978D6]/25 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#172945] border border-[#3978D6]/30 text-[10px] font-mono font-bold text-[#83B7EE]">
                    {currentConj.group}
                  </span>
                  <button
                    onClick={() => speakJapanese(currentConj.dictForm.split(' ')[0])}
                    className="p-2 rounded-xl bg-[#172945] text-[#83B7EE] hover:text-white border border-[#3978D6]/30"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-xs font-bold text-[#69C9DF] uppercase tracking-wider">
                  Ubah ke: {currentConj.targetFormName}
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white kanji-font">
                  {currentConj.dictForm}
                </div>
                <p className="text-xs text-[#A9BBD3]">Arti: {currentConj.meaning}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentConj.options.map((opt) => {
                  let btn = 'bg-[#08152F] hover:bg-[#172945] border-[#3978D6]/30 text-white';
                  if (isSubmitted) {
                    if (opt === currentConj.correct) btn = 'bg-emerald-500/20 border-emerald-500 text-emerald-300';
                    else if (opt === selected) btn = 'bg-rose-500/20 border-rose-500 text-rose-300';
                    else btn = 'opacity-40 bg-[#08152F] border-transparent text-[#7186A5]';
                  }
                  return (
                    <button
                      key={opt}
                      disabled={isSubmitted}
                      onClick={() => handleSelect(opt)}
                      className={`p-4 rounded-2xl border text-base font-black kanji-font transition-all ${btn}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-[#172945]/70 border border-[#3978D6]/35 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 text-xs">
                    <div className={`font-bold flex items-center gap-1.5 ${selected === currentConj.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {selected === currentConj.correct ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      <span>{selected === currentConj.correct ? 'Benar!' : `Jawaban: ${currentConj.correct}`}</span>
                    </div>
                    <p className="text-[#A9BBD3]">{currentConj.hint}</p>
                  </div>
                  <button
                    onClick={handleNext}
                    className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white text-xs font-bold"
                  >
                    <span>{idx + 1 === total ? 'Lihat Hasil' : 'Soal Berikutnya'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
