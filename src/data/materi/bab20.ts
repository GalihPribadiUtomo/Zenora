import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 20,
  title: "Ragam Bahasa Biasa / Kasual (普通形)",
  subTitle: "夏休みは どうするの・普通体",
  summary: "Perbedaan Bentuk Sopan (丁寧形 - ます/です) dan Bentuk Biasa/Kasual (普通形) untuk percakapan antar teman akrab, keluarga, dan struktur dasar anak kalimat.",
  polaKalimat: [
    {
      id: 1,
      japanese: "サントスさんは パーティーに 来なかった。",
      romaji: "Santosu-san wa paatii ni konakatta.",
      indonesian: "Santos-san tidak datang ke pesta. (ragam kasual)"
    },
    {
      id: 2,
      japanese: "東京は 人が 多い。",
      romaji: "Toukyou wa hito ga ooi.",
      indonesian: "Tokyo orangnya banyak. (ragam kasual)"
    },
    {
      id: 3,
      japanese: "沖縄の 海は 綺麗だった。",
      romaji: "Okinawa no umi wa kirei datta.",
      indonesian: "Laut Okinawa indah. (ragam kasual lampau)"
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "あした 映画を 見に 行く？",
      answer: "……うん、行く。／ううん、行かない。",
      romaji: "Ashita eiga o mi ni iku? ... Un, iku. / Uun, ikanai.",
      indonesian: "Besok pergi nonton film? ... Ya, pergi. / Enggak, nggak pergi."
    },
    {
      id: 2,
      question: "東京の 電車は 便利？",
      answer: "……うん、とても 便利だよ。",
      romaji: "Toukyou no densha wa benri? ... Un, totemo benri da yo.",
      indonesian: "Kereta di Tokyo praktis? ... Iya, sangat praktis lho."
    },
    {
      id: 3,
      question: "きのうの テストは どうだった？",
      answer: "……難しかったよ。",
      romaji: "Kinou no tesuto wa dou datta? ... Muzukashikatta yo.",
      indonesian: "Tes kemarin gimana? ... Susah lho!"
    },
    {
      id: 4,
      question: "ノート、貸して くれる？",
      answer: "……いいよ。はい、これ。",
      romaji: "Nooto, kashite kureru? ... Ii yo. Hai, kore.",
      indonesian: "Pinjam buku catatan boleh? ... Boleh kok. Nih, ini."
    }
  ],
  percakapan: {
    title: "夏休みは どうするの (Mau Apa di Liburan Musim Panas?)",
    situasi: "Dua mahasiswa akrab (Kobayashi dan Thawaphon) mengobrol santai mengenai rencana liburan musim panas.",
    tokoh: ["小林", "タワポン"],
    dialogs: [
      {
        speaker: "小林",
        role: "Teman Kuliah",
        japanese: "タワポンくん、夏休みは 国へ 帰るの？",
        romaji: "Tawapon-kun, natsuyasumi wa kuni e kaeru no?",
        indonesian: "Thawaphon, liburan musim panas nanti mau pulang ke negaramu?"
      },
      {
        speaker: "タワポン",
        role: "Mahasiswa",
        japanese: "ううん、帰らない。今年の 夏は 富士山に 登りたいんだ。",
        romaji: "Uun, kaeranai. Kotoshi no natsu wa Fujisan ni noboritai nda.",
        indonesian: "Enggak pulang. Musim panas tahun ini aku pengen mendaki Gunung Fuji."
      },
      {
        speaker: "小林",
        role: "Teman Kuliah",
        japanese: "へえ、いいね。もう 登ったことが ある？",
        romaji: "Hee, ii ne. Mou nobotta koto ga aru?",
        indonesian: "Wah, seru tuh. Memangnya sudah pernah mendaki sebelumnya?"
      },
      {
        speaker: "タワポン",
        role: "Mahasiswa",
        japanese: "ううん、ない。小林くんは 登ったことが ある？",
        romaji: "Uun, nai. Kobayashi-kun wa nobotta koto ga aru?",
        indonesian: "Belum pernah. Kalau kamu sudah pernah mendaki?"
      },
      {
        speaker: "小林",
        role: "Teman Kuliah",
        japanese: "うん、あるよ。でも、上は すごく 寒かったから、暖かい 服が 必要だよ。",
        romaji: "Un, aru yo. Demo, ue wa sugoku samukatta kara, atatakai fuku ga hitsuyou da yo.",
        indonesian: "Iya, pernah dong. Tapi di puncaknya dingin banget lho, jadi perlu bawa baju hangat ya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Konsep Ragam Sopan (丁寧体) vs Ragam Biasa (普通体)",
      polaFormat: "します/です ⇔ する/だ (Dipakai sesama teman akrab, keluarga, adik kelas)",
      explanation: "Bahasa Jepang membedakan gaya bicara formal/sopan dengan gaya bicara santai/kasual. Bentuk biasa (普通形) terdiri dari: Bentuk Kamus (sekarang), Bentuk-Nai (negatif sekarang), Bentuk-Ta (lampau), dan Bentuk-Nakatta (negatif lampau).",
      examples: [
        {
          japanese: "食べます ➔ 食べる / 食べません ➔ 食べない",
          romaji: "Tabemasu -> Taberu / Tabemasen -> Tabenai",
          indonesian: "Makan / Tidak makan (Kasual)"
        },
        {
          japanese: "食べました ➔ 食べた / 食べませんでした ➔ 食べなかった",
          romaji: "Tabemashita -> Tabeta / Tabemasen deshita -> Tabenakatta",
          indonesian: "Sudah makan / Tidak makan lampau (Kasual)"
        }
      ]
    },
    {
      point: 2,
      title: "Bentuk Biasa pada Kata Sifat & Kata Benda",
      polaFormat: "KS-い (cukup buang です) / KS-な & KB (です ➔ だ)",
      explanation: "Untuk Kata Sifat い, cukup menghilangkan「です」di belakangnya (Contoh: 高いです ➔ 高い, 寒かったです ➔ 寒かった). Sedangkan pada Kata Sifat な dan Kata Benda,「です」diganti「だ」,「じゃありません」➔「じゃない」,「でした」➔「だった」.",
      examples: [
        {
          japanese: "いい 天気だ / 暇じゃなかった",
          romaji: "Ii tenki da / Hima ja nakatta",
          indonesian: "Cuaca bagus / Tadi tidak senggang"
        }
      ]
    },
    {
      point: 3,
      title: "Aturan Percakapan Kasual (Penghilangan Partikel & か)",
      polaFormat: "か diganti intonasi naik (？), はい➔うん, いいえ➔ううん",
      explanation: "Dalam ngobrol santai, kata tanya「か」tidak diucapkan melainkan digantikan dengan nada intonasi naik di akhir kalimat. Beberapa partikel seperti は, を, が juga sering dihilangkan jika konteksnya sudah jelas.",
      examples: [
        {
          japanese: "ご飯 食べる？……うん、食べる。",
          romaji: "Gohan taberu? ... Un, taberu.",
          indonesian: "Mau makan nasi? ... Iya, mau makan."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Kapan Boleh Menggunakan Bentuk Biasa (タメ口)?",
    description: "Menggunakan bentuk biasa kepada atasan, guru, atau orang yang baru dikenal dianggap sangat tidak sopan. Bentuk ini hanya dipakai sesama teman dekat, anggota keluarga, dan anak-anak, serta merupakan syarat mutlak pembentuk pola tata bahasa tingkat lanjut (Bab 21–50).",
    notes: [
      "Selalu gunakan bentuk Sopan (丁寧形 - ます/です) saat bekerja di perusahaan Jepang.",
      "Dalam kalimat tanya kasual dengan Kata Sifat な atau Kata Benda, akhiran「だ」sering dilepaskan:「明日 暇？」(Besok senggang?)."
    ]
  }
};
