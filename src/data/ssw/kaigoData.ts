import { SswSectorData } from '../../types/ssw';

export const KAIGO_SECTOR_DATA: SswSectorData = {
  id: 'kaigo',
  name: 'Kaigo (Caregiver / Perawat Lansia)',
  japaneseName: '介護',
  romajiName: 'Kaigo',
  iconName: 'HeartHandshake',
  tagline: 'Mendampingi kemandirian lansia dengan empati, profesionalisme, dan martabat kemanusiaan di fasilitas panti jompo Jepang.',
  badge: 'Permintaan Tertinggi',
  badgeColor: 'text-rose-400 bg-rose-500/15 border-rose-500/30',
  overview: {
    workEnvironment: 'Bekerja di fasilitas perawatan lansia khusus (Tokubetsu Yougo Roujin Houmu / Tokuyou), panti rehabilitasi lansia (Rouken), Day Service Center, atau Group Home dengan standar sanitasi, kenyamanan, dan teknologi bantuan modern.',
    mainDuties: [
      'Bantuan mobilitas fisik (berpindah tempat tidur ke kursi roda, berjalan).',
      'Bantuan makan dan minum higienis dengan pemantauan risiko tersedak (gokokku).',
      'Bantuan mandi (kebersihan tubuh), berpakaian, dan perawatan inkontinensia/eliminasi.',
      'Pencatatan tanda-tanda vital (suhu tubuh, tekanan darah, nadi) dan pelaporan rutin.',
      'Aktivitas rekreasi, senam otak, dan komunikasi terapeutik untuk mencegah penurunan fungsi kognitif.'
    ],
    technicalExamName: 'Nursing Care Skills Evaluation Test (介護技能評価試験) & Nursing Care Japanese Evaluation Test (介護日本語評価試験)',
    examOrganizer: 'Prometric & Ministry of Health, Labour and Welfare (MHLW / 厚生労働省)',
    passRequirement: 'Lulus tes keterampilan (skor ≥ 60%) + tes bahasa Kaigo (skor ≥ 60%) + JFT-Basic A2 atau JLPT N4.',
    salaryInsight: 'Gaji pokok berkisar antara ¥190.000 hingga ¥250.000/bulan (di luar tunjangan shift malam / yakekin teate dan bonus tahunan).'
  },
  officialReferences: [
    {
      title: 'Textbook for Caregiver Specified Skilled Worker Training (介護特定技能学習用テキスト)',
      agency: 'Ministry of Health, Labour and Welfare of Japan (MHLW)',
      description: 'Pedoman kurikulum resmi pemerintah Jepang mengenai prinsip dasar keperawatan, anatomi manusia, dan etika perawatan.'
    },
    {
      title: 'Nursing Care Japanese Evaluation Test Sample Questions (介護日本語評価試験 サンプル問題)',
      agency: 'Japan International Corporation of Welfare Services (JICWELS)',
      description: 'Standar evaluasi kompetensi bahasa Jepang keperawatan untuk komunikasi dengan lansia dan staf medis.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG
    // ------------------------------------------------------------------------
    {
      id: 'kaigo_ch1',
      sectorId: 'kaigo',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Filosofi Perawatan Lansia & Martabat Manusia (Songen)',
      japaneseTitle: '介護の基本理念と人間の尊厳',
      estimatedMinutes: 25,
      objectives: [
        'Memahami filosofi dasar Kaigo modern di Jepang yang berfokus pada martabat manusia.',
        'Menguasai konsep kemandirian hidup (Jiritsu Shien / 自立支援).',
        'Menerapkan etika perlindungan privasi dan kerahasiaan informasi pengguna jasa.'
      ],
      contentExplanation: `
Di Jepang, konsep **Kaigo (介護)** bukanlah sekadar "melayani" atau melakukan semua hal untuk lansia, melainkan **Mendukung Kemandirian (自立支援 - Jiritsu Shien)**. 

Prinsip mendasar yang wajib dipegang teguh oleh setiap caregiver adalah **Martabat Manusia (人間の尊厳 - Ningen no Songen)**. Setiap lansia memiliki riwayat hidup, kepribadian, nilai-nilai moral, dan hak asasi yang harus dihormati seutuhnya tanpa memandang keterbatasan fisik maupun kondisi demensia (*dementia/ninchishou*).

Caregiver tidak boleh mengambil alih seluruh aktivitas yang sebenarnya masih sanggup dikerjakan sendiri oleh lansia. Apabila lansia masih mampu menyendok makanan dengan tangan kanannya, tugas caregiver adalah memfasilitasi posisi duduk yang stabil dan menyemangati, bukan langsung menyuapi. Mengambil alih hal yang masih bisa dilakukan sendiri justru akan mempercepat penurunan fungsi otot dan daya pikir (*disuse syndrome* / 廃用症候群).

Selain itu, caregiver memegang tanggung jawab mutlak atas **Kerahasiaan Data Pengguna (プライバシーの保護 - Puraibashii no Hogo)**. Seluruh riwayat penyakit, kondisi keuangan, hingga foto kegiatan lansia tidak boleh disebarluaskan ke media sosial atau dibicarakan di luar kepentingan medis tim kerja.
      `,
      keyTerms: [
        {
          japanese: '人間の尊厳',
          kana: 'にんげんのそんげん',
          romaji: 'ningen no songen',
          indonesian: 'Martabat manusia / kehormatan hak asasi setiap individu',
          note: 'Prinsip nomor satu dalam hukum kesejahteraan lansia Jepang.'
        },
        {
          japanese: '自立支援',
          kana: 'じりつしえん',
          romaji: 'jiritsu shien',
          indonesian: 'Dukungan kemandirian hidup',
          note: 'Membantu hanya pada bagian yang tidak mampu dilakukan sendiri.'
        },
        {
          japanese: '利用者',
          kana: 'りようしゃ',
          romaji: 'riyousha',
          indonesian: 'Pengguna jasa / lansia yang dirawat di panti',
          note: 'Disebut "Riyousha-sama" dengan sufiks penghormatan.'
        },
        {
          japanese: 'プライバシーの保護',
          kana: 'ぷらいばしーのほご',
          romaji: 'puraibashii no hogo',
          indonesian: 'Perlindungan privasi dan rahasia pribadi',
          note: 'Wajib dijaga bahkan setelah berhenti bekerja di panti.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Kakek Tanaka Ingin Memakai Kaus Kakinya Sendiri',
        scenario: 'Kakek Tanaka (82 tahun) mengalami kelumpuhan ringan di sisi kiri tubuhnya pascastroke. Saat pagi hari, ia membutuhkan waktu 10 menit hanya untuk memasang kaus kaki kanannya sendiri. Caregiver baru bernama Budi merasa terburu-buru karena jadwal sarapan hampir tiba.',
        dialogue: [
          {
            speaker: 'Budi (Caregiver)',
            role: 'Staf Pemula',
            japanese: '田中様、時間がありませんから、私が履かせましょうか。',
            kana: 'たなかさま、じかんが ありませんから、わたしが はかせましょうか。',
            romaji: 'Tanaka-sama, jikan ga arimasen kara, watashi ga hakasemashou ka.',
            indonesian: 'Tuan Tanaka, karena waktunya mepet, bagaimana kalau saya saja yang memakaikannya?'
          },
          {
            speaker: 'Tanaka-san (Lansia)',
            role: 'Pengguna Jasa',
            japanese: '自分で…まだできるよ。手伝わないでくれ。',
            kana: 'じぶんで…まだ できるよ。てつだわないで くれ。',
            romaji: 'Jibun de... mada dekiru yo. Tetsudawanaide kure.',
            indonesian: 'Aku sendiri... masih bisa kok. Tolong jangan dibantu.'
          },
          {
            speaker: 'Leader Sato',
            role: 'Senior Caregiver',
            japanese: 'ブディさん、田中様がご自分でできることは、見守りましょう。それも大切な自立支援ですよ。',
            kana: 'ブディさん、たなかさまが ごじぶんで できることは、みまもりましょう。それも たいせつな じりつしえんですよ。',
            romaji: 'Budi-san, Tanaka-sama ga gojibun de dekiru koto wa, mimamorimashou. Sore mo taisetsu na jiritsu shien desu yo.',
            indonesian: 'Budi, hal yang masih bisa dikerjakan sendiri oleh Tuan Tanaka, mari kita awasi dengan sabar. Itu juga dukungan kemandirian yang penting.'
          }
        ],
        takeaway: 'Jangan memaksakan kecepatan kerja staf dengan mengorbankan kemandirian lansia. Mengawasi dengan aman (見守り - mimamori) adalah bentuk bantuan keperawatan bernilai tinggi.'
      },
      visualDiagram: {
        title: 'Diagram Alur 3 Pilar Utama Kaigo',
        type: 'cards',
        items: [
          {
            label: '1. Ningen no Songen (人間の尊厳)',
            description: 'Memperlakukan lansia sebagai individu utuh dengan rasa hormat tanpa membeda-bedakan latar belakang.',
            badge: 'Pondasi Etika'
          },
          {
            label: '2. Jiritsu Shien (自立支援)',
            description: 'Membimbing lansia menentukan pilihan hidupnya sendiri (Jiko Kettei) dan mempertahankan sisa kemampuan fisik.',
            badge: 'Tujuan Asuhan'
          },
          {
            label: '3. QOL (Quality of Life / 生活の質)',
            description: 'Menjaga agar lansia menikmati hari tua dengan rasa bahagia, bermakna, dan tenteram.',
            badge: 'Hasil Akhir'
          }
        ]
      },
      importantPoints: [
        'Prinsip Kaigo adalah dukungan kemandirian (Jiritsu Shien), bukan melayani seperti pelayan hotel.',
        'Wajib selalu menyapa dengan sebutan kehormatan (nama keluarga + 様 / -sama).',
        'Dilarang keras melakukan kekerasan fisik, verbal, pengabaian (neglect), maupun pelanggaran privasi finansial.',
        'Mengawasi dengan tenang saat lansia mencoba beraktivitas sendiri adalah bagian dari terapi pemulihan.'
      ],
      summary: 'Perawatan lansia di Jepang berlandaskan pada penghormatan martabat manusia dan penguatan kemandirian (Jiritsu Shien). Caregiver berperan sebagai fasilitator yang menjaga keselamatan dan kualitas hidup (QOL) lansia.',
      practiceQuestions: [
        {
          id: 'kaigo_ch1_q1',
          questionNumber: 1,
          questionText: '日本の介護における「自立支援」の考え方として、最も適切なものを一つ選びなさい。',
          situation: 'Prinsip dasar dukungan kemandirian (Jiritsu Shien) dalam Kaigo Jepang.',
          options: [
            '利用者が時間がかかることは、すべて介護職が代わりにやってあげること。',
            '利用者が持っている力を生かし、自分でできることは自分でできるように支援すること。',
            '利用者が希望しても、危険な動作はすべてベッドの上で安静にさせること。',
            '家族の都合を最優先にして、介護の計画を決めること。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Inti dari 自立支援 (Jiritsu Shien) adalah memanfaatkan kemampuan yang masih dimiliki lansia sehingga mereka dapat melakukan apa yang mereka mampu secara mandiri. Mengambil alih semua tugas (Pilihan 1) atau membiarkan di ranjang terus (Pilihan 3) adalah tindakan keliru.',
          translation: 'Pilihlah satu pernyataan yang paling tepat mengenai konsep "Dukungan Kemandirian (Jiritsu Shien)" dalam keperawatan Jepang.'
        },
        {
          id: 'kaigo_ch1_q2',
          questionNumber: 2,
          questionText: '介護職の「プライバシーの保護」に関する行動として、適切なものを一つ選びなさい。',
          situation: 'Tindakan etis terkait perlindungan privasi pengguna panti.',
          options: [
            '利用者の可愛い笑顔の写真を、許可なく個人のSNSに投稿した。',
            '居酒屋で友人に、担当している利用者の病名や家族の秘密を話した。',
            '着替えや排泄の介助を行うときは、カーテンやドアを閉めて周囲から見えないように配慮した。',
            '利用者の日記を面白かったので他の職員全員に回覧した。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Menutup tirai atau pintu saat membantu ganti baju/buang air adalah bentuk nyata perlindungan privasi dan martabat lansia. Pilihan 1, 2, dan 4 adalah pelanggaran berat kerahasiaan data (守秘義務違反).',
          translation: 'Pilihlah tindakan yang tepat terkait perlindungan privasi oleh staf caregiver.'
        }
      ],
      officialReference: {
        source: 'MHLW Japan - Specified Skilled Worker Caregiver Curriculum',
        agency: 'Ministry of Health, Labour and Welfare (厚生労働省)',
        documentTitle: 'テキスト 第1章 介護の基本 (Bab 1 Dasar-Dasar Keperawatan)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: KOSAKATA KHUSUS PEKERJAAN
    // ------------------------------------------------------------------------
    {
      id: 'kaigo_ch2',
      sectorId: 'kaigo',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Kosakata Anatomi, Tanda Vital & Alat Bantu Keperawatan',
      japaneseTitle: '身体の部位・バイタルサイン・福祉用具の用語',
      estimatedMinutes: 30,
      objectives: [
        'Menghafal nama-nama bagian tubuh manusia yang sering dilaporkan saat terjadi luka/memar.',
        'Mengenal istilah tanda-tanda vital (vital signs / バイタルサイン).',
        'Menguasai nama dan fungsi alat bantu lansia (kursi roda, walker, kasur angin anti-dekubitus).'
      ],
      contentExplanation: `
Dalam rutinitas kerja di panti jompo Jepang, pergantian shift (*moushiokuri* / 申し送り) dan buku catatan keperawatan (*kaigo kiroku* / 介護記録) mewajibkan penggunaan istilah medis dan keperawatan yang presisi.

Jika seorang lansia tergelincir, perawat medis akan langsung menanyakan: *"Di bagian tubuh mana yang terbentur? Apakah ada kemerahan pada sendi lutut (膝関節 - hizakansetsu) atau pinggul (股関節 - kokansetsu)?"*. Caregiver tidak boleh menjawab ambigu seperti *"di daerah kaki"*.

Selain itu, pemeriksaan rutin harian mencakup **Tanda Vital (バイタルサイン - Baataru Sain)** yang terdiri dari:
1. **Suhu Tubuh (体温 - Taion)**: Normal berkisar antara 36.0°C – 37.0°C.
2. **Tekanan Darah (血圧 - Ketsuatsu)**: Dibagi menjadi sistolik (*saikou ketsuatsu*) dan diastolik (*saitei ketsuatsu*).
3. **Denyut Nadi (脈拍 - Myakuhaku)**: Normal rata-rata 60–90 kali/menit saat istirahat.
4. **Pernapasan (呼吸 - Kokyuu)**: Normal 12–20 kali/menit.
5. **Saturasi Oksigen (SpO2 / 酸素飽和度 - Sanso Houwado)**: Diukur dengan alat pulse oximeter.
      `,
      keyTerms: [
        {
          japanese: '車椅子',
          kana: 'くるまいす',
          romaji: 'kurumaisu',
          indonesian: 'Kursi roda',
          note: 'Wajib memastikan rem (burēki) terkunci saat berhenti.'
        },
        {
          japanese: '歩行器',
          kana: 'ほこうき',
          romaji: 'hokouki',
          indonesian: 'Alat bantu jalan (walker)',
          note: 'Membantu lansia yang masih bisa melangkah namun keseimbangannya goyah.'
        },
        {
          japanese: '杖',
          kana: 'つえ',
          romaji: 'tsue',
          indonesian: 'Tongkat penopang jalan',
          note: 'Terdiri dari tongkat T-cane atau tongkat berkaki empat (4-ten tsue).'
        },
        {
          japanese: '血圧計',
          kana: 'けつあつけい',
          romaji: 'ketsuatsukei',
          indonesian: 'Tensimeter (alat pengukur tekanan darah)',
          note: 'Dipasang sejajar dengan ketinggian jantung lansia.'
        },
        {
          japanese: '褥瘡 / 床ずれ',
          kana: 'じょくそう / とこずれ',
          romaji: 'jokusou / tokozure',
          indonesian: 'Luka dekubitus (luka baring akibat tekanan lama)',
          note: 'Dicegah dengan perubahan posisi tidur (taii henkan) setiap 2 jam.'
        },
        {
          japanese: '麻痺',
          kana: 'まひ',
          romaji: 'mahi',
          indonesian: 'Kelumpuhan / paralisis anggota gerak',
          note: 'Sisi lumpuh disebut "Kahi (患側 - Kansoku)", sisi sehat disebut "Kensoku (健側)".'
        }
      ],
      workplaceCaseStudy: {
        title: 'Situasi Operan Shift: Melaporkan Kondisi Tanda Vital Nenek Suzuki',
        scenario: 'Caregiver Siti melakukan pengukuran tanda vital pada Nenek Suzuki sebelum makan siang. Ditemukan suhu tubuh 37.8°C dan wajahnya tampak memerah lesu.',
        dialogue: [
          {
            speaker: 'Siti (Caregiver)',
            role: 'Staf Jaga Pagi',
            japanese: '看護師の山田さん、鈴木様のバイタルを測定したところ、体温が37度8分ありました。少し活気がありません。',
            kana: 'かんごしの やまださん、すずきさまの ばいたるを そくていしたところ、たいおんが さんじゅうななど はちぶ ありました。すこし かっきが ありません。',
            romaji: 'Kangoshi no Yamada-san, Suzuki-sama no baitaru wo sokutei shita tokoro, taion ga 37-do 8-bu arimashita. Sukoshi kakki ga arimasen.',
            indonesian: 'Ners Yamada, saat saya mengukur tanda vital Nenek Suzuki, suhu tubuhnya 37,8°C. Beliau tampak agak lesu kurang bertenaga.'
          },
          {
            speaker: 'Yamada (Perawat)',
            role: 'Perawat Penanggung Jawab',
            japanese: '報告ありがとう。血圧と脈拍はどうでしたか？咳や痰はありますか？',
            kana: 'ほうこく ありがとう。けつあつと みゃくはくは どうでしたか？せきや たんは ありますか？',
            romaji: 'Houkoku arigatou. Ketsuatsu to myakuhaku wa dou deshita ka? Seki ya tan wa arimasu ka?',
            indonesian: 'Terima kasih laporannya. Bagaimana dengan tensi dan pulsanya? Apakah ada batuk atau dahak?'
          },
          {
            speaker: 'Siti (Caregiver)',
            role: 'Staf Jaga Pagi',
            japanese: '血圧は130の80、脈拍は88回です。咳はありませんが、水分をあまり摂られていません。',
            kana: 'けつあつは ひゃくさんじゅうの はちじゅう、みゃくはくは はちじゅうはちかいです。せきは ありませんが、すいぶんを あまり とられていません。',
            romaji: 'Ketsuatsu wa 130 no 80, myakuhaku wa 88-kai desu. Seki wa arimasen ga, suibun wo amari torarete imasen.',
            indonesian: 'Tekanan darah 130/80 mmHg, denyut nadi 88x/menit. Belum ada batuk, tetapi beliau kurang minum air.'
          }
        ],
        takeaway: 'Setiap anomali tanda vital harus segera dilaporkan ke perawat (Nurse / Kangoshi) dengan angka yang tepat dan pengamatan gejala penyerta.'
      },
      visualDiagram: {
        title: 'Tabel Parameter Normal Tanda-Tanda Vital Lansia',
        type: 'table',
        items: [
          {
            label: 'Suhu Tubuh (体温)',
            description: '36.0°C – 37.0°C (Lansia cenderung memiliki suhu basal lebih rendah, ≥ 37.5°C diwaspadai demam).',
            highlight: 'Taion (たいおん)'
          },
          {
            label: 'Tekanan Darah (血圧)',
            description: 'Sistolik: 100–139 mmHg / Diastolik: 60–89 mmHg (Waspadai hipotensi ortostatik saat bangun).',
            highlight: 'Ketsuatsu (けつあつ)'
          },
          {
            label: 'Denyut Nadi (脈拍)',
            description: '60 – 80 kali per menit, ritme teratur (seijou na rizumu).',
            highlight: 'Myakuhaku (みゃくはく)'
          },
          {
            label: 'Pernapasan (呼吸)',
            description: '12 – 20 kali per menit tanpa suara mengi (wheezing/suutoradaa).',
            highlight: 'Kokyuu (こきゅう)'
          }
        ]
      },
      importantPoints: [
        'Selalu bedakan sisi tubuh yang lumpuh (Kansoku / 患側) dan sisi yang sehat (Kensoku / 健側).',
        'Saat mengunci kursi roda, wajib memastikan kedua rem tangan kiri & kanan terpasang kencang (kake-wasure o boushi).',
        'Dekubitus (Jokusou) sering timbul di tonjolan tulang panggul/tulang ekor (senkotsubu); laporkan segera jika kulit memerah.'
      ],
      summary: 'Penguasaan kosakata anatomi tubuh dan tanda-tanda vital memungkinkan komunikasi medis yang akurat antara caregiver dan perawat guna mencegah komplikasi kesehatan lansia sedini mungkin.',
      practiceQuestions: [
        {
          id: 'kaigo_ch2_q1',
          questionNumber: 1,
          questionText: '片麻痺（かたまひ）のある利用者の車椅子への移乗介助で、正しい用具の配置を一つ選びなさい。',
          situation: 'Posisi meletakkan kursi roda untuk lansia dengan hemiplegia (kelumpuhan sebelah sisi tubuh).',
          options: [
            '車椅子は利用者の麻痺がある側（患側）に、ベッドに対して90度で置く。',
            '車椅子は利用者の力が入る健康な側（健側）に、ベッドに対して約15〜30度の角度で置く。',
            '車椅子のブレーキは解除したまま、すぐに動かせるようにしておく。',
            '利用者の背中側に車椅子を置き、後ろ向きに倒れ込ませる。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Dalam aturan pemindahan kursi roda (Isetsu Kaijo), kursi roda diletakkan pada sisi yang sehat (健側 - Kensoku) dengan sudut sekitar 15–30 derajat terhadap tempat tidur, dan rem harus selalu dikunci sebelum pasien berpindah.',
          translation: 'Pilihlah posisi penempatan alat yang benar saat memindahkan lansia yang mengalami kelumpuhan sebelah badan (Katamahi) ke kursi roda.'
        }
      ],
      officialReference: {
        source: 'Japan International Corporation of Welfare Services (JICWELS)',
        agency: 'MHLW Keperawatan Lansia',
        documentTitle: '介護の日本語・専門用語集 (Kumpulan Istilah Teknis Keperawatan)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: KOMUNIKASI DI TEMPAT KERJA
    // ------------------------------------------------------------------------
    {
      id: 'kaigo_ch3',
      sectorId: 'kaigo',
      category: 'komunikasi',
      chapterNumber: 3,
      title: 'Teknik Komunikasi Empatis (Keigo Kaigo) & Ho-Ren-So',
      japaneseTitle: '介護のコミュニケーションと報告・連絡・相談（ホウレンソウ）',
      estimatedMinutes: 30,
      objectives: [
        'Menguasai gaya bahasa sopan dan ramah (Keigo santun) yang nyaman bagi lansia tanpa terdengar kekanak-kanakan (avoiding baby talk / akachan-kotoba).',
        'Menerapkan prinsip Ho-Ren-So (Houkoku, Renraku, Soudan) dalam situasi darurat dan operan tugas harian.',
        'Menguasai komunikasi non-verbal (kontak mata sejajar, intonasi tenang, sentuhan hangat).'
      ],
      contentExplanation: `
Komunikasi dalam Kaigo memiliki dua arah utama:
1. **Komunikasi dengan Lansia (利用者とのコミュニケーション)**:
   - Hindari bahasa perintah atau bahasa yang merendahkan seperti berbicara dengan anak kecil (*infantilizing language / ちゃん付け*).
   - Selalu posisikan mata sejajar dengan mata lansia (*eye level*). Jangan berbicara sambil berdiri tegak di atas lansia yang sedang duduk di kursi roda karena akan menimbulkan intimidasi psikologis.
   - Gunakan kalimat persetujuan terlebih dahulu sebelum melakukan tindakan fisik (Koe-kake / 声かけ), misalnya: *"Yamada-sama, sekarang kita bersiap ke ruang makan ya. Apakah kaki Anda sudah nyaman?"*.

2. **Komunikasi Antar-Staf (職員間のコミュニケーション - 報連相 / Ho-Ren-So)**:
   - **Hōkoku (報告 - Laporan)**: Melaporkan hasil pekerjaan kepada atasan/perawat, terutama jika ada perubahan fisik (misal: nafsu makan menurun, memar baru).
   - **Renraku (連絡 - Kontak/Informasi)**: Membagikan informasi fakta tanpa opini subjektif kepada rekan satu shift.
   - **Sōdan (相談 - Konsultasi)**: Meminta arahan kepada senior ketika bingung menghadapi situasi atau penolakan tindakan oleh lansia.
      `,
      keyTerms: [
        {
          japanese: '声かけ',
          kana: 'こえかけ',
          romaji: 'koe-kake',
          indonesian: 'Menyapa / memberi aba-aba verbal sebelum tindakan fisik',
          note: 'Mencegah lansia kaget atau merasa dipaksa.'
        },
        {
          japanese: '申し送り',
          kana: 'もうしおくり',
          romaji: 'moushiokuri',
          indonesian: 'Operan jaga / briefing pergantian shift antar-perawat',
          note: 'Menyampaikan insiden penting selama jam kerja sebelumnya.'
        },
        {
          japanese: '目線を合わせる',
          kana: 'めせんをあわせる',
          romaji: 'mesen wo awaseru',
          indonesian: 'Menjajarkan pandangan mata sejajar dengan lansia',
          note: 'Berjongkok lembut di samping kursi roda agar setara.'
        },
        {
          japanese: '傾聴',
          kana: 'けいちょう',
          romaji: 'keichou',
          indonesian: 'Mendengarkan secara aktif dan penuh empati',
          note: 'Mendengarkan tanpa memotong pembicaraan lansia.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Nenek Sato Menolak Minum Obat Hipertensi',
        scenario: 'Nenek Sato (79 tahun) sedang merasa kesal karena merindukan kampung halamannya dan menolak minum obat yang diberikan caregiver Ratna.',
        dialogue: [
          {
            speaker: 'Ratna (Caregiver)',
            role: 'Caregiver',
            japanese: '佐藤様、お薬の時間ですよ。飲まないと病気が悪くなりますから、早く飲んでください。',
            kana: 'さとうさま、おくすりの じかんですよ。のまないと びょうきが わるくなりますから、はやく のんでください。',
            romaji: 'Sato-sama, okusuri no jikan desu yo. Nomanai to byouki ga waruku narimasu kara, hayaku nonde kudasai.',
            indonesian: 'Nenek Sato, sudah waktunya minum obat. Kalau tidak diminum sakitnya bisa parah, ayo cepat diminum.'
          },
          {
            speaker: 'Sato-san',
            role: 'Lansia',
            japanese: 'もう薬なんて飲みたくないよ！放っておいておくれ！',
            kana: 'もう くすりなんて のみたくないよ！ほうっておいて おくれ！',
            romaji: 'Mou kusuri nante nomitakunai yo! Houtte oite okure!',
            indonesian: 'Aku sudah tidak mau minum obat! Biarkan saja aku!'
          },
          {
            speaker: 'Leader Tanaka',
            role: 'Senior Staff',
            japanese: 'ラトナさん、「早く飲んで」と指示するのではなく、まずお気持ちに共感しましょう。「何か心配なことがおありですか」とゆっくりお話を聴いてみてください。',
            kana: 'ラトナさん、「はやく のんで」と しじするのではなく、まず おきもちに きょうかんしましょう。「なにか しんぱいなことが おありですか」と ゆっくり おはなしを きいてみてください。',
            romaji: 'Ratna-san, "hayaku nonde" to shiji suru no dewa naku, mazu okimochi ni kyoukan shimashou. "Nanika shinpai na koto ga oari desu ka" to yukkuri ohanashi wo kiite mite kudasai.',
            indonesian: 'Ratna, daripada memerintah "ayo cepat diminum", pertama mari kita berempati dulu dengan perasaannya. Tanyakan dengan lembut: "Apakah ada hal yang sedang membuat Nenek risau?", lalu dengarkan ceritanya.'
          }
        ],
        takeaway: 'Jangan pernah memaksa lansia (Kousoku / 拘束). Cari tahu akar emosi di balik penolakan tersebut melalui teknik mendengar aktif (Keichou) dan konsultasikan (Soudan) ke perawat jika obat tetap belum dapat diminum.'
      },
      visualDiagram: {
        title: 'Struktur Pelaporan Ho-Ren-So yang Efektif',
        type: 'steps',
        items: [
          {
            label: 'Langkah 1: Kesimpulan Terlebih Dahulu (Ketsuron)',
            description: 'Awali dengan inti pesan: "Lapor, Tuan Kato mengalami lecet kecil di siku kanannya saat berpindah."',
            highlight: 'Ketsuron kara hanasu'
          },
          {
            label: 'Langkah 2: Data dan Fakta Konkret (Jijitsu)',
            description: 'Sampaikan waktu, lokasi, dan kondisi objektif: "Pukul 10:15 di kamar mandi, ukuran lecet sekitar 1 cm, tidak ada pendarahan hebat."',
            highlight: 'Fakta bukan opini'
          },
          {
            label: 'Langkah 3: Tindakan Awal & Mohon Arahan (Shiji o Aogu)',
            description: '"Saya sudah membersihkan dengan kassa steril. Apakah perawat bisa memeriksa untuk pengolesan salep?"',
            highlight: 'Minta konfirmasi atasan'
          }
        ]
      },
      importantPoints: [
        'Koe-kake (aba-aba ucapan) wajib dilakukan sebelum menyentuh tubuh lansia untuk mencegah disorientasi dan rasa takut.',
        'Jika terjadi kecelakaan kerja (insiden jatuh/jatuh terpeleset), jangan memindahkan pasien sebelum perawat memeriksa patah tulang atau cedera kepala.',
        'Dilarang berdebat dengan lansia yang mengalami halusinasi demensia; akui perasaannya secara terapeutik.'
      ],
      summary: 'Komunikasi keperawatan berpusat pada rasa aman lansia melalui aba-aba verbal (Koe-kake), kontak mata sejajar, dan ketepatan koordinasi tim panti lewat Ho-Ren-So.',
      practiceQuestions: [
        {
          id: 'kaigo_ch3_q1',
          questionNumber: 1,
          questionText: '車椅子に座っている利用者と会話をするとき、介護職の姿勢として最も適切なものを一つ選びなさい。',
          situation: 'Posisi postur tubuh saat berkomunikasi dengan lansia di kursi roda.',
          options: [
            '利用者の見下ろすように、立ったまま上から大きな声で話しかける。',
            '利用者の斜め前にしゃがみ、目線を同じ高さに合わせて、穏やかな口調で話す。',
            '忙しいので、背中を向けながら歩きつつ返事をする。',
            '相手が聞き取りやすいように、顔を耳元に密着させて大声で怒鳴るように話す。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Berjongkok di sisi depan serong untuk menyamakan ketinggian mata (目線を合わせる) dan berbicara dengan intonasi ramah adalah standar emas komunikasi keperawatan Jepang.',
          translation: 'Pilihlah sikap postur yang paling tepat saat berbicara dengan pengguna jasa yang sedang duduk di kursi roda.'
        }
      ],
      officialReference: {
        source: 'JICWELS & MHLW Official Guide',
        agency: 'Ministry of Health, Labour and Welfare',
        documentTitle: '介護のコミュニケーション技術テキスト (Teknik Komunikasi Kaigo)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: PENGETAHUAN & KETERAMPILAN KERJA (K3 & SOP)
    // ------------------------------------------------------------------------
    {
      id: 'kaigo_ch4',
      sectorId: 'kaigo',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'Mekanika Tubuh (Body Mechanics), Pencegahan Tersedak & Infeksi',
      japaneseTitle: 'ボディメカニクス・誤嚥予防・感染症対策',
      estimatedMinutes: 35,
      objectives: [
        'Menguasai 8 prinsip mekanika tubuh (Body Mechanics / ボディメカニクス) untuk mencegah sakit pinggang (Youtsuu / 腰痛) pada perawat.',
        'Memahami mekanisme disfagia dan prosedur pencegahan tersedak makanan (Goken / 誤嚥).',
        'Menerapkan standar pencegahan infeksi (mencuci tangan higienis, penggunaan sarung tangan dan APD).'
      ],
      contentExplanation: `
Pekerjaan Kaigo memiliki risiko cedera tulang belakang dan pinggang yang sangat tinggi jika tidak menerapkan **Mekanika Tubuh (ボディメカニクス - Bodi Mekanikusu)**.

8 Prinsip Dasar Mekanika Tubuh:
1. **Lebarkan Bidang Tumpuan (基底面を広くする - Kiteimen o hiroku suru)**: Buka kedua kaki selebar bahu agar postur berdiri stabil.
2. **Dekatkan Pusat Gravitasi (重心を近づける - Juushin o chikazukeru)**: Dekatkan tubuh perawat sedekat mungkin ke tubuh pasien yang hendak dipindahkan.
3. **Rendahkan Pusat Gravitasi (重心を低くする - Juushin o hikuku suru)**: Tekuk lutut, jangan membungkukkan pinggang saat mengangkat beban.
4. **Gunakan Kelompok Otot Besar (大きな筋群を使う - Ookina kingun o tsukau)**: Gunakan otot paha, bokong, dan perut daripada hanya mengandalkan otot punggung bawah.
5. **Kecilkan Permukaan Kontak Pasien (利用者の体を小さくまとめる)**: Minta pasien melipat kedua tangannya di dada agar gesekan dengan tempat tidur berkurang.
6. **Tarik, Jangan Dorong (水平に引く)**: Menarik beban secara horizontal membutuhkan tenaga lebih sedikit daripada mendorong atau mengangkat tegak lurus.
7. **Pindahkan Kaki, Jangan Memelintir Pinggang (足先を移動方向に向ける)**: Putar seluruh tubuh dengan melangkahkan kaki ke arah tujuan, jangan memutar/memelintir pinggang (*twisting*).
8. **Gunakan Prinsip Tuas (てこの原理を活用する - Teko no genri)**.

Selain mekanika tubuh, bahaya mematikan bagi lansia adalah **Tersedak (誤嚥 - Goken)** yang dapat memicu **Pneumonia Aspirasi (誤嚥性肺炎 - Gokensei Haien)**. Sebelum makan, selalu posisikan lansia duduk tegak dengan dagu sedikit ditarik ke dalam (*chin tuck* / 顎を引く), dan pastikan makanan sudah ditelan tuntas sebelum suapan berikutnya.
      `,
      keyTerms: [
        {
          japanese: 'ボディメカニクス',
          kana: 'ぼでぃめかにくす',
          romaji: 'bodi mekanikusu',
          indonesian: 'Mekanika tubuh / ergonomi gerak keperawatan',
          note: 'Teknik wajib untuk melindungi pinggang caregiver dari kelumpuhan saraf.'
        },
        {
          japanese: '誤嚥',
          kana: 'ごえん',
          romaji: 'goken',
          indonesian: 'Aspirasi / makanan masuk ke saluran napas/paru-paru',
          note: 'Penyebab utama kematian lansia akibat infeksi paru-paru.'
        },
        {
          japanese: 'とろみ剤',
          kana: 'とろみざい',
          romaji: 'toromizai',
          indonesian: 'Zat pengental cairan (thickener)',
          note: 'Dicampurkan ke air minum/teh lansia disfagia agar laju cairan melambat di kerongkongan.'
        },
        {
          japanese: 'スタンダード・プレコーション',
          kana: 'すたんだーど・ぷれこーしょん',
          romaji: 'sutandaado purekoushon',
          indonesian: 'Kewaspadaan standar infeksi (Standard Precautions)',
          note: 'Menganggap semua darah, cairan tubuh, dan kotoran berpotensi menular.'
        }
      ],
      workplaceCaseStudy: {
        title: 'SOP Pendampingan Makan: Mencegah Tersedak pada Lansia Disfagia',
        scenario: 'Kakek Watanabe memiliki riwayat batuk-batuk kecil setiap kali minum teh encer. Hari ini caregiver Maya bertugas menyiapkan makanan lunak (Kizami-shoku) dan teh untuk beliau.',
        dialogue: [
          {
            speaker: 'Maya (Caregiver)',
            role: 'Caregiver',
            japanese: '渡辺様、お茶にとろみ剤を入れましたので、ゆっくり召し上がってくださいね。姿勢は少し前かがみで、顎を引いてみましょう。',
            kana: 'わたなべさま、おちゃに とろみざいを いれましたので、ゆっくり めしあがってくださいね。しせいは すこし まえかがみで、あごを ひいてみましょう。',
            romaji: 'Watanabe-sama, ocha ni toromizai wo iremashita node, yukkuri meshiagatte kudasai ne. Shisei wa sukoshi maekagami de, ago wo hiite mimashou.',
            indonesian: 'Kakek Watanabe, saya sudah mencampurkan cairan pengental (toromi) ke dalam teh, jadi silakan diminum pelan-pelan ya. Posisinya condongkan sedikit ke depan dan tarik dagunya ke dalam.'
          },
          {
            speaker: 'Watanabe-san',
            role: 'Lansia',
            japanese: 'ゴクン…うん、これなら喉に詰まらなくて飲みやすいよ。',
            kana: 'ごくん…うん、これなら のどに つまらなくて のみやすいよ。',
            romaji: 'Gokun... un, kore nara nodo ni tsumaranakute nomiyasui yo.',
            indonesian: 'Glek... Ya, kalau begini tidak tersedak di tenggorokan dan mudah ditelan.'
          }
        ],
        takeaway: 'Mencampurkan pengental (Toromi) dan memposisikan dagu tertarik ke bawah (*chin tuck*) menutup katup laring sehingga cairan langsung masuk ke esofagus, bukan ke paru-paru.'
      },
      visualDiagram: {
        title: '8 Aturan Emas Mekanika Tubuh Kaigo',
        type: 'warning',
        items: [
          {
            label: '1. Buka Kaki (Kiteimen)',
            description: 'Buka kaki selebar bahu; majukan satu kaki ke arah pergerakan.'
          },
          {
            label: '2. Tekuk Lutut (Juushin o Hikuku)',
            description: 'Gunakan kekuatan otot paha; jangan membungkuk memakai punggung.'
          },
          {
            label: '3. Rapatkan Tubuh',
            description: 'Pusat massa tubuh caregiver dan pasien harus menyatu sedekat mungkin.'
          },
          {
            label: '4. Jangan Puntir Pinggang',
            description: 'Gerakkan ujung jari kaki saat berputar, bukan memutar pinggang.'
          }
        ]
      },
      importantPoints: [
        'Membungkukkan pinggang saat mengangkat pasien adalah penyebab nomor satu hernia tulang belakang pada perawat.',
        'Pada lansia yang tersedak, segera lakukan tepukan punggung (back blows) atau dorongan perut (abdominal thrusts) dan tekan tombol darurat panggil perawat.',
        'Mencuci tangan 6 langkah menggunakan air mengalir dan sabun selama minimal 30 detik wajib dilakukan sebelum dan sesudah menyentuh pasien.'
      ],
      summary: 'Mekanika tubuh melindungi caregiver dari cedera kerja tulang punggung, sedangkan ketelitian dalam teknik pemberian makan (Toromi) dan higienitas mencegah risiko komplikasi tersedak dan penyebaran infeksi nosokomial di panti.',
      practiceQuestions: [
        {
          id: 'kaigo_ch4_q1',
          questionNumber: 1,
          questionText: '介護職の腰痛予防のためのボディメカニクスの原則として、誤っているものを一つ選びなさい。',
          situation: 'Pilihlah prinsip yang SALAH mengenai mekanika tubuh perawat pencegah sakit pinggang.',
          options: [
            '利用者の体をできるだけ自分から遠ざけて介助する。',
            '支持基底面を広く取るために、足幅を肩幅程度に広げる。',
            '腰を曲げるのではなく、膝を曲げて重心を低く落とす。',
            '方向転換をするときは、腰をねじらずに足先を移動方向に向ける。'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pilihan 1 adalah pernyataan yang SALAH (maka ini jawaban yang benar untuk pertanyaan ini). Seharusnya tubuh lansia didekatkan sedekat mungkin ke tubuh perawat (重心を近づける). Menjauhkan tubuh pasien justru melipatgandakan beban torsi pada tulang belakang perawat.',
          translation: 'Pilihlah satu pernyataan yang KELIRU mengenai prinsip mekanika tubuh untuk mencegah sakit pinggang bagi caregiver.'
        }
      ],
      officialReference: {
        source: 'Japan Ministry of Health, Labour and Welfare (MHLW)',
        agency: 'Safe Work and Health Division',
        documentTitle: '介護従事者のための腰痛予防対策指針 (Pedoman Pencegahan Sakit Pinggang Pekerja Kaigo)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: PERSIAPAN UJIAN & BANK SOAL
    // ------------------------------------------------------------------------
    {
      id: 'kaigo_ch5',
      sectorId: 'kaigo',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Strategi Kelulusan Ujian Teori & Praktik Kaigo Hyoka Shiken',
      japaneseTitle: '介護技能評価試験・介護日本語の出題傾向と合格対策',
      estimatedMinutes: 40,
      objectives: [
        'Memahami format struktur ujian resmi Prometric CBT: Teori Keperawatan (40 soal) dan Tes Praktik Penilaian (5 soal situasi).',
        'Mengenali jebakan soal (distractor) umum pada ujian Nursing Care Evaluation Test.',
        'Mengerjakan simulasi soal kasus demensia (Ninchishou) dan pertolongan pertama (Oukyuu Teate).'
      ],
      contentExplanation: `
Ujian **Nursing Care Skills Evaluation Test (介護技能評価試験)** diselenggarakan menggunakan sistem CBT (Computer Based Testing) berbasis komputer di pusat ujian Prometric.

Struktur Ujian Resmi:
1. **Tes Teori Keperawatan (学科試験 - Gakka Shiken)**:
   - Waktu: 60 Menit.
   - Jumlah: 40 Soal Pilihan Ganda.
   - Ambang Kelulusan: Skor minimal 60%.
   - Cakupan:
     a. Dasar-dasar Kaigo (Martabat manusia, perlindungan privasi, kemandirian).
     b. Struktur Pikiran dan Tubuh (Mekanisme penuaan, demensia, disabilitas).
     c. Keterampilan Asuhan Harian (Makan, mandi, eliminasi/toilet, berpindah tempat tidur).
     d. Keterampilan Komunikasi (Keigo, empati, Ho-Ren-So, koordinasi tim).

2. **Tes Praktik Keperawatan (実技試験 - Jitsugi Shiken)**:
   - Waktu: 30 Menit.
   - Format: Berbasis layar komputer dengan gambar situasi/ilustrasi kasus, di mana peserta harus memilih urutan tindakan yang paling aman dan manusiawi.
   - Ambang Kelulusan: Skor minimal 60%.

3. **Ujian Bahasa Jepang Keperawatan (介護日本語評価試験)**:
   - Waktu: 30 Menit (15 Soal).
   - Menguji pemahaman istilah, percakapan instruksi dari perawat, dan pencatatan kalimat harian keperawatan.
      `,
      keyTerms: [
        {
          japanese: '認知症',
          kana: 'にんちしょう',
          romaji: 'ninchishou',
          indonesian: 'Demensia / penurunan daya ingat dan fungsi kognitif otak',
          note: 'Topik soal ujian terbanyak; pahami perbedaan tipe Alzheimer dan Vaskular.'
        },
        {
          japanese: '脱水症',
          kana: 'だっすいしょう',
          romaji: 'dassuishou',
          indonesian: 'Dehidrasi / kekurangan cairan tubuh',
          note: 'Lansia sering tidak merasa haus; caregiver harus aktif menawarkan minum.'
        },
        {
          japanese: 'ヒヤリ・ハット',
          kana: 'ひやり・はっと',
          romaji: 'hiyari hatto',
          indonesian: 'Insiden nyaris celaka (Near-miss incident)',
          note: 'Wajib dicatat agar tidak terulang menjadi kecelakaan fatal (Jiko).'
        }
      ],
      workplaceCaseStudy: {
        title: 'Contoh Soal Simulasi Resmi: Menghadapi Lansia Demensia yang Mondar-mandir',
        scenario: 'Nenek Takahashi (85 tahun, diagnosis Alzheimer) mondar-mandir di koridor panti menjelang sore hari sambil membawa tas jinjing dan berkata: "Saya harus pulang sekarang, anak saya yang masih SD sedang menunggu makan malam di rumah".',
        dialogue: [
          {
            speaker: 'Soal Kasus Prometric',
            role: 'Ujian CBT',
            japanese: 'このときの介護職の対応として、最も適切なものを一つ選びなさい。',
            kana: 'このときの かいごしょくの たいおうとして、もっとも てきせつな ものを ひとつ えらびなさい。',
            romaji: 'Kono toki no kaigoshoku no taiou toshite, mottomo tekisetsu na mono wo hitotsu erabinasai.',
            indonesian: 'Pilihlah satu tindakan paling tepat yang harus diambil oleh caregiver dalam menghadapi situasi ini.'
          }
        ],
        takeaway: 'Strategi menjawab: Jangan menyangkal ingatan masa lalu lansia demensia ("Anak Nenek kan sudah usia 60 tahun!"). Akui perasaannya yang menyayangi anak, ajak duduk santai sambil minum teh, lalu alihkan perhatiannya secara halus.'
      },
      visualDiagram: {
        title: 'Checklist Strategi Menjawab Soal Ujian Kaigo',
        type: 'cards',
        items: [
          {
            label: '1. Eliminasi Pilihan yang Memaksa (Kousoku)',
            description: 'Pilihan yang mengikat tangan, mengunci kamar, atau memarahi lansia pasti 100% SALAH.',
            badge: 'Trik Ujian'
          },
          {
            label: '2. Utamakan Keselamatan Fisik',
            description: 'Pastikan rem kursi roda terkunci, lantai tidak licin, dan tidak ada kabel berserakan.',
            badge: 'Prioritas Tertinggi'
          },
          {
            label: '3. Dengarkan & Dampingi (Mimamori)',
            description: 'Pilihan yang memfasilitasi lansia melakukan sendiri secara aman adalah jawaban yang BENAR.',
            badge: 'Filosofi Resmi'
          }
        ]
      },
      importantPoints: [
        'Pada tes CBT, baca pertanyaan sampai kata terakhir (perhatikan apakah diminta memilih yang "Paling Tepat / 適切" atau "Keliru / 不適切").',
        'Kelulusan SSW Kaigo memerlukan kelulusan di KEDUA ujian: Ujian Keterampilan Teknis dan Ujian Bahasa Kaigo.',
        'Sertifikat kelulusan tidak memiliki masa kedaluwarsa resmi dari MHLW untuk pengajuan CoE visa.'
      ],
      summary: 'Kunci lulus ujian SSW Kaigo adalah memahami pola pikir asuhan kemanusiaan Jepang: menghargai kemandirian, melindungi martabat lansia demensia, dan mengutamakan keselamatan kerja melalui mekanika tubuh dan pencegahan risiko.',
      practiceQuestions: [
        {
          id: 'kaigo_ch5_q1',
          questionNumber: 1,
          questionText: '夕方になると「子どものご飯を作らなければならないので家に帰る」と荷物を持って歩き回る認知症の利用者への声かけとして、最も適切なものを一つ選びなさい。',
          situation: 'Penanganan lansia demensia yang mengalami sindrom senja (Sundowning syndrome) ingin pulang.',
          options: [
            '「あなたのお子さんはもう60歳を過ぎていますよ。帰れません」と現実を教える。',
            '「施設の外に出ると危ないですから、部屋に鍵をかけて閉じ込めますよ」と警告する。',
            '「お子さんのことを心配されているのですね。温かいお茶でも飲んで、一息ついてから一緒に考えましょうか」と共感する。',
            '無視をして、そのまま一人で歩かせておく。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Pada lansia dengan demensia, menentang atau membantah kenyataan mereka (Pilihan 1) akan memicu kecemasan dan amarah. Mengancam atau mengunci (Pilihan 2) melanggar HAM. Sikap yang tepat adalah menerima perasaannya (共感) dan mengalihkan perhatian dengan ramah.',
          translation: 'Pilihlah respon verbal yang paling tepat untuk pengguna demensia yang saat sore hari membawa tas dan mondar-mandir ingin pulang memasak untuk anaknya.'
        },
        {
          id: 'kaigo_ch5_q2',
          questionNumber: 2,
          questionText: '入浴介助（にゅうよくかいじょ）を行う際、利用者のヒートショック（急激な血圧変化）を予防するための対策として、適切なものを一つ選びなさい。',
          situation: 'Pencegahan Heat Shock (perubahan tekanan darah drastis) saat membantu mandi di musim dingin.',
          options: [
            '脱衣所や浴室の温度を暖房で温めておき、居室との温度差を少なくする。',
            'お風呂の湯の温度を44度以上の熱めにしておく。',
            '浴室に入ったらすぐに、頭の上から一気に熱いシャワーをかける。',
            '入浴前に水分を摂らせるとトイレが近くなるため、水分補給は禁止する。'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pilihan 1 benar. Heat shock terjadi akibat perbedaan suhu tajam antara kamar yang hangat dan kamar mandi yang dingin. Menghangatkan ruang ganti pakaian (datsuijo) dan kamar mandi sebelumnya adalah tindakan preventif paling krusial.',
          translation: 'Pilihlah tindakan yang tepat untuk mencegah Heat Shock saat membantu mandi bagi lansia.'
        }
      ],
      officialReference: {
        source: 'Prometric & Ministry of Health, Labour and Welfare (MHLW)',
        agency: 'Prometric Japan Test Center',
        documentTitle: '介護技能評価試験 公式シラバスおよび出題基準 (Silabus Resmi Ujian Keperawatan SSW)'
      }
    }
  ],
  examSimulation: {
    title: 'Simulasi Resmi Ujian Keperawatan SSW (Kaigo Hyoka Shiken)',
    subtitle: 'Standar Ujian Teori & Praktik Prometric CBT MHLW Jepang (Lengkap 10 Soal Komprehensif)',
    timeMinutes: 20,
    passingScorePercentage: 60,
    questions: [
      {
        id: 'kaigo_sim_q1',
        questionNumber: 1,
        questionText: '利用者の「自己決定」を尊重する介護職の対応として、最も適切なものを一つ選びなさい。',
        situation: 'Prinsip penentuan nasib sendiri (Jiko Kettei / Self-determination).',
        options: [
          '朝着る服を、介護職が最も着せやすい服を一着だけ選んで強制的に着せる。',
          '今日着たい服について「こちらの青いセーターと、赤いカーディガンのどちらがよろしいですか」と利用者に選んでもらう。',
          '認知症がある利用者には選ぶ能力がないと決めつけ、職員間で全て決定する。',
          '利用者が選んだ服が地味だったので、介護職の好みの派手な服に着替えさせた。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Memberikan opsi pilihan pakaian (dua alternatif konkret) memfasilitasi lansia untuk membuat keputusan sendiri (自己決定 - Jiko Kettei) sesuai martabat mereka.',
        translation: 'Pilihlah tindakan caregiver yang paling tepat dalam menghormati "Penentuan Keputusan Mandiri" pengguna jasa.'
      },
      {
        id: 'kaigo_sim_q2',
        questionNumber: 2,
        questionText: '高齢者の脱水（だっすい）に関する記述として、正しいものを一つ選びなさい。',
        situation: 'Karakteristik fisiologis dehidrasi pada lansia.',
        options: [
          '高齢者は体内の水分割合が若年者よりも多く、80％程度を占める。',
          '高齢者は口渇感（喉の渇き）を感じにくいため、自覚症状がなくても定期的な水分補給が必要である。',
          '脱水状態になると、皮膚に潤いが出て汗を大量にかくようになる。',
          '冬の季節は汗をかかないため、高齢者に水分補給を行う必要は全くない。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Seiring bertambahnya usia, sensitivitas sensor haus di otak menurun sehingga lansia kerap tidak merasa haus meskipun tubuhnya telah mengalami dehidrasi berat.',
        translation: 'Pilihlah pernyataan yang benar mengenai kondisi dehidrasi pada lansia.'
      },
      {
        id: 'kaigo_sim_q3',
        questionNumber: 3,
        questionText: '車椅子の各部の名称と取り扱いについて、正しい組み合わせを一つ選びなさい。',
        situation: 'Komponen kursi roda dan aturan keselamatan pengoperasian.',
        options: [
          '利用者が乗り降りするときは、フットサポート（足載せ台）を下ろしたままにする。',
          'ティッピングレバーは、車椅子を折りたたむときだけに使用するレバーである。',
          '利用者が乗り降りする際、または停止しているときは、必ず左右両方の駐車ブレーキをしっかりかける。',
          '段差を降りるときは、前輪のキャスターから先に落とすように前向きで降りる。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Mengunci kedua rem tangan (駐車ブレーキ) saat berhenti atau transfer adalah SOP nomor satu keselamatan kursi roda.',
        translation: 'Pilihlah kombinasi yang benar mengenai nama bagian dan penanganan kursi roda.'
      },
      {
        id: 'kaigo_sim_q4',
        questionNumber: 4,
        questionText: '食後の口腔ケア（こうくうけあ）の目的として、適切でないものを一つ選びなさい。',
        situation: 'Tujuan perawatan kebersihan rongga mulut (Oral Care) setelah makan.',
        options: [
          '口の中の食べかすを取り除き、細菌の繁殖や誤嚥性肺炎を予防する。',
          '唾液の分泌を促し、味覚や口腔機能を維持する。',
          '口腔内を清潔に保つことで、爽快感を得て生活への意欲を高める。',
          '入れ歯（義歯）は熱湯につけて煮沸消毒し、変形させて歯茎に固定させる。'
        ],
        correctAnswerIndex: 3,
        explanation: 'Pilihan 4 TIDAK TEPAT (maka ini jawaban benar). Gigi palsu berbahan resin akan meleleh/berubah bentuk jika terkena air mendidih. Gigi palsu harus dibersihkan dengan air mengalir dan larutan pembersih khusus.',
        translation: 'Pilihlah yang BUKAN merupakan tujuan perawatan rongga mulut yang tepat.'
      },
      {
        id: 'kaigo_sim_q5',
        questionNumber: 5,
        questionText: '介護職が利用者の排泄介助（はいせつかいじょ）を行う際、羞恥心（しゅうちしん）への配慮として最も適切なものを一つ選びなさい。',
        situation: 'Pertimbangan rasa malu (Shuuchishin) saat membantu buang air.',
        options: [
          '他の職員にも聞こえるように、大きな声で「オムツが汚れていますよ」と叫ぶ。',
          'ポータブルトイレを使用する際は、カーテンやドアを閉め、肌が露出しないようタオルを膝にかける。',
          '排泄中は時間がもったいないので、ドアを開けたまま他の部屋を掃除しに行く。',
          '利用者が排泄を失敗したとき、反省させるために汚れた衣類を周囲に見せる。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 1 adalah standar emas menghargai privasi dan rasa malu lansia: menutup tirai dan menutupi bagian sensitif dengan handuk selimut.',
        translation: 'Pilihlah tindakan yang paling tepat untuk memperhatikan rasa malu pengguna jasa saat membantu buang air.'
      }
    ]
  }
};
