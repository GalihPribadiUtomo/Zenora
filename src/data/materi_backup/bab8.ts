import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 8,
  title: "Kata Sifat & Keadaan",
  subTitle: "そろそろ 失礼します・形容詞の性質",
  summary: "Kata sifat い dan な, modifikasi kata benda, sanggahan negatif kata sifat, intensitas (とても / あまり), dan konjungsi pertentangan (が).",
  polaKalimat: [
    {
      id: 1,
      japanese: "桜は 綺麗です。",
      romaji: "Sakura wa kirei desu.",
      indonesian: "Bunga sakura indah."
    },
    {
      id: 2,
      japanese: "富士山は 高いです。",
      romaji: "Fujisan wa takai desu.",
      indonesian: "Gunung Fuji tinggi."
    },
    {
      id: 3,
      japanese: "桜は 綺麗な 花です。",
      romaji: "Sakura wa kireina hana desu.",
      indonesian: "Sakura adalah bunga yang indah."
    },
    {
      id: 4,
      japanese: "富士山は 高い 山です。",
      romaji: "Fujisan wa takai yama desu.",
      indonesian: "Gunung Fuji adalah gunung yang tinggi."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "大阪は にぎやかですか。",
      answer: "……はい、にぎやかです。",
      romaji: "Oosaka wa nigiyaka desu ka? ... Hai, nigiyaka desu.",
      indonesian: "Apakah Osaka kota yang ramai? ... Ya, ramai."
    },
    {
      id: 2,
      question: "琵琶湖の 水は 綺麗ですか。",
      answer: "……いいえ、あまり 綺麗じゃ ありません。",
      romaji: "Biwako no mizu wa kirei desu ka? ... Iie, amari kirei ja arimasen.",
      indonesian: "Apakah air danau Biwa jernih? ... Tidak, tidak begitu jernih."
    },
    {
      id: 3,
      question: "東京は 今 寒いですか。",
      answer: "……はい、とても 寒いです。",
      romaji: "Toukyou wa ima samui desu ka? ... Hai, totemo samui desu.",
      indonesian: "Apakah Tokyo sekarang dingin? ... Ya, sangat dingin."
    },
    {
      id: 4,
      question: "その 辞書は いいですか。",
      answer: "……いいえ、あまり よくないです。",
      romaji: "Sono jisho wa ii desu ka? ... Iie, amari yokunai desu.",
      indonesian: "Apakah kamus itu bagus? ... Tidak, tidak begitu bagus."
    },
    {
      id: 5,
      question: "日本の 食べ物は どうですか。",
      answer: "……おいしいですが、高いです。",
      romaji: "Nihon no tabemono wa dou desu ka? ... Oishii desu ga, takai desu.",
      indonesian: "Bagaimana makanan Jepang menurut Anda? ... Enak, tetapi harganya mahal."
    },
    {
      id: 6,
      question: "寮の 生活は どうですか。",
      answer: "……とても 楽しいです。",
      romaji: "Ryou no seikatsu wa dou desu ka? ... Totemo tanoshii desu.",
      indonesian: "Bagaimana kehidupan di asrama? ... Sangat menyenangkan."
    }
  ],
  percakapan: {
    title: "そろそろ 失礼します (Sudah Waktunya Saya Pamit)",
    situasi: "Miller-san berkunjung ke rumah Yamada-san dan menikmati jamuan teh.",
    tokoh: ["山田", "ミラー"],
    dialogs: [
      {
        speaker: "山田",
        role: "Tuan Rumah",
        japanese: "ミラーさん、お茶を もう 一杯 いかがですか。",
        romaji: "Miraa-san, ocha o mou ippai ikaga desu ka.",
        indonesian: "Miller-san, bagaimana kalau secangkir teh lagi?"
      },
      {
        speaker: "ミラー",
        role: "Tamu",
        japanese: "いいえ、もう 結構です。",
        romaji: "Iie, mou kekkou desu.",
        indonesian: "Tidak, terima kasih, sudah cukup."
      },
      {
        speaker: "ミラー",
        role: "Tamu",
        japanese: "あ、もう 8時ですね。そろそろ 失礼します。",
        romaji: "A, mou hachi-ji desu ne. Sorosoro shitsurei shimasu.",
        indonesian: "Ah, sudah jam 8 ya. Sudah waktunya saya mohon pamit."
      },
      {
        speaker: "山田",
        role: "Tuan Rumah",
        japanese: "そうですか。今日は どうも ありがとうございました。",
        romaji: "Sou desu ka. Kyou wa doumo arigatou gozaimashita.",
        indonesian: "Begitu ya. Terima kasih banyak atas kunjungannya hari ini."
      },
      {
        speaker: "ミラー",
        role: "Tamu",
        japanese: "いいえ、こちらこそ。とても 楽しかったです。では、失礼します。",
        romaji: "Iie, kochira koso. Totemo tanoshikatta desu. Dewa, shitsurei shimasu.",
        indonesian: "Sama-sama. Saya merasa sangat senang. Kalau begitu, saya pamit."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Dua Jenis Kata Sifat: な-keiyoushi & い-keiyoushi",
      polaFormat: "Kata Sifat な vs Kata Sifat い",
      explanation: "Bahasa Jepang membedakan kata sifat menjadi 2 kelompok besar: Golongan な (seperti: 綺麗, 親切, 有名, 静か, 便利) dan Golongan い yang selalu berakhiran bunyi vokal 'i' (seperti: 高い, 寒い, おいしい, 楽しい).",
      examples: [
        {
          japanese: "この 町は 静かです。",
          romaji: "Kono machi wa shizuka desu.",
          indonesian: "Kota ini tenang."
        },
        {
          japanese: "この お茶は 熱いです。",
          romaji: "Kono ocha wa atsui desu.",
          indonesian: "Teh ini panas."
        }
      ]
    },
    {
      point: 2,
      title: "Bentuk Penyangkalan Negatif Kata Sifat",
      polaFormat: "な-keiyoushi: 〜じゃ ありません / い-keiyoushi: 〜くないです",
      explanation: "Kata sifat な disangkal dengan menambahkan「じゃ ありません」. Sedangkan kata sifat い akhiran「い」diubah menjadi「くないです」(khusus いい berubah menjadi よくないです).",
      examples: [
        {
          japanese: "暇じゃ ありません。",
          romaji: "Hima ja arimasen.",
          indonesian: "Tidak senggang (sibuk)."
        },
        {
          japanese: "寒くないです。",
          romaji: "Samukunai desu.",
          indonesian: "Tidak dingin."
        }
      ]
    },
    {
      point: 3,
      title: "Menerangkan Kata Benda (Modifikasi Noun)",
      polaFormat: "Kata Sifat な + な + Kata Benda / Kata Sifat い + Kata Benda",
      explanation: "Saat berada tepat di depan kata benda, kata sifat golongan な WAJIB menyisipkan akhiran「な」(contoh: 綺麗な花), sedangkan kata sifat い langsung menempel pada kata benda (contoh: 高い山).",
      examples: [
        {
          japanese: "親切な 人です。",
          romaji: "Shinsetsu na hito desu.",
          indonesian: "Orang yang ramah."
        },
        {
          japanese: "冷たい 水を 飲みます。",
          romaji: "Tsumetai mizu o nomimasu.",
          indonesian: "Minum air dingin."
        }
      ]
    },
    {
      point: 4,
      title: "Intensitas: とても (Sangat) & あまり (Tidak Begitu)",
      polaFormat: "とても + Bentuk Positif / あまり + Bentuk Negatif",
      explanation: "とても memperkuat arti positif (sangat bagus, sangat enak). Sebaliknya, あまり WAJIB berpasangan dengan bentuk penyangkalan negatif (tidak begitu dingin, tidak begitu enak).",
      examples: [
        {
          japanese: "とても おいしいです。",
          romaji: "Totemo oishii desu.",
          indonesian: "Sangat enak."
        },
        {
          japanese: "あまり 辛くないです。",
          romaji: "Amari karakunai desu.",
          indonesian: "Tidak begitu pedas."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Ungkapan Pamit yang Sopan di Jepang",
    description: "Kata「そろそろ失礼します」adalah cara sopan memberi sinyal bahwa waktu berkunjung sudah cukup tanpa membuat tuan rumah merasa terburu-buru atau terbebani.",
    notes: [
      "Ketika ditawari tambah minuman dan sudah kenyang, jawablah:「いいえ、もう結構です」(Tidak, sudah cukup terima kasih).",
      "Ucapkan「こちらこそ」(kami yang harusnya berterima kasih) sebagai respons sopan balasan."
    ]
  }
};
