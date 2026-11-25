# ZENORA — Platform Belajar Bahasa Jepang Modern

**ZENORA** adalah aplikasi web pembelajaran bahasa Jepang interaktif yang dirancang dengan identitas visual **Luxury Midnight Ocean Blue** — lembut, elegan, nyaman untuk belajar jangka panjang, dan responsif di desktop maupun mobile.

---

## ✨ Fitur Utama

- **Beranda & Kartu Progress Belajar (Luxury Glassmorphism)**
  - Hero section bertema Jepang dengan panel kaca transparan (*frosted glass*) bermotif Seigaiha, indikator *circular progress* dinamis dari progres nyata pengguna, serta kapsul **Streak Belajar** & grafik aktivitas.
- **Materi Minna no Nihongo (Bab 1–50)**
  - Kosakata (*kotoba*), pola kalimat, contoh percakapan, latihan bab interaktif, dukungan *Furigana* global, dan audio pelafalan.
- **Hiragana & Katakana Lengkap**
  - Mencakup *Gojuon*, *Dakuten*, *Handakuten*, *Youon*, *Kana Kecil / Sokuon*, *Bunyi Panjang*, dan *Bunyi Modern/Serapan* lengkap dengan animasi urutan goresan (*stroke order*) interaktif (Play, Pause, Replay, Step) serta kanvas latihan menulis.
- **Kanji & Daily Kanji Orbit**
  - Daftar kanji terstruktur, detail arti & bacaan (*Onyomi* / *Kunyomi*), serta animasi urutan goresan KanjiVG.
- **Persiapan SSW (Tokutei Ginou)**
  - Materi dan kosakata khusus bidang kerja SSW (*Hospitality*, dll.).
- **Latihan, Simulasi Ujian & Flashcard**
  - Mode latihan pilihan ganda, *matching*, *Particle & Conjugation Drill*, simulasi ujian JLPT/JFT, *Spaced Repetition System (SRS)*, dan *Mistake Notebook*.
- **Analitik & Profil**
  - Statistik progres belajar, *streak* harian, dan manajemen profil/pengaturan.
- **Notification Center (Ikon Lonceng)**
  - Panel notifikasi aktif dengan badge jumlah belum dibaca, filter/mark all as read, pengingat target belajar harian, notifikasi pencapaian progres & *streak*, serta pengumuman admin.
- **Portal Staf & Admin**
  - Pengelolaan materi dan pengiriman pengumuman ke pengguna.

---

## 🎨 Desain & Palet Warna (Midnight Ocean Blue)

Seluruh antarmuka menggunakan token desain terpusat di `src/index.css`:

- **Primary Blue**: Midnight Navy (`#08152F`), Deep Ocean (`#102447`), Royal Blue (`#2456A6`), Sapphire Blue (`#3978D6`), Soft Sky Blue (`#83B7EE`), Ice Blue (`#DCEBFA`)
- **Background & Surface**: Base (`#0B1428`), Surface (`#111F38`), Elevated Card (`#172945`), Border (`#263D60`)
- **Typography**: Primary (`#F2F6FC`), Secondary (`#A9BBD3`), Muted (`#7186A5`)
- **Accent**: Cyan Soft (`#69C9DF`), Emerald (`#45C6A5`), Gold (`#E9BD72`)

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Stroke & Kanji Data**: `@madcat/kanjivg`, `kanji-data`
- **Backend / Auth Client**: `@supabase/supabase-js`
- **Linter**: Oxlint

---

## 🚀 Menjalankan Secara Lokal

```bash
# Install dependencies
npm install

# Jalankan development server (http://localhost:5173)
npm run dev

# Build produksi (TypeScript check + Vite build)
npm run build

# Preview hasil build produksi
npm run preview

# Jalankan linter
npm run lint
```
