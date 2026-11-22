import { SswSectorData } from '../../types/ssw';

export const HOSPITALITY_SECTOR_DATA: SswSectorData = {
  id: 'hospitality',
  name: 'Akomodasi & Perhotelan (Hotel & Ryokan / 宿泊業)',
  japaneseName: '宿泊業',
  romajiName: 'Shukuhakugyou',
  iconName: 'Hotel',
  tagline: 'Mewujudkan seni keramahan Jepang (Omotenashi) berstandar dunia di Hotel Bisnis, Resort Mewah, dan Ryokan Tradisional.',
  badge: 'Interaksi Bahasa',
  badgeColor: 'text-purple-400 bg-purple-500/15 border-purple-500/30',
  overview: {
    workEnvironment: 'Bekerja di berbagai lini akomodasi Jepang meliputi Business Hotel (hotel efisien di pusat kota untuk perjalanan dinas), City Hotel berbintang (layanan komprehensif, jamuan, dan concierge), Resort Hotel (destinasi wisata alam atau pantai), serta Ryokan tradisional (penginapan khas Jepang berlantai tatami, onsen air panas alami, dan jamuan hidangan Kaiseki musiman).',
    mainDuties: [
      'Pelayanan Front Desk: Penerimaan tamu (Check-in), proses kepulangan (Check-out), registrasi identitas dan verifikasi paspor turis asing, penyerahan kunci kamar, serta pemberian informasi wisata lokal.',
      'Housekeeping & Penyiapan Kamar: Pembersihan unit bath, penggantian linen tempat tidur (bed making gaya duvet cover), penataan amenities kamar, pengelolaan limbah, dan penanganan Lost & Found.',
      'Pelayanan Makanan & Minuman (F&B / 料飲): Penyajian hidangan sarapan buffet hotel, penyajian makan malam tradisional Kaiseki di Ryokan (oleh staf Nakai), dan pelayanan restoran/lounge.',
      'Penanganan Barang Bawaan (Baggage Handling): Penitipan koper di cloak room, pengantaran barang bawaan ke kamar tamu, serta pengelolaan pengiriman koper via kurir (Takkyubin).',
      'Manajemen K3 & Tanggap Darurat: Prosedur evakuasi bencana kebakaran, gempa bumi, pengawasan keselamatan kolam/onsen, dan pertolongan pertama pada kondisi darurat medis tamu.'
    ],
    technicalExamName: 'Accommodation Industry Skills Measurement Test (宿泊業技能測定試験)',
    examOrganizer: 'Center for Accommodation Industry Examination (一般社団法人宿泊業技能試験センター) di bawah pengawasan Badan Pariwisata Jepang (Japan Tourism Agency / 観光庁 - MLIT)',
    passRequirement: 'Lulus Ujian Keterampilan Teknis Akomodasi CBT (skor ≥ 65%) + Ujian Kemampuan Bahasa Jepang JFT-Basic A2 atau JLPT N4.',
    salaryInsight: 'Gaji pokok rata-rata berkisar antara ¥185.000 hingga ¥245.000/bulan (fasilitas asrama/shataku sering disediakan gratis atau subsidi sangat murah di resort dan ryokan, ditambah tunjangan shift malam).'
  },
  officialReferences: [
    {
      title: 'Accommodation Industry Skills Measurement Test Official Guide (宿泊業技能測定試験 実施要綱)',
      agency: 'Japan Tourism Agency (観光庁) & Ministry of Land, Infrastructure, Transport and Tourism (MLIT)',
      description: 'Pedoman resmi standar kompetensi kerja bidang perhotelan dan akomodasi untuk tenaga kerja berketerampilan spesifik (SSW / Tokutei Ginou).'
    },
    {
      title: 'Textbook for Accommodation Industry Specified Skilled Worker (宿泊業特定技能学習用テキスト)',
      agency: 'Center for Accommodation Industry Examination (一般社団法人宿泊業技能試験センター)',
      description: 'Buku ajar kurikulum resmi 4 modul: Front Desk & Pelayanan Tamu, Restoran & F&B, Housekeeping & Sanitasi Kamar, serta K3 & Pencegahan Bencana.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG & LINGKUNGAN KERJA PERHOTELAN JEPANG
    // ------------------------------------------------------------------------
    {
      id: 'hospitality_ch1',
      sectorId: 'hospitality',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Ekosistem Industri Perhotelan Jepang & Jiwa Omotenashi',
      japaneseTitle: '宿泊業の基礎知識とおもてなしの心',
      estimatedMinutes: 25,
      objectives: [
        'Memahami klasifikasi dan perbedaan operasional antara Business Hotel, City Hotel, Resort Hotel, dan Ryokan Tradisional.',
        'Menghayati nilai luhur Omotenashi (おもてなし) dan prinsip Ichigo Ichie (一期一会) dalam melayani tamu.',
        'Mengenal ritme musiman perhotelan Jepang (Musim Ramai / Hanbouki vs Musim Tenang / Kansanki) dan etika pelayanan tanpa uang tip (no tipping culture).'
      ],
      contentExplanation: `
Industri akomodasi dan perhotelan (*Shukuhakugyou* / 宿泊業) di Jepang memiliki reputasi keunggulan kelas dunia yang berakar pada filosofi keramahan luhur bernama **Omotenashi (おもてなし)**.

Berbeda dengan konsep *customer service* ala Barat yang sering kali berbasis transaksi atau mengharapkan uang tip (*tipping*), di Jepang **sama sekali tidak ada budaya pemberian tip**. Memberikan pelayanan terbaik, tulus dari lubuk hati, dan penuh perhatian (*kikubari* / 気配り) dipandang sebagai kebanggaan profesi serta standar dasar penghormatan terhadap tamu.

Filosofi ini berakar dari tradisi upacara minum teh Jepang (*Chado* / 茶道) dengan semboyan **Ichigo Ichie (一期一会)**, yang berarti: *"Satu pertemuan sekali seumur hidup"*. Setiap interaksi dengan tamu diperlakukan seolah-olah itu adalah satu-satunya kesempatan berharga dalam hidup kita untuk membahagiakan mereka.

### Klasifikasi Fasilitas Akomodasi di Jepang:
1. **Business Hotel (ビジネスホテル)**:
   - Terletak strategis di dekat stasiun kereta api utama atau pusat perkantoran kota.
   - Dirancang ringkas, fungsional, dan efisien dengan harga terjangkau untuk pelancong bisnis tunggal maupun turis hemat.
   - Menggunakan mesin *check-in* mandiri otomatis (*jidou seisan-ki*) serta kamar tidur kompak (*compact single room*).
2. **City Hotel (シティホテル)**:
   - Hotel perkotaan bintang 4 hingga 5 berskala besar dengan fasilitas menyeluruh (*full service*).
   - Memiliki berbagai restoran internasional, bar, ruang perjamuan pesta (*banquet hall*), fasilitas resepsi pernikahan, dan layanan *concierge*.
3. **Resort Hotel (リゾートホテル)**:
   - Berlokasi di kawasan pariwisata alam spektakuler seperti Okinawa (pantai), Hokkaido (gunung salju/ski), atau Danau Kawaguchiko (Gunung Fuji).
   - Menitikberatkan pada fasilitas rekreasi santai: kolam renang, spa, lapangan golf, dan hiburan keluarga musiman.
4. **Ryokan Tradisional (旅館)**:
   - Penginapan berarsitektur tradisional Jepang yang sarat nilai estetika budaya.
   - Kamar tamu beralaskan lantai jerami tenun (*tatami* / 畳), pintu geser kertas (*shouji* / 障子), tempat tidur kasur lipat (*futon* / 布団), dan pemandian air panas alami (*onsen* / 温泉).
   - Pelayanan personal khas di mana seorang staf pemandu (*Nakai-san* / 仲居さん) melayani penyajian jamuan makan malam bergaya tradisional (*Kaiseki Ryouri* / 会席料理) langsung di dalam kamar tamu atau ruang jamuan khusus.

### Dinamika Musim Kunjungan (Seasonal Rhythm):
- **Musim Ramai (繁忙期 - Hanbouki)**: 
  - Liburan Golden Week (akhir April – awal Mei), Libur Musim Panas & Festival Obon (pertengahan Agustus), Musim Daun Merah (*Kouyou* / Oktober–November), serta Libur Akhir Tahun & Tahun Baru (*Nenmatsu Nenshi*).
  - Pada musim ini okupansi kamar mencapai 100% (*manshitsu*), menuntut koordinasi antar-departemen yang sangat cepat, stamina prima, dan ketenangan mental menghadapi lonjakan volume kerja.
- **Musim Tenang (閑散期 - Kansanki)**:
  - Biasanya berlangsung pada pertengahan Januari hingga Februari (pasca libur tahun baru) dan Juni (musim hujan *Tsuyu*).
  - Dimanfaatkan oleh manajemen untuk perawatan fasilitas mendalam (*deep cleaning*), pembaruan sistem operasional, dan pelatihan intensif staf.
      `,
      keyTerms: [
        {
          japanese: 'おもてなし',
          kana: 'おもてなし',
          romaji: 'omotenashi',
          indonesian: 'Keramahan tulus dari lubuk hati tanpa pamrih',
          note: 'Pilar utama budaya pelayanan dan etika perhotelan di seluruh Jepang.'
        },
        {
          japanese: '一期一会',
          kana: 'いちごいちえ',
          romaji: 'ichigo ichie',
          indonesian: 'Menghargai setiap pertemuan seumur hidup sekali',
          note: 'Prinsip memperlakukan setiap tamu dengan dedikasi penuh tanpa meremehkan interaksi sesaat.'
        },
        {
          japanese: '旅館',
          kana: 'りょかん',
          romaji: 'ryokan',
          indonesian: 'Penginapan tradisional Jepang',
          note: 'Identik dengan kamar tatami, kasur futon, onsen, dan hidangan Kaiseki.'
        },
        {
          japanese: '仲居',
          kana: 'なかい',
          romaji: 'nakai',
          indonesian: 'Staf pelayan kamar dan jamuan makan di Ryokan tradisional',
          note: 'Mengenakan kimono tradisional dan bertanggung jawab penuh atas kenyamanan tamu kamar.'
        },
        {
          japanese: '繁忙期',
          kana: 'はんぼうき',
          romaji: 'hanbouki',
          indonesian: 'Musim ramai tamu (High season / peak season)',
          note: 'Terjadi saat Golden Week, Obon, musim gugur, dan tahun baru.'
        },
        {
          japanese: '閑散期',
          kana: 'かんさんき',
          romaji: 'kansanki',
          indonesian: 'Musim sepi tamu (Low season / off season)',
          note: 'Periode okupansi rendah, dimanfaatkan untuk pelatihan dan perbaikan fasilitas.'
        },
        {
          japanese: '気配り',
          kana: 'きくばり',
          romaji: 'kikubari',
          indonesian: 'Kepekaan perhatian mengantisipasi kebutuhan orang lain',
          note: 'Menyediakan bantuan sebelum tamu memintanya secara eksplisit.'
        },
        {
          japanese: '下駄箱 / 玄関',
          kana: 'げたばこ / げんかん',
          romaji: 'getabako / genkan',
          indonesian: 'Rak sepatu / area pintu masuk melepas alas kaki luar',
          note: 'Di Ryokan dan onsen, tamu wajib melepas sepatu luar di area genkan.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Tamu Tiba Basah Kuyup Akibat Badai Hujan Mendadak di Ryokan',
        scenario: 'Sepasang suami istri lansia tiba di teras depan Ryokan Hakone saat badai hujan lebat mendadak turun dari pegunungan. Jas dan tas koper mereka basah kuyup. Staf front desk magang, Rian, berinisiatif menangani situasi didampingi Supervisor Yamada.',
        dialogue: [
          {
            speaker: 'Rian (Staf SSW)',
            role: 'Staf Front Desk',
            japanese: 'いらっしゃいませ！大変なお足元の中、お越しいただき誠にありがとうございます。',
            kana: 'いらっしゃいませ！たいへんな おあしもとの なか、おこしいただき まことに ありがとうございます。',
            romaji: 'Irasshaimase! Taihen na oashimoto no naka, okoshi itadaki makoto ni arigatou gozaimasu.',
            indonesian: 'Selamat datang! Terima kasih banyak telah berkenan datang di tengah cuaca buruk dan jalanan yang sulit ini.'
          },
          {
            speaker: 'Yamada-sama (Tamu)',
            role: 'Tamu Menginap',
            japanese: '駅から歩いている途中で急に土砂降りになってね…服もスーツケースもびしょ濡れだよ。',
            kana: 'えきから あるいている とちゅうで きゅうに どしゃぶりに なってね…ふくも すーつけーすも びしょぬれだよ。',
            romaji: 'Eki kara aruite iru tochuu de kyuu ni doshaburi ni natte ne... fuku mo suutsukeesu mo bishonure da yo.',
            indonesian: 'Dalam perjalanan jalan kaki dari stasiun tiba-tiba hujan badai deras... pakaian dan koper kami sampai basah kuyup begini.'
          },
          {
            speaker: 'Rian (Staf SSW)',
            role: 'Staf Front Desk',
            japanese: 'さようでございましたか。お身体が冷えて風邪を召されては大変です。まずはこちらの乾いた温かいフェイスタオルをお使いくださいませ。お荷物の水滴も丁寧にお拭き取りいたしますね。',
            kana: 'さようで ございましたか。おからだが ひえて かぜを めされては たいへんです。まずはこちらの かわいた あたたかい ふぇいすたおるを おつかいくださいませ。おにもつの すいてきも ていねいに おふきとり いたしますね。',
            romaji: 'Sayou de gozaimashita ka. Okarada ga hiete kaze wo mesarete wa taihen desu. Mazu wa kochira no kawaita atatakai feisutaoru wo otsukai kudasaimase. Onimotsu no suiteki mo teinei ni ofukitori itashimasu ne.',
            indonesian: 'Ya ampun, sungguh menyusahkan sekali ya Tuan. Bahaya sekali jika badan Anda kedinginan hingga masuk angin. Pertama-tama, silakan gunakan handuk kering hangat ini. Tetesan air di koper Anda pun izin kami lap hingga kering ya.'
          },
          {
            speaker: 'Supervisor Yamada',
            role: 'Manajer Front Office',
            japanese: 'リアンさん、素晴らしい機転ですね。畳のお部屋を水滴で濡らさない配慮と、お客様のお身体への気遣いこそが「おもてなし」の本質です。',
            kana: 'リアンさん、すばらしい きてんですよね。たたみの おへやを すいてきで ぬらさない はいりょと、おきゃくさまの おからだへの きづかいこそが 「おもてなし」の ほんしつです。',
            romaji: 'Rian-san, subarashii kiten desu ne. Tatami no oheya wo suiteki de nurasanai hairyo to, okyakusama no okarada e no kizukai koso ga "omotenashi" no honshitsu desu.',
            indonesian: 'Rian, kepekaan tindakan yang sangat luar biasa. Menjaga agar lantai kamar tatami tidak basah oleh tetesan koper dan mendahulukan kesehatan tamu adalah esensi sejati dari Omotenashi.'
          }
        ],
        takeaway: 'Omotenashi bukan sekadar hafalan kalimat formal, melainkan kemampuan membaca situasi secara spontan (kikubari) untuk mendahulukan keselamatan, kenyamanan, dan martabat tamu sebelum mereka meminta.'
      },
      visualDiagram: {
        title: 'Perbandingan Karakteristik 4 Jenis Fasilitas Akomodasi di Jepang',
        type: 'cards',
        items: [
          {
            label: '1. Business Hotel (ビジネスホテル)',
            description: 'Kamar kompak fungsional, mesin pembayaran otomatis, lokasi dekat stasiun, harga terjangkau, mayoritas tamu pebisnis dan pelancong mandiri.',
            badge: 'Efisiensi Praktis'
          },
          {
            label: '2. City Hotel (シティホテル)',
            description: 'Fasilitas mewah layanan lengkap (full service), ragam restoran internasional, banquet pernikahan, concierge, dan ruang pertemuan bisnis luas.',
            badge: 'Layanan Bintang 4-5'
          },
          {
            label: '3. Ryokan Tradisional (旅館)',
            description: 'Nuansa arsitektur budaya Jepang, lantai tatami, kasur futon, onsen air panas alami, staf Nakai berkimono, dan santapan adiluhung Kaiseki.',
            badge: 'Budaya & Tradisi'
          },
          {
            label: '4. Resort Hotel (リゾートホテル)',
            description: 'Berada di destinasi wisata alam (pantai, gunung ski, danau), mengutamakan pengalaman rekreasi keluarga, spa, dan liburan musim panas/dingin.',
            badge: 'Wisata & Liburan'
          }
        ]
      },
      importantPoints: [
        'Di industri perhotelan Jepang sama sekali tidak berlaku uang tip (tipping); jangan sekali-kali meminta atau menunjukkan gestur mengharapkan uang tip dari tamu.',
        'Saat bertugas di Ryokan tradisional, sepatu luar wajib dilepas di genkan dan tamu beralih mengenakan slipper. Saat menginjak lantai tatami, slipper pun harus dilepas.',
        'Pada musim ramai (Hanbouki) seperti Golden Week dan Obon, koordinasi cepat antar-staf front desk, restoran, dan housekeeping menjadi penentu kepuasan tamu.'
      ],
      summary: 'Industri perhotelan Jepang menyatukan efisiensi operasional mutakhir dengan tradisi adiluhung Omotenashi. Staf SSW dituntut menguasai karakteristik berbagai tipe akomodasi, bersikap proaktif mengantisipasi kebutuhan tamu tanpa pamrih tip, dan menjaga keharmonisan kerja tim pada musim padat.',
      practiceQuestions: [
        {
          id: 'hospitality_ch1_q1',
          questionNumber: 1,
          questionText: '日本の宿泊業における「おもてなし」の心構えとして、最も適切なものを一つ選びなさい。',
          situation: 'Prinsip dasar filosofi keramahan Omotenashi dalam industri akomodasi Jepang.',
          options: [
            '多額のチップ（心づけ）をくれたお客様に対してだけ、特別なサービスを提供すること。',
            'お客様から頼まれる前にその気持ちを察し、見返りを求めずに誠心誠意尽くすこと。',
            'マニュアルに書いてあることだけを機械的に話し、それ以上の対応は断ること。',
            '外国人観光客と日本人観光客で、あからさまに接客の態度を変えること。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Inti dari Omotenashi (おもてなし) adalah melayani dengan tulus dari hati, mengantisipasi kebutuhan tamu sebelum diminta (kikubari), dan tanpa mengharapkan imbalan tip. Pilihan 1, 3, dan 4 bertentangan dengan prinsip etika perhotelan Jepang.',
          translation: 'Pilihlah satu pernyataan yang paling tepat mengenai sikap dasar "Omotenashi" dalam industri perhotelan Jepang.'
        },
        {
          id: 'hospitality_ch1_q2',
          questionNumber: 2,
          questionText: '日本の伝統的な「旅館（りょかん）」の特徴として、正しいものを一つ選びなさい。',
          situation: 'Karakteristik khas penginapan Ryokan tradisional dibanding hotel modern.',
          options: [
            '客室内でも土足（靴を履いたまま）で過ごすのが原則である。',
            '畳（たたみ）の部屋に布団（ふとん）を敷き、温泉や会席料理を提供する施設が多い。',
            'すべてのサービスが無人の自動精算機だけで完結し、スタッフは一切常駐しない。',
            '浴衣（ゆかた）を着て館内や大浴場を歩くことはマナー違反として厳禁されている。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Ryokan identik dengan kamar beralaskan tatami, tempat tidur kasur futon yang digelar, fasilitas pemandian onsen, serta jamuan hidangan Kaiseki. Mengenakan sepatu di kamar tatami (Pilihan 1) adalah hal terlarang, dan mengenakan yukata di dalam area ryokan justru merupakan kebiasaan yang lumrah.',
          translation: 'Pilihlah pernyataan yang benar mengenai karakteristik "Ryokan" tradisional Jepang.'
        }
      ],
      officialReference: {
        source: 'Japan Tourism Agency (JTA) & Center for Accommodation Industry Examination',
        agency: 'Ministry of Land, Infrastructure, Transport and Tourism (国土交通省観光庁)',
        documentTitle: '宿泊業技能測定試験 学習用テキスト 第1章 宿泊業の基本概念とおもてなし'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: KOSAKATA KHUSUS PEKERJAAN & SITUASI KERJA
    // ------------------------------------------------------------------------
    {
      id: 'hospitality_ch2',
      sectorId: 'hospitality',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Kosakata Esensial Front Desk, Housekeeping, Amenities & Reservasi',
      japaneseTitle: 'フロント・客室清掃・アメニティ・予約業務の専門用語',
      estimatedMinutes: 30,
      objectives: [
        'Menguasai kosakata spesifik front desk: tipe kamar, status reservasi, dan administrasi check-in/out.',
        'Menghafal nama linen tempat tidur, peralatan housekeeping, dan fasilitas unit bath.',
        'Memahami istilah amenities kamar tamu dan perlengkapan inventaris sewa (rental goods).'
      ],
      contentExplanation: `
Operasional hotel dan ryokan menuntut presisi bahasa yang tinggi. Kesalahan memahami istilah kamar atau status reservasi dapat berakibat fatal seperti pemesanan ganda (*double booking*) atau keluhan tamu karena kamar tidak sesuai preferensi.

### 1. Front Desk & Manajemen Reservasi:
- **Tipe Kamar (客室タイプ)**:
  - **Single Room (シングル)**: Kamar untuk 1 orang dengan 1 tempat tidur tunggal.
  - **Semi-Double (セミダブル)**: Kamar dengan 1 tempat tidur berukuran antara single dan double (lebar sekitar 120–140 cm), sering dijual untuk 2 orang dengan harga ekonomis.
  - **Double Room (ダブル)**: Kamar untuk 2 orang dengan 1 tempat tidur ukuran besar (queen/king bed).
  - **Twin Room (ツイン)**: Kamar untuk 2 orang dengan 2 tempat tidur terpisah. Sangat populer bagi rekan kerja atau sahabat.
  - **Suite Room (スイート)**: Kamar mewah berpintu ganda dengan ruang tamu terpisah dari kamar tidur.
  - **Washitsu (和室)**: Kamar bergaya tradisional beralaskan lantai tatami tempat menggelar kasur futon.
  - **Wayoushitsu (和洋室)**: Kamar perpaduan antara tempat tidur kasur barat dengan area ruang duduk lantai tatami.
- **Status Reservasi & Tamu**:
  - **Man-shitsu (満室)**: Seluruh kamar terisi penuh (*No vacancy*).
  - **Kuu-shitsu (空室)**: Kamar kosong yang tersedia untuk dipesan (*Vacancy*).
  - **Walk-in (ウォークイン)**: Tamu yang datang langsung ke hotel meminta kamar tanpa melakukan reservasi terlebih dahulu.
  - **No-Show (ノーショー)**: Tamu yang memiliki reservasi namun tidak hadir tanpa pemberitahuan atau pembatalan.
  - **Late Check-out (レイトチェックアウト)**: Perpanjangan waktu keluar melebihi batas waktu reguler (biasanya dikenakan biaya tambahan / *enchou ryoukin*).
- **Dokumen Administrasi**:
  - **Shukuhaku Card (宿泊カード / 宿泊者名簿)**: Formulir pendaftaran registrasi tamu penginapan.
  - **Ryoushuusho (領収書)**: Kuitansi tanda pembayaran resmi yang mencantumkan nama perusahaan tamu (*Atena* / 宛名).

### 2. Housekeeping, Linen & Unit Bath:
- **Linen & Bed Making**:
  - **Shiitsu (シーツ)**: Lembaran kain sprei penutup kasur.
  - **Duvet Cover (デュベカバー)**: Sarung pembungkus selimut tebal bulu angsa/kapuk (*duvet*). Saat ini mayoritas hotel Jepang menggunakan gaya duvet (*duvet style*) karena lebih higienis dan rapi.
  - **Makura-kabaa (枕カバー / ピローケース)**: Sarung bantal tidur.
  - **Bed Pad (ベッドパッド)**: Alas pelindung kasur yang diletakkan di antara kasur utama dan sprei bawah.
  - **Moufu (毛布)**: Selimut tebal wol tambahan yang dipinjamkan saat tamu kedinginan.
- **Unit Bath & Kebersihan (ユニットバス・清掃用品)**:
  - **Unit Bath (ユニットバス)**: Kamar mandi prefabrikasi tahan air khas Jepang yang mengintegrasikan kloset toilet, wastafel (*senmendai*), dan bak mandi (*bathtub* / 浴槽) dalam satu ruang cetak kedap air.
  - **Towels**: *Basu taoru* (handuk mandi besar), *Feisu taoru* (handuk wajah/rambut sedang), *Basu matto* (keset handuk alas kaki keluar mandi).
  - **Duster / Zoukin (ダスター・雑巾)**: Kain lap microfiber khusus pembersih debu dan pengering tetesan air.
  - **Shoushuuzai (消臭剤)**: Semprotan penghilang bau tak sedap dan penyegar serat kain (seperti Febreze atau merek hotel khusus).
  - **Soujiki (掃除機)**: Mesin pengisap debu (*vacuum cleaner*) untuk karpet lantai kamar.

### 3. Amenities Kamar (客室アメニティ):
- Perlengkapan sekali pakai yang disediakan untuk tamu:
  - *Haburashi* (歯ブラシ / sikat gigi & pasta gigi)
  - *Higesori* (髭剃り / pisau cukur kumis)
  - *Burashi* (ヘアブラシ / sisir rambut)
  - *Surippa* (スリッパ / sandal hotel kamar)
  - *Yukata / Nemaki* (浴衣・寝巻き / baju tidur hotel)
  - *Denki kettoru* (電気ケトル / teko pemanas air listrik) & *Ocha setto* (teh hijau sachet).
      `,
      keyTerms: [
        {
          japanese: '満室',
          kana: 'まんしつ',
          romaji: 'manshitsu',
          indonesian: 'Kamar penuh (No vacancy)',
          note: 'Kondisi di mana tidak ada lagi kamar kosong yang dapat dijual.'
        },
        {
          japanese: '空室',
          kana: 'くうしつ',
          romaji: 'kuushitsu',
          indonesian: 'Kamar kosong (Vacancy)',
          note: 'Kamar yang siap dan tersedia untuk dihuni tamu.'
        },
        {
          japanese: '宿泊カード',
          kana: 'しゅくはくかーど',
          romaji: 'shukuhaku kaado',
          indonesian: 'Formulir pendaftaran registrasi tamu penginapan',
          note: 'Wajib diisi tamu saat check-in sesuai Undang-Undang Bisnis Penginapan Jepang.'
        },
        {
          japanese: '領収書',
          kana: 'りょうしゅうしょ',
          romaji: 'ryoushuusho',
          indonesian: 'Kuitansi tanda pembayaran resmi',
          note: 'Sering diminta tamu bisnis untuk klaim biaya dinas kantor (Atena).'
        },
        {
          japanese: 'ユニットバス',
          kana: 'ゆにっとばす',
          romaji: 'yunitto basu',
          indonesian: 'Unit bath (kamar mandi prefabrikasi toilet + wastafel + bak mandi)',
          note: 'Standar kamar mandi di hampir semua business hotel Jepang.'
        },
        {
          japanese: 'デュベカバー',
          kana: 'でゅべかばー',
          romaji: 'dyube kabaa',
          indonesian: 'Sarung duvet (sarung pembungkus selimut tebal ranjang)',
          note: 'Wajib diganti bersih setiap kali tamu check-out.'
        },
        {
          japanese: '禁煙室 / 喫煙室',
          kana: 'きんえんしつ / きつえんしつ',
          romaji: 'kin-enshitsu / kitsuenshitsu',
          indonesian: 'Kamar bebas rokok / Kamar boleh merokok',
          note: 'Wajib diverifikasi ketat agar tamu yang sensitif bau tidak komplain.'
        },
        {
          japanese: '延長料金',
          kana: 'えんちょうりょうきん',
          romaji: 'enchou ryoukin',
          indonesian: 'Biaya perpanjangan waktu menginap (Late check-out charge)',
          note: 'Biaya ekstra per jam jika tamu keluar melewati batas waktu check-out resmi.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Tamu Asing Meminta Tambahan Selimut & Pengaturan Suhu AC di Musim Dingin',
        scenario: 'Tamu asal Australia di kamar 712 menelepon front desk pada jam 21.30. Beliau kedinginan karena tidak mengerti cara menggunakan remote AC berhuruf kanji dan meminta tambahan selimut tebal.',
        dialogue: [
          {
            speaker: 'Dewi (Staf SSW)',
            role: 'Staf Front Desk',
            japanese: 'お電話ありがとうございます。フロントのデウィでございます。いかがなさいましたでしょうか。',
            kana: 'おでんわ ありがとうございます。ふろんとの でうぃで ございます。いかが なさいましたでしょうか。',
            romaji: 'Odenwa arigatou gozaimasu. Furonto no Dewi de gozaimasu. Ikaga nasaimashita deshou ka.',
            indonesian: 'Terima kasih telah menelepon. Dengan Dewi di bagian front desk. Ada yang bisa kami bantu, Tuan?'
          },
          {
            speaker: 'Smith-san (Tamu)',
            role: 'Tamu Asing Kamar 712',
            japanese: 'Good evening. The room is very cold. The AC remote only has Japanese kanji, and can I have an extra blanket?',
            kana: 'ぐっど いーぶにんぐ。ざ るーむ いず べりー こーるど。ざ えーしー りもーと おんりー はず じゃぱにーず かんじ、あんど きゃん あい はぶ あん えくすとら ぶらんけっと？',
            romaji: 'Good evening. The room is very cold. The AC remote only has Japanese kanji, and can I have an extra blanket?',
            indonesian: 'Selamat malam. Kamar ini sangat dingin. Remote AC-nya hanya ada huruf kanji Jepang, dan bisakah saya minta selimut tambahan?'
          },
          {
            speaker: 'Dewi (Staf SSW)',
            role: 'Staf Front Desk',
            japanese: 'かしこまりました、スミス様。すぐに温かい毛布（もうふ）をお部屋までお届けいたします。また、エアコンの「暖房（だんぼう）」設定の操作もご説明に参ります。少々お待ちくださいませ。',
            kana: 'かしこまりました、すみすさま。すぐに あたたかい もうふを おへやまで おとどけ いたします。また、えあこんの 「だんぼう」せっていの そうさも ごせつめいに まいります。しょうしょう おまちくださいませ。',
            romaji: 'Kashikomarimashita, Sumisu-sama. Sugu ni atatakai moufu wo oheya made otodoke itashimasu. Mata, eakon no "danbou" settei no sousa mo gosetsumei ni mairimasu. Shoushou omachi kudasaimase.',
            indonesian: 'Baik, dimengerti Tuan Smith. Kami akan segera membawakan selimut tebal hangat ke kamar Anda. Kami juga akan datang untuk menerangkan cara menyetel tombol pemanas (Danbou) pada AC Anda. Mohon berkenan menunggu sebentar.'
          },
          {
            speaker: 'Leader Sato',
            role: 'Supervisor Front Office',
            japanese: 'デウィさん、素晴らしい対応です。貸出備品（毛布）の手配だけでなく、根本的な原因である暖房操作のサポートを即座に提案できたのが完璧でした。',
            kana: 'でうぃさん、すばらしい たいようです。かしだしびひん（もうふ）の てはいだけでなく、こんぽんてきな げんいんである だんぼうそうさの さぽーとを そくざに ていあん できたのが かんぺきでした。',
            romaji: "Dewi-san, subarashii taiou desu. Kashidashi bihin (moufu) no tehai dake de naku, konponteki na gen'in de aru danbou sousa no sapooto wo sokuza ni teian dekita no ga kampeki deshita.",
            indonesian: 'Dewi, tindakan yang sangat bagus. Tidak hanya menyiapkan barang pinjaman (moufu), kamu juga langsung peka memberikan bantuan penyetelan pemanas AC sebagai solusi tuntas.'
          }
        ],
        takeaway: 'Menguasai istilah fasilitas kamar (moufu, danbou/reibou, enchou ryoukin) memastikan staf mampu merespons kebutuhan tamu dengan solusi cepat dan tuntas.'
      },
      visualDiagram: {
        title: 'Klasifikasi Tipe Kamar & Status Operasional Hotel',
        type: 'grid',
        items: [
          {
            label: 'Single Room (シングル)',
            description: '1 tempat tidur single (lebar 100-110 cm), kapasitas 1 orang tamu dewasa.',
            badge: 'Pebisnis Mandiri'
          },
          {
            label: 'Double Room (ダブル)',
            description: '1 tempat tidur besar (queen/king bed), kapasitas 2 orang dewasa dalam 1 kasur.',
            badge: 'Pasangan / Suami-Istri'
          },
          {
            label: 'Twin Room (ツイン)',
            description: '2 tempat tidur single yang terpisah berdampingan, kapasitas 2 orang dewasa.',
            badge: 'Teman / Kolega Bisnis'
          },
          {
            label: 'Washitsu (和室・畳部屋)',
            description: 'Kamar lantai tatami tradisional, tidur beralaskan kasur lipat futon khas Jepang.',
            badge: 'Nuansa Otentik Jepang'
          },
          {
            label: 'Cleaned Room (清掃済・点検済)',
            description: 'Status kamar yang sudah selesai dibersihkan, diinspeksi supervisor, dan siap huni.',
            badge: 'Ready for Guest'
          },
          {
            label: 'Out of Order (故障・点検中)',
            description: 'Kamar mengalami kerusakan fasilitas (AC rusak, pipa bocor) sehingga dilarang dijual.',
            badge: 'Blokir Penjualan'
          }
        ]
      },
      importantPoints: [
        'Konfirmasi jenis kamar bebas rokok (Kin-enshitsu / 禁煙室) vs kamar merokok (Kitsuenshitsu / 喫煙室) wajib dicek ulang saat check-in agar tidak memicu komplain tamu yang alergi tembakau.',
        'Sesuai ketentuan perundang-undangan Jepang (Ryokan Gyouhou), tamu WNA yang tidak bertempat tinggal di Jepang wajib memperlihatkan paspor asli untuk dicatat dan difotokopi.',
        'Kuitansi Ryoushuusho harus diisi nama perorangan atau nama perusahaan (Atena) yang jelas menggunakan tinta hitam dan tidak boleh ditulis sembarangan tanpa konfirmasi tamu.'
      ],
      summary: 'Kosakata perhotelan mencakup istilah operasional front desk, spesifikasi tipe kamar, penataan linen tempat tidur, hingga kelengkapan amenities kamar mandi. Penguasaan kosakata yang presisi menjadi fondasi pelayanan profesional tanpa salah paham.',
      practiceQuestions: [
        {
          id: 'hospitality_ch2_q1',
          questionNumber: 1,
          questionText: 'ホテルのフロントで、チェックアウト時にお客様から「会社に提出するため、宿泊代金の支払い証明書を会社名で作ってほしい」と頼まれた際に発行する書類として、最も適切なものはどれか。',
          situation: 'Permintaan dokumen bukti pembayaran resmi untuk diserahkan ke kantor perusahaan tamu.',
          options: [
            '宿泊カード（レジストレーションカード）',
            '領収書（りょうしゅうしょ）',
            '客室の鍵（ルームキー）',
            '館内の非常避難経路図'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Dokumen resmi bukti pelunasan biaya menginap yang diterbitkan untuk keperluan reimbursement kantor disebut 領収書 (Ryoushuusho). 宿泊カード (Pilihan 1) adalah formulir registrasi saat check-in.',
          translation: 'Pilihlah dokumen yang paling tepat untuk diterbitkan saat tamu saat check-out meminta surat bukti pelunasan atas nama perusahaannya.'
        },
        {
          id: 'hospitality_ch2_q2',
          questionNumber: 2,
          questionText: 'ホテルの客室タイプのうち、「1つの部屋に独立したシングルベッドが2台並べて設置されている部屋」を指す用語として、正しいものを一つ選びなさい。',
          situation: 'Istilah tipe kamar yang memiliki dua tempat tidur single terpisah.',
          options: [
            'シングルルーム（Single Room）',
            'ダブルルーム（Double Room）',
            'ツインルーム（Twin Room）',
            'ドミトリー（Dormitory）'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 benar. Twin Room (ツインルーム) memiliki dua tempat tidur terpisah. Double Room (Pilihan 2) memiliki satu tempat tidur berukuran besar untuk 2 orang.',
          translation: 'Pilihlah istilah yang tepat untuk kamar hotel yang memiliki dua ranjang single terpisah dalam satu ruangan.'
        }
      ],
      officialReference: {
        source: 'Center for Accommodation Industry Examination (一般社団法人宿泊業技能試験センター)',
        agency: 'MLIT & Japan Tourism Agency',
        documentTitle: '宿泊業技能測定試験 専門用語・語彙集 (フロント・客室整備編)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: KOMUNIKASI DI TEMPAT KERJA (KEIGO & PENANGANAN KOMPLAIN)
    // ------------------------------------------------------------------------
    {
      id: 'hospitality_ch3',
      sectorId: 'hospitality',
      category: 'komunikasi',
      chapterNumber: 3,
      title: 'Bahasa Hormat (Keigo) Perhotelan, Pelayanan Tamu & Manajemen Komplain',
      japaneseTitle: '接客の敬語表現・チェックイン／アウト対応・クレーム処理',
      estimatedMinutes: 30,
      objectives: [
        'Menguasai 7 Frasa Emas Pelayanan Perhotelan (接客の七大用語) dan teknik komunikasi telepon.',
        'Membedakan penerapan Sonkeigo (bahasa penghormatan tamu) dan Kenjougo (bahasa kerendahan hati staf).',
        'Menerapkan 4 langkah SOP penanganan komplain tamu (Kureemu Taiou) secara tenang, empatik, dan solutif.'
      ],
      contentExplanation: `
Di industri perhotelan Jepang, bahasa bukan hanya sarana bertukar informasi, melainkan cerminan rasa hormat dan martabat pelayanan. Penggunaan bahasa santai (*Tameguchi*) atau Keigo yang keliru (*Baito Keigo*) akan merusak citra profesional hotel berbintang.

### 1. Tujuh Frasa Emas Pelayanan Tamu (接客の七大用語):
Setiap staf wajib melafalkan frasa ini dengan intonasi ramah, tatapan mata hangat, dan postur tegak:
1. **いらっしゃいませ (Irasshaimase)**: Selamat datang.
2. **かしこまりました (Kashikomarimashita)**: Baik, dimengerti / siap laksanakan (Dilarang keras memakai kata *Wakarimashita* kepada tamu).
3. **少々お待ちくださいませ (Shoushou omachi kudasaimase)**: Mohon berkenan menunggu sebentar (Hindari kata *Chotto matte kudasai*).
4. **大変お待たせいたしました (Taihen omatase itashimashita)**: Terima kasih telah berkenan menunggu lama.
5. **恐れ入りますが… (Osoreirimasu ga...)**: Mohon maaf sebelumnya, bisakah... (Kata bantalan / *cushion word* sebelum meminta sesuatu dari tamu).
6. **申し訳ございません (Moushiwake gozaimasen)**: Mohon maaf yang sebesar-besarnya (Dilarang keras memakai kata *Gomen nasai* atau *Sumimasen*).
7. **ありがとうございました。またのお越しをお待ち申し上げております (Arigatou gozaimashita. Mata no okoshi wo omachi moushiagete orimasu)**: Terima kasih banyak. Kami sangat menantikan kunjungan Anda kembali.

### 2. Membedakan Sonkeigo vs Kenjougo:
- **Sonkeigo (尊敬語)**: Digunakan untuk memuliakan tindakan dan kondisi TAMU.
  - Berkata: *Ossharu* (おっしゃる) -> *"Tamu berkata: お客様がおっしゃいました"*.
  - Melihat: *Goran ni naru* (ご覧になる) -> *"Silakan melihat brosur ini: こちらのパンフレットをご覧ください"*.
  - Mengetahui: *Gozonji* (ご存知) -> *"Apakah Anda sudah tahu lokasi pemandian?: 大浴場の場所はご存知でしょうか"*.
  - Hadir/Pergi: *Irassharu / Oide ni naru* (いらっしゃる・おいでになる).
- **Kenjougo (謙譲語)**: Digunakan untuk merendahkan diri dan tindakan STAF secara sopan di hadapan tamu.
  - Berkata: *Moushiageru* (申し上げる) -> *"Saya sampaikan terima kasih: お礼申し上げます"*.
  - Melihat: *Haiken suru* (拝見する) -> *"Izin saya periksa paspor Anda: パスポートを拝見いたします"*.
  - Mengetahui: *Zonjite orimasu* (存じております) -> *"Saya mengetahui hal tersebut: 存じております"*.
  - Datang/Pergi: *Mairu / Ukagau* (参る・伺う) -> *"Saya akan segera datang ke kamar Anda: すぐにお部屋へ伺います"*.
  - Menerima uang: Hindari *Baito Keigo* seperti *"Sen-en kara oazukari shimasu"* (Salah). Kalimat yang benar adalah: *"Sen-en oazukari itashimasu"* (千円お預かりいたします - Benar).

### 3. Alur Pelayanan Check-in & Check-out:
- **Alur Check-in**:
  1. Menyambut tamu dengan salam hangat dan senyuman (*Egao*).
  2. Mengonfirmasi nama reservasi: *"O-namae wo ukagatte mo yoroshii deshou ka"*.
  3. Meminta pengisian formulir registrasi (*Shukuhaku Card*) dan fotokopi paspor bagi WNA.
  4. Menjelaskan detail fasilitas: Jam sarapan (*Choushoku jikan*), jam buka onsen, password Wi-Fi, dan tata tertib kamar.
  5. Menyerahkan kunci kamar (*Ruumu kii*) dengan kedua belah tangan (*Ryoute*), disertai sedikit membungkuk (*Ojigi*).
- **Alur Check-out**:
  1. Menyapa: *"Ohayou gozaimasu"* atau *"Konnichiwa"*.
  2. Menerima pengembalian kunci kamar dengan kedua tangan.
  3. Memeriksa apakah ada tagihan tambahan (*Tsuika seisan* / minibar, laundry, room service).
  4. Menyerahkan kuitansi (*Ryoushuusho*).
  5. Menanyakan apakah ada barang tertinggal: *"O-wasuremono wa gozaimasen ka"*.
  6. Melepas keberangkatan tamu dengan membungkuk hormat (*Keirei* 30° atau *Saikeirei* 45°).

### 4. Standar Operasional Penanganan Komplain (クレーム対応の4ステップ):
Ketika tamu marah atau kecewa atas fasilitas/pelayanan, staf wajib menerapkan 4 langkah emas:
- **Langkah 1: Permohonan Maaf Awal & Empati (申し訳ございません)**:
  Minta maaf atas rasa tidak nyaman atau kekecewaan emosional yang dirasakan tamu, tanpa langsung membantah atau mencari pembenaran.
- **Langkah 2: Mendengarkan Fakta Secara Aktif (傾聴・事実確認)**:
  Dengarkan tanpa memotong pembicaraan (*Keichou*). Catat nama tamu, nomor kamar, dan inti masalah secara objektif. Tunjukkan kontak mata dan anggukan santun (*Aizuchi*).
- **Langkah 3: Mengusulkan Solusi Nyata & Cepat (代替案の提示・迅速な是正)**:
  Berikan solusi konkret (contoh: mengganti kamar baru yang setara atau upgrade, mengirim teknisi dalam 5 menit, mengganti handuk baru).
- **Langkah 4: Ucapan Terima Kasih atas Masukan & Pelaporan Tim (お礼とホウレンソウ)**:
  Ucapkan terima kasih atas masukan berharga demi perbaikan layanan hotel, lalu segera laporkan kejadian secara lengkap (*Ho-Ren-So*) kepada Duty Manager atau Supervisor.
      `,
      keyTerms: [
        {
          japanese: 'かしこまりました',
          kana: 'かしこまりました',
          romaji: 'kashikomarimashita',
          indonesian: 'Baik, dimengerti / siap dilaksanakan',
          note: 'Frasa wajib pengganti wakarimashita saat berbicara dengan tamu.'
        },
        {
          japanese: '恐れ入りますが',
          kana: 'おそれいりますが',
          romaji: 'osoreirimasu ga',
          indonesian: 'Mohon maaf sebelumnya, bisakah...',
          note: 'Kata bantalan pembuka sebelum meminta dokumen atau konfirmasi ke tamu.'
        },
        {
          japanese: '申し訳ございません',
          kana: 'もうしわけございません',
          romaji: 'moushiwake gozaimasen',
          indonesian: 'Mohon maaf yang sebesar-besarnya',
          note: 'Permohonan maaf formal tingkat tertinggi; jangan gunakan sumimasen/gomen.'
        },
        {
          japanese: 'クレーム対応',
          kana: 'くれーむたいおう',
          romaji: 'kureemu taiou',
          indonesian: 'Penanganan keluhan / komplain tamu',
          note: 'Menangani ketidakpuasan tamu secara tenang, objektif, dan solutif.'
        },
        {
          japanese: '拝見いたします',
          kana: 'はいけんいたします',
          romaji: 'haiken itashimasu',
          indonesian: 'Saya izin melihat / memeriksa',
          note: 'Bentuk Kenjougo dari miru saat meminta paspor atau tiket tamu.'
        },
        {
          japanese: 'お手荷物をお預かりいたします',
          kana: 'おてにもつを おあずかりいたします',
          romaji: 'otenimotsu wo oazukari itashimasu',
          indonesian: 'Saya izin menyimpan / menitipkan barang koper Anda',
          note: 'Frasa standar saat menerima titipan koper tamu di cloak room.'
        },
        {
          japanese: '少々お待ちくださいませ',
          kana: 'しょうしょう おまちくださいませ',
          romaji: 'shoushou omachi kudasaimase',
          indonesian: 'Mohon berkenan menunggu sebentar',
          note: 'Diucapkan saat memeriksa data di komputer atau mengambil barang.'
        },
        {
          japanese: 'お辞儀',
          kana: 'おじぎ',
          romaji: 'ojigi',
          indonesian: 'Membungkuk hormat khas Jepang',
          note: 'Terdiri dari Eshaku (15° salam ringan), Keirei (30° sapaan resmi), dan Saikeirei (45° permohonan maaf/penghormatan tertinggi).'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Tamu Komplain Kamar Mandi Berbau Tak Sedap dan Handuk Basah Tertinggal',
        scenario: 'Tamu bernama Tanaka-sama baru saja check-in ke kamar 504. Lima menit kemudian, beliau turun ke front desk dengan wajah merah padam karena menemukan handuk basah bekas tamu sebelumnya tertinggal di gantungan pintu kamar mandi.',
        dialogue: [
          {
            speaker: 'Tanaka-sama (Tamu)',
            role: 'Tamu Menginap',
            japanese: 'フロント！504号室に入ったら、前の客が使った濡れたタオルが掛けたままだぞ！部屋もなんだかタバコ臭いし、どういう清掃管理をしてるんだ！',
            kana: 'ふろんと！504ごうしつに はいったら、まえのきゃくが つかった ぬれたたおるが かけたままだぞ！へやま なんだか たばこくさいし、どういう せいそうかんりを してるんだ！',
            romaji: 'Furonto! 504-goushitsu ni haittara, mae no kyaku ga tsukatta nureta taoru ga kaketa mama da zo! Heya mo nandaka tabako-kusai shi, dou iu seisou kanri wo shiterun da!',
            indonesian: 'Front desk! Begitu saya masuk kamar 504, ada handuk basah bekas tamu sebelumnya yang masih tergantung! Kamarnya juga agak bau rokok, bagaimana sih manajemen kebersihannya?!'
          },
          {
            speaker: 'Kevin (Staf SSW)',
            role: 'Staf Front Desk',
            japanese: '田中様、せっかくご到着いただきましたのに、大変ご不快な思いをおかけしてしまい、誠に申し訳ございません。',
            kana: 'たなかさま、せっかく ごとうちゃく いただきましたのに、たいへん ごふかいな おもいを おかけしてしまい、まことに もうしわけございません。',
            romaji: 'Tanaka-sama, sekkaku gotouchaku itadakimashita noni, taihen gofukai na omoi wo okake shiteshimai, makoto ni moushiwake gozaimasen.',
            indonesian: 'Tuan Tanaka, padahal Anda baru saja tiba untuk beristirahat, kami telah membuat Anda merasa sangat tidak nyaman. Kami memohon maaf yang sebesar-besarnya.'
          },
          {
            speaker: 'Tanaka-sama (Tamu)',
            role: 'Tamu Menginap',
            japanese: '長旅で疲れて早く横になりたいのに、これじゃ落ち着いて泊まれないよ。',
            kana: 'ながたびで つかれて はやく よこになりたいのに、これじゃ おちついて とまれないよ。',
            romaji: 'Nagatabi de tsukarete hayaku yoko ni naritai noni, kore ja ochitsuite tomarenai yo.',
            indonesian: 'Saya sangat lelah setelah perjalanan panjang dan ingin segera berbaring, kalau begini mana bisa menginap dengan tenang!'
          },
          {
            speaker: 'Kevin (Staf SSW)',
            role: 'Staf Front Desk',
            japanese: '仰る通りでございます。直ちに別のフロアの清潔な上層階禁煙ルーム（アップグレード客室）をご用意させていただきます。お荷物も私がお運びいたします。清掃不備につきましては、私どもで厳重に再発防止を徹底いたします。',
            kana: 'おっしゃるとおりで ございます。ただちに べつのふろんの せいけつな じょうそうかい きんえんるーむ（あっぷぐれーど きゃくしつ）を ごようい させていただきます。おにもつも わたしが おはこびいたします。せいそうふびにつきましては、私どもで げんじゅうに さいはつぼうしを てっていいたします。',
            romaji: "Ossharu toori de gozaimasu. Tadachi ni betsu no furoa no seiketsu na jousoukai kin'en ruumu (appugureedo kyakushitsu) wo goyoui sasete itadakimasu. Onimotsu mo watashi ga ohakobi itashimasu. Seisou fubi ni tsukimashite wa, watashidomo de genjuu ni saihatsu boushi wo tettei itashimasu.",
            indonesian: 'Benar sekali apa yang Tuan sampaikan. Detik ini juga kami siapkan kamar bebas rokok yang bersih di lantai atas (tipe kamar upgrade). Koper Anda pun akan saya bawakan langsung. Mengenai kelalaian kebersihan ini, manajemen kami berjanji akan melakukan investigasi dan evaluasi ketat.'
          },
          {
            speaker: 'Manager Suzuki',
            role: 'Duty Manager',
            japanese: 'ケビンさん、完璧な初動対応でした。言い訳や他部署のせいにせず、まず心から謝罪し、即座に快適な代替部屋を案内したことでお客様の怒りを鎮めることができました。',
            kana: 'けびんさん、かんぺきな しょどうたいようでした。いいわけや たぶしょの せいにせず、まず こころから しゃざいし、そくざに かいてきな だいたいべやを あんないしたことで おきゃくさまの いかりを しずめることが できました。',
            romaji: 'Kevin-san, kampeki na shodou taiou deshita. Iiwake ya tabusho no sei ni sezu, mazu kokoro kara shazaishi, sokuza ni kaiteki na daitai beya wo annai shita koto de okyakusama no ikari wo shizumeru koto ga dekimashita.',
            indonesian: 'Kevin, respons awal yang sempurna. Tanpa mencari alasan atau menyalahkan departemen lain, kamu tulus meminta maaf dan langsung memberikan solusi kamar pengganti yang nyaman sehingga emosi tamu mereda.'
          }
        ],
        takeaway: 'Ketika menghadapi komplain, jangan sekali-kali mendebat atau menyalahkan bagian housekeeping di depan tamu. Awali dengan permohonan maaf tulus atas ketidaknyamanan, berikan solusi konkrit tanpa penundaan, dan koordinasikan investigasi intern.'
      },
      visualDiagram: {
        title: '4 Langkah Emas SOP Penanganan Komplain Tamu Perhotelan',
        type: 'steps',
        items: [
          {
            label: '1. Permohonan Maaf & Empati Tulus (お詫びと共感)',
            description: 'Sampaikan "Moushiwake gozaimasen" atas rasa kecewa tamu tanpa mendebat siapa yang salah.',
            highlight: 'Moushiwake gozaimasen'
          },
          {
            label: '2. Mendengarkan Fakta Masalah (事実確認・傾聴)',
            description: 'Dengarkan aktif tanpa memotong pembicaraan, catat nomor kamar dan keluhan spesifik.',
            highlight: 'Keichou'
          },
          {
            label: '3. Menawarkan Solusi Cepat & Nyata (迅速な代替案の提示)',
            description: 'Sediakan solusi konkret: pembersihan ulang segera, ganti kamar upgrade, atau perbaikan fasilitas.',
            highlight: 'Kaiketsusaku'
          },
          {
            label: '4. Ucapan Terima Kasih & Laporan Tim (お礼とホウレンソウ)',
            description: 'Sampaikan terima kasih atas masukan berharga dan buat catatan laporan Ho-Ren-So ke supervisor.',
            highlight: 'Ho-Ren-So'
          }
        ]
      },
      importantPoints: [
        'Dilarang keras memakai kata "Sumimasen", "Gomen nasai", atau "Wakarimashita" saat melayani tamu hotel; gunakan "Moushiwake gozaimasen" dan "Kashikomarimashita".',
        'Saat menyerahkan kunci kamar, kartu kredit, uang kembalian, atau paspor, wajib gunakan kedua belah tangan (ryoute) dengan siku tertutup rapi.',
        'Jika terjadi situasi komplain yang memanas di lobi ramai, ajak tamu dengan santun ke area yang lebih tenang atau ruang konseling tamu agar privasi tamu terjaga.'
      ],
      summary: 'Keigo perhotelan adalah instrumen utama dalam membangun atmosfer profesionalisme dan kehormatan. Penguasaan 7 Frasa Emas, perbedaan Sonkeigo dan Kenjougo, serta ketenangan memecahkan komplain melalui empati dan solusi cepat merupakan kunci integritas staf akomodasi.',
      practiceQuestions: [
        {
          id: 'hospitality_ch3_q1',
          questionNumber: 1,
          questionText: 'ホテルのフロント業務において、外国人のお客様からパスポートの提示をお願いする際の敬語表現として、最も適切なものを一つ選びなさい。',
          situation: 'Ungkapan Keigo yang tepat saat meminta tamu memperlihatkan paspor untuk registrasi.',
          options: [
            '「パスポートを早く見せてください。」',
            '「恐れ入りますが、パスポートを拝見してもよろしいでしょうか。」',
            '「パスポートをご覧になっていただきます。」',
            '「パスポートをフロントに置いていってください。」'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Ungkapan "恐れ入りますが (cushion word) + パスポートを拝見してもよろしいでしょうか (Kenjougo dari miru)" adalah standar kesopanan tertinggi di front desk hotel Jepang. Pilihan 1 terlalu memerintah, Pilihan 3 keliru tata bahasa Keigo.',
          translation: 'Pilihlah satu ungkapan Keigo yang paling tepat saat meminta tamu memperlihatkan paspor di front desk hotel.'
        },
        {
          id: 'hospitality_ch3_q2',
          questionNumber: 2,
          questionText: '滞在中のお客様から「部屋のエアコンが動かず、部屋が非常に暑い」とフロントに電話で苦情があった際の対応として、最も適切なものを一つ選びなさい。',
          situation: 'Penanganan keluhan tamu mengenai pendingin udara kamar yang tidak berfungsi.',
          options: [
            '「機械の故障ですから、窓を開けて我慢してください」と伝える。',
            '「現在フロントは忙しいので、明日までお待ちください」と電話を切る。',
            '「大変ご不便をおかけし申し訳ございません。直ちにスタッフがお部屋へ確認に伺います」と謝罪し迅速に対応する。',
            '「お客様のリモコンの押し方が間違っているのではないでしょうか」とお客様を疑う。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 2 benar (pada opsi index 2, yakni pilihan ke-3). Awali dengan permohonan maaf tulus atas ketidaknyamanan, lalu tindaklanjuti dengan solusi konkret (segera mengirim staf teknisi ke kamar). Menyalahkan tamu atau menyuruh sabar tanpa tindakan (Pilihan 0, 1, 3) adalah pelanggaran berat etika hospitality.',
          translation: 'Pilihlah respons yang paling tepat ketika menerima keluhan telepon bahwa AC kamar mati dan ruangan sangat panas.'
        }
      ],
      officialReference: {
        source: 'Japan Tourism Agency & Center for Accommodation Industry Examination',
        agency: 'Ministry of Land, Infrastructure, Transport and Tourism (国土交通省)',
        documentTitle: '宿泊業技能測定試験 接客マナー・敬語ハンドブック'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: PENGETAHUAN & KETERAMPILAN KERJA (HOUSEKEEPING, K3 & LOST & FOUND)
    // ------------------------------------------------------------------------
    {
      id: 'hospitality_ch4',
      sectorId: 'hospitality',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'SOP Housekeeping, Bed Making, Keselamatan Bencana & Lost and Found',
      japaneseTitle: '客室清掃・ベッドメイク・防災安全・遺失物管理',
      estimatedMinutes: 35,
      objectives: [
        'Menguasai urutan SOP pembersihan kamar hotel mulai dari ventilasi udara hingga inspeksi akhir.',
        'Memahami teknik penataan tempat tidur (bed making gaya duvet cover) yang kencang, rapi, dan simetris.',
        'Menerapkan prosedur pengelolaan barang tertinggal tamu (Lost & Found / Wasuremono).',
        'Mengetahui tindakan tanggap darurat evakuasi saat kebakaran (Kasai) dan gempa bumi (Jishin).'
      ],
      contentExplanation: `
Housekeeping (*Kyakushitsu Seisou* / 客室清掃) adalah tulang punggung operasional perhotelan. Kamar yang higienis, rapi, harum, dan bebas kuman merupakan produk inti yang dibeli oleh tamu hotel.

### 1. Standar Operasional Prosedur Pembersihan Kamar (8 Tahap):
Pembersihan kamar checkout (*Check-out Cleaning*) wajib mengikuti urutan sistematis untuk mencegah kontaminasi kotoran ke area yang sudah bersih:
1. **Buka Jendela & Ventilasi Udara (換気 - Kanki)**:
   - Ketuk pintu 3 kali sambil mengucap *"Housekeeping desu"*. Masuk kamar, buka tirai jendela agar sinar matahari dan sirkulasi udara segar masuk.
2. **Kumpulkan Sampah & Pilah Daur Ulang (ゴミ回収・分別 - Gomi Kaishuu)**:
   - Ambil seluruh sampah di tempat sampah kamar dan meja kerja. Pisahkan secara disiplin antara sampah bakar (*Moeru gomi*), kaleng (*Kan*), botol plastik PET (*Petto botoru*), dan botol kaca (*Bin*).
3. **Kumpulkan Linen Kotor ke Troli Linen (リネン回収 - Rinen Kaishuu)**:
   - Buka sarung bantal, sprei kasur, dan duvet cover.
   - **PERATURAN MUTLAK**: Linen kotor dilarang ditaruh di lantai karpet kamar! Masukkan linen kotor langsung ke kantong troli linen (*linen cart*) guna mencegah penyebaran bakteri/kutu kasur.
4. **Pembersihan & Sanitasi Unit Bath (水回り清掃 - Mizumawari Seisou)**:
   - Cuci cermin, wastafel (*senmendai*), bathtub (*yokusou*), dan kloset toilet (*benki*) menggunakan spons dan cairan pembersih terpisah untuk area toilet dan bak mandi.
   - Keringkan seluruh permukaan hingga tetesan air (*mizudare*) hilang tuntas menggunakan lap microfiber (*duster*) kering agar tidak menimbulkan bercak kerak air putih. Pasang handuk baru yang bersih dan higienis.
5. **Penataan Tempat Tidur (ベッドメイキング - Bed Making)**:
   - Pasang pelindung kasur (*bed pad*).
   - Pasang sprei bawah (*shitsu*), tarik sudut kasur membentuk lipatan segitiga 45 derajat (*corner fold / mitered corner*) agar kencang tanpa kerutan.
   - Masukkan selimut ke dalam sarung duvet (*dyube kabaa*), ratakan seluruh sudutnya.
   - Pasang sarung bantal (*makurakabaa*). **Aturan Estetika**: Bagian lubang bukaan sarung bantal wajib menghadap ke sisi dinding, BUKAN menghadap ke arah pintu masuk kamar.
6. **Pembersihan Debu & Setup Amenities (除塵・アメニティセット)**:
   - Bersihkan debu (*dusting*) menggunakan lap statis dari posisi **ATAS KE BAWAH** (lampu, rak gantung, meja kerja, televisi, nakas tempat tidur).
   - Tata amenities baru: sikat gigi, sisir, pisau cukur, sandal, teko listrik, teh, dan panduan hotel secara simetris dan presisi.
7. **Penyedotan Debu Karpet Lantai (掃除機がけ - Vacuuming)**:
   - Sedot debu menggunakan vacuum cleaner secara mundur **DARI UJUNG DALAM KAMAR MENUJU PINTU KELUAR**. Jangan berjalan maju di atas karpet yang baru disedot agar tidak meninggalkan bekas jejak sepatu.
8. **Semprot Deodoran & Inspeksi Akhir (消臭・最終点検 - Inspection)**:
   - Semprotkan penghilang bau kain (*shoushuuzai*) ke tirai dan karpet secara proporsional.
   - Supervisor memeriksa ceklist kelayakan kamar (30 poin inspeksi) sebelum status kamar diubah menjadi *Cleaned / Ready to Sell*.

### 2. Prosedur Pengelolaan Barang Tertinggal (遺失物・忘れ物管理 - Wasuremono):
Barang tamu yang tertinggal setelah checkout adalah amanah hukum perdata Jepang:
- **Integritas Mutlak**: Staf dilarang keras mengambil, menyembunyikan, atau membuang barang temuan sekecil apa pun (bahkan botol minum setengah terisi atau pakaian dalam bekas).
- **Pencatatan Detail Form Wasuremono**:
  - Tanggal dan jam penemuan.
  - Nomor kamar dan posisi spesifik temuan (misal: *"di bawah tempat tidur sisi kanan"* atau *"di laci nakas"*).
  - Deskripsi barang (merek, warna, kondisi, isi dompet).
  - Nama staf penemu.
- **Penyimpanan**: Barang berharga (uang tunai, perhiasan, paspor, kartu kredit) diserahkan ke Front Desk untuk disimpan di brankas terkunci (*Kinko*). Sesuai Undang-Undang Kepolisian Jepang, barang berharga yang tidak diambil pemiliknya dalam jangka waktu tertentu wajib diserahkan ke kantor polisi terdekat (*Kouban / Keitsatsusho*).

### 3. K3 & Tanggap Darurat Bencana (防災・避難誘導):
- **Kesehatan & Ergonomi Kerja**:
  - Gunakan mekanika tubuh saat mengangkat kasur: tekuk lutut, jangan membungkukkan pinggang agar terhindar dari cedera saraf pinggang (*Youtsuu*).
  - Jangan pernah mencampur pembersih asam (*sansei senzai*) dengan pemutih berbasis klorin (*ensoke senzai*) karena menghasilkan gas klorin beracun mematikan (**混ぜるな危険 - Mazeruna Kiken**).
- **Tanggap Gempa Bumi (地震発生時)**:
  - Lindungi kepala di bawah meja kokoh (*Drop, Cover, Hold on*).
  - Buka sedikit pintu kamar (*Door ajar*) agar kusen tidak melengkung dan mengunci tamu di dalam kamar.
  - Setelah guncangan mereda, periksa keamanan gas, air, dan saluran listrik.
- **Tanggap Kebakaran (火災発生時)**:
  - Tekan tombol alarm kebakaran darurat gedung (*Kasai houkiki*).
  - Telepon 119 (*Shoubousho*) memberikan info lokasi yang jelas.
  - Padamkan api awal menggunakan alat pemadam api ringan (APAR / *Shoukaki*) jika api masih di bawah ketinggian plafon.
  - Jika api membesar, evakuasi seluruh tamu melalui **TANGGA DARURAT (非常階段 - Hijou Kaidan)**.
  - **DILARANG KERAS MENGGUNAKAN ELEVATOR / LIFT** saat kebakaran karena risiko terjebak mati listrik dan tercekik asap tebal (*Kemuri*).
      `,
      keyTerms: [
        {
          japanese: '換気',
          kana: 'かんき',
          romaji: 'kanki',
          indonesian: 'Ventilasi udara / sirkulasi udara kamar',
          note: 'Langkah nomor 1 saat memulai pembersihan kamar checkout.'
        },
        {
          japanese: 'ベッドメイク',
          kana: 'べっどめいく',
          romaji: 'beddo meiku',
          indonesian: 'Pembuatan / penataan tempat tidur hotel',
          note: 'Memasang sprei kencang tanpa kerutan dan duvet rapi simetris.'
        },
        {
          japanese: '忘れ物 / 遺失物',
          kana: 'わすれもの / いしつぶつ',
          romaji: 'wasuremono / ishitsubutsu',
          indonesian: 'Barang tertinggal tamu / Lost and found',
          note: 'Wajib dicatat tanggal, kamar, dan posisi temuan secara transparan.'
        },
        {
          japanese: '非常階段',
          kana: 'ひじょうかいだん',
          romaji: 'hijou kaidan',
          indonesian: 'Tangga darurat gedung hotel',
          note: 'Jalur evakuasi mutlak saat terjadi kebakaran atau gempa; lift dilarang.'
        },
        {
          japanese: '避難誘導',
          kana: 'ひなんゆうどう',
          romaji: 'hinan yuudou',
          indonesian: 'Pemanduan evakuasi darurat bagi tamu hotel',
          note: 'Membimbing tamu menuju titik kumpul aman (Hinanchou).'
        },
        {
          japanese: 'デュベスタイル',
          kana: 'でゅべすたいる',
          romaji: 'dyube sutairu',
          indonesian: 'Gaya penataan ranjang menggunakan sarung selimut duvet tebal',
          note: 'Standar ranjang modern higienis di hotel berbintang Jepang.'
        },
        {
          japanese: 'ダスター',
          kana: 'だすたー',
          romaji: 'dasutaa',
          indonesian: 'Kain lap microfiber pembersih debu / pengering air',
          note: 'Dipisahkan warnanya antara area toilet dan area kamar tidur.'
        },
        {
          japanese: '消臭剤',
          kana: 'しょうしゅうざい',
          romaji: 'shoushuuzai',
          indonesian: 'Semprotan deodorisasi penghilang bau kain/kamar',
          note: 'Disemprotkan merata sebelum inspeksi akhir kamar selesai.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Penemuan Cincin Berlian di Samping Wastafel Kamar Mandi Kamar 815',
        scenario: 'Staf housekeeping, Farhan, sedang membersihkan kamar mandi checkout kamar 815. Saat mengelap wastafel, ia menemukan sebuah cincin berlian wanita yang tertinggal di samping tempat sabun cuci tangan.',
        dialogue: [
          {
            speaker: 'Farhan (Staf SSW)',
            role: 'Staf Housekeeping',
            japanese: 'あ、洗面台の横にダイヤモンドの指輪がある！お客様の大切な忘れ物だ。',
            kana: 'あ、せんめんだいの よこに だいやもんどの ゆびわが ある！おきゃくさまの たいせつな わすれものだ。',
            romaji: 'A, senmendai no yoko ni daiyamondo no yubiwa ga aru! Okyakusama no taisetsu na wasuremono da.',
            indonesian: 'Wah, ada cincin berlian di samping wastafel! Ini barang tertinggal yang sangat berharga milik tamu.'
          },
          {
            speaker: 'Farhan (Staf SSW)',
            role: 'Staf Housekeeping',
            japanese: '山本チーフ、お疲れ様です。ファルハンです。815号室の清掃中、洗面台横にて貴金属（指輪）の遺失物を発見いたしました。',
            kana: 'やまもとちーふ、おつかれさまです。ふぁるはん です。815ごうしつの せいそうちゅう、せんめんだいよこにて ききんぞく（ゆびわ）の いしつぶつを はっけん いたしました。',
            romaji: 'Yamamoto-chiifu, otsukaresama desu. Faruhan desu. 815-goushitsu no seisouchuu, senmendai yoko nite kikinzoku (yubiwa) no ishitsubutsu wo hakken itashimashita.',
            indonesian: 'Chief Yamamoto, selamat siang. Saya Farhan. Saat membersihkan kamar 815, saya menemukan barang tertinggal perhiasan logam mulia (cincin) di samping wastafel.'
          },
          {
            speaker: 'Yamamoto Chief',
            role: 'Housekeeping Supervisor',
            japanese: 'ファルハンさん、迅速な報告ありがとうございます。指輪には素手でベタベタ触らず、チャック付きポリ袋に入れ、発見日時・部屋番号・場所を台帳に記入してすぐにフロントの金庫へ預けてください。',
            kana: 'ふぁるはんさん、じんそくな ほうこく ありがとうございます。ゆびわには すでで べたべた さわらず、ちゃっくつき ぽりぶくろに いれ、はっけんにちじ・へやばんごう・ばしょを だいちょうに きにゅうして すぐに ふろんとの きんこへ あずけてください。',
            romaji: 'Faruhan-san, jinsoku na houkoku arigatou gozaimasu. Yubiwa ni wa sude de betabeta sawarazu, chakku-tsuki pori-bukuro ni ire, hakken nichiji, heyabangou, basho wo daichou ni kinyuu shite sugu ni furonto no kinko e azukete kudasai.',
            indonesian: 'Farhan, terima kasih atas laporan secepatnya. Jangan sentuh cincin dengan sidik jari langsung, masukkan ke kantong plastik zip, catat tanggal-jam-nomor kamar-lokasi di buku register, dan serahkan segera ke brankas front desk.'
          },
          {
            speaker: 'Farhan (Staf SSW)',
            role: 'Staf Housekeeping',
            japanese: 'かしこまりました。すぐに記録票を作成し、フロントへ持参いたします。',
            kana: 'かしこまりました。すぐに きろくひょうを さくせいし、ふろんとへ じさん いたします。',
            romaji: 'Kashikomarimashita. Sugu ni kirokuhyou wo sakusei shi, furonto e jisan itashimasu.',
            indonesian: 'Baik, dimengerti Chief. Saya segera buat formulir catatannya dan serahkan ke front desk.'
          }
        ],
        takeaway: 'Menemukan barang tamu adalah ujian kejujuran dan etika tertinggi perhotelan. Setiap penemuan wajib dicatat secara transparan dan diamankan ke sistem brankas hotel tanpa penundaan.'
      },
      visualDiagram: {
        title: '8 Tahap Alur Pembersihan Kamar Standar Hotel Jepang',
        type: 'steps',
        items: [
          {
            label: 'Tahap 1: Ventilasi Udara (換気)',
            description: 'Ketuk pintu kamar, buka tirai jendela agar sirkulasi udara luar masuk.',
            badge: 'Sirkulasi Segar'
          },
          {
            label: 'Tahap 2: Pemilahan Sampah (ゴミ回収・分別)',
            description: 'Kumpulkan dan pilah sampah bakar, kaleng, botol plastik PET, dan botol kaca.',
            badge: 'Disiplin Daur Ulang'
          },
          {
            label: 'Tahap 3: Tarik Linen Kotor (使用済リネン回収)',
            description: 'Lepas sarung bantal, sprei, dan sarung duvet. Masukkan langsung ke kantong troli linen.',
            badge: 'Lantai Bebas Linen'
          },
          {
            label: 'Tahap 4: Sanitasi Unit Bath (水回り清掃)',
            description: 'Sikat wastafel, bathtub, kloset toilet. Keringkan tetesan air hingga mengkilap tanpa bercak.',
            badge: 'Higienitas Basah'
          },
          {
            label: 'Tahap 5: Bed Making Rapi (ベッドメイク)',
            description: 'Pasang bed pad, sprei sudut 45 derajat kencang, sarung duvet, dan bantal hadap dinding.',
            badge: 'Estetika Kasur'
          },
          {
            label: 'Tahap 6: Dusting & Setup Amenities (除塵・備品設置)',
            description: 'Lap debu dari atas ke bawah. Tata sikat gigi, sandal, handuk, teko listrik simetris.',
            badge: 'Presisi Penataan'
          },
          {
            label: 'Tahap 7: Vacuuming Lantai (掃除機がけ)',
            description: 'Sedot debu karpet lantai secara mundur dari sudut dalam menuju pintu keluar.',
            badge: 'Karpet Bersih'
          },
          {
            label: 'Tahap 8: Deodoran & Inspeksi (消臭・点検)',
            description: 'Semprot penghilang bau shoushuuzai. Supervisor melakukan ceklist 30 poin kelayakan.',
            badge: 'Siap Huni'
          }
        ]
      },
      importantPoints: [
        'Linen kotor (sprei, sarung bantal, handuk) dilarang diletakkan langsung di lantai kamar demi mencegah transmisi kuman dan menjaga higienitas.',
        'Arah lubang bukaan sarung bantal (pillow case open side) harus menghadap ke sisi dinding, tidak boleh menghadap ke arah pintu masuk kamar tamu.',
        'Saat alarm kebakaran atau gempa berbunyi, lift hotel otomatis dinonaktifkan; evakuasi seluruh tamu wajib diarahkan melalui tangga darurat (Hijou kaidan).',
        'Dilarang mencampur pembersih toilet asam dengan cairan pemutih klorin karena reaksi kimianya mengeluarkan gas klorin mematikan (Mazeruna Kiken).'
      ],
      summary: 'Housekeeping dan K3 merupakan pilar utama penentu kenyamanan fisik serta keselamatan jiwa tamu. Kepatuhan terhadap 8 SOP sanitasi kamar, teknik bed making yang presisi, kedisiplinan pencatatan lost & found, serta kesiapsiagaan evakuasi bencana menjamin operasional hotel berstandar internasional.',
      practiceQuestions: [
        {
          id: 'hospitality_ch4_q1',
          questionNumber: 1,
          questionText: '客室のベッドメイキング作業における衛生管理およびマナー上の注意点として、最も適切なものを一つ選びなさい。',
          situation: 'Standar higienitas dan etika saat melakukan bed making di kamar hotel.',
          options: [
            '取り外した使用済みの汚れたシーツ類は、作業しやすいように客室の床（絨毯）の上に直置きしてまとめておく。',
            '使用済みリネン類は絶対に床に直接置かず、直ちにリネン回収袋（ランドリーバッグ）の中に入れる。',
            'ピローケース（枕カバー）の開口部（穴）は、客室の入口ドアから一番よく見える向きにして置く。',
            'シーツにシワがあっても、マットレスの下に巻き込まずに垂らしたままにしておく。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar (pada opsi index 1). Linen kotor tidak boleh ditaruh di atas karpet lantai karena risiko kontaminasi kuman silang. Bukaan sarung bantal harus menghadap ke arah dinding (bukan ke pintu masuk), dan sprei harus ditarik kencang tanpa kerutan.',
          translation: 'Pilihlah satu pernyataan yang paling tepat mengenai manajemen higienitas dan etika dalam menata tempat tidur hotel.'
        },
        {
          id: 'hospitality_ch4_q2',
          questionNumber: 2,
          questionText: 'ホテル滞在中に大きな地震または火災が発生した際の避難誘導対応として、適切でない（誤っている）行動を一つ選びなさい。',
          situation: 'Tindakan yang keliru/berbahaya saat melakukan evakuasi bencana di gedung hotel.',
          options: [
            '揺れや煙が収まるまで頭を保護させ、避難口となる客室ドアを少し開けて退路を確保する。',
            'お客様を安全かつ速やかに地上へ降ろすため、高層階のエレベーター（昇降機）に全員を乗せて避難させる。',
            '火災の煙を吸い込まないよう、濡れたタオルやハンカチで鼻と口を覆い、姿勢を低くして誘導する。',
            '避難階段（非常階段）を使用して、パニックを起こさないよう落ち着いて順序よく避難させる。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 keliru (maka ini adalah jawaban yang dicari). Saat kebakaran atau gempa bumi, ELEVATOR DILARANG KERAS DIGUNAKAN karena risiko terjebak pemadaman listrik dan masuknya asap beracun ke dalam lorong lift. Seluruh evakuasi wajib melalui tangga darurat (Hijou kaidan).',
          translation: 'Pilihlah tindakan yang TIDAK TEPAT (keliru) saat membimbing evakuasi gempa bumi atau kebakaran di hotel.'
        }
      ],
      officialReference: {
        source: 'Center for Accommodation Industry Examination & Fire and Disaster Management Agency (FDMA)',
        agency: 'Ministry of Land, Infrastructure, Transport and Tourism (国土交通省)',
        documentTitle: '宿泊業安全衛生・客室整備実務マニュアル (Manual K3 & Pembersihan Kamar)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: PERSIAPAN UJIAN TEKNIS SSW PERHOTELAN (FORMAT CBT & PEMBAHASAN)
    // ------------------------------------------------------------------------
    {
      id: 'hospitality_ch5',
      sectorId: 'hospitality',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Bedah Kisi-kisi, Strategi Ujian CBT & Pembahasan Soal Teknis SSW Perhotelan',
      japaneseTitle: '宿泊業技能測定試験の出題傾向・CBT対策・模擬問題解説',
      estimatedMinutes: 30,
      objectives: [
        'Memahami komposisi dan format Ujian Teori (学科試験) dan Ujian Praktik Penilaian (実技・判断等試験).',
        'Menguasai strategi membaca teks ujian CBT ber-furigana secara efisien dalam batas waktu.',
        'Menganalisis pola soal jebakan terkait etika pelayanan, kebersihan, dan keselamatan kerja.'
      ],
      contentExplanation: `
Ujian Keahlian Akomodasi SSW (**宿泊業技能測定試験 - Accommodation Industry Skills Measurement Test**) diselenggarakan oleh *Center for Accommodation Industry Examination* di bawah pengawasan Badan Pariwisata Jepang (JTA / MLIT).

Ujian ini dirancang untuk menilai apakah calon pekerja berketerampilan spesifik telah memiliki kemahiran praktis dan etika kerja untuk langsung diterjunkan di lingkungan kerja perhotelan Jepang tanpa kendala adaptasi.

### 1. Struktur Format Ujian Resmi CBT:
- **Metode**: *Computer-Based Testing (CBT)* di pusat ujian resmi Prometric (diselenggarakan di Indonesia seperti Jakarta dan Surabaya, maupun di Jepang).
- **Bahasa**: Seluruh teks soal disajikan dalam bahasa Jepang dengan **Furigana (huruf kana di atas seluruh huruf kanji)** sehingga memudahkan pembacaan bagi pemegang level JLPT N4 / JFT-Basic A2.
- **Dua Komponen Ujian**:
  1. **Ujian Pengetahuan Akademik / Teori (学科試験 - Gakka Shiken)**:
     - Berisi pertanyaan pilihan ganda mengenai pengetahuan umum industri perhotelan, manajemen sanitasi, etika Keigo, regulasi pariwisata, dan penanganan bencana.
  2. **Ujian Pertimbangan Praktik (実技試験 / 判断等試験 - Handan-tou Shiken)**:
     - Soal berbasis skenario situasi nyata kerja di front desk, kamar hotel, dan restoran/banquet.
     - Menguji ketepatan tindakan: *"Manakah respons staf yang paling tepat (最も適切なもの)?"* atau *"Manakah tindakan yang keliru/dilarang (適切でないもの)?"*.
- **Kriteria Kelulusan**:
  - Calon peserta wajib meraih skor minimal **65% atau lebih** pada masing-masing komponen ujian.

### 2. Peta Distribusi Materi Ujian:
- **Bidang 1: Layanan Front Desk & Penerimaan Tamu (フロント・接客業務) ~ Bobot 30%**:
  - Prosedur check-in/out, pengisian buku tamu, pencatatan paspor turis asing, 7 frasa emas Keigo, penanganan barang titipan, dan penerimaan reservasi via telepon.
- **Bidang 2: Housekeeping & Sanitasi Kamar (客室清掃・衛生管理) ~ Bobot 25%**:
  - Urutan 8 tahap pembersihan kamar, teknik bed making duvet cover, pencegahan kontaminasi linen kotor, dan SOP pencatatan barang tertinggal (*wasuremono*).
- **Bidang 3: Layanan Restoran & F&B (料飲サービス・レストラン) ~ Bobot 25%**:
  - Pelayanan makan pagi buffet, etika penyajian hidangan tradisional Kaiseki di ryokan, penanganan alergen makanan (7 alergen wajib di Jepang: telur, susu, gandum, soba, kacang tanah, udang, kepiting), dan kebersihan alat makan.
- **Bidang 4: K3, Keselamatan Bencana & Regulasi (防災・安全管理・法令) ~ Bobot 20%**:
  - Prosedur gempa bumi dan kebakaran (larangan penggunaan lift), penanganan bahaya bahan kimia pembersih (*Mazeruna Kiken*), dan perlindungan data pribadi tamu (*Puraibashii no Hogo*).

### 3. Trik & Strategi Menjawab Soal Ujian:
- **Cermati Kata Kunci Akhir Pertanyaan**:
  - Selalu lingkari atau perhatikan apakah soal meminta: **「最も適切なもの」 (Yang paling tepat)** ATAU **「適切でないもの / 誤っているもの」 (Yang TIDAK tepat / yang keliru)**. Banyak peserta gugur hanya karena terburu-buru dan salah membaca instruksi ini.
- **Pola Jawaban Benar di Sektor Hospitality**:
  1. *Keselamatan Tamu adalah Prioritas Utama*: Tindakan yang melindungi nyawa dan kesehatan tamu selalu dinilai benar.
  2. *Empati & Kerendahan Hati*: Permohonan maaf yang tulus dan mendengarkan keluhan tamu selalu lebih benar daripada mendebat atau melempar kesalahan ke rekan lain.
  3. *Verifikasi & Transparansi*: Tindakan yang mengonfirmasi data identitas sebelum membuka kamar yang terkunci selalu benar demi keamanan (*Security*).
- **Manajemen Waktu**:
  - Rata-rata waktu pengerjaan adalah 1 sampai 1.5 menit per butir soal. Jika menemukan istilah yang membingungkan, tandai soal tersebut (*flag*) dan lanjutkan ke soal berikutnya terlebih dahulu.
      `,
      keyTerms: [
        {
          japanese: '宿泊業技能測定試験',
          kana: 'しゅくはくぎょう ぎのう そくてい しけん',
          romaji: 'shukuhakugyou ginou sokutei shiken',
          indonesian: 'Ujian Pengukuran Keterampilan Industri Akomodasi SSW',
          note: 'Nama resmi ujian teknis profesi perhotelan untuk visa Tokutei Ginou 1.'
        },
        {
          japanese: '学科試験',
          kana: 'がっかしけん',
          romaji: 'gakka shiken',
          indonesian: 'Ujian pengetahuan akademik / teori perhotelan',
          note: 'Menguji teori pelayanan, sanitasi makanan, Keigo, dan K3.'
        },
        {
          japanese: '判断等試験',
          kana: 'はんだんとうしけん',
          romaji: 'handan-tou shiken',
          indonesian: 'Ujian pertimbangan skenario praktis',
          note: 'Menguji ketepatan pengambilan keputusan berdasarkan skenario kasus nyata di hotel.'
        },
        {
          japanese: '合格基準',
          kana: 'ごうかくきじゅん',
          romaji: 'goukaku kijun',
          indonesian: 'Standar kriteria kelulusan ujian',
          note: 'Umumnya mensyaratkan perolehan skor minimal 65% pada kedua bagian ujian.'
        },
        {
          japanese: '適切 / 適切でない',
          kana: 'てきせつ / てきせつでない',
          romaji: 'tekisetsu / tekisetsu de nai',
          indonesian: 'Tepat / Tidak tepat (keliru)',
          note: 'Kata kunci krusial penentu instruksi pertanyaan di lembar soal CBT.'
        },
        {
          japanese: '出題基準',
          kana: 'しゅつだいきじゅん',
          romaji: 'shutsudai kijun',
          indonesian: 'Silabus / kriteria kisi-kisi materi soal ujian resmi',
          note: 'Diterbitkan resmi oleh badan penyelenggara ujian akomodasi Jepang.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Analisis Soal Ujian Asli: Tamu Meminta Membuka Pintu Kamar yang Kuncinya Tertinggal di Dalam',
        scenario: 'Seseorang yang mengaku sebagai penghuni kamar 305 datang terburu-buru ke meja front desk meminta staf membukakan pintu kamarnya dengan kartu kunci master (*Master key*) karena kuncinya tertinggal di dalam. Orang tersebut tidak membawa kartu identitas apa pun.',
        dialogue: [
          {
            speaker: 'Tamu (Pria terburu-buru)',
            role: 'Tamu Menginap',
            japanese: '305号室の田中だけど、部屋の中に鍵を置いたままオートロックで閉まってしまった！急いでいるからマスターキーですぐに開けてくれ！',
            kana: '305ごうしつの たなか だけど、へやのなかに かぎを おいたまま おーとろっくで しまってしまった！いそいでいるから ますたーきーで すぐに あけてくれ！',
            romaji: '305-goushitsu no Tanaka dakedo, heya no naka ni kagi wo oita mama ootorokku de shimatteshimatta! Isoide iru kara masutaakii de sugu ni akete kure!',
            indonesian: 'Saya Tanaka kamar 305, kunci saya tertinggal di dalam kamar dan pintunya terkunci otomatis! Saya buru-buru, tolong segera buka pakai kunci master!'
          },
          {
            speaker: 'Staf Front Desk',
            role: 'Staf SSW',
            japanese: '大変ご不便をおかけしております。お客様の大切な安全と防犯のため、恐れ入りますがお名前とお電話番号、ご生年月日を伺ってもよろしいでしょうか。',
            kana: 'たいへん ごふべんを おかけしております。おきゃくさまの たいせつな あんぜんと ぼうはんのため、おそれいりますが おなまえと おでんわばんごう、ごせいねんがっぴを うかがっても よろしいでしょうか。',
            romaji: 'Taihen gofuben wo okake shite orimasu. Okyakusama no taisetsu na anzen to bouhan no tame, osoreirimasu ga onamae to odenwabangou, goseinengappi wo ukagatte mo yoroshii deshou ka.',
            indonesian: 'Mohon maaf yang sebesar-besarnya atas ketidaknyamanan Anda. Demi keamanan dan perlindungan privasi kamar Anda, mohon maaf sebelumnya, bisakah saya mengonfirmasi nama lengkap, nomor telepon, dan tanggal lahir Anda?'
          },
          {
            speaker: 'Tamu',
            role: 'Tamu Menginap',
            japanese: '田中一郎、電話は090-XXXX-XXXXだよ。急いでるんだ！',
            kana: 'たなか いちろう、でんわは 090-XXXX-XXXX だよ。いそいでるんだ！',
            romaji: 'Tanaka Ichirou, denwa wa 090-XXXX-XXXX da yo. Isoiderun da!',
            indonesian: 'Ichiro Tanaka, nomor telepon 090-XXXX-XXXX. Cepatlah!'
          },
          {
            speaker: 'Staf Front Desk',
            role: 'Staf SSW',
            japanese: 'ご協力ありがとうございます。ご登録情報と一致いたしました。スタッフが直ちにお部屋の前までご同行し、開錠させていただきます。マスターキーの単独でのお渡しは防犯上いたしかねますのでご了承くださいませ。',
            kana: 'ごきょうりょく ありがとうございます。ごとうろくじょうほうと いっちいたしました。すたっふが ただちに おへやのまえまで ごどうこうし、かいじょう させていただきます。ますたーきーの たんどくでのおわたしは ぼうはんじょう いたしかねますので ごりょうしょうくださいませ。',
            romaji: 'Gokyouryoku arigatou gozaimasu. Gotouroku jouhou to icchi itashimashita. Sutaffu ga tadachi ni oheya no mae made godoukou shi, kaijou sasete itadakimasu. Masutaakii no tandoku de no owatashi wa bouhanjou itashikanemasu no de goryoushou kudasaimase.',
            indonesian: 'Terima kasih atas kerja samanya. Data Anda cocok dengan formulir pendaftaran. Staf kami akan segera mendampingi Anda langsung ke depan pintu kamar untuk membukakannya. Demi alasan keamanan, kami tidak dapat menyerahkan kunci master langsung kepada tamu.'
          }
        ],
        takeaway: 'Keamanan kamar (Security) adalah harga mati. Meskipun tamu terburu-buru, staf hotel tidak boleh sembarangan menyerahkan kunci atau membuka kamar tanpa verifikasi identitas yang sah sesuai registrasi.'
      },
      visualDiagram: {
        title: 'Matriks Komposisi Soal Ujian SSW Perhotelan CBT',
        type: 'table',
        items: [
          {
            label: '1. Front Desk & Pelayanan Tamu (フロント・接客)',
            description: 'Check-in/out, pengisian formulir, Keigo 7 frasa emas, penanganan reservasi telepon, penitipan barang koper.',
            highlight: 'Bobot Soal: ~30%'
          },
          {
            label: '2. Housekeeping & Sanitasi Kamar (客室衛生・清掃)',
            description: 'Urutan 8 SOP pembersihan kamar, teknik bed making duvet cover, penanganan linen higienis, register lost & found.',
            highlight: 'Bobot Soal: ~25%'
          },
          {
            label: '3. Layanan Makanan & Restoran (料飲サービス・F&B)',
            description: 'Penyajian sarapan buffet, etika jamuan Kaiseki ryokan, pengendalian 7 bahan alergen makanan, sanitasi alat saji.',
            highlight: 'Bobot Soal: ~25%'
          },
          {
            label: '4. K3, Tanggap Bencana & Regulasi (防災・安全・法令)',
            description: 'Evakuasi kebakaran & gempa tangga darurat (larangan lift), bahaya gas kimia pembersih, UU Penginapan Jepang.',
            highlight: 'Bobot Soal: ~20%'
          }
        ]
      },
      importantPoints: [
        'Perhatikan instruksi soal: apakah mencari pilihan yang "Paling Tepat (最も適切なもの)" atau yang "Keliru/Tidak Tepat (適切でないもの)". Kesalahan membaca instruksi adalah penyebab kegagalan paling sering.',
        'Di ujian CBT resmi Jepang, seluruh kanji memiliki furigana, namun hafalan cepat istilah teknis (seperti 領収書, 換気, 避難誘導) sangat menghemat waktu pengerjaan.',
        'Skor kelulusan adalah 65% atau lebih pada masing-masing komponen ujian. Manajemen waktu: targetkan pengerjaan maksimal 1 hingga 1.5 menit per butir soal.'
      ],
      summary: 'Kelulusan ujian SSW Akomodasi ditentukan oleh pemahaman konseptual tentang etika Omotenashi, penguasaan SOP operasional front desk dan housekeeping, serta ketelitian dalam membedakan respons pelayanan yang tepat dalam berbagai skenario tamu.',
      practiceQuestions: [
        {
          id: 'hospitality_ch5_q1',
          questionNumber: 1,
          questionText: 'ホテルのフロント業務において、電話による宿泊予約の受付対応として、適切でない（誤っている）ものを一つ選びなさい。',
          situation: 'Penanganan penerimaan reservasi kamar tamu melalui telepon.',
          options: [
            'お客様の宿泊希望日、宿泊日数、人数、部屋タイプをメモを取りながら確認する。',
            '聞き間違いを防ぐため、お客様のお名前と連絡先電話番号を復唱して確認する。',
            'フロントが混雑していたため、お客様の名前だけを聞いて電話番号は確認せずに急いで電話を切った。',
            '予約完了後、予約確認番号を伝え、最後に「お電話誠にありがとうございました」とお礼を述べる。'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pilihan 3 keliru (maka ini adalah jawaban yang dicari). Tidak mengonfirmasi nomor telepon dan memutus telepon terburu-buru adalah pelanggaran berat dalam SOP reservasi hotel karena akan menyebabkan hotel kehilangan kontak jika terjadi perubahan status reservasi.',
          translation: 'Pilihlah tindakan yang TIDAK TEPAT (keliru) saat menangani reservasi penginapan melalui telepon.'
        },
        {
          id: 'hospitality_ch5_q2',
          questionNumber: 2,
          questionText: '日本の旅館業法（りょかんぎょうほう）における外国人宿泊客の本人確認について、正しい記述を一つ選びなさい。',
          situation: 'Ketentuan hukum identifikasi tamu warga negara asing sesuai Undang-Undang Bisnis Penginapan Jepang.',
          options: [
            '外国人観光客であっても、プライバシー保護のためパスポートの提示を求めてはならない。',
            '日本国内に住所を持たない外国人宿泊客に対しては、パスポートの提示を求め、国籍および旅券番号を宿泊者名簿に記載するとともに、パスポートの写し（コピー）を保存しなければならない。',
            'パスポートを所持していない外国人観光客には、電車の切符を代わりにコピーしておけば法的に問題ない。',
            '団体ツアーの外国人観光客は、全員分のパスポート確認および名簿記載を完全に省略することができる。'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pilihan 2 benar. Sesuai Ryokan Gyouhou (Undang-Undang Bisnis Penginapan), tamu WNA yang tidak bertempat tinggal di Jepang diwajibkan menunjukkan paspor asli, di mana staf hotel wajib mencatat nomor paspor dan kewarganegaraan serta menyimpan fotokopi/scan paspor tersebut.',
          translation: 'Pilihlah pernyataan yang benar mengenai identifikasi tamu berkewarganegaraan asing berdasarkan Undang-Undang Ryokan Jepang.'
        }
      ],
      officialReference: {
        source: 'Center for Accommodation Industry Examination (一般社団法人宿泊業技能試験センター)',
        agency: 'Japan Tourism Agency (JTA / 観光庁)',
        documentTitle: '宿泊業技能測定試験実施要領および公式サンプル問題集'
      }
    }
  ],

  // ==========================================================================
  // SIMULASI UJIAN LENGKAP (EXAM SIMULATION)
  // ==========================================================================
  examSimulation: {
    title: 'Simulasi Resmi Ujian Keahlian Akomodasi SSW (宿泊業技能測定試験)',
    subtitle: 'Standar Evaluasi CBT Prometric Resmi Badan Pariwisata Jepang (JTA / 観光庁) — 6 Soal Komprehensif',
    timeMinutes: 25,
    passingScorePercentage: 65,
    questions: [
      {
        id: 'hosp_sim_q1',
        questionNumber: 1,
        questionText: 'チェックイン時間（15:00）より前の午前11時に到着されたお客様から「今すぐ部屋に入って休みたい」と要望されたが、まだ客室清掃が完了していない場合のフロントスタッフの対応として、最も適切なものを一つ選びなさい。',
        situation: 'Tamu tiba lebih awal (Early check-in) pada jam 11:00 sementara kamar belum selesai dibersihkan.',
        options: [
          '「チェックインは15時からと決まっていますから、時間まで外に出ていてください」と冷たく断る。',
          'まだ前の客のゴミや汚れが残ったままの部屋であるが、お客様が急いでいるのでそのまま鍵を渡して案内する。',
          '現在お部屋を清潔に清掃・準備中である旨を丁重にお詫びし、お荷物をクロークでお預かりした上で、ロビーラウンジ等でお休みいただけるようご案内する。',
          '他のお客様の予約が入っている清掃完了済みの部屋の鍵を、勝手にこのお客様に渡してしまう。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Ketika kamar belum siap karena masih dalam proses pembersihan higienis, jelaskan secara sopan, tawarkan penitipan koper (baggage check-in di cloak), dan berikan kenyamanan menunggu di lounge. Memberikan kamar kotor (Pilihan 1) atau menolak secara kasar (Pilihan 0) adalah pelanggaran etika hospitality.',
        translation: 'Pilihlah respons front desk yang paling tepat ketika tamu tiba jam 11:00 pagi meminta langsung masuk kamar, sementara kamar belum selesai dibersihkan.'
      },
      {
        id: 'hosp_sim_q2',
        questionNumber: 2,
        questionText: '客室清掃（ハウスキーピング）における使用済みリネン（シーツ・枕カバー等）の取り扱いについて、衛生管理上正しいものを一つ選びなさい。',
        situation: 'SOP higienitas penanganan linen kotor saat membersihkan kamar setelah checkout.',
        options: [
          '作業を早く終わらせるため、取り外したシーツを客室の絨毯（カーペット）や廊下の床の上に投げ置いておく。',
          '使用済みの汚れたリネン類は、病原菌やホコリの拡散を防ぐため、床に直接置かず直ちにリネン回収バッグに入れる。',
          '前の客がシーツを綺麗に使っていたように見えた場合は、交換せずにそのまま伸ばして次の客に提供する。',
          '使用済みシーツを客室のユニットバスの浴槽に溜めた水で軽く手洗いして再利用する。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Standar sanitasi ketat mengharuskan seluruh linen kotor dimasukkan langsung ke kantong troli linen tanpa menyentuh lantai guna mencegah penyebaran kutu kasur, bakteri, dan debu. Sprei wajib diganti baru untuk setiap tamu baru.',
        translation: 'Pilihlah penanganan linen kotor yang benar secara manajemen higienitas dalam pembersihan kamar hotel.'
      },
      {
        id: 'hosp_sim_q3',
        questionNumber: 3,
        questionText: '深夜23時30分に、402号室のお客様から「隣の403号室のテレビの音や話し声がうるさくて眠れない」とフロントに電話で苦情があった際の対応として、最も適切なものを一つ選びなさい。',
        situation: 'Penanganan keluhan kebisingan dari kamar tetangga di larut malam.',
        options: [
          '「お客様ご自身で403号室のドアを直接ノックして、静かにするよう注意してください」と伝える。',
          'ご迷惑をおかけしていることを丁重にお詫びし、スタッフが直ちに403号室へ伺い、他のお客様のご迷惑にならないよう丁寧にお願い・注意する。',
          'もう夜遅いので、翌朝の朝食時間まで苦情の電話を無視して放っておく。',
          'フロントの電気ブレーカーを操作して、403号室の部屋の電源を強制的に停電させる。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Menjaga ketenangan dan keselamatan tamu adalah tanggung jawab staf hotel. Staf harus segera mendatangi kamar yang bising untuk menegur secara sopan. Menyuruh tamu menegur sendiri tetangganya (Pilihan 0) berisiko memicu perkelahian fisik antar-tamu.',
        translation: 'Pilihlah tindakan yang paling tepat ketika menerima komplain telepon larut malam mengenai suara berisik dari kamar sebelah.'
      },
      {
        id: 'hosp_sim_q4',
        questionNumber: 4,
        questionText: 'ホテル滞在中に震度5強の大規模な地震が発生した際の初動対応および避難誘導として、適切でない（誤っている）行動を一つ選びなさい。',
        situation: 'Tindakan yang keliru saat gempa bumi berkekuatan besar di gedung hotel.',
        options: [
          'お客様に慌てて外に飛び出さないよう呼びかけ、頑丈な机の下に潜るなど頭部を保護するよう促す。',
          '建物の歪みによる閉じ込めを防ぐため、客室の避難ドアを少し開けて退路を確保する。',
          '高層階にいるお客様全員を、最速で屋外へ避難させるためにエレベーターに乗せて一気に降ろす。',
          '揺れが収まった後、館内放送で落ち着いた避難を呼びかけ、非常階段を使用して安全な避難場所へ誘導する。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 keliru (maka ini adalah jawaban yang dicari). Saat gempa bumi, ELEVATOR SANGAT BERBAHAYA DIGUNAKAN karena kabel lift dapat putus, macet di antara lantai akibat sensor otomatis pemadaman listrik, atau roboh. Seluruh proses evakuasi wajib menggunakan tangga darurat (Hijou kaidan).',
        translation: 'Pilihlah tindakan yang TIDAK TEPAT (keliru) saat terjadi gempa bumi besar di gedung hotel.'
      },
      {
        id: 'hosp_sim_q5',
        questionNumber: 5,
        questionText: 'チェックアウト後の客室清掃中、ベッドの枕の下から高級な腕時計を発見した際のスタッフの行動として、最も適切なものを一つ選びなさい。',
        situation: 'Prosedur penanganan penemuan barang berharga yang tertinggal di kamar tamu (Lost & Found).',
        options: [
          'お客様が忘れていったものなので、発見したスタッフ個人のポケットに入れて持ち帰る。',
          '発見した日時、客室番号、発見場所（枕の下）を詳細に記録し、速やかにフロントの責任者へ届け出て金庫に保管する。',
          'どうせ取りに戻らないだろうと勝手に判断し、ゴミ箱に捨てて破棄する。',
          '仕事が終わった後、リサイクルショップに持って行って売却する。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Barang tertinggal (Wasuremono / 遺失物) adalah milik sah tamu. Staf wajib mencatat secara rinci (waktu, nomor kamar, posisi) dan menyerahkannya ke supervisor front office untuk disimpan di brankas terkunci sesuai regulasi hukum Jepang. Menyimpan atau menjual (Pilihan 0, 3) adalah tindak pidana pencurian.',
        translation: 'Pilihlah tindakan staf yang paling tepat ketika menemukan jam tangan mewah di bawah bantal kamar setelah checkout.'
      },
      {
        id: 'hosp_sim_q6',
        questionNumber: 6,
        questionText: '朝食ビュッフェ会場で、お客様から「私はエビとカニに重いアレルギーがあるのですが、この料理に入っていますか」と質問された際のレストランスタッフの対応として、最も適切なものを一つ選びなさい。',
        situation: 'Penanganan pertanyaan alergi makanan (udang dan kepiting) oleh tamu di restoran buffet.',
        options: [
          '「たぶん入っていないと思いますよ」と、曖昧な自己判断で適当に答えて料理を食べさせる。',
          '「少しだけ食べてみて、身体が痒くならなければ大丈夫です」とお客様自身に試させる。',
          '自己判断をせず、アレルギー食材管理シート（アレルゲン成分表）を確認し、調理責任者（シェフ）に確実に確認した上で正確な情報を説明する。',
          '質問されて面倒だったので、「アレルギーがあるなら料理を食べないでください」と怒る。'
        ],
        correctAnswerIndex: 2,
        explanation: 'Pilihan 3 benar. Alergi makanan (terutama krustasea seperti udang dan kepiting) dapat memicu syok anafilaksis yang mengancam jiwa. Staf dilarang keras menebak-nebak (Pilihan 0). Wajib memeriksa lembar daftar alergen resmi dan mengonfirmasikannya langsung kepada koki dapur sebelum menjawab tamu.',
        translation: 'Pilihlah respons staf restoran yang paling tepat saat ditanya tamu mengenai kandungan alergi udang dan kepiting pada menu makanan.'
      }
    ]
  }
};
