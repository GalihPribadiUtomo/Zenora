import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 3,
  "title": "Tempat & Arah / Belanja",
  "subTitle": "場所と買い物",
  "summary": "Kata tunjuk tempat ここ (sini), そこ (situ), あそこ (sana), ragam sopan arah こちら・そちら・あちら, serta menanyakan harga (いくら).",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "ここは 教室です。",
      "romaji": "Koko wa kyoushitsu desu.",
      "indonesian": "Di sini adalah ruang kelas."
    },
    {
      "id": 2,
      "japanese": "お手洗いは あそこです。",
      "romaji": "Otearai wa asoko desu.",
      "indonesian": "Toilet ada di sebelah sana."
    },
    {
      "id": 3,
      "japanese": "エレベーターは あちらです。",
      "romaji": "Erebeetaa wa achira desu.",
      "indonesian": "Lift ada di arah sebelah sana (sopan)."
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "事務所は どこですか。",
      "answer": "……あそこです。",
      "romaji": "Jimusho wa doko desu ka? ... Asoko desu.",
      "indonesian": "Di manakah kantor? ... Di sebelah sana."
    },
    {
      "id": 2,
      "question": "お国は どちらですか。",
      "answer": "……インドネシアです。",
      "romaji": "Okuni wa dochira desu ka? ... Indoneshia desu.",
      "indonesian": "Berasal dari negara mana? (sopan) ... Indonesia."
    },
    {
      "id": 3,
      "question": "この ワインは いくらですか。",
      "answer": "……2,500円です。",
      "romaji": "Kono wain wa ikura desu ka? ... Nisen gohyaku-en desu.",
      "indonesian": "Berapa harga anggur ini? ... Harganya 2.500 yen."
    }
  ],
  "percakapan": {
    "title": "これを ください (Saya Minta yang Ini)",
    "situasi": "Maria Santos berbelanja pakaian dan anggur di department store.",
    "tokoh": [
      "マリア",
      "店員"
    ],
    "dialogs": [
      {
        "speaker": "マリア",
        "role": "Tokoh",
        "japanese": "すみません。その ワインを 見せて ください。",
        "romaji": "Sumimasen. Sono wain o misete kudasai.",
        "indonesian": "Permisi, tolong perlihatkan anggur itu."
      },
      {
        "speaker": "店員",
        "role": "Tokoh",
        "japanese": "はい、どうぞ。イタリアの ワインです。",
        "romaji": "Hai, douzo. Itaria no wain desu.",
        "indonesian": "Silakan. Ini anggur buatan Italia."
      },
      {
        "speaker": "マリア",
        "role": "Tokoh",
        "japanese": "いくらですか。じゃ、これを ください。",
        "romaji": "Ikura desu ka. Ja, kore o kudasai.",
        "indonesian": "Berapa harganya? Kalau begitu saya minta yang ini."
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "ここ / そこ / あそこ / どこ",
      "polaFormat": "ここ/そこ/あそこ は KB(Tempat) です",
      "explanation": "Penunjuk lokasi ruang: dekat pembicara, dekat lawan bicara, dan jauh dari keduanya.",
      "examples": [
        {
          "japanese": "ここは 受付です。",
          "romaji": "Koko wa uketsuke desu.",
          "indonesian": "Di sini adalah resepsionis."
        }
      ]
    },
    {
      "point": 2,
      "title": "こちら / そちら / あちら / どちら",
      "polaFormat": "KB は こちら/そちら/あちら です",
      "explanation": "Ragam bahasa sopan penunjuk arah dan tempat.",
      "examples": [
        {
          "japanese": "会議室は どちらですか。",
          "romaji": "Kaigishitsu wa dochira desu ka.",
          "indonesian": "Ruang rapat ada di sebelah mana?"
        }
      ]
    },
    {
      "point": 3,
      "title": "KB1 は KB2 の です (Negara Pembuat)",
      "polaFormat": "KB1 は [Negara/Merk] の です",
      "explanation": "Menyatakan negara pembuat suatu barang.",
      "examples": [
        {
          "japanese": "日本の 車です。",
          "romaji": "Nihon no kuruma desu.",
          "indonesian": "Mobil buatan Jepang."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Department Store Jepang (デパート)",
    "description": "Lantai basement biasanya merupakan pusat jajanan mewah (Depachika). Satuan lantai menggunakan 階 (kai).",
    "notes": [
      "1階 (ikkai), 2階 (nikai)",
      "地下1階 (chika ikkai - basement 1)"
    ]
  }
};
