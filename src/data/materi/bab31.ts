import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 31,
  title: "Bentuk Maksud / Niat (意向形) & Rencana",
  subTitle: "インターネットを 始めようと 思っています・意向と計画",
  summary: "Aturan perubahan kata kerja ke Bentuk Maksud/Ajakan (意向形 - ikoukei), menyatakan niat yang sudah dipikirkan (〜ようと 思っています), dan rencana pasti (〜つもりです / 〜予定です).",
  polaKalimat: [
    {
      id: 1,
      japanese: "夏休みは 友達と 海へ 行こう！",
      romaji: "Natsuyasumi wa tomodachi to umi e ikou!",
      indonesian: "Liburan musim panas nanti ayo pergi ke pantai bersama teman! (kasual)"
    },
    {
      id: 2,
      japanese: "来月から 日本語の 学校に 入ろうと 思っています。",
      romaji: "Raigetsu kara Nihongo no gakkou ni hairou to omotte imasu.",
      indonesian: "Saya berencana/bermaksud masuk sekolah bahasa Jepang mulai bulan depan."
    },
    {
      id: 3,
      japanese: "国へ 帰ってから、貿易の 会社を 作る つもりです。",
      romaji: "Kuni e kaette kara, boueki no kaisha o tsukuru tsumori desu.",
      indonesian: "Setelah pulang ke negara asal, saya berniat mendirikan perusahaan perdagangan."
    },
    {
      id: 4,
      japanese: "来週の 会議は 午後 2時に 始まる 予定です。",
      romaji: "Raishuu no kaigi wa gogo niji ni hajimaru yotei desu.",
      indonesian: "Rapat minggu depan dijadwalkan mulai jam 2 siang."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "ちょっと 休まない？",
      answer: "……うん、そう しよう。",
      romaji: "Chotto yasumanai? ... Un, sou shiyou.",
      indonesian: "Istirahat sebentar yuk? ... Ya, ayo lakukan begitu."
    },
    {
      id: 2,
      question: "大学を 卒業したら、どう するんですか。",
      answer: "……日本の 会社で 働こうと 思っています。",
      romaji: "Daigaku o sotsugyou shitara, dou suru ndesu ka? ... Nihon no kaisha de hatarakou to omotte imasu.",
      indonesian: "Setelah lulus universitas mau bagaimana? ... Saya berencana ingin bekerja di perusahaan Jepang."
    },
    {
      id: 3,
      question: "今年の 連休は どこかへ 行く つもりですか。",
      answer: "……いいえ、どこへも 行かない つもりです。うちで ゆっくり 休みます。",
      romaji: "Kotoshi no renkyuu wa dokoka e iku tsumori desu ka? ... Iie, doko e mo ikanai tsumori desu. Uchi de yukkuri yasumimasu.",
      indonesian: "Liburan panjang tahun ini berniat pergi ke suatu tempat? ... Tidak, tidak berniat pergi ke mana-mana. Saya istirahat santai di rumah."
    },
    {
      id: 4,
      question: "大阪へは 何時の 飛行機で 行く 予定ですか。",
      answer: "……10時の 便で 行く 予定です。",
      romaji: "Oosaka e wa nanji no hikouki de iku yotei desu ka? ... Juuji no bin de iku yotei desu.",
      indonesian: "Berangkat ke Osaka dijadwalkan naik pesawat jam berapa? ... Dijadwalkan naik penerbangan jam 10."
    }
  ],
  percakapan: {
    title: "インターネットを 始めようと 思っています (Berencana Mulai Internet)",
    situasi: "Miller-san berdiskusi dengan koleganya mengenai keinginannya untuk mulai mempelajari teknologi baru atau kursus tambahan.",
    tokoh: ["ミラー", "佐藤"],
    dialogs: [
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ミラーさん、連休は どこかへ 行くんですか。",
        romaji: "Miraa-san, renkyuu wa dokoka e iku ndesu ka.",
        indonesian: "Miller-san, libur panjang nanti mau pergi ke suatu tempat?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "いいえ、どこへも 行かないで、うちに います。実は、来月から 料理教室に 通おうと 思っています。",
        romaji: "Iie, doko e mo ikanaide, uchi ni imasu. Jitsu wa, raigetsu kara ryouri kyoushitsu ni kayou to omotte imasu.",
        indonesian: "Tidak, saya tidak pergi ke mana-mana dan di rumah saja. Sebenarnya mulai bulan depan saya berencana mengikuti kursus memasak."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "へえ、いいですね！ どんな 料理を 作る つもりですか。",
        romaji: "Hee, ii desu ne! Donna ryouri o tsukuru tsumori desu ka.",
        indonesian: "Wah, bagus sekali! Masakan apa yang berniat Anda buat?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "和食と パスタです。毎週 土曜日に 習いに 行く 予定です。",
        romaji: "Washoku to pasuta desu. Maishuu doyoubi ni narai ni iku yotei desu.",
        indonesian: "Masakan Jepang (Washoku) dan pasta. Dijadwalkan setiap hari Sabtu pergi belajar ke sana."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "上手に なったら、ぜひ わたしたちにも 作って くださいよ。",
        romaji: "Jouzu ni nattara, zehi watashitachi ni mo tsukutte kudasai yo.",
        indonesian: "Kalau sudah jago nanti, pastikan buatkan juga untuk kami ya!"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Pembentukan Bentuk Maksud / Ajakan Kasual (意向形)",
      polaFormat: "Gol. I (vokal 'i' ➔ 'o'+う), Gol. II (ます ➔ よう), Gol. III (しよう / こよう)",
      explanation: "Bentuk Maksud adalah padanan kasual dari「〜ましょう」. Golongan I mengubah suku kata bunyi 'i' menjadi baris 'o' + う (Contoh: 行きます➔行こう, 飲みます➔飲もう, 話します➔話そう, 待ちます➔待とう). Golongan II mengganti ます dengan よう (食べます➔食べよう, 見ます➔見よう). Golongan III: します➔しよう, 来ます➔来よう(こよう).",
      examples: [
        {
          japanese: "みんなで 一緒に 頑張ろう！",
          romaji: "Minna de issho ni ganbarou!",
          indonesian: "Mari kita semua berjuang bersama!"
        }
      ]
    },
    {
      point: 2,
      title: "Menyatakan Niat / Rencana Pribadi: KK Bentuk Maksud + と 思っています",
      polaFormat: "KK Bentuk Maksud (意向形) + と 思っています",
      explanation: "Menyatakan maksud atau keinginan terencana yang sudah ada di benak pembicara ('Saya bermaksud / berencana untuk...'). Menggunakan「〜と思っています」(continuous) menunjukkan bahwa niat tersebut telah terpikirkan sejak beberapa waktu lalu.",
      examples: [
        {
          japanese: "今年は 漢字を 500字 覚えようと 思っています。",
          romaji: "Kotoshi wa kanji o gohyaku-ji oboeyou to omotte imasu.",
          indonesian: "Tahun ini saya berencana menghafal 500 huruf kanji."
        }
      ]
    },
    {
      point: 3,
      title: "Tekad Kuat (〜つもりです) vs Jadwal Resmi (〜予定です)",
      polaFormat: "[KK Kamus / KK-Nai] + つもりです / [KK Kamus / KBの] + 予定です",
      explanation: "「〜つもりです」menekankan niat bulat atau tekad pribadi yang lebih pasti daripada「〜ようと思っています」. Sementara「〜予定です」menunjukkan jadwal acara, penerbangan, atau rencana organisasi yang sudah ditetapkan.",
      examples: [
        {
          japanese: "もう お酒は 飲まない つもりです。",
          romaji: "Mou osake wa nomanai tsumori desu.",
          indonesian: "Saya bertekad tidak akan minum alkohol lagi."
        },
        {
          japanese: "旅行は 1週間ぐらいの 予定です。",
          romaji: "Ryokou wa isshuukan gurai no yotei desu.",
          indonesian: "Perjalanan wisata dijadwalkan sekitar 1 minggu."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Perencanaan & Ketepatan Jadwal (予定)",
    description: "Di dunia kerja Jepang, membedakan antara harapan pribadi (〜ようと思っています), niat pribadi (〜つもりです), dan jadwal resmi tim (〜予定です) membantu komunikasi bisnis lebih transparan.",
    notes: [
      "Perhatian: Bentuk「〜と 思っています」boleh dipakai untuk menceritakan niat orang ketiga (seperti: 山田さんは来月結婚しようと思っています), namun「〜つもりです」lebih sering untuk pembicara pertama atau bertanya kepada lawan bicara."
    ]
  }
};
