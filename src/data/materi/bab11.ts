import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 11,
  title: "Kuantitas, Satuan & Durasi",
  subTitle: "これ、お願いします・助数詞と期間",
  summary: "Kata bantu bilangan umum (ひとつ〜とお), satuan spesifik (人, 台, 枚), frekuensi per rentang waktu (1週間に 2回), serta durasi waktu (どのくらい かかりますか).",
  polaKalimat: [
    {
      id: 1,
      japanese: "会議室に テーブルが 7つ あります。",
      romaji: "Kaigishitsu ni teeburu ga nanatsu arimasu.",
      indonesian: "Di ruang rapat ada 7 buah meja."
    },
    {
      id: 2,
      japanese: "わたしは 日本に 1年 います。",
      romaji: "Watashi wa Nihon ni ichinen imasu.",
      indonesian: "Saya berada di Jepang selama 1 tahun."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "りんごを いくつ 買いましたか。",
      answer: "……4つ 買いました。",
      romaji: "Ringo o ikutsu kaimashita ka? ... Yottsu kaimashita.",
      indonesian: "Berapa buah apel yang Anda beli? ... Saya membeli 4 buah."
    },
    {
      id: 2,
      question: "80円の 切手を 5枚と はがきを 2枚 ください。",
      answer: "……はい、全部で 500円です。",
      romaji: "Hachijuu-en no kitte o gomai to hagaki o nimai kudasai. ... Hai, zenbu de gohyaku-en desu.",
      indonesian: "Tolong perangko 80 yen 5 lembar dan kartu pos 2 lembar. ... Baik, semuanya 500 yen."
    },
    {
      id: 3,
      question: "富士大学に 外国人の 先生が 何人 いますか。",
      answer: "……3人 います。みんな アメリカ人です。",
      romaji: "Fuji daigaku ni gaikokujin no sensei ga nannin imasu ka? ... Sannin imasu. Minna Amerika-jin desu.",
      indonesian: "Di Universitas Fuji ada berapa orang dosen asing? ... Ada 3 orang. Semuanya orang Amerika."
    },
    {
      id: 4,
      question: "兄弟は 何人ですか。",
      answer: "……4人です。姉が 2人と 兄が 1人 います。",
      romaji: "Kyoudai wa nannin desu ka? ... Yonin desu. Ane ga futari to ani ga hitori imasu.",
      indonesian: "Berapa orang saudara kandung Anda? ... 4 orang. Ada 2 kakak perempuan dan 1 kakak laki-laki."
    },
    {
      id: 5,
      question: "1週間に 何回 テニスを しますか。",
      answer: "……2回ぐらい します。",
      romaji: "Isshuukan ni nankai tenisu o shimasu ka? ... Nikai gurai shimasu.",
      indonesian: "Dalam seminggu berapa kali bermain tenis? ... Sekitar 2 kali."
    },
    {
      id: 6,
      question: "大阪から 東京まで 新幹線で どのくらい かかりますか。",
      answer: "……2時間半 かかります。",
      romaji: "Oosaka kara Toukyou made Shinkansen de donokurai kakarimasu ka? ... Nijikan-han kakarimasu.",
      indonesian: "Dari Osaka ke Tokyo naik Shinkansen butuh waktu berapa lama? ... Memakan waktu 2 jam setengah."
    }
  ],
  percakapan: {
    title: "これ、お願いします (Tolong Kirimkan Ini)",
    situasi: "Wang-san pergi ke kantor pos untuk mengirimkan paket barang ke negara asalnya.",
    tokoh: ["ワン", "郵便局員"],
    dialogs: [
      {
        speaker: "ワン",
        role: "Pengirim",
        japanese: "すみません。オーストラリアまで 荷物を 送りたいんですが、いくらですか。",
        romaji: "Sumimasen. Oosutoraria made nimotsu o okuritain desu ga, ikura desu ka.",
        indonesian: "Permisi. Saya ingin mengirim paket ke Australia, biayanya berapa ya?"
      },
      {
        speaker: "郵便局員",
        role: "Petugas Pos",
        japanese: "航空便ですか、船便ですか。",
        romaji: "Koukuubin desu ka, funabin desu ka.",
        indonesian: "Via pos udara (airmail) atau pos laut?"
      },
      {
        speaker: "ワン",
        role: "Pengirim",
        japanese: "船便は いくらですか。どのくらい かかりますか。",
        romaji: "Funabin wa ikura desu ka. Donokurai kakarimasu ka.",
        indonesian: "Pos laut berapa biayanya? Kira-kira memakan waktu berapa lama?"
      },
      {
        speaker: "郵便局員",
        role: "Petugas Pos",
        japanese: "2,200円です。1か月ぐらい かかります。",
        romaji: "Nisen nihyaku-en desu. Ikkagetsu gurai kakarimasu.",
        indonesian: "2.200 yen. Memakan waktu sekitar 1 bulan."
      },
      {
        speaker: "ワン",
        role: "Pengirim",
        japanese: "じゃ、船便で お願いします。",
        romaji: "Ja, funabin de onegai shimasu.",
        indonesian: "Kalau begitu, tolong kirimkan lewat pos laut saja."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Kata Bantu Bilangan Umum: ひとつ〜とお (1–10)",
      polaFormat: "ひとつ, ふたつ, みっつ, よっつ, いつつ, むっつ, ななつ, やっつ, ここのつ, とお",
      explanation: "Untuk menghitung benda secara umum (1 sampai 10), digunakan urutan hitungan asli Jepang ini. Kata tanyanya adalah「いくつ」(berapa buah?).",
      examples: [
        {
          japanese: "みかんを 3つ 食べました。",
          romaji: "Mikan o mittsu tabemashita.",
          indonesian: "Makan 3 buah jeruk."
        }
      ]
    },
    {
      point: 2,
      title: "Kata Bantu Bilangan Spesifik: 〜人, 〜台, 〜枚",
      polaFormat: "Orang (ひとり/ふたり/さんにん), Mesin/Kendaraan (〜台), Benda Tipis (〜枚)",
      explanation: "Perhatikan pengecualian pelafalan: 1 orang = ひとり, 2 orang = ふたり, 4 orang = よにん. Untuk mobil, komputer, kulkas gunakan「〜台 (dai)」; untuk kertas, prangko, baju gunakan「〜枚 (mai)」.",
      examples: [
        {
          japanese: "部屋に 車が 2台 あります。",
          romaji: "Heya ni kuruma ga nidai arimasu.",
          indonesian: "Ada 2 buah mobil."
        }
      ]
    },
    {
      point: 3,
      title: "Frekuensi dalam Rentang Waktu: 期間に 〜回",
      polaFormat: "Periode Waktu + に + Jumlah Kali (〜回) + Kata Kerja",
      explanation: "Menyatakan seberapa sering suatu aktivitas dilakukan dalam periode tertentu (sehari, seminggu, sebulan, setahun).",
      examples: [
        {
          japanese: "1か月に 2回 映画を 見ます。",
          romaji: "Ikkagetsu ni nikai eiga o mimasu.",
          indonesian: "Dalam 1 bulan menonton film 2 kali."
        }
      ]
    },
    {
      point: 4,
      title: "Partikel Pembatasan: 〜だけ (Hanya)",
      polaFormat: "Kata Bilangan / Kata Benda + だけ",
      explanation: "Menunjukkan batasan jumlah atau ruang lingkup yang berarti 'hanya / cuma'.",
      examples: [
        {
          japanese: "わたしは 日本語が 少しだけ わかります。",
          romaji: "Watashi wa nihongo ga sukoshi dake wakarimasu.",
          indonesian: "Saya hanya sedikit mengerti bahasa Jepang."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Layanan Kantor Pos Jepang (郵便局)",
    description: "Kantor pos Jepang terkenal sangat rapi dan tepat waktu dengan pilihan pengiriman Pos Udara (航空便), Pos Laut (船便), serta EMS internasional.",
    notes: [
      "Perangko dalam bahasa Jepang adalah 切手 (kitte) dan kartu pos adalah はがき (hagaki).",
      "Untuk menanyakan lama tempuh atau lama proses gunakan「どのくらい かかりますか」."
    ]
  }
};
