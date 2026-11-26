import type { User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ADMIN_STORAGE_KEY = 'zenora_admin_authenticated';

/**
 * Legacy helper kept for UI state cleanup only.
 * Never grants admin access without backend verification.
 */
export function isAdminAuthenticated(): boolean {
  return false;
}

export function setAdminAuthenticated(status: boolean): void {
  try {
    if (!status) {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  } catch {
    // ignore storage errors
  }
}

/**
 * Synchronous check strictly for server-controlled app_metadata.role.
 * Never trusts user_metadata or frontend email lists.
 */
export function isUserAdminRole(user: User | null | undefined): boolean {
  if (!user) return false;
  return user.app_metadata?.role === 'admin';
}

/**
 * Authoritative backend RBAC verification against Supabase Auth app_metadata & profiles.role.
 */
export async function verifyAdminRoleWithBackend(user: User | null | undefined): Promise<boolean> {
  if (!user || !supabase || !isSupabaseConfigured) {
    return false;
  }

  if (user.app_metadata?.role === 'admin') {
    return true;
  }

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .maybeSingle();

    if (error || !data) {
      return false;
    }

    return data.role === 'admin';
  } catch {
    return false;
  }
}

/**
 * Authenticates an Administrator via Supabase Auth (email + password) and verifies backend role.
 */
export async function signInAdminWithSupabase(
  email: string,
  password: string
): Promise<{ ok: boolean; error?: string }> {
  if (!supabase || !isSupabaseConfigured) {
    return {
      ok: false,
      error: 'Autentikasi Admin memerlukan koneksi Supabase yang aktif.',
    };
  }

  const cleanEmail = email.trim();
  if (!cleanEmail || !password) {
    return { ok: false, error: 'Email dan password wajib diisi.' };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: cleanEmail,
    password,
  });

  if (error || !data.user) {
    return {
      ok: false,
      error: error?.message || 'Gagal masuk. Periksa kembali email dan password Anda.',
    };
  }

  const isAdmin = await verifyAdminRoleWithBackend(data.user);
  if (!isAdmin) {
    return {
      ok: false,
      error: 'Akun ini terdaftar sebagai Siswa dan tidak memiliki izin Administrator di database.',
    };
  }

  return { ok: true };
}
