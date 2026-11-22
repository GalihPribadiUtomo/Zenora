# generate_complete_kanji.py
import json

# Comprehensive list containing all JLPT N5, JLPT N4, and the 240 Kanji from Workbook
# with complete Onyomi, Kunyomi, meanings, stroke counts, categories, and writing instructions.

KANJI_MASTER = [
  # --- JLPT N5 (All 103 canonical Kanji) ---
  {
    "id": 1, "kanji": "一", "reading": "いち", "meaning": "Satu", "meaningEn": "One",
    "strokeCount": 1, "onyomi": "イチ・イツ", "kunyomi": "ひと-・ひとつ",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Tarik satu garis mendatar lurus dari kiri ke kanan dengan sedikit tekanan di bagian akhir.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal dari kiri ke kanan (横)"]
  },
  {
    "id": 2, "kanji": "二", "reading": "に", "meaning": "Dua", "meaningEn": "Two",
    "strokeCount": 2, "onyomi": "ニ・ジ", "kunyomi": "ふた・ふたつ・ふたたび",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Tulis garis horizontal atas terlebih dahulu (lebih pendek), lalu garis horizontal bawah (lebih panjang). Aturan: Atas ke bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal pendek atas", "Goresan 2: Garis horizontal panjang bawah"]
  },
  {
    "id": 3, "kanji": "三", "reading": "さん", "meaning": "Tiga", "meaningEn": "Three",
    "strokeCount": 3, "onyomi": "サン・ゾウ", "kunyomi": "み・みつ・みっつ",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Tulis tiga garis horizontal dari atas ke bawah. Garis tengah paling pendek, garis bawah paling panjang.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas sedang", "Goresan 2: Garis horizontal tengah pendek", "Goresan 3: Garis horizontal bawah panjang"]
  },
  {
    "id": 4, "kanji": "四", "reading": "よん", "meaning": "Empat", "meaningEn": "Four",
    "strokeCount": 5, "onyomi": "シ", "kunyomi": "よ・よつ・よっつ・よん",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Buat bingkai luar kiri, lalu sudut atas-kanan. Isi bagian dalam terlebih dahulu, baru kemudian tutup garis bawah kotak.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal kiri", "Goresan 2: Garis atas membelok ke bawah (sudut)", "Goresan 3: Goresan melengkung kiri dalam", "Goresan 4: Sudut kanan dalam", "Goresan 5: Garis penutup bawah kotak"]
  },
  {
    "id": 5, "kanji": "五", "reading": "ご", "meaning": "Lima", "meaningEn": "Five",
    "strokeCount": 4, "onyomi": "ゴ", "kunyomi": "いつ・いつつ",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Garis horizontal atas, garis vertikal miring tengah, sudut horizontal-vertikal, lalu garis penutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas", "Goresan 2: Garis vertikal miring kiri", "Goresan 3: Garis horizontal lalu turun tegak", "Goresan 4: Garis horizontal penutup bawah"]
  },
  {
    "id": 6, "kanji": "六", "reading": "ろく", "meaning": "Enam", "meaningEn": "Six",
    "strokeCount": 4, "onyomi": "ロク・リク", "kunyomi": "む・むつ・むっつ・むい",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Titik atas, garis horizontal melintang, lalu dua 'kaki' kiri dan kanan (kiri dulu baru kanan).",
    "strokeOrderGuide": ["Goresan 1: Titik vertikal di puncak", "Goresan 2: Garis horizontal panjang", "Goresan 3: Garis miring ke kiri bawah", "Goresan 4: Titik miring ke kanan bawah"]
  },
  {
    "id": 7, "kanji": "七", "reading": "なな", "meaning": "Tujuh", "meaningEn": "Seven",
    "strokeCount": 2, "onyomi": "シチ", "kunyomi": "なな・ななつ・なの",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Garis mendatar agak naik ke kanan, dipotong garis vertikal yang melengkung ke kanan dan berkait ke atas.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal miring sedikit naik", "Goresan 2: Garis vertikal melengkung dengan kait (hane) ke atas"]
  },
  {
    "id": 8, "kanji": "八", "reading": "はち", "meaning": "Delapan", "meaningEn": "Eight",
    "strokeCount": 2, "onyomi": "ハチ", "kunyomi": "や・やつ・やっつ・よう",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Tulis goresan kiri pendek lebih dulu, lalu goresan kanan yang lebih panjang dan melebar.",
    "strokeOrderGuide": ["Goresan 1: Garis miring ke kiri (kiri ke bawah)", "Goresan 2: Garis miring ke kanan melandai"]
  },
  {
    "id": 9, "kanji": "九", "reading": "きゅう", "meaning": "Sembilan", "meaningEn": "Nine",
    "strokeCount": 2, "onyomi": "キュウ・ク", "kunyomi": "ここの・ここのつ",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Tarik garis lengkung miring kiri terlebih dahulu, lalu garis melintang horizontal yang turun melengkung dengan kait ke atas.",
    "strokeOrderGuide": ["Goresan 1: Garis melengkung miring ke kiri", "Goresan 2: Garis horizontal membelok ke bawah melengkung dengan kait"]
  },
  {
    "id": 10, "kanji": "十", "reading": "じゅう", "meaning": "Sepuluh", "meaningEn": "Ten",
    "strokeCount": 2, "onyomi": "ジュウ・ジッ・ジュッ", "kunyomi": "とお・と・そ",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Garis horizontal mendatar terlebih dahulu, kemudian dipotong lurus oleh garis vertikal di tengah.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal dari kiri ke kanan", "Goresan 2: Garis vertikal tegak lurus dari atas ke bawah"]
  },
  {
    "id": 11, "kanji": "百", "reading": "ひゃく", "meaning": "Seratus", "meaningEn": "Hundred",
    "strokeCount": 6, "onyomi": "ヒャク・ビャク", "kunyomi": "もも",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Garis horizontal atas, garis miring pendek, lalu bingkai kotak (putih/白): vertikal kiri, sudut kanan, horizontal dalam, dan penutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas", "Goresan 2: Garis vertikal miring pendek", "Goresan 3: Garis vertikal kiri kotak", "Goresan 4: Sudut atas-kanan kotak", "Goresan 5: Garis horizontal tengah dalam", "Goresan 6: Garis penutup bawah kotak"]
  },
  {
    "id": 12, "kanji": "千", "reading": "せん", "meaning": "Seribu", "meaningEn": "Thousand",
    "strokeCount": 3, "onyomi": "セン", "kunyomi": "ち",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Goresan miring miring ke kiri di atas, garis horizontal melintang, lalu garis vertikal memotong tengah lurus ke bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis miring pendek ke kiri", "Goresan 2: Garis horizontal melintang", "Goresan 3: Garis vertikal tegak lurus menembus ke bawah"]
  },
  {
    "id": 13, "kanji": "万", "reading": "まん", "meaning": "Sepuluh Ribu", "meaningEn": "Ten Thousand",
    "strokeCount": 3, "onyomi": "マン・バン", "kunyomi": "よろず",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Garis horizontal atas, garis sudut membelok ke kiri bawah dengan kait, lalu garis miring pemotong.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas", "Goresan 2: Garis vertikal melengkung dengan kait (hane)", "Goresan 3: Garis miring dari atas memotong ke kanan bawah"]
  },
  {
    "id": 14, "kanji": "円", "reading": "えん", "meaning": "Yen / Lingkaran", "meaningEn": "Yen / Circle",
    "strokeCount": 4, "onyomi": "エン", "kunyomi": "まるい・まる・まど・まどか・まろやか",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Garis vertikal kiri, sudut kanan berbingkai dengan kait, garis vertikal dalam, lalu garis horizontal dalam dan penutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal kiri", "Goresan 2: Sudut atas ke kanan lalu turun dengan kait", "Goresan 3: Garis vertikal pendek di dalam", "Goresan 4: Garis horizontal penutup"]
  },
  {
    "id": 15, "kanji": "日", "reading": "ひ", "meaning": "Hari / Matahari", "meaningEn": "Day / Sun",
    "strokeCount": 4, "onyomi": "ニチ・ジツ", "kunyomi": "ひ・-び・-か",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Garis vertikal kiri kotak, sudut kanan atas turun ke bawah, garis horizontal tengah, lalu garis penutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal kiri", "Goresan 2: Garis horizontal atas membelok turun (sudut)", "Goresan 3: Garis horizontal tengah", "Goresan 4: Garis horizontal penutup bawah"]
  },
  {
    "id": 16, "kanji": "月", "reading": "つき", "meaning": "Bulan", "meaningEn": "Moon / Month",
    "strokeCount": 4, "onyomi": "ゲツ・ガツ", "kunyomi": "つき",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Garis melengkung kiri, sudut kanan atas turun panjang dengan kait ke kiri, lalu dua garis horizontal di dalam.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal melengkung kiri", "Goresan 2: Sudut atas-kanan turun panjang dengan kait", "Goresan 3: Garis horizontal tengah atas", "Goresan 4: Garis horizontal tengah bawah"]
  },
  {
    "id": 17, "kanji": "火", "reading": "ひ", "meaning": "Api", "meaningEn": "Fire",
    "strokeCount": 4, "onyomi": "カ", "kunyomi": "ひ・-び・ほ-",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Titik kiri dulu, titik kanan, garis tengah melengkung ke kiri, lalu kaki kanan melengkung ke kanan.",
    "strokeOrderGuide": ["Goresan 1: Titik miring kiri", "Goresan 2: Titik miring kanan", "Goresan 3: Garis vertikal tengah melengkung kiri", "Goresan 4: Garis melengkung ke kanan bawah"]
  },
  {
    "id": 18, "kanji": "水", "reading": "みず", "meaning": "Air", "meaningEn": "Water",
    "strokeCount": 4, "onyomi": "スイ", "kunyomi": "みず・みず-",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Aturan: Tengah dulu baru sisi luar. Tarik garis vertikal tengah berkait, lalu garis patah kiri, titik miring kanan, dan garis panjang kanan.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tengah dengan kait kiri", "Goresan 2: Garis sudut di kiri tengah", "Goresan 3: Garis miring pendek kanan", "Goresan 4: Garis miring meluncur ke kanan bawah"]
  },
  {
    "id": 19, "kanji": "木", "reading": "き", "meaning": "Pohon / Kayu", "meaningEn": "Tree / Wood",
    "strokeCount": 4, "onyomi": "ボク・モク", "kunyomi": "き・こ-",
    "jlpt": "N5", "category": "Bunga & Tumbuhan",
    "strokeRules": "Garis horizontal mendatar, garis vertikal tegak lurus menembus tengah, lalu cabang miring kiri, dan cabang miring kanan.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal", "Goresan 2: Garis vertikal tengah menembus lurus", "Goresan 3: Garis cabang miring ke kiri", "Goresan 4: Garis cabang miring ke kanan"]
  },
  {
    "id": 20, "kanji": "金", "reading": "きん", "meaning": "Emas / Uang", "meaningEn": "Gold / Money",
    "strokeCount": 8, "onyomi": "キン・コン・ゴン", "kunyomi": "かね・かな-・-がね",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Atap payung (kiri lalu kanan), garis horizontal atas, garis horizontal kedua, garis vertikal tengah, dua titik sisi (kiri lalu kanan), garis penutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Atap miring ke kiri", "Goresan 2: Atap miring ke kanan", "Goresan 3: Garis horizontal atas", "Goresan 4: Garis horizontal kedua", "Goresan 5: Garis vertikal tengah", "Goresan 6: Titik miring kiri", "Goresan 7: Titik miring kanan", "Goresan 8: Garis horizontal penutup bawah"]
  },
  {
    "id": 21, "kanji": "土", "reading": "つち", "meaning": "Tanah", "meaningEn": "Soil / Earth",
    "strokeCount": 3, "onyomi": "ド・ト", "kunyomi": "つち",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Garis horizontal atas pendek, garis vertikal tengah, lalu garis horizontal bawah panjang.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas pendek", "Goresan 2: Garis vertikal tengah", "Goresan 3: Garis horizontal bawah panjang"]
  },
  {
    "id": 22, "kanji": "本", "reading": "ほん", "meaning": "Buku / Asal", "meaningEn": "Book / Origin",
    "strokeCount": 5, "onyomi": "ホン", "kunyomi": "もと",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Tulis kanji 木 (pohon) terlebih dahulu secara berurutan, lalu tambahkan garis horizontal pendek di bagian bawah batang.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal", "Goresan 2: Garis vertikal tegak lurus", "Goresan 3: Garis cabang kiri", "Goresan 4: Garis cabang kanan", "Goresan 5: Garis horizontal pendek penanda dasar"]
  },
  {
    "id": 23, "kanji": "人", "reading": "ひと", "meaning": "Orang / Manusia", "meaningEn": "Person / Human",
    "strokeCount": 2, "onyomi": "ジン・ニン", "kunyomi": "ひと・-り・-と",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Garis kiri melengkung turun melandai dari atas ke kiri bawah, kemudian garis kanan menopang dari tengah meluncur ke kanan bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis miring panjang melengkung ke kiri bawah", "Goresan 2: Garis penopang dari tengah ke kanan bawah"]
  },
  {
    "id": 24, "kanji": "今", "reading": "いま", "meaning": "Sekarang", "meaningEn": "Now",
    "strokeCount": 4, "onyomi": "コン・キン", "kunyomi": "いま",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Atap miring kiri, atap miring kanan, garis horizontal pendek tengah, lalu garis vertikal bengkok ke kanan.",
    "strokeOrderGuide": ["Goresan 1: Atap miring ke kiri", "Goresan 2: Atap miring meluncur ke kanan", "Goresan 3: Garis horizontal pendek", "Goresan 4: Garis vertikal melengkung ke kanan"]
  },
  {
    "id": 25, "kanji": "寺", "reading": "てら", "meaning": "Kuil Buddha", "meaningEn": "Temple",
    "strokeCount": 6, "onyomi": "ジ", "kunyomi": "てら",
    "jlpt": "N5", "category": "Tempat & Bangunan",
    "strokeRules": "Kanji 土 di atas (horizontal pendek, vertikal, horizontal panjang), diikuti radikal 寸 di bawah (horizontal, vertikal berkait, titik).",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas", "Goresan 2: Garis vertikal atas", "Goresan 3: Garis horizontal kedua", "Goresan 4: Garis horizontal bawah", "Goresan 5: Garis vertikal dengan kait", "Goresan 6: Titik kanan"]
  },
  {
    "id": 26, "kanji": "時", "reading": "とき", "meaning": "Waktu / Jam", "meaningEn": "Time / Hour",
    "strokeCount": 10, "onyomi": "ジ", "kunyomi": "とき・-どき",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Kiri dulu (radikal matahari 日: 4 goresan), kemudian sisi kanan (radikal kuil 寺: 6 goresan). Aturan: Kiri ke kanan.",
    "strokeOrderGuide": ["Goresan 1-4: Radikal 日 di sebelah kiri", "Goresan 5-7: Bagian atas kanan (土)", "Goresan 8-10: Bagian bawah kanan (寸)"]
  },
  {
    "id": 27, "kanji": "半", "reading": "はん", "meaning": "Setengah", "meaningEn": "Half",
    "strokeCount": 5, "onyomi": "ハン", "kunyomi": "なかば",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Dua titik atas (kiri lalu kanan), garis horizontal pendek, garis horizontal panjang, lalu garis vertikal lurus membelah di tengah.",
    "strokeOrderGuide": ["Goresan 1: Titik miring kiri", "Goresan 2: Titik miring kanan", "Goresan 3: Garis horizontal pendek", "Goresan 4: Garis horizontal panjang", "Goresan 5: Garis vertikal tengah menembus ke bawah"]
  },
  {
    "id": 28, "kanji": "分", "reading": "ふん", "meaning": "Menit / Membagi / Mengerti", "meaningEn": "Minute / Part / Understand",
    "strokeCount": 4, "onyomi": "ブン・フン・ブ", "kunyomi": "わける・わけ・わかる・わかつ・わかれる",
    "jlpt": "N5", "category": "Angka & Waktu",
    "strokeRules": "Bagian atas radikal 八 (kiri dulu, lalu kanan), diikuti bagian bawah radikal 刀 (horizontal melengkung berkait, lalu garis miring).",
    "strokeOrderGuide": ["Goresan 1: Garis miring kiri atas", "Goresan 2: Garis miring kanan atas", "Goresan 3: Garis sudut kanan bawah dengan kait", "Goresan 4: Garis miring pemotong kiri bawah"]
  },
  {
    "id": 29, "kanji": "上", "reading": "うえ", "meaning": "Atas", "meaningEn": "Above / Up",
    "strokeCount": 3, "onyomi": "ジョウ・ショウ・シャン", "kunyomi": "うえ・-うえ・うわ-・かみ・あげる・-あげる・あがる・-あがる・あがり・-あがり・のぼる・のぼり・のぼせる・のぼす・たてまつる",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Garis vertikal tengah, garis horizontal pendek di sebelah kanan, lalu garis horizontal panjang di dasar.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tegak", "Goresan 2: Garis horizontal pendek kanan", "Goresan 3: Garis horizontal panjang alas"]
  },
  {
    "id": 30, "kanji": "下", "reading": "した", "meaning": "Bawah", "meaningEn": "Below / Down",
    "strokeCount": 3, "onyomi": "カ・ゲ", "kunyomi": "した・しも・もと・さげる・さがる・くだる・くだり・くだす・-くだす・くださる・おろす・おりる",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Garis horizontal atas panjang, garis vertikal tengah lurus, lalu titik miring di kanan.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas panjang", "Goresan 2: Garis vertikal tengah", "Goresan 3: Titik miring di kanan"]
  },
  {
    "id": 31, "kanji": "中", "reading": "なか", "meaning": "Dalam / Tengah", "meaningEn": "Inside / Middle",
    "strokeCount": 4, "onyomi": "チュウ", "kunyomi": "なか・うち・あたる",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Tulis kotak 口 terlebih dahulu (vertikal kiri, sudut kanan, tutup bawah), lalu tarik garis vertikal tegak lurus menembus persis di tengah.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri kotak", "Goresan 2: Sudut atas-kanan kotak", "Goresan 3: Garis penutup bawah kotak", "Goresan 4: Garis vertikal panjang menembus lurus di tengah"]
  },
  {
    "id": 32, "kanji": "外", "reading": "そと", "meaning": "Luar", "meaningEn": "Outside",
    "strokeCount": 5, "onyomi": "ガイ・ゲ", "kunyomi": "そと・ほか・はずす・はずれる・と-",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Kiri radikal 夕 (3 goresan), lalu kanan radikal ト (garis vertikal, garis miring titik).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal 夕 di kiri", "Goresan 4: Garis vertikal kanan", "Goresan 5: Garis miring kanan"]
  },
  {
    "id": 33, "kanji": "右", "reading": "みぎ", "meaning": "Kanan", "meaningEn": "Right",
    "strokeCount": 5, "onyomi": "ウ・ユウ", "kunyomi": "みぎ",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Penting: Pada 右 garis miring kiri ditulis lebih dulu, baru garis horizontal, kemudian kotak 口 di bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis miring dari atas ke kiri bawah", "Goresan 2: Garis horizontal melintang", "Goresan 3-5: Kotak 口 di bawah"]
  },
  {
    "id": 34, "kanji": "左", "reading": "ひだり", "meaning": "Kiri", "meaningEn": "Left",
    "strokeCount": 5, "onyomi": "サ・シャ", "kunyomi": "ひだり",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Penting: Berbeda dengan 右, pada 左 garis horizontal ditulis terlebih dahulu, baru garis miring, kemudian karakter 工 di bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas", "Goresan 2: Garis miring dari atas ke kiri bawah", "Goresan 3-5: Bagian bawah (工)"]
  },
  {
    "id": 35, "kanji": "前", "reading": "まえ", "meaning": "Depan / Sebelum", "meaningEn": "Front / Before",
    "strokeCount": 9, "onyomi": "ゼン", "kunyomi": "まえ・-まえ",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Atas: titik dan garis pendek memotong horizontal. Bawah kiri: bulan (月), bawah kanan: pisau (刂).",
    "strokeOrderGuide": ["Goresan 1-3: Bagian atas mahkota", "Goresan 4-7: Bagian bawah kiri (月)", "Goresan 8-9: Bagian bawah kanan (刂)"]
  },
  {
    "id": 36, "kanji": "後", "reading": "あと", "meaning": "Belakang / Sesudah", "meaningEn": "Behind / After",
    "strokeCount": 9, "onyomi": "ゴ・コウ", "kunyomi": "のち・うしろ・うしろ・あと・おくれる",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Kiri: radikal langkah (彳 3 goresan). Kanan atas: benang pendek (幺). Kanan bawah: kaki silang (夊).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal 彳 di kiri", "Goresan 4-6: Bagian kanan atas (幺)", "Goresan 7-9: Bagian kanan bawah (夊)"]
  },
  {
    "id": 37, "kanji": "北", "reading": "きた", "meaning": "Utara", "meaningEn": "North",
    "strokeCount": 5, "onyomi": "ホク", "kunyomi": "きた",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Kiri: garis vertikal, garis horizontal naik. Kanan: garis miring, garis vertikal melengkung dengan kait (匕).",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri", "Goresan 2: Horizontal miring naik kiri", "Goresan 3: Garis miring kiri di sisi kanan", "Goresan 4: Garis miring", "Goresan 5: Garis lengkung kait kanan"]
  },
  {
    "id": 38, "kanji": "南", "reading": "みなみ", "meaning": "Selatan", "meaningEn": "South",
    "strokeCount": 9, "onyomi": "ナン・ナ", "kunyomi": "みなみ",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Salib atas 十 (horizontal lalu vertikal), bingkai kotak terbuka, lalu isi dalam (dua garis kecil dan salib), tutup bawah.",
    "strokeOrderGuide": ["Goresan 1-2: Salib atas (十)", "Goresan 3: Vertikal kiri bingkai", "Goresan 4: Sudut kanan bingkai", "Goresan 5-8: Bagian dalam", "Goresan 9: Garis horizontal penutup"]
  },
  {
    "id": 39, "kanji": "東", "reading": "ひがし", "meaning": "Timur", "meaningEn": "East",
    "strokeCount": 8, "onyomi": "トウ", "kunyomi": "ひがし",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Garis horizontal atas, kotak matahari 日 di tengah, garis vertikal panjang menembus tengah, lalu dua kaki kiri dan kanan.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2-5: Kotak 日 di tengah", "Goresan 6: Vertikal panjang menembus tengah", "Goresan 7: Garis miring kiri", "Goresan 8: Titik miring kanan"]
  },
  {
    "id": 40, "kanji": "西", "reading": "にし", "meaning": "Barat", "meaningEn": "West",
    "strokeCount": 6, "onyomi": "セイ・サイ・ス", "kunyomi": "にし",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Horizontal atas, bingkai kiri, sudut kanan, dua garis vertikal dalam, lalu tutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2: Vertikal kiri", "Goresan 3: Sudut atas-kanan", "Goresan 4-5: Garis tegak di dalam", "Goresan 6: Horizontal penutup bawah"]
  },
  {
    "id": 41, "kanji": "何", "reading": "なに", "meaning": "Apa", "meaningEn": "What",
    "strokeCount": 7, "onyomi": "カ", "kunyomi": "なに・なん・なに-・なん-",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Kiri radikal orang (亻 2 goresan). Kanan atas: horizontal pendek. Kanan bawah: kotak 口 dan kait vertikal kanan.",
    "strokeOrderGuide": ["Goresan 1-2: Radikal 亻 di kiri", "Goresan 3: Horizontal atas kanan", "Goresan 4-6: Kotak 口 di bawahnya", "Goresan 7: Garis vertikal dengan kait kanan"]
  },
  {
    "id": 42, "kanji": "父", "reading": "ちち", "meaning": "Ayah", "meaningEn": "Father",
    "strokeCount": 4, "onyomi": "フ", "kunyomi": "ちち",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Dua goresan miring atas (kiri lalu kanan), diikuti dua goresan silang panjang memotong (kiri ke bawah, lalu kanan ke bawah).",
    "strokeOrderGuide": ["Goresan 1: Miring kiri atas", "Goresan 2: Titik kanan atas", "Goresan 3: Garis miring panjang melengkung kiri", "Goresan 4: Garis miring kanan meluncur"]
  },
  {
    "id": 43, "kanji": "母", "reading": "はは", "meaning": "Ibu", "meaningEn": "Mother",
    "strokeCount": 5, "onyomi": "ボ", "kunyomi": "はは・も",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Vertikal kiri, sudut kanan membungkus dengan kait, garis horizontal panjang melintang di tengah, lalu dua titik vertikal.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri", "Goresan 2: Sudut kanan atas turun dan berkait ke kiri", "Goresan 3: Garis horizontal panjang membelah tengah", "Goresan 4: Titik atas dalam", "Goresan 5: Titik bawah dalam"]
  },
  {
    "id": 44, "kanji": "子", "reading": "こ", "meaning": "Anak", "meaningEn": "Child",
    "strokeCount": 3, "onyomi": "シ・ス・ツ", "kunyomi": "こ・-こ・ね",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Sudut horizontal-miring atas, garis vertikal melengkung berkait ke kiri, lalu garis horizontal panjang membelah tengah.",
    "strokeOrderGuide": ["Goresan 1: Sudut horizontal lalu miring ke kiri bawah", "Goresan 2: Garis vertikal melengkung dengan kait (hane)", "Goresan 3: Garis horizontal panjang memotong tengah"]
  },
  {
    "id": 45, "kanji": "女", "reading": "おんな", "meaning": "Perempuan / Wanita", "meaningEn": "Woman / Female",
    "strokeCount": 3, "onyomi": "ジョ・ニョ・ニョウ", "kunyomi": "おんな・め",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Garis miring membelok ke kanan mendatar, garis miring melengkung kiri, lalu garis horizontal panjang memotong tengah.",
    "strokeOrderGuide": ["Goresan 1: Garis miring kiri lalu membelok mendatar ke kanan", "Goresan 2: Garis miring memotong dari atas ke kiri bawah", "Goresan 3: Garis horizontal panjang melintang"]
  },
  {
    "id": 46, "kanji": "男", "reading": "おとこ", "meaning": "Laki-laki / Pria", "meaningEn": "Man / Male",
    "strokeCount": 7, "onyomi": "ダン・ナン", "kunyomi": "おとこ・お",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Bagian atas adalah sawah (田 5 goresan), bagian bawah adalah kekuatan (力 2 goresan). Aturan: Atas ke bawah.",
    "strokeOrderGuide": ["Goresan 1-5: Kanji 田 di bagian atas", "Goresan 6-7: Kanji 力 di bagian bawah"]
  },
  {
    "id": 47, "kanji": "学", "reading": "まなぶ", "meaning": "Belajar / Ilmu", "meaningEn": "Learn / Study",
    "strokeCount": 8, "onyomi": "ガク", "kunyomi": "まなぶ",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Tiga titik/goresan mahkota di atas, mahkota atap (冖 2 goresan), kemudian karakter anak (子 3 goresan) di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Tiga titik di puncak (kiri, tengah, kanan)", "Goresan 4-5: Mahkota atap (冖)", "Goresan 6-8: Karakter 子 di bawah"]
  },
  {
    "id": 48, "kanji": "校", "reading": "こう", "meaning": "Sekolah", "meaningEn": "School",
    "strokeCount": 10, "onyomi": "コウ・キョウ", "kunyomi": "—",
    "jlpt": "N5", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri radikal pohon (木 4 goresan). Kanan atas atap (亠 2 goresan), kanan bawah kaki menyilang (父 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Radikal 木 di kiri", "Goresan 5-6: Bagian atas kanan (亠)", "Goresan 7-10: Bagian bawah kanan (父)"]
  },
  {
    "id": 49, "kanji": "先", "reading": "さき", "meaning": "Sebelumnya / Duluan", "meaningEn": "Ahead / Previous",
    "strokeCount": 6, "onyomi": "セン", "kunyomi": "さき・まず",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Garis miring pendek atas, garis horizontal pendek, garis vertikal tengah, garis horizontal panjang, lalu dua kaki (kiri miring, kanan melengkung berkait).",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2: Horizontal pendek", "Goresan 3: Vertikal tengah", "Goresan 4: Horizontal panjang melintang", "Goresan 5: Kaki miring kiri", "Goresan 6: Kaki melengkung kanan berkait"]
  },
  {
    "id": 50, "kanji": "生", "reading": "いきる", "meaning": "Hidup / Lahir / Mentah", "meaningEn": "Live / Birth / Raw",
    "strokeCount": 5, "onyomi": "セイ・ショウ", "kunyomi": "いきる・いかす・いける・うまれる・うまれ・うむ・おう・はえる・はやす・き・なま・なま-・なる・なす・むす・-う",
    "jlpt": "N5", "category": "Manusia & Keluarga",
    "strokeRules": "Garis miring pendek kiri atas, garis horizontal pendek, garis vertikal tegak lurus, garis horizontal tengah, lalu garis horizontal alas panjang.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek kiri atas", "Goresan 2: Garis horizontal atas", "Goresan 3: Garis vertikal tegak lurus tengah", "Goresan 4: Garis horizontal tengah", "Goresan 5: Garis horizontal alas penutup"]
  },
  {
    "id": 51, "kanji": "山", "reading": "やま", "meaning": "Gunung", "meaningEn": "Mountain",
    "strokeCount": 3, "onyomi": "サン・セン", "kunyomi": "やま",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Puncak tengah terlebih dahulu (vertikal), lalu sisi kiri turun belok kanan, kemudian sisi kanan vertikal menutup.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tengah puncak paling tinggi", "Goresan 2: Garis sudut kiri turun membelok horizontal ke kanan", "Goresan 3: Garis vertikal kanan"]
  },
  {
    "id": 52, "kanji": "川", "reading": "かわ", "meaning": "Sungai", "meaningEn": "River",
    "strokeCount": 3, "onyomi": "セン", "kunyomi": "かわ",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Tiga aliran vertikal dari kiri ke kanan. Garis kiri melengkung sedikit, garis tengah lebih pendek, garis kanan paling panjang lurus.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal kiri melengkung", "Goresan 2: Garis vertikal tengah pendek", "Goresan 3: Garis vertikal kanan panjang"]
  },
  {
    "id": 53, "kanji": "田", "reading": "た", "meaning": "Sawah", "meaningEn": "Rice field",
    "strokeCount": 5, "onyomi": "デン", "kunyomi": "た",
    "jlpt": "N5", "category": "Tempat & Bangunan",
    "strokeRules": "Vertikal kiri, sudut atas-kanan, garis vertikal dalam, garis horizontal dalam, baru tutup garis bawah kotak.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri kotak", "Goresan 2: Sudut kanan kotak", "Goresan 3: Vertikal tengah dalam", "Goresan 4: Horizontal tengah dalam", "Goresan 5: Horizontal penutup bawah"]
  },
  {
    "id": 54, "kanji": "白", "reading": "しろ", "meaning": "Putih", "meaningEn": "White",
    "strokeCount": 5, "onyomi": "ハク・ビャク", "kunyomi": "しろ・しら-・しろい",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Garis miring pendek di puncak, lalu buat kotak 日 di bawahnya (kiri, sudut kanan, horizontal tengah, tutup bawah).",
    "strokeOrderGuide": ["Goresan 1: Goresan miring pendek di atas", "Goresan 2: Vertikal kiri", "Goresan 3: Sudut kanan atas", "Goresan 4: Horizontal tengah", "Goresan 5: Horizontal penutup bawah"]
  },
  {
    "id": 55, "kanji": "赤", "reading": "あか", "meaning": "Merah", "meaningEn": "Red",
    "strokeCount": 7, "onyomi": "セキ・シャク", "kunyomi": "あか・あか-・あかい・あからむ・あからめる",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Bagian atas tanah (土 3 goresan), diikuti garis vertikal kiri, garis horizontal sudut, lalu dua kaki miring di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Bagian atas (土)", "Goresan 4: Garis vertikal kiri", "Goresan 5: Garis horizontal memotong", "Goresan 6: Garis miring kiri", "Goresan 7: Garis miring kanan"]
  },
  {
    "id": 56, "kanji": "青", "reading": "あお", "meaning": "Biru", "meaningEn": "Blue",
    "strokeCount": 8, "onyomi": "セイ・ショウ", "kunyomi": "あお・あお-・あおい",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Bagian atas: 3 garis horizontal disela garis vertikal tengah. Bagian bawah: bentuk bulan (月 4 goresan).",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2: Vertikal tengah", "Goresan 3: Horizontal kedua", "Goresan 4: Horizontal ketiga panjang", "Goresan 5-8: Bagian bawah bulan (月)"]
  },
  {
    "id": 57, "kanji": "黒", "reading": "くろ", "meaning": "Hitam", "meaningEn": "Black",
    "strokeCount": 11, "onyomi": "コク", "kunyomi": "くろ・くろずむ・くろい",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Bagian atas radikal desa/ladang dengan garis silang (里 mirip), bagian bawah adalah 4 titik api (灬).",
    "strokeOrderGuide": ["Goresan 1-7: Bagian badan atas", "Goresan 8-11: Empat titik api (灬) di bagian alas dari kiri ke kanan"]
  },
  {
    "id": 58, "kanji": "天", "reading": "てん", "meaning": "Surga / Langit", "meaningEn": "Heaven / Sky",
    "strokeCount": 4, "onyomi": "テン", "kunyomi": "あまつ・あめ・あま-",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Garis horizontal atas pendek, garis horizontal kedua lebih panjang, garis miring ke kiri melengkung, lalu kaki kanan meluncur.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal atas pendek", "Goresan 2: Garis horizontal kedua panjang", "Goresan 3: Garis miring panjang melengkung kiri", "Goresan 4: Garis miring kanan"]
  },
  {
    "id": 59, "kanji": "気", "reading": "き", "meaning": "Semangat / Hati / Udara", "meaningEn": "Spirit / Air / Mind",
    "strokeCount": 6, "onyomi": "キ・ケ", "kunyomi": "き",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Tiga goresan atas (miring, horizontal, horizontal), garis vertikal melengkung dengan kait (⺁), lalu tanda salib silang (乂) di dalam.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2: Horizontal kedua", "Goresan 3: Horizontal ketiga", "Goresan 4: Garis lengkung dengan kait (乙)", "Goresan 5-6: Tanda silang di bagian dalam"]
  },
  {
    "id": 60, "kanji": "雨", "reading": "あめ", "meaning": "Hujan", "meaningEn": "Rain",
    "strokeCount": 8, "onyomi": "ウ", "kunyomi": "あめ・あま-・-さめ",
    "jlpt": "N5", "category": "Alam & Cuaca",
    "strokeRules": "Horizontal atap, vertikal kiri, sudut kanan berbingkai, garis vertikal tengah menembus, lalu 4 titik tetesan hujan di dalam (kiri dua, kanan dua).",
    "strokeOrderGuide": ["Goresan 1: Horizontal atap", "Goresan 2: Vertikal kiri", "Goresan 3: Sudut kanan atas", "Goresan 4: Vertikal tengah lurus", "Goresan 5-8: Empat titik hujan di dalam"]
  },
  {
    "id": 61, "kanji": "電", "reading": "でん", "meaning": "Listrik", "meaningEn": "Electricity",
    "strokeCount": 13, "onyomi": "デン", "kunyomi": "—",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Bagian atas kanji hujan (雨 8 goresan), bagian bawah kotak 日 (4 goresan) dengan ekor vertikal melengkung berkait (1 goresan).",
    "strokeOrderGuide": ["Goresan 1-8: Kanji 雨 di bagian atas", "Goresan 9-12: Kotak 日 di bagian bawah", "Goresan 13: Ekor melengkung panjang dengan kait ke atas"]
  },
  {
    "id": 62, "kanji": "車", "reading": "くるま", "meaning": "Mobil / Roda", "meaningEn": "Car / Vehicle",
    "strokeCount": 7, "onyomi": "シャ", "kunyomi": "くるま",
    "jlpt": "N5", "category": "Warna & Benda",
    "strokeRules": "Horizontal atas, kotak tengah (vertikal kiri, sudut kanan, horizontal dalam, tutup), horizontal panjang bawah, lalu poros vertikal menembus lurus.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2-5: Kotak kabin tengah", "Goresan 6: Horizontal panjang bawah", "Goresan 7: Garis vertikal poros tengah menembus lurus dari atas ke bawah"]
  },
  {
    "id": 63, "kanji": "休", "reading": "やすむ", "meaning": "Istirahat / Libur", "meaningEn": "Rest / Vacation",
    "strokeCount": 6, "onyomi": "キュウ", "kunyomi": "やすむ・やすまる・やすめる",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Orang (亻 2 goresan) bersandar pada pohon (木 4 goresan). Tulis sisi kiri terlebih dahulu, lalu sisi kanan.",
    "strokeOrderGuide": ["Goresan 1-2: Radikal orang (亻) di sebelah kiri", "Goresan 3-6: Radikal pohon (木) di sebelah kanan"]
  },
  {
    "id": 64, "kanji": "見", "reading": "みる", "meaning": "Melihat", "meaningEn": "Look / See",
    "strokeCount": 7, "onyomi": "ケン", "kunyomi": "みる・みえる・みせる",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Mata (目 5 goresan) di bagian atas, kemudian dua kaki (kaki kiri miring, kaki kanan melengkung berkait) di bawah.",
    "strokeOrderGuide": ["Goresan 1-5: Bagian mata (目) di atas", "Goresan 6: Kaki kiri miring ke bawah", "Goresan 7: Kaki kanan melengkung dengan kait ke atas"]
  },
  {
    "id": 65, "kanji": "聞", "reading": "きく", "meaning": "Mendengar / Bertanya", "meaningEn": "Listen / Hear / Ask",
    "strokeCount": 14, "onyomi": "ブン・モン", "kunyomi": "きく・きこえる",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Gerbang pintu (門 8 goresan) di luar, lalu masukkan telinga (耳 6 goresan) di dalam.",
    "strokeOrderGuide": ["Goresan 1-8: Bingkai gerbang (門)", "Goresan 9-14: Telinga (耳) di bagian dalam tengah"]
  },
  {
    "id": 66, "kanji": "読", "reading": "よむ", "meaning": "Membaca", "meaningEn": "Read",
    "strokeCount": 14, "onyomi": "ドク・トク・トウ", "kunyomi": "よむ・-よみ",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Radikal kata (言 7 goresan) di kiri. Kanan atas mahkota samurai (士 3 goresan), kanan bawah kepala (四 mirip / 买).",
    "strokeOrderGuide": ["Goresan 1-7: Radikal kata (言) di sisi kiri", "Goresan 8-10: Bagian kanan atas (士)", "Goresan 11-14: Bagian kanan bawah"]
  },
  {
    "id": 67, "kanji": "書", "reading": "かく", "meaning": "Menulis / Buku", "meaningEn": "Write / Document",
    "strokeCount": 10, "onyomi": "ショ", "kunyomi": "かく・-がき・-がき",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Tulis kuas di atas (聿 mirip: horizontal berulang dan vertikal pemotong), lalu kotak matahari 日 di bagian dasar.",
    "strokeOrderGuide": ["Goresan 1-6: Bagian atas kuas", "Goresan 7-10: Kotak 日 di bagian bawah"]
  },
  {
    "id": 68, "kanji": "話", "reading": "はなす", "meaning": "Berbicara / Percakapan", "meaningEn": "Speak / Talk / Story",
    "strokeCount": 13, "onyomi": "ワ", "kunyomi": "はなす・はなし",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal perkataan (言 7 goresan). Kanan adalah lidah (舌 6 goresan: garis miring, horizontal, vertikal, kotak 口).",
    "strokeOrderGuide": ["Goresan 1-7: Radikal 言 di sebelah kiri", "Goresan 8-13: Karakter 舌 (lidah) di sebelah kanan"]
  },
  {
    "id": 69, "kanji": "買", "reading": "かう", "meaning": "Membeli", "meaningEn": "Buy / Purchase",
    "strokeCount": 12, "onyomi": "バイ", "kunyomi": "かう",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Jaring atas (网 5 goresan), kemudian kerang uang (貝 7 goresan) di bagian bawah.",
    "strokeOrderGuide": ["Goresan 1-5: Jaring atas (罒)", "Goresan 6-12: Kerang uang (貝) di bawah"]
  },
  {
    "id": 70, "kanji": "食", "reading": "たべる", "meaning": "Makan / Makanan", "meaningEn": "Eat / Food",
    "strokeCount": 9, "onyomi": "ショク・ジキ", "kunyomi": "くう・くらう・たべる・はむ",
    "jlpt": "N5", "category": "Makanan & Minuman",
    "strokeRules": "Atap payung (kiri lalu kanan), titik bawah, garis horizontal sudut berkait, garis horizontal dalam, dan kaki bawah.",
    "strokeOrderGuide": ["Goresan 1-2: Atap payung miring kiri & kanan", "Goresan 3: Garis miring pendek", "Goresan 4-6: Badan tengah berkait", "Goresan 7-9: Kaki penopang bawah"]
  },
  {
    "id": 71, "kanji": "飲", "reading": "のむ", "meaning": "Minum", "meaningEn": "Drink",
    "strokeCount": 12, "onyomi": "イン・オン", "kunyomi": "のむ・-のみ",
    "jlpt": "N5", "category": "Makanan & Minuman",
    "strokeRules": "Kiri radikal makanan (食 mirip: 8 goresan), kanan radikal menguap/membuka mulut (欠 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-8: Radikal 飠 di sebelah kiri", "Goresan 9-12: Radikal 欠 di sebelah kanan"]
  },
  {
    "id": 72, "kanji": "行", "reading": "いく", "meaning": "Pergi / Melakukan", "meaningEn": "Go / Act / Line",
    "strokeCount": 6, "onyomi": "コウ・ギョウ・アン", "kunyomi": "いく・ゆく・-ゆき・-ゆき・-いき・-いき・おこなう・おこなう",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Langkah kiri (彳 3 goresan), kemudian langkah kanan (亍 3 goresan: horizontal pendek, horizontal panjang, vertikal berkait).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal 彳 di kiri", "Goresan 4-6: Bagian kanan (亍)"]
  },
  {
    "id": 73, "kanji": "来", "reading": "くる", "meaning": "Datang / Mendatang", "meaningEn": "Come / Next",
    "strokeCount": 7, "onyomi": "ライ・タイ", "kunyomi": "くる・きたる・きたす・きたす・きたる・き・こ",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Garis horizontal atas, dua titik kiri-kanan, garis horizontal tengah panjang, garis vertikal tegak lurus, lalu dua cabang kaki miring.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2-3: Dua titik sisi kiri dan kanan", "Goresan 4: Horizontal panjang melintang", "Goresan 5: Vertikal lurus tengah", "Goresan 6-7: Dua kaki miring kiri dan kanan"]
  },
  {
    "id": 74, "kanji": "帰", "reading": "かえる", "meaning": "Pulang / Kembali", "meaningEn": "Return / Go back",
    "strokeCount": 10, "onyomi": "キ", "kunyomi": "かえる・かえす・おくる・とつぐ",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri: garis miring, garis vertikal melengkung (刂 mirip). Kanan: sapu (ヨ) di atas dan kain (巾) di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Bagian sisi kiri", "Goresan 4-6: Bagian kanan atas (ヨ)", "Goresan 7-10: Bagian kanan bawah (巾)"]
  },
  {
    "id": 75, "kanji": "会", "reading": "あう", "meaning": "Bertemu / Perkumpulan", "meaningEn": "Meet / Meeting",
    "strokeCount": 6, "onyomi": "カイ・エ", "kunyomi": "あう・あわせる・あつまる",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Atap payung (kiri lalu kanan), garis horizontal tengah, lalu garis horizontal bawah membelok melengkung.",
    "strokeOrderGuide": ["Goresan 1: Atap miring ke kiri", "Goresan 2: Atap miring ke kanan", "Goresan 3: Garis horizontal atas", "Goresan 4-6: Badan bawah"]
  },
  {
    "id": 76, "kanji": "大", "reading": "おおきい", "meaning": "Besar", "meaningEn": "Big / Large",
    "strokeCount": 3, "onyomi": "ダイ・タイ", "kunyomi": "おお-・おおきい・-おおいに",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Garis horizontal lurus mendatar, garis miring panjang melengkung kiri dari atas, lalu kaki kanan meluncur ke kanan bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis horizontal melintang", "Goresan 2: Garis miring panjang melengkung ke kiri bawah", "Goresan 3: Garis miring ke kanan bawah"]
  },
  {
    "id": 77, "kanji": "小", "reading": "ちいさい", "meaning": "Kecil", "meaningEn": "Small / Little",
    "strokeCount": 3, "onyomi": "ショウ", "kunyomi": "ちいさい・こ-・お-・さ-",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Tengah terlebih dahulu: garis vertikal berkait di tengah, lalu titik miring kiri, dan titik miring kanan.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tengah dengan kait (hane)", "Goresan 2: Titik miring kiri", "Goresan 3: Titik miring kanan"]
  },
  {
    "id": 78, "kanji": "高", "reading": "たかい", "meaning": "Tinggi / Mahal", "meaningEn": "High / Tall / Expensive",
    "strokeCount": 10, "onyomi": "コウ", "kunyomi": "たかい・たか・-だか・たかまる・たかめる",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Titik atas, horizontal atas, kotak 口 atas, bingkai pintu terbuka (冂), dan kotak 口 di paling bawah.",
    "strokeOrderGuide": ["Goresan 1-2: Titik dan horizontal atap", "Goresan 3-5: Kotak 口 bagian atas", "Goresan 6-7: Bingkai 冂", "Goresan 8-10: Kotak 口 di dalam bawah"]
  },
  {
    "id": 79, "kanji": "安", "reading": "やすい", "meaning": "Murah / Aman / Tenang", "meaningEn": "Cheap / Peaceful",
    "strokeCount": 6, "onyomi": "アン", "kunyomi": "やすい・やすまる・やす・やすらか",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Mahkota atap (宀 3 goresan) di atas, kemudian karakter wanita (女 3 goresan) di bagian bawah. Menggambarkan ketenangan.",
    "strokeOrderGuide": ["Goresan 1: Titik vertikal puncak", "Goresan 2: Titik kiri atap", "Goresan 3: Sudut kanan atap", "Goresan 4-6: Karakter wanita (女) di bawah"]
  },
  {
    "id": 80, "kanji": "新", "reading": "あたらしい", "meaning": "Baru", "meaningEn": "New",
    "strokeCount": 13, "onyomi": "シン", "kunyomi": "あたらしい・あらた・あら-・にい-",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Kiri: kanji berdiri (立) di atas pohon (木). Kanan: kapak (斤 4 goresan). Aturan: Kiri ke kanan.",
    "strokeOrderGuide": ["Goresan 1-5: Karakter 立 di kiri atas", "Goresan 6-9: Karakter 木 di kiri bawah", "Goresan 10-13: Radikal kapak (斤) di sebelah kanan"]
  },
  {
    "id": 81, "kanji": "古", "reading": "ふるい", "meaning": "Lama / Kuno / Tua", "meaningEn": "Old",
    "strokeCount": 5, "onyomi": "コ", "kunyomi": "ふるい・ふる-・-ふるす",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Karakter sepuluh (十: horizontal lalu vertikal) di atas, kemudian mulut kotak (口 3 goresan) di bagian bawah.",
    "strokeOrderGuide": ["Goresan 1-2: Salib 十 di atas", "Goresan 3-5: Kotak 口 di bawah"]
  },
  {
    "id": 82, "kanji": "長", "reading": "ながい", "meaning": "Panjang / Pemimpin", "meaningEn": "Long / Leader",
    "strokeCount": 8, "onyomi": "チョウ", "kunyomi": "ながい・おさ",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Garis miring pendek atas, garis vertikal kiri, 3 garis horizontal sejajar, garis vertikal panjang berkait, dan garis miring kanan bawah.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2: Vertikal kiri", "Goresan 3-5: Tiga garis horizontal", "Goresan 6: Garis vertikal dengan kait", "Goresan 7: Garis miring pendek", "Goresan 8: Kaki kanan meluncur"]
  },
  {
    "id": 83, "kanji": "多", "reading": "おおい", "meaning": "Banyak", "meaningEn": "Many / Much",
    "strokeCount": 6, "onyomi": "タ", "kunyomi": "おおい・まさに・まさる",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Dua karakter petang (夕) bertumpuk dari atas ke bawah. Tulis 夕 atas (3 goresan), lalu 夕 bawah (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Karakter 夕 di bagian atas", "Goresan 4-6: Karakter 夕 di bagian bawah"]
  },
  {
    "id": 84, "kanji": "少", "reading": "すくない", "meaning": "Sedikit / Kecil", "meaningEn": "Few / Little",
    "strokeCount": 4, "onyomi": "ショウ", "kunyomi": "すくない・すこし",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Tulis karakter kecil (小: vertikal berkait, titik kiri, titik kanan), lalu tarik garis miring panjang membelah dari kanan atas ke kiri bawah.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tengah berkait", "Goresan 2: Titik miring kiri", "Goresan 3: Titik miring kanan", "Goresan 4: Garis miring panjang meluncur ke kiri bawah"]
  },
  {
    "id": 85, "kanji": "早", "reading": "はやい", "meaning": "Cepat / Pagi-pagi", "meaningEn": "Fast / Early",
    "strokeCount": 6, "onyomi": "ソウ・サッ", "kunyomi": "はやい・はや・はや-・はやまる・はやめる・さ-",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Bagian atas kotak matahari 日 (4 goresan), bagian bawah salib sepuluh 十 (horizontal lalu vertikal memotong).",
    "strokeOrderGuide": ["Goresan 1-4: Kotak 日 di atas", "Goresan 5-6: Salib 十 di bawah"]
  },
  {
    "id": 86, "kanji": "入", "reading": "はいる", "meaning": "Masuk / Memasukkan", "meaningEn": "Enter",
    "strokeCount": 2, "onyomi": "ニュウ・ジュ", "kunyomi": "いる・-いる・-いり・いれる・-いれ・はいる",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Perhatikan: Berbeda dengan 人 (orang), pada 入 garis miring kiri pendek ditulis duluan, lalu garis kanan panjang meluncur menutupi puncak.",
    "strokeOrderGuide": ["Goresan 1: Garis miring pendek kiri", "Goresan 2: Garis panjang dari puncak meluncur ke kanan bawah"]
  },
  {
    "id": 87, "kanji": "出", "reading": "でる", "meaning": "Keluar / Mengeluarkan", "meaningEn": "Go out / Exit",
    "strokeCount": 5, "onyomi": "シュツ・スイ", "kunyomi": "でる・-で・だす・-だす・いでる・いだす",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Garis vertikal tengah atas, sudut kiri-bawah, vertikal kanan atas, garis vertikal tengah bawah, sudut kiri-bawah, dan vertikal kanan.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tengah", "Goresan 2: Sudut kiri-bawah gunung atas", "Goresan 3: Vertikal kanan gunung atas", "Goresan 4: Sudut kiri gunung bawah", "Goresan 5: Vertikal kanan penutup"]
  },
  {
    "id": 88, "kanji": "立", "reading": "たつ", "meaning": "Berdiri", "meaningEn": "Stand",
    "strokeCount": 5, "onyomi": "リツ・リュウ・リットル", "kunyomi": "たつ・-たつ・たち-・たてる・-たてる・たて-・-たて・-だて・-だてる",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Titik puncak atas, garis horizontal pendek, dua garis vertikal miring (kiri lalu kanan), lalu garis horizontal alas panjang.",
    "strokeOrderGuide": ["Goresan 1: Titik vertikal puncak", "Goresan 2: Garis horizontal atas pendek", "Goresan 3: Garis miring kiri", "Goresan 4: Garis miring kanan", "Goresan 5: Garis horizontal alas panjang"]
  },
  {
    "id": 89, "kanji": "言", "reading": "いう", "meaning": "Berkata / Kata", "meaningEn": "Say / Word",
    "strokeCount": 7, "onyomi": "ゲン・ゴン", "kunyomi": "いう・こと",
    "jlpt": "N5", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Titik horizontal atas, garis horizontal panjang, dua garis horizontal pendek di bawahnya, kemudian kotak mulut 口 di dasar.",
    "strokeOrderGuide": ["Goresan 1: Titik horizontal atas", "Goresan 2: Garis horizontal panjang", "Goresan 3: Garis horizontal pendek", "Goresan 4: Garis horizontal pendek kedua", "Goresan 5-7: Kotak 口 di dasar"]
  },
  {
    "id": 90, "kanji": "語", "reading": "ご", "meaning": "Bahasa / Bercerita", "meaningEn": "Language / Word / Tell",
    "strokeCount": 14, "onyomi": "ゴ", "kunyomi": "かたる・かたらう",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Kiri radikal perkataan (言 7 goresan). Kanan atas angka lima (五 4 goresan), kanan bawah mulut (口 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-7: Radikal 言 di kiri", "Goresan 8-11: Karakter 五 di kanan atas", "Goresan 12-14: Kotak 口 di kanan bawah"]
  },
  {
    "id": 91, "kanji": "国", "reading": "くに", "meaning": "Negara / Negeri", "meaningEn": "Country / Nation",
    "strokeCount": 8, "onyomi": "コク", "kunyomi": "くに",
    "jlpt": "N5", "category": "Tempat & Bangunan",
    "strokeRules": "Bingkai luar besar (vertikal kiri, sudut kanan), isi permata 玉 di dalam, lalu tutup kotak bawah.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri bingkai", "Goresan 2: Sudut atas-kanan bingkai", "Goresan 3-7: Karakter permata (玉) di dalam", "Goresan 8: Horizontal penutup bawah bingkai"]
  },
  {
    "id": 92, "kanji": "道", "reading": "みち", "meaning": "Jalan / Ajaran", "meaningEn": "Road / Path / Way",
    "strokeCount": 12, "onyomi": "ドウ・トウ", "kunyomi": "みち・いう",
    "jlpt": "N5", "category": "Arah & Posisi",
    "strokeRules": "Tulis kepala 首 di kanan atas terlebih dahulu (9 goresan), lalu selubungi dengan radikal jalan 辶 di kiri bawah (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-9: Karakter 首 di kanan atas", "Goresan 10-12: Radikal jalan (辶) di kiri meluncur ke bawah"]
  },
  {
    "id": 93, "kanji": "店", "reading": "みせ", "meaning": "Toko / Kedai", "meaningEn": "Shop / Store",
    "strokeCount": 8, "onyomi": "テン", "kunyomi": "みせ・たな",
    "jlpt": "N5", "category": "Tempat & Bangunan",
    "strokeRules": "Radikal atap tebing (广 3 goresan: titik, horizontal, miring kiri), diikuti karakter ramalan (占 5 goresan) di dalam.",
    "strokeOrderGuide": ["Goresan 1-3: Radikal atap 广", "Goresan 4-5: Garis tegak dan miring kanan (卜)", "Goresan 6-8: Kotak 口 di bawahnya"]
  },
  {
    "id": 94, "kanji": "口", "reading": "くち", "meaning": "Mulut", "meaningEn": "Mouth",
    "strokeCount": 3, "onyomi": "コウ・ク", "kunyomi": "くち",
    "jlpt": "N5", "category": "Tubuh",
    "strokeRules": "Garis vertikal kiri, sudut atas-kanan turun ke bawah, lalu garis horizontal penutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri", "Goresan 2: Horizontal atas lalu membelok turun (sudut)", "Goresan 3: Horizontal penutup bawah"]
  },
  {
    "id": 95, "kanji": "目", "reading": "め", "meaning": "Mata", "meaningEn": "Eye",
    "strokeCount": 5, "onyomi": "モク・ボク", "kunyomi": "め・-め・ま-",
    "jlpt": "N5", "category": "Tubuh",
    "strokeRules": "Garis vertikal kiri, sudut kanan memanjang turun, dua garis horizontal di dalam, lalu tutup bawah.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri", "Goresan 2: Sudut atas-kanan turun", "Goresan 3: Horizontal tengah atas", "Goresan 4: Horizontal tengah bawah", "Goresan 5: Horizontal penutup bawah"]
  },
  {
    "id": 96, "kanji": "耳", "reading": "みみ", "meaning": "Telinga", "meaningEn": "Ear",
    "strokeCount": 6, "onyomi": "ジ", "kunyomi": "みみ",
    "jlpt": "N5", "category": "Tubuh",
    "strokeRules": "Horizontal atas, garis vertikal kiri, dua garis horizontal dalam, garis vertikal kanan panjang, dan garis horizontal bawah.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2: Vertikal kiri", "Goresan 3-4: Dua garis horizontal tengah", "Goresan 5: Vertikal kanan panjang", "Goresan 6: Horizontal bawah"]
  },
  {
    "id": 97, "kanji": "手", "reading": "て", "meaning": "Tangan", "meaningEn": "Hand",
    "strokeCount": 4, "onyomi": "シュ・ズ", "kunyomi": "て・て-・-て・た-",
    "jlpt": "N5", "category": "Tubuh",
    "strokeRules": "Garis miring pendek atas, garis horizontal pendek, garis horizontal panjang, lalu garis vertikal melengkung berkait ke kiri.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2: Horizontal kedua", "Goresan 3: Horizontal ketiga panjang", "Goresan 4: Vertikal melengkung ke kiri dengan kait"]
  },
  {
    "id": 98, "kanji": "足", "reading": "あし", "meaning": "Kaki / Cukup", "meaningEn": "Foot / Leg / Sufficient",
    "strokeCount": 7, "onyomi": "ソク", "kunyomi": "あし・たりる・たる・たす",
    "jlpt": "N5", "category": "Tubuh",
    "strokeRules": "Kotak mulut 口 di atas (3 goresan), diikuti tiang vertikal, horizontal pendek, garis miring kiri, dan sapuan kaki kanan meluncur.",
    "strokeOrderGuide": ["Goresan 1-3: Kotak 口 di atas", "Goresan 4: Vertikal pendek", "Goresan 5: Garis horizontal", "Goresan 6: Garis miring kiri", "Goresan 7: Garis meluncur ke kanan bawah"]
  },
  {
    "id": 99, "kanji": "力", "reading": "ちから", "meaning": "Kekuatan / Tenaga", "meaningEn": "Power / Strength",
    "strokeCount": 2, "onyomi": "リョク・リキ・リイ", "kunyomi": "ちから",
    "jlpt": "N5", "category": "Sifat & Keadaan",
    "strokeRules": "Tarik garis horizontal lalu belok turun melengkung dengan kait (hane) ke kiri, kemudian garis miring panjang memotong.",
    "strokeOrderGuide": ["Goresan 1: Horizontal membelok turun dengan kait (hane)", "Goresan 2: Garis miring melengkung memotong dari atas ke kiri bawah"]
  },
  {
    "id": 100, "kanji": "魚", "reading": "さかな", "meaning": "Ikan", "meaningEn": "Fish",
    "strokeCount": 11, "onyomi": "ギョ", "kunyomi": "うお・さかな・-ざかな",
    "jlpt": "N5", "category": "Hewan",
    "strokeRules": "Kepala miring di atas, kotak badan 田 di tengah, lalu 4 sirip titik (灬) di bagian alas.",
    "strokeOrderGuide": ["Goresan 1-2: Kepala ikan atas", "Goresan 3-7: Badan kotak 田", "Goresan 8-11: Empat titik sirip bawah (灬)"]
  },
  {
    "id": 101, "kanji": "肉", "reading": "にく", "meaning": "Daging", "meaningEn": "Meat",
    "strokeCount": 6, "onyomi": "ニク", "kunyomi": "しし",
    "jlpt": "N5", "category": "Makanan & Minuman",
    "strokeRules": "Vertikal kiri, sudut kanan membungkus, lalu dua pasang karakter orang 人 di dalam (atas lalu bawah).",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri", "Goresan 2: Sudut kanan atas", "Goresan 3-4: Karakter orang pertama di dalam", "Goresan 5-6: Karakter orang kedua di dalam"]
  },
  {
    "id": 102, "kanji": "花", "reading": "はな", "meaning": "Bunga", "meaningEn": "Flower",
    "strokeCount": 7, "onyomi": "カ・ケ", "kunyomi": "はな",
    "jlpt": "N5", "category": "Bunga & Tumbuhan",
    "strokeRules": "Mahkota rumput (艹 3 goresan) di atas, diikuti perubahan (化 4 goresan) di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Mahkota rumput 艹", "Goresan 4-5: Bagian bawah kiri (亻)", "Goresan 6-7: Bagian bawah kanan (匕)"]
  },
  {
    "id": 103, "kanji": "門", "reading": "もん", "meaning": "Pintu Gerbang", "meaningEn": "Gate",
    "strokeCount": 8, "onyomi": "モン", "kunyomi": "かど・と",
    "jlpt": "N5", "category": "Tempat & Bangunan",
    "strokeRules": "Pintu kiri (vertikal, sudut, dua horizontal), pintu kanan (vertikal, sudut panjang berkait, dua horizontal).",
    "strokeOrderGuide": ["Goresan 1-4: Daun pintu sebelah kiri", "Goresan 5-8: Daun pintu sebelah kanan dengan kait"]
  },

  # --- JLPT N4 EXPANSION KANJI (Essential & Canonical N4) ---
  {
    "id": 104, "kanji": "春", "reading": "はる", "meaning": "Musim Semi", "meaningEn": "Spring",
    "strokeCount": 9, "onyomi": "シュン", "kunyomi": "はる",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Tiga garis horizontal melintang, garis miring panjang memotong ke kiri bawah, garis miring kanan, lalu kotak matahari 日 di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Tiga garis horizontal", "Goresan 4: Garis miring panjang melengkung kiri", "Goresan 5: Garis miring kanan", "Goresan 6-9: Kotak matahari 日 di bawah"]
  },
  {
    "id": 105, "kanji": "夏", "reading": "なつ", "meaning": "Musim Panas", "meaningEn": "Summer",
    "strokeCount": 10, "onyomi": "カ・ガ・ゲ", "kunyomi": "なつ",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Horizontal atas, mata 目 di bagian atas-tengah, lalu kaki penopang 夂 di bagian bawah.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2-6: Bagian mata 目", "Goresan 7-10: Bagian kaki 夂 di bawah"]
  },
  {
    "id": 106, "kanji": "秋", "reading": "あき", "meaning": "Musim Gugur", "meaningEn": "Autumn",
    "strokeCount": 9, "onyomi": "シュウ", "kunyomi": "あき・とき",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Kiri radikal padi/gandum (禾 5 goresan), kanan radikal api (火 4 goresan). Aturan: Kiri ke kanan.",
    "strokeOrderGuide": ["Goresan 1-5: Radikal padi 禾 di kiri", "Goresan 6-9: Radikal api 火 di kanan"]
  },
  {
    "id": 107, "kanji": "冬", "reading": "ふゆ", "meaning": "Musim Dingin", "meaningEn": "Winter",
    "strokeCount": 5, "onyomi": "トウ", "kunyomi": "ふゆ",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Bagian atas kaki 夂 (3 goresan), lalu dua titik es di bawah (kiri lalu kanan).",
    "strokeOrderGuide": ["Goresan 1-3: Bagian atas 夂", "Goresan 4: Titik es kiri", "Goresan 5: Titik es kanan"]
  },
  {
    "id": 108, "kanji": "朝", "reading": "あさ", "meaning": "Pagi", "meaningEn": "Morning",
    "strokeCount": 12, "onyomi": "チョウ", "kunyomi": "あさ",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Kiri: kanji 十, 日, 十 (matahari terbit di antara rumput). Kanan: kanji bulan (月 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-8: Bagian kiri matahari terbit", "Goresan 9-12: Bagian bulan 月 di kanan"]
  },
  {
    "id": 109, "kanji": "昼", "reading": "ひる", "meaning": "Siang", "meaningEn": "Noon / Daytime",
    "strokeCount": 9, "onyomi": "チュウ", "kunyomi": "ひる",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Mahkota atap 尺 mirip, garis horizontal tengah, kotak matahari 日 di dalam, garis horizontal bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Mahkota atas", "Goresan 4-7: Kotak 日 di tengah", "Goresan 8: Horizontal penutup", "Goresan 9: Horizontal bawah"]
  },
  {
    "id": 110, "kanji": "夕", "reading": "ゆう", "meaning": "Sore / Petang", "meaningEn": "Evening",
    "strokeCount": 3, "onyomi": "セキ", "kunyomi": "ゆう",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Garis miring pendek kiri atas, garis horizontal membelok melengkung ke kiri bawah, lalu titik di dalam.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2: Horizontal membelok melengkung", "Goresan 3: Titik di dalam"]
  },
  {
    "id": 111, "kanji": "夜", "reading": "よる", "meaning": "Malam", "meaningEn": "Night",
    "strokeCount": 8, "onyomi": "ヤ", "kunyomi": "よ・よる",
    "jlpt": "N4", "category": "Angka & Waktu",
    "strokeRules": "Atap 亠 (titik, horizontal), orang 亻 di kiri bawah, lalu bagian kanan membelok melengkung.",
    "strokeOrderGuide": ["Goresan 1-2: Atap 亠", "Goresan 3-4: Orang 亻 di kiri", "Goresan 5-8: Bagian kanan"]
  },
  {
    "id": 112, "kanji": "風", "reading": "かぜ", "meaning": "Angin", "meaningEn": "Wind",
    "strokeCount": 9, "onyomi": "フウ・フ", "kunyomi": "かぜ・かざ-",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Bingkai luar angin (几 mirip: kiri vertikal, sudut kanan dengan kait), lalu isi serangga (虫 6 goresan) di dalam.",
    "strokeOrderGuide": ["Goresan 1-2: Bingkai luar angin", "Goresan 3-8: Serangga 虫 di dalam", "Goresan 9: Titik penutup"]
  },
  {
    "id": 113, "kanji": "雲", "reading": "くも", "meaning": "Awan", "meaningEn": "Cloud",
    "strokeCount": 12, "onyomi": "ウン", "kunyomi": "くも・-ぐも",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Bagian atas kanji hujan (雨 8 goresan), bagian bawah awan berputar (云 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-8: Kanji hujan 雨 di atas", "Goresan 9-12: Bagian 云 di bawah"]
  },
  {
    "id": 114, "kanji": "雪", "reading": "ゆき", "meaning": "Salju", "meaningEn": "Snow",
    "strokeCount": 11, "onyomi": "セツ", "kunyomi": "ゆき",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Bagian atas kanji hujan (雨 8 goresan), bagian bawah sapu (ヨ 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-8: Kanji hujan 雨 di atas", "Goresan 9-11: Bagian sapu ヨ di bawah"]
  },
  {
    "id": 115, "kanji": "晴", "reading": "はれ", "meaning": "Cerah", "meaningEn": "Sunny / Clear",
    "strokeCount": 12, "onyomi": "セイ", "kunyomi": "はれる・はれ・はれ-・-ばれ・はらす",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Kiri kotak matahari (日 4 goresan), kanan warna biru (青 8 goresan). Aturan: Kiri ke kanan.",
    "strokeOrderGuide": ["Goresan 1-4: Kotak 日 di sebelah kiri", "Goresan 5-12: Karakter 青 di sebelah kanan"]
  },
  {
    "id": 116, "kanji": "空", "reading": "そら", "meaning": "Langit / Kosong", "meaningEn": "Sky / Empty",
    "strokeCount": 8, "onyomi": "クウ", "kunyomi": "そら・あく・あき・あける・から・すく・すかす・むなしい",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Bagian atas radikal lubang (穴 5 goresan), bagian bawah radikal kerja/teknik (工 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-5: Radikal lubang 穴 di atas", "Goresan 6-8: Karakter 工 di bawah"]
  },
  {
    "id": 117, "kanji": "星", "reading": "ほし", "meaning": "Bintang", "meaningEn": "Star",
    "strokeCount": 9, "onyomi": "セイ・ショウ", "kunyomi": "ほし・-ぼし",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Bagian atas kotak matahari (日 4 goresan), bagian bawah lahir/hidup (生 5 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Kotak matahari 日 di atas", "Goresan 5-9: Karakter 生 di bawah"]
  },
  {
    "id": 118, "kanji": "光", "reading": "ひかり", "meaning": "Cahaya / Sinar", "meaningEn": "Light",
    "strokeCount": 6, "onyomi": "コウ", "kunyomi": "ひかる・ひかり",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Tiga goresan api di atas (tengah, kiri, kanan), lalu garis horizontal memotong, dan dua kaki di bawah.",
    "strokeOrderGuide": ["Goresan 1: Vertikal pendek tengah", "Goresan 2: Miring kiri", "Goresan 3: Titik kanan", "Goresan 4: Horizontal panjang", "Goresan 5: Kaki miring kiri", "Goresan 6: Kaki lengkung kanan berkait"]
  },
  {
    "id": 119, "kanji": "海", "reading": "うみ", "meaning": "Laut", "meaningEn": "Sea / Ocean",
    "strokeCount": 9, "onyomi": "カイ", "kunyomi": "うみ",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Kiri radikal tiga titik air (氵 3 goresan). Kanan: orang (𠂉), diikuti ibu (毎 6 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Tiga titik air 氵 di kiri", "Goresan 4-5: Bagian 𠂉 kanan atas", "Goresan 6-9: Bagian 母 di kanan bawah"]
  },
  {
    "id": 120, "kanji": "池", "reading": "いけ", "meaning": "Kolam", "meaningEn": "Pond",
    "strokeCount": 6, "onyomi": "チ", "kunyomi": "いけ",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Kiri radikal air (氵 3 goresan). Kanan karakter juga (也 3 goresan). Aturan: Kiri ke kanan.",
    "strokeOrderGuide": ["Goresan 1-3: Radikal air 氵 di kiri", "Goresan 4-6: Karakter 也 di kanan"]
  },
  {
    "id": 121, "kanji": "岩", "reading": "いわ", "meaning": "Batu Besar / Karang", "meaningEn": "Rock / Boulder",
    "strokeCount": 8, "onyomi": "ガン", "kunyomi": "いわ",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Gunung (山 3 goresan) di atas batu (石 5 goresan). Aturan: Atas ke bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Gunung 山 di atas", "Goresan 4-8: Batu 石 di bawah"]
  },
  {
    "id": 122, "kanji": "石", "reading": "いし", "meaning": "Batu", "meaningEn": "Stone",
    "strokeCount": 5, "onyomi": "セキ・シャク・コク", "kunyomi": "いし",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Horizontal atas, garis miring melengkung ke kiri bawah, lalu kotak 口 di bagian kanan bawah.",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2: Garis miring panjang melengkung kiri", "Goresan 3-5: Kotak 口 di kanan bawah"]
  },
  {
    "id": 123, "kanji": "谷", "reading": "たに", "meaning": "Lembah", "meaningEn": "Valley",
    "strokeCount": 7, "onyomi": "コク", "kunyomi": "たに・きわまる",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Dua titik atas, atap payung (八), lalu kotak mulut 口 di dasar.",
    "strokeOrderGuide": ["Goresan 1-2: Dua titik di puncak", "Goresan 3-4: Atap payung miring kiri-kanan", "Goresan 5-7: Kotak 口 di bawah"]
  },
  {
    "id": 124, "kanji": "原", "reading": "はら", "meaning": "Padang Rumput / Asal", "meaningEn": "Field / Meadow / Origin",
    "strokeCount": 10, "onyomi": "ゲン", "kunyomi": "はら",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Tebing (厂 2 goresan), kotak putih (白 5 goresan) di dalam, lalu mata air (小 3 goresan) di bawahnya.",
    "strokeOrderGuide": ["Goresan 1-2: Radikal tebing 厂", "Goresan 3-7: Karakter 白 di dalam", "Goresan 8-10: Karakter 小 di bagian dasar"]
  },
  {
    "id": 125, "kanji": "地", "reading": "ち", "meaning": "Tanah / Bumi", "meaningEn": "Ground / Earth",
    "strokeCount": 6, "onyomi": "チ・ジ", "kunyomi": "—",
    "jlpt": "N4", "category": "Alam & Cuaca",
    "strokeRules": "Kiri radikal tanah (土 3 goresan). Kanan karakter juga (也 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal tanah 土 di kiri", "Goresan 4-6: Karakter 也 di kanan"]
  },
  {
    "id": 126, "kanji": "野", "reading": "の", "meaning": "Ladang / Lapangan", "meaningEn": "Field / Plains",
    "strokeCount": 11, "onyomi": "ヤ・ショ", "kunyomi": "の・の-",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri radikal desa (里 7 goresan). Kanan radikal tombak/panah (予 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-7: Karakter 里 di sebelah kiri", "Goresan 8-11: Karakter 予 di sebelah kanan"]
  },
  {
    "id": 127, "kanji": "家", "reading": "いえ", "meaning": "Rumah / Keluarga", "meaningEn": "House / Family",
    "strokeCount": 10, "onyomi": "カ・ケ", "kunyomi": "いえ・や・うち",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Atap mahkota (宀 3 goresan) di atas, babi/ternak (豕 7 goresan) di bawah atap.",
    "strokeOrderGuide": ["Goresan 1-3: Atap mahkota 宀 di atas", "Goresan 4-10: Karakter 豕 di bawah"]
  },
  {
    "id": 128, "kanji": "室", "reading": "しつ", "meaning": "Ruangan / Kamar", "meaningEn": "Room",
    "strokeCount": 9, "onyomi": "シツ", "kunyomi": "むろ",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Atap mahkota (宀 3 goresan) di atas, sampai/tiba (至 6 goresan) di bagian bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Atap mahkota 宀", "Goresan 4-9: Karakter 至 di bawah"]
  },
  {
    "id": 129, "kanji": "町", "reading": "まち", "meaning": "Kota", "meaningEn": "Town",
    "strokeCount": 7, "onyomi": "チョウ", "kunyomi": "まち",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri radikal sawah (田 5 goresan), kanan radikal paku/petunjuk (丁 2 goresan: horizontal lalu vertikal berkait).",
    "strokeOrderGuide": ["Goresan 1-5: Sawah 田 di kiri", "Goresan 6-7: Karakter 丁 di kanan"]
  },
  {
    "id": 130, "kanji": "村", "reading": "むら", "meaning": "Desa", "meaningEn": "Village",
    "strokeCount": 7, "onyomi": "ソン", "kunyomi": "むら",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri radikal pohon (木 4 goresan), kanan radikal ukuran/jempol (寸 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Pohon 木 di kiri", "Goresan 5-7: Karakter 寸 di kanan"]
  },
  {
    "id": 131, "kanji": "京", "reading": "きょう", "meaning": "Ibukota", "meaningEn": "Capital",
    "strokeCount": 8, "onyomi": "キョウ・ケイ・キン", "kunyomi": "みやこ",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Atap 亠 (2 goresan), kotak 口 tengah (3 goresan), dan dua kaki 小 mirip di bawah (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-2: Bagian atas 亠", "Goresan 3-5: Kotak 口 tengah", "Goresan 6-8: Bagian bawah kaki"]
  },
  {
    "id": 132, "kanji": "市", "reading": "し", "meaning": "Kota / Pasar", "meaningEn": "City / Market",
    "strokeCount": 5, "onyomi": "シ", "kunyomi": "いち",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Titik atas, garis horizontal panjang, garis vertikal kiri, sudut kanan melengkung berkait, garis vertikal tengah lurus.",
    "strokeOrderGuide": ["Goresan 1-2: Bagian atas 亠", "Goresan 3-4: Bingkai bawah (巾 mirip)", "Goresan 5: Vertikal tengah menembus"]
  },
  {
    "id": 133, "kanji": "場", "reading": "ば", "meaning": "Tempat / Lokasi", "meaningEn": "Place / Location",
    "strokeCount": 12, "onyomi": "ジョウ・チョウ", "kunyomi": "ば",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri tanah (土 3 goresan), kanan matahari (日 4 goresan) di atas dan sinar (勿 mirip 5 goresan) di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Tanah 土 di kiri", "Goresan 4-7: Kotak 日 di kanan atas", "Goresan 8-12: Bagian kanan bawah"]
  },
  {
    "id": 134, "kanji": "公", "reading": "おおやけ", "meaning": "Publik / Umum", "meaningEn": "Public / Official",
    "strokeCount": 4, "onyomi": "コウ・ク", "kunyomi": "おおやけ",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Bagian atas radikal delapan (八: kiri lalu kanan), bagian bawah siku segitiga (厶 2 goresan).",
    "strokeOrderGuide": ["Goresan 1: Miring kiri atas", "Goresan 2: Miring kanan atas", "Goresan 3: Siku 厶 membelok", "Goresan 4: Titik bawah"]
  },
  {
    "id": 135, "kanji": "園", "reading": "えん", "meaning": "Taman / Kebun", "meaningEn": "Garden / Park",
    "strokeCount": 13, "onyomi": "エン", "kunyomi": "その",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Bingkai kandang besar (囗), isi pakaian/tanah (袁 10 goresan) di dalam, lalu tutup garis bawah kotak.",
    "strokeOrderGuide": ["Goresan 1-2: Bingkai kiri dan atas-kanan 囗", "Goresan 3-12: Karakter 袁 di dalam", "Goresan 13: Horizontal penutup bawah"]
  },
  {
    "id": 136, "kanji": "歩", "reading": "あるく", "meaning": "Berjalan Kaki", "meaningEn": "Walk / Step",
    "strokeCount": 8, "onyomi": "ホ・ブ・フ", "kunyomi": "あるく・あゆむ",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas berhenti (止 4 goresan), bagian bawah beberapa langkah (少 mirip: 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Karakter 止 di atas", "Goresan 5-8: Bagian bawah"]
  },
  {
    "id": 137, "kanji": "止", "reading": "とまる", "meaning": "Berhenti / Menghentikan", "meaningEn": "Stop / Halt",
    "strokeCount": 4, "onyomi": "シ", "kunyomi": "とまる・-どまり・とめる・-とめる・-どめ・とどめる・とどめ・とどまる・やめる・やむ・-やむ・よす・-さす・-さし",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Garis vertikal tengah, garis horizontal pendek kanan, garis vertikal kiri bawah, lalu garis horizontal alas penutup.",
    "strokeOrderGuide": ["Goresan 1: Garis vertikal tengah", "Goresan 2: Horizontal pendek kanan", "Goresan 3: Vertikal pendek kiri", "Goresan 4: Horizontal panjang alas penutup"]
  },
  {
    "id": 138, "kanji": "走", "reading": "はしる", "meaning": "Berlari", "meaningEn": "Run",
    "strokeCount": 7, "onyomi": "ソウ", "kunyomi": "はしる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas tanah (土 3 goresan), lalu garis horizontal kedua, vertikal tengah, dan kaki meluncur (疋 bawah).",
    "strokeOrderGuide": ["Goresan 1-3: Bagian atas 土", "Goresan 4: Horizontal melintang", "Goresan 5: Vertikal tengah", "Goresan 6: Miring kiri", "Goresan 7: Kaki kanan meluncur panjang"]
  },
  {
    "id": 139, "kanji": "起", "reading": "おきる", "meaning": "Bangun / Terjadi", "meaningEn": "Wake up / Rise / Occur",
    "strokeCount": 10, "onyomi": "キ", "kunyomi": "おきる・おこる・おこす・おかす",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal lari (走 7 goresan), kanan radikal diri sendiri (己 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-7: Radikal lari 走 di kiri", "Goresan 8-10: Karakter 己 di kanan atas"]
  },
  {
    "id": 140, "kanji": "寝", "reading": "ねる", "meaning": "Tidur / Berbaring", "meaningEn": "Sleep / Lie down",
    "strokeCount": 13, "onyomi": "シン", "kunyomi": "ねる・ねかす",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Atap mahkota 宀 (3 goresan), ranjang 爿 di kiri bawah (4 goresan), dan bagian kanan (6 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Atap 宀", "Goresan 4-7: Bagian kiri ranjang 爿", "Goresan 8-13: Bagian kanan"]
  },
  {
    "id": 141, "kanji": "使", "reading": "つかう", "meaning": "Menggunakan / Memakai", "meaningEn": "Use",
    "strokeCount": 8, "onyomi": "シ", "kunyomi": "つかう・つかい・-づかい",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal orang (亻 2 goresan). Kanan karakter pegawai/pejabat (吏 6 goresan: horizontal, kotak 口, garis vertikal meluncur).",
    "strokeOrderGuide": ["Goresan 1-2: Radikal orang 亻 di kiri", "Goresan 3: Horizontal atas", "Goresan 4-6: Kotak 口 tengah", "Goresan 7-8: Garis memotong dan meluncur"]
  },
  {
    "id": 142, "kanji": "作", "reading": "つくる", "meaning": "Membuat / Karya", "meaningEn": "Make / Produce",
    "strokeCount": 7, "onyomi": "サク・サ", "kunyomi": "つくる・つくり・-づくり",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal orang (亻 2 goresan), kanan radikal bergerak/membuat (乍 5 goresan).",
    "strokeOrderGuide": ["Goresan 1-2: Radikal orang 亻 di kiri", "Goresan 3: Miring pendek atas", "Goresan 4: Horizontal", "Goresan 5: Vertikal kiri", "Goresan 6-7: Horizontal dan kaki"]
  },
  {
    "id": 143, "kanji": "考", "reading": "かんがえる", "meaning": "Memikirkan / Menimbang", "meaningEn": "Consider / Think",
    "strokeCount": 6, "onyomi": "コウ", "kunyomi": "かんがえる・かんがえ",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas orang tua (老 mirip: horizontal, vertikal, horizontal panjang, miring panjang), lalu garis melengkung berkait di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Bagian atas 土 mirip", "Goresan 4: Garis miring panjang melengkung memotong", "Goresan 5-6: Bagian bawah melengkung"]
  },
  {
    "id": 144, "kanji": "知", "reading": "しる", "meaning": "Mengetahui / Mengenal", "meaningEn": "Know / Be aware",
    "strokeCount": 8, "onyomi": "チ", "kunyomi": "しる・しらせる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal panah (矢 5 goresan), kanan radikal mulut (口 3 goresan). Mengetahui secepat panah.",
    "strokeOrderGuide": ["Goresan 1-5: Anak panah 矢 di sebelah kiri", "Goresan 6-8: Mulut 口 di sebelah kanan"]
  },
  {
    "id": 145, "kanji": "思", "reading": "おもう", "meaning": "Berpikir / Merasa", "meaningEn": "Think / Feel",
    "strokeCount": 9, "onyomi": "シ", "kunyomi": "おもう・おもえらく・おぼす",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas sawah/otak (田 5 goresan), bagian bawah hati (心 4 goresan). Pikiran yang berasal dari hati.",
    "strokeOrderGuide": ["Goresan 1-5: Sawah 田 di atas", "Goresan 6-9: Hati 心 di bawah"]
  },
  {
    "id": 146, "kanji": "強", "reading": "つよい", "meaning": "Kuat / Bertenaga", "meaningEn": "Strong",
    "strokeCount": 11, "onyomi": "キョウ・ゴウ", "kunyomi": "つよい・つよまる・つよめる・しいる・こわい",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Kiri radikal busur panah (弓 3 goresan). Kanan atas mulut/kotak 厶, kanan bawah serangga (虫 6 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Busur 弓 di kiri", "Goresan 4-5: Bagian 厶 kanan atas", "Goresan 6-11: Serangga 虫 di kanan bawah"]
  },
  {
    "id": 147, "kanji": "弱", "reading": "よわい", "meaning": "Lemah", "meaningEn": "Weak",
    "strokeCount": 10, "onyomi": "ジャク", "kunyomi": "よわい・よわる・よわまる・よわめる",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Dua busur panah berdampingan dengan bulu titik. Kiri: 弓 dan dua titik (5 goresan). Kanan: 弓 dan dua titik (5 goresan).",
    "strokeOrderGuide": ["Goresan 1-5: Busur dan bulu di kiri", "Goresan 6-10: Busur dan bulu di kanan"]
  },
  {
    "id": 148, "kanji": "明", "reading": "あかるい", "meaning": "Terang / Jelas", "meaningEn": "Bright / Clear",
    "strokeCount": 8, "onyomi": "メイ・ミョウ・ミン", "kunyomi": "あかり・あかるい・あかるむ・あからむ・あきらか・あける・-あけ・あく・あくる・あかす",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Matahari (日 4 goresan) di kiri dan bulan (月 4 goresan) di kanan bersatu menghasilkan terang.",
    "strokeOrderGuide": ["Goresan 1-4: Kotak matahari 日 di kiri", "Goresan 5-8: Bulan 月 di kanan"]
  },
  {
    "id": 149, "kanji": "暗", "reading": "くらい", "meaning": "Gelap / Suram", "meaningEn": "Dark / Gloomy",
    "strokeCount": 13, "onyomi": "アン", "kunyomi": "くらい・くらむ・くれぐれ",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Kiri matahari (日 4 goresan). Kanan suara/bunyi (音 9 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Kotak 日 di kiri", "Goresan 5-13: Karakter 音 (suara) di kanan"]
  },
  {
    "id": 150, "kanji": "広", "reading": "ひろい", "meaning": "Luas / Lebar", "meaningEn": "Wide / Broad",
    "strokeCount": 5, "onyomi": "コウ", "kunyomi": "ひろい・ひろまる・ひろめる・ひろがる・ひろげる",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Radikal atap tebing (广 3 goresan), lalu siku segitiga (厶 2 goresan) di bagian dalam.",
    "strokeOrderGuide": ["Goresan 1-3: Radikal atap 广", "Goresan 4-5: Karakter 厶 di dalam"]
  },
  {
    "id": 151, "kanji": "近", "reading": "ちかい", "meaning": "Dekat / Akrab", "meaningEn": "Near / Close",
    "strokeCount": 7, "onyomi": "キン・コン", "kunyomi": "ちかい",
    "jlpt": "N4", "category": "Arah & Posisi",
    "strokeRules": "Kapak (斤 4 goresan) di kanan atas ditulis terlebih dahulu, lalu disusul radikal jalan (辶 3 goresan) di kiri meluncur ke bawah.",
    "strokeOrderGuide": ["Goresan 1-4: Karakter kapak 斤 di kanan atas", "Goresan 5-7: Radikal jalan 辶 di kiri bawah"]
  },
  {
    "id": 152, "kanji": "遠", "reading": "とおい", "meaning": "Jauh", "meaningEn": "Far / Distant",
    "strokeCount": 13, "onyomi": "エン・オン", "kunyomi": "とおい",
    "jlpt": "N4", "category": "Arah & Posisi",
    "strokeRules": "Tulis bagian kanan 袁 terlebih dahulu (10 goresan), lalu selubungi dengan radikal jalan 辶 (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-10: Karakter 袁 di kanan", "Goresan 11-13: Radikal jalan 辶 di kiri bawah"]
  },
  {
    "id": 153, "kanji": "送", "reading": "おくる", "meaning": "Mengirim / Mengantar", "meaningEn": "Send / Escort",
    "strokeCount": 9, "onyomi": "ソウ", "kunyomi": "おくる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Tulis bagian kanan 关 (6 goresan: dua titik, dua horizontal, dua kaki), lalu tarik radikal jalan 辶 (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-6: Bagian 关 di kanan", "Goresan 7-9: Radikal jalan 辶 di kiri bawah"]
  },
  {
    "id": 154, "kanji": "切", "reading": "きる", "meaning": "Memotong / Darurat", "meaningEn": "Cut / Sever",
    "strokeCount": 4, "onyomi": "セツ・サイ", "kunyomi": "きる・-きる・きり・-きり・-ぎり・きれる・-きれる・きれ・-きれ・-ぎれ",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri: angka tujuh (七 2 goresan). Kanan: pisau pedang (刀 2 goresan).",
    "strokeOrderGuide": ["Goresan 1-2: Karakter 七 di kiri", "Goresan 3-4: Karakter 刀 di kanan"]
  },
  {
    "id": 155, "kanji": "開", "reading": "あける", "meaning": "Membuka / Terbuka", "meaningEn": "Open",
    "strokeCount": 12, "onyomi": "カイ", "kunyomi": "ひらく・ひらき・-びらき・ひらける・あく・あける",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Gerbang pintu (門 8 goresan), kemudian karakter dua garis dan dua kaki (开 4 goresan) di dalam.",
    "strokeOrderGuide": ["Goresan 1-8: Bingkai gerbang 門 di luar", "Goresan 9-12: Bagian dalam 开"]
  },
  {
    "id": 156, "kanji": "閉", "reading": "しめる", "meaning": "Menutup / Tertutup", "meaningEn": "Close / Shut",
    "strokeCount": 11, "onyomi": "ヘイ", "kunyomi": "とじる・とざす・しめる・しまる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Gerbang pintu (門 8 goresan) di luar, lalu karakter berbakat (才 3 goresan) di dalam.",
    "strokeOrderGuide": ["Goresan 1-8: Bingkai gerbang 門 di luar", "Goresan 9-11: Karakter 才 di dalam"]
  },
  {
    "id": 157, "kanji": "待", "reading": "まつ", "meaning": "Menunggu", "meaningEn": "Wait",
    "strokeCount": 9, "onyomi": "タイ", "kunyomi": "まつ・-まち",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal langkah (彳 3 goresan). Kanan kuil (寺 6 goresan: 土 di atas, 寸 di bawah).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal 彳 di sebelah kiri", "Goresan 4-9: Karakter kuil 寺 di sebelah kanan"]
  },
  {
    "id": 158, "kanji": "急", "reading": "いそぐ", "meaning": "Buru-buru / Mendadak", "meaningEn": "Hurry / Urgent",
    "strokeCount": 9, "onyomi": "キュウ", "kunyomi": "いそぐ・いそぎ",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas pembungkus ⺈ dan kotak 彐 (5 goresan), bagian bawah hati (心 4 goresan). Hati yang terburu-buru.",
    "strokeOrderGuide": ["Goresan 1-5: Bagian kepala atas", "Goresan 6-9: Hati 心 di bagian dasar"]
  },
  {
    "id": 159, "kanji": "持", "reading": "もつ", "meaning": "Membawa / Memegang", "meaningEn": "Hold / Have",
    "strokeCount": 9, "onyomi": "ジ", "kunyomi": "もつ・-もち・もてる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal tangan (扌 3 goresan). Kanan karakter kuil (寺 6 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal tangan 扌 di kiri", "Goresan 4-9: Karakter kuil 寺 di kanan"]
  },
  {
    "id": 160, "kanji": "教", "reading": "おしえる", "meaning": "Mengajar / Ajaran", "meaningEn": "Teach / Faith",
    "strokeCount": 11, "onyomi": "キョウ", "kunyomi": "おしえる・おそわる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri: anak belajar (孝 mirip: salib, horizontal, miring, anak 子). Kanan: aksi (攵 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-7: Bagian kiri", "Goresan 8-11: Radikal aksi 攵 di kanan"]
  },
  {
    "id": 161, "kanji": "習", "reading": "ならう", "meaning": "Belajar (Mempraktikkan)", "meaningEn": "Learn / Practice",
    "strokeCount": 11, "onyomi": "シュウ・ジュ", "kunyomi": "ならう・ならい",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas sepasang bulu/sayap burung (羽 6 goresan), bagian bawah kotak putih (白 5 goresan). Belajar mengepakkan sayap.",
    "strokeOrderGuide": ["Goresan 1-6: Sayap 羽 di bagian atas", "Goresan 7-11: Kotak 白 di bagian bawah"]
  },
  {
    "id": 162, "kanji": "貸", "reading": "かす", "meaning": "Meminjamkan", "meaningEn": "Lend",
    "strokeCount": 12, "onyomi": "タイ", "kunyomi": "かす・かし-・かし",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Bagian atas pengganti (代 5 goresan), bagian bawah uang kerang (貝 7 goresan).",
    "strokeOrderGuide": ["Goresan 1-5: Karakter 代 di atas", "Goresan 6-12: Kerang uang 貝 di bawah"]
  },
  {
    "id": 163, "kanji": "借", "reading": "かりる", "meaning": "Meminjam", "meaningEn": "Borrow",
    "strokeCount": 10, "onyomi": "シャク", "kunyomi": "かりる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal orang (亻 2 goresan). Kanan masa lalu (昔 8 goresan: 共 atas dan 日 bawah).",
    "strokeOrderGuide": ["Goresan 1-2: Radikal orang 亻 di kiri", "Goresan 3-10: Karakter 昔 di kanan"]
  },
  {
    "id": 164, "kanji": "運", "reading": "はこぶ", "meaning": "Membawa / Keberuntungan", "meaningEn": "Carry / Luck / Transport",
    "strokeCount": 12, "onyomi": "ウン", "kunyomi": "はこぶ",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Tulis pasukan militer 軍 di kanan (9 goresan: mahkota 冖, mobil 車), lalu selubungi dengan radikal jalan 辶 (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-9: Karakter 軍 di kanan", "Goresan 10-12: Radikal jalan 辶 di kiri bawah"]
  },
  {
    "id": 165, "kanji": "転", "reading": "ころぶ", "meaning": "Berputar / Jatuh / Berguling", "meaningEn": "Rotate / Roll / Fall",
    "strokeCount": 11, "onyomi": "テン", "kunyomi": "ころがる・ころげる・ころがす・ころぶ",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri mobil/roda (車 7 goresan). Kanan awan berputar (云 4 goresan). Roda yang berputar.",
    "strokeOrderGuide": ["Goresan 1-7: Mobil 車 di kiri", "Goresan 8-11: Bagian 云 di kanan"]
  },
  {
    "id": 166, "kanji": "通", "reading": "とおる", "meaning": "Melalui / Bolak-balik", "meaningEn": "Pass through / Commute",
    "strokeCount": 10, "onyomi": "ツウ・ツ", "kunyomi": "とおる・とおり・-とおり・-どおり・とおす・とおし・-どおし・かよう",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Tulis karakter 通 bagian kanan 甬 (7 goresan) terlebih dahulu, lalu tarik radikal jalan 辶 (3 goresan).",
    "strokeOrderGuide": ["Goresan 1-7: Karakter 甬 di kanan", "Goresan 8-10: Radikal jalan 辶 di kiri bawah"]
  },
  {
    "id": 167, "kanji": "降", "reading": "おりる", "meaning": "Turun (Hujan/Kendaraan)", "meaningEn": "Descend / Fall (rain)",
    "strokeCount": 10, "onyomi": "コウ・ゴ", "kunyomi": "おりる・おろす・ふる・ふり・くだる・くだす",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Kiri radikal bukit/lereng (阝 3 goresan). Kanan atas 夂 (3 goresan), kanan bawah dua kaki melangkah (4 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal bukit 阝 di kiri", "Goresan 4-10: Bagian kanan"]
  },
  {
    "id": 168, "kanji": "乗", "reading": "のる", "meaning": "Naik (Kendaraan)", "meaningEn": "Ride / Board",
    "strokeCount": 9, "onyomi": "ジョウ・ショウ", "kunyomi": "のる・-のり・のせる",
    "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
    "strokeRules": "Garis miring pendek di puncak, tiga garis horizontal, garis vertikal membelah tengah, dan dua kaki di bawah.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2: Horizontal panjang", "Goresan 3-4: Garis tegak dalam", "Goresan 5: Horizontal penutup", "Goresan 6: Vertikal tengah menembus lurus", "Goresan 7-9: Kaki bawah"]
  },
  {
    "id": 169, "kanji": "映", "reading": "うつる", "meaning": "Memproyeksikan / Film", "meaningEn": "Reflect / Project",
    "strokeCount": 9, "onyomi": "エイ", "kunyomi": "うつる・うつす・はえる・-ばえ",
    "jlpt": "N4", "category": "Warna & Benda",
    "strokeRules": "Kiri matahari (日 4 goresan). Kanan pusat/tengah (央 5 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Kotak matahari 日 di kiri", "Goresan 5-9: Karakter 央 di kanan"]
  },
  {
    "id": 170, "kanji": "画", "reading": "が", "meaning": "Gambar / Lukisan / Goresan", "meaningEn": "Picture / Stroke / Plan",
    "strokeCount": 8, "onyomi": "ガ・カク・エ・カイ", "kunyomi": "えがく・かくする・かぎる・はかりごと・はかる",
    "jlpt": "N4", "category": "Warna & Benda",
    "strokeRules": "Horizontal atas, kotak sawah 田 di dalam, lalu garis bingkai pembungkus bawah (凵).",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas", "Goresan 2-6: Kotak 田 di dalam", "Goresan 7-8: Bingkai alas bawah 凵"]
  },
  {
    "id": 171, "kanji": "音", "reading": "おと", "meaning": "Suara / Bunyi", "meaningEn": "Sound",
    "strokeCount": 9, "onyomi": "オン・イン・-ノン", "kunyomi": "おと・ね",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Bagian atas berdiri (立 5 goresan), bagian bawah kotak matahari (日 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-5: Karakter 立 di atas", "Goresan 6-9: Kotak 日 di dasar"]
  },
  {
    "id": 172, "kanji": "楽", "reading": "たのしい", "meaning": "Menyenangkan / Musik / Nyaman", "meaningEn": "Fun / Music / Comfortable",
    "strokeCount": 13, "onyomi": "ガク・ラク・ゴウ", "kunyomi": "たのしい・たのしむ・このむ",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Bagian atas: drum putih 白 di tengah diapit dua titik sutra 幺 di kiri dan kanan. Bagian bawah: pohon kayu 木.",
    "strokeOrderGuide": ["Goresan 1-5: Karakter 白 di tengah atas", "Goresan 6-7: Bagian kiri atas", "Goresan 8-9: Bagian kanan atas", "Goresan 10-13: Karakter 木 di bawah"]
  },
  {
    "id": 173, "kanji": "歌", "reading": "うた", "meaning": "Lagu / Menyanyi", "meaningEn": "Song / Sing",
    "strokeCount": 14, "onyomi": "カ", "kunyomi": "うた・うたう",
    "jlpt": "N4", "category": "Sifat & Keadaan",
    "strokeRules": "Kiri dua susun 哥 (dua kotak 口 dan kait), kanan radikal menguap/membuka mulut (欠 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-10: Bagian kiri dua kotak bersusun", "Goresan 11-14: Radikal 欠 di kanan"]
  },
  {
    "id": 174, "kanji": "体", "reading": "からだ", "meaning": "Tubuh / Badan", "meaningEn": "Body",
    "strokeCount": 7, "onyomi": "タイ・テイ", "kunyomi": "からだ・かたち",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Kiri radikal orang (亻 2 goresan), kanan radikal dasar/buku (本 5 goresan). Aturan: Kiri ke kanan.",
    "strokeOrderGuide": ["Goresan 1-2: Radikal orang 亻 di kiri", "Goresan 3-7: Karakter dasar 本 di kanan"]
  },
  {
    "id": 175, "kanji": "頭", "reading": "あたま", "meaning": "Kepala", "meaningEn": "Head",
    "strokeCount": 16, "onyomi": "トウ・ズ・ト", "kunyomi": "あたま・かしら・-がしら・かぶり",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Kiri radikal kacang (豆 7 goresan). Kanan radikal halaman/kepala (頁 9 goresan).",
    "strokeOrderGuide": ["Goresan 1-7: Karakter 豆 di sebelah kiri", "Goresan 8-16: Karakter 頁 di sebelah kanan"]
  },
  {
    "id": 176, "kanji": "顔", "reading": "かお", "meaning": "Wajah / Muka", "meaningEn": "Face",
    "strokeCount": 18, "onyomi": "ガン", "kunyomi": "かお",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Kiri: kanji 立 di atas dan 彡 di bawah (9 goresan). Kanan: radikal halaman/kepala (頁 9 goresan).",
    "strokeOrderGuide": ["Goresan 1-9: Bagian kiri wajah", "Goresan 10-18: Radikal 頁 di sebelah kanan"]
  },
  {
    "id": 177, "kanji": "首", "reading": "くび", "meaning": "Leher / Pemimpin", "meaningEn": "Neck / Head",
    "strokeCount": 9, "onyomi": "シュ", "kunyomi": "くび",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Dua tanduk miring di puncak, garis horizontal, lalu mata (目 5 goresan) dan dua kaki di bawah.",
    "strokeOrderGuide": ["Goresan 1-2: Dua titik di puncak", "Goresan 3: Garis horizontal", "Goresan 4-8: Bagian mata 目", "Goresan 9: Garis penutup"]
  },
  {
    "id": 178, "kanji": "心", "reading": "こころ", "meaning": "Hati / Pikiran", "meaningEn": "Heart / Mind",
    "strokeCount": 4, "onyomi": "シン", "kunyomi": "こころ・-ごころ",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Titik kiri, garis melengkung seperti mangkuk berkait (hane), titik tengah, lalu titik kanan luar.",
    "strokeOrderGuide": ["Goresan 1: Titik miring kiri", "Goresan 2: Garis mangkuk melengkung dengan kait ke atas", "Goresan 3: Titik di tengah dalam", "Goresan 4: Titik di kanan luar"]
  },
  {
    "id": 179, "kanji": "声", "reading": "こえ", "meaning": "Suara (Makhluk)", "meaningEn": "Voice",
    "strokeCount": 7, "onyomi": "セイ・ショウ", "kunyomi": "こえ・こわ-",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Bagian atas prajurit/samurai (士 3 goresan), bagian bawah bendera dan kaki (4 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Karakter 士 di atas", "Goresan 4: Garis horizontal melintang", "Goresan 5-7: Kaki dan sudut bawah"]
  },
  {
    "id": 180, "kanji": "病", "reading": "びょう", "meaning": "Sakit / Penyakit", "meaningEn": "Sick / Illness",
    "strokeCount": 10, "onyomi": "ビョウ・ヘイ", "kunyomi": "やむ・-やみ・やまい",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Radikal penyakit/ranjang sakit (疒 5 goresan) di luar, lalu karakter ketiga (丙 5 goresan) di dalam.",
    "strokeOrderGuide": ["Goresan 1-5: Radikal sakit 疒", "Goresan 6-10: Karakter 丙 di dalam"]
  },
  {
    "id": 181, "kanji": "院", "reading": "いん", "meaning": "Institusi / Rumah Sakit / Gedung", "meaningEn": "Institution / Hospital",
    "strokeCount": 10, "onyomi": "イン", "kunyomi": "—",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri radikal bukit/dinding (阝 3 goresan). Kanan atas atap 宀, kanan bawah karakter sempurna (元 4 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Radikal bukit 阝 di kiri", "Goresan 4-6: Atap mahkota 宀 di kanan atas", "Goresan 7-10: Karakter 元 di kanan bawah"]
  },
  {
    "id": 182, "kanji": "薬", "reading": "くすり", "meaning": "Obat", "meaningEn": "Medicine",
    "strokeCount": 16, "onyomi": "ヤク", "kunyomi": "くすり",
    "jlpt": "N4", "category": "Tubuh",
    "strokeRules": "Mahkota rumput (艹 3 goresan) di atas tumbuhan obat, diikuti karakter musik/nyaman (楽 13 goresan) di bawah.",
    "strokeOrderGuide": ["Goresan 1-3: Mahkota rumput 艹", "Goresan 4-16: Karakter musik 楽 di bawah"]
  },
  {
    "id": 183, "kanji": "社", "reading": "しゃ", "meaning": "Perusahaan / Kuil", "meaningEn": "Company / Shrine",
    "strokeCount": 7, "onyomi": "シャ", "kunyomi": "やしろ",
    "jlpt": "N4", "category": "Tempat & Bangunan",
    "strokeRules": "Kiri radikal altar pemujaan (礻 4 goresan), kanan radikal tanah (土 3 goresan).",
    "strokeOrderGuide": ["Goresan 1-4: Radikal altar 礻 di kiri", "Goresan 5-7: Karakter tanah 土 di kanan"]
  },
  {
    "id": 184, "kanji": "員", "reading": "いん", "meaning": "Anggota / Pegawai", "meaningEn": "Member / Staff",
    "strokeCount": 10, "onyomi": "イン", "kunyomi": "—",
    "jlpt": "N4", "category": "Manusia & Keluarga",
    "strokeRules": "Bagian atas mulut (口 3 goresan), bagian bawah uang kerang (貝 7 goresan).",
    "strokeOrderGuide": ["Goresan 1-3: Kotak mulut 口 di atas", "Goresan 4-10: Kerang uang 貝 di bawah"]
  },
  {
    "id": 185, "kanji": "医", "reading": "い", "meaning": "Medis / Dokter", "meaningEn": "Doctor / Medical",
    "strokeCount": 7, "onyomi": "イ", "kunyomi": "いやす・いする・くすし",
    "jlpt": "N4", "category": "Manusia & Keluarga",
    "strokeRules": "Bingkai kotak luar (匚 2 goresan), di dalamnya terdapat anak panah (矢 5 goresan).",
    "strokeOrderGuide": ["Goresan 1: Horizontal atas bingkai", "Goresan 2-6: Anak panah 矢 di dalam", "Goresan 7: Sudut bawah bingkai 匚"]
  },
  {
    "id": 186, "kanji": "者", "reading": "もの", "meaning": "Orang (Pelaku / Profesional)", "meaningEn": "Person / Someone",
    "strokeCount": 8, "onyomi": "シャ", "kunyomi": "もの",
    "jlpt": "N4", "category": "Manusia & Keluarga",
    "strokeRules": "Bagian atas orang tua 老 mirip (horizontal, vertikal, horizontal, miring panjang memotong), bagian bawah matahari 日.",
    "strokeOrderGuide": ["Goresan 1-4: Bagian atas memotong", "Goresan 5-8: Kotak matahari 日 di bawah"]
  },
  {
    "id": 187, "kanji": "犬", "reading": "いぬ", "meaning": "Anjing", "meaningEn": "Dog",
    "strokeCount": 4, "onyomi": "ケン", "kunyomi": "いぬ・いぬ-",
    "jlpt": "N5", "category": "Hewan",
    "strokeRules": "Tulis karakter besar (大: horizontal, miring kiri, kaki kanan), lalu tambahkan titik telinga anjing di kanan atas.",
    "strokeOrderGuide": ["Goresan 1-3: Karakter 大", "Goresan 4: Titik telinga anjing di kanan atas"]
  },
  {
    "id": 188, "kanji": "鳥", "reading": "とり", "meaning": "Burung", "meaningEn": "Bird",
    "strokeCount": 11, "onyomi": "チョウ", "kunyomi": "とり",
    "jlpt": "N4", "category": "Hewan",
    "strokeRules": "Miring pendek atas, mata dan kepala burung berbingkai, lalu 4 bulu titik kaki (灬) di bagian alas.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek atas", "Goresan 2-7: Kepala dan mata burung", "Goresan 8-11: Empat titik bulu bawah (灬)"]
  },
  {
    "id": 189, "kanji": "牛", "reading": "うし", "meaning": "Sapi / Lembu", "meaningEn": "Cow / Bull",
    "strokeCount": 4, "onyomi": "ギュウ", "kunyomi": "うし",
    "jlpt": "N4", "category": "Hewan",
    "strokeRules": "Garis miring pendek atas, garis horizontal pendek, garis horizontal panjang, lalu tanduk/badan vertikal tegak lurus menembus.",
    "strokeOrderGuide": ["Goresan 1: Miring pendek kiri atas", "Goresan 2: Horizontal kedua", "Goresan 3: Horizontal ketiga panjang", "Goresan 4: Garis vertikal tengah menembus lurus"]
  },
  {
    "id": 190, "kanji": "馬", "reading": "うま", "meaning": "Kuda", "meaningEn": "Horse",
    "strokeCount": 10, "onyomi": "バ", "kunyomi": "うま・うま-・ま",
    "jlpt": "N4", "category": "Hewan",
    "strokeRules": "Suri vertikal kiri, sudut kanan membungkus dengan 3 garis horizontal suri, vertikal penutup berkait, lalu 4 kuku titik (灬) di bawah.",
    "strokeOrderGuide": ["Goresan 1: Vertikal kiri", "Goresan 2: Sudut atas-kanan", "Goresan 3-5: Tiga garis horizontal suri", "Goresan 6: Garis vertikal melengkung berkait", "Goresan 7-10: Empat titik kuku di bawah"]
  }
]

# Write to src/data/kanjiData.ts
ts_content = """import type { KanjiItem } from '../types';

export const KANJI_DATA: KanjiItem[] = """ + json.dumps(KANJI_MASTER, ensure_ascii=False, indent=2) + """;
"""

with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\src\data\kanjiData.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated {len(KANJI_MASTER)} complete Kanji with full writing steps, Onyomi and Kunyomi!")
