import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 37,
  title: "Kalimat Pasif (受身形) & Bahan Baku",
  subTitle: "東京タワーは 1958年に 建てられました・受身表現",
  summary: "Pembentukan kata kerja Kalimat Pasif (受身動詞), menyatakan kejadian terkena/dirugikan (迷惑の受身), peristiwa sejarah dengan pelaku tak disebut, serta bahan baku pembuatan (〜から / 〜で 作られています).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは 先生に ほめられました。",
      romaji: "Watashi wa sensei ni homeraremashita.",
      indonesian: "Saya dipuji oleh guru."
    },
    {
      id: 2,
      japanese: "わたしは 満員電車で 足を 踏まれました。",
      romaji: "Watashi wa man'in densha de ashi o fumaremashita.",
      indonesian: "Kaki saya terinjak oleh orang di kereta penuh sesak."
    },
    {
      id: 3,
      japanese: "大阪城は 16世紀に 建てられました。",
      romaji: "Oosakajou wa juuroku seiki ni tateraremashita.",
      indonesian: "Kastil Osaka dibangun pada abad ke-16."
    },
    {
      id: 4,
      japanese: "ビールは 麦から 作られます。",
      romaji: "Biiru wa mugi kara tsukuraremasu.",
      indonesian: "Bir dibuat dari bahan baku gandum."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "どう したんですか。元気が ないですね。",
      answer: "……部長に しかられたんです。",
      romaji: "Dou shitan desu ka? Genki ga nai desu ne. ... Buchou ni shikarareta ndesu.",
      indonesian: "Ada apa? Terlihat kurang bersemangat. ... Saya habis dimarahi oleh kepala bagian."
    },
    {
      id: 2,
      question: "きのう 雨に 降られませんでしたか。",
      answer: "……ええ、傘が なくて、とても 困りました。",
      romaji: "Kinou ame ni furaremasen deshita ka? ... Ee, kasa ga nakute, totemo komarimashita.",
      indonesian: "Apakah kemarin tidak kehujanan? ... Ya, saya kehujanan tanpa payung dan jadi repot."
    },
    {
      id: 3,
      question: "この 絵は だれに よって かかれましたか。",
      answer: "……ゴッホに よって かかれました。",
      romaji: "Kono e wa dare ni yotte kakaremashita ka? ... Gohho ni yotte kakaremashita.",
      indonesian: "Lukisan ini dilukis oleh siapa? ... Dilukis oleh Van Gogh."
    },
    {
      id: 4,
      question: "日本の 家は 何で 作られて いますか。",
      answer: "……昔は 木で 作られて いました。",
      romaji: "Nihon no ie wa nan de tsukurarete imasu ka? ... Mukashi wa ki de tsukurarete imashita.",
      indonesian: "Rumah Jepang terbuat dari bahan apa? ... Dulu terbuat dari kayu."
    }
  ],
  percakapan: {
    title: "大変な 目に 会いましたね (Benar-Benar Kejadian yang Menyusahkan Ya)",
    situasi: "Miller-san menceritakan pengalaman kurang mengenakkan yang dialaminya pagi tadi saat berangkat kerja di stasiun kereta yang penuh sesak.",
    tokoh: ["小川", "ミラー"],
    dialogs: [
      {
        speaker: "小川",
        role: "Rekan Kerja",
        japanese: "ミラーさん、どう したんですか。なんだか 疲れて いますね。",
        romaji: "Miraa-san, dou shitan desu ka. Nandaka tsukarete imasu ne.",
        indonesian: "Miller-san, ada apa? Sepertinya Anda tampak kelelahan ya."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "今朝 電車で 隣の 人に 足を 踏まれたんです。",
        romaji: "Kesa densha de tonari no hito ni ashi o fumareta ndesu.",
        indonesian: "Tadi pagi di dalam kereta, kaki saya terinjak oleh penumpang sebelah."
      },
      {
        speaker: "小川",
        role: "Rekan Kerja",
        japanese: "ええっ？ 痛かったでしょう。",
        romaji: "Ee? Itakatta deshou.",
        indonesian: "Hah? Pasti sakit sekali ya."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "それに、駅を 出たら 急に 雨に 降られて、スーツも ぬれて しまいました。",
        romaji: "Sore ni, eki o detara kyuu ni ame ni furarete, suutsu mo nurete shimaimashita.",
        indonesian: "Selain itu, begitu keluar stasiun mendadak saya kehujanan, jas saya pun jadi basah kuyup."
      },
      {
        speaker: "小川",
        role: "Rekan Kerja",
        japanese: "それは 大変でしたね。きょうは 早く 帰って 休んだ ほうが いいですよ。",
        romaji: "Sore wa taihen deshita ne. Kyou wa hayaku kaette yasunda hou ga ii desu yo.",
        indonesian: "Wah benar-benar sial sekali ya. Hari ini sebaiknya pulang cepat dan beristirahat saja."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Kata Kerja Kalimat Pasif (受身動詞 - Ukemidoushi)",
      polaFormat: "Gol. I (vokal 'i'➔'a'+れる), Gol. II (ます➔られる), Gol. III (される / こられる)",
      explanation: "Golongan I mengubah bunyi vokal sebelum ます menjadi kolom 'a' + れる (Contoh: ほめます➔ほめられる(Gol II), しかります➔しかられる, 踏みます➔踏まれる, 呼びます➔呼ばれる; Khusus い➔わ + れる: 買います➔買われる). Golongan II mengganti ます menjadi られる (食べます➔食べられる, 見ます➔見られる). Golongan III: します➔される, 来ます➔来られる(こられる).",
      examples: [
        {
          japanese: "友達に 招待されました。",
          romaji: "Tomodachi ni shoutai saremashita.",
          indonesian: "Diundang oleh teman."
        }
      ]
    },
    {
      point: 2,
      title: "Kalimat Pasif Kejadian Merugikan (迷惑の受身)",
      polaFormat: "Korban + は + Pelaku + に + (Objek + を) + KK Pasif",
      explanation: "Bahasa Jepang secara unik memakai kalimat pasif untuk menyatakan kejadian yang membuat pembicara merasa kesal, terganggu, atau dirugikan oleh pihak lain atau fenomena alam (Contoh: kehujanan = 雨に降られる, diinjak kakinya = 足を踏まれる, dicuri dompetnya = 財布を盗まれる, disuruh menunggu = 待たされる).",
      examples: [
        {
          japanese: "犬に 手を かまれました。",
          romaji: "Inu ni te o kamaremashita.",
          indonesian: "Tangan saya digigit oleh anjing."
        }
      ]
    },
    {
      point: 3,
      title: "Penemuan/Karya Bersejarah: 〜に よって (Oleh Sang Pencipta/Penemu)",
      polaFormat: "Karya/Gedung + は + Tokoh/Penemu + に よって + KK Pasif",
      explanation: "Ketika membicarakan suatu penemuan ilmiah, buku terkenal, atau bangunan bersejarah, pelakunya ditandai dengan「〜によって」(oleh), bukan sekadar「に」.",
      examples: [
        {
          japanese: "電話は ベルに よって 発明されました。",
          romaji: "Denwa wa Beru ni yotte hatsumei saremashita.",
          indonesian: "Telepon diciptakan/ditemukan oleh Alexander Graham Bell."
        }
      ]
    },
    {
      point: 4,
      title: "Bahan Pembuatan Benda: 〜で 作られています vs 〜から 作られています",
      polaFormat: "Bentuk fisik tetap ➔ で 作られています | Bahan berubah kimiawi ➔ から 作られています",
      explanation: "Gunakan partikel「で」jika wujud bahan bakunya masih tampak langsung pada produk akhir (meja dibuat dari kayu: 木で作られています). Gunakan「から」jika bahan mentah telah mengalami proses fermentasi atau perubahan bentuk kimiawi (keju dari susu, sake dari beras, kertas dari kayu).",
      examples: [
        {
          japanese: "日本酒は 米から 作られます。",
          romaji: "Nihonshu wa kome kara tsukuraremasu.",
          indonesian: "Sake Jepang dibuat dari bahan baku beras."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Memahami Nuansa Empati Saat Kehujanan",
    description: "Ungkapan「雨に降られる」(terkena hujan) dalam bentuk pasif tidak berarti sekadar fakta bahwa 'kemarin hujan turun', melainkan mengisyaratkan perasaan tidak nyaman/susah yang dirasakan pembicara karena basah kuyup.",
    notes: [
      "Seluruh kata kerja pasif termasuk ke dalam kata kerja Golongan II (aturan konjugasi selanjutnya mengikuti pola Ru-verbs)."
    ]
  }
};
