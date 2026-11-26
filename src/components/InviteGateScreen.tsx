import React from 'react';
import { Lock, LogIn, ShieldAlert, RefreshCw, Sparkles, UserCheck } from 'lucide-react';

interface InviteGateScreenProps {
  isChecking: boolean;
  deniedEmail?: string;
  deniedReason?: string;
  onOpenAuth: () => void;
  onGuestLogin?: () => void;
}

export const InviteGateScreen: React.FC<InviteGateScreenProps> = ({
  isChecking,
  deniedEmail,
  deniedReason,
  onOpenAuth,
  onGuestLogin,
}) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-[var(--bg-canvas)] text-[var(--text-primary)] relative overflow-hidden">
      {/* Ambient Arctic Blue Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#3978D6]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#75BDE8]/15 blur-3xl" />

      <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/30 shadow-2xl overflow-hidden">
        <div className="h-1.5 w-full bg-gradient-to-r from-[#2463B9] via-[#3D82D8] to-[#75BDE8]" />

        <div className="p-6 sm:p-8 text-center space-y-5">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2463B9] to-[#3D82D8] text-white flex items-center justify-center shadow-lg">
            {isChecking ? (
              <RefreshCw className="w-7 h-7 animate-spin" />
            ) : deniedReason ? (
              <ShieldAlert className="w-7 h-7" />
            ) : (
              <Lock className="w-7 h-7" />
            )}
          </div>

          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3978D6]/15 border border-[#3978D6]/30 text-[11px] font-bold uppercase tracking-wider text-[#3978D6]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portal Pembelajar ZENORA</span>
            </div>
            <h1 className="text-2xl font-black font-['Manrope'] text-[var(--text-primary)]">
              ZENORA
            </h1>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {isChecking
                ? 'Memverifikasi sesi dan menyiapkan profil belajar Anda...'
                : 'Masuk dengan akun Google atau Email Anda untuk mulai belajar bahasa Jepang dan menyinkronkan progres di semua perangkat.'}
            </p>
          </div>

          {deniedReason && !isChecking && (
            <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/35 text-left space-y-1">
              <div className="text-xs font-black text-red-400">Verifikasi Gagal</div>
              {deniedEmail && (
                <div className="text-[11px] font-mono text-[var(--text-primary)] break-all">
                  {deniedEmail}
                </div>
              )}
              <p className="text-xs text-red-300 leading-relaxed">{deniedReason}</p>
            </div>
          )}

          {!isChecking && (
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={onOpenAuth}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-[#2463B9] to-[#3978D8] hover:brightness-110 text-white font-bold text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk / Daftar Sekarang</span>
              </button>

              {onGuestLogin && (
                <button
                  type="button"
                  onClick={onGuestLogin}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-5 rounded-2xl bg-[var(--bg-elevated)] hover:bg-[#3978D6]/15 border border-[#3978D6]/30 text-[var(--text-primary)] font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer"
                >
                  <UserCheck className="w-4 h-4 text-[#3978D6]" />
                  <span>Masuk sebagai Tamu</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
