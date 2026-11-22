import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 28,
  "title": "Aksi Simultan & Berkelanjutan",
  "subTitle": "出張も 多いし、試験も あるし…",
  "summary": "Melakukan dua hal secara bersamaan (〜ながら), menyatakan perbuatan kebiasaan rutin (〜ています), dan merangkai beberapa alasan yang setaraf (〜し、〜し).",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "音楽を 聞きながら 食事します。",
      "romaji": "Ongaku o kikinagara shokuji shimasu.",
      "indonesian": "Makan sambil mendengarkan musik."
    },
    {
      "id": 2,
      "japanese": "毎朝 ジョギングを しています。",
      "romaji": "Maiasa jogingu o shite imasu.",
      "indonesian": "Setiap pagi saya rutin melakukan joging."
    },
    {
      "id": 3,
      "japanese": "地下鉄は 速いし、安いし、地下鉄で 行きましょう。",
      "romaji": "Chikatetsu wa hayaishi, yasuishi, chikatetsu de ikimashou.",
      "indonesian": "Kereta bawah tanah cepat dan murah, oleh karena itu mari kita naik kereta bawah tanah."
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "眠い とき、どう しますか。",
      "answer": "……ガムを かみながら 運転します。",
      "romaji": "Nemui toki, dou shimasu ka? ... Gamu o kaminagara unten shimasu.",
      "indonesian": "Ketika mengantuk, apa yang Anda lakukan? ... Mengemudi sambil mengunyah permen karet."
    },
    {
      "id": 2,
      "question": "休みの 日は いつも 何を していますか。",
      "answer": "……絵を かいています。",
      "romaji": "Yasumi no hi wa itsumo nan o shite imasu ka? ... E o kaite imasu.",
      "indonesian": "Pada hari libur biasanya melakukan apa? ... Rutin melukis."
    },
    {
      "id": 3,
      "question": "どうして この 店に 来るんですか。",
      "answer": "……値段も 安いし、魚も 新鮮ですから。",
      "romaji": "Doushite kono mise ni kurun desu ka? ... Nedan mo yasuishi, sakana mo shinsen desu kara.",
      "indonesian": "Kenapa datang ke toko ini? ... Karena harganya murah dan ikannya juga segar."
    }
  ],
  "percakapan": {
    "title": "出張も 多いし、試験も あるし… (Sering Dinas, dan Ada Ujian Juga...)",
    "situasi": "Ogawa Sachiko meminta bantuan Miller-san untuk menjadi rekan percakapan bahasa Inggris.",
    "tokoh": [
      "小川",
      "ミラー"
    ],
    "dialogs": [
      {
        "speaker": "小川",
        "role": "Karyawan",
        "japanese": "ミラーさん、ちょっと お願いが あるんですが。",
        "romaji": "Miraa-san, chotto onegai ga aru n desu ga.",
        "indonesian": "Sdr. Miller, saya minta tolong sesuatu sebentar."
      },
      {
        "speaker": "ミラー",
        "role": "Rekan",
        "japanese": "何ですか。",
        "romaji": "Nan desu ka.",
        "indonesian": "Ada apa?"
      },
      {
        "speaker": "小川",
        "role": "Karyawan",
        "japanese": "実は 8月に オーストラリアへ 行くんですが、英語の 会話の 相手に なって いただけませんか。",
        "romaji": "Jitsu wa hachigatsu ni Oosutoraria e ikun desu ga, eigo no kaiwa no aite ni natte itadakemasen ka.",
        "indonesian": "Sebenarnya bulan Agustus saya mau ke Australia, bisakah menjadi teman percakapan bahasa Inggris saya?"
      },
      {
        "speaker": "ミラー",
        "role": "Rekan",
        "japanese": "うーん、出張も 多いし、日本語の 試験も あるし、ちょっと 難しいですね。",
        "romaji": "Uun, shucchou mo ooishi, Nihongo no shiken mo arushi, chotto muzukashii desu ne.",
        "indonesian": "Emm, saya sering dinas luar kota, dan ada ujian bahasa Jepang juga, jadi agak sulit ya."
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "Kata Kerja 1 (Bentuk ます) + ながら + Kata Kerja 2",
      "polaFormat": "KK1 (buang ます) + ながら + KK2",
      "explanation": "Menyatakan dua aksi dilakukan bersamaan oleh pelaku yang sama. KK2 adalah aksi utama pembicara.",
      "examples": [
        {
          "japanese": "働きながら 大学で 勉強しています。",
          "romaji": "Hatarakinagara daigaku de benkyou shite imasu.",
          "indonesian": "Kuliah di universitas sambil bekerja."
        }
      ]
    },
    {
      "point": 2,
      "title": "Kata Kerja Bentuk て + います (Kebiasaan / Rutinitas)",
      "polaFormat": "KK Bentuk て + います",
      "explanation": "Menyatakan perbuatan yang berulang kali dilakukan sebagai kebiasaan dalam jangka waktu tertentu.",
      "examples": [
        {
          "japanese": "毎朝 走っています。",
          "romaji": "Maiasa hashitte imasu.",
          "indonesian": "Setiap pagi saya rutin berlari."
        }
      ]
    },
    {
      "point": 3,
      "title": "Bentuk Biasa + し、Bentuk Biasa + し",
      "polaFormat": "Kalimat 1 (Biasa) + し、Kalimat 2 (Biasa) + し、[Kesimpulan]",
      "explanation": "Digunakan untuk memaparkan lebih dari dua alasan atau ciri yang sejajar mengenai suatu hal.",
      "examples": [
        {
          "japanese": "田中さんは まじめだし、親切だし、いい 人です。",
          "romaji": "Tanaka-san wa majime da shi, shinsetsu da shi, ii hito desu.",
          "indonesian": "Sdr. Tanaka rajin, ramah juga, orang yang sangat baik."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Cara Membaca Informasi Perumahan (うちを借りる)",
    "description": "Di Jepang, denah rumah disingkat dengan huruf LDK (Living, Dining, Kitchen). Luas kamar diukur dengan satuan tatami (畳 - jou). Saat menyewa ada uang deposit (敷金 - shikikin) dan uang terima kasih (礼金 - reikin).",
    "notes": [
      "2LDK = 2 Kamar tidur + Ruang tamu + Ruang makan + Dapur",
      "6畳 (roku-jou) = Luas kamar seukuran 6 lembar tatami (sekitar 180x90 cm per tatami)"
    ]
  }
};
