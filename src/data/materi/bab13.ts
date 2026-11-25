import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 13,
  title: "Keinginan & Tujuan Perjalanan",
  subTitle: "別々に お願いします・願望と目的",
  summary: "Menyatakan keinginan memiliki benda (〜が ほしいです), keinginan melakukan tindakan (〜たいです), serta menyatakan tujuan bepergian (〜へ 〜に 行きます・来ます).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは 車が ほしいです。",
      romaji: "Watashi wa kuruma ga hoshii desu.",
      indonesian: "Saya menginginkan sebuah mobil."
    },
    {
      id: 2,
      japanese: "わたしは すしを 食べたいです。",
      romaji: "Watashi wa sushi o tabetai desu.",
      indonesian: "Saya ingin makan sushi."
    },
    {
      id: 3,
      japanese: "わたしは 神戸へ インド料理を 食べに 行きます。",
      romaji: "Watashi wa Koube e Indo ryouri o tabe ni ikimasu.",
      indonesian: "Saya pergi ke Kobe untuk makan masakan India."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "いま 何が いちばん ほしいですか。",
      answer: "……新しい パソコンが ほしいです。",
      romaji: "Ima nani ga ichiban hoshii desu ka? ... Atarashii pasokon ga hoshii desu.",
      indonesian: "Sekarang apa yang paling Anda inginkan? ... Saya menginginkan komputer baru."
    },
    {
      id: 2,
      question: "夏休みは どこへ 行きたいですか。",
      answer: "……沖縄へ 行きたいです。",
      romaji: "Natsuyasumi wa doko e ikitai desu ka? ... Okinawa e ikitai desu.",
      indonesian: "Liburan musim panas nanti ingin pergi ke mana? ... Saya ingin pergi ke Okinawa."
    },
    {
      id: 3,
      question: "きょうは 何も 食べたくないです。",
      answer: "……そうですか。おなかが いっぱいですか。",
      romaji: "Kyou wa nani mo tabetakunai desu. ... Sou desu ka. Onaka ga ippai desu ka.",
      indonesian: "Hari ini saya tidak ingin makan apa-apa. ... Begitu ya, apakah perut Anda penuh?"
    },
    {
      id: 4,
      question: "週末は どこへ 行きますか。",
      answer: "……京都へ 桜を 見に 行きます。",
      romaji: "Shuumatsu wa doko e ikimasu ka? ... Kyouto e sakura o mi ni ikimasu.",
      indonesian: "Akhir pekan pergi ke mana? ... Pergi ke Kyoto untuk melihat bunga sakura."
    },
    {
      id: 5,
      question: "日本へ 何の 勉強に 来ましたか。",
      answer: "……経済の 勉強に 来ました。",
      romaji: "Nihon e nan no benkyou ni kimashita ka? ... Keizai no benkyou ni kimashita.",
      indonesian: "Datang ke Jepang untuk belajar apa? ... Datang untuk belajar ekonomi."
    }
  ],
  percakapan: {
    title: "別々に お願いします (Tolong Pisahkan Pembayarannya)",
    situasi: "Pada jam makan siang, Miller-san dan Yamada-san pergi ke restoran bersama dan memesan makanan.",
    tokoh: ["山田", "ミラー", "店員"],
    dialogs: [
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "もう 12時ですね。昼ご飯を 食べに 行きませんか。",
        romaji: "Mou juuniji desu ne. Hirugohan o tabe ni ikimasen ka.",
        indonesian: "Sudah jam 12 ya. Maukah pergi untuk makan siang bersama?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、行きましょう。何が 食べたいですか。",
        romaji: "Ee, ikimashou. Nani ga tabetai desu ka.",
        indonesian: "Ya, mari pergi. Anda ingin makan apa?"
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "わたしは てんぷらを 食べたいです。ミラーさんは？",
        romaji: "Watashi wa tenpura o tabetai desu. Miraa-san wa?",
        indonesian: "Saya ingin makan tempura. Kalau Miller-san?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "わたしは 牛丼を 食べます。すみません、てんぷら定食と 牛丼を お願いします。",
        romaji: "Watashi wa gyuudon o tabemasu. Sumimasen, tenpura teishoku to gyuudon o onegai shimasu.",
        indonesian: "Saya makan gyudon saja. Permisi pelayan, pesan satu set tempura dan satu gyudon."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ごちそうさまでした。すみません、別々に お願いします。",
        romaji: "Gochisousama deshita. Sumimasen, betsubetsu ni onegai shimasu.",
        indonesian: "Terima kasih atas hidangannya. Permisi kasir, tolong bayarnya dipisah masing-masing ya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menginginkan Benda: 〜が ほしいです",
      polaFormat: "Kata Benda + が ほしいです (Negatif: 〜が ほしくないです)",
      explanation: "Digunakan oleh pembicara (orang pertama) untuk mengungkapkan keinginan terhadap suatu benda atau kepemilikan (contoh: ingin mobil, ingin waktu). Pola ini berfungsi layaknya kata sifat い.",
      examples: [
        {
          japanese: "いま いちばん 時間が ほしいです。",
          romaji: "Ima ichiban jikan ga hoshii desu.",
          indonesian: "Sekarang yang paling saya inginkan adalah waktu."
        }
      ]
    },
    {
      point: 2,
      title: "Keinginan Melakukan Aktivitas: KK Bentuk-Masu + たいです",
      polaFormat: "KK (hilangkan ます) + たいです (Negatif: 〜たくないです)",
      explanation: "Menyatakan keinginan diri sendiri untuk melakukan suatu kegiatan (ingin pergi, ingin makan, ingin belajar). Partikel objek「を」boleh dipertahankan atau diganti menjadi「が」.",
      examples: [
        {
          japanese: "日本へ 行きたいです。",
          romaji: "Nihon e ikitai desu.",
          indonesian: "Saya ingin pergi ke Jepang."
        },
        {
          japanese: "冷たい 水が 飲みたいです。",
          romaji: "Tsumetai mizu ga nomitai desu.",
          indonesian: "Saya ingin minum air dingin."
        }
      ]
    },
    {
      point: 3,
      title: "Menyatakan Tujuan Pergi / Datang / Pulang: 〜に 行きます",
      polaFormat: "Tempat + へ + [KK (tanpa ます) / KB Aktivitas] + に + 行きます・来ます・帰ります",
      explanation: "Digunakan untuk menyatakan maksud dan tujuan mengapa seseorang bergerak ke suatu tempat. Apabila memakai kata benda kegiatan (seperti 買い物 belanja, 勉強 belajar, 仕事 kerja), cukup langsung diikuti partikel に.",
      examples: [
        {
          japanese: "デパートへ 靴を 買いに 行きます。",
          romaji: "Depaato e kutsu o kai ni ikimasu.",
          indonesian: "Pergi ke department store untuk membeli sepatu."
        },
        {
          japanese: "東京へ 仕事に 行きました。",
          romaji: "Toukyou e shigoto ni ikimashita.",
          indonesian: "Pergi ke Tokyo untuk urusan pekerjaan."
        }
      ]
    },
    {
      point: 4,
      title: "Ungkapan Tak Tentu: どこか (Suatu Tempat) & 何か (Sesuatu)",
      polaFormat: "どこかへ 行きたい / 何か 食べたい",
      explanation: "Untuk menyatakan keinginan tanpa menyebut target spesifik (pergi ke suatu tempat, minum sesuatu), gunakan どこか atau 何か tanpa memerlukan partikel を atau が setelahnya.",
      examples: [
        {
          japanese: "のどが 渇きましたから、何か 飲みたいです。",
          romaji: "Nodo ga kawakimashita kara, nani ka nomitai desu.",
          indonesian: "Karena haus, saya ingin minum sesuatu."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Membayar Terpisah (別々に) di Restoran Jepang",
    description: "Di Jepang, saat makan siang bersama rekan kerja atau teman, kebiasaan membayar porsi masing-masing sangat umum dan disebut 割り勘 (warikan) atau mengatakan「別々に お願いします」di kasir.",
    notes: [
      "Setelah selesai makan selalu ucapkan「ごちそうさまでした」sebagai rasa syukur.",
      "Pola「〜たいです」tidak lazim digunakan untuk menebak keinginan orang ketiga tanpa tambahan「〜たがっています」."
    ]
  }
};
