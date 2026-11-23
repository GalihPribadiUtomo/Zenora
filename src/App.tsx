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
import { KanjiItem, QuizMode, QuizSubject } from './types';
import { getInitialStats, saveStats } from './utils/storage';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { syncAllToCloud, pullAndMergeFromCloud } from './services/syncService';
import { X } from 'lucide-react';
import type { User } from '@supabase/supabase-js';

export function App() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'kana' | 'kotoba' | 'kanji' | 'ssw' | 'latihan' | 'analitik' | 'profil'>('beranda');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeKanji, setActiveKanji] = useState<KanjiItem | null>(null);

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
    }
  }, [user?.id]);

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
      return {
        ...prev,
        learnedKotobaIds: exists 
          ? prev.learnedKotobaIds.filter(i => i !== id)
          : [...prev.learnedKotobaIds, id]
      };
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
      return {
        ...prev,
        learnedKanjiIds: exists 
          ? prev.learnedKanjiIds.filter(i => i !== id)
          : [...prev.learnedKanjiIds, id]
      };
    });
  };

  const handleToggleLearnedKana = (char: string) => {
    setStats(prev => {
      const current = prev.learnedKanaChars || [];
      const exists = current.includes(char);
      return {
        ...prev,
        learnedKanaChars: exists
          ? current.filter(c => c !== char)
          : [...current, char]
      };
    });
  };

  const handleRecordQuizResult = (score: number, total: number, mode: QuizMode, subject: QuizSubject) => {
    setStats(prev => ({
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
    }));
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
    <div className="min-h-screen flex bg-[#080D2B] text-[#F5F6FF] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#7857FF] selection:text-white antialiased">
      
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
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setMobileDrawerOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Drawer Sidebar */}
          <div className="relative w-72 max-w-[85vw] h-full bg-[#080D2B] z-10 flex flex-col shadow-2xl">
            <div className="p-4 flex justify-end">
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-2 rounded-xl bg-[#0D1238] border border-[#7857FF]/30 text-[#AAB3D5]"
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
                onToggleDarkMode={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 min-w-0 flex flex-col min-h-screen overflow-x-hidden">
        
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
        />

        {/* MAIN BODY SCROLLABLE CONTAINER */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          
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
              onSelectKanji={(k) => setActiveKanji(k)}
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
              onSelectKanji={(k) => setActiveKanji(k)}
            />
          )}

          {activeTab === 'kanji' && (
            <KanjiSection
              onSelectKanji={(k) => setActiveKanji(k)}
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
              onToggleDarkMode={() => setDarkMode(!darkMode)}
            />
          )}

        </main>

      </div>

      {/* Kanji Detail & Stroke Canvas Modal */}
      <KanjiModal
        kanji={activeKanji}
        onClose={() => setActiveKanji(null)}
        isLearned={activeKanji ? stats.learnedKanjiIds.includes(activeKanji.id) : false}
        onToggleLearned={handleToggleLearnedKanji}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectKanji={(k) => setActiveKanji(k)}
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

    </div>
  );
}

export default App;
