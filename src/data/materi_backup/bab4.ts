import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 4,
  "title": "Waktu, Jam & Jadwal",
  "subTitle": "時間と日程",
  "summary": "Penyebutan jam dan menit (〜時〜分), partikel waktu tepat に, rentang から〜まで, dan 4 bentuk konjugasi kata kerja ます・ません・ました・ませんでした.",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "いま 4時5分です。",
      "romaji": "Ima yoji go-fun desu.",
      "indonesian": "Sekarang jam 4 lewat 5 menit."
    },
    {
      "id": 2,
      "japanese": "わたしは 毎朝 6時に 起きます。",
      "romaji": "Watashi wa maiasa rokuji ni okimasu.",
      "indonesian": "Saya bangun jam 6 setiap pagi."
    },
    {
      "id": 3,
      "japanese": "きのう 勉強しました。",
      "romaji": "Kinou benkyou shimashita.",
      "indonesian": "Kemarin saya telah belajar."
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "いま 何時ですか。",
      "answer": "……7時10分です。",
      "romaji": "Ima nanji desu ka? ... Shichiji jippun desu.",
      "indonesian": "Sekarang jam berapa? ... Jam 7 lewat 10 menit."
    },
    {
      "id": 2,
      "question": "銀行は 何時から 何時までですか。",
      "answer": "……9時から 3時までです。",
      "romaji": "Ginkou wa nanji kara nanji made desu ka? ... Kuji kara sanji made desu.",
      "indonesian": "Bank buka dari jam berapa sampai jam berapa? ... Jam 9 sampai jam 3."
    },
    {
      "id": 3,
      "question": "きのうの 晩 勉強しましたか。",
      "answer": "……いいえ、しませんでした。",
      "romaji": "Kinou no ban benkyou shimashita ka? ... Iie, shimasen deshita.",
      "indonesian": "Apakah kemarin malam belajar? ... Tidak, tidak belajar."
    }
  ],
  "percakapan": {
    "title": "何時から 何時までですか (Dari Jam Berapa Sampai Jam Berapa?)",
    "situasi": "Miller menelepon museum seni untuk menanyakan jadwal operasional.",
    "tokoh": [
      "ミラー",
      "案内係"
    ],
    "dialogs": [
      {
        "speaker": "ミラー",
        "role": "Tokoh",
        "japanese": "すみません。そちらは 何時から 何時までですか。",
        "romaji": "Sumimasen. Sochira wa nanji kara nanji made desu ka.",
        "indonesian": "Permisi, di situ buka dari jam berapa sampai jam berapa?"
      },
      {
        "speaker": "案内係",
        "role": "Tokoh",
        "japanese": "9時から 5時までです。月曜日は 休みです。",
        "romaji": "Kuji kara goji made desu. Getsuyoubi wa yasumi desu.",
        "indonesian": "Dari jam 9 pagi sampai jam 5 sore. Hari Senin libur."
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "Waktu + に + Kata Kerja",
      "polaFormat": "Waktu berangka + に + KK",
      "explanation": "Partikel に dilekatkan pada waktu yang memiliki angka pasti.",
      "examples": [
        {
          "japanese": "7時に 起きます。",
          "romaji": "Shichiji ni okimasu.",
          "indonesian": "Bangun pada jam 7."
        }
      ]
    },
    {
      "point": 2,
      "title": "〜から 〜まで",
      "polaFormat": "Waktu/Tempat から Waktu/Tempat まで",
      "explanation": "Menyatakan titik awal (dari) dan batas akhir (sampai).",
      "examples": [
        {
          "japanese": "朝から 晩まで 働きます。",
          "romaji": "Asa kara ban made hatarakimasu.",
          "indonesian": "Bekerja dari pagi sampai malam."
        }
      ]
    },
    {
      "point": 3,
      "title": "Konjugasi 4 Waktu Kata Kerja",
      "polaFormat": "ます / ません / ました / ませんでした",
      "explanation": "Bentuk sopan masa sekarang/depan dan masa lampau.",
      "examples": [
        {
          "japanese": "きのう 働きました。",
          "romaji": "Kinou hatarakimashita.",
          "indonesian": "Kemarin saya telah bekerja."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Nama Hari dalam Bahasa Jepang (曜日)",
    "description": "Nama hari berhubungan dengan unsur alam dan tata surya: Matahari, Bulan, Api, Air, Kayu, Emas, Tanah.",
    "notes": [
      "月曜日 (Senin), 火曜日 (Selasa), 水曜日 (Rabu)",
      "木曜日 (Kamis), 金曜日 (Jumat), 土曜日 (Sabtu), 日曜日 (Minggu)"
    ]
  }
};
