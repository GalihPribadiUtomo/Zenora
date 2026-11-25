import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 36,
  title: "Tujuan (〜ように) & Perubahan Kebiasaan (〜ようになる)",
  subTitle: "毎日 運動する ように しています・目的と習慣",
  summary: "Menyatakan target tujuan yang bersifat potensial atau menghindari hal buruk (〜ように), perubahan menuju kemampuan atau kebiasaan baru (〜ように なります), dan usaha pembiasaan diri (〜ように しています).",
  polaKalimat: [
    {
      id: 1,
      japanese: "早く 日本語が 話せる ように、毎日 練習しています。",
      romaji: "Hayaku Nihongo ga hanaseru you ni, mainichi renshuu shite imasu.",
      indonesian: "Supaya cepat bisa berbicara bahasa Jepang, setiap hari saya berlatih."
    },
    {
      id: 2,
      japanese: "遅れない ように、早めに 家を 出ました。",
      romaji: "Okurenai you ni, hayame ni uchi o demashita.",
      indonesian: "Agar tidak terlambat, saya berangkat dari rumah lebih awal."
    },
    {
      id: 3,
      japanese: "最近、漢字が 少し 読める ように なりました。",
      romaji: "Saikin, kanji ga sukoshi yomeru you ni narimashita.",
      indonesian: "Akhir-akhir ini, saya sudah menjadi bisa membaca sedikit kanji."
    },
    {
      id: 4,
      japanese: "健康の ために、毎日 野菜を 食べる ように しています。",
      romaji: "Kenkou no tame ni, mainichi yasai o taberu you ni shite imasu.",
      indonesian: "Demi kesehatan, saya selalu berusaha membiasakan makan sayur setiap hari."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "後ろの 人にも 聞こえる ように、大きい 声で 話して ください。",
      answer: "……はい、分かりました。",
      romaji: "Ushiro no hito ni mo kikoeru you ni, ookii koe de hanashite kudasai. ... Hai, wakarimashita.",
      indonesian: "Agar terdengar oleh orang yang duduk di belakang juga, tolong bicara dengan suara lantang. ... Baik, mengerti."
    },
    {
      id: 2,
      question: "お子さんは もう 自転車に 乗れますか。",
      answer: "……ええ、先週 やっと 乗れる ように なりました。",
      romaji: "Okosan wa mou jitensha ni noremasu ka? ... Ee, senshuu yatto noreru you ni narimashita.",
      indonesian: "Apakah anak Anda sudah bisa naik sepeda? ... Ya, minggu lalu akhirnya sudah bisa."
    },
    {
      id: 3,
      question: "お正月は 毎年 国へ 帰りますか。",
      answer: "……はい、できるだけ 帰る ように しています。",
      romaji: "Oshougatsu wa maitoshi kuni e kaerimasu ka? ... Hai, dekiru dake kaeru you ni shite imasu.",
      indonesian: "Setiap tahun baru apakah pulang ke negara asal? ... Ya, saya selalu mengusahakan sebisa mungkin pulang."
    }
  ],
  percakapan: {
    title: "毎日 運動する ように しています (Berusaha Berolahraga Setiap Hari)",
    situasi: "Di pusat kebugaran/olahraga, Miller-san bertemu koleganya yang sangat bugar dan bertanya mengenai rahasia gaya hidup sehatnya.",
    tokoh: ["ミラー", "山田"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "山田さんは いつも 元気ですね。何か 特別な ことを していますか。",
        romaji: "Yamada-san wa itsumo genki desu ne. Nani ka tokubetsu na koto o shite imasu ka.",
        indonesian: "Yamada-san selalu terlihat sehat dan bersemangat ya. Apakah melakukan hal khusus?"
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "いいえ、特別な ことは していませんよ。ただ、毎日 30分 歩く ように しています。",
        romaji: "Iie, tokubetsu na koto wa shite imasen yo. Tada, mainichi sanjuppun aruku you ni shite imasu.",
        indonesian: "Tidak, saya tidak melakukan hal khusus kok. Hanya saja, saya berusaha membiasakan berjalan kaki 30 menit setiap hari."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "毎日ですか。大変じゃ ありませんか。",
        romaji: "Mainichi desu ka. Taihen ja arimasen ka.",
        indonesian: "Setiap hari? Apa tidak berat?"
      },
      {
        speaker: "山田",
        role: "Rekan Kerja",
        japanese: "最初は 大変でしたが、だんだん 楽しく 歩く ように なりました。それに、病気にも ならなく なりましたよ。",
        romaji: "Saisho wa taihen deshita ga, dandan tanoshiku aruku you ni narimashita. Sore ni, byouki ni mo naranaku narimashita yo.",
        indonesian: "Awalnya memang berat, tetapi lama-lama saya menjadi senang berjalan kaki. Selain itu, saya juga jadi tidak gampang sakit lho."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "わたしも 太らない ように、明日から エレベーターを 使わない ように します。",
        romaji: "Watashi mo futoranai you ni, ashita kara erebeetaa o tsukawanai you ni shimasu.",
        indonesian: "Saya juga supaya tidak gemuk, mulai besok akan membiasakan tidak memakai lift."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Menyatakan Tujuan Non-Kontrol / Kemampuan: 〜ように",
      polaFormat: "[KK Potensial / KK Non-kontrol / KK Bentuk-Nai] + ように、Aksi",
      explanation: "Berarti 'Agar / Supaya...'. Kata kerja di depan「ように」biasanya adalah kata kerja potensial (bisa berbicara, bisa melihat), kata kerja keadaan (memahami, terdengar), atau bentuk negatif (supaya tidak lupa, supaya tidak rusak).",
      examples: [
        {
          japanese: "忘れない ように、メモして おきます。",
          romaji: "Wasurenai you ni, memo shite okimasu.",
          indonesian: "Supaya tidak lupa, saya catat terlebih dahulu."
        }
      ]
    },
    {
      point: 2,
      title: "Perubahan Kemampuan / Keadaan Baru: 〜ように なります",
      polaFormat: "[KK Kamus / KK Potensial / KK Bentuk-Nai] + ように なります",
      explanation: "Menunjukkan proses perubahan dari dulunya tidak bisa menjadi bisa, atau dari tidak terbiasa menjadi terbiasa ('Akhirnya jadi bisa...', 'Sekarang sudah jadi tidak...').",
      examples: [
        {
          japanese: "日本の 食べ物が 食べられる ように なりました。",
          romaji: "Nihon no tabemono ga taberareru you ni narimashita.",
          indonesian: "Saya sudah menjadi bisa makan makanan Jepang."
        }
      ]
    },
    {
      point: 3,
      title: "Usaha & Kebiasaan Pribadi: 〜ように しています",
      polaFormat: "[KK Kamus / KK Bentuk-Nai] + ように しています",
      explanation: "Menyatakan upaya sadar yang dilakukan berulang-ulang oleh seseorang demi membangun disiplin atau gaya hidup positif ('Selalu berusaha untuk...', 'Membiasakan diri tidak...').",
      examples: [
        {
          japanese: "毎日 7時間 寝る ように しています。",
          romaji: "Mainichi shichijikan neru you ni shite imasu.",
          indonesian: "Saya berusaha membiasakan tidur 7 jam setiap hari."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menghindari Keraguan dengan Kebiasaan Positif",
    description: "Pola「〜ようにしています」dan「〜ようにしてください」(usahakan/tolong biasakan agar...) banyak digunakan di pabrik SSW dalam SOP kebersihan dan keselamatan kerja.",
    notes: [
      "Hati-hati perbedaan「ようにする」(usaha membiasakan diri) vs「ことになる」(keputusan aturan dari luar)."
    ]
  }
};
