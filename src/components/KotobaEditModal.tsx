import React, { useState, useEffect } from 'react';
import { X, Pencil, Check, AlertCircle } from 'lucide-react';
import { KotobaItem, KotobaCategory } from '../types';
import { sound } from '../utils/audio';

interface KotobaEditModalProps {
  isOpen: boolean;
  word: KotobaItem | null;
  onClose: () => void;
  onSave: (updatedWord: KotobaItem) => void;
}

const CATEGORY_OPTIONS: KotobaCategory[] = [
  'Kata Kerja',
  'Kata Sifat',
  'Waktu & Angka',
  'Makanan & Minuman',
  'Tubuh & Kesehatan',
  'Orang & Keluarga',
  'Tempat & Arah',
  'Umum & Ungkapan',
];

export const KotobaEditModal: React.FC<KotobaEditModalProps> = ({
  isOpen,
  word,
  onClose,
  onSave,
}) => {
  const [kanji, setKanji] = useState('');
  const [kana, setKana] = useState('');
  const [romaji, setRomaji] = useState('');
  const [arti, setArti] = useState('');
  const [kategori, setKategori] = useState<KotobaCategory>('Umum & Ungkapan');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (word) {
      setKanji(word.kanji || '');
      setKana(word.kana || '');
      setRomaji(word.romaji || '');
      setArti(word.arti || '');
      setKategori(word.kategori || 'Umum & Ungkapan');
      setErrorMsg('');
    }
  }, [word]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !word) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!kana.trim() && !kanji.trim()) {
      setErrorMsg('Harap isi huruf Jepang (Kanji atau Hiragana/Katakana).');
      return;
    }
    if (!arti.trim()) {
      setErrorMsg('Harap isi arti kosakata dalam bahasa Indonesia.');
      return;
    }

    const updated: KotobaItem = {
      ...word,
      kanji: kanji.trim() || kana.trim(),
      kana: kana.trim() || kanji.trim(),
      romaji: romaji.trim(),
      arti: arti.trim(),
      kategori,
    };

    sound.playCorrect();
    onSave(updated);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#0D1830] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#2457C5]/30 text-[#DCE9FF] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2457C5]/25 bg-[#121F3D]/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#2457C5]/15 text-[#55B9F5] border border-[#2457C5]/25">
              <Pencil className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#DCE9FF] font-['Manrope']">
                Edit Kosakata
              </h3>
              <p className="text-xs text-[#6B85B5]">
                Bab {word.bab} · #{word.no} ({word.kanji})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#0D1830]/15/12 text-[#6B85B5] hover:text-[#DCE9FF] transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Kanji */}
          <div>
            <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
              Kanji / Karakter Jepang Utama
            </label>
            <input
              type="text"
              value={kanji}
              onChange={(e) => setKanji(e.target.value)}
              placeholder="Contoh: アクセサリー atau 友達"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
            />
          </div>

          {/* Hiragana / Katakana */}
          <div>
            <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
              Hiragana / Katakana (Furigana / Cara Baca)
            </label>
            <input
              type="text"
              value={kana}
              onChange={(e) => setKana(e.target.value)}
              placeholder="Contoh: アクセサリー atau ともだち"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
            />
          </div>

          {/* Romaji */}
          <div>
            <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
              Romaji
            </label>
            <input
              type="text"
              value={romaji}
              onChange={(e) => setRomaji(e.target.value)}
              placeholder="Contoh: akusesarii atau tomodachi"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-mono text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
            />
          </div>

          {/* Arti Bahasa Indonesia */}
          <div>
            <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
              Arti Bahasa Indonesia
            </label>
            <input
              type="text"
              value={arti}
              onChange={(e) => setArti(e.target.value)}
              placeholder="Contoh: Aksesoris, perhiasan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-xs font-bold text-[#DCE9FF] uppercase tracking-wider mb-1.5">
              Kategori Kosakata
            </label>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value as KotobaCategory)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0D1830]/8 border border-[#2457C5]/25 text-sm font-semibold text-[#DCE9FF] focus:outline-hidden focus:ring-2 focus:ring-[#2457C5]/30 focus:border-[#2457C5]"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#2457C5]/25">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#2457C5]/25 text-xs font-bold text-[#6B85B5] hover:bg-[#0D1830]/15/10 hover:text-[#DCE9FF] transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white text-xs font-bold shadow-md shadow-[#101C3D]/15 transition-all active:scale-95"
            >
              <Check className="w-4 h-4 text-[#55B9F5]" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
