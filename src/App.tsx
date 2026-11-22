import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HomeDashboard } from './components/HomeDashboard';
import { KotobaSection } from './components/KotobaSection';
import { KanjiSection } from './components/KanjiSection';
import { PracticeSection } from './components/PracticeSection';
import { KanjiModal } from './components/KanjiModal';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { Footer } from './components/Footer';
import { KanaSection } from './components/KanaSection';
import { KanjiItem, QuizMode, QuizSubject } from './types';
import { getInitialStats, saveStats } from './utils/storage';
import { supabase, isSupabaseConfigured } from './lib/supabase';
import { syncAllToCloud, pullAndMergeFromCloud } from './services/syncService';
import type { User } from '@supabase/supabase-js';

export function App() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'kana' | 'kotoba' | 'kanji' | 'latihan'>('beranda');
  const [soundEnabled, setSoundEnabled] = useState(true);
  
  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeKanji, setActiveKanji] = useState<KanjiItem | null>(null);

  // Selected Bab in Kotoba section
  const [selectedBab, setSelectedBab] = useState<number | null>(null);
  const [practiceBab, setPracticeBab] = useState<number | null>(null);

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
    setActiveTab('latihan');
  };

  return (
    <div className="app-shell min-h-screen flex flex-col selection:bg-[#6555A5] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenSearch={() => setSearchOpen(true)}
        learnedKotobaCount={stats.learnedKotobaIds.length}
        learnedKanjiCount={stats.learnedKanjiIds.length}
        streakDays={stats.streakDays}
        user={user}
        onOpenAuth={() => setAuthOpen(true)}
        onSignOut={handleSignOut}
        isSyncing={isSyncing}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'beranda' && (
          <HomeDashboard
            onNavigate={(tab) => {
              if (tab === 'kotoba') setSelectedBab(null);
              setActiveTab(tab);
            }}
            learnedKotobaIds={stats.learnedKotobaIds}
            learnedKanjiIds={stats.learnedKanjiIds}
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
          />
        )}

        {activeTab === 'kanji' && (
          <KanjiSection
            onSelectKanji={(k) => setActiveKanji(k)}
            learnedKanjiIds={stats.learnedKanjiIds}
            onToggleLearned={handleToggleLearnedKanji}
          />
        )}

        {activeTab === 'latihan' && (
          <PracticeSection
            initialBab={practiceBab}
            onRecordResult={handleRecordQuizResult}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

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
