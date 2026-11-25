import type { ChapterLesson } from '../../types';
import { applyCustomMateri } from '../../utils/materiStorage';
export type { ChapterLesson } from '../../types';

// In-memory cache to avoid redundant network/disk imports
const lessonCache = new Map<number, ChapterLesson>();

/**
 * Clears cached lesson in memory (useful after admin updates)
 */
export function clearLessonCache(bab?: number): void {
  if (typeof bab === 'number') {
    lessonCache.delete(bab);
  } else {
    lessonCache.clear();
  }
}

/**
 * Lazy loads chapter lesson data on demand.
 * Merges with any custom edits saved by Admin.
 */
export async function loadChapterLesson(bab: number): Promise<ChapterLesson | null> {
  if (bab < 1 || bab > 50) return null;
  
  if (lessonCache.has(bab)) {
    return applyCustomMateri(lessonCache.get(bab)!);
  }

  try {
    let module;
    switch (bab) {
      case 1: module = await import('./bab1'); break;
      case 2: module = await import('./bab2'); break;
      case 3: module = await import('./bab3'); break;
      case 4: module = await import('./bab4'); break;
      case 5: module = await import('./bab5'); break;
      case 6: module = await import('./bab6'); break;
      case 7: module = await import('./bab7'); break;
      case 8: module = await import('./bab8'); break;
      case 9: module = await import('./bab9'); break;
      case 10: module = await import('./bab10'); break;
      case 11: module = await import('./bab11'); break;
      case 12: module = await import('./bab12'); break;
      case 13: module = await import('./bab13'); break;
      case 14: module = await import('./bab14'); break;
      case 15: module = await import('./bab15'); break;
      case 16: module = await import('./bab16'); break;
      case 17: module = await import('./bab17'); break;
      case 18: module = await import('./bab18'); break;
      case 19: module = await import('./bab19'); break;
      case 20: module = await import('./bab20'); break;
      case 21: module = await import('./bab21'); break;
      case 22: module = await import('./bab22'); break;
      case 23: module = await import('./bab23'); break;
      case 24: module = await import('./bab24'); break;
      case 25: module = await import('./bab25'); break;
      case 26: module = await import('./bab26'); break;
      case 27: module = await import('./bab27'); break;
      case 28: module = await import('./bab28'); break;
      case 29: module = await import('./bab29'); break;
      case 30: module = await import('./bab30'); break;
      case 31: module = await import('./bab31'); break;
      case 32: module = await import('./bab32'); break;
      case 33: module = await import('./bab33'); break;
      case 34: module = await import('./bab34'); break;
      case 35: module = await import('./bab35'); break;
      case 36: module = await import('./bab36'); break;
      case 37: module = await import('./bab37'); break;
      case 38: module = await import('./bab38'); break;
      case 39: module = await import('./bab39'); break;
      case 40: module = await import('./bab40'); break;
      case 41: module = await import('./bab41'); break;
      case 42: module = await import('./bab42'); break;
      case 43: module = await import('./bab43'); break;
      case 44: module = await import('./bab44'); break;
      case 45: module = await import('./bab45'); break;
      case 46: module = await import('./bab46'); break;
      case 47: module = await import('./bab47'); break;
      case 48: module = await import('./bab48'); break;
      case 49: module = await import('./bab49'); break;
      case 50: module = await import('./bab50'); break;
      default: return null;
    }
    
    if (module && module.lessonData) {
      lessonCache.set(bab, module.lessonData);
      return applyCustomMateri(module.lessonData);
    }
    return null;
  } catch (error) {
    console.error(`Error lazy loading lesson data for bab ${bab}:`, error);
    return null;
  }
}
