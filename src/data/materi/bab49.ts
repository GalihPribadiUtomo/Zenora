import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 49,
  title: "Bahasa Penghormatan Tinggi (尊敬語: Sonkeigo)",
  subTitle: "部長は もう お帰りに なりました・敬語体系（尊敬語）",
  summary: "Menggunakan bahasa penghormatan Sonkeigo (尊敬語) untuk meninggikan posisi lawan bicara atau orang ketiga yang dihormati (seperti atasan, tamu bisnis, guru, atau klien) melalui perubahan kata kerja pola お〜になります, kata kerja khusus, dan permohonan sopan お〜ください.",
  polaKalimat: [
    {
      id: 1,
      japanese: "部長は もう お帰りに なりました。",
      romaji: "Buchou wa mou okaeri ni narimashita.",
      indonesian: "Kepala bagian sudah pulang ke rumah."
    },
    {
      id: 2,
      japanese: "社長は 会議室に いらっしゃいます。",
      romaji: "Shachou wa kaigishitsu ni irasshaimasu.",
      indonesian: "Direktur utama ada di ruang rapat."
    },
    {
      id: 3,
      japanese: "日本の お酒を 召し上がった ことが ありますか。",
      romaji: "Nihon no osake o meshieagatta koto ga arimasu ka.",
      indonesian: "Apakah Anda pernah menikmati / meminum sake Jepang?"
    },
    {
      id: 4,
      japanese: "どうぞ こちらから お入り ください。",
      romaji: "Douzo kochira kara ohairi kudasai.",
      indonesian: "Silakan masuk lewat sebelah sini."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "部長は 何時ごろ 出社なさいますか。",
      answer: "……9時半ごろ いらっしゃる 予定です。",
      romaji: "Buchou wa nanji goro shussha nasaimasu ka? ... Kuji-han goro irassharu yotei desu.",
      indonesian: "Sekitar jam berapa Kepala Bagian akan tiba di kantor? ... Rencananya beliau akan hadir sekitar pukul 09.30."
    },
    {
      id: 2,
      question: "お名前は 何と おっしゃいますか。",
      answer: "……マイク・ミラーと 申します。",
      romaji: "Onamae wa nan to osshaimasu ka? ... Maiku Miraa to moushimasu.",
      indonesian: "Siapakah nama terhormat Anda? ... Nama saya Mike Miller."
    },
    {
      id: 3,
      question: "社長は もう この 資料を ご覧に なりましたか。",
      answer: "……はい、先ほど じっくり 読まれて いました。",
      romaji: "Shachou wa mou kono shiryou o goran ni narimashita ka? ... Hai, sakihodo jikkuri yomarete imashita.",
      indonesian: "Apakah Direktur sudah memeriksa dokumen ini? ... Ya, barusan beliau membacanya dengan saksama."
    },
    {
      id: 4,
      question: "中村先生の ご住所を ご存じですか。",
      answer: "……いいえ、存じません。",
      romaji: "Nakamura-sensei no gojuusho o gozonji desu ka? ... Iie, zonjimasen.",
      indonesian: "Apakah Anda mengetahui alamat tempat tinggal Dokter/Sensei Nakamura? ... Tidak, saya tidak mengetahuinya."
    },
    {
      id: 5,
      question: "足元が 滑りやすくなって おりますので、ご注意 ください。",
      answer: "……ありがとうございます。気をつけます。",
      romaji: "Ashimoto ga suberiyasuku natte orimasu node, gochuui kudasai. ... Arigatou gozaimasu. Ki o tsukemasu.",
      indonesian: "Lantainya agak licin, mohon berhati-hati. ... Terima kasih banyak. Saya akan berhati-hati."
    }
  ],
  tataBahasa: [
    {
      point: 1,
      title: "Pola Reguler Sonkeigo (お + Masu-stem + に なります)",
      polaFormat: "お + [Akar Kata Kerja / Masu-stem] + に なります",
      explanation: "Pola bentuk terhormat reguler yang digunakan untuk Kata Kerja Golongan I dan Golongan II. Cara pembentukannya adalah menambahkan awalan penghormatan お sebelum bentuk akar (masu-stem), kemudian diikuti oleh に なります.\nContoh:\n- 帰ります -> お帰りに なります\n- 読みます -> お読みに なります\n- 待ちます -> お待ちに なります\nCatatan: Pola ini tidak digunakan untuk kata kerja bersuku kata tunggal (seperti 見ます, 寝ます) atau kata kerja yang memiliki bentuk khusus.",
      examples: [
        {
          japanese: "先生は 新しい 車を お買いに なりました。",
          romaji: "Sensei wa atarashii kuruma o okai ni narimashita.",
          indonesian: "Sensei telah membeli mobil baru."
        },
        {
          japanese: "社長は もう 切符を お手配に なりましたか。",
          romaji: "Shachou wa mou kippu o otehai ni narimashita ka.",
          indonesian: "Apakah Bapak Direktur sudah memesan tiketnya?"
        }
      ]
    },
    {
      point: 2,
      title: "Kata Kerja Khusus Sonkeigo (特別尊敬語)",
      polaFormat: "Kata Kerja Khusus Sonkeigo (いらっしゃいます / 召し上がります / ご覧になります / おっしゃいます, dll.)",
      explanation: "Beberapa kata kerja pokok memiliki bentuk khusus yang kedudukannya lebih tinggi dan sopan dibanding rumus pola reguler:\n- 行きます / 来ます / います -> いらっしゃいます (おいでになります)\n- 食べます / 飲みます -> 召し上がります (めしあがります)\n- 言います -> おっしゃいます\n- 見ます -> ご覧に なります (ごらんになります)\n- 知って います -> ご存じです (ごぞんじです)\n- します -> なさいます\n- くれます -> くださいます",
      examples: [
        {
          japanese: "社長は いつ アメリカへ いらっしゃいますか。",
          romaji: "Shachou wa itsu Amerika e irasshaimasu ka.",
          indonesian: "Kapan Bapak Direktur akan pergi ke Amerika?"
        },
        {
          japanese: "部長が 美味しい お菓子を くだいました。",
          romaji: "Buchou ga oishii okashi o kudasaimashita.",
          indonesian: "Kepala Bagian telah memberikan kue lezat kepada saya."
        }
      ]
    },
    {
      point: 3,
      title: "Permintaan / Instruksi Sopan (お〜ください / ご〜ください)",
      polaFormat: "お + [Masu-stem] + ください\nご + [Kata Benda Kango] + ください",
      explanation: "Untuk meminta lawan bicara atau tamu melakukan sesuatu secara sangat santun:\n- Kata Kerja Wago (Gol. I & II): お + [Masu-stem] + ください (contoh: お待ち ください, お掛け ください).\n- Kata Kerja Kango (Gol. III / Sino-Jepang): ご + [Kango] + ください (contoh: ご連絡 ください, ご注意 ください, ご利用 ください).\n*Pengecualian kata serapan Jepang murni tertentu: ご覧ください (dari 見てください).",
      examples: [
        {
          japanese: "少々 お待ち ください。",
          romaji: "Shoushou omachi kudasai.",
          indonesian: "Mohon tunggu sebentar."
        },
        {
          japanese: "こちらの 連絡先へ ご連絡 ください。",
          romaji: "Kochira no renrakusaki e gorenraku kudasai.",
          indonesian: "Silakan hubungi kontak berikut ini."
        }
      ]
    }
  ],
  percakapan: {
    title: "よろしく お伝え ください",
    situasi: "Matsumoto-buchou berbicara dengan bawahannya yang akan mengunjungi dosen universitas, dan menitipkan salam hormat.",
    tokoh: ["中村", "松本"],
    dialogs: [
      {
        speaker: "中村",
        role: "Bawahan",
        japanese: "松本部長、ちょっと よろしいでしょうか。",
        romaji: "Matsumoto-buchou, chotto yoroshii deshou ka.",
        indonesian: "Bapak Kepala Bagian Matsumoto, apakah ada waktu luang sebentar?"
      },
      {
        speaker: "松本",
        role: "Kepala Bagian",
        japanese: "ああ、中村さん。何ですか。",
        romaji: "Aa, Nakamura-san. Nan desu ka.",
        indonesian: "Ah, Nakamura-san. Ada apa?"
      },
      {
        speaker: "中村",
        role: "Bawahan",
        japanese: "実は 今週末、大学の 恩師の 小林先生の お宅へ 伺う ことに なりました。",
        romaji: "Jitsu wa konshuumatsu, daigaku no onshi no Kobayashi-sensei no otaku e ukagau koto ni narimashita.",
        indonesian: "Sebenarnya akhir pekan ini saya berencana berkunjung ke kediaman guru pembimbing saya semasa kuliah, Kobayashi-sensei."
      },
      {
        speaker: "松本",
        role: "Kepala Bagian",
        japanese: "ほう、小林先生ですか。先生は お元気に していらっしゃいますか。",
        romaji: "Hou, Kobayashi-sensei desu ka. Sensei wa ogenki ni shite irasshaimasu ka.",
        indonesian: "Oho, Kobayashi-sensei ya. Apakah beliau dalam keadaan sehat walafiat?"
      },
      {
        speaker: "中村",
        role: "Bawahan",
        japanese: "ええ、この春 新しい 本を 出版なさった そうです。",
        romaji: "Ee, kono haru atarashii hon o shuppan nasatta sou desu.",
        indonesian: "Ya, katanya musim semi ini beliau telah menerbitkan buku baru."
      },
      {
        speaker: "松本",
        role: "Kepala Bagian",
        japanese: "そうですか。先生には 昔 仕事で 大変 お世話に なりましたからね。",
        romaji: "Sou desu ka. Sensei ni wa mukashi shigoto de taihen osewa ni narimashita kara ne.",
        indonesian: "Begitu ya. Dulu saya banyak sekali berutang budi kepada beliau dalam pekerjaan."
      },
      {
        speaker: "中村",
        role: "Bawahan",
        japanese: "部長から 何か ご伝言は ございますか。",
        romaji: "Buchou kara nanika godengon wa gozaimasu ka.",
        indonesian: "Apakah ada pesan yang ingin Bapak sampaikan?"
      },
      {
        speaker: "松本",
        role: "Kepala Bagian",
        japanese: "では、くれぐれも よろしく お伝え ください。",
        romaji: "Dewa, kureguremo yoroshiku otsutae kudasai.",
        indonesian: "Kalau begitu, tolong sampaikan salam hormat saya yang sebesar-besarnya kepada beliau."
      },
      {
        speaker: "中村",
        role: "Bawahan",
        japanese: "かしこまりました。必ず お伝えいたします。",
        romaji: "Kashikomarimashita. Kanarazu otsutae itashimasu.",
        indonesian: "Baik, saya mengerti. Pasti akan saya sampaikan."
      }
    ]
  }
};
