import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 24,
  title: "Memberi & Menerima Bantuan (授受表現)",
  subTitle: "手伝って くれませんか・あげます・もらいます・くれます",
  summary: "Menyatakan kebaikan atau perbuatan yang dilakukan untuk orang lain (〜て あげます), menerima bantuan (〜て もらいます), dan orang lain berbuat baik untuk kita (〜て くれます).",
  polaKalimat: [
    {
      id: 1,
      japanese: "佐藤さんは わたしに クリスマスカードを くれました。",
      romaji: "Satou-san wa watashi ni kurisumasu kaado o kuremashita.",
      indonesian: "Sato-san memberi saya kartu Natal."
    },
    {
      id: 2,
      japanese: "わたしは 木村さんに 本を 貸して あげました。",
      romaji: "Watashi wa Kimura-san ni hon o kashite agemashita.",
      indonesian: "Saya meminjamkan buku kepada Kimura-san."
    },
    {
      id: 3,
      japanese: "わたしは 山田さんに 漢字を 教えて もらいました。",
      romaji: "Watashi wa Yamada-san ni kanji o oshiete moraimashita.",
      indonesian: "Saya diajari huruf kanji oleh Yamada-san."
    },
    {
      id: 4,
      japanese: "ミラーさんは わたしの 荷物を 持って くれました。",
      romaji: "Miraa-san wa watashi no nimotsu o motte kuremashita.",
      indonesian: "Miller-san membawakan barang bawaan saya (untuk saya)."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "その ネクタイ、素敵ですね。",
      answer: "……ええ、誕生日に 妹が くれました。",
      romaji: "Sono nekutai, suteki desu ne. ... Ee, tanjoubi ni imouto ga kuremashita.",
      indonesian: "Dasi itu bagus sekali ya. ... Ya, adik perempuan saya memberikannya saat ulang tahun."
    },
    {
      id: 2,
      question: "パーティーの 料理は 自分で 作りましたか。",
      answer: "……いいえ、みんなに 手伝って もらいました。",
      romaji: "Paatii no ryouri wa jibun de tsukurimashita ka? ... Iie, minna ni tetsudatte moraimashita.",
      indonesian: "Apakah makanan pesta dibuat sendiri? ... Tidak, saya dibantu oleh teman-teman semua."
    },
    {
      id: 3,
      question: "大阪城へ どうやって 行きましたか。",
      answer: "……田中さんが 車で 送って くれました。",
      romaji: "Oosakajou e douyatte ikimashita ka? ... Tanaka-san ga kuruma de okutte kuremashita.",
      indonesian: "Bagaimana Anda pergi ke Kastil Osaka? ... Tanaka-san mengantarkan saya dengan mobilnya."
    },
    {
      id: 4,
      question: "引っ越しは 大変でしたね。",
      answer: "……はい、でも 友達が 手伝って くれたので、助かりました。",
      romaji: "Hikkoshi wa taihen deshita ne. ... Hai, demo tomodachi ga tetsudatte kureta node, tasukarimashita.",
      indonesian: "Pindahan rumah pasti berat ya. ... Ya, tetapi karena teman membantu saya, jadi sangat terbantu."
    }
  ],
  percakapan: {
    title: "手伝って くれませんか (Maukah Membantu Saya?)",
    situasi: "Wang-san akan pindah rumah minggu depan dan meminta bantuan Miller-san beserta teman-teman untuk proses pindahan.",
    tokoh: ["ミラー", "ワン"],
    dialogs: [
      {
        speaker: "ワン",
        role: "Teman",
        japanese: "ミラーさん、来週の日曜日、引っ越しを するんですが、ちょっと 手伝って くれませんか。",
        romaji: "Miraa-san, raishuu no nichiyoubi, hikkoshi o suru ndesu ga, chotto tetsudatte kuremasen ka.",
        indonesian: "Miller-san, hari Minggu minggu depan saya mau pindahan rumah, maukah Anda membantu saya sebentar?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "いいですよ。ほかに だれか 手伝いに 来ますか。",
        romaji: "Ii desu yo. Hoka ni dareka tetsudai ni kimasu ka.",
        indonesian: "Boleh saja. Selain saya apakah ada orang lain yang datang membantu?"
      },
      {
        speaker: "ワン",
        role: "Teman",
        japanese: "サントスさんと カリナさんも 来て くれます。",
        romaji: "Santosu-san to Karina-san mo kite kuremasu.",
        indonesian: "Santos-san dan Karina-san juga bersedia datang membantu saya."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "そうですか。何か 持って 行きましょうか。",
        romaji: "Sou desu ka. Nani ka motte ikimashou ka.",
        indonesian: "Begitu ya. Apakah perlu saya bawakan sesuatu?"
      },
      {
        speaker: "ワン",
        role: "Teman",
        japanese: "いいえ、車も 友達に 貸して もらいますから、何も 要りません。",
        romaji: "Iie, kuruma mo tomodachi ni kashite moraimasu kara, nani mo irimasen.",
        indonesian: "Tidak usah, mobil pun sudah saya pinjam dari teman, jadi tidak perlu membawa apa-apa."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Perbedaan くれます vs あげます (Arah Pemberian)",
      polaFormat: "Orang Lain + は/が + わたし(keluarga)に + Benda + を くれます",
      explanation: "Berbeda dari あげます yang berarti 'Saya memberi kepada orang lain' (arah keluar),「くれます」digunakan khusus ketika 'Orang lain memberi sesuatu kepada SAYA (atau keluarga saya)' (arah masuk ke diri kita).",
      examples: [
        {
          japanese: "部長は わたしに 本を くれました。",
          romaji: "Buchou wa watashi ni hon o kuremashita.",
          indonesian: "Kepala bagian memberi saya sebuah buku."
        }
      ]
    },
    {
      point: 2,
      title: "Berbuat Kebaikan untuk Orang Lain: 〜て あげます",
      polaFormat: "Pelaku (Saya/Orang) + は + Penerima + に + KK Bentuk-Te + あげます",
      explanation: "Digunakan saat kita berbuat suatu jasa/kebaikan kepada orang lain (membantu, meminjamkan, mengantarkan). Catatan etika: Hindari penggunaan langsung「〜てあげます」kepada atasan/guru karena terdengar menggurui/sok berjasa; lebih sopan tawarkan dengan「〜ましょうか」.",
      examples: [
        {
          japanese: "わたしは おばあさんに 席を 譲って あげました。",
          romaji: "Watashi wa obaasan ni seki o yuzutte agemashita.",
          indonesian: "Saya memberikan tempat duduk kepada seorang nenek."
        }
      ]
    },
    {
      point: 3,
      title: "Menerima Jasa Bantuan (Subjek: Saya): 〜て もらいます",
      polaFormat: "Saya + は + Pemberi Jasa + に + KK Bentuk-Te + もらいます",
      explanation: "Menunjukkan rasa syukur karena diri kita mendapatkan/menerima jasa perbuatan baik dari seseorang ('Saya dibantu / diajari / diantar oleh...').",
      examples: [
        {
          japanese: "友達に 自転車を 直して もらいました。",
          romaji: "Tomodachi ni jitensha o naoshite moraimashita.",
          indonesian: "Sepeda saya diperbaiki oleh teman (Saya menerima jasa perbaikan)."
        }
      ]
    },
    {
      point: 4,
      title: "Orang Lain Berbuat Baik untuk Kita (Subjek: Orang Lain): 〜て くれます",
      polaFormat: "Orang Lain + が + (わたしに) + KK Bentuk-Te + くれます",
      explanation: "Menekankan bahwa orang lain berinisiatif melakukan perbuatan baik bagi diri kita atau keluarga kita. Jika ingin meminta tolong secara sangat ramah kepada teman, gunakan「〜て くれませんか」.",
      examples: [
        {
          japanese: "姉が 空港まで 迎えに 来て くれました。",
          romaji: "Ane ga kuukou made mukae ni kite kuremashita.",
          indonesian: "Kakak perempuan saya datang menjemput ke bandara untuk saya."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menjaga Kesopanan Saat Memberi Jasa",
    description: "Penggunaan pola「てあげます・てもらいます・てくれます」mencerminkan cara pandang orang Jepang yang selalu melihat interaksi dari sudut pandang 'pihak penerima/pemberi rasa terima kasih'.",
    notes: [
      "Selalu utamakan menyebut jasa orang lain dengan「〜て くれた」untuk menunjukkan rasa terima kasih yang tulus.",
      "Untuk meminta tolong kepada atasan, gunakan bentuk yang lebih hormat lagi (seperti 〜て いただけませんか)."
    ]
  }
};
