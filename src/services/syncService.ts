import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { UserStats } from '../types';
import { loadKotobaCustomData, saveKotobaCustomData } from '../utils/kotobaStorage';
import { loadAllCustomMateri, saveAllCustomMateri } from '../utils/materiStorage';

export interface CloudSyncResult {
  success: boolean;
  message?: string;
  mergedStats?: UserStats;
}

/**
 * Sync all local user stats up to Supabase cloud
 */
export const syncAllToCloud = async (userId: string, stats: UserStats): Promise<boolean> => {
  if (!supabase || !isSupabaseConfigured || !userId) return false;

  try {
    // 1. Update Profile (streak & last active date)
    await supabase.from('profiles').upsert({
      id: userId,
      streak_days: stats.streakDays,
      last_active_date: stats.lastActiveDate,
      updated_at: new Date().toISOString(),
    });

    // 2. Batch sync learned items (Kotoba, Kanji, Kana)
    const learnedRows: { user_id: string; item_type: string; item_id: string; learned_at: string }[] = [];
    const now = new Date().toISOString();

    stats.learnedKotobaIds.forEach((id) => {
      learnedRows.push({ user_id: userId, item_type: 'kotoba', item_id: id, learned_at: now });
    });
    stats.learnedKanjiIds.forEach((id) => {
      learnedRows.push({ user_id: userId, item_type: 'kanji', item_id: id.toString(), learned_at: now });
    });
    (stats.learnedKanaChars || []).forEach((char) => {
      learnedRows.push({ user_id: userId, item_type: 'kana', item_id: char, learned_at: now });
    });

    if (learnedRows.length > 0) {
      // Upsert in batches of 200 to avoid request size limits
      for (let i = 0; i < learnedRows.length; i += 200) {
        const batch = learnedRows.slice(i, i + 200);
        await supabase.from('user_learned_items').upsert(batch, {
          onConflict: 'user_id,item_type,item_id',
          ignoreDuplicates: true,
        });
      }
    }

    // 3. Batch sync bookmarks
    const bookmarkRows: { user_id: string; item_type: string; item_id: string; created_at: string }[] = [];
    stats.bookmarkedKotobaIds.forEach((id) => {
      bookmarkRows.push({ user_id: userId, item_type: 'kotoba', item_id: id, created_at: now });
    });
    (stats.bookmarkedKanjiIds || []).forEach((id) => {
      bookmarkRows.push({ user_id: userId, item_type: 'kanji', item_id: id.toString(), created_at: now });
    });

    if (bookmarkRows.length > 0) {
      await supabase.from('user_bookmarks').upsert(bookmarkRows, {
        onConflict: 'user_id,item_type,item_id',
        ignoreDuplicates: true,
      });
    }

    // 4. Sync custom kotoba & custom materi edits/deletes
    await syncCustomKotobaToCloud(userId);
    await syncCustomMateriToCloud(userId);

    return true;
  } catch (err) {
    console.error('Failed to sync data to Supabase cloud:', err);
    return false;
  }
};

/**
 * Pull cloud stats and merge with local stats
 */
export const pullAndMergeFromCloud = async (userId: string, localStats: UserStats): Promise<UserStats> => {
  if (!supabase || !isSupabaseConfigured || !userId) return localStats;

  try {
    // 1. Fetch Profile
    const { data: profile } = await supabase
      .from('profiles')
      .select('streak_days, last_active_date')
      .eq('id', userId)
      .single();

    // 2. Fetch Learned Items
    const { data: learnedItems } = await supabase
      .from('user_learned_items')
      .select('item_type, item_id')
      .eq('user_id', userId);

    // 3. Fetch Bookmarks
    const { data: bookmarks } = await supabase
      .from('user_bookmarks')
      .select('item_type, item_id')
      .eq('user_id', userId);

    // Merge Kotoba
    const cloudKotoba = (learnedItems || [])
      .filter((i) => i.item_type === 'kotoba')
      .map((i) => i.item_id);
    const mergedKotobaIds = Array.from(new Set([...localStats.learnedKotobaIds, ...cloudKotoba]));

    // Merge Kanji
    const cloudKanji = (learnedItems || [])
      .filter((i) => i.item_type === 'kanji')
      .map((i) => parseInt(i.item_id, 10))
      .filter((n) => !isNaN(n));
    const mergedKanjiIds = Array.from(new Set([...localStats.learnedKanjiIds, ...cloudKanji]));

    // Merge Kana
    const cloudKana = (learnedItems || [])
      .filter((i) => i.item_type === 'kana')
      .map((i) => i.item_id);
    const mergedKanaChars = Array.from(new Set([...(localStats.learnedKanaChars || []), ...cloudKana]));

    // Merge Bookmarked Kotoba
    const cloudBookmarkedKotoba = (bookmarks || [])
      .filter((b) => b.item_type === 'kotoba')
      .map((b) => b.item_id);
    const mergedBookmarkedKotobaIds = Array.from(new Set([...localStats.bookmarkedKotobaIds, ...cloudBookmarkedKotoba]));

    // Pull custom kotoba & materi edits
    await pullCustomKotobaFromCloud(userId);
    await pullCustomMateriFromCloud(userId);

    const merged: UserStats = {
      ...localStats,
      learnedKotobaIds: mergedKotobaIds,
      learnedKanjiIds: mergedKanjiIds,
      learnedKanaChars: mergedKanaChars,
      bookmarkedKotobaIds: mergedBookmarkedKotobaIds,
      streakDays: Math.max(localStats.streakDays, profile?.streak_days || 1),
      lastActiveDate: profile?.last_active_date || localStats.lastActiveDate,
    };

    return merged;
  } catch (err) {
    console.error('Failed to pull data from Supabase cloud:', err);
    return localStats;
  }
};

/**
 * Sync local custom kotoba (edits and deletes) to cloud
 */
export const syncCustomKotobaToCloud = async (userId: string): Promise<void> => {
  if (!supabase || !isSupabaseConfigured || !userId) return;

  try {
    const custom = loadKotobaCustomData();
    const rows = [];
    const now = new Date().toISOString();

    // Overrides
    for (const [id, val] of Object.entries(custom.overrides)) {
      rows.push({
        user_id: userId,
        kotoba_id: id,
        kanji: val.kanji || null,
        kana: val.kana || null,
        romaji: val.romaji || null,
        arti: val.arti || null,
        kategori: val.kategori || null,
        is_deleted: false,
        updated_at: now,
      });
    }

    // Deleted items
    for (const id of custom.deletedIds) {
      rows.push({
        user_id: userId,
        kotoba_id: id,
        is_deleted: true,
        updated_at: now,
      });
    }

    if (rows.length > 0) {
      await supabase.from('user_custom_kotoba').upsert(rows, {
        onConflict: 'user_id,kotoba_id',
      });
    }
  } catch (e) {
    console.error('Failed to sync custom kotoba to cloud', e);
  }
};

/**
 * Pull custom kotoba from cloud and update localStorage
 */
export const pullCustomKotobaFromCloud = async (userId: string): Promise<void> => {
  if (!supabase || !isSupabaseConfigured || !userId) return;

  try {
    const { data } = await supabase
      .from('user_custom_kotoba')
      .select('*')
      .eq('user_id', userId);

    if (data && data.length > 0) {
      const current = loadKotobaCustomData();
      data.forEach((row) => {
        if (row.is_deleted) {
          if (!current.deletedIds.includes(row.kotoba_id)) {
            current.deletedIds.push(row.kotoba_id);
          }
          delete current.overrides[row.kotoba_id];
        } else {
          current.overrides[row.kotoba_id] = {
            kanji: row.kanji || '',
            kana: row.kana || '',
            romaji: row.romaji || '',
            arti: row.arti || '',
            kategori: row.kategori || 'Umum & Ungkapan',
          };
          current.deletedIds = current.deletedIds.filter((id) => id !== row.kotoba_id);
        }
      });
      saveKotobaCustomData(current);
    }
  } catch (e) {
    console.error('Failed to pull custom kotoba from cloud', e);
  }
};

/**
 * Sync local custom materi (Bunpou, Bunkei, Reibun, Kaiwa overrides) to cloud
 */
export const syncCustomMateriToCloud = async (userId: string): Promise<void> => {
  if (!supabase || !isSupabaseConfigured || !userId) return;

  try {
    const customMateri = loadAllCustomMateri();
    const rows = [];
    const now = new Date().toISOString();

    for (const [babKey, lessonOverride] of Object.entries(customMateri)) {
      rows.push({
        user_id: userId,
        bab: parseInt(babKey, 10),
        lesson_data: lessonOverride,
        updated_at: now,
      });
    }

    if (rows.length > 0) {
      await supabase.from('user_custom_materi').upsert(rows, {
        onConflict: 'user_id,bab',
      });
    }
  } catch (e) {
    console.error('Failed to sync custom materi to cloud (non-fatal if table pending)', e);
  }
};

/**
 * Pull custom materi from cloud and update localStorage without duplication
 */
export const pullCustomMateriFromCloud = async (userId: string): Promise<void> => {
  if (!supabase || !isSupabaseConfigured || !userId) return;

  try {
    const { data } = await supabase
      .from('user_custom_materi')
      .select('bab, lesson_data')
      .eq('user_id', userId);

    if (data && data.length > 0) {
      const current = loadAllCustomMateri();
      data.forEach((row) => {
        if (row.bab && row.lesson_data && typeof row.lesson_data === 'object') {
          const prev = current[row.bab] || {};
          const incoming = row.lesson_data;
          current[row.bab] = {
            ...prev,
            ...incoming,
            // Never overwrite non-empty sections with empty arrays from stale cloud rows
            tataBahasa: Array.isArray(incoming.tataBahasa) && incoming.tataBahasa.length > 0 ? incoming.tataBahasa : prev.tataBahasa,
            polaKalimat: Array.isArray(incoming.polaKalimat) && incoming.polaKalimat.length > 0 ? incoming.polaKalimat : prev.polaKalimat,
            contohKalimat: Array.isArray(incoming.contohKalimat) && incoming.contohKalimat.length > 0 ? incoming.contohKalimat : prev.contohKalimat,
            percakapan: incoming.percakapan?.dialogs?.length > 0 ? incoming.percakapan : prev.percakapan,
          };
        }
      });
      saveAllCustomMateri(current);
    }
  } catch (e) {
    console.error('Failed to pull custom materi from cloud (non-fatal if table pending)', e);
  }
};
