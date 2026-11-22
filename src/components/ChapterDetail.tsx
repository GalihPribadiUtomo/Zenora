import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Volume2, 
  CheckCircle2, 
  Star, 
  Layers, 
  List, 
  LayoutGrid, 
  Award,
  Search,
  BookOpen,
  Pencil,
  Trash2
} from 'lucide-react';
import { KotobaItem } from '../types';
import { speakJapanese, sound } from '../utils/audio';
import { KotobaModal } from './KotobaModal';
import { KotobaEditModal } from './KotobaEditModal';
import { KotobaDeleteModal } from './KotobaDeleteModal';
import { persistKotobaEdit, persistKotobaDelete, applyCustomKotoba } from '../utils/kotobaStorage';

interface ChapterDetailProps {
  bab: number;
  onBack: () => void;
  onSelectChapter: (bab: number) => void;
  allKotoba: KotobaItem[];
  learnedKotobaIds: string[];
  bookmarkedKotobaIds: string[];
  onToggleLearned: (id: string) => void;
  onToggleBookmark: (id: string) => void;
  onStartQuiz: (bab: number) => void;
}

export const ChapterDetail: React.FC<ChapterDetailProps> = ({
  bab,
  onBack,
  onSelectChapter,
  allKotoba,
  learnedKotobaIds,
  bookmarkedKotobaIds,
  onToggleLearned,
  onToggleBookmark,
  onStartQuiz
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'table' | 'flashcard'>('card');
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedKotobaModal, setSelectedKotobaModal] = useState<KotobaItem | null>(null);

  // Local state with user edits and deletes applied
  const [localKotoba, setLocalKotoba] = useState<KotobaItem[]>(() => applyCustomKotoba(allKotoba));
  const [editingWord, setEditingWord] = useState<KotobaItem | null>(null);
  const [deletingWord, setDeletingWord] = useState<KotobaItem | null>(null);

  useEffect(() => {
    setLocalKotoba(applyCustomKotoba(allKotoba));
  }, [allKotoba]);

  const handleSaveEdit = (updated: KotobaItem) => {
    persistKotobaEdit(updated);
    setLocalKotoba(applyCustomKotoba(allKotoba));
  };

  const handleConfirmDelete = (id: string) => {
    persistKotobaDelete(id);
    setLocalKotoba(applyCustomKotoba(allKotoba));
  };

  // Filter kotoba for this chapter
  const chapterWords = localKotoba.filter(k => k.bab === bab);

  // Categories present in this chapter
  const categoriesInChapter = Array.from(new Set(chapterWords.map(k => k.kategori)));

  // Filtered by category & search query
  const filteredWords = chapterWords.filter(word => {
    const matchesCat = selectedCategory === 'Semua' || word.kategori === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      word.kanji.toLowerCase().includes(q) ||
      word.kana.toLowerCase().includes(q) ||
      word.romaji.toLowerCase().includes(q) ||
      word.arti.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const learnedCount = chapterWords.filter(k => learnedKotobaIds.includes(k.id)).length;

  const currentFlashcard = filteredWords[flashcardIndex] || filteredWords[0];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev + 1) % filteredWords.length);
  };

  const handlePrevFlashcard = () => {
    setIsFlipped(false);
    setFlashcardIndex(prev => (prev - 1 + filteredWords.length) % filteredWords.length);
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Top Navigation Row */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D1830] hover:bg-white/8 text-[#DCE9FF] text-sm font-bold border border-[#2457C5]/25 shadow-xs hover:border-[#55B9F5] transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-[#2457C5]" />
          <span>Semua Bab</span>
        </button>

        <div className="flex items-center gap-2">
          {bab > 1 && (
            <button
              onClick={() => onSelectChapter(bab - 1)}
              className="px-3.5 py-2 rounded-xl bg-[#0D1830] hover:bg-white/8 text-[#6B85B5] hover:text-[#DCE9FF] text-xs font-bold border border-[#2457C5]/25 shadow-xs transition-colors"
            >
              ← Bab {bab - 1}
            </button>
          )}

          <button
            onClick={() => onStartQuiz(bab)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white text-xs sm:text-sm font-bold shadow-sm shadow-[#101C3D]/20 transition-all active:scale-95"
          >
            <Award className="w-4 h-4 text-[#55B9F5]" />
            <span>Latihan Bab Ini</span>
          </button>

          {bab < 50 && (
            <button
              onClick={() => onSelectChapter(bab + 1)}
              className="px-3.5 py-2 rounded-xl bg-[#101C3D] hover:bg-[#2457C5] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Bab {bab + 1} →</span>
            </button>
          )}
        </div>
      </div>

      {/* Chapter Title & Header info */}
      <div className="relative overflow-hidden rounded-3xl border border-[#2457C5]/40 shadow-[0_20px_60px_-15px_rgba(16,28,61,0.8)] bg-gradient-to-br from-[#101C3D] via-[#0D1830] to-[#080F20] p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1830]/8 border border-[#55B9F5]/30 text-[#55B9F5] text-xs font-black uppercase tracking-wider mb-2 font-mono">
              Minna no Nihongo {bab <= 25 ? 'I' : 'II'}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#DCE9FF] tracking-tight font-['Manrope']">
              第{bab}課 · Bab {bab}
            </h1>
            <p className="text-sm font-semibold text-[#6B85B5] mt-1">
              {chapterWords.length} kosakata · {categoriesInChapter.length} kategori tematik · {learnedCount} telah dihafal
            </p>
          </div>

          {/* Chapter completion pill */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-[#6B85B5] font-bold block">Status Hafal</span>
              <span className="text-xl font-black text-[#DCE9FF] font-['Manrope']">
                {learnedCount} / {chapterWords.length}
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#0D1830]/8 border border-[#2457C5]/30 flex items-center justify-center font-black text-[#55B9F5] text-sm shadow-xs font-['Manrope']">
              {chapterWords.length > 0 ? Math.round((learnedCount / chapterWords.length) * 100) : 0}%
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#2457C5]/25">
          <button
            onClick={() => setSelectedCategory('Semua')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'Semua'
                ? 'bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white shadow-xs'
                : 'bg-[#0D1830] hover:bg-white/8 text-[#6B85B5] border border-[#2457C5]/25'
            }`}
          >
            Semua {chapterWords.length}
          </button>

          {categoriesInChapter.map(cat => {
            const count = chapterWords.filter(k => k.kategori === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white shadow-xs'
                    : 'bg-[#0D1830] hover:bg-white/8 text-[#6B85B5] border border-[#2457C5]/25'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#55B9F5]"></span>
                <span>{cat}</span>
                <span className="opacity-75 text-[10px] font-mono ml-0.5">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Control bar: Search + View Modes */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#6B85B5] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari di bab ini (Jepang, romaji, arti)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0D1830] border border-[#2457C5]/30 text-sm text-[#DCE9FF] placeholder-[#4A5B82]/60 focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5] shadow-2xs transition-all"
          />
        </div>

        {/* View Switcher (Kartu, Daftar, Mode Hafalan) */}
        <div className="flex items-center p-1 bg-white/8 rounded-2xl border border-[#2457C5]/25 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('card')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'card'
                ? 'bg-[#0D1830] text-[#DCE9FF] shadow-xs'
                : 'text-[#6B85B5] hover:text-[#DCE9FF]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#2457C5]" />
            <span>Kartu</span>
          </button>

          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-[#0D1830] text-[#DCE9FF] shadow-xs'
                : 'text-[#6B85B5] hover:text-[#DCE9FF]'
            }`}
          >
            <List className="w-3.5 h-3.5 text-[#2457C5]" />
            <span>Daftar</span>
          </button>

          <button
            onClick={() => setViewMode('flashcard')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'flashcard'
                ? 'bg-[#0D1830] text-[#DCE9FF] shadow-xs'
                : 'text-[#6B85B5] hover:text-[#DCE9FF]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#2457C5]" />
            <span>Mode Hafalan</span>
          </button>
        </div>

      </div>

      {/* VIEW 1: KARTU GRID */}
      {viewMode === 'card' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredWords.map((word) => {
            const isLearned = learnedKotobaIds.includes(word.id);
            const isBookmarked = bookmarkedKotobaIds.includes(word.id);

            return (
              <div
                key={word.id}
                onClick={() => setSelectedKotobaModal(word)}
                className={`card-soft p-5 rounded-3xl border transition-all flex flex-col justify-between cursor-pointer hover:shadow-md hover:border-[#55B9F5] group ${
                  isLearned ? 'border-emerald-500/30 bg-emerald-500/8' : 'border-[#2457C5]/25 bg-[#0D1830]'
                }`}
              >
                <div>
                  {/* Top Bar inside Card: Audio & Actions */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakJapanese(word.kana || word.kanji);
                      }}
                      className="p-1.5 rounded-lg bg-white/8 hover:bg-[#2457C5]/15 hover:text-[#DCE9FF] text-[#6B85B5] transition-colors border border-[#2457C5]/25"
                      title="Dengarkan pelafalan audio"
                    >
                      <Volume2 className="w-4 h-4 text-[#2457C5]" />
                    </button>

                    <div className="flex items-center gap-1">
                      {/* Edit Kosakata Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingWord(word);
                        }}
                        className="p-1.5 rounded-lg bg-white/8 hover:bg-[#2457C5]/15 text-[#2457C5] transition-colors border border-[#2457C5]/25"
                        title="Edit Kosakata (Kanji, Kana, Romaji, Arti, Kategori)"
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>

                      {/* Hapus Kosakata Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDeletingWord(word);
                        }}
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-colors border border-red-200/50"
                        title="Hapus Kosakata"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(word.id);
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isBookmarked
                            ? 'text-amber-500 fill-amber-400 bg-amber-50 border border-amber-200'
                            : 'text-slate-300 hover:text-amber-500'
                        }`}
                        title="Simpan ke favorit"
                      >
                        <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleLearned(word.id);
                          if (!isLearned) sound.playCorrect();
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isLearned
                            ? 'text-emerald-600 bg-emerald-50 border border-emerald-200'
                            : 'text-slate-300 hover:text-emerald-500'
                        }`}
                        title={isLearned ? 'Sudah dihafal' : 'Tandai sudah hafal'}
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Japanese Word Header */}
                  <div className="mb-2">
                    <span className="kanji-font text-2xl font-black text-[#DCE9FF] block tracking-tight group-hover:text-[#55B9F5] transition-colors">
                      {word.kanji}
                    </span>
                    <span className="text-xs font-bold text-[#2457C5] block mt-0.5">
                      {word.kana}
                    </span>
                  </div>

                  {/* Romaji */}
                  <p className="text-xs font-mono text-[#6B85B5] mb-2">
                    {word.romaji}
                  </p>

                  {/* Indonesian Translation */}
                  <p className="text-sm font-bold text-[#DCE9FF] leading-snug">
                    {word.arti}
                  </p>
                </div>

                {/* Bottom Row: Category & 4 Sentences Trigger */}
                <div className="mt-4 pt-3 border-t border-[#2457C5]/25 flex items-center justify-between gap-2">
                  <span className="inline-block text-[11px] font-bold text-[#2457C5] bg-white/8 px-2 py-0.5 rounded-lg border border-[#2457C5]/25">
                    {word.kategori}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedKotobaModal(word);
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-white/8 hover:bg-gradient-to-r hover:from-[#101C3D] hover:to-[#2457C5] text-[#DCE9FF] hover:text-white border border-[#2457C5]/25 hover:border-transparent text-xs font-bold transition-all shadow-2xs"
                    title="Lihat 4 Contoh Kalimat Lengkap"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>4 Kalimat</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: TABULAR LIST */}
      {viewMode === 'table' && (
        <div className="card-soft rounded-3xl overflow-hidden border border-[#2457C5]/25 bg-[#0D1830]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/8 text-[#6B85B5] text-xs uppercase tracking-wider border-b border-[#2457C5]/25">
                <tr>
                  <th className="py-3.5 px-4 w-12 text-center font-bold">No</th>
                  <th className="py-3.5 px-4 w-12 font-bold">Audio</th>
                  <th className="py-3.5 px-4 font-bold">Kanji / Jepang</th>
                  <th className="py-3.5 px-4 font-bold">Kana (Furigana)</th>
                  <th className="py-3.5 px-4 font-bold">Romaji</th>
                  <th className="py-3.5 px-4 font-bold">Arti (Bahasa Indonesia)</th>
                  <th className="py-3.5 px-4 font-bold">Kategori</th>
                  <th className="py-3.5 px-4 text-center font-bold">4 Kalimat</th>
                  <th className="py-3.5 px-4 text-center w-20 font-bold">Hafal</th>
                  <th className="py-3.5 px-4 text-center w-20 font-bold">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D2E2FC]">
                {filteredWords.map((word, idx) => {
                  const isLearned = learnedKotobaIds.includes(word.id);
                  return (
                    <tr 
                      key={word.id} 
                      className={`hover:bg-white/8/60 transition-colors ${
                        isLearned ? 'bg-emerald-50/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-center text-xs font-mono text-[#6B85B5]">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => speakJapanese(word.kana || word.kanji)}
                          className="p-1 rounded-md text-[#6B85B5] hover:text-[#DCE9FF] hover:bg-white/8 transition-colors"
                        >
                          <Volume2 className="w-4 h-4 text-[#2457C5]" />
                        </button>
                      </td>
                      <td className="py-3 px-4 kanji-font text-base font-bold text-[#DCE9FF]">
                        {word.kanji}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-[#2457C5]">
                        {word.kana}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-[#6B85B5]">
                        {word.romaji}
                      </td>
                      <td className="py-3 px-4 font-medium text-[#DCE9FF]">
                        {word.arti}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[11px] font-bold text-[#2457C5] bg-white/8 px-2 py-0.5 rounded-md border border-[#2457C5]/25">
                          {word.kategori}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => setSelectedKotobaModal(word)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/8 hover:bg-gradient-to-r hover:from-[#101C3D] hover:to-[#2457C5] text-[#DCE9FF] hover:text-white border border-[#2457C5]/25 hover:border-transparent text-xs font-bold transition-all shadow-2xs"
                          title="Buka 4 Contoh Kalimat"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>4 Kalimat</span>
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => {
                            onToggleLearned(word.id);
                            if (!isLearned) sound.playCorrect();
                          }}
                          className={`p-1 rounded-md transition-colors ${
                            isLearned ? 'text-emerald-600' : 'text-slate-300 hover:text-emerald-500'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            onClick={() => setEditingWord(word)}
                            className="p-1 rounded-md text-[#2457C5] hover:bg-white/8 transition-colors"
                            title="Edit Kosakata"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeletingWord(word)}
                            className="p-1 rounded-md text-red-500 hover:bg-red-50 transition-colors"
                            title="Hapus Kosakata"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 3: MODE HAFALAN / FLASHCARD */}
      {viewMode === 'flashcard' && filteredWords.length > 0 && currentFlashcard && (
        <div className="max-w-xl mx-auto space-y-6">
          
          <div className="flex items-center justify-between text-xs text-[#6B85B5] font-bold px-2">
            <span>
              Kartu ke {flashcardIndex + 1} dari {filteredWords.length}
            </span>
            <span>Klik kartu untuk membalik</span>
          </div>

          {/* 3D Flip Card Container */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-80 sm:h-96 rounded-3xl cursor-pointer perspective-1000"
          >
            <div className={`relative w-full h-full rounded-3xl transition-transform duration-500 transform-style-3d shadow-xl border border-[#2457C5]/25 p-8 flex flex-col justify-between text-center select-none ${
              isFlipped ? 'bg-gradient-to-br from-[#101C3D] to-[#1B367A] text-white' : 'bg-[#0D1830] text-[#DCE9FF]'
            }`}>
              
              {/* Card Header */}
              <div className="flex items-center justify-between w-full">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                  isFlipped ? 'bg-[#0D1830]/10 text-[#55B9F5]' : 'bg-white/8 text-[#6B85B5] border border-[#2457C5]/25'
                }`}>
                  {currentFlashcard.kategori}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakJapanese(currentFlashcard.kana || currentFlashcard.kanji);
                  }}
                  className={`p-2 rounded-xl transition-colors ${
                    isFlipped ? 'bg-[#0D1830]/15 text-white hover:bg-[#0D1830]/25' : 'bg-white/8 text-[#6B85B5] hover:bg-[#2457C5]/15 border border-[#2457C5]/25'
                  }`}
                >
                  <Volume2 className="w-5 h-5 text-[#2457C5]" />
                </button>
              </div>

              {/* Front side (Japanese) vs Back side (Romaji & Meaning) */}
              <div className="my-auto space-y-3">
                {!isFlipped ? (
                  <>
                    <h2 className="kanji-font text-5xl sm:text-6xl font-black tracking-tight text-[#DCE9FF]">
                      {currentFlashcard.kanji}
                    </h2>
                    <p className="text-xl sm:text-2xl font-bold text-[#2457C5]">
                      {currentFlashcard.kana}
                    </p>
                    <p className="text-xs text-[#6B85B5] font-medium">Klik untuk melihat arti</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-mono text-[#55B9F5] font-bold tracking-widest uppercase">
                      {currentFlashcard.romaji}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                      {currentFlashcard.arti}
                    </h2>
                    <p className="text-xs text-[#DCE9FF] font-medium pt-2">
                      {currentFlashcard.kanji} ({currentFlashcard.kana})
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedKotobaModal(currentFlashcard);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0D1830]/15 hover:bg-[#0D1830]/25 text-white text-xs font-bold border border-white/20 transition-all shadow-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#55B9F5]" />
                        <span>Lihat 4 Contoh Kalimat</span>
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-center text-xs opacity-60">
                <span>Tekan untuk {isFlipped ? 'tutup kembali' : 'buka arti'}</span>
              </div>

            </div>
          </div>

          {/* Flashcard Navigation & Memory Buttons */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handlePrevFlashcard}
              className="px-4 py-2.5 rounded-2xl bg-[#0D1830] hover:bg-white/8 text-[#DCE9FF] font-bold text-xs sm:text-sm border border-[#2457C5]/25 shadow-xs transition-colors"
            >
              ← Sebelumnya
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playIncorrect();
                  handleNextFlashcard();
                }}
                className="px-4 py-2.5 rounded-2xl bg-white/8 hover:bg-[#2457C5]/15 text-[#6B85B5] font-bold text-xs sm:text-sm transition-colors border border-[#2457C5]/25"
              >
                Belum Hafal
              </button>

              <button
                onClick={() => {
                  sound.playCorrect();
                  onToggleLearned(currentFlashcard.id);
                  handleNextFlashcard();
                }}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Sudah Hafal!</span>
              </button>
            </div>

            <button
              onClick={handleNextFlashcard}
              className="px-4 py-2.5 rounded-2xl bg-[#0D1830] hover:bg-white/8 text-[#DCE9FF] font-bold text-xs sm:text-sm border border-[#2457C5]/25 shadow-xs transition-colors"
            >
              Berikutnya →
            </button>
          </div>

        </div>
      )}

      {/* Kotoba 4 Sentences Modal */}
      {selectedKotobaModal && (
        <KotobaModal
          word={selectedKotobaModal}
          onClose={() => setSelectedKotobaModal(null)}
          isLearned={learnedKotobaIds.includes(selectedKotobaModal.id)}
          isBookmarked={bookmarkedKotobaIds.includes(selectedKotobaModal.id)}
          onToggleLearned={onToggleLearned}
          onToggleBookmark={onToggleBookmark}
        />
      )}

      {/* Kotoba Edit Modal */}
      <KotobaEditModal
        isOpen={!!editingWord}
        word={editingWord}
        onClose={() => setEditingWord(null)}
        onSave={handleSaveEdit}
      />

      {/* Kotoba Delete Modal */}
      <KotobaDeleteModal
        isOpen={!!deletingWord}
        word={deletingWord}
        onClose={() => setDeletingWord(null)}
        onConfirm={handleConfirmDelete}
      />

    </div>
  );
};
