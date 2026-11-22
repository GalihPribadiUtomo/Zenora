import { SswSectorData } from '../../types/ssw';

export const AGRICULTURE_SECTOR_DATA: SswSectorData = {
  id: 'agriculture',
  name: 'Pertanian & Peternakan (Agriculture / 農業)',
  japaneseName: '農業',
  romajiName: 'Nōgyō',
  iconName: 'Sprout',
  tagline: 'Mengembangkan agrikultur modern, teknik budidaya tanaman presisi, dan peternakan berkelanjutan untuk menjaga ketahanan pangan Jepang.',
  badge: 'Suasana Alam',
  badgeColor: 'text-emerald-400 bg-emerald-500/15 border-emerald-500/30',
  overview: {
    workEnvironment: 'Bekerja di lahan terbuka (露地栽培 - Roji Saibai) untuk aneka sayuran dan padi, rumah kaca berteknologi pengatur suhu (ハウス栽培 - Hausu Saibai) untuk buah dan sayur hortikultura, fasilitas sortir pascapanen, serta peternakan sapi potong/perah, babi, atau unggas modern.',
    mainDuties: [
      'Pengolahan tanah, pembuatan bedengan (une), pemasangan mulsa plastik, dan penyemaian serta penanaman bibit muda (teishoku).',
      'Pemeliharaan harian: penyiraman (kansui), penjarangan (mabiki), pemangkasan tunas liar (mekaki/tekshin), dan pemberian pupuk susulan (tsuihi).',
      'Pemanenan menggunakan alat pemotong khusus, pemilahan mutu (senbetsu/grading), penimbangan, dan pengemasan ke dalam kardus pengiriman.',
      'Pengoperasian dan perawatan mesin pertanian: traktor pembajak, gerobak angkut bermotor (unpanki), dan mesin pemotong rumput (kusakariki).',
      'Pemberian pakan, pembersihan kandang berkala, dan pemantauan kondisi kesehatan hewan ternak (khusus subsektor peternakan / chikusan).'
    ],
    technicalExamName: 'Farming Skills Measurement Test (農業技能測定試験 - Nōgyō Ginō Sokutei Shiken)',
    examOrganizer: 'National Chamber of Agriculture (全国農業会議所) & Ministry of Agriculture, Forestry and Fisheries (MAFF / 農林水産省)',
    passRequirement: 'Lulus tes keterampilan teknis CBT (Pilihan: Budidaya Tanaman / 耕種農業 atau Peternakan / 畜産農業 dengan skor ≥ 60%) + JFT-Basic A2 atau JLPT N4.',
    salaryInsight: 'Gaji pokok berkisar antara ¥180.000 hingga ¥240.000/bulan (umumnya perkebunan dan peternakan menyediakan asrama berbiaya sewa sangat murah serta fasilitas hasil panen beras/sayuran segar gratis).'
  },
  officialReferences: [
    {
      title: 'Agricultural Specified Skilled Worker Evaluation Test Textbooks (農業特定技能測定試験 学習用テキスト)',
      agency: 'Ministry of Agriculture, Forestry and Fisheries of Japan (MAFF / 農林水産省)',
      description: 'Pedoman kurikulum resmi dua divisi kejuruan: Budidaya Tanaman (耕種農業) dan Peternakan (畜産農業), mencakup agronomi, fisiologi tanaman, keselamatan mesin, dan K3.'
    },
    {
      title: 'Guidelines for Agricultural Work Safety and Safe Pesticide Usage (農作業安全確認ガイドライン・農薬適正使用基準)',
      agency: 'National Agricultural Insurance Association (NOSAI) & MAFF',
      description: 'Standar pencegahan kecelakaan operasional traktor dan mesin pemotong rumput, protokol penanganan bahan kimia agrokimia, serta penanggulangan heat stroke di ladang dan greenhouse.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG PERTANIAN & SIKLUS MUSIM JEPANG
    // ------------------------------------------------------------------------
    {
      id: 'agri_ch1',
      sectorId: 'agriculture',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Struktur Pertanian Modern Jepang, Siklus 4 Musim & Sub-Sektor',
      japaneseTitle: '日本の農業の基本構造と四季の農作業',
      estimatedMinutes: 25,
      objectives: [
        'Memahami pembagian dua subsektor utama SSW Pertanian: Budidaya Tanaman (Kōshu) dan Peternakan (Chikusan).',
        'Menguasai perbedaan mendasar budidaya lahan terbuka (Roji Saibai) dan rumah kaca (Hausu Saibai).',
        'Mengenal kalender kerja pertanian Jepang yang dipengaruhi secara dinamis oleh siklus 4 musim.'
      ],
      contentExplanation: `
Pertanian di Jepang merupakan sektor vital yang memadukan keindahan alam empat musim dengan teknologi mekanisasi modern. Tuntutan konsumen Jepang terhadap produk pertanian sangat menitikberatkan pada prinsip **Keamanan dan Ketenangan Hati (安心・安全 - Anshin & Anzen)**, kesegaran maksimal, serta keseragaman mutu visual dan rasa.

Dalam skema visa Specified Skilled Worker (SSW / Tokutei Ginou), sektor pertanian dibagi menjadi dua divisi kejuruan resmi:
1. **Budidaya Tanaman (耕種農業 - Kōshu Nōgyō)**:
   - **Sayuran (野菜 - Yasai)**: Kubis, selada, brokoli, daun bawang (*negi*), lobak (*daikon*), tomat, timun, terong.
   - **Padi & Tanaman Pangan (米・穀物 - Kome / Kokumotsu)**: Penanaman sawah basah (*suiden*) yang sangat bergantung pada traktor penanam padi (*taueki*) dan pemanen gabah (*konbain*).
   - **Buah-buahan (果樹 - Kaju)**: Apel, jeruk mikan, anggur shine muscat, persik (*momo*), dan stroberi berkualitas premium.
   - **Bunga & Tanaman Hias (花き - Kaki)**: Krisan, mawar, dan lili untuk perayaan dan upacara adat.
2. **Peternakan (畜産農業 - Chikusan Nōgyō)**:
   - **Sapi Perah (酪農 - Rakunō)**: Pemeliharaan sapi perah dan pemerahan susu (*sakunyū*).
   - **Sapi Potong (肉牛 - Nikugyū)**: Pembesaran sapi pedaging berkualitas tinggi seperti Wagyu.
   - **Babi (養豚 - Yōton)** & **Unggas (養鶏 - Yōkei)**: Pemeliharaan ayam petelur (*ran-yō*) dan ayam pedaging (*niku-yō*).

### Karakteristik Metode Penanaman:
- **Budidaya Lahan Terbuka (露地栽培 - Roji Saibai)**: Ditanam di hamparan sawah atau ladang tanpa penutup atap buatan. Sangat rentan terhadap fluktuasi cuaca ekstrem, angin topan (*taifū*), dan musim hujan (*tsuyu*). Menghasilkan sayuran dengan cita rasa khas musiman.
- **Budidaya Rumah Kaca (ハウス栽培 - Hausu Saibai)**: Ditanam di dalam greenhouse berbingkai baja dengan lapisan film vinil transparan. Suhu, sirkulasi angin, pencahayaan, dan kelembaban dikontrol secara mikro, memungkinkan produksi tomat atau stroberi sepanjang tahun dengan mutu tinggi.

### Dinamika Kerja 4 Musim (日本の四季と農作業):
- **Musim Semi (春 - Haru / Mar–Mei)**: Penggemburan tanah (*tagayashi*), pembuatan bedengan (*une*), penaburan pupuk dasar (*motogoe*), dan penanaman bibit muda (*teishoku*).
- **Musim Panas (夏 - Natsu / Jun–Agt)**: Pertumbuhan vegetatif cepat, penyiraman intensif (*kansui*), pemangkasan tunas samping (*mekaki*), penyiangan gulma (*kusatori*), serta mitigasi sengatan panas (*netchūshō*).
- **Musim Gugur (秋 - Aki / Sep–Nov)**: Puncak panen raya (*shūkaku*), pengetaman gabah padi (*inekari*), penyortiran kualitas (*senbetsu*), dan pengemasan ke pasar grosir.
- **Musim Dingin (冬 - Fuyu / Des–Feb)**: Pemeliharaan intensif greenhouse berpemanas, pemangkasan ranting pohon buah (*sentei*), perawatan mesin traktor, dan pemulihan nutrisi tanah ladang.
      `,
      keyTerms: [
        {
          japanese: '露地栽培',
          kana: 'ろじさいばい',
          romaji: 'roji saibai',
          indonesian: 'Budidaya lahan terbuka (tanpa atap/pelindung buatan)',
          note: 'Sangat dipengaruhi iklim alami, hujan, dan musim setempat.'
        },
        {
          japanese: 'ハウス栽培',
          kana: 'はうすさいばい',
          romaji: 'hausu saibai',
          indonesian: 'Budidaya rumah kaca / greenhouse plastik vinil',
          note: 'Memungkinkan kontrol suhu dan perlindungan dari cuaca ekstrem.'
        },
        {
          japanese: '耕種農業',
          kana: 'こうしゅのうぎょう',
          romaji: 'kōshu nōgyō',
          indonesian: 'Subsektor budidaya tanaman (sayur, buah, padi, bunga)',
          note: 'Salah satu dari 2 cabang keahlian utama ujian SSW Pertanian.'
        },
        {
          japanese: '畜産農業',
          kana: 'ちくさんのうぎょう',
          romaji: 'chikusan nōgyō',
          indonesian: 'Subsektor peternakan (sapi perah/potong, babi, unggas)',
          note: 'Menuntut sanitasi biosecurity ketat pencegahan wabah penyakit.'
        },
        {
          japanese: '定植',
          kana: 'ていしょく',
          romaji: 'teishoku',
          indonesian: 'Penanaman bibit permanen ke bedengan ladang',
          note: 'Pemindahan bibit dari baki persemaian (nae) ke tanah utama.'
        },
        {
          japanese: '収穫',
          kana: 'しゅうかく',
          romaji: 'shūkaku',
          indonesian: 'Panen hasil pertanian',
          note: 'Dilakukan saat tanaman mencapai indeks kematangan ideal pasar.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Penyesuaian Ventilasi Rumah Kaca Tomat di Awal Musim Semi',
        scenario: 'Fajar, pekerja SSW tahun pertama di perkebunan tomat Prefektur Shizuoka, bertugas membantu Pak Takahashi memeriksa kondisi greenhouse pada pagi hari yang mulai terasa hangat setelah fajar dingin.',
        dialogue: [
          {
            speaker: 'Takahashi (Pemilik Kebun)',
            role: 'Petani Senior',
            japanese: 'ファジャルさん、今日の天気予報では昼前から急に晴れて気温が上がります。10時になったら、ハウスの両サイドのビニールを巻き上げて換気してください。',
            kana: 'ファジャルさん、きょうの てんきよほうでは ひるまえから きゅうに はれて きおんが あがります。じゅうじに なったら、はうすの りょうさいどの びにーるを まきあげて かんきしてください。',
            romaji: 'Fajaru-san, kyou no tenki yohou dewa hirumae kara kyuu ni harete kion ga agarimasu. Juu-ji ni nattara, hausu no ryou-saido no biniiru wo makiagete kanki shite kudasai.',
            indonesian: 'Fajar, ramalan cuaca hari ini menunjukkan menjelang siang cuaca akan cerah mendadak dan suhu naik. Pukul 10 tepat, tolong gulung plastik di kedua sisi samping greenhouse untuk ventilasi udara.'
          },
          {
            speaker: 'Fajar (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: 'はい、高橋さん。午前10時に両側のサイドビニールを巻き上げて換気ですね。ハウス内の温度は何度の目安に合わせますか？',
            kana: 'はい、たかはしさん。ごぜん じゅうじに りょうがわの さいどびにーるを まきあげて かんきですね。はうすないの おんどは なんどの めやすに あわせますか？',
            romaji: 'Hai, Takahashi-san. Gozen juu-ji ni ryougawa no saido biniiru wo makiagete kanki desu ne. Hausu-nai no ondo wa nan-do no meyasu ni awasemasu ka?',
            indonesian: 'Baik, Pak Takahashi. Pukul 10 pagi menggulung plastik samping kedua belah sisi untuk ventilasi ya. Untuk target suhu di dalam greenhouse berapa derajat patokannya?'
          },
          {
            speaker: 'Takahashi (Pemilik Kebun)',
            role: 'Petani Senior',
            japanese: '素晴らしい確認です！室温が28度を超えないように管理してください。高温多湿になるとトマトが病気にかかりやすくなります。',
            kana: 'すばらしい かくにんです！しつおんが にじゅうはちどを こえないように かんりしてください。こうおんたしつに なると とまとが びょうきに かかりやすくなります。',
            romaji: 'Subarashii kakunin desu! Shitsuon ga 28-do wo koenai you ni kanri shite kudasai. Kouon tashitsu ni naru to tomato ga byouki ni kakariyasuku narimasu.',
            indonesian: 'Konfirmasi yang sangat bagus! Tolong jaga agar suhu ruangan tidak melebihi 28 derajat Celsius. Kondisi panas dan lembab yang berlebihan membuat tomat rentan terserang penyakit jamur.'
          }
        ],
        takeaway: 'Pengaturan iklim mikro (suhu dan kelembaban) dalam rumah kaca sangat krusial bagi kesehatan tanaman. Selalu konfirmasi instruksi spesifik waktu dan angka target suhu sebelum bertindak.'
      },
      visualDiagram: {
        title: 'Kalender Siklus 4 Musim Kegiatan Pertanian Jepang',
        type: 'steps',
        items: [
          {
            label: '1. Haru (春 - Musim Semi)',
            description: 'Pengolahan tanah (Tagayashi), pembuatan bedengan (Une-tate), dan penanaman bibit muda (Teishoku/Taue).',
            badge: 'Awal Tanam'
          },
          {
            label: '2. Natsu (夏 - Musim Panas)',
            description: 'Penyiraman teratur (Kansui), penyiangan gulma (Kusatori), pemangkasan tunas (Mekaki), dan mitigasi sengatan panas (Netchuushou).',
            badge: 'Perawatan'
          },
          {
            label: '3. Aki (秋 - Musim Gugur)',
            description: 'Puncak panen raya (Shuukaku), sortir kualitas (Senbetsu), penimbangan, dan pengemasan kardus pengiriman (Nizukuri).',
            badge: 'Panen Raya'
          },
          {
            label: '4. Fuyu (冬 - Musim Dingin)',
            description: 'Pemeliharaan greenhouse berpemanas, pemangkasan dahan pohon buah (Sentei), perawatan mesin traktor, dan pengayaan hara tanah.',
            badge: 'Persiapan'
          }
        ]
      },
      importantPoints: [
        'SSW Pertanian terbagi menjadi 2 kategori: Budidaya Tanaman (耕種) dan Peternakan (畜産).',
        'Budidaya rumah kaca (ハウス栽培) memungkinkan panen teratur tanpa terganggu cuaca namun membutuhkan kontrol ventilasi suhu ketat.',
        'Budidaya lahan terbuka (露地栽培) mengandalkan musim dan tanah alami namun rentan terhadap angin kencang serta hujan deras.',
        'Prinsip mutu produk pertanian Jepang menekankan pada "Anshin & Anzen" (aman dari residu berbahaya dan terpercaya kebersihannya).'
      ],
      summary: 'Pertanian Jepang menggabungkan kepekaan terhadap ritme alam 4 musim dengan manajemen mikroklimat presisi. Penguasaan jenis budidaya dan siklus kerja musiman merupakan pondasi utama bagi pekerja SSW.',
      practiceQuestions: [
        {
          id: 'agri_ch1_q1',
          questionNumber: 1,
          questionText: '日本の農業における「ハウス栽培」の特徴として、最も適切なものを一つ選びなさい。',
          situation: 'Karakteristik budidaya rumah kaca (House Saibai) dalam pertanian Jepang.',
          options: [
            '露地栽培と比べて天候の影響を受けやすく、雨が降ると作業が一切できない。',
            '施設内の温度や換気を人工的に管理することで、作物の生育環境を安定させることができる。',
            '肥料や水やりは自然の雨に完全に頼るため、水やりの手間がかからない。',
            'どのような季節でも、常に窓やビニールを完全に密閉したままにしておかなければならない。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Keunggulan utama ハウス栽培 (House Saibai) adalah kemampuan mengontrol suhu, kelembaban, dan sirkulasi udara secara buatan sehingga kondisi pertumbuhan tanaman stabil. Pilihan 1 salah (justru lebih tahan cuaca), Pilihan 3 salah (penyiraman dilakukan dengan irigasi buatan), Pilihan 4 salah (ventilasi berkala wajib dilakukan agar tidak terlalu panas/lembab).',
          translation: 'Pilihlah satu pernyataan yang paling tepat mengenai karakteristik "Budidaya Rumah Kaca (House Saibai)" dalam pertanian Jepang.'
        },
        {
          id: 'agri_ch1_q2',
          questionNumber: 2,
          questionText: '特定技能「農業」の区分と作業内容の組み合わせとして、正しいものを一つ選びなさい。',
          situation: 'Pembagian divisi kejuruan dan lingkup tugas pada visa SSW Pertanian.',
          options: [
            '耕種農業 ―― 搾乳（さくにゅう）や牛舎の清掃、飼料の給餌を行う。',
            '畜産農業 ―― 野菜の種まきや果樹の剪定（せんてい）を行う。',
            '耕種農業 ―― 野菜・果樹・花き・米などの栽培管理や収穫・選別を行う。',
            '畜産農業 ―― トラクターで水田を耕起し、田植え機で稲を植える。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. 耕種農業 (Koushu Nougyou) mencakup budidaya, perawatan, panen, dan sortir tanaman sayur, buah, bunga, dan beras. Pilihan 1 & 4 adalah tugas peternakan dan padi yang tertukar kategorinya. Pilihan 2 adalah peternakan tetapi berisi tugas tanaman.',
          translation: 'Pilihlah satu kombinasi yang benar antara divisi SSW Pertanian dan isi tugas pekerjaannya.'
        }
      ],
      officialReference: {
        source: 'MAFF Specified Skilled Worker Agricultural Evaluation System',
        agency: 'Ministry of Agriculture, Forestry and Fisheries (農林水産省)',
        documentTitle: '農業特定技能測定試験 試験案内・実施要項 (Pedoman Ujian Teknis SSW Pertanian)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: KOSAKATA ALAT, MESIN, PUPUK & PESTISIDA
    // ------------------------------------------------------------------------
    {
      id: 'agri_ch2',
      sectorId: 'agriculture',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Kosakata Alat Kerja, Mesin Tani, Pupuk & Pestisida',
      japaneseTitle: '農具・農業機械・肥料・農薬の専門用語',
      estimatedMinutes: 30,
      objectives: [
        'Menghafal nama-nama perkakas tangan manual, wadah panen, dan perlengkapan bedengan.',
        'Mengenal mesin-mesin pertanian utama (traktor, unpanki, kusakariki, funmuki).',
        'Menguasai terminologi nutrisi tanaman (hiryou) dan bahan perlindungan tanaman (nouyaku).'
      ],
      contentExplanation: `
Di lingkungan kerja pertanian Jepang, kecepatan dan ketepatan pelaksanaan instruksi bergantung pada penguasaan nama peralatan spesifik. Supervisor kebun tidak akan menggunakan istilah umum seperti *"ambilkan pisau itu"*, melainkan nama presisi alat agronomi.

### 1. Perkakas Manual Tangan (手作業の農具):
- **Cangkul (鍬 - Kuwa)**: Digunakan untuk mencangkul tanah (*tagayasu*), meratakan bedengan (*une*), dan membersihkan saluran air. Cangkul garpu berkaki tiga/empat disebut *Bitchū-kuwa* (備中鍬) untuk tanah liat padat.
- **Sabit (鎌 - Kama)**:
  - *Nokogiriba-gama* (鋸刃鎌): Sabit bergigi gergaji untuk memotong batang padi atau pangkal sayuran tebal.
  - *Kusakari-gama* (草刈鎌): Sabit tajam bermata halus untuk memotong rumput liar.
- **Gunting Pemangkas (剪定鋏 - Senteibasami)**: Gunting dahan berkekuatan pegas untuk memotong ranting keras atau tangkai buah tanpa memar.
- **Gunting Panen (収穫鋏 - Shūkakubasami)**: Gunting berujung melengkung atau ramping untuk memotong tangkai sayur/buah dekat buahnya dengan aman.
- **Kontainer Panen (収穫カゴ / コンテナ - Shūkaku Kago / Kontena)**: Wadah plastik berongga standar untuk menampung hasil petikan.

### 2. Mesin Pertanian Lapangan (農業機械):
- **Traktor (トラクター - Torakutā)**: Mesin utama pembajak tanah menggunakan pisau rotari (*rotarī*).
- **Gerobak Angkut Bermesin (運搬車 - Unpansha)**: Kendaraan kecil beroda rantai kelabang (*crawler*) atau roda karet untuk memuat berton-ton hasil panen di jalan berlumpur.
- **Mesin Pemotong Rumput Sandang (草刈機 / 刈払機 - Kusakariki / Karibaraiki)**: Mesin portabel berpiringan pisau baja putar atau senar nilon untuk membersihkan semak pematang sawah (*aze*).
- **Mesin Semprot Tekanan (動力噴霧機 / 動噴 - Dōryoku Funmuki / Dōfun)**: Mesin pemompa larutan pestisida/pupuk cair bertekanan tinggi.

### 3. Pupuk & Nutrisi Tanaman (肥料 - Hiryō):
- **Pupuk Dasar (元肥 - Motogoe / Moto-hi)**: Pupuk kompos (*taihi*) atau pupuk kimia lambat urai yang diaduk ke tanah sebelum penanaman benih.
- **Pupuk Susulan (追肥 - Tsuihi / Oi-hi)**: Pupuk tambahan yang diberikan berkala pada akar atau daun (*yōmen sanpu*) selama masa pertumbuhan vegetatif dan pembuahan.
- **Unsur Hara Utama (肥料の三要素 - Hiryō no San-yōso)**:
  - Nitrogen (N / 窒素 - Chisso): Pertumbuhan daun dan batang.
  - Fosfor (P / リン酸 - Rinsan): Pembungaan dan pembentukan buah.
  - Kalium (K / カリウム - Kariumu): Penguatan akar dan ketahanan terhadap penyakit.

### 4. Pestisida & Perlindungan Tanaman (農薬 - Nōyaku):
- **Insektisida (殺虫剤 - Satchūzai)**: Pembasmi hama serangga (kutu daun, ulat).
- **Fungisida (殺菌剤 - Sakkinzai)**: Pembasmi jamur dan bakteri penyakit tanaman.
- **Herbisida (除草剤 - Josōzai)**: Pembasmi rumput gulma pengganggu.
- **Rasio Pengenceran (希釈倍率 - Kishaku Bairitsu)**: Angka kelipatan air pengencer (contoh: 1000x berarti 1 ml obat dilarutkan ke 1 liter air).
      `,
      keyTerms: [
        {
          japanese: '鍬',
          kana: 'くわ',
          romaji: 'kuwa',
          indonesian: 'Cangkul pertanian',
          note: 'Digunakan untuk mengolah tanah, membalik guludan, dan membuat saluran drainase.'
        },
        {
          japanese: '鎌',
          kana: 'かま',
          romaji: 'kama',
          indonesian: 'Sabit / arit pemotong',
          note: 'Terdiri dari sabit bergigi (nokogiriba) dan sabit pemotong rumput biasa.'
        },
        {
          japanese: '剪定鋏',
          kana: 'せんていばさみ',
          romaji: 'senteibasami',
          indonesian: 'Gunting pangkas dahan/ranting',
          note: 'Memiliki bilah tebal dan pegas untuk memotong dahan keras.'
        },
        {
          japanese: '運搬車',
          kana: 'うんぱんしゃ',
          romaji: 'unpansha',
          indonesian: 'Gerobak angkut bermesin (utility cart/crawler)',
          note: 'Sangat vital untuk mobilisasi peti panen di lahan berlumpur.'
        },
        {
          japanese: '草刈機',
          kana: 'くさかりき',
          romaji: 'kusakariki',
          indonesian: 'Mesin pemotong rumput (brush cutter)',
          note: 'Bilah logam berputar cepat, wajib dioperasikan dengan pelindung K3 lengkap.'
        },
        {
          japanese: '元肥',
          kana: 'もとごえ',
          romaji: 'motogoe',
          indonesian: 'Pupuk dasar (diberikan sebelum tanam)',
          note: 'Menyediakan nutrisi fondasi bagi bibit muda yang baru berakar.'
        },
        {
          japanese: '追肥',
          kana: 'ついひ',
          romaji: 'tsuihi',
          indonesian: 'Pupuk susulan (diberikan saat masa tumbuh)',
          note: 'Mendukung fase pembesaran buah dan pemulihan stamina tanaman.'
        },
        {
          japanese: '希釈倍率',
          kana: 'きしゃくばいりつ',
          romaji: 'kishaku bairitsu',
          indonesian: 'Rasio kelipatan pengenceran pestisida/pupuk cair',
          note: 'Wajib dihitung presisi agar tidak terjadi keracunan tanaman (yakugai).'
        }
      ],
      workplaceCaseStudy: {
        title: 'Mempersiapkan Pengenceran Fungisida untuk Tanaman Melon',
        scenario: 'Rizki, peserta SSW Pertanian di Prefektur Ibaraki, diminta oleh ketua kelompok tani (Kato-san) menyiapkan larutan fungisida pencegah jamur tepung (udonko-byou) menggunakan mesin semprot bertekanan.',
        dialogue: [
          {
            speaker: 'Kato-san (Ketua Kelompok)',
            role: 'Mandor Kebun',
            japanese: 'リズキさん、メロンの葉にうどんこ病が出そうだから、この殺菌剤を1000倍に希釈して、動噴のタンクに100リットル分作ってください。',
            kana: 'リズキさん、めろんの はに うどんこびょうが でそうだから、この さっきんざいを せんばいに きしゃくして、どうふんの たんくに ひゃくりっとるぶん つくってください。',
            romaji: 'Rizuki-san, meron no ha ni udonko-byou ga desou da kara, kono sakkinzai wo sen-bai ni kishaku shite, doufun no tanku ni hyaku-rittoru-bun tsukutte kudasai.',
            indonesian: 'Rizki, karena daun melon sepertinya mulai terserang jamur tepung, tolong encerkan fungisida ini sebanyak 1000 kali kelipatan, dan buat 100 liter di tangki mesin semprot.'
          },
          {
            speaker: 'Rizki (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: 'かしこまりました。1000倍希釈で100リットルですね。水100リットルに対して、薬剤を100ミリリットル計量カップで量って投入すればよろしいでしょうか。',
            kana: 'かしこまりました。せんばいきしゃくで ひゃくりっとるですね。みず ひゃくりっとるに たいして、やくざいを ひゃくみりりっとる けいりょうかっぷで はかって とうにゅうすれば よろしいでしょうか。',
            romaji: 'Kashikomari mashita. Sen-bai kishaku de hyaku-rittoru desu ne. Mizu hyaku-rittoru ni taishite, yakuzai wo hyaku-miririttoru keiryou-kappu de hakatte tounyuu sureba yoroshii deshou ka.',
            indonesian: 'Dimengerti. Rasio 1000 kali untuk 100 liter ya. Berarti untuk 100 liter air, saya takar obatnya sebanyak 100 mililiter menggunakan gelas ukur lalu dituangkan, apakah benar?'
          },
          {
            speaker: 'Kato-san (Ketua Kelompok)',
            role: 'Mandor Kebun',
            japanese: 'その通り、計算バッチリです！薬剤を入れたら撹拌棒でしっかり混ぜてください。保護メガネと防護マスクの着用も忘れずにね。',
            kana: 'そのとおり、けいさん ばっちりです！やくざいを いれたら かくはんぼうで しっかり まぜてください。ほごめがねと ぼうごますくの ちゃくようも わすれずにね。',
            romaji: 'Sono toori, keisan bacchiri desu! Yakuzai wo iretara kakuhan-bou de shikkari mazete kudasai. Hogo megane to bougo masuku no chakuyou mo wasurezu ni ne.',
            indonesian: 'Tepat sekali, perhitungannya sempurna! Setelah obat dimasukkan, aduklah sampai rata dengan tongkat pengaduk. Jangan lupa pakai kacamata pelindung dan masker pengaman ya.'
          }
        ],
        takeaway: 'Penghitungan rasio pengenceran (kishaku bairitsu) adalah kompetensi matematis mutlak di perkebunan. Obat yang terlalu pekat membakar tanaman (yakugai), sedangkan obat yang terlalu encer tidak membasmi hama.'
      },
      visualDiagram: {
        title: 'Klasifikasi Sarana & Perlengkapan Pertanian Lapangan',
        type: 'grid',
        items: [
          {
            label: 'Alat Pemotong (鎌・剪定鋏)',
            description: 'Sabit dan gunting dahan untuk panen presisi dan pemangkasan tanpa merusak batang tanaman utama.',
            badge: 'Manual'
          },
          {
            label: 'Alat Pengolah Tanah (鍬・備中鍬)',
            description: 'Cangkul untuk menggemburkan tanah, membentuk bedengan drainase, dan membalik tanah keras.',
            badge: 'Manual'
          },
          {
            label: 'Mesin Lapangan (トラクター・草刈機)',
            description: 'Membajak lahan skala luas, transportasi wadah panen, dan pengendalian gulma pematang.',
            badge: 'Mekanis'
          },
          {
            label: 'Agrokimia (肥料・農薬)',
            description: 'Nutrisi makro N-P-K (motogoe/tsuihi) serta perlindungan terhadap serangga dan cendawan.',
            badge: 'Kimiawi'
          }
        ]
      },
      importantPoints: [
        'Jangan pernah menukar botol kemasan herbisida (Josouzai) dan insektisida (Satchuuzai); semprotan herbisida yang salah akan mematikan seluruh tanaman budidaya.',
        'Rumus pengenceran pestisida: Dosis Obat = Total Volume Air ÷ Rasio Kelipatan (Contoh: 100 L = 100.000 ml ÷ 1000 = 100 ml).',
        'Setelah selesai bekerja, bersihkan tanah dan getah tanaman dari mata pisau sabit dan cangkul, lalu olesi minyak pelumas agar tidak berkarat.',
        'Wadah panen (kontainer) harus dibersihkan secara rutin untuk mencegah penularan spora jamur antarkebun.'
      ],
      summary: 'Penguasaan nama perkakas, mesin pertanian, pupuk, dan pestisida menjamin kelancaran alur instruksi kerja dan mencegah kesalahan fatal dalam perawatan tanaman komersial Jepang.',
      practiceQuestions: [
        {
          id: 'agri_ch2_q1',
          questionNumber: 1,
          questionText: '作物の栽培において、種まきや苗の定植を行う前に、あらかじめ土壌に混ぜ込んでおく肥料の呼び名として正しいものを一つ選びなさい。',
          situation: 'Istilah untuk pupuk yang dicampurkan ke dalam tanah sebelum benih disemai atau ditanam.',
          options: [
            '追肥（ついひ）',
            '元肥（もとごえ）',
            '液肥（えきひ）',
            '葉面散布肥料（ようめんさんぷひりょう）'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Pupuk yang dicampurkan ke tanah sebelum menanam bibit disebut 元肥 (Motogoe / Moto-hi). Sebaliknya, 追肥 (Tsuihi) adalah pupuk susulan saat tanaman sudah tumbuh.',
          translation: 'Pilihlah satu sebutan yang benar untuk pupuk yang terlebih dahulu dicampurkan ke dalam tanah sebelum penyemaian benih atau penanaman bibit.'
        },
        {
          id: 'agri_ch2_q2',
          questionNumber: 2,
          questionText: '農薬を「2000倍」に希釈して、合計「100リットル」の散布液を作る場合に必要な農薬の量として、正しいものを一つ選びなさい。',
          situation: 'Penghitungan takaran pestisida dengan rasio pengenceran 2000 kali untuk volume 100 liter.',
          options: [
            '20 ミリリットル（mL）',
            '50 ミリリットル（mL）',
            '100 ミリリットル（mL）',
            '200 ミリリットル（mL）'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. 100 liter = 100.000 mL. Jumlah obat yang dibutuhkan = 100.000 mL ÷ 2000 = 50 mL.',
          translation: 'Pilihlah jumlah obat pertanian yang tepat apabila membuat 100 liter larutan semprot dengan pengenceran 2000 kali.'
        }
      ],
      officialReference: {
        source: 'Japan Agricultural Cooperatives (JA / 全農) Agricultural Guidance',
        agency: 'JA Group & Ministry of Agriculture, Forestry and Fisheries',
        documentTitle: '農作業便利帳・基礎資材用語集 (Buku Istilah Sarana & Peralatan Dasar Tani)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: KOMUNIKASI DI LAPANGAN & HO-REN-SO
    // ------------------------------------------------------------------------
    {
      id: 'agri_ch3',
      sectorId: 'agriculture',
      category: 'komunikasi',
      chapterNumber: 3,
      title: 'Komunikasi Kerja Lapangan: Perintah Kerja, Laporan Cuaca & Ho-Ren-So',
      japaneseTitle: '圃場での作業指示・気象報告・ホウレンソウ',
      estimatedMinutes: 25,
      objectives: [
        'Menerapkan budaya Ho-Ren-So (Hōkoku, Renraku, Sōdan) secara tanggap di area perkebunan terbuka.',
        'Mampu melakukan konfirmasi ulang instruksi (Fukushō) di tengah kebisingan mesin atau bentang lahan luas.',
        'Melaporkan perubahan cuaca mendadak, anomali tanaman, dan kerusakan mekanis secara terstruktur.'
      ],
      contentExplanation: `
Karakteristik tempat kerja pertanian (*Hojō* / 圃場) sangat berbeda dengan pabrik tertutup atau kantor. Di ladang:
- Area kerja sangat luas hingga berhektar-hektar, sehingga jarak antaranggota tim berjauhan.
- Deru mesin pembajak traktor, mesin potong rumput, dan blower greenhouse menghasilkan kebisingan tinggi.
- Perubahan cuaca alamiah (hujan lebat tiba-tiba, petir, angin kencang) dapat mengancam keselamatan jiwa seketika.

Oleh sebab itu, etika komunikasi di sektor pertanian menekankan ketegasan suara, konfirmasi balik tanpa asumsi pribadi, dan kecepatan bertukar informasi.

### 1. Konfirmasi Pengulangan Instruksi (復唱 - Fukushō):
Bila supervisor kebun memberikan arahan di tengah desingan angin atau deru mesin, jangan hanya mengangguk atau menjawab *"Hai"*. Ulangi poin penting dari instruksi tersebut:
- Supervisor: *"Tolong petik terong baris ke-4 dan ke-5 yang panjangnya sudah di atas 15 cm!"*
- Pekerja SSW: *"Baik! Memetik terong baris ke-4 dan ke-5 yang panjangnya di atas 15 cm!"* (復唱).
Jika tidak terdengar jelas, segera tanyakan kembali dengan sopan: *"Sumimasen, kaze no oto de kikoemasen deshita. Mou ichido onegai shimasu"* (Maaf, tidak terdengar karena suara angin. Mohon diulangi sekali lagi).

### 2. Pelaporan Gejala Anomali Tanaman (病害虫の早期発見・報告):
Salah satu peran terbesar pekerja SSW yang berada di garis depan budidaya adalah menjadi "mata" bagi pemilik kebun. Apabila saat menyiram atau menyiangi rumput Anda melihat:
- Daun menggulung layu tidak wajar (*chijire/kare*).
- Bercak putih atau karat cokelat pada permukaan daun (*hanmon/byōki*).
- Kumpulan ulat, kutu daun, atau wereng (*byōgaichū*).
Segera hentikan pekerjaan di titik tersebut dan laporkan ke kepala kebun (*Enchō* / 園長) dengan menyebutkan **nomor bedengan dan baris tanaman**. Deteksi dini mencegah penularan patogen ke seluruh lahan.

### 3. Evakuasi Saat Cuaca Buruk (悪天候時の退避・連絡):
Di Jepang, ancaman sambaran petir (*ochira*) di sawah terbuka sangat fatal. Jika langit menggelap pekat dan terdengar guntur (*kaminari*):
- Segera matikan mesin traktor dan turun dari kendaraan.
- Jauhi pohon tinggi yang berdiri sendiri di tengah ladang.
- Jangan berteduh di bawah tiang listrik atau pagar kawat logam.
- Segera menuju mobil tertutup atau bangunan permanen terdekat dan hubungi pengawas (*renraku*).
      `,
      keyTerms: [
        {
          japanese: '復唱',
          kana: 'ふくしょう',
          romaji: 'fukushō',
          indonesian: 'Konfirmasi pengulangan kata-kata instruksi',
          note: 'Wajib dilakukan agar instruksi kerja tidak terjadi salah tafsir di lahan bising.'
        },
        {
          japanese: '圃場',
          kana: 'ほじょう',
          romaji: 'hojō',
          indonesian: 'Lahan budidaya pertanian (areal sawah/kebun terbuka)',
          note: 'Istilah baku resmi untuk tanah tempat aktivitas bercocok tanam.'
        },
        {
          japanese: '病害虫',
          kana: 'びょうがいちゅう',
          romaji: 'byōgaichū',
          indonesian: 'Hama dan penyakit tanaman',
          note: 'Kombinasi infeksi penyakit (jamur/virus) dan serangan serangga perusak.'
        },
        {
          japanese: '潅水',
          kana: 'かんすい',
          romaji: 'kansui',
          indonesian: 'Penyiraman air pada tanaman (watering/irrigation)',
          note: 'Disebut juga "mizu-yari", sangat vital diatur jam dan takarannya.'
        },
        {
          japanese: '荷造り',
          kana: 'にづくり',
          romaji: 'nizukuri',
          indonesian: 'Pengepakan / pengemasan barang hasil panen ke kardus',
          note: 'Termasuk penempelan label kualitas dan pelindung benturan.'
        },
        {
          japanese: '異常',
          kana: 'いじょう',
          romaji: 'ijō',
          indonesian: 'Keabnormalan / kelainan kondisi fisik',
          note: 'Wajib dilaporkan segera sebelum masalah meluas.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Penemuan Koloni Kutu Daun (Aburamushi) di Bedengan Terong',
        scenario: 'Agus sedang melakukan penyiangan tunas samping (mekaki) pada tanaman terong di lahan terbuka. Ia melihat sekumpulan kutu kecil berwarna hijau kekuningan berkerumun di pucuk daun muda bersama semut.',
        dialogue: [
          {
            speaker: 'Agus (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: '園長、いまナスの芽かき作業をしていたのですが、葉の裏にアブラムシの群れを見つけました！',
            kana: 'えんちょう、いま なすの めかきさぎょうを していたのですが、はのうらに あぶらむしの むれを みつけました！',
            romaji: 'Enchou, ima nasu no mekaki sagyou wo shite ita no desu ga, ha no ura ni aburamushi no mure wo mitsukemashita!',
            indonesian: 'Kepala Kebun, saat saya sedang memangkas tunas terong tadi, saya menemukan gerombolan kutu daun di balik daun!'
          },
          {
            speaker: 'Enchou (Kepala Kebun)',
            role: 'Pengawas Kebun',
            japanese: '本当かい？どの場所の株で見つかったか、具体的に教えてくれるかい？',
            kana: 'ほんとうかい？どの ばしょの かぶで みつかったか、ぐたいてきに おしえて くれるかい？',
            romaji: 'Hontou kai? Dono basho no kabu de mitsukatta ka, gutaiteki ni oshiete kureru kai?',
            indonesian: 'Benarkah? Di tanaman bagian mana persisnya kamu temukan, bisa tolong jelaskan secara konkret?'
          },
          {
            speaker: 'Agus (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: '南側の第3畝、東の端から4番目と5番目の株です。葉が少しベタついて縮れています。',
            kana: 'みなみがわの だいさんうね、ひがしの はしから よんばんめと ごばんめの かぶです。はが すこし べたついて ちぢれています。',
            romaji: 'Minami-gawa no dai-san une, higashi no hashi kara yon-banme to go-banme no kabu desu. Ha ga sukoshi beta-tsuite chidjirete imasu.',
            indonesian: 'Di bedengan ke-3 sisi selatan, tanaman nomor 4 dan 5 dari ujung timur. Daunnya terasa agak lengket dan keriput mengerut.'
          },
          {
            speaker: 'Enchou (Kepala Kebun)',
            role: 'Pengawas Kebun',
            japanese: 'アグスさん、素早い報告ありがとう！早期発見できたから、周りへの広がりを防げるよ。午後一番でその周辺に局所散布をしよう。',
            kana: 'あぐすさん、すばやい ほうこく ありがとう！そうきはっけん できたから、まわりへの ひろがりを ふせげるよ。ごごいちばんで その しゅうへんに きょくしょさんぷを しよう。',
            romaji: 'Agusu-san, subayai houkoku arigatou! Souki hakken dekita kara, mawari e no hirogari wo fusegeru yo. Gogo-ichiban de sono shuuhen ni kyokusho sanpu wo shiyou.',
            indonesian: 'Agus, terima kasih atas laporannya yang begitu cepat! Karena ditemukan lebih awal, kita bisa mencegah penyebarannya ke tanaman sekitar. Siang ini kita semprot obat di area tersebut.'
          }
        ],
        takeaway: 'Laporan Ho-Ren-So yang spesifik (lokasi bedengan, nomor tanaman, ciri fisik kelainan) memungkinkan pengambilan keputusan yang cepat dan tepat, menyelamatkan hasil panen ratusan juta rupiah.'
      },
      visualDiagram: {
        title: 'Alur Ho-Ren-So Respon Cepat di Lahan Pertanian',
        type: 'steps',
        items: [
          {
            label: '1. Deteksi Kejanggalan',
            description: 'Melihat hama penyakit daun, suara aneh traktor, atau perubahan cuaca gelap berangin.',
            badge: 'Identifikasi'
          },
          {
            label: '2. Pengamanan Diri & Lokasi',
            description: 'Hentikan mesin putar atau tindakan berisiko, tandai area bedengan yang bermasalah.',
            badge: 'Tindakan Awal'
          },
          {
            label: '3. Pelaporan Presisi (Hōkoku)',
            description: 'Laporkan kepada penanggung jawab dengan menyebut lokasi bedengan dan gejala konkret.',
            badge: 'Komunikasi'
          },
          {
            label: '4. Konfirmasi Balik (Fukushō)',
            description: 'Ulangi instruksi arahan perbaikan yang diberikan supervisor untuk memastikan tidak salah langkah.',
            badge: 'Verifikasi'
          }
        ]
      },
      importantPoints: [
        'Jangan pernah menyimpulkan sendiri (勝手な判断 - Katte na handan) saat menemukan tanaman yang layu atau alat yang macet.',
        'Di tengah suara mesin dan angin, selalu terapkan Fukushō (mengulang poin instruksi).',
        'Bila melihat awan kumulonimbus hitam dan terdengar guntur saat bekerja di ladang terbuka, segera evakuasi ke tempat terlindung.',
        'Sampaikan fakta objektif saat melapor (nomor bedengan, ukuran daun, nama hama), bukan asumsi.'
      ],
      summary: 'Komunikasi lapangan di sektor pertanian menuntut ketangkasan laporan deteksi dini hama, ketegasan konfirmasi balik instruksi kerja, dan kepatuhan evakuasi darurat cuaca ekstrem demi keselamatan kerja.',
      practiceQuestions: [
        {
          id: 'agri_ch3_q1',
          questionNumber: 1,
          questionText: '農作業の現場で指示を受けた際の「復唱（ふくしょう）」の役割として、最も適切なものを一つ選びなさい。',
          situation: 'Peran penting konfirmasi pengulangan (Fukushou) saat menerima instruksi kerja tani.',
          options: [
            '指示された内容を自分が正しく理解したかを相手に確認し、思い込みによる作業ミスを防ぐため。',
            '指示を出した相手の言葉遣いが正しいかどうかをその場で評価するため。',
            '自分の作業スピードをアピールして、周囲の同僚を急かすため。',
            '指示された手順をメモする時間がもったいないので、声に出してそのまま忘れるため。'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pilihan 1 benar. Inti dari 復唱 (Fukushou) adalah memastikan bahwa instruksi dipahami dengan benar oleh penerima pesan dan mengonfirmasikannya kembali kepada pemberi instruksi untuk mencegah kecelakaan atau kesalahan kerja akibat salah paham.',
          translation: 'Pilihlah satu pernyataan yang paling tepat mengenai peran "Fukushou (pengulangan instruksi)" saat menerima instruksi kerja di lapangan pertanian.'
        },
        {
          id: 'agri_ch3_q2',
          questionNumber: 2,
          questionText: '屋外の畑で作業中、雷の音が聞こえて空が急激に暗くなってきたときの行動として、最も適切なものを一つ選びなさい。',
          situation: 'Tindakan yang tepat saat terdengar suara guntur dan cuaca mendadak gelap di ladang terbuka.',
          options: [
            '金属製の農具を持ったまま、畑の中で最も高い一本の木の下に逃げ込んで雨宿りをする。',
            '雷が落ちてくるまで時間がかかるため、予定していたノルマが終わるまでそのまま作業を続ける。',
            '作業を直ちに中止し、速やかに車の中や頑丈な建物内に避難する。',
            'トラクターの上に乗ったまま、金属の屋根の下で様子を見る。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Sambaran petir di ladang terbuka sangat mematikan. Pekerja wajib segera menghentikan aktivitas dan berteduh di dalam mobil bertutup atau bangunan permanen. Berteduh di bawah pohon tinggi (Pilihan 1) atau tetap di atas traktor logam (Pilihan 4) sangat berbahaya karena mengalirkan induksi kilat.',
          translation: 'Pilihlah satu tindakan yang paling tepat apabila saat bekerja di ladang terbuka terdengar suara guntur dan langit mendadak gelap pekat.'
        }
      ],
      officialReference: {
        source: 'NOSAI Agricultural Disaster Compensation System',
        agency: 'Ministry of Agriculture, Forestry and Fisheries (MAFF)',
        documentTitle: '農作業安全の手引き・悪天候時の避難マニュアル (Panduan Keselamatan Kerja Tani & Evakuasi Cuaca Ekstrem)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: K3 PERTANIAN, HEAT STROKE & KESELAMATAN MESIN
    // ------------------------------------------------------------------------
    {
      id: 'agri_ch4',
      sectorId: 'agriculture',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'K3 Pertanian: Pencegahan Heat Stroke, Keselamatan Mesin & Penanganan Pestisida',
      japaneseTitle: '農業安全衛生・熱中症予防・機械操作・農薬管理',
      estimatedMinutes: 30,
      objectives: [
        'Menerapkan protokol pencegahan sengatan panas (Netchūshō) di rumah kaca dan lahan terbuka.',
        'Mengidentifikasi titik-titik bahaya terlilit mesin (Makikomare) dan traktor terguling (Tenpoku).',
        'Menguasai SOP pemakaian Alat Pelindung Diri (APD) dan teknik semprot bahan kimia pertanian.'
      ],
      contentExplanation: `
Sektor pertanian di Jepang memiliki angka kecelakaan kerja fatal yang cukup tinggi akibat penggunaan mesin bermotor bertenaga besar dan paparan cuaca terik. Oleh karena itu, regulasi K3 (*Rōdō Anzen Eisei* / 労働安全衛生) diberlakukan dengan sangat ketat.

### 1. Pencegahan Sengatan Panas (熱中症予防 - Netchūshō Yobō):
Saat musim panas (*natsu*), suhu di dalam rumah kaca plastik vinil bisa melompat hingga di atas 40°C dengan kelembaban melebihi 80%.
- **Protokol Pencegahan**:
  - Minum air dan asupan garam (*enshin* / permen garam) setiap 20–30 menit, jangan menunggu sampai merasa haus.
  - Kenakan pakaian berpenyejuk kipas (*Kūchōfuku* / 空調服) dan topi berpelindung leher (*Hiyoke-bō*).
  - Hindari bekerja sendirian (*tandoku sagyō*) di greenhouse saat jam terik siang hari (11:00–14:00).
- **Pertolongan Pertama**: Jika rekan kerja tampak pusing (*memai*), mual (*hakike*), atau lemas linglung, segera bawa ke tempat teduh ber-AC/ventilasi angin, longgarkan pakaian, dinginkan pembuluh darah besar di leher, ketiak, dan pangkal paha dengan kompres es/air dingin, serta berikan minuman larutan elektrolit (*OS-1 / ion water*).

### 2. Keselamatan Pengoperasian Mesin Tani (農業機械の安全操作):
- **Bahaya Terlilit Poros Putar (巻き込まれ事故 - Makikomare Jiko)**:
  - Poros penyalur tenaga mesin traktor (*PTO shaft* / ＰＴＯ軸) berputar dengan kekuatan ratusan RPM. Jika ujung baju longgar, rambut, atau sarung tangan berbenang tersangkut, korban akan tertarik seketika dan mengalami cedera fatal.
  - **Aturan Emas**: Jangan pernah mengenakan sarung tangan rajut berbenang lepas (*gunte*) di dekat poros berputar; gunakan sarung tangan karet pas di tangan. Pastikan penutup pelindung PTO (*safety cover*) selalu terpasang.
  - **Matikan Mesin Total (エンジン停止)**: Jika rumput atau jerami menyumbat bilah mesin potong rumput (*kusakariki*) atau traktor, matikan mesin sepenuhnya dan tunggu hingga bilah berhenti berputar total sebelum membersihkannya!
- **Bahaya Traktor Terguling (転覆・転落 - Tenpoku / Tenraku)**:
  - Sering terjadi saat melintasi pematang sawah berkemiringan curam (*norimen*) atau parit.
  - Traktor modern dilengkapi rangka pelindung kabin (*ROPS - Roll-Over Protective Structure*). **Wajib mengenakan sabuk pengaman (シートベルト)** agar pengemudi tidak terlempar ke bawah badan traktor saat kendaraan terbalik.

### 3. Penanganan & Penyemprotan Pestisida (農薬の安全取扱):
Pestisida adalah bahan kimia aktif yang dapat terserap melalui kulit, saluran pernapasan, dan mata.
- **APD Lengkap (保護具)**: Kacamata pengaman (*hogomegane*), masker respirator partikel/gas (*bōdoku masuku*), sarung tangan karet nitril kedap air, baju pelindung plastik, dan sepatu bot karet.
- **Arah Angin (風向きの確認)**: Selalu berdiri di posisi **atas angin (風上 - Kazakami)** dan menyemprotkan larutan ke arah **bawah angin (風下 - Kazashimo)** agar kabut racun tidak berbalik mengenai tubuh pekerja.
- **Higienitas Pascasemprot**: Segera lepas pakaian kerja dan cuci terpisah dari baju biasa, lalu mandi keramas hingga bersih.
      `,
      keyTerms: [
        {
          japanese: '熱中症',
          kana: 'ねっちゅうしょう',
          romaji: 'netchūshō',
          indonesian: 'Sengatan panas / heat stroke',
          note: 'Ancaman nomor satu saat musim panas di greenhouse dan ladang terbuka.'
        },
        {
          japanese: '空調服',
          kana: 'くうちょうふく',
          romaji: 'kūchōfuku',
          indonesian: 'Pakaian kerja berpendingin kipas elektrik built-in',
          note: 'Standar wajib pakaian musim panas di sektor pertanian dan konstruksi Jepang.'
        },
        {
          japanese: '巻き込まれ事故',
          kana: 'まきこまれじこ',
          romaji: 'makikomare jiko',
          indonesian: 'Kecelakaan tersangkut/terlilit putaran mesin',
          note: 'Sering disebabkan oleh sarung tangan berbenang atau pakaian longgar.'
        },
        {
          japanese: '安全フレーム (ROPS)',
          kana: 'あんぜんふれーむ',
          romaji: 'anzen furēmu',
          indonesian: 'Rangka besi pelindung kabin traktor anti-terguling',
          note: 'Wajib dipadukan dengan pemakaian sabuk pengaman pengemudi.'
        },
        {
          japanese: '風上',
          kana: 'かざかみ',
          romaji: 'kazakami',
          indonesian: 'Arah dari mana angin datang (atas angin)',
          note: 'Posisi wajib tubuh operator saat melakukan penyemprotan bahan kimia.'
        },
        {
          japanese: '保護具',
          kana: 'ほごぐ',
          romaji: 'hogogu',
          indonesian: 'Alat Pelindung Diri (APD)',
          note: 'Termasuk masker gas, goggle, sepatu bot baja, dan sarung tangan tahan kimia.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Pertolongan Cepat Rekan Kerja Gejala Dehidrasi di Rumah Kaca Stroberi',
        scenario: 'Pukul 13:30 siang di bulan Juli, pekerja SSW Dewi melihat temannya, Siti, duduk bersandar lemas di lantai greenhouse stroberi dengan napas memburu, wajah pucat, dan mengeluhkan kram pada otot betisnya.',
        dialogue: [
          {
            speaker: 'Dewi (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: 'シティさん、顔色が真っ青ですよ！足がつって動けないんですか？',
            kana: 'シティさん、かおいろが まっさおですよ！あしが つって うごけないんですか？',
            romaji: 'Shiti-san, kaoiro ga massao desu yo! Ashi ga tsutte ugokenai n desu ka?',
            indonesian: 'Siti, wajahmu pucat sekali! Apakah kakimu kram sampai tidak bisa bergerak?'
          },
          {
            speaker: 'Siti (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: '頭がガンガン痛くて…汗が止まらなくて…少し気持ち悪いです。',
            kana: 'あたまが がんがん いたくて…あせが とまらなくて…すこし きもちわるいです。',
            romaji: 'Atama ga gangan itakute... ase ga tomaranakute... sukoshi kimochi warui desu.',
            indonesian: 'Kepalaku pusing berdenyut hebat... keringat mengucur deras tidak mau berhenti... dan agak mual.'
          },
          {
            speaker: 'Dewi (Pekerja SSW)',
            role: 'Staf Lapangan',
            japanese: '熱中症の中等度症状です！すぐにハウスから出て、エアコンの効いた休憩所へ行きましょう。肩を貸します！',
            kana: 'ねっちゅうしょうの ちゅうとうどしょうじょうです！すぐに はうすから でて、えあこんの きいた きゅうけいじょへ いきましょう。かたを かします！',
            romaji: 'Netchuushou no chuutoudo shoujou desu! Sugu ni hausu kara dete, eakon no kiita kyuukeijo e ikimashou. Kata wo kashimasu!',
            indonesian: 'Ini gejala sedang heat stroke! Ayo segera keluar dari greenhouse dan pergi ke ruang istirahat ber-AC. Aku bantu papah!'
          },
          {
            speaker: 'Dewi (ke Mandor Kebun)',
            role: 'Staf Lapangan',
            japanese: '農園長、シティさんが熱中症を起こしました！首と脇の下を保冷剤で冷やして、経口補水液を少しずつ飲ませています。',
            kana: 'のうえんちょう、シティさんが ねっちゅうしょうを おこしました！くびと わきのしたを ほれいざいで ひやして、けいこうほすいえきを すこしずつ のませています。',
            romaji: 'Nouen-chou, Shiti-san ga netchuushou wo okoshimashita! Kubi to waki no shita wo horeizai de hiyashite, keikou hosuieki wo sukoshizutsu nomasete imasu.',
            indonesian: 'Kepala Kebun, Siti terkena heat stroke! Saya sedang mendinginkan leher dan ketiaknya dengan kompres es, dan memberinya minum larutan oralit secara perlahan.'
          }
        ],
        takeaway: 'Mengenali gejala awal heat stroke dan tindakan pertolongan pertama (evakuasi ke tempat dingin, kompres titik arteri nadi leher/ketiak, asupan oralit) dapat mencegah kerusakan otak permanen atau kematian.'
      },
      visualDiagram: {
        title: '4 Prinsip Keselamatan K3 di Sektor Pertanian Jepang',
        type: 'warning',
        items: [
          {
            label: '1. Matikan Mesin Sebelum Pembersihan',
            description: 'Jangan pernah menyentuh bilah rumput kusut atau pisau rotari saat mesin traktor masih hidup.',
            badge: 'Larangan Mutlak'
          },
          {
            label: '2. Sabuk Pengaman & ROPS Traktor',
            description: 'Selalu kencangkan sabuk pengaman di traktor berkabin pelindung untuk mencegah tertindih bodi saat terbalik.',
            badge: 'Wajib K3'
          },
          {
            label: '3. Semprot Pestisida dari Arah Atas Angin',
            description: 'Berdiri di posisi Kazakami (atas angin) memakai kacamata goggle, respirator bōdoku, dan sarung tangan karet.',
            badge: 'Bahan Kimia'
          },
          {
            label: '4. Hidrasi & Pendinginan Berkala',
            description: 'Minum air dan garam tiap 20 menit, kenakan jaket kipas kūchōfuku di musim panas untuk cegah heat stroke.',
            badge: 'Kesehatan'
          }
        ]
      },
      importantPoints: [
        'Kecelakaan terlilit mesin sering terjadi karena sarung tangan katun rajut (*gunte*); gunakan sarung tangan karet pas di jari saat berdekatan dengan mesin berputar.',
        'Jangan pernah menyemprotkan pestisida melawan arah angin (*kazashimo kara*); uap racun akan terhirup oleh operator.',
        'Jika traktor mulai miring di turunan curam, jangan melompat sembarangan; sabuk pengaman dan rangka ROPS dirancang menahan benturan.',
        'Pestisida bekas harus disimpan di gudang khusus yang terkunci dan dilarang membuang sisa larutan ke selokan umum.'
      ],
      summary: 'Kepatuhan terhadap SOP keselamatan mesin, pemakaian APD kimia lengkap, dan kewaspadaan terhadap heat stroke adalah benteng utama yang menjamin keselamatan kerja setiap pekerja SSW Pertanian.',
      practiceQuestions: [
        {
          id: 'agri_ch4_q1',
          questionNumber: 1,
          questionText: '農薬散布を行う際の人体への安全対策として、最も適切なものを一つ選びなさい。',
          situation: 'Tindakan keselamatan manusia yang paling tepat saat melakukan penyemprotan bahan kimia pertanian.',
          options: [
            '風下（かざしも）に立って、自分に向かって風が吹いてくる方向へ散布する。',
            '暑い季節は熱中症を防ぐため、マスクや保護メガネなどの保護具は一切着けずに作業する。',
            '風上（かざかみ）に立ち、保護メガネ・防護マスク・不浸透性の手袋などの保護具を正しく着用して散布する。',
            '散布液が手についてしまった場合、乾くまで放置してから水で軽く拭き取る。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Posisi penyemprotan yang tepat adalah berdiri di arah 風上 (Kazakami / atas angin) dengan APD lengkap (kacamata, masker pelindung, sarung tangan kedap air). Pilihan 1 salah (menyemprot ke arah sendiri), Pilihan 2 salah (melepas APD berisiko keracunan akut), Pilihan 4 salah (bila terkena kulit harus langsung dibilas air mengalir banyak-banyak).',
          translation: 'Pilihlah satu tindakan perlindungan keselamatan manusia yang paling tepat saat melakukan penyemprotan pestisida.'
        },
        {
          id: 'agri_ch4_q2',
          questionNumber: 2,
          questionText: '刈払機（草刈機）に草や小石が絡まったときの対応として、正しいものを一つ選びなさい。',
          situation: 'Prosedur penanganan saat rumput atau kerikil tersangkut pada bilah pisau mesin pemotong rumput.',
          options: [
            'アクセルを全開にして高速回転させ、遠心力で無理やり草を弾き飛ばす。',
            '必ずエンジンのスイッチを完全に切り、刃の回転が完全に停止したことを確認してから、手袋をした手や棒で絡まった草を取り除く。',
            '刃が低速で回っている状態のまま、足で蹴って草を外す。',
            '機械を地面に強く叩きつけて衝撃で小石を落とす。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. SOP nomor satu saat bilah pisau kusut adalah mematikan mesin sepenuhnya dan menunggu putaran pisau berhenti total. Menendang pisau yang masih berputar (Pilihan 3) atau memutar paksa (Pilihan 1) sering menyebabkan amputasi jari atau cedera berat.',
          translation: 'Pilihlah penanganan yang benar apabila rumput atau kerikil tersangkut pada bilah mesin pemotong rumput.'
        }
      ],
      officialReference: {
        source: 'MAFF Agricultural Safety Promotion Division',
        agency: 'Ministry of Agriculture, Forestry and Fisheries (MAFF)',
        documentTitle: '農作業安全確認ガイドライン (Pedoman Verifikasi Keselamatan Operasional Kerja Tani Jepang)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: PERSIAPAN UJIAN MAFF, SILABUS & STRATEGI LOLOS
    // ------------------------------------------------------------------------
    {
      id: 'agri_ch5',
      sectorId: 'agriculture',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Panduan Ujian SSW Pertanian MAFF, Silabus & Strategi Lolos CBT',
      japaneseTitle: '農業技能測定試験の試験構成・出題基準と合格戦略',
      estimatedMinutes: 30,
      objectives: [
        'Memahami struktur resmi ujian Farming Skills Measurement Test (Teori CBT & Praktik Bergambar).',
        'Menguasai kisi-kisi soal Budidaya Tanaman (Kōshu) dan Peternakan (Chikusan).',
        'Mengenali kata kunci jebakan dalam lembar ujian dan strategi manajemen waktu tes.'
      ],
      contentExplanation: `
Ujian Keterampilan Pertanian SSW (*Nōgyō Ginō Sokutei Shiken* / 農業技能測定試験) adalah ujian berstandar nasional yang diselenggarakan oleh National Chamber of Agriculture di bawah wewenang MAFF (*Nōrin Suisanshō* / 農林水産省). Ujian ini diselenggarakan di Jepang dan beberapa negara mitra melalui sistem berbasis komputer (Computer-Based Testing / CBT).

### 1. Format & Komposisi Ujian (試験の構成):
Ujian dibagi menjadi dua sesi terintegrasi yang harus diselesaikan dalam waktu total sekitar 60 menit:
1. **Ujian Teori Tertulis (学科試験 - Gakka Shiken)**:
   - Menilai pengetahuan mendasar mengenai:
     - Keselamatan Kerja & Higiene Lingkungan (30–35%).
     - Fisiologi, Pembibitan, dan Budidaya Tanaman (35%).
     - Manajemen Pascapanen, Sortir Kualitas, dan Mekanisasi (30%).
   - Tipe soal: Pilihan ganda 3–4 opsi atau penentuan Benar/Salah (*Seigo Hantei* / ○×).
2. **Ujian Praktik CBT (実技試験 - Jitsugi Shiken)**:
   - Meskipun dinamai "praktik", ujian ini tetap dilakukan di layar komputer melalui **soal simulasi bergambar dan foto nyata (イラスト・写真問題)**.
   - Peserta akan diminta:
     - Mengidentifikasi nama alat/mesin yang tepat berdasarkan gambar.
     - Menentukan urutan langkah pemangkasan pucuk (*tekshin*) atau penyetekan bibit.
     - Memilih tindakan pencegahan kecelakaan traktor pada gambar posisi lereng miring.
     - Mengidentifikasi sayur/buah yang memenuhi standar kualitas panen (*shukka kijun*) dibandingkan yang cacat (*kikaku-gai*).

### 2. Standar Kelulusan (合格基準 - Gōkaku Kijun):
- Ambang batas nilai kelulusan adalah **minimal 60%** untuk masing-masing bagian Teori dan Praktik.
- Peserta wajib lulus Ujian Keterampilan ini AND lulus Ujian Bahasa Jepang (JFT-Basic A2 atau JLPT minimal N4) untuk memenuhi syarat pengajuan visa SSW 1.

### 3. Strategi Menjawab Soal & Jebakan Ujian (合格のための攻略法):
- **Waspadai Kata Mutlak**: Pilihan jawaban yang mengandung kata *"kanarazu"* (selalu/pasti), *"subete"* (seluruhnya), atau *"zenzen ... nai"* (sama sekali tidak...) seringkali merupakan pernyataan yang salah, karena proses agrikultur selalu bergantung pada kondisi alam dan varietas tanaman.
- **Prinsip Keselamatan (K3) Tanpa Kompromi**: Setiap soal yang menyangkut keselamatan kerja selalu menuntut mematikan mesin, memakai APD lengkap, dan melapor ke supervisor. Pilihan yang membolehkan mengabaikan APD demi mengejar kecepatan kerja pasti SALAH.
- **Pahami Siklus Hidup Tanaman**: Pelajari urutan kronologis: Penyemaian Benih (*Hashu*) ➔ Pembibitan (*Ikubyō*) ➔ Penanaman Tetap (*Teishoku*) ➔ Perawatan/Pemupukan (*Tsuihi*) ➔ Pemanenan (*Shūkaku*) ➔ Penyortiran Mutu (*Senbetsu*).
      `,
      keyTerms: [
        {
          japanese: '学科試験',
          kana: 'がっかしけん',
          romaji: 'gakka shiken',
          indonesian: 'Ujian teori / tertulis CBT',
          note: 'Menguji pengetahuan keselamatan, agronomi, dan pengelolaan pascapanen.'
        },
        {
          japanese: '実技試験',
          kana: 'じつぎしけん',
          romaji: 'jitsugi shiken',
          indonesian: 'Ujian praktik berbasis simulasi gambar/foto di layar komputer',
          note: 'Menguji identifikasi alat, deteksi bahaya, dan grading mutu produk.'
        },
        {
          japanese: '合格基準',
          kana: 'ごうかくきじゅん',
          romaji: 'gōkaku kijun',
          indonesian: 'Standar kelulusan ujian (passing grade)',
          note: 'Ambang batas kelulusan ditetapkan pada skor minimal 60%.'
        },
        {
          japanese: '正誤判定',
          kana: 'せいごはんてい',
          romaji: 'seigo hantei',
          indonesian: 'Penentuan benar (○) atau salah (×)',
          note: 'Format soal yang sering muncul pada tes teori MAFF CBT.'
        },
        {
          japanese: '出題基準',
          kana: 'しゅつだいきじゅん',
          romaji: 'shutsudai kijun',
          indonesian: 'Silabus / kriteria penyusunan materi soal resmi',
          note: 'Diterbitkan langsung oleh National Chamber of Agriculture.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Bedah Soal Kasus Bergambar Penanganan Traktor di Pematang Miring',
        scenario: 'Aris, peserta pelatihan SSW Pertanian di LPK, sedang mendiskusikan contoh soal simulasi bergambar mengenai traktor yang menuruni lereng miring bersama instrukturnya.',
        dialogue: [
          {
            speaker: 'Sensei (Instruktur LPK)',
            role: 'Instruktur Pelatihan',
            japanese: 'アリスさん、このイラスト問題を見てください。「トラクターで急な坂道を下るときは、スピードを上げるためにクラッチを踏んでニュートラルで下りる」という記述は、○ですか、×ですか？',
            kana: 'アリスさん、この いらすともんだいを みてください。「とらくたーで きゅうな さかみちを くだるときは、すぴーどを あげるために くらっちを ふんで にゅーとらるで くだる」という きじゅつは、まるですか、ばつですか？',
            romaji: 'Arisu-san, kono irasuto mondai wo mite kudasai. "Torakutaa de kyuu na sakamichi wo kudaru toki wa, supiido wo ageru tame ni kuracchi wo funde nyuutoraru de kudaru" to iu kijutsu wa, maru desu ka, batsu desu ka?',
            indonesian: 'Aris, coba perhatikan soal bergambar ini. Pernyataan "Saat menuruni jalan lereng curam dengan traktor, tekan kopling dan turun dalam posisi transmisi netral untuk mempercepat laju" itu benar (○) atau salah (×)?'
          },
          {
            speaker: 'Aris (Siswa SSW)',
            role: 'Calon Pekerja SSW',
            japanese: 'それは×（間違い）です！クラッチを切ってニュートラルにすると、エンジンブレーキが効かなくなって暴走し、転落する危険があります。低速ギアに入れてゆっくり下りるのが正しいです。',
            kana: 'それは ばつ（まちがい）です！くらっちを きって にゅーとらるに すると、えんじんぶれーきが きかなくなって ぼうそうし、てんらくする きけんが あります。ていそくぎあに いれて ゆっくり くだるのが ただしいです。',
            romaji: 'Sore wa batsu (machigai) desu! Kuracchi wo kitte nyuutoraru ni suru to, enjin bureeki ga kikanaku natte bousou shi, tenraku suru kiken ga arimasu. Teisoku gia ni irete yukkuri kudaru no ga tadashii desu.',
            indonesian: 'Itu SALAH (×)! Jika kopling ditekan ke posisi netral, engine brake tidak akan bekerja sehingga traktor bisa meluncur tak terkendali dan terjatuh. Prosedur yang benar adalah memasang gigi rendah dan turun perlahan.'
          },
          {
            speaker: 'Sensei (Instruktur LPK)',
            role: 'Instruktur Pelatihan',
            japanese: '完璧な解答です！本試験のイラスト問題でも、このような安全操作の理由まで理解していると絶対に間違えませんよ。',
            kana: 'かんぺきな かいとうです！ほんしけんの いらすともんだいでも、このような あんぜんそうさの りゆうまで りかいしていると ぜったいに まちがえませんよ。',
            romaji: 'Kanpeki na kaitou desu! Hon-shiken no irasuto mondai demo, kono you na anzen sousa no riyuu made rikai shite iru to zettai ni machigaemasen yo.',
            indonesian: 'Jawaban sempurna! Di ujian resmi nanti, bila kamu memahami alasan di balik setiap SOP keselamatan kerja seperti ini, kamu pasti tidak akan terkecoh.'
          }
        ],
        takeaway: 'Memahami alasan teknis keselamatan di balik setiap pengoperasian mesin tani adalah kunci meraih skor maksimal pada soal kasus bergambar CBT.'
      },
      visualDiagram: {
        title: 'Struktur Distribusi Soal Ujian SSW Pertanian (MAFF CBT)',
        type: 'cards',
        items: [
          {
            label: 'Ujian Teori Tertulis (学科)',
            description: 'K3 & Keselamatan Kerja (35%), Fisiologi & Budidaya (35%), Pascapanen & Mesin (30%).',
            badge: 'Pilihan Ganda / ○×'
          },
          {
            label: 'Ujian Praktik CBT (実技)',
            description: 'Identifikasi Alat/Hama, Urutan Langkah Tanam/Panen, Standar Mutu Sayur/Buah, Deteksi Bahaya.',
            badge: 'Simulasi Gambar'
          },
          {
            label: 'Kriteria Kelulusan',
            description: 'Wajib mencapai skor minimal 60% pada masing-masing bagian Teori dan Praktik.',
            badge: 'Ambang Skor ≥ 60%'
          }
        ]
      },
      importantPoints: [
        'Ujian diselenggarakan secara CBT di komputer dengan tampilan aksara Jepang berfurisgana sederhana.',
        'Pahami istilah teknis pertanian dalam Kanji dan Kana agar tidak salah membaca opsi pilihan.',
        'Soal K3 menyumbang porsi kelulusan yang menentukan; jangan pernah memilih opsi kompromi yang mengabaikan keselamatan demi kecepatan kerja.',
        'Manfaatkan waktu ujian dengan cermat: selesaikan soal yang mudah terlebih dahulu dan periksa kembali nomor yang ragu.'
      ],
      summary: 'Lolos ujian SSW Pertanian membutuhkan penguasaan nomenklatur teknis pertanian, pemahaman mendalam tentang keselamatan kerja mesin dan pestisida, serta kecermatan menganalisis soal studi kasus bergambar.',
      practiceQuestions: [
        {
          id: 'agri_ch5_q1',
          questionNumber: 1,
          questionText: '農業技能測定試験の試験形式に関する説明として、正しいものを一つ選びなさい。',
          situation: 'Format dan tata cara pelaksanaan ujian Farming Skills Measurement Test MAFF.',
          options: [
            '学科試験のみが行われ、実技に関する問題は一切出題されない。',
            '実技試験は、実際の農場へ行ってトラクターを運転する実技実演のみで行われる。',
            '学科試験および実技試験の双方が、コンピュータ画面を使用したCBT方式（写真・イラスト問題等）で実施される。',
            '合格基準は満点の90％以上であり、一度でも間違えると不合格となる。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Ujian SSW Pertanian dilaksanakan dengan metode CBT di komputer, di mana ujian praktik diujikan dalam bentuk soal studi kasus gambar/foto (Pilihan 3). Pilihan 1 & 2 salah. Pilihan 4 salah karena passing grade adalah 60%, bukan 90%.',
          translation: 'Pilihlah satu pernyataan yang benar mengenai format pelaksanaan Farming Skills Measurement Test.'
        },
        {
          id: 'agri_ch5_q2',
          questionNumber: 2,
          questionText: 'トラクターで急な坂道を下る際の安全な運転操作として、最も適切なものを一つ選びなさい。',
          situation: 'Operasi keselamatan saat menuruni jalan curam menggunakan traktor pertanian.',
          options: [
            'クラッチペダルを踏み込んだままにして、惰性で一気に下りる。',
            'ギアを低速（ローギア）に入れ、エンジンブレーキを利かせながらゆっくりと前進または後進で下りる。',
            '速度を落とすため、左右の片側ブレーキだけを強く踏み込んで急旋回する。',
            'シートベルトは脱出の邪魔になるため、外した状態で走行する。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Saat menuruni lereng curam, traktor harus berada di gigi rendah (low gear) agar engine brake menahan laju kendaraan secara konstan. Menekan kopling (Pilihan 1) atau menginjak rem sepihak (Pilihan 3) akan menyebabkan traktor meluncur bebas atau terbalik seketika.',
          translation: 'Pilihlah pengoperasian mengemudi yang paling tepat dan aman saat menuruni lereng curam dengan traktor.'
        }
      ],
      officialReference: {
        source: 'National Chamber of Agriculture (全国農業会議所)',
        agency: 'Ministry of Agriculture, Forestry and Fisheries (MAFF / 農林水産省)',
        documentTitle: '農業特定技能測定試験 試験基準・出題範囲 (Standar Pengujian & Silabus Resmi SSW Pertanian)'
      }
    }
  ],

  // ==========================================================================
  // SIMULASI RESMI UJIAN CBT SSW PERTANIAN (7 SOAL KOMPREHENSIF)
  // ==========================================================================
  examSimulation: {
    title: 'Simulasi Resmi Ujian Keterampilan Pertanian SSW (Farming Skills Measurement Test)',
    subtitle: 'Standar Ujian Teori & Praktik CBT MAFF Jepang (Lengkap 7 Soal Komprehensif Berbobot Tinggi)',
    timeMinutes: 20,
    passingScorePercentage: 60,
    questions: [
      {
        id: 'agri_sim_q1',
        questionNumber: 1,
        questionText: 'ビニールハウス内での作業中における熱中症（ねっちゅうしょう）の予防策として、最も適切なものを一つ選びなさい。',
        situation: 'Pencegahan sengatan panas (heat stroke) saat bekerja di dalam rumah kaca plastik.',
        options: [
          '喉が渇いたと感じるまでは、水分を補給する必要はない。',
          'ハウス内の換気を定期的に行い、喉の渇きを感じる前にこまめに水分と適度な塩分を補給する。',
          '汗をかかないようにするため、朝から一切水分を飲まずに作業する。',
          '気温が40度を超えても、予定した収穫作業が終わるまで休憩は取らない。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Di lingkungan panas seperti greenhouse, rasa haus muncul setelah tubuh mengalami defisit cairan. Oleh karena itu, ventilasi berkala dan asupan air serta garam secara teratur sebelum haus adalah aturan nomor satu pencegahan heat stroke.',
        translation: 'Pilihlah tindakan pencegahan sengatan panas (heat stroke) yang paling tepat saat bekerja di dalam rumah kaca vinil.'
      },
      {
        id: 'agri_sim_q2',
        questionNumber: 2,
        questionText: 'トラクターに装着された安全フレーム（ROPS）とシートベルトに関する記述として、正しいものを一つ選びなさい。',
        situation: 'Fungsi rangka pelindung kabin (ROPS) dan sabuk pengaman traktor.',
        options: [
          '安全フレームがあれば、万が一トラクターが転覆してもシートベルトを締める必要は全くない。',
          '安全フレームは日除けのためだけの屋根であり、機体の転覆時に乗員を守る強度はない。',
          '安全フレームとシートベルトを併用することで、トラクター転覆時に運転者が機体の下敷きになるのを防ぐことができる。',
          '平坦な畑で作業する場合は、安全フレームを折りたたんだまま走行することが推奨される。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. ROPS (Roll-Over Protective Structure) dirancang menahan beban bodi traktor saat terguling, dan sabuk pengaman memastikan operator tetap berada di dalam ruang perlindungan kabin sehingga tidak terlempar dan tertindih mesin.',
        translation: 'Pilihlah pernyataan yang benar mengenai rangka keselamatan (ROPS) dan sabuk pengaman pada traktor.'
      },
      {
        id: 'agri_sim_q3',
        questionNumber: 3,
        questionText: '農薬を散布する際の作業方法として、最も適切なものを一つ選びなさい。',
        situation: 'Prosedur penyemprotan bahan kimia agrokimia yang tepat dan aman.',
        options: [
          '風に向かって散布すると農薬が遠くまで届くため、常に風下から風上に向かって散布する。',
          '農薬の効果を高めるため、ラベルに記載された規定の希釈倍率よりも極端に濃い濃度で作る。',
          '保護メガネ、防毒（防護）マスク、不浸透性手袋などの保護具を正しく着用し、風上から風下に向かって散布する。',
          '散布作業中に喉が渇いたときは、保護具をつけたまま手袋で口元を拭いて水を飲む。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Standar baku penyemprotan pestisida mewajibkan pemakaian APD lengkap dan posisi berdiri di atas angin (風上 - Kazakami) menghadap ke arah bawah angin (風下 - Kazashimo) agar kabut kimia tidak terhirup atau menempel di tubuh.',
        translation: 'Pilihlah cara kerja yang paling tepat saat melakukan penyemprotan bahan kimia pertanian (pestisida).'
      },
      {
        id: 'agri_sim_q4',
        questionNumber: 4,
        questionText: '作物の栽培管理における「間引き（まびき）」の目的として、最も適切なものを一つ選びなさい。',
        situation: 'Tujuan agronomi dari tindakan penjarangan tanaman (Mabiki).',
        options: [
          '生育の良い元気な苗を選び残し、過密になった苗を抜き取ることで、残した作物の日当たりや風通しを良くして健全に育てるため。',
          '畑に生えている雑草をすべて抜いて堆肥にするため。',
          '果樹の伸びすぎた太い枝をノコギリで切り落とすため。',
          '土壌の水分をすべて蒸発させて、土をカラカラに乾燥させるため。'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. 間引き (Mabiki) adalah mencabut bibit muda yang terlalu rapat atau tumbuh kerdil, menyisakan bibit yang paling sehat agar mendapatkan ruang akar, sinar matahari, dan sirkulasi angin yang optimal. Pilihan 2 adalah penyiangan gulma (Kusatori), Pilihan 3 adalah pemangkasan dahan (Sentei).',
        translation: 'Pilihlah satu tujuan yang paling tepat dari tindakan "Penjarangan (Mabiki)" dalam budidaya tanaman.'
      },
      {
        id: 'agri_sim_q5',
        questionNumber: 5,
        questionText: '収穫後の野菜の品質管理と「選別（せんべつ）」に関する記述として、適切なものを一つ選びなさい。',
        situation: 'Manajemen mutu pascapanen dan penyortiran (Senbetsu) hasil panen sayuran.',
        options: [
          '病気や害虫被害がある野菜も、箱の底に隠せば出荷基準をクリアできる。',
          '市場の出荷基準に基づき、サイズ・重さ・形状・病害虫の有無などを確認して規格ごとに分別する。',
          '収穫した野菜は、鮮度を保つために真夏の直射日光が当たる場所に長時間放置しておく。',
          '泥がついた根菜類は、洗わずにそのまま濡れた段ボール箱に詰め込んで密閉する。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. 選別 (Senbetsu) adalah memilah hasil panen sesuai standar pengiriman (出荷基準 - Shukka Kijun) berdasarkan ukuran (S, M, L), bobot, kesempurnaan bentuk, dan bebas dari cacat/hama. Memasukkan sayur rusak (Pilihan 1) atau menjemur di bawah terik matahari (Pilihan 3) melanggar SOP pascapanen.',
        translation: 'Pilihlah pernyataan yang tepat mengenai manajemen mutu pascapanen dan "Penyortiran (Senbetsu)" sayuran.'
      },
      {
        id: 'agri_sim_q6',
        questionNumber: 6,
        questionText: '歩行型トラクター（耕うん機）の後進（バック）作業時に最も注意すべき事故として、適切なものを一つ選びなさい。',
        situation: 'Bahaya kecelakaan fatal yang paling sering terjadi saat memundurkan tiller/tombak traktor jalan.',
        options: [
          '運転者が後ろの壁や障害物と機械のハンドルとの間に挟まれる（挟まれ事故）。',
          '車体が急に空中に飛び上がって電線に引っかかる事故。',
          'タイヤが高速回転して火災が発生する事故。',
          '作業機のロータリーが突然外れて遠くへ飛んでいく事故。'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Pada traktor jalan (tiller/kōunki), bahaya terbesar saat berjalan mundur adalah operator terjepit di antara gagang pegangan (stang) dan pematang sawah, dinding, atau pohon di belakangnya (挟まれ事故 - Hasamare jiko).',
        translation: 'Pilihlah kecelakaan yang paling harus diwaspadai saat mengoperasikan traktor jalan (mesin pembajak dorong) dalam posisi mundur (back).'
      },
      {
        id: 'agri_sim_q7',
        questionNumber: 7,
        questionText: '作物の栄養素である「肥料の三要素」の組み合わせとして、正しいものを一つ選びなさい。',
        situation: 'Kombinasi tiga unsur hara makro utama (N-P-K) nutrisi tanaman dalam pemupukan.',
        options: [
          '窒素（N）・リン酸（P）・カリウム（K）',
          '酸素（O）・水素（H）・塩素（Cl）',
          '鉄（Fe）・銅（Cu）・亜鉛（Zn）',
          'カルシウム（Ca）・マグネシウム（Mg）・硫黄（S）'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Tiga unsur hara makro utama bagi pertumbuhan tanaman (肥料の三要素 - Hiryou no San-youso) adalah Nitrogen (窒素 - Chisso untuk daun/batang), Fosfor (リン酸 - Rinsan untuk bunga/buah), dan Kalium (カリウム - Kariumu untuk perakaran dan ketahanan vigor).',
        translation: 'Pilihlah kombinasi yang benar mengenai "Tiga Unsur Utama Pupuk" yang merupakan nutrisi esensial tanaman.'
      }
    ]
  }
};
