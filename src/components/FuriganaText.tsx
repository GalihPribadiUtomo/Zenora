import React, { useMemo, useState } from 'react';
import { Volume2, X, BookOpen } from 'lucide-react';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import { speakJapanese } from '../utils/audio';

interface WordLookupInfo {
  word: string;
  reading: string;
  meaning: string;
}

const MEANING_DICT = new Map<string, string>();
KOTOBA_DATA.forEach((w) => {
  if (w.kanji && w.arti && !MEANING_DICT.has(w.kanji)) MEANING_DICT.set(w.kanji, w.arti);
  if (w.kana && w.arti && !MEANING_DICT.has(w.kana)) MEANING_DICT.set(w.kana, w.arti);
});
KANJI_DATA.forEach((k) => {
  if (k.kanji && k.meaning && !MEANING_DICT.has(k.kanji)) MEANING_DICT.set(k.kanji, k.meaning);
});

// Common proper nouns, grammar terms, dialogues, and frequent words in Minna no Nihongo & Japanese learning
const COMMON_FURIGANA_DICT: Record<string, string> = {
  // Names & People in Minna no Nihongo
  '山田': 'やまだ',
  '佐藤': 'さとう',
  '田中': 'たなか',
  '木村': 'きむら',
  '林': 'はやし',
  '高橋': 'たかはし',
  '伊藤': 'いとう',
  '渡辺': 'わたなべ',
  '中村': 'なかむら',
  '小林': 'こばやし',
  '加藤': 'かとう',
  '吉田': 'よしだ',
  '松本': 'まつもと',
  '井上': 'いのうえ',
  '小川': 'おがわ',
  '黒澤': 'くろさわ',
  'けい子': 'けいこ',
  '太郎': 'たろう',
  '花子': 'はなこ',
  '富士山': 'ふじさん',
  '甲子園': 'こうしえん',
  '国会議事堂': 'こっかいぎじどう',
  '新幹線': 'しんかんせん',
  '大阪城': 'おおさかじょう',
  '金閣寺': 'きんかくじ',

  // Dialogues & Classroom Expressions (Fixing Image 2)
  '表現': 'ひょうげん',
  '表現を': 'ひょうげんを',
  '教えて': 'おしえて',
  '教えてください': 'おしえてください',
  '教えていただけませんか': 'おしえていただけませんか',
  'おしえていただけませんか': 'おしえていただけませんか',
  '会話': 'かいわ',
  '文法': 'ぶんぽう',
  '例文': 'れいぶん',
  '問題': 'もんだい',
  '質問': 'しつもん',
  '答え': 'こたえ',
  '回答': 'かいとう',
  '意味': 'いみ',
  '言葉': 'ことば',
  '単語': 'たんご',
  '漢字': 'かんじ',
  '基本': 'きほん',
  '文型': 'ぶんけい',
  '練習': 'れんしゅう',
  '自己紹介': 'じこしょうかい',
  '紹介': 'しょうかい',
  '説明': 'せつめい',
  '注意': 'ちゅうい',
  '確認': 'かくにん',
  '準備': 'じゅんび',
  '連絡': 'れんらく',
  '相談': 'そうだん',
  '報告': 'ほうこく',
  '許可': 'きょか',
  '禁止': 'きんし',
  '規則': 'きそく',
  '仕事': 'しごと',
  '職場': 'しょくば',
  '案内': 'あんない',
  '見学': 'けんがく',
  '失礼': 'しつれい',
  '失礼ですが': 'しつれいですが',
  'お名前': 'おなまえ',
  '名前': 'なまえ',
  'お願い': 'おねがい',
  'お願いします': 'おねがいします',
  'どうぞよろしく': 'どうぞよろしく',

  // Common Verbs & Conjugations in Minna no Nihongo
  // Common Terms in Lessons
  'ご家族': 'ごかぞく',
  '写真': 'しゃしん',
  '結婚': 'けっこん',
  'ご結婚': 'ごけっこん',
  '独身': 'どくしん',
  '高校': 'こうこう',
  '高校生': 'こうこうせい',
  '大学生': 'だいがくせい',
  'お仕事': 'おしごと',
  '銀行': 'ぎんこう',
  '市役所': 'しやくしょ',
  '公園': 'こうえん',
  '子ども': 'こども',
  '子供': 'こども',
  '可愛い': 'かわいい',
  '1人': 'ひとり',
  '2人': 'ふたり',
  '3人': 'さんにん',
  '4人': 'よにん',
  '一人': 'ひとり',
  '二人': 'ふたり',
  '三人': 'さんにん',
  '四人': 'よにん',
  '知って': 'しって',
  '知ります': 'しります',
  '知りません': 'しりません',
  '使って': 'つかって',
  '使います': 'つかいます',
  '止めて': 'とめて',
  '止めます': 'とめます',
  '住んで': 'すんで',
  '住みます': 'すみます',
  '吸って': 'すって',
  '吸います': 'すいます',
  '撮って': 'とって',
  '撮ります': 'とります',
  '遊んで': 'あそんで',
  '遊びます': 'あそびます',
  '初めまして': 'はじめまして',
  '初め': 'はじめ',
  '来ました': 'きました',
  '来ます': 'きます',
  '来ません': 'きません',
  '来てください': 'きてください',
  '来ない': 'こない',
  '来られる': 'こられる',
  '行きます': 'いきます',
  '行きました': 'いきました',
  '行きません': 'いきません',
  '行って': 'いって',
  '行かない': 'いかない',
  '食べます': 'たべます',
  '食べました': 'たべました',
  '食べて': 'たべて',
  '食べない': 'たべない',
  '飲みます': 'のみます',
  '飲んで': 'のんで',
  '買い物をします': 'かいものをします',
  '買い物': 'かいもの',
  '買います': 'かいます',
  '買いました': 'かいました',
  '買って': 'かって',
  '見ます': 'みます',
  '見ました': 'みました',
  '見て': 'みて',
  '聞きます': 'ききます',
  '聞いて': 'きいて',
  '読みます': 'よみます',
  '読んで': 'よんで',
  '書きます': 'かきます',
  '書いて': 'かいて',
  '話します': 'はなします',
  '話して': 'はなして',
  '会います': 'あいます',
  '会って': 'あって',
  '待ちます': 'まちます',
  '待って': 'まって',
  '呼びます': 'よびます',
  '呼んで': 'よんで',
  '借ります': 'かります',
  '借りて': 'かりて',
  '貸します': 'かします',
  '貸して': 'かして',
  '教えます': 'おしえます',
  '教え': 'おしえ',
  '習います': 'ならいます',
  '習って': 'ならって',
  '帰ります': 'かえります',
  '帰って': 'かえって',
  '起きます': 'おきます',
  '起きて': 'おきて',
  '寝ます': 'ねます',
  '寝て': 'ねて',
  '働きます': 'はたらきます',
  '働いて': 'はたらいて',
  '休みます': 'やすみます',
  '休んで': 'やすんで',
  '終わります': 'おわります',
  '終わって': 'おわって',
  '勉強します': 'べんきょうします',
  '勉強': 'べんきょう',
  '散歩します': 'さんぽします',
  '散歩': 'さんぽ',
  '運転': 'うんてん',
  '旅行': 'りょこう',

  // Time & Numbers
  '何歳': 'なんさい',
  '何時': 'なんじ',
  '何分': 'なんぷん',
  '何番線': 'なんばんせん',
  '何人': 'なんにん',
  '何曜日': 'なんようび',
  '何': 'なに',
  '月曜日': 'げつようび',
  '火曜日': 'かようび',
  '水曜日': 'すいようび',
  '木曜日': 'もくようび',
  '金曜日': 'きんようび',
  '土曜日': 'どようび',
  '日曜日': 'にちようび',
  '昨日': 'きのう',
  '今日': 'きょう',
  '明日': 'あした',
  '去年': 'きょねん',
  '今年': 'ことし',
  '来年': 'らいねん',
  '先週': 'せんしゅう',
  '今週': 'こんしゅう',
  '来週': 'らいしゅう',
  '先月': 'せんげつ',
  '今月': 'こんげつ',
  '来月': 'らいげつ',
  '朝': 'あさ',
  '昼': 'ひる',
  '晩': 'ばん',
  '夜': 'よる',
  '今': 'いま',
  '毎朝': 'まいあさ',
  '毎晩': 'まいばん',
  '毎日': 'まいにち',
  '毎週': 'まいしゅう',
  '毎月': 'まいつき',
  '毎年': 'まいとし',
  '番線': 'ばんせん',
  '階': 'かい',
  '円': 'えん',
  '百': 'ひゃく',
  '千': 'せん',
  '万': 'まん',
  '歳': 'さい',

  // Common Nouns in Lessons
  '私': 'わたし',
  '貴方': 'あなた',
  '彼': 'かれ',
  '彼女': 'かのじょ',
  '人': 'ひと',
  '方': 'かた',
  '男': 'おとこ',
  '女': 'おんな',
  '子': 'こ',
  '男の人': 'おとこのひと',
  '女の人': 'おんなのひと',
  '男の子': 'おとこのこ',
  '女の子': 'おんなのこ',
  '会社員': 'かいしゃいん',
  '学生': 'がくせい',
  '先生': 'せんせい',
  '教師': 'きょうし',
  '医者': 'いしゃ',
  '研究者': 'けんきゅうしゃ',
  '銀行員': 'ぎんこういん',
  '店員': 'てんいん',
  '駅員': 'えきいん',
  '大学': 'だいがく',
  '病院': 'びょういん',
  '電気': 'でんき',
  '誰': 'だれ',
  '本': 'ほん',
  '辞書': 'じしょ',
  '雑誌': 'ざっし',
  '新聞': 'しんぶん',
  '手帳': 'てちょう',
  '名刺': 'めいし',
  '時計': 'とけい',
  '傘': 'かさ',
  '車': 'くるま',
  '机': 'つくえ',
  '椅子': 'いす',
  '教室': 'きょうしつ',
  '食堂': 'しょくどう',
  '事務所': 'じむしょ',
  '会議室': 'かいぎしつ',
  '受付': 'うけつけ',
  '部屋': 'へや',
  '家': 'うち',
  '会社': 'かいしゃ',
  '郵便局': 'ゆうびんきょく',
  '図書館': 'としょかん',
  '美術館': 'びじゅつかん',
  '駅': 'えき',
  '空港': 'くうこう',
  '家族': 'かぞく',
  '友達': 'ともだち',
  '外国人': 'がいこくじん',
  '国': 'くに',
  '日本': 'にほん',
  '日本語': 'にほんご',
  '英語': 'えいご',
  '試験': 'しけん',
};

// Add Bab 1 - 50 Chapter Titles to Master Dict
for (let b = 1; b <= 50; b++) {
  COMMON_FURIGANA_DICT[`第${b}課`] = `だい${b}か`;
}

// Compile master dictionary from KOTOBA_DATA + common terms
const MASTER_DICT: Map<string, string> = new Map();

// 1. Populate from KOTOBA_DATA
KOTOBA_DATA.forEach((item) => {
  if (item.kanji && item.kana && item.kanji !== item.kana && /[\u4e00-\u9faf]/.test(item.kanji)) {
    MASTER_DICT.set(item.kanji, item.kana);
  }
});

// 2. Populate / Override with explicit grammar & common words
Object.entries(COMMON_FURIGANA_DICT).forEach(([k, v]) => {
  MASTER_DICT.set(k, v);
});

// 3. Populate single kanji fallback from KANJI_DATA
const SINGLE_KANJI_DICT: Map<string, string> = new Map();
KANJI_DATA.forEach((k) => {
  if (k.kanji && /[\u4e00-\u9faf]/.test(k.kanji)) {
    // Pick first clean kunyomi stem (before okurigana hyphen) or onyomi
    const rawKun = k.kunyomi?.split(/[,、\s・/]/)[0]?.trim();
    const kunStem = rawKun ? rawKun.split('-')[0].replace(/[.\-]/g, '').trim() : '';
    const rawOn = k.onyomi?.split(/[,、\s・/]/)[0]?.trim();
    const onHira = rawOn ? rawOn.replace(/[\u30a1-\u30f6]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 0x60)).replace(/[.\-]/g, '').trim() : '';
    const reading = kunStem || onHira || k.reading?.split(/[,、\s・/]/)[0]?.trim() || '';
    if (reading) {
      SINGLE_KANJI_DICT.set(k.kanji, reading);
    }
  }
});

// Explicit common single kanji overrides
const COMMON_SINGLE_OVERRIDE: Record<string, string> = {
  '現': 'げん',
  '表': 'ひょう',
  '教': 'おし',
  '第': 'だい',
  '課': 'か',
  '私': 'わたし',
  '人': 'ひと',
  '方': 'かた',
  '本': 'ほん',
  '日': 'ひ',
  '月': 'つき',
  '年': 'とし',
  '時': 'とき',
  '円': 'えん',
  '百': 'ひゃく',
  '千': 'せん',
  '万': 'まん',
  '歳': 'さい',
  '車': 'くるま',
  '山': 'やま',
  '川': 'かわ',
  '海': 'うみ',
  '手': 'て',
  '目': 'め',
  '口': 'くち',
  '足': 'あし',
  '雨': 'あめ',
  '水': 'みず',
  '火': 'ひ',
  '木': 'き',
  '金': 'かね',
  '土': 'つち',
  '子': 'こ',
  '親': 'おや',
  '誰': 'だれ',
  '何': 'なに',
  '前': 'まえ',
  '後': 'あと',
  '上': 'うえ',
  '下': 'した',
  '中': 'なか',
  '外': 'そと',
  '右': 'みぎ',
  '左': 'ひだり',
  '初': 'はじ',
  '来': 'き',
  '行': 'い',
  '食': 'た',
  '飲': 'の',
  '見': 'み',
  '聞': 'き',
  '書': 'か',
  '読': 'よ',
  '話': 'はな',
  '買': 'か',
  '願': 'ねが',
  '出': 'で',
  '入': 'はい',
  '生': 'う',
  '会': 'あ',
  '言': 'い',
  '待': 'ま',
  '立': 'た',
  '休': 'やす',
  '寝': 'ね',
  '起': 'お',
  '終': 'お',
  '習': 'なら',
  '借': 'か',
  '貸': 'か',
  '帰': 'かえ',
  '走': 'はし',
  '歩': 'ある',
  '近': 'ちか',
  '遠': 'とお',
  '早': 'はや',
  '遅': 'おそ',
  '多': 'おお',
  '少': 'すく',
  '大': 'おお',
  '小': 'ちい',
  '高': 'たか',
  '安': 'やす',
  '新': 'あたら',
  '古': 'ふる',
  '白': 'しろ',
  '黒': 'くろ',
  '赤': 'あか',
  '青': 'あお',
  '好': 'す',
  '意': 'い',
  '味': 'み',
  '文': 'ぶん',
  '法': 'ぽう',
  '例': 'れい',
  '問': 'もん',
  '題': 'だい',
  '答': 'こた',
  '仕': 'し',
  '事': 'ごと',
  '語': 'ご'
};
Object.entries(COMMON_SINGLE_OVERRIDE).forEach(([k, v]) => {
  SINGLE_KANJI_DICT.set(k, v);
});

// Sort dictionary keys by length descending to match longest phrases first
const SORTED_KEYS = Array.from(MASTER_DICT.keys()).sort((a, b) => b.length - a.length);

/**
 * Decompose a kanji word and its known kana reading into ruby parts
 * e.g., "初めまして" + "はじめまして" -> [{text: "初", rt: "はじ", isRuby: true}, {text: "めまして", isRuby: false}]
 */
export function decomposeToRuby(kanjiWord: string, kanaReading: string): { text: string; rt?: string; isRuby: boolean }[] {
  if (kanjiWord === kanaReading || !/[\u4e00-\u9faf]/.test(kanjiWord)) {
    return [{ text: kanjiWord, isRuby: false }];
  }

  // Find common kana prefix
  let prefixLen = 0;
  while (
    prefixLen < kanjiWord.length &&
    prefixLen < kanaReading.length &&
    kanjiWord[prefixLen] === kanaReading[prefixLen] &&
    !/[\u4e00-\u9faf]/.test(kanjiWord[prefixLen])
  ) {
    prefixLen++;
  }

  // Find common kana suffix
  let suffixLen = 0;
  while (
    suffixLen < (kanjiWord.length - prefixLen) &&
    suffixLen < (kanaReading.length - prefixLen) &&
    kanjiWord[kanjiWord.length - 1 - suffixLen] === kanaReading[kanaReading.length - 1 - suffixLen] &&
    !/[\u4e00-\u9faf]/.test(kanjiWord[kanjiWord.length - 1 - suffixLen])
  ) {
    suffixLen++;
  }

  const parts: { text: string; rt?: string; isRuby: boolean }[] = [];

  if (prefixLen > 0) {
    parts.push({ text: kanjiWord.slice(0, prefixLen), isRuby: false });
  }

  const midKanji = kanjiWord.slice(prefixLen, kanjiWord.length - suffixLen);
  const midKana = kanaReading.slice(prefixLen, kanaReading.length - suffixLen);

  if (midKanji) {
    parts.push({ text: midKanji, rt: midKana, isRuby: true });
  }

  if (suffixLen > 0) {
    parts.push({ text: kanjiWord.slice(kanjiWord.length - suffixLen), isRuby: false });
  }

  return parts;
}

/**
 * Parse text containing explicit bracketed annotations, e.g. "現場[げんば]の[つか]い[かた]を..."
 */
function parseBracketedFurigana(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  const regex = /([\u4e00-\u9faf]+)\[([^\s\]]+)\]|\[([^\s\]]+)\]/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyCounter = 0;

  while ((match = regex.exec(text)) !== null) {
    // Text before match
    if (match.index > lastIndex) {
      elements.push(<span key={`brk-pre-${keyCounter++}`}>{text.substring(lastIndex, match.index)}</span>);
    }

    if (match[1] && match[2]) {
      // Form: 漢字[かんじ]
      elements.push(
        <ruby key={`brk-${keyCounter++}`} className="ruby-furigana">
          {match[1]}
          <rt className="ruby-rt">{match[2]}</rt>
        </ruby>
      );
    } else if (match[3]) {
      // Bracketed kana standalone
      elements.push(<span key={`brk-plain-${keyCounter++}`}>{match[3]}</span>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(<span key={`brk-post-${keyCounter++}`}>{text.substring(lastIndex)}</span>);
  }

  return elements;
}

/**
 * Parse any Japanese text sentence and render kanji with furigana on top (CONTOH PERTAMA)
 */
export function parseFuriganaElements(
  text: string,
  directReading?: string,
  onLookup?: (info: WordLookupInfo) => void
): React.ReactNode[] {
  if (!text) return [];

  // Check if text already has bracket furigana, e.g. "現場[げんば]..."
  if (/[\u4e00-\u9faf]+\[[^\]]+\]/.test(text)) {
    return parseBracketedFurigana(text);
  }

  // If a direct reading is provided for this exact word (e.g. from Kotoba table)
  if (directReading && /[\u4e00-\u9faf]/.test(text)) {
    const parts = decomposeToRuby(text, directReading);
    const meaning = MEANING_DICT.get(text) || MEANING_DICT.get(directReading);
    return parts.map((p, i) =>
      p.isRuby && p.rt ? (
        <ruby
          key={`dir-${i}`}
          onClick={
            meaning && onLookup
              ? (e) => {
                  e.stopPropagation();
                  onLookup({ word: text, reading: directReading, meaning });
                }
              : undefined
          }
          className={`ruby-furigana ${meaning && onLookup ? 'cursor-pointer hover:text-[#69C9DF] transition-colors' : ''}`}
          title={meaning ? `${text} (${directReading}): ${meaning}` : undefined}
        >
          {p.text}
          <rt className="ruby-rt">{p.rt}</rt>
        </ruby>
      ) : (
        <span key={`dir-${i}`}>{p.text}</span>
      )
    );
  }

  // If text contains no kanji, return as plain text
  if (!/[\u4e00-\u9faf]/.test(text)) {
    return [text];
  }

  const elements: React.ReactNode[] = [];
  let i = 0;
  let keyCounter = 0;

  while (i < text.length) {
    // 1. Try to match longest phrase in master dictionary
    let matched = false;
    for (const key of SORTED_KEYS) {
      if (text.startsWith(key, i)) {
        const kana = MASTER_DICT.get(key)!;
        const meaning = MEANING_DICT.get(key) || MEANING_DICT.get(kana);
        const parts = decomposeToRuby(key, kana);
        parts.forEach((p) => {
          if (p.isRuby && p.rt) {
            elements.push(
              <ruby
                key={`furi-${keyCounter++}`}
                onClick={
                  meaning && onLookup
                    ? (e) => {
                        e.stopPropagation();
                        onLookup({ word: key, reading: kana, meaning });
                      }
                    : undefined
                }
                className={`ruby-furigana ${meaning && onLookup ? 'cursor-pointer hover:text-[#69C9DF] underline decoration-[#3978D6]/30 decoration-dotted underline-offset-4 transition-colors' : ''}`}
                title={meaning ? `Klik untuk arti: ${key} (${kana})` : undefined}
              >
                {p.text}
                <rt className="ruby-rt">{p.rt}</rt>
              </ruby>
            );
          } else {
            elements.push(<span key={`text-${keyCounter++}`}>{p.text}</span>);
          }
        });
        i += key.length;
        matched = true;
        break;
      }
    }

    if (matched) continue;

    // 2. Check if current character is an isolated kanji
    const char = text[i];
    if (/[\u4e00-\u9faf]/.test(char)) {
      const fallbackReading = SINGLE_KANJI_DICT.get(char) || '';
      const meaning = MEANING_DICT.get(char);
      if (fallbackReading) {
        elements.push(
          <ruby
            key={`furi-${keyCounter++}`}
            onClick={
              meaning && onLookup
                ? (e) => {
                    e.stopPropagation();
                    onLookup({ word: char, reading: fallbackReading, meaning });
                  }
                : undefined
            }
            className={`ruby-furigana ${meaning && onLookup ? 'cursor-pointer hover:text-[#69C9DF] transition-colors' : ''}`}
          >
            {char}
            <rt className="ruby-rt">{fallbackReading}</rt>
          </ruby>
        );
      } else {
        elements.push(<span key={`text-${keyCounter++}`}>{char}</span>);
      }
      i++;
      continue;
    }

    // 3. Accumulate consecutive non-kanji characters
    let nonKanji = '';
    while (i < text.length && !/[\u4e00-\u9faf]/.test(text[i])) {
      nonKanji += text[i];
      i++;
    }
    if (nonKanji) {
      elements.push(<span key={`text-${keyCounter++}`}>{nonKanji}</span>);
    }
  }

  return elements;
}

interface FuriganaTextProps {
  text?: string;
  reading?: string;
  className?: string;
  enableLookup?: boolean;
}

/**
 * Standard Furigana Component (CONTOH PERTAMA)
 * Displays furigana directly above each Kanji character, maintaining line baseline and responsive wrapping.
 */
export const FuriganaText: React.FC<FuriganaTextProps> = ({
  text = '',
  reading,
  className = '',
  enableLookup = true
}) => {
  const [lookupInfo, setLookupInfo] = useState<WordLookupInfo | null>(null);

  const renderedElements = useMemo(() => {
    return parseFuriganaElements(
      text,
      reading,
      enableLookup ? (info) => setLookupInfo(info) : undefined
    );
  }, [text, reading, enableLookup]);

  return (
    <>
      <span className={`japanese-text inline leading-relaxed ${className}`}>{renderedElements}</span>
      {lookupInfo && (
        <span
          className="fixed bottom-5 right-5 z-50 w-72 p-4 rounded-2xl bg-[#111F38] border border-[#3978D6]/50 shadow-[0_15px_40px_rgba(8, 21, 47,0.95)] text-left animate-fade-in block"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="flex items-start justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold text-[#83B7EE] uppercase">
              <BookOpen className="w-3 h-3" />
              <span>Kamus Cepat</span>
            </span>
            <button
              type="button"
              onClick={() => setLookupInfo(null)}
              className="p-0.5 rounded-lg text-[#7186A5] hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </span>
          <span className="flex items-center justify-between gap-2">
            <span>
              <span className="block text-xl font-black text-white kanji-font">{lookupInfo.word}</span>
              <span className="block text-xs font-mono text-[#69C9DF]">{lookupInfo.reading}</span>
            </span>
            <button
              type="button"
              onClick={() => speakJapanese(lookupInfo.word)}
              className="p-2 rounded-xl bg-[#172945] text-[#83B7EE] hover:text-white border border-[#3978D6]/30"
              title="Dengarkan"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </span>
          <span className="block mt-2 pt-2 border-t border-[#3978D6]/20 text-xs font-semibold text-[#F2F6FC]">
            {lookupInfo.meaning}
          </span>
        </span>
      )}
    </>
  );
};
