import type { ChapterLesson } from '../../types';

export const lessonData: ChapterLesson = {
  bab: 30,
  title: "Kondisi Hasil Sengaja (〜てある) & Persiapan (〜ておく)",
  subTitle: "チケットを 予約して おきます・準備と結果",
  summary: "Menyatakan kondisi suatu benda yang sengaja ditata/dipersiapkan seseorang (KK Transitif + てあります) serta melakukan persiapan sebelumnya atau membiarkan keadaan tetap seperti adanya (〜て おきます).",
  polaKalimat: [
    {
      id: 1,
      japanese: "壁に カレンダーが 掛けて あります。",
      romaji: "Kabe ni karendaa ga kakete arimasu.",
      indonesian: "Di dinding telah terpasang kalender (sengaja digantung)."
    },
    {
      id: 2,
      japanese: "旅行の まえに、切符を 買って おきます。",
      romaji: "Ryokou no mae ni, kippu o katte okimasu.",
      indonesian: "Sebelum berangkat berwisata, saya membeli tiketnya terlebih dahulu."
    },
    {
      id: 3,
      japanese: "会議が 終わったら、いすは そのままに して おいて ください。",
      romaji: "Kaigi ga owattara, isu wa sonomama ni shite oite kudasai.",
      indonesian: "Setelah rapat selesai, biarkan saja kursinya tetap seperti itu."
    }
  ],
  contohKalimat: [
    {
      id: 1,
      question: "テーブルの 上に 花が 飾って ありますね。",
      answer: "……ええ、きょうは お客様が 来ますから。",
      romaji: "Teeburu no ue ni hana ga kazatte arimasu ne. ... Ee, kyou wa okyakusama ga kimasu kara.",
      indonesian: "Di atas meja sudah dihias bunga ya. ... Ya, karena hari ini ada tamu datang."
    },
    {
      id: 2,
      question: "次の 授業までに 何を して おいたら いいですか。",
      answer: "……この プリントを 読んで おいて ください。",
      romaji: "Tsugi no jugyou made ni nani o shite oitara ii desu ka? ... Kono purinto o yonde oite kudasai.",
      indonesian: "Sebelum pelajaran berikutnya sebaiknya menyiapkan apa? ... Tolong baca lembar print ini terlebih dahulu."
    },
    {
      id: 3,
      question: "黒板の 字は 消しても いいですか。",
      answer: "……いいえ、まだ 使うから、書いて おいて ください。",
      romaji: "Kokuban no ji wa keshite mo ii desu ka? ... Iie, mada tsukau kara, kaite oite kudasai.",
      indonesian: "Apakah tulisan di papan tulis boleh dihapus? ... Jangan, karena masih mau dipakai, biarkan tetap tertulis begitu saja."
    }
  ],
  percakapan: {
    title: "チケットを 予約して おきます (Saya Akan Memesan Tiket Terlebih Dahulu)",
    situasi: "Miller-san dan Sato-san sedang mendiskusikan persiapan piknik bersama atau persiapan menyambut acara kantor.",
    tokoh: ["佐藤", "ミラー"],
    dialogs: [
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "来週の パーティーの 準備は もう できて いますか。",
        romaji: "Raishuu no paatii no junbi wa mou dekite imasu ka.",
        indonesian: "Apakah persiapan untuk pesta minggu depan sudah beres?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、レストランの 予約は もう して あります。",
        romaji: "Ee, resutoran no yoyaku wa mou shite arimasu.",
        indonesian: "Ya, reservasi restorannya sudah saya pesan (beres)."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "飲み物や お菓子は どう しますか。",
        romaji: "Nomimono ya okashi wa dou shimasu ka.",
        indonesian: "Bagaimana dengan minuman dan camilan?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "あした 買いに 行って、冷蔵庫に 冷やして おきます。",
        romaji: "Ashita kai ni itte, reizouko ni hiyashite okimasu.",
        indonesian: "Besok saya pergi beli, lalu akan saya dinginkan di dalam kulkas terlebih dahulu."
      },
      {
        speaker: "佐藤",
        role: "Rekan Kerja",
        japanese: "それは 助かりますね。プログラムも 印刷して おきましょうか。",
        romaji: "Sore wa tasukarimasu ne. Puroguramu mo insatsu shite okimashou ka.",
        indonesian: "Itu sangat membantu. Apakah susunan acaranya juga sekalian saya cetak lebih dulu?"
      },
      {
        speaker: "ミラー",
        role: "Tokoh Utama",
        japanese: "ええ、お願いします。これで 準備は ばっちりですね。",
        romaji: "Ee, onegai shimasu. Kore de junbi wa bacchiri desu ne.",
        indonesian: "Ya, tolong ya. Dengan begini persiapannya sudah sempurna!"
      }
    ]
  },
  tataBahasa: [
    {
      point: 1,
      title: "Kondisi Akibat Tindakan Sengaja: KK Transitif (他動詞) + てあります",
      polaFormat: "Benda + が + KK Transitif Bentuk-Te + あります",
      explanation: "Berbeda dengan「〜ています」(Bab 29) yang memakai KK Intransitif dan netral,「〜てあります」selalu memakai KK Transitif untuk menyatakan hasil perbuatan yang SENGAJA dilakukan oleh seseorang demi suatu tujuan (misal: kamar sudah dibersihkan, nama sudah ditulis, pintu sengaja dibuka agar sejuk).",
      examples: [
        {
          japanese: "黒板に あしたの 予定が 書いて あります。",
          romaji: "Kokuban ni ashita no yotei ga kaite arimasu.",
          indonesian: "Di papan tulis tertulis jadwal untuk besok (sengaja ditulis)."
        }
      ]
    },
    {
      point: 2,
      title: "Melakukan Persiapan Sebelumnya: KK Bentuk-Te + おきます",
      polaFormat: "KK Bentuk-Te + おきます (Persiapan jauh-jauh hari / Antisipasi)",
      explanation: "Digunakan untuk menyatakan perbuatan yang sengaja dikerjakan lebih awal sebagai persiapan sebelum acara, perjalanan, atau keperluan berikutnya terjadi.",
      examples: [
        {
          japanese: "試験の まえに、よく 復習して おきます。",
          romaji: "Shiken no mae ni, yoku fukushuu shite okimasu.",
          indonesian: "Sebelum ujian, mengulang pelajaran dengan baik terlebih dahulu."
        }
      ]
    },
    {
      point: 3,
      title: "Membiarkan Kondisi Tetap Seperti Semula: そのままに して おきます",
      polaFormat: "Benda + を / は + KK-Te おきます (Membiarkan keadaan sekarang)",
      explanation: "Fungsi kedua dari「〜て おきます」adalah sengaja mempertahankan atau membiarkan sesuatu tetap dalam kondisi tersebut sampai waktunya selesai atau dipakai lagi.",
      examples: [
        {
          japanese: "電気を つけて おいて ください。",
          romaji: "Denki o tsukete oite kudasai.",
          indonesian: "Tolong biarkan lampunya tetap menyala ya."
        }
      ]
    }
  ],
  referensiInfo: {
    title: "Wawasan Budaya: Etika Beres-Beres & Persiapan (段取り) di Jepang",
    description: "Orang Jepang sangat mengutamakan persiapan sebelum bertindak (事前準備) sehingga ekspresi「〜ておきます」menjadi salah satu ungkapan kerja yang paling sering diucapkan di lingkungan pabrik, restoran, maupun perkantoran.",
    notes: [
      "Perbedaan kunci:「ドアが 開いています」(pintu terbuka begitu saja) vs「ドアが 開けて あります」(pintu sengaja dibuka orang untuk ventilasi/menyambut tamu).",
      "Dalam percakapan kasual,「〜ておく」sering disingkat menjadi「〜とく」."
    ]
  }
};
