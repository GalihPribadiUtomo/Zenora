import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Volume2, 
  CheckCircle2, 
  Circle, 
  Star, 
  Layers, 
  List, 
  LayoutGrid, 
  RotateCcw, 
  Award,
  Search,
  Filter,
  BookOpen,
  Pencil,
  Trash2
} from 'lucide-react';
import { KotobaItem, KotobaCategory } from '../types';
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-[#F8F3FA] text-[#29264B] text-sm font-bold border border-[#E9E2F0] shadow-xs hover:border-[#85B9D1]/50 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-[#29264B]" />
          <span>Semua Bab</span>
        </button>

        <div className="flex items-center gap-2">
          {bab > 1 && (
            <button
              onClick={() => onSelectChapter(bab - 1)}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#F8F3FA] text-[#77738A] hover:text-[#29264B] text-xs font-bold border border-[#E9E2F0] shadow-xs transition-colors"
            >
              ← Bab {bab - 1}
            </button>
          )}

          <button
            onClick={() => onStartQuiz(bab)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#29264B] to-[#85B9D1] hover:brightness-105 text-white text-xs sm:text-sm font-bold shadow-sm shadow-[#29264B]/20 transition-all active:scale-95"
          >
            <Award className="w-4 h-4" />
            <span>Latihan Bab Ini</span>
          </button>

          {bab < 50 && (
            <button
              onClick={() => onSelectChapter(bab + 1)}
              className="px-3.5 py-2 rounded-xl bg-[#29264B] hover:bg-[#29264B] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Bab {bab + 1} →</span>
            </button>
          )}
        </div>
      </div>

      {/* Chapter Title & Header info */}
      <div className="card-soft p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-white border border-[#E9E2F0] shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0EBF8] border border-[#29264B]/20 text-[#29264B] text-xs font-black uppercase tracking-wider mb-2 font-mono">
              Minna no Nihongo {bab <= 25 ? 'I' : 'II'}
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#29264B] tracking-tight font-['Manrope']">
              第{bab}課 · Bab {bab}
            </h1>
            <p className="text-sm font-semibold text-[#77738A] mt-1">
              {chapterWords.length} kosakata · {categoriesInChapter.length} kategori tematik · {learnedCount} telah dihafal
            </p>
          </div>

          {/* Chapter completion pill */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-[#77738A] font-bold block">Status Hafal</span>
              <span className="text-xl font-black text-[#29264B] font-['Manrope']">
                {learnedCount} / {chapterWords.length}
              </span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#F0EBF8] border border-[#29264B]/20 flex items-center justify-center font-black text-[#29264B] text-sm shadow-xs font-['Manrope']">
              {chapterWords.length > 0 ? Math.round((learnedCount / chapterWords.length) * 100) : 0}%
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#E9E2F0]">
          <button
            onClick={() => setSelectedCategory('Semua')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedCategory === 'Semua'
                ? 'bg-gradient-to-r from-[#29264B] to-[#85B9D1] text-white shadow-xs'
                : 'bg-white hover:bg-[#F8F3FA] text-[#77738A] border border-[#E9E2F0]'
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
                    ? 'bg-gradient-to-r from-[#29264B] to-[#85B9D1] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F8F3FA] text-[#77738A] border border-[#E9E2F0]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#85B9D1]"></span>
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
          <Search className="w-4 h-4 text-[#77738A] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari di bab ini (Jepang, romaji, arti)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#E9E2F0] text-sm text-[#29264B] placeholder-[#77738A]/60 focus:outline-hidden focus:ring-2 focus:ring-[#85B9D1]/40 focus:border-[#85B9D1] shadow-2xs transition-all"
          />
        </div>

        {/* View Switcher (Kartu, Daftar, Mode Hafalan) */}
        <div className="flex items-center p-1 bg-[#F8F3FA] rounded-2xl border border-[#E9E2F0] self-start sm:self-auto">
          <button
            onClick={() => setViewMode('card')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'card'
                ? 'bg-white text-[#29264B] shadow-xs'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5 text-[#29264B]" />
            <span>Kartu</span>
          </button>

          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'table'
                ? 'bg-white text-[#29264B] shadow-xs'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
          >
            <List className="w-3.5 h-3.5 text-[#29264B]" />
            <span>Daftar</span>
          </button>

          <button
            onClick={() => setViewMode('flashcard')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'flashcard'
                ? 'bg-white text-[#29264B] shadow-xs'
                : 'text-[#77738A] hover:text-[#29264B]'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-[#29264B]" />
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
                className={`card-soft p-5 rounded-3xl border transition-all flex flex-col justify-between cursor-pointer hover:shadow-md hover:border-[#85B9D1]/50 group ${
                  isLearned ? 'border-emerald-300 bg-emerald-50/20' : 'border-[#E9E2F0] bg-white'
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
                      className="p-1.5 rounded-lg bg-[#F8F3FA] hover:bg-[#F0EBF8] hover:text-[#29264B] text-[#77738A] transition-colors border border-[#E9E2F0]"
                      title="Dengarkan pelafalan audio"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1">
                      {/* Edit Kosakata Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingWord(word);
                        }}
                        className="p-1.5 rounded-lg bg-[#F0EBF8] hover:bg-[#6555A5]/20 text-[#6555A5] transition-colors border border-[#E9E2F0]"
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
                        className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-500 transition-colors border border-rose-200/50"
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
                    <span className="kanji-font text-2xl font-black text-[#29264B] block tracking-tight group-hover:text-[#85B9D1] transition-colors">
                      {word.kanji}
                    </span>
                    <span className="text-xs font-bold text-[#85B9D1] block mt-0.5">
                      {word.kana}
                    </span>
                  </div>

                  {/* Romaji */}
                  <p className="text-xs font-mono text-[#77738A] mb-2">
                    {word.romaji}
                  </p>

                  {/* Indonesian Translation */}
                  <p className="text-sm font-bold text-[#29264B] leading-snug">
                    {word.arti}
                  </p>
                </div>

                {/* Bottom Row: Category & 4 Sentences Trigger */}
                <div className="mt-4 pt-3 border-t border-[#E9E2F0] flex items-center justify-between gap-2">
                  <span className="inline-block text-[11px] font-bold text-[#29264B] bg-[#F0EBF8] px-2 py-0.5 rounded-lg border border-[#29264B]/20">
                    {word.kategori}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedKotobaModal(word);
                    }}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-[#F8F3FA] hover:bg-gradient-to-r hover:from-[#29264B] hover:to-[#85B9D1] text-[#29264B] hover:text-white border border-[#E9E2F0] hover:border-transparent text-xs font-bold transition-all shadow-2xs"
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
        <div className="card-soft rounded-3xl overflow-hidden border border-[#E9E2F0] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#F8F3FA] text-[#77738A] text-xs uppercase tracking-wider border-b border-[#E9E2F0]">
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
              <tbody className="divide-y divide-[#E9E2F0]">
                {filteredWords.map((word, idx) => {
                  const isLearned = learnedKotobaIds.includes(word.id);
                  return (
                    <tr 
                      key={word.id} 
                      className={`hover:bg-[#F0EBF8]/40 transition-colors ${
                        isLearned ? 'bg-emerald-50/20' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-center text-xs font-mono text-[#77738A]">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => speakJapanese(word.kana || word.kanji)}
                          className="p-1 rounded-md text-[#77738A] hover:text-[#29264B] hover:bg-[#F0EBF8] transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="py-3 px-4 kanji-font text-base font-bold text-[#29264B]">
                        {word.kanji}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-[#85B9D1]">
                        {word.kana}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-[#77738A]">
                        {word.romaji}
                      </td>
                      <td className="py-3 px-4 font-medium text-[#29264B]">
                        {word.arti}
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[11px] font-bold text-[#29264B] bg-[#F0EBF8] px-2 py-0.5 rounded-md border border-[#29264B]/20">
                          {word.kategori}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => setSelectedKotobaModal(word)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#F8F3FA] hover:bg-gradient-to-r hover:from-[#29264B] hover:to-[#85B9D1] text-[#29264B] hover:text-white border border-[#E9E2F0] hover:border-transparent text-xs font-bold transition-all shadow-2xs"
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
                            className="p-1 rounded-md text-[#6555A5] hover:bg-[#F0EBF8] transition-colors"
                            title="Edit Kosakata"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeletingWord(word)}
                            className="p-1 rounded-md text-rose-500 hover:bg-rose-50 transition-colors"
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
          
          <div className="flex items-center justify-between text-xs text-[#77738A] font-bold px-2">
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
            <div className={`relative w-full h-full rounded-3xl transition-transform duration-500 transform-style-3d shadow-xl border border-[#E9E2F0] p-8 flex flex-col justify-between text-center select-none ${
              isFlipped ? 'bg-gradient-to-br from-[#29264B] to-[#3D3268] text-white' : 'bg-white text-[#29264B]'
            }`}>
              
              {/* Card Header */}
              <div className="flex items-center justify-between w-full">
                <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg ${
                  isFlipped ? 'bg-white/10 text-[#A5C8DB]' : 'bg-[#F8F3FA] text-[#77738A] border border-[#E9E2F0]'
                }`}>
                  {currentFlashcard.kategori}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakJapanese(currentFlashcard.kana || currentFlashcard.kanji);
                  }}
                  className={`p-2 rounded-xl transition-colors ${
                    isFlipped ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-[#F8F3FA] text-[#77738A] hover:bg-[#F0EBF8] border border-[#E9E2F0]'
                  }`}
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Front side (Japanese) vs Back side (Romaji & Meaning) */}
              <div className="my-auto space-y-3">
                {!isFlipped ? (
                  <>
                    <h2 className="kanji-font text-5xl sm:text-6xl font-black tracking-tight text-[#29264B]">
                      {currentFlashcard.kanji}
                    </h2>
                    <p className="text-xl sm:text-2xl font-bold text-[#85B9D1]">
                      {currentFlashcard.kana}
                    </p>
                    <p className="text-xs text-[#77738A] font-medium">Klik untuk melihat arti</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-mono text-[#A5C8DB] font-bold tracking-widest uppercase">
                      {currentFlashcard.romaji}
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope']">
                      {currentFlashcard.arti}
                    </h2>
                    <p className="text-xs text-[#A5C8DB] font-medium pt-2">
                      {currentFlashcard.kanji} ({currentFlashcard.kana})
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedKotobaModal(currentFlashcard);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/20 transition-all shadow-xs"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#A5C8DB]" />
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
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-[#F8F3FA] text-[#29264B] font-bold text-xs sm:text-sm border border-[#E9E2F0] shadow-xs transition-colors"
            >
              ← Sebelumnya
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  sound.playIncorrect();
                  handleNextFlashcard();
                }}
                className="px-4 py-2.5 rounded-2xl bg-[#F0EBF8] hover:bg-slate-200 text-[#77738A] font-bold text-xs sm:text-sm transition-colors"
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
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-[#F8F3FA] text-[#29264B] font-bold text-xs sm:text-sm border border-[#E9E2F0] shadow-xs transition-colors"
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
