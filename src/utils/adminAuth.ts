// Utility to manage Administrator Role and Security Authentication for ZENORA

const ADMIN_STORAGE_KEY = 'zenora_admin_authenticated';
const ADMIN_MASTER_PASSCODES = ['zenora-admin', 'admin888', 'zenora2026', 'admin'];

// Recognized Admin emails (if Supabase user is logged in)
const ADMIN_EMAIL_WHITELIST = [
  'admin@zenora.jp',
  'admin@zenora.ac.jp',
  'sensei@zenora.ac.jp',
  'galih@zenora.ac.jp'
];

/**
 * Check if the current session has admin privileges
 */
export function isAdminAuthenticated(): boolean {
  try {
    return localStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Set admin session authentication status
 */
export function setAdminAuthenticated(status: boolean): void {
  try {
    if (status) {
      localStorage.setItem(ADMIN_STORAGE_KEY, 'true');
    } else {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
    }
  } catch (e) {
    console.error('Failed to update admin authentication status:', e);
  }
}

/**
 * Verify passcode entered by user
 */
export function verifyAdminPasscode(input: string): boolean {
  if (!input) return false;
  const cleanInput = input.trim().toLowerCase();
  return ADMIN_MASTER_PASSCODES.some(code => code.toLowerCase() === cleanInput);
}

/**
 * Check if a logged-in Supabase user has admin role
 */
export function isUserAdminRole(user: any): boolean {
  if (!user) return false;
  
  // Check user metadata
  if (user.user_metadata?.role === 'admin' || user.app_metadata?.role === 'admin') {
    return true;
  }

  // Check email whitelist
  if (user.email && ADMIN_EMAIL_WHITELIST.some(em => em.toLowerCase() === user.email.toLowerCase())) {
    return true;
  }

  return false;
}
