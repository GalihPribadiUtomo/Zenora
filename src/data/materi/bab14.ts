import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 14,
  title: "Bentuk-Te (て形), Permintaan & Aktivitas",
  subTitle: "みどり町まで お願いします・て形",
  summary: "Aturan perubahan kata kerja ke Bentuk-Te (Golongan I, II, III), kalimat permintaan sopan (〜て ください), sedang melakukan (〜て います), dan menawarkan bantuan (〜ましょうか).",
  polaKalimat: [
    {
      id: 1,
      japanese: "ちょっと 待って ください。",
      romaji: "Chotto matte kudasai.",
      indonesian: "Tolong tunggu sebentar."
    },
    {
      id: 2,
      japanese: "荷物を 持ちましょうか。",
      romaji: "Nimotsu o mochimashou ka.",
      indonesian: "Bagaimana kalau saya bantu membawakan barang bawaan Anda?"
    },
    {
      id: 3,
      japanese: "ミラーさんは いま 電話を かけて います。",
      romaji: "Miraa-san wa ima denwa o kakete imasu.",
      indonesian: "Miller-san saat ini sedang menelepon."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "すみませんが、この 漢字の 読み方を 教えて ください。",
      answer: "……はい、いいですよ。「じゅうしょ」です。",
      romaji: "Sumimasen ga, kono kanji no yomikata o oshiete kudasai. ... Hai, ii desu yo. 'Juusho' desu.",
      indonesian: "Permisi, tolong beri tahu cara membaca kanji ini. ... Ya, boleh. Dibaca 'juusho' (alamat)."
    },
    {
      id: 2,
      question: "寒いですね。窓を 閉めましょうか。",
      answer: "……ええ、すみません。お願いします。",
      romaji: "Samui desu ne. Mado o shimemashou ka. ... Ee, sumimasen. Onegai shimasu.",
      indonesian: "Dingin ya. Bagaimana kalau saya tutup jendelanya? ... Ya, tolong tutupkan ya."
    },
    {
      id: 3,
      question: "佐藤さんは どこですか。",
      answer: "……いま 会議室で 松本さんと 話して います。",
      romaji: "Satou-san wa doko desu ka? ... Ima kaigishitsu de Matsumoto-san to hanashite imasu.",
      indonesian: "Di manakah Sato-san? ... Sekarang sedang berbicara dengan Matsumoto-san di ruang rapat."
    },
    {
      id: 4,
      question: "いま 雨が 降って いますか。",
      answer: "……はい、降って います。／いいえ、降って いません。",
      romaji: "Ima ame ga futte imasu ka? ... Hai, futte imasu. / Iie, futte imasen.",
      indonesian: "Apakah sekarang sedang turun hujan? ... Ya, sedang turun. / Tidak, tidak sedang hujan."
    }
  ],
  percakapan: {
    title: "みどり町まで お願いします (Tolong Antar ke Midoricho)",
    situasi: "Karina-san naik taksi dan memberikan petunjuk arah perjalanan kepada sopir taksi hingga tiba di tujuan.",
    tokoh: ["カリナ", "運転手"],
    dialogs: [
      {
        speaker: "カリナ",
        role: "Penumpang",
        japanese: "すみません、みどり町まで お願いします。",
        romaji: "Sumimasen, Midorichou made onegai shimasu.",
        indonesian: "Permisi Pak, tolong antar saya ke Midoricho."
      },
      {
        speaker: "運転手",
        role: "Sopir Taksi",
        japanese: "はい。",
        romaji: "Hai.",
        indonesian: "Baik."
      },
      {
        speaker: "カリナ",
        role: "Penumpang",
        japanese: "あの 信号を 右へ 曲がって ください。",
        romaji: "Ano shingou o migi e magatte kudasai.",
        indonesian: "Di lampu lalu lintas di depan itu, tolong belok ke kanan."
      },
      {
        speaker: "運転手",
        role: "Sopir Taksi",
        japanese: "右ですね。",
        romaji: "Migi desu ne.",
        indonesian: "Ke kanan ya."
      },
      {
        speaker: "カリナ",
        role: "Penumpang",
        japanese: "ええ。それから、まっすぐ 行って ください。あの 白い ビルの 前で 止めて ください。",
        romaji: "Ee. Sorekara, massugu itte kudasai. Ano shiroi biru no mae de tomete kudasai.",
        indonesian: "Ya. Setelah itu, tolong jalan lurus. Tolong berhenti di depan gedung putih itu."
      },
      {
        speaker: "運転手",
        role: "Sopir Taksi",
        japanese: "はい、着きましたよ。1,800円です。",
        romaji: "Hai, tsukimashita yo. Sen happyaku-en desu.",
        indonesian: "Baik, sudah sampai ya. Ongkosnya 1.800 yen."
      },
      {
        speaker: "カリナ",
        role: "Penumpang",
        japanese: "これで お願いします。お釣りは いいです。",
        romaji: "Kore de onegai shimasu. Otsuri wa ii desu.",
        indonesian: "Ini uangnya. Kembaliannya tidak usah (simpan saja)."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Aturan Penggolongan Kata Kerja & Perubahan Bentuk-Te (て形)",
      polaFormat: "Gol. I (U-verbs), Gol. II (Ru-verbs), Gol. III (Irregular)",
      explanation: "Golongan I: suku kata sebelum ます berbunyi (i): i/chi/ri ➔ って (待ちます➔待って); mi/bi/ni ➔ んで (飲みます➔飲んで); ki ➔ いて (書きます➔書いて, KECUALI 行きます➔行って); gi ➔ いで (泳ぎます➔泳いで); shi ➔ して (話します➔話して). Golongan II: hilangkan ます tambah て (食べます➔食べて). Golongan III: します➔して, 来ます➔来て.",
      examples: [
        {
          japanese: "書きます ➔ 書いて / 飲みます ➔ 飲んで",
          romaji: "Kakimasu -> Kaite / Nomimasu -> Nonde",
          indonesian: "Menulis / Minum (Golongan I)"
        },
        {
          japanese: "食べます ➔ 食べて / 見ます ➔ 見て",
          romaji: "Tabemasu -> Tabete / Mimasu -> Mite",
          indonesian: "Makan / Melihat (Golongan II)"
        }
      ]
    },
    {
      point: 2,
      title: "Kalimat Permintaan Sopan: 〜て ください",
      polaFormat: "Kata Kerja Bentuk-Te + ください",
      explanation: "Digunakan untuk meminta tolong, menginstruksikan, atau mengajak seseorang melakukan sesuatu secara sopan (contoh: tolong buka jendela, silakan duduk, tolong dengarkan).",
      examples: [
        {
          japanese: "名前を 書いて ください。",
          romaji: "Namae o kaite kudasai.",
          indonesian: "Tolong tuliskan nama Anda."
        },
        {
          japanese: "ここに 住所を 書いて ください。",
          romaji: "Koko ni juusho o kaite kudasai.",
          indonesian: "Tolong tulis alamat di sini."
        }
      ]
    },
    {
      point: 3,
      title: "Aktivitas Sedang Berlangsung: 〜て います",
      polaFormat: "Kata Kerja Bentuk-Te + います",
      explanation: "Menyatakan tindakan atau fenomena yang sedang berlangsung tepat pada saat dibicarakan (Present Continuous Tense: sedang makan, sedang hujan, sedang membaca).",
      examples: [
        {
          japanese: "いま 日本語を 勉強して います。",
          romaji: "Ima nihongo o benkyou shite imasu.",
          indonesian: "Sekarang sedang belajar bahasa Jepang."
        }
      ]
    },
    {
      point: 4,
      title: "Menawarkan Bantuan: KK (tanpa ます) + ましょうか",
      polaFormat: "Kata Kerja Bentuk-Masu (hilangkan ます) + ましょうか",
      explanation: "Digunakan ketika pembicara menawarkan diri secara sopan untuk melakukan sesuatu bagi lawan bicara (Mari saya bantu... / Bagaimana kalau saya...).",
      examples: [
        {
          japanese: "駅まで 迎えに 行きましょうか。",
          romaji: "Eki made mukae ni ikimashou ka.",
          indonesian: "Bagaimana kalau saya menjemput ke stasiun?"
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Naik Taksi di Jepang",
    description: "Pintu belakang sebelah kiri taksi di Jepang terbuka dan tertutup secara otomatis dikendalikan oleh sopir—penumpang tidak perlu membuka atau membanting pintu sendiri.",
    notes: [
      "Berikan petunjuk arah dengan「まっすぐ」(lurus),「右へ曲がって」(belok kanan),「左へ曲がって」(belok kiri).",
      "Gunakan kalimat「すみませんが、〜て ください」agar permintaan terasa lebih lembut."
    ]
  }
};
