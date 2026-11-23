import React from 'react';
import { 
  Search, 
  Bell, 
  Volume2, 
  VolumeX, 
  Menu, 
  User as UserIcon,
  Sparkles,
  Cloud
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface TopNavigationProps {
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  user: any;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  isSyncing?: boolean;
  onOpenMobileMenu?: () => void;
  streakDays?: number;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  onOpenSearch,
  onOpenAuth,
  user,
  soundEnabled,
  setSoundEnabled,
  isSyncing = false,
  onOpenMobileMenu,
  streakDays = 0
}) => {
  return (
    <header className="sticky top-0 z-30 w-full px-4 sm:px-6 lg:px-8 py-3.5 bg-[#080D2B]/85 backdrop-blur-xl border-b border-[#7857FF]/15">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Trigger (hidden on lg) */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => {
              sound.playClick();
              if (onOpenMobileMenu) onOpenMobileMenu();
            }}
            className="p-2.5 rounded-2xl bg-[#0D1238] border border-[#7857FF]/25 text-[#AAB3D5] hover:text-white"
            aria-label="Buka Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-wider text-white font-['Manrope']">
              ZENORA
            </span>
          </div>
        </div>

        {/* Center: Search Bar with Ctrl+K */}
        <div className="flex-1 max-w-xl mx-auto">
          <div 
            onClick={() => {
              sound.playClick();
              onOpenSearch();
            }}
            className="group cursor-pointer flex items-center justify-between px-4 py-2.5 rounded-2xl bg-[#0D1238]/90 hover:bg-[#12194A] border border-[#7857FF]/20 hover:border-[#7857FF]/50 shadow-inner transition-all duration-200"
          >
            <div className="flex items-center gap-3 text-sm text-[#737FA8] group-hover:text-[#AAB3D5]">
              <Search className="w-4 h-4 text-[#7857FF] group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Cari materi, kosakata, atau latihan...</span>
              <span className="sm:hidden">Cari materi...</span>
            </div>

            <div className="flex items-center gap-1.5">
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-lg bg-[#171D50] text-[#AAB3D5] text-[11px] font-mono border border-[#7857FF]/30">
                Ctrl + K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Section: Sound, Cloud Sync, Notification & User Avatar */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Cloud Sync Status */}
          {isSyncing && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#7857FF]/15 border border-[#7857FF]/30 text-[11px] text-[#AAB3D5] animate-pulse">
              <Cloud className="w-3.5 h-3.5 text-[#329BFF]" />
              <span className="hidden md:inline">Syncing...</span>
            </div>
          )}

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) sound.playCorrect();
            }}
            className="p-2.5 rounded-2xl bg-[#0D1238] hover:bg-[#12194A] border border-[#7857FF]/20 text-[#AAB3D5] hover:text-white transition-all shadow-xs"
            title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            aria-label="Toggle Audio"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#329BFF]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#737FA8]" />
            )}
          </button>

          {/* Notification Icon with Badge */}
          <div className="relative">
            <button
              onClick={() => {
                sound.playClick();
                // Trigger notification info or jump to stats
                const statsEl = document.getElementById('learning-stats-section');
                if (statsEl) statsEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="p-2.5 rounded-2xl bg-[#0D1238] hover:bg-[#12194A] border border-[#7857FF]/20 text-[#AAB3D5] hover:text-white transition-all shadow-xs"
              title="Notifikasi Pembelajaran"
              aria-label="Notifikasi"
            >
              <Bell className="w-4 h-4 text-[#AAB3D5]" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF70C8] text-white text-[10px] font-black flex items-center justify-center shadow-[0_0_8px_rgba(255,112,200,0.8)]">
                3
              </span>
            </button>
          </div>

          {/* User Profile Avatar */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenAuth();
            }}
            className="flex items-center gap-2 p-1 pl-1 pr-1.5 sm:pr-3 rounded-2xl bg-[#0D1238] hover:bg-[#12194A] border border-[#7857FF]/25 hover:border-[#7857FF]/50 transition-all group shadow-xs"
            title={user ? 'Kelola Akun & Sinkronisasi' : 'Masuk / Daftar Akun'}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7857FF] to-[#329BFF] flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(120,87,255,0.4)] group-hover:scale-105 transition-transform">
              {user?.email ? user.email.charAt(0).toUpperCase() : 'Z'}
            </div>
            <span className="hidden sm:inline text-xs font-bold text-[#F5F6FF] max-w-[100px] truncate">
              {user?.email ? user.email.split('@')[0] : 'Masuk'}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};
