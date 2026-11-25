import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 6,
  title: "Makanan, Minuman & Aksi",
  subTitle: "いっしょに 行きませんか・食事と行為",
  summary: "Objek penderita partikel を, tempat beraksi で, ajakan sopan 〜ませんか, dan ajakan mari 〜ましょう.",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは ジュースを 飲みます。",
      romaji: "Watashi wa juusu o nomimasu.",
      indonesian: "Saya minum jus."
    },
    {
      id: 2,
      japanese: "わたしは 駅で 新聞を 買います。",
      romaji: "Watashi wa eki de shinbun o kaimasu.",
      indonesian: "Saya membeli koran di stasiun."
    },
    {
      id: 3,
      japanese: "いっしょに 京都へ 行きませんか。",
      romaji: "Issho ni Kyouto e ikimasen ka.",
      indonesian: "Maukah Anda pergi ke Kyoto bersama saya?"
    },
    {
      id: 4,
      japanese: "ちょっと 休みましょう。",
      romaji: "Chotto yasumimashou.",
      indonesian: "Mari kita istirahat sebentar."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "お酒を 飲みますか。",
      answer: "……いいえ、飲みません。",
      romaji: "Osake o nomimasu ka? ... Iie, nomimasen.",
      indonesian: "Apakah Anda minum minuman beralkohol? ... Tidak, saya tidak minum."
    },
    {
      id: 2,
      question: "毎朝 何を 食べますか。",
      answer: "……パンと 卵を 食べます。",
      romaji: "Maiasa nani o tabemasu ka? ... Pan to tamago o tabemasu.",
      indonesian: "Setiap pagi Anda makan apa? ... Makan roti dan telur."
    },
    {
      id: 3,
      question: "今朝 何を 食べましたか。",
      answer: "……何も 食べませんでした。",
      romaji: "Kesa nani o tabemashita ka? ... Nani mo tabemasen deshita.",
      indonesian: "Tadi pagi Anda makan apa? ... Tidak makan apa-apa."
    },
    {
      id: 4,
      question: "土曜日 何を しましたか。",
      answer: "……日本語を 勉強しました。それから 映画を 見ました。",
      romaji: "Doyoubi nani o shimashita ka? ... Nihongo o benkyou shimashita. Sorekara eiga o mimashita.",
      indonesian: "Hari Sabtu kemarin melakukan apa? ... Belajar bahasa Jepang, lalu menonton film."
    },
    {
      id: 5,
      question: "どこで その かばんを 買いましたか。",
      answer: "……メキシコで 買いました。",
      romaji: "Doko de sono kaban o kaimashita ka? ... Mekishiko de kaimashita.",
      indonesian: "Di mana Anda membeli tas itu? ... Membelinya di Meksiko."
    },
    {
      id: 6,
      question: "いっしょに お茶を 飲みませんか。",
      answer: "……ええ、飲みましょう。",
      romaji: "Issho ni ocha o nomimasen ka? ... Ee, nomimashou.",
      indonesian: "Maukah minum teh bersama? ... Ya, mari kita minum bersama."
    }
  ],
  percakapan: {
    title: "いっしょに 行きませんか (Maukah Pergi Bersama?)",
    situasi: "Miller-san mengajak Sato-san pergi melihat bunga sakura bersama.",
    tokoh: ["佐藤", "ミラー"],
    dialogs: [
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ミラーさん、もう 桜が 咲きましたよ。",
        romaji: "Miraa-san, mou sakura ga sakimashita yo.",
        indonesian: "Miller-san, bunga sakuranya sudah mekar lho."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "あ、そうですか。綺麗ですね。",
        romaji: "A, sou desu ka. Kirei desu ne.",
        indonesian: "Ah, begitu ya. Pasti sangat indah."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "明日 城の 公園へ 花見に 行きます。ミラーさんも いっしょに 行きませんか。",
        romaji: "Ashita shiro no kouen e hanami ni ikimasu. Miraa-san mo issho ni ikimasen ka.",
        indonesian: "Besok saya pergi hanami ke taman kastil. Maukah Miller-san pergi bersama?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "いいですね。ぜひ 行きましょう。",
        romaji: "Ii desu ne. Zehi ikimashou.",
        indonesian: "Bagus sekali. Tentu saja, mari kita pergi!"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "じゃ、10時に 駅で 会いましょう。",
        romaji: "Ja, juu-ji ni eki de aimashou.",
        indonesian: "Kalau begitu, mari bertemu jam 10 di stasiun."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "はい、分かりました。また 明日。",
        romaji: "Hai, wakarimashita. Mata ashita.",
        indonesian: "Baik, saya mengerti. Sampai jumpa besok."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Partikel を: Menandai Objek Penderita",
      polaFormat: "Kata Benda (Objek) + を + Kata Kerja Transitif",
      explanation: "Partikel を (dibaca 'o') digunakan untuk menghubungkan kata benda yang menjadi sasaran langsung suatu tindakan dengan kata kerja transitif (misalnya: makan roti, minum air, membaca buku).",
      examples: [
        {
          japanese: "ご飯を 食べます。",
          romaji: "Gohan o tabemasu.",
          indonesian: "Makan nasi."
        },
        {
          japanese: "水を 飲みます。",
          romaji: "Mizu o nomimasu.",
          indonesian: "Minum air."
        }
      ]
    },
    {
      point: 2,
      title: "Partikel で: Tempat Terjadinya Suatu Aksi",
      polaFormat: "Kata Benda (Tempat) + で + Kata Kerja",
      explanation: "Partikel で diletakkan setelah nama tempat untuk menunjukkan tempat di mana suatu kegiatan atau perbuatan aktif dilakukan.",
      examples: [
        {
          japanese: "図書館で 本を 読みます。",
          romaji: "Toshokan de hon o yomimasu.",
          indonesian: "Membaca buku di perpustakaan."
        },
        {
          japanese: "駅で 新聞を 買いました。",
          romaji: "Eki de shinbun o kaimashita.",
          indonesian: "Membeli koran di stasiun."
        }
      ]
    },
    {
      point: 3,
      title: "Ajakan Sopan: 〜ませんか",
      polaFormat: "Kata Kerja Bentuk-Masen + か",
      explanation: "Digunakan untuk mengajak lawan bicara melakukan sesuatu secara sopan dan menghargai keputusan lawan bicara (maukah Anda...?).",
      examples: [
        {
          japanese: "いっしょに 昼ご飯を 食べませんか。",
          romaji: "Issho ni hirugohan o tabemasen ka.",
          indonesian: "Maukah makan siang bersama saya?"
        }
      ]
    },
    {
      point: 4,
      title: "Ajakan Langsung & Persetujuan: 〜ましょう",
      polaFormat: "Kata Kerja Bentuk-Mashou",
      explanation: "Digunakan untuk mengajak secara langsung (mari kita...) atau menyetujui ajakan lawan bicara dengan antusias.",
      examples: [
        {
          japanese: "ちょっと 休みましょう。",
          romaji: "Chotto yasumimashou.",
          indonesian: "Mari istirahat sejenak."
        },
        {
          japanese: "ええ、行きましょう。",
          romaji: "Ee, ikimashou.",
          indonesian: "Ya, mari kita pergi."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Budaya Hanami di Musim Semi",
    description: "Hanami (花見) adalah tradisi menikmati keindahan bunga sakura sambil berkumpul dan makan bersama keluarga atau rekan kerja di bawah pepohonan sakura.",
    notes: [
      "Mengajak teman dengan「〜ませんか」terdengar jauh lebih sopan daripada memerintah.",
      "Ungkapan「じゃ、また明日」(sampai jumpa besok) umum digunakan antar rekan kerja."
    ]
  }
};
