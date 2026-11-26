# ZENORA — Platform Pembelajaran Bahasa Jepang

> **Website Live:** https://zenora-jp.vercel.app  
> **Repository:** https://github.com/GalihPribadiUtomo/Zenora  
> **Hosting:** Vercel (`Production`) • **Backend & Auth:** Supabase PostgreSQL

**ZENORA** adalah aplikasi web pembelajaran bahasa Jepang terstruktur untuk pemelajar pemula hingga tingkat dasar-menengah (setara **JLPT N5–N4** dan **JFT-Basic A2**) serta persiapan kerja **SSW (*Tokutei Ginou*)**. Aplikasi ini memadukan materi terstruktur, latihan interaktif, simulasi ujian, pelacakan progres, dan sinkronisasi cloud dengan tampilan **Luxury Arctic Blue** (*Light Mode* dan *Dark Mode*).

---

## 📋 Daftar Isi
- [A. Tentang ZENORA](#a-tentang-zenora)
- [B. Fitur Utama & Pengenalan Menu](#b-fitur-utama--pengenalan-menu)
- [C. Teknologi yang Digunakan](#c-teknologi-yang-digunakan)
- [D. Arsitektur dan Sistem Aplikasi](#d-arsitektur-dan-sistem-aplikasi)
- [E. Hosting dan Deployment (Vercel)](#e-hosting-dan-deployment-vercel)
- [F. Environment Variables](#f-environment-variables)
- [G. Database dan Keamanan](#g-database-dan-keamanan)
- [H. Cara Menggunakan Aplikasi Secara Online](#h-cara-menggunakan-aplikasi-secara-online)
- [I. Informasi Tambahan](#i-informasi-tambahan)

---

## A. Tentang ZENORA

| Aspek | Keterangan |
|---|---|
| **Nama Aplikasi** | ZENORA (`zenora` v0.0.0) |
| **Tujuan** | Menyediakan satu platform terpadu untuk belajar aksara, kosakata, tata bahasa, kanji, persiapan kerja SSW, serta evaluasi latihan dan simulasi ujian secara terstruktur. |
| **Sasaran Pengguna** | Pelajar bahasa Jepang mandiri, siswa LPK/lembaga pelatihan, calon peserta ujian **JLPT N5/N4** atau **JFT-Basic A2**, dan calon pekerja program **SSW (*Tokutei Ginou*)**. |
| **Alur Belajar** | Dimulai dari pengenalan **Hiragana & Katakana**, **Kanji N5 & N4**, materi **Minna no Nihongo Bab 1–50**, modul **SSW 6 sektor**, hingga **Latihan 18 Mode** dan **Simulasi Ujian**. |

---

## B. Fitur Utama & Pengenalan Menu

Seluruh fitur berikut telah diverifikasi sesuai implementasi aktual di aplikasi:

### 1. Beranda & Navigasi Global
- **Beranda (`HomeDashboard`):** Menampilkan ringkasan progres belajar nyata, *streak* harian, grafik aktivitas, target harian, serta pintasan cepat menuju materi dan latihan.
- **Pencarian Global & Furigana Toggle:** Pencarian cepat kosakata/kanji di header serta tombol **Furigana ON/OFF** global untuk menampilkan atau menyembunyikan cara baca hiragana di atas kanji.
- **Tema Ganda (*Light* & *Dark Mode*):** Mendukung tema *Luxury Arctic Blue* (*Light*), *Luxury Midnight Ocean Blue* (*Dark*), atau mengikuti tema perangkat tanpa *reload*.
- **Pusat Notifikasi (*Notification Center*):** Menampilkan pengingat belajar, pencapaian progres, dan pengumuman admin, dengan dukungan *Web Notification API* browser.

### 2. Materi Pembelajaran Bahasa Jepang
- **Hiragana & Katakana (`KanaSection`):** Memuat kategori *Gojuon*, *Dakuten*, *Handakuten*, *Youon*, *Kana Kecil*, *Bunyi Panjang*, dan *Bunyi Serapan*, dilengkapi *Stroke Order Player* serta kanvas latihan menulis (`KanaCanvasPractice`).
- **Minna no Nihongo Bab 1–50 (`KotobaSection` & `ChapterDetail`):** Menyajikan 50 bab lengkap berisi **Kotoba** (kosakata), **Bunpou** (tata bahasa), **Bunkei** (pola kalimat), **Reibun** (contoh kalimat), **Kaiwa** (percakapan dengan audio pelafalan), daftar **Kanji** terkait bab, dan tab **Latihan** per bab.
- **Kanji N5 & N4 (`KanjiSection` & `KanjiModal`):** Memuat 424 kanji (110 N5 dan 314 N4) lengkap dengan arti, bacaan *Onyomi* dan *Kunyomi*, contoh kata, animasi urutan goresan **KanjiVG**, serta kanvas latihan menulis.
- **Persiapan SSW / *Tokutei Ginou* (`SswSection`):** Materi kosakata dan situasi kerja untuk 6 sektor (*Kaigo*, *Food Service*, *Manufacturing*, *Agriculture*, *Hospitality*, dan *Building Cleaning*) serta pintasan menuju simulasi JFT-Basic A2.

### 3. Latihan, Simulasi Ujian & Evaluasi
- **Latihan Bab 18 Mode (`ChapterExerciseSection`):** Menyediakan 18 mode latihan interaktif per bab — mencakup kosakata, tata bahasa, **Dokkai** (pemahaman bacaan), **Choukai** (mendengarkan audio), menyusun kalimat, dan menulis pada kanvas — lengkap dengan ulasan jawaban (*Answer Review*) di halaman hasil.
- **Simulasi Ujian JLPT N5/N4 & JFT-Basic A2 (`JlptExamSection`):** Simulasi ujian berbatas waktu dengan bagian *Moji-Goi*, *Bunpou-Dokkai*, dan audio **Choukai** (disertai nada *chime* ujian), serta unduhan sertifikat hasil PNG.
- **Latihan Klasik, SRS & Catatan Kesalahan (`PracticeSection`):** Kuis kosakata/kanji cepat, pengulangan terjadwal (*Spaced Repetition System*), dan *Mistake Notebook* untuk mengulang soal yang pernah dijawab salah.

### 4. Analitik, Profil & Portal Admin
- **Analitik Belajar (`AnalyticsSection`):** Visualisasi progres penguasaan kana, kosakata, kanji, riwayat skor latihan, dan aktivitas harian.
- **Profil & Autentikasi (`ProfileSection` & `AuthModal`):** Login **Google OAuth** dan **Email & Password** melalui Supabase Auth, sinkronisasi cloud, serta pengaturan tema dan suara.
- **Portal Admin (`AdminSection`):** Panel khusus administrator (terverifikasi role `admin` di database) untuk analitik platform, manajemen daftar pengguna (`AdminAllowlistManager`), CMS Bab 1–50, kosakata, SSW, bank soal CBT, pengumuman global, dan backup data JSON.

---

## C. Teknologi yang Digunakan

Diverifikasi dari `package.json`, `vite.config.ts`, dan kode sumber:

| Kategori | Teknologi | Versi / Detail Aktual |
|---|---|---|
| **Frontend Framework** | React & TypeScript | `react` `^19.3.1`, `typescript` `~7.0.2` |
| **Build Tool** | Vite | `vite` `^6.2.0` (`@vitejs/plugin-react` `^4.3.4`) |
| **Styling & Ikon** | Tailwind CSS v4 & Lucide React | `tailwindcss` `^4.3.5` (`@tailwindcss/vite`), `lucide-react` `^1.77.0` |
| **Backend & Database** | Supabase (`@supabase/supabase-js`) | `^2.119.2` (Auth, PostgreSQL, PostgREST, RPC, RLS) |
| **Penyimpanan Lokal** | Browser `localStorage` | Cache progres offline, preferensi tema, dan notifikasi |
| **Data & Stroke Kanji** | `@madcat/kanjivg` & `kanji-data` | `@madcat/kanjivg` `^5.0.0`, `kanji-data` `^1.1.0` |
| **Kanvas & Audio** | HTML5 Canvas API, Web Speech API, Web Audio API | Latihan menulis kana/kanji, pelafalan *speechSynthesis*, efek audio |
| **Efek Visual & Lint** | `canvas-confetti` & Oxlint | `canvas-confetti` `^1.9.4`, `oxlint` `^1.90.0` |
| **Pemuatan Materi** | Modular Lazy Loading | Dynamic `import('./bab1')` s.d. `bab50` dengan cache memori di `src/data/materi/index.ts` |

---

## D. Arsitektur dan Sistem Aplikasi

- **Struktur Aplikasi:** *Single Page Application (SPA)* React di `src/App.tsx` yang mengatur gerbang autentikasi (`InviteGateScreen`), navigasi utama (`Sidebar`, `TopNavigation`, `MobileBottomNav`), dan tampilan konten per menu.
- **Integrasi Supabase:** Klien Supabase di `src/lib/supabase.ts` membaca `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` dengan sesi persisten (`persistSession`, `autoRefreshToken`, `detectSessionInUrl`).
- **Sinkronisasi Hybrid (`localStorage` + Cloud):** Progres belajar, bookmark, riwayat latihan, dan kustomisasi materi tersimpan di `localStorage` agar responsif, lalu disinkronkan dua arah dengan PostgreSQL melalui `src/services/syncService.ts`.
- **Pemuatan Modul Bab 1–50:** Materi *Minna no Nihongo* dimuat sesuai kebutuhan (`loadChapterLesson(bab)`) untuk menjaga kecepatan muat awal dan disimpan sementara di `lessonCache`.

---

## E. Hosting dan Deployment (Vercel)

Website live di-hosting melalui **Vercel** (`https://zenora-jp.vercel.app`) menggunakan konfigurasi pada `vercel.json`:

| Pengaturan Vercel | Konfigurasi Aktual |
|---|---|
| **Domain Produksi** | `https://zenora-jp.vercel.app` |
| **Framework Preset** | `vite` |
| **Root Directory** | `./` (root repository) |
| **Build Command** | `npm run build` (`tsc -b && vite build`) |
| **Output Directory** | `dist` |
| **SPA Routing** | Rewrite `/(.*)` → `/index.html` |
| **Deploy Otomatis** | Setiap *push* ke branch `main` GitHub otomatis membangun dan memperbarui website live |

---

## F. Environment Variables

Variabel lingkungan yang dibaca oleh aplikasi (`src/lib/supabase.ts`):

| Variable | Tipe di Vercel | Keterangan |
|---|---|---|
| `VITE_SUPABASE_URL` | `Config` | URL proyek Supabase (format `https://<project-ref>.supabase.co`, tanpa path tambahan) |
| `VITE_SUPABASE_ANON_KEY` | `Config` | *Anon / publishable key* Supabase untuk akses klien browser |

*(Kode juga mendukung `VITE_SUPABASE_PUBLISHABLE_KEY` sebagai fallback di `src/lib/supabase.ts`.)*

### Pengaturan di Vercel
1. Buka **Vercel Dashboard → Project `zenora` → Settings → Environment Variables**.
2. Tambahkan `VITE_SUPABASE_URL` dan `VITE_SUPABASE_ANON_KEY` dengan tipe **`Config`** (bukan `Secret`, karena awalan `VITE_` digunakan oleh Vite untuk build frontend).
3. Klik **Save**, lalu lakukan **Redeploy** dari tab **Deployments**.

> **Penting:** File `.env` lokal diabaikan oleh `.gitignore` sehingga **tidak pernah di-push ke GitHub**. Jangan pernah memasukkan **Google Client Secret**, **Supabase `service_role` key**, password, atau token privat ke file frontend maupun repository publik.

---

## G. Database dan Keamanan

Skema database (`supabase_schema.sql`) menerapkan perlindungan data berikut:

- **Tabel & Autentikasi Supabase:** Mengelola login **Google OAuth** dan **Email & Password**, sesi JWT, profil pengguna (`profiles`), progres hafalan (`user_learned_items`), bookmark (`user_bookmarks`), kosakata kustom (`user_custom_kotoba`), riwayat kuis (`user_quiz_history`), pengumuman (`admin_announcements`), kustomisasi materi (`user_custom_materi`), dan daftar email pengguna (`allowed_emails`).
- **Row Level Security (RLS):** Aktif di seluruh tabel sehingga setiap pengguna hanya dapat membaca dan mengubah data miliknya sendiri (`auth.uid() = user_id` atau `auth.uid() = id`).
- **Akses Otomatis & Perlindungan RBAC Admin:**
  - Pengguna yang berhasil login (Google OAuth maupun Email & Password) diverifikasi lewat RPC `check_my_access()` dan trigger `handle_new_user()`, lalu otomatis dibuatkan profil dengan `role = 'user'` (`ON CONFLICT DO NOTHING`).
  - Hak akses **Admin** diverifikasi terhadap database (`verifyAdminRoleWithBackend` & `public.is_admin()`) dan dijaga oleh trigger `trg_prevent_self_role_escalation` agar pengguna biasa tidak dapat menaikkan perannya sendiri menjadi `admin`.
- **Konfigurasi Domain Aman:** `Site URL` dan `Redirect URLs` di **Supabase Authentication → URL Configuration** serta **Authorized JavaScript origins** di **Google Cloud Console** hanya mengizinkan domain produksi resmi dan `localhost` pengembangan.

---

## H. Cara Menggunakan Aplikasi Secara Online

1. Buka **https://zenora-jp.vercel.app** melalui browser desktop maupun HP.
2. Klik **Masuk / Daftar Sekarang**, lalu login menggunakan **Masuk dengan Google** atau **Email & Password**.
3. Pilih materi dari menu sidebar: **Hiragana & Katakana**, **Minna no Nihongo Bab 1–50**, **Kanji N5 & N4**, **SSW**, atau langsung menuju **Latihan & Simulasi Ujian**.
4. Progres belajar otomatis tersimpan dan tersinkronisasi dengan akun Anda di semua perangkat.
5. Akses **Mode Admin** hanya terbuka bagi akun yang memiliki `role = 'admin'` pada tabel `profiles` di Supabase.

---

## I. Informasi Tambahan

- **Status Pengembangan:** Aktif — sudah di-hosting dan dapat diakses online di https://zenora-jp.vercel.app.
- **Versi Proyek:** `0.0.0` (berdasarkan `package.json`).
- **Batasan & Catatan Penggunaan:**
  - Pelafalan suara menggunakan **Web Speech API** bawaan browser; kualitas dan ketersediaan suara bahasa Jepang (`ja-JP`) bergantung pada dukungan perangkat/sistem operasi.
  - Autentikasi dan sinkronisasi cloud memerlukan koneksi internet serta konfigurasi Supabase yang aktif.
  - Penetapan role `admin` baru hanya dilakukan secara administratif melalui database/backend (`public.profiles`), tidak tersedia melalui pendaftaran publik maupun Google OAuth.

---

## 🛠️ Perintah Pengembangan Lokal (Opsional)

```bash
npm install           # Instalasi dependensi
npm run dev           # Menjalankan server pengembangan Vite
npm run build         # Type-check TypeScript (tsc -b) dan build produksi ke dist/
npm run preview       # Menjalankan preview hasil build produksi
npm run lint          # Pemeriksaan kualitas kode dengan Oxlint
npm run verify:materi # Verifikasi integritas data materi Bab 1–50, Kanji, Kana, dan SSW
```
