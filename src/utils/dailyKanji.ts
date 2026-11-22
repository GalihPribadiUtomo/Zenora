import { KANJI_DATA } from '../data/kanjiData';
import { KanjiItem } from '../types';

export interface DailyKanjiInfo {
  dateString: string; // YYYY-MM-DD
  displayDate: string; // e.g. "Sabtu, 21 November 2026"
  kanjis: KanjiItem[];
}

export function getDailyKanji(): DailyKanjiInfo {
  const now = new Date();

  // Format to Asia/Jakarta date string
  const dateParts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(now); // "YYYY-MM-DD"

  const [year, month, day] = dateParts.split('-').map(Number);

  // Indonesian long date display
  const displayDate = new Intl.DateTimeFormat('id-ID', {
    timeZone: 'Asia/Jakarta',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(now);

  // Deterministic day count from a fixed epoch
  const epoch = Date.UTC(2024, 0, 1);
  const currentUtc = Date.UTC(year, month - 1, day);
  const dayCount = Math.max(0, Math.floor((currentUtc - epoch) / (1000 * 60 * 60 * 24)));

  const total = KANJI_DATA.length;
  // Step by 4 each day
  const startIndex = (dayCount * 4) % total;

  const kanjis: KanjiItem[] = [0, 1, 2, 3].map((offset) => {
    const idx = (startIndex + offset) % total;
    return KANJI_DATA[idx];
  });

  return {
    dateString: dateParts,
    displayDate,
    kanjis
  };
}
