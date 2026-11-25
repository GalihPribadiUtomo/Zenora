import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 21,
  title: "Opini, Kutipan & Konfirmasi",
  subTitle: "わたしも そう 思います・意見と引用",
  summary: "Menyatakan pendapat pribadi (Bentuk Biasa + と 思います), mengutip ucapan orang lain (〜と 言いました), serta meminta persetujuan/konfirmasi (〜でしょう？).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは あした 雨が 降ると 思います。",
      romaji: "Watashi wa ashita ame ga furu to omoimasu.",
      indonesian: "Saya rasa besok akan turun hujan."
    },
    {
      id: 2,
      japanese: "わたしは 日本は 物価が 高いと 思います。",
      romaji: "Watashi wa Nihon wa bukka ga takai to omoimasu.",
      indonesian: "Menurut pendapat saya, di Jepang harga barangnya mahal."
    },
    {
      id: 3,
      japanese: "ミラーさんは 来週 京都へ 行くと 言いました。",
      romaji: "Miraa-san wa raishuu Kyouto e iku to iimashita.",
      indonesian: "Miller-san berkata bahwa minggu depan akan pergi ke Kyoto."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "サントスさんは もう 帰ったと 思いますか。",
      answer: "……ええ、もう 帰ったと 思います。／いいえ、まだ 帰っていないと 思います。",
      romaji: "Santosu-san wa mou kaetta to omoimasu ka? ... Ee, mou kaetta to omoimasu.",
      indonesian: "Menurut Anda apakah Santos-san sudah pulang? ... Ya, saya rasa sudah pulang. / Tidak, sepertinya belum."
    },
    {
      id: 2,
      question: "日本の 交通は どう 思いますか。",
      answer: "……とても 便利だと 思います。",
      romaji: "Nihon no koutsuu wa dou omoimasu ka? ... Totemo benri da to omoimasu.",
      indonesian: "Bagaimana pendapat Anda tentang transportasi Jepang? ... Saya rasa sangat praktis."
    },
    {
      id: 3,
      question: "寝る まえに、何と言いますか。",
      answer: "……「おやすみなさい」と 言います。",
      romaji: "Neru mae ni, nan to iimasu ka? ... 'Oyasuminasai' to iimasu.",
      indonesian: "Sebelum tidur, mengucapkan apa? ... Mengucapkan 'Oyasuminasai' (Selamat tidur)."
    },
    {
      id: 4,
      question: "北海道は 寒いでしょう？",
      answer: "……ええ、東京より ずっと 寒いです。",
      romaji: "Hokkaidou wa samui deshou? ... Ee, Toukyou yori zutto samui desu.",
      indonesian: "Hokkaido dingin kan? ... Ya, jauh lebih dingin daripada Tokyo."
    }
  ],
  percakapan: {
    title: "わたしも そう 思います (Saya Juga Berpikir Begitu)",
    situasi: "Miller-san dan Kimura-san berdiskusi tentang rencana kebijakan hari libur dan jam kerja di perusahaan mereka.",
    tokoh: ["木村", "ミラー"],
    dialogs: [
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "ミラーさん、きのうの サッカーの 試合、見ましたか。",
        romaji: "Miraa-san, kinou no sakkaa no shiai, mimashita ka.",
        indonesian: "Miller-san, apakah kemarin menonton pertandingan sepak bola?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、見ましたよ。とても 面白かったですね。",
        romaji: "Ee, mimashita yo. Totemo omoshirokatta desu ne.",
        indonesian: "Ya, saya nonton dong. Sangat seru ya."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "日本は とても 強く なったでしょう？",
        romaji: "Nihon wa totemo tsuyoku natta deshou?",
        indonesian: "Tim Jepang sudah menjadi jauh lebih kuat kan?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、わたしも そう 思います。次の ワールドカップも きっと 勝つと 思います。",
        romaji: "Ee, watashi mo sou omoimasu. Tsugi no Waarudo Kappu mo kitto katsu to omoimasu.",
        indonesian: "Ya, saya juga berpikir begitu. Menurut saya di Piala Dunia berikutnya pasti akan menang lagi."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "あ、もう 1時ですね。会議が 始まりますよ。",
        romaji: "A, mou ichiji desu ne. Kaigi ga hajimarimasu yo.",
        indonesian: "Ah, sudah jam 1 ya. Rapatnya sebentar lagi mulai lho."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Pendapat / Dugaan: Bentuk Biasa + と 思います",
      polaFormat: "[Kalimat Bentuk Biasa (普通形)] + と 思います",
      explanation: "Digunakan untuk menyatakan opini, perkiraan, atau keyakinan pembicara. Untuk menyangkal suatu pendapat, bentuk negatifnya biasanya berada di dalam anak kalimat bentuk biasa (Contoh: 行かないと 思います = saya rasa tidak akan pergi, lebih alami daripada 行くと 思いません).",
      examples: [
        {
          japanese: "彼は 来ると 思います。",
          romaji: "Kare wa kuru to omoimasu.",
          indonesian: "Saya rasa dia akan datang."
        },
        {
          japanese: "会議は まだ 終わらないと 思います。",
          romaji: "Kaigi wa mada owaranai to omoimasu.",
          indonesian: "Menurut saya rapatnya belum akan selesai."
        }
      ]
    },
    {
      point: 2,
      title: "Menanyakan Pendapat: 〜について どう 思いますか",
      polaFormat: "Topik + について どう 思いますか",
      explanation: "Menanyakan opini lawan bicara mengenai topik, isu, atau peristiwa tertentu.",
      examples: [
        {
          japanese: "新しい 空港に ついて どう 思いますか。",
          romaji: "Atarashii kuukou ni tsuite dou omoimasu ka.",
          indonesian: "Bagaimana pendapat Anda tentang bandara baru itu?"
        }
      ]
    },
    {
      point: 3,
      title: "Kutipan Langsung & Tak Langsung: 〜と 言いました",
      polaFormat: "Orang + は + [「Kutipan」/ Bentuk Biasa] + と 言いました",
      explanation: "Digunakan untuk menyampaikan ulang apa yang diucapkan orang lain. Kutipan langsung diapit tanda petik「」, sedangkan kutipan tidak langsung menggunakan Bentuk Biasa.",
      examples: [
        {
          japanese: "先生は「あした 試験を します」と 言いました。",
          romaji: "Sensei wa 'ashita shiken o shimasu' to iimashita.",
          indonesian: "Guru berkata, 'Besok akan mengadakan ujian'."
        }
      ]
    },
    {
      point: 4,
      title: "Meminta Konfirmasi / Persetujuan: Bentuk Biasa + でしょう？",
      polaFormat: "[KK/KS-い/KS-な/KB Bentuk Biasa (tanpa だ)] + でしょう？",
      explanation: "Digunakan ketika pembicara memperkirakan lawan bicara memiliki informasi yang sama dan ingin mencari persetujuan ('...kan? / Bukankah begitu?'). Ucapkan dengan intonasi naik.",
      examples: [
        {
          japanese: "あした 天気に なるでしょう？",
          romaji: "Ashita tenki ni naru deshou?",
          indonesian: "Besok cuacanya akan cerah kan?"
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menyetujui Pendapat (わたしも そう 思います)",
    description: "Saat merespons opini rekan kerja atau teman di Jepang, mengatakan「わたしも そう 思います」(saya juga berpikiran sama) sangat menghargai pembicara, sementara jika tidak setuju sebaiknya didahului dengan penekanan lembut.",
    notes: [
      "Perhatian khusus: Untuk Kata Benda dan Kata Sifat な di depan「と 思います」, WAJIB menyisipkan「だ」(Contoh: 便利だと 思います).",
      "Sebaliknya, di depan「でしょう？」, huruf「だ」TIDAK BOLEH dipakai (Contoh: 便利でしょう？)."
    ]
  }
};
