import { 
  ChapterLesson, 
  TataBahasaPoint, 
  PolaKalimatItem, 
  ContohKalimatItem, 
  KaiwaItem, 
  KaiwaDialogItem 
} from '../types';

const MATERI_CUSTOM_STORAGE_KEY = 'zenora_materi_custom_v1';

export type MateriCustomStore = Record<number, Partial<ChapterLesson>>;

/**
 * Loads all custom lesson modifications from localStorage
 */
export const loadAllCustomMateri = (): MateriCustomStore => {
  try {
    const raw = localStorage.getItem(MATERI_CUSTOM_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to load custom materi from localStorage', e);
  }
  return {};
};

/**
 * Saves all custom lesson modifications to localStorage
 */
export const saveAllCustomMateri = (data: MateriCustomStore): void => {
  try {
    localStorage.setItem(MATERI_CUSTOM_STORAGE_KEY, JSON.stringify(data));
    // Dispatch storage event so other open tabs/components can update in real-time
    window.dispatchEvent(new Event('zenora_materi_updated'));
  } catch (e) {
    console.error('Failed to save custom materi to localStorage', e);
  }
};

/**
 * Gets customized data for a specific chapter
 */
export const getCustomMateri = (bab: number): Partial<ChapterLesson> | null => {
  const all = loadAllCustomMateri();
  return all[bab] || null;
};

/**
 * Merges base chapter lesson with any admin custom modifications
 */
export const applyCustomMateri = (baseLesson: ChapterLesson): ChapterLesson => {
  if (!baseLesson || !baseLesson.bab) return baseLesson;
  const custom = getCustomMateri(baseLesson.bab);
  if (!custom) return baseLesson;

  return {
    ...baseLesson,
    ...custom,
    tataBahasa: custom.tataBahasa || baseLesson.tataBahasa,
    polaKalimat: custom.polaKalimat || baseLesson.polaKalimat,
    contohKalimat: custom.contohKalimat || baseLesson.contohKalimat,
    percakapan: custom.percakapan || baseLesson.percakapan,
  };
};

/**
 * Persists an update to a specific chapter lesson
 */
export const saveChapterLessonOverride = (bab: number, lessonUpdate: Partial<ChapterLesson>): void => {
  const all = loadAllCustomMateri();
  all[bab] = {
    ...(all[bab] || {}),
    ...lessonUpdate
  };
  saveAllCustomMateri(all);
};

/**
 * Bunpou (Tata Bahasa) CRUD operations
 */
export const addBunpouPoint = (bab: number, point: TataBahasaPoint, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = [...(current.tataBahasa || []), point];
  saveChapterLessonOverride(bab, { tataBahasa: updatedList });
  return { ...current, tataBahasa: updatedList };
};

export const updateBunpouPoint = (bab: number, index: number, point: TataBahasaPoint, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = [...(current.tataBahasa || [])];
  if (index >= 0 && index < updatedList.length) {
    updatedList[index] = point;
  }
  saveChapterLessonOverride(bab, { tataBahasa: updatedList });
  return { ...current, tataBahasa: updatedList };
};

export const deleteBunpouPoint = (bab: number, index: number, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = (current.tataBahasa || []).filter((_, i) => i !== index);
  saveChapterLessonOverride(bab, { tataBahasa: updatedList });
  return { ...current, tataBahasa: updatedList };
};

/**
 * Bunkei (Pola Kalimat) CRUD operations
 */
export const addBunkeiItem = (bab: number, item: PolaKalimatItem, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = [...(current.polaKalimat || []), item];
  saveChapterLessonOverride(bab, { polaKalimat: updatedList });
  return { ...current, polaKalimat: updatedList };
};

export const updateBunkeiItem = (bab: number, index: number, item: PolaKalimatItem, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = [...(current.polaKalimat || [])];
  if (index >= 0 && index < updatedList.length) {
    updatedList[index] = item;
  }
  saveChapterLessonOverride(bab, { polaKalimat: updatedList });
  return { ...current, polaKalimat: updatedList };
};

export const deleteBunkeiItem = (bab: number, index: number, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = (current.polaKalimat || []).filter((_, i) => i !== index);
  saveChapterLessonOverride(bab, { polaKalimat: updatedList });
  return { ...current, polaKalimat: updatedList };
};

/**
 * Reibun (Contoh Kalimat) CRUD operations
 */
export const addReibunItem = (bab: number, item: ContohKalimatItem, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = [...(current.contohKalimat || []), item];
  saveChapterLessonOverride(bab, { contohKalimat: updatedList });
  return { ...current, contohKalimat: updatedList };
};

export const updateReibunItem = (bab: number, index: number, item: ContohKalimatItem, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = [...(current.contohKalimat || [])];
  if (index >= 0 && index < updatedList.length) {
    updatedList[index] = item;
  }
  saveChapterLessonOverride(bab, { contohKalimat: updatedList });
  return { ...current, contohKalimat: updatedList };
};

export const deleteReibunItem = (bab: number, index: number, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedList = (current.contohKalimat || []).filter((_, i) => i !== index);
  saveChapterLessonOverride(bab, { contohKalimat: updatedList });
  return { ...current, contohKalimat: updatedList };
};

/**
 * Kaiwa (Percakapan) CRUD operations
 */
export const updateKaiwaHeader = (bab: number, title: string, situasi: string, tokoh: string[], currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const updatedKaiwa: KaiwaItem = {
    ...(current.percakapan || { dialogs: [] }),
    title,
    situasi,
    tokoh,
  };
  saveChapterLessonOverride(bab, { percakapan: updatedKaiwa });
  return { ...current, percakapan: updatedKaiwa };
};

export const addKaiwaDialog = (bab: number, dialog: KaiwaDialogItem, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const currentKaiwa = current.percakapan || { title: `第${bab}課の会話`, tokoh: [], dialogs: [] };
  const updatedDialogs = [...currentKaiwa.dialogs, dialog];
  const updatedTokoh = Array.from(new Set([...currentKaiwa.tokoh, dialog.speaker]));
  const updatedKaiwa: KaiwaItem = {
    ...currentKaiwa,
    dialogs: updatedDialogs,
    tokoh: updatedTokoh
  };
  saveChapterLessonOverride(bab, { percakapan: updatedKaiwa });
  return { ...current, percakapan: updatedKaiwa };
};

export const updateKaiwaDialog = (bab: number, index: number, dialog: KaiwaDialogItem, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const currentKaiwa = current.percakapan || { title: `第${bab}課の会話`, tokoh: [], dialogs: [] };
  const updatedDialogs = [...currentKaiwa.dialogs];
  if (index >= 0 && index < updatedDialogs.length) {
    updatedDialogs[index] = dialog;
  }
  const updatedTokoh = Array.from(new Set([...currentKaiwa.tokoh, dialog.speaker]));
  const updatedKaiwa: KaiwaItem = {
    ...currentKaiwa,
    dialogs: updatedDialogs,
    tokoh: updatedTokoh
  };
  saveChapterLessonOverride(bab, { percakapan: updatedKaiwa });
  return { ...current, percakapan: updatedKaiwa };
};

export const deleteKaiwaDialog = (bab: number, index: number, currentLesson: ChapterLesson): ChapterLesson => {
  const current = applyCustomMateri(currentLesson);
  const currentKaiwa = current.percakapan || { title: `第${bab}課の会話`, tokoh: [], dialogs: [] };
  const updatedDialogs = currentKaiwa.dialogs.filter((_, i) => i !== index);
  const updatedKaiwa: KaiwaItem = {
    ...currentKaiwa,
    dialogs: updatedDialogs
  };
  saveChapterLessonOverride(bab, { percakapan: updatedKaiwa });
  return { ...current, percakapan: updatedKaiwa };
};

/**
 * Resets custom materi to base defaults
 */
export const resetChapterMateri = (bab?: number): void => {
  try {
    if (typeof bab === 'number') {
      const all = loadAllCustomMateri();
      delete all[bab];
      saveAllCustomMateri(all);
    } else {
      localStorage.removeItem(MATERI_CUSTOM_STORAGE_KEY);
      window.dispatchEvent(new Event('zenora_materi_updated'));
    }
  } catch (e) {
    console.error('Failed to reset custom materi', e);
  }
};
