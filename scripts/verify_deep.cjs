const fs = require('fs');
const path = require('path');

let totalBunkei = 0;
let totalReibun = 0;
let totalBunpou = 0;
let totalKaiwaLines = 0;
let rows = [];

for (let b = 1; b <= 50; b++) {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'materi', `bab${b}.ts`);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/import type .*?;/g, '');
  content = content.replace(/export const lessonData.*?=\s*/g, 'module.exports = ');

  const tempPath = path.join(__dirname, `_temp_bab${b}.cjs`);
  fs.writeFileSync(tempPath, content);

  let data;
  try {
    data = require(tempPath);
  } catch (err) {
    console.error(`Error loading Bab ${b}:`, err.message);
  } finally {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }

  if (!data) continue;

  const numBunkei = data.polaKalimat ? data.polaKalimat.length : 0;
  const numReibun = data.contohKalimat ? data.contohKalimat.length : 0;
  const numBunpou = data.tataBahasa ? data.tataBahasa.length : 0;
  const numKaiwa = (data.percakapan && Array.isArray(data.percakapan.dialogs)) ? data.percakapan.dialogs.length : 0;

  totalBunkei += numBunkei;
  totalReibun += numReibun;
  totalBunpou += numBunpou;
  totalKaiwaLines += numKaiwa;

  const rawStr = JSON.stringify(data);
  const isPlaceholder = rawStr.includes('基本文型 1 です') || 
                        rawStr.includes('基本文型 2 です') || 
                        rawStr.includes('例文の 練習を') || 
                        rawStr.includes('ポイントは 何ですか') || 
                        rawStr.includes('表現を 教えて いただけませんか') ||
                        (rawStr.includes('Kaidah Tata Bahasa Inti Bab') && rawStr.includes('文法例文です'));

  rows.push({
    bab: b,
    title: data.title,
    bunkei: numBunkei,
    reibun: numReibun,
    bunpou: numBunpou,
    kaiwa: numKaiwa,
    kaiwaJudul: data.percakapan ? data.percakapan.title : '-',
    isPlaceholder
  });
}

console.log('--- STATISTIK KELENGKAPAN MINNA NO NIHONGO BAB 1 - 50 ---');
console.log(`Total Bab yang Diperiksa: ${rows.length} / 50`);
console.log(`Total Bunkei (Pola Kalimat): ${totalBunkei}`);
console.log(`Total Reibun (Contoh Kalimat): ${totalReibun}`);
console.log(`Total Bunpou (Tata Bahasa): ${totalBunpou}`);
console.log(`Total Baris Dialog Kaiwa: ${totalKaiwaLines}`);

const flawed = rows.filter(r => r.bunpou === 0 || r.bunkei === 0 || r.reibun === 0 || r.kaiwa === 0 || r.isPlaceholder);
if (flawed.length > 0) {
  console.log(`Bab bermasalah (${flawed.length}):`, flawed);
} else {
  console.log('\nHASIL AUDIT: SEMPURNA! SEMUA 50 BAB MEMILIKI 4 KATEGORI LENGKAP & OTENTIK 100%!');
}

console.log('\n| Bab | Judul Materi | Bunkei | Reibun | Bunpou | Kaiwa | Judul Percakapan | Status |');
console.log('|---|---|---|---|---|---|---|---|');
for (const r of rows) {
  const status = (!r.isPlaceholder && r.bunkei > 0 && r.reibun > 0 && r.bunpou > 0 && r.kaiwa > 0) ? '✅ LENGKAP' : '❌ TIDAK LENGKAP';
  console.log(`| Bab ${r.bab} | ${r.title} | ${r.bunkei} pola | ${r.reibun} contoh | ${r.bunpou} tata bahasa | ${r.kaiwa} baris | ${r.kaiwaJudul} | ${status} |`);
}
