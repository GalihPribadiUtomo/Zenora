import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 46,
  title: "Tepat Momen Aksi (〜ところ) & Seharusnya (〜はず)",
  subTitle: "今 始まった ところです・アスペクトと確信",
  summary: "Menyatakan momen waktu yang tepat pada awal, pertengahan, atau akhir tindakan (〜ところです), peristiwa yang baru saja terjadi secara subjektif (〜ばかりです), dan keyakinan logis (〜はずです).",
  polaKalimat: [
    {
      id: 1,
      japanese: "これから 昼ご飯を 食べる ところです。",
      romaji: "Korekara hirugohan o taberu tokoro desu.",
      indonesian: "Baru saja hendak makan siang sekarang."
    },
    {
      id: 2,
      japanese: "いま 資料を コピーして いる ところです。",
      romaji: "Ima shiryou o kopii shite iru tokoro desu.",
      indonesian: "Tepat sekarang sedang memfotokopi dokumen."
    },
    {
      id: 3,
      japanese: "たった今、電車が 出た ところです。",
      romaji: "Tatta ima, densha ga deta tokoro desu.",
      indonesian: "Barusan detik ini, keretanya baru saja berangkat."
    },
    {
      id: 4,
      japanese: "ミラーさんは 日本へ 来た ばかりです。",
      romaji: "Miraa-san wa Nihon e kita bakari desu.",
      indonesian: "Miller-san baru saja tiba di Jepang (masih terasa baru)."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "会議は もう 終わりましたか。",
      answer: "……いいえ、いま 始まった ところです。",
      romaji: "Kaigi wa mou owarimashita ka? ... Iie, ima hajimatta tokoro desu.",
      indonesian: "Apakah rapatnya sudah selesai? ... Belum, baru saja dimulai."
    },
    {
      id: 2,
      question: "もう 空港へ 出かけましたか。",
      answer: "……いいえ、今 荷物を まとめて、これから 出かける ところです。",
      romaji: "Mou kuukou e dekakemashita ka? ... Iie, ima nimotsu o matomete, korekara dekakeru tokoro desu.",
      indonesian: "Apakah sudah berangkat ke bandara? ... Belum, baru saja merapikan tas, persis mau berangkat sekarang."
    },
    {
      id: 3,
      question: "この テレビは よく 壊れますね。",
      answer: "……おかしいですね。先月 買った ばかりなのに。",
      romaji: "Kono terebi wa yoku kowaremasu ne. ... Okashii desu ne. Sengetsu katta bakari nanoni.",
      indonesian: "TV ini sering rusak ya. ... Aneh ya. Padahal baru saja dibeli bulan lalu lho."
    },
    {
      id: 4,
      question: "きょうの パーティーに サントスさんは 来ますか。",
      answer: "……ええ、きのう 約束しましたから、来る はずです。",
      romaji: "Kyou no paatii ni Santosu-san wa kimasu ka? ... Ee, kinou yakusoku shimashita kara, kuru hazu desu.",
      indonesian: "Apakah Santos-san datang ke pesta hari ini? ... Ya, karena kemarin sudah berjanji, seharusnya dia datang."
    }
  ],
  percakapan: {
    title: "もうすぐ 着く はずです (Seharusnya Sebentar Lagi Tiba)",
    situasi: "Karyawan perusahaan menantikan kiriman paket dokumen penting atau teknisi perbaikan yang dijanjikan datang pukul 2.",
    tokoh: ["山下", "ミラー"],
    dialogs: [
      {
        speaker: "山下",
        role: "Rekan Kerja",
        japanese: "ミラーさん、さっき 注文した 部品は もう 届きましたか。",
        romaji: "Miraa-san, sakki chuumon shita buhin wa mou todokimashita ka.",
        indonesian: "Miller-san, suku cadang yang dipesan tadi apakah sudah tiba?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "まだです。でも、さっき 配送会社に 確認した ところです。もうすぐ 着く はずですよ。",
        romaji: "Mada desu. Demo, sakki haisougaisha ni kakunin shita tokoro desu. Mousugu tsuku hazu desu yo.",
        indonesian: "Belum sih. Tapi barusan saya sudah mengonfirmasi ke perusahaan pengiriman. Seharusnya sebentar lagi tiba kok."
      },
      {
        speaker: "山下",
        role: "Rekan Kerja",
        japanese: "あ、よかった。この 機械は 先週 修理した ばかりなのに、また 動かなく なったんですか。",
        romaji: "A, yokatta. Kono kikai wa senshuu shuuri shita bakari nanoni, mata ugokanaku natta ndesu ka.",
        indonesian: "Oh, syukurlah. Padahal mesin ini baru saja diperbaiki minggu lalu, kok mati lagi ya?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "そうなんです。ガス会社の サービスセンターから 人が 来て、いま 見ている ところです。",
        romaji: "Sou nandesu. Gasu-gaisha no saabisusentaa kara hito ga kite, ima mite iru tokoro desu.",
        indonesian: "Benar sekali. Staf dari pusat layanan perusahaan gas sudah datang, dan sekarang sedang memeriksanya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Tiga Fase Momen Tindakan: 〜ところです",
      polaFormat: "1) KK Kamus + ところです (baru mau mulai) | 2) KK-ている + ところです (tepat sedang berlangsung) | 3) KK-Ta + ところです (baru saja selesai detik ini)",
      explanation: "Digunakan untuk memfokuskan titik waktu spesifik sebuah aksi. Sering diawali kata penegas:「これから」(tepat akan memulai),「今」(sedang berlangsung), atau「たった今」(baru saja tuntas beberapa detik/menit lalu).",
      examples: [
        {
          japanese: "いま 駅に 着いた ところです。",
          romaji: "Ima eki ni tsuita tokoro desu.",
          indonesian: "Saya baru saja tiba di stasiun (detik ini)."
        }
      ]
    },
    {
      point: 2,
      title: "Baru Saja Terjadi (Perasaan Waktu): KK Bentuk-Ta + ばかりです",
      polaFormat: "KK Bentuk-Ta + ばかりです (berfungsi seperti KB/KS-な)",
      explanation: "Menyatakan bahwa menurut perasaan subjektif pembicara, kejadian tersebut belum lama berselang—bahkan meskipun sebenarnya terjadi 1 minggu, 1 bulan, atau 1 tahun lalu (contoh: baru lulus tahun lalu, baru beli kemarin, baru menikah bulan lalu). Di depan「のに」atau kata benda, pakai「ばかりなのに / ばかりの」.",
      examples: [
        {
          japanese: "去年 日本へ 来た ばかりですから、まだ よく 分かりません。",
          romaji: "Kyonen Nihon e kita bakari desu kara, mada yoku wakarimasen.",
          indonesian: "Karena baru datang ke Jepang tahun lalu, saya masih belum begitu mengerti."
        }
      ]
    },
    {
      point: 3,
      title: "Keyakinan Berdasarkan Alasan Logis: 〜はずです",
      polaFormat: "[KK/KS-い Bentuk Biasa] + はずです / [KS-な + な / KB + の] + はずです",
      explanation: "Menyatakan keyakinan pembicara berdasarkan bukti, logika, atau jadwal ('Seharusnya / Mestinya pasti demikian').",
      examples: [
        {
          japanese: "あしたの 飛行機は 9時に 出発する はずです。",
          romaji: "Ashita no hikouki wa kuji ni shuppatsu suru hazu desu.",
          indonesian: "Pesawat besok seharusnya berangkat pukul 9."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Ketepatan Pengiriman Barang di Jepang (宅急便)",
    description: "Di Jepang, layanan kurir seperti Yamato Transport (Kuroneko Yamato) memungkinkan pemesan menentukan rentang jam pengiriman secara tepat (misal 14:00–16:00), sehingga ungkapan「もうすぐ届くはずです」(seharusnya segera tiba) sangat diandalkan.",
    notes: [
      "Perbandingan:「たった今終わったところです」(benar-benar barusan beberapa detik/menit lalu) vs「先月日本に来たばかりです」(bisa minggu/bulan lalu namun terasa baru)."
    ]
  }
};
