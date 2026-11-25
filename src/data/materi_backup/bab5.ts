import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 5,
  "title": "Perjalanan & Transportasi",
  "subTitle": "移動と交通",
  "summary": "Kata kerja perpindahan (行きます・来ます・帰ります), partikel arah へ, alat transportasi dengan で, rekan dengan と, serta kata tanya いつ (kapan).",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "わたしは 京都へ 行きます。",
      "romaji": "Watashi wa Kyouto e ikimasu.",
      "indonesian": "Saya pergi ke Kyoto."
    },
    {
      "id": 2,
      "japanese": "タクシーで うちへ 帰ります。",
      "romaji": "Takushii de uchi e kaerimasu.",
      "indonesian": "Pulang ke rumah dengan taksi."
    },
    {
      "id": 3,
      "japanese": "家族と 日本へ 来ました。",
      "romaji": "Kazoku to Nihon e kimashita.",
      "indonesian": "Datang ke Jepang bersama keluarga."
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "あした どこへ 行きますか。",
      "answer": "……奈良へ 行きます。",
      "romaji": "Ashita doko e ikimasu ka? ... Nara e ikimasu.",
      "indonesian": "Besok mau pergi ke mana? ... Pergi ke Nara."
    },
    {
      "id": 2,
      "question": "何で 東京へ 行きますか。",
      "answer": "……新幹線で 行きます。",
      "romaji": "Nan de Toukyou e ikimasu ka? ... Shinkansen de ikimasu.",
      "indonesian": "Pergi ke Tokyo naik apa? ... Naik Shinkansen."
    },
    {
      "id": 3,
      "question": "いつ 日本へ 来ましたか。",
      "answer": "……去年の 3月に 来ました。",
      "romaji": "Itsu Nihon e kimashita ka? ... Kyonen no sangatsu ni kimashita.",
      "indonesian": "Kapan datang ke Jepang? ... Datang bulan Maret tahun lalu."
    }
  ],
  "percakapan": {
    "title": "甲子園へ 行きますか (Apakah Menuju ke Koushien?)",
    "situasi": "Santos menanyakan jalur peron kereta di stasiun.",
    "tokoh": [
      "サントス",
      "駅員"
    ],
    "dialogs": [
      {
        "speaker": "サントス",
        "role": "Tokoh",
        "japanese": "すみません。甲子園まで いくらですか。何番線ですか。",
        "romaji": "Sumimasen. Koushien made ikura desu ka. Nan-bansen desu ka.",
        "indonesian": "Permisi. Sampai ke Koushien berapa ya? Jalur peron nomor berapa?"
      },
      {
        "speaker": "駅員",
        "role": "Tokoh",
        "japanese": "350円です。5番線です。",
        "romaji": "Sanbyaku gojuu-en desu. Gobansen desu.",
        "indonesian": "350 yen. Jalur peron nomor 5."
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "KB(Tempat) へ 行きます",
      "polaFormat": "Tempat + へ (dibaca e) + KK Gerak",
      "explanation": "Partikel へ menunjukkan arah tujuan pergerakan.",
      "examples": [
        {
          "japanese": "スーパーへ 行きます。",
          "romaji": "Suupaa e ikimasu.",
          "indonesian": "Pergi ke supermarket."
        }
      ]
    },
    {
      "point": 2,
      "title": "KB(Kendaraan) で 行きます",
      "polaFormat": "Kendaraan + で + KK Gerak",
      "explanation": "Partikel で menunjukkan sarana transportasi. Untuk jalan kaki: 歩いて (tanpa で).",
      "examples": [
        {
          "japanese": "電車で 行きます。",
          "romaji": "Densha de ikimasu.",
          "indonesian": "Pergi naik kereta."
        }
      ]
    },
    {
      "point": 3,
      "title": "KB(Orang) と Kata Kerja",
      "polaFormat": "Orang + と + KK",
      "explanation": "Partikel と menunjukkan rekan bersama. Sendirian: 一人で (hitori de).",
      "examples": [
        {
          "japanese": "友達と 帰ります。",
          "romaji": "Tomodachi to kaerimasu.",
          "indonesian": "Pulang bersama teman."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Kereta Api Supercepat Shinkansen (新幹線)",
    "description": "Jaringan kereta peluru Shinkansen menghubungkan pulau-pulau utama Jepang dengan kecepatan hingga 320 km/jam.",
    "notes": [
      "のぞみ (Nozomi), ひかり (Hikari), こだま (Kodama)"
    ]
  }
};
