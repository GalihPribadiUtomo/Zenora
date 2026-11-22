# build_complete_kanji_dataset.py
# coding: utf-8
import json
from generate_complete_kanji import KANJI_MASTER

# 1. Add missing N5 Kanji: 曜 (Day of the week)
N5_ADDITIONS = [
    {
        "id": 105,
        "kanji": "曜",
        "reading": "よう",
        "meaning": "Hari dalam seminggu",
        "meaningEn": "Day of the week",
        "strokeCount": 18,
        "onyomi": "ヨウ",
        "kunyomi": "—",
        "jlpt": "N5",
        "category": "Angka & Waktu",
        "strokeRules": "Tulis radikal matahari (日) di sebelah kiri terlebih dahulu dari atas ke bawah. Kemudian tulis radikal bulu/sayap (羽) di kanan atas, diakhiri dengan radikal burung pendek (隹) di kanan bawah.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal kiri 日 (garis vertikal, sudut kanan, garis horizontal tengah, penutup bawah)",
            "Goresan 5-10: Radikal kanan atas 羽 (dua sayap berdampingan)",
            "Goresan 11-18: Radikal kanan bawah 隹 (titik, vertikal, garis horizontal dan bertingkat penutup)"
        ],
        "examples": [
            {"word": "日曜日", "reading": "にちようび", "meaning": "Hari Minggu"},
            {"word": "月曜日", "reading": "げつようび", "meaning": "Hari Senin"},
            {"word": "何曜日", "reading": "なんようび", "meaning": "Hari apa"}
        ]
    }
]

# 2. Add all canonical JLPT N4 Kanji that were missing (92 Kanji)
N4_ADDITIONS = [
    {
        "kanji": "界", "reading": "かい", "meaning": "Dunia, Batas", "meaningEn": "World, Boundary",
        "strokeCount": 9, "onyomi": "カイ", "kunyomi": "—",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal sawah (田) di bagian atas terlebih dahulu, kemudian tulis bagian bawah (介) dengan garis miring kiri dan kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Bagian atas 田 (kotak sawah dengan tanda tambah di tengah)",
            "Goresan 6-7: Garis miring kiri dan garis miring kanan memanjang",
            "Goresan 8-9: Dua garis vertikal penyangga bawah"
        ],
        "examples": [{"word": "世界", "reading": "せかい", "meaning": "Dunia"}, {"word": "限界", "reading": "げんかい", "meaning": "Batas"}]
    },
    {
        "kanji": "写", "reading": "しゃ / うつす", "meaning": "Menyalin, Memotret", "meaningEn": "Copy, Photograph",
        "strokeCount": 5, "onyomi": "シャ・ジャ", "kunyomi": "うつ-す・うつ-る",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis mahkota atas (冖) terlebih dahulu, kemudian goresan horizontal-vertikal melengkung di dalam dan garis penutup horizontal bawah.",
        "strokeOrderGuide": [
            "Goresan 1-2: Mahkota atas 冖 (titik kiri, lalu sudut atas membelok ke bawah)",
            "Goresan 3: Garis horizontal tengah",
            "Goresan 4: Garis melengkung turun dengan kait (hane)",
            "Goresan 5: Garis horizontal panjang penutup bawah"
        ],
        "examples": [{"word": "写真", "reading": "しゃしん", "meaning": "Foto"}, {"word": "写す", "reading": "うつす", "meaning": "Menyalin / Memotret"}]
    },
    {
        "kanji": "真", "reading": "しん / ま", "meaning": "Benar, Asli, Sejati", "meaningEn": "True, Reality",
        "strokeCount": 10, "onyomi": "シン", "kunyomi": "ま・まこと",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Garis horizontal atas, garis vertikal tengah pendek, kotak mata (目) dengan tiga garis horizontal dalam, dan dua kaki menyebar di bawah.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2: Garis vertikal tengah pendek",
            "Goresan 3-7: Bentuk kotak mata 目 dengan garis-garis mendatar di dalamnya",
            "Goresan 8: Garis horizontal panjang melintang di bawah mata",
            "Goresan 9-10: Dua titik/kaki menyebar ke kiri dan kanan di bagian dasar"
        ],
        "examples": [{"word": "写真", "reading": "しゃしん", "meaning": "Foto"}, {"word": "真ん中", "reading": "まんなか", "meaning": "Tepat di tengah"}]
    },
    {
        "kanji": "主", "reading": "しゅ / おも", "meaning": "Utama, Tuan, Pemilik", "meaningEn": "Main, Master",
        "strokeCount": 5, "onyomi": "シュ・ス", "kunyomi": "おも・ぬし",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Tulis titik atas terlebih dahulu, kemudian tiga garis horizontal yang dipotong oleh satu garis vertikal di tengah. Garis horizontal bawah paling panjang.",
        "strokeOrderGuide": [
            "Goresan 1: Titik vertikal di puncak atas",
            "Goresan 2: Garis horizontal atas pendek",
            "Goresan 3: Garis vertikal tegak lurus di tengah",
            "Goresan 4: Garis horizontal tengah sedang",
            "Goresan 5: Garis horizontal bawah paling panjang"
        ],
        "examples": [{"word": "主人", "reading": "しゅじん", "meaning": "Suami / Tuan rumah"}, {"word": "主に", "reading": "おもに", "meaning": "Utamanya"}]
    },
    {
        "kanji": "低", "reading": "てい / ひくい", "meaning": "Rendah", "meaningEn": "Low",
        "strokeCount": 7, "onyomi": "テイ", "kunyomi": "ひく-い・ひく-める",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal orang (亻) di sebelah kiri, kemudian bagian kanan ditulis dari atas ke bawah diakhiri dengan titik kanan bawah.",
        "strokeOrderGuide": [
            "Goresan 1-2: Radikal kiri 亻 (garis miring dan garis vertikal)",
            "Goresan 3: Garis miring pendek kanan atas",
            "Goresan 4: Garis horizontal membelok ke bawah",
            "Goresan 5: Garis horizontal pendek",
            "Goresan 6: Garis melengkung ke kanan bawah dengan kait",
            "Goresan 7: Titik di sebelah kanan dalam"
        ],
        "examples": [{"word": "低い", "reading": "ひくい", "meaning": "Rendah"}, {"word": "低下", "reading": "ていか", "meaning": "Penurunan"}]
    },
    {
        "kanji": "好", "reading": "こう / すき", "meaning": "Suka, Gemar", "meaningEn": "Like, Favorable",
        "strokeCount": 6, "onyomi": "コウ", "kunyomi": "す-き・この-む",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal wanita (女) di sisi kiri terlebih dahulu, lalu tulis radikal anak (子) di sisi kanan. Kiri ke kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal wanita 女 di sebelah kiri",
            "Goresan 4: Sudut horizontal melengkung anak 子 di kanan",
            "Goresan 5: Garis melengkung ke bawah berkait",
            "Goresan 6: Garis horizontal melintang memotong badan anak"
        ],
        "examples": [{"word": "好き", "reading": "すき", "meaning": "Suka"}, {"word": "大好き", "reading": "だいすき", "meaning": "Sangat suka"}]
    },
    {
        "kanji": "銀", "reading": "ぎん", "meaning": "Perak", "meaningEn": "Silver",
        "strokeCount": 14, "onyomi": "ギン", "kunyomi": "しろがね",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis radikal logam/emas (金) di sisi kiri (8 goresan), kemudian tulis radikal 艮 di sisi kanan dari atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1-8: Radikal logam 金 di sebelah kiri",
            "Goresan 9-14: Bagian kanan 艮 (sudut atas membelok, garis horizontal bertingkat, dan kaki)"
        ],
        "examples": [{"word": "銀行", "reading": "ぎんこう", "meaning": "Bank"}, {"word": "銀色", "reading": "ぎんいろ", "meaning": "Warna perak"}]
    },
    {
        "kanji": "酒", "reading": "しゅ / さけ", "meaning": "Sake, Minuman Keras", "meaningEn": "Sake, Liquor",
        "strokeCount": 10, "onyomi": "シュ", "kunyomi": "さけ・さか",
        "jlpt": "N4", "category": "Makanan & Minuman",
        "strokeRules": "Tulis radikal air (氵) tiga titik di sisi kiri, lalu tulis radikal kendi alkohol (酉) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4: Garis horizontal atas kendi",
            "Goresan 5-9: Badan kendi dengan garis-garis di dalamnya",
            "Goresan 10: Garis penutup bawah kendi"
        ],
        "examples": [{"word": "お酒", "reading": "おさけ", "meaning": "Minuman keras / Sake"}, {"word": "酒屋", "reading": "さかや", "meaning": "Toko miras"}]
    },
    {
        "kanji": "発", "reading": "はつ / ほつ", "meaning": "Berangkat, Memancarkan, Muncul", "meaningEn": "Depart, Emit, Publish",
        "strokeCount": 9, "onyomi": "ハツ・ホツ", "kunyomi": "た-つ・あば-く",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis mahkota kaki atas (癶) terlebih dahulu (kiri miring, lalu kanan miring), kemudian bagian bawah dua garis miring dan busur kait.",
        "strokeOrderGuide": [
            "Goresan 1-5: Mahkota atas 癶 (kaki melangkah)",
            "Goresan 6: Garis horizontal membelok pendek",
            "Goresan 7-8: Dua garis miring menyilang",
            "Goresan 9: Garis lengkung dengan kait kanan bawah"
        ],
        "examples": [{"word": "出発", "reading": "しゅっぱつ", "meaning": "Keberangkatan"}, {"word": "発表", "reading": "はっぴょう", "meaning": "Pengumuman / Presentasi"}]
    },
    {
        "kanji": "洗", "reading": "せん / あらう", "meaning": "Mencuci", "meaningEn": "Wash",
        "strokeCount": 9, "onyomi": "セン", "kunyomi": "あら-う",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal air (氵) di sebelah kiri, kemudian tulis bagian kanan (先 - seperti pada sensei) dari atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4: Garis miring pendek atas kanan",
            "Goresan 5: Garis horizontal atas",
            "Goresan 6: Garis vertikal tegak memotong",
            "Goresan 7: Garis horizontal bawah panjang",
            "Goresan 8-9: Dua kaki melengkung bawah"
        ],
        "examples": [{"word": "洗う", "reading": "あらう", "meaning": "Mencuci"}, {"word": "洗濯", "reading": "せんたく", "meaning": "Mencuci baju"}]
    },
    {
        "kanji": "究", "reading": "きゅう / きわめる", "meaning": "Meneliti, Memperdalam", "meaningEn": "Research, Investigate",
        "strokeCount": 7, "onyomi": "キュウ・ク", "kunyomi": "きわ-める",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal atap gua (穴) di bagian atas (5 goresan), kemudian tulis angka sembilan (九) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-5: Mahkota lubang gua 穴 (titik atas, atap, dua titik)",
            "Goresan 6: Garis miring melengkung kiri",
            "Goresan 7: Garis horizontal membelok melengkung dengan kait (九)"
        ],
        "examples": [{"word": "研究", "reading": "けんきゅう", "meaning": "Penelitian"}, {"word": "研究所", "reading": "けんきゅうじょ", "meaning": "Institut penelitian"}]
    },
    {
        "kanji": "正", "reading": "せい / しょう / ただしい", "meaning": "Benar, Tepat, Adil", "meaningEn": "Correct, Right, Justice",
        "strokeCount": 5, "onyomi": "セイ・ショウ", "kunyomi": "ただ-しい・ただ-す・まさ",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Garis horizontal atas, garis vertikal tengah turun, garis horizontal tengah pendek ke kanan, garis vertikal kiri, dan garis horizontal panjang di dasar.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2: Garis vertikal tengah",
            "Goresan 3: Garis horizontal tengah ke kanan",
            "Goresan 4: Garis vertikal kiri bawah",
            "Goresan 5: Garis horizontal panjang penutup dasar"
        ],
        "examples": [{"word": "正しい", "reading": "ただしい", "meaning": "Benar"}, {"word": "お正月", "reading": "おしょうがつ", "meaning": "Tahun baru Jepang"}]
    },
    {
        "kanji": "自", "reading": "じ / し / みずから", "meaning": "Diri Sendiri, Otomatis", "meaningEn": "Self, Oneself",
        "strokeCount": 6, "onyomi": "ジ・シ", "kunyomi": "みずか-ら・おの-ずから",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Titik miring pendek di puncak atas, lalu bentuk kotak mata (目): garis vertikal kiri, sudut kanan, dua garis horizontal dalam, dan garis penutup dasar.",
        "strokeOrderGuide": [
            "Goresan 1: Titik miring kecil di puncak",
            "Goresan 2: Garis vertikal kiri",
            "Goresan 3: Garis atas membelok turun (sudut)",
            "Goresan 4-5: Dua garis horizontal di dalam kotak",
            "Goresan 6: Garis horizontal penutup bawah"
        ],
        "examples": [{"word": "自分", "reading": "じぶん", "meaning": "Diri sendiri"}, {"word": "自転車", "reading": "じてんしゃ", "meaning": "Sepeda"}, {"word": "自動車", "reading": "じどうしゃ", "meaning": "Mobil"}]
    },
    {
        "kanji": "問", "reading": "もん / とう", "meaning": "Pertanyaan, Soal", "meaningEn": "Question, Ask",
        "strokeCount": 11, "onyomi": "モン", "kunyomi": "と-う・と-い・とん",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal gerbang (門) di sisi luar terlebih dahulu, lalu tulis radikal mulut (口) di bagian tengah dalam. Bingkai luar lalu isi.",
        "strokeOrderGuide": [
            "Goresan 1-8: Bingkai gerbang 門 (pintu kiri lalu pintu kanan)",
            "Goresan 9-11: Kotak mulut 口 di dalam (vertikal kiri, sudut, penutup)"
        ],
        "examples": [{"word": "問題", "reading": "もんだい", "meaning": "Masalah / Soal"}, {"word": "質問", "reading": "しつもん", "meaning": "Pertanyaan"}]
    },
    {
        "kanji": "題", "reading": "だい", "meaning": "Topik, Judul, Masalah", "meaningEn": "Topic, Title, Subject",
        "strokeCount": 18, "onyomi": "ダイ", "kunyomi": "—",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis bagian kiri adalah kanji (是) dari atas ke bawah, kemudian bagian kanan adalah radikal kepala/halaman (頁) dengan kotak dan kaki bawah.",
        "strokeOrderGuide": [
            "Goresan 1-9: Bagian kiri 是 (matahari 日 di atas, dan kaki 正 di bawah)",
            "Goresan 10-18: Bagian kanan 頁 (garis atas, kotak mata 目, dan dua titik dasar)"
        ],
        "examples": [{"word": "問題", "reading": "もんだい", "meaning": "Soal / Masalah"}, {"word": "宿題", "reading": "しゅくだい", "meaning": "PR"}]
    },
    {
        "kanji": "物", "reading": "ぶつ / もつ / もの", "meaning": "Benda, Barang, Materi", "meaningEn": "Thing, Object, Matter",
        "strokeCount": 8, "onyomi": "ブツ・モツ", "kunyomi": "もの",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis radikal sapi (牛) di sebelah kiri dengan garis bawah miring ke atas, kemudian bagian kanan (勿) dari kiri ke kanan.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal kiri sapi 牛",
            "Goresan 2-8: Bagian kanan 勿 (garis miring, sudut luar, dan dua garis miring dalam)"
        ],
        "examples": [{"word": "食べ物", "reading": "たべもの", "meaning": "Makanan"}, {"word": "動物", "reading": "どうぶつ", "meaning": "Hewan"}, {"word": "荷物", "reading": "にもつ", "meaning": "Barang bawaan"}]
    },
    {
        "kanji": "駅", "reading": "えき", "meaning": "Stasiun", "meaningEn": "Station",
        "strokeCount": 14, "onyomi": "エキ", "kunyomi": "—",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal kuda (馬) di sisi kiri (10 goresan), kemudian bagian kanan (尺) dengan sudut melengkung dan garis miring.",
        "strokeOrderGuide": [
            "Goresan 1-10: Radikal kuda 馬 di sisi kiri",
            "Goresan 11-14: Bagian kanan 尺 (garis horizontal membelok, lalu garis miring menembus)"
        ],
        "examples": [{"word": "駅", "reading": "えき", "meaning": "Stasiun"}, {"word": "駅員", "reading": "えきいん", "meaning": "Petugas stasiun"}, {"word": "東京駅", "reading": "とうきょうえき", "meaning": "Stasiun Tokyo"}]
    },
    {
        "kanji": "重", "reading": "じゅう / おもい", "meaning": "Berat, Berlapis", "meaningEn": "Heavy, Pile up",
        "strokeCount": 9, "onyomi": "ジュウ・チョウ", "kunyomi": "おも-い・かさ-ねる・え",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Garis miring pendek di puncak, garis horizontal melintang, kotak sawah di tengah, lalu dipotong garis vertikal tegak dari atas ke bawah, diakhiri garis dasar panjang.",
        "strokeOrderGuide": [
            "Goresan 1: Garis miring pendek kiri",
            "Goresan 2: Garis horizontal atas",
            "Goresan 3-7: Kotak tengah bertingkat",
            "Goresan 8: Garis vertikal panjang tegak lurus menembus tengah",
            "Goresan 9: Garis horizontal panjang penutup dasar"
        ],
        "examples": [{"word": "重い", "reading": "おもい", "meaning": "Berat"}, {"word": "体重", "reading": "たいじゅう", "meaning": "Berat badan"}]
    },
    {
        "kanji": "理", "reading": "り", "meaning": "Logika, Alasan, Kebenaran", "meaningEn": "Reason, Logic",
        "strokeCount": 11, "onyomi": "リ", "kunyomi": "ことわり",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal giok/raja (王) di sisi kiri terlebih dahulu, kemudian bagian kanan adalah desa (里) yang terdiri dari sawah dan tanah.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal raja/giok 王 di sisi kiri",
            "Goresan 5-9: Bagian atas kanan sawah 田",
            "Goresan 10-11: Bagian bawah kanan tanah 土"
        ],
        "examples": [{"word": "料理", "reading": "りょうり", "meaning": "Masakan"}, {"word": "理由", "reading": "りゆう", "meaning": "Alasan"}, {"word": "地理", "reading": "ちり", "meaning": "Geografi"}]
    },
    {
        "kanji": "覚", "reading": "かく / おぼえる", "meaning": "Mengingat, Sadar, Bangun", "meaningEn": "Memorize, Awake",
        "strokeCount": 12, "onyomi": "カク", "kunyomi": "おぼ-える・さ-ます・さ-める",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis tiga titik di bagian puncak, kemudian mahkota (冖), lalu diakhiri dengan kanji melihat (見) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik di puncak atas",
            "Goresan 4-5: Mahkota atap 冖",
            "Goresan 6-12: Kanji melihat 見 di bagian bawah (kotak mata 目 dan dua kaki melengkung)"
        ],
        "examples": [{"word": "覚える", "reading": "おぼえる", "meaning": "Mengingat / Menghafal"}, {"word": "目覚まし", "reading": "めざまし", "meaning": "Jam weker"}]
    },
    {
        "kanji": "悪", "reading": "あく / わるい", "meaning": "Buruk, Jahat", "meaningEn": "Bad, Evil",
        "strokeCount": 11, "onyomi": "アク・オ", "kunyomi": "わる-い",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis bagian atas (亚) terlebih dahulu dari atas ke bawah, kemudian tulis radikal hati (心) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-7: Bagian atas 亚 (garis horizontal, dua sudut vertikal ke dalam)",
            "Goresan 8-11: Radikal hati 心 di dasar (titik kiri, busur melengkung, dua titik atas)"
        ],
        "examples": [{"word": "悪い", "reading": "わるい", "meaning": "Buruk / Jahat"}, {"word": "最悪", "reading": "さいあく", "meaning": "Paling buruk"}]
    },
    {
        "kanji": "集", "reading": "しゅう / あつまる", "meaning": "Berkumpul, Mengumpulkan", "meaningEn": "Gather, Collect",
        "strokeCount": 12, "onyomi": "シュウ", "kunyomi": "あつ-まる・あつ-める・つど-う",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal burung pendek (隹) di bagian atas (8 goresan), kemudian tulis radikal pohon (木) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-8: Radikal burung 隹 di bagian atas (burung bertengger)",
            "Goresan 9-12: Radikal pohon 木 di bagian bawah (horizontal, vertikal panjang, dua cabang miring)"
        ],
        "examples": [{"word": "集まる", "reading": "あつまる", "meaning": "Berkumpul"}, {"word": "集める", "reading": "あつめる", "meaning": "Mengumpulkan"}]
    },
    {
        "kanji": "茶", "reading": "ちゃ / さ", "meaning": "Teh, Warna Cokelat", "meaningEn": "Tea, Brown",
        "strokeCount": 9, "onyomi": "チャ・サ", "kunyomi": "—",
        "jlpt": "N4", "category": "Makanan & Minuman",
        "strokeRules": "Tulis radikal rumput (艹) di bagian atas, kemudian garis miring dan horizontal (seperti payung), diakhiri dengan bentuk kayu/kaki di bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Mahkota rumput 艹 di bagian atas",
            "Goresan 4-5: Garis miring kiri dan garis melengkung membentuk atap",
            "Goresan 6-9: Bagian bawah (garis horizontal, vertikal berkait, dan dua titik)"
        ],
        "examples": [{"word": "お茶", "reading": "おちゃ", "meaning": "Teh Jepang"}, {"word": "紅茶", "reading": "こうちゃ", "meaning": "Teh hitam"}, {"word": "茶色", "reading": "ちゃいろ", "meaning": "Warna cokelat"}]
    },
    {
        "kanji": "服", "reading": "ふく", "meaning": "Pakaian, Mematuhi", "meaningEn": "Clothes, Obey",
        "strokeCount": 8, "onyomi": "フク", "kunyomi": "—",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis radikal bulan (月) di sisi kiri, kemudian bagian kanan atas dan bawah ditulis berurutan.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal bulan 月 di sebelah kiri",
            "Goresan 5-6: Sudut melengkung kanan atas",
            "Goresan 7-8: Garis silang dan penutup kanan bawah"
        ],
        "examples": [{"word": "服", "reading": "ふく", "meaning": "Pakaian"}, {"word": "洋服", "reading": "ようふく", "meaning": "Pakaian gaya barat"}]
    },
    {
        "kanji": "漢", "reading": "かん", "meaning": "Han, Tiongkok, Huruf", "meaningEn": "Sino-, China",
        "strokeCount": 13, "onyomi": "カン", "kunyomi": "—",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis radikal air (氵) di sebelah kiri, kemudian bagian kanan atas (艹) dan bagian kanan bawah bertingkat.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4-6: Bagian rumput 艹 kanan atas",
            "Goresan 7-13: Bagian bawah kanan (mulut 口 dan dua garis kaki menyilang)"
        ],
        "examples": [{"word": "漢字", "reading": "かんじ", "meaning": "Kanji (Huruf Han)"}]
    },
    {
        "kanji": "料", "reading": "りょう", "meaning": "Bahan, Biaya, Mengukur", "meaningEn": "Fee, Material, Measure",
        "strokeCount": 10, "onyomi": "リョウ", "kunyomi": "—",
        "jlpt": "N4", "category": "Makanan & Minuman",
        "strokeRules": "Tulis radikal beras (米) di sebelah kiri (6 goresan), kemudian tulis radikal gayung takaran (斗) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-6: Radikal beras 米 di sebelah kiri",
            "Goresan 7-8: Dua titik di kanan atas",
            "Goresan 9: Garis horizontal melintang",
            "Goresan 10: Garis vertikal panjang lurus ke bawah"
        ],
        "examples": [{"word": "料理", "reading": "りょうり", "meaning": "Masakan"}, {"word": "料金", "reading": "りょうきん", "meaning": "Tarif / Biaya"}, {"word": "無料", "reading": "むりょう", "meaning": "Gratis"}]
    },
    {
        "kanji": "館", "reading": "かん", "meaning": "Gedung Besar, Balai", "meaningEn": "Building, Hall",
        "strokeCount": 16, "onyomi": "カン", "kunyomi": "やかた",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal makanan (食) di sebelah kiri (8 goresan), kemudian tulis radikal pejabat/gedung (官) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-8: Radikal makanan 食 di sebelah kiri",
            "Goresan 9-11: Mahkota atap 宀 kanan atas",
            "Goresan 12-16: Bagian bawah kanan (dua kotak bertumpuk)"
        ],
        "examples": [{"word": "図書館", "reading": "としょかん", "meaning": "Perpustakaan"}, {"word": "映画館", "reading": "えいがかん", "meaning": "Bioskop"}, {"word": "大使館", "reading": "たいしかん", "meaning": "Kedutaan besar"}]
    },
    {
        "kanji": "品", "reading": "ひん / しな", "meaning": "Barang, Kualitas, Elegan", "meaningEn": "Goods, Refinement",
        "strokeCount": 9, "onyomi": "ヒン・ホン", "kunyomi": "しな",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis tiga kotak mulut (口). Kotak atas terlebih dahulu di tengah, kemudian kotak bawah kiri, dan diakhiri kotak bawah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Kotak mulut 口 atas di tengah",
            "Goresan 4-6: Kotak mulut 口 bawah di sebelah kiri",
            "Goresan 7-9: Kotak mulut 口 bawah di sebelah kanan"
        ],
        "examples": [{"word": "品物", "reading": "しなもの", "meaning": "Barang / Produk"}, {"word": "作品", "reading": "さくひん", "meaning": "Karya seni"}]
    },
    {
        "kanji": "都", "reading": "と / つ / みやこ", "meaning": "Ibukota, Metropolitan", "meaningEn": "Metropolis, Capital",
        "strokeCount": 11, "onyomi": "ト・ツ", "kunyomi": "みやこ",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis kanji orang/guru (者) di sebelah kiri terlebih dahulu, kemudian tulis radikal bukit/kota (阝) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-8: Bagian kiri 者 (tanah 土, garis miring, dan matahari 日)",
            "Goresan 9: Garis horizontal membelok melengkung membentuk telinga atas",
            "Goresan 10: Garis lengkung bawah",
            "Goresan 11: Garis vertikal panjang lurus ke bawah"
        ],
        "examples": [{"word": "京都", "reading": "きょうと", "meaning": "Kyoto"}, {"word": "都会", "reading": "とかい", "meaning": "Kota metropolitan"}, {"word": "都合", "reading": "つごう", "meaning": "Kondisi / Keadaan"}]
    },
    {
        "kanji": "所", "reading": "しょ / ところ", "meaning": "Tempat", "meaningEn": "Place",
        "strokeCount": 8, "onyomi": "ショ", "kunyomi": "ところ・とこ",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal pintu (戸) di sisi kiri (4 goresan), kemudian tulis radikal kapak (斤) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal pintu 戸 di sebelah kiri",
            "Goresan 5: Garis miring pendek kanan atas",
            "Goresan 6: Garis miring panjang melengkung",
            "Goresan 7: Garis horizontal tengah",
            "Goresan 8: Garis vertikal tegak lurus ke bawah"
        ],
        "examples": [{"word": "場所", "reading": "ばしょ", "meaning": "Tempat"}, {"word": "台所", "reading": "だいどころ", "meaning": "Dapur"}, {"word": "住所", "reading": "じゅうしょ", "meaning": "Alamat"}]
    },
    {
        "kanji": "建", "reading": "けん / たてる", "meaning": "Membangun, Mendirikan", "meaningEn": "Build, Construct",
        "strokeCount": 9, "onyomi": "ケン・コン", "kunyomi": "た-てる・た-つ",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis bagian dalam kanan (聿) terlebih dahulu dari atas ke bawah, baru kemudian tulis radikal langkah panjang (廴) yang membungkus dari kiri bawah.",
        "strokeOrderGuide": [
            "Goresan 1-6: Bagian kanan 聿 (garis horizontal bertingkat dan vertikal tengah)",
            "Goresan 7: Garis melengkung langkah kiri",
            "Goresan 8: Garis sudut turun",
            "Goresan 9: Garis horizontal panjang melandai ke kanan bawah"
        ],
        "examples": [{"word": "建てる", "reading": "たてる", "meaning": "Membangun"}, {"word": "建物", "reading": "たてもの", "meaning": "Bangunan / Gedung"}]
    },
    {
        "kanji": "同", "reading": "どう / おなじ", "meaning": "Sama, Bersama", "meaningEn": "Same, Agree",
        "strokeCount": 6, "onyomi": "ドウ", "kunyomi": "おな-じ",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis bingkai luar kiri lalu kanan atas dengan kait (冂), kemudian isi satu garis horizontal pendek dan kotak mulut (口) di tengah.",
        "strokeOrderGuide": [
            "Goresan 1: Garis vertikal kiri",
            "Goresan 2: Garis atas membelok turun dengan kait ke dalam",
            "Goresan 3: Garis horizontal pendek tengah atas",
            "Goresan 4-6: Kotak mulut 口 di tengah dasar"
        ],
        "examples": [{"word": "同じ", "reading": "おなじ", "meaning": "Sama"}, {"word": "同時に", "reading": "どうじに", "meaning": "Secara bersamaan"}]
    },
    {
        "kanji": "事", "reading": "じ / こと", "meaning": "Hal, Perkara, Kejadian", "meaningEn": "Thing, Matter, Incident",
        "strokeCount": 8, "onyomi": "ジ・ズ", "kunyomi": "こと・つか-う",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Garis horizontal atas, kotak tengah dengan garis horizontal tembus, dan garis vertikal panjang menembus tengah dengan kait di ujung.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2-4: Bentuk kotak mulut tengah",
            "Goresan 5: Garis horizontal melintang panjang",
            "Goresan 6: Garis vertikal tengah panjang dengan kait di dasar",
            "Goresan 7-8: Dua garis horizontal pendek penutup"
        ],
        "examples": [{"word": "仕事", "reading": "しごと", "meaning": "Pekerjaan"}, {"word": "大事", "reading": "だいじ", "meaning": "Penting"}, {"word": "事故", "reading": "じこ", "meaning": "Kecelakaan"}]
    },
    {
        "kanji": "特", "reading": "とく", "meaning": "Khusus, Istimewa", "meaningEn": "Special",
        "strokeCount": 10, "onyomi": "トク", "kunyomi": "—",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal sapi (牛) di sebelah kiri, kemudian tulis radikal kuil (寺) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal sapi 牛 di sebelah kiri",
            "Goresan 5-7: Tanah 土 kanan atas",
            "Goresan 8-10: Inci 寸 kanan bawah (garis horizontal, vertikal berkait, titik)"
        ],
        "examples": [{"word": "特別", "reading": "とくべつ", "meaning": "Spesial / Khusus"}, {"word": "特に", "reading": "とくに", "meaning": "Khususnya"}]
    },
    {
        "kanji": "返", "reading": "へん / かえす", "meaning": "Mengembalikan, Membalas", "meaningEn": "Return, Reply",
        "strokeCount": 7, "onyomi": "ヘン", "kunyomi": "かえ-す・かえ-る",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis kanji anti/terbalik (反) di sebelah kanan dalam terlebih dahulu, kemudian tutup dengan radikal jalan (辶) di bagian bawah kiri.",
        "strokeOrderGuide": [
            "Goresan 1-4: Bagian dalam 反 (garis miring, sudut horizontal, dan miring kanan)",
            "Goresan 5: Titik atas radikal jalan 辶",
            "Goresan 6: Garis zigzag membelok",
            "Goresan 7: Garis mendatar melengkung ke kanan melandai"
        ],
        "examples": [{"word": "返す", "reading": "かえす", "meaning": "Mengembalikan"}, {"word": "返事", "reading": "へんじ", "meaning": "Jawaban / Balasan"}]
    },
    {
        "kanji": "答", "reading": "とう / こたえる", "meaning": "Menjawab, Jawaban", "meaningEn": "Answer, Solution",
        "strokeCount": 12, "onyomi": "トウ", "kunyomi": "こた-える・こた-え",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis mahkota bambu (竹) di bagian atas (6 goresan), kemudian tulis kanji cocok/gabung (合) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-6: Mahkota bambu 竹 di bagian atas",
            "Goresan 7-9: Atap 合 (garis miring kiri, miring kanan, dan garis horizontal)",
            "Goresan 10-12: Kotak mulut 口 di dasar"
        ],
        "examples": [{"word": "答える", "reading": "こたえる", "meaning": "Menjawab"}, {"word": "答え", "reading": "こたえ", "meaning": "Jawaban"}]
    },
    {
        "kanji": "別", "reading": "べつ / わかれる", "meaning": "Berpisah, Berbeda, Lain", "meaningEn": "Separate, Another",
        "strokeCount": 7, "onyomi": "ベツ", "kunyomi": "わか-れる・わ-ける",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis bagian kiri (mulut 口 dan sudut bawah) terlebih dahulu, kemudian tulis radikal pedang ganda (刂) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Bagian kiri (kotak mulut dan sudut melengkung bawah)",
            "Goresan 6: Garis vertikal pendek kanan",
            "Goresan 7: Garis vertikal panjang dengan kait di dasar"
        ],
        "examples": [{"word": "別れる", "reading": "わかれる", "meaning": "Berpisah"}, {"word": "特別", "reading": "とくべつ", "meaning": "Spesial"}, {"word": "別に", "reading": "べつに", "meaning": "Tidak begitu / Tidak ada yang khusus"}]
    },
    {
        "kanji": "米", "reading": "べい / まい / こめ", "meaning": "Beras, Padi, Amerika", "meaningEn": "Rice, USA",
        "strokeCount": 6, "onyomi": "ベイ・マイ", "kunyomi": "こめ・よね",
        "jlpt": "N4", "category": "Makanan & Minuman",
        "strokeRules": "Dua titik atas menyebar (kiri dan kanan), garis horizontal melintang, garis vertikal tegak lurus di tengah, dan dua cabang menyebar di dasar.",
        "strokeOrderGuide": [
            "Goresan 1: Titik miring kiri atas",
            "Goresan 2: Titik miring kanan atas",
            "Goresan 3: Garis horizontal melintang",
            "Goresan 4: Garis vertikal tegak lurus menembus",
            "Goresan 5: Garis miring ke kiri bawah",
            "Goresan 6: Titik miring melandai ke kanan bawah"
        ],
        "examples": [{"word": "お米", "reading": "おこめ", "meaning": "Beras"}, {"word": "米国", "reading": "べいこく", "meaning": "Amerika Serikat"}]
    },
    {
        "kanji": "洋", "reading": "よう", "meaning": "Samudera, Gaya Barat", "meaningEn": "Ocean, Western",
        "strokeCount": 9, "onyomi": "ヨウ", "kunyomi": "—",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis tiga titik air (氵) di sebelah kiri, kemudian tulis radikal domba (羊) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4-5: Dua titik tanduk domba di kanan atas",
            "Goresan 6-8: Tiga garis horizontal bertingkat",
            "Goresan 9: Garis vertikal panjang menembus tengah"
        ],
        "examples": [{"word": "洋服", "reading": "ようふく", "meaning": "Pakaian barat"}, {"word": "西洋", "reading": "せいよう", "meaning": "Dunia Barat"}]
    },
    {
        "kanji": "度", "reading": "ど / と / たび", "meaning": "Derajat, Frekuensi, Batas", "meaningEn": "Degree, Times",
        "strokeCount": 9, "onyomi": "ド・ト・タク", "kunyomi": "たび・た-い",
        "jlpt": "N4", "category": "Angka & Waktu",
        "strokeRules": "Tulis radikal rumah bertingkat (广) di kiri atas (3 goresan), kemudian bagian dalam (廿) dan radikal tangan (又) di dasar.",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal rumah 广 (titik, horizontal, vertikal kiri)",
            "Goresan 4-7: Bagian tengah 廿",
            "Goresan 8-9: Radikal tangan 又 di dasar"
        ],
        "examples": [{"word": "今度", "reading": "こんど", "meaning": "Kali ini / Lain kali"}, {"word": "一度", "reading": "いちど", "meaning": "Satu kali"}, {"word": "温度", "reading": "おんど", "meaning": "Suhu"}]
    },
    {
        "kanji": "有", "reading": "ゆう / う / ある", "meaning": "Ada, Memiliki, Terkenal", "meaningEn": "Possess, Exist",
        "strokeCount": 6, "onyomi": "ユウ・ウ", "kunyomi": "あ-る",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Garis miring kiri melengkung, garis horizontal melintang memotong atas, lalu kanji bulan (月) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1: Garis miring dari tengah ke kiri bawah",
            "Goresan 2: Garis horizontal panjang melintang",
            "Goresan 3-6: Bentuk bulan 月 di bawah (vertikal kiri, sudut, dua horizontal dalam)"
        ],
        "examples": [{"word": "有名", "reading": "ゆうめい", "meaning": "Terkenal"}, {"word": "有料", "reading": "ゆうりょう", "meaning": "Berbayar"}]
    },
    {
        "kanji": "軽", "reading": "けい / かるい", "meaning": "Ringan, Cepat", "meaningEn": "Light, Nimble",
        "strokeCount": 12, "onyomi": "ケイ", "kunyomi": "かる-い・かろ-やか",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal mobil/gerobak (車) di sisi kiri (7 goresan), kemudian bagian kanan (圣) dari atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1-7: Radikal kendaraan 車 di sebelah kiri",
            "Goresan 8-10: Bagian kanan atas 又",
            "Goresan 11-12: Bagian tanah 土 di kanan bawah"
        ],
        "examples": [{"word": "軽い", "reading": "かるい", "meaning": "Ringan"}, {"word": "手軽", "reading": "てがる", "meaning": "Praktis / Mudah"}]
    },
    {
        "kanji": "太", "reading": "たい / ふとい", "meaning": "Gemuk, Tebal, Besar", "meaningEn": "Fat, Thick",
        "strokeCount": 4, "onyomi": "タイ・タ", "kunyomi": "ふと-い・ふと-る",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis kanji besar (大) terlebih dahulu, kemudian tambahkan satu titik di bagian bawah tengah.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2: Garis miring melengkung ke kiri bawah",
            "Goresan 3: Garis miring melandai ke kanan bawah",
            "Goresan 4: Titik di bawah persilangan garis"
        ],
        "examples": [{"word": "太い", "reading": "ふとい", "meaning": "Tebal / Gemuk"}, {"word": "太る", "reading": "ふとる", "meaning": "Bertambah gemuk"}, {"word": "太陽", "reading": "たいよう", "meaning": "Matahari"}]
    },
    {
        "kanji": "仕", "reading": "し / じ / つかえる", "meaning": "Melayani, Bekerja, Tugas", "meaningEn": "Serve, Work",
        "strokeCount": 5, "onyomi": "シ・ジ", "kunyomi": "つか-える",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal orang (亻) di sisi kiri, kemudian tulis radikal prajurit (士) di sisi kanan. Garis horizontal atas prajurit lebih panjang dari garis bawah.",
        "strokeOrderGuide": [
            "Goresan 1-2: Radikal orang 亻 di sebelah kiri",
            "Goresan 3: Garis horizontal atas panjang",
            "Goresan 4: Garis vertikal tegak lurus",
            "Goresan 5: Garis horizontal bawah pendek"
        ],
        "examples": [{"word": "仕事", "reading": "しごと", "meaning": "Pekerjaan"}, {"word": "仕方", "reading": "しかた", "meaning": "Cara"}]
    },
    {
        "kanji": "配", "reading": "はい / くばる", "meaning": "Membagikan, Mengatur, Khawatir", "meaningEn": "Distribute, Deliver",
        "strokeCount": 10, "onyomi": "ハイ", "kunyomi": "くば-る",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis kendi alkohol (酉) di sisi kiri (7 goresan), kemudian tulis kanji orang berlutut (己) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-7: Radikal kendi 酉 di sebelah kiri",
            "Goresan 8-10: Bagian kanan 己 (horizontal membelok, turun, dan kait)"
        ],
        "examples": [{"word": "心配", "reading": "しんぱい", "meaning": "Khawatir"}, {"word": "配達", "reading": "はいたつ", "meaning": "Pengiriman"}]
    },
    {
        "kanji": "短", "reading": "たん / みじかい", "meaning": "Pendek, Singkat", "meaningEn": "Short, Brief",
        "strokeCount": 12, "onyomi": "タン", "kunyomi": "みじか-い",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal panah (矢) di sisi kiri (5 goresan), kemudian tulis radikal mangkuk/kacang (豆) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Radikal panah 矢 di sebelah kiri",
            "Goresan 6-12: Bagian kanan kacang 豆 (horizontal, kotak mulut, dua titik, horizontal dasar)"
        ],
        "examples": [{"word": "短い", "reading": "みじかい", "meaning": "Pendek"}, {"word": "短時間", "reading": "たんじかん", "meaning": "Waktu singkat"}]
    },
    {
        "kanji": "動", "reading": "どう / うごく", "meaning": "Bergerak, Pergerakan", "meaningEn": "Move, Motion",
        "strokeCount": 11, "onyomi": "ドウ", "kunyomi": "うご-く・うご-かす",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis kanji berat (重) di sisi kiri (9 goresan), kemudian tulis radikal tenaga/otot (力) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-9: Bagian kiri 重 (miring, horizontal, kotak, vertikal, horizontal bawah)",
            "Goresan 10: Garis horizontal membelok ke kiri dengan kait (力)",
            "Goresan 11: Garis miring memotong dari atas ke kiri bawah"
        ],
        "examples": [{"word": "動く", "reading": "うごく", "meaning": "Bergerak"}, {"word": "運動", "reading": "うんどう", "meaning": "Olahraga"}, {"word": "動物", "reading": "どうぶつ", "meaning": "Hewan"}]
    },
    {
        "kanji": "世", "reading": "せい / せ / よ", "meaning": "Dunia, Generasi, Masa", "meaningEn": "World, Generation",
        "strokeCount": 5, "onyomi": "セイ・セ", "kunyomi": "よ",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Garis horizontal atas panjang, garis vertikal kiri turun berkait ke kanan, dua garis vertikal lainnya, dan penutup dasar.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal panjang melintang",
            "Goresan 2: Garis vertikal paling kiri turun lalu membelok ke kanan",
            "Goresan 3: Garis vertikal tengah",
            "Goresan 4: Garis vertikal kanan pendek",
            "Goresan 5: Garis horizontal penutup dasar"
        ],
        "examples": [{"word": "世界", "reading": "せかい", "meaning": "Dunia"}, {"word": "世話", "reading": "せわ", "meaning": "Merawat / Bantuan"}]
    },
    {
        "kanji": "終", "reading": "しゅう / おわる", "meaning": "Selesai, Berakhir", "meaningEn": "End, Finish",
        "strokeCount": 11, "onyomi": "シュウ", "kunyomi": "お-わる・お-える",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal benang (糸) di sebelah kiri (6 goresan), kemudian tulis kanji musim dingin (冬) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-6: Radikal benang 糸 di sisi kiri",
            "Goresan 7-9: Bagian atas kanan (garis miring dan horizontal membelok)",
            "Goresan 10-11: Dua titik di kanan bawah"
        ],
        "examples": [{"word": "終わる", "reading": "おわる", "meaning": "Selesai"}, {"word": "終電", "reading": "しゅうでん", "meaning": "Kereta terakhir"}]
    },
    {
        "kanji": "飯", "reading": "はん / めし", "meaning": "Nasi, Makanan", "meaningEn": "Meal, Cooked rice",
        "strokeCount": 12, "onyomi": "ハン", "kunyomi": "めし",
        "jlpt": "N4", "category": "Makanan & Minuman",
        "strokeRules": "Tulis radikal makanan (食) di sebelah kiri (8 goresan), kemudian tulis radikal 反 di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-8: Radikal makanan 食 di sebelah kiri",
            "Goresan 9-12: Bagian kanan 反 (miring, sudut horizontal, miring kanan)"
        ],
        "examples": [{"word": "ご飯", "reading": "ごはん", "meaning": "Nasi / Makanan"}, {"word": "朝ご飯", "reading": "あさごはん", "meaning": "Sarapan"}]
    },
    {
        "kanji": "着", "reading": "ちゃく / きる / つく", "meaning": "Memakai pakaian, Tiba", "meaningEn": "Wear, Arrive",
        "strokeCount": 12, "onyomi": "チャク・ジャク", "kunyomi": "き-る・つ-く・つ-ける",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis bagian atas (seperti domba 羊 dengan garis miring panjang menembus), kemudian tulis kotak mata (目) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-6: Bagian atas domba dengan ekor miring panjang ke kiri",
            "Goresan 7-12: Kotak mata 目 di bawah (vertikal kiri, sudut, garis horizontal dalam, penutup)"
        ],
        "examples": [{"word": "着る", "reading": "きる", "meaning": "Memakai pakaian"}, {"word": "着く", "reading": "つく", "meaning": "Tiba / Sampai"}, {"word": "上着", "reading": "うわぎ", "meaning": "Jaket / Baju luar"}]
    },
    {
        "kanji": "以", "reading": "い", "meaning": "Karena, Dengan, Batas", "meaningEn": "By means of, Because",
        "strokeCount": 5, "onyomi": "イ", "kunyomi": "もっ-て",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis bagian kiri terlebih dahulu (garis vertikal turun berkait, lalu titik), kemudian garis miring tengah dan titik di kanan atas.",
        "strokeOrderGuide": [
            "Goresan 1: Garis vertikal melengkung dengan kait ke atas",
            "Goresan 2: Titik di sebelah kiri",
            "Goresan 3: Garis miring pendek di tengah",
            "Goresan 4: Garis melengkung turun ke kanan",
            "Goresan 5: Titik kanan"
        ],
        "examples": [{"word": "以上", "reading": "いじょう", "meaning": "Lebih dari / Sekian"}, {"word": "以下", "reading": "いか", "meaning": "Kurang dari"}]
    },
    {
        "kanji": "研", "reading": "けん / とぐ", "meaning": "Mengasah, Meneliti", "meaningEn": "Sharpen, Research",
        "strokeCount": 9, "onyomi": "ケン", "kunyomi": "と-ぐ",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal batu (石) di sebelah kiri (5 goresan), kemudian tulis kanji buka dua tangan (开) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Radikal batu 石 di sebelah kiri",
            "Goresan 6-7: Dua garis horizontal kanan bertingkat",
            "Goresan 8: Garis vertikal kiri",
            "Goresan 9: Garis vertikal kanan panjang"
        ],
        "examples": [{"word": "研究", "reading": "けんきゅう", "meaning": "Penelitian"}, {"word": "研修", "reading": "けんしゅう", "meaning": "Pelatihan"}]
    },
    {
        "kanji": "不", "reading": "ふ / ぶ", "meaning": "Tidak, Bukan, Kurang", "meaningEn": "Non-, Negative",
        "strokeCount": 4, "onyomi": "フ・ブ", "kunyomi": "—",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Garis horizontal atas, garis miring ke kiri bawah, garis vertikal di tengah, dan titik miring di kanan.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2: Garis miring ke kiri bawah",
            "Goresan 3: Garis vertikal tegak lurus di tengah",
            "Goresan 4: Titik miring di sebelah kanan"
        ],
        "examples": [{"word": "不便", "reading": "ふべん", "meaning": "Tidak praktis"}, {"word": "不安", "reading": "ふあん", "meaning": "Cemas / Gelisah"}]
    },
    {
        "kanji": "工", "reading": "こう / く", "meaning": "Konstruksi, Pabrik, Keahlian", "meaningEn": "Craft, Construction",
        "strokeCount": 3, "onyomi": "コウ・ク", "kunyomi": "—",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Garis horizontal atas pendek, garis vertikal tegak di tengah, dan garis horizontal bawah lebih panjang. Atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2: Garis vertikal tegak lurus",
            "Goresan 3: Garis horizontal panjang penutup dasar"
        ],
        "examples": [{"word": "工場", "reading": "こうじょう", "meaning": "Pabrik"}, {"word": "工事", "reading": "こうじ", "meaning": "Konstruksi"}]
    },
    {
        "kanji": "紙", "reading": "し / かみ", "meaning": "Kertas", "meaningEn": "Paper",
        "strokeCount": 10, "onyomi": "シ", "kunyomi": "かみ",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis radikal benang (糸) di sisi kiri (6 goresan), kemudian tulis kanji klan/suku (氏) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-6: Radikal benang 糸 di sebelah kiri",
            "Goresan 7-10: Bagian kanan 氏 (miring pendek, horizontal, sudut vertikal berkait, garis miring melengkung)"
        ],
        "examples": [{"word": "手紙", "reading": "てがみ", "meaning": "Surat"}, {"word": "折り紙", "reading": "おりがみ", "meaning": "Origami"}, {"word": "紙", "reading": "かみ", "meaning": "Kertas"}]
    },
    {
        "kanji": "文", "reading": "ぶん / もん / ふみ", "meaning": "Kalimat, Tulisan, Sastra", "meaningEn": "Sentence, Literature",
        "strokeCount": 4, "onyomi": "ブン・モン", "kunyomi": "ふみ・あや",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Titik di puncak atas, garis horizontal melintang, garis miring ke kiri bawah, dan garis miring melandai ke kanan bawah.",
        "strokeOrderGuide": [
            "Goresan 1: Titik di puncak atas",
            "Goresan 2: Garis horizontal melintang",
            "Goresan 3: Garis miring ke kiri bawah",
            "Goresan 4: Garis miring melandai ke kanan bawah"
        ],
        "examples": [{"word": "作文", "reading": "さくぶん", "meaning": "Karangan"}, {"word": "文学", "reading": "ぶんがく", "meaning": "Sastra"}, {"word": "文化", "reading": "ぶんか", "meaning": "Budaya"}]
    },
    {
        "kanji": "験", "reading": "けん / げん", "meaning": "Ujian, Pengalaman, Efek", "meaningEn": "Test, Experience",
        "strokeCount": 18, "onyomi": "ケン・ゲン", "kunyomi": "ため-す・しるし",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal kuda (馬) di sebelah kiri (10 goresan), kemudian tulis kanji gabung/cocok (僉) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-10: Radikal kuda 馬 di sisi kiri",
            "Goresan 11-18: Bagian kanan (atap segitiga, mulut-mulut kecil, dan dua orang)"
        ],
        "examples": [{"word": "試験", "reading": "しけん", "meaning": "Ujian"}, {"word": "経験", "reading": "けいけん", "meaning": "Pengalaman"}]
    },
    {
        "kanji": "注", "reading": "ちゅう / そそぐ", "meaning": "Menuang, Memperhatikan, Catatan", "meaningEn": "Pour, Focus, Note",
        "strokeCount": 8, "onyomi": "チュウ", "kunyomi": "そそ-ぐ・さ-す",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal air (氵) tiga titik di sebelah kiri, kemudian tulis kanji tuan/utama (主) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4-8: Bagian kanan 主 (titik atas, tiga horizontal, dan garis vertikal pemotong)"
        ],
        "examples": [{"word": "注意する", "reading": "ちゅういする", "meaning": "Hati-hati / Memperhatikan"}, {"word": "注文する", "reading": "ちゅうもんする", "meaning": "Memesan"}]
    },
    {
        "kanji": "利", "reading": "り / きく", "meaning": "Keuntungan, Bermanfaat", "meaningEn": "Profit, Advantage",
        "strokeCount": 7, "onyomi": "リ", "kunyomi": "き-く",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal bulir padi (禾) di sebelah kiri (5 goresan), kemudian tulis radikal pedang (刂) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Radikal padi 禾 di sebelah kiri",
            "Goresan 6: Garis vertikal pendek kanan",
            "Goresan 7: Garis vertikal panjang dengan kait di dasar"
        ],
        "examples": [{"word": "便利", "reading": "べんり", "meaning": "Praktis / Mudah"}, {"word": "利用", "reading": "りよう", "meaning": "Pemanfaatan"}]
    },
    {
        "kanji": "屋", "reading": "おく / や", "meaning": "Atap, Rumah, Toko", "meaningEn": "Roof, House, Shop",
        "strokeCount": 9, "onyomi": "オク", "kunyomi": "や",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal mayat/atap bendera (尸) di kiri atas (3 goresan), kemudian tulis kanji sampai (至) di bagian dalam bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Mahkota bendera 尸 di kiri atas",
            "Goresan 4-9: Bagian bawah 至 (garis horizontal atas, vertikal, titik, dan horizontal panjang dasar)"
        ],
        "examples": [{"word": "部屋", "reading": "へや", "meaning": "Kamar"}, {"word": "屋上", "reading": "おくじょう", "meaning": "Atap gedung"}, {"word": "本屋", "reading": "ほんや", "meaning": "Toko buku"}]
    },
    {
        "kanji": "去", "reading": "きょ / こ / さる", "meaning": "Lalu, Pergi, Meninggalkan", "meaningEn": "Past, Leave",
        "strokeCount": 5, "onyomi": "キョ・コ", "kunyomi": "さ-る",
        "jlpt": "N4", "category": "Angka & Waktu",
        "strokeRules": "Tulis tanah (土) di bagian atas, kemudian garis horizontal melengkung dan titik sudut di bagian bawah (ム).",
        "strokeOrderGuide": [
            "Goresan 1-3: Tanah 土 di bagian atas (horizontal, vertikal, horizontal)",
            "Goresan 4: Sudut miring ke bawah membelok melandai ke kanan",
            "Goresan 5: Titik miring di kanan bawah"
        ],
        "examples": [{"word": "去年", "reading": "きょねん", "meaning": "Tahun lalu"}, {"word": "過去", "reading": "かこ", "meaning": "Masa lalu"}]
    },
    {
        "kanji": "始", "reading": "し / はじまる", "meaning": "Mulai, Memulai", "meaningEn": "Begin, Start",
        "strokeCount": 8, "onyomi": "シ", "kunyomi": "はじ-まる・はじ-める",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal wanita (女) di sisi kiri, kemudian tulis radikal meja/tonggak (台) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal wanita 女 di sebelah kiri",
            "Goresan 4-5: Sudut segitiga atas kanan 台",
            "Goresan 6-8: Kotak mulut 口 di kanan bawah"
        ],
        "examples": [{"word": "始まる", "reading": "はじまる", "meaning": "Dimulai"}, {"word": "始める", "reading": "はじめる", "meaning": "Memulai"}, {"word": "開始", "reading": "かいし", "meaning": "Awal mula"}]
    },
    {
        "kanji": "代", "reading": "だい / たい / かわる", "meaning": "Menggantikan, Generasi, Biaya", "meaningEn": "Substitute, Generation, Age",
        "strokeCount": 5, "onyomi": "ダイ・タイ", "kunyomi": "か-わる・か-える・よ・しろ",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Tulis radikal orang (亻) di sisi kiri, kemudian tulis radikal panah/tiang (弋) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-2: Radikal orang 亻 di sebelah kiri",
            "Goresan 3: Garis horizontal melintang",
            "Goresan 4: Garis melengkung turun ke kanan dengan kait",
            "Goresan 5: Titik di kanan atas"
        ],
        "examples": [{"word": "時代", "reading": "じだい", "meaning": "Zaman / Era"}, {"word": "代わりに", "reading": "かわりの", "meaning": "Sebagai pengganti"}]
    },
    {
        "kanji": "死", "reading": "し / しぬ", "meaning": "Mati, Kematian", "meaningEn": "Death, Die",
        "strokeCount": 6, "onyomi": "シ", "kunyomi": "し-ぬ",
        "jlpt": "N4", "category": "Tubuh",
        "strokeRules": "Garis horizontal atas, garis vertikal turun ke kiri, garis miring menyilang, dan radikal sendok berlutut (匕) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1: Garis horizontal atas",
            "Goresan 2: Garis vertikal pendek membelok",
            "Goresan 3: Garis miring ke kiri bawah",
            "Goresan 4: Garis horizontal pendek kanan",
            "Goresan 5-6: Radikal 匕 di kanan bawah"
        ],
        "examples": [{"word": "死ぬ", "reading": "しぬ", "meaning": "Mati / Meninggal"}, {"word": "死", "reading": "し", "meaning": "Kematian"}]
    },
    {
        "kanji": "旅", "reading": "りょ / たび", "meaning": "Perjalanan, Wisata", "meaningEn": "Trip, Travel",
        "strokeCount": 10, "onyomi": "リョ", "kunyomi": "たび",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal bendera (方) di sebelah kiri, kemudian bagian kanan ditulis dari atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal arah/bendera 方 di sisi kiri",
            "Goresan 5-6: Garis miring dan horizontal kanan atas",
            "Goresan 7-10: Bagian kaki menyebar di kanan bawah"
        ],
        "examples": [{"word": "旅行", "reading": "りょこう", "meaning": "Wisata / Bepergian"}, {"word": "旅", "reading": "たび", "meaning": "Perjalanan"}]
    },
    {
        "kanji": "色", "reading": "しょく / しき / いろ", "meaning": "Warna", "meaningEn": "Color",
        "strokeCount": 6, "onyomi": "ショク・シキ", "kunyomi": "いろ",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis bagian atas (pisau ク) terlebih dahulu, kemudian bagian bawah (巴) dengan garis vertikal membelok dan kait.",
        "strokeOrderGuide": [
            "Goresan 1: Garis miring pendek kiri atas",
            "Goresan 2: Garis horizontal membelok ke kiri bawah",
            "Goresan 3: Garis vertikal kiri bawah",
            "Goresan 4: Garis horizontal membelok ke bawah",
            "Goresan 5: Garis horizontal tengah",
            "Goresan 6: Garis vertikal melengkung dengan kait panjang ke kanan"
        ],
        "examples": [{"word": "色", "reading": "いろ", "meaning": "Warna"}, {"word": "色々", "reading": "いろいろ", "meaning": "Bermacam-macam"}]
    },
    {
        "kanji": "忘", "reading": "ぼう / わすれる", "meaning": "Lupa", "meaningEn": "Forget",
        "strokeCount": 7, "onyomi": "ボウ", "kunyomi": "わす-れる",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis kanji mati/hilang (亡) di bagian atas terlebih dahulu, kemudian tulis radikal hati (心) di bagian dasar.",
        "strokeOrderGuide": [
            "Goresan 1-3: Bagian atas 亡 (titik, horizontal, vertikal melengkung)",
            "Goresan 4-7: Radikal hati 心 di bawah (titik kiri, busur melengkung, dua titik atas)"
        ],
        "examples": [{"word": "忘れる", "reading": "わすれる", "meaning": "Lupa"}, {"word": "忘れ物", "reading": "わすれもの", "meaning": "Barang yang tertinggal"}]
    },
    {
        "kanji": "押", "reading": "おう / おす", "meaning": "Menekan, Mendorong", "meaningEn": "Push, Press",
        "strokeCount": 8, "onyomi": "オウ", "kunyomi": "お-す・お-さえる",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal tangan (扌) di sisi kiri, kemudian tulis radikal cangkang/tanda (甲) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal tangan 扌 di sebelah kiri",
            "Goresan 4-7: Kotak sawah kanan",
            "Goresan 8: Garis vertikal panjang menembus tengah ke bawah"
        ],
        "examples": [{"word": "押す", "reading": "おす", "meaning": "Menekan / Mendorong"}, {"word": "押入れ", "reading": "おしいれ", "meaning": "Lemari dinding geser"}]
    },
    {
        "kanji": "払", "reading": "ふつ / はらう", "meaning": "Membayar, Mengibaskan", "meaningEn": "Pay, Sweep away",
        "strokeCount": 5, "onyomi": "フツ・ヒツ", "kunyomi": "はら-う",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal tangan (扌) di sisi kiri, kemudian tulis radikal 私 bagian kanan (厶) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal tangan 扌 di sisi kiri",
            "Goresan 4: Garis miring sudut membelok melandai ke kanan",
            "Goresan 5: Titik miring di kanan"
        ],
        "examples": [{"word": "払う", "reading": "はらう", "meaning": "Membayar"}, {"word": "支払い", "reading": "しはらい", "meaning": "Pembayaran"}]
    },
    {
        "kanji": "細", "reading": "さい / ほそい / こまかい", "meaning": "Tipis, Halus, Rinci", "meaningEn": "Thin, Slender, Detailed",
        "strokeCount": 11, "onyomi": "サイ", "kunyomi": "ほそ-い・ほそ-る・こま-かい",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal benang (糸) di sisi kiri (6 goresan), kemudian tulis sawah (田) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-6: Radikal benang 糸 di sebelah kiri",
            "Goresan 7-11: Kotak sawah 田 di sebelah kanan"
        ],
        "examples": [{"word": "細い", "reading": "ほそい", "meaning": "Ramping / Tipis"}, {"word": "細かい", "reading": "こまかい", "meaning": "Rinci / Uang receh"}]
    },
    {
        "kanji": "堂", "reading": "どう", "meaning": "Aula, Balai Besar", "meaningEn": "Hall, Public room",
        "strokeCount": 11, "onyomi": "ドウ", "kunyomi": "—",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis bagian atas (尚 tanpa mulut), kemudian kotak mulut (口) di tengah, diakhiri dengan radikal tanah (土) di bagian dasar.",
        "strokeOrderGuide": [
            "Goresan 1-5: Tiga titik dan atap mahkota di bagian atas",
            "Goresan 6-8: Kotak mulut 口 di tengah",
            "Goresan 9-11: Radikal tanah 土 di bagian dasar"
        ],
        "examples": [{"word": "食堂", "reading": "しょくどう", "meaning": "Kantin / Ruang makan"}]
    },
    {
        "kanji": "引", "reading": "いん / ひく", "meaning": "Menarik, Mengurangi", "meaningEn": "Pull, Draw",
        "strokeCount": 4, "onyomi": "イン", "kunyomi": "ひ-く・ひ-ける",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal busur panah (弓) di sisi kiri (3 goresan), kemudian satu garis vertikal tegak lurus lurus ke bawah di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal busur panah 弓 di sebelah kiri",
            "Goresan 4: Garis vertikal tegak lurus di sebelah kanan"
        ],
        "examples": [{"word": "引く", "reading": "ひく", "meaning": "Menarik / Mengurangi"}, {"word": "引き出し", "reading": "ひきだし", "meaning": "Laci"}]
    },
    {
        "kanji": "私", "reading": "し / わたし", "meaning": "Saya, Pribadi", "meaningEn": "I, Private",
        "strokeCount": 7, "onyomi": "シ", "kunyomi": "わたくし・わたし",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Tulis radikal padi (禾) di sebelah kiri (5 goresan), kemudian tulis radikal pribadi (厶) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Radikal tanaman padi 禾 di sebelah kiri",
            "Goresan 6: Garis miring membelok ke kanan bawah",
            "Goresan 7: Titik miring di kanan"
        ],
        "examples": [{"word": "私", "reading": "わたし", "meaning": "Saya"}, {"word": "私立", "reading": "しりつ", "meaning": "Swasta"}]
    },
    {
        "kanji": "活", "reading": "かつ", "meaning": "Hidup, Aktif, Semangat", "meaningEn": "Lively, Active",
        "strokeCount": 9, "onyomi": "カツ", "kunyomi": "い-きる・い-かす",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal air (氵) di sisi kiri, kemudian tulis radikal lidah (舌) di sisi kanan dari atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4: Garis miring pendek kanan atas",
            "Goresan 5: Garis horizontal",
            "Goresan 6: Garis vertikal tengah",
            "Goresan 7-9: Kotak mulut 口 di dasar lidah"
        ],
        "examples": [{"word": "生活", "reading": "せいかつ", "meaning": "Kehidupan sehari-hari"}, {"word": "活動", "reading": "かつどう", "meaning": "Aktivitas"}]
    },
    {
        "kanji": "親", "reading": "しん / おや / したしい", "meaning": "Orang Tua, Akrab, Ramah", "meaningEn": "Parent, Intimate",
        "strokeCount": 16, "onyomi": "シン", "kunyomi": "おや・した-しい・した-しむ",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Tulis kanji berdiri (立) di atas pohon (木) di sisi kiri (10 goresan), kemudian tulis kanji melihat (見) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-5: Berdiri 立 kiri atas",
            "Goresan 6-9: Pohon 木 kiri bawah",
            "Goresan 10-16: Melihat 見 di sisi kanan (kotak mata 目 dan dua kaki)"
        ],
        "examples": [{"word": "親", "reading": "おや", "meaning": "Orang tua"}, {"word": "両親", "reading": "りょうしん", "meaning": "Kedua orang tua"}, {"word": "親切", "reading": "しんせつ", "meaning": "Ramah / Baik hati"}]
    },
    {
        "kanji": "合", "reading": "ごう / がつ / あう", "meaning": "Cocok, Bergabung, Bertemu", "meaningEn": "Fit, Join, Suit",
        "strokeCount": 6, "onyomi": "ゴウ・ガッ・カッ", "kunyomi": "あ-う・あ-わす・あ-わせる",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis atap payung atas (人): miring kiri dan miring kanan melandai, lalu satu garis horizontal di bawahnya, dan diakhiri dengan kotak mulut (口).",
        "strokeOrderGuide": [
            "Goresan 1: Garis miring ke kiri atas",
            "Goresan 2: Garis miring melandai ke kanan",
            "Goresan 3: Garis horizontal melintang",
            "Goresan 4-6: Kotak mulut 口 di bagian dasar"
        ],
        "examples": [{"word": "間に合う", "reading": "まにあう", "meaning": "Tepat waktu"}, {"word": "都合", "reading": "つごう", "meaning": "Kondisi / Kelonggaran waktu"}, {"word": "試合", "reading": "しあい", "meaning": "Pertandingan"}]
    },
    {
        "kanji": "味", "reading": "み / あじ", "meaning": "Rasa, Selera, Makna", "meaningEn": "Taste, Flavor",
        "strokeCount": 8, "onyomi": "ミ", "kunyomi": "あじ・あじ-わう",
        "jlpt": "N4", "category": "Makanan & Minuman",
        "strokeRules": "Tulis radikal mulut (口) di sisi kiri, kemudian tulis kanji belum (未) di sisi kanan. Garis horizontal atas未 lebih pendek dari garis bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Kotak mulut 口 di sebelah kiri",
            "Goresan 4: Garis horizontal atas pendek",
            "Goresan 5: Garis horizontal bawah panjang",
            "Goresan 6: Garis vertikal tegak lurus menembus",
            "Goresan 7-8: Dua cabang miring di dasar"
        ],
        "examples": [{"word": "味", "reading": "あじ", "meaning": "Rasa"}, {"word": "意味", "reading": "いみ", "meaning": "Arti / Makna"}, {"word": "趣味", "reading": "しゅみ", "meaning": "Hobi"}]
    },
    {
        "kanji": "回", "reading": "かい / まわる", "meaning": "Berputar, Frekuensi, Babak", "meaningEn": "Times, Rotate, Round",
        "strokeCount": 6, "onyomi": "カイ・エ", "kunyomi": "まわ-る・まわ-す",
        "jlpt": "N4", "category": "Angka & Waktu",
        "strokeRules": "Kotak luar kiri, sudut atas membelok turun. Tulis kotak mulut kecil di bagian dalam terlebih dahulu, baru kemudian tutup garis horizontal kotak luar.",
        "strokeOrderGuide": [
            "Goresan 1: Garis vertikal kiri luar",
            "Goresan 2: Garis atas membelok ke kanan dan turun",
            "Goresan 3-5: Kotak mulut 口 di dalam",
            "Goresan 6: Garis horizontal penutup bawah kotak luar"
        ],
        "examples": [{"word": "回る", "reading": "まわる", "meaning": "Berputar"}, {"word": "何回", "reading": "なんかい", "meaning": "Berapa kali"}, {"word": "一回", "reading": "いっかい", "meaning": "Satu kali"}]
    },
    {
        "kanji": "泳", "reading": "えい / およぐ", "meaning": "Berenang", "meaningEn": "Swim",
        "strokeCount": 8, "onyomi": "エイ", "kunyomi": "およ-ぐ",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis tiga titik air (氵) di sebelah kiri, kemudian tulis kanji selamanya (永) di sebelah kanan.",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4: Titik atas kanan",
            "Goresan 5: Garis horizontal membelok berkait (永)",
            "Goresan 6-8: Goresan miring dan kait kanan"
        ],
        "examples": [{"word": "泳ぐ", "reading": "およぐ", "meaning": "Berenang"}, {"word": "水泳", "reading": "すいえい", "meaning": "Renang"}]
    },
    {
        "kanji": "族", "reading": "ぞく", "meaning": "Keluarga, Suku, Bangsa", "meaningEn": "Family, Tribe",
        "strokeCount": 11, "onyomi": "ゾク", "kunyomi": "—",
        "jlpt": "N4", "category": "Manusia & Keluarga",
        "strokeRules": "Tulis radikal bendera (方) di sebelah kiri, kemudian kanji panah (矢) di sebelah kanan dari atas ke bawah.",
        "strokeOrderGuide": [
            "Goresan 1-4: Radikal bendera 方 di sisi kiri",
            "Goresan 5-6: Garis miring dan horizontal atas",
            "Goresan 7-11: Radikal panah 矢 di kanan bawah"
        ],
        "examples": [{"word": "家族", "reading": "かぞく", "meaning": "Keluarga"}]
    },
    {
        "kanji": "若", "reading": "じゃく / わかい", "meaning": "Muda", "meaningEn": "Young",
        "strokeCount": 8, "onyomi": "ジャク・ニャク", "kunyomi": "わか-い・も-し",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal rumput (艹) di bagian atas, kemudian bagian kanan (kanji 右: miring, horizontal, dan mulut).",
        "strokeOrderGuide": [
            "Goresan 1-3: Radikal rumput 艹 di bagian atas",
            "Goresan 4: Garis miring ke kiri bawah",
            "Goresan 5: Garis horizontal melintang",
            "Goresan 6-8: Kotak mulut 口 di dasar"
        ],
        "examples": [{"word": "若い", "reading": "わかい", "meaning": "Muda"}]
    },
    {
        "kanji": "計", "reading": "けい / はかる", "meaning": "Mengukur, Rencana, Total", "meaningEn": "Plan, Measure, Meter",
        "strokeCount": 9, "onyomi": "ケイ", "kunyomi": "はか-る・はか-らう",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal kata/bicara (言) di sisi kiri (7 goresan), kemudian tulis angka sepuluh (十) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-7: Radikal kata 言 di sisi kiri",
            "Goresan 8: Garis horizontal kanan",
            "Goresan 9: Garis vertikal tegak menembus garis horizontal"
        ],
        "examples": [{"word": "時計", "reading": "とけい", "meaning": "Jam / Arloji"}, {"word": "計画", "reading": "けいかく", "meaning": "Rencana"}]
    },
    {
        "kanji": "取", "reading": "しゅ / とる", "meaning": "Mengambil, Memperoleh", "meaningEn": "Take, Fetch",
        "strokeCount": 8, "onyomi": "シュ", "kunyomi": "と-る・と-り",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal telinga (耳) di sisi kiri (6 goresan), kemudian tulis radikal tangan (又) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-6: Radikal telinga 耳 di sebelah kiri",
            "Goresan 7: Garis horizontal membelok ke kiri bawah (又)",
            "Goresan 8: Garis miring melandai ke kanan bawah"
        ],
        "examples": [{"word": "取る", "reading": "とる", "meaning": "Mengambil"}]
    },
    {
        "kanji": "具", "reading": "ぐ", "meaning": "Alat, Bahan, Kelengkapan", "meaningEn": "Tool, Ingredient",
        "strokeCount": 8, "onyomi": "グ", "kunyomi": "そな-える・つぶさ-に",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis kotak mata (目) di bagian atas dengan tiga garis horizontal dalam, kemudian garis horizontal panjang di bawah mata, dan dua kaki di dasar.",
        "strokeOrderGuide": [
            "Goresan 1-5: Kotak mata 目 di bagian atas",
            "Goresan 6: Garis horizontal panjang melintang",
            "Goresan 7: Garis miring pendek kiri",
            "Goresan 8: Titik kanan bawah"
        ],
        "examples": [{"word": "家具", "reading": "かぐ", "meaning": "Furnitur"}, {"word": "道具", "reading": "どうぐ", "meaning": "Peralatan"}]
    },
    {
        "kanji": "字", "reading": "じ / あざ", "meaning": "Huruf, Karakter, Tulisan", "meaningEn": "Character, Letter",
        "strokeCount": 6, "onyomi": "ジ", "kunyomi": "あざ・あざな",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Tulis radikal atap (宀) di bagian atas (3 goresan), kemudian tulis kanji anak (子) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-3: Mahkota atap 宀 di atas",
            "Goresan 4-6: Kanji anak 子 di bawah (sudut melengkung, garis vertikal berkait, horizontal melintang)"
        ],
        "examples": [{"word": "漢字", "reading": "かんじ", "meaning": "Kanji"}, {"word": "文字", "reading": "もじ", "meaning": "Huruf / Teks"}]
    },
    {
        "kanji": "便", "reading": "べん / びん / たより", "meaning": "Nyaman, Surat, Feses", "meaningEn": "Convenience, Mail",
        "strokeCount": 9, "onyomi": "ベン・ビン", "kunyomi": "たよ-り",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis radikal orang (亻) di sisi kiri, kemudian bagian kanan ditulis dari atas ke bawah (horizontal, kotak mulut, dan kaki).",
        "strokeOrderGuide": [
            "Goresan 1-2: Radikal orang 亻 di sebelah kiri",
            "Goresan 3: Garis horizontal atas kanan",
            "Goresan 4-6: Kotak mulut tengah",
            "Goresan 7-9: Garis vertikal menembus dan garis miring dasar"
        ],
        "examples": [{"word": "便利", "reading": "べんり", "meaning": "Praktis / Mudah"}, {"word": "郵便局", "reading": "ゆうびんきょく", "meaning": "Kantor pos"}]
    },
    {
        "kanji": "図", "reading": "ず / と / はかる", "meaning": "Gambar, Denah, Peta", "meaningEn": "Map, Drawing, Plan",
        "strokeCount": 7, "onyomi": "ズ・ト", "kunyomi": "え・はか-る",
        "jlpt": "N4", "category": "Warna & Benda",
        "strokeRules": "Kotak luar besar (囗): garis vertikal kiri, sudut kanan. Tulis bagian dalam (titik, sudut, garis silang), baru kemudian tutup kotak luar.",
        "strokeOrderGuide": [
            "Goresan 1: Garis vertikal kiri bingkai luar",
            "Goresan 2: Sudut atas-kanan bingkai luar",
            "Goresan 3-6: Bagian dalam (garis miring dan titik-titik bersilangan)",
            "Goresan 7: Garis horizontal penutup bawah bingkai"
        ],
        "examples": [{"word": "地図", "reading": "ちず", "meaning": "Peta"}, {"word": "図書館", "reading": "としょかん", "meaning": "Perpustakaan"}]
    },
    {
        "kanji": "港", "reading": "こう / みなと", "meaning": "Pelabuhan", "meaningEn": "Port, Harbor",
        "strokeCount": 12, "onyomi": "コウ", "kunyomi": "みなと",
        "jlpt": "N4", "category": "Tempat & Bangunan",
        "strokeRules": "Tulis radikal air (氵) di sisi kiri, kemudian tulis bagian kanan (巷: bersama 艹 dan dasar).",
        "strokeOrderGuide": [
            "Goresan 1-3: Tiga titik air 氵 di sebelah kiri",
            "Goresan 4-6: Bagian atas kanan 艹",
            "Goresan 7-12: Bagian bawah kanan dari atas ke bawah"
        ],
        "examples": [{"word": "港", "reading": "みなと", "meaning": "Pelabuhan"}, {"word": "空港", "reading": "くうこう", "meaning": "Bandara"}]
    },
    {
        "kanji": "遅", "reading": "ち / おそい / おくれる", "meaning": "Lambat, Terlambat", "meaningEn": "Slow, Late",
        "strokeCount": 12, "onyomi": "チ", "kunyomi": "おく-れる・おく-らす・おそ-い",
        "jlpt": "N4", "category": "Sifat & Keadaan",
        "strokeRules": "Tulis bagian dalam kanan (犀 tanpa tanduk) terlebih dahulu dari atas ke bawah, kemudian tutup dengan radikal jalan (辶) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-9: Bagian dalam kanan (bendera 尸 dan bagian kambing/sapi)",
            "Goresan 10-12: Radikal jalan 辶 di sisi kiri dan bawah"
        ],
        "examples": [{"word": "遅い", "reading": "おそい", "meaning": "Lambat / Terlambat"}, {"word": "遅れる", "reading": "おくれる", "meaning": "Ketinggalan / Terlambat"}]
    },
    {
        "kanji": "試", "reading": "し / ためす", "meaning": "Mencoba, Menguji", "meaningEn": "Test, Try",
        "strokeCount": 13, "onyomi": "シ", "kunyomi": "こころ-みる・ため-す",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis radikal kata (言) di sisi kiri (7 goresan), kemudian tulis kanji gaya/upacara (式) di sisi kanan.",
        "strokeOrderGuide": [
            "Goresan 1-7: Radikal kata 言 di sisi kiri",
            "Goresan 8-13: Bagian kanan 式 (horizontal, sudut membelok melengkung dengan kait, garis miring, dan titik)"
        ],
        "examples": [{"word": "試験", "reading": "しけん", "meaning": "Ujian"}, {"word": "試合", "reading": "しあい", "meaning": "Pertandingan"}]
    },
    {
        "kanji": "質", "reading": "しつ / しち", "meaning": "Kualitas, Hakikat, Gadai", "meaningEn": "Quality, Nature, Matter",
        "strokeCount": 15, "onyomi": "シツ・シチ・チ", "kunyomi": "たち・ただ-す",
        "jlpt": "N4", "category": "Aktivitas & Kata Kerja",
        "strokeRules": "Tulis dua kapak (斤) berdampingan di bagian atas, kemudian tulis radikal kerang/uang (貝) di bagian bawah.",
        "strokeOrderGuide": [
            "Goresan 1-4: Kapak 斤 atas kiri",
            "Goresan 5-8: Kapak 斤 atas kanan",
            "Goresan 9-15: Radikal kerang 貝 di dasar (mata 目 dan dua kaki)"
        ],
        "examples": [{"word": "質問", "reading": "しつもん", "meaning": "Pertanyaan"}, {"word": "質", "reading": "しつ", "meaning": "Kualitas"}]
    }
]

# Merge all into one comprehensive list
all_combined = []

# Existing master
for item in KANJI_MASTER:
    all_combined.append(item)

# Add N5 addition
for item in N5_ADDITIONS:
    all_combined.append(item)

# Add N4 additions
curr_max_id = max(k["id"] for k in all_combined)
for item in N4_ADDITIONS:
    curr_max_id += 1
    item_copy = dict(item)
    item_copy["id"] = curr_max_id
    all_combined.append(item_copy)

# Sort by JLPT Level (N5 first, then N4, then others) and ID
level_rank = {"N5": 1, "N4": 2, "N3": 3, "N2": 4, "N1": 5}
all_combined.sort(key=lambda k: (level_rank.get(k["jlpt"], 99), k["id"]))

# Re-index IDs cleanly 1..N
for idx, item in enumerate(all_combined):
    item["id"] = idx + 1

print(f"Total Kanji in dataset: {len(all_combined)}")
from collections import Counter
counts = Counter([k["jlpt"] for k in all_combined])
print("Counts by JLPT level:", dict(counts))

# Write out src/data/kanjiData.ts
ts_code = """import { KanjiItem } from '../types';

export const KANJI_DATA: KanjiItem[] = """ + json.dumps(all_combined, ensure_ascii=False, indent=2) + ";\n"

with open("src/data/kanjiData.ts", "w", encoding="utf-8") as f:
    f.write(ts_code)

print("Successfully written to src/data/kanjiData.ts!")
