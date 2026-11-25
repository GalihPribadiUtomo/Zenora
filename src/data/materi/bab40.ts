import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 40,
  title: "Pertanyaan Tertanam (〜か / 〜かどうか) & Mencoba (〜てみる)",
  subTitle: "友達が できたかどうか 心配です・疑問詞節",
  summary: "Menyematkan kalimat tanya ke dalam kalimat utama (Pertanyaan dengan kata tanya + か, serta pertanyaan Ya/Tidak dengan 〜かどうか), dan mencoba melakukan sesuatu untuk melihat hasilnya (〜て みます).",
  polaKalimat: [
    {
      id: 1,
      japanese: "あしたの 会議が 何時に 始まるか、知っていますか。",
      romaji: "Ashita no kaigi ga nanji ni hajimaru ka, shitte imasu ka.",
      indonesian: "Apakah Anda tahu rapat besok dimulai jam berapa?"
    },
    {
      id: 2,
      japanese: "間違いが ないかどうか、調べて ください。",
      romaji: "Machigai ga nai ka dou ka, shirabete kudasai.",
      indonesian: "Tolong periksa apakah tidak ada kesalahan atau tidak."
    },
    {
      id: 3,
      japanese: "この 靴を はいて みても いいですか。",
      romaji: "Kono kutsu o haite mite mo ii desu ka.",
      indonesian: "Bolehkah saya mencoba memakai sepatu ini?"
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "台風が いつ 来るか、分かりましたか。",
      answer: "……いいえ、まだ 分かりません。",
      romaji: "Taifuu ga itsu kuru ka, wakarimashita ka? ... Iie, mada wakarimasen.",
      indonesian: "Apakah sudah diketahui kapan topan akan datang? ... Belum, masih belum tahu."
    },
    {
      id: 2,
      question: "テストの 点数は どうでしたか。",
      answer: "……何点 取れたか、覚えて いません。",
      romaji: "Tesuto no tensuu wa dou deshita ka? ... Nanten toreta ka, oboete imasen.",
      indonesian: "Bagaimana nilai tesnya? ... Saya tidak ingat dapat berapa poin."
    },
    {
      id: 3,
      question: "パーティーに 出席できますか。",
      answer: "……その 日 仕事が あるかどうか、スケジュールを 確認します。",
      romaji: "Paatii ni shusseki dekimasu ka? ... Sono hi shigoto ga aru ka dou ka, sukejuuru o kakunin shimasu.",
      indonesian: "Apakah bisa hadir di pesta? ... Saya periksa jadwal dulu apakah hari itu ada kerjaan atau tidak."
    },
    {
      id: 4,
      question: "この お菓子は どんな 味ですか。",
      answer: "……とても おいしいですよ。1つ 食べて みて ください。",
      romaji: "Kono okashi wa donna aji desu ka? ... Totemo oishii desu yo. Hitotsu tabete mite kudasai.",
      indonesian: "Kue manis ini rasanya seperti apa? ... Sangat enak lho. Cobalah makan satu."
    }
  ],
  percakapan: {
    title: "友達が できたかどうか 心配です (Khawatir Apakah Sudah Punya Teman)",
    situasi: "Sebuah keluarga atau rekan membicarakan anak/kerabat yang baru mulai masuk sekolah atau pindah kerja, dan khawatir tentang adaptasinya.",
    tokoh: ["太郎の母", "ミラー"],
    dialogs: [
      {
        speaker: "太郎の母",
        role: "Orang Tua",
        japanese: "ミラーさん、うちの 息子、先週から 大学へ 通って いるんですが、友達が できたかどうか 心配なんです。",
        romaji: "Miraa-san, uchi no musuko, senshuu kara daigaku e kayotte iru ndesu ga, tomodachi ga dekita ka dou ka shinpai nandesu.",
        indonesian: "Miller-san, anak laki-laki saya sejak minggu lalu sudah masuk kuliah, tapi saya khawatir apakah dia sudah berhasil mendapat teman atau belum."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "大丈夫ですよ。大学は 楽しい ところが 多いですから。",
        romaji: "Daijoubu desu yo. Daigaku wa tanoshii tokoro ga ooi desu kara.",
        indonesian: "Pasti baik-baik saja kok. Di universitas ada banyak hal yang menyenangkan."
      },
      {
        speaker: "太郎の母",
        role: "Orang Tua",
        japanese: "でも、大学の 授業に ついて いけるかどうかも 分かりませんし……。",
        romaji: "Demo, daigaku no jugyou ni tsuite ikeru ka dou ka mo wakarimasen shi...",
        indonesian: "Tapi saya juga tidak tahu apakah dia bisa mengikuti pelajaran kuliahnya atau tidak..."
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "そんなに 心配しなくても いいですよ。一度 本人に 大学が どうか 聞いて みたら どうですか。",
        romaji: "Sonna ni shinpai shinakute mo ii desu yo. Ichido honnin ni daigaku ga dou ka kiite mitara dou desu ka.",
        indonesian: "Tidak perlu terlalu khawatir kok. Sekali-sekali bagaimana kalau Anda coba tanyakan langsung kepadanya bagaimana kuliahnya."
      },
      {
        speaker: "太郎の母",
        role: "Orang Tua",
        japanese: "そうですね。今晩 さっそく 電話して 聞いて みます。",
        romaji: "Sou desu ne. Konban sassoku denwa shite kiite mimasu.",
        indonesian: "Benar juga ya. Nanti malam saya langsung telepon dan coba tanya."
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Kalimat Tanya Tidak Langsung (Dengan Kata Tanya): 〜か",
      polaFormat: "[Klausa Tanya Bentuk Biasa (tanpa だ)] + か + 知っています / 分かります / 覚えています",
      explanation: "Menempatkan pertanyaan berunsur 5W1H (siapa, apa, di mana, kapan, berapa, bagaimana) menjadi bagian dari kalimat yang lebih panjang. Hati-hati: untuk Kata Benda dan Kata Sifat な, kata「だ」di depan「か」WAJIB dihilangkan!",
      examples: [
        {
          japanese: "あそこが 何の 店か、知っていますか。",
          romaji: "Asoko ga nan no mise ka, shitte imasu ka.",
          indonesian: "Apakah Anda tahu itu di sana toko apa?"
        },
        {
          japanese: "荷物が いつ 届くか、調べて ください。",
          romaji: "Nimotsu ga itsu todoku ka, shirabete kudasai.",
          indonesian: "Tolong periksa kapan paketnya akan tiba."
        }
      ]
    },
    {
      point: 2,
      title: "Kalimat Tanya Ya/Tidak Tertanam: 〜かどうか",
      polaFormat: "[Klausa Bentuk Biasa (tanpa だ)] + かどうか + Predikat",
      explanation: "Jika pertanyaan tidak langsung yang disematkan tidak memiliki kata tanya (jawabannya Ya atau Tidak), wajib menggunakan「かどうか」('apakah ... atau tidak').",
      examples: [
        {
          japanese: "田中さんが 来るかどうか 分かりません。",
          romaji: "Tanaka-san ga kuru ka dou ka wakarimasen.",
          indonesian: "Saya tidak tahu apakah Tanaka-san akan datang atau tidak."
        }
      ]
    },
    {
      point: 3,
      title: "Mencoba Melakukan Sesuatu: KK Bentuk-Te + みます",
      polaFormat: "Kata Kerja Bentuk-Te + みます",
      explanation: "Menyatakan melakukan suatu aksi sebagai percobaan untuk melihat hasilnya atau merasakan pengalamannya ('Coba pakai...', 'Coba makan...', 'Coba tanyakan...').",
      examples: [
        {
          japanese: "おいしそうですから、食べて みます。",
          romaji: "Oishisou desu kara, tabete mimasu.",
          indonesian: "Karena kelihatannya enak, saya coba makan."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Mencoba Pakaian / Sepatu di Toko Jepang",
    description: "Saat ingin mencoba baju di ruang pas (試着室 - shichakushitsu) atau mencoba sepatu di toko Jepang, ucapkanlah「これを 着て みても いいですか」(Bolehkah saya coba pakai baju ini?) atau「はいて みても いいですか」(sepatu/celana).",
    notes: [
      "Di ruang pas toko pakaian Jepang, tersedia penutup wajah kain tipis (フェイスカバー) agar riasan tidak menempel pada kerah baju yang dicoba."
    ]
  }
};
