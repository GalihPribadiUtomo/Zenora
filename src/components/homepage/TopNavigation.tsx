import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Volume2, 
  VolumeX, 
  Menu, 
  User as UserIcon,
  Sparkles,
  Cloud,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../../utils/audio';
import { NotificationCenterDropdown } from '../NotificationCenterDropdown';
import { getUnreadCount } from '../../utils/notificationService';

interface TopNavigationProps {
  onOpenSearch: () => void;
  onOpenAuth: () => void;
  onNavigateToProfile?: () => void;
  user: any;
  soundEnabled: boolean;
  setSoundEnabled: (val: boolean) => void;
  isSyncing?: boolean;
  onOpenMobileMenu?: () => void;
  streakDays?: number;
  isAdminMode?: boolean;
  onNavigateToAdmin?: () => void;
  onNavigate?: (tab: any, params?: any) => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  onOpenSearch,
  onOpenAuth,
  onNavigateToProfile,
  user,
  soundEnabled,
  setSoundEnabled,
  isSyncing = false,
  onOpenMobileMenu,
  streakDays = 0,
  isAdminMode = false,
  onNavigateToAdmin,
  onNavigate
}) => {
  const [showFurigana, setShowFurigana] = useState<boolean>(() => {
    try {
      return localStorage.getItem('zenora_show_furigana') !== 'false';
    } catch {
      return true;
    }
  });

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState<number>(() => getUnreadCount(user?.id));

  // Sync unread count reactively
  useEffect(() => {
    const updateCount = () => {
      setUnreadCount(getUnreadCount(user?.id));
    };
    updateCount();
    window.addEventListener('zenora-notifications-changed', updateCount);
    return () => window.removeEventListener('zenora-notifications-changed', updateCount);
  }, [user?.id]);

  useEffect(() => {
    if (showFurigana) {
      document.documentElement.classList.remove('hide-furigana');
    } else {
      document.documentElement.classList.add('hide-furigana');
    }
    try {
      localStorage.setItem('zenora_show_furigana', String(showFurigana));
    } catch { /* ignore */ }
  }, [showFurigana]);

  return (
    <header className="sticky top-0 z-30 w-full px-4 sm:px-6 lg:px-8 py-3 bg-[var(--bg-header)]/90 backdrop-blur-xl border-b border-[var(--border)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Trigger (hidden on lg) */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => {
              sound.playClick();
              if (onOpenMobileMenu) onOpenMobileMenu();
            }}
            className="p-2.5 rounded-2xl bg-[var(--bg-base)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--primary)]/40 transition-colors"
            aria-label="Buka Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-wider text-[var(--text-primary)] font-['Manrope']">
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
            className="group cursor-pointer flex items-center justify-between px-4 py-2 rounded-2xl bg-[var(--bg-base)] hover:bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--primary)]/50 transition-all duration-200"
          >
            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]">
              <Search className="w-4 h-4 text-[var(--primary)] group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline">Cari materi, kosakata, atau latihan...</span>
              <span className="sm:hidden">Cari materi...</span>
            </div>

            <div className="flex items-center gap-1.5">
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] text-[11px] font-mono border border-[var(--border)]">
                Ctrl + K
              </kbd>
            </div>
          </div>
        </div>

        {/* Right Section: Sound, Cloud Sync, Notification & User Avatar */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Cloud Sync Status */}
          {isSyncing && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#2456A6]/20 border border-[#3978D6]/40 text-[11px] text-[var(--text-secondary)] animate-pulse">
              <Cloud className="w-3.5 h-3.5 text-[var(--secondary-accent)]" />
              <span className="hidden md:inline">Syncing...</span>
            </div>
          )}

          {/* Furigana Visibility Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setShowFurigana(!showFurigana);
            }}
            className={`px-3 py-2 rounded-2xl border text-xs font-black transition-all shadow-xs flex items-center gap-1.5 ${
              showFurigana
                ? 'bg-[var(--bg-elevated)] border-[#3978D6]/50 text-[var(--text-primary)]'
                : 'bg-[var(--bg-surface)] border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            title={showFurigana ? 'Sembunyikan Furigana (Mode Tantangan Kanji)' : 'Tampilkan Furigana'}
            aria-label="Toggle Furigana"
          >
            <span className="kanji-font text-sm leading-none">{showFurigana ? 'ふ' : '漢'}</span>
            <span className="hidden md:inline">{showFurigana ? 'Furigana ON' : 'Furigana OFF'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              if (next) sound.playCorrect();
            }}
            className="p-2.5 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all shadow-xs"
            title={soundEnabled ? 'Matikan Suara Audio' : 'Aktifkan Suara Audio'}
            aria-label="Toggle Audio"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#3978D6]" />
            ) : (
              <VolumeX className="w-4 h-4 text-[var(--text-muted)]" />
            )}
          </button>

          {/* Notification Bell with Functional Center */}
          <div className="relative">
            <button
              onClick={() => {
                sound.playClick();
                setIsNotificationOpen(!isNotificationOpen);
              }}
              className={`relative p-2.5 rounded-2xl border transition-all shadow-xs cursor-pointer ${
                isNotificationOpen
                  ? 'bg-[var(--bg-elevated)] border-[#3978D6] text-[var(--text-primary)] shadow-[0_0_15px_rgba(57,120,214,0.35)]'
                  : 'bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              title="Pusat Notifikasi Pembelajaran"
              aria-label="Pusat Notifikasi"
            >
              <Bell className="w-4 h-4 text-[var(--text-secondary)]" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#3978D6] text-white text-[10px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(57,120,214,0.8)] border border-[#08152F]">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {/* Notification Center Dropdown */}
            <NotificationCenterDropdown
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
              userId={user?.id}
              onNavigate={onNavigate}
              onOpenSettings={onNavigateToProfile}
            />
          </div>

          {/* Admin Mode Badge Trigger */}
          {isAdminMode && (
            <button
              onClick={() => {
                sound.playClick();
                if (onNavigateToAdmin) onNavigateToAdmin();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#2456A6]/30 to-[#3978D6]/30 border border-[#3978D6]/50 text-[var(--text-primary)] text-xs font-black shadow-[0_0_15px_rgba(36,86,166,0.3)] hover:brightness-110 transition-all cursor-pointer animate-fade-in"
              title="Buka Konsol Administrator"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#3978D6]" />
              <span>CMS ADMIN</span>
            </button>
          )}

          {/* User Profile Avatar */}
          <button
            onClick={() => {
              sound.playClick();
              if (onNavigateToProfile) {
                onNavigateToProfile();
              } else {
                onOpenAuth();
              }
            }}
            className="flex items-center gap-2 p-1 pl-1 pr-1.5 sm:pr-3 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[#3978D6]/50 transition-all group shadow-xs cursor-pointer"
            title={user ? 'Buka Profil & Pengaturan' : 'Masuk / Daftar Akun'}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2456A6] to-[#3978D6] flex items-center justify-center text-white font-black text-sm shadow-[0_0_12px_rgba(36,86,166,0.4)] group-hover:scale-105 transition-transform">
              {user?.email ? user.email.charAt(0).toUpperCase() : 'Z'}
            </div>
            <span className="hidden sm:inline text-xs font-bold text-[var(--text-primary)] max-w-[100px] truncate">
              {user?.email ? user.email.split('@')[0] : 'Masuk'}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};
