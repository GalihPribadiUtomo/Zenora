import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 43,
  title: "Tampak Kelihatannya (〜そうです) & Pergi Kembali",
  subTitle: "今にも 雨が 降りそうですね・様態と帰着",
  summary: "Menyatakan kesan atau firasat berdasarkan apa yang dilihat mata secara langsung (KK Bentuk-Masu tanpa ます + そうです / KS + そうです), serta melakukan suatu kegiatan ke tempat lain lalu kembali lagi (〜て 来ます).",
  polaKalimat: [
    {
      id: 1,
      japanese: "今にも 雨が 降りそうです。",
      romaji: "Ima ni mo ame ga furisou desu.",
      indonesian: "Kelihatannya sebentar lagi akan segera turun hujan."
    },
    {
      id: 2,
      japanese: "この 料理は とても おいしそうです。",
      romaji: "Kono ryouri wa totemo oishisou desu.",
      indonesian: "Masakan ini kelihatannya sangat lezat."
    },
    {
      id: 3,
      japanese: "ちょっと コンビニで 飲み物を 買って 来ます。",
      romaji: "Chotto konbini de nomimono o katte kimasu.",
      indonesian: "Saya pergi membeli minuman di minimarket sebentar lalu kembali ke sini."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "その 荷物、重そうですね。持ちましょうか。",
      answer: "……すみません、お願いします。",
      romaji: "Sono nimotsu, omosou desu ne. Mochimashou ka. ... Sumimasen, onegai shimasu.",
      indonesian: "Barang itu kelihatannya berat ya. Bagaimana kalau saya bantu bawa? ... Maaf merepotkan, tolong ya."
    },
    {
      id: 2,
      question: "あの 店は いつも 人で いっぱいですね。",
      answer: "……ええ、値段も 安そうだし、とても 楽しそうです。",
      romaji: "Ano mise wa itsumo hito de ippai desu ne. ... Ee, nedan mo yasousou dashi, totemo tanoshisou desu.",
      indonesian: "Toko itu selalu penuh orang ya. ... Ya, harganya juga kelihatan murah dan tempatnya tampak seru."
    },
    {
      id: 3,
      question: "この カバン、丈夫で 使いやすそうですね。",
      answer: "……ええ、とても 良さそうですよ。",
      romaji: "Kono kaban, joubu de tsukaiyasusou desu ne. ... Ee, totemo yosasou desu yo.",
      indonesian: "Tas ini kelihatannya kuat dan mudah dipakai ya. ... Ya, tampak bagus sekali lho."
    },
    {
      id: 4,
      question: "田中さんは どこへ 行きましたか。",
      answer: "……「ちょっと 銀行へ 行って 来ます」と 言って、出かけました。",
      romaji: "Tanaka-san wa doko e ikimashita ka? ... 'Chotto ginkou e itte kimasu' to itte, dekakemashita.",
      indonesian: "Ke mana Tanaka-san pergi? ... Dia keluar sambil berkata, 'Saya pergi ke bank sebentar'."
    }
  ],
  percakapan: {
    title: "今にも 雨が 降りそうですね (Kelihatannya Sebentar Lagi Turun Hujan Ya)",
    situasi: "Miller-san dan rekannya bersiap berangkat keluar kantor, namun melihat langit mendung gelap pertanda hujan akan segera turun.",
    tokoh: ["ミラー", "佐藤"],
    dialogs: [
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "うわあ、空が 暗く なりましたね。今にも 雨が 降りそうですね。",
        romaji: "Uwaa, sora ga kuraku narimashita ne. Ima ni mo ame ga furisou desu ne.",
        indonesian: "Wah, langitnya menjadi gelap sekali ya. Kelihatannya sebentar lagi akan segera turun hujan nih."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "本当だ。風が 強く なって 来ましたね。",
        romaji: "Hontou da. Kaze ga tsuyoku natte kimashita ne.",
        indonesian: "Betul sekali. Anginnya juga mulai bertiup kencang ya."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ミラーさん、傘は 持って いますか。",
        romaji: "Miraa-san, kasa wa motte imasu ka.",
        indonesian: "Miller-san, apakah membawa payung?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "いえ、きょうは 朝 いい 天気だったので、持って 来ませんでした。ロッカーから 折り畳み傘を 取って 来ます。",
        romaji: "Ie, kyou wa asa ii tenki datta node, motte kimasen deshita. Rokkaa kara oritatami-gasa o totte kimasu.",
        indonesian: "Tidak, karena pagi tadi cuacanya cerah, saya tidak membawanya. Sebentar ya, saya ambil payung lipat dari loker."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "いってらっしゃい。わたしは ここで 待って いますよ。",
        romaji: "Itterasshai. Watashi wa koko de matte imasu yo.",
        indonesian: "Silakan, hati-hati. Saya tunggu di sini ya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Kesan Penglihatan Langsung: 〜そうです (Kelihatannya)",
      polaFormat: "KK (hilang ます) + そうです / KS-い (hilang い) + そうです / KS-な + そうです",
      explanation: "Menyatakan tebakan atau kesan langsung setelah melihat wujud benda, ekspresi wajah orang, atau situasi alam ('Tampaknya enak', 'Kelihatannya mau jatuh'). PENGECUALIAN: Kata sifat「いい」menjadi「よさそうです」, dan「ない」menjadi「なさそうです」. Untuk kata kerja, pola ini menyatakan sesuatu yang sudah hampir terjadi detik itu juga (hampir jatuh, hampir menangis).",
      examples: [
        {
          japanese: "ボタンが 取れそうです。",
          romaji: "Botan ga toresou desu.",
          indonesian: "Kancingnya kelihatannya hampir lepas."
        },
        {
          japanese: "ミラーさんは とても 暇そうです。",
          romaji: "Miraa-san wa totemo himasou desu.",
          indonesian: "Miller-san tampak sangat senggang."
        }
      ]
    },
    {
      point: 2,
      title: "Pergi Melakukan Sesuatu Lalu Kembali Lagi: KK Bentuk-Te + 来ます",
      polaFormat: "Kata Kerja Bentuk-Te + 来ます (きます)",
      explanation: "Menyatakan pergi ke suatu tempat untuk menuntaskan suatu keperluan, lalu akan segera kembali ke titik semula (Contoh: pergi ambil dokumen sebentar, beli kopi sebentar, pergi ke toilet sebentar).",
      examples: [
        {
          japanese: "ちょっと 友達に 電話を かけて 来ます。",
          romaji: "Chotto tomodachi ni denwa o kakete kimasu.",
          indonesian: "Saya pergi menelepon teman sebentar (lalu kembali)."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Salam Klasik 'Itte Kimasu' & 'Itterasshai'",
    description: "Kata kerja dasar「行って 来ます」(pergi dan kembali) adalah salah satu frasa terpenting dalam kehidupan sehari-hari keluarga dan kantor di Jepang saat seseorang pamit keluar sebentar.",
    notes: [
      "Jangan bingung antara Bab 43 (KK-Masu / KS + そうです = Kelihatannya) dan Bab 47 (Kalimat Biasa + そうです = Katanya / Kabar berita)!"
    ]
  }
};
