import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 45,
  title: "Dalam Kasus Khusus (〜ばあいは) & Padahal (〜のに)",
  subTitle: "一生懸命 練習したのに・条件と不満",
  summary: "Mengantisipasi skenario darurat atau situasi spesifik (〜場合は), serta mengungkapkan rasa kecewa, heran, atau hasil yang bertentangan dengan ekspektasi usaha (〜のに).",
  polaKalimat: [
    {
      id: 1,
      japanese: "火事の 場合は、エレベーターを 使わないで ください。",
      romaji: "Kaji no baai wa, erebeetaa o tsukawanaide kudasai.",
      indonesian: "Dalam kasus terjadinya kebakaran, tolong jangan gunakan lift."
    },
    {
      id: 2,
      japanese: "会社を 休む 場合は、必ず 連絡して ください。",
      romaji: "Kaisha o yasumu baai wa, kanarazu renraku shite kudasai.",
      indonesian: "Dalam hal/apabila tidak masuk kantor, wajib menghubungi terlebih dahulu."
    },
    {
      id: 3,
      japanese: "一生懸命 勉強したのに、試験に 落ちて しまいました。",
      romaji: "Isshoukenmei benkyou shita noni, shiken ni ochite shimaimashita.",
      indonesian: "Padahal sudah belajar mati-matian, tetap saja tidak lulus ujian."
    },
    {
      id: 4,
      japanese: "約束したのに、彼は 来ませんでした。",
      romaji: "Yakusoku shita noni, kare wa kimasen deshita.",
      indonesian: "Padahal sudah berjanji, dia malah tidak datang."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "会議に 遅れる 場合は、どう したら いいですか。",
      answer: "……課長に メールを 送って ください。",
      romaji: "Kaigi ni okureru baai wa, dou shitara ii desu ka? ... Kachou ni meeru o okutte kudasai.",
      indonesian: "Apabila terlambat menghadiri rapat, sebaiknya bagaimana? ... Tolong kirimkan email kepada kepala seksi."
    },
    {
      id: 2,
      question: "この 機械の 調子が 悪い 場合は、どう しますか。",
      answer: "……電源を 切って、担当者へ 連絡して ください。",
      romaji: "Kono kikai no choushi ga warui baai wa, dou shimasu ka? ... Dengen o kitte, tantousha e renraku shite kudasai.",
      indonesian: "Jika kondisi mesin ini bermasalah, bagaimana penanganannya? ... Matikan listriknya lalu hubungi penanggung jawab."
    },
    {
      id: 3,
      question: "佐藤さんは 元気ですか。",
      answer: "……いいえ、薬を 飲んだのに、まだ 熱が 下がりません。",
      romaji: "Satou-san wa genki desu ka? ... Iie, kusuri o nonda noni, mada netsu ga sagarimasen.",
      indonesian: "Apakah Sato-san sehat? ... Belum, padahal sudah minum obat, demamnya masih belum turun."
    },
    {
      id: 4,
      question: "この レストランは おいしいですか。",
      answer: "……値段が 高いのに、あまり おいしく ありませんでした。",
      romaji: "Kono resutoran wa oishii desu ka? ... Nedan ga takai noni, amari oishiku arimasen deshita.",
      indonesian: "Apakah restoran ini enak? ... Padahal harganya mahal, rasanya ternyata tidak begitu enak."
    }
  ],
  percakapan: {
    title: "一生懸命 練習したのに (Padahal Sudah Berlatih Keras)",
    situasi: "Miller-san menceritakan kekecewaannya setelah lomba atau pertandingan tenis perusahaan dibatalkan atau mengalami kekalahan meski sudah berlatih keras.",
    tokoh: ["山田", "ミラー"],
    dialogs: [
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "ミラーさん、あしたの テニスの 試合、楽しみに して いますね。",
        romaji: "Miraa-san, ashita no tenisu no shiai, tanoshimi ni shite imasu ne.",
        indonesian: "Miller-san, saya sangat menantikan pertandingan tenis besok lho."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ。でも、天気予報に よると、あしたは 台風が 来るそうです。",
        romaji: "Ee. Demo, tenki yohou ni yoru to, ashita wa taifuu ga kuru sou desu.",
        indonesian: "Ya. Tetapi menurut prakiraan cuaca, kabarnya besok akan datang angin topan."
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "えっ、本当ですか？ 雨が 降った 場合は、どう なるんですか。",
        romaji: "E, hontou desu ka? Ame ga futta baai wa, dou naru ndesu ka.",
        indonesian: "Hah, benarkah? Apabila turun hujan, acaranya jadi bagaimana ya?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "中止に なるそうです。先週から 毎日 一生懸命 練習したのに、本当に 残念です。",
        romaji: "Chuushi ni naru sou desu. Senshuu kara mainichi isshoukenmei renshuu shita noni, hontou ni zannen desu.",
        indonesian: "Kabarnya akan dibatalkan. Padahal sejak minggu lalu saya berlatih keras setiap hari, sungguh sangat disayangkan."
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "それは 残念ですね。でも、延期に なったら また 次が ありますから、がんばりましょう。",
        romaji: "Sore wa zannen desu ne. Demo, enki ni nattara mata tsugi ga arimasu kara, ganbarimashou.",
        indonesian: "Sayang sekali ya. Tapi kalau diundur kan masih ada kesempatan berikutnya, tetap semangat ya!"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Antisipasi Kasus Tertentu: 〜場合は",
      polaFormat: "[KK Kamus / KK-Ta / KK-Nai / KS-い / KS-な / KBの] + 場合は (ばあいは)",
      explanation: "Digunakan dalam buku panduan, peraturan perusahaan, SOP pabrik, dan instruksi darurat ('Dalam hal terjadi X, lakukan Y'). Cara menyambungnya sama persis seperti modifikasi kata benda biasa (pakai「の」setelah kata benda dan「な」setelah KS-な).",
      examples: [
        {
          japanese: "地震が 起きた 場合は、まず 机の 下に 隠れて ください。",
          romaji: "Jishin ga okita baai wa, mazu tsukue no shita ni kakurete kudasai.",
          indonesian: "Apabila terjadi gempa bumi, pertama bersembunyilah di bawah meja."
        }
      ]
    },
    {
      point: 2,
      title: "Menyatakan Kontradiksi / Ketidakpuasan: 〜のに (Padahal...)",
      polaFormat: "[KK / KS-い Bentuk Biasa] + のに / [KS-な / KB] + な + のに",
      explanation: "Berbeda dari「〜が」dan「〜ても」yang netral, partikel「〜のに」memiliki muatan emosional pembicara berupa rasa kecewa, kaget, kesal, atau heran karena hasilnya berlawanan dengan harapan ('Padahal sudah X, eh malah Y'). Di depan「のに」, KS-な dan KB wajib diberi「な」(Contoh: 日曜日なのに = Padahal hari Minggu).",
      examples: [
        {
          japanese: "きょうは 休み なのに、仕事に 行かなければ なりません。",
          romaji: "Kyou wa yasumi na noni, shigoto ni ikanakereba narimasen.",
          indonesian: "Padahal hari ini hari libur, tetap harus pergi bekerja."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Prosedur Tanggap Darurat & SOP di Pabrik Jepang",
    description: "Setiap panduan keselamatan kerja (マニュアル) di Jepang pasti penuh dengan pola「〜場合は」(jika terjadi kasus X). Membaca papan pengumuman「〜の場合は、連絡してください」adalah keterampilan wajib pekerja di Jepang.",
    notes: [
      "Perhatian: Kalimat belakang「〜のに」TIDAK BOLEH berisi perintah, ajakan, atau niat kemauan (seperti「忙しいのに、映画を見たい」Salah -> Harus menyatakan fakta kejadian yang mengecewakan)."
    ]
  }
};
