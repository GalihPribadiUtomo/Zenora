import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 42,
  title: "Tujuan (〜ために) & Kegunaan Alat (〜のに)",
  subTitle: "ボーナスは 何に 使いますか・目的と用途",
  summary: "Menyatakan maksud tujuan sadar (〜ために), menyatakan fungsi/kegunaan suatu benda atau alat (〜のに 使います), serta menyebutkan kuantitas perkiraan atau lebih dari perkiraan.",
  polaKalimat: [
    {
      id: 1,
      japanese: "将来 自分の 店を 持つ ために、貯金して います。",
      romaji: "Shourai jibun no mise o motsu tame ni, chokin shite imasu.",
      indonesian: "Demi memiliki toko sendiri di masa depan, saya menabung."
    },
    {
      id: 2,
      japanese: "家族の ために、大きい 家を 建てたいです。",
      romaji: "Kazoku no tame ni, ookii ie o tatetai desu.",
      indonesian: "Demi keluarga, saya ingin membangun rumah yang besar."
    },
    {
      id: 3,
      japanese: "この はさみは 花を 切るのに 使います。",
      romaji: "Kono hasami wa hana o kiru no ni tsukaimasu.",
      indonesian: "Gunting ini digunakan untuk memotong bunga."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "引っ越しに どのくらい お金が かかりますか。",
      answer: "……30万円は 要りますね。",
      romaji: "Hikkoshi ni donokurai okane ga kakarimasu ka? ... Sanjuuman-en wa irimasu ne.",
      indonesian: "Untuk pindahan membutuhkan biaya berapa banyak? ... Setidaknya memerlukan 300.000 yen ya."
    },
    {
      id: 2,
      question: "どうして アルバイトを して いるんですか。",
      answer: "……大学の 学費を 払う ために、働いて います。",
      romaji: "Doushite arubaito o shite iru ndesu ka? ... Daigaku no gakuhi o harau tame ni, hataraite imasu.",
      indonesian: "Kenapa bekerja paruh waktu? ... Saya bekerja demi membayar uang kuliah."
    },
    {
      id: 3,
      question: "この アプリは 何に 使いますか。",
      answer: "……漢字を 覚えるのに とても 便利です。",
      romaji: "Kono apuri wa nani ni tsukaimasu ka? ... Kanji o oboeru no ni totemo benri desu.",
      indonesian: "Aplikasi ini dipakai untuk apa? ... Sangat praktis digunakan untuk menghafal kanji."
    },
    {
      id: 4,
      question: "会議の 資料を 作るのに 時間が かかりましたか。",
      answer: "……ええ、3時間ぐらい かかりました。",
      romaji: "Kaigi no shiryou o tsukuru no ni jikan ga kakarimashita ka? ... Ee, sanjikan gurai kakarimashita.",
      indonesian: "Apakah butuh waktu lama untuk membuat bahan rapat? ... Ya, memakan waktu sekitar 3 jam."
    }
  ],
  percakapan: {
    title: "ボーナスは 何に 使いますか (Bonusnya Dipakai untuk Apa?)",
    situasi: "Menjelang musim pembagian bonus (Shouyo), rekan-rekan kantor membahas rencana penggunaan uang bonus mereka.",
    tokoh: ["山下", "ミラー"],
    dialogs: [
      {
        speaker: "山下",
        role: "Rekan Kerja",
        japanese: "もうすぐ ボーナスですね。ミラーさんは ボーナスを 何に 使いますか。",
        romaji: "Mousugu boonasu desu ne. Miraa-san wa boonasu o nani ni tsukaimasu ka.",
        indonesian: "Sebentar lagi dapat bonus ya. Miller-san mau pakai uang bonusnya untuk apa?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "新しい パソコンを 買おうと 思っています。",
        romaji: "Atarashii pasokon o kaou to omotte imasu.",
        indonesian: "Saya berencana membeli komputer baru."
      },
      {
        speaker: "山下",
        role: "Rekan Kerja",
        japanese: "いいですね。わたしは ローンを 返すのに 全部 消えて しまいますよ。",
        romaji: "Ii desu ne. Watashi wa roon o kaesu no ni zenbu kiete shimaimasu yo.",
        indonesian: "Enak sekali ya. Kalau saya sih habis semuanya untuk mencicil kredit pinjaman."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "そうですか。わたしは いつか 世界一周を する ために、少し 貯金も したいんです。",
        romaji: "Sou desu ka. Watashi wa itsuka sekai isshuu o suru tame ni, sukoshi chokin mo shitai ndesu.",
        indonesian: "Begitu ya. Saya juga ingin menabung sedikit demi rencana keliling dunia suatu hari nanti."
      },
      {
        speaker: "山下",
        role: "Rekan Kerja",
        japanese: "それは 素晴らしい 夢ですね！",
        romaji: "Sore wa subarashii yume desu ne!",
        indonesian: "Itu impian yang luar biasa sekali!"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Tujuan Sadar / Demi: 〜ために",
      polaFormat: "[KK Bentuk Kamus] + ために / [Kata Benda] + の ために",
      explanation: "Berarti 'Untuk / Demi mencapai tujuan...' dengan fokus usaha sadar pelaku (Aksi B dikerjakan demi tercapainya A). Perbedaan penting dengan「〜ように」(Bab 36):「〜ために」hanya dapat dipakai dengan Kata Kerja yang BISA DIKONTROL kehendak pelaku (seperti membeli, membangun, menikah, lulus), sedangkan「〜ように」dipakai untuk hal non-kontrol/potensial (seperti bisa berbicara, tidak sakit, tidak lupa).",
      examples: [
        {
          japanese: "日本へ 行く ために、一生懸命 貯金しました。",
          romaji: "Nihon e iku tame ni, isshoukenmei chokin shimashita.",
          indonesian: "Demi pergi ke Jepang, saya menabung dengan sungguh-sungguh."
        },
        {
          japanese: "家族の ために、毎日 働きます。",
          romaji: "Kazoku no tame ni, mainichi hatarakimasu.",
          indonesian: "Demi keluarga, saya bekerja setiap hari."
        }
      ]
    },
    {
      point: 2,
      title: "Kegunaan, Evaluasi, & Biaya/Waktu Proses: 〜のに",
      polaFormat: "[KK Bentuk Kamus] + のに + 使います / 便利です / 役に立ちます / 時間が かかります",
      explanation: "Menunjukkan fungsi kegunaan alat ('Alat ini dipakai untuk...'), kelayakan evaluasi ('Praktis/berguna untuk...'), serta waktu/biaya yang dibutuhkan untuk menyelesaikan suatu pekerjaan.",
      examples: [
        {
          japanese: "この かばんは 大きくて、旅行に 行くのに 便利です。",
          romaji: "Kono kaban wa ookikute, ryokou ni iku no ni benri desu.",
          indonesian: "Tas ini besar dan praktis untuk pergi berwisata."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Sistem Bonus Dua Kali Setahun di Perusahaan Jepang",
    description: "Perusahaan Jepang secara tradisional memberikan bonus besar (ボーナス / 賞与) dua kali setahun: di musim panas (Juni/Juli) dan musim dingin (Desember), masing-masing sering setara beberapa bulan gaji.",
    notes: [
      "Pastikan tidak tertukar:「〜ために」(tujuan terkendali, misal: Rumah dibeli untuk tinggal) vs「〜ように」(kemampuan/harapan, misal: Belajar agar bisa bicara)."
    ]
  }
};
