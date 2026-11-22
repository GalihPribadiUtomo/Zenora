import React, { useMemo } from 'react';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';

// Common proper nouns, names, and frequent grammar/kaiwa words in Minna no Nihongo
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

  // Common Verbs & Expressions in Minna no Nihongo
  '初めまして': 'はじめまして',
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
  '教えて': 'おしえて',
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
  '案内します': 'あんないします',
  '案内': 'あんない',
  '見学します': 'けんがくします',
  '見学': 'けんがく',
  '自己紹介': 'じこしょうかい',
  '紹介': 'しょうかい',
  '説明': 'せつめい',
  '運転': 'うんてん',
  '旅行': 'りょこう',
  '散歩': 'さんぽ',
  '散歩します': 'さんぽします',
  'お願いします': 'おねがいします',
  '失礼ですが': 'しつれいですが',
  'お名前': 'おなまえ',
  '名前': 'なまえ',
  'どうぞよろしく': 'どうぞよろしく',

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
  '階段': 'かいだん',
  '手洗': 'てあらい',
  'お手洗い': 'おてあらい',
  '国': 'くに',
  '言葉': 'ことば',
  '日本語': 'にほんご',
  '英語': 'えいご',
  '日本': 'にほん',
  '日本人': 'にほんじん',
  'アメリカ': 'あめりか',
  '電話': 'でんわ',
  '手紙': 'てがみ',
  '写真': 'しゃしん',
  '映画': 'えいが',
  '音楽': 'おんがく',
  '歌': 'うた',
  '友達': 'ともだち',
  '家族': 'かぞく',
  '両親': 'りょうしん',
  '兄弟': 'きょうだい',
  '子供': 'こども',
  '父': 'ちち',
  '母': 'はは',
  'お父さん': 'おとうさん',
  'お母さん': 'おかあさん',
  '荷物': 'にもつ',
  '切符': 'きっぷ',
  '駅': 'えき',
  '電車': 'でんしゃ',
  '地下鉄': 'ちかてつ',
  '自転車': 'じてんしゃ',
  '自動車': 'じどうしゃ',
  '飛行機': 'ひこうき',
  '船': 'ふね',
  '銀行': 'ぎんこう',
  '郵便局': 'ゆうびんきょく',
  '図書館': 'としょかん',
  '美術館': 'びじゅつかん',
  '学校': 'がっこう',
  '会社': 'かいしゃ',
  '水': 'みず',
  'お茶': 'おちゃ',
  '肉': 'にく',
  '魚': 'さかな',
  '野菜': 'やさい',
  'ご飯': 'ごはん',
  '朝ご飯': 'あさごはん',
  '昼ご飯': 'ひるごはん',
  '晩ご飯': 'ばんごはん',
  '料理': 'りょうり',
  '天気': 'てんき',
  '雨': 'あめ',
  '雪': 'ゆき',
  '山': 'やま',
  '海': 'うみ',
  '川': 'かわ',
  '花': 'はな',
  '犬': 'いぬ',
  '猫': 'ねこ',
  '鳥': 'とり',
  '例文': 'れいぶん',
  '文法': 'ぶんぽう',
  '会話': 'かいわ',
  '問題': 'もんだい',
  '練習': 'れんしゅう',
  '復習': 'ふくしゅう',
  '試験': 'しけん',
};

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
    // Pick first clean kunyomi or onyomi (hiragana)
    const kun = k.kunyomi?.split(/[,、\s]/)[0]?.replace(/[.\-]/g, '').trim();
    const on = k.onyomi?.split(/[,、\s]/)[0]?.replace(/[.\-]/g, '').trim();
    // Convert katakana on-reading to hiragana
    const onHira = on ? on.replace(/[\u30a1-\u30f6]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 0x60)) : '';
    const reading = kun || onHira || k.reading || '';
    if (reading) {
      SINGLE_KANJI_DICT.set(k.kanji, reading);
    }
  }
});

// Explicit common single kanji overrides
const COMMON_SINGLE_OVERRIDE: Record<string, string> = {
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
  '教': 'おし',
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
};
Object.entries(COMMON_SINGLE_OVERRIDE).forEach(([k, v]) => {
  SINGLE_KANJI_DICT.set(k, v);
});

// Sort dictionary keys by length descending to match longest phrases first
const SORTED_KEYS = Array.from(MASTER_DICT.keys()).sort((a, b) => b.length - a.length);

/**
 * Decompose a kanji word and its known kana reading into ruby parts
 * e.g., "初めまして" + "はじめまして" -> [{kanji: "初", furigana: "はじ", isRuby: true}, {kanji: "めまして", isRuby: false}]
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
 * Parse any Japanese text sentence and render kanji with furigana on top
 */
export function parseFuriganaElements(text: string, directReading?: string): React.ReactNode[] {
  if (!text) return [];

  // If a direct reading is provided for this exact word (e.g. from Kotoba table)
  if (directReading && /[\u4e00-\u9faf]/.test(text)) {
    const parts = decomposeToRuby(text, directReading);
    return parts.map((p, i) =>
      p.isRuby && p.rt ? (
        <ruby key={`dir-${i}`} className="ruby-furigana inline-flex flex-col-reverse items-center align-baseline">
          <span className="ruby-base leading-none">{p.text}</span>
          <rt className="ruby-rt text-[0.55em] leading-none text-[#8FB4E3] select-none font-bold pb-0.5 tracking-tight">
            {p.rt}
          </rt>
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
        const parts = decomposeToRuby(key, kana);
        parts.forEach((p) => {
          if (p.isRuby && p.rt) {
            elements.push(
              <ruby
                key={`furi-${keyCounter++}`}
                className="ruby-furigana inline-flex flex-col-reverse items-center align-baseline mx-[0.5px]"
              >
                <span className="ruby-base leading-none">{p.text}</span>
                <rt className="ruby-rt text-[0.55em] leading-none text-[#8FB4E3] select-none font-bold pb-0.5 tracking-tight">
                  {p.rt}
                </rt>
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
      if (fallbackReading) {
        elements.push(
          <ruby
            key={`furi-${keyCounter++}`}
            className="ruby-furigana inline-flex flex-col-reverse items-center align-baseline mx-[0.5px]"
          >
            <span className="ruby-base leading-none">{char}</span>
            <rt className="ruby-rt text-[0.55em] leading-none text-[#8FB4E3] select-none font-bold pb-0.5 tracking-tight">
              {fallbackReading}
            </rt>
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
}

export const FuriganaText: React.FC<FuriganaTextProps> = ({
  text = '',
  reading,
  className = '',
}) => {
  const renderedElements = useMemo(() => {
    return parseFuriganaElements(text, reading);
  }, [text, reading]);

  return <span className={`inline-flex flex-wrap items-baseline ${className}`}>{renderedElements}</span>;
};
