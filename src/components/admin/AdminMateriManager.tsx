import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Braces, 
  MessageSquareText, 
  MessagesSquare, 
  Plus, 
  Edit3, 
  Trash2, 
  Volume2, 
  CheckCircle2, 
  AlertTriangle, 
  X, 
  Save, 
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { 
  ChapterLesson, 
  TataBahasaPoint, 
  PolaKalimatItem, 
  ContohKalimatItem, 
  KaiwaDialogItem,
  KaiwaItem
} from '../../types';
import { loadChapterLesson, clearLessonCache } from '../../data/materi';
import { 
  applyCustomMateri,
  addBunpouPoint, 
  updateBunpouPoint, 
  deleteBunpouPoint,
  addBunkeiItem, 
  updateBunkeiItem, 
  deleteBunkeiItem,
  addReibunItem, 
  updateReibunItem, 
  deleteReibunItem,
  addKaiwaDialog, 
  updateKaiwaDialog, 
  deleteKaiwaDialog,
  updateKaiwaHeader,
  resetChapterMateri
} from '../../utils/materiStorage';
import { speakJapanese, sound } from '../../utils/audio';
import { FuriganaText } from '../FuriganaText';

interface AdminMateriManagerProps {
  onShowToast: (msg: string) => void;
}

export const AdminMateriManager: React.FC<AdminMateriManagerProps> = ({ onShowToast }) => {
  const [selectedBab, setSelectedBab] = useState<number>(1);
  const [activeCategory, setActiveCategory] = useState<'bunpou' | 'bunkei' | 'reibun' | 'kaiwa'>('bunpou');
  const [lesson, setLesson] = useState<ChapterLesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Modals state
  const [editingBunpouIndex, setEditingBunpouIndex] = useState<number | null>(null);
  const [isBunpouModalOpen, setIsBunpouModalOpen] = useState(false);
  const [bunpouForm, setBunpouForm] = useState<TataBahasaPoint>({
    point: 1,
    title: '',
    polaFormat: '',
    explanation: '',
    examples: [{ japanese: '', romaji: '', indonesian: '' }]
  });

  const [editingBunkeiIndex, setEditingBunkeiIndex] = useState<number | null>(null);
  const [isBunkeiModalOpen, setIsBunkeiModalOpen] = useState(false);
  const [bunkeiForm, setBunkeiForm] = useState<PolaKalimatItem>({
    id: 1,
    japanese: '',
    romaji: '',
    indonesian: ''
  });

  const [editingReibunIndex, setEditingReibunIndex] = useState<number | null>(null);
  const [isReibunModalOpen, setIsReibunModalOpen] = useState(false);
  const [reibunForm, setReibunForm] = useState<ContohKalimatItem>({
    id: 1,
    question: '',
    answer: '',
    romaji: '',
    indonesian: ''
  });

  const [isKaiwaHeaderModalOpen, setIsKaiwaHeaderModalOpen] = useState(false);
  const [kaiwaHeaderForm, setKaiwaHeaderForm] = useState<{ title: string; situasi: string; tokoh: string }>({
    title: '',
    situasi: '',
    tokoh: ''
  });

  const [editingKaiwaDialogIndex, setEditingKaiwaDialogIndex] = useState<number | null>(null);
  const [isKaiwaDialogModalOpen, setIsKaiwaDialogModalOpen] = useState(false);
  const [kaiwaDialogForm, setKaiwaDialogForm] = useState<KaiwaDialogItem>({
    speaker: '',
    role: '',
    japanese: '',
    romaji: '',
    indonesian: ''
  });

  // Fetch lesson data
  const fetchLessonData = async (bab: number) => {
    setIsLoading(true);
    clearLessonCache(bab);
    const data = await loadChapterLesson(bab);
    setLesson(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchLessonData(selectedBab);
  }, [selectedBab]);

  // Handle Bunpou Save
  const handleSaveBunpou = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lesson) return;
    if (!bunpouForm.title || !bunpouForm.explanation) {
      alert('Judul materi dan penjelasan wajib diisi!');
      return;
    }

    if (editingBunpouIndex !== null) {
      updateBunpouPoint(selectedBab, editingBunpouIndex, bunpouForm, lesson);
      onShowToast(`Poin tata bahasa #${bunpouForm.point} berhasil diperbarui!`);
    } else {
      addBunpouPoint(selectedBab, bunpouForm, lesson);
      onShowToast(`Poin tata bahasa #${bunpouForm.point} berhasil ditambahkan!`);
    }
    sound.playCorrect();
    setIsBunpouModalOpen(false);
    fetchLessonData(selectedBab);
  };

  // Handle Bunpou Delete
  const handleDeleteBunpou = (index: number) => {
    if (!lesson) return;
    if (confirm(`Yakin ingin menghapus poin tata bahasa ini?`)) {
      deleteBunpouPoint(selectedBab, index, lesson);
      sound.playClick();
      onShowToast(`Poin tata bahasa berhasil dihapus.`);
      fetchLessonData(selectedBab);
    }
  };

  // Handle Bunkei Save
  const handleSaveBunkei = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lesson) return;
    if (!bunkeiForm.japanese || !bunkeiForm.indonesian) {
      alert('Kalimat Jepang dan Terjemahan Indonesia wajib diisi!');
      return;
    }

    if (editingBunkeiIndex !== null) {
      updateBunkeiItem(selectedBab, editingBunkeiIndex, bunkeiForm, lesson);
      onShowToast(`Pola kalimat #${bunkeiForm.id} berhasil diperbarui!`);
    } else {
      addBunkeiItem(selectedBab, bunkeiForm, lesson);
      onShowToast(`Pola kalimat #${bunkeiForm.id} berhasil ditambahkan!`);
    }
    sound.playCorrect();
    setIsBunkeiModalOpen(false);
    fetchLessonData(selectedBab);
  };

  // Handle Bunkei Delete
  const handleDeleteBunkei = (index: number) => {
    if (!lesson) return;
    if (confirm(`Yakin ingin menghapus pola kalimat ini?`)) {
      deleteBunkeiItem(selectedBab, index, lesson);
      sound.playClick();
      onShowToast(`Pola kalimat berhasil dihapus.`);
      fetchLessonData(selectedBab);
    }
  };

  // Handle Reibun Save
  const handleSaveReibun = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lesson) return;
    if (!reibunForm.answer || !reibunForm.indonesian) {
      alert('Jawaban kalimat dan Terjemahan Indonesia wajib diisi!');
      return;
    }

    if (editingReibunIndex !== null) {
      updateReibunItem(selectedBab, editingReibunIndex, reibunForm, lesson);
      onShowToast(`Contoh kalimat #${reibunForm.id} berhasil diperbarui!`);
    } else {
      addReibunItem(selectedBab, reibunForm, lesson);
      onShowToast(`Contoh kalimat #${reibunForm.id} berhasil ditambahkan!`);
    }
    sound.playCorrect();
    setIsReibunModalOpen(false);
    fetchLessonData(selectedBab);
  };

  // Handle Reibun Delete
  const handleDeleteReibun = (index: number) => {
    if (!lesson) return;
    if (confirm(`Yakin ingin menghapus contoh kalimat ini?`)) {
      deleteReibunItem(selectedBab, index, lesson);
      sound.playClick();
      onShowToast(`Contoh kalimat berhasil dihapus.`);
      fetchLessonData(selectedBab);
    }
  };

  // Handle Kaiwa Header Save
  const handleSaveKaiwaHeader = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lesson) return;
    const tokohArr = kaiwaHeaderForm.tokoh.split(',').map(s => s.trim()).filter(Boolean);
    updateKaiwaHeader(selectedBab, kaiwaHeaderForm.title, kaiwaHeaderForm.situasi, tokohArr, lesson);
    sound.playCorrect();
    setIsKaiwaHeaderModalOpen(false);
    onShowToast(`Informasi percakapan Bab ${selectedBab} berhasil diperbarui!`);
    fetchLessonData(selectedBab);
  };

  // Handle Kaiwa Dialog Save
  const handleSaveKaiwaDialog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lesson) return;
    if (!kaiwaDialogForm.speaker || !kaiwaDialogForm.japanese || !kaiwaDialogForm.indonesian) {
      alert('Nama tokoh, kalimat Jepang, dan arti Indonesia wajib diisi!');
      return;
    }

    if (editingKaiwaDialogIndex !== null) {
      updateKaiwaDialog(selectedBab, editingKaiwaDialogIndex, kaiwaDialogForm, lesson);
      onShowToast(`Dialog percakapan berhasil diperbarui!`);
    } else {
      addKaiwaDialog(selectedBab, kaiwaDialogForm, lesson);
      onShowToast(`Dialog percakapan baru berhasil ditambahkan!`);
    }
    sound.playCorrect();
    setIsKaiwaDialogModalOpen(false);
    fetchLessonData(selectedBab);
  };

  // Handle Kaiwa Dialog Delete
  const handleDeleteKaiwaDialog = (index: number) => {
    if (!lesson) return;
    if (confirm(`Yakin ingin menghapus baris dialog ini?`)) {
      deleteKaiwaDialog(selectedBab, index, lesson);
      sound.playClick();
      onShowToast(`Baris dialog berhasil dihapus.`);
      fetchLessonData(selectedBab);
    }
  };

  // Handle Reset to Default
  const handleResetChapter = () => {
    if (confirm(`PERINGATAN: Seluruh kustomisasi Bab ${selectedBab} akan direset kembali ke data bawaan Minna no Nihongo. Lanjutkan?`)) {
      resetChapterMateri(selectedBab);
      clearLessonCache(selectedBab);
      sound.playClick();
      onShowToast(`Materi Bab ${selectedBab} berhasil direset ke bawaan.`);
      fetchLessonData(selectedBab);
    }
  };

  return (
    <div className="space-y-6 text-left font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* ── Header Controls ── */}
      <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/30 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#45C6A5] animate-pulse" />
              <span className="text-xs font-mono font-bold text-[#3978D6] uppercase tracking-wider">
                Sistem Manajemen Materi (CMS PRO)
              </span>
            </div>
            <h2 className="text-2xl font-black text-[var(--text-primary)] font-['Manrope'] mt-1">
              Pengelolaan Bab 1–50: Bunpou, Bunkei, Reibun & Kaiwa
            </h2>
            <p className="text-xs text-[var(--text-secondary)]">
              Tambah, edit, sesuaikan pola kalimat, dialog tokoh, dan penjelasan tata bahasa secara terpusat.
            </p>
          </div>

          {/* Chapter Selector & Reset */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[var(--bg-sidebar)] p-2 rounded-2xl border border-[#3978D6]/30">
              <span className="text-xs font-bold text-[#3978D6] pl-2 font-mono">Pilih Bab:</span>
              <select
                value={selectedBab}
                onChange={(e) => setSelectedBab(parseInt(e.target.value, 10))}
                className="px-3 py-1.5 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] font-bold text-xs border border-[#3978D6]/40 focus:outline-hidden cursor-pointer"
              >
                {Array.from({ length: 50 }, (_, i) => i + 1).map((b) => (
                  <option key={b} value={b}>第{b}課 · Bab {b}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleResetChapter}
              className="px-3.5 py-2.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Reset materi bab ini ke data bawaan"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Bab</span>
            </button>
          </div>
        </div>

        {/* ── 4 Category Subtabs with Required Lucide Icons ── */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-[#3978D6]/20">
          
          <button
            onClick={() => { sound.playClick(); setActiveCategory('bunpou'); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'bunpou'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.4)]'
                : 'bg-[var(--bg-sidebar)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeCategory === 'bunpou' ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>Bunpou (文法) — Tata Bahasa ({lesson?.tataBahasa?.length || 0})</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveCategory('bunkei'); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'bunkei'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.4)]'
                : 'bg-[var(--bg-sidebar)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
            }`}
          >
            <Braces className={`w-4 h-4 ${activeCategory === 'bunkei' ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>Bunkei (文型) — Pola Kalimat ({lesson?.polaKalimat?.length || 0})</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveCategory('reibun'); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'reibun'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.4)]'
                : 'bg-[var(--bg-sidebar)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
            }`}
          >
            <MessageSquareText className={`w-4 h-4 ${activeCategory === 'reibun' ? 'text-white' : 'text-[#69C9DF]'}`} />
            <span>Reibun (例文) — Contoh Kalimat ({lesson?.contohKalimat?.length || 0})</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setActiveCategory('kaiwa'); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeCategory === 'kaiwa'
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_15px_rgba(57,120,214,0.4)]'
                : 'bg-[var(--bg-sidebar)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[#3978D6]/20'
            }`}
          >
            <MessagesSquare className={`w-4 h-4 ${activeCategory === 'kaiwa' ? 'text-white' : 'text-[#3978D6]'}`} />
            <span>Kaiwa (会話) — Percakapan ({lesson?.percakapan?.dialogs?.length || 0})</span>
          </button>

        </div>
      </div>

      {/* ── Content View ── */}
      {isLoading ? (
        <div className="p-12 text-center text-[var(--text-muted)]">
          <div className="w-8 h-8 border-2 border-[#3978D6] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs">Memuat materi Bab {selectedBab}...</p>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* ─────────────────────────────────────────────────────────────
              CATEGORY 1: BUNPOU (TATA BAHASA)
             ───────────────────────────────────────────────────────────── */}
          {activeCategory === 'bunpou' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#3978D6]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">Daftar Poin Tata Bahasa (Bunpou) · Bab {selectedBab}</h3>
                </div>
                <button
                  onClick={() => {
                    setEditingBunpouIndex(null);
                    setBunpouForm({
                      point: (lesson?.tataBahasa?.length || 0) + 1,
                      title: '',
                      polaFormat: '',
                      explanation: '',
                      examples: [{ japanese: '', romaji: '', indonesian: '' }]
                    });
                    setIsBunpouModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Poin Tata Bahasa</span>
                </button>
              </div>

              {lesson?.tataBahasa && lesson.tataBahasa.length > 0 ? (
                <div className="space-y-4">
                  {lesson.tataBahasa.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/25 hover:border-[#3978D6]/50 transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-2.5">
                          <span className="w-7 h-7 rounded-lg bg-[#3978D6] text-white text-xs font-black flex items-center justify-center font-mono">
                            {item.point}
                          </span>
                          <h4 className="text-base font-bold text-[var(--text-primary)]"><FuriganaText text={item.title} /></h4>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingBunpouIndex(idx);
                              setBunpouForm({ ...item });
                              setIsBunpouModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] hover:bg-[#3978D6] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            title="Edit Tata Bahasa"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteBunpou(idx)}
                            className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] hover:bg-rose-500 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                            title="Hapus Tata Bahasa"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {item.polaFormat && (
                        <div className="px-3 py-1.5 rounded-xl bg-[var(--bg-sidebar)] text-xs font-bold text-[#DCEBFA] inline-block border border-[#3978D6]/25 font-mono">
                          Rumus: {item.polaFormat}
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] whitespace-pre-line leading-relaxed">
                        {item.explanation}
                      </p>

                      {/* Examples */}
                      {item.examples && item.examples.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-[#3978D6]/15">
                          <span className="text-[10px] font-bold text-[#3978D6] uppercase">Contoh Kalimat:</span>
                          {item.examples.map((ex, exIdx) => (
                            <div key={exIdx} className="p-3 rounded-xl bg-[var(--bg-sidebar)] text-xs flex items-center justify-between gap-3">
                              <div className="space-y-0.5">
                                <p className="font-bold text-[var(--text-primary)] japanese-text"><FuriganaText text={ex.japanese} /></p>
                                <p className="text-[#69C9DF] text-[11px] font-mono">{ex.romaji}</p>
                                <p className="text-[var(--text-secondary)] text-[11px]">{ex.indonesian}</p>
                              </div>
                              <button
                                onClick={() => speakJapanese(ex.japanese)}
                                className="p-1.5 rounded-lg bg-[var(--bg-elevated)] text-[#3978D6] hover:text-[var(--text-primary)] cursor-pointer"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-card)] rounded-3xl border border-[#3978D6]/20">
                  Belum ada poin tata bahasa terdaftar. Klik tombol Tambah di atas.
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              CATEGORY 2: BUNKEI (POLA KALIMAT)
             ───────────────────────────────────────────────────────────── */}
          {activeCategory === 'bunkei' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Braces className="w-5 h-5 text-[#3978D6]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">Daftar Pola Kalimat Inti (Bunkei) · Bab {selectedBab}</h3>
                </div>
                <button
                  onClick={() => {
                    setEditingBunkeiIndex(null);
                    setBunkeiForm({
                      id: (lesson?.polaKalimat?.length || 0) + 1,
                      japanese: '',
                      romaji: '',
                      indonesian: ''
                    });
                    setIsBunkeiModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Pola Kalimat</span>
                </button>
              </div>

              {lesson?.polaKalimat && lesson.polaKalimat.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lesson.polaKalimat.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/25 space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-sidebar)] text-[#3978D6] text-xs font-mono font-bold">
                            Pola #{item.id}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => speakJapanese(item.japanese)}
                              className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] text-[#3978D6] hover:text-[var(--text-primary)]"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                setEditingBunkeiIndex(idx);
                                setBunkeiForm({ ...item });
                                setIsBunkeiModalOpen(true);
                              }}
                              className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] hover:bg-[#3978D6] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteBunkei(idx)}
                              className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] hover:bg-rose-500 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xl font-bold text-[var(--text-primary)] japanese-text"><FuriganaText text={item.japanese} /></p>
                        <p className="text-xs text-[#69C9DF] font-mono">{item.romaji}</p>
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] pt-2 border-t border-[#3978D6]/15">
                        {item.indonesian}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-card)] rounded-3xl border border-[#3978D6]/20">
                  Belum ada pola kalimat terdaftar.
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              CATEGORY 3: REIBUN (CONTOH KALIMAT)
             ───────────────────────────────────────────────────────────── */}
          {activeCategory === 'reibun' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquareText className="w-5 h-5 text-[#69C9DF]" />
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">Daftar Contoh Kalimat Tanya-Jawab (Reibun) · Bab {selectedBab}</h3>
                </div>
                <button
                  onClick={() => {
                    setEditingReibunIndex(null);
                    setReibunForm({
                      id: (lesson?.contohKalimat?.length || 0) + 1,
                      question: '',
                      answer: '',
                      romaji: '',
                      indonesian: ''
                    });
                    setIsReibunModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Tambah Contoh Kalimat</span>
                </button>
              </div>

              {lesson?.contohKalimat && lesson.contohKalimat.length > 0 ? (
                <div className="space-y-3">
                  {lesson.contohKalimat.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/25 flex items-start justify-between gap-4"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-[#3978D6]">Reibun #{item.id}</span>
                        </div>
                        {item.question && (
                          <div className="flex items-start gap-2">
                            <span className="text-xs font-bold text-[#3978D6] font-mono mt-0.5">Q:</span>
                            <p className="text-base font-bold text-[var(--text-primary)] japanese-text"><FuriganaText text={item.question} /></p>
                          </div>
                        )}
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-emerald-400 font-mono mt-0.5">A:</span>
                          <p className="text-base font-bold text-[var(--text-primary)] japanese-text"><FuriganaText text={item.answer} /></p>
                        </div>
                        <p className="text-xs text-[#69C9DF] font-mono pl-4">{item.romaji}</p>
                        <p className="text-xs text-[var(--text-secondary)] pl-4">{item.indonesian}</p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => speakJapanese(`${item.question || ''} ${item.answer}`)}
                          className="p-2 rounded-xl bg-[var(--bg-sidebar)] text-[#3978D6] hover:text-[var(--text-primary)]"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setEditingReibunIndex(idx);
                            setReibunForm({ ...item });
                            setIsReibunModalOpen(true);
                          }}
                          className="p-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[#3978D6] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteReibun(idx)}
                          className="p-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-rose-500 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-card)] rounded-3xl border border-[#3978D6]/20">
                  Belum ada contoh kalimat terdaftar.
                </div>
              )}
            </div>
          )}

          {/* ─────────────────────────────────────────────────────────────
              CATEGORY 4: KAIWA (PERCAKAPAN)
             ───────────────────────────────────────────────────────────── */}
          {activeCategory === 'kaiwa' && (
            <div className="space-y-6">
              
              {/* Kaiwa Header Card */}
              <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#3978D6] uppercase">Info Judul & Situasi Dialog</span>
                  <h3 className="text-xl font-black text-[var(--text-primary)] font-['Manrope']">
                    {lesson?.percakapan?.title || `Percakapan Bab ${selectedBab}`}
                  </h3>
                  {lesson?.percakapan?.situasi && (
                    <p className="text-xs text-[var(--text-secondary)] italic">Situasi: {lesson.percakapan.situasi}</p>
                  )}
                  {lesson?.percakapan?.tokoh && (
                    <p className="text-[11px] text-[#3978D6] font-bold">Tokoh: {lesson.percakapan.tokoh.join(', ')}</p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setKaiwaHeaderForm({
                        title: lesson?.percakapan?.title || '',
                        situasi: lesson?.percakapan?.situasi || '',
                        tokoh: lesson?.percakapan?.tokoh?.join(', ') || ''
                      });
                      setIsKaiwaHeaderModalOpen(true);
                    }}
                    className="px-3.5 py-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] border border-[#3978D6]/30 text-[var(--text-primary)] text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-[#3978D6]" />
                    <span>Edit Info Percakapan</span>
                  </button>

                  <button
                    onClick={() => {
                      setEditingKaiwaDialogIndex(null);
                      setKaiwaDialogForm({ speaker: '', role: '', japanese: '', romaji: '', indonesian: '' });
                      setIsKaiwaDialogModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] text-xs font-bold flex items-center gap-1.5 shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Tambah Baris Dialog</span>
                  </button>
                </div>
              </div>

              {/* Dialog Lines */}
              {lesson?.percakapan?.dialogs && lesson.percakapan.dialogs.length > 0 ? (
                <div className="space-y-3">
                  {lesson.percakapan.dialogs.map((d, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/20 flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-elevated)] border border-[#3978D6]/30 text-[#3978D6] font-bold text-xs flex items-center justify-center shrink-0">
                        {d.speaker.slice(0, 2)}
                      </div>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[var(--text-primary)]">{d.speaker}</span>
                          {d.role && <span className="text-[10px] text-[#3978D6]">({d.role})</span>}
                        </div>
                        <p className="text-base font-bold text-[var(--text-primary)] japanese-text"><FuriganaText text={d.japanese} /></p>
                        <p className="text-xs text-[#69C9DF] font-mono">{d.romaji}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{d.indonesian}</p>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => speakJapanese(d.japanese)}
                          className="p-1.5 rounded-lg bg-[var(--bg-card)] text-[#3978D6] hover:text-[var(--text-primary)]"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setEditingKaiwaDialogIndex(idx);
                            setKaiwaDialogForm({ ...d });
                            setIsKaiwaDialogModalOpen(true);
                          }}
                          className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[#3978D6] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDeleteKaiwaDialog(idx)}
                          className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-rose-500 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center text-[var(--text-muted)] bg-[var(--bg-card)] rounded-3xl border border-[#3978D6]/20">
                  Belum ada baris percakapan terdaftar.
                </div>
              )}
            </div>
          )}

        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 1: ADD/EDIT BUNPOU
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isBunpouModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setIsBunpouModalOpen(false)}>
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/40 p-6 space-y-4 shadow-2xl animate-modal-pop" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/20">
              <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
                {editingBunpouIndex !== null ? 'Edit Poin Tata Bahasa' : 'Tambah Poin Tata Bahasa Baru'}
              </h3>
              <button onClick={() => setIsBunpouModalOpen(false)} className="p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSaveBunpou} className="space-y-4 text-xs">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[var(--text-secondary)] font-bold mb-1">Nomor Poin</label>
                  <input
                    type="number"
                    value={bunpouForm.point}
                    onChange={e => setBunpouForm({ ...bunpouForm, point: parseInt(e.target.value, 10) || 1 })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[var(--text-secondary)] font-bold mb-1">Judul Tata Bahasa *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Partikel を: Objek Penderita"
                    value={bunpouForm.title}
                    onChange={e => setBunpouForm({ ...bunpouForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Rumus / Pola Struktur</label>
                <input
                  type="text"
                  placeholder="Contoh: Kata Benda + を + Kata Kerja Transitif"
                  value={bunpouForm.polaFormat || ''}
                  onChange={e => setBunpouForm({ ...bunpouForm, polaFormat: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Penjelasan Kaidah *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Jelaskan kaidah penggunaan, syarat gramatikal, dan konteks penggunaannya..."
                  value={bunpouForm.explanation}
                  onChange={e => setBunpouForm({ ...bunpouForm, explanation: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                />
              </div>

              {/* Examples editor */}
              <div className="space-y-2 pt-2 border-t border-[#3978D6]/15">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[var(--text-primary)]">Contoh Kalimat Bunpou</span>
                  <button
                    type="button"
                    onClick={() => setBunpouForm({
                      ...bunpouForm,
                      examples: [...bunpouForm.examples, { japanese: '', romaji: '', indonesian: '' }]
                    })}
                    className="px-2.5 py-1 rounded-lg bg-[var(--bg-sidebar)] text-[#3978D6] hover:text-[var(--text-primary)] font-bold text-[11px]"
                  >
                    + Tambah Contoh
                  </button>
                </div>

                {bunpouForm.examples.map((ex, exI) => (
                  <div key={exI} className="p-3 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#3978D6] font-mono">Contoh #{exI + 1}</span>
                      {bunpouForm.examples.length > 1 && (
                        <button
                          type="button"
                          onClick={() => setBunpouForm({
                            ...bunpouForm,
                            examples: bunpouForm.examples.filter((_, i) => i !== exI)
                          })}
                          className="text-rose-400 hover:text-rose-200"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      placeholder="Bahasa Jepang (Kanji/Kana)"
                      value={ex.japanese}
                      onChange={e => {
                        const newEx = [...bunpouForm.examples];
                        newEx[exI].japanese = e.target.value;
                        setBunpouForm({ ...bunpouForm, examples: newEx });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[#3978D6]/20 text-[var(--text-primary)]"
                    />
                    <input
                      type="text"
                      placeholder="Romaji"
                      value={ex.romaji}
                      onChange={e => {
                        const newEx = [...bunpouForm.examples];
                        newEx[exI].romaji = e.target.value;
                        setBunpouForm({ ...bunpouForm, examples: newEx });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[#3978D6]/20 text-[var(--text-primary)] font-mono"
                    />
                    <input
                      type="text"
                      placeholder="Arti Bahasa Indonesia"
                      value={ex.indonesian}
                      onChange={e => {
                        const newEx = [...bunpouForm.examples];
                        newEx[exI].indonesian = e.target.value;
                        setBunpouForm({ ...bunpouForm, examples: newEx });
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-[var(--bg-elevated)] border border-[#3978D6]/20 text-[var(--text-primary)]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3978D6]/20">
                <button type="button" onClick={() => setIsBunpouModalOpen(false)} className="px-4 py-2 rounded-xl bg-[var(--bg-sidebar)] text-[var(--text-secondary)]">Batal</button>
                <button type="submit" className="px-5 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] font-bold">Simpan Poin Tata Bahasa</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 2: ADD/EDIT BUNKEI
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isBunkeiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setIsBunkeiModalOpen(false)}>
          <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/40 p-6 space-y-4 shadow-2xl animate-modal-pop" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/20">
              <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
                {editingBunkeiIndex !== null ? 'Edit Pola Kalimat' : 'Tambah Pola Kalimat Baru'}
              </h3>
              <button onClick={() => setIsBunkeiModalOpen(false)} className="p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSaveBunkei} className="space-y-4 text-xs">
              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Nomor Pola</label>
                <input
                  type="number"
                  value={bunkeiForm.id}
                  onChange={e => setBunkeiForm({ ...bunkeiForm, id: parseInt(e.target.value, 10) || 1 })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Kalimat Jepang (Kanji & Kana) *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: わたしは ジュースを 飲みます。"
                  value={bunkeiForm.japanese}
                  onChange={e => setBunkeiForm({ ...bunkeiForm, japanese: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] japanese-text text-base"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Romaji</label>
                <input
                  type="text"
                  placeholder="Contoh: Watashi wa juusu o nomimasu."
                  value={bunkeiForm.romaji}
                  onChange={e => setBunkeiForm({ ...bunkeiForm, romaji: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Arti Bahasa Indonesia *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Saya minum jus."
                  value={bunkeiForm.indonesian}
                  onChange={e => setBunkeiForm({ ...bunkeiForm, indonesian: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3978D6]/20">
                <button type="button" onClick={() => setIsBunkeiModalOpen(false)} className="px-4 py-2 rounded-xl bg-[var(--bg-sidebar)] text-[var(--text-secondary)]">Batal</button>
                <button type="submit" className="px-5 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] font-bold">Simpan Pola Kalimat</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 3: ADD/EDIT REIBUN
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isReibunModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setIsReibunModalOpen(false)}>
          <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/40 p-6 space-y-4 shadow-2xl animate-modal-pop" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/20">
              <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
                {editingReibunIndex !== null ? 'Edit Contoh Kalimat (Reibun)' : 'Tambah Contoh Kalimat Baru'}
              </h3>
              <button onClick={() => setIsReibunModalOpen(false)} className="p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSaveReibun} className="space-y-4 text-xs">
              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Nomor Urut</label>
                <input
                  type="number"
                  value={reibunForm.id}
                  onChange={e => setReibunForm({ ...reibunForm, id: parseInt(e.target.value, 10) || 1 })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Pertanyaan (Tanya / Q - Opsional)</label>
                <input
                  type="text"
                  placeholder="Contoh: お酒を 飲みますか。"
                  value={reibunForm.question || ''}
                  onChange={e => setReibunForm({ ...reibunForm, question: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] japanese-text"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Jawaban / Kalimat Inti (A) *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: ……いいえ、飲みません。"
                  value={reibunForm.answer}
                  onChange={e => setReibunForm({ ...reibunForm, answer: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] japanese-text text-base"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Romaji</label>
                <input
                  type="text"
                  placeholder="Contoh: Osake o nomimasu ka? ... Iie, nomimasen."
                  value={reibunForm.romaji}
                  onChange={e => setReibunForm({ ...reibunForm, romaji: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Arti Bahasa Indonesia *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Apakah Anda minum sake? ... Tidak, saya tidak minum."
                  value={reibunForm.indonesian}
                  onChange={e => setReibunForm({ ...reibunForm, indonesian: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3978D6]/20">
                <button type="button" onClick={() => setIsReibunModalOpen(false)} className="px-4 py-2 rounded-xl bg-[var(--bg-sidebar)] text-[var(--text-secondary)]">Batal</button>
                <button type="submit" className="px-5 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] font-bold">Simpan Contoh Kalimat</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 4: EDIT KAIWA HEADER
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isKaiwaHeaderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setIsKaiwaHeaderModalOpen(false)}>
          <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/40 p-6 space-y-4 shadow-2xl animate-modal-pop" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/20">
              <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">Edit Info Percakapan</h3>
              <button onClick={() => setIsKaiwaHeaderModalOpen(false)} className="p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSaveKaiwaHeader} className="space-y-4 text-xs">
              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Judul Percakapan</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: いっしょに 行きませんか"
                  value={kaiwaHeaderForm.title}
                  onChange={e => setKaiwaHeaderForm({ ...kaiwaHeaderForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Situasi Dialog</label>
                <input
                  type="text"
                  placeholder="Contoh: Miller-san mengajak Sato-san melihat sakura bersama."
                  value={kaiwaHeaderForm.situasi}
                  onChange={e => setKaiwaHeaderForm({ ...kaiwaHeaderForm, situasi: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Tokoh Pembicara (Pisahkan dengan koma)</label>
                <input
                  type="text"
                  placeholder="Contoh: 佐藤, ミラー"
                  value={kaiwaHeaderForm.tokoh}
                  onChange={e => setKaiwaHeaderForm({ ...kaiwaHeaderForm, tokoh: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3978D6]/20">
                <button type="button" onClick={() => setIsKaiwaHeaderModalOpen(false)} className="px-4 py-2 rounded-xl bg-[var(--bg-sidebar)] text-[var(--text-secondary)]">Batal</button>
                <button type="submit" className="px-5 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] font-bold">Simpan Info</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 5: ADD/EDIT KAIWA DIALOG
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isKaiwaDialogModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setIsKaiwaDialogModalOpen(false)}>
          <div className="relative w-full max-w-md rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/40 p-6 space-y-4 shadow-2xl animate-modal-pop" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/20">
              <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
                {editingKaiwaDialogIndex !== null ? 'Edit Baris Dialog' : 'Tambah Baris Dialog Baru'}
              </h3>
              <button onClick={() => setIsKaiwaDialogModalOpen(false)} className="p-1.5 rounded-xl text-[var(--text-muted)] hover:text-[var(--text-primary)]"><X className="w-5 h-5" /></button>
            </div>

            <form onSubmit={handleSaveKaiwaDialog} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[var(--text-secondary)] font-bold mb-1">Nama Tokoh *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: ミラー"
                    value={kaiwaDialogForm.speaker}
                    onChange={e => setKaiwaDialogForm({ ...kaiwaDialogForm, speaker: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-[var(--text-secondary)] font-bold mb-1">Peran / Hubungan</label>
                  <input
                    type="text"
                    placeholder="Contoh: Rekan Kerja"
                    value={kaiwaDialogForm.role || ''}
                    onChange={e => setKaiwaDialogForm({ ...kaiwaDialogForm, role: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Kalimat Dialog (Jepang) *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Contoh: すみません。桜が もう 咲きましたよ。"
                  value={kaiwaDialogForm.japanese}
                  onChange={e => setKaiwaDialogForm({ ...kaiwaDialogForm, japanese: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] japanese-text text-base"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Romaji</label>
                <input
                  type="text"
                  placeholder="Contoh: Sumimasen. Sakura ga mou sakimashita yo."
                  value={kaiwaDialogForm.romaji}
                  onChange={e => setKaiwaDialogForm({ ...kaiwaDialogForm, romaji: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)] font-mono"
                />
              </div>

              <div>
                <label className="block text-[var(--text-secondary)] font-bold mb-1">Arti Bahasa Indonesia *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Contoh: Permisi. Bunga sakura sudah mekar lho."
                  value={kaiwaDialogForm.indonesian}
                  onChange={e => setKaiwaDialogForm({ ...kaiwaDialogForm, indonesian: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/30 text-[var(--text-primary)]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3978D6]/20">
                <button type="button" onClick={() => setIsKaiwaDialogModalOpen(false)} className="px-4 py-2 rounded-xl bg-[var(--bg-sidebar)] text-[var(--text-secondary)]">Batal</button>
                <button type="submit" className="px-5 py-2 rounded-xl neon-btn-primary text-[var(--text-primary)] font-bold">Simpan Baris Dialog</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
