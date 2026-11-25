import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 7,
  title: "Alat, Sarana & Memberi-Menerima",
  subTitle: "いらっしゃい・道具と授受",
  summary: "Sarana/alat perantara partikel で, ekspresi bahasa で, pola memberi (あげます) dan menerima (もらいます), serta sudah (もう) vs belum (まだ).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは パソコンで レポートを 書きます。",
      romaji: "Watashi wa pasokon de repooto o kakimasu.",
      indonesian: "Saya menulis laporan dengan komputer."
    },
    {
      id: 2,
      japanese: "わたしは 木村さんに 花を あげます。",
      romaji: "Watashi wa Kimura-san ni hana o agemasu.",
      indonesian: "Saya memberi bunga kepada Sdr. Kimura."
    },
    {
      id: 3,
      japanese: "わたしは カリナさんに チョコレートを もらいました。",
      romaji: "Watashi wa Karina-san ni chokoreeto o moraimashita.",
      indonesian: "Saya menerima cokelat dari Sdr. Karina."
    },
    {
      id: 4,
      japanese: "わたしは もう 荷物を 送りました。",
      romaji: "Watashi wa mou nimotsu o okurimashita.",
      indonesian: "Saya sudah mengirim barang bawaan/paket."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "テレビで 日本語を 勉強しましたか。",
      answer: "……いいえ、ラジオで 勉強しました。",
      romaji: "Terebi de nihongo o benkyou shimashita ka? ... Iie, rajio de benkyou shimashita.",
      indonesian: "Apakah Anda belajar bahasa Jepang lewat televisi? ... Bukan, saya belajar lewat siaran radio."
    },
    {
      id: 2,
      question: "日本語で レポートを 書きますか。",
      answer: "……いいえ、英語で 書きます。",
      romaji: "Nihongo de repooto o kakimasu ka? ... Iie, eigo de kakimasu.",
      indonesian: "Apakah Anda menulis laporan dalam bahasa Jepang? ... Tidak, saya menulis dalam bahasa Inggris."
    },
    {
      id: 3,
      question: "「Thank you」は 日本語で 何ですか。",
      answer: "……「ありがとう」です。",
      romaji: "\"Thank you\" wa nihongo de nan desu ka? ... \"Arigatou\" desu.",
      indonesian: "Apakah arti \"Thank you\" dalam bahasa Jepang? ... Artinya adalah \"Arigatou\"."
    },
    {
      id: 4,
      question: "だれに クリスマスカードを 書きますか。",
      answer: "……家族と 友達に 書きます。",
      romaji: "Dare ni kurisumasu kaado o kakimasu ka? ... Kazoku to tomodachi ni kakimasu.",
      indonesian: "Kepada siapa Anda menulis kartu Natal? ... Saya menulis untuk keluarga dan teman."
    },
    {
      id: 5,
      question: "それは 何ですか。",
      answer: "……手帳です。山田さんに もらいました。",
      romaji: "Sore wa nan desu ka? ... Techou desu. Yamada-san ni moraimashita.",
      indonesian: "Itu apa? ... Ini buku agenda saku. Saya menerimanya dari Sdr. Yamada."
    },
    {
      id: 6,
      question: "もう 昼ご飯を 食べましたか。",
      answer: "……はい、もう 食べました。／いいえ、まだです。これから 食べます。",
      romaji: "Mou hirugohan o tabemashita ka? ... Hai, mou tabemashita. / Iie, mada desu. Korekara tabemasu.",
      indonesian: "Apakah Anda sudah makan siang? ... Ya, sudah makan. / Belum, sebentar lagi baru mau makan."
    }
  ],
  percakapan: {
    title: "いらっしゃい (Selamat Datang)",
    situasi: "Jose Santos-san bertamu ke rumah Yamada-san dan membawa oleh-oleh.",
    tokoh: ["山田", "サントス"],
    dialogs: [
      {
        speaker: "サントス",
        role: "Tamu",
        japanese: "ごめんください。",
        romaji: "Gomen kudasai.",
        indonesian: "Permisi, apakah ada orang di rumah?"
      },
      {
        speaker: "山田",
        role: "Tuan Rumah",
        japanese: "いらっしゃい。サントスさん、どうぞ お上がりください。",
        romaji: "Irasshai. Santosu-san, douzo oagarikudasai.",
        indonesian: "Selamat datang! Santos-san, silakan masuk ke dalam."
      },
      {
        speaker: "サントス",
        role: "Tamu",
        japanese: "失礼します。これ、お土産です。どうぞ。",
        romaji: "Shitsurei shimasu. Kore, omiyage desu. Douzo.",
        indonesian: "Permisi. Ini ada sedikit oleh-oleh, silakan diterima."
      },
      {
        speaker: "山田",
        role: "Tuan Rumah",
        japanese: "どうも ありがとうございます。どうぞ お掛けください。",
        romaji: "Doumo arigatou gozaimasu. Douzo okake kudasai.",
        indonesian: "Terima kasih banyak. Silakan duduk."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Partikel で: Alat & Sarana",
      polaFormat: "Kata Benda (Alat/Sarana) + で + Kata Kerja",
      explanation: "Partikel で menunjukkan alat, sarana perantara, atau medium yang dipakai untuk melakukan aksi (misal: memotong dengan gunting, menulis dengan pensil, makan dengan sumpit).",
      examples: [
        {
          japanese: "はしで 食べます。",
          romaji: "Hashi de tabemasu.",
          indonesian: "Makan dengan sumpit."
        },
        {
          japanese: "ハサミで 紙を 切ります。",
          romaji: "Hasami de kami o kirimasu.",
          indonesian: "Memotong kertas dengan gunting."
        }
      ]
    },
    {
      point: 2,
      title: "Pemberian: 〜に あげます",
      polaFormat: "Penerima (Orang) + に + Benda + を あげます",
      explanation: "Digunakan ketika pembicara atau orang lain memberi sesuatu kepada pihak lain.",
      examples: [
        {
          japanese: "母に プレゼントを あげました。",
          romaji: "Haha ni purezento o agemashita.",
          indonesian: "Memberikan hadiah kepada ibu."
        }
      ]
    },
    {
      point: 3,
      title: "Penerimaan: 〜に / から もらいます",
      polaFormat: "Pemberi (Orang) + に / から + Benda + を もらいます",
      explanation: "Digunakan ketika pembicara menerima sesuatu dari orang lain.",
      examples: [
        {
          japanese: "先生に 本を もらいました。",
          romaji: "Sensei ni hon o moraimashita.",
          indonesian: "Menerima buku dari guru."
        }
      ]
    },
    {
      point: 4,
      title: "Sudah (もう) vs Belum (まだです)",
      polaFormat: "もう + Kata Kerja Lampau ⇔ いいえ、まだです",
      explanation: "Pertanyaan dengan「もう〜ましたか」menanyakan apakah perbuatan telah tuntas. Jika belum tuntas, jawablah dengan「いいえ、まだです」(bukan まだ〜ませんでした).",
      examples: [
        {
          japanese: "もう 宿題を しましたか。……いいえ、まだです。",
          romaji: "Mou shukudai o shimashita ka? ... Iie, mada desu.",
          indonesian: "Apakah Anda sudah mengerjakan PR? ... Belum."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Etika Bertamu & Omiyage di Jepang",
    description: "Ketika mengunjungi rumah teman atau rekan di Jepang, membawa oleh-oleh (お土産 - omiyage) atau bingkisan (手土産 - temiyage) merupakan sopan santun yang sangat dijunjung tinggi.",
    notes: [
      "Katakan「ごめんください」saat tiba di pintu depan.",
      "Ucapkan「失礼します」(permisi/maaf merepotkan) saat melangkah masuk dan melepas sepatu."
    ]
  }
};
