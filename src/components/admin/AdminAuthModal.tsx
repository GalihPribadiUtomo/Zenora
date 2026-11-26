import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Mail,
  X,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  signInAdminWithSupabase,
  verifyAdminRoleWithBackend
} from '../../utils/adminAuth';
import { isSupabaseConfigured } from '../../lib/supabase';
import { sound } from '../../utils/audio';

interface AdminAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  user?: any;
}

export const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  user
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isShake, setIsShake] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail(user?.email || '');
      setPassword('');
      setErrorMessage('');
      setIsSuccess(false);
      setIsSubmitting(false);
      setIsShake(false);
    }
  }, [isOpen, user]);

  if (!isOpen) return null;

  const triggerError = (msg: string) => {
    setErrorMessage(msg);
    setIsShake(true);
    sound.playIncorrect();
    setTimeout(() => setIsShake(false), 500);
  };

  const handleVerifyExistingSession = async () => {
    if (!user) return;
    setIsSubmitting(true);
    setErrorMessage('');
    const ok = await verifyAdminRoleWithBackend(user);
    setIsSubmitting(false);
    if (ok) {
      setIsSuccess(true);
      sound.playCorrect();
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 600);
    } else {
      triggerError('Akun yang sedang login tidak memiliki role Admin pada tabel profiles.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isSupabaseConfigured) {
      triggerError('Supabase belum dikonfigurasi. Atur VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY terlebih dahulu.');
      return;
    }

    setIsSubmitting(true);
    const res = await signInAdminWithSupabase(email, password);
    setIsSubmitting(false);

    if (res.ok) {
      setIsSuccess(true);
      sound.playCorrect();
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 600);
    } else {
      triggerError(res.error || 'Autentikasi Admin gagal.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fade-in">
      <div
        className={`relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[var(--border)] p-6 sm:p-8 shadow-2xl text-[var(--text-primary)] overflow-hidden ${
          isShake ? 'animate-shake-soft' : 'animate-modal-pop'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2866B5] to-[#4389D4] p-0.5 shadow-lg mb-4 flex items-center justify-center">
            <div className="w-full h-full bg-[var(--bg-card)] rounded-[14px] flex items-center justify-center">
              {isSuccess ? (
                <CheckCircle2 className="w-8 h-8 text-[#27B99A]" />
              ) : (
                <ShieldCheck className="w-8 h-8 text-[var(--primary)]" />
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/12 border border-[var(--primary)]/25 text-[var(--primary)] text-xs font-black uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Autentikasi RBAC Backend</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-[var(--text-primary)] font-['Manrope']">
            Login Portal Administrator
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1.5 max-w-xs">
            Masuk dengan akun Administrator yang terverifikasi pada database Supabase (`profiles.role = admin`).
          </p>
        </div>

        {/* Active session quick verification */}
        {user && (
          <div className="mb-4 p-3 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-between gap-2 text-xs">
            <div className="min-w-0">
              <p className="text-[var(--text-muted)]">Sesi aktif:</p>
              <p className="text-[var(--text-primary)] font-bold truncate">{user.email}</p>
            </div>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={handleVerifyExistingSession}
              className="px-3 py-1.5 rounded-xl bg-[var(--primary)] text-white text-[11px] font-bold shrink-0 cursor-pointer disabled:opacity-50"
            >
              Verifikasi Role
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-[var(--text-secondary)]">Email Administrator</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@domain.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                required
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label className="text-xs font-bold text-[var(--text-secondary)]">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password akun..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] text-sm text-[var(--text-primary)]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
                aria-label="Toggle password"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-xl bg-[#E56B78]/12 border border-[#E56B78]/30 text-[#E56B78] text-xs font-semibold flex items-start gap-2 text-left">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="w-full py-3 rounded-2xl neon-btn-primary text-white text-sm font-black flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <span>{isSubmitting ? 'Memverifikasi...' : 'Masuk Sebagai Admin'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
