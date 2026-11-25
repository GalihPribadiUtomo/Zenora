const fs = require('fs');
const path = require('path');

const issues = [];

for (let b = 1; b <= 50; b++) {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'materi', `bab${b}.ts`);
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/import type .*?;/g, '');
  content = content.replace(/export const lessonData.*?=\s*/g, 'module.exports = ');

  const tempPath = path.join(__dirname, `_temp_check_${b}.cjs`);
  fs.writeFileSync(tempPath, content);
  let data;
  try {
    data = require(tempPath);
  } catch (e) {
    issues.push(`Bab ${b}: parse error: ${e.message}`);
  } finally {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }

  if (!data) continue;

  // Check percakapan
  if (!data.percakapan) {
    issues.push(`Bab ${b}: missing percakapan`);
  } else {
    if (!data.percakapan.title && data.percakapan.judul) {
      issues.push(`Bab ${b}: percakapan uses 'judul' instead of 'title'`);
    }
    if (!Array.isArray(data.percakapan.dialogs)) {
      if (Array.isArray(data.percakapan.dialog)) {
        issues.push(`Bab ${b}: percakapan uses 'dialog' instead of 'dialogs'`);
      } else {
        issues.push(`Bab ${b}: percakapan has no dialogs array`);
      }
    }
  }

  // Check tataBahasa
  if (!Array.isArray(data.tataBahasa)) {
    issues.push(`Bab ${b}: missing tataBahasa array`);
  } else {
    data.tataBahasa.forEach((tb, idx) => {
      if (tb.point === undefined && tb.id !== undefined) {
        issues.push(`Bab ${b} TB[${idx}]: uses 'id' instead of 'point'`);
      }
      if (!tb.title && tb.judul) {
        issues.push(`Bab ${b} TB[${idx}]: uses 'judul' instead of 'title'`);
      }
      if (!tb.explanation && tb.penjelasan) {
        issues.push(`Bab ${b} TB[${idx}]: uses 'penjelasan' instead of 'explanation'`);
      }
      if (!Array.isArray(tb.examples) && Array.isArray(tb.contoh)) {
        issues.push(`Bab ${b} TB[${idx}]: uses 'contoh' instead of 'examples'`);
      }
    });
  }

  // Check polaKalimat
  if (!Array.isArray(data.polaKalimat) || data.polaKalimat.length === 0) {
    issues.push(`Bab ${b}: missing or empty polaKalimat`);
  }

  // Check contohKalimat
  if (!Array.isArray(data.contohKalimat) || data.contohKalimat.length === 0) {
    issues.push(`Bab ${b}: missing or empty contohKalimat`);
  }
}

console.log('ISSUES FOUND:', issues.length);
console.log(issues.slice(0, 30));
