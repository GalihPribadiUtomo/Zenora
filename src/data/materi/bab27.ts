import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  "bab": 27,
  "title": "Kata Kerja Potensial (Bisa / Sanggup)",
  "subTitle": "何でも 作れるんですね",
  "summary": "Pembentukan kata kerja bentuk potensial (可能動詞), perubahan partikel objek を menjadi が, perbedaan 見える/聞こえる dengan 見られる/聞ける, serta partikel pembatas しか.",
  "polaKalimat": [
    {
      "id": 1,
      "japanese": "わたしは 日本語が 少し 話せます。",
      "romaji": "Watashi wa Nihongo ga sukoshi hanasemasu.",
      "indonesian": "Saya bisa berbicara bahasa Jepang sedikit."
    },
    {
      "id": 2,
      "japanese": "山が はっきり 見えます。",
      "romaji": "Yama ga hakkiri miemasu.",
      "indonesian": "Gunung terlihat dengan jelas."
    },
    {
      "id": 3,
      "japanese": "駅の 前に 大きい スーパーが できました。",
      "romaji": "Eki no mae ni ookii suupaa ga dekimashita.",
      "indonesian": "Di depan stasiun telah selesai dibangun supermarket besar."
    }
  ],
  "contohKalimat": [
    {
      "id": 1,
      "question": "日本語の 新聞が 読めますか。",
      "answer": "……いいえ、読めません。",
      "romaji": "Nihongo no shinbun ga yomemasu ka? ... Iie, yomemasen.",
      "indonesian": "Bisa membaca koran berbahasa Jepang? ... Tidak, tidak bisa membaca."
    },
    {
      "id": 2,
      "question": "鳥の 声が 聞こえますね。",
      "answer": "……ええ、もう 春ですね。",
      "romaji": "Tori no koe ga kikoemasu ne? ... Ee, mou haru desu ne.",
      "indonesian": "Suara burung terdengar ya. ... Ya, sudah musim semi ya."
    },
    {
      "id": 3,
      "question": "ローマ字しか 書けません。",
      "answer": "……ひらがなも 勉強しましょう。",
      "romaji": "Roomaji shika kakemasen. ... Hiragana mo benkyou shimashou.",
      "indonesian": "Hanya bisa menulis huruf latin saja. ... Mari kita pelajari juga hiragana."
    }
  ],
  "percakapan": {
    "title": "何でも 作れるんですね (Bisa Membuat Apa Saja, Ya)",
    "situasi": "Miller-san mengunjungi apartemen Suzuki-san dan kagum melihat perabotan buatannya sendiri.",
    "tokoh": [
      "ミラー",
      "鈴木"
    ],
    "dialogs": [
      {
        "speaker": "ミラー",
        "role": "Tamu",
        "japanese": "明るくて いい 部屋ですね。",
        "romaji": "Akarukute ii heya desu ne.",
        "indonesian": "Kamar yang terang dan bagus ya."
      },
      {
        "speaker": "鈴木",
        "role": "Tuan Rumah",
        "japanese": "ええ、天気が いい 日には 海が 見えるんです。",
        "romaji": "Ee, tenki ga ii hi ni wa umi ga mieru n desu.",
        "indonesian": "Ya, kalau hari cuacanya bagus laut terlihat dari sini."
      },
      {
        "speaker": "ミラー",
        "role": "Tamu",
        "japanese": "この 机、デザインが ユニークですね。どこで 買ったんですか。",
        "romaji": "Kono tsukue, dezain ga yuniiku desu ne. Doko de kattan desu ka.",
        "indonesian": "Meja ini desainnya unik ya. Beli di mana?"
      },
      {
        "speaker": "鈴木",
        "role": "Tuan Rumah",
        "japanese": "これ、自分で 作ったんですよ。",
        "romaji": "Kore, jibun de tsukutta n desu yo.",
        "indonesian": "Ini saya buat sendiri lho."
      },
      {
        "speaker": "ミラー",
        "role": "Tamu",
        "japanese": "えっ、本当ですか。鈴木さんは 何でも 作れるんですね。",
        "romaji": "E', hontou desu ka. Suzuki-san wa nan demo tsukureru n desu ne.",
        "indonesian": "Eh, betulkah? Sdr. Suzuki bisa membuat apa saja ya!"
      }
    ]
  },
  "tataBahasa": [
    {
      "point": 1,
      "title": "Konjugasi Bentuk Potensial (可能形)",
      "polaFormat": "Kel. 1: vokal u -> e (書く -> 書ける) | Kel. 2: 食べる -> 食べられる | Kel. 3: 来る -> こられる, する -> できる",
      "explanation": "Bentuk potensial menyatakan kemampuan seseorang atau kondisi yang memungkinkan perbuatan terlaksana. Partikel objek を umumnya berubah menjadi が.",
      "examples": [
        {
          "japanese": "漢字が 書けます。",
          "romaji": "Kanji ga kakemasu.",
          "indonesian": "Saya bisa menulis kanji."
        }
      ]
    },
    {
      "point": 2,
      "title": "Perbedaan 見えます / 聞こえます vs 見られます / 聞けます",
      "polaFormat": "KB が 見える / 聞こえる (Alami tanpa niat)",
      "explanation": "見えます dan 聞こえます menyatakan pemandangan/suara masuk ke mata/telinga secara spontan tanpa disengaja. Sedangkan 見られます dan 聞けます memerlukan niat atau usaha sadar untuk melihat/mendengar.",
      "examples": [
        {
          "japanese": "窓から 富士山が 見えます。",
          "romaji": "Mado kara Fujisan ga miemasu.",
          "indonesian": "Dari jendela Gunung Fuji terlihat."
        },
        {
          "japanese": "新宿で 今 黒澤の 映画が 見られます。",
          "romaji": "Shinjuku de ima Kurosawa no eiga ga mirareru.",
          "indonesian": "Di Shinjuku sekarang kita bisa menonton film Kurosawa."
        }
      ]
    },
    {
      "point": 3,
      "title": "Kata Benda + しか + Bentuk Negatif (Hanya)",
      "polaFormat": "KB + しか + KK Negatif",
      "explanation": "しか selalu berpasangan dengan bentuk negatif untuk menegaskan bahwa batasnya 'hanya itu dan tidak ada yang lain'.",
      "examples": [
        {
          "japanese": "ひらがなしか 書けません。",
          "romaji": "Hiragana shika kakemasen.",
          "indonesian": "Hanya bisa menulis hiragana saja."
        }
      ]
    }
  ],
  "referensiInfo": {
    "title": "Toko & Layanan di Lingkungan Sekitar (近くの店)",
    "description": "Di Jepang sangat umum memanfaatkan layanan toko serba ada (konbini) 24 jam untuk fotokopi, bayar tagihan listrik/air, membeli karcis konser, serta toko reparasi hak sepatu dan kunci cadangan (合鍵 - aikagi).",
    "notes": [
      "クリーニング屋 (Kuriiningu-ya) = Laundry cuci kering",
      "コンビニ (Konbini) = Convenience store serba ada 24 jam"
    ]
  }
};
