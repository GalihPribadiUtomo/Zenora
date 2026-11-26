import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  LogIn, 
  UserPlus, 
  AlertCircle, 
  CheckCircle2, 
  Database, 
  ExternalLink, 
  KeyRound, 
  ShieldCheck, 
  RefreshCw 
} from 'lucide-react';
import { 
  supabase, 
  isSupabaseConfigured, 
  SUPABASE_URL, 
  saveSupabaseCredentials, 
  clearSupabaseCredentials 
} from '../lib/supabase';
import { checkCurrentUserAccess } from '../services/inviteService';
import { sound } from '../utils/audio';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess?: () => void;
  onGuestLogin?: () => void;
  initialError?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
  onGuestLogin,
  initialError = '',
}) => {
  const [tab, setTab] = useState<'signin' | 'signup' | 'config'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Configuration form state
  const [inputUrl, setInputUrl] = useState(SUPABASE_URL || '');
  const [inputKey, setInputKey] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setErrorMessage(initialError || '');
      setSuccessMessage('');
      setGoogleLoading(false);
      setLoading(false);
      if (!isSupabaseConfigured) {
        setTab('config');
      } else {
        setTab('signin');
      }
    }
  }, [isOpen, initialError]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setErrorMessage('Supabase belum dikonfigurasi.');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim(),
      });

      if (error) throw error;

      if (data.user) {
        const access = await checkCurrentUserAccess(data.user.email || email.trim());
        if (!access.allowed) {
          await supabase.auth.signOut();
          setErrorMessage(
            access.reason || 'Akses ditolak: Email ini belum terdaftar dalam daftar undangan ZENORA.'
          );
          sound.playIncorrect();
          return;
        }
        sound.playCorrect();
        setSuccessMessage('Berhasil masuk! Menyinkronkan data...');
        setTimeout(() => {
          onAuthSuccess?.();
          onClose();
        }, 800);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal masuk. Periksa kembali email dan kata sandi.';
      setErrorMessage(msg);
      sound.playIncorrect();
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setErrorMessage('Supabase belum dikonfigurasi.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Kata sandi minimal 6 karakter.');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          data: {
            full_name: name.trim() || splitEmail(email),
          },
        },
      });

      if (error) throw error;

      if (data.user) {
        sound.playCorrect();
        setSuccessMessage('Akun berhasil dibuat! Silakan periksa email Anda untuk verifikasi jika diaktifkan.');
        setTimeout(() => {
          onAuthSuccess?.();
          onClose();
        }, 1500);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal mendaftar. Coba lagi.';
      setErrorMessage(msg);
      sound.playIncorrect();
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (!supabase || !isSupabaseConfigured) {
      setErrorMessage('Supabase belum dikonfigurasi. Atur koneksi terlebih dahulu.');
      return;
    }
    setGoogleLoading(true);
    setErrorMessage('');
    setSuccessMessage('');
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
          queryParams: {
            prompt: 'select_account',
          },
        },
      });
      if (error) throw error;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal masuk dengan Google. Pastikan provider Google aktif di Supabase.';
      setErrorMessage(msg);
      sound.playIncorrect();
      setGoogleLoading(false);
    }
  };

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.startsWith('https://')) {
      setErrorMessage('Project URL harus diawali dengan https:// (contoh: https://xyz.supabase.co)');
      return;
    }
    if (inputKey.length < 20) {
      setErrorMessage('Anon Public Key tidak valid.');
      return;
    }
    saveSupabaseCredentials(inputUrl, inputKey);
  };

  const splitEmail = (em: string) => em.split('@')[0];

  const isBusy = loading || googleLoading;

  const renderGoogleAuthButton = () => (
    <>
      <div className="relative flex py-1 items-center">
        <div className="grow border-t border-[#3978D6]/20" />
        <span className="shrink mx-3 text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider">
          atau
        </span>
        <div className="grow border-t border-[#3978D6]/20" />
      </div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isBusy}
        className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-xs border border-[#3978D6]/30 hover:border-[#3978D6]/60 shadow-2xs transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
      >
        {googleLoading ? (
          <RefreshCw className="w-4 h-4 animate-spin text-[#3978D6]" />
        ) : (
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        )}
        <span>{googleLoading ? 'Menghubungkan ke Google...' : 'Masuk dengan Google'}</span>
      </button>

      {onGuestLogin && (
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onGuestLogin();
            onClose();
          }}
          disabled={isBusy}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[var(--bg-elevated)]/70 hover:bg-[#3978D6]/15 text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-bold text-xs border border-[#3978D6]/20 transition-all active:scale-95 disabled:opacity-60 cursor-pointer"
        >
          <UserIcon className="w-3.5 h-3.5 text-[#3978D6]" />
          <span>Masuk sebagai Tamu</span>
        </button>
      )}
    </>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-sidebar)]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-[var(--bg-surface)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[var(--border)] text-[var(--text-primary)] overflow-hidden text-left animate-modal-pop"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[var(--bg-sidebar)] via-[#2456A6] to-[#69C9DF]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--bg-surface)]/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/30 flex items-center justify-center shadow-xs">
              <Database className="w-4 h-4 text-[var(--text-primary)]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[var(--text-primary)] font-['Manrope']">
                {tab === 'config' ? 'Konfigurasi Database Cloud' : 'Akun Pembelajar ZENORA'}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {tab === 'config' 
                  ? 'Hubungkan ke Supabase PostgreSQL' 
                  : 'Sinkronisasi progres belajar Anda di semua perangkat'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[var(--bg-sidebar)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between p-1 mx-6 mt-4 bg-[var(--bg-sidebar)]/70 rounded-2xl border border-[var(--border)]">
          <button
            type="button"
            onClick={() => { setTab('signin'); setErrorMessage(''); }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'signin'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => { setTab('signup'); setErrorMessage(''); }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              tab === 'signup'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            Daftar Baru
          </button>
          <button
            type="button"
            onClick={() => { setTab('config'); setErrorMessage(''); }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
              tab === 'config'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs font-black'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Database className="w-3 h-3" />
            <span>Koneksi</span>
          </button>
        </div>

        {/* Alerts */}
        <div className="px-6 pt-3 space-y-2">
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>

        {/* TAB 1: SIGN IN */}
        {tab === 'signin' && (
          <form onSubmit={handleSignIn} className="p-6 pt-3 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm font-semibold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm font-semibold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isBusy}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] border border-[#3978D6]/40 hover:brightness-110 text-[var(--text-primary)] font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <LogIn className="w-4 h-4 text-[#83B7EE]" />
              )}
              <span>Masuk & Sinkronkan Progres</span>
            </button>

            {renderGoogleAuthButton()}
          </form>
        )}

        {/* TAB 2: SIGN UP */}
        {tab === 'signup' && (
          <form onSubmit={handleSignUp} className="p-6 pt-3 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Nama Lengkap / Panggilan
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Kenji"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm font-semibold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm font-semibold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 6 karakter"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm font-semibold text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isBusy}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] border border-[#3978D6]/40 hover:brightness-110 text-[var(--text-primary)] font-bold text-sm shadow-md transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <UserPlus className="w-4 h-4 text-[#83B7EE]" />
              )}
              <span>Daftar Akun Baru</span>
            </button>

            {renderGoogleAuthButton()}
          </form>
        )}

        {/* TAB 3: CONFIGURATION (SUPABASE URL & ANON KEY) */}
        {tab === 'config' && (
          <form onSubmit={handleSaveConfig} className="p-6 pt-3 space-y-4">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/25 text-[var(--text-primary)] text-xs leading-relaxed space-y-1">
              <div className="font-black flex items-center gap-1.5 text-[#3978D6]">
                <ShieldCheck className="w-4 h-4" />
                <span>Pengaturan Database Supabase</span>
              </div>
              <p className="text-[11px] text-[var(--text-muted)]">
                Salin Project URL dan anon public key dari Project Settings → API, lalu simpan di bawah:
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Supabase Project URL
              </label>
              <input
                type="text"
                required
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://your-project.supabase.co"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-sm font-mono text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">
                Supabase Anon Public Key
              </label>
              <textarea
                rows={2}
                required
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-xs font-mono text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30 focus:border-[#3978D6]"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              {SUPABASE_URL && (
                <button
                  type="button"
                  onClick={clearSupabaseCredentials}
                  className="px-3.5 py-2.5 rounded-xl border border-red-500/40 bg-red-950/40 hover:bg-red-900/50 text-red-300 text-xs font-bold transition-colors"
                >
                  Reset
                </button>
              )}
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] border border-[#3978D6]/40 hover:brightness-110 text-[var(--text-primary)] font-bold text-xs shadow-md transition-all active:scale-95"
              >
                <KeyRound className="w-4 h-4 text-[#3978D6]" />
                <span>Simpan & Terapkan Kunci</span>
              </button>
            </div>

            <div className="text-[10px] text-[var(--text-muted)] bg-[var(--bg-sidebar)]/60 p-2.5 rounded-xl border border-[#3978D6]/25">
              Tabel database telah diverifikasi dan siap digunakan untuk sinkronisasi progres Anda.
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
