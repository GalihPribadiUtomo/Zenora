import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 22,
  title: "Modifikasi Kata Benda (Anak Kalimat)",
  subTitle: "どんな アパートが いいですか・名詞修飾",
  summary: "Menerangkan atau mendeskripsikan kata benda secara spesifik menggunakan anak kalimat kata kerja bentuk biasa (Contoh: Orang yang memakai kacamata, Kue yang dibuat oleh Ibu).",
  polaKalimat: [
    {
      id: 1,
      japanese: "これは ミラーさんが 作った ケーキです。",
      romaji: "Kore wa Miraa-san ga tsukutta keeki desu.",
      indonesian: "Ini adalah kue yang dibuat oleh Miller-san."
    },
    {
      id: 2,
      japanese: "あそこに いる 人は ミラーさんです。",
      romaji: "Asoko ni iru hito wa Miraa-san desu.",
      indonesian: "Orang yang berada di sana adalah Miller-san."
    },
    {
      id: 3,
      japanese: "きのう 習った 言葉を 忘れました。",
      romaji: "Kinou naratta kotoba o wasuremashita.",
      indonesian: "Saya lupa kosakata yang dipelajari kemarin."
    },
    {
      id: 4,
      japanese: "わたしは 買い物に 行く 時間が ありません。",
      romaji: "Watashi wa kaimono ni iku jikan ga arimasen.",
      indonesian: "Saya tidak memiliki waktu untuk pergi berbelanja."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "佐藤さんは どの 人ですか。",
      answer: "……あの 赤い セーターを 着ている 人です。",
      romaji: "Satou-san wa dono hito desu ka? ... Ano akai seetaa o kite iru hito desu.",
      indonesian: "Sato-san itu orang yang mana? ... Orang yang sedang memakai sweter merah itu."
    },
    {
      id: 2,
      question: "それは だれに もらった 時計ですか。",
      answer: "……彼女に もらった 時計です。",
      romaji: "Sore wa dare ni moratta tokei desu ka? ... Kanojo ni moratta tokei desu.",
      indonesian: "Itu jam tangan yang diterima dari siapa? ... Jam tangan yang diterima dari pacar saya."
    },
    {
      id: 3,
      question: "よく 行く レストランは どこですか。",
      answer: "……駅の 前に ある レストランです。",
      romaji: "Yoku iku resutoran wa doko desu ka? ... Eki no mae ni aru resutoran desu.",
      indonesian: "Restoran yang sering Anda kunjungi di mana? ... Restoran yang ada di depan stasiun."
    },
    {
      id: 4,
      question: "どんな 部屋に 住みたいですか。",
      answer: "……庭が ある 部屋に 住みたいです。",
      romaji: "Donna heya ni sumitai desu ka? ... Niwa ga aru heya ni sumitai desu.",
      indonesian: "Ingin tinggal di kamar yang seperti apa? ... Saya ingin tinggal di kamar yang ada tamannya."
    }
  ],
  percakapan: {
    title: "どんな アパートが いいですか (Apartemen Seperti Apa yang Bagus?)",
    situasi: "Wang-san berkunjung ke agen properti real estate untuk mencari apartemen baru yang dekat dari stasiun.",
    tokoh: ["不動産屋", "ワン"],
    dialogs: [
      {
        speaker: "不動産屋",
        role: "Agen Properti",
        japanese: "どのような お部屋を お探しですか。",
        romaji: "Dono you na oheya o osagashi desu ka.",
        indonesian: "Anda sedang mencari kamar/apartemen yang seperti apa?"
      },
      {
        speaker: "ワン",
        role: "Pencari Apartemen",
        japanese: "駅から 歩いて 10分以内の ところが いいです。",
        romaji: "Eki kara aruite juppun inai no tokoro ga ii desu.",
        indonesian: "Saya ingin tempat yang berjarak kurang dari 10 menit jalan kaki dari stasiun."
      },
      {
        speaker: "不動産屋",
        role: "Agen Properti",
        japanese: "家賃は どのくらいですか。",
        romaji: "Yachin wa donokurai desu ka.",
        indonesian: "Untuk biaya sewa bulanan kisarannya berapa?"
      },
      {
        speaker: "ワン",
        role: "Pencari Apartemen",
        japanese: "6万円ぐらいまで お願いします。",
        romaji: "Rokuman-en gurai made onegai shimasu.",
        indonesian: "Tolong yang sampai sekitar 60.000 yen per bulan."
      },
      {
        speaker: "不動産屋",
        role: "Agen Properti",
        japanese: "こちらは いかがですか。スーパーが 近くに あって、日当たりが いい マンションですよ。",
        romaji: "Kochira wa ikaga desu ka. Suupaa ga chikaku ni atte, hiatari ga ii manshon desu yo.",
        indonesian: "Bagaimana dengan yang ini? Apartemen yang dekat dengan supermarket dan pencahayaan mataharinya sangat bagus lho."
      },
      {
        speaker: "ワン",
        role: "Pencari Apartemen",
        japanese: "いいですね。では、きょう 見に 行っても いいですか。",
        romaji: "Ii desu ne. Dewa, kyou mi ni itte mo ii desu ka.",
        indonesian: "Bagus sekali. Kalau begitu, bolehkah hari ini pergi meninjaunya langsung?"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Struktur Modifikasi Kata Benda (Kalimat Relatif 'Yang')",
      polaFormat: "[Anak Kalimat Bentuk Biasa] + Kata Benda",
      explanation: "Dalam bahasa Indonesia kita menggunakan kata 'yang' setelah kata benda (misal: 'Buku yang saya baca kemarin'). Dalam bahasa Jepang, seluruh kalimat penjelasannya WAJIB diletakkan SEBELUM kata benda dalam Bentuk Biasa tanpa kata sambung apa pun:「きのう わたしが 読んだ 本」.",
      examples: [
        {
          japanese: "わたしが 撮った 写真です。",
          romaji: "Watashi ga totta shashin desu.",
          indonesian: "Foto yang saya ambil."
        },
        {
          japanese: "あした 友達に 会う 約束が あります。",
          romaji: "Ashita tomodachi ni au yakusoku ga arimasu.",
          indonesian: "Ada janji (untuk) bertemu teman besok."
        }
      ]
    },
    {
      point: 2,
      title: "Subjek di Dalam Anak Kalimat Modifikasi",
      polaFormat: "Subjek Anak Kalimat + が (Bukan は!)",
      explanation: "Sangat penting diingat: Subjek pelaku di dalam anak kalimat penjelasan TIDAK BOLEH menggunakan partikel「は」, melainkan WAJIB menggunakan partikel「が」atau「の」.",
      examples: [
        {
          japanese: "母が 作ってくれた 料理は おいしいです。",
          romaji: "Haha ga tsukutte kureta ryouri wa oishii desu.",
          indonesian: "Masakan yang dibuatkan ibu itu enak."
        }
      ]
    },
    {
      point: 3,
      title: "Mendeskripsikan Penampilan Pakaian / Aksesoris",
      polaFormat: "シャツを 着ている 人 / ズボンを はいている 人 / 眼鏡を かけている 人",
      explanation: "Kata kerja memakai pakaian dalam bahasa Jepang berbeda tergantung bagian tubuhnya: 着ます (atasan/baju), はきます (bawahan/celana/sepatu), かぶります (topi), かけます (kacamata). Untuk menggambarkan seseorang yang sedang memakainya saat itu, selalu gunakan bentuk sedang berlangsung「〜て いる」.",
      examples: [
        {
          japanese: "眼鏡を かけている 人が 田中先生です。",
          romaji: "Megane o kakete iru hito ga Tanaka sensei desu.",
          indonesian: "Orang yang memakai kacamata adalah Pak Guru Tanaka."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Mencari Tempat Tinggal di Agen Properti (不動産屋)",
    description: "Di Jepang, saat menyewa apartemen baru umumnya terdapat biaya awal seperti 敷金 (uang jaminan/deposit) dan 礼金 (uang terima kasih kepada pemilik properti).",
    notes: [
      "Perbedaan「アパート」(bangunan 2 lantai dari kayu/baja ringan) dan「マンション」(gedung apartemen beton bertingkat banyak).",
      "Pencahayaan matahari yang menghadap ke selatan (日当たりがいい) adalah nilai tambah utama dalam memilih tempat tinggal di Jepang."
    ]
  }
};
