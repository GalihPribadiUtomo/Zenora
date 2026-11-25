import { SrsItem, UserStats } from '../types';
import { KOTOBA_DATA } from '../data/kotobaData';
import { KANJI_DATA } from '../data/kanjiData';
import { ALL_KANA_DATA } from '../data/kanaData';

const SRS_STORAGE_KEY = 'zenora_srs_deck_v1';

// Intervals in milliseconds: Level 0 (1h), 1 (1d), 2 (3d), 3 (7d), 4 (14d), 5 (30d)
const SRS_INTERVALS_MS = [
  1 * 60 * 60 * 1000,
  24 * 60 * 60 * 1000,
  3 * 24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  14 * 24 * 60 * 60 * 1000,
  30 * 24 * 60 * 60 * 1000
];

export const SRS_LEVEL_LABELS = [
  'Baru (1 Jam)',
  'Tahap 1 (1 Hari)',
  'Tahap 2 (3 Hari)',
  'Tahap 3 (7 Hari)',
  'Tahap 4 (14 Hari)',
  'Master (30 Hari)'
];

export function getSrsDeck(): SrsItem[] {
  try {
    const raw = localStorage.getItem(SRS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveSrsDeck(deck: SrsItem[]) {
  try {
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(deck));
  } catch (e) {
    console.error('Failed to save SRS deck', e);
  }
}

export function enqueueSrsItem(item: Omit<SrsItem, 'level' | 'nextReviewAt' | 'correctStreak'>) {
  const deck = getSrsDeck();
  if (deck.some((d) => d.id === item.id)) return;
  const newItem: SrsItem = {
    ...item,
    level: 0,
    nextReviewAt: Date.now(),
    correctStreak: 0
  };
  saveSrsDeck([newItem, ...deck]);
}

export function reviewSrsItem(id: string, rating: 'again' | 'hard' | 'good' | 'easy'): SrsItem[] {
  const deck = getSrsDeck();
  const now = Date.now();
  const updated = deck.map((item) => {
    if (item.id !== id) return item;
    let nextLevel = item.level;
    let nextStreak = item.correctStreak;
    let delayMs = SRS_INTERVALS_MS[0];

    if (rating === 'again') {
      nextLevel = 0;
      nextStreak = 0;
      delayMs = 10 * 60 * 1000; // 10 minutes
    } else if (rating === 'hard') {
      nextLevel = Math.max(0, item.level);
      nextStreak = item.correctStreak + 1;
      delayMs = SRS_INTERVALS_MS[nextLevel] * 0.5;
    } else if (rating === 'good') {
      nextLevel = Math.min(5, item.level + 1);
      nextStreak = item.correctStreak + 1;
      delayMs = SRS_INTERVALS_MS[nextLevel];
    } else if (rating === 'easy') {
      nextLevel = Math.min(5, item.level + 2);
      nextStreak = item.correctStreak + 1;
      delayMs = SRS_INTERVALS_MS[nextLevel];
    }

    return {
      ...item,
      level: nextLevel,
      correctStreak: nextStreak,
      lastReviewedAt: now,
      nextReviewAt: now + delayMs
    };
  });

  saveSrsDeck(updated);
  return updated;
}

export function syncLearnedItemsToSrs(stats: UserStats): SrsItem[] {
  const deck = getSrsDeck();
  const existingIds = new Set(deck.map((d) => d.id));
  const additions: SrsItem[] = [];
  const now = Date.now();

  // Sync learned Kotoba
  (stats.learnedKotobaIds || []).forEach((kId) => {
    const id = `kotoba_${kId}`;
    if (!existingIds.has(id)) {
      const word = KOTOBA_DATA.find((w) => w.id === kId);
      if (word) {
        additions.push({
          id,
          type: 'kotoba',
          front: word.kanji || word.kana,
          reading: word.kana,
          meaning: word.arti,
          level: 1,
          nextReviewAt: now,
          correctStreak: 1
        });
        existingIds.add(id);
      }
    }
  });

  // Sync learned Kanji
  (stats.learnedKanjiIds || []).forEach((kanjiId) => {
    const id = `kanji_${kanjiId}`;
    if (!existingIds.has(id)) {
      const k = KANJI_DATA.find((item) => item.id === kanjiId);
      if (k) {
        additions.push({
          id,
          type: 'kanji',
          front: k.kanji,
          reading: [k.onyomi, k.kunyomi].filter(Boolean).join(' / '),
          meaning: k.meaning,
          level: 1,
          nextReviewAt: now,
          correctStreak: 1
        });
        existingIds.add(id);
      }
    }
  });

  // Sync learned Kana
  (stats.learnedKanaChars || []).forEach((ch) => {
    const id = `kana_${ch}`;
    if (!existingIds.has(id)) {
      const kana = ALL_KANA_DATA.find((item) => item.char === ch);
      if (kana) {
        additions.push({
          id,
          type: 'kana',
          front: kana.char,
          reading: kana.romaji,
          meaning: `${kana.type === 'hiragana' ? 'Hiragana' : 'Katakana'} · ${kana.example?.word || ''}`,
          level: 1,
          nextReviewAt: now,
          correctStreak: 1
        });
        existingIds.add(id);
      }
    }
  });

  // If user has completely empty SRS deck (new user), seed 10 starter Bab 1 & N5 items so SRS is immediately usable
  if (deck.length === 0 && additions.length === 0) {
    KOTOBA_DATA.slice(0, 6).forEach((word) => {
      additions.push({
        id: `kotoba_${word.id}`,
        type: 'kotoba',
        front: word.kanji || word.kana,
        reading: word.kana,
        meaning: word.arti,
        level: 0,
        nextReviewAt: now,
        correctStreak: 0
      });
    });
    KANJI_DATA.slice(0, 4).forEach((k) => {
      additions.push({
        id: `kanji_${k.id}`,
        type: 'kanji',
        front: k.kanji,
        reading: [k.onyomi, k.kunyomi].filter(Boolean).join(' / '),
        meaning: k.meaning,
        level: 0,
        nextReviewAt: now,
        correctStreak: 0
      });
    });
  }

  if (additions.length > 0) {
    const merged = [...additions, ...deck];
    saveSrsDeck(merged);
    return merged;
  }

  return deck;
}

export function getDueSrsItems(stats?: UserStats): SrsItem[] {
  const deck = stats ? syncLearnedItemsToSrs(stats) : getSrsDeck();
  const now = Date.now();
  return deck.filter((item) => item.nextReviewAt <= now);
}
