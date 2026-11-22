import { SswSectorData } from '../../types/ssw';

export const BUILDING_CLEANING_SECTOR_DATA: SswSectorData = {
  id: 'building_cleaning',
  name: 'Pembersihan Gedung (Building Cleaning)',
  japaneseName: 'ビルクリーニング',
  romajiName: 'Biru Kuriiningu',
  iconName: 'Building2',
  tagline: 'Menjaga kebersihan, higienitas, dan keindahan fasilitas gedung modern Jepang secara profesional dan berstandar tinggi.',
  badge: 'Pekerjaan Teratur',
  badgeColor: 'text-cyan-400 bg-cyan-500/15 border-cyan-500/30',
  overview: {
    workEnvironment: 'Bekerja di gedung perkantoran modern (office building), pusat perbelanjaan (commercial facility), rumah sakit dan fasilitas medis, hotel, serta stasiun kereta api dengan peralatan mekanik canggih dan standar keselamatan sanitasi ketat Jepang.',
    mainDuties: [
      'Pembersihan rutin harian (日常清掃 / Nichijou Seisou): menyapu, mengepel, vacuum karpet, pembersihan toilet, dan pengosongan tempat sampah.',
      'Pembersihan berkala (定期清掃 / Teiki Seisou): pengupasan dan pelapisan lilin lantai (waxing), pencucian karpet basah (shampooing), dan pembersihan kaca jendela.',
      'Pengoperasian mesin pembersih mekanik: mesin polisher lantai putar, wet/dry vacuum cleaner industri, dan automatic floor scrubber.',
      'Pembersihan sanitasi area higienis tinggi: toilet, wastafel cuci tangan, pantry, dan disinfeksi pegangan pintu/lift.',
      'Pengelolaan dan pemilahan sampah gedung sesuai regulasi daur ulang ketat pemerintah daerah Jepang (Gomi Bunbetsu).'
    ],
    technicalExamName: 'Building Cleaning Skills Evaluation Test (ビルクリーニング分野特定技能1号評価試験)',
    examOrganizer: 'National Building Maintenance Association (公益社団法人 全国ビルメンテナンス協会) & MHLW (厚生労働省)',
    passRequirement: 'Lulus ujian keterampilan teknis (学科 / Teori + 実技 / Praktik pembersihan lantai/karpet/kaca dengan skor ≥ 60%) + JFT-Basic A2 atau JLPT N4.',
    salaryInsight: 'Gaji pokok berkisar antara ¥180.000 hingga ¥240.000/bulan, dengan tambahan tunjangan lembur (Zangyou-teate), tunjangan shift malam (Shinya-teate), dan bonus tahunan.'
  },
  officialReferences: [
    {
      title: 'Building Cleaning Specified Skilled Worker Guide (ビルクリーニング分野特定技能評価試験 受験案内)',
      agency: 'National Building Maintenance Association (全国ビルメンテナンス協会)',
      description: 'Pedoman kurikulum dan standar evaluasi resmi mencakup teknik pembersihan lantai elastis, karpet, kaca, dan fasilitas sanitasi gedung.'
    },
    {
      title: 'Textbook for Building Cleaning Specified Skilled Worker (ビルクリーニング外国人材向け学習テキスト)',
      agency: 'Ministry of Health, Labour and Welfare of Japan (厚生労働省)',
      description: 'Buku panduan resmi pemerintah Jepang mengenai keselamatan K3, sifat kimia deterjen pembersih, mesin mekanik, dan etika kerja gedung.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG & LINGKUNGAN KERJA
    // ------------------------------------------------------------------------
    {
      id: 'building_cleaning_ch1',
      sectorId: 'building_cleaning',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Industri Building Maintenance Jepang & Etika Pelayanan Gedung',
      japaneseTitle: 'ビルメンテナンス業界の概要と清掃員の役割・心構え',
      estimatedMinutes: 25,
      objectives: [
        'Memahami struktur industri pemeliharaan gedung (Building Maintenance) di Jepang dan Undang-Undang Pengelolaan Lingkungan Gedung (Biru Kanri-hou).',
        'Mengenal perbedaan fundamental antara Pembersihan Rutin Harian (Nichijou Seisou) dan Pembersihan Berkala (Teiki Seisou).',
        'Menerapkan tata krama dan etika pelayanan saat berinteraksi dengan penyewa gedung (Tenant) dan pengunjung umum.'
      ],
      contentExplanation: `
Industri **Building Maintenance (ビルメンテナンス)** di Jepang memiliki peran vital dalam menjaga nilai aset properti, kebersihan lingkungan kerja, serta kenyamanan masyarakat. Standar higienitas gedung di Jepang diatur secara ketat oleh hukum negara melalui **Undang-Undang Pengelolaan Lingkungan Sanitasi Gedung (建築物衛生法 - Kenchikubutsu Eisei-hou / disingkat ビル管理法 - Biru Kanri-hou)**.

Pekerjaan pembersihan gedung dibagi menjadi dua pilar utama:
1. **Pembersihan Rutin Harian (日常清掃 - Nichijou Seisou)**:
   - Dilakukan setiap hari pada jam-jam operasional atau sebelum gedung dibuka.
   - Meliputi penyedotan debu karpet (*vacuuming*), pembersihan lantai koridor, pembersihan toilet dan wastafel, penggantian kantong sampah, serta pengecekan ketersediaan tisu dan sabun.
   - Tujuannya adalah mempertahankan kebersihan konstan sepanjang hari.

2. **Pembersihan Berkala (定期清掃 - Teiki Seisou)**:
   - Dilakukan secara periodik (bulanan atau beberapa bulan sekali), umumnya pada akhir pekan atau malam hari saat gedung kosong dari aktivitas kantor.
   - Meliputi pembersihan kerak membandel, pengupasan lapisan lilin lama (*stripping/hakuri*) dan pelapisan lilin pelindung baru (*waxing/wa-kusu kake*) pada lantai vinil, pencucian karpet secara mendalam (*carpet shampooing*), serta pembersihan kaca jendela luar/dalam gedung.

Sebagai staf pembersih (*Seisouin* / 清掃員), Anda adalah representasi kualitas pengelola gedung. Etika terpenting adalah menghormati keberadaan para penyewa gedung (**テナント - Tenant**). Saat berada di koridor, lobi, atau lift, staf harus selalu memberi jalan kepada tenant, membungkuk sopan (*Ojigi*), dan menyapa dengan ramah tanpa menimbulkan kebisingan yang mengganggu konsentrasi kerja mereka.
      `,
      keyTerms: [
        {
          japanese: '日常清掃',
          kana: 'にちじょうせいそう',
          romaji: 'nichijou seisou',
          indonesian: 'Pembersihan rutin harian',
          note: 'Pekerjaan dasar harian menjaga higienitas lobi, toilet, dan koridor.'
        },
        {
          japanese: '定期清掃',
          kana: 'ていきせいそう',
          romaji: 'teiki seisou',
          indonesian: 'Pembersihan berkala / periodik',
          note: 'Pekerjaan intensif seperti waxing lantai dan cuci karpet bulanan.'
        },
        {
          japanese: 'テナント',
          kana: 'てなんと',
          romaji: 'tenanto',
          indonesian: 'Penyewa gedung (kantor / pertokoan yang menyewa unit)',
          note: 'Pihak pengguna utama fasilitas gedung yang wajib dihormati.'
        },
        {
          japanese: '巡回清掃',
          kana: 'じゅんかいせいそう',
          romaji: 'junkai seisou',
          indonesian: 'Pembersihan patroli keliling',
          note: 'Pemeriksaan dan pembersihan berkala di area publik seperti lift dan tangga darurat.'
        },
        {
          japanese: 'ビル管理法',
          kana: 'びるかんりほう',
          romaji: 'biru kanri hou',
          indonesian: 'UU Pengelolaan Sanitasi dan Lingkungan Gedung Jepang',
          note: 'Dasar hukum standar baku mutu udara, air, dan sanitasi gedung di Jepang.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Etika Berpapasan dengan Tenant Kantor di Depan Lift',
        scenario: 'Ahmad, staf pembersih baru asal Indonesia, sedang mendorong troli perlengkapan pembersih (cleaning cart) di koridor lantai 12 gedung perkantoran. Tiba-tiba pintu lift terbuka dan beberapa karyawan tenant eksekutif keluar menuju ruang rapat.',
        dialogue: [
          {
            speaker: 'Ahmad (Staf Pembersih)',
            role: 'Staf Pemula',
            japanese: 'おはようございます。どうぞお通りください。',
            kana: 'おはようございます。どうぞ おとおりください。',
            romaji: 'Ohayou gozaimasu. Douzo otoori kudasai.',
            indonesian: 'Selamat pagi. Silakan lewat terlebih dahulu.'
          },
          {
            speaker: 'Yamashita (Tenant)',
            role: 'Karyawan Kantor',
            japanese: 'おはようございます。いつもきれいにしてくれてありがとう。',
            kana: 'おはようございます。いつも きれいにしてくれて ありがとう。',
            romaji: 'Ohayou gozaimasu. Itsumo kirei ni shite kurete arigatou.',
            indonesian: 'Selamat pagi. Terima kasih selalu menjaga gedung ini tetap bersih.'
          },
          {
            speaker: 'Tanaka (Supervisor)',
            role: 'Leader Tim Pembersih',
            japanese: 'アフマドさん、台車を壁側に寄せて通路をしっかり空けていましたね。素晴らしい対応です。',
            kana: 'アフマドさん、だいしゃを かべがわに よせて つうろを しっかり あけていましたね。すばらしい たいおうです。',
            romaji: 'Ahmad-san, daisha wo kabegawa ni yosete tsuuro wo shikkari akete imashita ne. Subarashii taiou desu.',
            indonesian: 'Ahmad, kamu menepi troli ke sisi dinding dan memberi ruang jalan yang cukup. Sikap tanggap yang sangat bagus.'
          }
        ],
        takeaway: 'Saat berpapasan dengan pengguna gedung, segera hentikan troli, rapatkan ke sisi dinding agar tidak menghalangi jalan, dan sampaikan salam dengan sikap hormat (Ojigi).'
      },
      visualDiagram: {
        title: 'Klasifikasi Pekerjaan Pembersihan Gedung di Jepang',
        type: 'cards',
        items: [
          {
            label: '1. Nichijou Seisou (日常清掃)',
            description: 'Dilakukan tiap hari: sweeping, mopping, buang sampah, pembersihan toilet & sanitasi meja pantry.',
            badge: 'Frekuensi Harian'
          },
          {
            label: '2. Teiki Seisou (定期清掃)',
            description: 'Dilakukan 1–3 bulan sekali: mesin polisher lantai, pengupasan wax lama, pelapisan wax baru, cuci kaca tinggi.',
            badge: 'Frekuensi Berkala'
          },
          {
            label: '3. Tokubetsu Seisou (特別清掃)',
            description: 'Pembersihan mendalam tahunan: saluran pipa ventilasi AC (duct cleaning), dinding luar gedung (gondola/rope access).',
            badge: 'Frekuensi Tahunan'
          }
        ]
      },
      importantPoints: [
        'Pekerjaan pembersihan di Jepang mengutamakan prinsip tidak mengganggu kegiatan kerja penyewa gedung (Tenant-first principle).',
        'Troli pembersih (cleaning cart) tidak boleh ditinggalkan sembarangan di tengah lorong koridor jalan atau menghalangi pintu darurat.',
        'Selalu gunakan pakaian kerja (sagyougi), sepatu antiselip khusus dalam gedung, dan tanda pengenal (ID badge) resmi perusahaan.'
      ],
      summary: 'Industri Building Maintenance Jepang menuntut profesionalisme tinggi dalam mempertahankan standar higienitas berdasar UU Biru Kanri-hou. Staf pembersih wajib menguasai perbedaan pembersihan rutin dan berkala serta menjunjung etika sopan santun kepada tenant.',
      practiceQuestions: [
        {
          id: 'bclean_ch1_q1',
          questionNumber: 1,
          questionText: 'ビルクリーニングにおける「日常清掃」の作業内容として、最も適切なものを一つ選びなさい。',
          situation: 'Klasifikasi tugas pembersihan harian rutin (Nichijou Seisou) di gedung perkantoran.',
          options: [
            '半年に1回、外壁の窓ガラスをゴンドラに乗って清掃する作業。',
            '毎日、共用部の掃除機がけ、ゴミ回収、トイレの清掃を行う作業。',
            '年に1回、空調設備のダクト内部を分解して薬品洗浄する作業。',
            '数か月に1回、床の古いワックスを剥離剤で全て剥がして塗り直す作業。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Pembersihan rutin harian (日常清掃) mencakup vacuum koridor, pengosongan tempat sampah, dan pembersihan toilet setiap hari. Pilihan 1 dan 3 adalah pembersihan khusus (特別清掃), sedangkan Pilihan 4 adalah pembersihan berkala (定期清掃).',
          translation: 'Pilihlah satu pernyataan yang paling tepat mengenai cakupan pekerjaan "Pembersihan Rutin Harian (Nichijou Seisou)" dalam building cleaning.'
        },
        {
          id: 'bclean_ch1_q2',
          questionNumber: 2,
          questionText: '清掃作業中にオフィスの通路でテナント（ビルの入居者）とすれ違う際の対応として、最も適切なものを一つ選びなさい。',
          situation: 'Etika saat berpapasan dengan penyewa gedung di lorong kantor.',
          options: [
            '作業が遅れるので、相手を見ずに急いで台車を押して通り過ぎる。',
            '通路の真ん中に台車を止めたまま、大声で同僚と雑談を続ける。',
            '作業台車を壁側に寄せて立ち止まり、会釈をして「おはようございます」と丁寧に挨拶する。',
            '相手が挨拶してくるまで、無視をして下を向いて作業を続ける。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Menepi troli ke dinding, memberi jalan prioritas, dan menyapa dengan sopan disertai tundukan hormat (会釈 / eshaku) adalah standar etika kerja tertinggi di Jepang.',
          translation: 'Pilihlah respon yang paling tepat saat berpapasan dengan penyewa gedung (tenant) di lorong kantor selama jam kerja.'
        }
      ],
      officialReference: {
        source: 'National Building Maintenance Association (全国ビルメンテナンス協会)',
        agency: 'Ministry of Health, Labour and Welfare (MHLW)',
        documentTitle: 'ビルクリーニング科教科書 第1章 ビルメンテナンス概論 (Dasar-Dasar Pemeliharaan Lingkungan Gedung)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: KOSAKATA KHUSUS PEKERJAAN & PERALATAN
    // ------------------------------------------------------------------------
    {
      id: 'building_cleaning_ch2',
      sectorId: 'building_cleaning',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Kosakata Alat Pembersih Mekanik, Bahan Kimia & Jenis Lantai',
      japaneseTitle: '清掃用器具・機械・洗剤および床材の専門用語',
      estimatedMinutes: 30,
      objectives: [
        'Menghafal nama dan fungsi alat manual (mop, squeegee, dustpan, kain microfiber) dan mesin mekanik (polisher, wet vacuum, auto scrubber).',
        'Menguasai klasifikasi bahan kimia pembersih berdasar skala pH (asam, netral, alkali) dan fungsi pembersihannya.',
        'Mengenali jenis material lantai umum (ubin vinil/P-tile, karpet, marmer, granit) dan cairan pembersih yang sesuai.'
      ],
      contentExplanation: `
Di lingkungan building cleaning modern di Jepang, pemahaman teknis terhadap **peralatan mekanik (機械器具)**, **bahan kimia pembersih (洗剤)**, dan **material permukaan lantai (床材)** adalah syarat mutlak untuk menghindari kerusakan aset gedung.

### 1. Peralatan Mekanik & Manual
- **Polisher (床みがき機 / ポリッシャー - Porisshaa)**: Mesin pemutar pad melingkar berkecepatan tinggi untuk mencuci lantai keras, mengikis kotoran minyak, atau mengilapkan lapisan lilin.
- **Wet & Dry Vacuum Cleaner (湿乾両用掃除機 / バキュームクリーナー)**: Penyedot debu industri yang mampu menyedot cairan sisa pencucian lantai maupun kotoran kering.
- **Auto-Scrubber (自動床洗浄機 / じどうゆかせんじょうき)**: Mesin terpadu yang menyemprotkan air sabun, menggosok lantai dengan pad, dan langsung menghisap air kotor hingga kering secara otomatis.
- **Squeegee (スクイジー / スクイジー - Sukuijii)**: Bilah karet elastis bergagang stainless steel untuk menarik air di permukaan kaca atau lantai tanpa meninggalkan goresan noda air.
- **Mop & Mop Wringer (モップ・モップ絞り器 - Moppu Shiboriki)**: Alat pel kain benang beserta ember pemeras berpenjepit mekanik.

### 2. Klasifikasi Deterjen Berdasarkan Nilai pH (水素イオン濃度)
- **Deterjen Netral (中性洗剤 - Chuusei Senzai / pH 6.0 - 8.0)**: Paling aman untuk segala permukaan (lantai vinil berlapis wax, furnitur, kaca). Daya angkat kotoran harian sedang tanpa merusak lapisan pelindung.
- **Deterjen Alkali (アルカリ性洗剤 - Arukari-sei Senzai / pH > 8.0)**: Sangat efektif melarutkan noda lemak, minyak makanan di pantry, jelaga, dan kotoran protein.
- **Deterjen Asam (酸性洗剤 - Sansei Senzai / pH < 6.0)**: Efektif mengikis kerak air urin (尿石 / nyouseki), kerak kapur kalsium pada wastafel, dan noda karat logam. **PERINGATAN**: Dilarang keras digunakan pada batu marmer alam karena akan mengikis kalsium karbonat dan merusak kilau batu selamanya!
- **Cairan Stripper Pengupas Lilin (剥離剤 - Hakurizai)**: Larutan alkali kuat untuk melarutkan seluruh lapisan wax lama pada saat pembersihan berkala (*Teiki Seisou*).
      `,
      keyTerms: [
        {
          japanese: 'ポリッシャー',
          kana: 'ぽりっしゃー',
          romaji: 'porisshaa',
          indonesian: 'Mesin polisher lantai putar',
          note: 'Menggunakan pad beraneka warna (merah: buffing, hijau: scrubbing, hitam: stripping).'
        },
        {
          japanese: 'スクイジー',
          kana: 'すくいじー',
          romaji: 'sukuijii',
          indonesian: 'Squeegee (penyeka karet kaca / penarik air lantai)',
          note: 'Karet harus selalu diperiksa kelenturannya agar tidak menimbulkan garis air (sujitate).'
        },
        {
          japanese: '中性洗剤',
          kana: 'ちゅうせいせんざい',
          romaji: 'chuusei senzai',
          indonesian: 'Deterjen netral (pH 6–8)',
          note: 'Deterjen standar untuk pembersihan harian tanpa merusak permukaan.'
        },
        {
          japanese: '剥離剤',
          kana: 'はくりざい',
          romaji: 'hakurizai',
          indonesian: 'Cairan stripper / pengupas lapisan wax lama',
          note: 'Cairan kimia kuat yang membuat lantai sangat licin saat diaplikasikan.'
        },
        {
          japanese: '床用樹脂ワックス',
          kana: 'ゆかようじゅしわっくす',
          romaji: 'yuka-you jushi wakkusu',
          indonesian: 'Lilin pelapis lantai resin vinil',
          note: 'Melindungi material lantai dari goresan sepatu dan memberikan kilau cemerlang.'
        },
        {
          japanese: 'Pタイル（プラスチックタイル）',
          kana: 'ぴーたいる',
          romaji: 'pii-tairu',
          indonesian: 'Ubin vinil plastik PVC',
          note: 'Jenis lantai keras paling banyak dipasang di gedung kantor Jepang.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kesalahan Pemilihan Cairan Pembersih pada Lantai Marmer Lobi',
        scenario: 'Reza hendak membersihkan noda kerak air di lantai marmer putih (大理石 - daiseki) area lobi utama. Melihat noda sulit hilang, ia mengambil botol pembersih kerak toilet yang bersifat asam tanpa membaca label kemasan.',
        dialogue: [
          {
            speaker: 'Suzuki (Senior Staff)',
            role: 'Staf Senior',
            japanese: 'レザさん、ちょっと待って！その洗剤は何を使おうとしているの？',
            kana: 'レザさん、ちょっと まって！その せんざいは なにを つかおうと しているの？',
            romaji: 'Reza-san, chotto matte! Sono senzai wa nani wo tsukaou to shite iru no?',
            indonesian: 'Reza, tunggu sebentar! Deterjen apa yang hendak kamu gunakan itu?'
          },
          {
            speaker: 'Reza (Staf)',
            role: 'Staf Pembersih',
            japanese: 'トイレの酸性洗剤です。水アカがよく落ちると思いました。',
            kana: 'といれの さんせいせんざいです。みずあかが よく おちると おもいました。',
            romaji: 'Toire no sansei senzai desu. Mizuaka ga yoku ochiru to omoimashita.',
            indonesian: 'Pembersih asam toilet. Saya pikir ini akan cepat mengangkat noda kerak air.'
          },
          {
            speaker: 'Suzuki (Senior Staff)',
            role: 'Staf Senior',
            japanese: '大理石に酸性洗剤をかけると、化学反応で表面が溶けてツヤが完全に消えてしまいますよ。大理石には必ず中性洗剤を使わなければなりません。',
            kana: 'だいりせきに さんせいせんざいを かけると、かがくはんのうで ひょうめんが とけて つやが かんぜんに きえてしまいますよ。だいりせきには かならず ちゅうせいせんざいを つかわなければなりません。',
            romaji: 'Daiseki ni sansei senzai wo kakeru to, kagaku hannou de hyoumen ga tokete tsuya ga kanzen ni kiete shimaimasu yo. Daiseki ni wa kanarazu chuusei senzai wo tsukawanakereba narimasen.',
            indonesian: 'Kalau kamu menuangkan pembersih asam ke marmer, permukaan batunya akan bereaksi secara kimiawi, terkikis, dan kilaunya hilang permanen! Pada marmer wajib selalu menggunakan deterjen netral.'
          }
        ],
        takeaway: 'Jangan pernah menggunakan cairan pembersih asam (酸性) pada material marmer alami (大理石) karena akan merusak permukaan batu kapur selamanya. Selalu verifikasi nilai pH dan instruksi label deterjen.'
      },
      visualDiagram: {
        title: 'Skala pH dan Kesesuaian Bahan Kimia Pembersih',
        type: 'table',
        items: [
          {
            label: 'Asam Kuat (pH < 3)',
            description: 'Penghancur kerak urin membandel (Nyouseki). Hanya untuk porselen kloset toilet. DILARANG di marmer & logam.',
            highlight: 'Sansei (酸性)'
          },
          {
            label: 'Netral (pH 6.0 – 8.0)',
            description: 'Pembersih serbaguna harian: lantai P-tile berlapis wax, dinding, kaca, marmer, dan furnitur kayu.',
            highlight: 'Chuusei (中性) - Paling Aman'
          },
          {
            label: 'Alkali Lemah/Sedang (pH 8.5 – 11)',
            description: 'Pembersih noda minyak di dapur/pantry, jelaga asap, kotoran tangan di gagang pintu.',
            highlight: 'Jaku-Arukari-sei (弱アルカリ性)'
          },
          {
            label: 'Alkali Kuat (pH > 11)',
            description: 'Cairan stripper (Hakurizai) pengupas lilin wax lama. Wajib memakai sarung tangan karet dan pelindung mata.',
            highlight: 'Kyou-Arukari-sei (強アルカリ性)'
          }
        ]
      },
      importantPoints: [
        'Pad polisher memiliki kode warna ketat: Putih (polishing/mengilapkan), Merah (buffing ringan), Biru/Hijau (scrubbing/cuci kotoran), Hitam (stripping/pengupasan wax berat).',
        'Sebelum menggunakan squeegee kaca, lap karet penyeka harus dipastikan lurus tanpa sobekan agar tidak meninggalkan goresan belang air.',
        'Selalu encerkan cairan pembersih konsentrat sesuai rasio takaran resmi dari pabrik menggunakan gelas ukur (Keiryou Kappu).'
      ],
      summary: 'Penguasaan nama alat mekanik, skala pH bahan kimia deterjen, dan karakteristik material lantai seperti ubin PVC dan marmer adalah kunci menjaga higienitas tanpa merusak fasilitas gedung berharga.',
      practiceQuestions: [
        {
          id: 'bclean_ch2_q1',
          questionNumber: 1,
          questionText: '建物の「大理石（だいりせき）」の床や壁を清掃する際、使用する洗剤として最も適切なものを一つ選びなさい。',
          situation: 'Pemilihan cairan pembersih yang tepat untuk permukaan batu marmer alam.',
          options: [
            '尿石をすばやく溶かすための強酸性洗剤。',
            '素材の表面を傷めず安全に清掃できる中性洗剤。',
            '油汚れを徹底的に分解する強アルカリ性の剥離剤。',
            '塩素系漂白剤を高濃度に混ぜた消毒液。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Marmer alam terbuat dari kalsium karbonat yang sangat sensitif terhadap asam. Pembersih asam (Pilihan 1) atau stripper alkali kuat (Pilihan 3) akan merusak lapisan kilau marmer. Karena itu, marmer hanya boleh dibersihkan menggunakan deterjen netral (中性洗剤).',
          translation: 'Pilihlah satu deterjen yang paling tepat saat membersihkan lantai atau dinding marmer di dalam gedung.'
        },
        {
          id: 'bclean_ch2_q2',
          questionNumber: 2,
          questionText: '床の定期清掃で、古くなって黒ずんだワックスの層を完全に取り除くために使用する薬剤として、正しいものを一つ選びなさい。',
          situation: 'Bahan kimia yang digunakan untuk mengupas lapisan lilin lantai lama.',
          options: [
            'ガラスクリーナー',
            'カーペット用リンス剤',
            '剥離剤（はくりざい）',
            '除菌アルコールスプレー'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. 剥離剤 (Hakurizai / stripper) adalah zat kimia alkali yang diformulasikan khusus untuk melunakkan dan mengangkat lapisan lilin resin lantai (wax) yang sudah kusam agar dapat diganti dengan lapisan lilin baru.',
          translation: 'Pilihlah bahan kimia yang tepat untuk mengupas dan menghilangkan tuntas lapisan lilin lantai lama yang menghitam saat pembersihan berkala.'
        }
      ],
      officialReference: {
        source: 'Japan Building Maintenance Association Tech Series',
        agency: 'National Building Maintenance Association (全国ビルメンテナンス協会)',
        documentTitle: '清掃管理業務における資機材・洗剤の安全な取扱いマニュアル (Pedoman Keamanan Bahan & Alat Pembersih)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: KOMUNIKASI DI TEMPAT KERJA (HO-REN-SO & TENANT)
    // ------------------------------------------------------------------------
    {
      id: 'building_cleaning_ch3',
      sectorId: 'building_cleaning',
      category: 'komunikasi',
      chapterNumber: 3,
      title: 'Instruksi Kerja, Ho-Ren-So, & Prosedur Penemuan Barang (Shuutokubutsu)',
      japaneseTitle: '作業指示の受け方・報告連絡相談（報連相）・遺失物取り扱い手順',
      estimatedMinutes: 30,
      objectives: [
        'Memahami cara menerima dan mengonfirmasi instruksi kerja harian (Sagyou Shiji) dari penanggung jawab lapangan (Genba Sekininsha).',
        'Menerapkan prinsip Ho-Ren-So saat menemukan kerusakan fasilitas gedung (kebocoran air, lampu putus, kaca retak).',
        'Menguasai SOP penanganan barang tertinggal atau barang berharga milik tenant (Shuutokubutsu / Wasuremono).'
      ],
      contentExplanation: `
Di lingkungan gedung perkantoran dan fasilitas komersial Jepang, staf pembersih memegang peran sebagai "mata dan telinga" pengelola gedung. Setiap kejanggalan fasilitas fisik atau insiden kecil harus segera dikoordinasikan melalui budaya **Ho-Ren-So (報連相 - Houkoku, Renraku, Soudan)**.

### 1. Menerima Instruksi Kerja (作業指示の受託)
Sebelum memulai shift kerja, supervisor (*Genba Sekininsha* / 現場責任者) akan mengadakan briefing pagi (*Chourei* / 朝礼). 
- Catat area khusus yang membutuhkan perhatian ekstra (misal: "Hari ini lantai 7 ada rapat dewan direksi pukul 10:00, prioritaskan vacuum koridor sebelum jam 09:30").
- Konfirmasikan instruksi dengan mengulang inti pesan (*Fukushou* / 復唱): *"Lantai 7 selesai sebelum pukul 09:30, dimengerti."*.

### 2. Pelaporan Kerusakan Fasilitas Fisik (破損箇所の報告)
Saat membersihkan koridor, tangga darurat, atau bilik toilet, jika Anda melihat:
- Keran air wastafel tidak bisa menutup sempurna (*mizu-more* / 水漏れ),
- Lampu koridor padam (*tamagire* / 球切れ),
- Pintu darurat terganjal kardus (*hijou-guchi heisai* / 非常口閉塞),
Segera catat nomor lantai dan lokasi spesifik, lalu sampaikan kepada supervisor. Ini mencegah bahaya kecelakaan kebakaran atau pemborosan air gedung.

### 3. Prosedur Mutlak Penanganan Barang Tertinggal (遺失物・拾得物の取り扱い)
Seringkali staf pembersih menemukan barang tenant yang tertinggal di ruang rapat, meja pantry, atau bilik toilet (misal: smartphone, dompet, kunci, kartu akses karyawan, payung).
**SOP Penanganan Barang Temuan (拾得物 - Shuutokubutsu)**:
1. **Dilarang keras menyentuh isi dalam barang**: Jangan membuka dompet untuk menghitung uangnya atau membuka pesan di layar ponsel.
2. **Jangan memindahkan barang sendirian tanpa saksi jika bernilai tinggi**: Jika menemukan amplop uang tunai, panggil rekan kerja sebagai saksi verifikasi.
3. **Segera serahkan ke Pos Keamanan (防災センター / Bousai Sentaa)** atau supervisor tim.
4. **Catat di Buku Register Barang Temuan (拾得物台帳)**: Tanggal, jam tepat, lokasi penemuan (lantai, ruangan, nomor bilik toilet), ciri-ciri barang, dan nama penemu.
      `,
      keyTerms: [
        {
          japanese: '現場責任者',
          kana: 'げんばせきにんしゃ',
          romaji: 'genba sekininsha',
          indonesian: 'Penanggung jawab lapangan / supervisor lokasi',
          note: 'Atasan langsung yang membagi zona tugas harian pembersih.'
        },
        {
          japanese: '拾得物 / 忘れ物',
          kana: 'しゅうとくぶつ / わすれもの',
          romaji: 'shuutokubutsu / wasuremono',
          indonesian: 'Barang temuan / barang yang tertinggal',
          note: 'Wajib diserahkan ke pos keamanan dalam kondisi utuh.'
        },
        {
          japanese: '破損箇所',
          kana: 'はそんかしょ',
          romaji: 'hason kasho',
          indonesian: 'Bagian fasilitas gedung yang rusak / pecah',
          note: 'Objek wajib lapor dalam lembar inspeksi harian.'
        },
        {
          japanese: '防災センター',
          kana: 'ぼうさいせんたー',
          romaji: 'bousai sentaa',
          indonesian: 'Pusat kendali pencegahan bencana / pos sekuriti pusat',
          note: 'Tempat penyerahan barang hilang dan pelaporan kondisi darurat gedung.'
        },
        {
          japanese: '復唱',
          kana: 'ふくしょう',
          romaji: 'fukushou',
          indonesian: 'Pengulangan instruksi kerja (konfirmasi verbal balik)',
          note: 'Mencegah salah paham pembagian area dan batas waktu kerja.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Penemuan Dompet dan Kartu Akses Tenant di Bawah Meja Rapat',
        scenario: 'Siti sedang mem-vacuum ruang pertemuan lantai 10 setelah jam kantor selesai. Di bawah salah satu kursi beroda, ia menemukan dompet kulit berwarna hitam yang di dalamnya tampak kartu akses ID karyawan.',
        dialogue: [
          {
            speaker: 'Siti (Staf)',
            role: 'Staf Pembersih',
            japanese: '責任者の中村さん、第2会議室のテーブル下で、黒い財布の忘れ物を発見しました。',
            kana: 'せきにんしゃの なかむらさん、だいにかいぎしつの てーぶるしたで、くろい さいふの わすれものを はっけんしました。',
            romaji: 'Sekininsha no Nakamura-san, Dai-ni Kaigishitsu no teeburu-shita de, kuroi saifu no wasuremono wo hakken shimashita.',
            indonesian: 'Pak Nakamura selaku supervisor, di bawah meja Ruang Rapat ke-2, saya menemukan dompet hitam yang tertinggal.'
          },
          {
            speaker: 'Nakamura (Supervisor)',
            role: 'Penanggung Jawab',
            japanese: '中身は確認しましたか？そのまま触らずに持ってきてくれましたね？',
            kana: 'なかみは かくにんしましたか？そのまま さわらずに もってきてくれましたね？',
            romaji: 'Nakami wa kakunin shimashita ka? Sono mama sawarazu ni mottekite kuremashita ne?',
            indonesian: 'Apakah isinya sudah diperiksa? Kamu membawanya langsung tanpa mengutak-atik dalamnya, kan?'
          },
          {
            speaker: 'Siti (Staf)',
            role: 'Staf Pembersih',
            japanese: 'はい、中身は開けていません。見つけた場所と時間をメモして、防災センターにお届けすればよろしいでしょうか。',
            kana: 'はい、なかみは あけていません。みつけた ばしょと じかんを めもして、ぼうさいせんたーに おとどけすれば よろしいでしょうか。',
            romaji: 'Hai, nakami wa akete imasen. Mitsuketa basho to jikan wo memo shite, Bousai Sentaa ni otodoke sureba yoroshii deshou ka.',
            indonesian: 'Ya, isinya tidak saya buka sama sekali. Saya sudah mencatat lokasi dan waktunya. Apakah langsung kita serahkan ke Bousai Center?'
          },
          {
            speaker: 'Nakamura (Supervisor)',
            role: 'Penanggung Jawab',
            japanese: '完璧です。一緒に防災センターへ行って拾得物台帳に記入しましょう。',
            kana: 'かんぺきです。いっしょに ぼうさいせんたーへ いって しゅうとくぶつだいちょうに きにゅうしましょう。',
            romaji: 'Kanpeki desu. Issho ni Bousai Sentaa e itte shuutokubutsu daichou ni kinyuu shimashou.',
            indonesian: 'Sempurna. Mari kita bersama ke Bousai Center untuk mengisi buku register barang temuan.'
          }
        ],
        takeaway: 'Jangan pernah membuka atau memindahkan uang/kartu dalam dompet temuan. Selalu catat waktu dan lokasi penemuan secara presisi, lalu serahkan bersama supervisor ke pos keamanan gedung.'
      },
      visualDiagram: {
        title: 'Alur SOP Penanganan Barang Temuan (Shuutokubutsu)',
        type: 'steps',
        items: [
          {
            label: '1. Penemuan & Pengamanan Awal',
            description: 'Jangan membuka isi dompet/tas. Jangan mengutak-atik layar ponsel.',
            highlight: 'Sentuh bagian luar saja'
          },
          {
            label: '2. Pencatatan Fakta Obyektif',
            description: 'Catat jam penemuan (misal 18:45), lokasi spesifik (Lantai 10 Ruang Rapat B, Meja 3), warna & bentuk fisik.',
            highlight: 'Data akurat'
          },
          {
            label: '3. Pelaporan ke Supervisor Tim',
            description: 'Sampaikan langsung (Houkoku) kepada penanggung jawab lapangan (Genba Sekininsha).',
            highlight: 'Hindari menyimpan sendiri'
          },
          {
            label: '4. Penyerahan ke Pos Keamanan (Bousai Center)',
            description: 'Serahkan resmi bersama supervisor dan tanda tangani formulir serah terima buku register.',
            highlight: 'Shuutokubutsu Daichou'
          }
        ]
      },
      importantPoints: [
        'Setiap instruksi dari supervisor harus selalu diulang intinya (Fukushou) agar tidak salah mengerjakan ruangan penting.',
        'Jika penyewa gedung mengajukan keluhan (misal: sabun habis atau tumpahan kopi di karpet), segera sampaikan permohonan maaf sopan ("Moushiwake gozaimasen. Tadaima sugu ni taiou itashimasu") lalu bersihkan dengan sigap.',
        'Menyembunyikan barang temuan dapat dikategorikan sebagai tindak pidana penggelapan barang temuan (Iryuutsu Ouryou-zai) menurut hukum pidana Jepang.'
      ],
      summary: 'Komunikasi profesional staf pembersih dibangun atas dasar Ho-Ren-So yang tanggap terhadap anomali fasilitas gedung serta kejujuran mutlak dalam menjalankan SOP penanganan barang temuan tenant bersama pos sekuriti.',
      practiceQuestions: [
        {
          id: 'bclean_ch3_q1',
          questionNumber: 1,
          questionText: 'ビルの給湯室（きゅうとうしつ）を清掃中、シンクの下から水がポタポタと漏れているのを発見しました。清掃員の対応として、最も適切なものを一つ選びなさい。',
          situation: 'Penemuan kebocoran air di bawah bak cuci pantry.',
          options: [
            '自分の担当はゴミ回収だけなので、見なかったことにしてそのまま立ち去る。',
            '水の漏れている場所と状況を確認し、雑巾で床を拭いた後、直ちに現場責任者へ報告（報連相）する。',
            '自分で配管を工具で分解し、直そうとしてパイプを強くねじ切る。',
            'ビルの全館非常ベルを鳴らして、入居者全員を屋外へ避難させる。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Langkah yang tepat adalah mengamankan lantai agar air tidak merusak struktur kayu/vinil (dilap), lalu segera melapor ke penanggung jawab (Ho-Ren-So). Mengabaikan (Pilihan 1) atau membongkar pipa sendiri tanpa wewenang teknis (Pilihan 3) adalah tindakan salah.',
          translation: 'Pilihlah tindakan yang paling tepat saat menemukan air menetes bocor dari bawah wastafel ruang pantry saat sedang membersihkan gedung.'
        }
      ],
      officialReference: {
        source: 'Japan Ministry of Land, Infrastructure, Transport and Tourism (MLIT)',
        agency: 'Building Maintenance Quality Assurance Board',
        documentTitle: 'ビル維持管理業務におけるコンプライアンス及び緊急時対応マニュアル (Pedoman Kepatuhan & Penanganan Darurat)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: K3 & SOP PEMBERSIHAN TEKNIS
    // ------------------------------------------------------------------------
    {
      id: 'building_cleaning_ch4',
      sectorId: 'building_cleaning',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'Keselamatan Kerja (K3), SOP Pembersihan Lantai, Kaca, & Sanitasi Toilet',
      japaneseTitle: '安全衛生（労働災害防止）・床清掃・ガラス清掃・トイレ清掃の標準作業手順',
      estimatedMinutes: 35,
      objectives: [
        'Menguasai prinsip K3: pencegahan kecelakaan terpeleset (Tentou Boushi), bahaya tersengat listrik mesin (Kanden Boushi), dan bahaya gas beracun campuran deterjen.',
        'Menerapkan SOP pembersihan lantai keras dengan mop teknik angka "8" (Hachinoji-gake) dan metode setengah jalur.',
        'Menguasai teknik pembersihan kaca (Window Cleaning) memakai washer dan squeegee tanpa goresan air.',
        'Menerapkan sistem kode warna kain lap (Color-coding) untuk mencegah kontaminasi silang bakteri pada fasilitas toilet.'
      ],
      contentExplanation: `
Pekerjaan pembersihan gedung memiliki risiko kecelakaan kerja (**労働災害 - Roudou Saigai**) yang signifikan apabila SOP keselamatan diabaikan.

### 1. Tiga Risiko Fatal K3 & Pencegahannya
1. **Bahaya Gas Beracun: "Jangan Dicampur!" (混ぜるな危険 - Mazeru na Kiken)**:
   - Dilarang keras mencampur **Deterjen Asam (酸性)** dengan **Pembersih Klorin/Kaporit (塩素系)**!
   - Reaksi kimia antara pembersih asam (misal pembersih kerak toilet) dan klorin (cairan pemutih/disinfektan) akan melepaskan **Gas Klorin Beracun (塩素ガス)** yang dapat merusak jaringan paru-paru dan mengakibatkan kematian seketika!
2. **Bahaya Tersengat Aliran Listrik (感電防止 - Kanden Boushi)**:
   - Saat mengoperasikan mesin polisher atau wet vacuum, periksa kabel listrik dari sobekan atau kawat terkelupas.
   - **Kabel listrik mesin harus selalu disampirkan di atas bahu** operator untuk mencegah kabel terlilit piringan mesin yang berputar kencang atau terendam genangan air cucian.
   - Jangan mencabut steker listrik dengan tangan basah atau menarik bagian kabelnya (tarik bagian kepalanya).
3. **Pencegahan Terpeleset (転倒防止 - Tentou Boushi)**:
   - Selalu pasang papan peringatan *"Sedang Dalam Pembersihan / Awas Lantai Basah"* (**清掃中・足元注意看板 - Sagyouchuu / Ashimoto Chuui**) di kedua sisi koridor.
   - Terapkan **Metode Pembersihan Setengah Jalur (片側清掃 - Katagawa Seisou)**: Pel separuh koridor terlebih dahulu hingga kering, biarkan separuh koridor tetap kering agar pejalan kaki dapat melintas dengan aman.

### 2. SOP Pembersihan Teknis Kunci
- **Teknik Mengepel Angka Delapan (8の字がけ - Hachinoji-gake)**: Gerakkan kain pel membentuk angka 8 horizontal sambil melangkah mundur. Teknik ini memastikan kotoran terkumpul di depan kain pel dan operator tidak menginjak lantai basah yang baru dipel.
- **Pembersihan Kaca Jendela (ガラス清掃 - Garasu Seisou)**:
  1. Basahi permukaan kaca menggunakan kain peresap cairan pembersih (*Washer / シャンパー*).
  2. Tarik air secara horizontal atau pola berkesinambungan menggunakan bilah karet *Squeegee*.
  3. Setiap kali satu tarikan selesai, lap bilah karet squeegee dengan lap kering (*Dry Towel*) sebelum tarikan berikutnya agar tidak ada garis air (*Sujitate*) yang tersisa.
  4. Lap pinggiran bingkai kaca (*Sash / サッシ*) dengan kain microfiber kering.
- **Mencegah Kontaminasi Silang Toilet (カラーゾーニング - Color Zoning)**:
  Gunakan kain lap dengan kode warna yang terpisah mutlak:
  - **Merah / Oranye**: Khusus kloset duduk, urinoir, dan lantai toilet (area kotoran kuman tinggi).
  - **Kuning**: Wastafel cuci tangan dan cermin toilet.
  - **Biru / Hijau**: Meja kerja kantor, telepon, pegangan pintu, dan furnitur pantry umum.
      `,
      keyTerms: [
        {
          japanese: '混ぜるな危険',
          kana: 'まぜるなきけん',
          romaji: 'mazeru na kiken',
          indonesian: 'Bahaya! Jangan dicampur (Peringatan gas klorin beracun)',
          note: 'Peringatan mutlak pada label kemasan pembersih klorin dan asam.'
        },
        {
          japanese: '8の字がけ',
          kana: 'はちのじがけ',
          romaji: 'hachinoji-gake',
          indonesian: 'Teknik sapuan mengepel lantai berbentuk angka 8',
          note: 'Metode standar ujian agar tidak menginjak area yang baru dipel.'
        },
        {
          japanese: '足元注意看板',
          kana: 'あしもとちゅういかんばん',
          romaji: 'ashimoto chuui kanban',
          indonesian: 'Papan peringatan lantai licin / awas terpeleset',
          note: 'Wajib dipasang sebelum mengaplikasikan air atau lilin di lantai.'
        },
        {
          japanese: '片側清掃',
          kana: 'かたがわせいそう',
          romaji: 'katagawa seisou',
          indonesian: 'Metode pembersihan setengah sisi jalur',
          note: 'Menyisakan separuh jalur koridor tetap kering untuk pejalan kaki.'
        },
        {
          japanese: '交差汚染',
          kana: 'こうさおせん',
          romaji: 'kousa osen',
          indonesian: 'Kontaminasi silang kuman bakteri antar-ruangan',
          note: 'Dicegah dengan membedakan warna kain lap (zoukin).'
        },
        {
          japanese: '感電防止',
          kana: 'かんでんぼうし',
          romaji: 'kanden boushi',
          indonesian: 'Pencegahan sengatan listrik mesin pembersih',
          note: 'Menyampirkan kabel di bahu dan menjauhkannya dari genangan air.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Mencegah Pembentukan Gas Klorin Beracun di Ruang Sanitasi',
        scenario: 'Di toilet umum lantai basement, Andi ingin mempercepat pembersihan kloset yang berkerak kuning dan berbau. Ia berniat mencampurkan pembersih kerak asam kuat dengan cairan pemutih disinfektan klorin ke dalam satu ember.',
        dialogue: [
          {
            speaker: 'Hendra (Senior)',
            role: 'Staf Senior',
            japanese: 'アンディさん、絶対に混ぜちゃダメだ！その2本を混ぜたら塩素ガスが発生して命に関わる大事故になるよ！',
            kana: 'アンディさん、ぜったいに まぜちゃ だめだ！その にほんを まぜたら えんそがすが はっせいして いのちに かかわる だいじこに なるよ！',
            romaji: 'Andi-san, zettai ni mazecha dame da! Sono ni-hon wo mazetara enso gasu ga hassei shite inochi ni kakawaru daijiko ni naru yo!',
            indonesian: 'Andi, jangan sekali-kali mencampurnya! Kalau kedua botol itu dicampur, akan timbul gas klorin beracun yang bisa mematikan!'
          },
          {
            speaker: 'Andi (Staf)',
            role: 'Staf Pemula',
            japanese: 'すみません！よく落ちると思ってしまいました…ラベルに「混ぜるな危険」と書いてありますね。',
            kana: 'すみません！よく おちると おもってしまいました…らべるに「まぜるなきけん」と かいてありますね。',
            romaji: 'Sumimasen! Yoku ochiru to omotte shimaimashita... raberu ni "mazeru na kiken" to kaite arimasu ne.',
            indonesian: 'Maafkan saya! Saya pikir nodanya akan lebih cepat hilang... ternyata di labelnya tertulis jelas "Bahaya Jangan Dicampur".'
          },
          {
            speaker: 'Hendra (Senior)',
            role: 'Staf Senior',
            japanese: '酸性と塩素系は別々の日に使うか、水で完全に洗い流してから時間を置いて使わなければならないんだ。安全が第一だよ。',
            kana: 'さんせいと えんそけいは べつべつの ひに つかうか、みずで かんぜんに あらいながしてから じかんを おいて つかわなければ ならないんだ。あんぜんが だいいちだよ。',
            romaji: 'Sansei to ensokei wa betsubetsu no hi ni tsukau ka, mizu de kanzen ni arainagashite kara jikan wo oite tsukawanakereba naranai n da. Anzen ga daiichi da yo.',
            indonesian: 'Bahan asam dan klorin harus digunakan pada hari berbeda, atau dibilas bersih tuntas dengan air sebelum produk lainnya digunakan. Keselamatan adalah nomor satu.'
          }
        ],
        takeaway: 'Label "混ぜるな危険" (Bahaya Jangan Dicampur) adalah aturan hidup-mati di dunia cleaning. Pencampuran asam dan klorin menghasilkan gas klorin mematikan yang merusak saluran napas manusia.'
      },
      visualDiagram: {
        title: 'Sistem Pembagian 4 Zona Warna Kain Lap (Color Zoning)',
        type: 'cards',
        items: [
          {
            label: 'Zona Merah (Kloset / Urinoir)',
            description: 'Khusus untuk mangkuk kloset dan urinoir toilet. Tingkat bakteri tertinggi.',
            badge: 'Higienitas Ekstrem'
          },
          {
            label: 'Zona Kuning (Wastafel / Cermin Toilet)',
            description: 'Untuk wastafel cuci tangan, kran air, dan dinding partisi kamar mandi.',
            badge: 'Higienitas Sedang'
          },
          {
            label: 'Zona Biru (Meja / Telepon Kantor)',
            description: 'Untuk furnitur kantor, meja kerja tenant, dan perangkat telepon yang disentuh tangan.',
            badge: 'Area Kerja Bersih'
          },
          {
            label: 'Zona Hijau (Pantry / Area Konsumsi)',
            description: 'Untuk meja makan pantry, lemari es, dan permukaan persiapan minuman.',
            badge: 'Area Makanan'
          }
        ]
      },
      importantPoints: [
        'Dilarang keras mencampur pembersih asam (酸性) dan pemutih klorin (塩素系) karena menghasilkan gas klorin yang mematikan.',
        'Kabel mesin polisher harus selalu disampirkan di bahu untuk mencegah bahaya kabel putus tergilas mesin atau tersengat listrik.',
        'Mengepel lantai wajib memasang papan tanda peringatan dan dikerjakan setengah jalur koridor agar tidak mencelakakan tenant.'
      ],
      summary: 'Kepatuhan terhadap K3 (mencegah gas beracun campuran deterjen dan sengatan listrik mesin polisher) serta ketepatan teknik mopping Hachinoji-gake dan zoning warna kain lap menjamin keselamatan kerja dan sanitasi steril bebas kuman.',
      practiceQuestions: [
        {
          id: 'bclean_ch4_q1',
          questionNumber: 1,
          questionText: '洗剤の容器に「まぜるな危険」と表示されている場合、絶対に混ぜてはならない組み合わせとして、正しいものを一つ選びなさい。',
          situation: 'Kombinasi bahan kimia pembersih yang dilarang keras dicampur.',
          options: [
            '「中性洗剤」と「水」',
            '「塩素系漂白剤・洗浄剤」と「酸性タイプの洗剤」',
            '「アルカリ性洗剤」と「お湯」',
            '「ガラスクリーナー」と「中性洗剤」'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Pencampuran pembersih tipe klorin (塩素系) dengan pembersih tipe asam (酸性) akan memicu pelepasan gas klorin beracun berbahaya (有毒な塩素ガス) yang berakibat fatal bagi saluran pernapasan manusia.',
          translation: 'Pilihlah kombinasi yang dilarang keras untuk dicampur saat tertera label "Bahaya Jangan Dicampur" pada kemasan deterjen.'
        },
        {
          id: 'bclean_ch4_q2',
          questionNumber: 2,
          questionText: '床みがき機（ポリッシャー）を安全に操作するための注意点として、誤っているものを一つ選びなさい。',
          situation: 'Pilihlah pernyataan yang SALAH mengenai prosedur keselamatan pengoperasian mesin polisher.',
          options: [
            '電源コードが回転するブラシやパッドに巻き込まれないよう、コードを肩に掛けて操作する。',
            '濡れた手のままで電源プラグの抜き差しを行う。',
            '作業前に電源コードの被覆に破れや断線がないか点検する。',
            'プラグをコンセントから抜くときは、コードを引っ張らずにプラグ本体を持って抜く。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 adalah pernyataan yang SALAH (maka ini jawaban yang tepat). Mencabut atau memasang steker listrik dengan tangan basah berisiko sangat tinggi menyebabkan sengatan arus listrik (感電 / kanden). Tangan harus selalu dalam kondisi kering sempurna.',
          translation: 'Pilihlah satu pernyataan yang KELIRU mengenai poin kehati-hatian dalam mengoperasikan mesin polisher lantai secara aman.'
        }
      ],
      officialReference: {
        source: 'Japan Industrial Safety and Health Association (JISHA)',
        agency: 'Ministry of Health, Labour and Welfare (MHLW)',
        documentTitle: 'ビルクリーニング作業における安全衛生管理指針 (Pedoman K3 Pembersihan Gedung)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: PERSIAPAN UJIAN & BANK SOAL RESMI
    // ------------------------------------------------------------------------
    {
      id: 'building_cleaning_ch5',
      sectorId: 'building_cleaning',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Struktur Ujian Evaluasi Keterampilan Building Cleaning SSW 1',
      japaneseTitle: 'ビルクリーニング分野特定技能評価試験の出題範囲と合格対策',
      estimatedMinutes: 40,
      objectives: [
        'Memahami format struktur ujian resmi Asosiasi Pemeliharaan Gedung Jepang: Ujian Teori (Gakka) dan Ujian Praktik (Jitsugi).',
        'Menguasai 3 modul tugas uji praktik: Pembersihan Lantai Elastis (Tugas 1), Pembersihan Kaca (Tugas 2), dan Pembersihan Karpet (Tugas 3).',
        'Mengenali kriteria penalti pengurangan poin (Genten) dan poin diskualifikasi keselamatan kerja dalam ujian praktik.'
      ],
      contentExplanation: `
Ujian **Building Cleaning Skills Evaluation Test (ビルクリーニング分野特定技能評価試験)** diselenggarakan resmi oleh **公益社団法人 全国ビルメンテナンス協会 (National Building Maintenance Association)** atas persetujuan Kementerian Tenaga Kerja Jepang (MHLW).

### 1. Ujian Teori (学科試験 - Gakka Shiken)
- **Format**: Ujian tertulis pilihan ganda / benar-salah (*Maru-Batsu* & Pilihan Ganda).
- **Waktu**: 60 Menit.
- **Passing Grade**: Skor minimal 60%.
- **Materi Uji**:
  1. Pengetahuan Umum Pemeliharaan Gedung (UU Biru Kanri-hou, etika kerja).
  2. Karakteristik Material Bangunan (ubin vinil, marmer, granit, jenis serat karpet bulu loop/cut pile).
  3. Sifat Fisika & Kimia Deterjen (skala pH asam/netral/alkali, stripper wax).
  4. Pengoperasian Mesin & Alat Pembersih.
  5. Standar Keselamatan Kerja & Higienitas (K3, gas beracun, pencegahan kebakaran).

### 2. Ujian Praktik (実技試験 - Jitsugi Shiken)
Peserta diuji secara langsung di hadapan penguji resmi (*Shikenkan*) melakukan 3 tugas teknis dalam batas waktu terukur:
- **Tugas 1: Pembersihan Permukaan Lantai Elastis (弾性床清掃作業 - Dansei-yuka Seisou)**:
  - Menggunakan sapu debu (*dry mop*), mengepel dengan mop basah teknik angka 8 (*Hachinoji-gake*), dan pelapisan wax tipis merata tanpa mengenai plint dinding (*Habaki*).
- **Tugas 2: Pembersihan Permukaan Kaca Jendela (ガラス面清掃作業 - Garasu-men Seisou)**:
  - Membasahi kaca dengan *Washer*, menyeka tuntas air dengan *Squeegee* tanpa menetes ke lantai, dan mengelap sisa air di sudut bingkai menggunakan kain lap kering (*Dry Towel*).
- **Tugas 3: Pembersihan Karpet / Permukaan Berserat (カーペット清掃作業)**:
  - Mengidentifikasi noda (*shimi*), penyedotan kotoran dengan vacuum cleaner industri, dan teknik ekstraksi noda menggunakan spot remover tanpa merusak warna serat kain.

### 3. Kriteria Penalti Pengurangan Nilai (減点事項 - Genten Jikou)
- Lupa memasang papan tanda peringatan kerja sebelum mulai mengepel.
- Menginjak atau melindas kabel listrik mesin pembersih yang terhubung ke stopkontak.
- Menempelkan bilah karet squeegee kaca yang kotor tanpa mengelapnya terlebih dahulu dengan kain kering.
- Membasahi plint kayu dinding (*Habaki*) dengan air pel atau cairan wax kental.
      `,
      keyTerms: [
        {
          japanese: '特定技能評価試験',
          kana: 'とくていぎのうひょうかしけん',
          romaji: 'tokutei ginou hyouka shiken',
          indonesian: 'Ujian evaluasi keterampilan Pekerja Berketerampilan Khusus (SSW)',
          note: 'Syarat wajib memperoleh visa Tokutei Ginou 1 di sektor building cleaning.'
        },
        {
          japanese: '実技試験',
          kana: 'じつぎしけん',
          romaji: 'jitsugi shiken',
          indonesian: 'Ujian praktik keterampilan teknis',
          note: 'Menguji ketepatan gerakan, kerapian, postur kerja, dan kecepatan waktu.'
        },
        {
          japanese: '減点',
          kana: 'げんてん',
          romaji: 'genten',
          indonesian: 'Pengurangan poin / penalti kesalahan uji',
          note: 'Dikenakan bila melanggar urutan kerja atau standar keselamatan K3.'
        },
        {
          japanese: '巾木（はばき）',
          kana: 'はばき',
          romaji: 'habaki',
          indonesian: 'Plint dasar dinding (skirting board pembatas lantai dan dinding)',
          note: 'Dalam ujian tidak boleh terkena cipratan lilin wax atau air pel.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Simulasi Ujian Praktik: Penanganan Kabel Listrik Mesin Pembersih',
        scenario: 'Pada sesi ujian praktik pembersihan lantai, peserta bernama Farhan sedang menyalakan mesin polisher untuk membersihkan area simulasi lantai vinil seluas 15 meter persegi.',
        dialogue: [
          {
            speaker: 'Shikenkan (Penguji)',
            role: 'Penguji Resmi Asosiasi',
            japanese: '試験開始です。準備ができたら作業を始めてください。',
            kana: 'しけんかいしです。じゅんびが できたら さぎょうを はじめてください。',
            romaji: 'Shiken kaishi desu. Junbi ga dekitara sagyou wo hajimete kudasai.',
            indonesian: 'Ujian dimulai. Jika sudah siap, silakan mulai pengerjaan.'
          },
          {
            speaker: 'Farhan (Peserta)',
            role: 'Peserta Ujian SSW',
            japanese: 'はい！まず清掃中看板を設置し、コードを肩に掛けて周囲の安全を確認します。',
            kana: 'はい！まず せいそうちゅうかんばんを せっちし、こーどを かたに かけて しゅういの あんぜんを かくにんします。',
            romaji: 'Hai! Mazu seisouchuu kanban wo secchi shi, koudo wo kata ni kakete shuui no anzen wo kakunin shimasu.',
            indonesian: 'Siap! Pertama saya memasang papan peringatan kerja, menyampirkan kabel listrik di bahu, dan memastikan keamanan area sekitar.'
          },
          {
            speaker: 'Shikenkan (Penguji)',
            role: 'Penguji Resmi Asosiasi',
            japanese: '（チェックシートに高得点を記入：基本手順・安全確認良し）',
            kana: '（ちぇっくしーとに こうとくてんを きにゅう：きほんてじゅん・あんぜんかくにんよし）',
            romaji: '(Chekku shiito ni koutokuten wo kinyuu: kihon tejun / anzen kakunin yoshi)',
            indonesian: '(Mencatat nilai tinggi pada lembar penilaian: urutan dasar dan konfirmasi keselamatan K3 sangat baik).'
          }
        ],
        takeaway: 'Penguji sangat memperhatikan kepatuhan keselamatan kerja: memasang signboard sebelum mulai dan menyampirkan kabel di pundak adalah poin mutlak kelulusan.'
      },
      visualDiagram: {
        title: 'Komponen Ujian Keterampilan Building Cleaning SSW 1',
        type: 'steps',
        items: [
          {
            label: '1. Ujian Teori (Gakka) - 60 Menit',
            description: 'Pengetahuan sanitasi gedung, UU Biru Kanri-hou, sifat deterjen pH, material lantai, dan K3.',
            highlight: 'Skor Minimal 60%'
          },
          {
            label: '2. Tugas Praktik 1: Lantai Vinil (Dansei-yuka)',
            description: 'Sweeping, teknik mopping angka 8, pembersihan sudut tepi, dan pelapisan wax tipis rapi.',
            highlight: 'Waktu Terukur'
          },
          {
            label: '3. Tugas Praktik 2: Pembersihan Kaca (Garasu)',
            description: 'Aplikasi washer merata, tarikan squeegee lurus bebas belang air, dan pengelapan sash bingkai.',
            highlight: 'Bebas Goresan Garis Air'
          },
          {
            label: '4. Tugas Praktik 3: Karpet & Sanitasi',
            description: 'Vacuuming karpet, identifikasi noda kotoran, dan pembersihan sanitasi toilet steril.',
            highlight: 'Bebas Kontaminasi Silang'
          }
        ]
      },
      importantPoints: [
        'Pada tes teori, baca soal sampai kata terakhir untuk memastikan apakah diminta memilih pernyataan yang BENAR (適切なもの) atau SALAH (誤っているもの).',
        'Dalam ujian praktik kaca, setiap kali menyelesaikan satu tarikan squeegee, bilah karet wajib dilap dengan lap kering sebelum tarikan berikutnya.',
        'Sertifikat kelulusan ujian evaluasi keterampilan ini diterbitkan oleh National Building Maintenance Association dan berlaku permanen untuk pengajuan visa SSW.'
      ],
      summary: 'Kunci sukses lulus ujian SSW Building Cleaning adalah pemahaman komprehensif teori sanitasi kimia dan penguasaan refleks motorik pada 3 tugas praktik: mopping angka 8 lantai vinil, penyekaan kaca squeegee, serta kepatuhan ketat K3.',
      practiceQuestions: [
        {
          id: 'bclean_ch5_q1',
          questionNumber: 1,
          questionText: 'ビルクリーニング実技試験の「ガラス面清掃」において、減点（ミス）となる動作として最も適切なものを一つ選びなさい。',
          situation: 'Penalti kesalahan teknis saat ujian praktik pembersihan kaca dengan squeegee.',
          options: [
            'スクイジーを一回引くごとに、ゴムの刃先の水分を乾いたタオルで拭き取った。',
            'シャンパー（ウォッシャー）で洗剤液をガラス全体に均一に塗布した。',
            'スクイジーを途中で止めたり傾けたりして、ガラスの中央に筋状の水滴（スジ）を残したまま作業を終了した。',
            '最後にサッシ（窓枠）の下部に垂れた水滴をきれいに拭き取った。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Meninggalkan bekas garis air (スジ / sujitate) di tengah permukaan kaca adalah kesalahan teknis berat yang langsung mengurangi poin penilaian ujian praktik pembersihan kaca.',
          translation: 'Pilihlah satu tindakan yang menjadi penyebab pengurangan nilai (penalti) dalam ujian praktik pembersihan kaca.'
        },
        {
          id: 'bclean_ch5_q2',
          questionNumber: 2,
          questionText: '弾性床（Pタイル）へのワックス塗布作業における注意点として、適切なものを一つ選びなさい。',
          situation: 'Aturan teknis saat mengaplikasikan lilin pelapis lantai (waxing).',
          options: [
            '壁の巾木（はばき）にワックスがべったり付着しても、後で目立たないので放置する。',
            '床のホコリや髪の毛を掃除機で取り除く前に、いきなりワックスを流し込んで塗り広げる。',
            '床面を完全に乾燥させ、チリやゴミを除去した清潔な状態を確認してから、薄く均一に塗り広げる。',
            '早く乾かすために、一度に大量のワックス液を床に水たまりのように溜めておく。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Sebelum waxing, lantai wajib disapu/divacuum tuntas hingga bebas debu dan dipastikan kering. Lapisan wax harus diaplikasikan secara tipis dan merata. Pilihan 4 akan menyebabkan wax mengering belang dan mudah terkelupas.',
          translation: 'Pilihlah poin kehati-hatian yang benar saat mengaplikasikan wax pada lantai elastis ubin vinil.'
        }
      ],
      officialReference: {
        source: 'National Building Maintenance Association (公益社団法人 全国ビルメンテナンス協会)',
        agency: 'Ministry of Health, Labour and Welfare (MHLW)',
        documentTitle: 'ビルクリーニング分野特定技能1号評価試験 実施要領および実技試験採点基準 (Pedoman Pelaksanaan & Kriteria Penilaian Ujian)'
      }
    }
  ],
  examSimulation: {
    title: 'Simulasi Resmi Ujian Building Cleaning SSW (Biru Kuriiningu Hyoka Shiken)',
    subtitle: 'Standar Ujian Teori & Praktik Asosiasi Pemeliharaan Gedung Jepang (6 Soal Komprehensif)',
    timeMinutes: 20,
    passingScorePercentage: 60,
    questions: [
      {
        id: 'bclean_sim_q1',
        questionNumber: 1,
        questionText: '建物の床材である「大理石」の性質と清掃時の注意点について、最も適切なものを一つ選びなさい。',
        situation: 'Karakteristik material lantai marmer dan keselamatan perawatannya.',
        options: [
          '大理石は酸に非常に強いため、尿石除去用の酸性洗剤を使って磨くのが最も良い。',
          '大理石は主成分が炭酸カルシウムであり、酸性洗剤が付着すると表面が化学反応で侵食され光沢が失われるため、中性洗剤を使用する。',
          '大理石はプラスチック製なので、どんな高温の熱湯をかけても変形しない。',
          '大理石の床には水を使用せず、毎日強力な剥離剤を原液のまま散布して放置する。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Marmer alam terbuat dari kalsium karbonat (炭酸カルシウム) yang sangat reaktif terhadap asam. Cairan asam akan mengikis permukaannya dan menghilangkan kilau cemerlang selamanya. Pembersihan marmer wajib menggunakan deterjen netral (中性洗剤).',
        translation: 'Pilihlah pernyataan yang paling tepat mengenai karakteristik marmer dan perhatian saat membersihkannya.'
      },
      {
        id: 'bclean_sim_q2',
        questionNumber: 2,
        questionText: '洗剤の安全な取り扱いについて、塩素系漂白剤と酸性洗剤を混ぜてはならない理由として、正しいものを一つ選びなさい。',
        situation: 'Alasan keselamatan larangan pencampuran klorin dan asam.',
        options: [
          '混ぜると固まってしまい、モップが動かなくなるから。',
          '有毒な塩素ガスが発生し、吸い込むと生命に危険を及ぼす恐れがあるから。',
          '洗剤の色が青色に変わり、床が染まってしまうから。',
          '洗浄力が強くなりすぎて、汚れが一瞬で消え去ってしまうから。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Reaksi kimia antara klorin (塩素系) dan asam (酸性) melepaskan gas klorin bebas (塩素ガス) yang sangat beracun dan dapat menyebabkan luka bakar kimiawi paru-paru serta kematian mendadak.',
        translation: 'Pilihlah alasan yang benar mengapa pemutih klorin dan deterjen asam dilarang keras dicampur bersama.'
      },
      {
        id: 'bclean_sim_q3',
        questionNumber: 3,
        questionText: '床みがき機（ポリッシャー）の安全な取り扱いについて、正しい記述を一つ選びなさい。',
        situation: 'Pengoperasian aman mesin polisher lantai putar.',
        options: [
          '電源コードがパッドやブラシに巻き込まれないように、コードを肩に掛けてコードをさばきながら作業する。',
          '電源を入れたまま床から持ち上げて、空中で回転速度を確認する。',
          '作業を中断してその場を離れるときも、電源スイッチを入れたままにしておく。',
          '延長コードの接続部は、床に溜まった洗浄液の水たまりの中に浸けておく。'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Menyampirkan kabel di atas pundak dan mengaturnya dengan satu tangan saat bekerja adalah SOP mutlak keselamatan agar kabel tidak tergilas putus oleh pad putar berkecepatan tinggi.',
        translation: 'Pilihlah pernyataan yang benar mengenai penanganan mesin polisher lantai secara aman.'
      },
      {
        id: 'bclean_sim_q4',
        questionNumber: 4,
        questionText: '建物の共用通路のモップがけ清掃を行う際、利用者の転倒事故を防止するための措置として、最も適切なものを一つ選びなさい。',
        situation: 'Pencegahan kecelakaan terpeleset pejalan kaki saat mengepel lorong koridor umum.',
        options: [
          '通路全体に一気に水をまき、通行人を一切通さないように怒鳴って制止する。',
          '清掃中であることを知らせる「足元注意看板」を設置し、通路の片側ずつを清掃して乾いた通行スペースを確保する（片側清掃）。',
          '作業を早く終わらせるため、看板は置かずに走ってモップがけをする。',
          'ワックスを塗った直後の濡れた床に、靴底に油のついた状態で歩かせる。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Memasang signboard "Awas Lantai Licin / Sedang Pembersihan" dan menerapkan teknik pembersihan setengah jalur (片側清掃 / katagawa seisou) memberikan jalur kering aman bagi pejalan kaki.',
        translation: 'Pilihlah tindakan yang paling tepat untuk mencegah insiden terpeleset bagi pengguna gedung saat mengepel koridor.'
      },
      {
        id: 'bclean_sim_q5',
        questionNumber: 5,
        questionText: 'スクイジーを使用したガラス清掃作業の標準手順として、正しいものを一つ選びなさい。',
        situation: 'SOP standar pembersihan kaca dengan squeegee.',
        options: [
          'ガラス面が完全に乾いた状態のまま、スクイジーのゴムで強くこすりつける。',
          'ウォッシャー（シャンパー）で洗剤液を均一に塗布した後、スクイジーで水を切り、1回引くごとにブレードの刃先を乾いた布で拭き取る。',
          'スクイジーを引くときは、何度も途中で止めて逆方向にジグザグに擦る。',
          '作業後、窓枠（サッシ）の下部に溜まった汚水は自然乾燥するまで放置する。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Membasahi kaca dengan washer, menyeka dengan squeegee lurus, dan menyeka bilah karet dengan lap kering setiap satu tarikan adalah urutan standar baku pembersihan kaca profesional.',
        translation: 'Pilihlah prosedur standar yang benar untuk pembersihan kaca menggunakan squeegee.'
      },
      {
        id: 'bclean_sim_q6',
        questionNumber: 6,
        questionText: 'オフィスの清掃作業中、会議室の机の下で入居者のスマートフォンの忘れ物を発見したときの対応として、最も適切なものを一つ選びなさい。',
        situation: 'Prosedur etika dan kepatuhan saat menemukan smartphone tertinggal milik tenant di ruang pertemuan.',
        options: [
          'パスコードを解除しようと画面を何度も操作し、中身のSNSや写真をチェックする。',
          '高価なスマートフォンなので、誰にも言わずに自分のポケットに入れて持ち帰る。',
          '中身を操作せずそのままの状態を保ち、発見した時間と場所をメモして、直ちに現場責任者または防災センターへ届けて台帳に記録する。',
          '忙しいので、ゴミ箱の中に一時的に入れておき、業務終了後に思い出すことにする。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Dilarang keras mengutak-atik isi smartphone atau menyembunyikannya. SOP yang benar adalah mencatat waktu dan lokasi presisi, lalu segera melaporkannya ke supervisor atau pos sekuriti (防災センター) untuk didata dalam Shuutokubutsu Daichou.',
        translation: 'Pilihlah respon yang paling tepat saat menemukan smartphone yang tertinggal di bawah meja ruang rapat kantor selama pembersihan.'
      }
    ]
  }
};
