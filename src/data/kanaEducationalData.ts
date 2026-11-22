export interface DakuonTableItem {
  groupName: string;
  items: {
    h: string;
    k: string;
    romaji: string;
    exH: string;
    exK: string;
  }[];
}

export const KANA_EDUCATIONAL_DATA = {
  "dakuon": {
    "title": "Dakuten (濁音) & Handakuten (半濁音)",
    "subtitle": "Tanda Suara Bergetar (Tentent / ゛) dan Setengah Bergetar (Maru / ゜)",
    "explanation": "Dakuten adalah dua garis kecil (゛) di kanan atas karakter yang mengubah konsonan tidak bersuara (K, S, T, H) menjadi bersuara (G, Z, D, B). Handakuten adalah lingkaran kecil (゜) yang khusus mengubah deret H menjadi P.",
    "tables": [
      {
        "groupName": "K -> G (が・ぎ・ぐ・げ・ご / ガ・ギ・グ・ゲ・ゴ)",
        "items": [
          {
            "h": "が",
            "k": "ガ",
            "romaji": "ga",
            "exH": "がくせい (Gakusei - Murid)",
            "exK": "ガラス (Garasu - Kaca)"
          },
          {
            "h": "ぎ",
            "k": "ギ",
            "romaji": "gi",
            "exH": "ぎんこう (Ginkou - Bank)",
            "exK": "ギター (Gitaa - Gitar)"
          },
          {
            "h": "ぐ",
            "k": "グ",
            "romaji": "gu",
            "exH": "ぐらい (Gurai - Kira-kira)",
            "exK": "グラス (Gurasu - Gelas)"
          },
          {
            "h": "げ",
            "k": "ゲ",
            "romaji": "ge",
            "exH": "げんき (Genki - Sehat)",
            "exK": "ゲーム (Geemu - Game)"
          },
          {
            "h": "ご",
            "k": "ゴ",
            "romaji": "go",
            "exH": "ごはん (Gohan - Nasi/Makan)",
            "exK": "ゴルフ (Gorufu - Golf)"
          }
        ]
      },
      {
        "groupName": "S -> Z/J (ざ・じ・ず・ぜ・ぞ / ザ・ジ・ズ・ゼ・ゾ)",
        "items": [
          {
            "h": "ざ",
            "k": "ザ",
            "romaji": "za",
            "exH": "ざっし (Zasshi - Majalah)",
            "exK": "デザート (Dezaato - Makanan penutup)"
          },
          {
            "h": "じ",
            "k": "ジ",
            "romaji": "ji",
            "exH": "じかん (Jikan - Waktu)",
            "exK": "ジュース (Juusu - Jus)"
          },
          {
            "h": "ず",
            "k": "ズ",
            "romaji": "zu",
            "exH": "みず (Mizu - Air)",
            "exK": "ズボン (Zubon - Celana)"
          },
          {
            "h": "ぜ",
            "k": "ゼ",
            "romaji": "ze",
            "exH": "ぜんぶ (Zenbu - Semua)",
            "exK": "ゼロ (Zero - Nol)"
          },
          {
            "h": "ぞ",
            "k": "ゾ",
            "romaji": "zo",
            "exH": "ぞう (Zou - Gajah)",
            "exK": "ゾーン (Zoon - Zona)"
          }
        ]
      },
      {
        "groupName": "T -> D (だ・ぢ・づ・で・ど / ダ・ヂ・ヅ・デ・ド)",
        "items": [
          {
            "h": "だ",
            "k": "ダ",
            "romaji": "da",
            "exH": "だいがく (Daigaku - Universitas)",
            "exK": "ダンス (Dansu - Tari)"
          },
          {
            "h": "ぢ",
            "k": "ヂ",
            "romaji": "ji (dji)",
            "exH": "はなぢ (Hanaji - Mimisan)",
            "exK": "ラヂオ (Radio bentuk kuno)"
          },
          {
            "h": "づ",
            "k": "ヅ",
            "romaji": "zu (dzu)",
            "exH": "つづく (Tsudzuku - Berlanjut)",
            "exK": "キヅナ (Kizuna)"
          },
          {
            "h": "で",
            "k": "デ",
            "romaji": "de",
            "exH": "でんしゃ (Densha - Kereta)",
            "exK": "デパート (Depaato - Toserba)"
          },
          {
            "h": "ど",
            "k": "ド",
            "romaji": "do",
            "exH": "どこ (Doko - Mana)",
            "exK": "ドア (Doa - Pintu)"
          }
        ]
      },
      {
        "groupName": "H -> B (ば・び・ぶ・べ・ぼ / バ・ビ・ブ・ベ・ボ)",
        "items": [
          {
            "h": "ば",
            "k": "バ",
            "romaji": "ba",
            "exH": "ばんごはん (Bangohan - Makan malam)",
            "exK": "バス (Basu - Bus)"
          },
          {
            "h": "び",
            "k": "ビ",
            "romaji": "bi",
            "exH": "びょういん (Byouin - RS)",
            "exK": "ビル (Biru - Gedung)"
          },
          {
            "h": "ぶ",
            "k": "ブ",
            "romaji": "bu",
            "exH": "ぶんぽう (Bunpou - Tata bahasa)",
            "exK": "ブーツ (Buutsu - Sepatu bot)"
          },
          {
            "h": "べ",
            "k": "ベ",
            "romaji": "be",
            "exH": "べんきょう (Benkyou - Belajar)",
            "exK": "ベッド (Beddo - Ranjang)"
          },
          {
            "h": "ぼ",
            "k": "ボ",
            "romaji": "bo",
            "exH": "ぼうし (Boushi - Topi)",
            "exK": "ボール (Booru - Bola)"
          }
        ]
      },
      {
        "groupName": "H -> P Handakuten (ぱ・ぴ・ぷ・ぺ・ぽ / パ・ピ・プ・ペ・ポ)",
        "items": [
          {
            "h": "ぱ",
            "k": "パ",
            "romaji": "pa",
            "exH": "ぱちぱち (Pachipachi - Tepuk tangan)",
            "exK": "パン (Pan - Roti)"
          },
          {
            "h": "ぴ",
            "k": "ピ",
            "romaji": "pi",
            "exH": "ぴかぴか (Pikapika - Berkilau)",
            "exK": "ピアノ (Piano - Piano)"
          },
          {
            "h": "ぷ",
            "k": "プ",
            "romaji": "pu",
            "exH": "ぷんぷん (Punpun - Merengut)",
            "exK": "プール (Puuru - Kolam renang)"
          },
          {
            "h": "ぺ",
            "k": "ペ",
            "romaji": "pe",
            "exH": "ぺらぺら (Perapera - Fasih)",
            "exK": "ペン (Pen - Pena)"
          },
          {
            "h": "ぽ",
            "k": "ポ",
            "romaji": "po",
            "exH": "ぽかぽか (Pokapoka - Hangat)",
            "exK": "ポスト (Posuto - Kotak pos)"
          }
        ]
      }
    ]
  },
  "youon": {
    "title": "Youon (拗音) – Bunyi Gabungan Konsonan",
    "subtitle": "Kombinasi Karakter Kolom I + Huruf Kecil ya, yu, yo (ゃ・ゅ・ょ / ャ・ュ・ョ)",
    "explanation": "Youon dibentuk dengan menambahkan huruf ya (ゃ), yu (ゅ), atau yo (ょ) berukuran kecil (kira-kira separuh ukuran huruf biasa) setelah karakter vokal -i (ki, shi, chi, ni, hi, mi, ri, gi, ji, bi, pi). Dibaca sebagai satu suku kata tunggal.",
    "examples": [
      {
        "kana": "きゃ / キャ",
        "romaji": "kya",
        "sample": "きゃく (Kyaku - Tamu) / キャンプ (Kyanpu - Berkemah)"
      },
      {
        "kana": "きゅ / キュ",
        "romaji": "kyu",
        "sample": "きゅうり (Kyuuri - Mentimun) / キューブ (Kyuubu - Kubus)"
      },
      {
        "kana": "きょ / キョ",
        "romaji": "kyo",
        "sample": "きょうと (Kyouto - Kyoto) / キロ (Kiro - Kilo)"
      },
      {
        "kana": "しゃ / シャ",
        "romaji": "sha",
        "sample": "しゃしん (Shashin - Foto) / シャツ (Shatsu - Kemeja)"
      },
      {
        "kana": "しゅ / シュ",
        "romaji": "shu",
        "sample": "しゅみ (Shumi - Hobi) / シュークリーム (Kue sus)"
      },
      {
        "kana": "しょ / ショ",
        "romaji": "sho",
        "sample": "しょくどう (Shokudou - Kantin) / ショップ (Shoppu - Toko)"
      },
      {
        "kana": "ちゃ / チャ",
        "romaji": "cha",
        "sample": "おちゃ (Ocha - Teh hijau) / チャンス (Chansu - Peluang)"
      },
      {
        "kana": "ちゅ / チュ",
        "romaji": "chu",
        "sample": "ちゅうしゃ (Chuusha - Suntikan) / チューブ (Chuubu - Tabung)"
      },
      {
        "kana": "ちょ / チョ",
        "romaji": "cho",
        "sample": "ちょっと (Chotto - Sebentar) / チョコレート (Cokelat)"
      },
      {
        "kana": "にゃ / ニャ",
        "romaji": "nya",
        "sample": "にゃんこ (Nyanko - Kucing kecil) / ニャー (Suara kucing)"
      },
      {
        "kana": "ひゃ / ヒャ",
        "romaji": "hya",
        "sample": "ひゃく (Hyaku - Seratus)"
      },
      {
        "kana": "みゃ / ミャ",
        "romaji": "mya",
        "sample": "みゃく (Myaku - Denyut nadi) / ミャンマー (Myanmar)"
      },
      {
        "kana": "りゃ / リャ",
        "romaji": "rya",
        "sample": "りゃくご (Ryakugo - Singkatan)"
      },
      {
        "kana": "じゃ / ジャ",
        "romaji": "ja",
        "sample": "じゃがいも (Jagaimo - Kentang) / ジュース (Juusu - Jus)"
      },
      {
        "kana": "びゃ / ビャ",
        "romaji": "bya",
        "sample": "びょういん (Byouin - Rumah Sakit)"
      },
      {
        "kana": "ぴゃ / ピャ",
        "romaji": "pya",
        "sample": "はっぴょう (Happyou - Presentasi)"
      }
    ]
  },
  "sokuon": {
    "title": "Sokuon (促音) – Konsonan Ganda (っ / ッ)",
    "subtitle": "Karakter Tsu Kecil (Chiisai Tsu)",
    "explanation": "Sokuon ditulis menggunakan karakter 'tsu' kecil (っ pada Hiragana, ッ pada Katakana). Huruf ini tidak dibaca 'tsu', melainkan menghasilkan jeda glottal (tahan nafas 1 ketukan/mora) yang melipatgandakan konsonan berikutnya (k, s, t, p).",
    "rules": [
      "Sebelum bunyi K: がっこう (Gakkou) — dibaca jeda sebelum k, bukan 'gatsukou'.",
      "Sebelum bunyi S: ざっし (Zasshi) — konsonan s ditekan ganda.",
      "Sebelum bunyi T: きって (Kitte - Perangko) — konsonan t berlipat.",
      "Sebelum bunyi P: きっぷ (Kippu - Tiket) — jeda bibir mengatup sebelum p.",
      "Dalam Katakana: ベッド (Beddo - Ranjang), サッカー (Sakkaa - Sepak bola), コップ (Koppu - Gelas cangkir)."
    ]
  },
  "choonpu": {
    "title": "Choonpu (長音符) – Garis Vokal Panjang Katakana (ー)",
    "subtitle": "Tanda Perpanjangan Bunyi Vokal 2 Ketukan",
    "explanation": "Pada Hiragana, vokal panjang ditulis dengan huruf vokal tambahan (misal おかあさん Okaasan, おとうさん Otousan). Namun pada Katakana, vokal panjang dipermudah dengan simbol garis horizontal (ー). Garis ini dibaca memanjang sepanjang 2 ketukan mora.",
    "examples": [
      {
        "word": "コーヒー",
        "romaji": "koohii",
        "meaning": "Kopi (ko-o-hi-i)"
      },
      {
        "word": "ケーキ",
        "romaji": "keeki",
        "meaning": "Kue cake (ke-e-ki)"
      },
      {
        "word": "タクシー",
        "romaji": "takushii",
        "meaning": "Taksi (ta-ku-shi-i)"
      },
      {
        "word": "スーパー",
        "romaji": "suupaa",
        "meaning": "Supermarket (su-u-pa-a)"
      },
      {
        "word": "ノート",
        "romaji": "nooto",
        "meaning": "Buku catatan (no-o-to)"
      }
    ]
  },
  "hiragana_vs_katakana": {
    "title": "Perbedaan Penggunaan Hiragana vs Katakana",
    "subtitle": "Kapan Menggunakan Hiragana dan Kapan Menggunakan Katakana?",
    "points": [
      {
        "aspect": "Hiragana (ひらがな)",
        "description": "Bentuk tulisan dasar berlekuk melengkung halus. Digunakan untuk:",
        "details": [
          "Kata asli bahasa Jepang yang tidak ditulis kanji (misal: わたし, ここ, これ).",
          "Partikel tata bahasa (は, が, を, に, で, へ, と, も, から, まで).",
          "Okurigana: akhiran kata kerja dan kata sifat yang berubah bentuk (misal: 食べる, 高い, 泳ぎます).",
          "Furigana: panduan baca huruf kanji bagi pemula atau anak-anak."
        ]
      },
      {
        "aspect": "Katakana (カタカナ)",
        "description": "Bentuk tulisan bersudut tajam, lurus, dan tegas. Digunakan untuk:",
        "details": [
          "Gairaigo (外来語): Kata serapan dari bahasa asing (misal: コーヒー kopi, テレビ televisi, コンピューター komputer).",
          "Nama orang asing dan nama negara/tempat di luar kanji (misal: インドネシア Indonesia, ジョン John).",
          "Onomatope / bunyi tiruan (misal: ドキドキ dokidoki suara detak jantung).",
          "Penekanan khusus dalam teks (mirip fungsi tulisan miring/italics atau huruf kapital dalam bahasa Latin)."
        ]
      }
    ]
  }
};
