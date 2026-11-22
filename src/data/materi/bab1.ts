import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 1,
  "title": "Perkenalan & Identitas Diri",
  "subTitle": "自己紹介",
  "summary": "Pola dasar kalimat nominal (Subjek は Predikat です), penyangkalan (じゃありません), kalimat tanya (ですか), partikel kepemilikan (の), dan penambahan juga (も).",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "わたしは マイク・ミラーです。",
      "romaji": "Watashi wa Maiku Miraa desu.",
      "indonesian": "Saya adalah Mike Miller."
    },
    {
      "id": 2,
      "japanese": "サントスさんは 学生じゃ ありません。",
      "romaji": "Santosu-san wa gakusei ja arimasen.",
      "indonesian": "Sdr. Santos bukan seorang mahasiswa."
    },
    {
      "id": 3,
      "japanese": "ミラーさんは 会社員ですか。",
      "romaji": "Miraa-san wa kaishain desu ka.",
      "indonesian": "Apakah Sdr. Miller seorang karyawan kantor?"
    },
    {
      "id": 4,
      "japanese": "サントスさんも 会社員です。",
      "romaji": "Santosu-san mo kaishain desu.",
      "indonesian": "Sdr. Santos juga seorang karyawan kantor."
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "マイク・ミラーさんですか。",
      "answer": "……はい、マイク・ミラーです。",
      "romaji": "Maiku Miraa-san desu ka? ... Hai, Maiku Miraa desu.",
      "indonesian": "Apakah Anda Sdr. Mike Miller? ... Ya, saya Mike Miller."
    },
    {
      "id": 2,
      "question": "ミラーさんは 学生ですか。",
      "answer": "……いいえ、学生じゃ ありません。会社員です。",
      "romaji": "Miraa-san wa gakusei desu ka? ... Iie, gakusei ja arimasen. Kaishain desu.",
      "indonesian": "Apakah Sdr. Miller seorang mahasiswa? ... Bukan, saya karyawan perusahaan."
    },
    {
      "id": 3,
      "question": "ワンさんも 会社員ですか。",
      "answer": "……いいえ、ワンさんは 医者です。",
      "romaji": "Wan-san mo kaishain desu ka? ... Iie, Wan-san wa isha desu.",
      "indonesian": "Apakah Sdr. Wang juga karyawan perusahaan? ... Bukan, Sdr. Wang seorang dokter."
    },
    {
      "id": 4,
      "question": "あの方は どなたですか。",
      "answer": "……ワットさんです。大学の 先生です。",
      "romaji": "Ano kata wa donata desu ka? ... Watto-san desu. Daigaku no sensei desu.",
      "indonesian": "Siapakah beliau itu? ... Sdr. Watt. Dosen universitas."
    }
  ],
  "percakapan": {
    "title": "初めまして (Hajimemashite - Senang Berkenalan)",
    "situasi": "Miller-san tiba di kantor IMC dan memperkenalkan dirinya.",
    "tokoh": [
      "佐藤",
      "山田",
      "ミラー"
    ],
    "dialogs": [
      {
        "speaker": "山田",
        "role": "Tokoh",
        "japanese": "おはようございます。佐藤さん、こちらは マイク・ミラーさんです。",
        "romaji": "Ohayou gozaimasu. Satou-san, kochira wa Maiku Miraa-san desu.",
        "indonesian": "Selamat pagi. Sdri. Satou, ini adalah Sdr. Mike Miller."
      },
      {
        "speaker": "ミラー",
        "role": "Tokoh",
        "japanese": "初めまして。マイク・ミラーです。アメリカから 来ました。どうぞ よろしく お願いします。",
        "romaji": "Hajimemashite. Maiku Miraa desu. Amerika kara kimashita. Douzo yoroshiku onegai shimasu.",
        "indonesian": "Senang berkenalan. Saya Mike Miller, datang dari Amerika Serikat. Mohon bimbingannya."
      },
      {
        "speaker": "佐藤",
        "role": "Tokoh",
        "japanese": "佐藤けい子です。どうぞ よろしく お願いします。",
        "romaji": "Satou Keiko desu. Douzo yoroshiku onegai shimasu.",
        "indonesian": "Saya Keiko Satou. Senang berkenalan dengan Anda."
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "KB1 は KB2 です",
      "polaFormat": "KB1 は KB2 です",
      "explanation": "Partikel は (wa) adalah penanda topik. です menegaskan predikat nominal dengan sopan.",
      "examples": [
        {
          "japanese": "わたしは 会社員です。",
          "romaji": "Watashi wa kaishain desu.",
          "indonesian": "Saya adalah karyawan."
        }
      ]
    },
    {
      "point": 2,
      "title": "KB1 は KB2 じゃありません",
      "polaFormat": "KB1 は KB2 じゃ ありません",
      "explanation": "Bentuk sanggahan negatif sopan dari です.",
      "examples": [
        {
          "japanese": "サントスさんは 先生じゃ ありません。",
          "romaji": "Santosu-san wa sensei ja arimasen.",
          "indonesian": "Sdr. Santos bukan guru."
        }
      ]
    },
    {
      "point": 3,
      "title": "Kalimat + か",
      "polaFormat": "Kalimat + か",
      "explanation": "Mengubah kalimat menjadi pertanyaan tanya dengan intonasi naik.",
      "examples": [
        {
          "japanese": "ミラーさんは アメリカ人ですか。",
          "romaji": "Miraa-san wa amerikajin desu ka.",
          "indonesian": "Apakah Sdr. Miller orang Amerika?"
        }
      ]
    },
    {
      "point": 4,
      "title": "Partikel も (Juga)",
      "polaFormat": "KB も Predikat",
      "explanation": "Menyatakan persamaan predikat dengan subjek sebelumnya.",
      "examples": [
        {
          "japanese": "グプタさんも 会社員です。",
          "romaji": "Guputa-san mo kaishain desu.",
          "indonesian": "Sdr. Gupta juga seorang karyawan."
        }
      ]
    },
    {
      "point": 5,
      "title": "Partikel の (Kepemilikan/Asal)",
      "polaFormat": "KB1 の KB2",
      "explanation": "KB1 menerangkan kepemilikan atau instansi asal dari KB2.",
      "examples": [
        {
          "japanese": "IMCの 社員です。",
          "romaji": "IMC no shain desu.",
          "indonesian": "Karyawan dari IMC."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Negara, Warga Negara & Bahasa",
    "description": "Hubungan nama negara dengan akhiran 人 (jin) untuk bangsa dan 語 (go) untuk bahasa.",
    "notes": [
      "アメリカ / アメリカ人 / 英語",
      "日本 / 日本人 / 日本語",
      "インドネシア / インドネシア人 / インドネシア語"
    ]
  }
};
