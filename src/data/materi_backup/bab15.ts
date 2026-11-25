import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 15,
  title: "Izin & Larangan",
  subTitle: "ご家族は？・許可と禁止",
  summary: "Meminta izin melakukan aksi (〜ても いいですか), larangan tegas (〜ては いけません), dan status/kondisi berkelanjutan (〜て います: 結婚、住む、知る).",
  polaKalimat: [
    {
      id: 1,
      japanese: "写真を 撮っても いいですか。",
      romaji: "Shashin o totte mo ii desu ka.",
      indonesian: "Bolehkah saya mengambil foto?"
    },
    {
      id: 2,
      japanese: "ここで タバコを 吸っては いけません。",
      romaji: "Koko de tabako o sutte wa ikemasen.",
      indonesian: "Tidak boleh merokok di sini."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "この カタログを もらっても いいですか。",
      answer: "……ええ、いいですよ。どうぞ。",
      romaji: "Kono katarogu o moratte mo ii desu ka? ... Ee, ii desu yo. Douzo.",
      indonesian: "Bolehkah saya meminta katalog ini? ... Ya, tentu boleh. Silakan."
    },
    {
      id: 2,
      question: "この 辞書を 借りても いいですか。",
      answer: "……すみません、ちょっと……。今 使って います。",
      romaji: "Kono jisho o karite mo ii desu ka? ... Sumimasen, chotto... Ima tsukatte imasu.",
      indonesian: "Bolehkah saya meminjam kamus ini? ... Maaf, sekarang sedang saya pakai."
    },
    {
      id: 3,
      question: "ここで 遊んでも いいですか。",
      answer: "……いいえ、ここで 遊んでは いけません。",
      romaji: "Koko de asonde mo ii desu ka? ... Iie, koko de asonde wa ikemasen.",
      indonesian: "Bolehkah bermain di sini? ... Tidak, tidak boleh bermain di sini."
    },
    {
      id: 4,
      question: "市役所の 電話番号を 知って いますか。",
      answer: "……はい、知って います。／いいえ、知りません。",
      romaji: "Shiyakusho no denwabangou o shitte imasu ka? ... Hai, shitte imasu. / Iie, shirimasen.",
      indonesian: "Apakah Anda tahu nomor telepon kantor balai kota? ... Ya, saya tahu. / Tidak, saya tidak tahu."
    },
    {
      id: 5,
      question: "マリアさんは どこに 住んで いますか。",
      answer: "……大阪に 住んで います。",
      romaji: "Maria-san wa doko ni sunde imasu ka? ... Oosaka ni sunde imasu.",
      indonesian: "Di manakah Maria tinggal? ... Tinggal di Osaka."
    },
    {
      id: 6,
      question: "ワンさんは 結婚して いますか。",
      answer: "……いいえ、独身です。",
      romaji: "Wan-san wa kekkon shite imasu ka? ... Iie, dokushin desu.",
      indonesian: "Apakah Wang-san sudah menikah? ... Belum, masih lajang."
    }
  ],
  percakapan: {
    title: "ご家族は？ (Bagaimana dengan Keluarga Anda?)",
    situasi: "Miller-san dan Kimura-san sedang melihat album foto sambil bercerita tentang keluarga dan pekerjaan.",
    tokoh: ["木村", "ミラー"],
    dialogs: [
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "ミラーさん、この 写真の 方は どなたですか。",
        romaji: "Miraa-san, kono shashin no kata wa donata desu ka.",
        indonesian: "Miller-san, siapakah orang yang ada di foto ini?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "姉です。ロンドンに 住んで います。",
        romaji: "Ane desu. Rondon ni sunde imasu.",
        indonesian: "Ini kakak perempuan saya. Dia tinggal di London."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "お姉さんは 何の お仕事を して いますか。",
        romaji: "Oneesan wa nan no oshigoto o shite imasu ka.",
        indonesian: "Apakah pekerjaan kakak perempuan Anda?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "高校の 英語の 先生を して います。",
        romaji: "Koukou no eigo no sensei o shite imasu.",
        indonesian: "Dia mengajar sebagai guru bahasa Inggris di SMA."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "そうですか。ご結婚は？",
        romaji: "Sou desu ka. Gokekkon wa?",
        indonesian: "Begitu ya. Apakah beliau sudah menikah?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、結婚して います。子どもが 2人 います。",
        romaji: "Ee, kekkon shite imasu. Kodomo ga futari imasu.",
        indonesian: "Ya, sudah menikah. Memiliki dua orang anak."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "男の子と 女の子ですか。",
        romaji: "Otokonoko to onnanoko desu ka.",
        indonesian: "Laki-laki dan perempuan?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、男の子と 女の子です。可愛いです。",
        romaji: "Ee, otokonoko to onnanoko desu. Kawaii desu.",
        indonesian: "Ya, laki-laki dan perempuan. Sangat lucu dan menggemaskan."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Meminta Izin: 〜ても いいですか",
      polaFormat: "Kata Kerja Bentuk-Te + も いいですか",
      explanation: "Digunakan untuk meminta izin dari lawan bicara untuk melakukan suatu perbuatan. Jawaban positif:「ええ、いいですよ。どうぞ」. Jawaban penolakan sopan:「すみません、ちょっと……」.",
      examples: [
        {
          japanese: "写真を 撮っても いいですか。",
          romaji: "Shashin o totte mo ii desu ka.",
          indonesian: "Bolehkah saya mengambil foto?"
        },
        {
          japanese: "ここで タバコを 吸っても いいですか。",
          romaji: "Koko de tabako o sutte mo ii desu ka.",
          indonesian: "Bolehkah saya merokok di sini?"
        }
      ]
    },
    {
      point: 2,
      title: "Larangan Keras: 〜ては いけません",
      polaFormat: "Kata Kerja Bentuk-Te + は いけません",
      explanation: "Digunakan untuk menyatakan larangan tegas atau tidak boleh melakukan suatu perbuatan. Sering digunakan pada peraturan tempat umum, instruksi keselamatan, atau peringatan.",
      examples: [
        {
          japanese: "ここで 車を 止めては いけません。",
          romaji: "Koko de kuruma o tomete wa ikemasen.",
          indonesian: "Tidak boleh memarkir mobil di sini."
        },
        {
          japanese: "美術館の中で 写真を 撮っては いけません。",
          romaji: "Bijutsukan no naka de shashin o totte wa ikemasen.",
          indonesian: "Tidak boleh mengambil foto di dalam museum seni."
        }
      ]
    },
    {
      point: 3,
      title: "Status & Kondisi Berkelanjutan: 〜て います",
      polaFormat: "Kata Kerja Bentuk-Te + います",
      explanation: "Menyatakan status, kedudukan, atau hasil perbuatan yang sudah terjadi di masa lampau dan kondisinya masih berlangsung hingga saat ini seperti tempat tinggal (住んで います), pekerjaan/kantor (勤めて います / 働いて います), pernikahan (結婚して います), dan kepemilikan benda (持って います).",
      examples: [
        {
          japanese: "わたしは 大阪に 住んで います。",
          romaji: "Watashi wa Oosaka ni sunde imasu.",
          indonesian: "Saya tinggal di Osaka."
        },
        {
          japanese: "IMCで 働いて います。",
          romaji: "IMC de hataraite imasu.",
          indonesian: "Saya bekerja di IMC."
        },
        {
          japanese: "わたしは 結婚して います。",
          romaji: "Watashi wa kekkon shite imasu.",
          indonesian: "Saya sudah menikah."
        }
      ]
    },
    {
      point: 4,
      title: "Pengetahuan: 知って います & 知りません",
      polaFormat: "知って います (Tahu) ⇔ 知りません (Tidak tahu)",
      explanation: "Perhatikan bahwa untuk menyatakan mengetahui sesuatu digunakan bentuk「知って います」, namun ketika menyatakan TIDAK TAHU, bentuk yang digunakan adalah「知りません」(bukan 知って いません).",
      examples: [
        {
          japanese: "市役所の 電話番号を 知って いますか。……はい、知って います。",
          romaji: "Shiyakusho no denwabangou o shitte imasu ka? ... Hai, shitte imasu.",
          indonesian: "Apakah Anda tahu nomor telepon balai kota? ... Ya, saya tahu."
        },
        {
          japanese: "いいえ、知りません。",
          romaji: "Iie, shirimasen.",
          indonesian: "Tidak, saya tidak tahu."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Etika Izin & Larangan di Jepang",
    description: "Di Jepang, izin sangat dihargai terutama saat mengambil foto di kuil (神社/お寺), museum, atau toko. Selain itu, merokok di area umum diatur sangat ketat pada area bertanda 喫煙所 (kitsuenjo).",
    notes: [
      "Gunakan「〜ても いいですか」dengan intonasi ramah saat meminta izin.",
      "Jika menolak permintaan izin, masyarakat Jepang jarang berkata 'ダメ' (tidak boleh) secara kasar kepada tamu, melainkan menggunakan ekspresi halus:「すみません、ちょっと……」(Maaf, agak kurang memungkinkan...)."
    ]
  }
};
