import type { UserStats } from '../types';

const STORAGE_KEY = 'zenora_user_stats_v1';
const LEGACY_STORAGE_KEY = 'kanjihub_user_stats_v1';

export const getInitialStats = (): UserStats => {
  try {
    const data = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (data) {
      const parsed = JSON.parse(data);
      return {
        ...parsed,
        learnedKanaChars: parsed.learnedKanaChars || []
      };
    }
  } catch (e) {
    console.error('Failed to load stats from localStorage', e);
  }

  const today = new Date().toISOString().split('T')[0];
  return {
    learnedKotobaIds: [],
    learnedKanjiIds: [],
    learnedKanaChars: [],
    bookmarkedKotobaIds: [],
    bookmarkedKanjiIds: [],
    quizHistory: [],
    streakDays: 1,
    lastActiveDate: today,
  };
};

export const saveStats = (stats: UserStats) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    
    // Check streak
    if (stats.lastActiveDate !== today) {
      const last = new Date(stats.lastActiveDate);
      const curr = new Date(today);
      const diffDays = Math.round((curr.getTime() - last.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays === 1) {
        stats.streakDays += 1;
      } else if (diffDays > 1) {
        stats.streakDays = 1;
      }
      stats.lastActiveDate = today;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save stats to localStorage', e);
  }
};
