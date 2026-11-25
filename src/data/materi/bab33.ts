import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 33,
  title: "Bentuk Perintah, Larangan & Arti Rambu",
  subTitle: "これは どういう 意味ですか・命令と禁止",
  summary: "Aturan perubahan kata kerja ke Bentuk Perintah (命令形) dan Larangan Keras (禁止形), menanyakan arti tulisan/rambu (〜と 書いてあります / 〜という 意味です), serta menyampaikan pesan orang lain (〜と 言っていました).",
  polaKalimat: [
    {
      id: 1,
      japanese: "もっと 早く 起きろ！",
      romaji: "Motto hayaku okiro!",
      indonesian: "Bangun lebih cepat! (perintah keras)"
    },
    {
      id: 2,
      japanese: "ここに 車を 止めるな！",
      romaji: "Koko ni kuruma o tomeru na!",
      indonesian: "Dilarang parkir mobil di sini!"
    },
    {
      id: 3,
      japanese: "あの 漢字は 「立入禁止」と 読みます。",
      romaji: "Ano kanji wa 'tachiiri kinshi' to yomimasu.",
      indonesian: "Kanji itu dibaca 'tachiiri kinshi' (dilarang masuk)."
    },
    {
      id: 4,
      japanese: "「使用禁止」は 使っては いけないと いう 意味です。",
      romaji: "'Shiyou kinshi' wa tsukatte wa ikenai to iu imi desu.",
      indonesian: "'Shiyou kinshi' artinya adalah tidak boleh digunakan."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "「駐車禁止」と 書いて ありますが、どういう 意味ですか。",
      answer: "……ここに 車を 止めるなと いう 意味です。",
      romaji: "'Chuusha kinshi' to kaite arimasu ga, dou iu imi desu ka? ... Koko ni kuruma o tomeru na to iu imi desu.",
      indonesian: "Tertulis 'Chuusha kinshi', apa artinya? ... Artinya adalah dilarang memarkir mobil di sini."
    },
    {
      id: 2,
      question: "田中さんは どこですか。",
      answer: "……さっき 「ちょっと 出かけて 来ます」と 言っていましたよ。",
      romaji: "Tanaka-san wa doko desu ka? ... Sakki 'chotto dekakete kimasu' to itte imashita yo.",
      indonesian: "Di mana Tanaka-san? ... Tadi dia bilang 'mau pergi keluar sebentar' lho."
    },
    {
      id: 3,
      question: "部長に 伝えて いただけますか。",
      answer: "……はい、3時に 戻ると 伝えます。",
      romaji: "Buchou ni tsutaete itadakemasu ka? ... Hai, sanji ni modoru to tsutaemasu.",
      indonesian: "Bisakah sampaikan kepada kepala bagian? ... Baik, akan saya sampaikan bahwa Anda kembali jam 3."
    }
  ],
  percakapan: {
    title: "これは どういう 意味ですか (Apa Maksudnya Ini?)",
    situasi: "Miller-san melihat rambu dan tanda peringatan dalam huruf Kanji di area parkir dan tempat umum, lalu menanyakan artinya kepada rekan kerjanya.",
    tokoh: ["ミラー", "佐藤"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "佐藤さん、あの マークは どういう 意味ですか。",
        romaji: "Satou-san, ano maaku wa dou iu imi desu ka.",
        indonesian: "Sato-san, tanda simbol itu maksudnya apa ya?"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "どれですか。ああ、「非常口」ですね。",
        romaji: "Dore desu ka. Aa, 'hijouguchi' desu ne.",
        indonesian: "Yang mana? Oh, itu 'Hijouguchi' (pintu darurat)."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "「非常口」ですか。火事や 地震の とき、ここから 逃げろと いう 意味ですか。",
        romaji: "'Hijouguchi' desu ka. Kaji ya jishin no toki, koko kara nigero to iu imi desu ka.",
        indonesian: "'Pintu darurat' ya. Apakah artinya kalau terjadi kebakaran atau gempa, larilah keluar dari sini?"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ええ、そうです。それから 隣の 「消火器」と 書いて ある 箱には、火を 消す 道具が 入っています。",
        romaji: "Ee, sou desu. Sorekara tonari no 'shoukaki' to kaite aru hako ni wa, hi o kesu dougu ga haitte imasu.",
        indonesian: "Ya, betul. Lalu di kotak sebelahnya yang bertuliskan 'Shoukaki', di dalamnya terdapat alat pemadam api."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "なるほど。よく 分かりました。",
        romaji: "Naruhodo. Yoku wakarimashita.",
        indonesian: "Oh begitu. Saya mengerti dengan jelas."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Bentuk Perintah (命令形) & Larangan Keras (禁止形)",
      polaFormat: "Perintah: Gol. I ('i'➔'e'), Gol. II (ます➔ろ), Gol. III (しろ/こい) | Larangan: KK Kamus + な",
      explanation: "Bentuk perintah (命令形) adalah instruksi paling tegas (dipakai saat darurat bencana, komando olahraga, rambu lalu lintas, atau atasan kepada bawahan akrab). Bentuk larangan keras (禁止形) tinggal menambahkan「な」di belakang Bentuk Kamus (Contoh: 触るな = Jangan sentuh!, 走るな = Jangan lari!).",
      examples: [
        {
          japanese: "逃げろ！(Selamatkan diri!) / 頑張れ！(Semangat!)",
          romaji: "Nigero! / Ganbare!",
          indonesian: "Lari selamatkan diri! / Berjuanglah!"
        },
        {
          japanese: "入るな！(Dilarang masuk!) / 吸うな！(Dilarang merokok!)",
          romaji: "Hairu na! / Suu na!",
          indonesian: "Jangan masuk! / Jangan merokok!"
        }
      ]
    },
    {
      point: 2,
      title: "Menjelaskan Arti Tanda/Kata: 〜と 書いて あります & 〜という 意味です",
      polaFormat: "「Tulisan」+ と 書いて あります / A は [Penjelasan Bentuk Biasa] と いう 意味です",
      explanation: "Digunakan untuk membaca rambu-rambu peringatan dalam huruf Kanji dan menjelaskan maksud maknanya dalam kalimat sederhana.",
      examples: [
        {
          japanese: "「立入禁止」は 入るなと いう 意味です。",
          romaji: "'Tachiiri kinshi' wa hairu na to iu imi desu.",
          indonesian: "'Dilarang masuk' artinya adalah jangan masuk."
        }
      ]
    },
    {
      point: 3,
      title: "Menyampaikan Pesan / Informasi: 〜と 言っていました / 〜と 伝えて ください",
      polaFormat: "Orang + は + [Bentuk Biasa] + と 言っていました",
      explanation: "Digunakan untuk melaporkan ucapan seseorang yang masih relevan sampai saat ini ('Dia tadi bilang bahwa...') atau menitipkan pesan melalui perantara ('Tolong sampaikan bahwa...').",
      examples: [
        {
          japanese: "木村さんに 「あした 会議が ある」と 伝えて ください。",
          romaji: "Kimura-san ni 'ashita kaigi ga aru' to tsutaete kudasai.",
          indonesian: "Tolong sampaikan kepada Kimura-san bahwa besok ada rapat."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Rambu Keselamatan Kerja & Bencana di Jepang",
    description: "Di tempat kerja (terutama sektor SSW manufaktur, konstruksi, dan fasilitas umum), memahami Kanji peringatan seperti 非常口 (pintu darurat), 危険 (bahaya), 立入禁止 (dilarang masuk), dan 消火器 (APAR) sangat krusial untuk keselamatan nyawa.",
    notes: [
      "HINDARI memakai bentuk perintah (しろ/やめろ) dalam percakapan kerja biasa karena terdengar sangat kasar dan agresif!",
      "Di kantor, gunakan selalu bentuk sopan「〜て ください」atau「〜て いただけませんか」."
    ]
  }
};
