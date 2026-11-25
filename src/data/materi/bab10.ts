import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 10,
  title: "Keberadaan & Posisi Ruang",
  subTitle: "チリソースは ありますか・存在と位置",
  summary: "Keberadaan benda mati (あります), makhluk hidup (います), posisi spasial (上, 下, 前, 後ろ, 中, 隣, 間), dan penyebutan contoh benda (〜や〜など).",
  polaKalimat: [
    {
      id: 1,
      japanese: "あそこに 交番が あります。",
      romaji: "Asoko ni kouban ga arimasu.",
      indonesian: "Di sebelah sana ada pos polisi."
    },
    {
      id: 2,
      japanese: "あそこに ミラーさんが います。",
      romaji: "Asoko ni Miraa-san ga imasu.",
      indonesian: "Di sebelah sana ada Miller-san."
    },
    {
      id: 3,
      japanese: "机の 上に 写真が あります。",
      romaji: "Tsukue no ue ni shashin ga arimasu.",
      indonesian: "Di atas meja ada foto."
    },
    {
      id: 4,
      japanese: "郵便局は 銀行の 隣に あります。",
      romaji: "Yuubinkyoku wa ginkou no tonari ni arimasu.",
      indonesian: "Kantor pos berada di sebelah bank."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "あそこに 男の 人が いますね。だれですか。",
      answer: "……IMCの 松本さんです。",
      romaji: "Asoko ni otoko no hito ga imasu ne. Dare desu ka? ... IMC no Matsumoto-san desu.",
      indonesian: "Di sana ada seorang laki-laki ya. Siapakah dia? ... Sdr. Matsumoto dari perusahaan IMC."
    },
    {
      id: 2,
      question: "近くに スーパーが ありますか。",
      answer: "……はい、あそこに あります。",
      romaji: "Chikaku ni suupaa ga arimasu ka? ... Hai, asoko ni arimasu.",
      indonesian: "Apakah di dekat sini ada supermarket? ... Ya, ada di sebelah sana."
    },
    {
      id: 3,
      question: "庭に だれが いますか。",
      answer: "……だれも いません。猫が 1匹 います。",
      romaji: "Niwa ni dare ga imasu ka? ... Dare mo imasen. Neko ga ippiki imasu.",
      indonesian: "Siapa yang ada di halaman taman? ... Tidak ada siapa-siapa. Hanya ada seekor kucing."
    },
    {
      id: 4,
      question: "箱の 中に 何が ありますか。",
      answer: "……古い 手紙や 写真などが あります。",
      romaji: "Hako no naka ni nani ga arimasu ka? ... Furui tegami ya shashin nado ga arimasu.",
      indonesian: "Ada apa di dalam kotak itu? ... Ada surat lama, foto-foto, dan lain sebagainya."
    },
    {
      id: 5,
      question: "郵便局は どこに ありますか。",
      answer: "……駅の 近くです。銀行と 薬屋の 間に あります。",
      romaji: "Yuubinkyoku wa doko ni arimasu ka? ... Eki no chikaku desu. Ginkou to kusuriya no aida ni arimasu.",
      indonesian: "Di manakah kantor pos berada? ... Dekat stasiun. Berada di antara bank dan apotek."
    }
  ],
  percakapan: {
    title: "チリソースは ありますか (Apakah Ada Saus Cabai?)",
    situasi: "Miller-san sedang berbelanja bahan makanan di supermarket dan menanyakan lokasi bumbu kepada pelayan toko.",
    tokoh: ["ミラー", "店員"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Pembeli",
        japanese: "すみません。チリソースは ありますか。",
        romaji: "Sumimasen. Chiri soosu wa arimasu ka.",
        indonesian: "Permisi. Apakah ada saus cabai?"
      },
      {
        speaker: "店員",
        role: "Pelayan Toko",
        japanese: "はい、あります。あちらの アジア食品の コーナーに ございます。",
        romaji: "Hai, arimasu. Achira no Ajia shokuhin no koonaa ni gozaimasu.",
        indonesian: "Ya, ada. Berada di konter makanan Asia di sebelah sana."
      },
      {
        speaker: "ミラー",
        role: "Pembeli",
        japanese: "何段目ですか。",
        romaji: "Nandanme desu ka.",
        indonesian: "Di rak tingkat ke berapa?"
      },
      {
        speaker: "店員",
        role: "Pelayan Toko",
        japanese: "下から 2段目です。右の 方に ございます。",
        romaji: "Shita kara nidanme desu. Migi no hou ni gozaimasu.",
        indonesian: "Tingkat ke-2 dari bawah. Posisinya di sebelah kanan."
      },
      {
        speaker: "ミラー",
        role: "Pembeli",
        japanese: "分かりました。どうも ありがとう。",
        romaji: "Wakarimashita. Doumo arigatou.",
        indonesian: "Saya mengerti. Terima kasih banyak."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Perbedaan Keberadaan: あります vs います",
      polaFormat: "Benda Mati + が あります ⇔ Makhluk Bernyawa + が います",
      explanation: "Untuk benda mati, barang, tanaman, gedung, dan konsep abstrak gunakan「あります」. Sedangkan untuk manusia dan hewan yang bergerak bernyawa gunakan「います」.",
      examples: [
        {
          japanese: "部屋に 机が あります。",
          romaji: "Heya ni tsukue ga arimasu.",
          indonesian: "Di kamar ada meja."
        },
        {
          japanese: "教室に 学生が います。",
          romaji: "Kyoushitsu ni gakusei ga imasu.",
          indonesian: "Di ruang kelas ada murid."
        }
      ]
    },
    {
      point: 2,
      title: "Partikel Lokasi Tempat: Tempat + に",
      polaFormat: "Tempat + に + Subjek + が あります / います",
      explanation: "Partikel に menandai titik lokasi eksistensi tempat suatu objek berada (berbeda dengan で yang menunjukkan lokasi kegiatan aktif).",
      examples: [
        {
          japanese: "公園に 木が あります。",
          romaji: "Kouen ni ki ga arimasu.",
          indonesian: "Di taman ada pohon."
        }
      ]
    },
    {
      point: 3,
      title: "Posisi Spasial (Tata Ruang): 〜の 上 / 下 / 前 / 後ろ / 中 / 隣 / 間",
      polaFormat: "Kata Benda + の + Posisi (上/下/前/後ろ/中/隣/間) + に",
      explanation: "Untuk menyebutkan posisi relatif suatu benda terhadap benda patokan: 上 (atas), 下 (bawah), 前 (depan), 後ろ (belakang), 中 (dalam), 外 (luar), 隣 (sebelah yang sejenis), 間 (antara 2 benda: A と B の 間).",
      examples: [
        {
          japanese: "椅子の 下に 猫が います。",
          romaji: "Isu no shita ni neko ga imasu.",
          indonesian: "Di bawah kursi ada kucing."
        },
        {
          japanese: "銀行の 前に ポストが あります。",
          romaji: "Ginkou no mae ni posuto ga arimasu.",
          indonesian: "Di depan bank ada kotak pos."
        }
      ]
    },
    {
      point: 4,
      title: "Penyebutan Contoh Benda Sebagian: 〜や〜など",
      polaFormat: "Benda 1 + や + Benda 2 + など",
      explanation: "Jika partikel と menggabungkan seluruh benda secara lengkap, partikel や hanya mengambil 2 atau 3 benda sebagai perwakilan dari sekian banyak benda yang ada (dan lain-lain).",
      examples: [
        {
          japanese: "机の上に 本や ペンなどが あります。",
          romaji: "Tsukue no ue ni hon ya pen nado ga arimasu.",
          indonesian: "Di atas meja ada buku, pena, dan lain sebagainya."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menanyakan Lokasi Barang di Toko Jepang",
    description: "Di toko atau pasar swalayan Jepang, staf menggunakan ragam bahasa sangat sopan (Keigo), seperti mengganti「あります」menjadi「ございます」.",
    notes: [
      "Penghitung rak tingkat dalam bahasa Jepang menggunakan: 1段目 (tingkat 1), 2段目 (tingkat 2), dan seterusnya.",
      "Gunakan kata tanya「何段目ですか」(tingkat ke berapa?) untuk memastikan letak rak."
    ]
  }
};
