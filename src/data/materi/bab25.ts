import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 25,
  title: "Pengandaian (〜たら) & Meskipun (〜ても)",
  subTitle: "いろいろ お世話に なりました・仮定と逆接",
  summary: "Kalimat pengandaian syarat (〜たら - Kalau/Setelah...), dan kalimat pertentangan/konsesif (〜ても - Walaupun/Meskipun...), sebagai penutup Buku Minna no Nihongo Shokyu I.",
  polaKalimat: [
    {
      id: 1,
      japanese: "雨が 降ったら、出かけません。",
      romaji: "Ame ga futtara, dekakemasen.",
      indonesian: "Kalau turun hujan, saya tidak akan pergi keluar."
    },
    {
      id: 2,
      japanese: "雨が 降っても、出かけます。",
      romaji: "Ame ga futte mo, dekakemasu.",
      indonesian: "Walaupun turun hujan, saya tetap akan pergi keluar."
    },
    {
      id: 3,
      japanese: "60歳に なったら、田舎で 暮らしたいです。",
      romaji: "Rokujussai ni nattara, inaka de kurashitai desu.",
      indonesian: "Kalau nanti sudah berumur 60 tahun, saya ingin tinggal di pedesaan."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "もし 1億円 あったら、何を したいですか。",
      answer: "……世界旅行を したいです。",
      romaji: "Moshi ichioku-en attara, nani o shitai desu ka? ... Sekai ryokou o shitai desu.",
      indonesian: "Seandainya punya 100 juta yen, apa yang ingin Anda lakukan? ... Ingin keliling dunia."
    },
    {
      id: 2,
      question: "時間がないんですが、どう しますか。",
      answer: "……時間が なかったら、タクシーで 行きましょう。",
      romaji: "Jikan ga nai ndesu ga, dou shimasu ka? ... Jikan ga nakattara, takushii de ikimashou.",
      indonesian: "Waktunya sudah mepet, bagaimana nih? ... Kalau tidak ada waktu, ayo naik taksi saja."
    },
    {
      id: 3,
      question: "駅に 着いたら、電話を して ください。",
      answer: "……はい、分かりました。",
      romaji: "Eki ni tsuitara, denwa o shite kudasai. ... Hai, wakarimashita.",
      indonesian: "Kalau sudah tiba di stasiun, tolong telepon saya ya. ... Baik, saya mengerti."
    },
    {
      id: 4,
      question: "いくら 考えても、分かりません。",
      answer: "……じゃ、先生に 聞いて みましょう。",
      romaji: "Ikura kangaete mo, wakarimasen. ... Ja, sensei ni kiite mimashou.",
      indonesian: "Seberapa keras pun berpikir, saya tetap tidak mengerti. ... Kalau begitu, coba tanyakan pada guru."
    }
  ],
  percakapan: {
    title: "いろいろ お世話に なりました (Terima Kasih Atas Segala Bantuannya)",
    situasi: "Acara perpisahan hangat untuk Gupta-san yang telah menyelesaikan masa tugas pelatihannya di Jepang dan akan segera kembali ke India.",
    tokoh: ["グプタ", "木村"],
    dialogs: [
      {
        speaker: "グプタ",
        role: "Peserta Magang",
        japanese: "木村さん、いろいろ お世話に なりました。",
        romaji: "Kimura-san, iroiro osewa ni narimashita.",
        indonesian: "Kimura-san, terima kasih banyak atas segala bimbingan dan bantuannya selama ini."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "こちらこそ。インドへ 帰っても、元気で がんばって ください。",
        romaji: "Kochira koso. Indo e kaette mo, genki de ganbatte kudasai.",
        indonesian: "Sama-sama. Meskipun sudah kembali ke India, tetaplah sehat dan semangat ya."
      },
      {
        speaker: "グプタ",
        role: "Peserta Magang",
        japanese: "はい、ありがとうございます。大阪へ いらっしゃったら、ぜひ 連絡して ください。",
        romaji: "Hai, arigatou gozaimasu. Oosaka e irasshattara, zehi renraku shite kudasai.",
        indonesian: "Baik, terima kasih. Jika suatu hari berkunjung lagi ke kota saya, pastikan hubungi saya ya."
      },
      {
        speaker: "木村",
        role: "Rekan Kerja",
        japanese: "ええ。機会が あったら、必ず 遊びに 行きます。さあ、乾杯しましょう！",
        romaji: "Ee. Kikai ga attara, kanarazu asobi ni ikimasu. Saa, kanpai shimashou!",
        indonesian: "Ya. Kalau ada kesempatan, saya pasti akan datang berkunjung. Nah, mari kita bersulang!"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Kalimat Pengandaian & Syarat: 〜たら (Jika / Kalau)",
      polaFormat: "[KK/KS/KB Bentuk Lampau Biasa (〜た/〜かった/〜だった)] + ら",
      explanation: "Pola「〜たら」adalah bentuk pengandaian paling fleksibel dalam bahasa Jepang. Dibentuk dengan menambahkan「ら」di belakang Bentuk Lampau Biasa. Contoh: 行った ➔ 行ったら, ない ➔ なかったら, 高い ➔ 高かったら, 暇 ➔ 暇だったら. Berbeda dengan「〜と」, bagian belakang「〜たら」BOLEH berisi perintah, permintaan, atau keinginan.",
      examples: [
        {
          japanese: "安かったら、買います。",
          romaji: "Yasukattara, kaimasu.",
          indonesian: "Kalau murah, saya beli."
        },
        {
          japanese: "もし 天気が よかったら、散歩に 行きましょう。",
          romaji: "Moshi tenki ga yokattara, sanpo ni ikimashou.",
          indonesian: "Jika cuacanya cerah, mari pergi jalan-jalan."
        }
      ]
    },
    {
      point: 2,
      title: "Setelah Aksi Tercapai di Masa Depan: KK-たら、〜",
      polaFormat: "KK Bentuk-Ta + ら、Aksi Berikutnya",
      explanation: "Selain berarti pengandaian 'jika', pola「〜たら」sering bermakna 'kalau nanti sudah ... / begitu tiba ...' untuk dua peristiwa yang pasti terjadi di masa depan.",
      examples: [
        {
          japanese: "仕事が 終わったら、すぐ 帰ります。",
          romaji: "Shigoto ga owattara, sugu kaerimasu.",
          indonesian: "Kalau pekerjaan selesai nanti, saya langsung pulang."
        }
      ]
    },
    {
      point: 3,
      title: "Kalimat Pertentangan: 〜ても (Meskipun / Walaupun)",
      polaFormat: "KK Bentuk-Te + も / KS-い(くて) + も / KS-な・KB(で) + も",
      explanation: "Menyatakan situasi di mana hasil yang diharapkan tidak terjadi meskipun syarat sudah terpenuhi ('Walaupun / Biarpun ... tetap ...'). Dapat didahului dengan kata「いくら」(seberapa pun...).",
      examples: [
        {
          japanese: "高くても、買いたいです。",
          romaji: "Takakute mo, kaitai desu.",
          indonesian: "Walaupun mahal, saya tetap ingin membelinya."
        },
        {
          japanese: "日曜日でも、働きます。",
          romaji: "Nichiyoubi de mo, hatarakimasu.",
          indonesian: "Walaupun hari Minggu, saya tetap bekerja."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Salam Perpisahan & Terima Kasih (お世話に なりました)",
    description: "Ungkapan「いろいろ お世話に なりました」adalah salam terima kasih yang mendalam saat berpisah dengan rekan kerja, dosen, atau tetangga setelah menjalin hubungan dalam kurun waktu tertentu.",
    notes: [
      "Selamat! Bab 25 menandai tuntasnya Buku Minna no Nihongo Shokyu I (setara JLPT N5 penuh).",
      "Siap melanjutkan ke Minna no Nihongo Shokyu II (Bab 26–50, level JLPT N4 & JFT-Basic A2)!"
    ]
  }
};
