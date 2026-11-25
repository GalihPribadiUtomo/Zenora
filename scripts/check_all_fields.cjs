const fs = require('fs');
const path = require('path');

const results = [];

for (let i = 1; i <= 50; i++) {
  const filePath = path.join(__dirname, '..', 'src', 'data', 'materi', `bab${i}.ts`);
  const content = fs.readFileSync(filePath, 'utf8');
  
  const hasPolaKalimat = content.includes('polaKalimat');
  const hasContohKalimat = content.includes('contohKalimat');
  const hasTataBahasa = content.includes('tataBahasa');
  const hasPercakapan = content.includes('percakapan');
  const hasDialogs = content.includes('dialogs') || content.includes('dialog:');
  
  results.push({
    bab: i,
    hasPolaKalimat,
    hasContohKalimat,
    hasTataBahasa,
    hasPercakapan,
    hasDialogs
  });
}

console.log(JSON.stringify(results.filter(r => !r.hasPolaKalimat || !r.hasContohKalimat || !r.hasTataBahasa || !r.hasPercakapan || !r.hasDialogs), null, 2));
