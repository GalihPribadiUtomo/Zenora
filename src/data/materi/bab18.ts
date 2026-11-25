import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 18,
  title: "Bentuk Kamus (辞書形), Kemampuan & Hobi",
  subTitle: "趣味は 何ですか・辞書形と可能",
  summary: "Aturan mengubah kata kerja ke Bentuk Kamus (辞書形), menyatakan kesanggupan/kemampuan (〜ことが できます), menyatakan hobi (趣味は 〜ことです), serta sebelum melakukan aksi (〜まえに).",
  polaKalimat: [
    {
      id: 1,
      japanese: "ミラーさんは 漢字を 読むことが できます。",
      romaji: "Miraa-san wa kanji o yomu koto ga dekimasu.",
      indonesian: "Miller-san bisa membaca huruf kanji."
    },
    {
      id: 2,
      japanese: "わたしの 趣味は 映画を 見ることです。",
      romaji: "Watashi no shumi wa eiga o miru koto desu.",
      indonesian: "Hobi saya adalah menonton film."
    },
    {
      id: 3,
      japanese: "寝る まえに、日記を 書きます。",
      romaji: "Neru mae ni, nikki o kakimasu.",
      indonesian: "Sebelum tidur, saya menulis buku harian."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "スキーが できますか。",
      answer: "……はい、少し できます。",
      romaji: "Sukii ga dekimasu ka? ... Hai, sukoshi dekimasu.",
      indonesian: "Apakah Anda bisa bermain ski? ... Ya, bisa sedikit."
    },
    {
      id: 2,
      question: "ミラーさんは 車を 運転することが できますか。",
      answer: "……はい、できます。でも、バイクは 運転できません。",
      romaji: "Miraa-san wa kuruma o unten suru koto ga dekimasu ka? ... Hai, dekimasu. Demo, baiku wa unten dekimasen.",
      indonesian: "Apakah Miller-san bisa menyetir mobil? ... Ya, bisa. Tetapi motor tidak bisa."
    },
    {
      id: 3,
      question: "日本の お寺で カードを 使うことが できますか。",
      answer: "……いいえ、現金だけ 使うことが できます。",
      romaji: "Nihon no otera de kaado o tsukau koto ga dekimasu ka? ... Iie, genkin dake tsukau koto ga dekimasu.",
      indonesian: "Di kuil Jepang apakah bisa menggunakan kartu kredit? ... Tidak, hanya bisa memakai uang tunai."
    },
    {
      id: 4,
      question: "趣味は 何ですか。",
      answer: "……古い 切手を 集めることです。",
      romaji: "Shumi wa nan desu ka? ... Furui kitte o atsumeru koto desu.",
      indonesian: "Apa hobi Anda? ... Mengumpulkan perangko kuno."
    },
    {
      id: 5,
      question: "いつ 日本へ 来ましたか。",
      answer: "……3年 まえに 来ました。",
      romaji: "Itsu Nihon e kimashita ka? ... Sannen mae ni kimashita.",
      indonesian: "Kapan datang ke Jepang? ... Datang 3 tahun yang lalu."
    }
  ],
  percakapan: {
    title: "趣味は 何ですか (Apa Hobi Anda?)",
    situasi: "Yamada-san dan Santos-san berbincang santai mengenai hobi masing-masing sambil menikmati waktu luang.",
    tokoh: ["山田", "サントス"],
    dialogs: [
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "サントスさんの 趣味は 何ですか。",
        romaji: "Santosu-san no shumi wa nan desu ka.",
        indonesian: "Apa hobi Anda, Santos-san?"
      },
      {
        speaker: "サントス",
        role: "Tokoh Utama",
        japanese: "写真です。",
        romaji: "Shashin desu.",
        indonesian: "Fotografi (memotret)."
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "どんな 写真を 撮りますか。",
        romaji: "Donna shashin o torimasu ka.",
        indonesian: "Foto seperti apa yang sering Anda ambil?"
      },
      {
        speaker: "サントス",
        role: "Tokoh Utama",
        japanese: "動物の 写真です。とくに 馬が 好きです。",
        romaji: "Doubutsu no shashin desu. Toku ni uma ga suki desu.",
        indonesian: "Foto hewan. Terutama saya suka memotret kuda."
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "へえ、それは 面白いですね。日本へ 来てから、馬を 撮りましたか。",
        romaji: "Hee, sore wa omoshiroi desu ne. Nihon e kite kara, uma o torimashita ka.",
        indonesian: "Wah, menarik sekali ya. Setelah datang ke Jepang, apakah sudah memotret kuda?"
      },
      {
        speaker: "サントス",
        role: "Tokoh Utama",
        japanese: "ええ、北海道へ 行った とき、牧場で たくさん 撮ることが できました。",
        romaji: "Ee, Hokkaidou e itta toki, bokujou de takusan toru koto ga dekimashita.",
        indonesian: "Ya, waktu pergi ke Hokkaido, saya bisa memotret banyak sekali di peternakan."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Kata Kerja Bentuk Kamus (辞書形 - Jishokei)",
      polaFormat: "Gol. I (bunyi 'i' ➔ 'u'), Gol. II (ます ➔ る), Gol. III (します➔する, 来ます➔来る/くる)",
      explanation: "Bentuk kamus adalah bentuk dasar kata kerja yang dicantumkan dalam kamus bahasa Jepang. Golongan I mengubah vokal sebelum ます menjadi baris 'u' (例: 書きます➔書く, 飲みます➔飲む, 待ちます➔待つ, 会います➔会う). Golongan II cukup mengganti ます dengan る (食べます➔食べる, 見ます➔見る). Golongan III tidak beraturan: します➔する, 来ます➔来る(くる).",
      examples: [
        {
          japanese: "話します ➔ 話す / 行きます ➔ 行く",
          romaji: "Hanashimasu -> Hanasu / Ikimasu -> Iku",
          indonesian: "Berbicara / Pergi (Golongan I)"
        },
        {
          japanese: "覚えます ➔ 覚える / 借ります ➔ 借りる",
          romaji: "Oboemasu -> Oboeru / Karimasu -> Kariru",
          indonesian: "Mengingat / Meminjam (Golongan II)"
        }
      ]
    },
    {
      point: 2,
      title: "Menyatakan Kemampuan: 〜ことが できます",
      polaFormat: "[Kata Benda / KK Bentuk Kamus + こと] + が できます",
      explanation: "Menyatakan kapasitas, bakat, atau izin yang memungkinkan seseorang melakukan sesuatu ('Bisa / Dapat melakukan...'). Penambahan「こと」memnominalisasi kata kerja agar dapat diikuti partikel が.",
      examples: [
        {
          japanese: "ピアノを 弾くことが できます。",
          romaji: "Piano o hiku koto ga dekimasu.",
          indonesian: "Saya bisa bermain piano."
        }
      ]
    },
    {
      point: 3,
      title: "Menyatakan Hobi: 趣味は [KK Kamus + こと] です",
      polaFormat: "わたしの 趣味は + KK Bentuk Kamus + ことです",
      explanation: "Mengungkapkan hobi dalam bentuk kegiatan secara spesifik (bukan hanya kata benda saja). Contoh: 音楽を聴くことです (mendengarkan musik).",
      examples: [
        {
          japanese: "わたしの 趣味は 料理を 作ることです。",
          romaji: "Watashi no shumi wa ryouri o tsukuru koto desu.",
          indonesian: "Hobi saya adalah memasak makanan."
        }
      ]
    },
    {
      point: 4,
      title: "Urutan Sebelum Melakukan: KK Kamus / KB + の + まえに",
      polaFormat: "[KK Bentuk Kamus] まえに / [KB Waktu] + の + まえに / [Durasi] まえに",
      explanation: "Digunakan untuk menyatakan perbuatan yang dikerjakan sebelum aksi utama berlangsung ('Sebelum...'). Jika diikuti Kata Kerja langsung memakai bentuk kamus; jika Kata Benda wajib sisipkan の; jika durasi waktu tanpa の.",
      examples: [
        {
          japanese: "食事の まえに、手を 洗います。",
          romaji: "Shokuji no mae ni, te o araimasu.",
          indonesian: "Sebelum makan, mencuci tangan."
        },
        {
          japanese: "2時間 まえに、薬を 飲みました。",
          romaji: "Nijikan mae ni, kusuri o nomimashita.",
          indonesian: "2 jam yang lalu minum obat."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Kata ぜひ (Tentu / Sangat Berharap)",
    description: "Kata「ぜひ」digunakan bersama ungkapan ajakan atau harapan untuk memberi kesan kesungguhan dan antusiasme yang tinggi (Contoh: ぜひ 遊びに 来てください - pastikan mampir bermain ya!).",
    notes: [
      "Jangan pernah mengakhiri kalimat dengan Kata Kerja bentuk kamus langsung di situasi formal, bungkuslah dengan「〜ことです」atau「〜まえに」.",
      "Ungkapan「なかなか」(tidak kunjung / sulit sekali) berpasangan dengan bentuk negatif:「なかなか 覚えられません」(susah sekali hafalnya)."
    ]
  }
};
