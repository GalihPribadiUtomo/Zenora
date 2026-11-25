import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 16,
  title: "Rangkaian Aksi, Urutan & Ciri Fisik",
  subTitle: "使い方を 教えて ください・順接と特徴",
  summary: "Menghubungkan beberapa kata kerja (〜て、〜て), aksi berurutan (〜てから), menyambung kata sifat, dan menyatakan ciri khusus (Aは Bが 〜です).",
  polaKalimat: [
    {
      id: 1,
      japanese: "朝 起きて、ジョギングを して、シャワーを 浴びます。",
      romaji: "Asa okite, jogingu o shite, shawaa o abimasu.",
      indonesian: "Pagi bangun tidur, melakukan jogging, lalu mandi shower."
    },
    {
      id: 2,
      japanese: "コンサートが 終わってから、レストランで 食事しました。",
      romaji: "Konsaato ga owatte kara, resutoran de shokuji shimashita.",
      indonesian: "Setelah konser selesai, saya makan di restoran."
    },
    {
      id: 3,
      japanese: "大阪は 食べ物が おいしいです。",
      romaji: "Oosaka wa tabemono ga oishii desu.",
      indonesian: "Osaka makanannya enak."
    },
    {
      id: 4,
      japanese: "この 部屋は 広くて、明るいです。",
      romaji: "Kono heya wa hirokute, akarui desu.",
      indonesian: "Kamar ini luas dan terang."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "きのう 何を しましたか。",
      answer: "……図書館へ 行って、本を 借りて、それから 友達に 会いました。",
      romaji: "Kinou nani o shimashita ka? ... Toshokan e itte, hon o karite, sorekara tomodachi ni aimashita.",
      indonesian: "Kemarin melakukan apa saja? ... Pergi ke perpustakaan, meminjam buku, lalu bertemu teman."
    },
    {
      id: 2,
      question: "大学を 出てから、何を しますか。",
      answer: "……父の 会社で 働きます。",
      romaji: "Daigaku o dete kara, nani o shimasu ka? ... Chichi no kaisha de hatarakimasu.",
      indonesian: "Setelah lulus universitas, akan melakukan apa? ... Bekerja di perusahaan ayah."
    },
    {
      id: 3,
      question: "東京へ どうやって 行きますか。",
      answer: "……京都駅まで バスで 行って、新幹線に 乗り換えます。",
      romaji: "Toukyou e douyatte ikimasu ka? ... Kyouto eki made basu de itte, Shinkansen ni norikaemasu.",
      indonesian: "Bagaimana cara pergi ke Tokyo? ... Pergi ke Stasiun Kyoto naik bus, lalu berganti naik Shinkansen."
    },
    {
      id: 4,
      question: "マリアさんは どんな 人ですか。",
      answer: "……背が 高くて、髪が 長いです。そして とても 親切です。",
      romaji: "Maria-san wa donna hito desu ka? ... Se ga takakute, kami ga nagai desu. Soshite totemo shinsetsu desu.",
      indonesian: "Maria orang yang seperti apa? ... Badannya tinggi dan rambutnya panjang. Lalu sangat ramah."
    }
  ],
  percakapan: {
    title: "使い方を 教えて ください (Tolong Ajari Cara Memakainya)",
    situasi: "Maria-san bingung cara menggunakan mesin ATM di bank Jepang dan meminta bantuan petugas bank.",
    tokoh: ["マリア", "銀行員"],
    dialogs: [
      {
        speaker: "マリア",
        role: "Nasabah",
        japanese: "すみません。この 機械の 使い方を 教えて ください。",
        romaji: "Sumimasen. Kono kikai no tsukaikata o oshiete kudasai.",
        indonesian: "Permisi. Tolong ajari saya cara menggunakan mesin ini."
      },
      {
        speaker: "銀行員",
        role: "Petugas Bank",
        japanese: "お引き出しですか。では、まず ここを 押して ください。",
        romaji: "Ohikidashi desu ka. Dewa, mazu koko o oshite kudasai.",
        indonesian: "Mau menarik uang ya? Kalau begitu, pertama tolong tekan tombol di sini."
      },
      {
        speaker: "マリア",
        role: "Nasabah",
        japanese: "はい。",
        romaji: "Hai.",
        indonesian: "Baik."
      },
      {
        speaker: "銀行員",
        role: "Petugas Bank",
        japanese: "次に キャッシュカードを 入れて、暗証番号を 押して ください。",
        romaji: "Tsugi ni kyasshu kaado o irete, anshoubangou o oshite kudasai.",
        indonesian: "Berikutnya masukkan kartu ATM, lalu tekan nomor PIN Anda."
      },
      {
        speaker: "マリア",
        role: "Nasabah",
        japanese: "暗証番号ですね。それから どうしますか。",
        romaji: "Anshoubangou desu ne. Sorekara dou shimasu ka.",
        indonesian: "Nomor PIN ya. Setelah itu bagaimana?"
      },
      {
        speaker: "銀行員",
        role: "Petugas Bank",
        japanese: "金額を 押してから、「確認」ボタンを 押して ください。お金と カードが 出ます。",
        romaji: "Kingaku o oshite kara, 'kakunin' botan o oshite kudasai. Okane to kaado ga demasu.",
        indonesian: "Setelah menekan jumlah nominal, tekan tombol 'Konfirmasi'. Uang dan kartu akan keluar."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menghubungkan Aksi Berurutan: KK1て、KK2て、KK3",
      polaFormat: "KK1 Bentuk-Te、KK2 Bentuk-Te、KK3 ます/ました",
      explanation: "Digunakan untuk menyebutkan beberapa kegiatan yang dilakukan secara berurutan. Kala waktu kalimat (sekarang/lampau) ditentukan oleh kata kerja terakhir di akhir kalimat.",
      examples: [
        {
          japanese: "家に 帰って、ご飯を 食べて、寝ました。",
          romaji: "Uchi ni kaette, gohan o tabete, nemashita.",
          indonesian: "Pulang ke rumah, makan malam, lalu tidur."
        }
      ]
    },
    {
      point: 2,
      title: "Setelah Melakukan Aksi: KK1 Bentuk-Te + から、KK2",
      polaFormat: "KK1 Bentuk-Te + から、KK2",
      explanation: "Menekankan bahwa aksi kedua baru dilakukan tepat setelah aksi pertama selesai secara tuntas ('Setelah A selesai, lalu B').",
      examples: [
        {
          japanese: "手を 洗ってから、ご飯を 食べます。",
          romaji: "Te o aratte kara, gohan o tabemasu.",
          indonesian: "Setelah mencuci tangan, baru makan."
        }
      ]
    },
    {
      point: 3,
      title: "Menghubungkan Kata Sifat & Kata Benda",
      polaFormat: "KS-い (hilangkan い) + くて / KS-な + で / KB + で",
      explanation: "Untuk menggabungkan dua kata sifat atau lebih yang senada: Kata Sifat い akhiran い diubah jadi くて (Contoh: おいしくて、安い), sedangkan Kata Sifat な dan Kata Benda ditambahkan で (Contoh: 綺麗で、親切な人).",
      examples: [
        {
          japanese: "カリナさんは 若くて、綺麗です。",
          romaji: "Karina-san wa wakakute, kirei desu.",
          indonesian: "Karina-san muda dan cantik."
        }
      ]
    },
    {
      point: 4,
      title: "Topik Utama & Atributnya: KB1 は KB2 が KS/KK",
      polaFormat: "Topik (KB1) + は + Atribut/Bagian (KB2) + が + Predikat",
      explanation: "Menjelaskan ciri khas, sifat, atau karakteristik menonjol dari topik utama (contoh: Gunung Fuji tinggi, gajah belalainya panjang, Kyoto makanannya enak).",
      examples: [
        {
          japanese: "ミラーさんは 背が 高いです。",
          romaji: "Miraa-san wa se ga takai desu.",
          indonesian: "Miller-san badannya tinggi."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menggunakan ATM di Jepang",
    description: "Di Jepang, mesin ATM bank atau minimarket (Konbini) memiliki fitur lengkap mulai dari penarikan tunai, setor tunai, hingga transfer (振込 - furikomi). Tombol konfirmasi selalu bertuliskan 確認 (kakunin).",
    notes: [
      "Untuk menanyakan 'cara melakukan/menggunakan sesuatu', ubah bentuk-Masu (hilangkan ます) lalu tambah 方: 使い方 (cara memakai), 読み方 (cara baca), 書き方 (cara tulis).",
      "Partikel naik kendaraan adalah「〜に 乗ります」, turun kendaraan「〜を 降ります」, dan berganti kendaraan「〜に 乗り換えます」."
    ]
  }
};
