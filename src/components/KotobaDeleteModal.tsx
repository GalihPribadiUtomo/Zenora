import React, { useEffect } from 'react';
import { X, Trash2, AlertTriangle } from 'lucide-react';
import { KotobaItem } from '../types';
import { sound } from '../utils/audio';

interface KotobaDeleteModalProps {
  isOpen: boolean;
  word: KotobaItem | null;
  onClose: () => void;
  onConfirm: (id: string) => void;
}

export const KotobaDeleteModal: React.FC<KotobaDeleteModalProps> = ({
  isOpen,
  word,
  onClose,
  onConfirm,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !word) return null;

  const handleDelete = () => {
    sound.playClick();
    onConfirm(word.id);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08152F]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-[#111F38] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#3978D6]/25 text-[#F2F6FC] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-red-500 to-amber-500" />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#3978D6]/20 bg-[#111F38]/90">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-red-950/40 text-red-400 border border-red-500/30">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-black text-[#F2F6FC] font-['Manrope']">
                Konfirmasi Hapus Kosakata
              </h3>
              <p className="text-xs text-[#7186A5]">
                Bab {word.bab} · #{word.no}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-[#08152F] text-[#7186A5] hover:text-[#F2F6FC] transition-colors"
            aria-label="Tutup modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <p className="text-xs text-[#7186A5] leading-relaxed">
            Apakah Anda yakin ingin menghapus kosakata ini dari daftar materi?
          </p>

          {/* Word Details Preview Card */}
          <div className="p-4 rounded-2xl bg-[#08152F]/80 border border-[#3978D6]/20 space-y-1.5">
            <div className="flex items-baseline gap-2">
              <span className="kanji-font text-2xl font-black text-[#F2F6FC]">
                {word.kanji}
              </span>
              <span className="text-xs font-bold text-[#3978D6]">
                【{word.kana}】
              </span>
            </div>
            <div className="text-xs font-mono text-[#7186A5]">
              {word.romaji}
            </div>
            <div className="text-sm font-semibold text-[#F2F6FC]">
              Arti: {word.arti}
            </div>
            <div className="text-[11px] font-bold text-[#7186A5]">
              Kategori: {word.kategori}
            </div>
          </div>

          <div className="text-[11px] text-amber-300 bg-amber-950/40 border border-amber-500/30 p-3 rounded-xl leading-relaxed">
            Catatan: Kosakata ini akan dihapus dari sesi belajar dan riwayat hafalan Anda. Perubahan akan tersimpan secara otomatis.
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#3978D6]/25 text-xs font-bold text-[#7186A5] hover:bg-[#08152F] hover:text-[#F2F6FC] transition-colors"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-md shadow-red-900/40 transition-all active:scale-95"
            >
              <Trash2 className="w-4 h-4" />
              <span>Hapus Kosakata</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
