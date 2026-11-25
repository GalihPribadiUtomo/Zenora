import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 48,
  title: "Kalimat Kausatif (使役動詞: 〜させます) & Mohon Izin",
  subTitle: "部長は 加藤さんを 大阪へ 出張させます・使役表現",
  summary: "Mengungkapkan tindakan menyuruh, memperbolehkan, atau menginstruksikan seseorang untuk melakukan sesuatu (Bentuk Kausatif 〜させます), serta ungkapan memohon izin dengan sangat sopan (〜させて いただけませんか).",
  polaKalimat: [
    {
      id: 1,
      japanese: "部長は 加藤さんを 大阪へ 出張させます。",
      romaji: "Buchou wa Katou-san o Oosaka e shucchou sasemasu.",
      indonesian: "Kepala bagian menyuruh/menugaskan Kato-san dinas ke Osaka."
    },
    {
      id: 2,
      japanese: "わたしは 娘に ピアノを 習わせます。",
      romaji: "Watashi wa musume ni piano o narawasemasu.",
      indonesian: "Saya menyuruh/mengizinkan anak perempuan saya belajar piano."
    },
    {
      id: 3,
      japanese: "すみませんが、きょうは 早く 帰らせて いただけませんか。",
      romaji: "Sumimasen ga, kyou wa hayaku kaerasete itadakemasen ka.",
      indonesian: "Permisi, hari ini bisakah Anda mengizinkan saya pulang lebih awal?"
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "会議の 資料は 誰が 準備しますか。",
      answer: "……加藤さんに 準備させます。",
      romaji: "Kaigi no shiryou wa dare ga junbi shimasu ka? ... Katou-san ni junbi sasemasu.",
      indonesian: "Siapa yang akan menyiapkan materi rapat? ... Saya akan menugaskan Kato-san untuk menyiapkannya."
    },
    {
      id: 2,
      question: "お子さんに 何か 習い事を させて いますか。",
      answer: "……ええ、水泳と 英語を 習わせて います。",
      romaji: "Okosan ni nanika naraigoto o sasete imasu ka? ... Ee, suiei to eigo o narawasete imasu.",
      indonesian: "Apakah Anda mengikutkan les apa pun untuk anak Anda? ... Ya, saya mengikutkannya les renang dan bahasa Inggris."
    },
    {
      id: 3,
      question: "朝礼の 司会は 誰が しますか。",
      answer: "……今週は 新入社員に 司会を させましょう。",
      romaji: "Chourei no shikai wa dare ga shimasu ka? ... Konshuu wa shinnyuushain ni shikai o sasemashou.",
      indonesian: "Siapa yang akan memimpin apel pagi? ... Minggu ini mari kita tugaskan karyawan baru untuk memimpin."
    },
    {
      id: 4,
      question: "ちょっと 気分が 悪いんですが、保健室へ 行かせて いただけませんか。",
      answer: "……ええ、いいですよ。無理を しないで、ゆっくり 休んで ください。",
      romaji: "Chotto kibun ga warui n desu ga, hokenshitsu e ikasete itadakemasen ka? ... Ee, ii desu yo. Muri o shinaide, yukkuri yasunde kudasai.",
      indonesian: "Saya agak kurang enak badan, bisakah mengizinkan saya pergi ke ruang UKS/kesehatan? ... Ya, silakan. Jangan memaksakan diri dan istirahatlah dengan baik."
    },
    {
      id: 5,
      question: "あすの 結婚式に 出席したいので、会社を 休ませて いただけませんか。",
      answer: "……わかりました。業務の 引き継ぎを 済ませて おいて くださいね。",
      romaji: "Asu no kekkonshiki ni shusseki shitai node, kaisha o yasumasete itadakemasen ka? ... Wakarimashita. Gyoumu no hikitsugi o sumasete oite kudasai ne.",
      indonesian: "Karena saya ingin menghadiri pesta pernikahan besok, bisakah Anda mengizinkan saya libur kerja? ... Baik. Pastikan serah terima tugas Anda sudah diselesaikan ya."
    }
  ],
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Kata Kerja Kausatif (使役動詞)",
      polaFormat: "Golongan I: [akar bunyi -a] + せます\nGolongan II: [akar kata] + させます\nGolongan III: こさせます / させます",
      explanation: "Bentuk kausatif (使役形) digunakan ketika pelaku menyuruh atau mengizinkan pihak lain melakukan suatu perbuatan. Pola perubahannya:\n- Golongan I: Vokal bunyi 'u' diubah menjadi deret vokal 'a' + せます (contoh: 行く -> 行かせます, 書く -> 書かせます, 飲む -> 飲ませます, 話す -> 話させます).\n- Golongan II: Menghilangkan 'る' dan menambahkan 'させます' (contoh: 食べる -> 食べさせます, 見る -> 見させます).\n- Golongan III: 来る (くる) -> 来させます (こさせます); する -> させます.",
      examples: [
        {
          japanese: "先生は 生徒に 漢字を たくさん 書かせます。",
          romaji: "Sensei wa seito ni kanji o takusan kakasemasu.",
          indonesian: "Guru menyuruh murid menulis banyak kanji."
        },
        {
          japanese: "母は 子どもに 野菜を 食べさせました。",
          romaji: "Haha wa kodomo ni yasai o tabesasemashita.",
          indonesian: "Ibu menyuruh anaknya makan sayur."
        }
      ]
    },
    {
      point: 2,
      title: "Partikel pada Pola Kausatif (を / に)",
      polaFormat: "Intransitif: Orang を + KK Kausatif\nTransitif: Orang に + Objek を + KK Kausatif",
      explanation: "Terdapat dua konstruksi partikel utama berdasarkan jenis kata kerja asalnya:\n1. Kata Kerja Intransitif (tidak berobjek): Orang yang disuruh/diberi izin ditandai dengan partikel を.\n   Rumus: [Penyuruh] は [Yang disuruh] を + KK Intransitif Kausatif.\n   Contoh: 部長は 田中さんを アメリカへ 出張させます。\n2. Kata Kerja Transitif (ada objek langsung): Orang yang disuruh ditandai dengan partikel に, sedangkan objek kata kerja tetap ditandai partikel を.\n   Rumus: [Penyuruh] は [Yang disuruh] に [Objek] を + KK Transitif Kausatif.\n   Contoh: 課長は ミラーさんに レポートを まとめさせます。",
      examples: [
        {
          japanese: "父は 弟を 近くの スーパーへ 行かせました。",
          romaji: "Chichi wa otouto o chikaku no suupaa e ikasemashita.",
          indonesian: "Ayah menyuruh adik laki-laki pergi ke supermarket dekat rumah."
        },
        {
          japanese: "先生は 学生に 辞書を 使わせます。",
          romaji: "Sensei wa gakusei ni jisho o tsukawasemasu.",
          indonesian: "Guru memperbolehkan/menyuruh siswa memakai kamus."
        }
      ]
    },
    {
      point: 3,
      title: "Memohon Izin Santun (KK Kausatif-te + いただけませんか)",
      polaFormat: "Kata Kerja (使役形-て) + いただけませんか",
      explanation: "Bentuk kausatif 'te' diikuti oleh いただけませんか merupakan ungkapan yang sangat sopan dan standar dalam dunia kerja untuk memohon izin kepada atasan atau orang lain agar memperbolehkan pembicara melakukan tindakan tersebut. Artinya: 'Bisakah/Sudikah kiranya Anda mengizinkan saya untuk...'.",
      examples: [
        {
          japanese: "この 仕事を わたしに やらせて いただけませんか。",
          romaji: "Kono shigoto o watashi ni yarasete itadakemasen ka.",
          indonesian: "Sudikah kiranya Anda mengizinkan saya mengerjakan pekerjaan ini?"
        },
        {
          japanese: "写真を 撮らせて いただけませんか。",
          romaji: "Shashin o torasete itadakemasen ka.",
          indonesian: "Bolehkah saya meminta izin untuk mengambil foto?"
        }
      ]
    }
  ],
  percakapan: {
    title: "休ませて いただけませんか",
    situasi: "Miller-san memohon izin cuti kepada atasannya, Nakamura-buchou, untuk menghadiri pernikahan temannya.",
    tokoh: ["ミラー", "中村"],
    dialogs: [
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "部長、今 ちょっと よろしいでしょうか。",
        romaji: "Buchou, ima chotto yoroshii deshou ka.",
        indonesian: "Kepala bagian, apakah Anda ada waktu luang sebentar sekarang?"
      },
      {
        speaker: "中村",
        role: "Kepala Bagian",
        japanese: "ん、ミラーさん、何ですか。",
        romaji: "N, Miraa-san, nan desu ka.",
        indonesian: "Ya, Miller-san, ada apa?"
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "実は 来月 友達の 結婚式が ありまして、国へ 帰りたいんですが、1週間ほど 休暇を 取らせて いただけませんか。",
        romaji: "Jitsu wa raigetsu tomodachi no kekkonshiki ga arimashite, kuni e kaeritai n desu ga, isshuukan hodo kyuuka o torasete itadakemasen ka.",
        indonesian: "Sebenarnya bulan depan ada pernikahan teman saya, dan saya ingin pulang ke negara asal, bisakah Anda mengizinkan saya mengambil cuti sekitar 1 minggu?"
      },
      {
        speaker: "中村",
        role: "Kepala Bagian",
        japanese: "友達の 結婚式ですか。いつからですか。",
        romaji: "Tomodachi no kekkonshiki desu ka. Itsu kara desu ka.",
        indonesian: "Pernikahan teman ya. Mulai tanggal berapa?"
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "来月の 15日から 22日までです。",
        romaji: "Raigetsu no juugo-nichi kara nijuuni-nichi made desu.",
        indonesian: "Mulai tanggal 15 hingga 22 bulan depan."
      },
      {
        speaker: "中村",
        role: "Kepala Bagian",
        japanese: "うーん、ちょうど その時期は 新製品の 発表会が あるんだが……。",
        romaji: "Uun, choudo sono jiki wa shinseihin no happyoukai ga aru n da ga...",
        indonesian: "Hmm, persis pada periode itu ada peluncuran produk baru sih..."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "発表会の 準備は 出発する 前に 責任を 持って 全部 終わらせますので。",
        romaji: "Happyoukai no junbi wa shuppatsu suru mae ni sekinin o motte zenbu owarasemasu node.",
        indonesian: "Semua persiapan presentasi akan saya selesaikan dengan penuh tanggung jawab sebelum saya berangkat."
      },
      {
        speaker: "中村",
        role: "Kepala Bagian",
        japanese: "そうか。それなら いいよ。気をつけて 行って 来て ください。",
        romaji: "Sou ka. Sorenara ii yo. Ki o tsukete itte kite kudasai.",
        indonesian: "Begitu ya. Kalau begitu boleh. Hati-hati di jalan ya."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "ありがとうございます。ご迷惑を おかけして、本当に 申し訳ありません。",
        romaji: "Arigatou gozaimasu. Gomeiwaku o okake shite, hontou ni moushiwake arimasen.",
        indonesian: "Terima kasih banyak. Maaf telah merepotkan Anda."
      }
    ]
  }
};
