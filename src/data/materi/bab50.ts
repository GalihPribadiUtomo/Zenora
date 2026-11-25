import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 50,
  title: "Bahasa Rendah Hati (謙譲語: Kenjougo) & Kesopanan Bisnis",
  subTitle: "重い 荷物を お持ちします・敬語体系（謙譲語と丁寧語）",
  summary: "Menggunakan bahasa rendah hati Kenjougo (謙譲語) untuk merendahkan posisi diri sendiri dan perbuatan pihak sendiri demi menghormati lawan bicara, serta ragam bahasa sangat sopan Teineigo (丁寧語) dalam etika komunikasi bisnis Jepang.",
  polaKalimat: [
    {
      id: 1,
      japanese: "重い 荷物を お持ちします。",
      romaji: "Omoi nimotsu o omochishimasu.",
      indonesian: "Saya bawakan barang bawaan Anda yang berat."
    },
    {
      id: 2,
      japanese: "来月 アメリカへ 参ります。",
      romaji: "Raigetsu Amerika e mairimasu.",
      indonesian: "Bulan depan saya akan pergi ke Amerika."
    },
    {
      id: 3,
      japanese: "マイク・ミラーと 申します。IMCの 社員で ございます。",
      romaji: "Maiku Miraa to moushimasu. IMC no shain de gozaimasu.",
      indonesian: "Nama saya Mike Miller. Saya adalah staf dari IMC."
    },
    {
      id: 4,
      japanese: "お手洗いは あちらの 突き当たりに ございます。",
      romaji: "Otearai wa achira no tsukiatari ni gozaimasu.",
      indonesian: "Toilet berada di ujung lorong sebelah sana."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "その 荷物は 重そうですね。お持ちしましょうか。",
      answer: "……すみません。助かります。よろしく お願いします。",
      romaji: "Sono nimotsu wa omosou desu ne. Omochishimashou ka? ... Sumimasen. Tasukarimasu. Yoroshiku onegaishimasu.",
      indonesian: "Barang itu kelihatannya berat ya. Bolehkah saya bawakan? ... Terima kasih, sangat membantu. Tolong bantu ya."
    },
    {
      id: 2,
      question: "今日の 予定を ご説明いたしましょうか。",
      answer: "……ええ、10分後に 会議室で お願いします。",
      romaji: "Kyou no yotei o gosetsumei itashimashou ka? ... Ee, juppun-go ni kaigishitsu de onegaishimasu.",
      indonesian: "Bolehkah saya jelaskan jadwal hari ini? ... Ya, tolong jelaskan 10 menit lagi di ruang rapat."
    },
    {
      id: 3,
      question: "社長は どちらに いらっしゃいますか。",
      answer: "……社長は ただいま 席を 外して おります。",
      romaji: "Shachou wa dochira ni irasshaimasu ka? ... Shachou wa tadaima seki o hazushite orimasu.",
      indonesian: "Bapak Direktur sedang ada di mana? ... Direktur saat ini sedang tidak berada di tempat duduknya."
    },
    {
      id: 4,
      question: "お名前を 伺っても よろしいでしょうか。",
      answer: "……パワー電気の 田中と 申します。",
      romaji: "Onamae o ukagatte mo yoroshii deshou ka? ... Pawaa Denki no Tanaka to moushimasu.",
      indonesian: "Bolehkah saya menanyakan nama Anda? ... Saya Tanaka dari Power Electric."
    },
    {
      id: 5,
      question: "お電話番号を 教えて いただけますか。",
      answer: "……はい、03-1234-5678で ございます。",
      romaji: "Odenwa bangou o oshiete itadakemasu ka? ... Hai, zero-san no ichi-ni-san-yon no go-roku-nana-hachi de gozaimasu.",
      indonesian: "Bisakah memberitahukan nomor telepon Anda? ... Ya, nomor saya 03-1234-5678."
    }
  ],
  tataBahasa: [
    {
      point: 1,
      title: "Pola Reguler Kenjougo I (お/ご + Masu-stem + します/いたします)",
      polaFormat: "お + [Masu-stem] + します / いたします\nご + [Kata Benda Kango] + します / いたします",
      explanation: "Pola ini digunakan untuk perbuatan yang dilakukan oleh pembicara (atau pihak pembicara) yang ditujukan kepada pihak lawan bicara atau orang yang dihormati:\n- Kata Kerja Asli Jepang (Wago / Gol. I & II): お + [Masu-stem] + します / いたします.\n  Contoh: 持ちます -> お持ちします; 案内します -> ご案内します; 貸します -> お貸しします.\n- Kata Kerja Asal Tionghoa (Kango / Gol. III): ご + [Kango-stem] + します / いたします.\n  Contoh: 連絡します -> ご連絡いたします; 説明します -> ご説明いたします.\nPenggunaan いたします jauh lebih merendah dan sopan dibanding します.",
      examples: [
        {
          japanese: "駅まで 車で お送りいたします。",
          romaji: "Eki made kuruma de ookuri itashimasu.",
          indonesian: "Saya akan mengantar Anda sampai stasiun dengan mobil."
        },
        {
          japanese: "明日の 予定表を メールで ご送付いたします。",
          romaji: "Ashita no yoteihyou o meeru de gosoufu itashimasu.",
          indonesian: "Saya akan mengirimkan jadwal besok melalui email."
        }
      ]
    },
    {
      point: 2,
      title: "Kata Kerja Khusus Kenjougo (特別謙譲語)",
      polaFormat: "Kata Kerja Khusus Kenjougo (参ります / おります / 申します / いただきます / 拝見します, dll.)",
      explanation: "Bentuk khusus yang digunakan untuk merendahkan diri pembicara demi menghormati lawan bicara:\n- 行きます / 来ます -> 参ります (まいります)\n- います -> おります\n- 食べます / 飲みます / もらいます -> いただきます\n- 言います -> 申します (もうします)\n- します -> いたします\n- 見ます -> 拝見します (はいけんします)\n- 会います -> お目に かかります\n- 聞きます / 訪問します (bertamu) -> 伺います (うかがいます)\n- 知って います -> 存じて おります (ぞんじております)",
      examples: [
        {
          japanese: "明日、午後 2時に そちらへ 伺います。",
          romaji: "Ashita, gogo niji ni sochira e ukagaimasu.",
          indonesian: "Besok saya akan berkunjung ke tempat Anda pukul 14.00."
        },
        {
          japanese: "お手紙を 拝見いたしました。",
          romaji: "Otegami o haiken itashimashita.",
          indonesian: "Saya telah membaca / mencermati surat dari Anda."
        }
      ]
    },
    {
      point: 3,
      title: "Ragam Bahasa Sangat Sopan (丁寧語: でございます・ございます)",
      polaFormat: "[Kata Benda] + でございます\n[Kata Benda] + が ございます",
      explanation: "Teineigo digunakan untuk memperhalus gaya bahasa pembicara secara umum demi kesantunan:\n- です -> でございます (Contoh: こちらが 契約書で ございます)\n- あります -> ございます (Contoh: 何か ご質問は ございますか)\n- いいですか -> よろしいでしょうか",
      examples: [
        {
          japanese: "こちらが 新しい カタログで ございます。",
          romaji: "Kochira ga atarashii katarogu de gozaimasu.",
          indonesian: "Ini adalah katalog terbaru kami."
        },
        {
          japanese: "何か ご不明な 点は ございますでしょうか。",
          romaji: "Nanika gofumei na ten wa gozaimasu deshou ka.",
          indonesian: "Apakah ada hal yang kurang jelas?"
        }
      ]
    }
  ],
  percakapan: {
    title: "心から 感謝いたします",
    situasi: "Miller-san memberikan pidato perpisahan di hadapan rekan kerja dan pimpinan kantor IMC sebelum kembali ke Amerika.",
    tokoh: ["司会", "ミラー"],
    dialogs: [
      {
        speaker: "司会",
        role: "Pembawa Acara",
        japanese: "それでは、本日で 任務を 終えられた ミラーさんから、一言 ご挨拶を いただきます。",
        romaji: "Soredewa, honjitsu de ninmu o oerareta Miraa-san kara, hitokoto goaisatsu o itadakimasu.",
        indonesian: "Baiklah, selanjutnya mari kita dengarkan sambutan dari Miller-san yang telah menyelesaikan masa tugasnya hari ini."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "皆様、本日は お忙しい中、このような 温かい 会を 開いて いただき、誠に ありがとうございます。",
        romaji: "Minasama, honjitsu wa oisogashii naka, kono you na atatakai kai o hiraite itadaki, makoto ni arigatou gozaimasu.",
        indonesian: "Hadirin sekalian, terima kasih yang sebesar-besarnya karena di tengah kesibukan Anda sekalian telah berkenan mengadakan pertemuan yang hangat ini untuk saya."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "3年前に ニューヨークから 参りまして、最初は 言葉も よく 分からず、皆様に ご迷惑ばかり おかけして おりました。",
        romaji: "Sannen mae ni Nyuu Yooku kara mairimashite, saisho wa kotoba mo yoku wakarazu, minasama ni gomeiwaku bakari okake shite orimashita.",
        indonesian: "Tiga tahun lalu saya datang dari New York, awalnya saya belum memahami bahasa dengan baik dan terus-menerus merepotkan Anda sekalian."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "しかし、社長をはじめ、先輩方の 温かい ご指導のおかげで、無事に 任務を 果たすことが できました。",
        romaji: "Shikashi, shachou o hajime, senpaigata no atatakai goshidou no okage de, buji ni ninmu o hatasu koto ga dekimashita.",
        indonesian: "Namun berkat bimbingan hangat dari Bapak Direktur serta para senior sekalian, saya dapat menuntaskan tugas saya dengan selamat."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "日本で 過ごした 日々は、わたしにとって 一生の 宝物で ございます。",
        romaji: "Nihon de sugoshita hibi wa, watashi ni totte isshou no takaramono de gozaimasu.",
        indonesian: "Hari-hari yang saya lalui di Jepang merupakan harta berharga seumur hidup bagi saya."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "皆様の ご健康と、会社の ますますの ご発展を 心から お祈り申し上げます。本当に ありがとうございました。",
        romaji: "Minasama no gokenkou to, kaisha no masumasu no gohatten o kokoro kara oinori moushiagemasu. Hontou ni arigatou gozaimashita.",
        indonesian: "Dari lubuk hati yang paling dalam, saya berdoa untuk kesehatan Anda sekalian dan kemajuan perusahaan yang semakin gemilang. Terima kasih banyak!"
      }
    ]
  }
};
