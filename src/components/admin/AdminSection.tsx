import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  LayoutDashboard,
  BookOpen,
  Briefcase,
  FileText,
  Database,
  Users,
  Plus,
  Search,
  Edit3,
  Trash2,
  Download,
  Upload,
  RefreshCw,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  Sparkles,
  Award,
  Layers,
  Save,
  X,
  FileCheck,
  Check,
  Sliders,
  TrendingUp,
  HardDrive,
  Megaphone,
  Bell
} from 'lucide-react';
import { KOTOBA_DATA } from '../../data/kotobaData';
import { KANJI_DATA } from '../../data/kanjiData';
import { SSW_ALL_SECTORS } from '../../data/ssw';
import { 
  applyCustomKotoba, 
  persistKotobaAdd, 
  persistKotobaEdit, 
  persistKotobaDelete, 
  loadKotobaCustomData,
  saveKotobaCustomData,
  resetKotobaCustomData 
} from '../../utils/kotobaStorage';
import { loadAllCustomMateri, resetChapterMateri } from '../../utils/materiStorage';
import { clearLessonCache } from '../../data/materi';
import { AdminMateriManager } from './AdminMateriManager';
import { sound } from '../../utils/audio';
import type { KotobaItem, KotobaCategory, AdminAnnouncement } from '../../types';
import { 
  getAdminAnnouncements, 
  publishAdminAnnouncement, 
  deleteAdminAnnouncement 
} from '../../utils/notificationService';

interface AdminSectionProps {
  onBackToApp: () => void;
  user: any;
  onSyncCloud?: () => void;
  isSyncing?: boolean;
}

export const AdminSection: React.FC<AdminSectionProps> = ({
  onBackToApp,
  user,
  onSyncCloud,
  isSyncing = false
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'overview' | 'materi' | 'kotoba' | 'ssw' | 'cbt' | 'announcements' | 'database'>('overview');

  // Admin Announcements State
  const [announcements, setAnnouncements] = useState<AdminAnnouncement[]>(() => getAdminAnnouncements());
  const [newAnnTitle, setNewAnnTitle] = useState('');
  const [newAnnContent, setNewAnnContent] = useState('');
  const [newAnnTarget, setNewAnnTarget] = useState<'all' | 'user' | 'admin'>('all');
  const [newAnnPublish, setNewAnnPublish] = useState(true);

  const handleCreateAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle.trim() || !newAnnContent.trim()) {
      alert('Mohon isi Judul dan Isi Pengumuman!');
      return;
    }
    sound.playClick();
    publishAdminAnnouncement({
      title: newAnnTitle.trim(),
      content: newAnnContent.trim(),
      targetRole: newAnnTarget,
      published: newAnnPublish,
      author: user?.email || 'Administrator'
    });
    setAnnouncements(getAdminAnnouncements());
    setNewAnnTitle('');
    setNewAnnContent('');
    sound.playCorrect();
    showToast('Pengumuman berhasil dipublikasikan & dikirim ke Notifikasi Pengguna!');
  };

  const handleDeleteAnnouncement = (id: string) => {
    if (confirm('Hapus pengumuman ini?')) {
      sound.playClick();
      deleteAdminAnnouncement(id);
      setAnnouncements(getAdminAnnouncements());
      showToast('Pengumuman dihapus.');
    }
  };

  // Kotoba CMS State
  const [kotobaList, setKotobaList] = useState<KotobaItem[]>(() => applyCustomKotoba(KOTOBA_DATA));
  const [searchKotoba, setSearchKotoba] = useState('');
  const [filterBab, setFilterBab] = useState<number | 'all'>('all');
  
  // Add/Edit Word Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingWord, setEditingWord] = useState<KotobaItem | null>(null);
  const [formData, setFormData] = useState<Partial<KotobaItem>>({
    bab: 1,
    kanji: '',
    kana: '',
    romaji: '',
    arti: '',
    kategori: 'Umum & Ungkapan'
  });

  // SSW Sector Inspector State
  const [selectedSswSector, setSelectedSswSector] = useState(SSW_ALL_SECTORS[0].id);

  // Success / Alert Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtered Kotoba for CMS Table
  const filteredKotoba = useMemo(() => {
    return kotobaList.filter((item) => {
      const matchSearch =
        searchKotoba === '' ||
        item.kanji.toLowerCase().includes(searchKotoba.toLowerCase()) ||
        item.kana.toLowerCase().includes(searchKotoba.toLowerCase()) ||
        item.romaji.toLowerCase().includes(searchKotoba.toLowerCase()) ||
        item.arti.toLowerCase().includes(searchKotoba.toLowerCase());

      const matchBab = filterBab === 'all' || item.bab === filterBab;
      return matchSearch && matchBab;
    });
  }, [kotobaList, searchKotoba, filterBab]);

  // Handle Save Word (Add or Edit)
  const handleSaveWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kanji || !formData.kana || !formData.arti) {
      alert('Mohon isi minimal Kanji, Kana, dan Arti!');
      return;
    }

    if (editingWord) {
      // Edit existing
      const updatedItem: KotobaItem = {
        ...editingWord,
        kanji: formData.kanji,
        kana: formData.kana,
        romaji: formData.romaji || formData.kana,
        arti: formData.arti,
        bab: formData.bab || 1,
        kategori: (formData.kategori as KotobaCategory) || 'Umum & Ungkapan'
      };
      persistKotobaEdit(updatedItem);
      setKotobaList(applyCustomKotoba(KOTOBA_DATA));
      sound.playCorrect();
      showToast(`Kosakata "${updatedItem.kanji}" berhasil diperbarui!`);
      setEditingWord(null);
    } else {
      // Add new
      const newItem: KotobaItem = {
        id: `custom_${Date.now()}`,
        no: kotobaList.length + 1,
        bab: formData.bab || 1,
        kanji: formData.kanji,
        kana: formData.kana,
        romaji: formData.romaji || formData.kana,
        arti: formData.arti,
        kategori: (formData.kategori as KotobaCategory) || 'Umum & Ungkapan'
      };
      persistKotobaAdd(newItem);
      setKotobaList(applyCustomKotoba(KOTOBA_DATA));
      sound.playCorrect();
      showToast(`Kosakata baru "${newItem.kanji}" berhasil ditambahkan ke Bab ${newItem.bab}!`);
      setIsAddModalOpen(false);
    }

    setFormData({
      bab: 1,
      kanji: '',
      kana: '',
      romaji: '',
      arti: '',
      kategori: 'Umum & Ungkapan'
    });
  };

  // Handle Delete Word
  const handleDeleteWord = (item: KotobaItem) => {
    if (confirm(`Yakin ingin menghapus kosakata "${item.kanji} (${item.arti})"?`)) {
      persistKotobaDelete(item.id);
      setKotobaList(applyCustomKotoba(KOTOBA_DATA));
      sound.playClick();
      showToast(`Kosakata "${item.kanji}" berhasil dihapus.`);
    }
  };

  // Export Database as JSON
  const handleExportBackup = () => {
    sound.playClick();
    const custom = loadKotobaCustomData();
    const customMateri = loadAllCustomMateri();
    const backupObj = {
      exportDate: new Date().toISOString(),
      version: '1.1',
      system: 'ZENORA Midnight Japan CMS',
      customKotoba: custom,
      customMateri: customMateri,
      stats: localStorage.getItem('zenora_stats_v1'),
      sswProgress: localStorage.getItem('zenora_ssw_progress_v1')
    };
    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zenora_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast('Cadangan database JSON berhasil diunduh!');
  };

  return (
    <div className="space-y-8 text-left pb-24 font-['Plus_Jakarta_Sans',sans-serif] animate-fade-in">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. EXECUTIVE ADMIN HEADER
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="relative overflow-hidden rounded-3xl border border-[#3978D6]/35 shadow-[0_20px_60px_-15px_rgba(8, 21, 47,0.95)] bg-gradient-to-br from-[#08152F] via-[#111F38] to-[#172945] p-6 sm:p-8">
        
        {/* Ambient Glow */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#3978D6]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#69C9DF]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#3978D6]/20 border border-[#3978D6]/40 text-[#DCEBFA] text-xs font-black uppercase tracking-wider font-mono flex items-center gap-1.5 shadow-[0_0_12px_rgba(57, 120, 214,0.3)]">
                <ShieldCheck className="w-4 h-4 text-[#3978D6]" />
                ZENORA Executive CMS · Console Administrator
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                Live Production
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white font-['Manrope'] tracking-tight flex items-center gap-3">
              Panel Pengelola Sistem & Konten
            </h1>

            <p className="text-xs sm:text-sm text-[#A9BBD3] max-w-2xl leading-relaxed">
              Pusat kontrol terpadu materi Minna no Nihongo, 6 Sektor Tokutei Ginou SSW, bank soal ujian CBT, dan cadangan database.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => { sound.playClick(); onBackToApp(); }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#08152F] hover:bg-[#172945] border border-[#3978D6]/30 text-[#A9BBD3] hover:text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#3978D6]" />
              <span>Kembali ke Mode Siswa</span>
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="mt-8 pt-4 border-t border-[#3978D6]/20 flex flex-wrap gap-2">
          {[
            { id: 'overview', label: 'Ringkasan & Metrik', icon: LayoutDashboard },
            { id: 'materi', label: 'Kelola Materi (Bunpou, Bunkei, Reibun, Kaiwa)', icon: BookOpen },
            { id: 'kotoba', label: 'Kelola Kosakata (Kotoba)', icon: Layers },
            { id: 'ssw', label: 'Kurikulum SSW (6 Sektor)', icon: Briefcase },
            { id: 'cbt', label: 'Bank Soal Ujian CBT', icon: FileCheck },
            { id: 'announcements', label: 'Pusat Pengumuman & Notifikasi', icon: Megaphone },
            { id: 'database', label: 'Database & Cadangan', icon: HardDrive }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeAdminTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { sound.playClick(); setActiveAdminTab(tab.id as any); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/40 shadow-[0_0_20px_rgba(57, 120, 214,0.45)]'
                    : 'bg-[#111F38] hover:bg-[#172945] text-[#A9BBD3] hover:text-white border border-[#3978D6]/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#3978D6]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-[#111F38] border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold shadow-2xl flex items-center gap-2 animate-slide-up">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB 1: OVERVIEW & PLATFORM METRICS
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'overview' && (
        <div className="space-y-6">
          
          {/* Key Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-2 card-interactive">
              <span className="text-[11px] font-mono font-bold text-[#7186A5] uppercase">Total Kosakata</span>
              <span className="text-3xl font-black text-white font-['Manrope'] block">
                {kotobaList.length.toLocaleString()}
              </span>
              <p className="text-xs text-[#A9BBD3]">Minna no Nihongo Bab 1–50</p>
            </div>

            <div className="p-5 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-2 card-interactive">
              <span className="text-[11px] font-mono font-bold text-[#7186A5] uppercase">Total Kanji Interaktif</span>
              <span className="text-3xl font-black text-[#69C9DF] font-['Manrope'] block">
                {KANJI_DATA.length}
              </span>
              <p className="text-xs text-[#A9BBD3]">Kanji N5 & N4 dengan coretan</p>
            </div>

            <div className="p-5 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-2 card-interactive">
              <span className="text-[11px] font-mono font-bold text-[#7186A5] uppercase">Sektor Industri SSW</span>
              <span className="text-3xl font-black text-[#45C6A5] font-['Manrope'] block">
                {SSW_ALL_SECTORS.length} Sektor
              </span>
              <p className="text-xs text-[#A9BBD3]">30 Bab Kurikulum Terakreditasi</p>
            </div>

            <div className="p-5 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-2 card-interactive">
              <span className="text-[11px] font-mono font-bold text-[#7186A5] uppercase">Status Cloud Supabase</span>
              <span className="text-xl font-black text-[#E9BD72] font-['Manrope'] block pt-1">
                {user ? 'Tersambung' : 'Mode Offline'}
              </span>
              <p className="text-xs text-[#A9BBD3]">
                {user ? user.email : 'Belum login admin cloud'}
              </p>
            </div>

          </div>

          {/* Quick CMS Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div 
              onClick={() => { sound.playClick(); setActiveAdminTab('materi'); }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#111F38] to-[#172945] border border-[#3978D6]/40 cursor-pointer card-interactive flex flex-col justify-between shadow-[0_0_20px_rgba(57, 120, 214,0.15)]"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#08152F] border border-[#3978D6]/40 flex items-center justify-center text-[#3978D6]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white font-['Manrope']">Kelola Materi Bab 1–50</h3>
                <p className="text-xs text-[#A9BBD3] leading-relaxed">
                  Kelola Bunpou (Tata Bahasa), Bunkei (Pola Kalimat), Reibun (Contoh), dan Kaiwa (Percakapan).
                </p>
              </div>
              <span className="text-xs font-bold text-[#2456A6] pt-4 block">Buka Editor Materi →</span>
            </div>

            <div 
              onClick={() => { sound.playClick(); setIsAddModalOpen(true); }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#111F38] to-[#172945] border border-[#3978D6]/30 cursor-pointer card-interactive flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#08152F] border border-[#3978D6]/30 flex items-center justify-center text-[#3978D6]">
                  <Plus className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white font-['Manrope']">Tambah Kosakata Baru</h3>
                <p className="text-xs text-[#A9BBD3] leading-relaxed">
                  Tambahkan entri kosakata Minna baru lengkap dengan kanji, furigana, romaji, dan terjemahan Indonesia.
                </p>
              </div>
              <span className="text-xs font-bold text-[#2456A6] pt-4 block">Buka Formulir Tambah →</span>
            </div>

            <div 
              onClick={() => { sound.playClick(); setActiveAdminTab('cbt'); }}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#111F38] to-[#172945] border border-[#69C9DF]/30 cursor-pointer card-interactive flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#08152F] border border-[#69C9DF]/30 flex items-center justify-center text-[#69C9DF]">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white font-['Manrope']">Kelola Bank Soal CBT</h3>
                <p className="text-xs text-[#A9BBD3] leading-relaxed">
                  Kelola paket latihan soal JLPT N5, JLPT N4, JFT-Basic A2, dan Ujian Keahlian Tokutei Ginou.
                </p>
              </div>
              <span className="text-xs font-bold text-[#69C9DF] pt-4 block">Buka Bank Soal →</span>
            </div>

            <div 
              onClick={handleExportBackup}
              className="p-6 rounded-3xl bg-gradient-to-br from-[#111F38] to-[#172945] border border-emerald-500/30 cursor-pointer card-interactive flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#08152F] border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-white font-['Manrope']">Cadangkan Database</h3>
                <p className="text-xs text-[#A9BBD3] leading-relaxed">
                  Unduh seluruh snapshot kosakata kustom, progres materi, dan riwayat belajar ke dalam berkas JSON.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 pt-4 block">Unduh Berkas JSON →</span>
            </div>

          </div>

        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB: KELOLA MATERI BAB 1-50 (BUNPOU, BUNKEI, REIBUN, KAIWA)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'materi' && (
        <AdminMateriManager onShowToast={showToast} />
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB 2: KELOLA KOSAKATA & BAB (CMS KOTOBA)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'kotoba' && (
        <div className="space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-[#111F38] border border-[#3978D6]/25">
            
            <div className="flex flex-wrap items-center gap-3 flex-1">
              {/* Search input */}
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 text-[#3978D6] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchKotoba}
                  onChange={(e) => setSearchKotoba(e.target.value)}
                  placeholder="Cari kanji, kana, romaji, arti..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#08152F] border border-[#3978D6]/25 text-xs sm:text-sm text-white placeholder-[#7186A5] focus:outline-hidden focus:border-[#3978D6]"
                />
              </div>

              {/* Bab filter */}
              <select
                value={filterBab}
                onChange={(e) => setFilterBab(e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10))}
                className="px-3.5 py-2.5 rounded-2xl bg-[#08152F] border border-[#3978D6]/25 text-xs text-white focus:outline-hidden"
              >
                <option value="all">Semua Bab (1–50)</option>
                {Array.from({ length: 50 }, (_, i) => i + 1).map((b) => (
                  <option key={b} value={b}>Bab {b}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => {
                setEditingWord(null);
                setFormData({ bab: typeof filterBab === 'number' ? filterBab : 1, kanji: '', kana: '', romaji: '', arti: '', kategori: 'Umum & Ungkapan' });
                setIsAddModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-2xl neon-btn-primary text-white text-xs font-black shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah Kata</span>
            </button>

          </div>

          {/* Kotoba Table */}
          <div className="rounded-3xl bg-[#111F38] border border-[#3978D6]/25 overflow-hidden shadow-lg">
            <div className="p-4 bg-[#08152F] border-b border-[#3978D6]/20 flex items-center justify-between text-xs font-bold text-[#A9BBD3]">
              <span>Menampilkan {filteredKotoba.length} kata</span>
              <span>Total kosakata terdaftar: {kotobaList.length}</span>
            </div>

            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#08152F]/90 text-[#3978D6] uppercase font-mono tracking-wider sticky top-0 z-10 border-b border-[#3978D6]/20">
                  <tr>
                    <th className="p-4">Bab</th>
                    <th className="p-4">Kanji</th>
                    <th className="p-4">Kana / Romaji</th>
                    <th className="p-4">Arti Indonesia</th>
                    <th className="p-4">Kategori</th>
                    <th className="p-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3978D6]/15">
                  {filteredKotoba.slice(0, 100).map((item) => (
                    <tr key={item.id} className="hover:bg-[#172945]/50 transition-colors">
                      <td className="p-4 font-mono font-bold text-[#DCEBFA]">#{item.bab}</td>
                      <td className="p-4 font-bold text-white text-lg japanese-text">{item.kanji}</td>
                      <td className="p-4 text-[#A9BBD3]">
                        <span className="block text-white font-medium">{item.kana}</span>
                        <span className="font-mono text-[10px] text-[#7186A5]">{item.romaji}</span>
                      </td>
                      <td className="p-4 text-[#F2F6FC] font-medium max-w-xs">{item.arti}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-md bg-[#08152F] border border-[#3978D6]/25 text-[10px] font-bold text-[#69C9DF]">
                          {item.kategori}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => {
                              setEditingWord(item);
                              setFormData(item);
                              setIsAddModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg bg-[#08152F] hover:bg-[#3978D6] text-[#A9BBD3] hover:text-white transition-colors"
                            title="Edit Kata"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteWord(item)}
                            className="p-1.5 rounded-lg bg-[#08152F] hover:bg-rose-500 text-[#A9BBD3] hover:text-white transition-colors"
                            title="Hapus Kata"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB 3: KURIKULUM SSW (6 SEKTOR TOKUTEI GINOU)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'ssw' && (
        <div className="space-y-6">
          
          {/* Sector Selector Pills */}
          <div className="flex flex-wrap gap-2.5 p-4 rounded-3xl bg-[#111F38] border border-[#3978D6]/25">
            {SSW_ALL_SECTORS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setSelectedSswSector(sec.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                  selectedSswSector === sec.id
                    ? 'bg-[#3978D6] text-white shadow-md'
                    : 'bg-[#08152F] text-[#A9BBD3] hover:text-white border border-[#3978D6]/20'
                }`}
              >
                {sec.japaneseName} · {sec.name}
              </button>
            ))}
          </div>

          {/* Sector Content Inspector */}
          {(() => {
            const sec = SSW_ALL_SECTORS.find(s => s.id === selectedSswSector) || SSW_ALL_SECTORS[0];
            return (
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-black text-white font-['Manrope']">{sec.japaneseName} ({sec.name})</h2>
                      <p className="text-xs text-[#A9BBD3] mt-1">{sec.overview.workEnvironment}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#172945] border border-[#3978D6]/30 text-xs font-bold text-[#DCEBFA]">
                      {sec.chapters.length} Bab Kurikulum
                    </span>
                  </div>

                  {/* Chapters List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#3978D6]/15">
                    {sec.chapters.map((ch) => (
                      <div key={ch.id} className="p-4 rounded-2xl bg-[#08152F] border border-[#3978D6]/20 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#3978D6] uppercase">Bab {ch.chapterNumber} · {ch.category}</span>
                          <span className="text-[10px] text-[#7186A5]">~{ch.estimatedMinutes} menit</span>
                        </div>
                        <h4 className="text-sm font-bold text-white">{ch.title}</h4>
                        <p className="text-xs text-[#7186A5] japanese-text font-mono">{ch.japaneseTitle}</p>
                        <p className="text-xs text-[#A9BBD3] line-clamp-2 pt-1">{ch.summary}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB 4: BANK SOAL UJIAN CBT
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'cbt' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-white font-['Manrope']">Manajemen Bank Soal Ujian Komputer (CBT)</h3>
                <p className="text-xs text-[#A9BBD3]">Kelola pertanyaan simulasi JFT-Basic A2, JLPT N4, dan Skill Test Sektor SSW</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                Status CBT: Aktif
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#08152F] border border-[#3978D6]/20 space-y-2">
                <span className="text-xs font-bold text-white block">Paket JFT-Basic A2</span>
                <p className="text-xs text-[#7186A5]">Standar bahasa kerja The Japan Foundation (Passing score 200/250).</p>
                <span className="text-[10px] font-mono text-[#45C6A5] font-bold block pt-2">✓ 60 Soal Tersedia</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#08152F] border border-[#3978D6]/20 space-y-2">
                <span className="text-xs font-bold text-white block">Paket JLPT N4</span>
                <p className="text-xs text-[#7186A5]">Soal Moji-Goi, Bunpou-Dokkai, dan Choukai terstandarisasi.</p>
                <span className="text-[10px] font-mono text-[#45C6A5] font-bold block pt-2">✓ 45 Soal Tersedia</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#08152F] border border-[#3978D6]/20 space-y-2">
                <span className="text-xs font-bold text-white block">Skill Test Sektor SSW</span>
                <p className="text-xs text-[#7186A5]">Soal bergambar evaluasi keahlian teknis (OTAFF & Prometric).</p>
                <span className="text-[10px] font-mono text-[#45C6A5] font-bold block pt-2">✓ 6 Sektor Terintegrasi</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB 5: PUSAT PENGUMUMAN & NOTIFIKASI ADMIN
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'announcements' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-[#111F38] border border-[#263D60] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#263D60]">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#2456A6]/20 border border-[#3978D6]/40 text-[#83B7EE]">
                  <Megaphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#F2F6FC] font-['Manrope']">Kelola Pengumuman & Notifikasi Pengguna</h3>
                  <p className="text-xs text-[#A9BBD3]">
                    Publikasikan pengumuman resmi yang akan langsung dikirimkan ke lonceng notifikasi seluruh pengguna
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#3978D6]/20 border border-[#3978D6]/40 text-[#83B7EE] text-xs font-bold font-mono">
                {announcements.length} Pengumuman Aktif
              </span>
            </div>

            {/* Create Announcement Form */}
            <form onSubmit={handleCreateAnnouncement} className="p-5 rounded-2xl bg-[#08152F] border border-[#263D60] space-y-4">
              <h4 className="text-sm font-bold text-[#F2F6FC] flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#3978D6]" />
                Buat Pengumuman Baru
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold text-[#A9BBD3]">Judul Pengumuman</label>
                  <input
                    type="text"
                    value={newAnnTitle}
                    onChange={(e) => setNewAnnTitle(e.target.value)}
                    placeholder="Contoh: Jadwal Ujian Tryout JLPT & Update Materi Bab 26"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F38] border border-[#263D60] text-sm text-[#F2F6FC] focus:border-[#3978D6]"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[#A9BBD3]">Target Penerima</label>
                  <select
                    value={newAnnTarget}
                    onChange={(e) => setNewAnnTarget(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F38] border border-[#263D60] text-sm text-[#F2F6FC] focus:border-[#3978D6]"
                  >
                    <option value="all">Semua Pengguna & Tamu</option>
                    <option value="user">Pengguna Terdaftar</option>
                    <option value="admin">Internal Admin</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#A9BBD3]">Isi Pengumuman / Pesan</label>
                <textarea
                  value={newAnnContent}
                  onChange={(e) => setNewAnnContent(e.target.value)}
                  placeholder="Tuliskan isi pengumuman lengkap di sini. Pesan akan tampil di pusat notifikasi pengguna..."
                  rows={3}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111F38] border border-[#263D60] text-sm text-[#F2F6FC] focus:border-[#3978D6]"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-[#A9BBD3]">
                  <input
                    type="checkbox"
                    checked={newAnnPublish}
                    onChange={(e) => setNewAnnPublish(e.target.checked)}
                    className="rounded border-[#263D60] text-[#3978D6]"
                  />
                  <span>Kirim dan publikasikan seketika (Broadcast Live)</span>
                </label>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-[0_0_15px_rgba(36,86,166,0.4)] hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Megaphone className="w-4 h-4" />
                  <span>Kirim Notifikasi Pengumuman</span>
                </button>
              </div>
            </form>

            {/* Existing Announcements List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-[#F2F6FC] flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#83B7EE]" />
                Daftar Riwayat Pengumuman
              </h4>

              {announcements.length === 0 ? (
                <div className="py-8 text-center bg-[#08152F] rounded-2xl border border-[#263D60]">
                  <p className="text-xs text-[#7186A5]">Belum ada pengumuman yang dibuat oleh Admin.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {announcements.map((ann) => (
                    <div
                      key={ann.id}
                      className="p-4 rounded-2xl bg-[#08152F] border border-[#263D60] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#3978D6]/40 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-bold text-[#F2F6FC]">{ann.title}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            ann.published
                              ? 'bg-[#45C6A5]/15 text-[#45C6A5] border border-[#45C6A5]/30'
                              : 'bg-[#7186A5]/15 text-[#7186A5]'
                          }`}>
                            {ann.published ? 'Dipublikasikan' : 'Draf'}
                          </span>
                          <span className="text-[10px] text-[#7186A5] font-mono">
                            Target: {ann.targetRole}
                          </span>
                        </div>
                        <p className="text-xs text-[#A9BBD3] line-clamp-2">{ann.content}</p>
                        <p className="text-[10px] text-[#7186A5]">
                          Oleh {ann.author} · {new Date(ann.createdAt).toLocaleString('id-ID')}
                        </p>
                      </div>

                      <button
                        onClick={() => handleDeleteAnnouncement(ann.id)}
                        className="p-2 rounded-xl text-[#7186A5] hover:text-rose-400 hover:bg-[#111F38] transition-colors self-end sm:self-center cursor-pointer"
                        title="Hapus pengumuman"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TAB 6: DATABASE & CADANGAN (BACKUP & RESTORE)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {activeAdminTab === 'database' && (
        <div className="space-y-6">
          <div className="p-6 rounded-3xl bg-[#111F38] border border-[#3978D6]/25 space-y-6">
            <div>
              <h3 className="text-lg font-black text-white font-['Manrope']">Pusat Cadangan & Pemulihan Sistem</h3>
              <p className="text-xs text-[#A9BBD3]">Kelola arsip data kustom dan pembersihan cache lokal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="p-5 rounded-2xl bg-[#08152F] border border-[#3978D6]/20 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#3978D6]" />
                  Unduh Salinan Cadangan (Export Backup)
                </h4>
                <p className="text-xs text-[#A9BBD3] leading-relaxed">
                  Simpan seluruh kosakata kustom, perubahan materi, dan riwayat belajar ke dalam satu berkas format JSON untuk diarsipkan.
                </p>
                <button
                  onClick={handleExportBackup}
                  className="px-4 py-2.5 rounded-xl bg-[#3978D6] hover:bg-[#2456A6] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Ekspor Berkas Cadangan (.JSON)
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-[#08152F] border border-rose-500/20 space-y-3">
                <h4 className="text-sm font-bold text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  Reset Kustomisasi ke Data Bawaan
                </h4>
                <p className="text-xs text-[#A9BBD3] leading-relaxed">
                  Menghapus semua kustomisasi materi (Bunpou, Bunkei, Reibun, Kaiwa) dan kosakata yang ditambahkan atau diedit oleh admin lokal, mengembalikan daftar data murni Minna no Nihongo.
                </p>
                <button
                  onClick={() => {
                    if (confirm('PERINGATAN: Seluruh materi dan kosakata kustom yang ditambahkan atau diedit akan dikembalikan ke bawaan! Lanjutkan?')) {
                      resetKotobaCustomData();
                      resetChapterMateri();
                      clearLessonCache();
                      setKotobaList(applyCustomKotoba(KOTOBA_DATA));
                      showToast('Database kustom (Materi & Kosakata) berhasil direset ke setelan awal.');
                    }
                  }}
                  className="px-4 py-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 hover:bg-rose-500 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  Reset Data Kustom
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL: TAMBAH / EDIT KOSAKATA
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isAddModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-[#111F38] border border-[#3978D6]/40 p-6 sm:p-8 space-y-5 shadow-2xl animate-modal-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#3978D6]/20">
              <h3 className="text-lg font-black text-white font-['Manrope']">
                {editingWord ? 'Edit Kosakata' : 'Tambah Kosakata Baru'}
              </h3>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="p-1.5 rounded-xl text-[#7186A5] hover:text-white hover:bg-[#08152F]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveWord} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#A9BBD3] font-bold mb-1">Bab Minna no Nihongo</label>
                  <select
                    value={formData.bab}
                    onChange={(e) => setFormData({ ...formData, bab: parseInt(e.target.value, 10) })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white focus:outline-hidden"
                  >
                    {Array.from({ length: 50 }, (_, i) => i + 1).map((b) => (
                      <option key={b} value={b}>Bab {b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#A9BBD3] font-bold mb-1">Kategori Kata</label>
                  <select
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value as KotobaCategory })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white focus:outline-hidden"
                  >
                    {[
                      'Kata Kerja', 'Kata Sifat', 'Waktu & Angka', 
                      'Makanan & Minuman', 'Tubuh & Kesehatan', 
                      'Orang & Keluarga', 'Tempat & Arah', 'Umum & Ungkapan'
                    ].map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#A9BBD3] font-bold mb-1">Kanji (atau Kana jika tanpa kanji) *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 食べる, 日本語, 本"
                  value={formData.kanji || ''}
                  onChange={(e) => setFormData({ ...formData, kanji: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white text-base japanese-text focus:outline-hidden focus:border-[#3978D6]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#A9BBD3] font-bold mb-1">Bacaan Kana (Hiragana/Katakana) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: たべる"
                    value={formData.kana || ''}
                    onChange={(e) => setFormData({ ...formData, kana: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white focus:outline-hidden focus:border-[#3978D6]"
                  />
                </div>

                <div>
                  <label className="block text-[#A9BBD3] font-bold mb-1">Romaji</label>
                  <input
                    type="text"
                    placeholder="Contoh: taberu"
                    value={formData.romaji || ''}
                    onChange={(e) => setFormData({ ...formData, romaji: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white focus:outline-hidden focus:border-[#3978D6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#A9BBD3] font-bold mb-1">Arti Bahasa Indonesia *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Makan, mengonsumsi makanan"
                  value={formData.arti || ''}
                  onChange={(e) => setFormData({ ...formData, arti: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#08152F] border border-[#3978D6]/30 text-white focus:outline-hidden focus:border-[#3978D6]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3978D6]/20">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#08152F] text-[#A9BBD3] hover:text-white"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl neon-btn-primary text-white font-bold shadow-md cursor-pointer"
                >
                  Simpan Kosakata
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
