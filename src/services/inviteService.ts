import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface AccessCheckResult {
  allowed: boolean;
  role: 'user' | 'admin' | null;
  email: string;
  reason?: string;
}

export interface AllowedEmailEntry {
  email: string;
  role: 'user';
  note: string;
  added_by: string | null;
  created_at: string;
}

/**
 * Verifies against backend RPC `check_my_access` for the authenticated user,
 * auto-registering them into allowed_emails & profiles with role='user'.
 */
export async function checkCurrentUserAccess(fallbackEmail = ''): Promise<AccessCheckResult> {
  if (!supabase || !isSupabaseConfigured) {
    return {
      allowed: false,
      role: null,
      email: fallbackEmail,
      reason: 'Koneksi Supabase belum dikonfigurasi.',
    };
  }

  try {
    const { data, error } = await supabase.rpc('check_my_access');
    if (error || !data) {
      return {
        allowed: false,
        role: null,
        email: fallbackEmail,
        reason: error?.message || 'Gagal memverifikasi akses di server.',
      };
    }

    const result = data as { allowed?: boolean; role?: 'user' | 'admin' | null; email?: string };
    return {
      allowed: Boolean(result.allowed),
      role: result.role ?? null,
      email: result.email || fallbackEmail,
      reason: result.allowed ? undefined : 'Sesi tidak valid. Silakan masuk kembali.',
    };
  } catch (err) {
    return {
      allowed: false,
      role: null,
      email: fallbackEmail,
      reason: err instanceof Error ? err.message : 'Gagal memeriksa izin akses.',
    };
  }
}

/**
 * Checks whether an email is permitted to register/sign in before creating an auth user.
 */
export async function canEmailRegister(email: string): Promise<{ allowed: boolean; error?: string }> {
  if (!supabase || !isSupabaseConfigured) {
    return { allowed: false, error: 'Supabase belum dikonfigurasi.' };
  }

  const clean = email.trim().toLowerCase();
  if (!clean) {
    return { allowed: false, error: 'Alamat email wajib diisi.' };
  }

  try {
    const { data, error } = await supabase.rpc('can_email_register', { check_email: clean });
    if (error) {
      return { allowed: false, error: error.message };
    }
    return { allowed: Boolean(data) };
  } catch (err) {
    return {
      allowed: false,
      error: err instanceof Error ? err.message : 'Gagal memeriksa daftar izin.',
    };
  }
}

/**
 * Admin-only: fetch all allowlisted emails.
 */
export async function fetchAllowedEmails(): Promise<{ data: AllowedEmailEntry[]; error?: string }> {
  if (!supabase || !isSupabaseConfigured) {
    return { data: [], error: 'Supabase belum dikonfigurasi.' };
  }

  const { data, error } = await supabase
    .from('allowed_emails')
    .select('email, role, note, added_by, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    return { data: [], error: error.message };
  }

  return { data: (data as AllowedEmailEntry[]) || [] };
}

/**
 * Admin-only: add one or more emails to the allowlist with role='user'.
 */
export async function addAllowedEmails(
  rawEmails: string[],
  note: string,
  addedBy?: string
): Promise<{ addedCount: number; error?: string }> {
  if (!supabase || !isSupabaseConfigured) {
    return { addedCount: 0, error: 'Supabase belum dikonfigurasi.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const normalized = Array.from(
    new Set(
      rawEmails
        .map((e) => e.trim().toLowerCase())
        .filter((e) => emailRegex.test(e))
    )
  );

  if (normalized.length === 0) {
    return { addedCount: 0, error: 'Masukkan minimal satu alamat email yang valid.' };
  }

  const rows = normalized.map((email) => ({
    email,
    role: 'user' as const,
    note: note.trim(),
    added_by: addedBy || null,
  }));

  const { error } = await supabase
    .from('allowed_emails')
    .upsert(rows, { onConflict: 'email' });

  if (error) {
    return { addedCount: 0, error: error.message };
  }

  return { addedCount: normalized.length };
}

/**
 * Admin-only: revoke an email from the allowlist.
 * RLS immediately blocks future reads/writes for that user.
 */
export async function revokeAllowedEmail(email: string): Promise<{ ok: boolean; error?: string }> {
  if (!supabase || !isSupabaseConfigured) {
    return { ok: false, error: 'Supabase belum dikonfigurasi.' };
  }

  const { error } = await supabase
    .from('allowed_emails')
    .delete()
    .eq('email', email.trim().toLowerCase());

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
