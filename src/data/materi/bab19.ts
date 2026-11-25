import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 19,
  title: "Pengalaman (〜たことが あります) & Perubahan",
  subTitle: "ダイエットは 明日から します・経験と変化",
  summary: "Aturan perubahan kata kerja ke Bentuk-Ta (た形), menyatakan pengalaman masa lalu (〜たことが あります), menyebut contoh kegiatan (〜たり〜たり します), dan menyatakan perubahan keadaan (〜く / 〜に なります).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしは 相撲を 見たことが あります。",
      romaji: "Watashi wa sumou o mita koto ga arimasu.",
      indonesian: "Saya pernah menonton pertandingan sumo."
    },
    {
      id: 2,
      japanese: "休みの 日は テニスを したり、散歩に 行ったり します。",
      romaji: "Yasumi no hi wa tenisu o shitari, sanpo ni ittari shimasu.",
      indonesian: "Pada hari libur saya bermain tenis, jalan-jalan santai, dan sebagainya."
    },
    {
      id: 3,
      japanese: "これから だんだん 暖かく なります。",
      romaji: "Korekara dandan atatakaku narimasu.",
      indonesian: "Mulai sekarang cuaca berangsur-angsur akan menjadi hangat."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "北海道へ 行ったことが ありますか。",
      answer: "……はい、1度 行ったことが あります。",
      romaji: "Hokkaidou e itta koto ga arimasu ka? ... Hai, ichido itta koto ga arimasu.",
      indonesian: "Apakah Anda pernah pergi ke Hokkaido? ... Ya, pernah pergi satu kali."
    },
    {
      id: 2,
      question: "馬に 乗ったことが ありますか。",
      answer: "……いいえ、1度も ありません。ぜひ 乗ってみたいです。",
      romaji: "Uma ni notta koto ga arimasu ka? ... Iie, ichido mo arimasen. Zehi notte mitai desu.",
      indonesian: "Apakah Anda pernah menunggang kuda? ... Tidak, belum pernah satu kali pun. Saya sangat ingin mencobanya."
    },
    {
      id: 3,
      question: "冬休みは 何を しましたか。",
      answer: "……京都の お寺を 見たり、友達と スキーを したり しました。",
      romaji: "Fuyuyasumi wa nani o shimashita ka? ... Kyouto no otera o mitari, tomodachi to sukii o shitari shimashita.",
      indonesian: "Saat liburan musim dingin melakukan apa saja? ... Melihat kuil di Kyoto, bermain ski bersama teman, dan lain-lain."
    },
    {
      id: 4,
      question: "日本語は どうですか。",
      answer: "……難しいですが、少し 上手に なりました。",
      romaji: "Nihongo wa dou desu ka? ... Muzukashii desu ga, sukoshi jouzu ni narimashita.",
      indonesian: "Bagaimana bahasa Jepangnya? ... Sulit sih, tapi sudah menjadi sedikit lebih pandai."
    }
  ],
  percakapan: {
    title: "ダイエットは 明日から します (Dietnya Mulai Besok Saja)",
    situasi: "Miller-san bertemu Matsumoto-san yang baru saja berolahraga di pusat kebugaran dan menceritakan masalah berat badannya.",
    tokoh: ["松本", "ミラー"],
    dialogs: [
      {
        speaker: "松本",
        role: "Rekan Kerja",
        japanese: "ミラーさん、こんにちは。最近 あまり 見ませんね。忙しいですか。",
        romaji: "Miraa-san, konnichiwa. Saikin amari mimasen ne. Isogashii desu ka.",
        indonesian: "Halo Miller-san. Akhir-akhir ini jarang kelihatan ya. Apakah sibuk?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、残業が 多くて、ちょっと 太りました。",
        romaji: "Ee, zangyou ga ookute, chotto futorimashita.",
        indonesian: "Ya, lembur terus sehingga berat badan saya agak naik."
      },
      {
        speaker: "松本",
        role: "Rekan Kerja",
        japanese: "そうですか。じゃ、毎日 運動したり、甘い ものを 食べなかったり しなければ なりませんね。",
        romaji: "Sou desu ka. Ja, mainichi undou shitari, amai mono o tabenakattari shinakereba narimasen ne.",
        indonesian: "Begitu ya. Kalau begitu harus sering berolahraga, mengurangi makanan manis, dan sebagainya ya."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ。でも、ケーキが 好きですから……。ダイエットは 明日から します。",
        romaji: "Ee. Demo, keeki ga suki desu kara... Daietto wa ashita kara shimasu.",
        indonesian: "Betul. Tapi saya suka sekali makan kue... Dietnya mulai besok saja deh!"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Kata Kerja Bentuk-Ta (た形 - Bentuk Lampau Informal)",
      polaFormat: "Persis pola Bentuk-Te (て ➔ た, で ➔ だ)",
      explanation: "Cara mengubah ke Bentuk-Ta sama persis dengan Bentuk-Te Bab 14, hanya saja akhiran「て」diganti「た」dan「で」diganti「だ」. Contoh: 行って➔行った, 飲んで➔飲んだ, 食べて➔食べた, して➔した, 来て➔来た(きた).",
      examples: [
        {
          japanese: "買います ➔ 買った / 読みます ➔ 読んだ",
          romaji: "Kaimasu -> Katta / Yomimasu -> Yonda",
          indonesian: "Sudah membeli / Sudah membaca"
        }
      ]
    },
    {
      point: 2,
      title: "Menyatakan Pengalaman Hidup: 〜たことが あります",
      polaFormat: "KK Bentuk-Ta + ことが あります (Negatif: 〜たことが ありません)",
      explanation: "Menyatakan pengalaman pernah mengalami suatu hal di masa lalu. Tidak digunakan untuk aktivitas rutin sehari-hari (seperti 'kemarin sudah makan nasi').",
      examples: [
        {
          japanese: "富士山に 登ったことが あります。",
          romaji: "Fujisan ni nobotta koto ga arimasu.",
          indonesian: "Saya pernah mendaki Gunung Fuji."
        }
      ]
    },
    {
      point: 3,
      title: "Menyebutkan Contoh Aktivitas Acak: 〜たり 〜たり します",
      polaFormat: "KK1 Bentuk-Ta + り、KK2 Bentuk-Ta + り します/しました",
      explanation: "Menyebutkan beberapa aktivitas perwakilan dari sekian banyak kegiatan tanpa mempermasalahkan urutan terjadinya. Penanda waktu (sekarang/lampau) terletak pada kata「します/しました」di akhir kalimat.",
      examples: [
        {
          japanese: "週末は 音楽を 聴いたり、本を 読んだり します。",
          romaji: "Shuumatsu wa ongaku o kiitari, hon o yondari shimasu.",
          indonesian: "Akhir pekan mendengarkan musik, membaca buku, dan lain-lain."
        }
      ]
    },
    {
      point: 4,
      title: "Perubahan Keadaan: 〜く / 〜に なります",
      polaFormat: "KS-い (hilang い) + く なります / KS-な・KB + に なります",
      explanation: "Menyatakan proses perubahan menuju suatu kondisi baru ('Menjadi...'). Contoh: 高く なります (menjadi mahal), 元気に なりました (telah menjadi sehat), 医者に なります (menjadi dokter).",
      examples: [
        {
          japanese: "10月に なって、涼しく なりました。",
          romaji: "Juugatsu ni natte, suzushiku narimashita.",
          indonesian: "Masuk bulan Oktober, udara menjadi sejuk."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Kata '1度も〜ません' (Tidak Pernah Sekali Pun)",
    description: "Dalam mengungkapkan pengalaman negatif mutlak, gunakan pola「1度も 〜たことが ありません」yang menekankan belum pernah melakukannya sepanjang hidup.",
    notes: [
      "Perubahan keadaan menggunakan「なります」berfokus pada perubahan alami/kondisi, bukan paksaan.",
      "Partikel「〜たり」harus selalu diakhiri dengan kata kerja「します」."
    ]
  }
};
