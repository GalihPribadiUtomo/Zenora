import { KotobaItem } from '../types';

const KOTOBA_CUSTOM_STORAGE_KEY = 'zenora_kotoba_custom_v1';

export interface KotobaCustomData {
  overrides: Record<string, Partial<KotobaItem>>;
  deletedIds: string[];
  addedItems?: KotobaItem[];
}

export const loadKotobaCustomData = (): KotobaCustomData => {
  try {
    const raw = localStorage.getItem(KOTOBA_CUSTOM_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        overrides: parsed.overrides || {},
        deletedIds: parsed.deletedIds || [],
        addedItems: parsed.addedItems || [],
      };
    }
  } catch (e) {
    console.error('Failed to load custom kotoba from localStorage', e);
  }
  return {
    overrides: {},
    deletedIds: [],
    addedItems: [],
  };
};

export const saveKotobaCustomData = (data: KotobaCustomData): void => {
  try {
    localStorage.setItem(KOTOBA_CUSTOM_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save custom kotoba to localStorage', e);
  }
};

export const applyCustomKotoba = (baseList: KotobaItem[]): KotobaItem[] => {
  const { overrides, deletedIds, addedItems = [] } = loadKotobaCustomData();
  const deletedSet = new Set(deletedIds);

  const modifiedBase = baseList
    .filter((item) => !deletedSet.has(item.id))
    .map((item) => {
      if (overrides[item.id]) {
        return {
          ...item,
          ...overrides[item.id],
        };
      }
      return item;
    });

  return [...modifiedBase, ...addedItems.filter(item => !deletedSet.has(item.id))];
};

export const persistKotobaAdd = (item: KotobaItem): void => {
  const custom = loadKotobaCustomData();
  if (!custom.addedItems) custom.addedItems = [];
  // Replace if exists, or append
  const idx = custom.addedItems.findIndex(x => x.id === item.id);
  if (idx >= 0) {
    custom.addedItems[idx] = item;
  } else {
    custom.addedItems.push(item);
  }
  saveKotobaCustomData(custom);
};

export const persistKotobaEdit = (item: KotobaItem): void => {
  const custom = loadKotobaCustomData();
  custom.overrides[item.id] = {
    kanji: item.kanji,
    kana: item.kana,
    romaji: item.romaji,
    arti: item.arti,
    kategori: item.kategori,
  };
  custom.deletedIds = custom.deletedIds.filter((id) => id !== item.id);
  saveKotobaCustomData(custom);
};

export const persistKotobaDelete = (id: string): void => {
  const custom = loadKotobaCustomData();
  delete custom.overrides[id];
  if (!custom.deletedIds.includes(id)) {
    custom.deletedIds.push(id);
  }
  saveKotobaCustomData(custom);
};

export const resetKotobaCustomData = (): void => {
  try {
    localStorage.removeItem(KOTOBA_CUSTOM_STORAGE_KEY);
  } catch (e) {
    console.error('Failed to reset custom kotoba', e);
  }
};
