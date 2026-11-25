import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 34,
  title: "Mengikuti Petunjuk (〜とおりに) & Urutan (〜あとで)",
  subTitle: "する まえに、説明して ください・手順と付帯状況",
  summary: "Melakukan tindakan persis sesuai petunjuk/contoh (〜とおりに), urutan sesudah aksi selesai (〜あとで), serta kondisi penyerta saat beraksi (〜て / 〜ないで).",
  polaKalimat: [
    {
      id: 1,
      japanese: "わたしが する とおりに、やって ください。",
      romaji: "Watashi ga suru toori ni, yatte kudasai.",
      indonesian: "Tolong lakukan persis seperti yang saya kerjakan."
    },
    {
      id: 2,
      japanese: "仕事が 終わった あとで、食事に 行きましょう。",
      romaji: "Shigoto ga owatta ato de, shokuji ni ikimashou.",
      indonesian: "Setelah pekerjaan selesai, mari kita pergi makan."
    },
    {
      id: 3,
      japanese: "しょうゆを つけて、さしみを 食べます。",
      romaji: "Shouyu o tsukete, sashimi o tabemasu.",
      indonesian: "Makan sashimi dengan mencelupkan kecap asin."
    },
    {
      id: 4,
      japanese: "きのうは 傘を 持たないで 出かけました。",
      romaji: "Kinou wa kasa o motanaide dekakemashita.",
      indonesian: "Kemarin saya pergi keluar tanpa membawa payung."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "折り紙の 折り方が 分かりません。",
      answer: "……この 説明書の とおりに 折って ください。",
      romaji: "Origami no orikata ga wakarimasen. ... Kono setsumeisho no toori ni otte kudasai.",
      indonesian: "Saya tidak mengerti cara melipat origami. ... Tolong lipat sesuai buku petunjuk ini."
    },
    {
      id: 2,
      question: "先生、薬は いつ 飲みますか。",
      answer: "……ご飯を 食べた あとで、飲んで ください。",
      romaji: "Sensei, kusuri wa itsu nomimasu ka? ... Gohan o tabeta ato de, nonde kudasai.",
      indonesian: "Dokter, obatnya diminum kapan? ... Tolong diminum setelah makan nasi."
    },
    {
      id: 3,
      question: "いつも 砂糖を 入れて コーヒーを 飲みますか。",
      answer: "……いいえ、砂糖を 入れないで 飲みます。",
      romaji: "Itsumo satou o irete koohii o nomimasu ka? ... Iie, satou o irenaide nomimasu.",
      indonesian: "Apakah Anda selalu minum kopi dengan memakai gula? ... Tidak, saya minum tanpa gula."
    }
  ],
  percakapan: {
    title: "する まえに、よく 説明を 聞いて ください (Dengarkan Penjelasan Sebelumnya)",
    situasi: "Miller-san mengikuti kelas budaya tradisional upacara minum teh (Sadou) atau olahraga tradisional Jepang dan dipandu oleh instruktur.",
    tokoh: ["先生", "ミラー"],
    dialogs: [
      {
        speaker: "先生",
        role: "Instruktur",
        japanese: "今から お茶を 立てます。まず わたしが する とおりに 見て いて ください。",
        romaji: "Ima kara ocha o tatemasu. Mazu watashi ga suru toori ni mite ite kudasai.",
        indonesian: "Sekarang kita akan meracik teh (matcha). Pertama perhatikanlah persis seperti yang saya lakukan."
      },
      {
        speaker: "ミラー",
        role: "Peserta",
        japanese: "はい、分かりました。",
        romaji: "Hai, wakarimashita.",
        indonesian: "Baik, saya mengerti."
      },
      {
        speaker: "先生",
        role: "Instruktur",
        japanese: "お茶を 飲む まえに、お菓子を 食べます。それから 器を 2回 回してから 飲みます。",
        romaji: "Ocha o nomu mae ni, okashi o tabemasu. Sorekara utsuwa o nikai mawashite kara nomimasu.",
        indonesian: "Sebelum minum teh, makanlah kue manis dulu. Setelah itu putar cangkir 2 kali baru minum."
      },
      {
        speaker: "ミラー",
        role: "Peserta",
        japanese: "回さないで 飲んでは いけませんか。",
        romaji: "Mawasanaide nonde wa ikemasen ka.",
        indonesian: "Apakah tidak boleh minum tanpa memutar cangkirnya?"
      },
      {
        speaker: "先生",
        role: "Instruktur",
        japanese: "ええ、正面を 避ける ために 回すんですよ。終わった あとで、感想を 聞かせて くださいね。",
        romaji: "Ee, shoumen o sakeru tame ni mawasu ndesu yo. Owatta ato de, kansou o kikasete kudasai ne.",
        indonesian: "Ya, diputar untuk menghindari bagian depan cangkir yang bermotif indah. Setelah selesai nanti, ceritakan kesan Anda ya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Mengikuti Contoh / Instruksi Persis: 〜とおりに",
      polaFormat: "[KK Kamus / KK-Ta] + とおりに / [Kata Benda] + の とおりに",
      explanation: "Menyatakan melakukan suatu hal tepat mengikuti panduan, perkataan, gambar, atau gerakan peraga ('persis sebagaimana yang...').",
      examples: [
        {
          japanese: "地図の とおりに 行きました。",
          romaji: "Chizu no toori ni ikimashita.",
          indonesian: "Pergi persis mengikuti peta."
        },
        {
          japanese: "聞いた とおりに 書きました。",
          romaji: "Kiita toori ni kakimashita.",
          indonesian: "Menulis persis seperti apa yang didengar."
        }
      ]
    },
    {
      point: 2,
      title: "Setelah Aksi Pertama Selesai: 〜あとで",
      polaFormat: "[KK Bentuk-Ta / Kata Benda の] + あとで",
      explanation: "Berarti 'Setelah ...' dengan penekanan jarak waktu atau urutan di antara dua aktivitas (contoh: setelah kelas selesai, setelah kerja, setelah makan).",
      examples: [
        {
          japanese: "新しい パソコンを 買った あとで、古いのは 友達に あげました。",
          romaji: "Atarashii pasokon o katta ato de, furui no wa tomodachi ni agemashita.",
          indonesian: "Setelah membeli komputer baru, yang lama saya berikan kepada teman."
        }
      ]
    },
    {
      point: 3,
      title: "Kondisi Penyerta: KK Bentuk-Te vs KK Bentuk-Nai + で",
      polaFormat: "KK1-て、KK2 (Dengan melakukan KK1) ⇔ KK1-ないで、KK2 (Tanpa melakukan KK1)",
      explanation: "Menjelaskan cara atau keadaan penyerta ketika tindakan kedua dilakukan. Misalnya memakai kacamata saat membaca, atau pergi keluar tanpa sarapan.",
      examples: [
        {
          japanese: "辞書を 引かないで、新聞を 読みます。",
          romaji: "Jisho o hikanaide, shinbun o yomimasu.",
          indonesian: "Membaca koran tanpa membuka kamus."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Etika Upacara Minum Teh (茶道 - Sadou)",
    description: "Memutar mangkuk teh (茶碗 - chawan) sebanyak dua kali searah jarum jam sebelum diminum adalah bentuk penghormatan terhadap seniman pembuat mangkuk agar tidak minum dari sisi motif utama.",
    notes: [
      "Perbandingan「〜てから」vs「〜あとで」: Keduanya berarti 'setelah', namun「〜あとで」bisa langsung menempel pada Kata Benda memakai partikel「の」(Contoh: 仕事の あとで = setelah kerja)."
    ]
  }
};
