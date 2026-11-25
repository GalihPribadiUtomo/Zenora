# ZENORA — Platform Pembelajaran Bahasa Jepang Modern

**ZENORA** adalah aplikasi web pembelajaran bahasa Jepang interaktif yang dirancang untuk membantu pelajar menguasai bahasa Jepang secara terstruktur — mulai dari pengenalan huruf **Hiragana & Katakana**, **Kanji**, materi **Minna no Nihongo Bab 1–50**, persiapan kerja **SSW (Tokutei Ginou)**, hingga latihan dan simulasi ujian **JLPT / JFT**.

Aplikasi ini mengusung identitas visual **Luxury Midnight Ocean Blue** dengan nuansa biru laut dalam yang lembut, nyaman dipandang untuk sesi belajar jangka panjang, serta responsif di perangkat desktop maupun mobile.

---

## ✨ Fitur Utama

### 1. Beranda & Kartu Progress Belajar (Luxury Glassmorphism)
- **Hero Section Interaktif**: Menampilkan ringkasan progres belajar nyata pengguna secara *real-time*.
- **Kartu Kaca Transparan (*Frosted Glass*)**: Menggunakan panel kaca ultra-transparan bermotif gelombang tradisional Jepang (**Seigaiha**) yang memadukan latar belakang pemandangan Jepang dengan indikator *circular progress* bergradasi *Sapphire Blue* ke *Cyan Soft*.
- **Kapsul Streak Belajar**: Menampilkan jumlah hari *streak* belajar aktif beserta grafik aktivitas minimalis.
- **Akses Cepat & Target Harian**: Pintasan langsung ke materi, latihan, *Spaced Repetition System (SRS)*, dan *Catatan Kesalahan*.

### 2. Minna no Nihongo (Bab 1–50)
- **Materi Terstruktur**: Menyajikan daftar kosakata (*kotoba*), pola kalimat (*bunkei*), contoh kalimat, dan latihan evaluasi per bab.
- **Furigana Global**: Tombol toggle **Furigana ON/OFF** di header untuk membantu membaca kanji maupun menguji kemampuan membaca tanpa bantuan hiragana.
- **Audio Pelafalan & Shadowing**: Mendukung pemutaran suara kosakata/kalimat dan latihan pelafalan.

### 3. Hiragana & Katakana Lengkap
- **Semua Kategori Aksara**: Mencakup **Gojuon**, **Dakuten (Tanda Tenten)**, **Handakuten (Maru)**, **Youon (Kombinasi)**, **Kana Kecil / Sokuon**, **Bunyi Panjang**, serta **Bunyi Modern / Serapan**.
- **Animasi Panduan Penulisan (*Stroke Order Player*)**: Dilengkapi kontrol **Play**, **Pause**, **Replay**, dan navigasi langkah demi langkah dengan urutan serta arah goresan yang akurat.
- **Kanvas Latihan Menulis**: Pengguna dapat langsung berlatih menulis karakter pada kanvas interaktif dan menandai karakter yang sudah dikuasai.

### 4. Kanji N5 & N4 + Daily Kanji Orbit
- Daftar kanji terstruktur lengkap dengan arti, bacaan *Onyomi* dan *Kunyomi*, contoh kata, serta penampil urutan goresan berbasis data **KanjiVG**.
- Fitur **Daily Kanji Orbit** untuk mempelajari kanji pilihan setiap hari.

### 5. Persiapan SSW (*Tokutei Ginou*)
- Modul khusus persiapan kosakata dan materi bidang kerja **SSW** (seperti *Hospitality* dan bidang terkait) untuk kebutuhan kerja di Jepang.

### 6. Latihan, Ujian JLPT/JFT, SRS & Catatan Kesalahan
- **Beragam Mode Latihan**: Pilihan ganda, *matching* (pencocokan kata), serta *Particle & Conjugation Drill*.
- **Simulasi Ujian JLPT & JFT**: Latihan soal berbatas waktu sesuai format ujian.
- **Spaced Repetition System (SRS)**: Pengulangan kosakata/kanji terjadwal agar hafalan lebih tahan lama.
- **Mistake Notebook**: Menyimpan soal yang pernah dijawab salah agar mudah diulang kembali.

### 7. Analitik & Profil Pengguna
- **Analitik Belajar**: Visualisasi progres penguasaan kosakata, kanji, dan riwayat latihan.
- **Profil & Preferensi**: Pengaturan akun, preferensi suara, *furigana*, serta pengaturan notifikasi belajar.

### 8. Notification Center (Ikon Lonceng)
- Panel notifikasi interaktif di kanan atas header dengan *badge* jumlah notifikasi belum dibaca, tombol **Tandai Semua Sudah Dibaca**, dan hapus notifikasi.
- **Kategori Notifikasi**:
  - **Pengingat Belajar**: Pengingat target harian dan materi yang belum selesai.
  - **Progres Belajar**: Notifikasi saat menyelesaikan bab, latihan, target harian tercapai, atau *streak* meningkat.
  - **Materi & Pengumuman**: Informasi materi baru atau pengumuman dari Portal Staf & Admin.
- **Penyimpanan Lokal**: Notifikasi dan preferensi disimpan secara *client-side* di `localStorage` (`zenora_notifications_v1`, `zenora_notif_prefs_v1`, `zenora_admin_announcements_v1`) sehingga langsung bekerja tanpa memerlukan setup database/API tambahan, serta mendukung **Web Notification API** bawaan browser jika diaktifkan oleh pengguna.

### 9. Portal Staf & Admin
- Antarmuka khusus staf/admin untuk mengelola materi pembelajaran serta memublikasikan pengumuman ke pusat notifikasi pengguna.

---

## 🎨 Desain & Palet Warna (*Luxury Midnight Ocean Blue*)

Seluruh komponen menggunakan token warna terpusat di `src/index.css` agar konsisten di seluruh halaman:

| Kategori | Nama Token | Kode Hex | Penggunaan Utama |
|---|---|---|---|
| **Primary Blue** | Midnight Navy | `#08152F` | Sidebar, latar gelap terdalam, hero base |
| **Primary Blue** | Deep Ocean | `#102447` | Header, gradasi kartu & panel |
| **Primary Blue** | Royal Blue | `#2456A6` | Tombol utama, menu aktif, aksen gradasi |
| **Primary Blue** | Sapphire Blue | `#3978D6` | Hover state, indikator progres, border aktif |
| **Primary Blue** | Soft Sky Blue | `#83B7EE` | Ikon aktif, fokus *outline*, highlight teks |
| **Primary Blue** | Ice Blue | `#DCEBFA` | Teks aksen lembut & *specular glass edge* |
| **Surface** | Base Background | `#0B1428` | Latar belakang utama aplikasi |
| **Surface** | Surface Card | `#111F38` | Kartu standar, input pencarian, dropdown |
| **Surface** | Elevated Card | `#172945` | Kartu bertingkat, modal, sub-panel |
| **Surface** | Border | `#263D60` | Garis tepi kartu, pembatas, dan kontainer |
| **Typography** | Primary Text | `#F2F6FC` | Judul dan teks utama |
| **Typography** | Secondary Text | `#A9BBD3` | Deskripsi dan subjudul |
| **Typography** | Muted Text | `#7186A5` | Label sekunder, timestamp, teks non-aktif |
| **Accent** | Cyan Soft | `#69C9DF` | Aksen grafik, *glow* progres, badge info |
| **Accent** | Emerald | `#45C6A5` | Status berhasil, progres meningkat |
| **Accent** | Gold | `#E9BD72` | Ikon api *streak* & pencapaian |

---

## 📁 Struktur Direktori

```text
src/
├── assets/         # Aset statis gambar & media aplikasi
├── components/     # Komponen UI per fitur (Beranda, Kana, Kanji, SSW, Latihan, Analitik, Profil, Admin, Modal)
├── data/           # Data materi Minna no Nihongo (Bab 1–50), Kana, Kanji, SSW, dan soal JLPT
├── lib/            # Konfigurasi library eksternal (mis. klien Supabase)
├── services/       # Layanan logika aplikasi & sinkronisasi data
├── types/          # Definisi tipe TypeScript global
├── utils/          # Utilitas audio, notifikasi (notificationService), dan helper lainnya
├── App.tsx         # Root aplikasi & manajemen navigasi halaman
├── index.css       # Design tokens, variabel CSS global, dan utility styling
└── main.tsx        # Entry point React
```

---

## 🛠️ Tech Stack

- **Framework & Build Tool**: React 19, TypeScript, Vite 6
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Ikon**: Lucide React
- **Data Aksara & Stroke**: `@madcat/kanjivg`, `kanji-data`
- **Efek Interaktif**: `canvas-confetti`
- **Auth / Backend Client**: `@supabase/supabase-js`
- **Code Quality**: Oxlint

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
- **Node.js** versi 18 atau lebih baru
- **npm** (terpasang otomatis bersama Node.js)

### Langkah Instalasi

```bash
# 1. Masuk ke direktori proyek dan install dependencies
npm install

# 2. Jalankan development server (akses di http://localhost:5173)
npm run dev
```

### Perintah Lainnya

```bash
# Type-check TypeScript dan build versi produksi ke folder dist/
npm run build

# Menjalankan preview hasil build produksi secara lokal
npm run preview

# Memeriksa kualitas kode menggunakan Oxlint
npm run lint
```
