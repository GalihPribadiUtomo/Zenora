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
import { sound } from '../utils/audio';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess?: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
}) => {
  const [tab, setTab] = useState<'signin' | 'signup' | 'config'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Configuration form state
  const [inputUrl, setInputUrl] = useState(SUPABASE_URL || '');
  const [inputKey, setInputKey] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setErrorMessage('');
      setSuccessMessage('');
      if (!isSupabaseConfigured) {
        setTab('config');
      } else {
        setTab('signin');
      }
    }
  }, [isOpen]);

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
    if (!supabase) return;
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Gagal masuk dengan Google.';
      setErrorMessage(msg);
      setLoading(false);
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101C3D]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-[#0D1830] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#2457C5]/30 text-[#DCE9FF] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5]" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2457C5]/25 bg-[#121F3D]/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#101C3D] to-[#2457C5] text-white flex items-center justify-center shadow-xs">
              <Database className="w-4 h-4 text-[#55B9F5]" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#DCE9FF] font-['Manrope']">
                {tab === 'config' ? 'Konfigurasi Database Cloud' : 'Akun Pembelajar ZENORA'}
              </h3>
              <p className="text-xs text-[#6B85B5]">
                {tab === 'config' 
                  ? 'Hubungkan ke Supabase PostgreSQL' 
                  : 'Sinkronisasi progres belajar Anda di semua perangkat'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#0D1830]/15/12 text-[#6B85B5] hover:text-[#DCE9FF] transition-colors"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between p-1 mx-6 mt-4 bg-[#0D1830]/8 rounded-2xl border border-[#2457C5]/25">
          <button
            type="button"
            onClick={() => { setTab('signin'); setErrorMessage(''); }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === 'signin'
                ? 'bg-[#0D1830] text-[#55B9F5] shadow-xs'
                : 'text-[#6B85B5] hover:text-[#DCE9FF]'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => { setTab('signup'); setErrorMessage(''); }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === 'signup'
                ? 'bg-[#0D1830] text-[#55B9F5] shadow-xs'
                : 'text-[#6B85B5] hover:text-[#DCE9FF]'
            }`}
          >
            Daftar Baru
          </button>
          <button
            type="button"
            onClick={() => { setTab('config'); setErrorMessage(''); }}
            className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 ${
              tab === 'config'
                ? 'bg-[#0D1830] text-[#55B9F5] shadow-xs font-black'
                : 'text-[#6B85B5] hover:text-[#DCE9FF]'
            }`}
          >
            <Database className="w-3 h-3" />
            <span>Koneksi</span>
          </button>
        </div>

        {/* Alerts */}
        <div className="px-6 pt-3 space-y-2">
          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/15 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}
        </div>

        {/* TAB 1: SIGN IN */}
        {tab === 'signin' && (
          <form onSubmit={handleSignIn} className="p-6 pt-3 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#6B85B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#6B85B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-sm shadow-md shadow-[#101C3D]/15 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <LogIn className="w-4 h-4 text-[#55B9F5]" />
              )}
              <span>Masuk & Sinkronkan Progres</span>
            </button>

            {/* Google OAuth Login */}
            <div className="relative flex py-1 items-center">
              <div className="grow border-t border-[#2457C5]/25"></div>
              <span className="shrink mx-3 text-[10px] text-[#6B85B5] font-bold uppercase tracking-wider">
                atau
              </span>
              <div className="grow border-t border-[#2457C5]/25"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0D1830] hover:bg-[#121F3D] text-[#DCE9FF] font-bold text-xs border border-[#2457C5]/25 shadow-2xs transition-all active:scale-95"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
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
              <span>Lanjut dengan Akun Google</span>
            </button>
          </form>
        )}

        {/* TAB 2: SIGN UP */}
        {tab === 'signup' && (
          <form onSubmit={handleSignUp} className="p-6 pt-3 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Nama Lengkap / Panggilan
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-[#6B85B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Kenji"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Alamat Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#6B85B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Kata Sandi
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#6B85B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimal 6 karakter"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-sm shadow-md shadow-[#101C3D]/15 transition-all active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <UserPlus className="w-4 h-4 text-[#55B9F5]" />
              )}
              <span>Daftar Akun Baru</span>
            </button>
          </form>
        )}

        {/* TAB 3: CONFIGURATION (SUPABASE URL & ANON KEY) */}
        {tab === 'config' && (
          <form onSubmit={handleSaveConfig} className="p-6 pt-3 space-y-4">
            <div className="p-3.5 rounded-2xl bg-[#0D1830]/12/60 border border-[#2457C5]/30 text-[#DCE9FF] text-xs leading-relaxed space-y-1">
              <div className="font-black flex items-center gap-1.5 text-[#55B9F5]">
                <ShieldCheck className="w-4 h-4" />
                <span>Pengaturan Database Supabase</span>
              </div>
              <p className="text-[11px] text-[#6B85B5]">
                Salin Project URL dan anon public key dari Project Settings → API, lalu simpan di bawah:
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Supabase Project URL
              </label>
              <input
                type="text"
                required
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://your-project.supabase.co"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-mono text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
                Supabase Anon Public Key
              </label>
              <textarea
                rows={2}
                required
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-xs font-mono text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              {SUPABASE_URL && (
                <button
                  type="button"
                  onClick={clearSupabaseCredentials}
                  className="px-3.5 py-2.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition-colors"
                >
                  Reset
                </button>
              )}
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-xs shadow-md shadow-[#101C3D]/15 transition-all active:scale-95"
              >
                <KeyRound className="w-4 h-4 text-[#55B9F5]" />
                <span>Simpan & Terapkan Kunci</span>
              </button>
            </div>

            <div className="text-[10px] text-[#6B85B5] bg-[#0D1830]/8 p-2.5 rounded-xl border border-[#2457C5]/25">
              Tabel database telah diverifikasi dan siap digunakan untuk sinkronisasi progres Anda.
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
