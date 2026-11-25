const fs = require('fs');
const path = require('path');

// Read kanaData.ts
const content = fs.readFileSync(path.join(__dirname, '../src/data/kanaData.ts'), 'utf8');

// Convert TS export to JS
let jsContent = content
  .replace(/import type .*?;/g, '')
  .replace(/export const /g, 'const ')
  .replace(/as const;/g, ';');

// Remove type assertions like `: KanaItem[] =`
jsContent = jsContent.replace(/:\s*KanaItem\[\]\s*=/g, ' =');
jsContent += '\nmodule.exports = { HIRAGANA_DATA, KATAKANA_DATA, ALL_KANA_DATA };\n';

const tempPath = path.join(__dirname, '_temp_kana.cjs');
fs.writeFileSync(tempPath, jsContent);

let kanaModule;
try {
  kanaModule = require(tempPath);
} catch (e) {
  console.error('Error requiring kanaData:', e);
} finally {
  if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
}

if (!kanaModule) process.exit(1);

const { HIRAGANA_DATA, KATAKANA_DATA, ALL_KANA_DATA } = kanaModule;

console.log('--- BASIC STATS ---');
console.log('Total HIRAGANA_DATA:', HIRAGANA_DATA ? HIRAGANA_DATA.length : 0);
console.log('Total KATAKANA_DATA:', KATAKANA_DATA ? KATAKANA_DATA.length : 0);
console.log('Total ALL_KANA_DATA:', ALL_KANA_DATA ? ALL_KANA_DATA.length : 0);

// Check Hiragana groups
const hGroups = {};
HIRAGANA_DATA.forEach(k => {
  hGroups[k.group] = (hGroups[k.group] || 0) + 1;
});
console.log('\nHiragana by Group:', hGroups);

// Check Katakana groups
const kGroups = {};
KATAKANA_DATA.forEach(k => {
  kGroups[k.group] = (kGroups[k.group] || 0) + 1;
});
console.log('\nKatakana by Group:', kGroups);

// Check Duplicates in Hiragana
const hChars = new Set();
const hDups = [];
HIRAGANA_DATA.forEach(k => {
  if (hChars.has(k.char)) hDups.push(k.char);
  hChars.add(k.char);
});
console.log('\nHiragana Duplicates:', hDups);

// Check Duplicates in Katakana
const kChars = new Set();
const kDups = [];
KATAKANA_DATA.forEach(k => {
  if (kChars.has(k.char)) kDups.push(k.char);
  kChars.add(k.char);
});
console.log('Katakana Duplicates:', kDups);

// Check Missing or Invalid Fields
const hInvalid = [];
HIRAGANA_DATA.forEach(k => {
  const issues = [];
  if (!k.char) issues.push('no char');
  if (!k.romaji) issues.push('no romaji');
  if (!k.strokeCount || k.strokeCount <= 0) issues.push('no strokeCount');
  if (!k.example || !k.example.word) issues.push('no example');
  if (!k.equivalentChar) issues.push('no equivalentChar');
  if (!k.writingTips) issues.push('no writingTips');
  if (issues.length) hInvalid.push({ char: k.char, issues });
});
console.log('\nHiragana field issues:', hInvalid.length);
if (hInvalid.length) console.log(hInvalid.slice(0, 10));

const kInvalid = [];
KATAKANA_DATA.forEach(k => {
  const issues = [];
  if (!k.char) issues.push('no char');
  if (!k.romaji) issues.push('no romaji');
  if (!k.strokeCount || k.strokeCount <= 0) issues.push('no strokeCount');
  if (!k.example || !k.example.word) issues.push('no example');
  if (!k.equivalentChar) issues.push('no equivalentChar');
  if (!k.writingTips) issues.push('no writingTips');
  if (issues.length) kInvalid.push({ char: k.char, issues });
});
console.log('Katakana field issues:', kInvalid.length);
if (kInvalid.length) console.log(kInvalid.slice(0, 10));

// Check bidirectional equivalentChar
const biDirectionalIssues = [];
HIRAGANA_DATA.forEach(h => {
  const matchK = KATAKANA_DATA.find(k => k.char === h.equivalentChar);
  if (!matchK) {
    biDirectionalIssues.push(`Hiragana ${h.char} points to Katakana ${h.equivalentChar} which doesn't exist`);
  } else if (matchK.equivalentChar !== h.char) {
    biDirectionalIssues.push(`Mismatch: Hiragana ${h.char} -> Katakana ${matchK.char}, but Katakana ${matchK.char} -> ${matchK.equivalentChar}`);
  }
});
console.log('\nEquivalent Char Mismatches (Hiragana -> Katakana):', biDirectionalIssues.length);
if (biDirectionalIssues.length) console.log(biDirectionalIssues.slice(0, 20));

// Check standard 46 Gojuon
const standardGojuonH = [
  'あ','い','う','え','お',
  'か','き','く','け','こ',
  'さ','し','す','せ','そ',
  'た','ち','つ','て','と',
  'な','に','ぬ','ね','の',
  'は','ひ','ふ','へ','ほ',
  'ま','み','む','め','も',
  'や','ゆ','よ',
  'ら','り','る','れ','ろ',
  'わ','を','ん'
];

const standardGojuonK = [
  'ア','イ','ウ','エ','オ',
  'カ','キ','ク','ケ','コ',
  'サ','シ','ス','セ','ソ',
  'タ','チ','ツ','テ','ト',
  'ナ','ニ','ヌ','ネ','ノ',
  'ハ','ヒ','フ','ヘ','ホ',
  'マ','ミ','ム','メ','モ',
  'ヤ','ユ','ヨ',
  'ラ','リ','ル','レ','ロ',
  'ワ','ヲ','ン'
];

const missingGojuonH = standardGojuonH.filter(c => !hChars.has(c));
const missingGojuonK = standardGojuonK.filter(c => !kChars.has(c));
console.log('\nMissing standard Gojuon Hiragana:', missingGojuonH);
console.log('Missing standard Gojuon Katakana:', missingGojuonK);

// Standard Dakuon (20) & Handakuon (5)
const standardDakuonH = ['が','ぎ','ぐ','げ','ご','ざ','じ','ず','ぜ','ぞ','だ','ぢ','づ','で','ど','ば','び','ぶ','べ','ぼ'];
const standardHandakuonH = ['ぱ','ぴ','ぷ','ぺ','ぽ'];
const standardDakuonK = ['ガ','ギ','グ','ゲ','ゴ','ザ','ジ','ズ','ゼ','ゾ','ダ','ヂ','ヅ','デ','ド','バ','ビ','ブ','ベ','ボ'];
const standardHandakuonK = ['パ','ピ','プ','ペ','ポ'];

const missingDakuonH = standardDakuonH.filter(c => !hChars.has(c));
const missingHandakuonH = standardHandakuonH.filter(c => !hChars.has(c));
const missingDakuonK = standardDakuonK.filter(c => !kChars.has(c));
const missingHandakuonK = standardHandakuonK.filter(c => !kChars.has(c));

console.log('Missing Dakuon Hiragana:', missingDakuonH);
console.log('Missing Handakuon Hiragana:', missingHandakuonH);
console.log('Missing Dakuon Katakana:', missingDakuonK);
console.log('Missing Handakuon Katakana:', missingHandakuonK);

// Standard Youon (36)
const standardYouonH = [
  'きゃ','きゅ','きょ',
  'しゃ','しゅ','しょ',
  'ちゃ','ちゅ','ちょ',
  'にゃ','にゅ','にょ',
  'ひゃ','ひゅ','ひょ',
  'みゃ','みゅ','みょ',
  'りゃ','りゅ','りょ',
  'ぎゃ','ぎゅ','ぎょ',
  'じゃ','じゅ','じょ',
  'びゃ','びゅ','びょ',
  'ぴゃ','ぴゅ','ぴょ'
];
const standardYouonK = [
  'キャ','キュ','キョ',
  'シャ','シュ','ショ',
  'チャ','チュ','チョ',
  'ニャ','ニュ','ニョ',
  'ヒャ','ヒュ','ヒョ',
  'ミャ','ミュ','ミョ',
  'リャ','リュ','リョ',
  'ギャ','ギュ','ギョ',
  'ジャ','ジュ','ジョ',
  'ビャ','ビュ','ビョ',
  'ピャ','ピュ','ピョ'
];

const missingYouonH = standardYouonH.filter(c => !hChars.has(c));
const missingYouonK = standardYouonK.filter(c => !kChars.has(c));
console.log('Missing Youon Hiragana:', missingYouonH);
console.log('Missing Youon Katakana:', missingYouonK);
