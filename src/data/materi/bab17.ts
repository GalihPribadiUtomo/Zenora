import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 17,
  title: "Bentuk-Nai (ない形), Larangan & Kewajiban",
  subTitle: "どう しましたか・義務と禁止",
  summary: "Aturan perubahan kata kerja ke Bentuk-Nai (bentuk negatif biasa), larangan halus (〜ないで ください), kewajiban mutlak (〜なければ なりません), dan tidak wajib (〜なくても いいです).",
  polaKalimat: [
    {
      id: 1,
      japanese: "ここで 写真を 撮らないで ください。",
      romaji: "Koko de shashin o toranaide kudasai.",
      indonesian: "Tolong jangan mengambil foto di sini."
    },
    {
      id: 2,
      japanese: "パスポートを 見せなければ なりません。",
      romaji: "Pasupooto o misenakereba narimasen.",
      indonesian: "Saya harus menunjukkan paspor."
    },
    {
      id: 3,
      japanese: "日曜日は 早く 起きなくても いいです。",
      romaji: "Nichiyoubi wa hayaku okinakute mo ii desu.",
      indonesian: "Pada hari Minggu tidak bangun pagi pun tidak apa-apa (tidak perlu)."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "あそこに 車を 止めても いいですか。",
      answer: "……いいえ、あそこに 止めないで ください。",
      romaji: "Asoko ni kuruma o tomete mo ii desu ka? ... Iie, asoko ni tomenaide kudasai.",
      indonesian: "Bolehkah memarkir mobil di sana? ... Tidak, tolong jangan parkir di sana."
    },
    {
      id: 2,
      question: "今晩 飲みに行きませんか。",
      answer: "……すみません。今晩は 残業しなければ なりません。",
      romaji: "Konban nomi ni ikimasen ka? ... Sumimasen. Konban wa zangyou shinakereba narimasen.",
      indonesian: "Maukah pergi minum malam ini? ... Maaf, malam ini saya harus kerja lembur."
    },
    {
      id: 3,
      question: "あした 会社へ 行かなければ なりませんか。",
      answer: "……いいえ、あしたは 休みですから、行かなくても いいです。",
      romaji: "Ashita kaisha e ikanakereba narimasen ka? ... Iie, ashita wa yasumi desu kara, ikanakute mo ii desu.",
      indonesian: "Apakah besok harus pergi ke perusahaan? ... Tidak, karena besok libur, tidak pergi pun tidak apa-apa."
    },
    {
      id: 4,
      question: "レポートは いつまでに 出さなければ なりませんか。",
      answer: "……金曜日までに 出して ください。",
      romaji: "Repooto wa itsu made ni dasanakereba narimasen ka? ... Kinyoubi made ni dashite kudasai.",
      indonesian: "Laporan harus dikumpulkan paling lambat kapan? ... Tolong kumpulkan paling lambat hari Jumat."
    }
  ],
  percakapan: {
    title: "どう しましたか (Anda Sakit Apa?)",
    situasi: "Matsumoto-san datang memeriksakan kesehatannya ke klinik karena demam dan sakit tenggorokan.",
    tokoh: ["医者", "松本"],
    dialogs: [
      {
        speaker: "医者",
        role: "Dokter",
        japanese: "どう しましたか。",
        romaji: "Dou shimashita ka.",
        indonesian: "Ada keluhan apa / Sakit apa?"
      },
      {
        speaker: "松本",
        role: "Pasien",
        japanese: "きのうから のどが 痛くて、熱も 少し あります。",
        romaji: "Kinou kara nodo ga itakute, netsu mo sukoshi arimasu.",
        indonesian: "Sejak kemarin tenggorokan saya sakit, dan saya juga sedikit demam."
      },
      {
        speaker: "医者",
        role: "Dokter",
        japanese: "そうですか。ちょっと 口を 開けて ください。風邪ですね。",
        romaji: "Sou desu ka. Chotto kuchi o akete kudasai. Kaze desu ne.",
        indonesian: "Begitu ya. Tolong buka mulut sebentar. Ini masuk angin / flu ya."
      },
      {
        speaker: "松本",
        role: "Pasien",
        japanese: "あのう、きょう お風呂に 入っても いいですか。",
        romaji: "Anou, kyou ofuro ni haitte mo ii desu ka.",
        indonesian: "Permisi Dok, apakah hari ini boleh berendam mandi air panas?"
      },
      {
        speaker: "医者",
        role: "Dokter",
        japanese: "いいえ、きょうは お風呂に 入らないで ください。そして、薬を 飲んで、早く 寝なければ なりません。",
        romaji: "Iie, kyou wa ofuro ni hairanaide kudasai. Soshite, kusuri o nonde, hayaku nenakereba narimasen.",
        indonesian: "Jangan, hari ini tolong jangan mandi berendam dulu. Lalu minum obat dan harus cepat tidur."
      },
      {
        speaker: "松本",
        role: "Pasien",
        japanese: "分かりました。どうも ありがとうございます。",
        romaji: "Wakarimashita. Doumo arigatou gozaimashita.",
        indonesian: "Baik, saya mengerti. Terima kasih banyak."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Kata Kerja Bentuk-Nai (ない形)",
      polaFormat: "Gol. I (vokal 'i' ➔ vokal 'a' + ない), Gol. II (hilang ます + ない), Gol. III (来ない / しない)",
      explanation: "Golongan I: vokal bunyi 'i' sebelum ます diubah menjadi kolom 'a' lalu tambah ない (Contoh: 書きます➔書かない, 飲みます➔飲まない, 待ちます➔待たない). KHUSUS akhiran「い」berubah menjadi「わ」(Contoh: 買います➔買わない, 会います➔会わない). Golongan II: hilangkan ます tambah ない (食べます➔食べない). Golongan III: します➔しない, 来ます➔来ない(こない).",
      examples: [
        {
          japanese: "吸います ➔ 吸わない / 持ちます ➔ 持たない",
          romaji: "Suimasu -> Suwanai / Mochimasu -> Motanai",
          indonesian: "Menghisap / Membawa (Golongan I)"
        },
        {
          japanese: "食べます ➔ 食べない / 寝ます ➔ 寝ない",
          romaji: "Tabemasu -> Tabenai / Nemasu -> Nenai",
          indonesian: "Makan / Tidur (Golongan II)"
        }
      ]
    },
    {
      point: 2,
      title: "Larangan / Permintaan Jangan: 〜ないで ください",
      polaFormat: "KK Bentuk-Nai + で ください",
      explanation: "Digunakan untuk meminta lawan bicara secara sopan agar TIDAK melakukan sesuatu ('Tolong jangan...').",
      examples: [
        {
          japanese: "心配しないで ください。",
          romaji: "Shinpai shinaide kudasai.",
          indonesian: "Tolong jangan khawatir."
        },
        {
          japanese: "ここに 荷物を 置かないで ください。",
          romaji: "Koko ni nimotsu o okanaide kudasai.",
          indonesian: "Tolong jangan meletakkan barang bawaan di sini."
        }
      ]
    },
    {
      point: 3,
      title: "Kewajiban Mutlak: 〜なければ なりません",
      polaFormat: "KK Bentuk-Nai (hilangkan い) + ければ なりません",
      explanation: "Menyatakan kewajiban atau keharusan yang tidak bisa ditawar ('Harus / Wajib melakukan...').",
      examples: [
        {
          japanese: "毎日 漢字を 覚えなければ なりません。",
          romaji: "Mainichi kanji o oboenakereba narimasen.",
          indonesian: "Setiap hari harus menghafal huruf kanji."
        }
      ]
    },
    {
      point: 4,
      title: "Tidak Perlu / Tidak Wajib: 〜なくても いいです",
      polaFormat: "KK Bentuk-Nai (hilangkan い) + くても いいです",
      explanation: "Menyatakan tidak adanya keharusan ('Tidak perlu melakukan ... pun tidak apa-apa'). Sering digunakan sebagai jawaban negatif dari pertanyaan「〜なければ なりませんか」.",
      examples: [
        {
          japanese: "お金を 払わなくても いいです。",
          romaji: "Okane o harawanakute mo ii desu.",
          indonesian: "Tidak perlu membayar uang (gratis)."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Berobat ke Dokter & Batas Waktu (〜までに)",
    description: "Perhatikan perbedaan partikel「まで」(sampai terus-menerus selama periode tertentu) vs「までに」(paling lambat / batas deadline waktu penyelesaian).",
    notes: [
      "Di klinik Jepang, dokter selalu mengawali pemeriksaan dengan menanyakan「どうしましたか」(Ada keluhan apa?).",
      "Jangan lupa membawa kartu asuransi kesehatan nasional (保険証 - hokenshou) saat berkunjung ke dokter."
    ]
  }
};
