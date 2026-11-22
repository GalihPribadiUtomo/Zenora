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

  // Handle ESC key
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-[#E9E2F0] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#6555A5] via-[#7B6DB8] to-[#85B9D1]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9E2F0] bg-[#F8F3FA]/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#F0EBF8] text-[#6555A5] border border-[#E9E2F0]">
              <Pencil className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#29264B] font-['Manrope']">
                Edit Kosakata
              </h3>
              <p className="text-xs text-[#77738A]">
                Bab {word.bab} · #{word.no} ({word.kanji})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#F0EBF8] text-[#77738A] hover:text-[#29264B] transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Kanji */}
          <div>
            <label className="block text-xs font-bold text-[#29264B] uppercase tracking-wider mb-1.5">
              Kanji / Karakter Jepang Utama
            </label>
            <input
              type="text"
              value={kanji}
              onChange={(e) => setKanji(e.target.value)}
              placeholder="Contoh: アクセサリー atau 友達"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F3FA] border border-[#E9E2F0] text-sm font-semibold text-[#29264B] focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/30 focus:border-[#6555A5]"
            />
          </div>

          {/* Hiragana / Katakana */}
          <div>
            <label className="block text-xs font-bold text-[#29264B] uppercase tracking-wider mb-1.5">
              Hiragana / Katakana (Furigana / Cara Baca)
            </label>
            <input
              type="text"
              value={kana}
              onChange={(e) => setKana(e.target.value)}
              placeholder="Contoh: アクセサリー atau ともだち"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F3FA] border border-[#E9E2F0] text-sm font-semibold text-[#29264B] focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/30 focus:border-[#6555A5]"
            />
          </div>

          {/* Romaji */}
          <div>
            <label className="block text-xs font-bold text-[#29264B] uppercase tracking-wider mb-1.5">
              Romaji
            </label>
            <input
              type="text"
              value={romaji}
              onChange={(e) => setRomaji(e.target.value)}
              placeholder="Contoh: akusesarii atau tomodachi"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F3FA] border border-[#E9E2F0] text-sm font-mono text-[#29264B] focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/30 focus:border-[#6555A5]"
            />
          </div>

          {/* Arti Bahasa Indonesia */}
          <div>
            <label className="block text-xs font-bold text-[#29264B] uppercase tracking-wider mb-1.5">
              Arti Bahasa Indonesia
            </label>
            <input
              type="text"
              value={arti}
              onChange={(e) => setArti(e.target.value)}
              placeholder="Contoh: Aksesoris, perhiasan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F3FA] border border-[#E9E2F0] text-sm font-semibold text-[#29264B] focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/30 focus:border-[#6555A5]"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-xs font-bold text-[#29264B] uppercase tracking-wider mb-1.5">
              Kategori Kosakata
            </label>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value as KotobaCategory)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F8F3FA] border border-[#E9E2F0] text-sm font-semibold text-[#29264B] focus:outline-hidden focus:ring-2 focus:ring-[#6555A5]/30 focus:border-[#6555A5]"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E9E2F0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#E9E2F0] text-xs font-bold text-[#77738A] hover:bg-[#F8F3FA] hover:text-[#29264B] transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#29264B] to-[#6555A5] hover:brightness-110 text-white text-xs font-bold shadow-md shadow-[#29264B]/15 transition-all active:scale-95"
            >
              <Check className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
