import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 29,
  title: "Keadaan Hasil (〜ています) & Penyesalan (〜てしまう)",
  subTitle: "忘れ物を したんですが・状態と完了",
  summary: "Menyatakan keadaan suatu benda akibat peristiwa tanpa menekankan pelaku (Kata Kerja Intransitif + ています), serta aksi yang tuntas atau tidak sengaja dilakukan dengan rasa menyesal (〜て しまいました).",
  polaKalimat: [
    {
      id: 1,
      japanese: "窓が 閉まっています。",
      romaji: "Mado ga shimattee imasu.",
      indonesian: "Jendela dalam keadaan tertutup."
    },
    {
      id: 2,
      japanese: "電車に 傘を 忘れて しまいました。",
      romaji: "Densha ni kasa o wasurete shimaimashita.",
      indonesian: "Saya tidak sengaja melupakan (ketinggalan) payung di dalam kereta."
    },
    {
      id: 3,
      japanese: "この 本は もう 全部 読んで しまいました。",
      romaji: "Kono hon wa mou zenbu yonde shimaimashita.",
      indonesian: "Buku ini sudah selesai saya baca seluruhnya."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "会議室の 電気が ついていますね。",
      answer: "……あ、本当だ。だれか 消し忘れたんでしょう。",
      romaji: "Kaigishitsu no denki ga tsuite imasu ne. ... A, hontou da. Dareka keshiwasureta ndeshou.",
      indonesian: "Lampu ruang rapat dalam keadaan menyala ya. ... Oh benar. Mungkin ada yang lupa mematikannya."
    },
    {
      id: 2,
      question: "その コップ、使っても いいですか。",
      answer: "……すみません、その コップは 割れていますから、あちらを 使って ください。",
      romaji: "Sono koppu, tsukatte mo ii desu ka? ... Sumimasen, sono koppu wa warete imasu kara, achira o tsukatte kudasai.",
      indonesian: "Gelas itu boleh dipakai? ... Maaf, gelas itu dalam keadaan retak/pecah, tolong pakai yang sebelah sana."
    },
    {
      id: 3,
      question: "レポートは もう 書きましたか。",
      answer: "……はい、きょうの 朝 書いて しまいました。",
      romaji: "Repooto wa mou kakimashita ka? ... Hai, kyou no asa kaite shimaimashita.",
      indonesian: "Apakah laporannya sudah ditulis? ... Ya, tadi pagi sudah selesai saya tulis tuntas."
    },
    {
      id: 4,
      question: "どう したんですか。",
      answer: "……パスポートを なくして しまったんです。",
      romaji: "Dou shitan desu ka? ... Pasupooto o nakushite shimattan desu.",
      indonesian: "Ada apa? ... Saya kehilangan paspor saya (menyesal/bingung)."
    }
  ],
  percakapan: {
    title: "忘れ物を したんですが (Saya Ketinggalan Barang)",
    situasi: "Miller-san kehilangan tas/barang bawaannya di kereta dan melapor ke petugas bagian barang hilang di stasiun.",
    tokoh: ["ミラー", "駅員"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Penumpang",
        japanese: "すみません。さっき 電車に 荷物を 忘れて しまったんですが。",
        romaji: "Sumimasen. Sakki densha ni nimotsu o wasurete shimattan desu ga.",
        indonesian: "Permisi. Tadi saya tidak sengaja meninggalkan barang di kereta."
      },
      {
        speaker: "駅員",
        role: "Petugas Stasiun",
        japanese: "どんな 荷物ですか。",
        romaji: "Donna nimotsu desu ka.",
        indonesian: "Barang yang seperti apa?"
      },
      {
        speaker: "ミラー",
        role: "Penumpang",
        japanese: "黒くて 大きい かばんです。横に ポケットが ついています。",
        romaji: "Kurokute ookii kaban desu. Yoko ni poketto ga tsuite imasu.",
        indonesian: "Tas berwarna hitam yang besar. Di bagian sampingnya terdapat saku."
      },
      {
        speaker: "駅員",
        role: "Petugas Stasiun",
        japanese: "中に 何が 入っていますか。",
        romaji: "Naka ni nani ga haitte imasu ka.",
        indonesian: "Di dalamnya berisi apa?"
      },
      {
        speaker: "ミラー",
        role: "Penumpang",
        japanese: "書類と 傘が 入っています。傘が 少し 出て います。",
        romaji: "Shorui to kasa ga haitte imasu. Kasa ga sukoshi dete imasu.",
        indonesian: "Ada dokumen dan payung di dalamnya. Payungnya sedikit mencuat keluar."
      },
      {
        speaker: "駅員",
        role: "Petugas Stasiun",
        japanese: "ちょっと 調べて みますから、こちらで 待って いて ください。",
        romaji: "Chotto shirabete mimasu kara, kochira de matte ite kudasai.",
        indonesian: "Saya coba periksa sebentar ya, tolong tunggu di sebelah sini."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Kondisi / Keadaan yang Tampak: KK Intransitif (自動詞) + ています",
      polaFormat: "Subjek (Benda) + が + KK Intransitif Bentuk-Te + います",
      explanation: "Menyatakan keadaan suatu benda yang tampak langsung oleh pembicara tanpa menunjuk siapa pelakunya. Partikel subjek WAJIB「が」(Contoh: 窓が 開いています = jendelanya terbuka; 道が 混んでいます = jalannya macet; 袋が 破れています = kantongnya sobek).",
      examples: [
        {
          japanese: "いすが 壊れています。",
          romaji: "Isu ga kowarete imasu.",
          indonesian: "Kursinya dalam kondisi rusak."
        },
        {
          japanese: "壁に 絵が 掛かっています。",
          romaji: "Kabe ni e ga kakatte imasu.",
          indonesian: "Di dinding tergantung lukisan."
        }
      ]
    },
    {
      point: 2,
      title: "Menunjukkan Penuntasan Aksi: 〜て しまいます",
      polaFormat: "KK Bentuk-Te + しまいます / しまいました",
      explanation: "Menekankan bahwa suatu perbuatan telah diselesaikan 100% sampai tuntas ('sudah habis / sudah selesai dikerjakan semuanya').",
      examples: [
        {
          japanese: "宿題は 全部 やって しまいました。",
          romaji: "Shukudai wa zenbu yatte shimaimashita.",
          indonesian: "PR-nya sudah selesai saya kerjakan semua."
        }
      ]
    },
    {
      point: 3,
      title: "Menunjukkan Rasa Menyesal / Tidak Sengaja: 〜て しまいました",
      polaFormat: "KK Bentuk-Te + しまいました (Percakapan kasual: 〜ちゃった)",
      explanation: "Menunjukkan perbuatan di luar kendali atau kesalahan yang menimbulkan rasa menyesal, kaget, atau menyusahkan (Contoh: lupa, hilang, rusak, salah jalan, kesiangan).",
      examples: [
        {
          japanese: "約束の 時間を 間違えて しまいました。",
          romaji: "Yakusoku no jikan o machigaete shimaimashita.",
          indonesian: "Saya tidak sengaja salah mengingat waktu janjinya."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Fasilitas Barang Hilang (忘れ物センター) di Stasiun Jepang",
    description: "Jepang terkenal dengan tingkat kejujuran dan sistem Lost & Found (忘れ物取扱所) yang luar biasa rapi di setiap stasiun kereta. Barang yang tertinggal biasanya didata rinci termasuk ciri saku, warna, dan isinya.",
    notes: [
      "Kenali perbedaan pasangan Kata Kerja Transitif vs Intransitif (他動詞 vs 自動詞): 開ける(membuka) vs 開く(terbuka), 壊す(merusak) vs 壊れる(rusak).",
      "Pada keadaan otomatis tanpa pelaku, gunakan KK Intransitif + ている dengan partikel が."
    ]
  }
};
