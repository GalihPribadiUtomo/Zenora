import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 9,
  title: "Kesukaan, Kemampuan & Alasan",
  subTitle: "残念ですが・好悪と能力",
  summary: "Partikel objek が untuk kesukaan (好き), ketidaksukaan (嫌い), kemahiran (上手/下手), pemahaman (わかります), kepemilikan (あります), dan alasan (から).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは イタリア料理が 好きです。",
      romaji: "Watashi wa Itaria ryouri ga suki desu.",
      indonesian: "Saya menyukai masakan Italia."
    },
    {
      id: 2,
      japanese: "わたしは 日本語が 少し わかります。",
      romaji: "Watashi wa nihongo ga sukoshi wakarimasu.",
      indonesian: "Saya sedikit memahami bahasa Jepang."
    },
    {
      id: 3,
      japanese: "今日は 子どもの 誕生日ですから、早く 帰ります。",
      romaji: "Kyou wa kodomo no tanjoubi desu kara, hayaku kaerimasu.",
      indonesian: "Karena hari ini ulang tahun anak saya, saya pulang lebih awal."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "お酒が 好きですか。",
      answer: "……いいえ、好きじゃ ありません。",
      romaji: "Osake ga suki desu ka? ... Iie, suki ja arimasen.",
      indonesian: "Apakah Anda suka minuman beralkohol? ... Tidak, saya tidak suka."
    },
    {
      id: 2,
      question: "どんな スポーツが 好きですか。",
      answer: "……サッカーが 好きです。",
      romaji: "Donna supootsu ga suki desu ka? ... Sakkaa ga suki desu.",
      indonesian: "Olahraga seperti apa yang Anda sukai? ... Saya suka sepak bola."
    },
    {
      id: 3,
      question: "カリナさんは 絵が 上手ですか。",
      answer: "……はい、とても 上手です。",
      romaji: "Karina-san wa e ga jouzu desu ka? ... Hai, totemo jouzu desu.",
      indonesian: "Apakah Sdr. Karina pandai menggambar? ... Ya, sangat pandai."
    },
    {
      id: 4,
      question: "田中さんは インドネシア語が わかりますか。",
      answer: "……いいえ、全然 わかりません。",
      romaji: "Tanaka-san wa Indoneshia-go ga wakarimasu ka? ... Iie, zenzen wakarimasen.",
      indonesian: "Apakah Sdr. Tanaka mengerti bahasa Indonesia? ... Tidak, sama sekali tidak mengerti."
    },
    {
      id: 5,
      question: "細かい お金が ありますか。",
      answer: "……いいえ、ありません。",
      romaji: "Komakai okane ga arimasu ka? ... Iie, arimasen.",
      indonesian: "Apakah Anda punya uang receh/pecahan kecil? ... Tidak, tidak punya."
    },
    {
      id: 6,
      question: "どうして 昨日 会社を 休みましたか。",
      answer: "……熱が ありましたから。",
      romaji: "Doushite kinou kaisha o yasumimashita ka? ... Netsu ga arimashita kara.",
      indonesian: "Mengapa kemarin Anda tidak masuk kerja? ... Karena demam."
    }
  ],
  percakapan: {
    title: "残念ですが (Sayang Sekali)",
    situasi: "Kimura-san mengajak Miller-san menonton konser musik klasik, namun Miller-san berhalangan karena sudah ada janji lain.",
    tokoh: ["木村", "ミラー"],
    dialogs: [
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "ミラーさん、クラシックの コンサートの チケットが 2枚 あります。いっしょに 行きませんか。",
        romaji: "Miraa-san, kurashikku no konsaato no chiketto ga nimai arimasu. Issho ni ikimasen ka.",
        indonesian: "Miller-san, saya punya 2 tiket konser musik klasik. Maukah pergi bersama?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "いいですね。いつですか。",
        romaji: "Ii desu ne. Itsu desu ka.",
        indonesian: "Bagus sekali. Kapan konsernya?"
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "来週の 金曜日の 晩です。",
        romaji: "Raishuu no kinyoubi no ban desu.",
        indonesian: "Jumat malam minggu depan."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "金曜日ですか。金曜日の 晩は 友達と 約束が ありますから、ちょっと……。",
        romaji: "Kinyoubi desu ka. Kinyoubi no ban wa tomodachi to yakusoku ga arimasu kara, chotto...",
        indonesian: "Hari Jumat ya. Jumat malam saya sudah ada janji dengan teman, jadi agak berhalangan..."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "そうですか。残念ですね。",
        romaji: "Sou desu ka. Zannen desu ne.",
        indonesian: "Begitu ya. Sayang sekali ya."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ。また 今度 お願いします。",
        romaji: "Ee. Mata kondo onegai shimasu.",
        indonesian: "Iya. Lain kali ajak saya lagi ya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Partikel が: Objek Rasa Suka, Kemampuan & Kepemilikan",
      polaFormat: "Kata Benda + が + 好き / 嫌い / 上手 / 下手 / あります / わかります",
      explanation: "Berbeda dari kata kerja transitif biasa yang menggunakan partikel を, predikat yang menyatakan rasa suka/tidak suka (好き/嫌い), kemahiran (上手/下手), pemahaman (わかります), dan kepemilikan (あります) menggunakan partikel が untuk menandai objek sasarannya.",
      examples: [
        {
          japanese: "日本語が 好きです。",
          romaji: "Nihongo ga suki desu.",
          indonesian: "Menyukai bahasa Jepang."
        },
        {
          japanese: "車が あります。",
          romaji: "Kuruma ga arimasu.",
          indonesian: "Mempunyai mobil."
        }
      ]
    },
    {
      point: 2,
      title: "Tingkat Derajat Pemahaman & Kuantitas",
      polaFormat: "よく / だいたい / 少し / あまり / 全然",
      explanation: "Untuk pemahaman (わかります): よく(sangat mengerti) > だいたい(sebagian besar mengerti) > 少し(sedikit mengerti) > あまり〜ません(kurang mengerti) > 全然〜ません(sama sekali tidak mengerti).",
      examples: [
        {
          japanese: "英語が よく わかります。",
          romaji: "Eigo ga yoku wakarimasu.",
          indonesian: "Sangat memahami bahasa Inggris."
        },
        {
          japanese: "漢字が 全然 わかりません。",
          romaji: "Kanji ga zenzen wakarimasen.",
          indonesian: "Sama sekali tidak mengerti kanji."
        }
      ]
    },
    {
      point: 3,
      title: "Partikel Alasan / Kausalitas: 〜から",
      polaFormat: "Kalimat Alasan (Sebab) + から、Kalimat Utama (Akibat)",
      explanation: "Partikel から diletakkan di akhir klausa penyebab yang berarti 'karena / oleh sebab itu'.",
      examples: [
        {
          japanese: "時間ですから、始めましょう。",
          romaji: "Jikan desu kara, hajimemashou.",
          indonesian: "Karena sudah waktunya, mari kita mulai."
        }
      ]
    },
    {
      point: 4,
      title: "Menanyakan Alasan: どうして",
      polaFormat: "どうして 〜 か。……〜から。",
      explanation: "どうして digunakan untuk menanyakan alasan (mengapa / kenapa). Jawabannya wajib diakhiri dengan から.",
      examples: [
        {
          japanese: "どうして 食べませんか。……おなかが いっぱいですから。",
          romaji: "Doushite tabemasen ka? ... Onaka ga ippai desu kara.",
          indonesian: "Mengapa tidak makan? ... Karena sudah kenyang."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menolak Ajakan Secara Halus",
    description: "Dalam budaya komunikasi Jepang, menolak ajakan tidak diungkapkan dengan kata 'tidak mau' secara tegas, melainkan dengan menyebut alasan lalu menggantungkan kalimat dengan「ちょっと……」(agak...).",
    notes: [
      "Ungkapan「また今度お願いします」(Lain kali ajak saya lagi ya) menjaga hubungan silaturahmi tetap hangat.",
      "Gunakan kata「残念ですね」(sayang sekali) untuk bersimpati terhadap hal yang tidak terwujud."
    ]
  }
};
