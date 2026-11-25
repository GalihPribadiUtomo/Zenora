import { ExamPackage } from '../types';

export const JLPT_EXAM_PACKAGES: ExamPackage[] = [
  // =========================================================================
  // 1. JLPT N5 — SIMULASI RESMI LENGKAP (Minna no Nihongo Bab 1–25 & Kanji N5)
  // =========================================================================
  {
    id: 'JLPT_N5',
    title: 'JLPT N5 Resmi · Simulasi Penuh',
    level: 'N5',
    subtitle: 'Standar Ujian Kemampuan Bahasa Jepang N5 (Minna no Nihongo Bab 1–25)',
    description: 'Format autentik 1:1 sesuai lembar ujian resmi Japan Foundation & JEES: mencakup Huruf & Kosakata (文字・語彙), Tata Bahasa & Membaca (文法・読解) termasuk soal susun bintang ★, dan Mendengarkan (聴解) dengan audio natural.',
    totalTimeMinutes: 90,
    totalQuestions: 35,
    maxScore: 180,
    passingScore: 80,
    badgeColor: '#10B981',
    sections: [
      {
        id: 'n5_sec_1',
        type: 'gengo_chishiki',
        title: 'Huruf & Kosakata',
        japaneseTitle: '言語知識（文字・語彙）',
        timeLimitMinutes: 20,
        passingScore: 19,
        maxScore: 60,
        instructions: 'Pilihlah satu jawaban yang paling tepat (1, 2, 3, atau 4) untuk setiap nomor pertanyaan.',
        questions: [
          // Mondai 1: 漢字読み (Cara Baca Kanji)
          {
            id: 'n5_q1',
            mondaiNumber: 1,
            mondaiTitle: '問題１　___の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 1,
            questionText: 'わたしは 毎朝 ６時に <u>起きます</u>。',
            options: ['ねます', 'おきます', 'いきます', 'きます'],
            correctAnswerIndex: 1,
            explanation: '「起きます」 memiliki cara baca 「おきます」 (bangun tidur). ねます = 寝ます (tidur), いきます = 行きます (pergi), きます = 来ます (datang).',
            indonesianTranslation: 'Saya bangun jam 6 setiap pagi.'
          },
          {
            id: 'n5_q2',
            mondaiNumber: 1,
            mondaiTitle: '問題１　___の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 2,
            questionText: 'きのう、駅の まえで <u>友だち</u>に 会いました。',
            options: ['ともだち', 'きょうだい', 'かぞく', 'せんせい'],
            correctAnswerIndex: 0,
            explanation: '「友だち」 dibaca 「ともだち」 (teman/sahabat). きょうだい = 兄弟 (saudara kandung), かぞく = 家族 (keluarga), せんせい = 先生 (guru).',
            indonesianTranslation: 'Kemarin, saya bertemu teman di depan stasiun.'
          },
          {
            id: 'n5_q3',
            mondaiNumber: 1,
            mondaiTitle: '問題１　___の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 3,
            questionText: 'あの <u>白い</u> 車は 田中さんの です。',
            options: ['くろい', 'あかい', 'しろい', 'あおい'],
            correctAnswerIndex: 2,
            explanation: '「白い」 dibaca 「しろい」 (putih). くろい = 黒い (hitam), あかい = 赤い (merah), あおい = 青い (biru).',
            indonesianTranslation: 'Mobil putih itu adalah milik Sdr. Tanaka.'
          },
          {
            id: 'n5_q4',
            mondaiNumber: 1,
            mondaiTitle: '問題１　___の ことばは ひらがなで どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 4,
            questionText: '机の うえに 辞書が <u>三冊</u> あります。',
            options: ['さんさつ', 'さんぼん', 'さんまい', 'さんびき'],
            correctAnswerIndex: 0,
            explanation: 'Buku dan majalah dihitung dengan satuan kata bantu bilangan 冊 (さつ). 3 buah buku = 三冊 (さんさつ).',
            indonesianTranslation: 'Di atas meja ada tiga buah kamus.'
          },

          // Mondai 2: 表記 (Menulis Kanji)
          {
            id: 'n5_q5',
            mondaiNumber: 2,
            mondaiTitle: '問題２　___の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 5,
            questionText: '郵便局で <u>てがみ</u>を 出しました。',
            options: ['紙手', '手紙', '切手', '白手'],
            correctAnswerIndex: 1,
            explanation: '「てがみ」 ditulis dengan kanji 「手紙」 (surat). 切手 (きって = perangko).',
            indonesianTranslation: 'Saya mengirim surat di kantor pos.'
          },
          {
            id: 'n5_q6',
            mondaiNumber: 2,
            mondaiTitle: '問題２　___の ことばは どう かきますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 6,
            questionText: 'きょうは つめたい <u>みず</u>を たくさん 飲みました。',
            options: ['木', '水', '火', '金'],
            correctAnswerIndex: 1,
            explanation: '「みず」 ditulis dengan kanji 「水」 (air). 木 = pohon, 火 = api, 金 = emas/uang.',
            indonesianTranslation: 'Hari ini saya minum banyak air dingin.'
          },

          // Mondai 3: 文脈規定 (Penggunaan Kata dalam Konteks)
          {
            id: 'n5_q7',
            mondaiNumber: 3,
            mondaiTitle: '問題３　（　）に なにを 入れますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 7,
            questionText: '部屋が くらいですから、（　）を つけて ください。',
            options: ['テレビ', 'ドア', 'でんき', 'まど'],
            correctAnswerIndex: 2,
            explanation: 'Konteks kalimat: "Karena kamar gelap (くらいですから)...", maka tindakan yang tepat adalah menyalakan lampu: でんき (電気) を つけて ください.',
            indonesianTranslation: 'Karena ruangan gelap, tolong nyalakan lampu.'
          },
          {
            id: 'n5_q8',
            mondaiNumber: 3,
            mondaiTitle: '問題３　（　）に なにを 入れますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 8,
            questionText: 'あした テストが ありますから、きょうは しっかり （　）します。',
            options: ['さんぽ', 'べんきょう', 'かいもの', 'りょこう'],
            correctAnswerIndex: 1,
            explanation: 'Konteks: "Karena besok ada ujian (テストが ありますから)...", tindakan yang logis adalah belajar: べんきょう (勉強) します.',
            indonesianTranslation: 'Karena besok ada ujian, hari ini saya akan belajar dengan sungguh-sungguh.'
          },

          // Mondai 4: 言い換え類義 (Padanan Kata / Parafrasa)
          {
            id: 'n5_q9',
            mondaiNumber: 4,
            mondaiTitle: '問題４　___の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 9,
            questionText: '<u>きのうは 日曜日でした。</u>',
            options: [
              'おとといは 土曜日でした。',
              'おとといは 月曜日でした。',
              'あしたは 月曜日です。',
              'きょうは 土曜日です。'
            ],
            correctAnswerIndex: 0,
            explanation: 'Jika kemarin adalah hari Minggu (きのうは日曜日), maka hari sebelum kemarin (dua hari lalu / おととい) pasti hari Sabtu (土曜日). Jawaban 1 adalah padanan yang paling tepat secara kronologi.',
            indonesianTranslation: 'Kemarin adalah hari Minggu.'
          },
          {
            id: 'n5_q10',
            mondaiNumber: 4,
            mondaiTitle: '問題４　___の ぶんと だいたい おなじ いみの ぶんが あります。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 10,
            questionText: '<u>この りょうりは からいです。</u>',
            options: [
              'この りょうりは あまく ないです。',
              'この りょうりは まずい です。',
              'この りょうりは つめたい です。',
              'この りょうりは おいしく ないです。'
            ],
            correctAnswerIndex: 0,
            explanation: '「からい」(pedas) berlawanan dengan 「あまい」(manis). Masakan yang pedas berarti masakan tersebut tidak manis (あまく ないです).',
            indonesianTranslation: 'Masakan ini pedas.'
          }
        ]
      },

      // SEKSI 2: 文法・読解 (TATA BAHASA & MEMBACA)
      {
        id: 'n5_sec_2',
        type: 'bunpou_dokkai',
        title: 'Tata Bahasa & Membaca',
        japaneseTitle: '言語知識（文法）・読解',
        timeLimitMinutes: 40,
        passingScore: 19,
        maxScore: 60,
        instructions: 'Pilihlah satu jawaban yang paling tepat. Untuk soal susun kalimat ★, tentukan pilihan kata yang menempati posisi tanda bintang ★.',
        questions: [
          // Mondai 1: 文法形式 (Pilihan Tata Bahasa / Partikel)
          {
            id: 'n5_q11',
            mondaiNumber: 1,
            mondaiTitle: '問題１　（　）に なにを 入れますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 11,
            questionText: 'わたしは 来週 家族（　）いっしょに 日本へ 行きます。',
            options: ['に', 'で', 'と', 'を'],
            correctAnswerIndex: 2,
            explanation: 'Pola 「[Orang] と いっしょに」 bermakna "bersama dengan [orang]". Partikel yang tepat adalah 「と」.',
            indonesianTranslation: 'Minggu depan saya akan pergi ke Jepang bersama dengan keluarga.'
          },
          {
            id: 'n5_q12',
            mondaiNumber: 1,
            mondaiTitle: '問題１　（　）に なにを 入れますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 12,
            questionText: '図書館で 本を（　）から、公園へ 行きました。',
            options: ['借り', '借りて', '借りた', '借りる'],
            correctAnswerIndex: 1,
            explanation: 'Pola 「~て から」 bermakna "setelah melakukan ~". Bentuk te dari 借ります (kelompok 2) adalah 「借りて」.',
            indonesianTranslation: 'Setelah meminjam buku di perpustakaan, saya pergi ke taman.'
          },
          {
            id: 'n5_q13',
            mondaiNumber: 1,
            mondaiTitle: '問題１　（　）に なにを 入れますか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 13,
            questionText: 'ここへ 入って（　）いけません。あぶないですから。',
            options: ['は', 'も', 'が', 'を'],
            correctAnswerIndex: 0,
            explanation: 'Pola larangan baku: 「~ては いけません」 (tidak boleh melakukan ~). Partikel pengisi adalah 「は」 (dibaca wa).',
            indonesianTranslation: 'Tidak boleh masuk ke sini. Karena berbahaya.'
          },

          // Mondai 2: 文の組み立て ★ (Menyusun Kalimat Bintang)
          {
            id: 'n5_q14',
            mondaiNumber: 2,
            mondaiTitle: '問題２　★に 入る ものは どれですか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 14,
            questionText: 'あした　____　____　★　____　ませんか。',
            options: ['いっしょに', 'えいがを', '見に', '行き'],
            correctAnswerIndex: 2, // Posisi bintang ★ jatuh di nomor 3 (見に)
            isStarQuestion: true,
            starSlots: ['いっしょに', 'えいがを', '見に', '行き'],
            explanation: 'Urutan susunan kalimat yang benar: 「あした [いっしょに] [えいがを] ★[見に] [行き] ませんか。」 Urutan nomor: 1 → 2 → 3 → 4. Bagian yang menempati posisi bintang ★ adalah nomor 3 「見に」.',
            indonesianTranslation: 'Maukah besok pergi menonton film bersama?'
          },
          {
            id: 'n5_q15',
            mondaiNumber: 2,
            mondaiTitle: '問題２　★に 入る ものは どれですか。１・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 15,
            questionText: 'これは　____　____　★　____　ケーキです。',
            options: ['母が', 'わたしのために', '作った', 'おいしい'],
            correctAnswerIndex: 2, // '作った' menempati urutan ke-3 (posisi ★)
            isStarQuestion: true,
            starSlots: ['母が', 'わたしのために', '作った', 'おいしい'],
            explanation: 'Urutan susunan kalimat yang benar: 「これは [母が] [わたしのために] ★[作った] [おいしい] ケーキです。」 Kata kerja bentuk lampau 作った memodifikasi frasa kata benda. Posisi ★ ditempati nomor 3 「作った」.',
            indonesianTranslation: 'Ini adalah kue lezat yang dibuatkan oleh ibu untuk saya.'
          },

          // Mondai 3: 短文読解 (Membaca Teks Pendek)
          {
            id: 'n5_q16',
            mondaiNumber: 3,
            mondaiTitle: '問題３　つぎの ぶんを よんで、しつもんに こたえて ください。こたえは １・２・３・４から いちばん いい ものを ひとつ えらんで ください。',
            questionNumber: 16,
            passageText: '【さくら図書館からのお知らせ】\nさくら図書館は 月曜日から 土曜日まで あいています。\nあいている 時間は 朝９時から 夕方５時までです。\n日曜日は 休みです。\n本は 一人 ３冊まで、２週間 借りることが できます。\nビデオは 図書館の なかで 見て ください。外へ 持って 行ってはいけません。',
            questionText: 'さくら図書館で しては いけない ことは どれですか。',
            options: [
              '土曜日の 午後２時に 本を 借りること',
              '本を ２冊 借りること',
              'ビデオを うちへ 持って 帰ること',
              '図書館の なかで ビデオを 見ること'
            ],
            correctAnswerIndex: 2,
            explanation: 'Dalam pengumuman tertulis: 「ビデオは 図書館の なかで 見て ください。外へ 持って 行ってはいけません。」 (Video silakan tonton di dalam perpustakaan. Tidak boleh dibawa keluar). Jadi membawa pulang video ke rumah adalah hal yang dilarang (nomor 3).',
            indonesianTranslation: 'Hal apakah yang tidak boleh dilakukan di Perpustakaan Sakura?'
          },

          // Mondai 4: 情報検索 (Mencari Informasi / Retrieval)
          {
            id: 'n5_q17',
            mondaiNumber: 4,
            mondaiTitle: '問題４　右の あんないを みて、しつもんに こたえて ください。',
            questionNumber: 17,
            passageText: '【日本語スピーチ大会】\n・日時：１０月１５日（日曜日）午後１時～午後４時\n・場所：国際センター ３階 ホール\n・参加費：無料（０円）\n・申込み（もうしこみ）：１０月１０日までに メールで 送って ください。\n※電話での 申込みは できません。定員（ていいん）は ５０人です。',
            questionText: 'スピーチ大会に 出たい 人は どうしなければ なりませんか。',
            options: [
              '１０月１５日に 国際センターへ 電話します。',
              '１０月１０日までに メールを 送ります。',
              'お金を 払ってから 申込みます。',
              '日曜日に 電話で 申込みます。'
            ],
            correctAnswerIndex: 1,
            explanation: 'Tertulis jelas di brosur: 「１０月１０日までに メールで 送って ください。※電話での 申込みは できません。」 Oleh karena itu, peserta harus mengirim email sebelum tanggal 10 Oktober (nomor 2).',
            indonesianTranslation: 'Apa yang harus dilakukan orang yang ingin ikut lomba pidato bahasa Jepang?'
          }
        ]
      },

      // SEKSI 3: 聴解 (MENDENGARKAN / LISTENING)
      {
        id: 'n5_sec_3',
        type: 'choukai',
        title: 'Mendengarkan (Choukai)',
        japaneseTitle: '聴解',
        timeLimitMinutes: 30,
        passingScore: 19,
        maxScore: 60,
        instructions: 'Dengarkan dialog dengan saksama. Tekan tombol "Putar Audio Soal" untuk memutar percakapan, lalu pilihlah jawaban yang paling tepat.',
        questions: [
          // Choukai Mondai 1: 課題理解 (Pemahaman Tugas / Action-oriented)
          {
            id: 'n5_q18',
            mondaiNumber: 1,
            mondaiTitle: '問題１　男の人と 女の人が はなしています。男の人は このあと まず なにを しますか。',
            questionNumber: 18,
            audioSituation: 'Situasi: Di dalam kantor, seorang wanita dan pria sedang mempersiapkan ruang rapat.',
            audioScript: '女の人：山田さん、もうすぐ 会議が はじまりますね。\n男の人：はい。わたしは なにを しましょうか。\n女の人：じゃ、まず テーブルの うえに この 資料を ならべて ください。\n男の人：わかりました。お茶も いれましょうか。\n女の人：お茶は 資料の あとで いいですよ。\n男の人：はい、わかりました。',
            questionText: '男の人は このあと まず なにを しますか。',
            options: [
              'お茶を いれます。',
              '資料を ならべます。',
              '会議を はじめます。',
              '部屋を そうじします。'
            ],
            correctAnswerIndex: 1,
            explanation: 'Wanita meminta: 「まず テーブルの うえに この 資料を ならべて ください」 (Pertama tolong susun dokumen ini di atas meja). Mengenai teh (お茶), wanita mengatakan: "setelah dokumen tidak apa-apa". Jadi yang dilakukan pria PERTAMA KALI (まず) adalah menyusun dokumen (資料を ならべます).',
            indonesianTranslation: 'Apa yang akan dilakukan pria pertama kali setelah ini?'
          },

          // Choukai Mondai 2: ポイント理解 (Poin Penting)
          {
            id: 'n5_q19',
            mondaiNumber: 2,
            mondaiTitle: '問題２　男の人と 女の人が でんわで はなしています。ふたりは なんじに どこで 会いますか。',
            questionNumber: 19,
            audioSituation: 'Situasi: Sepasang teman sedang berdiskusi melalui telepon untuk menentukan janji temu.',
            audioScript: '男の人：もしもし、あしたの 映画、何時に 会いましょうか。\n女の人：映画は ２時からですから、１時半に 駅の 改札口で どうですか。\n男の人：駅は 人が 多いですから、映画館の 前に しませんか。\n女の人：そうですね。じゃ、１時半に 映画館の 前で。\n男の人：はい、じゃ また あした！',
            questionText: 'ふたりは なんじに どこで 会いますか。',
            options: [
              '１時半に 駅の 改札口で',
              '１時半に 映画館の 前で',
              '２時に 映画館の 前で',
              '２時に 駅の 改札口で'
            ],
            correctAnswerIndex: 1,
            explanation: 'Pria mengusulkan bertemu di depan bioskop (映画館の前) karena stasiun ramai, dan wanita setuju: 「じゃ、１時半に 映画館の 前で」 (Kalau begitu, jam 1:30 di depan bioskop). Jadi jawaban nomor 2.',
            indonesianTranslation: 'Jam berapa dan di mana mereka berdua akan bertemu?'
          },

          // Choukai Mondai 3: 発話表現 (Ungkapan Respon Situasi)
          {
            id: 'n5_q20',
            mondaiNumber: 3,
            mondaiTitle: '問題３　えを 見ながら 聞いて ください。やじるし（矢印）の 人は なんと 言いますか。',
            questionNumber: 20,
            audioSituation: 'Situasi: Anda selesai bekerja di kantor dan hendak pulang lebih dulu meninggalkan rekan kerja.',
            audioScript: '質問：仕事を おえて、先に 帰ります。となりの 人に なんと 言いますか。',
            questionText: '先に うちへ 帰るとき、なんと 言いますか。',
            options: [
              'お大事に。',
              'お先に 失礼します。',
              'ごちそうさまでした。',
              'いってらっしゃい。'
            ],
            correctAnswerIndex: 1,
            explanation: 'Ungkapan baku saat pamit pulang kantor mendahului rekan kerja adalah 「お先に 失礼します」 (Saya permisi pulang lebih dulu). お大事に digunakan untuk orang sakit, ごちそうさまでした setelah makan.',
            indonesianTranslation: 'Saat pulang duluan dari kantor, apa yang diucapkan?'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. JLPT N4 — SIMULASI RESMI LENGKAP (Minna no Nihongo Bab 26–50 & Kanji N4)
  // =========================================================================
  {
    id: 'JLPT_N4',
    title: 'JLPT N4 Resmi · Simulasi Penuh',
    level: 'N4',
    subtitle: 'Standar Ujian Kemampuan Bahasa Jepang N4 (Minna no Nihongo Bab 26–50)',
    description: 'Format autentik 1:1 tingkat N4: mencakup kanji gabungan N4, tata bahasa intermediate (kondisional ~たら/~ば, ungkapan izin, keharusan, pasif, kausatif), menyusun kalimat bintang ★, serta choukai audio percakapan kerja dan sosial.',
    totalTimeMinutes: 115,
    totalQuestions: 35,
    maxScore: 180,
    passingScore: 90,
    badgeColor: '#3B82F6',
    sections: [
      {
        id: 'n4_sec_1',
        type: 'gengo_chishiki',
        title: 'Huruf & Kosakata',
        japaneseTitle: '言語知識（文字・語彙）',
        timeLimitMinutes: 25,
        passingScore: 19,
        maxScore: 60,
        instructions: 'Pilihlah satu jawaban yang paling tepat untuk menguji penguasaan kanji dan kosakata level N4.',
        questions: [
          {
            id: 'n4_q1',
            mondaiNumber: 1,
            mondaiTitle: '問題１　___の ことばは ひらがなで どう かきますか。',
            questionNumber: 1,
            questionText: '新しい 工場を <u>案内</u>して もらいました。',
            options: ['あんない', 'うんてん', 'れんらく', 'せつめい'],
            correctAnswerIndex: 0,
            explanation: '「案内」 dibaca 「あんない」 (memandu/menunjukkan jalan). 運転 = うんてん (menyetir), 連絡 = れんらく (menghubungi), 説明 = せつめい (menjelaskan).',
            indonesianTranslation: 'Saya dipandu melihat-lihat pabrik yang baru.'
          },
          {
            id: 'n4_q2',
            mondaiNumber: 1,
            mondaiTitle: '問題１　___の ことばは ひらがなで どう かきますか。',
            questionNumber: 2,
            questionText: '旅行の <u>準備</u>は もう 終わりましたか。',
            options: ['じゅんび', 'よてい', 'やくそく', 'けいかく'],
            correctAnswerIndex: 0,
            explanation: '「準備」 dibaca 「じゅんび」 (persiapan). 予定 = よてい (jadwal/rencana), 約束 = やくそく (janji), 計画 = けいかく (rencana).',
            indonesianTranslation: 'Apakah persiapan jalan-jalannya sudah selesai?'
          },
          {
            id: 'n4_q3',
            mondaiNumber: 2,
            mondaiTitle: '問題２　___の ことばは どう かきますか。',
            questionNumber: 3,
            questionText: 'パスポートを <u>なくして</u> しまいました。',
            options: ['落して', '忘して', '無くして', '取して'],
            correctAnswerIndex: 2,
            explanation: '「なくして」 (kehilangan) berasal dari kata kerja 無くします (なくします).',
            indonesianTranslation: 'Saya telah kehilangan paspor saya.'
          },
          {
            id: 'n4_q4',
            mondaiNumber: 3,
            mondaiTitle: '問題３　（　）に なにを 入れますか。',
            questionNumber: 4,
            questionText: 'エレベーターが （　）して 動かないので、階段を 使いました。',
            options: ['故障', '邪魔', '複雑', '急行'],
            correctAnswerIndex: 0,
            explanation: 'Konteks: "Lift tidak bergerak karena...", kata yang tepat adalah 故障 (こしょう = rusak/mogok).',
            indonesianTranslation: 'Karena lift rusak dan tidak bergerak, saya menggunakan tangga.'
          }
        ]
      },
      {
        id: 'n4_sec_2',
        type: 'bunpou_dokkai',
        title: 'Tata Bahasa & Membaca',
        japaneseTitle: '言語知識（文法）・読解',
        timeLimitMinutes: 55,
        passingScore: 19,
        maxScore: 60,
        instructions: 'Ujilah pemahaman tata bahasa N4 (kalimat majemuk, bentuk sopan keigo, pengandaian) dan kemampuan menganalisis wacana bacaan.',
        questions: [
          {
            id: 'n4_q5',
            mondaiNumber: 1,
            mondaiTitle: '問題１　（　）に なにを 入れますか。',
            questionNumber: 5,
            questionText: '熱が ありますから、お風呂に （　）ほうが いいですよ。',
            options: ['入らない', '入った', '入る', '入って'],
            correctAnswerIndex: 0,
            explanation: 'Pola saran negatif: 「~ない ほうが いいです」 (sebaiknya jangan ~). Karena demam, sebaiknya jangan masuk berendam air panas: 入らない ほうが いいです.',
            indonesianTranslation: 'Karena Anda sedang demam, sebaiknya jangan berendam di bak mandi.'
          },
          {
            id: 'n4_q6',
            mondaiNumber: 2,
            mondaiTitle: '問題２　★に 入る ものは どれですか。',
            questionNumber: 6,
            questionText: '日本へ　____　____　★　____　つもりです。',
            options: ['富士山に', '来たら', '登る', 'ぜひ'],
            correctAnswerIndex: 0, // '富士山に' berada di posisi ★
            isStarQuestion: true,
            starSlots: ['来たら', 'ぜひ', '富士山に', '登る'],
            explanation: 'Susunan kalimat yang tepat: 「日本へ [来たら] [ぜひ] ★[富士山に] [登る] つもりです。」 (Jika datang ke Jepang, saya berniat untuk mendaki Gunung Fuji). Bagian yang menempati tanda ★ adalah nomor 1 「富士山に」.',
            indonesianTranslation: 'Jika datang ke Jepang, saya berniat untuk mendaki Gunung Fuji.'
          },
          {
            id: 'n4_q7',
            mondaiNumber: 3,
            mondaiTitle: '問題３　つぎの ぶんを よんで、しつもんに こたえて ください。',
            questionNumber: 7,
            passageText: '【宅配便（たくはいびん）の 不在連絡票（ふざいれんらくひょう）】\nお客様へ：\n本日、お荷物を お届けに 参りましたが、ご不在でしたので 持ち帰りました。\nお荷物の 再配達（さいはいたつ）を ご希望の 方は、下記の いずれかの 方法で ご連絡ください。\n１．インターネット受付：２４時間いつでも お申込みいただけます。\n２．電話自動受付：本日中の 配達希望は 午後６時までに おかけください。\n※保管期限（ほかんきげん）：１１月２０日まで。期限を 過ぎますと 荷物は 送り主へ 戻送されます。',
            questionText: '不在票を もらった 人について、正しい ものは どれですか。',
            options: [
              '荷物は いつでも 電話で その日のうちに 届けてもらえる。',
              '１１月２０日を 過ぎても 荷物は 宅配会社で ずっと 預かってくれる。',
              'インターネットなら 夜でも 再配達の 申込みが できる。',
              '再配達を たのむには お金を 払わなければ ならない。'
            ],
            correctAnswerIndex: 2,
            explanation: 'Poin nomor 1 pada surat pemberitahuan: 「インターネット受付：２４時間いつでも お申込みいただけます」 (Penerimaan internet: dapat mendaftar 24 jam kapan saja). Jadi opsi 3 benar.',
            indonesianTranslation: 'Manakah pernyataan yang benar mengenai orang yang menerima surat pemberitahuan pengiriman paket?'
          }
        ]
      },
      {
        id: 'n4_sec_3',
        type: 'choukai',
        title: 'Mendengarkan (Choukai)',
        japaneseTitle: '聴解',
        timeLimitMinutes: 35,
        passingScore: 19,
        maxScore: 60,
        instructions: 'Dengarkan dialog situasi kerja atau kehidupan di Jepang secara teliti, kemudian tentukan kesimpulan yang benar.',
        questions: [
          {
            id: 'n4_q8',
            mondaiNumber: 1,
            mondaiTitle: '問題１　会社で 男の人と 女の人が はなしています。男の人は 何を しなければ なりませんか。',
            questionNumber: 8,
            audioSituation: 'Situasi: Percakapan kerja di kantor antara atasan wanita dan staf pria.',
            audioScript: '女の人：佐藤さん、明日の プレゼンテーションの 準備は できましたか。\n男の人：はい、プロジェクターの 確認は 終わりました。\n女の人：参加者の 人数が ３人 増えたので、資料を あと３部 コピーして おいて もらえますか。\n男の人：かしこまりました。すぐ コピーして 会議室に 運んでおきます。\n女の人：ありがとう。よろしくね。',
            questionText: '男の人は このあと 何を しますか。',
            options: [
              'プロジェクターを 修理します。',
              '参加者に 電話します。',
              '資料を ３部 コピーします。',
              'プレゼンテーションを はじめます。'
            ],
            correctAnswerIndex: 2,
            explanation: 'Atasan meminta: 「資料を あと３部 コピーして おいて もらえますか」 (Bisa tolong fotokopi dokumen 3 rangkap lagi?), dan pria menjawab: 「かしこまりました。すぐ コピーして...」. Jadi pria akan memfotokopi dokumen sebanyak 3 rangkap.',
            indonesianTranslation: 'Apa yang akan dilakukan pria setelah ini?'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. JFT-BASIC A2 — STANDAR CBT JAPAN FOUNDATION (Tokutei Ginou / SSW)
  // =========================================================================
  {
    id: 'JFT_BASIC_A2',
    title: 'JFT-Basic A2 · Simulasi CBT Resmi',
    level: 'A2',
    subtitle: 'Japan Foundation Test for Basic Japanese (Standar Visa Kerja Tokutei Ginou / Pekerja Terampil)',
    description: 'Format CBT (Computer Based Test) 60 menit yang menguji kecakapan bahasa Jepang praktis untuk hidup dan bekerja di Jepang: Huruf & Kosakata rambu/instruksi, Percakapan kerja, Audio mendengarkan pengumuman & instruksi, serta Membaca memo, formulir, dan aturan lingkungan.',
    totalTimeMinutes: 60,
    totalQuestions: 25,
    maxScore: 250,
    passingScore: 200,
    badgeColor: '#3978D6',
    sections: [
      {
        id: 'jft_sec_1',
        type: 'jft_moji_goi',
        title: 'Huruf & Kosakata',
        japaneseTitle: 'セクション１：文字と語彙',
        timeLimitMinutes: 15,
        passingScore: 50,
        maxScore: 65,
        instructions: 'Pilihlah makna kata, penggunaan kanji praktis, atau rambu publik yang tepat.',
        questions: [
          {
            id: 'jft_q1',
            mondaiNumber: 1,
            mondaiTitle: '１．看板（かんばん）や 表示（ひょうじ）の 意味として 最も 適切な ものを えらんで ください。',
            questionNumber: 1,
            questionText: '工場の ドアに 「関係者以外 <u>立入禁止</u>」と 書いて あります。どういう 意味ですか。',
            options: [
              'だれでも 入ることが できます。',
              'ここで 働いている 人以外は 入ってはいけません。',
              '入るときに お金を 払わなければ なりません。',
              '靴を ぬいで 入って ください。'
            ],
            correctAnswerIndex: 1,
            explanation: '「立入禁止」(たちいりきんし) berarti dilarang masuk. 「関係者以外」(かんけいしゃいがい) berarti selain pihak yang berkepentingan. Jadi artinya: orang selain pekerja/petugas tidak boleh masuk.',
            indonesianTranslation: 'Di pintu pabrik tertulis: "Dilarang Masuk Selain yang Berkepentingan". Apakah artinya?'
          },
          {
            id: 'jft_q2',
            mondaiNumber: 1,
            mondaiTitle: '２．（　）に 入る いちばん いい 言葉を えらんで ください。',
            questionNumber: 2,
            questionText: '仕事が 終わったら、必ず 機械の スイッチを （　）て ください。',
            options: ['きっ', 'けし', 'きり', 'とめ'],
            correctAnswerIndex: 0,
            explanation: 'Mematikan saklar mesin dinyatakan dengan 「スイッチを 切る」(きって ください).',
            indonesianTranslation: 'Jika pekerjaan selesai, pastikan untuk mematikan saklar mesin.'
          }
        ]
      },
      {
        id: 'jft_sec_2',
        type: 'jft_kaiwa',
        title: 'Percakapan & Ungkapan',
        japaneseTitle: 'セクション２：会話と表現',
        timeLimitMinutes: 15,
        passingScore: 50,
        maxScore: 65,
        instructions: 'Pilihlah respons percakapan yang tepat sesuai etika sosial dan lingkungan kerja Jepang.',
        questions: [
          {
            id: 'jft_q3',
            mondaiNumber: 2,
            mondaiTitle: '会話の （　）に 入る 最も 適切な 返事を えらんで ください。',
            questionNumber: 3,
            questionText: '同僚（どうりょう）：「重そうですね。手伝いましょうか。」\nあなた：「（　）」',
            options: [
              'いいえ、けっこうです。すみません。',
              'ありがとうございます。じゃ、これをお願いします。',
              'どういたしまして。こちらこそ。',
              'おつかれさまでした。また明日。'
            ],
            correctAnswerIndex: 1,
            explanation: 'Saat rekan menawarkan bantuan dengan ramah ("Kelihatannya berat, mau saya bantu?"), respons sopan yang alami adalah berterima kasih lalu menerima bantuan: 「ありがとうございます。じゃ、これをお願いします。」',
            indonesianTranslation: 'Rekan: "Kelihatannya berat, mau saya bantu?" Anda: "..."'
          }
        ]
      },
      {
        id: 'jft_sec_3',
        type: 'jft_choukai',
        title: 'Mendengarkan (Choukai)',
        japaneseTitle: 'セクション３：聴解',
        timeLimitMinutes: 15,
        passingScore: 50,
        maxScore: 60,
        instructions: 'Dengarkan pengumuman atau instruksi praktis untuk menyelesaikan tugas.',
        questions: [
          {
            id: 'jft_q4',
            mondaiNumber: 3,
            mondaiTitle: 'スーパーの 店内放送（ほうそう）を 聞いて、しつもんに こたえて ください。',
            questionNumber: 4,
            audioSituation: 'Situasi: Pengumuman diskon spesial jam malam di supermarket Jepang.',
            audioScript: 'アナウンス：本日は ご来店いただき 誠に ありがとうございます。ただいまより １階 鮮魚コーナーにおきまして、本日仕入れの お刺身・お魚全品を、表示価格より 半額の タイムセールを 行います。どうぞ お立ち寄りくださいませ。',
            questionText: 'いまから 何が 半額に なりますか。',
            options: [
              '２階の 洋服',
              'お刺身・お魚',
              '野菜と くだもの',
              'お弁当と お惣菜'
            ],
            correctAnswerIndex: 1,
            explanation: 'Penyiar mengumumkan: 「鮮魚コーナーにおきまして...お刺身・お魚全品を、表示価格より 半額の タイムセールを 行います」. Jadi yang diskon setengah harga (半額) adalah sashimi dan ikan (お刺身・お魚).',
            indonesianTranslation: 'Mulai sekarang, barang apakah yang didiskon setengah harga?'
          }
        ]
      },
      {
        id: 'jft_sec_4',
        type: 'jft_dokkai',
        title: 'Membaca (Dokkai Praktis)',
        japaneseTitle: 'セクション４：読解',
        timeLimitMinutes: 15,
        passingScore: 50,
        maxScore: 60,
        instructions: 'Bacalah informasi praktis (aturan buang sampah, jadwal kerja, pesan grup) dan jawab pertanyaannya.',
        questions: [
          {
            id: 'jft_q5',
            mondaiNumber: 4,
            mondaiTitle: 'アパートの ゴミ出しカレンダーを 読んで、しつもんに こたえて ください。',
            questionNumber: 5,
            passageText: '【アパートの ゴミ収集（しゅうしゅう）日】\n・もえるゴミ（生ゴミ・紙など）：火曜日・金曜日\n・もえないゴミ（ビン・カン・ペットボトル）：水曜日\n・プラスチック製容器：木曜日\n※ゴミは 朝８時までに 決められた ゴミステーションへ 出して ください。前日の 夜に 出してはいけません。',
            questionText: 'ジュースの カンを 捨てたいです。いつ 出しますか。',
            options: [
              '火曜日の 朝８時まで',
              '水曜日の 朝８時まで',
              '木曜日の 夜',
              '金曜日の 朝８時まで'
            ],
            correctAnswerIndex: 1,
            explanation: 'Kaleng (カン) termasuk dalam kategori もえないゴミ yang jadwal pembuangannya adalah hari Rabu (水曜日) sebelum jam 8 pagi.',
            indonesianTranslation: 'Saya ingin membuang kaleng jus. Kapan kaleng tersebut harus dikeluarkan?'
          }
        ]
      }
    ]
  }
];
