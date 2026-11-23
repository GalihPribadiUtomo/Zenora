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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080D2B]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#0D1238] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#7857FF]/25 text-[#F5F6FF] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#080D2B] via-[#7857FF] to-[#F5F6FF]" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#7857FF]/20 bg-[#0D1238]/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#12194A] text-[#7857FF] border border-[#7857FF]/30">
              <Pencil className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#F5F6FF] font-['Manrope']">
                Edit Kosakata
              </h3>
              <p className="text-xs text-[#737FA8]">
                Bab {word.bab} · #{word.no} ({word.kanji})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#080D2B] text-[#737FA8] hover:text-[#F5F6FF] transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-300 text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Kanji */}
          <div>
            <label className="block text-xs font-bold text-[#F5F6FF] uppercase tracking-wider mb-1.5">
              Kanji / Karakter Jepang Utama
            </label>
            <input
              type="text"
              value={kanji}
              onChange={(e) => setKanji(e.target.value)}
              placeholder="Contoh: アクセサリー atau 友達"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D2B]/80 border border-[#7857FF]/25 text-sm font-semibold text-[#F5F6FF] focus:outline-hidden focus:ring-2 focus:ring-[#7857FF]/30 focus:border-[#7857FF]"
            />
          </div>

          {/* Hiragana / Katakana */}
          <div>
            <label className="block text-xs font-bold text-[#F5F6FF] uppercase tracking-wider mb-1.5">
              Hiragana / Katakana (Furigana / Cara Baca)
            </label>
            <input
              type="text"
              value={kana}
              onChange={(e) => setKana(e.target.value)}
              placeholder="Contoh: アクセサリー atau ともだち"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D2B]/80 border border-[#7857FF]/25 text-sm font-semibold text-[#F5F6FF] focus:outline-hidden focus:ring-2 focus:ring-[#7857FF]/30 focus:border-[#7857FF]"
            />
          </div>

          {/* Romaji */}
          <div>
            <label className="block text-xs font-bold text-[#F5F6FF] uppercase tracking-wider mb-1.5">
              Romaji
            </label>
            <input
              type="text"
              value={romaji}
              onChange={(e) => setRomaji(e.target.value)}
              placeholder="Contoh: akusesarii atau tomodachi"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D2B]/80 border border-[#7857FF]/25 text-sm font-mono text-[#F5F6FF] focus:outline-hidden focus:ring-2 focus:ring-[#7857FF]/30 focus:border-[#7857FF]"
            />
          </div>

          {/* Arti Bahasa Indonesia */}
          <div>
            <label className="block text-xs font-bold text-[#F5F6FF] uppercase tracking-wider mb-1.5">
              Arti Bahasa Indonesia
            </label>
            <input
              type="text"
              value={arti}
              onChange={(e) => setArti(e.target.value)}
              placeholder="Contoh: Aksesoris, perhiasan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D2B]/80 border border-[#7857FF]/25 text-sm font-semibold text-[#F5F6FF] focus:outline-hidden focus:ring-2 focus:ring-[#7857FF]/30 focus:border-[#7857FF]"
            />
          </div>

          {/* Kategori */}
          <div>
            <label className="block text-xs font-bold text-[#F5F6FF] uppercase tracking-wider mb-1.5">
              Kategori Kosakata
            </label>
            <select
              value={kategori}
              onChange={(e) => setKategori(e.target.value as KotobaCategory)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D2B]/80 border border-[#7857FF]/25 text-sm font-semibold text-[#F5F6FF] focus:outline-hidden focus:ring-2 focus:ring-[#7857FF]/30 focus:border-[#7857FF]"
            >
              {CATEGORY_OPTIONS.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#7857FF]/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#7857FF]/25 text-xs font-bold text-[#737FA8] hover:bg-[#080D2B] hover:text-[#F5F6FF] transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7857FF] to-[#945CFF] border border-[#7857FF]/40 hover:brightness-110 text-[#F5F6FF] text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <Check className="w-4 h-4 text-[#7857FF]" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
