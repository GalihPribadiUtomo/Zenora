import { AppNotification, NotificationCategory, NotificationPreferences, AdminAnnouncement, UserStats } from '../types';

const NOTIFICATIONS_STORAGE_KEY = 'zenora_notifications_v1';
const PREFERENCES_STORAGE_KEY = 'zenora_notif_prefs_v1';
const ANNOUNCEMENTS_STORAGE_KEY = 'zenora_admin_announcements_v1';
const LAST_STUDY_CHECK_KEY = 'zenora_last_study_notif_date_v1';

export const DEFAULT_NOTIFICATION_PREFERENCES: NotificationPreferences = {
  studyReminders: true,
  progressUpdates: true,
  newMaterials: true,
  announcements: true,
  soundAlerts: true,
  reminderTime: '19:00',
  browserNotifications: false
};

// Dispatch a custom window event for reactive UI updates across components
export const notifyChange = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('zenora-notifications-changed'));
  }
};

/**
 * Retrieve all notifications for the given user (or local guest)
 */
export const getNotifications = (userId?: string): AppNotification[] => {
  try {
    const raw = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    if (!raw) return [];
    const list: AppNotification[] = JSON.parse(raw);
    if (!userId) return list;
    return list.filter(n => !n.userId || n.userId === userId || n.userId === 'all');
  } catch (e) {
    console.error('Error reading notifications:', e);
    return [];
  }
};

/**
 * Persist notifications array to localStorage
 */
export const saveNotifications = (notifications: AppNotification[]): void => {
  try {
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(notifications));
    notifyChange();
  } catch (e) {
    console.error('Error saving notifications:', e);
  }
};

/**
 * Get count of unread notifications
 */
export const getUnreadCount = (userId?: string): number => {
  const list = getNotifications(userId);
  return list.filter(n => !n.read).length;
};

/**
 * Mark a single notification as read
 */
export const markNotificationAsRead = (id: string): void => {
  const list = getNotifications();
  const updated = list.map(n => n.id === id ? { ...n, read: true } : n);
  saveNotifications(updated);
};

/**
 * Mark all notifications as read
 */
export const markAllNotificationsAsRead = (userId?: string): void => {
  const list = getNotifications();
  const updated = list.map(n => {
    if (!userId || !n.userId || n.userId === userId || n.userId === 'all') {
      return { ...n, read: true };
    }
    return n;
  });
  saveNotifications(updated);
};

/**
 * Delete a notification by ID
 */
export const deleteNotification = (id: string): void => {
  const list = getNotifications();
  const updated = list.filter(n => n.id !== id);
  saveNotifications(updated);
};

/**
 * Clear all notifications
 */
export const clearAllNotifications = (userId?: string): void => {
  if (!userId) {
    saveNotifications([]);
    return;
  }
  const list = getNotifications();
  const updated = list.filter(n => n.userId && n.userId !== userId && n.userId !== 'all');
  saveNotifications(updated);
};

/**
 * Append a new notification (with duplicate prevention)
 */
export const addNotification = (
  item: Omit<AppNotification, 'id' | 'timestamp' | 'read'>
): AppNotification => {
  const list = getNotifications();
  
  // Deduplication check: check if identical title & category was created in the last 12 hours
  const twelveHoursAgo = Date.now() - 12 * 60 * 60 * 1000;
  const exists = list.find(n => 
    n.title === item.title && 
    n.category === item.category && 
    n.timestamp > twelveHoursAgo
  );

  if (exists) {
    return exists;
  }

  const newNotif: AppNotification = {
    ...item,
    id: `notif_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    read: false
  };

  const updated = [newNotif, ...list].slice(0, 100); // Keep max 100 recent
  saveNotifications(updated);

  // Send browser notification if permission granted and preference active
  const prefs = getNotificationPreferences();
  if (prefs.browserNotifications && typeof window !== 'undefined' && 'Notification' in window) {
    if (Notification.permission === 'granted') {
      try {
        new Notification(newNotif.title, {
          body: newNotif.message,
          icon: '/favicon.ico'
        });
      } catch {
        /* ignore */
      }
    }
  }

  return newNotif;
};

/**
 * Retrieve user notification preferences
 */
export const getNotificationPreferences = (): NotificationPreferences => {
  try {
    const raw = localStorage.getItem(PREFERENCES_STORAGE_KEY);
    if (!raw) return DEFAULT_NOTIFICATION_PREFERENCES;
    return { ...DEFAULT_NOTIFICATION_PREFERENCES, ...JSON.parse(raw) };
  } catch (e) {
    console.error('Error reading notification preferences:', e);
    return DEFAULT_NOTIFICATION_PREFERENCES;
  }
};

/**
 * Save user notification preferences
 */
export const saveNotificationPreferences = (prefs: NotificationPreferences): void => {
  try {
    localStorage.setItem(PREFERENCES_STORAGE_KEY, JSON.stringify(prefs));
    notifyChange();
  } catch (e) {
    console.error('Error saving notification preferences:', e);
  }
};

/**
 * Request Web Notifications API permission
 */
export const requestBrowserNotificationPermission = async (): Promise<NotificationPermission> => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied';
  }

  try {
    const perm = await Notification.requestPermission();
    const prefs = getNotificationPreferences();
    saveNotificationPreferences({
      ...prefs,
      browserNotifications: perm === 'granted'
    });
    return perm;
  } catch (e) {
    console.error('Error requesting notification permission:', e);
    return 'denied';
  }
};

/**
 * Check and generate real study & progress notifications based on user activity
 */
export const checkAndGenerateStudyNotifications = (stats: UserStats, user?: any): void => {
  const prefs = getNotificationPreferences();
  const todayStr = new Date().toISOString().split('T')[0];
  const lastCheckStr = localStorage.getItem(LAST_STUDY_CHECK_KEY);

  // Check if first-time orientation notification is needed
  const existing = getNotifications(user?.id);
  if (existing.length === 0) {
    addNotification({
      userId: user?.id || 'all',
      title: 'Selamat Datang di ZENORA Midnight Ocean!',
      message: 'Platform pembelajaran bahasa Jepang premium. Mulai jelajahi Hiragana, Katakana, dan Minna no Nihongo Bab 1 sekarang.',
      category: 'announcement',
      linkAction: { tab: 'kana' }
    });
  }

  // Once-per-day study reminders
  if (lastCheckStr !== todayStr) {
    localStorage.setItem(LAST_STUDY_CHECK_KEY, todayStr);

    const todayActivity = stats.dailyActivityMap?.[todayStr] || 0;

    // A. Study Reminder: target daily activity
    if (prefs.studyReminders && todayActivity === 0) {
      if (stats.streakDays > 0) {
        addNotification({
          userId: user?.id,
          title: `Pertahankan Streak ${stats.streakDays} Hari! 🔥`,
          message: 'Anda belum belajar hari ini. Selesaikan minimal 10 latihan atau kuis untuk mempertahankan rekor streak Anda.',
          category: 'reminder',
          linkAction: { tab: 'latihan' }
        });
      } else {
        addNotification({
          userId: user?.id,
          title: 'Waktunya Belajar Hari Ini 🎯',
          message: 'Luangkan 10-15 menit untuk mengasah kemampuan kosakata dan kanji Jepang Anda hari ini.',
          category: 'reminder',
          linkAction: { tab: 'beranda' }
        });
      }
    }

    // B. Progress milestones
    if (prefs.progressUpdates) {
      if (stats.streakDays >= 7 && stats.streakDays % 7 === 0) {
        addNotification({
          userId: user?.id,
          title: `Luar Biasa! Streak ${stats.streakDays} Hari Tercapai 🏆`,
          message: `Konsistensi Anda membanggakan! Anda telah belajar selama ${stats.streakDays} hari berturut-turut.`,
          category: 'progress',
          linkAction: { tab: 'analitik' }
        });
      }

      if (stats.learnedKotobaIds.length >= 50 && stats.learnedKotobaIds.length % 50 === 0) {
        addNotification({
          userId: user?.id,
          title: `Pencapaian: ${stats.learnedKotobaIds.length} Kosakata Dikuasai! ✨`,
          message: 'Kosakata aktif Anda semakin kaya. Uji ingatan Anda di mode Latihan Flashcard & Pilihan Ganda.',
          category: 'progress',
          linkAction: { tab: 'latihan' }
        });
      }
    }
  }
};

/**
 * Admin Announcements Management
 */
export const getAdminAnnouncements = (): AdminAnnouncement[] => {
  try {
    const raw = localStorage.getItem(ANNOUNCEMENTS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading admin announcements:', e);
    return [];
  }
};

export const publishAdminAnnouncement = (
  announcement: Omit<AdminAnnouncement, 'id' | 'createdAt'>
): AdminAnnouncement => {
  const existing = getAdminAnnouncements();
  const newAnnouncement: AdminAnnouncement = {
    ...announcement,
    id: `ann_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    createdAt: new Date().toISOString()
  };

  const updated = [newAnnouncement, ...existing];
  try {
    localStorage.setItem(ANNOUNCEMENTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving announcement:', e);
  }

  // If published, immediately generate a real AppNotification for target users
  if (newAnnouncement.published) {
    addNotification({
      userId: newAnnouncement.targetRole === 'all' ? 'all' : undefined,
      title: `📢 ${newAnnouncement.title}`,
      message: newAnnouncement.content,
      category: 'announcement',
      linkAction: { tab: 'beranda' }
    });
  }

  return newAnnouncement;
};

export const deleteAdminAnnouncement = (id: string): void => {
  const existing = getAdminAnnouncements();
  const updated = existing.filter(a => a.id !== id);
  try {
    localStorage.setItem(ANNOUNCEMENTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error deleting announcement:', e);
  }
};
