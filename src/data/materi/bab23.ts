import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 23,
  title: "Keterangan Waktu (〜とき) & Kondisi Otomatis (〜と)",
  subTitle: "どうやって 行きますか・時と条件",
  summary: "Menyatakan momen waktu terjadinya sesuatu (〜とき), kondisi sebab-akibat alami atau cara kerja mesin (〜と、...), serta menanyakan petunjuk jalan.",
  polaKalimat: [
    {
      id: 1,
      japanese: "図書館で 本を 借りる とき、カードが 要ります。",
      romaji: "Toshokan de hon o kariru toki, kaado ga irimasu.",
      indonesian: "Ketika meminjam buku di perpustakaan, kartu anggota diperlukan."
    },
    {
      id: 2,
      japanese: "この ボタンを 押すと、お釣りが 出ます。",
      romaji: "Kono botan o osu to, otsuri ga demasu.",
      indonesian: "Jika/setiap menekan tombol ini, uang kembaliannya akan keluar."
    },
    {
      id: 3,
      japanese: "交差点で 右へ 曲がると、駅が あります。",
      romaji: "Kousaten de migi e magaru to, eki ga arimasu.",
      indonesian: "Kalau berbelok ke kanan di perempatan, ada stasiun."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "テレビを 見る とき、いつも 何を 食べますか。",
      answer: "……よく お菓子を 食べます。",
      romaji: "Terebi o miru toki, itsumo nani o tabemasu ka? ... Yoku okashi o tabemasu.",
      indonesian: "Saat menonton TV, biasanya makan apa? ... Sering makan camilan."
    },
    {
      id: 2,
      question: "眠い とき、どう しますか。",
      answer: "……熱い コーヒーを 飲みます。",
      romaji: "Nemui toki, dou shimasu ka? ... Atsui koohii o nomimasu.",
      indonesian: "Ketika mengantuk, Anda melakukan apa? ... Minum kopi panas."
    },
    {
      id: 3,
      question: "東京へ 出張した とき、社長に 会いましたか。",
      answer: "……はい、会いました。",
      romaji: "Toukyou e shucchou shita toki, shachou ni aimashita ka? ... Hai, aimashita.",
      indonesian: "Waktu dinas ke Tokyo, apakah bertemu Direktur? ... Ya, bertemu."
    },
    {
      id: 4,
      question: "音の 調節は どう やりますか。",
      answer: "……この つまみを 右へ 回すと、音が 大きく なります。",
      romaji: "Oto no chousetsu wa dou yarimasu ka? ... Kono tsumami o migi e mawasu to, oto ga ookiku narimasu.",
      indonesian: "Bagaimana cara mengatur volumenya? ... Kalau memutar kenop ini ke kanan, suaranya jadi besar."
    }
  ],
  percakapan: {
    title: "どうやって 行きますか (Bagaimana Cara Pergi ke Sana?)",
    situasi: "Miller-san menelepon penjaga perpustakaan atau fasilitas umum untuk menanyakan rute jalan kaki yang tepat dari stasiun.",
    tokoh: ["ミラー", "職員"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Pengunjung",
        japanese: "すみません。みどり図書館へ 行きたいんですが、どうやって 行きますか。",
        romaji: "Sumimasen. Midori toshokan e ikitain desu ga, douyatte ikimasu ka.",
        indonesian: "Permisi. Saya ingin pergi ke Perpustakaan Midori, bagaimana cara ke sananya ya?"
      },
      {
        speaker: "職員",
        role: "Petugas",
        japanese: "本町駅で 降りて、4番出口から 出て ください。",
        romaji: "Honmachi eki de orite, yonban deguchi kara dete kudasai.",
        indonesian: "Turun di Stasiun Honmachi, lalu keluarlah lewat pintu keluar nomor 4."
      },
      {
        speaker: "ミラー",
        role: "Pengunjung",
        japanese: "4番出口ですね。それから？",
        romaji: "Yonban deguchi desu ne. Sorekara?",
        indonesian: "Pintu keluar nomor 4 ya. Setelah itu?"
      },
      {
        speaker: "職員",
        role: "Petugas",
        japanese: "出口を 出て まっすぐ 行くと、大きい 橋が あります。その 橋を 渡って ください。",
        romaji: "Deguchi o dete massugu iku to, ookii hashi ga arimasu. Sono hashi o watatte kudasai.",
        indonesian: "Setelah keluar pintu dan jalan lurus, ada jembatan besar. Tolong seberangi jembatan itu."
      },
      {
        speaker: "ミラー",
        role: "Pengunjung",
        japanese: "橋を 渡るんですね。その 先は？",
        romaji: "Hashi o wataru ndesu ne. Sono saki wa?",
        indonesian: "Menyeberangi jembatan ya. Setelah itu ke mana?"
      },
      {
        speaker: "職員",
        role: "Petugas",
        japanese: "渡って すぐ 左へ 曲がると、右側に 白い 建物が あります。それが 図書館です。",
        romaji: "Watte sugu hidari e magaru to, migigawa ni shiroi tatemono ga arimasu. Sore ga toshokan desu.",
        indonesian: "Setelah menyeberang langsung belok kiri, di sebelah kanan ada bangunan putih. Itulah perpustakaannya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Keterangan Waktu: 〜とき (Ketika / Saat)",
      polaFormat: "[KK Kamus / KK-Ta / KK-Nai / KS-い / KS-な / KBの] + とき",
      explanation: "Menghubungkan klausa keterangan waktu ('Pada saat...'). Perhatikan aturan sambungan: Kata Sifat な memakai「な」(暇な とき), Kata Benda menyisipkan「の」(子どもの とき).",
      examples: [
        {
          japanese: "日本の 歌を 聞く とき、楽しいです。",
          romaji: "Nihon no uta o kiku toki, tanoshii desu.",
          indonesian: "Saat mendengarkan lagu Jepang, rasanya senang."
        },
        {
          japanese: "お金が ない とき、働きませんと 困ります。",
          romaji: "Okane ga nai toki, hatarakimasen to komarimasu.",
          indonesian: "Saat tidak punya uang, jadi bingung jika tidak bekerja."
        }
      ]
    },
    {
      point: 2,
      title: "Perbedaan Aspek Waktu: KK Kamus とき vs KK-Ta とき",
      polaFormat: "Kamus とき (sebelum aksi dilakukan) vs Bentuk-Ta とき (sesudah aksi selesai)",
      explanation: "「国へ 帰る とき、お土産を 買います」berarti membeli oleh-oleh SEBELUM berangkat pulang ke negara asal (masih di Jepang). Sedangkan「国へ 帰った とき、友達に 会います」berarti bertemu teman SETELAH tiba di negara asal.",
      examples: [
        {
          japanese: "家へ 帰る とき、花を 買います。(di tengah perjalanan pulang)",
          romaji: "Uchi e kaeru toki, hana o kaimasu.",
          indonesian: "Saat mau pulang ke rumah, membeli bunga."
        },
        {
          japanese: "家へ 帰った とき、「ただいま」と 言います。(setelah tiba di rumah)",
          romaji: "Uchi e kaetta toki, 'tadaima' to iimasu.",
          indonesian: "Ketika sudah sampai di rumah, mengucapkan 'tadaima'."
        }
      ]
    },
    {
      point: 3,
      title: "Kondisi Alami / Mekanis / Rute Jalan: KK Kamus + と",
      polaFormat: "[KK Kamus / KK-Nai] + と、Akibat Pasti",
      explanation: "Menyatakan hasil yang PASTI terjadi secara otomatis setiap kali kondisi pertamanya dilakukan (cara kerja alat/mesin, fenomena alam, penunjuk arah jalan). CATATAN PENTING: Kalimat akibat di belakang「〜と」TIDAK BOLEH berisi ajakan, perintah, atau keinginan (seperti 〜てください / 〜たい).",
      examples: [
        {
          japanese: "春に なると、桜が 咲きます。",
          romaji: "Haru ni naru to, sakura ga sakimasu.",
          indonesian: "Kalau sudah masuk musim semi, sakura bermekaran."
        },
        {
          japanese: "道を まっすぐ 行くと、公園が あります。",
          romaji: "Michi o massugu iku to, kouen ga arimasu.",
          indonesian: "Kalau jalan lurus terus, akan ada taman."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Penunjuk Jalan & Partikel を untuk Melintasi Ruang",
    description: "Kata kerja yang menyatakan pergerakan melintasi suatu ruang atau jalur selalu memakai partikel「を」(bukan で): 橋を 渡る (menyeberangi jembatan), 公園を 散歩する (jalan-jalan di taman), 交差点を 曲がる (berbelok di perempatan).",
    notes: [
      "Menanyakan petunjuk cara melakukan/menuju tempat:「どうやって〜ますか」.",
      "Jangan gunakan「〜と」untuk janji atau perintah seperti「駅に着くと、電話してください」(Salah -> Harus pakai 〜たら)."
    ]
  }
};
