import { SswSectorData } from '../../types/ssw';

export const FOOD_MANUFACTURING_SECTOR_DATA: SswSectorData = {
  id: 'manufacturing',
  name: 'Food Manufacturing (Pengolahan Makanan & Minuman)',
  japaneseName: '飲食料品製造業',
  romajiName: 'Inshokuryouhin Seizougyou',
  iconName: 'Factory',
  tagline: 'Menguasai operasional lini conveyor, manajemen higienitas HACCP, dan pengendalian mutu industri pengolahan pangan berstandar Jepang.',
  badge: 'Banyak Lowongan',
  badgeColor: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
  overview: {
    workEnvironment: 'Bekerja di pabrik pengolahan makanan berskala industri di seluruh Jepang (pabrik bento konbini, bakery, makanan beku/frozen food, pengolahan daging/unggas, produk olahan laut/seafood, dan delicatessen/souzai) yang menerapkan otomatisasi lini conveyor serta standar sanitasi ketat.',
    mainDuties: [
      'Operasional lini produksi (persiapan bahan baku, penimbangan presisi/keiryō, pencampuran/chōgō, dan pengisian/jūten).',
      'Pengoperasian mesin pengemas otomatis (mesin heat sealer, pembungkus vakum, mesin pelabel tanggal kedaluwarsa).',
      'Pengendalian mutu dan inspeksi keamanan pangan (metal detector, X-ray foreign body detector, weight checker).',
      'Sterilisasi termal (retort pouch, perebusan, oven) dan pemantauan rantai dingin (cold chain).',
      'Pembersihan dan sanitasi area pabrik harian sesuai regulasi HACCP serta penerapan prinsip 5S (Seiri, Seiton, Seisou, Seiketsu, Shitsuke).'
    ],
    technicalExamName: 'Food Manufacturing Skills Measurement Test (飲食料品製造業技能測定試験)',
    examOrganizer: 'OTAFF (一般社団法人外国人食品産業技能評価機構) & MAFF (農林水産省)',
    passRequirement: 'Lulus ujian tertulis teori (学科試験) dan ujian praktik berbasis gambar/situasi (実技試験 / 判断等試験) dengan skor minimal 65% + sertifikat bahasa Jepang JFT-Basic A2 atau JLPT N4.',
    salaryInsight: 'Gaji pokok berkisar antara ¥190.000 hingga ¥255.000/bulan (di luar tunjangan shift malam / koutai teate, lembur, dan bonus tahunan).'
  },
  officialReferences: [
    {
      title: 'Food and Beverage Manufacturing Skills Measurement Test Textbook (飲食料品製造業技能測定試験学習用テキスト)',
      agency: 'OTAFF & Ministry of Agriculture, Forestry and Fisheries (MAFF / 農林水産省)',
      description: 'Buku panduan resmi kurikulum pengolahan bahan pangan industri, sanitasi pabrik, kontrol suhu mikroorganisme, dan keselamatan kerja K3.'
    },
    {
      title: 'Standards for Manufacturing and Processing Foods and Food Additives (食品等の製造・加工に関する基準)',
      agency: 'Ministry of Health, Labour and Welfare (MHLW / 厚生労働省)',
      description: 'Pedoman standar hukum keamanan pangan nasional, pencegahan kontaminasi silang mikrobiologi, dan regulasi pelabelan alergen.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG & LINGKUNGAN KERJA PABRIK PANGAN
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch1',
      sectorId: 'manufacturing',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Ekosistem Industri Manufaktur Pangan & Budaya Kerja Pabrik Jepang',
      japaneseTitle: '飲食料品製造業の概要と工場の就業ルール',
      estimatedMinutes: 25,
      objectives: [
        'Memahami peta sub-sektor industri manufaktur pangan di Jepang (bento/souzai, bakery, frozen food, olahan daging/seafood).',
        'Mengenal sistem pembagian zona sanitasi pabrik (Zōningu: Osen-ku, Jun-seiketsu-ku, dan Seiketsu-ku).',
        'Menguasai sistem kerja shift (Kōtai-sei) serta kewajiban pemeriksaan kesehatan harian (Kenkō Kanri).'
      ],
      contentExplanation: `
Industri Pengolahan Makanan dan Minuman (**飲食料品製造業 - Inshokuryōhin Seizōgyō**) merupakan salah satu pilar industri manufaktur terbesar dan paling esensial di Jepang. Industri ini menopang kebutuhan konsumsi harian masyarakat modern, memasok ratusan ribu toko serba ada (*konbini* seperti 7-Eleven, Lawson, FamilyMart), jaringan supermarket, hingga rantai restoran keluarga di seantero negeri.

Sub-sektor utama dalam industri ini meliputi:
1. **Pabrik Bento & Delicatessen (弁当・そうざい製造業)**: Memproduksi bento harian, onigiri, sushi siap saji, dan aneka lauk pauk basah (*souzai*). Memiliki ritme produksi super cepat dengan batas waktu kedaluwarsa pendek dalam hitungan jam.
2. **Pabrik Roti & Biskuit (パン・菓子製造業)**: Mengolah tepung terigu, proses fermentasi ragi otomatis, pemanggangan terowongan kontinu (*tunnel oven*), hingga pengemasan kedap udara.
3. **Pabrik Makanan Beku (冷凍食品製造業)**: Menggunakan teknologi pembekuan cepat individu (*IQF - Individual Quick Freezing*) untuk memproduksi gyoza, karaage, kentang beku, dan udon beku.
4. **Pabrik Pengolahan Daging & Unggas (食肉・食鳥肉加工業)**: Proses pemotongan presisi, pembuatan sosis, ham, daging burger dengan standar ketat pencegahan cemaran *Salmonella* dan *Campylobacter*.
5. **Pabrik Pengolahan Hasil Laut (水産加工業)**: Fillet ikan, produksi pasta ikan (*surimi/kamaboko*), pengeringan rumput laut (*nori*), dan pengolahan udang/cumi beku.

### Sistem Zonasi Sanitasi (ゾーニング - Zōningu)
Untuk menjamin keamanan pangan dari kontaminasi silang (*cross-contamination*), ruang pabrik makanan di Jepang dibagi menjadi 3 zona fisik yang ketat:
- **Zona Terkontaminasi (汚染区 - Osen-ku)**: Area penerimaan bahan mentah kotor, pembuangan kardus luar, pencucian awal sayuran bertanah, dan ruang penanganan sisa limbah (*zansa*).
- **Zona Semi-Bersih (準清潔区 - Jun-seiketsu-ku)**: Area pemanasan/pemasakan (*heating*), penimbangan bumbu, perebusan, penggorengan, dan pengeringan.
- **Zona Bersih (清潔区 - Seiketsu-ku)**: Area perakitan makanan matang, pemotongan bahan siap santap, pendinginan cepat, dan pengemasan primer (*packaging*). Ruangan ini memiliki ventilasi bertekanan udara positif agar udara luar yang kotor tidak masuk ke dalam.

### Kedisiplinan Kerja Shift & Pemeriksaan Kesehatan
Mayoritas pabrik beroperasi 24 jam dengan sistem kerja shift (**交代制 - Kōtai-sei**), umumnya dibagi menjadi shift pagi/siang (*nikkin*) dan shift malam (*yakin*). 
Setiap staf wajib hadir minimal 10-15 menit sebelum jam kerja untuk melakukan pemeriksaan kesehatan mandiri (**健康管理チェック - Kenkō Kanri Chekku**). Jika mengalami gangguan pencernaan (diare/muntah) atau memiliki luka terbuka di jari tangan, staf dilarang keras memasuki lini pengemasan makanan matang demi mencegah risiko penularan *Norovirus* dan bakteri *Staphylococcus aureus*.
      `,
      keyTerms: [
        {
          japanese: '飲食料品製造業',
          kana: 'いんしょくりょうひんせいぞうぎょう',
          romaji: 'inshokuryouhin seizougyou',
          indonesian: 'Industri pengolahan makanan dan minuman',
          note: 'Sektor SSW dengan kuota penerimaan tenaga kerja asing sangat besar di Jepang.'
        },
        {
          japanese: '清潔区 / 汚染区',
          kana: 'せいけつく / おせんく',
          romaji: 'seiketsu-ku / osen-ku',
          indonesian: 'Zona bersih / Zona terkontaminasi',
          note: 'Pemisahan fisik wajib di pabrik pangan untuk mencegah kontaminasi mikroba.'
        },
        {
          japanese: '交代制',
          kana: 'こうたいせい',
          romaji: 'koutaisei',
          indonesian: 'Sistem kerja shift bergilir',
          note: 'Terdiri dari nikkin (shift siang) dan yakin (shift malam).'
        },
        {
          japanese: '健康管理チェック',
          kana: 'けんこうかんりちぇっく',
          romaji: 'kenkou kanri chekku',
          indonesian: 'Pemeriksaan kondisi kesehatan sebelum masuk kerja',
          note: 'Pemeriksaan wajib harian mencakup gejala diare, demam, flu, dan luka di tangan.'
        },
        {
          japanese: '残渣',
          kana: 'ざんさ',
          romaji: 'zansa',
          indonesian: 'Sisa limbah bahan makanan (ampas/kulit/potongan reject)',
          note: 'Harus segera dibuang ke wadah tertutup di zona terkontaminasi agar tidak membusuk.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Mengalami Diare di Pagi Hari Sebelum Shift Pabrik Bento',
        scenario: 'Rian, pekerja SSW di pabrik bento shift pagi, terbangun pukul 05.00 dengan kondisi perut mulas dan telah diare sebanyak 2 kali. Ia tahu hari itu pesanan bento akhir pekan sedang melonjak tinggi. Rian bimbang apakah ia harus minum obat pereda diare lalu diam-diam berangkat kerja, atau segera melapor kepada Line Leader.',
        dialogue: [
          {
            speaker: 'Rian (Pekerja SSW)',
            role: 'Staf Lini Produksi',
            japanese: 'お疲れ様です。小林リーダー、本日の朝から下痢の症状が2回ありました。出勤してもよろしいでしょうか。',
            kana: 'おつかれさまです。こばやしリーダー、ほんじつの あさから げりの しょうじょうが にかい ありました。しゅっきんしても よろしいでしょうか。',
            romaji: 'Otsukaresama desu. Kobayashi-riidaa, honjitsu no asa kara geri no shoujou ga nikai arimashita. Shukkin shitemo yoroshii deshou ka.',
            indonesian: 'Selamat pagi Leader Kobayashi. Pagi ini saya mengalami diare sebanyak dua kali. Apakah saya tetap diperbolehkan masuk kerja?'
          },
          {
            speaker: 'Kobayashi (Line Leader)',
            role: 'Penanggung Jawab Lini',
            japanese: 'リアンさん、正直にすぐ報告してくれてありがとう。ノロウイルスなどの食中毒の危険があるから、下痢の症状がある時は絶対に製造ラインに入ってはいけません。本日は自宅待機して、病院で検査を受けてください。',
            kana: 'リアンさん、しょうじきに すぐ ほうこくしてくれて ありがとう。のろういるす などの しょくちゅうどくの きけんが あるから、げりの しょうじょうが あるときは ぜったいに せいぞうらいんに はいってはいけません。ほんじつは じたくたいきして、びょういんで けんさを うけてください。',
            romaji: 'Rian-san, shoujiki ni sugu houkoku shite kurete arigatou. Norouirusu nado no shokuchuudoku no kiken ga aru kara, geri no shoujou ga aru toki wa zettai ni seizou rain ni haitte wa ikemasen. Honjitsu wa jitaku taiki shite, byouin de kensa wo ukete kudasai.',
            indonesian: 'Rian, terima kasih sudah jujur dan langsung melapor. Karena ada risiko keracunan makanan seperti Norovirus, saat ada gejala diare sama sekali tidak boleh masuk lini produksi. Hari ini istirahatlah di rumah dan periksakan diri ke klinik.'
          },
          {
            speaker: 'Rian (Pekerja SSW)',
            role: 'Staf Lini Produksi',
            japanese: 'ご迷惑をおかけして大変申し訳ありません。病院の検査結果が出ましたら、すぐに改めてご連絡いたします。',
            kana: 'ごめいわくをおかけして たいへん もうしわけありません。びょういんの けんさけっかが でましたら、すぐに あらためて ごれんらくいたします。',
            romaji: 'Gomeiwaku wo okake shite taihen moushiwake arimasen. Byouin no kensa kekka ga demashitara, sugu ni aratamete gorenraku itashimasu.',
            indonesian: 'Mohon maaf sebesar-besarnya atas ketidaknyamanan ini. Begitu hasil pemeriksaan dokter keluar, saya akan segera melapor kembali.'
          }
        ],
        takeaway: 'Kejujuran melapor gangguan pencernaan (terutama diare dan muntah) adalah hukum mutlak di industri makanan Jepang. Memaksakan diri masuk lini produksi dapat berakibat fatal menularkan wabah Norovirus ke ribuan konsumen.'
      },
      visualDiagram: {
        title: 'Sistem Zonasi Sanitasi Pabrik Pangan Jepang (ゾーニング)',
        subtitle: 'Pemisahan Area Kerja untuk Mencegah Kontaminasi Silang Mikroorganisme',
        type: 'steps',
        items: [
          {
            label: '1. Osen-ku (汚染区 - Zona Terkontaminasi)',
            description: 'Penerimaan bahan mentah mentah, gudang kardus kotor, pemotongan awal daging/ikan segar, dan ruang pembuangan limbah sisa.',
            badge: 'Tekanan Udara Normal'
          },
          {
            label: '2. Jun-seiketsu-ku (準清潔区 - Zona Semi-Bersih)',
            description: 'Area pengolahan termal: perebusan, penggorengan, penimbangan bumbu adonan, dan oven pemanggangan.',
            badge: 'Pemanasan & Persiapan'
          },
          {
            label: '3. Seiketsu-ku (清潔区 - Zona Bersih Steril)',
            description: 'Pendinginan cepat, perakitan lauk bento matang, pemotongan bahan siap konsumsi, dan penyegelan kemasan primer.',
            badge: 'Tekanan Udara Positif (+)'
          },
          {
            label: '4. Shukka-ku (出荷区 - Zona Pengiriman Produk)',
            description: 'Pengepakan ke wadah distribusi (orikon/karton sekunder), penyimpanan suhu dingin, dan pemuatan ke truk logistik.',
            badge: 'Distribusi Akhir'
          }
        ]
      },
      importantPoints: [
        'Dilarang berpindah langsung dari Zona Terkontaminasi (Osen-ku) ke Zona Bersih (Seiketsu-ku) tanpa melalui ruang ganti dan sterilisasi ulang.',
        'Pekerja wajib melapor jika mengalami demam, flu, muntah, diare, atau luka iris di tangan sebelum menyentuh lini produksi.',
        'Masuk kerja tepat waktu berarti sudah selesai memakai seragam steril lengkap dan siap di posisi lini saat bel berbunyi.',
        'Pahami alur pergerakan barang satu arah (One-way flow) agar bahan mentah tidak berpapasan dengan produk matang.'
      ],
      summary: 'Industri pengolahan makanan Jepang menjamin keamanan pangan nasional melalui kedisiplinan pembagian zona sanitasi (Zōningu) dan sistem kerja shift yang ketat. Kepatuhan terhadap pemeriksaan kesehatan mandiri adalah tanggung jawab moral pertama setiap pekerja.',
      practiceQuestions: [
        {
          id: 'mfg_ch1_q1',
          questionNumber: 1,
          questionText: '食品製造工場における「ゾーニング（区域区分）」の目的として、最も適切なものを一つ選びなさい。',
          situation: 'Tujuan utama pembagian zona sanitasi (Zōningu) di dalam pabrik makanan.',
          options: [
            '従業員が工場の中で迷子にならないようにするため。',
            '原材料の汚れや微生物が、加熱後の清潔な製品に付着する「交差汚染」を防ぐため。',
            '機械の電気代を節約するために、部屋を細かく仕切るため。',
            '製品の味付けを濃くして、賞味期限を長くするため。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Tujuan mendasar dari zonasi (ゾーニング) adalah mencegah terjadinya kontaminasi silang (交差汚染 - kousa osen), yaitu perpindahan kotoran, bakteri, atau virus dari bahan mentah di area kotor (汚染区) ke makanan matang di area bersih (清潔区).',
          translation: 'Pilihlah satu tujuan yang paling tepat dari "Zonasi Sanitasi" di pabrik pengolahan makanan.'
        },
        {
          id: 'mfg_ch1_q2',
          questionNumber: 2,
          questionText: '出勤前の健康管理について、適切な対応をしているものを一つ選びなさい。',
          situation: 'Tindakan yang benar terkait manajemen kesehatan sebelum mulai bekerja di pabrik makanan.',
          options: [
            '下痢の症状があったが、ラインが忙しいので下痢止め薬を飲んで黙って作業に入った。',
            '手に切り傷ができたので、個人の柄付き絆創膏を貼ってそのまま食品に素手で触れた。',
            '朝から吐き気と下痢があったため、出勤前に責任者に電話で正直に状況を報告した。',
            '熱が38度あったが、マスクを二重にすれば誰にも気づかれないので出勤した。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Jika mengalami mual, muntah, atau diare, pekerja wajib melapor secara jujur kepada atasan sebelum bekerja demi mencegah penularan Norovirus. Pilihan 1, 2, dan 4 adalah pelanggaran fatal standar sanitasi pabrik makanan Jepang.',
          translation: 'Pilihlah tindakan yang tepat mengenai manajemen kesehatan sebelum masuk kerja.'
        }
      ],
      officialReference: {
        source: 'OTAFF & MAFF Specified Skilled Worker Food Manufacturing Curriculum',
        agency: 'Organization for Technical Skill Assessment of Foreign Workers in Food Industry (OTAFF)',
        documentTitle: '飲食料品製造業技能測定試験 学習用テキスト 第1章 工場就業の基本ルール (Bab 1 Aturan Dasar Bekerja di Pabrik)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: KOSAKATA MESIN, SISTEM PACKAGING, LABELING & HACCP
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch2',
      sectorId: 'manufacturing',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Kosakata Mesin Conveyor, Sistem Packaging, Labeling & Bahan Baku',
      japaneseTitle: '製造機械・包装・表示ラベル・原材料の専門用語',
      estimatedMinutes: 30,
      objectives: [
        'Menguasai nama dan fungsi mesin-mesin utama di lini produksi makanan (conveyor, sealer, metal detector, checkweigher).',
        'Membedakan secara akurat antara Shōmi Kigen (賞味期限) dan Shōhi Kigen (消費期限).',
        'Mengenal kosakata bahan baku, bahan tambahan pangan (aditif), dan bahan kimia pembersih/sanitasi.',
        'Memahami istilah pencegahan benda asing (Ibutsu Konnyū) dan penerapan 5S di lingkungan pabrik.'
      ],
      contentExplanation: `
Operasional sehari-hari di pabrik pengolahan pangan Jepang bergantung pada mesin-mesin industri otomatis berkecepatan tinggi. Memahami istilah teknis peralatan ini sangat penting demi kelancaran operasional dan keselamatan diri:

### 1. Mesin Pemroses & Pengemas
- **ベルトコンベア (Beruto konbea - Conveyor Belt)**: Ban berjalan yang membawa produk makanan melintasi setiap stasiun kerja.
- **攪拌機 / ミキサー (Kakuhanki / Mikisā - Industrial Mixer)**: Mesin pengaduk adonan tepung, saus, atau daging cincang kapasitas besar.
- **スライサー (Suraisā - Slicer Machine)**: Mesin pemotong daging beku, sayuran, atau keju dengan tingkat ketebalan presisi.
- **真空包装機 (Shinkū hōsōki - Vacuum Packaging Machine)**: Mesin penyedot udara hampa dan penyegel kemasan untuk memperpanjang masa simpan produk tanpa merusak tekstur.
- **シール機 / シーラー (Shīruki / Shīrā - Heat Sealer)**: Mesin penyegel panas kantong plastik film penutup makanan.

### 2. Mesin Inspeksi Keamanan & Kontrol Kualitas (QC)
- **金属検出機 (Kinzoku kenshutsuki - Metal Detector)**: Mesin sensor elektromagnetik untuk mendeteksi kontaminasi serpihan logam besi (*Fe*) dan baja tahan karat (*SUS*) pada kemasan produk.
- **X線異物検出機 (Ekkusu-sen ibutsu kenshutsuki - X-Ray Inspection System)**: Mesin pendeteksi benda asing non-logam berkepadatan tinggi seperti tulang, batu kecil, pecahan kaca, atau plastik keras.
- **重量選別機 / ウェイトチェッカー (Jūryō senbetsuki / Weito chekkā - Checkweigher)**: Timbangan otomatis berkecepatan tinggi yang menolak produk dengan berat di bawah standar (*kabusoku*) secara otomatis.

### 3. Perbedaan Krusial Label Tanggal Kedaluwarsa
Di Jepang, undang-undang pelabelan makanan membedakan tanggal kedaluwarsa menjadi dua jenis:
1. **賞味期限 (Shōmi Kigen - Best-Before Date)**:
   - "Batas waktu kualitas rasa terbaik".
   - Digunakan untuk produk yang tidak mudah rusak (misalnya: mie instan, makanan kaleng, snack, saus botol, makanan beku / *frozen food*).
   - Jika disimpan sesuai petunjuk, setelah melewati tanggal ini makanan masih aman dikonsumsi meskipun kualitas aroma, warna, atau kerenyahannya berangsur menurun.
2. **消費期限 (Shōhi Kigen - Expiration / Use-By Date)**:
   - "Batas akhir keamanan konsumsi".
   - Digunakan untuk makanan yang cepat mengalami pembusukan atau penurunan mutu drastis dalam waktu maksimal 5 hari (misalnya: bento konbini, sandwich, roti isi daging basah, sushi, kue tart krim).
   - Setelah melewati tanggal dan jam yang tertera, makanan **dilarang keras untuk dikonsumsi atau dijual** karena berpotensi membahayakan kesehatan dan memicu keracunan makanan.

### 4. Bahan Baku & Bahan Kimia Sanitasi
- **原材料 (Genzairyō)**: Bahan baku utama alami (beras, terigu, daging sapi, sayuran).
- **添加物 (Tenkabutsu)**: Bahan tambahan pangan legal yang diatur ketat pengawasannya (pengawet alami, pengatur keasaman, pewarna, antioksidan).
- **次亜塩素酸ナトリウム (Jiaensosan natoriumu - Sodium Hypochlorite)**: Larutan disinfektan klorin standar untuk mencuci sayuran mentah, mensterilkan pisau, talenan, dan permukaan bak cuci.
- **アルコール消毒液 (Arukōru shōdokueki - 75% Ethanol)**: Cairan alkohol semprot cepat kering untuk disinfeksi telapak tangan, sarung tangan, dan permukaan meja kerja steril.
      `,
      keyTerms: [
        {
          japanese: '金属検出機',
          kana: 'きんぞくけんしゅつき',
          romaji: 'kinzoku kenshutsuki',
          indonesian: 'Mesin detektor logam',
          note: 'Wajib diverifikasi berkala menggunakan test piece standar Fe dan SUS.'
        },
        {
          japanese: '賞味期限',
          kana: 'しょうみきげん',
          romaji: 'shoumi kigen',
          indonesian: 'Batas tanggal mutu terbaik (Best-before date)',
          note: 'Berlaku untuk makanan awet; menjamin rasa lezat selama kemasan belum dibuka.'
        },
        {
          japanese: '消費期限',
          kana: 'しょうひきげん',
          romaji: 'shouhi kigen',
          indonesian: 'Batas tanggal kedaluwarsa konsumsi (Use-by date)',
          note: 'Berlaku untuk makanan cepat rusak (bento, sandwich); lewat tanggal dilarang makan.'
        },
        {
          japanese: '重量選別機',
          kana: 'じゅうりょうせんべつき',
          romaji: 'juuryou senbetsuki',
          indonesian: 'Mesin timbangan otomatis (Checkweigher)',
          note: 'Mendorong produk keluar jalur jika gramaturnya kurang atau berlebih dari batas toleransi.'
        },
        {
          japanese: '次亜塩素酸ナトリウム',
          kana: 'じあえんそさんなとりうむ',
          romaji: 'jiaensosan natoriumu',
          indonesian: 'Natrium hipoklorit (disinfektan klorin)',
          note: 'Bahan sanitasi utama untuk membunuh kuman pada sayuran mentah dan peralatan pabrik.'
        },
        {
          japanese: '異物混入',
          kana: 'いぶつこんにゅう',
          romaji: 'ibutsu konnyuu',
          indonesian: 'Kontaminasi benda asing pada produk makanan',
          note: 'Termasuk rambut, serpihan plastik, serangga, dan pecahan logam.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Sirine Mesin Metal Detector Berbunyi di Lini Pengemasan',
        scenario: 'Dewi bertugas menjaga ujung lini pengemasan nugget ayam beku. Tiba-tiba mesin metal detector membunyikan sirine kuning dan lengan penolak otomatis (reject flipper) mendorong keluar satu kantong nugget ke boks terkunci.',
        dialogue: [
          {
            speaker: 'Dewi (Pekerja SSW)',
            role: 'Operator Inspeksi Kemasan',
            japanese: '田中リーダー、金属検出機がブザーを鳴らして、製品がリジェクトボックスに排出されました！',
            kana: 'たなかリーダー、きんぞくけんしゅつきが ブザーを ならして、せいひんが リジェクトボックスに はいしゅつされました！',
            romaji: 'Tanaka-riidaa, kinzoku kenshutsuki ga buzaa wo narashite, seihin ga rijekuto bokkusu ni haishutsu saremashita!',
            indonesian: 'Leader Tanaka, metal detector membunyikan alarm dan produk terdorong keluar ke boks reject!'
          },
          {
            speaker: 'Tanaka (Line Leader)',
            role: 'Supervisor QC',
            japanese: 'デウィさん、素早い確認ありがとう。まずコンベアを一時停止して。そのリジェクト品は絶対に通常ラインに戻さないで、中身をX線検査機と目視で詳しく調べよう。',
            kana: 'デウィさん、すばやい かくにん ありがとう。まず コンベアを いちじていしして。その リジェクトひんは ぜったいに つうじょうラインに もどさないで、なかみを エックスせんけんさきと もくしで くわしく しらべよう。',
            romaji: 'Dewi-san, subayai kakunin arigatou. Mazu konbea wo ichiji teishi shite. Sono rijekutohin wa zettai ni tsuujou rain ni modosanaide, nakami wo ekkusu-sen kensaki to mokushi de kuwashiku shirabeyou.',
            indonesian: 'Dewi, terima kasih atas pengecekan cepatnya. Pertama-tama hentikan sementara conveyor. Produk reject itu sama sekali tidak boleh dikembalikan ke lini normal; mari kita periksa isinya dengan mesin X-ray dan pengamatan mata telanjang.'
          },
          {
            speaker: 'Dewi (Pekerja SSW)',
            role: 'Operator Inspeksi Kemasan',
            japanese: '承知いたしました。検出機の感度を確認するためのテストピース（Fe・SUS）も準備します。',
            kana: 'しょうちいたしました。けんしゅつきの かんどを かくにんするための テストピース（Fe・SUS）も じゅんびします。',
            romaji: 'Shouchi itashimashita. Kenshutsuki no kando wo kakunin suru tame no tesuto pīsu (Fe / SUS) mo junbi shimasu.',
            indonesian: 'Baik, saya mengerti. Saya juga akan menyiapkan test piece (besi dan stainless steel) untuk menguji kepekaan detektor.'
          }
        ],
        takeaway: 'Ketika mesin pendeteksi benda asing berbunyi, jangan pernah mengabaikan atau mengembalikan produk secara sembarangan. Amankan produk tertolak, verifikasi kepekaan sensor dengan test piece, dan laporkan segera ke Leader.'
      },
      visualDiagram: {
        title: 'Perbandingan Definisi 賞味期限 (Shoumi) vs 消費期限 (Shouhi)',
        subtitle: 'Pedoman Standar Pelabelan Tanggal Produk Pangan di Jepang',
        type: 'table',
        items: [
          {
            label: 'Istilah Bahasa Jepang',
            description: '賞味期限 (しょうみきげん / Shōmi Kigen)',
            badge: '消費期限 (しょうひきげん / Shōhi Kigen)'
          },
          {
            label: 'Makna Standar Hukum',
            description: 'Batas tanggal mutu kualitas rasa dan aroma terbaik (Best-before date).',
            badge: 'Batas tanggal keamanan konsumsi yang aman (Use-by / Expiration date).'
          },
          {
            label: 'Karakteristik Produk',
            description: 'Makanan yang relatif awet dan tidak cepat rusak (makanan beku, kaleng, saus, biskuit, mie kering).',
            badge: 'Makanan yang cepat membusuk dalam waktu 5 hari (bento, roti lapis isi daging, sushi, salad segar).'
          },
          {
            label: 'Jika Lewat Tanggal',
            description: 'Mutu rasa sedikit berkurang, namun belum tentu berbahaya secara medis jika belum dibuka.',
            badge: 'DILARANG KERAS dikonsumsi atau dijual karena risiko keracunan mikroorganisme tinggi.'
          }
        ]
      },
      importantPoints: [
        'Hafalkan perbedaan mendasar antara Shōmi Kigen (kualitas rasa) dan Shōhi Kigen (batas keselamatan konsumsi).',
        'Produk yang tertolak oleh Metal Detector atau Checkweigher tidak boleh dimasukkan kembali ke boks produk lolos QC.',
        'Sensitivitas Metal Detector harus diuji berkala memakai Test Piece berupa Fe (Besi) dan SUS (Baja Tahan Karat).',
        'Penerapan 5S (Seiri, Seiton, Seisou, Seiketsu, Shitsuke) mencegah perkakas kerja, baut mesin, atau pulpen jatuh ke makanan.'
      ],
      summary: 'Penguasaan kosakata mesin lini otomatis, pemahaman presisi mengenai label tanggal kedaluwarsa, serta pengoperasian detektor benda asing adalah kompetensi inti yang diuji dalam ujian teori dan praktik SSW Pengolahan Makanan.',
      practiceQuestions: [
        {
          id: 'mfg_ch2_q1',
          questionNumber: 1,
          questionText: '「消費期限（しょうひきげん）」の説明として、最も適切なものを一つ選びなさい。',
          situation: 'Definisi resmi istilah batas konsumsi (Shōhi Kigen) pada produk pangan.',
          options: [
            '美味しく食べることができる期限のことで、過ぎてもすぐに食べられなくなるわけではない。',
            '未開封で保存方法を守った場合に、安全に食べられる期限のことで、過ぎたものは食べてはいけない。',
            '工場で原材料を仕入れた日付のこと。',
            '商品をトラックに積み込んで出荷しなければならない期限のこと。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. 消費期限 (Shōhi Kigen) adalah batas akhir keamanan makanan cepat rusak bila disimpan sesuai ketentuan; makanan yang melewati tanggal ini tidak boleh dikonsumsi. Pilihan 1 adalah definisi dari 賞味期限 (Shōmi Kigen).',
          translation: 'Pilihlah satu penjelasan yang paling tepat mengenai "Shōhi Kigen (消費期限)".'
        },
        {
          id: 'mfg_ch2_q2',
          questionNumber: 2,
          questionText: '金属検出機が作動して製品が排出（リジェクト）されたときの対応として、間違っているものを一つ選びなさい。',
          situation: 'Tindakan yang KELIRU saat produk tertolak oleh mesin pendeteksi logam.',
          options: [
            '排出された製品をそのまま良品（合格品）の箱に戻して出荷した。',
            '直ちにコンベアを止めて、担当のリーダーに報告した。',
            '排出された製品を取り分け、X線異物検査機や目視で異物がないか再確認した。',
            'テストピースを使って、金属検出機のセンサー感度が正常か確認した。'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pilihan 1 SALAH (maka ini adalah jawaban yang tepat untuk pertanyaan "yang salah"). Mengembalikan produk reject ke dalam boks produk lolos tanpa investigasi adalah pelanggaran fatal yang berisiko meloloskan serpihan logam berbahaya ke konsumen.',
          translation: 'Pilihlah satu tindakan yang SALAH ketika mesin metal detector mendeteksi dan menolak produk.'
        }
      ],
      officialReference: {
        source: 'OTAFF Official Learning Textbook for Food Manufacturing',
        agency: 'Organization for Technical Skill Assessment of Foreign Workers in Food Industry (OTAFF)',
        documentTitle: '飲食料品製造業技能測定試験 学習用テキスト 第2章 原材料・製造設備・表示 (Bab 2 Bahan Baku, Mesin Produksi, dan Labeling)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: KOMUNIKASI DI TEMPAT KERJA (INSTRUKSI LINE, CACAT & HO-REN-SO)
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch3',
      sectorId: 'manufacturing',
      category: 'komunikasi',
      chapterNumber: 3,
      title: 'Instruksi Line Leader, Pelaporan Produk Cacat & Budaya Ho-Ren-So Pabrik',
      japaneseTitle: 'ライン作業の指示受け・不良品報告・申し送りと報連相',
      estimatedMinutes: 30,
      objectives: [
        'Memahami instruksi operasional Line Leader terkait kecepatan conveyor, penyesuaian porsi/gramatur, dan pergantian wadah.',
        'Menguasai kosakata pelaporan cacat kemasan (cetakan buram, kamikomi, kebocoran seal, pinhole).',
        'Melakukan serah terima pergantian shift (Mōshiokuri / Hikitsugi) secara sistematis.',
        'Memahami prosedur penekanan tombol darurat (Hijō Teishi Botan) dan pelaporan insiden nyaris celaka (Hiyari-Hatto).'
      ],
      contentExplanation: `
Di pabrik manufaktur makanan, pergerakan sabuk conveyor tidak pernah berhenti. Komunikasi antarkerja harus berlangsung secara singkat, padat, jelas (**簡潔 - Kanketsu**), serta menerapkan teknik pengulangan kata (**復唱 - Fukushō**) untuk memastikan instruksi tidak salah dipahami:

### 1. Memahami Instruksi Operasional Lini
Contoh instruksi harian yang sering diberikan oleh pengawas lini (*Line Leader*):
- *"ラインのスピードを少し落とします"* (Kecepatan ban berjalan akan sedikit diturunkan).
- *"盛付量を120グラム±2グラムに調整してください"* (Tolong sesuaikan porsi topping menjadi 120g dengan batas toleransi ±2g).
- *"次のロットから容器が角型（かくがた）に切り替わります"* (Mulai lot berikutnya, jenis wadah kemasan akan berganti ke bentuk persegi).
- *"フィルムを新しいロールに交換してください"* (Tolong ganti gulungan plastik film kemasan dengan yang baru).

### 2. Kategori Cacat Produk (不良品 - Furyōhin)
Pekerja di bagian perakitan, penyusunan bento, maupun pengemasan bertindak sebagai filter mutu (*quality gate*). Cacat yang sering dijumpai meliputi:
- **印字かすれ / 印字ズレ (Inji kasure / Inji zure)**: Cetakan tanggal kedaluwarsa buram, tidak terbaca jelas, atau posisinya miring/melenceng dari area kotak label.
- **噛み込み (Kamikomi - Sealing Entrapment)**: Tepi segel plastik menjepit potongan makanan (misalnya selembar daun selada atau saus). Akibatnya kemasan tidak kedap udara dan makanan akan membusuk sebelum waktunya.
- **ピンホール (Pinhole)**: Lubang jarum mikroskopis pada plastik pembungkus akibat tertusuk bagian makanan yang keras atau gesekan mesin.
- **形状崩れ / 割れ (Keijō kuzure / Ware)**: Makanan penyok, retak, topping berantakan, atau bentuk bento tidak simetris.
- **異物混入 (Ibutsu konnyū)**: Terdapat rambut, potongan sarung tangan karet biru, serangga, atau noda karat pada produk.

### 3. Serah Terima Pergantian Shift (申し送り - Mōshiokuri / 引き継ぎ - Hikitsugi)
Saat pergantian shift (misalnya dari shift siang ke shift malam), tim tidak boleh langsung pulang. Penanggung jawab dan staf wajib menyampaikan:
1. Nomor lot produksi yang sedang berjalan (*Seizō-chū no rotto bangō*).
2. Status performa mesin (apakah ada pemanas sealer yang suhunya naik-turun).
3. Sisa kuota produksi yang belum tercapai.
4. Sisa stok bahan baku yang siap di area dapur (*shikomi*).

### 4. Tombol Berhenti Darurat (非常停止ボタン - Hijō Teishi Botan)
Di setiap stasiun mesin conveyor terdapat tombol jamur merah besar bertuliskan **非常停止 (Hijō Teishi)**. Jika melihat:
- Pakaian atau tangan rekan kerja mendekati roller yang berputar kencang,
- Suara dentuman aneh dari dalam mesin pencampur,
- Benda asing besar jatuh ke dalam tangki saus,
**Maka siapa pun berhak dan wajib menekan tombol darurat tersebut seketika itu juga tanpa menunggu persetujuan atasan!** Setelah menekan tombol, segera berteriak memberi tahu rekan kerja dan panggil Leader.
      `,
      keyTerms: [
        {
          japanese: '不良品 / リジェクト品',
          kana: 'ふりょうひん / りじぇくとひん',
          romaji: 'furyouhin / rijekutohin',
          indonesian: 'Produk cacat / produk tertolak',
          note: 'Wajib dipisahkan ke wadah khusus bertanda merah agar tidak tercampur produk bagus.'
        },
        {
          japanese: '噛み込み',
          kana: 'かみこみ',
          romaji: 'kamikomi',
          indonesian: 'Terjepit pada segel kemasan',
          note: 'Potongan makanan yang terjepit pada sambungan segel panas plastik film.'
        },
        {
          japanese: '非常停止ボタン',
          kana: 'ひじょうていしぼたん',
          romaji: 'hijou teishi botan',
          indonesian: 'Tombol berhenti darurat',
          note: 'Tombol merah besar penahan daya listrik seketika saat terjadi bahaya mesin.'
        },
        {
          japanese: '申し送り / 引き継ぎ',
          kana: 'もうしおくり / ひきつぎ',
          romaji: 'moushiokuri / hikitsugi',
          indonesian: 'Serah terima informasi pergantian shift',
          note: 'Penyampaian catatan operasional, sisa target, dan kendala lini ke shift berikutnya.'
        },
        {
          japanese: 'ヒヤリ・ハット',
          kana: 'ひやり・はっと',
          romaji: 'hiyari hatto',
          indonesian: 'Insiden nyaris celaka (Near-miss incident)',
          note: 'Kejadian yang membuat kaget/hampir celaka; wajib dicatat untuk mencegah kecelakaan fatal.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Menemukan Kemasan Sandwich yang Terjepit Sayuran (Kamikomi)',
        scenario: 'Fajar bertugas menyortir kemasan sandwich sebelum dimasukkan ke dalam keranjang lipat distribusi (orikon). Ia melihat sedikit helai daun selada terjepit di sambungan segel pemanas plastik.',
        dialogue: [
          {
            speaker: 'Fajar (Pekerja SSW)',
            role: 'Staf Sortir Kemasan',
            japanese: '斉藤リーダー、確認をお願いします。こちらのサンドイッチのフィルムシール部分にレタスが噛み込んでいます！',
            kana: 'さいとうリーダー、かくにんを おねがいします。こちらの さんどいっちの ふぃるむしーる ぶぶんに れたすが かみこんでいます！',
            romaji: 'Saitou-riidaa, kakunin wo onegai shimasu. Kochira no sandoitchi no firumu shiiru bubun ni retasu ga kamikonde imasu!',
            indonesian: 'Leader Saito, mohon pengecekannya. Pada bagian segel film sandwich ini ada selada yang terjepit!'
          },
          {
            speaker: 'Saito (Line Leader)',
            role: 'Pengawas Mutu Lini',
            japanese: 'ファジャルさん、よく見つけましたね。シールに噛み込みがあると隙間から空気が入って、消費期限前に傷んでしまいます。すぐに不良品箱に入れてください。',
            kana: 'ファジャルさん、よく みつけましたね。しーるに かみこみが あると すきまから くうきが はいって、しょうひきげんまえに いたんでしまいます。すぐに ふりょうひんばこに いれてください。',
            romaji: 'Fajar-san, yoku mitsukemashita ne. Shiiru ni kamikomi ga aru to sukima kara kuuki ga haitte, shouhi kigen mae ni itande shimaimasu. Sugu ni furyouhin-bako ni irete kudasai.',
            indonesian: 'Fajar, cermat sekali kamu menemukannya. Kalau segel terjepit, udara bisa masuk lewat celah dan makanan akan basi sebelum tanggal kedaluwarsa. Tolong segera masukkan ke boks produk cacat.'
          },
          {
            speaker: 'Fajar (Pekerja SSW)',
            role: 'Staf Sortir Kemasan',
            japanese: 'かしこまりました。この直前に包装された5パックについても、シール不良がないか遡って検査します。',
            kana: 'かしこまりました。この ちょくぜんに ほうそうされた ごぱっく についても、しーるふりょうが ないか さかのぼって けんさします。',
            romaji: 'Kashikomari mashita. Kono chokuzen ni housou sareta go-pakku ni tsuite mo, shiiru furyou ga nai ka sakanobotte kensa shimasu.',
            indonesian: 'Baik, saya mengerti. Saya juga akan memeriksa mundur 5 kemasan yang dikemas tepat sebelum ini apakah ada cacat segel serupa.'
          }
        ],
        takeaway: 'Cacat kamikomi merusak kerapatan udara kemasan dan dapat memicu pembusukan dini produk berlabel Shōhi Kigen. Melakukan pengecekan mundur (traceback) adalah langkah proaktif yang mencegah lolosnya produk cacat ke pasaran.'
      },
      visualDiagram: {
        title: 'Alur Tindakan Pelaporan Ho-Ren-So Saat Menemukan Masalah Lini',
        subtitle: 'SOP Respons Cepat Pekerja Pabrik Makanan Saat Mendeteksi Deviasi Mutu',
        type: 'steps',
        items: [
          {
            label: '1. Teishi (停止 - Hentikan Aliran)',
            description: 'Tahan produk yang dicurigai cacat. Jangan biarkan mengalir lebih jauh ke stasiun pengepakan kardus.',
            badge: 'Tindakan Pertama'
          },
          {
            label: '2. Kakuri (隔離 - Pisahkan Produk)',
            description: 'Pindahkan produk cacat ke kotak merah berlabel "不良品 (Furyōhin)" agar tidak tercampur produk normal.',
            badge: 'Pencegahan Campur'
          },
          {
            label: '3. Houkoku (報告 - Lapor Line Leader)',
            description: 'Sampaikan kepada atasan jenis cacatnya (inji kasure, kamikomi, berat kurang) beserta nomor lot terkait.',
            badge: 'Komunikasi Cepat'
          },
          {
            label: '4. Sakanobori Kensa (遡り検査 - Inspeksi Mundur)',
            description: 'Bersama Leader, periksa beberapa produk sebelum dan sesudahnya untuk memastikan apakah cacat bersifat acak atau sistemik.',
            badge: 'Verifikasi Mutu'
          }
        ]
      },
      importantPoints: [
        'Ulangi (Fukushō) setiap instruksi angka porsi gramatur atau kode nomor lot yang diberikan oleh Leader.',
        'Jangan pernah membuang sendiri produk cacat ke tempat sampah tanpa seizin pengawas lini (harus dicatat di buku QC).',
        'Tombol darurat (Hijō Teishi Botan) boleh ditekan oleh siapa saja bila melihat potensi kecelakaan mesin fatal.',
        'Setiap insiden nyaris celaka (Hiyari-Hatto) wajib dilaporkan agar tim maintenance dapat memasang pengaman tambahan.'
      ],
      summary: 'Komunikasi efektif di lantai produksi pabrik makanan bertumpu pada kecepatan pelaporan deviasi (Ho-Ren-So), ketelitian mata mendeteksi cacat kemasan, dan keberanian mengambil tindakan proteksi keselamatan kerja tanpa ragu.',
      practiceQuestions: [
        {
          id: 'mfg_ch3_q1',
          questionNumber: 1,
          questionText: '包装工程で製品のフィルムシール部分に具材が挟まる「噛み込み（かみこみ）」が発生した場合の問題点として、正しいものを一つ選びなさい。',
          situation: 'Dampak buruk dari terjadinya cacat sealing "kamikomi" pada kemasan makanan.',
          options: [
            '製品の見た目が少し変わるだけで、衛生面や賞味期限には全く影響がない。',
            'シールが完全に密閉されないため、隙間から微生物や空気が侵入して製品が腐敗する原因になる。',
            '製品の重さが軽くなりすぎて、工場の利益が増える。',
            '噛み込んだ具材が乾燥して、より美味しくなる。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Cacat kamikomi (噛み込み) menyebabkan kemasan tidak tertutup rapat secara kedap udara. Udara dan mikroorganisme dari luar akan masuk melalui celah mikroskopis tersebut sehingga memicu pembusukan dini sebelum batas tanggal kedaluwarsa.',
          translation: 'Pilihlah satu masalah yang benar jika terjadi "kamikomi" (bahan makanan terjepit segel) pada proses pengemasan.'
        },
        {
          id: 'mfg_ch3_q2',
          questionNumber: 2,
          questionText: '作業中にコンベアに手や服が巻き込まれそうになったときの行動として、最も適切なものを一つ選びなさい。',
          situation: 'Tindakan yang paling tepat jika pakaian atau tangan berisiko tergulung mesin conveyor.',
          options: [
            'そのまま引っ張って自力で抜け出せるか試す。',
            '機械の電源プラグを抜くために遠くの配電盤まで走る。',
            '直ちに近くにある「非常停止ボタン」を押し、大きな声で周囲やリーダーに助けを求める。',
            '製品に傷がつかないよう、機械が自然に止まるのを静かに待つ。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Bila terjadi bahaya tergulung mesin (巻き込まれ - makikomare), tindakan pertama dan paling krusial adalah menekan tombol berhenti darurat (非常停止ボタン) seketika itu juga dan berteriak meminta pertolongan rekan kerja di sekitar.',
          translation: 'Pilihlah tindakan yang paling tepat ketika tangan atau pakaian berisiko tergulung ban berjalan saat bekerja.'
        }
      ],
      officialReference: {
        source: 'OTAFF Specified Skilled Worker Food Manufacturing Guidebook',
        agency: 'Organization for Technical Skill Assessment of Foreign Workers in Food Industry (OTAFF)',
        documentTitle: '飲食料品製造業技能測定試験 学習用テキスト 第3章 現場の安全とコミュニケーション (Bab 3 Keselamatan Kerja dan Komunikasi Lapangan)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: KETERAMPILAN KERJA (K3 PABRIK, SOP MASUK, HACCP & ALERGEN)
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch4',
      sectorId: 'manufacturing',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'K3 Pabrik, SOP Masuk Ruang Produksi, Kontrol Suhu HACCP & Alergen',
      japaneseTitle: '労働安全衛生・衛生管理手順・HACCP重要管理点・アレルゲン管理',
      estimatedMinutes: 35,
      objectives: [
        'Memahami bahaya K3 utama di pabrik makanan (terjepit mesin, terpeleset lantai basah/berminyak, luka sayat pisau).',
        'Menguasai urutan 5 langkah SOP masuk ruang produksi bersih (seragam, hair net, sticky roller, cuci tangan 2 tahap, air shower).',
        'Menguasai standar Titik Kendali Kritis (CCP) HACCP: Suhu pemanasan inti (≥ 75°C selama 1 menit) dan pendinginan cepat.',
        'Mengenal 8 bahan alergen wajib label di Jepang (Tokutei Genzairyō 8-hinmoku) dan pencegahan kontaminasi silang.'
      ],
      contentExplanation: `
Bekerja di industri pengolahan makanan Jepang menuntut standar disiplin ganda: menjaga **Keselamatan dan Kesehatan Kerja (労働安全衛生 - Rōdō Anzen Eisei)** bagi pekerja, serta menjaga **Keamanan Pangan (食品安全 - Shokuhin Anzen)** bagi jutaan konsumen:

### 1. Keselamatan Kerja (K3) di Pabrik Pangan
Tiga tipe kecelakaan kerja yang paling sering terjadi di pabrik makanan:
1. **巻き込まれ・挟まれ (Makikomare / Hasamare - Terjepit/Tergulung)**:
   - Terjadi pada roda gigi, rantai conveyor, roller penipis adonan, atau mesin pencampur.
   - *Aturan Mutlak*: Matikan mesin dan cabut kunci pengaman sebelum membersihkan atau mengambil makanan yang jatuh ke sela mesin. Dilarang memakai pakaian kedodoran, jam tangan, atau perhiasan.
2. **転倒 (Tentō - Terpeleset Jatuh)**:
   - Lantai pabrik kerap licin akibat tumpahan air panas, uap kondensasi, atau lapisan lemak minyak.
   - *Aturan Mutlak*: Wajib memakai sepatu keselamatan anti-selip (*耐滑安全靴 - Taikatsu anzengutsu*), dilarang berlari di lorong pabrik, dan segera bersihkan lantai jika ada genangan minyak.
3. **切れ・こすれ (Kire / Kosure - Luka Sayat Pisau/Slicer)**:
   - Penggunaan pisau pemotong atau pembersihan mata pisau mesin slicer.
   - *Aturan Mutlak*: Wajib memakai sarung tangan rajut kawat anti-potong (*耐切創手袋 - Taiseissō tebukuro*) saat membersihkan pisau mesin.

### 2. SOP 5 Tahap Masuk Ruang Bersih Produksi (入室手順)
Sebelum menyentuh bahan makanan, setiap pekerja wajib melewati gerbang sanitasi ketat:
1. **Pemakaian Seragam Bersih (白衣着装 - Hakui Chakusō)**:
   - Pasang pelindung jaring rambut bagian dalam (*inner net*) menutupi seluruh telinga dan rambut.
   - Pasang topi pabrik luar, kancingkan baju putih bersih hingga leher, dan masukkan ujung celana ke dalam sepatu boot kerja khusus. Pasang masker menutup hidung hingga dagu rapat-rapat.
2. **Roller Perekat Pembersih Rambut (粘着ローラー - Nenchaku Rōrā / Korokoro)**:
   - Menggulung roller perekat di seluruh permukaan seragam selama minimal 60 detik (bahu, dada, punggung, lengan, hingga kaki) untuk mengangkat serpihan rambut atau benang kain.
3. **Cuci Tangan Dua Tahap (二度洗い - Nido-arai)**:
   - Basahi tangan dengan air mengalir, ambil sabun antiseptik, gosok telapak, punggung tangan, sela-sela jari, pergelangan tangan hingga siku selama 30 detik.
   - Gunakan sikat kuku khusus untuk membersihkan bawah kuku. Bilas hingga bersih, lalu ulangi proses penyabunan sekali lagi (total 2 kali pencucian). Keringkan dengan tisu steril sekali pakai atau mesin pengering otomatis.
4. **Disinfeksi Alkohol 75% (アルコール消毒)**:
   - Semprotkan cairan alkohol pada kedua telapak tangan dan sarung tangan karet, lalu gosokkan hingga merata dan biarkan menguap kering secara alami di udara.
5. **Bilik Angin (エアーシャワー - Air Shower)**:
   - Masuk ke dalam bilik air shower selama 15–20 detik sambil mengangkat kedua tangan dan memutar tubuh secara perlahan agar tiupan hembusan angin berkecepatan tinggi melepaskan seluruh partikel debu mikro dari baju kerja.

### 3. Titik Kendali Kritis HACCP (CCP - Critical Control Point)
Prinsip HACCP (*Hazard Analysis Critical Control Point*) berfokus pada titik-titik proses yang dapat membunuh atau mencegah bahaya mikroba berbahaya:
- **Pemanasan Inti (中心温度 - Chūshin Ondo)**:
  Untuk mematikan bakteri patogen pembawa keracunan (*Salmonella*, *E. coli* O-157, *Campylobacter*), suhu bagian terdalam makanan yang paling tebal **wajib mencapai minimal 75°C selama 1 menit atau lebih**.
  *Khusus makanan bivalvia (kerang/oyster)* yang berisiko membawa virus Norovirus: suhu inti wajib mencapai **85°C – 90°C selama minimal 90 detik**.
- **Pencegahan Zona Bahaya Suhu (危険温度帯 - Kiken Ondotai)**:
  Bakteri berkembang biak paling pesat pada rentang suhu **20°C hingga 50°C** (dapat membelah diri dua kali lipat setiap 15-20 menit).
  Makanan matang yang sudah dipanaskan harus segera didinginkan secara cepat (**急速冷却 - Kyūsoku Reikyaku**) melewati zona bahaya ini hingga mencapai suhu di bawah 10°C dalam waktu maksimal 60–90 menit menggunakan mesin pendingin *Blast Chiller*.

### 4. Manajemen Bahan Pemicu Alergi (アレルゲン管理)
Undang-Undang Pelabelan Makanan Jepang mewajibkan pencantuman label peringatan pada **8 Bahan Baku Khusus (特定原材料 8品目 - Tokutei Genzairyō Hachihinmoku)** yang dapat memicu syok anafilaksis fatal pada penderita alergi:
1. **卵 (Tamago)**: Telur ayam / produk telur
2. **乳 (Nyū)**: Susu sapi / produk olahan susu
3. **小麦 (Komugi)**: Gandum / tepung terigu
4. **えび (Ebi)**: Udang
5. **かに (Kani)**: Kepiting
6. **そば (Soba)**: Soba (gandum kuda hitam / buckwheat)
7. **落花生 / ピーナッツ (Rakkasei / Pīnattsu)**: Kacang tanah
8. **くるみ (Kurumi)**: Kacang kenari / walnut *(resmi ditambahkan sebagai bahan wajib ke-8 oleh pemerintah Jepang)*

*Pencegahan Kontaminasi Silang Alergen*:
Peralatan kerja (pisau, talenan, wadah bahan, baskom) wajib dibedakan berdasarkan kode warna (misalnya: warna merah khusus alergen kacang, warna putih untuk non-alergen) dan dicuci secara terpisah.
      `,
      keyTerms: [
        {
          japanese: '中心温度',
          kana: 'ちゅうしんおんど',
          romaji: 'chuushin ondo',
          indonesian: 'Suhu inti (suhu bagian tengah terdalam makanan)',
          note: 'Standar emas pembunuhan kuman: minimal 75°C dipertahankan selama 1 menit.'
        },
        {
          japanese: 'エアーシャワー',
          kana: 'えあーしゃわー',
          romaji: 'eā shawā',
          indonesian: 'Bilik semprotan udara bertekanan tinggi',
          note: 'Melepaskan partikel debu dan rambut mikroskopis sebelum masuk ruang bersih.'
        },
        {
          japanese: '特定原材料',
          kana: 'とくていげんざいりょう',
          romaji: 'tokutei genzairyou',
          indonesian: '8 bahan pangan alergen wajib label di Jepang',
          note: 'Telur, susu, gandum, udang, kepiting, soba, kacang tanah, dan kenari (walnut).'
        },
        {
          japanese: '交差汚染',
          kana: 'こうさおせん',
          romaji: 'kousa osen',
          indonesian: 'Kontaminasi silang mikrobiologi atau alergen',
          note: 'Pencemaran silang dari bahan mentah ke matang atau antar bahan alergen.'
        },
        {
          japanese: '巻き込まれ事故',
          kana: 'まきこまれじこ',
          romaji: 'makikomare jiko',
          indonesian: 'Kecelakaan akibat anggota tubuh tergulung mesin berputar',
          note: 'Bahaya mekanis paling fatal di pabrik; dicegah dengan mematikan mesin saat pembersihan.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Mengukur Suhu Inti Ayam Goreng Karaage yang Baru Diangkat',
        scenario: 'Andi bertugas memantau Titik Kendali Kritis (CCP) di stasiun penggorengan ayam karaage. Begitu keranjang penggorengan diangkat, Andi menusukkan termometer jarum steril ke potongan karaage paling tebal.',
        dialogue: [
          {
            speaker: 'Andi (Pekerja SSW)',
            role: 'Petugas Monitoring CCP',
            japanese: '松本リーダー、中心温度計で測定したところ、71度しかありません。規定の75度に届いていません！',
            kana: 'まつもとリーダー、ちゅうしんおんどけいで そくていしたところ、ななじゅういちど しか ありません。きていの ななじゅうごどに とどいていません！',
            romaji: 'Matsumoto-riidaa, chuushin ondokei de sokutei shita tokoro, nanajuu-ichi do shika arimasen. Kitei no nanajuu-go do ni todoite imasen!',
            indonesian: 'Leader Matsumoto, saat saya ukur dengan termometer inti, suhunya baru 71 derajat. Belum mencapai ketentuan standar 75 derajat!'
          },
          {
            speaker: 'Matsumoto (Line Leader)',
            role: 'Supervisor Keamanan Pangan',
            japanese: 'アンディさん、しっかり確認してくれて助かりました。油の温度が投入時に一時的に下がった可能性がありますね。すぐにフライヤーに戻して、追加で45秒揚げ直してください。',
            kana: 'アンディさん、しっかり かくにんしてくれて たすかりました。あぶらの おんどが とうにゅうじに いちじてきに さがった かのうせいが ありますね。すぐに ふらいやーに もどして、ついかで よんじゅうごびょう あげなおしてください。',
            romaji: 'Andi-san, shikkari kakunin shite kurete tasakarimashita. Abura no ondo ga tounyuuji ni ichijiteki ni sagatta kanousei ga arimasu ne. Sugu ni furaiyaa ni modoshite, tsuika de yonjuu-go byou agenaoshite kudasai.',
            indonesian: 'Andi, terima kasih atas ketelitianmu. Kemungkinan suhu minyak sempat turun saat potongan ayam dimasukkan. Segera masukkan kembali ke penggorengan dan goreng tambahan selama 45 detik.'
          },
          {
            speaker: 'Andi (Pekerja SSW)',
            role: 'Petugas Monitoring CCP',
            japanese: '了解いたしました。再加熱後、別の大きめのピースで再度中心温度を測り、75度以上1分間維持を確認して記録用紙に記入します。',
            kana: 'りょうかいいたしました。さいかねつご、べつの おおきめの ピースで さいど ちゅうしんおんどを はかり、ななじゅうごどいじょう いっぷんかん いじを かくにんして きろくようしに きにゅうします。',
            romaji: 'Ryoukai itashimashita. Saikanetsu-go, betsu no ookime no pīsu de saido chuushin ondo wo hakari, nanajuu-go do ijou ippunkan iji wo kakunin shite kiroku youshi ni kinyuu shimasu.',
            indonesian: 'Siap dimengerti. Setelah pemanasan ulang, saya akan mengukur kembali suhu inti pada potongan besar lainnya, memastikan 75 derajat atau lebih selama 1 menit, lalu mencatatnya di lembar formulir.'
          }
        ],
        takeaway: 'Pengukuran suhu inti (Chūshin Ondo) tidak boleh dikira-kira atau dipalsukan angkanya. Jika belum mencapai standar 75°C selama 1 menit, produk wajib dipanaskan ulang (re-heating) demi memastikan seluruh kuman patogen mati.'
      },
      visualDiagram: {
        title: '5 Langkah SOP Masuk Ruang Bersih Produksi Pabrik Pangan',
        subtitle: 'Prosedur Wajib Mengeliminasi Kontaminasi Rambut, Debu, dan Mikroba',
        type: 'steps',
        items: [
          {
            label: 'Langkah 1: Seragam Bersih & Inner Hair Net',
            description: 'Memakai jaring rambut dalam menutup telinga, topi pabrik, masker menutup hidung, dan baju putih bersih.',
            badge: 'Pakaian Tertutup'
          },
          {
            label: 'Langkah 2: Pembersihan Roller Perekat (Korokoro)',
            description: 'Menggulung roller perekat di seluruh badan minimal 60 detik (bahu, dada, punggung, kaki) untuk mengangkat serpihan rambut.',
            badge: 'Bebas Rambut'
          },
          {
            label: 'Langkah 3: Cuci Tangan 2 Tahap (Nido-arai) + Sikat Kuku',
            description: 'Mencuci tangan dengan sabun antibakteri selama 30 detik x 2 kali, menyikat sela kuku, dan mengeringkan dengan tisu steril.',
            badge: 'Antiseptik'
          },
          {
            label: 'Langkah 4: Disinfeksi Semprot Alkohol 75%',
            description: 'Menyemprotkan alkohol secara merata ke telapak tangan dan sarung tangan karet hingga basah dan menguap kering.',
            badge: 'Sterilisasi Kuman'
          },
          {
            label: 'Langkah 5: Bilik Air Shower (15–20 Detik)',
            description: 'Masuk ke bilik semprotan angin bertekanan tinggi sambil memutar badan dan mengangkat kedua tangan.',
            badge: 'Bebas Debu Mikro'
          }
        ]
      },
      importantPoints: [
        'Suhu inti pemanasan makanan wajib mencapai minimal 75°C selama minimal 1 menit (atau 85–90°C selama 90 detik untuk tiram/kerang).',
        'Rentang suhu 20°C hingga 50°C adalah zona bahaya perkembangbiakan kuman tercepat; makanan harus didinginkan cepat melampaui suhu ini.',
        'Hafalkan 8 bahan alergen wajib label di Jepang: Telur, Susu, Gandum, Udang, Kepiting, Soba, Kacang Tanah, dan Walnut (Kurumi).',
        'Sebelum membersihkan atau mengambil sesuatu dari dalam mesin berputar, selalu matikan mesin dan terapkan prosedur penguncian.'
      ],
      summary: 'Kepatuhan terhadap standar K3 melindungi pekerja dari insiden fatal mesin conveyor dan lantai licin, sementara pemantauan suhu inti HACCP serta kontrol ketat 8 bahan alergen menjamin keamanan mutlak bagi kesehatan konsumen.',
      practiceQuestions: [
        {
          id: 'mfg_ch4_q1',
          questionNumber: 1,
          questionText: 'HACCPの加熱調理工程における「中心温度」と加熱時間の一般的な基準として、最も適切なものを一つ選びなさい。',
          situation: 'Standar baku pemanasan suhu inti makanan untuk membunuh bakteri patogen umum.',
          options: [
            '中心温度が50度以上で、10秒間加熱する。',
            '中心温度が60度以上で、20秒間加熱する。',
            '中心温度が75度以上で、1分間以上加熱する。',
            '食品の表面さえ温かければ、中心温度を測る必要はない。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Standar baku HACCP untuk membunuh bakteri penyebab keracunan makanan (seperti Salmonella, O-157) adalah memanaskan hingga suhu bagian tengah terdalam (中心温度) mencapai minimal 75°C selama 1 menit atau lebih.',
          translation: 'Pilihlah satu standar umum yang paling tepat untuk suhu inti dan durasi pemanasan dalam proses memasak HACCP.'
        },
        {
          id: 'mfg_ch4_q2',
          questionNumber: 2,
          questionText: '日本の食品表示法において、原材料として含まれている場合に表示が「義務」付けられている特定原材料（8品目）に含まれないものを一つ選びなさい。',
          situation: 'Bahan makanan yang BUKAN merupakan bagian dari 8 bahan alergen wajib label di Jepang.',
          options: [
            'えび（海老）',
            'くるみ（胡桃）',
            '小麦（こむぎ）',
            'バナナ'
          ],
          correctAnswerIndex: 3,
          explanation: 'Pilihan 4 benar. Pisang (バナナ) termasuk dalam kategori bahan anjuran (20 bahan tertentu), BUKAN bahan wajib (8 bahan tertentu). Delapan bahan yang WAJIB dicantumkan adalah: Telur, Susu, Gandum, Soba, Kacang tanah, Udang, Kepiting, dan Kenari/Walnut (くるみ).',
          translation: 'Pilihlah satu bahan yang TIDAK termasuk dalam 8 bahan baku alergen tertentu yang WAJIB dicantumkan menurut hukum Jepang.'
        }
      ],
      officialReference: {
        source: 'MHLW Japan Food Sanitation Act & OTAFF Text',
        agency: 'Ministry of Health, Labour and Welfare (厚生労働省)',
        documentTitle: 'HACCPに沿った衛生管理の制度化およびアレルゲン管理マニュアル (Pedoman Institusionalisasi Manajemen Sanitasi HACCP & Alergen)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: PERSIAPAN UJIAN OTAFF (KISI-KISI, SIMULASI CBT & PEMBAHASAN)
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch5',
      sectorId: 'manufacturing',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Panduan Lengkap Ujian SSW Pengolahan Makanan (OTAFF CBT)',
      japaneseTitle: '飲食料品製造業技能測定試験の出題傾向と対策',
      estimatedMinutes: 30,
      objectives: [
        'Memahami struktur penilaian ujian OTAFF: Teori (Gakka) dan Praktik Keputusan Gambar (Jitsugi / Handan-tō Shiken).',
        'Menguasai 3 Prinsip Pencegahan Keracunan Makanan (Shokuchūdoku Yobō no San-gensoku): Tsukenai, Fuyasanai, Yattsukeru.',
        'Mengetahui karakteristik bakteri berspora (Gahōkin) dan bahaya Norovirus.',
        'Menguasai strategi menjawab soal berbasis gambar ilustrasi situasi pabrik.'
      ],
      contentExplanation: `
Ujian Pengukuran Keterampilan Spesifik Sektor Pengolahan Makanan (**飲食料品製造業技能測定試験**) diselenggarakan secara resmi oleh **OTAFF** di bawah pengawasan Kementerian Pertanian, Kehutanan, dan Perikanan Jepang (MAFF).

### 1. Struktur & Format Ujian Komputer (CBT)
Ujian dilaksanakan berbasis komputer (*Computer Based Testing*) di Test Center resmi Prometric di berbagai kota di Jepang dan luar negeri (termasuk Jakarta, Surabaya, dll):
- **Ujian Teori (学科試験 - Gakka Shiken)**:
  - Menguji pemahaman manajemen sanitasi umum, HACCP, bahan baku, aditif, alergen, dan K3 pabrik.
  - Bentuk soal: Pilihan ganda 3 atau 4 opsi.
- **Ujian Praktik / Penilaian Situasi (実技試験 / 判断等試験 - Jitsugi / Handan-tō Shiken)**:
  - Menguji kemampuan mengambil keputusan tepat saat menghadapi situasi kerja nyata melalui ilustrasi gambar, grafik pemantauan suhu, dan tabel resep.
  - Contoh: Menemukan tindakan berbahaya pada gambar pekerja lini, menghitung takaran sanitasi klorin, atau menentukan status kelulusan produk pada checkweigher.
- **Nilai Kelulusan**:
  - Skor minimal kelulusan adalah **65%** untuk masing-masing bagian teori dan praktik.

### 2. Konsep Kunci yang Selalu Keluar di Ujian OTAFF
1. **Tiga Prinsip Pencegahan Keracunan Pangan (食中毒予防の3原則)**:
   - **つけない (Tsukenai - Jangan Mengotori / Menulari)**: Jangan memindahkan mikroba ke makanan. Terapkan cuci tangan 2 tahap, pemisahan alat mentah-matang, dan penggunaan sarung tangan bersih.
   - **ふやさない (Fuyasanai - Jangan Membiarkan Berkembang Biak)**: Jangan memberi kesempatan mikroba membelah diri. Simpan makanan pada suhu dingin (di bawah 10°C atau beku -18°C) dan dinginkan makanan matang secepat mungkin.
   - **やっつける (Yattsukeru - Basmi / Bunuh)**: Matikan mikroba dengan pemanasan termal inti yang memadai (75°C selama 1 menit) atau disinfeksi kimia (natrium hipoklorit/alkohol).
2. **Karakteristik Bakteri Berspora (芽胞菌 - Gahōkin)**:
   - Bakteri seperti *Clostridium perfringens* (ウェルシュ菌) dan *Bacillus cereus* (セレウス菌) mampu membentuk spora (*gahō*) pelindung keras seperti biji tanaman.
   - Spora ini **TIDAK MATI dengan perebusan 100°C biasa**. Jika masakan sup kari atau rebusan dibiarkan mendingin perlahan di suhu ruang (20°C - 50°C), spora akan menetas kembali dan menghasilkan racun yang memicu keracunan massal. Oleh karena itu, makanan matang wajib didinginkan cepat melintasi zona bahaya tersebut.
3. **Ancaman Norovirus (ノロウイルス)**:
   - Virus menular kuat yang menyebabkan muntah dan diare akut.
   - Sangat tahan terhadap alkohol biasa. Cara mematikannya adalah dengan pemanasan suhu tinggi (85°C–90°C selama 90 detik) atau pembersihan dengan larutan Natrium Hipoklorit (klorin).

### 3. Tips Menganalisis Soal Gambar Ujian Praktik
Pada ujian praktik gambar OTAFF, perhatikan detail-detail berikut:
- Apakah ada rambut yang keluar dari bawah topi pekerja? (Pelanggaran).
- Apakah pekerja memakai cincin di dalam sarung tangan karet? (Pelanggaran berat).
- Apakah talenan daging mentah digunakan untuk memotong timun matang? (Kontaminasi silang).
- Apakah wadah penampung produk reject diletakkan langsung di atas lantai tanpa alas palet? (Pelanggaran sanitasi).
      `,
      keyTerms: [
        {
          japanese: '学科試験 / 実技試験',
          kana: 'がっかしけん / じつぎしけん',
          romaji: 'gakka shiken / jitsugi shiken',
          indonesian: 'Ujian teori / Ujian praktik (penilaian situasi)',
          note: 'Dua bagian ujian CBT OTAFF; keduanya wajib lulus dengan nilai minimal 65%.'
        },
        {
          japanese: '食中毒予防の3原則',
          kana: 'しょくちゅうどくよぼうのさんげんそく',
          romaji: 'shokuchuudoku yobou no san gensoku',
          indonesian: 'Tiga prinsip pencegahan keracunan makanan',
          note: 'Tsukenai (jangan mencemari), Fuyasanai (jangan biarkan tumbuh), Yattsukeru (basmi).'
        },
        {
          japanese: '芽胞菌',
          kana: 'がほうきん',
          romaji: 'gahoukin',
          indonesian: 'Bakteri berspora (tahan panas perebusan biasa)',
          note: 'Contoh: Welchii / Perfringens dan Cereus; butuh pendinginan cepat setelah matang.'
        },
        {
          japanese: '判断等試験',
          kana: 'はんだんとうしけん',
          romaji: 'handan-tou shiken',
          indonesian: 'Ujian evaluasi penilaian berbasis gambar ilustrasi',
          note: 'Nama resmi bagian ujian praktik CBT pengolahan makanan di Prometric.'
        },
        {
          japanese: 'テストピース',
          kana: 'てすとぴーす',
          romaji: 'tesuto pīsu',
          indonesian: 'Benda uji verifikasi logam (Fe dan SUS)',
          note: 'Digunakan sebelum shift untuk memastikan detektor logam berfungsi normal.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Simulasi Soal Gambar: Menemukan 3 Pelanggaran Sanitasi di Area Pengolahan Bento',
        scenario: 'Dalam soal bergambar ujian praktis OTAFF, disajikan ilustrasi ruang pengolahan bento dengan seorang pekerja pria sedang memotong mentimun matang.',
        dialogue: [
          {
            speaker: 'Soal Ujian OTAFF',
            role: 'Pertanyaan Praktik CBT',
            japanese: 'イラストを見て、食品衛生上「不適切」な行動や状態として当てはまるものを全て選びなさい。',
            kana: 'いらすとを みて、しょくひんえいせいじょう「ふてきせつ」な こうどうや じょうたいとして あてはまるものを すべて えらびなさい。',
            romaji: 'Irasuto wo mite, shokuhin eiseijou "futekisetsu" na koudou ya joutai toshite atehamaru mono wo subete erabinasai.',
            indonesian: 'Perhatikan ilustrasi gambar, pilihlah semua tindakan atau kondisi yang "TIDAK TEPAT" secara sanitasi makanan.'
          },
          {
            speaker: 'Pilihan Jawaban',
            role: 'Opsi Ujian',
            japanese: '①前髪が帽子からはみ出している。 ②手袋の下に指輪をはめている。 ③赤色の生肉用まな板で加熱済みの野菜を切っている。',
            kana: '①まえがみが ぼうしから はみだしている。 ②てぶくろの したに ゆびわを はめている。 ③あかいろの なまにくよう まな板で かねつずみの やさいを きっている。',
            romaji: '① Maegami ga boushi kara hamidashite iru. ② Tebukuro no shita ni yubiwa wo hamete iru. ③ Akairo no namaniku-you manaita de kanetsuzumi no yasai wo kitte iru.',
            indonesian: '① Rambut poni keluar dari tepi topi. ② Memakai cincin di bawah sarung tangan karet. ③ Memotong sayur matang menggunakan talenan merah khusus daging mentah.'
          },
          {
            speaker: 'Kunci Pembahasan',
            role: 'Solusi Jawaban',
            japanese: '解説：①、②、③のすべてが不適切です。異物混入、黄色ブドウ球菌の繁殖、および交差汚染を引き起こす重大な原因となります。',
            kana: 'かいせつ：①、②、③の すべてが ふてきせつです。いぶつこんにゅう、おうしょくぶどうきゅうきんの はんしょく、および こうさおせんを ひきおこす じゅうだいな げんいんと なります。',
            romaji: "Kaisetsu: ①, ②, ③ no subete ga futekisetsu desu. Ibutsu konnyuu, oushoku budoukyuukin no hanshoku, oyobi kousa osen wo hikiokosu juudai na gen'in to narimasu.",
            indonesian: 'Pembahasan: Ketiganya ①, ②, dan ③ adalah tindakan tidak tepat. Memicu kontaminasi benda asing rambut, perkembangbiakan kuman Staphylococcus aureus dari cincin, serta kontaminasi silang mikroba dari talenan mentah.'
          }
        ],
        takeaway: 'Soal ujian gambar OTAFF menuntut kejelian visual yang tajam. Hafalkan seluruh standar pakaian kerja, pemilahan warna alat, dan larangan penggunaan perhiasan kerja.'
      },
      visualDiagram: {
        title: '3 Pilar Utama Pencegahan Keracunan Makanan (食中毒予防の3原則)',
        subtitle: 'Konsep Paling Sering Muncul dalam Ujian Teori & Praktik OTAFF CBT',
        type: 'cards',
        items: [
          {
            label: '1. つけない (Jangan Mencemari / Menulari)',
            description: 'Cuci tangan 2 tahap, disinfeksi alkohol, pisahkan pisau/talenan mentah dan matang untuk menghindari kontaminasi silang.',
            badge: 'Pencegahan Silang'
          },
          {
            label: '2. ふやさない (Jangan Membiarkan Berkembang Biak)',
            description: 'Simpan bahan pada suhu dingin (< 10°C), dan dinginkan makanan matang secepatnya melewati zona bahaya 20°C–50°C.',
            badge: 'Kontrol Suhu Dingin'
          },
          {
            label: '3. やっつける (Basmi / Bunuh Kuman)',
            description: 'Lakukan pemanasan inti makanan minimal 75°C selama minimal 1 menit (atau 85–90°C selama 90 detik untuk norovirus).',
            badge: 'Sterilisasi Termal'
          }
        ]
      },
      importantPoints: [
        'Passing score ujian OTAFF adalah 65% untuk gakka dan 65% untuk jitsugi.',
        'Spora bakteri (芽胞菌) tidak dapat dibunuh dengan perebusan air mendidih 100°C biasa; kuncinya adalah pendinginan cepat.',
        'Virus Norovirus tidak efektif dibasmi hanya dengan alkohol biasa; gunakan pemanasan 85–90°C atau larutan klorin natrium hipoklorit.',
        'Perhatikan kata kunci pertanyaan ujian: apakah meminta mencari yang "Benar" (正しいもの) atau yang "Salah/Tidak Tepat" (誤っているもの / 適切でないもの).'
      ],
      summary: 'Ujian SSW Pengolahan Makanan OTAFF dirancang untuk memastikan kesiapan kerja nyata. Menguasai 3 prinsip pencegahan keracunan makanan, karakteristik bakteri berspora, serta ketelitian mengamati pelanggaran sanitasi gambar adalah kunci utama kelulusan ujian CBT.',
      practiceQuestions: [
        {
          id: 'mfg_ch5_q1',
          questionNumber: 1,
          questionText: '食中毒予防の3原則「つけない・ふやさない・やっつける」のうち、「やっつける」に該当する行動として適切なものを一つ選びなさい。',
          situation: 'Tindakan yang termasuk dalam prinsip "Yattsukeru (Membasmi/Membunuh kuman)".',
          options: [
            '生肉を切ったまな板で、そのまま加熱しない生野菜サラダを切った。',
            'ハンバーグの中心温度が75度以上になるまで1分間以上しっかり加熱調理した。',
            '調理後のカレーを鍋のまま室温（30度）の作業台に半日放置した。',
            '作業前に手を洗わずに、直接素手で食材を触った。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Memanaskan daging hingga suhu inti mencapai 75°C selama 1 menit atau lebih adalah bentuk penerapan prinsip やっつける (Yattsukeru / membunuh bakteri patogen). Pilihan 1 melanggar prinsip "Tsukenai", pilihan 3 melanggar prinsip "Fuyasanai".',
          translation: 'Pilihlah satu tindakan yang sesuai dengan prinsip "Yattsukeru (Membasmi)" dari 3 prinsip pencegahan keracunan makanan.'
        },
        {
          id: 'mfg_ch5_q2',
          questionNumber: 2,
          questionText: '熱に非常に強い「芽胞（がほう）」を作る細菌（ウェルシュ菌やセレウス菌など）による食中毒を防ぐための対策として、最も適切なものを一つ選びなさい。',
          situation: 'Pencegahan keracunan akibat bakteri pembentuk spora yang tahan panas perebusan.',
          options: [
            '100度で1分間加熱すれば芽胞も完全に死滅するため、加熱後はそのまま室温でゆっくり冷ます。',
            '加熱調理した後は、細菌が増殖しやすい温度帯（20〜50度）に長く留まらないよう、急速冷却して速やかに冷蔵保存する。',
            '味付けを甘くしておけば、芽胞菌は絶対に増殖しない。',
            '芽胞菌は冷凍庫の中（-18度）でも急速に増殖するため、冷凍保存は禁止する。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Spora bakteri tahan terhadap suhu mendidih 100°C biasa. Langkah pencegahan paling efektif adalah mendinginkan makanan secara cepat melewati zona bahaya (20°C - 50°C) agar spora tidak sempat bertunas kembali menjadi bakteri hidup yang aktif memproduksi racun.',
          translation: 'Pilihlah langkah yang paling tepat untuk mencegah keracunan bakteri pembentuk spora (seperti Welchii atau Cereus).'
        }
      ],
      officialReference: {
        source: 'OTAFF Specified Skilled Worker Food Manufacturing Official Exam Syllabus',
        agency: 'Organization for Technical Skill Assessment of Foreign Workers in Food Industry (OTAFF)',
        documentTitle: '飲食料品製造業技能測定試験 試験概要およびサンプル問題 (Silabus Resmi & Contoh Soal Ujian Pengolahan Makanan)'
      }
    }
  ],

  // --------------------------------------------------------------------------
  // SIMULASI UJIAN LENGKAP OTAFF (EXAM SIMULATION)
  // --------------------------------------------------------------------------
  examSimulation: {
    title: 'Simulasi Resmi Ujian SSW Pengolahan Makanan (OTAFF Manufacturing CBT)',
    subtitle: 'Standar Ujian Teori & Praktik Penilaian Keputusan Gambar Berdasarkan Silabus Resmi MAFF & OTAFF Jepang (6 Soal Komprehensif)',
    timeMinutes: 25,
    passingScorePercentage: 65,
    questions: [
      {
        id: 'mfg_sim_q1',
        questionNumber: 1,
        questionText: 'HACCPにおける加熱調理工程の管理基準について、一般的な食中毒菌を死滅させるための「中心温度」と「加熱時間」の組み合わせとして、正しいものを一つ選びなさい。',
        situation: 'Standar baku parameter suhu inti pemanasan masakan untuk mematikan mikroba patogen.',
        options: [
          '中心温度 65℃で 30秒間以上',
          '中心温度 75℃で 1分間以上',
          '中心温度 85℃で 5秒間以上',
          '表面温度 100℃で 10秒間以上'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Standar baku HACCP di Jepang untuk memastikan bakteri patogen mati adalah suhu bagian terdalam (中心温度 - chūshin ondo) mencapai minimal 75°C selama 1 menit atau lebih. Pengukuran harus dilakukan dengan termometer tusuk steril pada bagian makanan yang paling tebal.',
        translation: 'Pilihlah satu kombinasi yang benar antara "suhu inti" dan "waktu pemanasan" untuk membunuh bakteri keracunan makanan umum pada proses memasak HACCP.'
      },
      {
        id: 'mfg_sim_q2',
        questionNumber: 2,
        questionText: '食中毒予防の3原則「つけない・ふやさない・やっつける」に関する説明として、最も適切なものを一つ選びなさい。',
        situation: 'Prinsip dasar pencegahan keracunan makanan di pabrik pengolahan pangan Jepang.',
        options: [
          '「つけない」とは、細菌を殺すために熱湯に30分間漬けることである。',
          '「ふやさない」とは、食材を常温の作業台（25℃〜35℃）の上に長時間放置して発酵させることである。',
          '「つけない」とは、手洗いや器具の使い分けにより、食材に細菌やウイルスを付着させないことである。',
          '「やっつける」とは、食品添加物を基準値の10倍以上投入してカビを抑えることである。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Prinsip "つけない (Tsukenai)" berarti mencegah cemaran bakteri/virus menempel ke makanan melalui cuci tangan bersih dan pembedaan alat olah mentah vs matang. Pilihan 1, 2, dan 4 adalah penafsiran yang keliru dan berbahaya.',
        translation: 'Pilihlah satu penjelasan yang paling tepat mengenai 3 prinsip pencegahan keracunan makanan (つけない・ふやさない・やっつける).'
      },
      {
        id: 'mfg_sim_q3',
        questionNumber: 3,
        questionText: '金属検出機（きんぞくけんしゅつき）の日常点検において、センサーが正常に動作しているか確認するために使用する器具の名称として、正しいものを一つ選びなさい。',
        situation: 'Alat uji standar untuk memverifikasi kepekaan sensor mesin detektor logam di lini pengemasan.',
        options: [
          'テストピース（FeやSUSなどの標準試験片）',
          'アルコールスプレー',
          '粘着ローラー（コロコロ）',
          'デジタル中心温度計'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Untuk memeriksa sensitivitas mesin detektor logam sebelum dan selama jam kerja, operator menggunakan "Test Piece (テストピース)" berupa sampel standar logam besi (Fe) dan baja tahan karat (SUS).',
        translation: 'Pilihlah nama alat yang benar yang digunakan untuk memeriksa apakah sensor mesin metal detector bekerja normal dalam inspeksi harian.'
      },
      {
        id: 'mfg_sim_q4',
        questionNumber: 4,
        questionText: '食品に表示される「賞味期限」と「消費期限」の違いに関する記述として、正しいものを一つ選びなさい。',
        situation: 'Perbedaan mendasar antara Shōmi Kigen dan Shōhi Kigen menurut undang-undang pelabelan Jepang.',
        options: [
          '「賞味期限」は、おにぎりやサンドイッチなど傷みやすい食品に表示され、過ぎたら絶対に食べてはいけない。',
          '「消費期限」は、品質が急速に劣化しやすい食品に表示され、安全に食べられる期限を意味するため、過ぎたものは食べてはならない。',
          '「賞味期限」と「消費期限」は名前が違うだけで、法律上の意味や対象食品は全く同じである。',
          '「消費期限」が過ぎた食品は、再度加熱調理すれば工場から出荷して販売してもよい。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. 消費期限 (Shōhi Kigen) dicantumkan pada makanan yang cepat busuk (seperti bento, sandwich, sushi) dan menunjukkan batas aman konsumsi. Jika sudah melewati batas tanggal/jam tersebut, makanan dilarang untuk dikonsumsi atau dijual.',
        translation: 'Pilihlah pernyataan yang benar mengenai perbedaan antara "Shōmi Kigen" dan "Shōhi Kigen" yang tertera pada produk pangan.'
      },
      {
        id: 'mfg_sim_q5',
        questionNumber: 5,
        questionText: '日本の食品表示基準において、アレルギー物質として容器包装への表示が法律で「義務」付けられている特定原材料（8品目）の組み合わせとして、正しいものを一つ選びなさい。',
        situation: 'Daftar 8 bahan pangan pemicu alergi yang WAJIB dicantumkan pada label kemasan di Jepang.',
        options: [
          'えび、かに、小麦、そば、卵、乳、落花生（ピーナッツ）、くるみ',
          'えび、かに、大豆、米、卵、牛肉、豚肉、鶏肉',
          '小麦、そば、リンゴ、バナナ、オレンジ、モモ、キウイ、トマト',
          'サバ、サケ、アワビ、イカ、イクラ、ゴマ、ゼラチン、カシューナッツ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Delapan bahan baku tertentu (特定原材料 8品目) yang WAJIB dicantumkan pada kemasan adalah: Udang (えび), Kepiting (かに), Gandum (小麦), Soba (そば), Telur (卵), Susu (乳), Kacang tanah (落花生), dan Kenari/Walnut (くるみ). Pilihan lain memuat bahan rekomendasi/anjuran (20 bahan).',
        translation: 'Pilihlah kombinasi yang benar dari 8 bahan baku tertentu (alergen) yang secara hukum WAJIB dicantumkan pada kemasan menurut standar Jepang.'
      },
      {
        id: 'mfg_sim_q6',
        questionNumber: 6,
        questionText: 'ベルトコンベアが稼働している最中に、製品やトレイがレーンから落ちそうになったときの行動として、最も安全で適切なものを一つ選びなさい。',
        situation: 'Prosedur keselamatan kerja saat barang hendak jatuh dari mesin conveyor yang sedang menyala.',
        options: [
          'コンベアを止めずに、素早く手を入れて落ちそうな製品を掴み上げる。',
          '直ちにコンベアを停止させるか、安全な停止ボタンを押してから、安全を確認して製品を拾い上げる。',
          '足を使って製品が落ちないようにコンベアの隙間に押し込む。',
          '誰にも見られないように、落ちた製品をそのまま足で蹴って機械の下に隠す。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Jangan pernah memasukkan tangan atau anggota tubuh ke dalam mesin conveyor yang masih bergerak karena berisiko fatal tergulung (巻き込まれ事故). Hentikan mesin terlebih dahulu dengan tombol stop/darurat, pastikan mesin benar-benar berhenti diam, barulah mengambil produk yang jatuh.',
        translation: 'Pilihlah tindakan yang paling aman dan tepat ketika produk atau wadah hendak jatuh dari ban berjalan saat conveyor sedang menyala.'
      }
    ]
  }
};
