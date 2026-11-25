import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 41,
  title: "Ragam Hormat Memberi & Menerima (授受の敬語)",
  subTitle: "荷物を 預かって いただけませんか・やりもらいの敬語",
  summary: "Ekspresi memberi, menerima, dan memohon bantuan dengan ragam bahasa sopan & hormat (いただきます, くださいます, やります), baik untuk benda maupun bantuan tindakan.",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは 社長に お土産を いただきました。",
      romaji: "Watashi wa shachou ni omiyage o itadakimashita.",
      indonesian: "Saya menerima oleh-oleh dari Bapak Direktur."
    },
    {
      id: 2,
      japanese: "課長は わたしに 本を くださいました。",
      romaji: "Kachou wa watashi ni hon o kudasaimashita.",
      indonesian: "Kepala Seksi memberikan sebuah buku kepada saya."
    },
    {
      id: 3,
      japanese: "わたしは 息子に 英語を 教えて やりました。",
      romaji: "Watashi wa musuko ni eigo o oshiete yarimashita.",
      indonesian: "Saya mengajari bahasa Inggris kepada putra saya."
    },
    {
      id: 4,
      japanese: "すみませんが、この 書類を コピーして いただけませんか。",
      romaji: "Sumimasen ga, kono shorui o kopii shite itadakemasen ka.",
      indonesian: "Maaf, bisakah tolong fotokopikan dokumen ini untuk saya?"
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "その 綺麗な カップは どこで 買いましたか。",
      answer: "……いいえ、部長の 奥さんに いただいたんです。",
      romaji: "Sono kirei na kappu wa doko de kaimashita ka? ... Iie, buchou no okusan ni itadaita ndesu.",
      indonesian: "Cangkir indah itu beli di mana? ... Bukan beli, saya menerimanya dari istri Kepala Bagian."
    },
    {
      id: 2,
      question: "きのう 先生の お宅へ 行きましたね。",
      answer: "……はい、先生が 駅まで 車で 送って くださいました。",
      romaji: "Kinou sensei no otaku e ikimashita ne. ... Hai, sensei ga eki made kuruma de okutte kudasaimashita.",
      indonesian: "Kemarin pergi ke rumah Pak Guru ya? ... Ya, Pak Guru mengantarkan saya sampai stasiun dengan mobilnya."
    },
    {
      id: 3,
      question: "毎日 花に 水を やっていますか。",
      answer: "……はい、毎朝 やっています。",
      romaji: "Mainichi hana ni mizu o yatte imasu ka? ... Hai, maiasa yatte imasu.",
      indonesian: "Apakah setiap hari menyiram bunga? ... Ya, setiap pagi saya menyiramnya."
    },
    {
      id: 4,
      question: "駅の 改札口で 写真を 撮って いただけませんか。",
      answer: "……ええ、いいですよ。",
      romaji: "Eki no kaisatsuguchi de shashin o totte itadakemasen ka? ... Ee, ii desu yo.",
      indonesian: "Maaf, bisakah tolong foto kami di gerbang tiket stasiun? ... Ya, tentu boleh."
    }
  ],
  percakapan: {
    title: "荷物を 預かって いただけませんか (Bisakah Tolong Titipkan Barang Ini?)",
    situasi: "Miller-san hendak pergi dinas/bepergian dan menitipkan barang atau meminta bantuan kepada pengelola apartemen atau resepsionis.",
    tokoh: ["ミラー", "管理人"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Penghuni",
        japanese: "管理人さん、すみません。ちょっと お願いが あるんですが。",
        romaji: "Kanrinin-san, sumimasen. Chotto onegai ga aru ndesu ga.",
        indonesian: "Pak Penjaga, permisi. Ada yang ingin saya minta tolong sebentar."
      },
      {
        speaker: "管理人",
        role: "Penjaga Apartemen",
        japanese: "はい、何ですか。",
        romaji: "Hai, nan desu ka.",
        indonesian: "Ya, ada apa ya?"
      },
      {
        speaker: "ミラー",
        role: "Penghuni",
        japanese: "きょうの 午後、友達が この 荷物を 取りに 来ます。それまで 預かって いただけませんか。",
        romaji: "Kyou no gogo, tomodachi ga kono nimotsu o tori ni kimasu. Soremade azukatte itadakemasen ka.",
        indonesian: "Siang hari ini teman saya akan datang mengambil paket ini. Sampai waktu itu tiba, bisakah Anda tolong menitipkan/menjaganya sebentar?"
      },
      {
        speaker: "管理人",
        role: "Penjaga Apartemen",
        japanese: "いいですよ。分かりました。",
        romaji: "Ii desu yo. Wakarimashita.",
        indonesian: "Boleh saja. Saya mengerti."
      },
      {
        speaker: "ミラー",
        role: "Penghuni",
        japanese: "すみません。それから、友達が 来たら 連絡して くださいますか。",
        romaji: "Sumimasen. Sorekara, tomodachi ga kitara renraku shite kudasaimasu ka.",
        indonesian: "Terima kasih banyak. Lalu jika teman saya sudah tiba nanti, maukah Anda mengabari saya?"
      },
      {
        speaker: "管理人",
        role: "Penjaga Apartemen",
        japanese: "ええ、すぐ お電話しますよ。",
        romaji: "Ee, sugu odenwa shimasu yo.",
        indonesian: "Ya, nanti segera saya telepon kok."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Peta Tingkatan Kata Kerja Memberi & Menerima",
      polaFormat: "Hormat (Atasan/Orang dihormati) ⇔ Netral (Setara) ⇔ Bawah (Anak/Hewan/Tanaman)",
      explanation: "1) MENERIMA (dari): いただきます (dari atasan) ⇔ もらいます (dari teman/setara).\n2) MEMBERI KEPADA SAYA: くださいます (dari atasan) ⇔ くれます (dari teman/setara).\n3) MEMBERI KEPADA PIHAK LAIN: あげます (ke setara/orang luar) ➔ やります (ke anak sendiri, adik, hewan peliharaan, tanaman).",
      examples: [
        {
          japanese: "部長が すてきな ペンを くださいました。",
          romaji: "Buchou ga suteki na pen o kudasaimashita.",
          indonesian: "Pak Kepala Bagian memberi saya pena yang bagus."
        },
        {
          japanese: "犬に えさを やりました。",
          romaji: "Inu ni esa o yarimashita.",
          indonesian: "Saya memberi makan anjing peliharaan."
        }
      ]
    },
    {
      point: 2,
      title: "Permohonan Bantuan Paling Sopan: 〜て いただけませんか",
      polaFormat: "Kata Kerja Bentuk-Te + いただけませんか",
      explanation: "Ini adalah bentuk paling halus dan sopan dalam meminta bantuan kepada orang yang lebih tua, atasan, dosen, atau orang yang baru dikenal ('Sudikah/Bisakah Anda berbaik hati membantu saya untuk...?'). Jauh lebih sopan daripada「〜て くれませんか」.",
      examples: [
        {
          japanese: "お名前を 教えて いただけませんか。",
          romaji: "Onamae o oshiete itadakemasen ka.",
          indonesian: "Bisakah Anda berkenan memberitahu nama Anda?"
        }
      ]
    },
    {
      point: 3,
      title: "Menerima Jasa Hormat: 〜て いただきました / 〜て くださいました",
      polaFormat: "Saya + は + Atasan + に + KK-て いただきました / Atasan + は + わたしに + KK-て くださいました",
      explanation: "Menyatakan rasa hormat sekaligus syukur atas pertolongan yang diberikan oleh atasan, guru, atau senior.",
      examples: [
        {
          japanese: "わたしは 先生に 論文を 直して いただきました。",
          romaji: "Watashi wa sensei ni ronbun o naoshite itadakimashita.",
          indonesian: "Saya dibimbing/diperbaiki makalahnya oleh Pak Guru."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Meminta Bantuan di Lingkungan Kerja Jepang",
    description: "Menguasai「〜て いただけませんか」adalah kunci komunikasi elegan di dunia kerja Jepang dan sangat sering keluar dalam soal ujian JFT-Basic A2 maupun wawancara kerja SSW.",
    notes: [
      "Perhatian: Kata kerja hormat「くださいます」memiliki bentuk -Masu khusus yaitu「くださいます」(bukan くれられます) dan bentuk perintah sopan「ください」!"
    ]
  }
};
