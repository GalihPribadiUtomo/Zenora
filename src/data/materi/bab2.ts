import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 2,
  "title": "Benda di Sekitar",
  "subTitle": "身の回りの物",
  "summary": "Kata tunjuk benda これ (ini), それ (itu dekat lawan), あれ (itu jauh), kata tunjuk spesifik この/その/あの, dan menanyakan pemilik benda (だれの).",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "これは 本です。",
      "romaji": "Kore wa hon desu.",
      "indonesian": "Ini adalah buku."
    },
    {
      "id": 2,
      "japanese": "それは わたしの かばんです。",
      "romaji": "Sore wa watashi no kaban desu.",
      "indonesian": "Itu adalah tas saya."
    },
    {
      "id": 3,
      "japanese": "この かさは あなたのですか。",
      "romaji": "Kono kasa wa anata no desu ka.",
      "indonesian": "Apakah payung ini milik Anda?"
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "これは 辞書ですか。",
      "answer": "……いいえ、雑誌です。",
      "romaji": "Kore wa jisho desu ka? ... Iie, zasshi desu.",
      "indonesian": "Apakah ini kamus? ... Bukan, ini majalah."
    },
    {
      "id": 2,
      "question": "それは 何ですか。",
      "answer": "……これは 手帳です。",
      "romaji": "Sore wa nan desu ka? ... Kore wa techou desu.",
      "indonesian": "Itu apa? ... Ini buku agenda saku."
    },
    {
      "id": 3,
      "question": "それは だれの かぎですか。",
      "answer": "……わたしの かぎです。",
      "romaji": "Sore wa dare no kagi desu ka? ... Watashi no kagi desu.",
      "indonesian": "Itu kunci milik siapa? ... Kunci milik saya."
    }
  ],
  "percakapan": {
    "title": "ほんの 気持ちです (Sekadar Tanda Hati)",
    "situasi": "Miller-san memberi kopi salam perkenalan kepada tetangga apartemennya.",
    "tokoh": [
      "ミラー",
      "山田"
    ],
    "dialogs": [
      {
        "speaker": "ミラー",
        "role": "Tokoh",
        "japanese": "あのう、これ、ほんの 気持ちです。コーヒーです。どうぞ。",
        "romaji": "Anou, kore, hon no kimochi desu. Koohii desu. Douzo.",
        "indonesian": "Anu, ini sekadar tanda hati dari saya. Ini kopi, silakan diterima."
      },
      {
        "speaker": "山田",
        "role": "Tokoh",
        "japanese": "どうも ありがとう ございます。これから お世話に なります。",
        "romaji": "Doumo arigatou gozaimasu. Kore kara osewa ni narimasu.",
        "indonesian": "Terima kasih banyak. Mulai sekarang mohon bantuannya."
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "これ / それ / あれ",
      "polaFormat": "これ / それ / あれ は KB です",
      "explanation": "これ merujuk pada benda dekat pembicara. それ dekat lawan bicara. あれ jauh dari keduanya.",
      "examples": [
        {
          "japanese": "これは ペンです。",
          "romaji": "Kore wa pen desu.",
          "indonesian": "Ini adalah pulpen."
        }
      ]
    },
    {
      "point": 2,
      "title": "この / その / あの + KB",
      "polaFormat": "この/その/あの + Kata Benda",
      "explanation": "Wajib diikuti langsung oleh kata benda spesifik yang ditunjuk.",
      "examples": [
        {
          "japanese": "その 時計は いくらですか。",
          "romaji": "Sono tokei wa ikura desu ka.",
          "indonesian": "Jam itu harganya berapa?"
        }
      ]
    },
    {
      "point": 3,
      "title": "そう / そうじゃありません",
      "polaFormat": "はい、そうです / いいえ、違います",
      "explanation": "Jawaban singkat mengonfirmasi atau menyangkal identitas benda.",
      "examples": [
        {
          "japanese": "それは 辞書ですか。……はい、そうです。",
          "romaji": "Sore wa jisho desu ka? ... Hai, sou desu.",
          "indonesian": "Apakah itu kamus? ... Ya, betul."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Tradisi Pindah Rumah di Jepang",
    "description": "Di Jepang, saat baru pindah rumah ada tradisi membagikan hadiah kecil perkenalan dengan ungkapan 'Hon no kimochi desu'.",
    "notes": [
      "ほんの 気持ちです (Sekadar tanda hati)",
      "これから お世話になります (Mohon bantuannya)"
    ]
  }
};
