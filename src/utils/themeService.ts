import { supabase, isSupabaseConfigured } from '../lib/supabase';

export type ThemePreference = 'dark' | 'light' | 'system';
export type ResolvedTheme = 'dark' | 'light';

const THEME_STORAGE_KEY = 'zenora_theme_preference_v1';

export const getStoredThemePreference = (): ThemePreference => {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (raw === 'dark' || raw === 'light' || raw === 'system') {
      return raw;
    }
  } catch {
    // ignore storage errors
  }
  return 'dark';
};

export const saveThemePreference = (pref: ThemePreference): void => {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, pref);
  } catch {
    // ignore storage errors
  }
};

export const getSystemTheme = (): ResolvedTheme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

export const resolveTheme = (pref: ThemePreference): ResolvedTheme => {
  if (pref === 'system') {
    return getSystemTheme();
  }
  return pref;
};

export const applyThemeToDocument = (resolved: ResolvedTheme): void => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.setAttribute('data-theme', resolved);
  root.classList.toggle('theme-light', resolved === 'light');
  root.classList.toggle('theme-dark', resolved === 'dark');
  root.style.colorScheme = resolved;

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', resolved === 'light' ? '#F1F6FC' : '#08152F');
  }
};

/**
 * Persist theme preference to Supabase user_metadata when signed in
 */
export const syncThemeToSupabase = async (pref: ThemePreference): Promise<void> => {
  if (!supabase || !isSupabaseConfigured) return;
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      await supabase.auth.updateUser({
        data: { zenora_theme: pref }
      });
    }
  } catch {
    // non-fatal if offline or guest
  }
};
