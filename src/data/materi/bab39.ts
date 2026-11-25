import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 39,
  title: "Alasan Sopan (〜ので) & Penyebab Emosi (〜て/〜で)",
  subTitle: "遅れて すみません・原因と理由",
  summary: "Menyatakan penyebab reaksi perasaan atau kondisi akibat peristiwa (〜て/〜で), serta menyampaikan alasan secara sopan dan objektif (〜ので).",
  polaKalimat: [
    {
      id: 1,
      japanese: "ニュースを 聞いて、びっくり しました。",
      romaji: "Nyuusu o kiite, bikkuri shimashita.",
      indonesian: "Mendengar berita itu, saya terkejut."
    },
    {
      id: 2,
      japanese: "地震で ビルが 倒れました。",
      romaji: "Jishin de biru ga taoremashita.",
      indonesian: "Gedung runtuh akibat gempa bumi."
    },
    {
      id: 3,
      japanese: "電車の 事故が あったので、遅れました。",
      romaji: "Densha no jiko ga atta node, okuremashita.",
      indonesian: "Dikarenakan terjadi kecelakaan kereta, saya terlambat."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "どう したんですか。うれしそうですね。",
      answer: "……ええ、大学に 合格して、とても うれしいんです。",
      romaji: "Dou shitan desu ka? Ureshisou desu ne. ... Ee, daigaku ni goukaku shite, totemo ureshii ndesu.",
      indonesian: "Ada apa? Terlihat gembira sekali. ... Ya, karena lulus masuk universitas, saya sangat senang."
    },
    {
      id: 2,
      question: "両親に 会えなくて、寂しいですか。",
      answer: "……ええ、とても 寂しいです。",
      romaji: "Ryoushin ni aenakute, sabishii desu ka? ... Ee, totemo sabishii desu.",
      indonesian: "Apakah merasa kesepian karena tidak bisa bertemu orang tua? ... Ya, sangat kesepian."
    },
    {
      id: 3,
      question: "どう して 新幹線が 止まったんですか。",
      answer: "……台風で 木が 倒れたからです。",
      romaji: "Doushite Shinkansen ga tomatta ndesu ka? ... Taifuu de ki ga taoreta kara desu.",
      indonesian: "Mengapa Shinkansen berhenti? ... Karena ada pohon tumbang akibat angin topan."
    },
    {
      id: 4,
      question: "先に 帰っても いいですか。",
      answer: "……ええ、用事が あるので、お先に 失礼します。",
      romaji: "Saki ni kaette mo ii desu ka? ... Ee, youji ga aru node, osaki ni shitsurei shimasu.",
      indonesian: "Apakah boleh pulang duluan? ... Ya, karena ada urusan, saya izin pulang duluan."
    }
  ],
  percakapan: {
    title: "遅れて すみません (Maaf Saya Terlambat)",
    situasi: "Miller-san tiba terlambat di rapat perusahaan akibat kendala transportasi umum dan menyampaikan permintaan maaf serta alasannya kepada atasannya.",
    tokoh: ["ミラー", "課長"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Karyawan",
        japanese: "課長、遅れて 申し訳 ありません。",
        romaji: "Kachou, okurete moushiwake arimasen.",
        indonesian: "Pak Kepala Seksi, mohon maaf sebesar-besarnya saya terlambat."
      },
      {
        speaker: "課長",
        role: "Atasan",
        japanese: "どう したんですか。",
        romaji: "Dou shitan desu ka.",
        indonesian: "Ada kejadian apa?"
      },
      {
        speaker: "ミラー",
        role: "Karyawan",
        japanese: "途中で 電車の 事故が あって、1時間ぐらい 電車が 動かなく なったんです。",
        romaji: "Tochuu de densha no jiko ga atte, ichijikan gurai densha ga ugokanaku natta ndesu.",
        indonesian: "Di tengah perjalanan terjadi kecelakaan kereta, sehingga keretanya berhenti tidak bergerak selama sekitar 1 jam."
      },
      {
        speaker: "課長",
        role: "Atasan",
        japanese: "ああ、さっき ニュースを 見て、知って いましたよ。けがは ありませんでしたか。",
        romaji: "Aa, sakki nyuusu o mite, shitte imashita yo. Kega wa arimasen deshita ka.",
        indonesian: "Oh, tadi saya sudah melihat beritanya dan mengetahuinya. Tidak ada luka kan?"
      },
      {
        speaker: "ミラー",
        role: "Karyawan",
        japanese: "はい、大丈夫です。でも、連絡する 時間が なくて、本当に すみませんでした。",
        romaji: "Hai, daijoubu desu. Demo, renraku suru jikan ga nakute, hontou ni sumimasen deshita.",
        indonesian: "Ya, saya baik-baik saja. Namun karena tidak sempat menghubungi, sungguh mohon maaf."
      },
      {
        speaker: "課長",
        role: "Atasan",
        japanese: "いえ、事故なので しかたが ありませんよ。さあ、席に 着いて ください。",
        romaji: "Ie, jiko na node shikata ga arimasen yo. Saa, seki ni tsuite kudasai.",
        indonesian: "Tidak apa-apa, karena itu kecelakaan, mau bagaimana lagi. Nah, silakan duduk di tempat Anda."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Penyebab Emosi / Kondisi Tak Terkendali: 〜て / 〜で",
      polaFormat: "KK Bentuk-Te / KK-なくて / KS-くて / KS-な で、Reaksi/Emosi",
      explanation: "Berbeda dengan「〜から」, bentuk penghubung「〜て / 〜なくて / 〜くて」digunakan khusus apabila klausa belakangnya berisi perasaan/emosi tak disengaja (senang, sedih, kaget, lega) atau ketidakmampuan (tidak bisa tidur, tidak bisa mengerti). Klausa belakang TIDAK BOLEH berupa ajakan, perintah, atau kemauan.",
      examples: [
        {
          japanese: "子どもが 元気に なって、安心しました。",
          romaji: "Kodomo ga genki ni natte, anshin shimashita.",
          indonesian: "Karena anak saya sudah sehat kembali, saya merasa lega."
        },
        {
          japanese: "道が 複雑で、よく 分かりません。",
          romaji: "Michi ga fukuzatsu de, yoku wakarimasen.",
          indonesian: "Karena jalannya rumit, saya kurang mengerti."
        }
      ]
    },
    {
      point: 2,
      title: "Penyebab Bencana Alam & Peristiwa: Kata Benda + で",
      polaFormat: "Kata Benda (Bencana/Acara/Penyakit) + で、Akibat",
      explanation: "Menunjukkan penyebab terjadinya suatu akibat berupa peristiwa alam atau kejadian fisik (gempa bumi, topan, kecelakaan, kebakaran, penyakit).",
      examples: [
        {
          japanese: "大雪で 電車が 止まりました。",
          romaji: "Ooyuki de densha ga tomarimashita.",
          indonesian: "Karena salju lebat, kereta berhenti beroperasi."
        }
      ]
    },
    {
      point: 3,
      title: "Alasan Sopan & Objektif: Bentuk Biasa + ので",
      polaFormat: "KK/KS-い Bentuk Biasa + ので / KS-な・KB + な ので",
      explanation: "Pola「〜ので」memiliki arti yang sama dengan「〜から」(karena), namun terasa jauh lebih halus, sopan, objektif, dan berempati ketika meminta izin, memohon maaf, atau menolak tawaran di lingkungan kerja. PERHATIAN: Untuk Kata Sifat な dan Kata Benda WAJIB menyisipkan「な」di depan ので (Contoh: 雨なので, 暇なので).",
      examples: [
        {
          japanese: "日本語が よく 分からないので、ゆっくり 話して ください。",
          romaji: "Nihongo ga yoku wakaranai node, yukkuri hanashite kudasai.",
          indonesian: "Karena saya kurang mengerti bahasa Jepang, tolong bicara pelan-pelan."
        },
        {
          japanese: "日曜日は 休みなので、図書館も 閉まって います。",
          romaji: "Nichiyoubi wa yasumi na node, toshokan mo shimatte imasu.",
          indonesian: "Karena hari Minggu libur, perpustakaan juga tutup."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Surat Keterangan Terlambat Kereta (遅延証明書)",
    description: "Jika kereta mengalami keterlambatan di Jepang akibat kecelakaan atau gangguan teknis, pihak stasiun akan membagikan 'Surat Keterangan Keterlambatan' (Chien Shoumeisho) di pintu keluar stasiun sebagai bukti resmi ke perusahaan atau sekolah.",
    notes: [
      "Selalu pilih「〜ので」daripada「〜から」saat memberikan alasan kepada atasan atau pelanggan."
    ]
  }
};
