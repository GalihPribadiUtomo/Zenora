import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const esbuild = require('esbuild');

function loadTs(file) {
  const res = esbuild.buildSync({
    entryPoints: [file],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    write: false,
    logLevel: 'silent',
  });
  const mod = { exports: {} };
  const fn = new Function('exports', 'require', 'module', res.outputFiles[0].text);
  fn(mod.exports, require, mod);
  return mod.exports;
}

const errors = [];

// 1. Verify Minna no Nihongo Bab 1-50
const { CHAPTERS_DATA } = loadTs('src/data/chaptersData.ts');
if (!Array.isArray(CHAPTERS_DATA) || CHAPTERS_DATA.length !== 50) {
  errors.push(`Expected 50 chapters in CHAPTERS_DATA, got ${CHAPTERS_DATA?.length}`);
}

const { KOTOBA_DATA } = loadTs('src/data/kotobaData.ts');
if (!Array.isArray(KOTOBA_DATA) || KOTOBA_DATA.length < 700) {
  errors.push(`Expected >= 700 Kotoba items, got ${KOTOBA_DATA?.length}`);
}

let totalBunpou = 0;
let totalBunkei = 0;
let totalReibun = 0;
let totalKaiwa = 0;

for (let b = 1; b <= 50; b++) {
  const materiPath = path.join('src/data/materi', `bab${b}.ts`);
  const backupPath = path.join('src/data/materi_backup', `bab${b}.ts`);
  if (!fs.existsSync(materiPath)) errors.push(`Missing ${materiPath}`);
  if (!fs.existsSync(backupPath)) errors.push(`Missing ${backupPath}`);

  const { lessonData } = loadTs(materiPath);
  const bp = lessonData?.tataBahasa?.length || 0;
  const bk = lessonData?.polaKalimat?.length || 0;
  const rb = lessonData?.contohKalimat?.length || 0;
  const kw = lessonData?.percakapan?.dialogs?.length || 0;
  const kt = KOTOBA_DATA.filter((k) => k.bab === b).length;

  totalBunpou += bp;
  totalBunkei += bk;
  totalReibun += rb;
  totalKaiwa += kw;

  if (!bp || !bk || !rb || !kw || !kt) {
    errors.push(`Bab ${b} incomplete: bunpou=${bp}, bunkei=${bk}, reibun=${rb}, kaiwa=${kw}, kotoba=${kt}`);
  }
}

// 2. Verify Kanji N5 & N4
const { KANJI_DATA } = loadTs('src/data/kanjiData.ts');
const n5 = KANJI_DATA.filter((k) => k.jlpt === 'N5').length;
const n4 = KANJI_DATA.filter((k) => k.jlpt === 'N4').length;
if (KANJI_DATA.length !== 424 || n5 === 0 || n4 === 0) {
  errors.push(`Kanji integrity mismatch: total=${KANJI_DATA.length}, N5=${n5}, N4=${n4}`);
}

// 3. Verify Hiragana & Katakana (all groups)
const { HIRAGANA_DATA, KATAKANA_DATA } = loadTs('src/data/kanaData.ts');
const requiredGroups = ['gojuon', 'dakuten', 'handakuten', 'youon', 'small'];
for (const g of requiredGroups) {
  if (!HIRAGANA_DATA.some((k) => k.group === g)) errors.push(`Hiragana missing group: ${g}`);
  if (!KATAKANA_DATA.some((k) => k.group === g)) errors.push(`Katakana missing group: ${g}`);
}
if (!KATAKANA_DATA.some((k) => k.group === 'modern')) {
  errors.push('Katakana missing group: modern');
}

// 4. Verify 6 SSW Sectors
const { SSW_ALL_SECTORS } = loadTs('src/data/ssw/index.ts');
if (!Array.isArray(SSW_ALL_SECTORS) || SSW_ALL_SECTORS.length !== 6) {
  errors.push(`Expected 6 SSW sectors, got ${SSW_ALL_SECTORS?.length}`);
}
for (const s of SSW_ALL_SECTORS) {
  if (!s.chapters || s.chapters.length === 0) {
    errors.push(`SSW sector ${s.id} has 0 chapters`);
  }
}

console.log('=== ZENORA MATERI INTEGRITY REPORT ===');
console.log(`Minna Bab 1-50 : 50/50 chapters | Bunpou=${totalBunpou}, Bunkei=${totalBunkei}, Reibun=${totalReibun}, Kaiwa=${totalKaiwa}, Kotoba=${KOTOBA_DATA.length}`);
console.log(`Kanji          : ${KANJI_DATA.length} (N5=${n5}, N4=${n4})`);
console.log(`Kana           : Hiragana=${HIRAGANA_DATA.length}, Katakana=${KATAKANA_DATA.length}`);
console.log(`SSW Sectors    : ${SSW_ALL_SECTORS.length} (${SSW_ALL_SECTORS.map((s) => `${s.id}:${s.chapters.length}`).join(', ')})`);

if (errors.length > 0) {
  console.error('FAILED:', errors);
  process.exit(1);
}
console.log('STATUS: ALL MATERI DATA 100% INTACT');
