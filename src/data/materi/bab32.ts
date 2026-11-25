import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 32,
  title: "Saran & Anjuran (〜ほうが いい) serta Perkiraan",
  subTitle: "無理を しない ほうが いいですよ・助言と推量",
  summary: "Memberikan saran atau nasihat (〜た ほうが いい / 〜ない ほうが いい), menyatakan kemungkinan dugaan (〜でしょう), dan ketidakpastian (〜かも しれません).",
  polaKalimat: [
    {
      id: 1,
      japanese: "毎日 運動した ほうが いいです。",
      romaji: "Mainichi undou shita hou ga ii desu.",
      indonesian: "Sebaiknya berolahraga setiap hari."
    },
    {
      id: 2,
      japanese: "熱が ある ときは、お風呂に 入らない ほうが いいです。",
      romaji: "Netsu ga aru toki wa, ofuro ni hairanai hou ga ii desu.",
      indonesian: "Saat demam, sebaiknya tidak berendam di bak mandi."
    },
    {
      id: 3,
      japanese: "あしたは 雨が 降るでしょう。",
      romaji: "Ashita wa ame ga furu deshou.",
      indonesian: "Besok sepertinya/kemungkinan besar akan turun hujan."
    },
    {
      id: 4,
      japanese: "道路が 混んでいますから、会議に 間に合わないかも しれません。",
      romaji: "Douro ga konde imasu kara, kaigi ni maniawanai kamo shiremasen.",
      indonesian: "Karena jalanan macet, mungkin saja saya tidak keburu menghadiri rapat."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "のどが 痛いんですが、どう したら いいですか。",
      answer: "……病院へ 行って、診て もらった ほうが いいですよ。",
      romaji: "Nodo ga itai ndesu ga, dou shitara ii desu ka? ... Byouin e itte, mite moratta hou ga ii desu yo.",
      indonesian: "Tenggorokan saya sakit, sebaiknya bagaimana? ... Sebaiknya pergi ke rumah sakit untuk diperiksa."
    },
    {
      id: 2,
      question: "夜は コーヒーを 飲まない ほうが いいですか。",
      answer: "……ええ、眠れなくなりますから、飲まない ほうが いいです。",
      romaji: "Yoru wa koohii o nomanai hou ga ii desu ka? ... Ee, nemurenaku narimasu kara, nomanai hou ga ii desu.",
      indonesian: "Malam hari sebaiknya jangan minum kopi ya? ... Ya, nanti susah tidur, jadi sebaiknya jangan minum."
    },
    {
      id: 3,
      question: "大阪の 夏は 暑いですか。",
      answer: "……ええ、8月は とても 暑いでしょう。",
      romaji: "Oosaka no natsu wa atsui desu ka? ... Ee, hachigatsu wa totemo atsui deshou.",
      indonesian: "Musim panas di Osaka panas ya? ... Ya, bulan Agustus sepertinya akan sangat panas."
    },
    {
      id: 4,
      question: "ミラーさんは パーティーに 来ますか。",
      answer: "……さあ、仕事が 忙しいですから、来ないかも しれません。",
      romaji: "Miraa-san wa paatii ni kimasu ka? ... Saa, shigoto ga isogashii desu kara, konai kamo shiremasen.",
      indonesian: "Apakah Miller-san datang ke pesta? ... Entahlah, karena kerjanya sibuk, mungkin saja tidak datang."
    }
  ],
  percakapan: {
    title: "無理を しない ほうが いいですよ (Sebaiknya Jangan Memaksakan Diri)",
    situasi: "Di akhir jam kerja, Miller-san terlihat kurang enak badan dan Kimura-san memberikan nasihat agar beristirahat.",
    tokoh: ["木村", "ミラー"],
    dialogs: [
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "ミラーさん、顔色が 悪いですね。どう したんですか。",
        romaji: "Miraa-san, kaoiro ga warui desu ne. Dou shitan desu ka.",
        indonesian: "Miller-san, wajah Anda terlihat pucat ya. Ada apa?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、きのうから ちょっと おなかが 痛いんです。",
        romaji: "Ee, kinou kara chotto onaka ga itai ndesu.",
        indonesian: "Ya, sejak kemarin perut saya agak sakit."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "それは いけませんね。すぐ 病院へ 行った ほうが いいですよ。",
        romaji: "Sore wa ikemasen ne. Sugu byouin e itta hou ga ii desu yo.",
        indonesian: "Wah, gawat itu. Sebaiknya segera pergi ke rumah sakit lho."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "でも、きょうは 会議が あるんです。",
        romaji: "Demo, kyou wa kaigi ga aru ndesu.",
        indonesian: "Tapi hari ini saya ada rapat."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "無理を しない ほうが いいですよ。会議の ことは 課長に 相談したら どうですか。",
        romaji: "Muri o shinai hou ga ii desu yo. Kaigi no koto wa kachou ni soudan shitara dou desu ka.",
        indonesian: "Sebaiknya jangan memaksakan diri. Mengenai rapatnya, bagaimana kalau konsultasikan dengan kepala seksi?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "そうですね。そう します。ありがとう。",
        romaji: "Sou desu ne. Sou shimasu. Arigatou.",
        indonesian: "Benar juga ya. Saya lakukan begitu. Terima kasih."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Memberikan Saran / Nasihat: 〜た ほうが いい / 〜ない ほうが いい",
      polaFormat: "Positif: [KK Bentuk-Ta] + ほうが いいです / Negatif: [KK Bentuk-Nai] + ほうが いいです",
      explanation: "Digunakan untuk memberikan saran atau nasihat yang dianggap paling bijak bagi lawan bicara ('Sebaiknya melakukan...' atau 'Sebaiknya jangan melakukan...'). Untuk saran positif SELALU memakai Bentuk-Ta (bukan bentuk kamus!).",
      examples: [
        {
          japanese: "傘を 持って 行った ほうが いいですよ。",
          romaji: "Kasa o motte itta hou ga ii desu yo.",
          indonesian: "Sebaiknya bawa payung lho."
        },
        {
          japanese: "お酒は あまり 飲まない ほうが いいです。",
          romaji: "Osake wa amari nomanai hou ga ii desu.",
          indonesian: "Sebaiknya jangan terlalu banyak minum alkohol."
        }
      ]
    },
    {
      point: 2,
      title: "Menyatakan Dugaan Cukup Yakin (~70-80%): 〜でしょう",
      polaFormat: "[KK / KS-い / KS-な(tanpa だ) / KB(tanpa だ) Bentuk Biasa] + でしょう",
      explanation: "Menyatakan perkiraan berdasarkan fakta, prakiraan cuaca, atau logika pembicara ('Sepertinya... / Kemungkinan besar...').",
      examples: [
        {
          japanese: "今晩は 雪が 降るでしょう。",
          romaji: "Konban wa yuki ga furu deshou.",
          indonesian: "Malam ini sepertinya akan turun salju."
        }
      ]
    },
    {
      point: 3,
      title: "Menyatakan Kemungkinan Ketidakpastian (~50%): 〜かも しれません",
      polaFormat: "[KK / KS / KB Bentuk Biasa (tanpa だ)] + かも しれません",
      explanation: "Digunakan ketika pembicara merasa suatu hal mungkin saja terjadi, namun tidak yakin sepenuhnya ('Mungkin saja... / Barangkali...').",
      examples: [
        {
          japanese: "田中さんは もう 寝たかも しれません。",
          romaji: "Tanaka-san wa mou neta kamo shiremasen.",
          indonesian: "Mungkin saja Tanaka-san sudah tidur."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Menasihati Secara Sopan Tanpa Menggurui",
    description: "Pola「〜たほうがいい」jika diucapkan langsung ke atasan tanpa penghalus bisa terdengar memerintah. Untuk atasan gunakanlah「〜たら いかがですか」(Bagaimana kalau...?) atau「〜たほうが よろしいかと 思います」.",
    notes: [
      "Perbedaan「〜でしょう」(dugaan beralasan, misal prakiraan cuaca) vs「〜かも しれません」(kemungkinan 50-50, bisa ya bisa tidak)."
    ]
  }
};
