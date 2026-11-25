import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles
} from 'lucide-react';
import { verifyAdminPasscode, setAdminAuthenticated, isUserAdminRole } from '../../utils/adminAuth';
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
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isShake, setIsShake] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPasscode('');
      setErrorMessage('');
      setIsSuccess(false);
      setIsShake(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    // If user account is already verified admin
    if (user && isUserAdminRole(user)) {
      setAdminAuthenticated(true);
      setIsSuccess(true);
      sound.playCorrect();
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 700);
      return;
    }

    if (!passcode.trim()) {
      setErrorMessage('Silakan masukkan kunci akses admin.');
      setIsShake(true);
      sound.playIncorrect();
      setTimeout(() => setIsShake(false), 500);
      return;
    }

    const isValid = verifyAdminPasscode(passcode);
    if (isValid) {
      setAdminAuthenticated(true);
      setIsSuccess(true);
      sound.playCorrect();
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 700);
    } else {
      setErrorMessage('Kunci akses salah. Periksa kembali passcode Anda.');
      setIsShake(true);
      sound.playIncorrect();
      setTimeout(() => setIsShake(false), 500);
    }
  };

  const handleQuickFill = () => {
    sound.playClick();
    setPasscode('zenora-admin');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08152F]/85 backdrop-blur-md animate-fade-in">
      <div 
        className={`relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#172945] to-[#08152F] border border-[#263D60] p-6 sm:p-8 shadow-[0_0_50px_rgba(36,86,166,0.3)] text-white overflow-hidden ${
          isShake ? 'animate-shake-soft' : 'animate-modal-pop'
        }`}
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#2456A6]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#69C9DF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#7186A5] hover:text-white hover:bg-[#111F38] transition-colors cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon & Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2456A6] to-[#3978D6] p-0.5 shadow-[0_0_25px_rgba(36,86,166,0.45)] mb-4 flex items-center justify-center">
            <div className="w-full h-full bg-[#08152F] rounded-[14px] flex items-center justify-center">
              {isSuccess ? (
                <CheckCircle2 className="w-8 h-8 text-[#45C6A5] animate-pulse" />
              ) : (
                <ShieldCheck className="w-8 h-8 text-[#3978D6]" />
              )}
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2456A6]/20 border border-[#3978D6]/40 text-[#83B7EE] text-xs font-black uppercase tracking-wider mb-2">
            <Lock className="w-3.5 h-3.5" />
            <span>Area Terbatas</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white font-['Manrope']">
            Verifikasi Akses Admin
          </h2>
          <p className="text-xs sm:text-sm text-[#A9BBD3] mt-1.5 max-w-xs">
            Hanya instruktur dan administrator ZENORA yang dapat mengelola materi dan sistem.
          </p>
        </div>

        {/* User Account Role Info (if logged in) */}
        {user && (
          <div className="mb-5 p-3 rounded-2xl bg-[#111F38] border border-[#263D60] flex items-center justify-between text-xs">
            <div>
              <p className="text-[#7186A5]">Login sebagai:</p>
              <p className="text-white font-bold truncate max-w-[200px]">{user.email}</p>
            </div>
            <span className={`px-2 py-0.5 rounded-lg text-[10px] font-extrabold uppercase ${
              isUserAdminRole(user) 
                ? 'bg-[#45C6A5]/20 text-[#45C6A5] border border-[#45C6A5]/40' 
                : 'bg-[#2456A6]/20 text-[#83B7EE] border border-[#3978D6]/30'
            }`}>
              {isUserAdminRole(user) ? 'Role: Admin' : 'Role: Siswa'}
            </span>
          </div>
        )}

        {/* Form Input Passcode */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#A9BBD3] mb-1.5">
              Kunci Akses / Master Passcode:
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7186A5]">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type={showPasscode ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Masukkan passcode admin..."
                autoFocus
                className="w-full pl-10 pr-10 py-3 rounded-2xl bg-[#08152F] border border-[#263D60] focus:border-[#3978D6] focus:outline-none focus:ring-2 focus:ring-[#3978D6]/30 text-white text-sm placeholder-[#7186A5] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPasscode(!showPasscode)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#7186A5] hover:text-white transition-colors cursor-pointer"
                tabIndex={-1}
              >
                {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Success Message */}
          {isSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Akses berhasil diverifikasi! Membuka Mode Admin...</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSuccess}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#2456A6] via-[#3978D6] to-[#69C9DF] hover:brightness-110 active:scale-[0.98] text-white font-black text-sm tracking-wide shadow-[0_0_20px_rgba(36,86,166,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <span>{isSuccess ? 'Memverifikasi...' : 'Verifikasi & Masuk Mode Admin'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Hint for Administrator / Tester */}
        <div className="mt-5 pt-4 border-t border-[#263D60] flex items-center justify-between text-xs text-[#7186A5]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#83B7EE]" />
            <span>Kunci bawaan:</span>
          </div>
          <button
            type="button"
            onClick={handleQuickFill}
            className="font-mono text-[#3978D6] hover:text-[#83B7EE] underline hover:no-underline font-bold transition-colors cursor-pointer"
            title="Klik untuk otomatis mengisi passcode"
          >
            zenora-admin
          </button>
        </div>

      </div>
    </div>
  );
};
