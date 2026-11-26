import React, { useState, useEffect, useMemo } from 'react';
import {
  UserCheck,
  UserPlus,
  Trash2,
  Search,
  RefreshCw,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import {
  AllowedEmailEntry,
  fetchAllowedEmails,
  addAllowedEmails,
  revokeAllowedEmail,
} from '../../services/inviteService';
import { sound } from '../../utils/audio';

interface AdminAllowlistManagerProps {
  currentUserId?: string;
  onShowToast?: (msg: string) => void;
}

export const AdminAllowlistManager: React.FC<AdminAllowlistManagerProps> = ({
  currentUserId,
  onShowToast,
}) => {
  const [entries, setEntries] = useState<AllowedEmailEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [noteInput, setNoteInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [revokingEmail, setRevokingEmail] = useState<string | null>(null);

  const loadAllowlist = async () => {
    setLoading(true);
    setError('');
    const res = await fetchAllowedEmails();
    if (res.error) {
      setError(res.error);
    } else {
      setEntries(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadAllowlist();
  }, []);

  const filteredEntries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (item) =>
        item.email.toLowerCase().includes(q) ||
        (item.note || '').toLowerCase().includes(q)
    );
  }, [entries, searchQuery]);

  const handleAddEmails = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const rawList = emailInput.split(/[\n,;]+/).map((s) => s.trim()).filter(Boolean);
    if (rawList.length === 0) {
      setError('Masukkan minimal satu alamat email yang valid.');
      return;
    }

    setSubmitting(true);
    const res = await addAllowedEmails(rawList, noteInput, currentUserId);
    setSubmitting(false);

    if (res.error) {
      setError(res.error);
      sound.playIncorrect();
      return;
    }

    sound.playCorrect();
    setEmailInput('');
    setNoteInput('');
    onShowToast?.(`${res.addedCount} email berhasil ditambahkan ke daftar izin (role: user).`);
    await loadAllowlist();
  };

  const handleRevoke = async (email: string) => {
    if (!confirm(`Cabut izin akses untuk "${email}"?\nPengguna ini tidak akan bisa mengakses ZENORA dan sesinya akan dihentikan.`)) {
      return;
    }
    setRevokingEmail(email);
    setError('');
    const res = await revokeAllowedEmail(email);
    setRevokingEmail(null);

    if (!res.ok) {
      setError(res.error || 'Gagal mencabut izin email.');
      sound.playIncorrect();
      return;
    }

    sound.playClick();
    onShowToast?.(`Izin akses untuk ${email} telah dicabut.`);
    setEntries((prev) => prev.filter((item) => item.email !== email));
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-[#3978D6]" />
            <h3 className="text-lg font-black font-['Manrope'] text-[var(--text-primary)]">
              Daftar Izin Akses (Invite-Only Allowlist)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
            Pengguna yang masuk via Google OAuth atau Email & Password otomatis tercatat di sini dengan role <code className="px-1.5 py-0.5 rounded bg-[#3978D6]/15 text-[#3978D6] font-bold">user</code>. Admin tetap dapat memantau atau menambah catatan pengguna.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1.5 rounded-xl bg-[#3978D6]/15 border border-[#3978D6]/30 text-xs font-black text-[#3978D6]">
            {entries.length} Email Diizinkan
          </span>
          <button
            type="button"
            onClick={loadAllowlist}
            disabled={loading}
            className="p-2.5 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#3978D6]/15 border border-[var(--border)] text-[var(--text-primary)] transition-colors cursor-pointer"
            title="Muat ulang daftar izin"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-red-500/10 border border-red-500/35 text-red-400 text-xs sm:text-sm font-semibold">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Add Email Form */}
      <form
        onSubmit={handleAddEmails}
        className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/25 space-y-4"
      >
        <div className="flex items-center gap-2 text-sm font-black text-[var(--text-primary)]">
          <UserPlus className="w-4 h-4 text-[#3978D6]" />
          <span>Tambah Email ke Daftar Izin</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Alamat Email (pisahkan dengan koma atau baris baru untuk banyak email)
            </label>
            <textarea
              rows={2}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="siswa1@gmail.com, siswa2@gmail.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[#3978D6]/25 text-sm text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30"
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
              Catatan (Opsional)
            </label>
            <input
              type="text"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="Contoh: Siswa N5 Batch 1"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[#3978D6]/25 text-sm text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3978D6]" />
            <span>Role Admin hanya dapat ditetapkan melalui SQL/Backend, tidak melalui daftar undangan.</span>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2463B9] to-[#3978D6] hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {submitting ? <RefreshCw className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
            <span>Izinkan Email</span>
          </button>
        </div>
      </form>

      {/* Allowlist Table / Cards */}
      <div className="p-5 sm:p-6 rounded-3xl bg-[var(--bg-card)] border border-[#3978D6]/25 space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari email atau catatan..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--bg-elevated)] border border-[#3978D6]/20 text-sm text-[var(--text-primary)] focus:outline-hidden focus:ring-2 focus:ring-[#3978D6]/30"
          />
        </div>

        {loading ? (
          <div className="py-8 text-center text-xs text-[var(--text-muted)]">
            Memuat daftar izin...
          </div>
        ) : filteredEntries.length === 0 ? (
          <div className="py-8 text-center text-xs sm:text-sm text-[var(--text-muted)]">
            Belum ada email yang cocok dalam daftar izin.
          </div>
        ) : (
          <div className="space-y-2.5">
            {filteredEntries.map((item) => (
              <div
                key={item.email}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)]"
              >
                <div className="flex items-start sm:items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-[#3978D6]/15 border border-[#3978D6]/30 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#3978D6]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-[var(--text-primary)] break-all">
                      {item.email}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--text-muted)] mt-0.5">
                      <span className="px-1.5 py-0.5 rounded bg-[#3978D6]/15 text-[#3978D6] font-bold">
                        {item.role}
                      </span>
                      {item.note && <span>• {item.note}</span>}
                      <span>• {new Date(item.created_at).toLocaleDateString('id-ID')}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRevoke(item.email)}
                  disabled={revokingEmail === item.email}
                  className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold transition-colors disabled:opacity-50 cursor-pointer shrink-0"
                >
                  {revokingEmail === item.email ? (
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                  <span>Cabut Izin</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
