import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 47,
  title: "Menyampaikan Informasi (〜そうです) & Dugaan (〜ようです)",
  subTitle: "明日は 雨が 降る そうです・伝聞と推定",
  summary: "Menyampaikan kabar atau informasi yang didengar dari sumber lain (kabar berita: 〜そうです) serta membuat dugaan objektif berdasarkan panca indera seperti yang tampak atau terasa (〜ようです).",
  polaKalimat: [
    {
      id: 1,
      japanese: "天気予報に よると、明日は 雨が 降る そうです。",
      romaji: "Tenkiyohou ni yoru to, ashita wa ame ga furu sou desu.",
      indonesian: "Menurut ramalan cuaca, besok katanya akan turun hujan."
    },
    {
      id: 2,
      japanese: "クララさんは 婚約した そうです。",
      romaji: "Kurara-san wa kon'yaku shita sou desu.",
      indonesian: "Katanya Clara-san sudah bertunangan."
    },
    {
      id: 3,
      japanese: "人が 大勢 集まって いますね。事故の ようです。",
      romaji: "Hito ga oozei atsumatte imasu ne. Jiko no you desu.",
      indonesian: "Banyak orang berkumpul ya. Tampaknya terjadi kecelakaan."
    },
    {
      id: 4,
      japanese: "隣の 部屋で ピアノの 音が します。",
      romaji: "Tonari no heya de piano no oto ga shimasu.",
      indonesian: "Terdengar suara piano dari kamar sebelah."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "明日の 天気予報は どうですか。",
      answer: "……天気予報に よると、関東地方は 雪が 降る そうです。",
      romaji: "Ashita no tenkiyohou wa dou desu ka? ... Tenkiyohou ni yoru to, Kantou chihou wa yuki ga furu sou desu.",
      indonesian: "Bagaimana ramalan cuaca besok? ... Menurut ramalan cuaca, daerah Kanto katanya akan turun salju."
    },
    {
      id: 2,
      question: "クララさんの 婚約者は どんな 人ですか。",
      answer: "……IMCの 社員で、とても まじめな 人だ そうです。",
      romaji: "Kurara-san no kon'yakusha wa donna hito desu ka? ... IMC no shain de, totemo majime na hito da sou desu.",
      indonesian: "Tunangan Clara-san orangnya seperti apa? ... Karyawan IMC, dan katanya orangnya sangat rajin/sungguh-sungguh."
    },
    {
      id: 3,
      question: "表が たいへん にぎやかですね。",
      answer: "……パトカーが 来て いますね。何か 事件が あった ようです。",
      romaji: "Omote ga taihen nigiyaka desu ne. ... Patokaa ga kite imasu ne. Nanika jiken ga atta you desu.",
      indonesian: "Di luar sangat ramai ya. ... Mobil polisi sedang datang. Tampaknya ada suatu insiden."
    },
    {
      id: 4,
      question: "咳が ひどいですね。大丈夫ですか。",
      answer: "……熱も あるし、頭も 痛いです。どうも 風邪を 引いた ようです。",
      romaji: "Seki ga hidoi desu ne. Daijoubu desu ka? ... Netsu mo aru shi, atama mo itai desu. Doumo kaze o hiita you desu.",
      indonesian: "Batuk Anda parah sekali ya. Tidak apa-apa? ... Saya juga demam dan kepala sakit. Sepertinya saya masuk angin/flu."
    },
    {
      id: 5,
      question: "台所から いい においが しますね。",
      answer: "……母が カレーを 作って いる ようですよ。",
      romaji: "Daidokoro kara ii nioi ga shimasu ne. ... Haha ga karee o tsukutte iru you desu yo.",
      indonesian: "Tercium aroma sedap dari dapur ya. ... Tampaknya ibu sedang memasak kari lho."
    }
  ],
  tataBahasa: [
    {
      point: 1,
      title: "Menyampaikan Berita / Katanya (普通形 + そうです)",
      polaFormat: "Bentuk Biasa (普通形) [Kata Benda / Kata Sifat-na + だ] + そうです\nSumber + に よると 〜そうです",
      explanation: "Pola ini digunakan untuk menyampaikan kembali kabar, kabar angin, atau informasi yang didapatkan dari pembicaraan orang lain, media berita, atau ramalan cuaca. Berbeda dengan 〜そうです pada Bab 43 (taksiran penglihatan yang menggunakan akar kata kerja/sifat), pada Bab 47 ini menggunakan Futsuukei (Bentuk Biasa) dari kata kerja, kata sifat-i, kata sifat-na (だ), dan kata benda (だ).\n\nUntuk menyebutkan sumber informasi secara eksplisit, digunakan partikel 〜に よると (menurut...).",
      examples: [
        {
          japanese: "新聞に よると、日本の 人口が 減って いる そうです。",
          romaji: "Shinbun ni yoru to, Nihon no jinkou ga hette iru sou desu.",
          indonesian: "Menurut surat kabar, populasi Jepang katanya sedang menurun."
        },
        {
          japanese: "バリ島は とても きれいだ そうです。",
          romaji: "Bari-tou wa totemo kirei da sou desu.",
          indonesian: "Katanya pulau Bali sangat indah."
        }
      ]
    },
    {
      point: 2,
      title: "Dugaan / Perkiraan Situasi (〜ようです)",
      polaFormat: "Bentuk Biasa (KK/KS-i) + ようです\nKata Sifat-na + な + ようです\nKata Benda + の + ようです",
      explanation: "Digunakan ketika pembicara membuat praduga atau kesimpulan spekulatif berdasarkan situasi nyata yang diamatinya melalui panca indera (penglihatan, pendengaran, penciuman, dll.). Berarti 'tampaknya / sepertinya'. Pola pembentukannya adalah Bentuk Biasa + ようです, namun untuk Kata Sifat-na menggunakan な, dan Kata Benda menggunakan の.",
      examples: [
        {
          japanese: "外は 風が 強い ようです。木の 枝が 揺れて います。",
          romaji: "Soto wa kaze ga tsuyoi you desu. Ki no eda ga yurete imasu.",
          indonesian: "Tampaknya di luar angin kencang. Dahan-dahan pohon bergoyang."
        },
        {
          japanese: "先生は きょう 忙しい ようです。",
          romaji: "Sensei wa kyou isogashii you desu.",
          indonesian: "Sepertinya hari ini sensei sedang sibuk."
        }
      ]
    },
    {
      point: 3,
      title: "Sensasi Indra Fisik (音 / 声 / におい / 味が します)",
      polaFormat: "[音 / 声 / におい / 味] + が します",
      explanation: "Pola ini mengekspresikan fenomena yang tertangkap oleh pancaindra secara spontan tanpa kehendak pembicara: おと (bunyi/suara benda), こえ (suara manusia/makhluk hidup), におい (bau/aroma), dan あじ (rasa).",
      examples: [
        {
          japanese: "どこかで 誰かの 声が します。",
          romaji: "Dokoka de dareka no koe ga shimasu.",
          indonesian: "Terdengar suara seseorang di suatu tempat."
        },
        {
          japanese: "この スープは ちょっと 甘い 味が します。",
          romaji: "Kono suupu wa chotto amai aji ga shimasu.",
          indonesian: "Sup ini terasa agak manis rasanya."
        }
      ]
    }
  ],
  percakapan: {
    title: "婚約した そうです",
    situasi: "Sato-san memberi tahu Miller-san di kantor tentang kabar pertunangan Clara-san.",
    tokoh: ["佐藤", "ミラー"],
    dialogs: [
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "ミラーさん、聞きましたか。クララさんが 婚約した そうですよ。",
        romaji: "Miraa-san, kikimashita ka. Kurara-san ga kon'yaku shita sou desu yo.",
        indonesian: "Miller-san, sudah dengar belum? Katanya Clara-san sudah bertunangan lho."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "ええっ、本当ですか。お相手は どなたですか。",
        romaji: "Ee', hontou desu ka. Oaite wa donata desu ka.",
        indonesian: "Eh, benarkah? Siapakah pasangannya?"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "IMCの シュミットさんだ そうです。",
        romaji: "IMC no Shumitto-san da sou desu.",
        indonesian: "Katanya Pak Schmidt dari IMC."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "シュミットさん？ ああ、親切で まじめな 方ですね。いつ 結婚なさるんですか。",
        romaji: "Shumitto-san? Aa, shinsetsu de majime na kata desu ne. Itsu kekkon nasaru n desu ka.",
        indonesian: "Schmidt-san? Ah, beliau orang yang ramah dan rajin ya. Kapan mereka akan menikah?"
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "来年の 春だ そうです。本当にお似合いの カップルですね。",
        romaji: "Rainen no haru da sou desu. Hontou ni oniai no kappuru desu ne.",
        indonesian: "Katanya musim semi tahun depan. Benar-benar pasangan yang serasi ya."
      },
      {
        speaker: "ミラー",
        role: "Pegawai IMC",
        japanese: "ええ、本当におめでたいですね。今度 お祝いを しましょう。",
        romaji: "Ee, hontou ni omedetai desu ne. Kondo oiwai o shimashou.",
        indonesian: "Iya, sungguh membahagiakan sekali ya. Nanti mari kita adakan perayaan selamat untuk mereka."
      }
    ]
  }
};
