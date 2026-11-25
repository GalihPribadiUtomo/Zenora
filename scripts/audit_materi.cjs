const fs = require('fs');
const path = require('path');

const results = [];

for (let b = 1; b <= 50; b++) {
  const filePath = path.join('src', 'data', 'materi', 'bab' + b + '.ts');
  if (!fs.existsSync(filePath)) {
    results.push({ bab: b, status: 'MISSING' });
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const isBunkeiPlaceholder = content.includes('基本文型 1 です') || content.includes('基本文型 2 です');
  const isReibunPlaceholder = content.includes('例文の 練習を') || content.includes('ポイントは 何ですか');
  const isKaiwaPlaceholder = content.includes('表現を 教えて いただけませんか');
  const isBunpouPlaceholder = content.includes('Kaidah Tata Bahasa Inti Bab') && content.includes('文法例文です');

  const hasPolaKalimat = content.includes('polaKalimat') && !isBunkeiPlaceholder;
  const hasContohKalimat = content.includes('contohKalimat') && !isReibunPlaceholder;
  const hasTataBahasa = content.includes('tataBahasa') && !isBunpouPlaceholder;
  const hasKaiwa = content.includes('percakapan') && (content.includes('dialogs') || content.includes('dialog')) && !isKaiwaPlaceholder;

  const isComplete = hasPolaKalimat && hasContohKalimat && hasTataBahasa && hasKaiwa;

  results.push({
    bab: b,
    bunkei: isBunkeiPlaceholder ? 'PLACEHOLDER' : (hasPolaKalimat ? 'AUTHENTIC' : 'MISSING'),
    reibun: isReibunPlaceholder ? 'PLACEHOLDER' : (hasContohKalimat ? 'AUTHENTIC' : 'MISSING'),
    kaiwa: isKaiwaPlaceholder ? 'PLACEHOLDER' : (hasKaiwa ? 'AUTHENTIC' : 'MISSING'),
    bunpou: isBunpouPlaceholder ? 'PLACEHOLDER' : (hasTataBahasa ? 'AUTHENTIC' : 'MISSING'),
    status: isComplete ? 'COMPLETE' : 'INCOMPLETE'
  });
}

console.log('--- AUDIT REPORT BAB 1-50 ---');
const completeList = results.filter(r => r.status === 'COMPLETE').map(r => r.bab);
const incompleteList = results.filter(r => r.status === 'INCOMPLETE').map(r => r.bab);
console.log('COMPLETE (' + completeList.length + '):', completeList.join(', '));
console.log('INCOMPLETE (' + incompleteList.length + '):', incompleteList.join(', '));
