import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

// Get keys from environment variables or localStorage (allows user to enter keys directly in the browser UI)
const envUrl = import.meta.env.VITE_SUPABASE_URL || '';
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

const localUrl = typeof window !== 'undefined' ? localStorage.getItem('zenora_supabase_url') || '' : '';
const localKey = typeof window !== 'undefined' ? localStorage.getItem('zenora_supabase_key') || '' : '';

export const SUPABASE_URL = (envUrl || localUrl).trim();
export const SUPABASE_ANON_KEY = (envKey || localKey).trim();

// Check if valid URL & Key are provided
export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && 
  SUPABASE_ANON_KEY && 
  SUPABASE_URL.startsWith('https://') &&
  SUPABASE_ANON_KEY.length > 15
);

let client: SupabaseClient | null = null;

if (isSupabaseConfigured) {
  try {
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
  }
}

export const supabase = client;

// Save dynamic credentials from in-app settings (if user provides them in modal)
export const saveSupabaseCredentials = (url: string, key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('zenora_supabase_url', url.trim());
    localStorage.setItem('zenora_supabase_key', key.trim());
    window.location.reload();
  }
};

export const clearSupabaseCredentials = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('zenora_supabase_url');
    localStorage.removeItem('zenora_supabase_key');
    window.location.reload();
  }
};

// Auth helper types & state
export interface AuthState {
  user: User | null;
  loading: boolean;
  isConfigured: boolean;
}
