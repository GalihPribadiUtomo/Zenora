import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 12,
  title: "Lampau Kata Sifat & Perbandingan",
  subTitle: "お祭りは どうでしたか・過去と比較",
  summary: "Konjugasi bentuk lampau untuk Kata Benda, Kata Sifat な (〜でした), Kata Sifat い (〜かったです), perbandingan (〜より〜), memilih dua hal (どちらが), dan superlatif (いちばん).",
  polaKalimat: [
    {
      id: 1,
      japanese: "きのうは 雨でした。",
      romaji: "Kinou wa ame deshita.",
      indonesian: "Kemarin hujan."
    },
    {
      id: 2,
      japanese: "きのうは 寒かったです。",
      romaji: "Kinou wa samukatta desu.",
      indonesian: "Kemarin dingin."
    },
    {
      id: 3,
      japanese: "北海道は 九州より 大きいです。",
      romaji: "Hokkaidou wa Kyuushuu yori ookii desu.",
      indonesian: "Pulau Hokkaido lebih besar daripada Pulau Kyushu."
    },
    {
      id: 4,
      japanese: "わたしは 1年で 夏が いちばん 好きです。",
      romaji: "Watashi wa ichinen de natsu ga ichiban suki desu.",
      indonesian: "Dalam satu tahun saya paling menyukai musim panas."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "京都は どうでしたか。",
      answer: "……とても 綺麗でした。でも、人が 多かったです。",
      romaji: "Kyouto wa dou deshita ka? ... Totemo kirei deshita. Demo, hito ga ookatta desu.",
      indonesian: "Bagaimana Kyoto kemarin? ... Sangat indah. Tetapi orang-orangnya sangat ramai."
    },
    {
      id: 2,
      question: "試験は 難しかったですか。",
      answer: "……いいえ、あまり 難しくなかったです。",
      romaji: "Shiken wa muzukashikatta desu ka? ... Iie, amari muzukashikunakatta desu.",
      indonesian: "Apakah ujiannya kemarin sulit? ... Tidak, tidak begitu sulit."
    },
    {
      id: 3,
      question: "東京と 大阪と どちらが にぎやかですか。",
      answer: "……東京の方が にぎやかです。",
      romaji: "Toukyou to Oosaka to dochira ga nigiyaka desu ka? ... Toukyou no hou ga nigiyaka desu.",
      indonesian: "Antara Tokyo dan Osaka, manakah yang lebih ramai? ... Tokyo lebih ramai."
    },
    {
      id: 4,
      question: "家族で だれが いちばん 背が 高いですか。",
      answer: "……弟が いちばん 高いです。",
      romaji: "Kazoku de dare ga ichiban se ga takai desu ka? ... Otouto ga ichiban takai desu.",
      indonesian: "Di antara keluarga, siapakah yang paling tinggi? ... Adik laki-laki yang paling tinggi."
    },
    {
      id: 5,
      question: "日本料理で 何が いちばん おいしいですか。",
      answer: "……てんぷらが いちばん おいしいです。",
      romaji: "Nihon ryouri de nani ga ichiban oishii desu ka? ... Tenpura ga ichiban oishii desu.",
      indonesian: "Di antara masakan Jepang, apa yang paling enak? ... Tempura yang paling enak."
    }
  ],
  percakapan: {
    title: "お祭りは どうでしたか (Bagaimana Festivalnya?)",
    situasi: "Miller-san kembali dari Kyoto setelah menyaksikan Festival Gion (Gion Matsuri) dan menceritakan kesannya kepada Sato-san.",
    tokoh: ["佐藤", "ミラー"],
    dialogs: [
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ただいま。",
        romaji: "Tadaima.",
        indonesian: "Saya kembali (baru datang)."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "お帰りなさい。先週の 京都は どうでしたか。",
        romaji: "Okaerinasai. Senshuu no Kyouto wa dou deshita ka.",
        indonesian: "Selamat datang kembali. Bagaimana perjalanan ke Kyoto minggu lalu?"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "天気は とても よかったですが、暑かったです。そして、祇園祭は 人が 多かったです。",
        romaji: "Tenki wa totemo yokatta desu ga, atsukatta desu. Soshite, Gion matsuri wa hito ga ookatta desu.",
        indonesian: "Cuacanya sangat bagus, tetapi sangat panas. Lalu, Festival Gion sangat ramai orang."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "そうですか。お祭りは 面白かったですか。",
        romaji: "Sou desu ka. Omatsuri wa omoshirokatta desu ka.",
        indonesian: "Begitu ya. Apakah festivalnya menarik?"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ええ、とても 楽しかったです。日本のお祭りで いちばん 素晴らしいと思います。",
        romaji: "Ee, totemo tanoshikatta desu. Nihon no omatsuri de ichiban subarashii to omoimasu.",
        indonesian: "Ya, sangat menyenangkan. Menurut saya itu yang paling mengagumkan di antara festival Jepang."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Bentuk Lampau Kata Benda & Kata Sifat な",
      polaFormat: "Positif Lampau: 〜でした / Negatif Lampau: 〜じゃ ありませんでした",
      explanation: "Untuk menyatakan kondisi lampau pada Kata Benda dan Kata Sifat golongan な, akhiran「です」diganti menjadi「でした」, sedangkan「じゃ ありません」menjadi「じゃ ありませんでした」.",
      examples: [
        {
          japanese: "先週は 暇でした。",
          romaji: "Senshuu wa hima deshita.",
          indonesian: "Minggu lalu waktu saya senggang."
        },
        {
          japanese: "昨日は 静かじゃ ありませんでした。",
          romaji: "Kinou wa shizuka ja arimasen deshita.",
          indonesian: "Kemarin tidak tenang."
        }
      ]
    },
    {
      point: 2,
      title: "Bentuk Lampau Kata Sifat い",
      polaFormat: "Positif Lampau: 〜かったです / Negatif Lampau: 〜くなかったです",
      explanation: "Pada Kata Sifat い, huruf akhir「い」dihilangkan dan diganti menjadi「かったです」untuk positif lampau, serta「くなかったです」untuk negatif lampau. Pengecualian「いい」berubah menjadi「よかった」dan「よくなかった」.",
      examples: [
        {
          japanese: "料理は おいしかったです。",
          romaji: "Ryouri wa oishikatta desu.",
          indonesian: "Masakannya enak sekali (tadi)."
        },
        {
          japanese: "映画は あまり 面白くなかったです。",
          romaji: "Eiga wa amari omoshirokunakatta desu.",
          indonesian: "Filmnya tadi tidak terlalu menarik."
        }
      ]
    },
    {
      point: 3,
      title: "Membandingkan Dua Hal: 〜より & どちらが",
      polaFormat: "A は B より KS です / A と B と どちらが KS ですか ➔ 〜の方が KS です",
      explanation: "Partikel より berarti 'daripada'. Saat meminta pendapat memilih di antara dua hal, gunakan kata tanya「どちらが」(mana yang lebih), lalu jawablah dengan「(Pilihan) の方が」.",
      examples: [
        {
          japanese: "電車は バスより 速いです。",
          romaji: "Densha wa basu yori hayai desu.",
          indonesian: "Kereta lebih cepat daripada bus."
        },
        {
          japanese: "コーヒーと 紅茶と どちらが 好きですか。……コーヒーの方が 好きです。",
          romaji: "Koohii to koucha to dochira ga suki desu ka? ... Koohii no hou ga suki desu.",
          indonesian: "Antara kopi dan teh, mana yang Anda suka? ... Saya lebih suka kopi."
        }
      ]
    },
    {
      point: 4,
      title: "Tingkat Paling (Superlatif): 〜で 〜が いちばん",
      polaFormat: "Lingkup/Kategori + で + Tanya (何/だれ/どこ/いつ) + が いちばん KS ですか",
      explanation: "Menanyakan hal yang paling unggul atau paling disukai di dalam suatu kelompok atau kategori tertentu (misalnya dalam olahraga, dalam setahun, dalam keluarga).",
      examples: [
        {
          japanese: "果物で りんごが いちばん 好きです。",
          romaji: "Kudamono de ringo ga ichiban suki desu.",
          indonesian: "Di antara buah-buahan, saya paling menyukai apel."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Tiga Festival Terbesar di Jepang (三大祭り)",
    description: "Gion Matsuri (祇園祭) di Kyoto yang berlangsung selama bulan Juli adalah salah satu dari tiga festival tradisional terbesar dan termeriah di Jepang.",
    notes: [
      "Hati-hati dengan perubahan bentuk lampau kata sifat いい (bagus): bentuk lampaunya WAJIB「よかったです」(bukan いかったです).",
      "Untuk menanyakan pengalaman perjalanan yang telah berlalu gunakan「どうでしたか」(Bagaimana kemarin?)."
    ]
  }
};
