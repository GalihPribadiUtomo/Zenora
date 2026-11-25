import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/homepage/Sidebar';
import { TopNavigation } from './components/homepage/TopNavigation';
import { HomeDashboard } from './components/HomeDashboard';
import { KotobaSection } from './components/KotobaSection';
import { KanjiSection } from './components/KanjiSection';
import { PracticeSection } from './components/PracticeSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { ProfileSection } from './components/ProfileSection';
import { KanjiModal } from './components/KanjiModal';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { KanaSection } from './components/KanaSection';
import { SswSection } from './components/SswSection';
import { AdminSection } from './components/admin/AdminSection';
import { AdminAuthModal } from './components/admin/AdminAuthModal';
import { isAdminAuthenticated, setAdminAuthenticated, isUserAdminRole } from './utils/adminAuth';
import { KanjiItem, QuizMode, QuizSubject } from './types';
import { getInitialStats, saveStats, incrementDailyActivity } from './utils/storage';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { syncAllToCloud, pullAndMergeFromCloud } from './services/syncService';
import { checkAndGenerateStudyNotifications } from './utils/notificationService';
import {
  ThemePreference,
  ResolvedTheme,
  getStoredThemePreference,
  saveThemePreference,
  resolveTheme,
  applyThemeToDocument,
  syncThemeToSupabase
} from './utils/themeService';
import { X, Lock } from 'lucide-react';
import type { User } from '@supabase/supabase-js';

export function App() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik' | 'profil' | 'admin'>('beranda');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [themePreference, setThemePreference] = useState<ThemePreference>(() => getStoredThemePreference());
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => resolveTheme(getStoredThemePreference()));
  const darkMode = resolvedTheme === 'dark';

  const handleChangeThemePreference = useCallback((nextPref: ThemePreference) => {
    setThemePreference(nextPref);
    saveThemePreference(nextPref);
    const nextResolved = resolveTheme(nextPref);
    setResolvedTheme(nextResolved);
    applyThemeToDocument(nextResolved);
    syncThemeToSupabase(nextPref);
  }, []);

  const handleToggleDarkMode = useCallback(() => {
    handleChangeThemePreference(resolvedTheme === 'dark' ? 'light' : 'dark');
  }, [resolvedTheme, handleChangeThemePreference]);

  // Apply theme immediately and listen for OS system theme changes when preference === 'system'
  useEffect(() => {
    const nextResolved = resolveTheme(themePreference);
    setResolvedTheme(nextResolved);
    applyThemeToDocument(nextResolved);

    if (themePreference !== 'system' || typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = () => {
      const updated = resolveTheme('system');
      setResolvedTheme(updated);
      applyThemeToDocument(updated);
    };

    mediaQuery.addEventListener('change', onSystemChange);
    return () => mediaQuery.removeEventListener('change', onSystemChange);
  }, [themePreference]);
  
  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeKanji, setActiveKanji] = useState<KanjiItem | null>(null);
  const [activeKanjiList, setActiveKanjiList] = useState<KanjiItem[] | null>(null);
  const [adminAuthModalOpen, setAdminAuthModalOpen] = useState(false);

  // Role-Based Access Control (RBAC) - Admin Mode
  const [isAdminMode, setIsAdminMode] = useState<boolean>(() => isAdminAuthenticated());

  // Selected Bab in Kotoba section
  const [selectedBab, setSelectedBab] = useState<number | null>(null);
  const [practiceBab, setPracticeBab] = useState<number | null>(null);
  const [practiceType, setPracticeType] = useState<'18-modes' | 'jlpt-jft' | 'classic'>('18-modes');
  const [practiceExamPackageId, setPracticeExamPackageId] = useState<string | undefined>(undefined);

  // User stats & persistence
  const [stats, setStats] = useState(getInitialStats());

  // Supabase Auth & Cloud Sync State
  const [user, setUser] = useState<User | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // Check auth session on load
  useEffect(() => {
    if (supabase && isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null);
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  // When user logs in, pull and merge data from cloud
  const handleCloudSync = useCallback(async (currentUser: User) => {
    setIsSyncing(true);
    try {
      const merged = await pullAndMergeFromCloud(currentUser.id, stats);
      setStats(merged);
      saveStats(merged);
      // Sync merged data back up
      await syncAllToCloud(currentUser.id, merged);
    } catch (e) {
      console.error('Error during cloud sync:', e);
    } finally {
      setIsSyncing(false);
    }
  }, [stats]);

  useEffect(() => {
    if (user) {
      handleCloudSync(user);
      const cloudTheme = user.user_metadata?.zenora_theme;
      if (cloudTheme === 'dark' || cloudTheme === 'light' || cloudTheme === 'system') {
        const localStored = localStorage.getItem('zenora_theme_preference_v1');
        if (!localStored) {
          setThemePreference(cloudTheme);
          saveThemePreference(cloudTheme);
        }
      }
      if (isUserAdminRole(user)) {
        setIsAdminMode(true);
        setAdminAuthenticated(true);
      }
    }
  }, [user?.id]);

  // Check and generate relevant real study & progress notifications
  useEffect(() => {
    checkAndGenerateStudyNotifications(stats, user);
  }, [stats.streakDays, stats.learnedKotobaIds.length, user]);

  const handleOpenAdminAuth = () => {
    setAdminAuthModalOpen(true);
  };

  const handleAdminAuthSuccess = () => {
    setIsAdminMode(true);
    setAdminAuthenticated(true);
    setActiveTab('admin');
  };

  const handleExitAdminMode = () => {
    setIsAdminMode(false);
    setAdminAuthenticated(false);
    if (activeTab === 'admin') {
      setActiveTab('beranda');
    }
  };

  // Persist locally & sync to cloud on stats change
  useEffect(() => {
    saveStats(stats);
    if (user && isSupabaseConfigured) {
      // Debounced cloud sync
      const timer = setTimeout(() => {
        syncAllToCloud(user.id, stats);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stats, user]);

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
      setUser(null);
    }
  };

  // Global Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleLearnedKotoba = (id: string) => {
    setStats(prev => {
      const exists = prev.learnedKotobaIds.includes(id);
      const next = {
        ...prev,
        learnedKotobaIds: exists 
          ? prev.learnedKotobaIds.filter(i => i !== id)
          : [...prev.learnedKotobaIds, id]
      };
      return exists ? next : incrementDailyActivity(next, 1);
    });
  };

  const handleToggleBookmarkKotoba = (id: string) => {
    setStats(prev => {
      const exists = prev.bookmarkedKotobaIds.includes(id);
      return {
        ...prev,
        bookmarkedKotobaIds: exists 
          ? prev.bookmarkedKotobaIds.filter(i => i !== id)
          : [...prev.bookmarkedKotobaIds, id]
      };
    });
  };

  const handleToggleLearnedKanji = (id: number) => {
    setStats(prev => {
      const exists = prev.learnedKanjiIds.includes(id);
      const next = {
        ...prev,
        learnedKanjiIds: exists 
          ? prev.learnedKanjiIds.filter(i => i !== id)
          : [...prev.learnedKanjiIds, id]
      };
      return exists ? next : incrementDailyActivity(next, 1);
    });
  };

  const handleToggleLearnedKana = (char: string) => {
    setStats(prev => {
      const current = prev.learnedKanaChars || [];
      const exists = current.includes(char);
      const next = {
        ...prev,
        learnedKanaChars: exists
          ? current.filter(c => c !== char)
          : [...current, char]
      };
      return exists ? next : incrementDailyActivity(next, 1);
    });
  };

  const handleRecordQuizResult = (score: number, total: number, mode: QuizMode, subject: QuizSubject) => {
    setStats(prev => incrementDailyActivity({
      ...prev,
      quizHistory: [
        ...prev.quizHistory,
        {
          date: new Date().toISOString(),
          score,
          total,
          mode,
          subject
        }
      ]
    }, Math.max(1, score)));
  };

  const handleRecordActivityCount = (count: number) => {
    setStats(prev => incrementDailyActivity(prev, count));
  };

  const handleSelectKanji = (kanji: KanjiItem, list?: KanjiItem[]) => {
    setActiveKanji(kanji);
    if (list && list.length > 0) {
      setActiveKanjiList(list);
    }
  };

  const handleStartQuizFromBab = (bab: number) => {
    setPracticeBab(bab);
    setPracticeType('18-modes');
    setActiveTab('latihan');
  };

  const handleNavigateSubMateri = (sub: 'kana' | 'materi-bab' | 'kanji' | 'kotoba-bunpou' | 'kotoba' | 'bunpou') => {
    if (sub === 'kana') {
      setActiveTab('kana');
    } else if (sub === 'kanji') {
      setActiveTab('kanji');
    } else if (sub === 'materi-bab' || sub === 'kotoba-bunpou') {
      setSelectedBab(null);
      setActiveTab('kotoba');
    } else if (sub === 'kotoba' || sub === 'bunpou') {
      setSelectedBab(null);
      setActiveTab('kotoba');
    }
  };

  const handleNavigateSubLatihan = (sub: '18-modes' | 'jlpt' | 'jft') => {
    if (sub === '18-modes') {
      setPracticeType('18-modes');
      setActiveTab('latihan');
    } else if (sub === 'jlpt') {
      setPracticeType('jlpt-jft');
      setPracticeExamPackageId('JLPT_N5');
      setActiveTab('latihan');
    } else if (sub === 'jft') {
      setPracticeType('jlpt-jft');
      setPracticeExamPackageId('JFT_BASIC_A2');
      setActiveTab('latihan');
    }
  };

  return (
    <div className="min-h-screen flex bg-[var(--bg-base)] text-[var(--text-primary)] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[var(--primary)] selection:text-white antialiased transition-colors duration-200">
      
      {/* 1. DESKTOP SIDEBAR (Persistent Across All Tabs) */}
      <div className="hidden lg:block shrink-0">
        <Sidebar
          activeTab={activeTab}
          onNavigateTab={(tab) => {
            if (tab === 'kotoba') setSelectedBab(null);
            setActiveTab(tab);
          }}
          onOpenAuth={() => setAuthOpen(true)}
          user={user}
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
          themePreference={themePreference}
          onChangeThemePreference={handleChangeThemePreference}
          isAdminMode={isAdminMode}
          onOpenAdminAuth={handleOpenAdminAuth}
          onExitAdminMode={handleExitAdminMode}
        />
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileDrawerOpen(false)}
            className="fixed inset-0 modal-backdrop"
          />

          {/* Drawer Sidebar */}
          <div className="relative w-72 max-w-[85vw] h-full bg-[var(--bg-sidebar)] z-10 flex flex-col shadow-2xl animate-drawer-slide">
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)]"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <Sidebar
                activeTab={activeTab}
                onNavigateTab={(tab) => {
                  setMobileDrawerOpen(false);
                  if (tab === 'kotoba') setSelectedBab(null);
                  setActiveTab(tab);
                }}
                onOpenAuth={() => {
                  setMobileDrawerOpen(false);
                  setAuthOpen(true);
                }}
                user={user}
                darkMode={darkMode}
                onToggleDarkMode={handleToggleDarkMode}
                themePreference={themePreference}
                onChangeThemePreference={handleChangeThemePreference}
                isAdminMode={isAdminMode}
                onOpenAdminAuth={handleOpenAdminAuth}
                onExitAdminMode={handleExitAdminMode}
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen overflow-x-clip">
        
        {/* GLOBAL TOP NAVIGATION BAR (Always Available) */}
        <TopNavigation
          onOpenSearch={() => setSearchOpen(true)}
          onOpenAuth={() => setAuthOpen(true)}
          onNavigateToProfile={() => setActiveTab('profil')}
          user={user}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          isSyncing={isSyncing}
          onOpenMobileMenu={() => setMobileDrawerOpen(true)}
          streakDays={stats.streakDays}
          isAdminMode={isAdminMode}
          onNavigateToAdmin={() => setActiveTab('admin')}
          onNavigate={(tab, params) => {
            if (params?.bab) setSelectedBab(params.bab);
            setActiveTab(tab);
          }}
        />

        {/* MAIN BODY SCROLLABLE CONTAINER */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          
          <div key={activeTab} className="page-transition">
          {activeTab === 'beranda' && (
            <HomeDashboard
              onNavigate={(tab) => {
                if (tab === 'kotoba') setSelectedBab(null);
                setActiveTab(tab);
              }}
              learnedKotobaIds={stats.learnedKotobaIds}
              learnedKanjiIds={stats.learnedKanjiIds}
              learnedKotobaCount={stats.learnedKotobaIds.length}
              learnedKanjiCount={stats.learnedKanjiIds.length}
              streakDays={stats.streakDays}
              stats={stats}
              darkMode={darkMode}
              onSelectKanji={handleSelectKanji}
              onRecordActivity={handleRecordActivityCount}
              onSelectChapter={(bab) => {
                setSelectedBab(bab);
                setActiveTab('kotoba');
              }}
            />
          )}

          {activeTab === 'kana' && (
            <KanaSection
              learnedKanaChars={stats.learnedKanaChars || []}
              onToggleLearned={handleToggleLearnedKana}
            />
          )}

          {activeTab === 'kotoba' && (
            <KotobaSection
              selectedBab={selectedBab}
              setSelectedBab={setSelectedBab}
              learnedKotobaIds={stats.learnedKotobaIds}
              bookmarkedKotobaIds={stats.bookmarkedKotobaIds}
              onToggleLearned={handleToggleLearnedKotoba}
              onToggleBookmark={handleToggleBookmarkKotoba}
              onStartQuiz={handleStartQuizFromBab}
              onSelectKanji={handleSelectKanji}
              isAdminMode={isAdminMode}
            />
          )}

          {activeTab === 'kanji' && (
            <KanjiSection
              onSelectKanji={handleSelectKanji}
              learnedKanjiIds={stats.learnedKanjiIds}
              onToggleLearned={handleToggleLearnedKanji}
            />
          )}

          {activeTab === 'ssw' && (
            <SswSection
              onNavigateToJft={() => {
                setPracticeType('jlpt-jft');
                setPracticeExamPackageId('JFT_BASIC_A2');
                setActiveTab('latihan');
              }}
              onNavigateToBab={(bab) => {
                setSelectedBab(bab);
                setActiveTab('kotoba');
              }}
            />
          )}

          {activeTab === 'latihan' && (
            <PracticeSection
              initialBab={practiceBab}
              initialPracticeType={practiceType}
              initialExamPackageId={practiceExamPackageId}
              onRecordResult={handleRecordQuizResult}
            />
          )}

          {activeTab === 'analitik' && (
            <AnalyticsSection
              stats={stats}
              onNavigate={(tab) => {
                if (tab === 'kotoba') setSelectedBab(null);
                setActiveTab(tab);
              }}
            />
          )}

          {activeTab === 'profil' && (
            <ProfileSection
              stats={stats}
              user={user}
              onOpenAuth={() => setAuthOpen(true)}
              onSignOut={handleSignOut}
              isSyncing={isSyncing}
              onSync={() => {
                if (user) handleCloudSync(user);
              }}
              onNavigate={(tab) => {
                if (tab === 'kotoba') setSelectedBab(null);
                setActiveTab(tab as any);
              }}
              darkMode={darkMode}
              onToggleDarkMode={handleToggleDarkMode}
              themePreference={themePreference}
              onChangeThemePreference={handleChangeThemePreference}
              isAdminMode={isAdminMode}
              onOpenAdminAuth={handleOpenAdminAuth}
              onExitAdminMode={handleExitAdminMode}
            />
          )}

          {activeTab === 'admin' && (
            isAdminMode ? (
              <AdminSection
                onBackToApp={() => setActiveTab('beranda')}
                user={user}
                onSyncCloud={() => {
                  if (user) handleCloudSync(user);
                }}
                isSyncing={isSyncing}
              />
            ) : (
              <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/35 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(239,68,68,0.25)]">
                  <Lock className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-2xl font-black text-white font-['Manrope'] mb-2">Akses Dibatasi</h2>
                <p className="text-sm text-[#A9BBD3] max-w-md mb-6 leading-relaxed">
                  Anda saat ini berada dalam <span className="text-[#69C9DF] font-bold">Mode Siswa</span>. Untuk membuka konsol manajemen kurikulum, kosakata, dan CBT, silakan verifikasi hak akses administrator.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTab('beranda')}
                    className="px-5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white text-xs font-bold hover:bg-[#172945] transition-all cursor-pointer"
                  >
                    Kembali ke Beranda
                  </button>
                  <button
                    onClick={handleOpenAdminAuth}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white text-xs font-bold shadow-lg hover:brightness-110 transition-all cursor-pointer"
                  >
                    Verifikasi Akses Admin
                  </button>
                </div>
              </div>
            )
          )}
          </div>

        </main>

      </div>

      {/* Kanji Detail & Stroke Canvas Modal */}
      <KanjiModal
        kanji={activeKanji}
        onClose={() => setActiveKanji(null)}
        isLearned={activeKanji ? stats.learnedKanjiIds.includes(activeKanji.id) : false}
        onToggleLearned={handleToggleLearnedKanji}
        kanjiList={activeKanjiList || undefined}
        onSelectKanji={(k) => setActiveKanji(k)}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectKanji={handleSelectKanji}
        onSelectBab={(bab) => {
          setSelectedBab(bab);
          setActiveTab('kotoba');
        }}
        onNavigate={(tab) => {
          setActiveTab(tab);
        }}
      />

      {/* Supabase Authentication & Cloud Database Modal */}
      <AuthModal
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        onAuthSuccess={() => {
          if (user) handleCloudSync(user);
        }}
      />

      {/* Admin Security Access Verification Modal */}
      <AdminAuthModal
        isOpen={adminAuthModalOpen}
        onClose={() => setAdminAuthModalOpen(false)}
        onSuccess={handleAdminAuthSuccess}
        user={user}
      />

    </div>
  );
}

export default App;
