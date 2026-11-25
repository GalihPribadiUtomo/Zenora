import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell, 
  CheckCheck, 
  Trash2, 
  Clock, 
  Award, 
  BookOpen, 
  Megaphone, 
  ShieldCheck, 
  ExternalLink, 
  Settings, 
  X,
  Volume2,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  AppNotification, 
  NotificationCategory 
} from '../types';
import { 
  getNotifications, 
  markNotificationAsRead, 
  markAllNotificationsAsRead, 
  deleteNotification, 
  clearAllNotifications,
  requestBrowserNotificationPermission,
  getNotificationPreferences
} from '../utils/notificationService';
import { sound } from '../utils/audio';

interface NotificationCenterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  userId?: string;
  onNavigate?: (tab: any, params?: any) => void;
  onOpenSettings?: () => void;
}

export const NotificationCenterDropdown: React.FC<NotificationCenterDropdownProps> = ({
  isOpen,
  onClose,
  userId,
  onNavigate,
  onOpenSettings
}) => {
  const [notifications, setNotifications] = useState<AppNotification[]>(() => getNotifications(userId));
  const [filter, setFilter] = useState<'all' | 'unread' | 'reminder' | 'announcement'>('all');
  const [browserPerm, setBrowserPerm] = useState<NotificationPermission>(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      return Notification.permission;
    }
    return 'denied';
  });
  const [requestingPerm, setRequestingPerm] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync notifications on mount and whenever external notification changes fire
  const refreshNotifications = () => {
    setNotifications(getNotifications(userId));
  };

  useEffect(() => {
    refreshNotifications();
    const handler = () => refreshNotifications();
    window.addEventListener('zenora-notifications-changed', handler);
    return () => window.removeEventListener('zenora-notifications-changed', handler);
  }, [userId]);

  // Click outside listener to dismiss dropdown
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(item => {
    if (filter === 'unread') return !item.read;
    if (filter === 'reminder') return item.category === 'reminder';
    if (filter === 'announcement') return item.category === 'announcement';
    return true;
  });

  // Relative time helper
  const formatTimeAgo = (timestamp: number) => {
    const diffSec = Math.floor((Date.now() - timestamp) / 1000);
    if (diffSec < 60) return 'Baru saja';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m lalu`;
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour} jam lalu`;
    const diffDay = Math.floor(diffHour / 24);
    if (diffDay === 1) return 'Kemarin';
    if (diffDay < 7) return `${diffDay} hari lalu`;
    return new Date(timestamp).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' });
  };

  const getCategoryIcon = (category: NotificationCategory) => {
    switch (category) {
      case 'reminder':
        return <Clock className="w-4 h-4 text-[var(--secondary-accent)]" />;
      case 'progress':
        return <Award className="w-4 h-4 text-[#45C6A5]" />;
      case 'material':
        return <BookOpen className="w-4 h-4 text-[#3978D6]" />;
      case 'announcement':
        return <Megaphone className="w-4 h-4 text-[#E9BD72]" />;
      case 'account':
        return <ShieldCheck className="w-4 h-4 text-[var(--text-primary)]" />;
      default:
        return <Bell className="w-4 h-4 text-[var(--soft-sky)]" />;
    }
  };

  const handleNotificationClick = (item: AppNotification) => {
    sound.playClick();
    if (!item.read) {
      markNotificationAsRead(item.id);
    }
    if (item.linkAction && onNavigate) {
      onNavigate(item.linkAction.tab, item.linkAction);
      onClose();
    }
  };

  const handleEnableBrowserNotification = async () => {
    setRequestingPerm(true);
    const result = await requestBrowserNotificationPermission();
    setBrowserPerm(result);
    setRequestingPerm(false);
    if (result === 'granted') {
      sound.playCorrect();
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-[92vw] sm:w-[420px] max-w-[440px] rounded-2xl bg-[var(--bg-sidebar)]/95 backdrop-blur-2xl border border-[var(--border)] shadow-[0_20px_50px_-10px_rgba(8,21,47,0.95)] z-50 overflow-hidden animate-modal-pop"
      style={{
        boxShadow: '0 20px 45px -10px rgba(8, 21, 47, 0.95), 0 0 20px rgba(36, 86, 166, 0.25)'
      }}
    >
      {/* 1. Header */}
      <div className="px-4 py-3.5 bg-gradient-to-r from-[var(--bg-sidebar)] via-[#102447] to-[var(--bg-elevated)] border-b border-[var(--border)] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-[#2456A6]/30 border border-[#3978D6]/40 text-[var(--soft-sky)]">
            <Bell className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-[var(--text-primary)]">Pusat Notifikasi</h3>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-[#3978D6] text-[var(--text-primary)] text-[10px] font-black shadow-[0_0_10px_rgba(57,120,214,0.6)]">
                  {unreadCount} baru
                </span>
              )}
            </div>
            <p className="text-[11px] text-[var(--text-muted)]">Pengingat, progres & pengumuman belajar</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {unreadCount > 0 && (
            <button
              onClick={() => {
                sound.playClick();
                markAllNotificationsAsRead(userId);
              }}
              title="Tandai semua sudah dibaca"
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
              <CheckCheck className="w-4 h-4" />
            </button>
          )}

          {onOpenSettings && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenSettings();
                onClose();
              }}
              title="Pengaturan Notifikasi"
              className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            title="Tutup"
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. Web Notification Permission Banner (polite opt-in) */}
      {browserPerm === 'default' && (
        <div className="mx-3 mt-3 p-3 rounded-xl bg-gradient-to-r from-[var(--bg-elevated)] to-[var(--bg-elevated)] border border-[#3978D6]/35 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[var(--secondary-accent)] shrink-0 mt-0.5" />
          <div className="flex-1 text-xs">
            <p className="font-semibold text-[var(--text-primary)]">Aktifkan Pengingat Browser</p>
            <p className="text-[11px] text-[var(--text-secondary)] mt-0.5">
              Dapatkan notifikasi target harian tepat waktu tanpa harus membuka tab setiap saat.
            </p>
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={handleEnableBrowserNotification}
                disabled={requestingPerm}
                className="px-2.5 py-1 rounded-lg bg-[#2456A6] hover:bg-[#3978D6] text-white text-[11px] font-bold shadow-[0_0_10px_rgba(57,120,214,0.4)] transition-all cursor-pointer"
              >
                {requestingPerm ? 'Meminta izin...' : 'Aktifkan'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Filter Tabs */}
      <div className="px-3 pt-3 pb-2 flex items-center gap-1.5 border-b border-[var(--border)]/60 overflow-x-auto text-[11px] font-semibold">
        <button
          onClick={() => { sound.playClick(); setFilter('all'); }}
          className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            filter === 'all'
              ? 'bg-[#2456A6] text-white shadow-[0_0_12px_rgba(36,86,166,0.5)] font-bold'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          Semua ({notifications.length})
        </button>
        <button
          onClick={() => { sound.playClick(); setFilter('unread'); }}
          className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            filter === 'unread'
              ? 'bg-[#2456A6] text-white shadow-[0_0_12px_rgba(36,86,166,0.5)] font-bold'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          Belum Dibaca ({unreadCount})
        </button>
        <button
          onClick={() => { sound.playClick(); setFilter('reminder'); }}
          className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            filter === 'reminder'
              ? 'bg-[#2456A6] text-white shadow-[0_0_12px_rgba(36,86,166,0.5)] font-bold'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          Pengingat
        </button>
        <button
          onClick={() => { sound.playClick(); setFilter('announcement'); }}
          className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer ${
            filter === 'announcement'
              ? 'bg-[#2456A6] text-white shadow-[0_0_12px_rgba(36,86,166,0.5)] font-bold'
              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
          }`}
        >
          Pengumuman
        </button>
      </div>

      {/* 4. Notification List */}
      <div className="max-h-[380px] overflow-y-auto divide-y divide-[var(--border)]/40 p-2 space-y-1.5">
        {filteredNotifications.length === 0 ? (
          <div className="py-12 px-4 text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-muted)] mb-3">
              <Bell className="w-6 h-6 opacity-60" />
            </div>
            <p className="text-sm font-bold text-[var(--text-primary)]">Belum ada notifikasi</p>
            <p className="text-xs text-[var(--text-muted)] mt-1 max-w-[240px] mx-auto">
              {filter === 'unread' 
                ? 'Semua notifikasi telah Anda baca.' 
                : 'Pemberitahuan target belajar dan pengumuman baru akan tampil di sini.'}
            </p>
          </div>
        ) : (
          filteredNotifications.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNotificationClick(item)}
              className={`group relative p-3 rounded-xl transition-all cursor-pointer border ${
                item.read 
                  ? 'bg-[var(--bg-surface)]/60 hover:bg-[var(--bg-elevated)]/70 border-transparent hover:border-[var(--border)]' 
                  : 'bg-gradient-to-r from-[var(--bg-surface)] to-[var(--bg-elevated)] border-[#3978D6]/40 shadow-[0_2px_12px_rgba(8,21,47,0.5)]'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Category Icon */}
                <div className={`p-2 rounded-xl shrink-0 border ${
                  item.read
                    ? 'bg-[var(--bg-elevated)] border-[var(--border)]'
                    : 'bg-[var(--bg-elevated)] border-[#3978D6]/50 shadow-[0_0_10px_rgba(57,120,214,0.2)]'
                }`}>
                  {getCategoryIcon(item.category)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pr-6">
                  <div className="flex items-center gap-2">
                    <h4 className={`text-xs font-bold truncate ${
                      item.read ? 'text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'
                    }`}>
                      {item.title}
                    </h4>
                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-[#3978D6] shadow-[0_0_6px_#3978D6] shrink-0" />
                    )}
                  </div>

                  <p className={`text-[11px] leading-relaxed mt-1 line-clamp-2 ${
                    item.read ? 'text-[var(--text-muted)]' : 'text-[var(--text-secondary)]'
                  }`}>
                    {item.message}
                  </p>

                  <div className="mt-2 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                    <span>{formatTimeAgo(item.timestamp)}</span>
                    {item.linkAction && (
                      <span className="flex items-center gap-1 text-[var(--soft-sky)] font-medium group-hover:underline">
                        Buka Materi <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Delete button (hover only) */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  sound.playClick();
                  deleteNotification(item.id);
                }}
                title="Hapus notifikasi"
                className="absolute right-2.5 top-2.5 p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* 5. Footer */}
      {notifications.length > 0 && (
        <div className="px-4 py-2.5 bg-[var(--bg-sidebar)] border-t border-[var(--border)]/60 flex items-center justify-between text-[11px]">
          <span className="text-[var(--text-muted)]">{notifications.length} notifikasi total</span>
          <button
            onClick={() => {
              if (window.confirm('Bersihkan seluruh daftar notifikasi?')) {
                sound.playClick();
                clearAllNotifications(userId);
              }
            }}
            className="text-[var(--text-muted)] hover:text-[var(--secondary-accent)] transition-colors cursor-pointer"
          >
            Bersihkan Riwayat
          </button>
        </div>
      )}
    </div>
  );
};
