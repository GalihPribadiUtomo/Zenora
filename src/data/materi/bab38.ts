import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 38,
  title: "Nominalisasi dengan 'No' (〜のは・〜のが・〜のを)",
  subTitle: "片づけるのが 好きなんです・名詞化",
  summary: "Mengubah kalimat atau kata kerja menjadi kata benda (Nominalisasi) menggunakan partikel の untuk mengungkapkan hal yang disukai (〜のが 好き), evaluasi sifat (〜のは 大変), kelupaan (〜のを 忘れました), dan pengetahuan (〜のを 知っていますか).",
  polaKalimat: [
    {
      id: 1,
      japanese: "テニスを するのは 楽しいです。",
      romaji: "Tenisu o suru no wa tanoshii desu.",
      indonesian: "Bermain tenis itu menyenangkan."
    },
    {
      id: 2,
      japanese: "わたしは 花を 育てるのが 好きです。",
      romaji: "Watashi wa hana o sodateru no ga suki desu.",
      indonesian: "Saya suka menanam dan merawat bunga."
    },
    {
      id: 3,
      japanese: "牛乳を 買うのを 忘れました。",
      romaji: "Gyuunyuu o kau no o wasuremashita.",
      indonesian: "Saya lupa membeli susu."
    },
    {
      id: 4,
      japanese: "ミラーさんが 来月 転勤するのを 知っていますか。",
      romaji: "Miraa-san ga raigetsu tenkin suru no o shitte imasu ka.",
      indonesian: "Apakah Anda tahu bahwa bulan depan Miller-san akan dimutasi?"
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "漢字を 覚えるのは 難しいですか。",
      answer: "……ええ、難しいですが、とても 面白いです。",
      romaji: "Kanji o oboeru no wa muzukashii desu ka? ... Ee, muzukashii desu ga, totemo omoshiroi desu.",
      indonesian: "Apakah menghafal kanji itu sulit? ... Ya, sulit, tapi sangat menarik."
    },
    {
      id: 2,
      question: "カリナさんは 絵を かくのが 上手ですね。",
      answer: "……いいえ、それほどでも ありません。",
      romaji: "Karina-san wa e o kaku no ga jouzu desu ne. ... Iie, sorehodo demo arimasen.",
      indonesian: "Karina-san pandai sekali menggambar ya. ... Tidak, biasa saja kok."
    },
    {
      id: 3,
      question: "きのう 電気を 消すのを 忘れませんでしたか。",
      answer: "……あ、しまった！ 消し忘れました。",
      romaji: "Kinou denki o kesu no o wasuremasen deshita ka? ... A, shimatta! Keshiwasuremashita.",
      indonesian: "Apakah kemarin tidak lupa mematikan lampu? ... Aduh! Lupa saya matikan."
    },
    {
      id: 4,
      question: "わたしが 生まれたのは 大阪の 小さい 町です。",
      answer: "……そうですか。いい ところですか。",
      romaji: "Watashi ga umareta no wa Oosaka no chiisai machi desu. ... Sou desu ka. Ii tokoro desu ka.",
      indonesian: "Tempat saya dilahirkan adalah sebuah kota kecil di Osaka. ... Begitu ya. Apakah tempat yang bagus?"
    }
  ],
  percakapan: {
    title: "片づけるのが 好きなんです (Saya Suka Membereskan Barang)",
    situasi: "Miller-san berkunjung ke ruang kerja atau meja kolega dan kagum melihat betapa rapinya pengaturan barang di sana.",
    tokoh: ["ミラー", "高橋"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "高橋さんの 机は いつも 綺麗に 片づいて いますね。",
        romaji: "Takahashi-san no tsukue wa itsumo kirei ni katazuite imasu ne.",
        indonesian: "Meja Anda selalu tertata rapi dengan bersih ya, Takahashi-san."
      },
      {
        speaker: "高橋",
        role: "Rekan Kerja",
        japanese: "そうですか。わたしは 部屋や 机を 片づけるのが 好きなんです。",
        romaji: "Sou desu ka. Watashi wa heya ya tsukue o katazukeru no ga suki nandesu.",
        indonesian: "Masa sih? Sebenarnya saya memang suka merapikan kamar dan meja kerja."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "へえ、いいですね。わたしは 整理するのが あまり 上手じゃ ありません。",
        romaji: "Hee, ii desu ne. Watashi wa seiri suru no ga amari jouzu ja arimasen.",
        indonesian: "Wah, bagus sekali. Saya kurang pandai merapikan barang."
      },
      {
        speaker: "高橋",
        role: "Rekan Kerja",
        japanese: "コツは 簡単な ことですよ。使った ものを 元の 場所に 戻すのを 忘れない ことです。",
        romaji: "Kotsu wa kantan na koto desu yo. Tsukatta mono o moto no basho ni modosu no o wasurenai koto desu.",
        indonesian: "Kuncinya hal sederhana kok. Yaitu tidak lupa mengembalikan barang yang sudah dipakai ke tempat asalnya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Nominalisasi Kata Kerja sebagai Subjek: KK Kamus + のは KS",
      polaFormat: "Kata Kerja Bentuk Biasa + のは + Kata Sifat (楽しい / 難しい / 大変)",
      explanation: "Partikel「の」mengubah kata kerja atau klausa menjadi kata benda (mirip imbuhan 'me-/pe- + -an' atau gerund '-ing'). Contoh:「料理を 作るのは 楽しいです」= Memasak makanan itu menyenangkan.",
      examples: [
        {
          japanese: "毎日 漢字を 書くのは 大変です。",
          romaji: "Mainichi kanji o kaku no wa taihen desu.",
          indonesian: "Menulis kanji setiap hari itu melelahkan."
        }
      ]
    },
    {
      point: 2,
      title: "Mengungkapkan Bakat & Kesukaan dengan Nominalisasi: 〜のが",
      polaFormat: "KK Bentuk Kamus + のが + 好き / 嫌い / 上手 / 下手 / 速い / 遅い",
      explanation: "Digunakan saat predikatnya adalah kata sifat kesukaan, keahlian, atau kecepatan. Partikel penanda objeknya WAJIB menggunakan「が」setelah「の」.",
      examples: [
        {
          japanese: "兄は 歌を 歌うのが 上手です。",
          romaji: "Ani wa uta o utau no ga jouzu desu.",
          indonesian: "Kakak laki-laki saya pandai bernyanyi."
        }
      ]
    },
    {
      point: 3,
      title: "Kelupaan / Mengetahui Sebuah Fakta: 〜のを 忘れました / 知っています",
      polaFormat: "KK Bentuk Biasa + のを + 忘れました / 知っていますか",
      explanation: "Menyatakan lupa melakukan sesuatu atau mengetahui informasi/fakta yang berupa sebuah kejadian (kalimat).",
      examples: [
        {
          japanese: "手紙に 切手を はるのを 忘れました。",
          romaji: "Tegami ni kitte o haru no o wasuremashita.",
          indonesian: "Saya lupa menempelkan prangko pada surat."
        }
      ]
    },
    {
      point: 4,
      title: "Menekankan Informasi Spesifik (Waktu/Tempat/Alasan): 〜のは 〜です",
      polaFormat: "[Kalimat Bentuk Biasa] のは + [Tempat / Waktu / Orang / Benda] です",
      explanation: "Menyorot suatu unsur keterangan tertentu dalam kalimat sebagai fokus utama jawaban ('Yang paling sering ... adalah ...').",
      examples: [
        {
          japanese: "日本へ 来たのは 去年の 4月です。",
          romaji: "Nihon e kita no wa kyonen no shigatsu desu.",
          indonesian: "Waktu saya datang ke Jepang adalah bulan April tahun lalu."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Konsep Seiri-Seiton (整理・整頓) di Tempat Kerja",
    description: "Di Jepang, budaya merapikan tempat kerja dikenal sebagai bagian dari 5S (Seiri, Seiton, Seisou, Seiketsu, Shitsuke), sehingga keahlian mengatur meja selalu dipandang positif sebagai tanda profesionalisme.",
    notes: [
      "Perbedaan「の」vs「こと」: Keduanya memnominalisasi kata kerja, namun「〜のは」dan「〜のが」wajib pakai「の」ketika berpasangan dengan 好き, 上手, 忘れる, atau kata kerja persepsi (見る・聞く)."
    ]
  }
};
