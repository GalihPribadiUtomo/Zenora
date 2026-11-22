import { SswSectorData } from '../../types/ssw';

export const FOOD_MANUFACTURING_SECTOR_DATA: SswSectorData = {
  id: 'manufacturing',
  name: 'Food Manufacturing (Pengolahan Makanan & Minuman)',
  japaneseName: '飲食料品製造業',
  romajiName: 'Inshokuryouhin Seizougyou',
  iconName: 'Factory',
  tagline: 'Menguasai operasional lini produksi, manajemen sanitasi umum 5S, sistem keamanan pangan HACCP, dan keselamatan kerja (K3) pabrik berstandar resmi Jepang.',
  badge: 'Banyak Lowongan',
  badgeColor: 'text-blue-400 bg-blue-500/15 border-blue-500/30',
  overview: {
    workEnvironment: 'Bekerja di pabrik pengolahan makanan berskala industri di seluruh Jepang (pabrik bento konbini, bakery/roti, makanan beku olahan/frozen food, pengolahan daging/unggas, produk olahan laut/seafood, delicatessen/souzai, bumbu dapur, dan minuman) yang menerapkan otomatisasi lini conveyor, sistem zonasi sanitasi (zonasi steril), dan standar keamanan pangan HACCP yang ketat.',
    mainDuties: [
      'Penerimaan bahan baku (ukere-ire kensa), pemilahan bahan, dan manajemen penyimpanan rantai dingin sesuai suhu standar.',
      'Operasional lini pemrosesan (pemotongan/saidan, penimbangan/keiryou, pencampuran/chougou, pemasakan termal/kanetsu, dan pendinginan cepat/reikyaku).',
      'Pengoperasian mesin pengemas otomatis (packing, heat sealer, vacuum packaging, dan mesin pencetak tanggal kadaluwarsa).',
      'Pengendalian mutu & deteksi benda asing (metal detector kalibrasi test piece, X-ray foreign body detector, dan weight checker).',
      'Sanitasi menyeluruh fasilitas dan mesin pabrik (bongkar pasang/bunkai senjou, disinfeksi sodium hipoklorit, pembersihan drainase/haisuikou) sesuai prinsip 5S dan 7 Prinsip HACCP.',
      'Penerapan keselamatan dan kesehatan kerja (K3), penggunaan APD khusus (sarung tangan mexcel & rantai, boot anti-minyak berpenutup), serta pencegahan insiden melalui KYT dan Hiyari-Hatto.'
    ],
    technicalExamName: 'Food and Beverage Manufacturing Skills Measurement Test (飲食料品製造業技能測定試験)',
    examOrganizer: 'OTAFF (一般社団法人外国人食品産業技能評価機構) & MAFF (農林水産省)',
    passRequirement: 'Lulus Ujian Teori Akademik (学科試験 - 30 soal) dan Ujian Praktik/Penilaian Gambar Situasi (実技試験 / 判断等試験 - 15 soal) dengan skor minimal 65% + sertifikat kemahiran bahasa Jepang (JFT-Basic A2 atau JLPT N4).',
    salaryInsight: 'Gaji pokok berkisar antara ¥190.000 hingga ¥255.000/bulan (di luar tunjangan shift malam / koutai teate, lembur, dan bonus tahunan).'
  },
  officialReferences: [
    {
      title: 'Food and Beverage Manufacturing Skills Measurement Test Textbook 4th Edition (飲食料品製造業技能測定試験学習用テキスト 第4版 - 2024年2月)',
      agency: 'OTAFF (一般社団法人 外国人食品産業技能評価機構)',
      description: 'Buku teks kurikulum resmi terbaru untuk pekerja Specified Skilled Worker (SSW Tokutei Ginou 1) bidang pengolahan makanan dan minuman di Jepang.'
    },
    {
      title: 'Standards for Manufacturing and Processing Foods and Food Additives (食品等の製造・加工に関する基準)',
      agency: 'Ministry of Health, Labour and Welfare (MHLW / 厚生労働省) & MAFF (農林水産省)',
      description: 'Pedoman standar hukum nasional keamanan pangan, regulasi kewajiban pelabelan 8 alergen utama, dan keselamatan kerja industri manufaktur.'
    }
  ],
  chapters: [
    // ------------------------------------------------------------------------
    // BAB 1: PENGENALAN BIDANG & BUDAYA KERJA PABRIK PANGAN
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch1',
      sectorId: 'manufacturing',
      category: 'pengenalan',
      chapterNumber: 1,
      title: 'Ekosistem Industri Manufaktur Pangan & Budaya Kerja Pabrik Jepang',
      japaneseTitle: '飲食料品製造業の概要と工場の就業ルール',
      estimatedMinutes: 30,
      objectives: [
        'Memahami profil dan skala industri pengolahan pangan Jepang senilai 37 triliun yen serta ragam subsektor produksinya.',
        'Menguasai dua pilar kompetensi inti pekerja SSW: Higiene Makanan (食品衛生 - melindungi nyawa) dan Keselamatan Kerja (労働安全 - melindungi pekerja).',
        'Menerapkan prosedur pemeriksaan kesehatan mandiri sebelum bekerja (健康チェック) dan pelaporan kondisi tubuh.',
        'Mempraktikkan standar pemakaian seragam kerja steril (作業服), larangan membawa benda asing/pribadi, dan prosedur cuci tangan resmi 5 tahap.'
      ],
      contentExplanation: `### 1. Skala Industri & Ragam Subsektor Manufaktur Pangan Jepang

Industri manufaktur makanan dan minuman (**飲食料品製造業 - Inshokuryouhin Seizougyou**) adalah sektor vital penopang kehidupan masyarakat Jepang. Berdasarkan data statistik Kementerian Pertanian, Kehutanan, dan Perikanan Jepang (MAFF / 農林水産省), nilai produksi dalam negeri industri pengolahan pangan mencapai sekitar **37 triliun yen** (sekitar 36,5 triliun yen pada tahun Reiwa 3).

Sektor ini mencakup berbagai bidang pabrik pengolahan bahan pangan dan minuman:
- **Minuman (飲料品 - Inryouhin)**: 3,8 triliun yen (10%) — teh kemasan, jus buah, kopi, air mineral botol.
- **Produk Peternakan (畜産食料品 - Chikusan Shokuryouhin)**: 3,5 triliun yen (10%) — ham, sosis, daging asap (bacon).
- **Kudapan & Biskuit (菓子類 - Kashirui)**: 3,3 triliun yen (9%) — snack, kue basah, permen, biskuit.
- **Produk Pengolahan Laut (水産食料品 - Suisan Shokuryouhin)**: 2,9 triliun yen (8%) — ikan beku olahan, surimi, kamaboko.
- **Lauk Bento & Delicatessen (そう菜・すし・弁当 - Souzai, Sushi, Bento)**: 2,8 triliun yen (8%) — bento konbini, onigiri siap saji, lauk kemasan.
- **Daging Olahan (食肉 - Shokuniku)**: 2,6 triliun yen (7%) — potongan daging segar siap masak.
- **Penggilingan Padi & Tepung (精穀・製粉 - Seikoku, Seifun)**: 2,4 triliun yen (7%) — beras poles, tepung terigu industri.
- **Roti & Bakery (パン類 - Panrui)**: 1,9 triliun yen (5%) — roti tawar, roti manis industri.
- **Bumbu Masak (調味料 - Choumiryou)**: 1,8 triliun yen (5%) — miso, shoyu, saus, bumbu cair.
- **Mie Industri (めん類 - Menrui)**: 1,0 triliun yen (3%) — mie basah ramen, udon, soba kemasan.
- **Makanan Beku Siap Masak (冷凍調理食品 - Reitou Chouri Shokuhin)**: 0,6 triliun yen (2%) — gyoza beku, korokke beku, karaage beku.
- **Makanan Retort (レトルト食品 - Retoruto Shokuhin)**: 0,2 triliun yen (kari siap saji, pasta pouch).
- **Subsektor lainnya**: 9,6 triliun yen (26%).

---

### 2. Dua Keterampilan Inti Pekerja SSW: Higiene Pangan & Keselamatan Kerja

Pekerja dengan status izin tinggal Tokutei Ginou 1 di pabrik manufaktur pangan wajib menguasai dua fondasi mendasar:

1. **Higiene Pangan (食品衛生 - Shokuhin Eisei)**:
   - Kata **"衛生" (Eisei)** secara harfiah bermakna *"menjaga nyawa/kehidupan"* (生命を衛る / いのちをまもる).
   - "食品衛生" berarti memastikan bahwa **orang yang memakan makanan tersebut tidak jatuh sakit dan tidak mengalami cedera**.
   - Menghasilkan makanan yang aman melalui sanitasi ketat disebut **"衛生管理" (Manajemen Higiene)**. Jika makanan tercemar atau tidak aman dikonsumsi hingga menyebabkan keracunan atau luka, konsumen akan sakit, pabrik akan dituntut, dan perusahaan akan **kehilangan kredibilitas serta kepercayaan publik (信用をなくす - Shinyou wo nakusu)**.

2. **Keselamatan Kerja (労働安全 - Roudou Anzen)**:
   - "労働安全" bermakna **melindungi keselamatan fisik dan kesehatan para pekerja** di pabrik (作業者の安全と健康を守る).
   - Pekerja wajib mengenakan seragam kerja dan alat pelindung diri (APD / 安全保護具) secara benar, serta mematuhi **Manual Prosedur Operasional (作業手順書 - Sagyou Tejunsho)** dan peraturan pabrik (工場のルール).

---

### 3. Pemeriksaan Kesehatan Diri Mandiri (健康チェック - Kenkou Chekku)

Sebelum memulai shift kerja di tempat produksi pangan, setiap pekerja wajib menjalani dan mengisi lembar **Pemeriksaan Kesehatan (健康チェック)**:
- **Gejala Saluran Cerna**: Memastikan tidak mengalami sakit perut (腹痛), diare (下痢), mual (吐き気), maupun muntah (嘔吐).
- **Gejala Fisik Lain**: Memastikan tidak mengalami demam (発熱) atau gejala flu/batuk.
- **Kondisi Tangan & Jari**: Memastikan tidak ada luka sayat, goresan, lecet (手や指の傷), atau bisul bernanah pada jari tangan. Luka terbuka merupakan sarang utama bakteri *Staphylococcus aureus* (黄色ブドウ球菌) yang dapat mencemari makanan.
- **Kewajiban Pelaporan**: Jika mengalami salah satu gejala di atas, pekerja **DILARANG MERAHASIAKANNYA** dan **WAJIB MELAPOR KEPADA PENANGGUNG JAWAB (責任者へ報告)**. Jika di tengah shift mendadak merasa sakit perut atau jari tergores, segera hentikan pekerjaan dan lapor.
- **Pemeriksaan Berkala**: Pekerja wajib menjalani Uji Sampel Feses (検便 - Kenben) berkala bulanan untuk deteksi Salmonella, Shigella, dan EHEC O157, serta General Medical Check-up (定期健康診断).

---

### 4. Standar Pemakaian Seragam Kerja Pabrik (作業服の着用) & Larangan Benda Asing

Untuk mencegah kontaminasi debu, kotoran, rambut, dan mikroorganisme ke dalam bahan pangan, seragam pabrik dirancang dengan spesifikasi khusus dan wajib dipakai di **ruang ganti (更衣室 - Kouishitsu)**:
- **Desain Pakaian Kerja**: Wajib memilih pakaian bersih sesuai ukuran tubuh. Seragam pabrik pangan **TIDAK BOLEH MEMILIKI KANTONG / SAKU LUAR (ポケットなし)** dan **TIDAK BOLEH MENGGUNAKAN KANCING LUAR (ボタンなし)** guna mencegah barang jatuh atau kancing terlepas ke makanan. Lengan dan pergelangan kaki menggunakan karet elastis rapat (ゴム絞り).
- **Pakaian Bagian Dalam**: Kaos dalam tidak boleh berkancing, dan ujung pakaian dalam/kemeja harus dimasukkan rapi ke dalam celana (ズボンの中に入れる).
- **Larangan Aksesoris & Kosmetik**: Dilarang memakai cincin (指輪), gelang (腕輪), jam tangan (腕時計), anting/tindik (ピアス・イヤリング), kalung, jepit rambut (ヘアピン), dan bulu mata palsu (つけまつげ). Kuku wajib selalu dipotong pendek; dilarang menggunakan kuku palsu atau cat kuku (マニキュア).
- **Larangan Benda Pribadi & Parfum**: Dilarang membawa smartphone, dompet, kunci, koin, rokok, atau makanan/minuman ke ruang produksi. Dilarang membawa dokumen yang berstaples/klip kertas, serta pensil/pulpen dengan per atau isi mudah patah. Parfum dan minyak wangi **DILARANG KERAS** karena aromanya dapat mencemari cita rasa produk dan menutupi bau busuk bahan pangan.
- **Urutan Resmi Mengenakan Seragam**:
  1. *Brushing (ブラッシング)*: Menyisir dan menyikat rambut kepala secara menyeluruh.
  2. *Hairnet (ヘアーネット)*: Mengenakan jaring rambut hingga seluruh helaian rambut tertutup rapat di dalamnya.
  3. *Topi Pabrik (帽子)*: Mengenakan topi penutup kepala dan mengencangkannya. Topi dimasukkan ke dalam kerah seragam.
  4. *Seragam Kerja (作業服)*: Mengenakan seragam, menaikkan ritsleting kerah berdiri (縦襟) hingga batas dagu.
  5. *Masker (マスク)*: Menutup hidung hingga bawah dagu, kawat hidung ditekan rapat agar tidak ada celah.
  6. *Konfirmasi Cermin (鏡で確認)*: Memeriksa diri di depan cermin ukuran penuh memastikan tidak ada rambut mencuat, masker rapat, dan kerah terkancing.

---

### 5. Prosedur Pembersihan Partikel & Cuci Tangan 5 Tahap Resmi

Sebelum melangkah dari ruang ganti ke koridor produksi, pekerja wajib melalui proses pembersihan fisik:
- **Rol Perekat (粘着ローラー - Nenchaku Rouraa)**: Menggulung rol berperekat di seluruh permukaan seragam (bahu, dada, punggung, lengan, paha) berpasangan atau mandiri untuk mengangkat rambut dan serat benang yang menempel.
- **Pancuran Udara (エアーシャワー - Air Shower)**: Masuk ke bilik semprotan angin bertekanan tinggi sambil mengangkat kedua tangan dan memutar badan selama 15–20 detik agar sisa partikel debu terhembus keluar.
- **Alas Kaki Khusus (履き替え - Hakikae)**: Mengganti sepatu luar dengan sepatu kerja pabrik (作業靴). Ketika ke toilet, wajib mengganti sepatu kerja dengan sandal/bakiak khusus toilet (トイレ用の履物) agar tidak membawa bakteri kotoran manusia (seperti Norovirus) ke area kerja.

**SOP Cuci Tangan Standar Sanitasi (5 Tahap Resmi OTAFF)**:
1. **Basahi dengan air mengalir (流水)**: Bersihkan kotoran kasar awal pada kedua tangan.
2. **Sabun cuci tangan (せっけん)**: Cuci tangan, telapak, punggung tangan, pergelangan tangan, sela-sela jari, ujung jari, dan bawah kuku menggunakan sikat kuku selama **30 detik**.
3. **Bilas air mengalir (流水で洗い流す)**: Bilas busa sabun hingga benar-benar bersih selama **20 detik**.
4. **Keringkan tangan**: Gunakan kertas tisu sekali pakai (ペーパータオル) atau mesin pengering udara (エアータオル). Dilarang menyeka tangan pada baju kerja!
5. **Disinfeksi alkohol (消毒用アルコール)**: Semprotkan alkohol cair ke kedua telapak tangan lalu usap dan gosokkan merata ke sela-sela jari hingga kering alami.`,
      keyTerms: [
        {
          japanese: '飲食料品製造業',
          kana: 'いんしょくりょうひんせいぞうぎょう',
          romaji: 'inshokuryouhin seizougyou',
          indonesian: 'Industri manufaktur makanan dan minuman (skala pabrik industri Jepang).'
        },
        {
          japanese: '食品衛生',
          kana: 'しょくひんえいせい',
          romaji: 'shokuhin eisei',
          indonesian: 'Higiene pangan / kebersihan makanan (menjaga nyawa konsumen agar tidak sakit/cedera).'
        },
        {
          japanese: '労働安全',
          kana: 'ろうどうあんぜん',
          romaji: 'roudou anzen',
          indonesian: 'Keselamatan & kesehatan kerja (K3) untuk melindungi keselamatan fisik dan jiwa pekerja.'
        },
        {
          japanese: '健康チェック',
          kana: 'けんこうちぇっく',
          romaji: 'kenkou chekku',
          indonesian: 'Pemeriksaan kesehatan mandiri harian sebelum shift (diare, demam, mual, luka jari).'
        },
        {
          japanese: '検便',
          kana: 'けんべん',
          romaji: 'kenben',
          indonesian: 'Uji feses berkala pekerja pabrik untuk mendeteksi bakteri usus patogen (Salmonella, O157).'
        },
        {
          japanese: '作業服',
          kana: 'さぎょうふく',
          romaji: 'sagyoufuku',
          indonesian: 'Pakaian seragam kerja steril pabrik (tanpa saku luar, tanpa kancing luar).'
        },
        {
          japanese: 'ヘアーネット',
          kana: 'へあーねっと',
          romaji: 'heaanetto',
          indonesian: 'Jaring rambut khusus yang membungkus seluruh helaian rambut di dalam topi kerja.'
        },
        {
          japanese: '粘着ローラー',
          kana: 'ねんちゃくろーらー',
          romaji: 'nenchaku rouraa',
          indonesian: 'Rol berperekat untuk mengangkat rambut, bulu, dan debu halus dari seragam.'
        },
        {
          japanese: 'エアーシャワー',
          kana: 'えあーしゃわー',
          romaji: 'eaashawaa',
          indonesian: 'Bilik pancuran angin bertekanan tinggi untuk menghembuskan partikel debu sebelum masuk lini.'
        },
        {
          japanese: '手洗い',
          kana: 'てあらい',
          romaji: 'tearai',
          indonesian: 'Prosedur cuci tangan higienis (30 detik sabun + 20 detik bilas air mengalir).'
        },
        {
          japanese: '消毒用アルコール',
          kana: 'しょうどくようあるこーる',
          romaji: 'shoudokuyou arukooru',
          indonesian: 'Cairan alkohol disinfektan untuk sterilisasi tangan dan alat pemroses pangan.'
        },
        {
          japanese: '作業手順書',
          kana: 'さぎょうてじゅんしょ',
          romaji: 'sagyou tejunsho',
          indonesian: 'Manual prosedur kerja resmi / Standard Operating Procedure (SOP) pabrik.'
        },
        {
          japanese: '信用',
          kana: 'しんよう',
          romaji: 'shinyou',
          indonesian: 'Kepercayaan dan kredibilitas konsumen/mitra bisnis terhadap produsen pangan.'
        },
        {
          japanese: '履き替え',
          kana: 'はきかえ',
          romaji: 'hakikae',
          indonesian: 'Penggantian alas kaki khusus (sepatu kerja, sandal toilet) untuk mencegah cemaran silang.'
        },
        {
          japanese: '更衣室',
          kana: 'こういしつ',
          romaji: 'kouishitsu',
          indonesian: 'Ruang ganti pakaian steril pekerja pabrik untuk memisahkan baju harian dan seragam kerja.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus Lapangan: Pekerja Mengalami Luka Gores pada Jari dan Diare di Pagi Hari',
        scenario: 'Rian, seorang pekerja baru di pabrik pengolahan bento, bangun pagi dengan kondisi perut mulas dan diare ringan. Saat mempersiapkan diri di ruang ganti, ia juga menyadari ada luka gores kecil di jari telunjuk kanannya akibat terkena tepi kaleng tadi malam di asrama. Karena takut dipotong gaji dan merasa shift produksi sedang padat, Rian berniat langsung memakai sarung tangan karet dan diam-diam mulai bekerja di lini topping.',
        dialogue: [
          {
            speaker: 'リーダー (Leader Sato)',
            role: 'Line Leader',
            japanese: 'リアンさん、おはようございます。健康チェックシートを確認しましたか？手の傷や下痢の症状はありませんか？',
            kana: 'リアンさん、おはようございます。けんこうちぇっくしーとをかくにんしましたか？てのきずやげりのしょうじょうはありませんか？',
            romaji: 'Rian-san, ohayou gozaimasu. Kenkou chekku shiito wo kakunin shimashita ka? Te no kizu ya geri no shoujou wa arimasen ka?',
            indonesian: 'Rian, selamat pagi. Sudah memeriksa lembar cek kesehatan? Apakah ada luka di tangan atau gejala diare?'
          },
          {
            speaker: 'リアン (Rian)',
            role: 'Pekerja SSW',
            japanese: '実は…今朝から少しお腹が痛くて下痢があります。それに、昨夜指に小さな傷を作ってしまいました。',
            kana: 'じつは…けさからすこしおなかがいたくてげりがあります。それに、さくやゆびにちいさなきずをつくってしまいました。',
            romaji: 'Jitsu wa... kesa kara sukoshi onaka ga itakute geri ga arimasu. Sore ni, sakuya yubi ni chiisana kizu wo tsukutte shimaimashita.',
            indonesian: 'Sebenarnya... sejak pagi ini perut saya agak sakit dan diare. Selain itu, tadi malam jari saya terluka gores kecil.'
          },
          {
            speaker: 'リーダー (Leader Sato)',
            role: 'Line Leader',
            japanese: '正直に報告してくれて助かりました。手指の傷口には黄色ブドウ球菌、下痢にはノロウイルスや他の病原菌のリスクがあります。食品に直接触れる作業はできません。今日は加熱ラインの段ボール梱包作業に交代しましょう。傷口は救急箱で消毒・専用フィルムで保護してください。',
            kana: 'しょうじきにほうこくしてくれたすかりました。てゆびのきずぐちにはおうしょくぶどうきゅうきん、げりにはのろういるすやほかのびょうげんきんのりすくがあります。しょくひんにちょくせつふれるさぎょうはできません。きょうはかねつらいんのだんぼーるこんぽうさぎょうにこうたいしましょう。きずぐちはきゅうきゅうばこでしょうどく・せんようふぃるむでほごしてください。',
            romaji: 'Shoujiki ni houkoku shite kurete tasakarimashita. Teyubi no kizuguchi ni wa oushoku budoukyuukin, geri ni wa norouirusu ya hoka no byougenkin no risuku ga arimasu. Shokuhin ni chokusetsu fureru sagyou wa dekimasen. Kyou wa kanetsu rain no danbooru konpou sagyou ni koutai shimashou. Kizuguchi wa kyuukyuubako de shoudoku, senyou firumu de hogo shite kudasai.',
            indonesian: 'Terima kasih telah melapor dengan jujur. Luka pada jari berisiko bakteri Staphylococcus aureus, dan diare berisiko Norovirus atau patogen lain. Anda tidak boleh menyentuh makanan langsung hari ini. Kita alihkan tugas Anda ke pengemasan kardus luar produk matang. Segera obati luka di kotak P3K dengan disinfektan dan tutup dengan plester kedap air tahan detektor.'
          }
        ],
        takeaway: 'Kejujuran dalam mengisi lembar cek kesehatan harian adalah kewajiban mutlak di pabrik Jepang. Menyembunyikan diare atau luka gores dapat menyebabkan keracunan makanan massal yang mematikan dan menghancurkan reputasi pabrik.'
      },
      visualDiagram: {
        title: '5 Tahap Cuci Tangan Higienis Resmi Pabrik Pangan Jepang',
        subtitle: 'Standar OTAFF untuk Membasmi Mikroorganisme Patogen Sebelum Masuk Area Produksi',
        type: 'steps',
        items: [
          {
            label: 'Tahap 1: Pembasahan Air Mengalir',
            description: 'Basahi kedua tangan dengan air bersih mengalir untuk melarutkan debu dan kotoran permukaan kasar.',
            highlight: 'Air Mengalir (流水)'
          },
          {
            label: 'Tahap 2: Penyabunan Mendalam (30 Detik)',
            description: 'Gunakan sabun antiseptik cair. Gosok telapak, punggung tangan, sela-sela jari, ibu jari, pergelangan tangan, dan sikat bawah kuku.',
            highlight: '30 Detik Penuh'
          },
          {
            label: 'Tahap 3: Pembilasan Tuntas (20 Detik)',
            description: 'Bilas seluruh busa sabun di bawah air mengalir hingga tidak ada sisa licin deterjen sedikit pun.',
            highlight: '20 Detik Pembilasan'
          },
          {
            label: 'Tahap 4: Pengeringan Sekali Pakai',
            description: 'Keringkan tangan menggunakan paper towel sekali pakai atau air shower dryer. DILARANG mengeringkan pada seragam baju kerja!',
            highlight: 'Paper Towel / Air Dryer'
          },
          {
            label: 'Tahap 5: Disinfeksi Alkohol 70%+',
            description: 'Semprotkan alkohol disinfektan ke kedua tangan dan gosokkan merata ke seluruh jari hingga mengering sendiri.',
            highlight: 'Alkohol Disinfektan'
          }
        ]
      },
      importantPoints: [
        'Nilai produksi industri pengolahan pangan Jepang mencapai sekitar 37 triliun yen dengan subsektor terbesar minuman (10%) dan produk peternakan (10%).',
        'Kata "衛生" (Eisei) bermakna menjaga nyawa/kehidupan (生命をまもる). Makanan aman memastikan konsumen tidak sakit atau terluka.',
        'Pekerja wajib mengisi lembar cek kesehatan mandiri (健康チェック) harian: diare, muntah, demam, dan luka pada jari tangan wajib dilaporkan.',
        'Seragam pabrik pangan TIDAK BOLEH memiliki kantong luar (ポケットなし) dan kancing luar (ボタンなし) untuk mencegah kontaminasi benda asing.',
        'Pekerja dilarang memakai cincin, jam tangan, anting, cat kuku, serta dilarang membawa HP, rokok, staples, klip, atau parfum beraroma menyengat.',
        'Saat ke toilet, pekerja wajib mengganti sepatu kerja dengan sandal khusus toilet (トイレ用の履物に履き替え) guna memutus penularan Norovirus.'
      ],
      summary: 'Industri manufaktur makanan dan minuman Jepang (飲食料品製造業) bernilai 37 triliun yen dan menuntut standar tertinggi dalam Higiene Makanan (食品衛生 - melindungi nyawa konsumen) dan Keselamatan Kerja (労働安全 - melindungi pekerja). Setiap pekerja wajib mematuhi SOP (作業手順書), mengisi cek kesehatan mandiri tanpa menutup-nutupi luka atau gejala diare, mengenakan seragam pabrik tanpa saku/kancing luar, serta menerapkan prosedur cuci tangan 5 tahap (30 detik sabun + 20 detik bilas + alkohol) sebelum memasuki lini produksi.',
      practiceQuestions: [
        {
          id: 'mfg_ch1_q1',
          questionNumber: 1,
          questionText: 'Pernyataan manakah yang PALING BENAR mengenai aturan berpakaian kerja (作業服) di pabrik pengolahan pangan Jepang berdasarkan standar resmi OTAFF?',
          situation: 'Persiapan memasuki area pengolahan makanan di ruang ganti (更衣室).',
          options: [
            'Baju kerja boleh memiliki saku luar yang banyak asalkan digunakan untuk menyimpan pulpen mekanik dan telepon genggam.',
            'Baju kerja tidak boleh memiliki saku luar dan kancing luar, rambut harus tertutup jaring (heaanetto) di dalam topi, dan masker menutupi hidung hingga dagu.',
            'Jika suhu ruangan produksi terasa sangat panas, pekerja diperbolehkan menggulung lengan baju dan melepas topi kerja.',
            'Pekerja wanita diperbolehkan menggunakan cat kuku berwarna bening dan perhiasan cincin kawin di dalam pabrik.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Berdasarkan buku panduan OTAFF Edisi ke-4 (halaman 19-23), pakaian kerja pabrik makanan wajib tanpa saku/kantong luar (ポケットなし) dan tanpa kancing luar (ボタンなし) guna mencegah benda jatuh ke produk. Seluruh rambut harus dimasukkan ke jaring (ヘアーネット) di bawah topi, masker menutup hidung hingga dagu, serta dilarang memakai perhiasan, cat kuku, atau menggulung lengan baju.',
          translation: 'Pilihlah pernyataan yang benar mengenai aturan pemakaian seragam kerja di pabrik pangan.'
        },
        {
          id: 'mfg_ch1_q2',
          questionNumber: 2,
          questionText: 'Pekerja pabrik makanan bangun tidur dan mendapati dirinya mengalami diare serta terdapat luka gores di jarinya. Tindakan apakah yang WAJIB dilakukan sebelum shift dimulai?',
          situation: 'Pemeriksaan kesehatan mandiri sebelum bekerja (健康チェック).',
          options: [
            'Minum obat diare, memakai sarung tangan karet ganda, dan langsung bekerja di lini topping bento tanpa memberi tahu siapa pun.',
            'Langsung pulang ke asrama tanpa memberitahukan ketidakhadirannya kepada pihak manajemen pabrik.',
            'Melaporkan kondisi diare dan luka jari dengan jujur kepada penanggung jawab (責任者へ報告) dan mematuhi arahan pengalihan tugas atau perawatan medis.',
            'Menutupi luka jari dengan plester biasa dan tetap bekerja menyentuh makanan olahan siap saji.'
          ],
          correctAnswerIndex: 2,
          explanation: 'Pekerja pabrik pangan wajib melaporkan secara jujur kondisi diare (risiko Norovirus/Salmonella) dan luka jari (sarang Staphylococcus aureus) kepada penanggung jawab (責任者). Penanggung jawab akan mengalihkan tugas ke area non-kontak makanan atau menginstruksikan pengobatan sesuai SOP.',
          translation: 'Pilihlah tindakan yang benar ketika pekerja mengalami diare dan luka jari sebelum bekerja.'
        }
      ],
      officialReference: {
        source: 'Buku Teks Pembelajaran Ujian Keterampilan Manufaktur Makanan & Minuman (第4版, Halaman 1-5, 18-26)',
        agency: 'OTAFF (一般社団法人 外国人食品産業技能評価機構)',
        documentTitle: 'Bab 1: 飲食料品製造業で必要な技能 & Bab 2: 一般衛生管理 (作業者の衛生管理)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 2: MANAJEMEN HIGIENITAS PANGAN & PENGENDALIAN BAHAYA (KOSAKATA)
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch2',
      sectorId: 'manufacturing',
      category: 'kosakata',
      chapterNumber: 2,
      title: 'Manajemen Higienitas Pangan, Klasifikasi 3 Bahaya & Pengendalian Alergen',
      japaneseTitle: '食品衛生・3大危害要因の制御・アレルゲン管理',
      estimatedMinutes: 35,
      objectives: [
        'Menguasai klasifikasi 3 Bahaya Pangan (危害要因): Bahaya Fisik (物理的), Bahaya Kimia (化学的), dan Bahaya Biologis (生物的).',
        'Menghafal 8 Bahan Baku Spesifik Wajib (特定原材料 8品目 - termasuk Walnut / くるみ) dan 20 Bahan Rekomendasi di Jepang.',
        'Memahami karakteristik bakteri patogen utama, pembentukan spora tahan panas (芽胞), serta 3 Prinsip Pencegahan Keracunan Bakteri.',
        'Menguasai penanganan khusus Norovirus (4 Prinsip Pencegahan) dan parasit Anisakis pada ikan laut.'
      ],
      contentExplanation: `### 1. Klasifikasi 3 Bahaya Pangan (危害要因 - Kigai Youin / Hazards)

Dalam industri pengolahan makanan Jepang, segala faktor yang berpotensi menyebabkan penyakit, keracunan, atau cedera pada konsumen disebut **危害要因 (Kigai Youin / Bahaya Pangan)**. Bahaya ini dibagi menjadi 3 kategori utama:

#### (1) Bahaya Fisik (物理的危害要因 - Butsuriteki Kigai Youin)
Benda keras atau tajam yang dapat melukai mulut, mematahkan gigi, atau melukai saluran pencernaan konsumen.
- **Benda Asing Keras (硬質異物 - Koushitsu Ibutsu)**: Pecahan logam (金属片), pecahan kaca (ガラス片), pecahan plastik keras (プラスチック片), batu/kerikil (石).
- **Benda Asing Lunak / Alami**: Serangga (虫), rambut (髪の毛), sobekan kertas (紙片), cangkang telur (卵の殻), duri atau tulang ikan (骨). Meskipun tidak mematahkan gigi, benda ini menimbulkan rasa jijik konsumen, memicu komplain (**苦情・クレーム - Kureemu**), pengembalian produk (**返品 - Henpin**), dan merusak nama baik perusahaan.
- **Tindakan Pencegahan**: Sortasi sayuran (選別), pencucian (洗浄), pemotongan akar sayur, pembuangan insang dan tulang ikan, penutupan wadah bahan olahan (**蓋をする - Futa wo suru**), serta inspeksi detektor logam dan X-ray.

#### (2) Bahaya Kimia (化学的危害要因 - Kagakuteki Kigai Youin)
Zat kimia berbahaya atau komponen beracun yang dapat memicu alergi, keracunan akut, atau kematian:
1. **Alergen Pangan (アレルギー物質 - Arerugii Busshitsu)**:
   - **8 Bahan Baku Spesifik Wajib Cantum (特定原材料 8品目 - Tokutei Genzairyou 8 Hinmoku)**:
     Hukum Pelabelan Pangan Jepang menetapkan 8 bahan yang memiliki angka kejadian alergi sangat tinggi atau memicu gejala fatal (*anaphylactic shock*) yang **WAJIB DICANTUMKAN DI LABEL KEMASAN**:
     1. **Udang (えび - Ebi)**
     2. **Kepiting (かに - Kani)**
     3. **Kacang Kenari / Walnut (くるみ - Kurumi)** *(Catatan Resmi: Resmi dinaikkan statusnya dari anjuran menjadi WAJIB sejak 9 Maret 2023 / Buku Teks OTAFF edisi ke-4 Februari 2024)*.
     4. **Gandum (小麦 - Komugi)**
     5. **Soba / Gandum Kuda (そば - Soba)**
     6. **Telur (卵 - Tamago)**
     7. **Susu (乳 - Nyuu / Miruku)**
     8. **Kacang Tanah / Peanuts (落花生 / ピーナッツ - Rakkasei / Piinattsu)**
   - **20 Bahan Rekomendasi / Dianjurkan (特定原材料に準ずるもの 20品目)**:
     Almond (アーモンド), abalone (あわび), cumi-cumi (いか), telur salmon (いくら), jeruk orange (オレンジ), kacang mete (カシューナッツ), kiwi (キウイフルーツ), daging sapi (牛肉), wijen (ごま), ikan salmon (さけ), ikan makarel/kembung (さば), kacang kedelai (大豆), daging ayam (鶏肉), pisang (バナナ), daging babi (豚肉), jamur matsutake (まつたけ), buah persik (桃 - momo), ubi jepang/yam (やまいも), buah apel (りんご), dan gelatin (ゼラチン).
   - **SOP Mencegah Kontaminasi Silang Alergen**:
     - Wadah dan peralatan (pisau, talenan, sendok timbang) wajib dibedakan per bahan dan diberi **kode warna (色分け)**.
     - Lini produksi yang memproses bahan beralergen harus dibersihkan dan dibilas secara ekstra tuntas.
     - Jadwalkan pembuatan produk berbahan alergen pada **akhir jam produksi harian (一日の終わりに製造)** agar tidak mencemari batch makanan non-alergen sebelumnya.

2. **Histamin (ヒスタミン - Hisutamin)**:
   - Terbentuk pada **ikan berdaging merah (赤身魚 - Akamizakana)** seperti tuna (マグロ), cakalang/tongkol, kembung/makarel (サバ), sarden (イワシ), dan bawal jepang (アジ) jika disimpan pada kondisi suhu buruk (kurang dingin).
   - Histamin menimbulkan reaksi menyerupai alergi hebat (gatal, muka merah, pusing, mual). **Histamin TAHAN PANAS (加温しても分解されない)** dan tidak akan hilang meskipun dimasak mendidih! Bahan baku ikan merah wajib segera disimpan di lemari pendingin atau dibekukan.

3. **Solanin (ソラニン - Soranin)**:
   - Racun alami yang terkandung pada **tunas kentang (じゃがいもの芽)** dan **kulit kentang yang berwarna hijau (緑色の皮)**. Menyebabkan muntah, sakit perut hebat, pusing, dan diare. Tunas dan bagian hijau wajib dikupas dan dibuang sampai bersih sebelum diolah.

4. **Residu Bahan Kimia Pembersih & Sanitasi (薬剤・洗剤)**:
   - Sisa deterjen atau disinfektan (klorin) yang tidak dibilas tuntas dapat meracuni konsumen. Wajib membilas peralatan dengan air bersih mengalir.

---

### 2. Bahaya Biologis (生物的危害要因) & Mikroorganisme Patogen

Bahaya biologis meliputi bakteri peracun makanan (食中毒菌), virus, jamur (カビ), dan parasit (寄生虫):

#### A. Bakteri Patogen Utama (食中毒菌)
1. **Campylobacter (カンピロバクター属菌)**:
   - Sumber: Daging unggas mentah/kurang matang (特に鶏肉).
   - Gejala: Diare hebat, sakit perut melilit, demam tinggi.
2. **Salmonella (サルモネラ属菌)**:
   - Sumber: Telur ayam mentah (鶏卵), daging ayam.
   - Gejala: Diare akut, demam, kram perut.
3. **Vibrio Parahaemolyticus (腸炎ビブリオ - Chouen Biburio)**:
   - Sumber: Ikan dan makanan laut mentah (魚介類, sashimi, sushi). Bakteri halofilik (butuh garam).
   - Gejala: Sakit perut melilit hebat, diare berair parah. Mati oleh air tawar bersih dan panas.
4. **Enterohemorrhagic E. coli / EHEC (腸管出血性大腸菌 - O157, O111)**:
   - Sumber: Daging sapi mentah (牛肉), sayuran tercemar, air sumur (井戸水).
   - Gejala: Memproduksi toksin Shiga di usus, menyebabkan kram perut, diare berdarah (**血便 - Ketsuben**), dan sindrom uremik hemolitik (HUS) yang bisa fatal.
5. **Staphylococcus aureus (黄色ブドウ球菌 - Oushoku Budoukyuukin)**:
   - Sumber: Kulit manusia, bisul, jerawat, luka bernanah pada jari tangan (人の皮膚や傷口).
   - Bahaya Khusus: Tumbuh pada nasi onigiri, bento, dan sandwich. Menghasilkan racun enterotoksin yang **SANGAT TAHAN PANAS (熱に強い毒素)**. Memanaskan makanan yang sudah tercemar racun ini tidak akan mematikan racunnya! Pencegahan utama adalah mencuci tangan dan tidak bekerja saat jari terluka.
6. **Bakteri Pembentuk Spora Tahan Panas (芽胞菌 - Gahoukin)**:
   - **Bacillus cereus (セレウス菌)**: Membentuk spora tahan panas. Menyerang produk olahan biji-bijian, nasi goreng (炒飯), pasta.
   - **Clostridium perfringens (ウェルシュ菌)**: Membentuk spora tahan panas. Berkembang biak di panci kari, sup, dan semur porsi besar yang dibiarkan mendingin perlahan di suhu ruang.
   - **Clostridium botulinum (ボツリヌス菌)**: Membentuk spora tahan panas, bersifat anaerob (hidup tanpa oksigen). Berkembang di makanan kaleng (缶詰), botol, dan kemasan vakum/retort bertekanan tidak sempurna. Menghasilkan neurotoksin mematikan yang menyebabkan kelumpuhan saraf, muntah, sesak napas (**呼吸困難 - Kokyuu konnan**), hingga kematian.

#### B. Konsep Spora Bakteri (芽胞 - Gahou)
- Spora adalah selubung perlindungan diri mirip *"cangkang biji"* yang dibentuk oleh beberapa jenis bakteri (*Bacillus*, *Clostridium*) ketika menghadapi kondisi lingkungan ekstrem (panas, kering, atau kekurangan nutrisi).
- Spora **TIDAK MATI PADA PEMANASAN AIR MENDIDIH 100°C BIASA**.
- Ketika suhu makanan turun kembali ke zona nyaman (20°C–50°C), spora akan berkecambah (germination) kembali menjadi sel bakteri aktif dan menghasilkan racun.
- Untuk mematikan spora botulinum, diperlukan pemanasan sterilisasi retort dengan suhu pusat **120°C selama minimal 4 menit**.

#### C. Tiga Prinsip Pencegahan Keracunan Bakteri (食中毒予防の3原則)
1. **つけない (Tsukenai - Jangan Menempelkan)**: Mencegah perpindahan bakteri ke makanan melalui cuci tangan 5 tahap, kebersihan seragam, dan pemisahan talenan/pisau (mencegah kontaminasi silang).
2. **増やさない (Fuyasanai - Jangan Memperbanyak)**: Mengendalikan suhu dan waktu. Bakteri memerlukan Suhu (温度), Kelembapan/Air (水分), dan Nutrisi (栄養) untuk tumbuh.
   - **Zona Bahaya (Danger Zone)**: Bakteri tumbuh paling pesat pada rentang suhu **30°C hingga 40°C** dengan waktu generasi pembelahan sel (**世代交代時間**) sekitar 20 menit (1 bakteri menjadi >1 juta dalam beberapa jam).
   - Pada suhu **di bawah 10°C**, pertumbuhan bakteri melambat drastis.
   - Pada suhu **di bawah 4°C**, bakteri hampir tidak dapat bertambah.
   - Pada suhu **di bawah -15°C**, bakteri berhenti berkembang biak sama sekali (namun tidak mati).
3. **やっつける (Yattsukeru - Membunuh / Membasmi)**:
   - Pemanasan termal standar membunuh sebagian besar bakteri peracun makanan jika suhu bagian inti/tengah (**中心温度 - Chuushin Ondo**) mencapai **minimal 75°C selama minimal 1 menit**.
   - Untuk bakteri pembentuk spora (*Clostridium botulinum*), suhu pusat harus mencapai **120°C selama minimal 4 menit**.

#### D. Virus Pangan: Norovirus (ノロウイルス) & 4 Prinsip Pencegahannya
- **Karakteristik**: Menyerang saluran pencernaan manusia melalui kerang dwicangkang (**二枚貝 - Nimaigai**) seperti tiram (**牡蠣 - Kaki**), serta melalui kotoran/muntahan orang terinfeksi.
- **Penting**: Norovirus **TIDAK DAPAT BERKEMBANG BIAK DI DALAM MAKANAN** (hanya membelah di usus manusia). Oleh karena itu, prinsip *"Jangan Memperbanyak (増やさない)"* **TIDAK EFEKTIF** untuk Norovirus.
- **Ketahanan**: Norovirus **TIDAK MATI DENGAN ALKOHOL BIASA**. Mematikan Norovirus membutuhkan:
  - Pemanasan termal: Suhu pusat **85°C hingga 90°C selama minimal 90 detik**.
  - Disinfektan kimia: Larutan Sodium Hipoklorit (**次亜塩素酸ナトリウム**) konsentrasi **200 ppm**.
- **4 Prinsip Pencegahan Norovirus (ノロウイルス予防の4原則)**:
  1. **持ち込まない (Mochikomanai - Jangan Membawa Masuk)**: Skrining kesehatan pekerja, melarang pekerja bergejala diare/muntah masuk pabrik.
  2. **つけない (Tsukenai - Jangan Menempelkan)**: Mencuci tangan ketat dengan sabun dan air mengalir setelah dari toilet.
  3. **やっつける (Yattsukeru - Membunuh)**: Pemanasan inti 85–90°C selama ≥ 90 detik atau klorin 200 ppm.
  4. **拡げない (Hirogenai - Jangan Menyebarkan)**: Menangani muntahan dengan kit APD khusus, masker, sarung tangan, dan larutan disinfektan klorin agar partikel aerosol virus tidak menyebar di udara pabrik.

#### E. Parasit: Anisakis (アニサキス)
- Parasit cacing putih berukuran 2–3 cm yang hidup di dalam daging ikan laut seperti saba (サバ), sarden (イワシ), salmon (サケ), aji (アジ), dan cumi (イカ).
- Jika tertelan hidup-hidup, cacing menusuk lambung/usus menyebabkan nyeri kram perut yang luar biasa (**激しい腹痛**).
- **Metode Pembasmian Anisakis**:
  - Pemanasan: Suhu **≥ 70°C seketika**, atau pemanasan **60°C selama minimal 1 menit**.
  - Pembekuan: Dibekukan pada suhu **-20°C atau lebih rendah selama minimal 24 jam**.`,
      keyTerms: [
        {
          japanese: '危害要因',
          kana: 'きがいよういん',
          romaji: 'kigai youin',
          indonesian: 'Faktor bahaya keamanan pangan (Hazard: fisik, kimiawi, biologis).'
        },
        {
          japanese: '物理的危害要因',
          kana: 'ぶつりてききがいよういん',
          romaji: 'butsuriteki kigai youin',
          indonesian: 'Bahaya fisik (benda tajam/keras: pecahan logam, kaca, batu, plastik keras).'
        },
        {
          japanese: '化学的危害要因',
          kana: 'かがくてききがいよういん',
          romaji: 'kagakuteki kigai youin',
          indonesian: 'Bahaya kimiawi (alergen, histamin ikan merah, solanin kentang, sisa deterjen).'
        },
        {
          japanese: '生物的危害要因',
          kana: 'せいぶつてききがいよういん',
          romaji: 'seibutsuteki kigai youin',
          indonesian: 'Bahaya biologis (bakteri patogen, virus pangan, jamur, parasit cacing).'
        },
        {
          japanese: '硬質異物',
          kana: 'こうしついぶつ',
          romaji: 'koushitsu ibutsu',
          indonesian: 'Benda asing keras yang berisiko merusak gigi atau melukai mulut/saluran cerna.'
        },
        {
          japanese: '特定原材料',
          kana: 'とくていげんざいりょう',
          romaji: 'tokutei genzairyou',
          indonesian: '8 Bahan Baku Alergen Wajib Cantum (udang, kepiting, kenari/walnut, gandum, soba, telur, susu, kacang tanah).'
        },
        {
          japanese: 'くるみ',
          kana: 'くるみ',
          romaji: 'kurumi',
          indonesian: 'Kacang kenari (walnut): RESMI ditetapkan menjadi bahan alergen WAJIB ke-8 sejak 2023/2024.'
        },
        {
          japanese: 'ヒスタミン',
          kana: 'ひすたみん',
          romaji: 'hisutamin',
          indonesian: 'Senyawa toksin alergi pada ikan daging merah (tuna, sarden, makarel) yang tahan panas.'
        },
        {
          japanese: 'ソラニン',
          kana: 'そらにん',
          romaji: 'soranin',
          indonesian: 'Racun alami pada tunas kentang dan kulit kentang hijau yang wajib dibuang tuntas.'
        },
        {
          japanese: '食中毒菌',
          kana: 'しょくちゅうどくきん',
          romaji: 'shokuchuudokukin',
          indonesian: 'Bakteri patogen penyebab keracunan makanan (Campylobacter, Salmonella, O157, dll).'
        },
        {
          japanese: '芽胞',
          kana: 'がほう',
          romaji: 'gahou',
          indonesian: 'Spora bakteri: selubung pelindung tahan panas 100°C yang butuh 120°C untuk dimatikan.'
        },
        {
          japanese: '中心温度',
          kana: 'ちゅうしんおんど',
          romaji: 'chuushin ondo',
          indonesian: 'Suhu bagian inti/tengah makanan saat proses pemanasan sterilisasi termal.'
        },
        {
          japanese: '食中毒予防の3原則',
          kana: 'しょくちゅうどくよぼうのさんげんそく',
          romaji: 'shokuchuudoku yobou no san gensoku',
          indonesian: '3 Prinsip pencegahan keracunan bakteri: Jangan menempelkan, Jangan perbanyak, Basmi.'
        },
        {
          japanese: 'ノロウイルス',
          kana: 'のろういるす',
          romaji: 'norouirusu',
          indonesian: 'Norovirus: virus patogen sangat menular dari kerang bivalvia/tiram dan muntahan.'
        },
        {
          japanese: 'ノロウイルス予防の4原則',
          kana: 'のろういるすよぼうのよんげんそく',
          romaji: 'norouirusu yobou no yon gensoku',
          indonesian: '4 Prinsip Norovirus: Jangan bawa masuk, Jangan tempelkan, Basmi (85-90°C), Jangan sebar.'
        },
        {
          japanese: 'アニサキス',
          kana: 'あにさきす',
          romaji: 'anisakis',
          indonesian: 'Parasit cacing usus pada ikan laut (mati pada suhu ≥70°C atau pembekuan -20°C 24 jam).'
        },
        {
          japanese: '世代交代時間',
          kana: 'せだいこうたいじかん',
          romaji: 'sedai koutai jikan',
          indonesian: 'Waktu penggandaan sel mikroorganisme (sekitar 20 menit pada suhu 30°C–40°C).'
        },
        {
          japanese: '交差汚染',
          kana: 'こうさおせん',
          romaji: 'kousa osen',
          indonesian: 'Kontaminasi silang: perpindahan bahaya mikroba/alergen dari bahan kotor ke bahan bersih.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Mengidentifikasi Potensi Bahaya Spora Clostridium Perfringens pada Lini Sup Kari',
        scenario: 'Sebuah pabrik makanan deli memasak 500 liter kuah kari daging sapi dalam ketel uap besar hingga mendidih (100°C). Setelah matang pada pukul 11.00 siang, operator mematikan api dan membiarkan panci raksasa tersebut mendingin sendiri di suhu ruangan pabrik (28°C) hingga pukul 16.00 sebelum dimasukkan ke dalam wadah kemasan bento.',
        dialogue: [
          {
            speaker: '品質管理者 (QC Manager)',
            role: 'Manajer Kontrol Kualitas',
            japanese: 'ちょっと待ってください！加熱調理後のカレーをそのまま室温でゆっくり冷ましてはいけません。ウェルシュ菌の危険を知っていますか？',
            kana: 'ちょっとまってください！かねつちょうりごのかれーをそのまましつおんでゆっくりさましてはいけません。うぇるしゅきんのきけんをしっていますか？',
            romaji: 'Chotto matte kudasai! Kanetsu chourigo no karee wo sono mama shitsuon de yukkuri samashite wa ikemasen. Uerushukin no kiken wo shitte imasu ka?',
            indonesian: 'Tunggu sebentar! Kari setelah dipanaskan tidak boleh dibiarkan mendingin perlahan di suhu ruang seperti itu. Apakah Anda tahu bahaya Clostridium perfringens?'
          },
          {
            speaker: '作業員 (Pekerja)',
            role: 'Operator Pemasakan',
            japanese: '100℃でしっかり沸騰させたので、細菌は全部死滅したと思っていました…',
            kana: 'ひゃくどでしっかりふっとうさせたので、さいきんはぜんぶしめつしたとおもっていました…',
            romaji: 'Hyakudo de shikkari futtou saseta node, saikin wa zenbu shimetsu shita to omotte imashita...',
            indonesian: 'Karena sudah mendidih kuat pada suhu 100°C, saya kira semua bakteri sudah mati...'
          },
          {
            speaker: '品質管理者 (QC Manager)',
            role: 'Manajer Kontrol Kualitas',
            japanese: 'ウェルシュ菌やセレウス菌は熱に強い「芽胞」を作ります。100℃の加熱でも芽胞は生き残ります。そして温度が20℃〜50℃に下がっていく間に芽胞が発芽して急速に増殖するのです。加熱後は直ちにブラストチラーや冷水冷却器で、30分以内に20℃、または60分以内に10℃まで急速冷却しなければなりません！',
            kana: 'うぇるしゅきんやせれうすきんはねつにつよい「がほう」をつくります。ひゃくどのかねつでもがほうはいきのこります。そしておんどがにじゅうどからごじゅうどにさがっていくあいだにがほうがはつがしてきゅうそくにぞうしょくするのです。かねつごはただちにぶらすとちらーやれいすいれいきゃくきで、さんじゅっぷんいないににじゅうど、またはろくじゅっぷんいないにじゅうどまできゅうそくれいきゃくしなければなりません！',
            romaji: 'Clostridium perfringens dan Bacillus cereus membentuk spora (芽胞) tahan panas. Spora bertahan hidup bahkan pada 100°C. Begitu suhu turun ke 20°C–50°C, spora berkecambah dan membelah sangat cepat. Setelah dimasak, makanan wajib didinginkan cepat dengan pendingin udara/air: turun ke 20°C dalam 30 menit atau ke 10°C dalam 60 menit!',
            indonesian: 'Clostridium perfringens dan Bacillus cereus membentuk spora tahan panas yang bertahan pada 100°C. Spora akan berkecambah saat suhu turun ke 20-50°C. Makanan harus segera didinginkan cepat menggunakan chiller: mencapai 20°C dalam 30 menit atau 10°C dalam 60 menit!'
          }
        ],
        takeaway: 'Pemanasan 100°C tidak mematikan spora bakteri (芽胞菌). Prosedur pendinginan cepat pasca-pemasakan (30 menit ke 20°C atau 60 menit ke 10°C) adalah Critical Control Point (CCP) mutlak untuk mencegah keracunan Clostridium perfringens.'
      },
      visualDiagram: {
        title: 'Daftar Resmi 8 Bahan Alergen Wajib (特定原材料 8品目) di Jepang',
        subtitle: 'Berdasarkan Hukum Pelabelan Pangan Jepang & Buku Panduan Resmi OTAFF 2024',
        type: 'grid',
        items: [
          {
            label: '1. えび (Ebi)',
            description: 'Udang dan seluruh produk olahan crustacea laut.',
            badge: 'Wajib Cantum'
          },
          {
            label: '2. かに (Kani)',
            description: 'Kepiting dan ekstrak bahan kepiting laut.',
            badge: 'Wajib Cantum'
          },
          {
            label: '3. くるみ (Kurumi)',
            description: 'Kacang Kenari / Walnut (RESMI menjadi bahan wajib ke-8 sejak 2023/2024).',
            highlight: 'Paling Baru / Revisi 2024',
            badge: 'Wajib Cantum'
          },
          {
            label: '4. 小麦 (Komugi)',
            description: 'Gandum dan tepung terigu pembuat mie, roti, saus, atau adonan goreng.',
            badge: 'Wajib Cantum'
          },
          {
            label: '5. そば (Soba)',
            description: 'Buckwheat / gandum kuda (dapat memicu anafilaktik akut dosis mikro).',
            badge: 'Wajib Cantum'
          },
          {
            label: '6. 卵 (Tamago)',
            description: 'Telur ayam, telur bebek, putih telur bubuk, dan mayones.',
            badge: 'Wajib Cantum'
          },
          {
            label: '7. 乳 (Nyuu / Miruku)',
            description: 'Susu sapi, mentega, krim keju, kasein, dan susu bubuk skim.',
            badge: 'Wajib Cantum'
          },
          {
            label: '8. 落花生 (Rakkasei)',
            description: 'Kacang tanah / peanuts dan minyak kacang tanah murni.',
            badge: 'Wajib Cantum'
          }
        ]
      },
      importantPoints: [
        'Bahaya pangan terbagi 3: Bahaya Fisik (pecahan kaca, logam, batu), Bahaya Kimia (alergen, histamin, solanin), dan Bahaya Biologis (bakteri, virus, parasit).',
        'Sejak 9 Maret 2023 / edisi 2024, Kacang Kenari (くるみ - Kurumi) resmi menjadi bahan ke-8 dalam daftar Alergen Wajib Cantum (特定原材料 8品目).',
        'Histamin pada ikan berdaging merah (tuna, sarden, makarel) TIDAK RUSAK OLEH PANAS; pencegahannya adalah penyimpanan rantai dingin segera sejak penerimaan.',
        'Spora bakteri (芽胞) seperti Clostridium perfringens & botulinum tahan air mendidih 100°C; spora dimatikan dengan panas 120°C minimal 4 menit.',
        'Pemanasan termal standar pembunuh bakteri patogen umum adalah suhu pusat 75°C selama minimal 1 menit.',
        'Norovirus tidak membelah di dalam makanan, tahan alkohol, dan dimatikan dengan suhu pusat 85°C–90°C selama ≥ 90 detik atau klorin 200 ppm.',
        'Parasit Anisakis pada ikan laut dimatikan dengan panas ≥70°C, atau 60°C selama 1 menit, atau pembekuan -20°C selama minimal 24 jam.'
      ],
      summary: 'Manajemen higiene pangan pabrik menuntut pengendalian ketat terhadap 3 bahaya: fisik (logam, kaca, batu), kimia (8 alergen wajib termasuk kenari/kurumi, histamin tahan panas ikan merah, racun solanin kentang), dan biologi (bakteri patogen, spora tahan panas, Norovirus, Anisakis). Kepatuhan terhadap 3 prinsip pencegahan bakteri (つけない, 増やさない, やっつける) dan 4 prinsip Norovirus (持ち込まない, つけない, やっつける, 拡げない) adalah kunci utama mutu produk.',
      practiceQuestions: [
        {
          id: 'mfg_ch2_q1',
          questionNumber: 1,
          questionText: 'Berdasarkan regulasi resmi pelabelan alergen di Jepang (OTAFF Edisi 2024), manakah bahan pangan yang RESMI dinaikkan statusnya menjadi Bahan Baku Spesifik Wajib Cantum (特定原材料 8品目)?',
          situation: 'Pemeriksaan kepatuhan pelabelan bahan alergen produk olahan pabrik.',
          options: [
            'Kedelai (大豆 - Daizu)',
            'Kacang Kenari / Walnut (くるみ - Kurumi)',
            'Daging Sapi (牛肉 - Gyuuniku)',
            'Wijen (ごま - Goma)'
          ],
          correctAnswerIndex: 1,
          explanation: 'Berdasarkan buku panduan OTAFF edisi ke-4 (Februari 2024, halaman 8-9), kacang kenari (くるみ - Kurumi) secara resmi dipindahkan dari daftar rekomendasi (準ずるもの) menjadi Bahan Baku Spesifik Wajib (特定原材料) ke-8 sejak 9 Maret 2023. Kedelai, sapi, dan wijen masih berstatus anjuran (20品目).',
          translation: 'Pilihlah bahan pangan yang resmi menjadi alergen wajib ke-8 di Jepang.'
        },
        {
          id: 'mfg_ch2_q2',
          questionNumber: 2,
          questionText: 'Bagaimanakah karakteristik penanganan Norovirus yang BENAR di pabrik pengolahan makanan?',
          situation: 'Pencegahan wabah keracunan akibat kontaminasi virus pangan.',
          options: [
            'Norovirus dapat berkembang biak dengan cepat di dalam makanan pada suhu ruangan 30°C.',
            'Norovirus mudah dimatikan dengan menyemprotkan alkohol sanitasi biasa ke permukaan talenan.',
            'Norovirus tidak membelah di makanan, tidak mati dengan alkohol, dan harus dimatikan dengan pemanasan pusat 85°C–90°C selama minimal 90 detik atau sodium hipoklorit 200 ppm.',
            'Pekerja yang tertular Norovirus cukup mencuci tangan dengan air dingin dan boleh tetap menangani makanan siap saji.'
          ],
          correctAnswerIndex: 2,
          explanation: 'Sesuai buku teks OTAFF Edisi ke-4 (halaman 13-14), Norovirus tidak berkembang biak di makanan (hanya membelah di usus manusia). Norovirus tidak mempan oleh disinfeksi alkohol, dan wajib dibasmi dengan pemanasan suhu pusat 85°C–90°C selama minimal 90 detik, atau menggunakan disinfektan larutan Sodium Hipoklorit konsentrasi 200 ppm.',
          translation: 'Pilihlah karakteristik penanganan Norovirus yang benar.'
        }
      ],
      officialReference: {
        source: 'Buku Teks Pembelajaran Ujian Keterampilan Manufaktur Makanan & Minuman (第4版, Halaman 7-14)',
        agency: 'OTAFF (一般社団法人 外国人食品産業技能評価機構)',
        documentTitle: 'Bab 2: 食品衛生 (2. 危害要因: 物理的・化学的・生物的危害要因)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 3: PENGENDALIAN PROSES PENGOLAHAN & SANITASI FASILITAS (KOMUNIKASI)
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch3',
      sectorId: 'manufacturing',
      category: 'komunikasi',
      chapterNumber: 3,
      title: 'Pengendalian Proses Produksi, Sanitasi Fasilitas 5S & Komunikasi Pabrik',
      japaneseTitle: '製造工程管理・施設衛生5S・現場のコミュニケーション',
      estimatedMinutes: 30,
      objectives: [
        'Menguasai sistem zonasi sanitasi pabrik (区分衛生管理 / ゾーニング): Area Bersih, Semi-Bersih, dan Terkontaminasi.',
        'Memahami tabel suhu penyimpanan resmi bahan baku dan aturan FIFO (先入れ先出し).',
        'Menguasai 3 metode pencairan bahan beku (解凍) dan penanganan cairan drip (ドリップ).',
        'Mengoperasikan alat deteksi benda asing (金属探知機 & テストピース, X-ray detector) serta menerapkan budaya komunikasi Ho-Ren-So.'
      ],
      contentExplanation: `### 1. Sistem Zonasi Sanitasi Pabrik Pangan (区分衛生管理 / ゾーニング)

Untuk mencegah kontaminasi silang (**交差汚染 - Kousa Osen**), area lantai pabrik makanan Jepang dibagi secara ketat ke dalam 3 zona sanitasi (Zoning):
1. **Area Kerja Terkontaminasi (汚染作業区域 - Osen Sagyou Kuiki)**:
   - Area penerimaan bahan baku luar (荷受け), gudang kardus karton luar, penanganan sampah/limbah, dan dermaga pengiriman produk akhir (出荷).
   - *Aturan Ketat*: Kardus karton luar (段ボール箱) atau kontainer kotor dari luar **DILARANG KERAS** dibawa masuk ke area semi-bersih apalagi area bersih karena membawa tanah, debu, dan telur serangga. Pekerja di area kotor dilarang sembarangan melintas ke area bersih.
2. **Area Kerja Semi-Bersih (準清潔作業区域 - Jun-seiketsu Sagyou Kuiki)**:
   - Area pemrosesan awal (下処理 - shitashori: pencucian sayur, pemotongan daging/ikan mentah) dan area pemasakan termal (加熱調理 - kanetsu chouri).
   - Di area ini, bahan pangan yang sedang diolah tidak boleh bersentuhan dengan bahan mentah kotor yang belum disortir.
3. **Area Kerja Bersih (清潔作業区域 - Seiketsu Sagyou Kuiki)**:
   - Area penanganan makanan yang sudah matang/disterilisasi: pendinginan, penataan/topping (盛り付け), dan pengemasan akhir (包装).
   - Menuntut standar sterilisasi tertinggi dengan tekanan udara positif (*positive pressure*) agar udara kotor tidak menyusup masuk.

---

### 2. Standar Suhu Penyimpanan Bahan Baku Resmi (Tabel Suhu OTAFF Hal. 29)

Penyimpanan bahan pangan wajib mematuhi standar hukum Sanitasi Pangan Jepang:
- **Beras & Padi (米穀類 - Beikokurui)**: Disimpan pada suhu **≤ 15°C** (mencegah kutu beras dan jamur).
- **Olahan Biji-bijian & Tepung (小麦粉, デンプン)**: Suhu ruang kering (**室温・乾燥**).
- **Bumbu Masak (砂糖, 食塩, 味噌, 醤油, ソース, 食酢)**: Suhu ruang (**室温**).
- **Daging Segar (食肉 - Shokuniku)**: Suhu **≤ 10°C** (rekomendasi pabrik: 4°C atau lebih rendah).
- **Produk Daging Olahan (ハム, ソーセージ, ベーコン)**: Suhu **≤ 10°C**.
- **Daging Beku & Olahan Daging Beku (冷凍食肉)**: Suhu **≤ -15°C**.
- **Gurita Rebus (ゆでだこ)**: Suhu **≤ 10°C**.
- **Ikan & Makanan Laut Segar (生鮮魚介類)**: Suhu **≤ 5°C** (sangat rentan bakteri Vibrio).
- **Produk Perikanan Beku & Makanan Beku Umum**: Suhu **≤ -18°C**.
- **Telur Utuh Berkutik (殻付き卵)**: Suhu **≤ 10°C**.
- **Telur Cair Pasteurisasi (液卵 - Ekiran)**: Suhu **≤ 8°C**.
- **Telur Beku (凍結卵)**: Suhu **≤ -18°C**.
- **Buah & Sayuran Segar**: Sekitar **10°C** (10℃前後).
- **Susu, Susu Skim, Krim**: Suhu **≤ 10°C**.
- **Mentega, Keju, Susu Kental Manis**: Suhu **≤ 15°C**.

**Kaidah Pengoperasian Lemari Es & Freezer**:
- *Kulkas (冷蔵庫)*: Dilarang menumpuk bahan terlalu padat tanpa celah. Harus disisakan ruang agar sirkulasi udara dingin lancar ke seluruh sudut (suhu standar ≤ 10°C).
- *Freezer (冷凍庫)*: Sebaliknya, untuk ruang pembeku, mengisi **80% hingga 90% kapasitas (8〜9割詰める)** dengan makanan beku justru membuat produk saling mendinginkan dan menghemat konsumsi listrik (**節電 - Setsuden**) (suhu standar ≤ -15°C / -18°C).

---

### 3. FIFO & 3 Istilah Tanggal Kedaluwarsa

- **Prinsip FIFO (先入れ先出し - Saki-ire Saki-dashi)**: Bahan baku atau produk yang pertama kali diterima/diproduksi wajib dikeluarkan dan digunakan terlebih dahulu karena batas kedaluwarsanya datang lebih awal.
- **3 Definisi Tanggal pada Kemasan Pangan**:
  1. **使用期限 (Shiyou Kigen - Batas Penggunaan Bahan Baku)**: Batas tanggal terakhir suatu bahan baku boleh digunakan dalam proses peracikan di pabrik (ditetapkan oleh internal pabrik pengolah).
  2. **賞味期限 (Shoumi Kigen - Best Before Date)**: Tanggal batas kualitas rasa terbaik jika kemasan belum dibuka dan disimpan sesuai petunjuk. Berlaku untuk makanan awet (biskuit, kaleng, mie instan). Lewat tanggal ini makanan masih aman dikonsumsi, tetapi pabrik makanan tidak menggunakannya.
  3. **消費期限 (Shouhi Kigen - Expiration Date)**: Tanggal batas aman konsumsi jika kemasan belum dibuka. Berlaku untuk makanan cepat busuk/basi (bento, sandwich, salad, daging segar, kue basah). Jika melewati tanggal ini, produk berisiko tinggi menyebabkan keracunan makanan dan **DILARANG KERAS DIJUAL ATAU DIGUNAKAN!**

---

### 4. Metode Pencairan Bahan Beku & Penanganan Cairan Drip

Pencairan bahan baku beku (**解凍 - Kaitou**) harus dilakukan dengan metode resmi:
1. **Pencairan Alami (自然解凍 - Shizen Kaitou)**: Diletakkan pada suhu ruang (hanya untuk produk tertentu yang diizinkan SOP).
2. **Pencairan Kulkas (冷蔵庫解凍 - Reizouko Kaitou)**: Dicairkan perlahan di dalam ruang pendingin suhu rendah (metode paling higienis dan disarankan).
3. **Pencairan Air Mengalir (流水解凍 - Ryuusui Kaitou)**: Dicairkan di bawah guyuran air keran mengalir. *Wajib*: Memastikan kantong kemasan tertutup rapat tanpa lubang/sobekan agar sari makanan tidak hanyut dan air keran tidak mencemari makanan.
- **Penanganan Cairan Drip (ドリップ - Dorippu)**: Cairan sari daging/ikan yang keluar saat proses pencairan mengandung protein tinggi dan mikroorganisme. Bahan yang dicairkan wajib ditaruh di nampan berjaring (**網目トレー**) di atas rak pencairan agar cairan drip tertampung atau langsung terbuang ke pipa drainase, **TIDAK BOLEH MENETES** ke bahan baku makanan lainnya!
- **Disinfeksi Sayuran Segar**: Bahan segar tanpa proses panas (salad sayur) disterilkan menggunakan larutan Sodium Hipoklorit (**次亜塩素酸ナトリウム**) konsentrasi **200 ppm selama 5 menit** atau **100 ppm selama 10 menit**, kemudian dibilas air bersih tuntas.

---

### 5. Pengoperasian Detektor Benda Asing & Komunikasi Ho-Ren-So

- **Detektor Logam (金属探知機 - Kinzoku Tanchiki)**:
  - Berfungsi mendeteksi pecahan besi dan stainless steel di dalam kemasan makanan.
  - *SOP Kalibrasi Wajib*: Wajib diuji menggunakan keping benda uji (**テストピース - Test Piece**) sebelum produksi dimulai, secara berkala setiap jam, dan setelah shift produksi selesai. Jika detektor gagal mendeteksi test piece, seluruh produk yang diproses sejak pengecekan terakhir wajib dikarantina dan diperiksa ulang!
- **Detektor Sinar-X (Ｘ線異物検出機 - Ekkususen Ibutsu Kenshutsuki)**:
  - Berfungsi mendeteksi benda asing keras berdensitas tinggi seperti batu, kaca, dan serpihan tulang ikan/ayam yang lolos. *Kelemahan*: Sinar-X **sulit mendeteksi serpihan plastik lunak**, sehingga pencegahan plastik masuk bergantung pada kehati-hatian pekerja saat membuka kantong kemasan.
- **Budaya Komunikasi Ho-Ren-So di Pabrik Pangan**:
  - **HOUkoku (報告 - Melapor)**: Melaporkan temuan produk rusak, alarm mesin berbunyi, atau jika ada bahan tumpah.
  - **RENraku (連絡 - Menginformasikan)**: Koordinasi pergantian shift (**申し送り - Moushiokuri**), pergantian batch alergen.
  - **SOUdan (相談 - Berkonsultasi)**: Bertanya kepada line leader saat ragu mengenai instruksi kerja atau parameter mesin.`,
      keyTerms: [
        {
          japanese: 'ゾーニング',
          kana: 'ぞーにんぐ',
          romaji: 'zooningu',
          indonesian: 'Zonasi sanitasi pabrik (pemisahan area bersih, semi-bersih, dan terkontaminasi).'
        },
        {
          japanese: '清潔作業区域',
          kana: 'せいけつさぎょうくいき',
          romaji: 'seiketsu sagyou kuiki',
          indonesian: 'Area kerja bersih (pengolahan produk matang, penataan bento, pengemasan akhir).'
        },
        {
          japanese: '準清潔作業区域',
          kana: 'じゅんせいけつさぎょうくいき',
          romaji: 'jun-seiketsu sagyou kuiki',
          indonesian: 'Area kerja semi-bersih (pre-processing/pemotongan bahan mentah, pemasakan termal).'
        },
        {
          japanese: '汚染作業区域',
          kana: 'おせんさぎょうくいき',
          romaji: 'osen sagyou kuiki',
          indonesian: 'Area terkontaminasi (penerimaan bahan mentah, gudang kardus luar, pembuangan sampah).'
        },
        {
          japanese: '先入れ先出し',
          kana: 'さきいれさきだし',
          romaji: 'saki-ire saki-dashi',
          indonesian: 'Prinsip FIFO (First-In, First-Out): bahan masuk lebih awal dipakai lebih awal.'
        },
        {
          japanese: '賞味期限',
          kana: 'しょうみきげん',
          romaji: 'shoumi kigen',
          indonesian: 'Best-before date (batas tanggal kualitas rasa terbaik untuk makanan tahan lama).'
        },
        {
          japanese: '消費期限',
          kana: 'しょうひきげん',
          romaji: 'shouhi kigen',
          indonesian: 'Expiration date (batas tanggal keamanan konsumsi untuk makanan segar/cepat basi).'
        },
        {
          japanese: '使用期限',
          kana: 'しようきげん',
          romaji: 'shiyou kigen',
          indonesian: 'Batas waktu penggunaan bahan baku yang ditetapkan oleh pabrik pengolah makanan.'
        },
        {
          japanese: '解凍',
          kana: 'かいとう',
          romaji: 'kaitou',
          indonesian: 'Pencairan bahan pangan beku (metode alami, kulkas, atau air mengalir).'
        },
        {
          japanese: 'ドリップ',
          kana: 'どりっぷ',
          romaji: 'dorippu',
          indonesian: 'Cairan tetesan dari daging/ikan saat dicairkan yang harus ditampung agar tidak mencemari.'
        },
        {
          japanese: '次亜塩素酸ナトリウム',
          kana: 'じあえんそさんなとりうむ',
          romaji: 'jiaensosan natoriumu',
          indonesian: 'Sodium hipoklorit: cairan disinfektan sayuran mentah (200 ppm / 100 ppm) dan sanitasi alat.'
        },
        {
          japanese: '金属探知機',
          kana: 'きんぞくたんちき',
          romaji: 'kinzoku tanchiki',
          indonesian: 'Mesin detektor logam untuk memeriksa kontaminasi serpihan besi/stainless steel.'
        },
        {
          japanese: 'テストピース',
          kana: 'てすとぴーす',
          romaji: 'tesuto piisu',
          indonesian: 'Keping sampel uji kalibrasi logam untuk memastikan kepekaan mesin detektor logam.'
        },
        {
          japanese: 'Ｘ線異物検出機',
          kana: 'えっくすせんいぶつけんしゅつき',
          romaji: 'ekkususen ibutsu kenshutsuki',
          indonesian: 'Mesin inspeksi sinar-X untuk mendeteksi benda asing keras non-logam (batu, kaca, tulang).'
        },
        {
          japanese: '申し送り',
          kana: 'もうしおくり',
          romaji: 'moushiokuri',
          indonesian: 'Operan catatan kerja, kendala lini, dan pesan koordinasi saat pergantian shift.'
        },
        {
          japanese: '始業前点検',
          kana: 'しぎょうまえてんけん',
          romaji: 'shigyoumae tenken',
          indonesian: 'Pemeriksaan kondisi mesin, kebersihan, dan tombol keselamatan sebelum mulai beroperasi.'
        },
        {
          japanese: '分解洗浄',
          kana: 'ぶんかいせんじょう',
          romaji: 'bunkai senjou',
          indonesian: 'Pembongkaran bagian mesin pemotong/pencampur untuk pembersihan menyeluruh harian.'
        },
        {
          japanese: '排水溝',
          kana: 'はいすいこう',
          romaji: 'haisuikou',
          indonesian: 'Saluran pembuangan air lantai pabrik yang tutupnya wajib dibuka dan disikat setiap hari.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Sirine Mesin Detektor Logam Berbunyi pada Batch Produk Bento',
        scenario: 'Di lini akhir pengemasan bento, mesin detektor logam mendadak membunyikan sirine merah dan lengan pemilah otomatis (flipper rejector) membuang satu kemasan bento ke kotak penampungan barang reject. Operator baru merasa panik dan hendak mengambil bento tersebut untuk dimasukkan kembali ke jalur konveyor tanpa memeriksa penyebabnya.',
        dialogue: [
          {
            speaker: '先輩 (Senior Tanaka)',
            role: 'Senior Operator',
            japanese: 'ストップ！リジェクトされた弁当をそのままラインに戻してはいけません！金属が混入している可能性があります。',
            kana: 'すとっぷ！りじぇくとされたべんとうをそのままらいんにもどしてはいけません！きんぞくがこんにゅうしているかのうせいがあります。',
            romaji: 'Sutoppu! Rijekuto sareta bentou wo sono mama rain ni modoshite wa ikemasen! Kinzoku ga konnyuu shite iru kanousei ga arimasu.',
            indonesian: 'Berhenti! Bento yang dibuang ke kotak reject tidak boleh langsung dikembalikan ke jalur! Ada kemungkinan serpihan logam masuk ke dalamnya.'
          },
          {
            speaker: '作業員 (Pekerja)',
            role: 'Operator Lini',
            japanese: 'すみません！見た目には何も入っていないように見えたので…どうすればいいですか？',
            kana: 'すみません！みた目にはなにもはいっていないようにみえたので…どうすればいいですか？',
            romaji: 'Sumimasen! Mita me ni wa nanimo haitte inai you ni mieta node... dou sureba ii desu ka?',
            indonesian: 'Maafkan saya! Karena dari luar tampak bersih tidak ada apa-apa... apa yang harus saya lakukan?'
          },
          {
            speaker: '先輩 (Senior Tanaka)',
            role: 'Senior Operator',
            japanese: 'まず不良品トレイに隔離して、リーダーに報告（ホウ・レン・ソウ）します。それからテストピース（FeとSUS）を使って、金属探知機が正常に反応するか動作確認を行います。混入が確認された場合、前後の製品も再検査対象になります。勝手な判断は重大な事故につながります！',
            kana: 'まずふりょうひんとれいにかくりして、りーだーにほうこく（ほう・れん・そう）します。それからてすとぴーす（えふいーとさす）をつかって、きんぞくたんちきがせいじょうにはんのうするかどうさかくにんをおこないます。こんにゅうがかくにんされたばあい、ぜんごのせいひんもさいけんさたいしょうになります。かってなはんだんはじゅうだいなじこにつながります！',
            romaji: 'Mazu furyouhin torei ni kakuri shite, riidaa ni houkoku (Hou-Ren-Sou) shimasu. Sore kara tesuto piisu (Fe to SUS) wo tsukatte, kinzoku tanchiki ga seijou ni hannou suru ka dousa kakunin wo okonaimasu. Konnyuu ga kakunin sareta baai, zengo no seihin mo saikensa taishou ni narimasu. Katte na handan wa juudai na jiko ni tsunagarimasu!',
            indonesian: 'Pertama, isolasi produk tersebut di nampan khusus cacat, lalu lapor ke line leader (Ho-Ren-So). Kemudian gunakan test piece (besi dan SUS) untuk mengecek apakah detektor logam berfungsi normal. Jika kontaminasi terkonfirmasi, produk sebelum dan sesudahnya juga wajib diperiksa ulang. Mengambil keputusan sendiri berisiko fatal!'
          }
        ],
        takeaway: 'Produk yang terlempar oleh mesin detektor logam dilarang keras dikembalikan ke lini. Pekerja wajib mengisolasi produk, melapor (Ho-Ren-So), dan menguji ulang mesin dengan test piece kalibrasi.'
      },
      visualDiagram: {
        title: 'Perbandingan Definisi Batas Waktu Produk Pangan di Jepang',
        subtitle: 'Standar Kementerian Kesehatan, Tenaga Kerja & Kesejahteraan (MHLW) dan MAFF',
        type: 'table',
        items: [
          {
            label: '使用期限 (Shiyou Kigen)',
            description: 'Batas akhir waktu pemakaian bahan baku dalam proses racikan pabrik. Ditetapkan oleh standar pabrik.',
            highlight: 'Bahan Baku Mentah'
          },
          {
            label: '賞味期限 (Shoumi Kigen)',
            description: 'Batas kualitas rasa terbaik (Best-Before) pada kemasan belum dibuka untuk makanan tahan lama (biskuit, mie, kaleng).',
            highlight: 'Kualitas Rasa Terbaik'
          },
          {
            label: '消費期限 (Shouhi Kigen)',
            description: 'Batas keamanan konsumsi (Expiration Date) untuk makanan segar/cepat basi (bento, sandwich, salad). Lewat tanggal = HARUS DIBUANG!',
            highlight: 'Batas Keamanan Mutlak'
          }
        ]
      },
      importantPoints: [
        'Kardus karton luar (段ボール箱) dan wadah kotor dari luar dilarang keras dibawa masuk ke area kerja semi-bersih dan bersih pabrik.',
        'Suhu penyimpanan standar resmi: Daging segar ≤10°C, Ikan segar ≤5°C, Telur cair ≤8°C, Makanan beku ≤-18°C, Beras ≤15°C.',
        'Kulkas harus disisakan celah udara sirkulasi; Freezer sebaiknya diisi 80–90% kapasitas makanan beku untuk efisiensi pendinginan dan hemat energi.',
        'Prinsip 先入れ先出し (FIFO): Produk yang masuk pertama wajib dikeluarkan dan digunakan pertama.',
        'Produk yang melewati 消費期限 (Shouhi Kigen / Expiration Date) DILARANG KERAS dijual atau dikonsumsi karena berisiko keracunan tinggi.',
        'Cairan ドリップ (Drip) saat mencairkan daging/ikan beku wajib ditampung di nampan berjaring agar tidak mencemari bahan lainnya.',
        'Mesin detektor logam wajib diuji sensitivitasnya menggunakan テストピース (Test Piece) sebelum mulai, berkala, dan setelah produksi.',
        'Sinar-X mampu mendeteksi batu, kaca, dan tulang, tetapi sulit mendeteksi serpihan plastik lunak.'
      ],
      summary: 'Pengendalian proses pengolahan manufaktur pangan diatur oleh pemisahan zonasi sanitasi (汚染・準清潔・清潔作業区域), kepatuhan suhu penyimpanan rantai dingin, prinsip FIFO (先入れ先出し), perbedaan tanggal 賞味 vs 消費期限, teknik pencairan bahan beku tanpa mencemari cairan drip, disinfeksi sodium hipoklorit (200 ppm 5 menit / 100 ppm 10 menit), verifikasi mesin detektor logam dengan test piece, serta komunikasi aktif Ho-Ren-So.',
      practiceQuestions: [
        {
          id: 'mfg_ch3_q1',
          questionNumber: 1,
          questionText: 'Manakah suhu penyimpanan bahan baku yang BENAR berdasarkan tabel standar resmi Kementerian & OTAFF di pabrik makanan Jepang?',
          situation: 'Pemeriksaan suhu ruang pendingin dan lemari pembeku bahan baku pabrik.',
          options: [
            'Ikan dan makanan laut segar (生鮮魚介類) disimpan pada suhu di bawah 15°C.',
            'Makanan beku olahan (冷凍食品) disimpan pada suhu di bawah -18°C, dan ikan segar disimpan pada suhu di bawah 5°C.',
            'Daging segar (食肉) disimpan pada suhu ruangan 20°C asalkan tertutup rapat.',
            'Telur cair (液卵) boleh disimpan pada suhu 15°C di samping kompor pemasakan.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Berdasarkan tabel standar penyimpanan bahan pangan resmi OTAFF Edisi ke-4 (halaman 29), makanan beku (冷凍食品) dan perikanan beku wajib disimpan pada suhu ≤ -18°C, sedangkan ikan/seafood segar (生鮮魚介類) wajib disimpan pada suhu ≤ 5°C. Telur cair (液卵) harus ≤ 8°C dan daging segar ≤ 10°C.',
          translation: 'Pilihlah suhu penyimpanan bahan baku yang benar sesuai standar pabrik.'
        },
        {
          id: 'mfg_ch3_q2',
          questionNumber: 2,
          questionText: 'Apakah perbedaan mendasar antara istilah 賞味期限 (Shoumi Kigen) dan 消費期限 (Shouhi Kigen) pada produk pangan olahan di Jepang?',
          situation: 'Pemberian label batas kedaluwarsa pada kemasan produk makanan jadi.',
          options: [
            'Shoumi kigen adalah batas keamanan mutlak makanan cepat basi, sedangkan Shouhi kigen adalah batas kualitas rasa biskuit.',
            'Shoumi kigen adalah batas tanggal kualitas rasa terbaik (masih aman dimakan setelahnya jika kemasan utuh), sedangkan Shouhi kigen adalah batas keamanan konsumsi (lewat tanggal dilarang dimakan).',
            'Kedua istilah tersebut memiliki arti hukum yang persis sama dan dapat digunakan bergantian secara bebas.',
            'Shouhi kigen hanya digunakan untuk bahan baku mentah sebelum diolah di pabrik makanan.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Sesuai buku materi OTAFF Edisi ke-4 (halaman 30-31), 賞味期限 (Best-Before) adalah tanggal batas kualitas kelezatan terbaik pada makanan awet (kaleng, mi, biskuit). Sedangkan 消費期限 (Expiration Date) adalah batas keamanan konsumsi untuk makanan yang cepat mengalami penurunan mutu/basi (bento, sandwich, salad). Jika melewati batas 消費期限, makanan tidak boleh dimakan karena berisiko keracunan tinggi.',
          translation: 'Pilihlah perbedaan yang benar antara 賞味期限 dan 消費期限.'
        }
      ],
      officialReference: {
        source: 'Buku Teks Pembelajaran Ujian Keterampilan Manufaktur Makanan & Minuman (第4版, Halaman 16-17, 27-36)',
        agency: 'OTAFF (一般社団法人 外国人食品産業技能評価機構)',
        documentTitle: 'Bab 2: 食品衛生 (3. 一般衛生管理: 施設設備管理、原材料・食品の衛生管理)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 4: SISTEM MANAJEMEN KEAMANAN PANGAN HACCP & SANITASI (K3 & SOP)
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch4',
      sectorId: 'manufacturing',
      category: 'keterampilan',
      chapterNumber: 4,
      title: 'Sistem Manajemen Keamanan Pangan HACCP & Prosedur Sanitasi Pekerja',
      japaneseTitle: 'ＨＡＣＣＰによる衛生管理・７原則・作業者衛生管理',
      estimatedMinutes: 30,
      objectives: [
        'Memahami konsep dasar HACCP (Hazard Analysis Critical Control Point) dan perbedaannya dengan metode inspeksi sampel akhir konvensional.',
        'Menguasai 7 Prinsip Resmi HACCP (HACCPの7原則): dari Analisis Bahaya (HA) hingga Pencatatan (記録).',
        'Mengidentifikasi 5 proses representatif Titik Kendali Kritis (CCP) di pabrik manufaktur pangan.',
        'Memahami konsep Deviasi (逸脱), Tindakan Perbaikan (改善措置), dan aturan integritas pencatatan real-time.'
      ],
      contentExplanation: `### 1. Apa itu Sistem HACCP (ＨＡＣＣＰによる衛生管理)?

**HACCP** merupakan singkatan dari **Hazard Analysis and Critical Control Point** (bahasa Jepang: **危害要因分析重要管理点 - Kigai Youin Bunseki Juuyou Kanriten**).

Di pabrik makanan, produk tidak dapat dipastikan 100% aman hanya dengan mengandalkan manajemen kebersihan umum (一般衛生管理). Dibandingkan metode konvensional masa lalu yang hanya memeriksa sedikit sampel di ujung akhir produksi (inspeksi sampel akhir / 抜取検査), **HACCP adalah sistem manajemen keamanan preventif** yang memantau dan mengendalikan titik-titik paling kritis di setiap tahapan (dari penerimaan bahan baku, pengolahan, pemanasan, pendinginan, hingga pengemasan) secara berkelanjutan.

Piramida Keamanan Pangan:
- **Fondasi (Dasar)**: Manajemen Higiene Umum (**一般衛生管理** berbasis 5S, sanitasi fasilitas, higiene pekerja).
- **Puncak**: Rencana Pengendalian Titik Kendali Kritis (**HACCPプラン - HACCP Plan**).

---

### 2. Tujuh Prinsip Resmi HACCP (ＨＡＣＣＰの７原則)

Buku teks resmi OTAFF (halaman 37–41) menetapkan bahwa sistem HACCP dioperasikan berdasarkan **7 Prinsip Resmi**:

1. **Prinsip 1: Analisis Bahaya (危害要因分析 - Hazard Analysis / HA)**:
   - Memeriksa bahan baku dan seluruh alur proses pembuatan untuk menganalisis bahaya fisik, kimia, dan biologi apa saja yang mungkin timbul, serta menentukan langkah pencegahannya.
2. **Prinsip 2: Penentuan Titik Kendali Kritis (重要管理点の決定 - CCP)**:
   - Menetapkan tahapan proses yang paling esensial untuk menghilangkan bahaya atau mereduksinya hingga ke tingkat yang aman. Suatu produk dapat memiliki satu atau lebih CCP.
3. **Prinsip 3: Penetapan Batas Kritis (管理基準の設定 - Critical Limits / CL)**:
   - Menetapkan angka batas toleransi aman yang terukur (misal: suhu pemanasan minimal 75°C selama 1 menit; konsentrasi disinfektan 200 ppm; ukuran deteksi logam).
4. **Prinsip 4: Penetapan Prosedur Pemantauan (監視方法の設定 - Monitoring)**:
   - Menentukan metode pengawasan berkelanjutan: siapa yang memeriksa, kapan, seberapa sering, dan bagaimana parameternya diukur (misal: mencatat termometer digital setiap batch).
5. **Prinsip 5: Penetapan Tindakan Perbaikan (改善措置の設定 - Corrective Actions)**:
   - Menetapkan langkah darurat yang harus diambil jika terjadi penyimpangan dari batas kritis (**管理基準からの逸脱 - Itsudatsu**), serta memutuskan nasib produk yang terlanjur diproses saat deviasi terjadi.
6. **Prinsip 6: Penetapan Prosedur Verifikasi (検証方法の設定 - Verification)**:
   - Memeriksa dan memastikan apakah seluruh sistem HACCP berjalan sesuai rencana dan terbukti efektif menghilangkan bahaya pangan.
7. **Prinsip 7: Penetapan Dokumentasi & Pencatatan (記録 - Record Keeping)**:
   - Mendokumentasikan seluruh prosedur, lembar monitoring suhu, catatan kalibrasi alat, dan tindakan perbaikan ke dalam arsip resmi sebagai bukti hukum jaminan keamanan pangan.

---

### 3. Lima Proses Utama Titik Kendali Kritis (CCP) di Pabrik Pangan

Buku panduan OTAFF merangkum 5 proses paling umum yang dijadikan CCP di lini produksi manufaktur pangan:
1. **Sterilisasi Termal (加熱殺菌 - Kanetsu Sakkin)**:
   - Pemanasan untuk membunuh mikroorganisme patogen. Suhu wajib dikontrol pada bagian tengah/inti bahan (**中心温度**).
   - *Bakteri Keracunan Umum*: Suhu pusat **75°C selama minimal 1 menit**.
   - *Norovirus*: Suhu pusat **85°C–90°C selama minimal 90 detik**.
   - *Bakteri Spora (Clostridium botulinum)*: Suhu pusat **120°C selama minimal 4 menit**.
2. **Pendinginan Cepat Pasca-Pemanasan (加熱殺菌後の冷却 - Reikyaku)**:
   - Setelah makanan dipanaskan, spora bakteri yang masih tertinggal dapat berkecambah jika dibiarkan mendingin perlahan di suhu ruang (20°C–50°C).
   - *Standar Pendinginan Cepat*: Wajib menurunkan suhu inti ke **20°C dalam waktu 30 menit**, ATAU menurunkan ke **10°C dalam waktu 60 menit**.
   - Metode: Tiupan angin dingin (**風冷 - Fuurei**) atau air pendingin es (**水冷 - Suirei**).
3. **Sterilisasi Menggunakan Bahan Kimia (薬剤による殺菌 - Yakuzai ni yoru Sakkin)**:
   - Digunakan untuk bahan mentah yang tidak dipanaskan (salad sayuran segar).
   - *Dosis Resmi*: Larutan Sodium Hipoklorit konsentrasi **200 ppm selama 5 menit**, ATAU konsentrasi **100 ppm selama 10 menit**. Kemudian dibilas air mengalir bersih.
4. **Inspeksi Detektor Logam (金属探知機 - Kinzoku Tanchiki)**:
   - CCP untuk mendeteksi serpihan logam berbahaya sebelum produk dikemas ke kardus akhir.
5. **Inspeksi Benda Asing Sinar-X (Ｘ線異物検出機 - Ekkususen Ibutsu Kenshutsuki)**:
   - CCP untuk mendeteksi serpihan batu, kaca, dan tulang keras.

---

### 4. Deviasi dari Batas Kritis (管理基準からの逸脱) & Tindakan Koreksi (改善措置)

- **Apa itu Deviasi (逸脱 - Itsudatsu)?**:
  Keadaan di mana batas kritis aman yang telah ditetapkan tidak terpenuhi di lapangan.
  - *Contoh 1*: Suhu inti pemanasan ditetapkan 75°C selama 1 menit, tetapi suhu aktual saat diukur hanya mencapai 70°C selama 1 menit.
  - *Contoh 2*: Sayuran hanya direndam dalam klorin 100 ppm selama 5 menit (seharusnya 10 menit).
- **SOP Saat Mendeteksi Deviasi**:
  1. Pekerja **WAJIB SEGERA MELAPOR KEPADA PENANGGUNG JAWAB (すぐに責任者へ報告)**.
  2. Menghentikan lini proses jika diperlukan.
  3. Mengambil **Tindakan Perbaikan (改善措置 - Kaizen Sochi)** sesuai instruksi penanggung jawab:
     - Mengatur ulang kecepatan mesin conveyor agar pemanasan mencapai suhu yang disyaratkan.
     - Memutuskan status produk yang terkena deviasi: dipanaskan ulang (**再加熱**), diproses ulang, atau dibuang/dimusnahkan (**破棄 - Haki**).

---

### 5. Integritas Pencatatan & Dokumentasi (記録のルール)

Pencatatan data monitoring suhu, waktu, konsentrasi disinfektan, dan kalibrasi detektor logam adalah bukti autentik keamanan pangan. Aturan mutlak pencatatan di pabrik Jepang:
- **Catat Real-Time (はかったとき、確認したときにすぐ記録)**: Catat angka seketika saat pengukuran dilakukan.
- **Dilarang Menunda (後でまとめて記録してはいけない)**: Dilarang keras menunda dan mengisi catatan sekaligus di akhir jam kerja.
- **Dilarang Mencatat di Awal (はかる前に記録してはいけない)**: Dilarang mengisi angka sebelum alat ukur bekerja dengan asumsi *"karena biasanya suhunya selalu segini"*.
- **Dilarang Memalsukan / Mengubah Sendiri (事実でないことを記録しない・自分で勝手に修正しない)**: Dilarang mencatat angka fiktif atau mencoret dan mengubah hasil pengukuran tanpa persetujuan resmi supervisor.`,
      keyTerms: [
        {
          japanese: 'ＨＡＣＣＰ',
          kana: 'はさっぷ',
          romaji: 'hasappu',
          indonesian: 'HACCP: Hazard Analysis Critical Control Point (sistem manajemen keamanan pangan preventif).'
        },
        {
          japanese: 'ＨＡＣＣＰプラン',
          kana: 'はさっぷぷらん',
          romaji: 'hasappu puran',
          indonesian: 'Rencana kerja operasional HACCP yang mendokumentasikan CCP, batas kritis, dan monitoring.'
        },
        {
          japanese: '危害要因分析',
          kana: 'きがいよういんぶんせき',
          romaji: 'kigai youin bunseki',
          indonesian: 'Hazard Analysis (HA): analisis potensi bahaya fisik, kimia, dan biologi di setiap proses.'
        },
        {
          japanese: '重要管理点',
          kana: 'じゅうようかんりてん',
          romaji: 'juuyou kanriten',
          indonesian: 'Critical Control Point (CCP): titik kendali kritis untuk membasmi/mereduksi bahaya ke level aman.'
        },
        {
          japanese: '管理基準',
          kana: 'かんりきじゅん',
          romaji: 'kanri kijun',
          indonesian: 'Critical Limits (CL): batas angka terukur yang memisahkan kondisi aman dan tidak aman.'
        },
        {
          japanese: '逸脱',
          kana: 'いつだつ',
          romaji: 'itsudatsu',
          indonesian: 'Deviasi / penyimpangan parameter operasional aktual dari batas kritis yang ditetapkan.'
        },
        {
          japanese: '改善措置',
          kana: 'かいぜんそち',
          romaji: 'kaizen sochi',
          indonesian: 'Tindakan korektif: perbaikan mesin dan penanganan produk yang terdampak deviasi.'
        },
        {
          japanese: 'モニタリング',
          kana: 'もにたりんぐ',
          romaji: 'monitaringu',
          indonesian: 'Pemantauan berkala dan berkesinambungan terhadap parameter kritis (suhu, waktu, konsentrasi).'
        },
        {
          japanese: '検証',
          kana: 'けんしょう',
          romaji: 'kenshou',
          indonesian: 'Verifikasi: evaluasi pembuktian apakah sistem HACCP berfungsi efektif sesuai rencana.'
        },
        {
          japanese: '記録',
          kana: 'きろく',
          romaji: 'kiroku',
          indonesian: 'Dokumentasi tertulis hasil pemantauan dan tindakan perbaikan (wajib riil dan jujur).'
        },
        {
          japanese: '加熱殺菌',
          kana: 'かねつさっきん',
          romaji: 'kanetsu sakkin',
          indonesian: 'Sterilisasi termal pemanasan (75°C 1 menit untuk bakteri umum, 120°C 4 menit untuk spora).'
        },
        {
          japanese: '冷却',
          kana: 'れいきゃく',
          romaji: 'reikyaku',
          indonesian: 'Pendinginan cepat pasca-masak (turun ke 20°C dalam 30 mnt atau ke 10°C dalam 60 mnt).'
        },
        {
          japanese: '風冷',
          kana: 'ふうれい',
          romaji: 'fuurei',
          indonesian: 'Metode pendinginan cepat menggunakan hembusan udara/angin sejuk steril.'
        },
        {
          japanese: '水冷',
          kana: 'すいれい',
          romaji: 'suirei',
          indonesian: 'Metode pendinginan cepat menggunakan sirkulasi air dingin steril.'
        },
        {
          japanese: '急速冷凍',
          kana: 'きゅうそくれいとう',
          romaji: 'kyuusoku reitou',
          indonesian: 'Pembekuan cepat untuk menjaga tekstur, elastisitas, dan cita rasa makanan olahan.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Deviasi Suhu Pusat Daging Patty Burger di Mesin Oven Terowongan',
        scenario: 'Lini pemanggangan daging patty hamburger menetapkan Batas Kritis (CL) suhu pusat minimal 75°C selama 1 menit. Saat operator memeriksa suhu pusat daging yang keluar dari oven terowongan dengan termometer jarum tusuk, jarum menunjukkan angka 71°C. Operator mencatat bahwa konveyor oven bergerak sedikit lebih cepat dari kecepatan normal.',
        dialogue: [
          {
            speaker: '作業員 (Pekerja)',
            role: 'Operator Pemanggangan',
            japanese: 'リーダー！ハンバーグの中心温度を測定したところ、71℃しかありません。管理基準の75℃を下回っています（逸脱）。',
            kana: 'りーだー！はんばーぐのちゅうしんおんどをそくていしたところ、ななじゅういちどしかありません。かんりきじゅんのななじゅうごどをしたまわっています（いつだつ）。',
            romaji: 'Riidaa! Hanbaagu no chuushin ondo wo sokutei shita tokoro, nanajuu-ichi do shika arimasen. Kanri kijun no nanajuu-go do wo shitamawatte imasu (itsudatsu).',
            indonesian: 'Leader! Saat mengukur suhu inti hamburger, hanya tercapai 71°C. Angka ini berada di bawah batas kritis 75°C (terjadi deviasi).'
          },
          {
            speaker: 'リーダー (Leader Sato)',
            role: 'Line Leader',
            japanese: '迅速な報告ありがとう！すぐにコンベアのスピードを落とし、オーブン設定温度を調整してください。そして、71℃で加熱不足となったバッチのハンバーグは直ちにラインから取り除き、専用トレイに隔離してください。再加熱できるか品質管理と判断します。',
            kana: 'じんそくなほうこくありがとう！すぐにこんべあのすぴーどをおとし、おーぶんせっていおんどをちょうせいしてください。そして、ななじゅういちどでかねつぶそくとなったばっちのはんばーぐはただちにらいんからのぞき、せんようとれいにかくりしてください。さいかねつできるかひんしつかんりとはんだんします。',
            romaji: 'Jinsoku na houkoku arigatou! Sugu ni konbea no supiido wo otoshi, oobun settei ondo wo chousei shite kudasai. Soshite, nanajuu-ichi do de kanetsu busoku to natta bacchi no hanbaagu wa tadachi ni rain kara torinozoki, senyou torei ni kakuri shite kudasai. Saikanetsu dekiru ka hinshitsu kanri to handan shimasu.',
            indonesian: 'Terima kasih atas laporan cepatnya! Segera perlambat kecepatan konveyor dan sesuaikan suhu oven. Lalu, seluruh batch hamburger yang kurang panas pada 71°C harus segera disingkirkan dari lini dan diisolasi di nampan khusus. Kita akan putuskan bersama tim QC apakah produk bisa dipanaskan ulang atau harus dibuang.'
          }
        ],
        takeaway: 'Ketika terjadi deviasi (逸脱) batas kritis, operator wajib segera melapor, menyesuaikan parameter mesin (kecepatan konveyor/suhu), dan mengisolasi seluruh produk yang terdampak agar tidak ada bahaya patogen yang lolos ke konsumen.'
      },
      visualDiagram: {
        title: '7 Prinsip Resmi Sistem HACCP di Pabrik Makanan Jepang',
        subtitle: 'Berdasarkan Pedoman OTAFF & Codex Alimentarius Standar Internasional',
        type: 'steps',
        items: [
          {
            label: 'Prinsip 1: Hazard Analysis (危害要因分析)',
            description: 'Identifikasi seluruh bahaya fisik, kimiawi, dan biologi di setiap tahapan dari bahan baku hingga kemasan.',
            highlight: 'HA (Analisis Bahaya)'
          },
          {
            label: 'Prinsip 2: Penentuan CCP (重要管理点の決定)',
            description: 'Menetapkan titik proses kunci di mana bahaya pangan dapat dibasmi atau diturunkan hingga level aman.',
            highlight: 'CCP (Titik Kendali Kritis)'
          },
          {
            label: 'Prinsip 3: Penetapan Batas Kritis (管理基準の設定)',
            description: 'Menetapkan batas angka terukur mutlak (suhu ≥75°C 1 menit, klorin 200 ppm, kalibrasi test piece).',
            highlight: 'CL (Critical Limits)'
          },
          {
            label: 'Prinsip 4: Prosedur Monitoring (監視方法の設定)',
            description: 'Menetapkan siapa, kapan, seberapa sering, dan alat apa yang digunakan untuk memantau parameter CCP.',
            highlight: 'Pemantauan Berkelanjutan'
          },
          {
            label: 'Prinsip 5: Tindakan Korektif (改善措置の設定)',
            description: 'Prosedur pemulihan mesin dan penanganan isolasi produk jika terjadi deviasi (逸脱) batas kritis.',
            highlight: 'Tindakan Koreksi'
          },
          {
            label: 'Prinsip 6: Prosedur Verifikasi (検証方法の設定)',
            description: 'Evaluasi berkala untuk membuktikan bahwa rencana HACCP berjalan efektif dan akurat.',
            highlight: 'Verifikasi Sistem'
          },
          {
            label: 'Prinsip 7: Dokumentasi & Catatan (記録の保管)',
            description: 'Mencatat seluruh data pengukuran secara riil, tepat waktu, jujur, dan mengarsipkan lembar kerja.',
            highlight: 'Catatan Autentik'
          }
        ]
      },
      importantPoints: [
        'HACCP adalah metode pengawasan keamanan pangan berkesinambungan di titik kritis (CCP), jauh lebih efektif dibanding inspeksi sampel akhir.',
        'HACCP terdiri dari 7 Prinsip resmi: Analisis Bahaya (HA), Penentuan CCP, Penetapan Batas Kritis (CL), Monitoring, Tindakan Korektif, Verifikasi, dan Pencatatan.',
        '5 Contoh CCP utama di pabrik pangan: Pemanasan termal (加熱殺菌), Pendinginan cepat pasca-masak, Disinfeksi kimia bahan mentah, Detektor logam, dan Detektor X-ray.',
        'Standar pendinginan cepat pasca-pemasakan: Turun ke 20°C dalam 30 menit atau turun ke 10°C dalam 60 menit guna menekan perkecambahan spora Clostridium perfringens.',
        'Jika terjadi deviasi (管理基準からの逸脱), pekerja wajib segera melapor ke penanggung jawab dan mengambil tindakan perbaikan (改善措置).',
        'Aturan pencatatan: Catat segera saat pengukuran berlangsung; dilarang mencatat sebelum mengukur, dilarang menunda ke akhir shift, dan dilarang memalsukan angka.'
      ],
      summary: 'Sistem HACCP (危害要因分析重要管理点) menjamin keamanan pangan melalui 7 Prinsip resmi yang berfokus pada titik kendali kritis (CCP) seperti pemanasan termal (75°C 1 mnt), pendinginan cepat (30 mnt ke 20°C), disinfeksi klorin (200 ppm 5 mnt), detektor logam, dan detektor sinar-X. Setiap deviasi (逸脱) wajib dilaporkan seketika untuk tindakan perbaikan (改善措置), dan seluruh data monitoring wajib dicatat secara jujur, akurat, dan real-time.',
      practiceQuestions: [
        {
          id: 'mfg_ch4_q1',
          questionNumber: 1,
          questionText: 'Berapakah standar pendinginan cepat (冷却) pasca-pemanasan yang disyaratkan dalam kurikulum resmi OTAFF untuk mencegah perkecambahan bakteri spora pada makanan?',
          situation: 'Proses pendinginan makanan matang (kari, semur, sup kental) sebelum pengemasan.',
          options: [
            'Dibiarkan di suhu ruangan pabrik selama 3 jam hingga dingin sendiri.',
            'Diturunkan suhunya ke 20°C dalam waktu 30 menit, atau ke 10°C dalam waktu 60 menit.',
            'Cukup dimasukkan ke dalam kulkas semalaman tanpa diukur suhunya.',
            'Didinginkan dengan kipas angin biasa hingga suhu mencapai 40°C.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Berdasarkan buku panduan resmi OTAFF Edisi ke-4 (halaman 34), untuk mencegah pertumbuhan mikroorganisme spora seperti Clostridium perfringens dan Bacillus cereus, makanan matang wajib didinginkan cepat: menurunkan suhu inti ke 20°C dalam waktu 30 menit, atau ke 10°C dalam waktu 60 menit (風冷 atau 水冷).',
          translation: 'Pilihlah standar pendinginan cepat pasca-pemasakan yang benar.'
        },
        {
          id: 'mfg_ch4_q2',
          questionNumber: 2,
          questionText: 'Apakah aturan yang PALING BENAR mengenai pengisian lembar pencatatan (記録) parameter HACCP di pabrik pengolahan pangan Jepang?',
          situation: 'Pencatatan suhu termometer dan hasil kalibrasi detektor logam harian.',
          options: [
            'Boleh mencatat angka perkiraan terlebih dahulu sebelum pengukuran agar pekerjaan lebih cepat selesai.',
            'Boleh mengumpulkan semua data di kepala lalu mencatatnya sekaligus di akhir jam kerja saat hendak pulang.',
            'Wajib mencatat angka secara langsung saat pengukuran dilakukan (real-time), dilarang mencatat sebelum mengukur, dan dilarang merekayasa angka sendiri.',
            'Jika hasil pengukuran tidak sesuai batas kritis, pekerja boleh mengubah angka tersebut agar lembar evaluasi terlihat baik.'
          ],
          correctAnswerIndex: 2,
          explanation: 'Sesuai buku teks resmi OTAFF Edisi ke-4 (halaman 40-41), pencatatan wajib dilakukan seketika saat mengukur atau memastikan (はかったとき、確認したときにすぐ記録). Dilarang menunda di akhir hari, dilarang mencatat sebelum mengukur, dan dilarang keras mencatat hal yang tidak benar atau mengubah data tanpa wewenang supervisor.',
          translation: 'Pilihlah aturan pencatatan parameter HACCP yang benar.'
        }
      ],
      officialReference: {
        source: 'Buku Teks Pembelajaran Ujian Keterampilan Manufaktur Makanan & Minuman (第4版, Halaman 5-6, 37-41)',
        agency: 'OTAFF (一般社団法人 外国人食品産業技能評価機構)',
        documentTitle: 'Bab 2: 食品衛生 (4. ＨＡＣＣＰによる衛生管理: ＨＡＣＣＰの７原則、重要管理点、逸脱と改善措置、記録)'
      }
    },

    // ------------------------------------------------------------------------
    // BAB 5: KESELAMATAN KERJA (K3), KYT, APD & PANDUAN UJIAN RESMI
    // ------------------------------------------------------------------------
    {
      id: 'mfg_ch5',
      sectorId: 'manufacturing',
      category: 'persiapan_ujian',
      chapterNumber: 5,
      title: 'Keselamatan & Kesehatan Kerja (K3), Budaya KYT, APD & Simulasi Ujian OTAFF',
      japaneseTitle: '工場の労働安全衛生・ＫＹＴ・保護具・技能測定試験対策',
      estimatedMinutes: 35,
      objectives: [
        'Memahami profil kecelakaan kerja pabrik makanan di Jepang: pekerja pemula (<3 tahun) menyumbang 50% korban; 3 kecelakaan utama mencakup 60%.',
        'Menguasai nama dan fungsi Alat Pelindung Diri (APD / 安全保護具) khusus pabrik pangan (sarung tangan mexcel & rantai, boot berpenutup, kacamata pelindung).',
        'Menerapkan prinsip rekayasa keselamatan mesin: Tombol Berhenti Darurat (非常停止ボタン), Fail-Safe (フェールセーフ), dan Fool-Proof (フールプルーフ).',
        'Mempraktikkan budaya keselamatan kerja: Pointing and Calling (指差し呼称), Hukum Heinrich (1:29:300), Latihan Prediksi Bahaya KYT ("かもしれない"), dan mengenali rambu keselamatan.',
        'Menguasai struktur dan strategi lulus ujian resmi OTAFF CBT (Ujian Teori 30 soal & Ujian Praktik 15 soal).'
      ],
      contentExplanation: `### 1. Karakteristik Kecelakaan Kerja di Pabrik Pangan Jepang

Berdasarkan data resmi Kementerian Kesehatan, Tenaga Kerja dan Kesejahteraan Jepang (MHLW / 厚生労働省 Reiwa 4) yang dirujuk dalam buku teks OTAFF (halaman 43–44):
- **Pekerja Belum Berpengalaman (未熟練作業者 - masa kerja < 3 tahun)** menyumbang **sekitar 50% (setengah) dari total seluruh korban meninggal dan cedera** di industri pengolahan pangan. Hal ini disebabkan karena kurangnya pengalaman, belum terbiasa dengan bahaya laten di tempat kerja, dan sering bertindak ceroboh.
- **Tiga Jenis Kecelakaan Kerja Terbesar di Pabrik Pangan** mencakup **sekitar 60% dari seluruh kecelakaan kerja**:
  1. **Terpeleset dan Tersandung (転倒 - Tentou)**: **31,3%** (nomor 1 paling sering terjadi akibat lantai basah tergenang air, ceceran minyak, atau tersandung kardus/palet kosong di lorong).
  2. **Terjepit dan Tergulung Mesin (はさまれ・巻き込まれ - Hasamare / Makikomare)**: **19,2%** (terjadi saat tangan mencoba mengambil barang macet pada konveyor/mesin yang masih beroperasi, atau saat membersihkan roda gigi rantai).
  3. **Teriris dan Tergores (切れ・こすれ - Kire / Kosure)**: **10,8%** (terkena pisau dapur saat memotong ikan beku tanpa sarung tangan anti-potong, atau terkena pisau mesin slicer saat mendorong roti tanpa papan dorong).
  - *Kecelakaan lainnya*: Jatuh dari tangga/ketinggian (**墜落・転落**) 8,4%, Luka bakar panas oven/fryer (**やけど**), Sakit pinggang akibat angkat beban salah (**腰痛**), Sengatan panas (**熱中症 - Netchuushou**), dan Tertabrak forklift (**激突 - Gekitotsu**).

---

### 2. Alat Pelindung Diri (APD / 安全保護具 - Anzen Hogogu) Khusus Pabrik

Pekerja wajib menggunakan APD yang tepat sesuai jenis pekerjaannya (Buku Teks OTAFF halaman 47):
- **Helm Pengaman (ヘルメット - Herumetto)**:
  - Wajib dipakai saat bekerja di ketinggian **2 meter atau lebih (高所作業 - Kousho Sagyou)** seperti menaiki tangga rak gudang, untuk mencegah cedera benturan kepala.
- **Kacamata Pelindung (保護メガネ - Hogo Megane)**:
  - Melindungi mata dari percikan cairan kimia sanitasi/klorin, serbuk halus bahan tepung, dan partikel semprotan pembersihan air bertekanan tinggi (高圧洗浄).
- **Penyumbat Telinga (耳栓 - Mimisen)**:
  - Wajib dipakai di area mesin bersuara bising tinggi untuk mencegah gangguan pendengaran okupasional / tuli permanen (**難聴 - Nanchou**).
- **Celemek Tahan Panas (耐熱エプロン) & Sarung Tangan Oven (ミトン手袋)**:
  - Terbuat dari bahan kain tahan panas dan karet tebal untuk mencegah luka bakar saat menangani loyang oven panas, ketel rebus, dan fryer minyak.
- **Sarung Tangan Mexcel (メクセル手袋 - Mekuseru Tebukuro)**:
  - Sarung tangan rajut benang khusus serat berkekuatan tinggi yang **tahan sayatan (耐切創手袋 - Taiseissou Tebukuro)**. Digunakan saat mengoperasikan pisau dapur pada bahan umum.
- **Sarung Tangan Rantai Kawat Baja (くさり手袋 - Kusari Tebukuro)**:
  - Terbuat dari anyaman jaring baja tahan karat (*stainless steel wire mesh*). Digunakan saat memotong daging beku keras atau membelah labu parang Jepang (**かぼちゃ - Kabocha**) dengan tenaga besar agar jari tangan tidak terpotong pisau jika tergelincir.
- **Sepatu Bot Berpenutup Atas (カバー付き長靴 - Kabaatsuki Nagagutsu)**:
  - Sepatu bot bersol anti-minyak (**耐油 - Taiyu**) dan anti-slip agar tidak mudah terpeleset di lantai basah, dilengkapi penutup fleksibel di bagian atasnya agar cipratan air panas dan bahan kimia tidak masuk ke dalam kaki.
- **Sepatu Keselamatan (安全靴 - Anzengutsu)**:
  - Ujung jari dan tumitnya diperkuat pelat baja atau pelat komposit plastik keras untuk menahan timpaan barang berat dan benturan palet.

---

### 3. Prosedur Keselamatan Mesin: Tombol Darurat, Fail-Safe & Fool-Proof

- **Aturan Nomor 1 Mesin Beroperasi**:
  **DILARANG MEMASUKKAN TANGAN KE DALAM MESIN YANG SEDANG MENYALA / BERJALAN (運転中に手を入れてはいけない)**. Meskipun mesin tampak berhenti karena produk macet, sensor pisau atau ulir sekrup di dalamnya masih dapat berputar mendadak jika sumbatan terlepas.
- **Tombol Berhenti Darurat (非常停止ボタン - Hijou Teishi Botan)**:
  - Tombol merah berbentuk jamur di panel kontrol mesin. Setiap pekerja wajib mengetahui letaknya dan siap menekan tombol ini seketika saat terjadi kondisi darurat atau ada rekan yang terjepit.
- **Prinsip Rekayasa Keselamatan Kerja**:
  1. **Fail-Safe (フェールセーフ)**:
     - Mekanisme keselamatan di mana mesin dirancang untuk **otomatis berhenti sendiri jika terjadi kerusakan komponen atau jika pintu pelindung dibuka**. Misalnya pintu penutup konveyor yang dilengkapi interlock sensor; begitu pintu dibuka saat mesin menyala, arus listrik langsung terputus otomatis.
  2. **Fool-Proof (フールプルーフ)**:
     - Desain fisik peralatan yang dirancang sedemikian rupa sehingga **meskipun manusia lalai, lupa, atau salah bertindak, kecelakaan tetap tidak akan terjadi**. Contohnya adalah pemasangan penutup pengaman (**安全カバー**) pada rantai gir konveyor sehingga jari tangan fisik tidak akan bisa menjangkau roda gigi yang berputar.
- **Prosedur Pemeliharaan (点検整備 - Men-tenansu)**:
  - Sebelum membersihkan atau memperbaiki mesin, matikan saklar listrik utama, gantungkan papan peringatan **"Sedang Diperiksa / Dirawat" (点検整備中)**, dan kunci saklarnya agar tidak dinyalakan oleh orang lain secara keliru.

---

### 4. Budaya Keselamatan Kerja: Pointing & Calling, Heinrich, dan KYT

- **Menunjuk dan Menyebut (指差し呼称 - Shisashi Koshou)**:
  - Mengarahkan jari telunjuk ke objek kerja (lampu sinyal, saklar, termometer, kran) sambil menyerukan namanya dan statusnya dengan lantang: contoh *"Suhu 85 derajat, Yosh!" (温度85度、よし！)*. Metode ini terbukti secara ilmiah menurunkan tingkat kesalahan manusia (human error) hingga lebih dari 80%.
- **Penanganan Kecelakaan & Larangan Bencana Sekunder (二次災害 - Niji Saigai)**:
  - Jika melihat rekan terluka atau pingsan di dekat mesin beroperasi, **JANGAN PANIK DAN JANGAN LANGSUNG MENDEKAT SEMBARANGAN**. Mendekat tanpa mematikan mesin dapat menyebabkan penolong ikut terjepit/tersetrum listrik (**Bencana Sekunder / 二次災害**). Segera tekan Tombol Berhenti Darurat, teriakkan bantuan dengan suara lantang, dan lapor ke penanggung jawab.
- **Hukum Heinrich (ハインリッヒの法則 - Heinrich's Law)**:
  - Rasio kecelakaan kerja: **1 : 29 : 300**.
  - Untuk setiap **1 kecelakaan fatal/berat (重い災害)** yang terjadi, terdapat **29 kecelakaan ringan (軽いケガ)** dengan penyebab yang sama, dan ada **300 insiden nyaris celaka tanpa cedera (ヒヤリ・ハット - Hiyari-Hatto)**.
  - *Makna Praktis*: Dengan melaporkan dan meniadakan 300 kejadian nyaris celaka (Hiyari-Hatto) melalui perbaikan fasilitas, maka 1 kecelakaan fatal akan dapat dicegah secara total.
- **Pelatihan Prediksi Bahaya KYT (危険予知訓練 - Kiken Yochi Training)**:
  - Latihan sebelum mulai kerja untuk membiasakan pekerja berpikir dengan kesadaran **"Jangan-jangan / Bisa Jadi..." (「かもしれない」意識 - Kamoshirenai Ishiki)**:
    - *"Lantai di depan freezer basah... jangan-jangan ada lapisan es tipis dan saya bisa terpeleset!"*
    - *"Pintu gudang terbuka... jangan-jangan forklift melaju kencang dan menabrak saya!"*
    - *"Panci sup baru diangkat... jangan-jangan kuah panas tumpah mengenai kaki jika tidak memakai boot berpenutup!"*
- **Ergonomi Mengangkat Beban Berat**:
  - Untuk mencegah nyeri pinggang (**腰痛 - Youtsuu**), dekatkan tubuh ke beban, tekuk kedua lutut (**膝を曲げる**), turunkan pinggul, dekap beban rapat di dada, lalu luruskan lutut perlahan sambil menegakkan punggung. Dilarang membungkukkan punggung saat mengangkat benda berat! Gunakan troli/gerobak (**台車**).
- **Pencegahan Sengatan Panas (熱中症 - Netchuushou)**:
  - Di ruang pemasakan yang panas dan lembap, pekerja wajib memakai pakaian berventilasi baik, istirahat teratur di tempat sejuk, serta rutin minum air putih dan asupan garam/minuman isotonik.

---

### 5. Rambu Keselamatan Kerja Pabrik Pangan (安全標識 - Anzen Hyoushiki)

Berdasarkan Lampiran Resmi OTAFF (halaman 63–65):
1. **Rambu Larangan (禁止標識)**:
   - **立入禁止 (Tachiiri Kinshi)**: Dilarang Masuk (Do Not Enter).
   - **走るな (Hashiruna)**: Dilarang Berlari di Lorong Pabrik.
   - **開放厳禁 (Kaihou Genkin)**: Dilarang Membiarkan Pintu Terbuka (Opening Strictly Prohibited).
   - **手をふれるな / スイッチを入れるな**: Dilarang Menyentuh / Dilarang Menyalakan Saklar saat mesin sedang dalam perawatan.
2. **Rambu Peringatan Bahaya (注意標識)**:
   - **はさまれ注意 (Hasamare Chuui)**: Awas Bahaya Terjepit Mesin / Konveyor.
   - **高温注意 / やけど注意 (Kouon / Yakedo Chuui)**: Awas Bahaya Permukaan Panas / Luka Bakar.
   - **足元注意 / 転倒注意 (Ashimoto / Tentou Chuui)**: Awas Lantai Licin / Bahaya Tersandung.
   - **開口部注意 / 転落注意 (Kaikoubu / Tenraku Chuui)**: Awas Lubang Bukaan / Bahaya Jatuh Tergelincir.
   - **切断注意 (Setsudan Chuui)**: Awas Bahaya Terpotong / Teriris Pisau Mesin.
   - **回転物に手を出すな (Kaitenbutsu ni te wo dasuna)**: Awas Benda Berputar / Jangan Menjulurkan Tangan.
   - **感電注意 (Kanden Chuui)**: Awas Bahaya Sengatan Listrik Bertegangan Tinggi.
   - **頭上注意 (Zujou Chuui)**: Awas Benturan Kepala / Benda di Atas Kepala.
3. **Rambu Wajib & Sarana Darurat (指示・緊急標識)**:
   - **保護メガネ着用 / ゴーグル着用**: Wajib Memakai Kacamata Pelindung / Goggle.
   - **非常口 (Hijouguchi)**: Pintu Keluar Darurat Evakuasi Kebakaran/Bencana.
   - **消火器 (Shoukakki)**: Lokasi Tabung Alat Pemadam Api Ringan (APAR).

---

### 6. Struktur & Strategi Ujian Resmi OTAFF CBT

1. **Ujian Teori / Akademik (学科試験 - Gakka Shiken)**:
   - Jumlah: 30 soal pilihan ganda komputer (CBT).
   - Materi: Higiene makanan, 3 bahaya pangan, 8 alergen wajib, nama bakteri/virus, suhu penyimpanan, 5S & zonasi, 7 prinsip HACCP, dan K3 pabrik.
2. **Ujian Praktik / Penilaian Gambar (実技試験 / 判断等試験 - Jitsugi / Handan-tou Shiken)**:
   - Jumlah: 15 soal berbasis foto/ilustrasi situasi kerja nyata di pabrik.
   - Menilai kemampuan analisis visual: mengidentifikasi cara pemakaian seragam yang salah, postur mengangkat beban yang salah, penanganan alarm detektor logam, dan tindakan darurat saat terjadi kecelakaan.
   - **Ambang Kelulusan**: Wajib meraih nilai minimal **65%** pada kedua bagian ujian tersebut.`,
      keyTerms: [
        {
          japanese: '労働災害',
          kana: 'ろうどうさいがい',
          romaji: 'roudou saigai',
          indonesian: 'Kecelakaan kerja / penyakit okupasional di lingkungan industri pabrik.'
        },
        {
          japanese: '未熟練作業者',
          kana: 'みじゅくれんさぎょうしゃ',
          romaji: 'mijukuren sagyousha',
          indonesian: 'Pekerja pemula dengan pengalaman <3 tahun (menyumbang 50% korban kecelakaan).'
        },
        {
          japanese: '転倒',
          kana: 'てんとう',
          romaji: 'tentou',
          indonesian: 'Kecelakaan terpeleset dan tersandung (jenis kecelakaan peringkat 1 pabrik: 31,3%).'
        },
        {
          japanese: 'はさまれ・巻き込まれ',
          kana: 'はさまれ・まきこまれ',
          romaji: 'hasamare, makikomare',
          indonesian: 'Kecelakaan terjepit dan tergulung mesin/konveyor (peringkat 2: 19,2%).'
        },
        {
          japanese: '切れ・こすれ',
          kana: 'きれ・こすれ',
          romaji: 'kire, kosure',
          indonesian: 'Kecelakaan teriris pisau dan tergores permukaan mesin (peringkat 3: 10,8%).'
        },
        {
          japanese: '指差し呼称',
          kana: 'しさしこしょう',
          romaji: 'shisashi koshou',
          indonesian: 'Metode menunjuk dan menyebut dengan suara lantang untuk memastikan keamanan.'
        },
        {
          japanese: '非常停止ボタン',
          kana: 'ひじょうていしぼたん',
          romaji: 'hijou teishi botan',
          indonesian: 'Tombol berhenti darurat (Emergency Stop) untuk mematikan mesin seketika saat bahaya.'
        },
        {
          japanese: '安全保護具',
          kana: 'あんぜんほごぐ',
          romaji: 'anzen hogogu',
          indonesian: 'Alat Pelindung Diri (APD) lengkap pabrik (helm, kacamata, sarung tangan, sepatu bot).'
        },
        {
          japanese: 'くさり手袋',
          kana: 'くさりてぶくろ',
          romaji: 'kusari tebukuro',
          indonesian: 'Sarung tangan anyaman kawat stainless steel anti-potong untuk memotong daging keras/labu.'
        },
        {
          japanese: 'メクセル手袋',
          kana: 'めくせるてぶくろ',
          romaji: 'mekuseru tebukuro',
          indonesian: 'Sarung tangan rajut serat berkekuatan tinggi tahan sayatan pisau (耐切創手袋).'
        },
        {
          japanese: 'カバー付き長靴',
          kana: 'かばーつきながぐつ',
          romaji: 'kabaatsuki nagagutsu',
          indonesian: 'Sepatu bot sol anti-minyak/anti-slip berpenutup atas penangkal cairan panas & kimia.'
        },
        {
          japanese: '安全靴',
          kana: 'あんぜんぐつ',
          romaji: 'anzengutsu',
          indonesian: 'Sepatu keselamatan berpelat baja di ujung jari dan tumit pelindung impak berat.'
        },
        {
          japanese: '安全標識',
          kana: 'あんぜんひょうしき',
          romaji: 'anzen hyoushiki',
          indonesian: 'Rambu keselamatan kerja di pabrik (larangan, peringatan bahaya, dan sarana darurat).'
        },
        {
          japanese: 'ハインリッヒの法則',
          kana: 'はいんりっひのほうそく',
          romaji: 'hainrihhi no housoku',
          indonesian: 'Hukum Heinrich: rasio 1 kecelakaan berat : 29 kecelakaan ringan : 300 nyaris celaka.'
        },
        {
          japanese: 'ヒヤリ・ハット',
          kana: 'ひやり・はっと',
          romaji: 'hiyari hatto',
          indonesian: 'Kejadian nyaris celaka (near-miss incident) yang wajib dilaporkan untuk perbaikan.'
        },
        {
          japanese: '危険予知訓練',
          kana: 'きけんよちくんれん',
          romaji: 'kiken yochi kunren',
          indonesian: 'KYT: pelatihan prediksi bahaya sebelum mulai kerja untuk meningkatkan kewaspadaan.'
        },
        {
          japanese: 'かもしれない',
          kana: 'かもしれない',
          romaji: 'kamoshirenai',
          indonesian: 'Pola pikir "bisa jadi/jangan-jangan..." untuk mendeteksi potensi bahaya laten di tempat kerja.'
        },
        {
          japanese: 'フェールセーフ',
          kana: 'ふぇーるせーふ',
          romaji: 'feeru seefu',
          indonesian: 'Prinsip fail-safe: desain mesin otomatis mati aman jika terjadi malfungsi/pintu dibuka.'
        },
        {
          japanese: 'フールプルーフ',
          kana: 'ふーるぷるーふ',
          romaji: 'fuuru puruufu',
          indonesian: 'Prinsip fool-proof: desain pelindung fisik yang mencegah kecelakaan akibat kelalaian manusia.'
        },
        {
          japanese: '二次災害',
          kana: 'にじさいがい',
          romaji: 'niji saigai',
          indonesian: 'Bencana/kecelakaan sekunder yang menimpa penolong akibat menolong secara tergesa-gesa.'
        }
      ],
      workplaceCaseStudy: {
        title: 'Kasus: Penerapan Pola Pikir "Kamoshirenai" dan Penanganan Mesin Konveyor Macet',
        scenario: 'Lini conveyor pemotong roti tiba-tiba berhenti karena ada tumpukan potongan roti yang tersangkut di bagian roda gigi penarik. Seorang pekerja magang baru hendak langsung memasukkan tangannya untuk menarik roti tersebut karena melihat konveyor sudah tidak bergerak.',
        dialogue: [
          {
            speaker: '同僚 (Rekan Kerja)',
            role: 'Senior Worker',
            japanese: '危ない！手を引っ込めて！機械が止まって見えても、電源が入ったままだと急に動き出す「かもしれない」んだよ！',
            kana: 'あぶない！てをひっこめて！きかいがとまってみえても、でんげんがはいったままだときゅうにうごきだす「かもしれない」んだよ！',
            romaji: 'Abunai! Te wo hikkomete! Kikai ga tomatte miete mo, dengen ga haitta mama da to kyuu ni ugokidasu "kamoshirenai" n da yo!',
            indonesian: 'Bahaya! Tarik tanganmu! Meskipun mesin tampak berhenti, jika tombol daya masih menyala, bisa jadi mesin mendadak berputar kembali!'
          },
          {
            speaker: '作業員 (Pekerja Baru)',
            role: 'Pekerja Baru',
            japanese: 'あっ…すみません！つい焦って手を伸ばしてしまいました。',
            kana: 'あっ…すみません！ついあせっててをのばしてしまいました。',
            romaji: 'A... sumimasen! Tsui asette te wo nobashite shimaimashita.',
            indonesian: 'Ah... maafkan saya! Saya tadi panik dan refleks mengulurkan tangan.'
          },
          {
            speaker: '同僚 (Rekan Kerja)',
            role: 'Senior Worker',
            japanese: '詰まった物を取るときは、まず「非常停止ボタン」を押すか主電源を切る。そして「点検中」の札を掛けてから、安全装置のカバーを開けて作業するのが鉄則です。巻き込まれ事故は食品工場で一番重い怪我になるんだから、絶対にルールを守ろう！',
            kana: 'つまったものをとるときは、まず「ひじょうていしぼたん」をおすかしゅでんげんをきる。そして「てんけんちゅう」のふだをかけてから、あんぜんそうちのかばーをあけてさぎょうするのがてっそくです。まきこまれじこはしょくひんこうじょうでいちばんおもいけがになるんだから、ぜったいにるーるをまもろう！',
            romaji: 'Tsumatta mono wo toru toki wa, mazu "hijou teishi botan" wo osu ka shudengen wo kiru. Soshite "tenkenchuu" no fuda wo kakete kara, anzen souchi no kabaa wo akete sagyou suru no ga tessoku desu. Makikomare jiko wa shokuhin koujou de ichiban omoi kega ni naru n da kara, zettai ni ruuru wo mamorou!',
            indonesian: 'Ketika mengambil benda yang tersumbat, aturan mutlaknya adalah: pertama tekan "Tombol Berhenti Darurat" atau matikan daya utama. Kemudian gantungkan label "Sedang Perawatan", baru buka penutup keselamatan dan bersihkan sumbatan. Kecelakaan tergulung mesin adalah cedera paling berat di pabrik pangan, patuhi selalu aturan!'
          }
        ],
        takeaway: 'Mesin macet yang tampak berhenti menyimpan energi putar mematikan jika saklar masih aktif. Selalu matikan daya/tekan tombol emergency stop, pasang tanda perawatan, dan gunakan pola pikir "kamoshirenai" sebelum mendekati mesin.'
      },
      visualDiagram: {
        title: 'Statistik Kecelakaan Kerja & Rasio Hukum Heinrich di Pabrik Pangan Jepang',
        subtitle: 'Berdasarkan Data Resmi MHLW (Reiwa 4) & Kurikulum OTAFF 2024',
        type: 'table',
        items: [
          {
            label: '1. 転倒 (Terpeleset & Tersandung) — 31,3%',
            description: 'Kecelakaan nomor 1 terbanyak di pabrik pangan. Terjadi akibat lantai basah tergenang air/minyak dan lorong terhalang.',
            highlight: 'Paling Sering (31,3%)'
          },
          {
            label: '2. はさまれ・巻き込まれ (Terjepit/Tergulung) — 19,2%',
            description: 'Penyebab cedera berat dan patah tulang terbanyak saat membersihkan atau memperbaiki konveyor yang masih menyala.',
            highlight: 'Paling Fatal (19,2%)'
          },
          {
            label: '3. 切れ・こすれ (Teriris & Tergores) — 10,8%',
            description: 'Luka sayat akibat pisau pemotong atau mesin pengiris saat bekerja tanpa sarung tangan mexcel/rantai.',
            highlight: 'Pisau & Slicer (10,8%)'
          },
          {
            label: 'Rasio Heinrich: 1 : 29 : 300',
            description: 'Untuk setiap 1 kecelakaan fatal/berat, terdapat 29 kecelakaan ringan, dan 300 insiden nyaris celaka (ヒヤリ・ハット). Meniadakan hiyari-hatto akan melenyapkan kecelakaan fatal!',
            highlight: 'Hukum Heinrich'
          }
        ]
      },
      importantPoints: [
        'Pekerja masa kerja kurang dari 3 tahun (未熟練作業者) menyumbang sekitar 50% korban kecelakaan kerja di pabrik pangan.',
        '3 Kecelakaan utama mencakup 60% total kasus: 転倒 (31,3%), はさまれ・巻き込まれ (19,2%), dan 切れ・こすれ (10,8%).',
        'Bekerja di ketinggian ≥ 2 meter wajib memakai Helm (ヘルメット). Area bising wajib memakai Penyumbat Telinga (耳栓).',
        'Memotong labu keras atau daging beku wajib memakai sarung tangan anyaman kawat stainless steel (くさり手袋) atau sarung tangan mexcel (メクセル手袋).',
        'Prinsip Keselamatan Rekayasa: Fail-Safe (otomatis mati jika rusak/pintu dibuka) dan Fool-Proof (penutup fisik penangkal kelalaian manusia).',
        'Metode 指差し呼称 (Pointing and Calling): Menunjuk objek dan menyebutkan statusnya dengan suara lantang terbukti memangkas human error >80%.',
        'Hukum Heinrich 1 : 29 : 300 membuktikan bahwa melaporkan 300 kejadian nyaris celaka (ヒヤリ・ハット) akan mencegah 1 kecelakaan fatal.',
        'Pola pikir "かもしれない" (Kamoshirenai / Jangan-jangan): Senantiasa mengantisipasi potensi bahaya laten sebelum mulai bekerja.',
        'Ujian resmi OTAFF CBT terdiri dari 30 soal Teori Akademik dan 15 soal Praktik Gambar dengan passing grade minimal 65%.'
      ],
      summary: 'Keselamatan kerja (労働安全) di pabrik pengolahan pangan Jepang berfokus pada pencegahan 3 kecelakaan utama (転倒 31,3%, はさまれ 19,2%, 切れ 10,8%) yang sering menimpa pekerja pemula. Kepatuhan mutlak terhadap penggunaan APD khusus (sarung tangan rantai, mexcel, boot berpenutup), rekayasa fail-safe dan fool-proof, tombol darurat, metode指差し呼称, hukum Heinrich 1:29:300, serta latihan prediksi bahaya KYT ("かもしれない") adalah kunci kelulusan ujian OTAFF dan keselamatan bekerja di Jepang.',
      practiceQuestions: [
        {
          id: 'mfg_ch5_q1',
          questionNumber: 1,
          questionText: 'Berdasarkan data resmi MHLW dalam buku teks OTAFF 2024, jenis kecelakaan kerja apakah yang PALING SERING TERJADI (peringkat 1 dengan persentase 31,3%) di pabrik manufaktur makanan Jepang?',
          situation: 'Analisis statistik kecelakaan kerja di industri manufaktur pangan.',
          options: [
            'Terbakar cairan minyak panas (やけど)',
            'Terpeleset dan tersandung (転倒 - Tentou)',
            'Tertabrak kendaraan forklift gudang (激突)',
            'Tersengat aliran listrik bertegangan tinggi (感電)'
          ],
          correctAnswerIndex: 1,
          explanation: 'Berdasarkan data statistik resmi MHLW tahun Reiwa 4 yang tercantum pada diagram lingkaran buku teks OTAFF Edisi ke-4 (halaman 43), jenis kecelakaan kerja nomor 1 terbanyak di pabrik makanan adalah 転倒 (Terpeleset & Tersandung) sebesar 31,3%, disusul oleh はさまれ・巻き込まれ (19,2%) dan 切れ・こすれ (10,8%).',
          translation: 'Pilihlah jenis kecelakaan kerja nomor 1 terbanyak di pabrik makanan Jepang.'
        },
        {
          id: 'mfg_ch5_q2',
          questionNumber: 2,
          questionText: 'Di pabrik pengolahan makanan, seorang pekerja hendak memotong labu parang yang sangat keras (かぼちゃ) menggunakan pisau besar. Alat Pelindung Diri (APD) manakah yang WAJIB dikenakan pada tangan yang memegang bahan?',
          situation: 'Pemotongan bahan baku keras berisiko pisau tergelincir.',
          options: [
            'Sarung tangan plastik tipis sekali pakai (使い捨て手袋)',
            'Sarung tangan anyaman kawat baja stainless steel (くさり手袋) atau sarung tangan tahan sayat mexcel (メクセル手袋)',
            'Sarung tangan katun rajut biasa (軍手 - Gunte)',
            'Cukup memegang dengan tangan kosong asalkan berhati-hati'
          ],
          correctAnswerIndex: 1,
          explanation: 'Berdasarkan buku teks resmi OTAFF Edisi ke-4 (halaman 47), saat memotong daging beku atau sayuran keras seperti labu (かぼちゃ) dengan tenaga kuat, pekerja wajib mengenakan sarung tangan tahan potong jenis jaring baja stainless steel (くさり手袋) atau sarung tangan serat berkekuatan tinggi (メクセル手袋) untuk mencegah cedera amputasi/sayatan jika pisau tergelincir.',
          translation: 'Pilihlah sarung tangan yang wajib digunakan saat memotong sayuran keras atau daging beku.'
        }
      ],
      officialReference: {
        source: 'Buku Teks Pembelajaran Ujian Keterampilan Manufaktur Makanan & Minuman (第4版, Halaman 42-65)',
        agency: 'OTAFF (一般社団法人 外国人食品産業技能評価機構)',
        documentTitle: 'Bab 3: 労働安全 (1. 主な労働災害、2. 労働災害を無くすために守るべき大切なこと、4. 危険に気がつく力をつける、5. 主な労働災害事例、補足資料: 安全標識)'
      }
    }
  ],
  examSimulation: {
    title: 'Simulasi Resmi Ujian OTAFF Pengolahan Makanan (飲食料品製造業)',
    subtitle: 'Standar Ujian Teori Akademik (学科試験) & Ujian Praktik/Penilaian Gambar (実技試験 / 判断等試験) CBT Prometric',
    timeMinutes: 40,
    passingScorePercentage: 65,
    questions: [
      {
        id: 'mfg_sim_q1',
        questionNumber: 1,
        questionText: 'ノロウイルスに汚染された調理台や床、嘔吐物の消毒に使用する薬剤として、最も適切なものを一つ選びなさい。',
        situation: 'Desinfeksi kontaminasi Norovirus pada fasilitas atau muntahan.',
        options: [
          '消毒用エタノール（アルコールスプレー）',
          '次亜塩素酸ナトリウム（じあえんそさんなとりうむ）希釈液（200 ppm〜1,000 ppm）',
          '水道水のみによる水拭き',
          '中性洗剤（食器用洗剤）の希釈水'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Norovirus tidak memiliki selubung lipid (non-enveloped virus) sehingga kebal terhadap alkohol 70%. Untuk membasmi Norovirus, wajib menggunakan larutan Natrium Hipoklorit (次亜塩素酸ナトリウム) konsentrasi minimal 200 ppm untuk peralatan/lantai atau 1.000 ppm untuk muntahan.',
        translation: 'Pilihlah disinfektan yang paling tepat untuk sterilisasi fasilitas yang terkontaminasi Norovirus.'
      },
      {
        id: 'mfg_sim_q2',
        questionNumber: 2,
        questionText: '細菌性食中毒を予防するための「食中毒予防の３原則」の組み合わせとして、正しいものを一つ選びなさい。',
        situation: 'Tiga prinsip dasar pencegahan keracunan makanan akibat bakteri.',
        options: [
          '「持ち込まない」「拡げない」「やっつける」',
          '「つけない」「増やさない」「やっつける」',
          '「整理」「整頓」「清掃」',
          '「見ない」「聞かない」「言わない」'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Tiga prinsip dasar pencegahan keracunan makanan bakteri adalah: 1. つけない (Jangan menempelkan / cuci tangan & pemisahan alat), 2. 増やさない (Jangan biarkan berkembang biak / kontrol suhu dingin <10°C & kerja cepat), 3. やっつける (Basmi / pemanasan 75°C 1 menit). Pilihan 1 adalah 4 prinsip Norovirus (持ち込まない、つけない、やっつける、拡げない).',
        translation: 'Pilihlah kombinasi 3 prinsip pencegahan keracunan makanan bakteri yang benar.'
      },
      {
        id: 'mfg_sim_q3',
        questionNumber: 3,
        questionText: '金属探知機の感度が正常に作動しているか始業前および定期点検で確認するために使用する器具として、正しいものを一つ選びなさい。',
        situation: 'Alat uji sensitivitas mesin detektor logam pada inspeksi harian.',
        options: [
          'テストピース（鉄 Fe / ステンレス SUS の標準試験片）',
          'アルコールチェッカー',
          '粘着ローラー（コロコロ）',
          'デジタル芯温計'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Untuk menguji kepekaan detektor logam (金属探知機), operator melewatkan sampel uji standar (テストピース / Test Piece) berbahan besi (Fe) dan baja tahan karat (SUS). Jika alarm sensor berbunyi dan produk terdorong keluar jalur (reject), mesin bekerja dengan baik.',
        translation: 'Pilihlah instrumen yang tepat untuk memeriksa sensitivitas mesin pendeteksi logam.'
      },
      {
        id: 'mfg_sim_q4',
        questionNumber: 4,
        questionText: '食品表示基準において、容器包装への表示が法律で義務付けられている「特定原材料（8品目）」の組み合わせとして、正しいものを一つ選びなさい。',
        situation: 'Daftar 8 bahan pangan pemicu alergi yang WAJIB dicantumkan menurut standar resmi Jepang.',
        options: [
          'えび、かに、小麦、そば、卵、乳、落花生（ピーナッツ）、くるみ',
          'えび、かに、大豆、米、卵、牛肉、豚肉、鶏肉',
          '小麦、そば、りんご、バナナ、オレンジ、もも、キウイ、トマト',
          'サバ、サケ、アワビ、イカ、イクラ、ごま、ゼラチン、カシューナッツ'
        ],
        correctAnswerIndex: 0,
        explanation: 'Pilihan 1 benar. Berdasarkan revisi undang-undang standar pelabelan pangan Jepang dan buku teks resmi OTAFF Edisi ke-4 (2024), ada 8 bahan baku spesifik yang WAJIB dicantumkan (特定原材料 8品目): Udang, Kepiting, Gandum, Soba, Telur, Susu, Kacang tanah, dan Kenari/Walnut (くるみ). Pilihan lain memuat bahan rekomendasi/anjuran (20品目).',
        translation: 'Pilihlah kombinasi yang benar dari 8 bahan baku tertentu (alergen) yang secara hukum wajib dicantumkan.'
      },
      {
        id: 'mfg_sim_q5',
        questionNumber: 5,
        questionText: '「賞味期限」と「消費期限」の違いに関する記述として、最も適切なものを一つ選びなさい。',
        situation: 'Perbedaan legal dan fungsi antara Shoumi Kigen dan Shouhi Kigen.',
        options: [
          '「賞味期限」は傷みやすい食品に表示され、期限を過ぎたら絶対に食べてはならない。',
          '「消費期限」は品質劣化が早い食品（弁当やサンドイッチなど）に表示され、安全に食べられる期限であり、期限を過ぎたものは食べてはならない。',
          '「賞味期限」と「消費期限」は呼び方が違うだけで法的な意味は全く同じである。',
          '「消費期限」が過ぎた製品であっても、工場で再加熱殺菌すれば出荷してよい。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. 消費期限 (Shouhi Kigen / Expiration Date) tertera pada produk makanan cepat membusuk (bento konbini, sandwich, sushi segar) dan merupakan batas keselamatan konsumsi. Lewat tanggal ini dilarang dikonsumsi atau dijual. Sebaliknya, 賞味期限 (Shoumi Kigen / Best-before Date) adalah batas kelezatan kualitas prima saat kemasan belum dibuka.',
        translation: 'Pilihlah pernyataan yang paling tepat mengenai perbedaan antara Shoumi Kigen dan Shouhi Kigen.'
      },
      {
        id: 'mfg_sim_q6',
        questionNumber: 6,
        questionText: '稼働中のベルトコンベア上で製品が傾いて詰まりそうになったとき、作業者が取るべき行動として最も安全で正しいものを一つ選びなさい。',
        situation: 'Tindakan darurat saat produk miring atau macet di conveyor yang sedang berputar.',
        options: [
          'コンベアを止めずに、素早く手を伸ばして製品の傾きを直す。',
          '非常停止ボタン（または停止スイッチ）を押してコンベアを完全に止めてから製品を直す。',
          '足や近くの棒を使って動いているコンベアの隙間をこじ開ける。',
          '監督者に見つからないよう、そのまま製品が床に落ちるのを放置する。'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Di pabrik makanan, kecelakaan terjepit/tergulung (はさまれ・巻き込まれ) menyumbang 19,2% dari total insiden fatal. Prosedur mutlak: Sebelum menyentuh bagian mesin yang bergerak, WAJIB menghentikan mesin sepenuhnya dengan menekan tombol darurat/stop (非常停止ボタンを押して完全に止める).',
        translation: 'Pilihlah tindakan paling aman saat produk miring atau macet di atas belt conveyor yang sedang berjalan.'
      },
      {
        id: 'mfg_sim_q7',
        questionNumber: 7,
        questionText: '1件の重大な事故の背景には、29件の軽微な事故があり、さらにその背景には300件のヒヤリ・ハット（怪我には至らなかった危険な出来事）が存在するという労働安全の経験則を何というか。',
        situation: 'Hukum probabilitas keselamatan kerja rasio 1 : 29 : 300.',
        options: [
          'パレートの法則（Pareto principle）',
          'ハインリッヒの法則（Heinrich’s law）',
          'マーフィーの法則（Murphy’s law）',
          'ムーアの法則（Moore’s law）'
        ],
        correctAnswerIndex: 1,
        explanation: 'Pilihan 2 benar. Teori Heinrich (ハインリッヒの法則) menyatakan rasio 1 : 29 : 300. Untuk mencegah 1 kecelakaan fatal/berat, pabrik harus melaporkan dan mengeliminasi 300 potensi bahaya kecil (ヒヤリ・ハット / Hiyari-Hatto) melalui aktivitas KYT (Kiken Yochi Kunren).',
        translation: 'Apakah nama hukum keselamatan kerja yang menyatakan perbandingan 1 insiden berat : 29 insiden ringan : 300 insiden nyaris celaka?'
      },
      {
        id: 'mfg_sim_q8',
        questionNumber: 8,
        questionText: '食品工場における「5S活動」の「清潔（せいけつ）」の定義として、最も適切なものを一つ選びなさい。',
        situation: 'Definisi Seiketsu dalam 5S pabrik makanan.',
        options: [
          '必要なものと不要なものを分け、不要なものを捨てること。',
          '必要なものを誰でもすぐに取り出せるように置き場を決めること。',
          'ゴミやホコリを取り除き、機械や床をきれいにすること。',
          '整理・整頓・清掃の「3S」を徹底して維持し、衛生的なきれいな状態を保ち続けること。'
        ],
        correctAnswerIndex: 3,
        explanation: 'Pilihan 4 benar. 清潔 (Seiketsu) berarti memelihara dan menjaga konsistensi kondisi bersih higienis hasil dari 3S pertama (Seiri, Seiton, Seisou). Pilihan 1 adalah Seiri (整理), Pilihan 2 adalah Seiton (整頓), dan Pilihan 3 adalah Seisou (清掃).',
        translation: 'Pilihlah definisi yang paling tepat mengenai Seiketsu dalam gerakan 5S di pabrik makanan.'
      }
    ]
  }
};

