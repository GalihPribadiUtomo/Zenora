import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 44,
  title: "Terlalu (〜すぎる), Mudah/Susah (〜やすい/にくい) & Menjadikan",
  subTitle: "この ズボンは 少し 長すぎます・程度と変化",
  summary: "Menyatakan batas berlebihan (〜すぎます), kemudahan atau kesulitan sifat suatu objek (〜やすい / 〜にくい), serta tindakan mengubah sifat keadaan secara sadar (〜く / 〜に します).",
  polaKalimat: [
    {
      id: 1,
      japanese: "きのう お酒を 飲みすぎました。",
      romaji: "Kinou osake o nomisugimashita.",
      indonesian: "Kemarin saya minum alkohol terlalu banyak (berlebihan)."
    },
    {
      id: 2,
      japanese: "この パソコンは とても 使いやすいです。",
      romaji: "Kono pasokon wa totemo tsukaiyasui desu.",
      indonesian: "Komputer ini sangat mudah digunakan."
    },
    {
      id: 3,
      japanese: "その 漢字は 画数が 多すぎて、覚えにくいです。",
      romaji: "Sono kanji wa kakusuu ga oosugite, oboenikui desu.",
      indonesian: "Kanji itu coretannya terlalu banyak sehingga sulit dihafalkan."
    },
    {
      id: 4,
      japanese: "テレビの 音を 小さく して ください。",
      romaji: "Terebi no oto o chiisaku shite kudasai.",
      indonesian: "Tolong kecilkan volume suara televisinya (jadikan kecil)."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "どう したんですか。おなかが 痛いんですか。",
      answer: "……ええ、昼ご飯を 食べすぎたんです。",
      romaji: "Dou shitan desu ka? Onaka ga itai ndesu ka. ... Ee, hirugohan o tabesugita ndesu.",
      indonesian: "Ada apa? Apakah sakit perut? ... Ya, saya makan siang terlalu kekenyangan."
    },
    {
      id: 2,
      question: "どうして この 部屋を 借りないんですか。",
      answer: "……家賃が 高すぎるからです。",
      romaji: "Doushite kono heya o karinai ndesu ka? ... Yachin ga takasugiru kara desu.",
      indonesian: "Kenapa tidak menyewa kamar ini? ... Karena harga sewanya terlalu mahal."
    },
    {
      id: 3,
      question: "日本の 電車は 乗りやすいですか。",
      answer: "……ええ、案内が 英語でも 書いて あるので、乗りやすいです。",
      romaji: "Nihon no densha wa noriyasui desu ka? ... Ee, annai ga eigo de mo kaite aru node, noriyasui desu.",
      indonesian: "Apakah kereta di Jepang mudah dinaiki? ... Ya, karena petunjuknya tertulis juga dalam bahasa Inggris, jadi mudah dinaiki."
    },
    {
      id: 4,
      question: "今夜の 予定は どう しますか。",
      answer: "……あした 早いので、晩ご飯は 簡単な ものに します。",
      romaji: "Konya no yotei wa dou shimasu ka? ... Ashita hayai node, bangohan wa kantan na mono ni shimasu.",
      indonesian: "Rencana malam ini bagaimana? ... Karena besok bangun pagi, makan malamnya kita pilih yang simpel saja."
    }
  ],
  percakapan: {
    title: "この ズボンは 少し 長すぎます (Celana Ini Sedikit Terlalu Panjang)",
    situasi: "Miller-san sedang mencoba celana atau menata model rambut di toko dan meminta petugas melakukan penyesuaian ukuran/potongan.",
    tokoh: ["ミラー", "店員"],
    dialogs: [
      {
        speaker: "店員",
        role: "Pelayan Toko",
        japanese: "お客様、サイズは いかがですか。",
        romaji: "Okyakusama, saizu wa ikaga desu ka.",
        indonesian: "Tuan pelanggan, bagaimana ukurannya?"
      },
      {
        speaker: "ミラー",
        role: "Pembeli",
        japanese: "うーん、色は とても 綺麗なんですが、この ズボンは 少し 長すぎますね。",
        romaji: "Uun, iro wa totemo kirei nandesu ga, kono zubon wa sukoshi nagasugimasu ne.",
        indonesian: "Hmm... warnanya bagus sekali sih, tapi celana ini sedikit terlalu panjang ya."
      },
      {
        speaker: "店員",
        role: "Pelayan Toko",
        japanese: "では、すそを 短く しましょうか。どれぐらい 切りましょうか。",
        romaji: "Dewa, suso o mijikaku shimashou ka. Doregurai kirimashou ka.",
        indonesian: "Kalau begitu, bagaimana kalau bagian bawahnya kita pendekkan? Kira-kira dipotong seberapa banyak?"
      },
      {
        speaker: "ミラー",
        role: "Pembeli",
        japanese: "そうですね。3センチぐらい 短く して ください。",
        romaji: "Sou desu ne. Sansenchi gurai mijikaku shite kudasai.",
        indonesian: "Hmm... tolong pendekkan sekitar 3 sentimeter."
      },
      {
        speaker: "店員",
        role: "Pelayan Toko",
        japanese: "かしこまりました。30分ほどで 仕上がりますので、5時に お越し ください。",
        romaji: "Kashikomarimashita. Sanjuppun hodo de shiagarimasu node, goji ni okoshi kudasai.",
        indonesian: "Baik, saya mengerti. Akan selesai dikerjakan sekitar 30 menit, jadi silakan kembali lagi pukul 5."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Berlebihan (Terlalu): 〜すぎます",
      polaFormat: "KK (hilang ます) + すぎます / KS-い (hilang い) + すぎます / KS-な + すぎます",
      explanation: "Menunjukkan suatu tingkat aksi atau keadaan yang melewati batas wajar atau bernuansa negatif ('Terlalu... / Kebanyakan...'). Kata kerja「〜すぎます」bertindak sebagai Kata Kerja Golongan II.",
      examples: [
        {
          japanese: "ゲームを やりすぎました。",
          romaji: "Geemu o yarisugimashita.",
          indonesian: "Bermain game terlalu lama / berlebihan."
        },
        {
          japanese: "この スープは 辛すぎます。",
          romaji: "Kono suupu wa karasugimasu.",
          indonesian: "Sup ini terlalu pedas."
        }
      ]
    },
    {
      point: 2,
      title: "Menyatakan Mudah / Sulit: KK Bentuk-Masu + やすい / にくい",
      polaFormat: "KK (hilang ます) + やすいです (Mudah...) / にくいです (Sulit/Susah...)",
      explanation: "Menunjukkan sifat objektif atau kelayakan suatu benda/situasi ketika dilakukan ('Mudah ditulis', 'Susah pecah', 'Mudah dimengerti', 'Susah diucapkan'). Keduanya berfungsi layaknya Kata Sifat い.",
      examples: [
        {
          japanese: "先生の 説明は とても 分かりやすいです。",
          romaji: "Sensei no setsumei wa totemo wakariyasui desu.",
          indonesian: "Penjelasan guru sangat mudah dipahami."
        },
        {
          japanese: "この 靴は 歩きにくいです。",
          romaji: "Kono kutsu wa arukinikui desu.",
          indonesian: "Sepatu ini tidak enak/susah dipakai berjalan."
        }
      ]
    },
    {
      point: 3,
      title: "Mengubah Keadaan Secara Sadar: 〜く / 〜に します",
      polaFormat: "KS-い (hilang い) + く します / KS-な・KB + に します",
      explanation: "Berbeda dengan「〜く/に なります」(berubah dengan sendirinya), pola「〜く/に します」berarti ada pelaku manusia yang sengaja mengubah sifat atau memilih sesuatu ('Membuat jadi lebih...'). Juga dipakai saat memesan menu makanan/pilihan:「コーヒーに します」(Saya pilih kopi saja).",
      examples: [
        {
          japanese: "部屋を 綺麗に しました。",
          romaji: "Heya o kirei ni shimashita.",
          indonesian: "Membersihkan kamar (membuat kamar jadi bersih)."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Layanan Alterasi Pakaian (お直し) di Toko Jepang",
    description: "Di Jepang, hampir seluruh toko pakaian dan department store menyediakan layanan gratis atau berbiaya sangat murah untuk memotong ujung celana (裾上げ - susoage) sesuai tinggi badan pembeli.",
    notes: [
      "Ketika memesan di restoran, pola「わたしは 天ぷらに します」adalah cara paling alami mengatakan 'Saya pesan tempura'."
    ]
  }
};
