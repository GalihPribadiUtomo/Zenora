import type { KanjiItem, KanjiSentenceExample } from '../types';

// Curated 4 sentence examples for common JLPT kanji
export const CURATED_KANJI_SENTENCES: Record<string, KanjiSentenceExample[]> = {
  "一": [
    {
      "sentence": "机の上にリンゴが一つあります。",
      "furigana": "つくえのうえにりんごがひとつあります。",
      "romaji": "Tsukue no ue ni ringo ga hitotsu arimasu.",
      "english": "There is one apple on the desk.",
      "indonesian": "Ada satu buah apel di atas meja.",
      "grammarNote": "Pola hitungan benda umum [Hitotsu (ひとつ)] dipadukan dengan keberadaan benda mati [〜があります]."
    },
    {
      "sentence": "一日中、家で日本語を勉強しました。",
      "furigana": "いちにちじゅう、いえでにほんごをべんきょうしました。",
      "romaji": "Ichinichijuu, ie de nihongo o benkyou shimashita.",
      "english": "I studied Japanese at home all day long.",
      "indonesian": "Sepanjang hari saya belajar bahasa Jepang di rumah.",
      "grammarNote": "Akhiran [〜中 (-juu)] menyatakan \"sepanjang/seluruh durasi\", partikel [で] menandai lokasi aktivitas."
    },
    {
      "sentence": "一番好きな日本料理はお寿司です。",
      "furigana": "いちばんすきなにほんりょうりはおすしです。",
      "romaji": "Ichiban suki na nihon ryouri wa osushi desu.",
      "english": "My favorite Japanese dish is sushi.",
      "indonesian": "Makanan Jepang yang paling saya sukai adalah sushi.",
      "grammarNote": "Kata keterangan tingkat superlatif [一番 (ichiban)] yang berarti \"paling / nomor satu\"."
    },
    {
      "sentence": "もう一度ゆっくり言ってください。",
      "furigana": "もういちどゆっくりいってください。",
      "romaji": "Mou ichido yukkuri itte kudasai.",
      "english": "Please say it once again slowly.",
      "indonesian": "Tolong ucapkan sekali lagi secara perlahan.",
      "grammarNote": "Pola permintaan sopan [〜てください] dipadukan dengan frasa frekuensi [もう一度 (sekali lagi)]."
    }
  ],
  "二": [
    {
      "sentence": "コーヒーを二杯お願いします。",
      "furigana": "こーひーをにはいおねがいします。",
      "romaji": "Koohii o nihai onegaishimasu.",
      "english": "Two cups of coffee, please.",
      "indonesian": "Tolong berikan dua cangkir kopi.",
      "grammarNote": "Kata bantu bilangan [〜杯 (-hai)] untuk minuman dalam cangkir + permohonan sopan [〜をお願いします]."
    },
    {
      "sentence": "二人は明日、東京へ行きます。",
      "furigana": "ふたりはあした、とうきょうへいきます。",
      "romaji": "Futari wa ashita, Toukyou e ikimasu.",
      "english": "The two of them are going to Tokyo tomorrow.",
      "indonesian": "Mereka berdua besok akan pergi ke Tokyo.",
      "grammarNote": "Hitungan khusus orang [二人 (futari)] berarti \"berdua/dua orang\" + partikel tujuan arah [へ (e)]."
    },
    {
      "sentence": "二月は一年の中で一番寒い月です。",
      "furigana": "にがつはいちねんのなかでいちばんさむいつきです。",
      "romaji": "Nigatsu wa ichinen no naka de ichiban samui tsuki desu.",
      "english": "February is the coldest month of the year.",
      "indonesian": "Bulan Februari adalah bulan paling dingin dalam setahun.",
      "grammarNote": "Nama bulan [二月 (nigatsu)] + perbandingan superlatif [一年の中で一番〜]."
    },
    {
      "sentence": "この交差点を右に曲がって、二つ目の角です。",
      "furigana": "このこうさてんをみぎにまがって、ふたつめのかどです。",
      "romaji": "Kono kousaten o migi ni magatte, futatsume no kado desu.",
      "english": "Turn right at this intersection; it is at the second corner.",
      "indonesian": "Belok kanan di persimpangan ini, lokasinya ada di sudut kedua.",
      "grammarNote": "Penomoran urutan berurutan dengan sufiks [〜つ目 (-tsume)] yang berarti \"ke-2\"."
    }
  ],
  "三": [
    {
      "sentence": "今、午後三時十五分です。",
      "furigana": "いま、ごごさんじじゅうごふんです。",
      "romaji": "Ima, gogo san-ji juugo-fun desu.",
      "english": "It is currently 3:15 PM.",
      "indonesian": "Sekarang pukul tiga lewat lima belas menit sore.",
      "grammarNote": "Menyatakan waktu [〜時 (jam) + 〜分 (menit)], diawali penanda waktu [午前 / 午後]."
    },
    {
      "sentence": "三日前に友達から手紙が来ました。",
      "furigana": "みっかまえにともだちからてがみがきました。",
      "romaji": "Mikka mae ni tomodachi kara tegami ga kimashita.",
      "english": "A letter arrived from my friend three days ago.",
      "indonesian": "Tiga hari yang lalu datang surat dari teman.",
      "grammarNote": "Pola waktu lampau [〜前 (sebelum/lalu)], dan partikel [から (kara)] yang menyatakan asal sumber."
    },
    {
      "sentence": "毎日三食しっかり食べるようにしています。",
      "furigana": "まいにちさんしょくしっかりたべるようにしています。",
      "romaji": "Mainichi sanshoku shikkari taberu you ni shite imasu.",
      "english": "I make sure to eat three hearty meals every day.",
      "indonesian": "Saya membiasakan diri makan tiga kali sehari secara teratur.",
      "grammarNote": "Pola kebiasaan usaha [Kata Kerja Bentuk Kamus + ようにしています]."
    },
    {
      "sentence": "旅行は三泊四日の日程です。",
      "furigana": "りょこうはさんぱくよっかのにっていです。",
      "romaji": "Ryokou wa sanpaku yokka no nittei desu.",
      "english": "The trip schedule is for three nights and four days.",
      "indonesian": "Jadwal wisatanya adalah tiga malam empat hari.",
      "grammarNote": "Hitungan durasi menginap [〜泊 (-paku)] digabung hitungan hari [〜日 (-ka)]."
    }
  ],
  "四": [
    {
      "sentence": "私の家族は四人です。",
      "furigana": "わたしのかぞくはよにんです。",
      "romaji": "Watashi no kazoku wa yonin desu.",
      "english": "There are four people in my family.",
      "indonesian": "Keluarga saya berjumlah empat orang.",
      "grammarNote": "Hitungan orang [四人 (yonin)] dibaca \"yonin\", bukan \"shinin\"."
    },
    {
      "sentence": "四季の中で春が一番好きです。",
      "furigana": "しきのなかではるがいちばんすきです。",
      "romaji": "Shiki no naka de haru ga ichiban suki desu.",
      "english": "Among the four seasons, I like spring the best.",
      "indonesian": "Di antara empat musim, saya paling menyukai musim semi.",
      "grammarNote": "Nomina [四季 (shiki)] berarti empat musim + pola perbandingan superlatif."
    },
    {
      "sentence": "この部屋には窓が四つあります。",
      "furigana": "このへやにはまどがよっつあります。",
      "romaji": "Kono heya ni wa mado ga yottsu arimasu.",
      "english": "There are four windows in this room.",
      "indonesian": "Di kamar ini terdapat empat buah jendela.",
      "grammarNote": "Hitungan bilangan asli Jepang untuk 4 buah benda [四つ (yottsu)]."
    },
    {
      "sentence": "四月は新しい学期が始まる季節です。",
      "furigana": "しがつはあたらしいがっききがはじまるきせつです。",
      "romaji": "Shigatsu wa atarashii gakki ga hajimaru kisetsu desu.",
      "english": "April is the season when the new school term begins.",
      "indonesian": "Bulan April adalah musim dimulainya semester baru di Jepang.",
      "grammarNote": "Penyebutan bulan 4 [四月 (shigatsu)], dibaca \"shigatsu\"."
    }
  ],
  "五": [
    {
      "sentence": "五月に京都へ旅行する予定です。",
      "furigana": "ごがつにきょうとへりょこうするよていです。",
      "romaji": "Gogatsu ni Kyouto e ryokou suru yotei desu.",
      "english": "I plan to travel to Kyoto in May.",
      "indonesian": "Pada bulan Mei saya berencana berwisata ke Kyoto.",
      "grammarNote": "Nama bulan [五月 (gogatsu)] + pola rencana masa depan [Kata Kerja Kamus + 予定です]."
    },
    {
      "sentence": "あと五分待ってください。",
      "furigana": "あとごふんまってください。",
      "romaji": "Ato gofun matte kudasai.",
      "english": "Please wait for five more minutes.",
      "indonesian": "Tolong tunggu lima menit lagi.",
      "grammarNote": "Kata keterangan durasi sisa [あと〜] + hitungan menit [五分 (gofun)]."
    },
    {
      "sentence": "五つの約束を必ず守ります。",
      "furigana": "いつつのやくそくをかならずまもります。",
      "romaji": "Itsutsu no yakusoku o kanarazu mamorimasu.",
      "english": "I will definitely keep these five promises.",
      "indonesian": "Saya pasti akan menepati lima janji tersebut.",
      "grammarNote": "Bilangan umum asli Jepang [五つ (itsutsu)] + kata keterangan kepastian [必ず]."
    },
    {
      "sentence": "五十音図でひらがなを正しく覚えました。",
      "furigana": "ごじゅうおんずでひらがなをただしくおぼえました。",
      "romaji": "Gojuuonzu de hiragana o tadashiku oboemashita.",
      "english": "I correctly memorized hiragana using the fifty-sounds chart.",
      "indonesian": "Saya menghafal hiragana dengan benar melalui bagan 50 bunyi (Gojuon).",
      "grammarNote": "Istilah linguistik fonetik Jepang [五十音 (gojuuon)] tabel aksara kana."
    }
  ],
  "六": [
    {
      "sentence": "毎朝六時に起きて散歩します。",
      "furigana": "まいあさろくじにおきてさんぽします。",
      "romaji": "Maiasa roku-ji ni okite sanpo shimasu.",
      "english": "I wake up at six every morning and take a walk.",
      "indonesian": "Setiap pagi saya bangun pada jam enam lalu jalan-jalan.",
      "grammarNote": "Pola urutan aktivitas [Te-form + kata kerja] + titik waktu [六時に]."
    },
    {
      "sentence": "六月は日本で雨が多い季節です。",
      "furigana": "ろくがつはにほんであめがおおいきせつです。",
      "romaji": "Rokugatsu wa nihon de ame ga ooi kisetsu desu.",
      "english": "June is a rainy season in Japan.",
      "indonesian": "Bulan Juni adalah musim yang banyak hujan di Jepang.",
      "grammarNote": "Bulan 6 [六月 (rokugatsu)] yang bertepatan dengan musim hujan (tsuyu)."
    },
    {
      "sentence": "ケーキを六つに均等に切り分けました。",
      "furigana": "けーきをむっつにきんとうにきりわけました。",
      "romaji": "Keeki o muttsu ni kintou ni kiriwakemashita.",
      "english": "I cut the cake evenly into six pieces.",
      "indonesian": "Saya memotong kue menjadi enam bagian secara merata.",
      "grammarNote": "Bilangan asli untuk 6 buah [六つ (muttsu)] + kata keterangan [均等に]."
    },
    {
      "sentence": "六日間の研修が無事に終わりました。",
      "furigana": "むいかかんのけんしゅうがぶじにおわりました。",
      "romaji": "Muikakan no kenshuu ga buji ni owarimashita.",
      "english": "The six-day training program ended safely.",
      "indonesian": "Pelatihan selama enam hari telah selesai dengan lancar.",
      "grammarNote": "Hitungan durasi hari [六日間 (muikakan)] dibaca khusus \"muika\"."
    }
  ],
  "七": [
    {
      "sentence": "七階の会議室で打ち合わせがあります。",
      "furigana": "ななかいのかいぎしつでうちあわせがあります。",
      "romaji": "Nanakai no kaigishitsu de uchiawase ga arimasu.",
      "english": "There is a meeting in the conference room on the 7th floor.",
      "indonesian": "Ada rapat koordinasi di ruang pertemuan lantai tujuh.",
      "grammarNote": "Menghitung tingkat lantai gedung [〜階 (-kai)] + partikel lokasi kegiatan [で]."
    },
    {
      "sentence": "一週間には七日あります。",
      "furigana": "いっしゅうかんにはなのかあります。",
      "romaji": "Isshuukan ni wa nanoka arimasu.",
      "english": "There are seven days in a week.",
      "indonesian": "Dalam satu minggu terdapat tujuh hari.",
      "grammarNote": "Penyebutan tanggal/durasi 7 hari [七日 (nanoka)] dibaca \"nanoka\"."
    },
    {
      "sentence": "七夕の夜に短冊へ願い事を書きました。",
      "furigana": "たなばたのよるにたんざくへねがいごとをかきました。",
      "romaji": "Tanabata no yoru ni tanzaku e negaigoto o kakimashita.",
      "english": "On the night of Tanabata, I wrote wishes on paper strips.",
      "indonesian": "Pada malam festival Tanabata, saya menulis permohonan di secarik kertas tanzaku.",
      "grammarNote": "Bacaan khusus budaya tradisional festival bintang [七夕 (tanabata)]."
    },
    {
      "sentence": "朝七時半に電車に乗って通勤します。",
      "furigana": "あさしちじはんにでんしゃにのってつうきんします。",
      "romaji": "Asa shichiji-han ni densha ni notte tsuukin shimasu.",
      "english": "I get on the train at 7:30 in the morning to commute to work.",
      "indonesian": "Saya naik kereta pada jam 7:30 pagi untuk berangkat kerja.",
      "grammarNote": "Jam 7 [七時 (shichiji)] dibaca \"shichiji\", imbuhan separuh [〜半]."
    }
  ],
  "八": [
    {
      "sentence": "八百屋で新鮮な野菜を買いました。",
      "furigana": "やおやでしんせんなやさいをかいましました。",
      "romaji": "Yaoya de shinsen na yasai o kaimashita.",
      "english": "I bought fresh vegetables at the greengrocer.",
      "indonesian": "Saya membeli sayuran segar di toko sayur.",
      "grammarNote": "Kata majemuk tradisional [八百屋 (yaoya)] toko sayur + modifikasi adjektiva-na."
    },
    {
      "sentence": "八月は日本で夏休みの時期です。",
      "furigana": "はちがつはにほんでなつやすみのじきです。",
      "romaji": "Hachigatsu wa nihon de natsuyasumi no jiki desu.",
      "english": "August is summer vacation time in Japan.",
      "indonesian": "Bulan Agustus adalah periode liburan musim panas di Jepang.",
      "grammarNote": "Bulan 8 [八月 (hachigatsu)] + partikel lokasi negara [日本で]."
    },
    {
      "sentence": "引き出しの中にペンが八本入っています。",
      "furigana": "ひきだしのなかにぺんがはっぽんはいっています。",
      "romaji": "Hikidashi no naka ni pen ga happon haitte imasu.",
      "english": "There are eight pens inside the drawer.",
      "indonesian": "Terdapat delapan batang pena di dalam laci.",
      "grammarNote": "Hitungan benda silinder panjang [八本 (happon)] dengan asimilasi fonetik p."
    },
    {
      "sentence": "八日後にテストの結果が発表されます。",
      "furigana": "ようかごにてすとのけっかがはっぴょうされます。",
      "romaji": "Youka-go ni tesuto no kekka ga happyou saremasu.",
      "english": "The test results will be announced in eight days.",
      "indonesian": "Hasil ujian akan diumumkan delapan hari kemudian.",
      "grammarNote": "Penyebutan tanggal/durasi 8 hari [八日 (youka)] + pola waktu sesudah [〜後 (go)]."
    }
  ],
  "九": [
    {
      "sentence": "飛行機は今夜九時ちょうどに出発します。",
      "furigana": "ひこうきはこんやきゅうじちょうどにしゅっぱつします。",
      "romaji": "Hikouki wa konya kyuuji choudo ni shuppatsu shimasu.",
      "english": "The airplane will depart at exactly nine o clock tonight.",
      "indonesian": "Pesawat akan berangkat tepat pada pukul sembilan malam ini.",
      "grammarNote": "Penyebutan jam 9 [九時 (ku-ji)], kata keterangan ketepatan [ちょうど]."
    },
    {
      "sentence": "九月になると朝晩が少し涼しくなります。",
      "furigana": "くがつになるとあさばんがすこしすずしくなります。",
      "romaji": "Kugatsu ni naru to asaban ga sukoshi suzushiku narimasu.",
      "english": "When September arrives, mornings and evenings become slightly cooler.",
      "indonesian": "Bila tiba bulan September, pagi dan malam menjadi agak sejuk.",
      "grammarNote": "Bulan 9 [九月 (kugatsu)] dibaca \"kugatsu\" + pola kondisi pengandaian [〜になると]."
    },
    {
      "sentence": "皿の上にみかんが九つ並んでいます。",
      "furigana": "さらのうえにみかんがここのつならんでいます。",
      "romaji": "Sara no ue ni mikan ga kokonotsu narande imasu.",
      "english": "Nine tangerines are lined up on the plate.",
      "indonesian": "Sembilan buah jeruk mandarin berjajar di atas piring.",
      "grammarNote": "Bilangan umum untuk 9 buah [九つ (kokonotsu)] + kata kerja progresif [並んでいる]."
    },
    {
      "sentence": "九日は私の母の誕生日です。",
      "furigana": "ここのかはわたしのははのたんじょうびです。",
      "romaji": "Kokonoka wa watashi no haha no tanjoubi desu.",
      "english": "The 9th is my mother s birthday.",
      "indonesian": "Tanggal sembilan adalah hari ulang tahun ibu saya.",
      "grammarNote": "Penyebutan tanggal 9 [九日 (kokonoka)] dibaca \"kokonoka\"."
    }
  ],
  "十": [
    {
      "sentence": "あと十分で授業が始まります。",
      "furigana": "あとじゅっぷんでじゅぎょうがはじまります。",
      "romaji": "Ato juppun de jugyou ga hajimarimasu.",
      "english": "The class will begin in ten minutes.",
      "indonesian": "Tinggal sepuluh menit lagi pelajaran akan dimulai.",
      "grammarNote": "Keterangan sisa durasi [あと + Waktu] + hitungan menit [十分 (juppun)]."
    },
    {
      "sentence": "十月は紅葉がとてもきれいな季節です。",
      "furigana": "じゅうがつはこうようがとてもきれいなきせつです。",
      "romaji": "Juugatsu wa kouyou ga totemo kirei na kisetsu desu.",
      "english": "October is a season with very beautiful autumn foliage.",
      "indonesian": "Bulan Oktober adalah musim daun musim gugur yang sangat indah.",
      "grammarNote": "Bulan 10 [十月 (juugatsu)] + kata sifat-na pemodifikasi [きれいな]."
    },
    {
      "sentence": "箱の中にりんごが十個入っています。",
      "furigana": "はこのなかにりんごがじゅっこはいっています。",
      "romaji": "Hako no naka ni ringo ga jukko haitte imasu.",
      "english": "There are ten apples inside the box.",
      "indonesian": "Ada sepuluh buah apel di dalam kotak.",
      "grammarNote": "Hitungan benda satuan bulat/kecil [十個 (jukko)] + kondisi tersimpan [入っている]."
    },
    {
      "sentence": "十日間の滞在を十分に満喫しました。",
      "furigana": "とおかかんのたいざいをじゅうぶんにまんきつしました。",
      "romaji": "Tookakan no taizai o juubun ni mankitsu shimashita.",
      "english": "I fully enjoyed my ten-day stay.",
      "indonesian": "Saya benar-benar menikmati masa tinggal selama sepuluh hari.",
      "grammarNote": "Durasi 10 hari [十日間 (tookakan)] dibaca \"tooka\" + kata keterangan [十分に]."
    }
  ],
  "百": [
    {
      "sentence": "このノートは百円でした。",
      "furigana": "こののーとはひゃくえんでした。",
      "romaji": "Kono nooto wa hyaku-en deshita.",
      "english": "This notebook cost one hundred yen.",
      "indonesian": "Buku catatan ini harganya seratus yen.",
      "grammarNote": "Menyatakan harga dan mata uang Jepang [〜円 (en)] dengan kopula lampau [でした]."
    },
    {
      "sentence": "テストで百点を取って褒められました。",
      "furigana": "てすとでひゃくてんをとってほめられました。",
      "romaji": "Tesuto de hyakuten o totte homeraremashita.",
      "english": "I got 100 points on the test and was praised.",
      "indonesian": "Saya mendapatkan nilai seratus pada ujian dan dipuji.",
      "grammarNote": "Nilai sempurna [百点 (hyakuten)] + bentuk pasif kata kerja [褒められました]."
    },
    {
      "sentence": "この会社には三百人の社員が働いています。",
      "furigana": "このかいしゃにはさんびゃくにんのしゃいんがはたらいています。",
      "romaji": "Kono kaisha ni wa sanbyakunin no shain ga hataraite imasu.",
      "english": "Three hundred employees work at this company.",
      "indonesian": "Tiga ratus karyawan bekerja di perusahaan ini.",
      "grammarNote": "Angka 300 [三百 (sanbyaku)] dengan perubahan fonetik rendaku b."
    },
    {
      "sentence": "百貨店で母のプレゼントを選びました。",
      "furigana": "ひゃっかてんでははのぷれぜんとをえらびました。",
      "romaji": "Hyakkaten de haha no purezento o erabimashita.",
      "english": "I picked out a present for my mother at the department store.",
      "indonesian": "Saya memilih hadiah untuk ibu di toserba (department store).",
      "grammarNote": "Kata majemuk resmi [百貨店 (hyakkaten)] yang berarti toserba serba ada."
    }
  ],
  "千": [
    {
      "sentence": "会場には千人以上の人が集まりました。",
      "furigana": "かいじょうにはせんにんいじょうのひとがあつまりました。",
      "romaji": "Kaijou ni wa sennin ijou no hito ga atsumarimashita.",
      "english": "More than a thousand people gathered at the venue.",
      "indonesian": "Di aula telah berkumpul lebih dari seribu orang.",
      "grammarNote": "Pola batas minimal [〜以上 (-ijou)] yang berarti \"lebih dari/sekurang-kurangnya\"."
    },
    {
      "sentence": "三千円の辞書を買いました。",
      "furigana": "さんぜんえんのじしょをかいましました。",
      "romaji": "Sanzen-en no jisho o kaimashita.",
      "english": "I bought a dictionary for 3,000 yen.",
      "indonesian": "Saya membeli kamus seharga tiga ribu yen.",
      "grammarNote": "Angka 3000 [三千 (sanzen)] mengalami bunyi sengau z."
    },
    {
      "sentence": "千葉県には有名なテーマパークがあります。",
      "furigana": "ちばけんにはゆうめいなてーまぱーくがあります。",
      "romaji": "Chiba-ken ni wa yuumei na teema paaku ga arimasu.",
      "english": "There is a famous theme park in Chiba Prefecture.",
      "indonesian": "Di Prefektur Chiba terdapat taman hiburan ternama.",
      "grammarNote": "Nama tempat geografis prefektur [千葉 (Chiba)] + partikel eksistensi [があります]."
    },
    {
      "sentence": "千羽鶴を折って友達の回復を祈りました。",
      "furigana": "せんばづるをおってともだちのかいふくをいのりました。",
      "romaji": "Senbazuru o otte tomodachi no kaifuku o inorimashita.",
      "english": "I folded a thousand origami cranes and prayed for my friend s recovery.",
      "indonesian": "Saya melipat seribu burung bangau kertas dan mendoakan kesembuhan teman.",
      "grammarNote": "Tradisi budaya melipat seribu burung kertas [千羽鶴 (senbazuru)]."
    }
  ],
  "万": [
    {
      "sentence": "新しいパソコンを一万円で買いました。",
      "furigana": "あたらしいぱそこんをいちまんえんでかいましました。",
      "romaji": "Atarashii pasokon o ichiman-en de kaimashita.",
      "english": "I bought a new laptop for 10,000 yen.",
      "indonesian": "Saya membeli komputer jinjing baru seharga sepuluh ribu yen.",
      "grammarNote": "Satuan hitungan Jepang kelipatan 10.000 [万 (man)], partikel [で] nilai transaksi."
    },
    {
      "sentence": "万が一の事故に備えて保険に入ります。",
      "furigana": "まんがいちのじこにそなえてほけんにはいります。",
      "romaji": "Man ga ichi no jiko ni sonaete hoken ni hairimasu.",
      "english": "I will buy insurance in case of an unforeseen accident.",
      "indonesian": "Saya mendaftar asuransi untuk berjaga-jaga dari kemungkinan kecelakaan.",
      "grammarNote": "Idiom probabilitas darurat [万が一 (man ga ichi)] \"bila kemungkinan terburuk terjadi\"."
    },
    {
      "sentence": "世界には何万種類もの生物が存在しています。",
      "furigana": "せかいにはなんまんしゅるいものせいぶつがそんざいしています。",
      "romaji": "Sekai ni wa nanman shurui mono seibutsu ga sonzai shite imasu.",
      "english": "Tens of thousands of species of organisms exist in the world.",
      "indonesian": "Di dunia terdapat puluhan ribu jenis makhluk hidup.",
      "grammarNote": "Kuantitas besar penegas [何万〜もの (berpuluh-puluh ribu)]."
    },
    {
      "sentence": "このペンは書きやすい万年筆です。",
      "furigana": "このぺんはかきやすいまんねんひつです。",
      "romaji": "Kono pen wa kakiyasui mannenhitsu desu.",
      "english": "This pen is an easy-to-write fountain pen.",
      "indonesian": "Pena ini adalah pulpen tinta (fountain pen) yang sangat nyaman untuk menulis.",
      "grammarNote": "Kata majemuk [万年筆 (mannenhitsu)] pena + pola kemudahan [Kata Kerja stem + やすい]."
    }
  ],
  "日": [
    {
      "sentence": "日曜日に友達と一緒に映画を見ます。",
      "furigana": "にちようびにともだちといっしょにえいがをみます。",
      "romaji": "Nichiyoubi ni tomodachi to issho ni eiga o mimasu.",
      "english": "On Sunday, I will watch a movie together with my friend.",
      "indonesian": "Pada hari Minggu saya akan menonton film bersama teman.",
      "grammarNote": "Pola kebersamaan [〜と一緒に (bersama...)] + penanda hari [日曜日]."
    },
    {
      "sentence": "日本は技術と文化がとても豊かな国です。",
      "furigana": "にほんはぎじゅつとぶんかがとてもゆたかなくにです。",
      "romaji": "Nihon wa gijutsu to bunka ga totemo yutaka na kuni desu.",
      "english": "Japan is a country very rich in technology and culture.",
      "indonesian": "Jepang adalah negara yang sangat kaya akan teknologi dan kebudayaan.",
      "grammarNote": "Nama negara [日本 (Nihon)], modifikasi kata sifat-na [豊かな国]."
    },
    {
      "sentence": "毎日日本語の単語を十個覚えるようにしています。",
      "furigana": "まいにちにほんごのたんごをじゅっこおぼえるようにしています。",
      "romaji": "Mainichi nihongo no tango o jukko oboeru you ni shite imasu.",
      "english": "I make an effort to memorize ten Japanese words every day.",
      "indonesian": "Setiap hari saya berusaha menghafal sepuluh kosakata bahasa Jepang.",
      "grammarNote": "Kata keterangan frekuensi rutin [毎日 (mainichi)] + pola ikhtiar [ようにしています]."
    },
    {
      "sentence": "今日は天気が良くて暖かい日ですね。",
      "furigana": "きょうはてんきがよくてあたたかいひですね。",
      "romaji": "Kyou wa tenki ga yokute atatakai hi desu ne.",
      "english": "Today has nice weather and is a warm day, isn t it?",
      "indonesian": "Hari ini cuacanya cerah dan merupakan hari yang hangat ya.",
      "grammarNote": "Penyebutan \"hari ini\" [今日 (kyou)] dan nomina hari cuaca [暖かい日 (atatakai hi)]."
    }
  ],
  "月": [
    {
      "sentence": "今夜は月がとても明るく輝いています。",
      "furigana": "こんやはつきがとてもあかるくかがやいています。",
      "romaji": "Konya wa tsuki ga totemo akaruku kagayaite imasu.",
      "english": "The moon is shining very brightly tonight.",
      "indonesian": "Malam ini bulan bersinar dengan sangat terang.",
      "grammarNote": "Kata benda alam [月 (tsuki)] berarti rembulan + keterangan adverbial [明るく]."
    },
    {
      "sentence": "毎週月曜日の朝に社内朝礼があります。",
      "furigana": "まいしゅうげつようびのあさにしゃないちょうれいがあります。",
      "romaji": "Maishuu getsuyoubi no asa ni shanai chourei ga arimasu.",
      "english": "There is an in-company morning assembly every Monday morning.",
      "indonesian": "Setiap Senin pagi diadakan apel pagi di kantor.",
      "grammarNote": "Hari Senin [月曜日 (getsuyoubi)] memakai bacaan onyomi \"getsu\"."
    },
    {
      "sentence": "来月から新しいプロジェクトが始まります。",
      "furigana": "らいげつからあたらしいぷろじぇくとがはじまります。",
      "romaji": "Raigetsu kara atarashii purojekuto ga hajimarimasu.",
      "english": "A new project will start from next month.",
      "indonesian": "Proyek baru akan dimulai mulai bulan depan.",
      "grammarNote": "Bulan depan [来月 (raigetsu)] + partikel titik awal permulaan [から]."
    },
    {
      "sentence": "三ヶ月間日本語学校で熱心に勉強しました。",
      "furigana": "さんかげつかんにほんごがっこうでねっしんにべんきょうしました。",
      "romaji": "Sankagetsukan nihongo gakkou de nesshin ni benkyou shimashita.",
      "english": "I studied enthusiastically at a Japanese language school for three months.",
      "indonesian": "Selama tiga bulan saya belajar dengan tekun di sekolah bahasa Jepang.",
      "grammarNote": "Hitungan durasi waktu bulan [〜ヶ月間 (-kagetsukan)] dengan bacaan \"getsu\"."
    }
  ],
  "火": [
    {
      "sentence": "火曜日に英語の小テストがあります。",
      "furigana": "かようびにえいごのしょうてすとがあります。",
      "romaji": "Kayoubi ni eigo no shoutesuto ga arimasu.",
      "english": "There is an English quiz on Tuesday.",
      "indonesian": "Pada hari Selasa ada kuis kecil bahasa Inggris.",
      "grammarNote": "Nama hari Selasa [火曜日 (kayoubi)], partikel penanda waktu pasti [に]."
    },
    {
      "sentence": "キャンプ場で火を起こして料理を作りました。",
      "furigana": "きゃんぷじょうでひをおこしてりょうりをつくりました。",
      "romaji": "Kyanpujou de hi o okoshite ryouri o tsukurimashita.",
      "english": "We made a fire at the campsite and cooked food.",
      "indonesian": "Kami menyalakan api di tempat perkemahan lalu memasak makanan.",
      "grammarNote": "Kosakata api [火 (hi)] + kolokasi menyalakan api [火を起こす (hi o okosu)]."
    },
    {
      "sentence": "火事を発見したら、すぐに大声で知らせてください。",
      "furigana": "かじをはっけんしたら、すぐにおおおごえでしらせてください。",
      "romaji": "Kaji o hakken shitara, sugu ni oogoe de shirasete kudasai.",
      "english": "If you discover a fire, notify immediately in a loud voice.",
      "indonesian": "Jika mendapati kebakaran, segera beritahukan dengan suara lantang.",
      "grammarNote": "Bencana kebakaran [火事 (kaji)] + pola pengandaian tara [〜したら]."
    },
    {
      "sentence": "日本には活火山がたくさん存在します。",
      "furigana": "にほんにはかつかざんがたくさんそんざいします。",
      "romaji": "Nihon ni wa katsukazan ga takusan sonzai shimasu.",
      "english": "Many active volcanoes exist in Japan.",
      "indonesian": "Di Jepang terdapat banyak gunung berapi yang masih aktif.",
      "grammarNote": "Kata majemuk gunung berapi [火山 (kazan)] gabungan kanji api dan gunung."
    }
  ],
  "水": [
    {
      "sentence": "運動した後に冷たい水を飲みました。",
      "furigana": "うんどうしたあとにつめたいみずをのみました。",
      "romaji": "Undou shita ato ni tsumetai mizu o nomimashita.",
      "english": "I drank cold water after exercising.",
      "indonesian": "Saya meminum air dingin setelah berolahraga.",
      "grammarNote": "Benda air [水 (mizu)] + pola urutan tindakan setelah [〜た後で / 後に]."
    },
    {
      "sentence": "水曜日の午後は図書館で調べものをします。",
      "furigana": "すいようびのごごはとしょかんでしらべものをします。",
      "romaji": "Suiyoubi no gogo wa toshokan de shirabemono o shimasu.",
      "english": "On Wednesday afternoons, I do research at the library.",
      "indonesian": "Pada hari Rabu siang saya melakukan riset di perpustakaan.",
      "grammarNote": "Nama hari Rabu [水曜日 (suiyoubi)] dengan bacaan onyomi \"sui\"."
    },
    {
      "sentence": "健康のために毎日二リットルの水分を取ります。",
      "furigana": "けんこうのためにまいにちにりっとるのすいぶんをとります。",
      "romaji": "Kenkou no tame ni mainichi ni-rittoru no suibun o torimasu.",
      "english": "I take in two liters of fluids every day for my health.",
      "indonesian": "Demi kesehatan saya mengonsumsi dua liter cairan setiap hari.",
      "grammarNote": "Kadar cairan/air [水分 (suibun)] + pola tujuan demi [〜のために]."
    },
    {
      "sentence": "夏休みには家族で市民プールへ水泳に行きます。",
      "furigana": "なつやすみにはかぞくでしみんぷーるへすいえいにいきます。",
      "romaji": "Natsuyasumi ni wa kazoku de shimin puuru e suiei ni ikimasu.",
      "english": "During summer break, I go swimming with my family at the public pool.",
      "indonesian": "Pada liburan musim panas saya sekeluarga pergi berenang ke kolam renang umum.",
      "grammarNote": "Olahraga renang [水泳 (suiei)] + pola tujuan bepergian [Nomina + に行く]."
    }
  ],
  "木": [
    {
      "sentence": "庭に大きな桜の木を植えました。",
      "furigana": "にわにおおきなさくらのきをうえました。",
      "romaji": "Niwa ni ookina sakura no ki o uemashita.",
      "english": "I planted a large cherry blossom tree in the garden.",
      "indonesian": "Saya menanam pohon sakura yang besar di halaman rumah.",
      "grammarNote": "Pohon [木 (ki)] dimodifikasi oleh nomina tanaman [桜の木 (sakura no ki)]."
    },
    {
      "sentence": "木曜日はゴミの回収日になっています。",
      "furigana": "もくようびはごみのかいしゅうびになっています。",
      "romaji": "Mokuyoubi wa gomi no kaishuubi ni natte imasu.",
      "english": "Thursday is designated as garbage collection day.",
      "indonesian": "Hari Kamis telah ditetapkan sebagai hari pengambilan sampah.",
      "grammarNote": "Nama hari Kamis [木曜日 (mokuyoubi)] dengan bacaan onyomi \"moku\"."
    },
    {
      "sentence": "この机は良質な木材で作られています。",
      "furigana": "このつくえはりょうしつなもくざいでつくられています。",
      "romaji": "Kono tsukue wa ryoushitsu na mokuzai de tsukurarete imasu.",
      "english": "This desk is made of high-quality timber.",
      "indonesian": "Meja ini dibuat dari bahan kayu gelondongan bermutu tinggi.",
      "grammarNote": "Bahan material kayu [木材 (mokuzai)] + pola bahan baku [〜で作られている]."
    },
    {
      "sentence": "木造の伝統的な日本家屋は風情があります。",
      "furigana": "もくぞうのでんとうてきなにほんかおくはふぜいがあります。",
      "romaji": "Mokuzou no dentouteki na nihon kaoku wa fuzei ga arimasu.",
      "english": "Traditional Japanese houses built of wood have great charm.",
      "indonesian": "Rumah tradisional Jepang berkonstruksi kayu memiliki cita rasa seni yang khas.",
      "grammarNote": "Struktur buatan kayu [木造 (mokuzou)] dibaca \"mokuzou\"."
    }
  ],
  "金": [
    {
      "sentence": "金曜日の夜は友達と外食をします。",
      "furigana": "きんようびのよるはともだちとがいしょくをします。",
      "romaji": "Kinyoubi no yoru wa tomodachi to gaishoku o shimasu.",
      "english": "On Friday evening, I eat out with friends.",
      "indonesian": "Pada Jumat malam saya makan di luar bersama kawan.",
      "grammarNote": "Nama hari Jumat [金曜日 (kinyoubi)] dengan bacaan onyomi \"kin\"."
    },
    {
      "sentence": "財布を忘れたのでお金が足りません。",
      "furigana": "さいふをわすれたのでおかねがたりません。",
      "romaji": "Saifu o wasureta node okane ga tarimasen.",
      "english": "Because I forgot my wallet, I do not have enough money.",
      "indonesian": "Karena lupa membawa dompet, uang saya tidak cukup.",
      "grammarNote": "Uang [お金 (o-kane)] dengan awalan sopan [お-] + konjungsi sebab-akibat [ので]."
    },
    {
      "sentence": "大会で優勝して金メダルを獲得しました。",
      "furigana": "たいかいでゆうしょうしてきんめだるをかくとくしました。",
      "romaji": "Taikai de yuushou shite kin medaru o kakutoku shimashita.",
      "english": "He won first place in the tournament and earned a gold medal.",
      "indonesian": "Dia meraih juara di turnamen dan memenangkan medali emas.",
      "grammarNote": "Emas / medali emas [金メダル (kin medaru)] menggunakan kanji emas."
    },
    {
      "sentence": "料金は事前にお支払いください。",
      "furigana": "りょうきんはじぜんにおしはらいください。",
      "romaji": "Ryoukin wa jizen ni oshiharai kudasai.",
      "english": "Please pay the fee in advance.",
      "indonesian": "Harap lakukan pembayaran biaya di awal.",
      "grammarNote": "Biaya/ongkos [料金 (ryoukin)] + permohonan santun sonkeigo [お〜ください]."
    }
  ],
  "土": [
    {
      "sentence": "土曜日の午後は公園でゆっくり読書をします。",
      "furigana": "どようびのごごはこうえんでゆっくりどくしょをします。",
      "romaji": "Doyoubi no gogo wa kouen de yukkuri dokusho o shimasu.",
      "english": "On Saturday afternoons, I leisurely read books in the park.",
      "indonesian": "Pada Sabtu siang saya membaca buku dengan santai di taman.",
      "grammarNote": "Hari Sabtu [土曜日 (doyoubi)] dengan bacaan onyomi \"do\"."
    },
    {
      "sentence": "雨が降った後で土のいい香りが漂っています。",
      "furigana": "あめがふったあとでつちのいいかおりがただよっています。",
      "romaji": "Ame ga futta ato de tsuchi no ii kaori ga tadayotte imasu.",
      "english": "After it rained, the nice scent of soil was wafting.",
      "indonesian": "Setelah hujan turun, aroma tanah yang segar tercium semerbak.",
      "grammarNote": "Tanah alami [土 (tsuchi)] dengan bacaan kunyomi aslinya."
    },
    {
      "sentence": "旅行の記念に美味しいお土産を買いました。",
      "furigana": "りょこうのきねんにおいしいおみやげをかいましました。",
      "romaji": "Ryokou no kinen ni oishii omiyage o kaimashita.",
      "english": "I bought delicious souvenirs as a memento of the trip.",
      "indonesian": "Saya membeli oleh-oleh lezat sebagai kenang-kenangan perjalanan.",
      "grammarNote": "Oleh-oleh [お土産 (omiyage)] merupakan bacaan ateji tradisional kanji tanah dan hasil bumi."
    },
    {
      "sentence": "日本の国土の約七割は山林で覆われています。",
      "furigana": "にほんのこくどのやくななわりはさんりんでおおわれています。",
      "romaji": "Nihon no kokudo no yaku nanawari wa sanrin de oowarete imasu.",
      "english": "About 70 percent of Japan s national territory is covered by forest mountains.",
      "indonesian": "Sekitar 70 persen wilayah teritorial daratan Jepang tertutup hutan pegunungan.",
      "grammarNote": "Wilayah daratan negara [国土 (kokudo)] + persentase pecahan [〜割 (-wari)]."
    }
  ],
  "本": [
    {
      "sentence": "図書館で面白い本を三冊借りました。",
      "furigana": "としょかんでおもしろいほんをさんさつかりました。",
      "romaji": "Toshokan de omoshiroi hon o sansatsu karimashita.",
      "english": "I borrowed three interesting books at the library.",
      "indonesian": "Saya meminjam tiga buku yang menarik di perpustakaan.",
      "grammarNote": "Buku [本 (hon)] dihitung dengan kata bantu jilid [〜冊 (-satsu)]."
    },
    {
      "sentence": "この問題の本当の理由を教えてください。",
      "furigana": "このもんだいのほんとうのりゆうをおしえてください。",
      "romaji": "Kono mondai no hontou no riyuu o oshiete kudasai.",
      "english": "Please tell me the real reason for this issue.",
      "indonesian": "Tolong beritahukan kepada saya alasan yang sebenarnya dari masalah ini.",
      "grammarNote": "Kebenaran / hal sebenarnya [本当 (hontou)] + pola permintaan [〜を教えてください]."
    },
    {
      "sentence": "本社は東京の丸の内にあります。",
      "furigana": "ほんしゃはとうきょうのまるの内にあります。",
      "romaji": "Honsha wa Toukyou no Marunouchi ni arimasu.",
      "english": "The head office is located in Marunouchi, Tokyo.",
      "indonesian": "Kantor pusat berada di kawasan Marunouchi, Tokyo.",
      "grammarNote": "Kantor pusat perusahaan [本社 (honsha)] menggunakan kanji 本 sebagai \"pokok/pusat\"."
    },
    {
      "sentence": "ペンを二本無くしてしまいました。",
      "furigana": "ぺんをにほんなくしてしまいました。",
      "romaji": "Pen o nihon nakushite shimaimashita.",
      "english": "I accidentally lost two pens.",
      "indonesian": "Saya tidak sengaja kehilangan dua buah pena.",
      "grammarNote": "Satuan hitung benda silinder memanjang [〜本 (-hon)] + penyesalan [〜てしまう]."
    }
  ],
  "人": [
    {
      "sentence": "あの親切な人は私の日本語の先生です。",
      "furigana": "あのしんせつなひとはわたしのにほんごのせんせいです。",
      "romaji": "Ano shinsetsu na hito wa watashi no nihongo no sensei desu.",
      "english": "That kind person is my Japanese teacher.",
      "indonesian": "Orang yang ramah itu adalah guru bahasa Jepang saya.",
      "grammarNote": "Orang [人 (hito)] dengan bacaan kunyomi dimodifikasi kata sifat-na [親切な]."
    },
    {
      "sentence": "私はインドネシア人です。",
      "furigana": "わたしはいんどねしあじんです。",
      "romaji": "Watashi wa Indoneshia-jin desu.",
      "english": "I am Indonesian.",
      "indonesian": "Saya adalah orang berkebangsaan Indonesia.",
      "grammarNote": "Akhiran kewarganegaraan [〜人 (-jin)] dibaca \"jin\" setelah nama negara."
    },
    {
      "sentence": "部屋の中に何人いますか。",
      "furigana": "へやのなかになんにんいますか。",
      "romaji": "Heya no naka ni nannin imasu ka.",
      "english": "How many people are there in the room?",
      "indonesian": "Ada berapa orang di dalam ruangan?",
      "grammarNote": "Kata tanya jumlah orang [何人 (nannin)] + keberadaan makhluk bernyawa [いますか]."
    },
    {
      "sentence": "人生で一番大切な思い出になりました。",
      "furigana": "じんせいでいちばんたいせつなおもいでになりました。",
      "romaji": "Jinsei de ichiban taisetsu na omoide ni narimashita.",
      "english": "It became the most cherished memory in my life.",
      "indonesian": "Ini menjadi kenangan yang paling berharga dalam hidup saya.",
      "grammarNote": "Kehidupan manusia [人生 (jinsei)] menggunakan bacaan onyomi \"jin\"."
    }
  ],
  "学": [
    {
      "sentence": "私は大学で経済学を専攻しています。",
      "furigana": "わたしはだいがくでけいざいがくをせんこうしています。",
      "romaji": "Watashi wa daigaku de keizaigaku o senkou shite imasu.",
      "english": "I am majoring in economics at university.",
      "indonesian": "Saya mengambil jurusan ilmu ekonomi di universitas.",
      "grammarNote": "Universitas [大学 (daigaku)] dan bidang keilmuan [〜学 (-gaku)]."
    },
    {
      "sentence": "留学生たちが日本語を熱心に学んでいます。",
      "furigana": "りゅうがくせいたちがにほんごをねっしんにまなんでいます。",
      "romaji": "Ryuugakusei-tachi ga nihongo o nesshin ni manande imasu.",
      "english": "The international students are enthusiastically learning Japanese.",
      "indonesian": "Para mahasiswa asing belajar bahasa Jepang dengan penuh semangat.",
      "grammarNote": "Kata kerja kunyomi menuntut ilmu [学ぶ (manabu)] bentuk sedang [学んでいます]."
    },
    {
      "sentence": "新しい知識を学ぶことはとても楽しいです。",
      "furigana": "あたらしいちしきをまなぶことはとてもたのしいです。",
      "romaji": "Atarashii chishiki o manabu koto wa totemo tanoshii desu.",
      "english": "Learning new knowledge is very enjoyable.",
      "indonesian": "Mempelajari wawasan baru adalah hal yang sangat menyenangkan.",
      "grammarNote": "Nominalisasi kata kerja [Kata Kerja Kamus + こと] sebagai subjek kalimat."
    },
    {
      "sentence": "新学期が始まって新しい教科書をもらいました。",
      "furigana": "しんがっきがはじまってあたらしいきょうかしょをもらいました。",
      "romaji": "Shingakki ga hajimatte atarashii kyoukasho o moraimashita.",
      "english": "The new semester started, and I received new textbooks.",
      "indonesian": "Semester baru telah dimulai dan saya menerima buku pelajaran baru.",
      "grammarNote": "Semester akademik [学期 (gakki)] mengalami asimilasi fonetik sokuon."
    }
  ],
  "校": [
    {
      "sentence": "毎朝八時に学校へ着きます。",
      "furigana": "まいあさはちじにがっこうへつきます。",
      "romaji": "Maiasa hachiji ni gakkou e tsukimasu.",
      "english": "I arrive at school at eight o clock every morning.",
      "indonesian": "Setiap pagi saya tiba di sekolah pada pukul delapan.",
      "grammarNote": "Sekolah [学校 (gakkou)] dengan perubahan fonetik gaku + kou menjadi \"gakkou\"."
    },
    {
      "sentence": "高校を卒業した後に留学するつもりです。",
      "furigana": "こうこうをそつぎょうしたあとにりゅうがくするつもりです。",
      "romaji": "Koukou o sotsugyou shita ato ni ryuugaku suru tsumori desu.",
      "english": "I intend to study abroad after graduating from high school.",
      "indonesian": "Setelah lulus SMA saya berencana untuk belajar di luar negeri.",
      "grammarNote": "Sekolah Menengah Atas [高校 (koukou)] + pola niat kuat [〜つもりです]."
    },
    {
      "sentence": "校長先生が朝礼で大切な話をされました。",
      "furigana": "こうちょうせんせいがちょうれいでたいせつなはなしをされました。",
      "romaji": "Kouchou-sensei ga chourei de taisetsu na hanashi o saremashita.",
      "english": "The principal gave an important speech at morning assembly.",
      "indonesian": "Bapak Kepala Sekolah menyampaikan pesan penting pada apel pagi.",
      "grammarNote": "Kepala sekolah [校長 (kouchou)] + bentuk kehormatan sonkeigo [されました]."
    },
    {
      "sentence": "緑豊かな校舎で勉強に励んでいます。",
      "furigana": "みどりゆたかなかこうしゃでべんきょうにはげんでいます。",
      "romaji": "Midori yutaka na kousha de benkyou ni hagende imasu.",
      "english": "I am working hard on my studies in a green campus building.",
      "indonesian": "Saya giat belajar di gedung sekolah yang dikelilingi kehijauan asri.",
      "grammarNote": "Gedung bangunan sekolah [校舎 (kousha)]."
    }
  ],
  "先": [
    {
      "sentence": "先生に質問して文法を教えてもらいました。",
      "furigana": "せんせいにしつもんしてぶんぽうをおしえてもらいました。",
      "romaji": "Sensei ni shitsumon shite bunpou o oshiete moraimashita.",
      "english": "I asked the teacher a question and had the grammar explained to me.",
      "indonesian": "Saya bertanya kepada guru lalu meminta diterangkan tata bahasanya.",
      "grammarNote": "Guru [先生 (sensei)] + pola menerima budi kebaikan [〜てもらいました]."
    },
    {
      "sentence": "お先に失礼します。",
      "furigana": "おさきにしつれいします。",
      "romaji": "Osaki ni shitsurei shimasu.",
      "english": "Excuse me for leaving before you.",
      "indonesian": "Permisi, saya mohon pamit pulang terlebih dahulu.",
      "grammarNote": "Ungkapan sopan etiket kantor Jepang saat pulang mendahului rekan kerja [お先に]."
    },
    {
      "sentence": "先週の日曜日に家族と京都へ行きました。",
      "furigana": "せんしゅうのにちようびにかぞくときょうとへいきました。",
      "romaji": "Senshuu no nichiyoubi ni kazoku to Kyouto e ikimashita.",
      "english": "Last Sunday, I went to Kyoto with my family.",
      "indonesian": "Minggu lalu saya pergi ke Kyoto bersama keluarga.",
      "grammarNote": "Pekan lalu [先週 (senshuu)] menandai waktu lampau."
    },
    {
      "sentence": "その道の先を右に曲がってください。",
      "furigana": "そのみちのさきをみぎにまがってください。",
      "romaji": "Sono michi no saki o migi ni magatte kudasai.",
      "english": "Please turn right further down that street.",
      "indonesian": "Silakan belok kanan di ujung jalan sebelah sana.",
      "grammarNote": "Titik depan / ujung spasial [先 (saki)] dengan bacaan kunyomi."
    }
  ],
  "生": [
    {
      "sentence": "大学で一生懸命に勉強する学生です。",
      "furigana": "だいがくでいっしょうけんめいにべんきょうするがくせいです。",
      "romaji": "Daigaku de isshoukenmei ni benkyou suru gakusei desu.",
      "english": "He is a student who studies hard at the university.",
      "indonesian": "Dia adalah seorang mahasiswa yang belajar dengan sungguh-sungguh di kampus.",
      "grammarNote": "Murid/pelajar [学生 (gakusei)] dengan bacaan onyomi \"sei\"."
    },
    {
      "sentence": "日本で生活を始めてから半年が経ちました。",
      "furigana": "にほんでせいかつをはじめてからはんとしがたちました。",
      "romaji": "Nihon de seikatsu o hajimete kara hantoshi ga tachimashita.",
      "english": "Half a year has passed since I started living in Japan.",
      "indonesian": "Setengah tahun telah berlalu sejak saya mulai hidup di Jepang.",
      "grammarNote": "Kehidupan keseharian [生活 (seikatsu)] + pola sejak waktu [〜てから]."
    },
    {
      "sentence": "私は二千年に東京で生まれました。",
      "furigana": "わたしはにせんねんにとうきょうでうまれました。",
      "romaji": "Watashi wa nisennen ni Toukyou de umaremashita.",
      "english": "I was born in Tokyo in the year 2000.",
      "indonesian": "Saya dilahirkan di Tokyo pada tahun 2000.",
      "grammarNote": "Kata kerja lahir [生まれる (umareru)] dengan bacaan kunyomi \"u\"."
    },
    {
      "sentence": "日本では新鮮な生の魚を食べる習慣があります。",
      "furigana": "にほんではしんせんななまのさかなをたべるしゅうかんがあります。",
      "romaji": "Nihon de wa shinsen na nama no sakana o taberu shuukan ga arimasu.",
      "english": "In Japan, there is a custom of eating fresh raw fish.",
      "indonesian": "Di Jepang ada tradisi memakan ikan segar mentah.",
      "grammarNote": "Keadaan mentah/asli [生 (nama)] dibaca kunyomi \"nama\"."
    }
  ],
  "友": [
    {
      "sentence": "親しい友人と一緒にカフェでお茶を飲みました。",
      "furigana": "したしいゆうじんといっしょにかふでおちゃをのみました。",
      "romaji": "Shitashii yuujin to issho ni kafe de ocha o nomimashita.",
      "english": "I drank tea at a cafe with a close friend.",
      "indonesian": "Saya minum teh di kafe bersama seorang sahabat dekat.",
      "grammarNote": "Sahabat/rekan [友人 (yuujin)] menggunakan bacaan onyomi \"yuu\"."
    },
    {
      "sentence": "困ったときに助け合えるのが真の友達です。",
      "furigana": "こまったときにたすけあえるのがしんのともだちです。",
      "romaji": "Komatta toki ni tasukeaeru no ga shin no tomodachi desu.",
      "english": "Those who can help each other when in trouble are true friends.",
      "indonesian": "Teman sejati adalah orang yang dapat saling menolong saat menghadapi kesulitan.",
      "grammarNote": "Teman [友達 (tomodachi)] dengan bacaan kunyomi \"tomo\" + pola waktu [ときに]."
    },
    {
      "sentence": "両国の末永い友好関係を願っています。",
      "furigana": "りょうこくのすえながいゆうこうかんけいをねがっています。",
      "romaji": "Ryoukoku no suenagai yuukou kankei o negatte imasu.",
      "english": "We hope for everlasting friendly relations between both countries.",
      "indonesian": "Kami mendoakan hubungan persahabatan abadi antara kedua negara.",
      "grammarNote": "Hubungan persahabatan bilateral [友好 (yuukou)] kanji sahabat + baik."
    },
    {
      "sentence": "留学先で世界中の人たちと友達になりました。",
      "furigana": "りゅうがくさきでせかいじゅうのひとたちとともだちになりました。",
      "romaji": "Ryuugakusaki de sekaijuu no hitotachi to tomodachi ni narimashita.",
      "english": "I became friends with people from all around the world while studying abroad.",
      "indonesian": "Saya berteman akrab dengan orang-orang dari seluruh dunia di tempat studi luar negeri.",
      "grammarNote": "Pola menjadi teman [友達になる (tomodachi ni naru)]."
    }
  ],
  "達": [
    {
      "sentence": "明日は友達と動物園へ行く約束をしています。",
      "furigana": "あしたはともだちとどうぶつえんへいくやくそくをしています。",
      "romaji": "Ashita wa tomodachi to doubutsuen e iku yakusoku o shite imasu.",
      "english": "I have an appointment to go to the zoo with friends tomorrow.",
      "indonesian": "Besok saya ada janji pergi ke kebun binatang bersama teman-teman.",
      "grammarNote": "Sufiks penjamak personil [〜達 (-tachi)] pada [友達 (tomodachi)]."
    },
    {
      "sentence": "長年の努力のおかげで目標を達成しました。",
      "furigana": "ながねんのどりょくのおかげでもくひょうをたっせいしました。",
      "romaji": "Naganen no doryoku no okage de mokuhyou o tassei shimashita.",
      "english": "Thanks to years of effort, I achieved my goal.",
      "indonesian": "Berkat kerja keras bertahun-tahun, saya berhasil mencapai target cita-cita.",
      "grammarNote": "Tercapainya sasaran [達成 (tassei)] + partikel rasa syukur positif [〜のおかげで]."
    },
    {
      "sentence": "私達は来年日本へ旅行する計画を立てています。",
      "furigana": "わたしたちはらいねんにほんへりょこうするけいかくをたてています。",
      "romaji": "Watashitachi wa rainen nihon e ryokou suru keikaku o tatete imasu.",
      "english": "We are making plans to travel to Japan next year.",
      "indonesian": "Kami berencana melakukan perjalanan wisata ke Jepang tahun depan.",
      "grammarNote": "Kata ganti jamak kita/kami [私達 (watashitachi)]."
    },
    {
      "sentence": "この荷物は明日の夕方に配達される予定です。",
      "furigana": "このにもつはあしたのゆうがたにはいたつされるよていです。",
      "romaji": "Kono nimotsu wa ashita no yuugata ni haitatsu sareru yotei desu.",
      "english": "This package is scheduled to be delivered tomorrow evening.",
      "indonesian": "Paket barang ini dijadwalkan akan diantar besok petang.",
      "grammarNote": "Pengantaran surat/paket [配達 (haitatsu)] menggunakan kanji 達."
    }
  ],
  "食": [
    {
      "sentence": "毎朝パンと目玉焼きを食べます。",
      "furigana": "まいあさぱんとめだまやきをたべます。",
      "romaji": "Maiasa pan to medamayaki o tabemasu.",
      "english": "I eat bread and fried eggs every morning.",
      "indonesian": "Setiap pagi saya makan roti dan telur mata sapi.",
      "grammarNote": "Kata kerja makan transitif [食べる (taberu)] dengan objek langsung partikel [を]."
    },
    {
      "sentence": "日本料理は健康的な食事として人気があります。",
      "furigana": "にほんりょうりはけんこうてきなしょくじとしてにんきがあります。",
      "romaji": "Nihon ryouri wa kenkouteki na shokuji to shite ninki ga arimasu.",
      "english": "Japanese cuisine is popular as a healthy diet.",
      "indonesian": "Kuliner Jepang sangat populer sebagai menu makanan yang menyehatkan.",
      "grammarNote": "Santapan/makanan [食事 (shokuji)] dengan bacaan onyomi \"shoku\"."
    },
    {
      "sentence": "昼休みになったので学生食堂へ行きましょう。",
      "furigana": "ひるやすみになったのでがくせいしょくどうへいきましょう。",
      "romaji": "Hiruyasumi ni natta node gakusei shokudou e ikimashou.",
      "english": "It has become lunch break, so let s go to the student cafeteria.",
      "indonesian": "Karena sudah jam istirahat siang, mari kita pergi ke kantin kampus.",
      "grammarNote": "Kantin/ruang makan [食堂 (shokudou)] + ajakan santun [〜ましょう]."
    },
    {
      "sentence": "スーパーで新鮮な食べ物を買って帰りました。",
      "furigana": "すーぱーでしんせんなたべものをかってかえりました。",
      "romaji": "Suupaa de shinsen na tabemono o katte kaerimashita.",
      "english": "I bought fresh food at the supermarket and went home.",
      "indonesian": "Saya membeli bahan makanan segar di supermarket lalu pulang ke rumah.",
      "grammarNote": "Makanan [食べ物 (tabemono)] gabungan verba makan dan nomina benda."
    }
  ],
  "飲": [
    {
      "sentence": "朝起きてからコップ一杯の水を飲みました。",
      "furigana": "あさおきてからこっぷいっぱいのみずをのみました。",
      "romaji": "Asa okite kara koppu ippai no mizu o nomimashita.",
      "english": "After waking up in the morning, I drank a glass of water.",
      "indonesian": "Setelah bangun di pagi hari, saya meminum segelas air putih.",
      "grammarNote": "Kata kerja minum [飲む (nomu)] dengan bacaan kunyomi lampau [飲みました]."
    },
    {
      "sentence": "自動販売機で冷たい飲み物を買いました。",
      "furigana": "じどうはんばいきでつめたいのみものをかいましました。",
      "romaji": "Jidouhanbaiki de tsumetai nomimono o kaimashita.",
      "english": "I bought a cold drink at the vending machine.",
      "indonesian": "Saya membeli minuman dingin di mesin penjual otomatis.",
      "grammarNote": "Minuman [飲み物 (nomimono)] sebagai objek transaksi."
    },
    {
      "sentence": "食後に処方された薬を忘れずに飲んでください。",
      "furigana": "しょくごにしほうされたくすりをわすれずにのんでください。",
      "romaji": "Shokugo ni shohou sareta kusuri o wasurezu ni nonde kudasai.",
      "english": "Please do not forget to take your prescribed medicine after meals.",
      "indonesian": "Harap jangan lupa meminum obat resep dokter sesudah makan.",
      "grammarNote": "Kolokasi meminum obat [薬を飲む (kusuri o nomu)] + bentuk larangan lembut [〜ずに]."
    },
    {
      "sentence": "週末に同僚たちと居酒屋で楽しく飲食しました。",
      "furigana": "しゅうまつにどうりょうたちといざかやでたのしくいんしょくしました。",
      "romaji": "Shuumatsu ni douryou-tachi to izakaya de tanoshiku inshoku shimashita.",
      "english": "On the weekend, I enjoyed food and drinks with colleagues at a pub.",
      "indonesian": "Pada akhir pekan saya menikmati santapan dan minuman bersama rekan kerja di kedai.",
      "grammarNote": "Makan dan minum [飲食 (inshoku)] memakai bacaan onyomi \"in\"."
    }
  ],
  "見": [
    {
      "sentence": "週末に映画館で話題のアニメを見ました。",
      "furigana": "しゅうまつにえいがかんでわだいのあにめをみました。",
      "romaji": "Shuumatsu ni eigakan de wadai no anime o mimashita.",
      "english": "I watched a popular anime at the movie theater on the weekend.",
      "indonesian": "Pada akhir pekan saya menonton anime yang sedang tren di bioskop.",
      "grammarNote": "Kata kerja melihat/menonton [見る (miru)] dengan bacaan kunyomi lampau."
    },
    {
      "sentence": "辞書を見ないで漢字テストに挑戦しました。",
      "furigana": "じしょをみないでかんじてすとにちょうせんしました。",
      "romaji": "Jisho o minaide kanji tesuto ni chousen shimashita.",
      "english": "I took on the kanji test without looking at a dictionary.",
      "indonesian": "Saya menantang diri mengerjakan ujian kanji tanpa melihat kamus.",
      "grammarNote": "Pola melakukan sesuatu tanpa [〜ないで (tanpa melakukan...)]."
    },
    {
      "sentence": "富士山がきれいに見える部屋に泊まりました。",
      "furigana": "ふじさんがきれいにみえるへやにとまりました。",
      "romaji": "Fujisan ga kirei ni mieru heya ni tomarimashita.",
      "english": "I stayed in a room where Mount Fuji could be seen clearly.",
      "indonesian": "Saya menginap di kamar tempat Gunung Fuji terlihat dengan sangat indah.",
      "grammarNote": "Verba spontan terlihat alami [見える (mieru)] berbeda dengan sengaja melihat [見る]."
    },
    {
      "sentence": "工場を見学して日本のものづくりを学びました。",
      "furigana": "こうじょうをけんがくしてにほんのものづくりをまなびました。",
      "romaji": "Koujou o kengaku shite nihon no monodukuri o manabimashita.",
      "english": "We toured the factory and learned about Japanese craftsmanship.",
      "indonesian": "Kami melakukan studi observasi lapangan di pabrik dan belajar filosofi manufaktur Jepang.",
      "grammarNote": "Kunjungan studi lapangan [見学 (kengaku)] memakai bacaan onyomi \"ken\"."
    }
  ],
  "聞": [
    {
      "sentence": "毎朝通学中に日本語のニュースを聞いています。",
      "furigana": "まいあさつうがくちゅうににほんごのにゅーすをきいています。",
      "romaji": "Maiasa tsuugakuchuu ni nihongo no nyuusu o kiite imasu.",
      "english": "I listen to Japanese news every morning while commuting to school.",
      "indonesian": "Setiap pagi dalam perjalanan ke sekolah saya mendengarkan berita bahasa Jepang.",
      "grammarNote": "Mendengarkan [聞く (kiku)] bentuk progresif kebiasaan [聞いています]."
    },
    {
      "sentence": "分からない言葉があったら先生に聞いてください。",
      "furigana": "わからないことばがあったらせんせいにきいてください。",
      "romaji": "Wakaranai kotoba ga attara sensei ni kiite kudasai.",
      "english": "If there are words you don t understand, please ask the teacher.",
      "indonesian": "Jika ada kata yang tidak dimengerti, silakan tanyakan kepada guru.",
      "grammarNote": "Makna \"bertanya\" dari [聞く (kiku)] dengan partikel lawan bicara [先生に]."
    },
    {
      "sentence": "朝起きたら鳥の美しい鳴き声が聞こえました。",
      "furigana": "あさおきたらとりのうつくしいなきごえがきこえました。",
      "romaji": "Asa okitara tori no utsukushii nakigoe ga kikoemashita.",
      "english": "When I woke up in the morning, the beautiful chirping of birds could be heard.",
      "indonesian": "Saat bangun di pagi hari, kicauan burung yang merdu terdengar di telinga.",
      "grammarNote": "Kata kerja spontanitas pendengaran [聞こえる (kikoeru)] terdengar dengan sendirinya."
    },
    {
      "sentence": "毎朝配達される新聞を読んで時事を把握します。",
      "furigana": "まいあさはいたつされるしんぶんをよんでじじをはあくします。",
      "romaji": "Maiasa haitatsu sareru shinbun o yonde jiji o haaku shimasu.",
      "english": "I read the newspaper delivered every morning to keep up with current affairs.",
      "indonesian": "Saya membaca surat kabar yang diantar setiap pagi untuk memantau isu terkini.",
      "grammarNote": "Koran / surat kabar [新聞 (shinbun)] gabungan kanji baru dan mendengar."
    }
  ],
  "書": [
    {
      "sentence": "ひらがなとカタカナを毎日ノートに書きます。",
      "furigana": "ひらがなとかたかなをまいにちのーとにかきます。",
      "romaji": "Hiragana to katakana o mainichi nooto ni kakimasu.",
      "english": "I write hiragana and katakana in my notebook every day.",
      "indonesian": "Saya menulis hiragana dan katakana di buku catatan setiap hari.",
      "grammarNote": "Kata kerja menulis [書く (kaku)] dengan partikel lokasi media tulisan [に]."
    },
    {
      "sentence": "友達に感謝の気持ちを伝える手紙を書きました。",
      "furigana": "ともだちにかんしゃのきもちをつたえるてがみをかきました。",
      "romaji": "Tomodachi ni kansha no kimochi o tsutaeru tegami o kakimashita.",
      "english": "I wrote a letter to my friend expressing my gratitude.",
      "indonesian": "Saya menulis surat kepada sahabat untuk menyampaikan rasa terima kasih.",
      "grammarNote": "Surat [手紙 (tegami)] + objek kata kerja [書きました]."
    },
    {
      "sentence": "この書類に氏名と現住所を記入してください。",
      "furigana": "このしょるいにしめいとげんじゅうしょをきにゅうしてください。",
      "romaji": "Kono shorui ni shimei to genjuusho o kinyuu shite kudasai.",
      "english": "Please fill in your name and current address on this document.",
      "indonesian": "Silakan isi nama lengkap dan alamat tempat tinggal sekarang pada formulir dokumen ini.",
      "grammarNote": "Dokumen berkas [書類 (shorui)] memakai bacaan onyomi \"sho\"."
    },
    {
      "sentence": "駅前の大きな書店で専門書を探しました。",
      "furigana": "えきまえのおおきなしょてんでせんもんしょをさがしました。",
      "romaji": "Ekimae no ookina shoten de senmonsho o sagashimashita.",
      "english": "I looked for specialized books at a large bookstore in front of the station.",
      "indonesian": "Saya mencari buku referensi keahlian di toko buku besar depan stasiun.",
      "grammarNote": "Toko buku [書店 (shoten)] dan buku literatur [専門書 (senmonsho)]."
    }
  ],
  "読": [
    {
      "sentence": "寝る前にベッドの中で日本語の小説を読みます。",
      "furigana": "ねるまえにべっどのなかでにほんごのしょうせつをよみます。",
      "romaji": "Neru mae ni beddo no naka de nihongo no shousetsu o yomimasu.",
      "english": "Before going to sleep, I read a Japanese novel in bed.",
      "indonesian": "Sebelum tidur saya membaca novel berbahasa Jepang di tempat tidur.",
      "grammarNote": "Membaca [読む (yomu)] + pola sebelum beraktivitas [Kata Kerja Kamus + 前に]."
    },
    {
      "sentence": "この漢字の読み方をふりがなで教えてください。",
      "furigana": "このかんじのよみかたをふりがなでおしえてください。",
      "romaji": "Kono kanji no yomikata o furigana de oshiete kudasai.",
      "english": "Please tell me how to read this kanji with furigana.",
      "indonesian": "Tolong beritahukan cara membaca kanji ini dengan furigana.",
      "grammarNote": "Pola cara melakukan tindakan [Kata Kerja stem + 方 (-kata)] -> [読み方 (cara baca)]."
    },
    {
      "sentence": "読書は語彙力を増やすために非常に効果的です。",
      "furigana": "どくしょはごいりょくをふやすためにひじょうにこうかてきです。",
      "romaji": "Dokusho wa goiryoku o fuyasu tame ni hijou ni koukateki desu.",
      "english": "Reading is extremely effective for expanding one s vocabulary.",
      "indonesian": "Kegiatan membaca buku sangat berkhasiat untuk memperkaya perbendaharaan kosakata.",
      "grammarNote": "Membaca buku sebagai hobi/aktivitas [読書 (dokusho)] dengan bacaan onyomi \"doku\"."
    },
    {
      "sentence": "相手の表情から気持ちを読み取ることが大切です。",
      "furigana": "あいてのひょうじょうからきもちをよみとることがたいせつです。",
      "romaji": "Aite no hyoujou kara kimochi o yomitoru koto ga taisetsu desu.",
      "english": "It is important to read feelings from the other person s facial expression.",
      "indonesian": "Penting untuk memahami perasaan tersirat dari raut wajah lawan bicara.",
      "grammarNote": "Kata kerja majemuk menelaah/memahami makna [読み取る (yomitoru)]."
    }
  ],
  "話": [
    {
      "sentence": "日本語で先生と上手に話せるようになりたいです。",
      "furigana": "にほんごでせんせいとじょうずにはなせるようになりたいです。",
      "romaji": "Nihongo de sensei to jouzu ni hanaseru you ni naritai desu.",
      "english": "I want to become able to speak well with my teacher in Japanese.",
      "indonesian": "Saya ingin bisa berbicara dengan lancar bersama guru dalam bahasa Jepang.",
      "grammarNote": "Bentuk potensial mampu berbicara [話せる] + perubahan kemampuan [〜ようになる]."
    },
    {
      "sentence": "昨日聞いた面白い話を友達に共有しました。",
      "furigana": "きのうきいたおもしろいはなしをともだちにきょうゆうしました。",
      "romaji": "Kinou kiita omoshiroi hanashi o tomodachi ni kyouyuu shimashita.",
      "english": "I shared the interesting story I heard yesterday with my friends.",
      "indonesian": "Saya membagikan cerita menarik yang saya dengar kemarin kepada teman.",
      "grammarNote": "Nomina kisah/cerita/pembicaraan [話 (hanashi)]."
    },
    {
      "sentence": "急ぎの用事があるので電話をかけて話します。",
      "furigana": "いそぎのようじがあるのボディでんわをかけてはなします。",
      "romaji": "Isogi no youji ga aru node denwa o kakete hanashimasu.",
      "english": "Because I have urgent business, I will place a call and speak.",
      "indonesian": "Karena ada urusan mendesak, saya akan menelepon dan berbicara langsung.",
      "grammarNote": "Telepon [電話 (denwa)] menggunakan kanji 話 sebagai sarana bicara."
    },
    {
      "sentence": "日本語の日常会話を練習して流暢になりましょう。",
      "furigana": "にほんごのにちじょうかいわをれんしゅうしてりゅうちょうになりましょう。",
      "romaji": "Nihongo no nichijou kaiwa o renshuu shite ryuuchou ni narimashou.",
      "english": "Let s practice daily Japanese conversation and become fluent.",
      "indonesian": "Mari kita berlatih percakapan sehari-hari bahasa Jepang agar menjadi fasih.",
      "grammarNote": "Percakapan / dialog [会話 (kaiwa)] menggunakan bacaan onyomi \"wa\"."
    }
  ],
  "買": [
    {
      "sentence": "デパートで母への誕生日プレゼントを買いました。",
      "furigana": "でぱーとでははへのたんじょうびぷれぜんとをかいましました。",
      "romaji": "Depaato de haha e no tanjoubi purezento o kaimashita.",
      "english": "I bought a birthday present for my mother at the department store.",
      "indonesian": "Saya membeli kado ulang tahun untuk ibu di toserba.",
      "grammarNote": "Kata kerja membeli [買う (kau)] bentuk lampau [買いました]."
    },
    {
      "sentence": "休日に家族と一緒にスーパーへ買い物に行きます。",
      "furigana": "きゅうじつにかぞくといっしょにすーぱーへかいものにいきます。",
      "romaji": "Kyuujitsu ni kazoku to issho ni suupaa e kaimono ni ikimasu.",
      "english": "I go grocery shopping at the supermarket with my family on days off.",
      "indonesian": "Pada hari libur saya pergi berbelanja ke supermarket bersama keluarga.",
      "grammarNote": "Aktivitas berbelanja [買い物 (kaimono)] + pola tujuan [買い物に行く]."
    },
    {
      "sentence": "セール期間中に欲しかった靴をお得に買えました。",
      "furigana": "せーるきかんちゅうにほしかったくつをおとくにかえました。",
      "romaji": "Seeru kikanchuu ni hoshikatta kutsu o otoku ni kaemashita.",
      "english": "During the sale period, I was able to buy the shoes I wanted at a great price.",
      "indonesian": "Selama masa diskon, saya dapat membeli sepatu yang saya inginkan dengan harga hemat.",
      "grammarNote": "Bentuk potensial sanggup membeli [買える (kaeru)] bentuk lampau."
    },
    {
      "sentence": "自動券売機で切符を購入して改札を通りました。",
      "furigana": "じどうけんばいきできっぷをこうにゅうしてかいさつをとおkarimashita.",
      "romaji": "Jidou kenbaiki de kippu o kounyuu shite kaisatsu o toorimashita.",
      "english": "I purchased a ticket at the automated ticket vending machine and went through the ticket gate.",
      "indonesian": "Saya membeli tiket di mesin penjual tiket otomatis lalu melewati gerbang tiket.",
      "grammarNote": "Pembelian formal [購入 (kounyuu)] dan mesin tiket [券売機 (kenbaiki)]."
    }
  ],
  "行": [
    {
      "sentence": "来週の新幹線で大阪へ出張に行きます。",
      "furigana": "らいしゅうのしんかんせんでおおさかへしゅっちょうにいきます。",
      "romaji": "Raishuu no shinkansen de Oosaka e shucchou ni ikimasu.",
      "english": "I am going on a business trip to Osaka next week by bullet train.",
      "indonesian": "Minggu depan saya akan pergi dinas ke Osaka dengan Shinkansen.",
      "grammarNote": "Verba pergi [行く (iku)] + partikel sarana transportasi [で] dan arah [へ]."
    },
    {
      "sentence": "秋晴れの心地よい日に友達と旅行に行きました。",
      "furigana": "あきばれのここちよいひにともだちとりょこうにいきました。",
      "romaji": "Akibare no kokochiyoi hi ni tomodachi to ryokou ni ikimashita.",
      "english": "I went on a trip with friends on a pleasant clear autumn day.",
      "indonesian": "Saya berwisata bersama kawan pada hari musim gugur cerah yang nyaman.",
      "grammarNote": "Pelesiran/perjalanan [旅行 (ryokou)] memakai bacaan onyomi \"kou\"."
    },
    {
      "sentence": "明日は大切な学校の年中行事が行われます。",
      "furigana": "あしたはたいせつながっこうのねんちゅうぎょうじがおこなわれます。",
      "romaji": "Ashita wa taisetsu na gakkou no nenchuu gyouji ga okonawaremasu.",
      "english": "An important annual school event will be held tomorrow.",
      "indonesian": "Besok akan diselenggarakan agenda kegiatan tahunan sekolah yang penting.",
      "grammarNote": "Penyelenggaraan acara [行事 (gyouji)] dan bentuk pasif [行われる (okonawareru)]."
    },
    {
      "sentence": "東京駅行きのバスは三番乗り場から出発します。",
      "furigana": "とうきょうえきゆきのばすはさんばんのりばからしゅっぱつします。",
      "romaji": "Toukyou eki yuki no basu wa sanban noriba kara shuppatsu shimasu.",
      "english": "The bus bound for Tokyo Station departs from platform number 3.",
      "indonesian": "Bus jurusan Stasiun Tokyo berangkat dari peron nomor 3.",
      "grammarNote": "Sufiks tujuan jurusan [〜行き (-yuki / -iki)] dibaca \"yuki/iki\"."
    }
  ],
  "来": [
    {
      "sentence": "明日の午後二時に友達が私の家に遊びに来ます。",
      "furigana": "あしたのごごにじにともだちがわたしのいえにあそびにきます。",
      "romaji": "Ashita no gogo niji ni tomodachi ga watashi no ie ni asobi ni kimasu.",
      "english": "A friend is coming over to my house to hang out tomorrow at 2 PM.",
      "indonesian": "Besok jam dua siang teman saya akan datang main ke rumah saya.",
      "grammarNote": "Verba datang [来る (kuru)] bentuk sopan non-lampau [来ます (kimasu)]."
    },
    {
      "sentence": "来年はJLPTのN3試験に合格したいです。",
      "furigana": "らいねんはJLPTのN3しけんにごうかくしたいです。",
      "romaji": "Rainen wa JLPT no N3 shiken ni goukaku shitai desu.",
      "english": "Next year, I want to pass the JLPT N3 examination.",
      "indonesian": "Tahun depan saya ingin lulus ujian JLPT level N3.",
      "grammarNote": "Tahun depan [来年 (rainen)] memakai bacaan onyomi \"rai\" (yang akan datang)."
    },
    {
      "sentence": "日本へ来てからたくさんの素晴らしい思い出ができました。",
      "furigana": "にほんへきてからたくさんのすばらしいおもいでができました。",
      "romaji": "Nihon e kite kara takusan no subarashii omoide ga dekimashita.",
      "english": "Since coming to Japan, I have made lots of wonderful memories.",
      "indonesian": "Sejak datang ke Jepang, saya mendapatkan banyak kenangan indah.",
      "grammarNote": "Bentuk Te dari verba kuru adalah [来て (kite)] + [〜から (sejak...)]."
    },
    {
      "sentence": "未来のために今できる最善の努力を尽くしましょう。",
      "furigana": "みらいのためにいまできるさいぜんのどりょくをつくしましょう。",
      "romaji": "Mirai no tame ni ima dekiru saizen no doryoku o tsukushimashou.",
      "english": "Let us do our very best efforts possible right now for the future.",
      "indonesian": "Mari kita curahkan ikhtiar terbaik yang bisa kita lakukan sekarang demi masa depan.",
      "grammarNote": "Masa depan [未来 (mirai)] gabungan belum + tiba."
    }
  ],
  "車": [
    {
      "sentence": "新しい電気自動車を買うために貯金しています。",
      "furigana": "あたらしいでんきじどうしゃをかうためにちょきんしています。",
      "romaji": "Atarashii denki jidousha o kau tame ni chokin shite imasu.",
      "english": "I am saving money to buy a new electric car.",
      "indonesian": "Saya sedang menabung demi membeli mobil listrik baru.",
      "grammarNote": "Mobil beroda [車 (kuruma)] dan mobil bermotor [自動車 (jidousha)]."
    },
    {
      "sentence": "混雑した電車に乗って毎日通勤しています。",
      "furigana": "こんざつしたでんしゃにのってまいにちつうきんしています。",
      "romaji": "Konzatsu shita densha ni notte mainichi tsuukin shite imasu.",
      "english": "I commute to work every day by riding the crowded train.",
      "indonesian": "Setiap hari saya berangkat bekerja dengan menaiki kereta rel listrik yang padat.",
      "grammarNote": "Kereta listrik [電車 (densha)] memakai bacaan onyomi \"sha\"."
    },
    {
      "sentence": "車道で安全運転を心がけることが大切です。",
      "furigana": "しゃどうであんぜんうんてんをこころがけることがたいせつです。",
      "romaji": "Shadou de anzen unten o kokorogakeru koto ga taisetsu desu.",
      "english": "It is important to keep safe driving in mind on roadways.",
      "indonesian": "Penting untuk senantiasa mengutamakan berkendara secara aman di jalan raya.",
      "grammarNote": "Mengemudikan kendaraan [運転 (unten)] dan jalur mobil [車道 (shadou)]."
    },
    {
      "sentence": "駐車場の空きスペースを探すのに苦労しました。",
      "furigana": "ちゅうしゃじょうのあきすぺーすをさがすのにくろうしました。",
      "romaji": "Chuushajou no aki supeesu o sagasu no ni kurou shimashita.",
      "english": "I had a hard time looking for an empty space in the parking lot.",
      "indonesian": "Saya bersusah payah mencari ruang kosong di area parkir mobil.",
      "grammarNote": "Tempat parkir [駐車場 (chuushajou)]."
    }
  ],
  "山": [
    {
      "sentence": "休みの日に友達と高い山に登りました。",
      "furigana": "やすみのひにともだちとたかいやまにのぼりました。",
      "romaji": "Yasumi no hi ni tomodachi to takai yama ni noborimashita.",
      "english": "On my day off, I climbed a high mountain with my friends.",
      "indonesian": "Pada hari libur saya mendaki gunung yang tinggi bersama kawan.",
      "grammarNote": "Gunung [山 (yama)] + partikel [に] penanda target permukaan pendakian [山に登る]."
    },
    {
      "sentence": "富士山は日本の誇る最高峰の美しい山です。",
      "furigana": "ふじさんはにほんのほこるさいこうほうのうつくしいやまです。",
      "romaji": "Fujisan wa nihon no hokoru saikouhou no utsukushii yama desu.",
      "english": "Mount Fuji is a beautiful peak that is the pride of Japan.",
      "indonesian": "Gunung Fuji adalah gunung indah puncak tertinggi kebanggaan Jepang.",
      "grammarNote": "Nama gunung resmi menggunakan sufiks [〜山 (-san / -zan)] seperti [富士山 (fujisan)]."
    },
    {
      "sentence": "週末は豊かな自然に囲まれた山林で散策を楽しみます。",
      "furigana": "しゅうまつはゆたかなしぜんにかこまれたさんりんでさんさくをたのしみます。",
      "romaji": "Shuumatsu wa yutaka na shizen ni kakomareta sanrin de sansaku o tanoshimimasu.",
      "english": "On weekends, I enjoy strolling through mountain forests surrounded by rich nature.",
      "indonesian": "Pada akhir pekan saya menikmati jalan-jalan di hutan pegunungan yang asri.",
      "grammarNote": "Hutan pegunungan [山林 (sanrin)] memakai bacaan onyomi \"san\"."
    },
    {
      "sentence": "火山活動の兆候を専門家が観測しています。",
      "furigana": "かざんかつどうのちょうこうをせんもんかがかんそくしています。",
      "romaji": "Kazan katsudou no choukou o senmonka ga kansoku shite imasu.",
      "english": "Experts are monitoring signs of volcanic activity.",
      "indonesian": "Para ahli sedang mengamati tanda-tanda aktivitas gunung berapi.",
      "grammarNote": "Gunung berapi [火山 (kazan)] mengalami pengucapan bersuara rendaku z."
    }
  ],
  "川": [
    {
      "sentence": "きれいな川の近くでキャンプを楽しみました。",
      "furigana": "きれいなかわのちかくできゃんぷをたのしみました。",
      "romaji": "Kirei na kawa no chikaku de kyanpu o tanoshimimashita.",
      "english": "We enjoyed camping near a clean river.",
      "indonesian": "Kami menikmati berkemah di dekat sungai yang bersih.",
      "grammarNote": "Sungai [川 (kawa)] + pola spasial posisi dekat [〜の近くで]."
    },
    {
      "sentence": "この川には清流にしか棲まない魚がたくさん泳いでいます。",
      "furigana": "このかわにはせいりゅうにしかすまないさかながたくさんおよいでいます。",
      "romaji": "Kono kawa ni wa seiryuu ni shika sumanai sakana ga takusan oyoide imasu.",
      "english": "Many fish that only dwell in clear streams are swimming in this river.",
      "indonesian": "Banyak ikan yang hanya hidup di aliran air jernih berenang di sungai ini.",
      "grammarNote": "Pola pembatasan eksklusif [〜にしか + Negatif (hanya di...)]."
    },
    {
      "sentence": "川沿いの遊歩道を夕方に心地よくジョギングしました。",
      "furigana": "かわぞいのゆうほどうをゆうがたにここちよくじょぎんぐしました。",
      "romaji": "Kawazoi no yuuhodou o yuugata ni kokochiyoku jogingu shimashita.",
      "english": "I jogged pleasantly along the riverside promenade in the evening.",
      "indonesian": "Saya lari sore dengan nyaman di sepanjang jalur pedestrian tepi sungai.",
      "grammarNote": "Di sepanjang tepian [〜沿い (-zoi)] pada frasa [川沿い (kawazoi)]."
    },
    {
      "sentence": "大雨が降って河川の水位が急激に上昇しました。",
      "furigana": "おおあめがふってかせんのすいいがきゅうげきにじょうしょうしました。",
      "romaji": "Ooame ga futte kasen no suii ga kyuugeki ni joushou shimashita.",
      "english": "Heavy rain fell and the water level of the river rose sharply.",
      "indonesian": "Hujan lebat mengguyur dan permukaan air sungai naik dengan drastis.",
      "grammarNote": "Daerah aliran sungai formal [河川 (kasen)] memakai bacaan onyomi \"sen\"."
    }
  ],
  "田": [
    {
      "sentence": "秋になると田んぼの稲が黄金色に輝きます。",
      "furigana": "あきになるとたんぼのいねがおうごんいろにかがやきます。",
      "romaji": "Aki ni naru to tanbo no ine ga ougon-iro ni kagayakimasu.",
      "english": "When autumn comes, the rice plants in the paddy field glow golden.",
      "indonesian": "Bila musim gugur tiba, bulir padi di sawah bersinar keemasan.",
      "grammarNote": "Sawah padi [田んぼ (tanbo)] + perubahan alami kondisional [〜になると]."
    },
    {
      "sentence": "祖父の家には広大な水田が広がっています。",
      "furigana": "そふのいえにはこうだいなすいでんがひろがっています。",
      "romaji": "Sofu no ie ni wa koudai na suiden ga hirogatte imasu.",
      "english": "Vast wet-rice paddy fields stretch out around my grandfather s house.",
      "indonesian": "Di dekat rumah kakek saya terbentang hamparan sawah basah yang luas.",
      "grammarNote": "Sawah basah irigasi [水田 (suiden)] memakai bacaan onyomi \"den\"."
    },
    {
      "sentence": "山田先生はとても熱心に日本語を教えてくださいます。",
      "furigana": "やまだせんせいはとてもねっしんににほんごをおしえてくださいます。",
      "romaji": "Yamada-sensei wa totemo nesshin ni nihongo o oshiete kudasaimasu.",
      "english": "Mr. Yamada teaches Japanese very enthusiastically.",
      "indonesian": "Bapak Guru Yamada mengajarkan bahasa Jepang dengan penuh dedikasi.",
      "grammarNote": "Nama marga populer Jepang [山田 (Yamada)] perpaduan kanji gunung dan sawah."
    },
    {
      "sentence": "都会の喧騒を離れて田舎の静かな風景に癒やされました。",
      "furigana": "とかいのけんそうをはなれていなかのしずかなふうけいにいやされました。",
      "romaji": "Tokai no kensou o hanarete inaka no shizuka na fuukei ni iyasaremashita.",
      "english": "Leaving behind the bustle of the city, I was comforted by the peaceful rural scenery.",
      "indonesian": "Meninggalkan hiruk-pikuk kota besar, saya merasa tenang oleh panorama pedesaan yang damai.",
      "grammarNote": "Pedesaan asri [田舎 (inaka)] adalah bacaan khusus ateji kanji sawah."
    }
  ],
  191: [
      {
          "sentence": "この不の意味をよく理解しました。",
          "furigana": "この不[いみ]をよく[りかい]しました。",
          "romaji": "Kono ふ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bad, Clumsy' well.",
          "indonesian": "Saya memahami arti dari 'Tidak / Bukan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに不を書いて練習します。",
          "furigana": "[まいにち]ノートに不を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ふ o kaite renshuu shimasu.",
          "english": "I practice writing 'Bad, Clumsy' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Tidak / Bukan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は不の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は不の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ふ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bad, Clumsy'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Tidak / Bukan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で不の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で不の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ふ no mondai ga demashita.",
          "english": "A question about 'Bad, Clumsy' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Tidak / Bukan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  192: [
      {
          "sentence": "この丸の意味をよく理解しました。",
          "furigana": "この丸[いみ]をよく[りかい]しました。",
          "romaji": "Kono まる no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '-Ship, Curl Up' well.",
          "indonesian": "Saya memahami arti dari 'Bulat / Lingkaran' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに丸を書いて練習します。",
          "furigana": "[まいにち]ノートに丸を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni まる o kaite renshuu shimasu.",
          "english": "I practice writing '-Ship, Curl Up' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bulat / Lingkaran' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は丸の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は丸の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa まる no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '-Ship, Curl Up'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bulat / Lingkaran'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で丸の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で丸の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de まる no mondai ga demashita.",
          "english": "A question about '-Ship, Curl Up' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bulat / Lingkaran' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  193: [
      {
          "sentence": "この主の意味をよく理解しました。",
          "furigana": "この主[いみ]をよく[りかい]しました。",
          "romaji": "Kono おも no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Chief, Lord' well.",
          "indonesian": "Saya memahami arti dari 'Utama / Tuan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに主を書いて練習します。",
          "furigana": "[まいにち]ノートに主を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おも o kaite renshuu shimasu.",
          "english": "I practice writing 'Chief, Lord' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Utama / Tuan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は主の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は主の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おも no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Chief, Lord'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Utama / Tuan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で主の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で主の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おも no mondai ga demashita.",
          "english": "A question about 'Chief, Lord' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Utama / Tuan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  194: [
      {
          "sentence": "この事の意味をよく理解しました。",
          "furigana": "この事[いみ]をよく[りかい]しました。",
          "romaji": "Kono こと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Business, Fact' well.",
          "indonesian": "Saya memahami arti dari 'Hal / Urusan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに事を書いて練習します。",
          "furigana": "[まいにち]ノートに事を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni こと o kaite renshuu shimasu.",
          "english": "I practice writing 'Business, Fact' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Hal / Urusan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は事の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は事の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa こと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Business, Fact'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Hal / Urusan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で事の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で事の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de こと no mondai ga demashita.",
          "english": "A question about 'Business, Fact' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Hal / Urusan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  195: [
      {
          "sentence": "この交の意味をよく理解しました。",
          "furigana": "この交[いみ]をよく[りかい]しました。",
          "romaji": "Kono まじ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Association, Coming & Going' well.",
          "indonesian": "Saya memahami arti dari 'Persilangan / Bergaul' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに交を書いて練習します。",
          "furigana": "[まいにち]ノートに交を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni まじ o kaite renshuu shimasu.",
          "english": "I practice writing 'Association, Coming & Going' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Persilangan / Bergaul' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は交の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は交の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa まじ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Association, Coming & Going'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Persilangan / Bergaul'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で交の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で交の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de まじ no mondai ga demashita.",
          "english": "A question about 'Association, Coming & Going' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Persilangan / Bergaul' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  196: [
      {
          "sentence": "この代の意味をよく理解しました。",
          "furigana": "この代[いみ]をよく[りかい]しました。",
          "romaji": "Kono か no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Age, Change' well.",
          "indonesian": "Saya memahami arti dari 'Mengganti / Era' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに代を書いて練習します。",
          "furigana": "[まいにち]ノートに代を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni か o kaite renshuu shimasu.",
          "english": "I practice writing 'Age, Change' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Mengganti / Era' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は代の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は代の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa か no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Age, Change'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Mengganti / Era'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で代の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で代の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de か no mondai ga demashita.",
          "english": "A question about 'Age, Change' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Mengganti / Era' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  197: [
      {
          "sentence": "この以の意味をよく理解しました。",
          "furigana": "この以[いみ]をよく[りかい]しました。",
          "romaji": "Kono い no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Because, By Means Of' well.",
          "indonesian": "Saya memahami arti dari 'Dengan / Sejak' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに以を書いて練習します。",
          "furigana": "[まいにち]ノートに以を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni い o kaite renshuu shimasu.",
          "english": "I practice writing 'Because, By Means Of' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Dengan / Sejak' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は以の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は以の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa い no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Because, By Means Of'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Dengan / Sejak'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で以の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で以の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de い no mondai ga demashita.",
          "english": "A question about 'Because, By Means Of' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Dengan / Sejak' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  198: [
      {
          "sentence": "この低の意味をよく理解しました。",
          "furigana": "この低[いみ]をよく[りかい]しました。",
          "romaji": "Kono ひく no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Humble, Lower' well.",
          "indonesian": "Saya memahami arti dari 'Rendah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに低を書いて練習します。",
          "furigana": "[まいにち]ノートに低を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ひく o kaite renshuu shimasu.",
          "english": "I practice writing 'Humble, Lower' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Rendah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は低の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は低の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ひく no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Humble, Lower'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Rendah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で低の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で低の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ひく no mondai ga demashita.",
          "english": "A question about 'Humble, Lower' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Rendah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  199: [
      {
          "sentence": "この便の意味をよく理解しました。",
          "furigana": "この便[いみ]をよく[りかい]しました。",
          "romaji": "Kono べん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Chance, Convenience' well.",
          "indonesian": "Saya memahami arti dari 'Surat / Praktis' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに便を書いて練習します。",
          "furigana": "[まいにち]ノートに便を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni べん o kaite renshuu shimasu.",
          "english": "I practice writing 'Chance, Convenience' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Surat / Praktis' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は便の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は便の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa べん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Chance, Convenience'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Surat / Praktis'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で便の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で便の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de べん no mondai ga demashita.",
          "english": "A question about 'Chance, Convenience' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Surat / Praktis' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  200: [
      {
          "sentence": "この信の意味をよく理解しました。",
          "furigana": "この信[いみ]をよく[りかい]しました。",
          "romaji": "Kono しん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Faith, Fidelity' well.",
          "indonesian": "Saya memahami arti dari 'Percaya / Pesan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに信を書いて練習します。",
          "furigana": "[まいにち]ノートに信を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni しん o kaite renshuu shimasu.",
          "english": "I practice writing 'Faith, Fidelity' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Percaya / Pesan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は信の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は信の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa しん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Faith, Fidelity'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Percaya / Pesan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で信の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で信の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de しん no mondai ga demashita.",
          "english": "A question about 'Faith, Fidelity' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Percaya / Pesan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  201: [
      {
          "sentence": "この働の意味をよく理解しました。",
          "furigana": "この働[いみ]をよく[りかい]しました。",
          "romaji": "Kono はたら no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '(Kokuji), Work' well.",
          "indonesian": "Saya memahami arti dari 'Bekerja' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに働を書いて練習します。",
          "furigana": "[まいにち]ノートに働を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はたら o kaite renshuu shimasu.",
          "english": "I practice writing '(Kokuji), Work' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bekerja' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は働の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は働の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はたら no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '(Kokuji), Work'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bekerja'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で働の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で働の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はたら no mondai ga demashita.",
          "english": "A question about '(Kokuji), Work' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bekerja' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  202: [
      {
          "sentence": "この元の意味をよく理解しました。",
          "furigana": "この元[いみ]をよく[りかい]しました。",
          "romaji": "Kono もと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Beginning, Former Time' well.",
          "indonesian": "Saya memahami arti dari 'Asal / Awal / Sehat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに元を書いて練習します。",
          "furigana": "[まいにち]ノートに元を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni もと o kaite renshuu shimasu.",
          "english": "I practice writing 'Beginning, Former Time' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Asal / Awal / Sehat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は元の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は元の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa もと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Beginning, Former Time'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Asal / Awal / Sehat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で元の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で元の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de もと no mondai ga demashita.",
          "english": "A question about 'Beginning, Former Time' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Asal / Awal / Sehat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  203: [
      {
          "sentence": "この兄の意味をよく理解しました。",
          "furigana": "この兄[いみ]をよく[りかい]しました。",
          "romaji": "Kono あに no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Big Brother, Elder Brother' well.",
          "indonesian": "Saya memahami arti dari 'Kakak Laki-laki' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに兄を書いて練習します。",
          "furigana": "[まいにち]ノートに兄を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あに o kaite renshuu shimasu.",
          "english": "I practice writing 'Big Brother, Elder Brother' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kakak Laki-laki' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は兄の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は兄の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あに no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Big Brother, Elder Brother'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kakak Laki-laki'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で兄の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で兄の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あに no mondai ga demashita.",
          "english": "A question about 'Big Brother, Elder Brother' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kakak Laki-laki' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  204: [
      {
          "sentence": "この内の意味をよく理解しました。",
          "furigana": "この内[いみ]をよく[りかい]しました。",
          "romaji": "Kono うち no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Among, Between' well.",
          "indonesian": "Saya memahami arti dari 'Dalam / Bagian Dalam' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに内を書いて練習します。",
          "furigana": "[まいにち]ノートに内を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni うち o kaite renshuu shimasu.",
          "english": "I practice writing 'Among, Between' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Dalam / Bagian Dalam' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は内の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は内の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa うち no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Among, Between'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Dalam / Bagian Dalam'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で内の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で内の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de うち no mondai ga demashita.",
          "english": "A question about 'Among, Between' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Dalam / Bagian Dalam' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  205: [
      {
          "sentence": "この刀の意味をよく理解しました。",
          "furigana": "この刀[いみ]をよく[りかい]しました。",
          "romaji": "Kono かたな no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Knife, Saber' well.",
          "indonesian": "Saya memahami arti dari 'Pedang / Pisau' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに刀を書いて練習します。",
          "furigana": "[まいにち]ノートに刀を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かたな o kaite renshuu shimasu.",
          "english": "I practice writing 'Knife, Saber' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Pedang / Pisau' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は刀の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は刀の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かたな no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Knife, Saber'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Pedang / Pisau'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で刀の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で刀の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かたな no mondai ga demashita.",
          "english": "A question about 'Knife, Saber' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Pedang / Pisau' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  206: [
      {
          "sentence": "この別の意味をよく理解しました。",
          "furigana": "この別[いみ]をよく[りかい]しました。",
          "romaji": "Kono べつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Another, Branch Off' well.",
          "indonesian": "Saya memahami arti dari 'Berbeda / Pisah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに別を書いて練習します。",
          "furigana": "[まいにち]ノートに別を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni べつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Another, Branch Off' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Berbeda / Pisah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は別の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は別の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa べつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Another, Branch Off'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Berbeda / Pisah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で別の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で別の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de べつ no mondai ga demashita.",
          "english": "A question about 'Another, Branch Off' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Berbeda / Pisah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  207: [
      {
          "sentence": "この勉の意味をよく理解しました。",
          "furigana": "この勉[いみ]をよく[りかい]しました。",
          "romaji": "Kono べん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Diligent, Encourage' well.",
          "indonesian": "Saya memahami arti dari 'Berusaha / Belajar giat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに勉を書いて練習します。",
          "furigana": "[まいにち]ノートに勉を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni べん o kaite renshuu shimasu.",
          "english": "I practice writing 'Diligent, Encourage' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Berusaha / Belajar giat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は勉の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は勉の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa べん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Diligent, Encourage'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Berusaha / Belajar giat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で勉の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で勉の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de べん no mondai ga demashita.",
          "english": "A question about 'Diligent, Encourage' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Berusaha / Belajar giat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  208: [
      {
          "sentence": "この動の意味をよく理解しました。",
          "furigana": "この動[いみ]をよく[りかい]しました。",
          "romaji": "Kono うご no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Change, Confusion' well.",
          "indonesian": "Saya memahami arti dari 'Bergerak' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに動を書いて練習します。",
          "furigana": "[まいにち]ノートに動を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni うご o kaite renshuu shimasu.",
          "english": "I practice writing 'Change, Confusion' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bergerak' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は動の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は動の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa うご no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Change, Confusion'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bergerak'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で動の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で動の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de うご no mondai ga demashita.",
          "english": "A question about 'Change, Confusion' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bergerak' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  209: [
      {
          "sentence": "この午の意味をよく理解しました。",
          "furigana": "この午[いみ]をよく[りかい]しました。",
          "romaji": "Kono ご no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '11Am-1Pm, Noon' well.",
          "indonesian": "Saya memahami arti dari 'Siang (Tengah Hari)' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに午を書いて練習します。",
          "furigana": "[まいにち]ノートに午を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ご o kaite renshuu shimasu.",
          "english": "I practice writing '11Am-1Pm, Noon' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Siang (Tengah Hari)' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は午の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は午の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ご no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '11Am-1Pm, Noon'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Siang (Tengah Hari)'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で午の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で午の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ご no mondai ga demashita.",
          "english": "A question about '11Am-1Pm, Noon' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Siang (Tengah Hari)' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  210: [
      {
          "sentence": "この去の意味をよく理解しました。",
          "furigana": "この去[いみ]をよく[りかい]しました。",
          "romaji": "Kono さ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Divorce, Elapse' well.",
          "indonesian": "Saya memahami arti dari 'Lalu / Meninggalkan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに去を書いて練習します。",
          "furigana": "[まいにち]ノートに去を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni さ o kaite renshuu shimasu.",
          "english": "I practice writing 'Divorce, Elapse' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Lalu / Meninggalkan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は去の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は去の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa さ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Divorce, Elapse'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Lalu / Meninggalkan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で去の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で去の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de さ no mondai ga demashita.",
          "english": "A question about 'Divorce, Elapse' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Lalu / Meninggalkan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  211: [
      {
          "sentence": "この友の意味をよく理解しました。",
          "furigana": "この友[いみ]をよく[りかい]しました。",
          "romaji": "Kono とも no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Friend' well.",
          "indonesian": "Saya memahami arti dari 'Teman / Sahabat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに友を書いて練習します。",
          "furigana": "[まいにち]ノートに友を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni とも o kaite renshuu shimasu.",
          "english": "I practice writing 'Friend' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Teman / Sahabat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は友の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は友の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa とも no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Friend'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Teman / Sahabat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で友の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で友の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de とも no mondai ga demashita.",
          "english": "A question about 'Friend' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Teman / Sahabat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  212: [
      {
          "sentence": "この取の意味をよく理解しました。",
          "furigana": "この取[いみ]をよく[りかい]しました。",
          "romaji": "Kono と no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Fetch, Take' well.",
          "indonesian": "Saya memahami arti dari 'Mengambil' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに取を書いて練習します。",
          "furigana": "[まいにち]ノートに取を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni と o kaite renshuu shimasu.",
          "english": "I practice writing 'Fetch, Take' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Mengambil' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は取の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は取の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa と no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Fetch, Take'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Mengambil'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で取の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で取の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de と no mondai ga demashita.",
          "english": "A question about 'Fetch, Take' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Mengambil' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  213: [
      {
          "sentence": "この受の意味をよく理解しました。",
          "furigana": "この受[いみ]をよく[りかい]しました。",
          "romaji": "Kono う no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Accept, Answer (Phone)' well.",
          "indonesian": "Saya memahami arti dari 'Menerima / Mengikuti ujian' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに受を書いて練習します。",
          "furigana": "[まいにち]ノートに受を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni う o kaite renshuu shimasu.",
          "english": "I practice writing 'Accept, Answer (Phone)' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menerima / Mengikuti ujian' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は受の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は受の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa う no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Accept, Answer (Phone)'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menerima / Mengikuti ujian'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で受の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で受の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de う no mondai ga demashita.",
          "english": "A question about 'Accept, Answer (Phone)' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menerima / Mengikuti ujian' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  214: [
      {
          "sentence": "この台の意味をよく理解しました。",
          "furigana": "この台[いみ]をよく[りかい]しました。",
          "romaji": "Kono だい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'A Stand, Counter For Machines And Vehicles' well.",
          "indonesian": "Saya memahami arti dari 'Dudukan / Unit kendaraan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに台を書いて練習します。",
          "furigana": "[まいにち]ノートに台を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni だい o kaite renshuu shimasu.",
          "english": "I practice writing 'A Stand, Counter For Machines And Vehicles' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Dudukan / Unit kendaraan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は台の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は台の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa だい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'A Stand, Counter For Machines And Vehicles'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Dudukan / Unit kendaraan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で台の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で台の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de だい no mondai ga demashita.",
          "english": "A question about 'A Stand, Counter For Machines And Vehicles' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Dudukan / Unit kendaraan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  215: [
      {
          "sentence": "この合の意味をよく理解しました。",
          "furigana": "この合[いみ]をよく[りかい]しました。",
          "romaji": "Kono あ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '0.1, Fit' well.",
          "indonesian": "Saya memahami arti dari 'Cocok / Bertemu' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに合を書いて練習します。",
          "furigana": "[まいにち]ノートに合を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あ o kaite renshuu shimasu.",
          "english": "I practice writing '0.1, Fit' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Cocok / Bertemu' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は合の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は合の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '0.1, Fit'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Cocok / Bertemu'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で合の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で合の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あ no mondai ga demashita.",
          "english": "A question about '0.1, Fit' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Cocok / Bertemu' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  216: [
      {
          "sentence": "この同の意味をよく理解しました。",
          "furigana": "この同[いみ]をよく[りかい]しました。",
          "romaji": "Kono おな no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Agree, Equal' well.",
          "indonesian": "Saya memahami arti dari 'Sama' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに同を書いて練習します。",
          "furigana": "[まいにち]ノートに同を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おな o kaite renshuu shimasu.",
          "english": "I practice writing 'Agree, Equal' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Sama' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は同の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は同の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おな no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Agree, Equal'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Sama'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で同の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で同の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おな no mondai ga demashita.",
          "english": "A question about 'Agree, Equal' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Sama' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  217: [
      {
          "sentence": "この名の意味をよく理解しました。",
          "furigana": "この名[いみ]をよく[りかい]しました。",
          "romaji": "Kono な no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Distinguished, Name' well.",
          "indonesian": "Saya memahami arti dari 'Nama' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに名を書いて練習します。",
          "furigana": "[まいにち]ノートに名を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni な o kaite renshuu shimasu.",
          "english": "I practice writing 'Distinguished, Name' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Nama' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は名の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は名の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa な no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Distinguished, Name'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Nama'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で名の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で名の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de な no mondai ga demashita.",
          "english": "A question about 'Distinguished, Name' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Nama' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  218: [
      {
          "sentence": "この和の意味をよく理解しました。",
          "furigana": "この和[いみ]をよく[りかい]しました。",
          "romaji": "Kono わ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Japan, Japanese Style' well.",
          "indonesian": "Saya memahami arti dari 'Damai / Khas Jepang' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに和を書いて練習します。",
          "furigana": "[まいにち]ノートに和を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni わ o kaite renshuu shimasu.",
          "english": "I practice writing 'Japan, Japanese Style' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Damai / Khas Jepang' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は和の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は和の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa わ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Japan, Japanese Style'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Damai / Khas Jepang'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で和の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で和の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de わ no mondai ga demashita.",
          "english": "A question about 'Japan, Japanese Style' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Damai / Khas Jepang' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  219: [
      {
          "sentence": "この品の意味をよく理解しました。",
          "furigana": "この品[いみ]をよく[りかい]しました。",
          "romaji": "Kono しな no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Article, Counter For Meal Courses' well.",
          "indonesian": "Saya memahami arti dari 'Barang / Kualitas' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに品を書いて練習します。",
          "furigana": "[まいにち]ノートに品を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni しな o kaite renshuu shimasu.",
          "english": "I practice writing 'Article, Counter For Meal Courses' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Barang / Kualitas' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は品の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は品の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa しな no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Article, Counter For Meal Courses'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Barang / Kualitas'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で品の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で品の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de しな no mondai ga demashita.",
          "english": "A question about 'Article, Counter For Meal Courses' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Barang / Kualitas' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  220: [
      {
          "sentence": "この問の意味をよく理解しました。",
          "furigana": "この問[いみ]をよく[りかい]しました。",
          "romaji": "Kono もん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Ask, Problem' well.",
          "indonesian": "Saya memahami arti dari 'Pertanyaan / Masalah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに問を書いて練習します。",
          "furigana": "[まいにち]ノートに問を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni もん o kaite renshuu shimasu.",
          "english": "I practice writing 'Ask, Problem' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Pertanyaan / Masalah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は問の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は問の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa もん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Ask, Problem'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Pertanyaan / Masalah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で問の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で問の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de もん no mondai ga demashita.",
          "english": "A question about 'Ask, Problem' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Pertanyaan / Masalah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  221: [
      {
          "sentence": "この回の意味をよく理解しました。",
          "furigana": "この回[いみ]をよく[りかい]しました。",
          "romaji": "Kono まわ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '-Times, Counter For Occurrences' well.",
          "indonesian": "Saya memahami arti dari 'Berputar / Kali (Frekuensi)' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに回を書いて練習します。",
          "furigana": "[まいにち]ノートに回を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni まわ o kaite renshuu shimasu.",
          "english": "I practice writing '-Times, Counter For Occurrences' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Berputar / Kali (Frekuensi)' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は回の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は回の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa まわ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '-Times, Counter For Occurrences'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Berputar / Kali (Frekuensi)'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で回の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で回の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de まわ no mondai ga demashita.",
          "english": "A question about '-Times, Counter For Occurrences' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Berputar / Kali (Frekuensi)' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  222: [
      {
          "sentence": "この図の意味をよく理解しました。",
          "furigana": "この図[いみ]をよく[りかい]しました。",
          "romaji": "Kono ず no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Audacious, Drawing' well.",
          "indonesian": "Saya memahami arti dari 'Gambar / Peta / Rencana' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに図を書いて練習します。",
          "furigana": "[まいにち]ノートに図を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ず o kaite renshuu shimasu.",
          "english": "I practice writing 'Audacious, Drawing' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Gambar / Peta / Rencana' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は図の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は図の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ず no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Audacious, Drawing'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Gambar / Peta / Rencana'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で図の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で図の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ず no mondai ga demashita.",
          "english": "A question about 'Audacious, Drawing' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Gambar / Peta / Rencana' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  223: [
      {
          "sentence": "この堂の意味をよく理解しました。",
          "furigana": "この堂[いみ]をよく[りかい]しました。",
          "romaji": "Kono どう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Hall, Public Chamber' well.",
          "indonesian": "Saya memahami arti dari 'Aula / Balai besar' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに堂を書いて練習します。",
          "furigana": "[まいにち]ノートに堂を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni どう o kaite renshuu shimasu.",
          "english": "I practice writing 'Hall, Public Chamber' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Aula / Balai besar' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は堂の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は堂の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa どう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Hall, Public Chamber'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Aula / Balai besar'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で堂の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で堂の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de どう no mondai ga demashita.",
          "english": "A question about 'Hall, Public Chamber' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Aula / Balai besar' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  224: [
      {
          "sentence": "この売の意味をよく理解しました。",
          "furigana": "この売[いみ]をよく[りかい]しました。",
          "romaji": "Kono う no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Sell' well.",
          "indonesian": "Saya memahami arti dari 'Menjual' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに売を書いて練習します。",
          "furigana": "[まいにち]ノートに売を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni う o kaite renshuu shimasu.",
          "english": "I practice writing 'Sell' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menjual' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は売の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は売の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa う no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Sell'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menjual'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で売の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で売の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de う no mondai ga demashita.",
          "english": "A question about 'Sell' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menjual' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  225: [
      {
          "sentence": "この太の意味をよく理解しました。",
          "furigana": "この太[いみ]をよく[りかい]しました。",
          "romaji": "Kono ふと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Big Around, Plump' well.",
          "indonesian": "Saya memahami arti dari 'Gemuk / Tebal' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに太を書いて練習します。",
          "furigana": "[まいにち]ノートに太を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ふと o kaite renshuu shimasu.",
          "english": "I practice writing 'Big Around, Plump' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Gemuk / Tebal' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は太の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は太の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ふと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Big Around, Plump'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Gemuk / Tebal'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で太の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で太の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ふと no mondai ga demashita.",
          "english": "A question about 'Big Around, Plump' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Gemuk / Tebal' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  226: [
      {
          "sentence": "この好の意味をよく理解しました。",
          "furigana": "この好[いみ]をよく[りかい]しました。",
          "romaji": "Kono す no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Fond, Like Something' well.",
          "indonesian": "Saya memahami arti dari 'Suka / Gemar' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに好を書いて練習します。",
          "furigana": "[まいにち]ノートに好を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni す o kaite renshuu shimasu.",
          "english": "I practice writing 'Fond, Like Something' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Suka / Gemar' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は好の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は好の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa す no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Fond, Like Something'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Suka / Gemar'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で好の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で好の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de す no mondai ga demashita.",
          "english": "A question about 'Fond, Like Something' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Suka / Gemar' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  227: [
      {
          "sentence": "この妹の意味をよく理解しました。",
          "furigana": "この妹[いみ]をよく[りかい]しました。",
          "romaji": "Kono いもうと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Younger Sister' well.",
          "indonesian": "Saya memahami arti dari 'Adik Perempuan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに妹を書いて練習します。",
          "furigana": "[まいにち]ノートに妹を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni いもうと o kaite renshuu shimasu.",
          "english": "I practice writing 'Younger Sister' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Adik Perempuan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は妹の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は妹の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa いもうと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Younger Sister'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Adik Perempuan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で妹の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で妹の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de いもうと no mondai ga demashita.",
          "english": "A question about 'Younger Sister' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Adik Perempuan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  228: [
      {
          "sentence": "この姉の意味をよく理解しました。",
          "furigana": "この姉[いみ]をよく[りかい]しました。",
          "romaji": "Kono あね no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Elder Sister' well.",
          "indonesian": "Saya memahami arti dari 'Kakak Perempuan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに姉を書いて練習します。",
          "furigana": "[まいにち]ノートに姉を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あね o kaite renshuu shimasu.",
          "english": "I practice writing 'Elder Sister' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kakak Perempuan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は姉の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は姉の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あね no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Elder Sister'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kakak Perempuan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で姉の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で姉の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あね no mondai ga demashita.",
          "english": "A question about 'Elder Sister' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kakak Perempuan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  229: [
      {
          "sentence": "この始の意味をよく理解しました。",
          "furigana": "この始[いみ]をよく[りかい]しました。",
          "romaji": "Kono はじ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Begin, Commence' well.",
          "indonesian": "Saya memahami arti dari 'Mulai' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに始を書いて練習します。",
          "furigana": "[まいにち]ノートに始を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はじ o kaite renshuu shimasu.",
          "english": "I practice writing 'Begin, Commence' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Mulai' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は始の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は始の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はじ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Begin, Commence'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Mulai'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で始の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で始の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はじ no mondai ga demashita.",
          "english": "A question about 'Begin, Commence' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Mulai' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  230: [
      {
          "sentence": "この字の意味をよく理解しました。",
          "furigana": "この字[いみ]をよく[りかい]しました。",
          "romaji": "Kono じ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Character, Letter' well.",
          "indonesian": "Saya memahami arti dari 'Huruf / Karakter' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに字を書いて練習します。",
          "furigana": "[まいにち]ノートに字を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni じ o kaite renshuu shimasu.",
          "english": "I practice writing 'Character, Letter' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Huruf / Karakter' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は字の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は字の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa じ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Character, Letter'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Huruf / Karakter'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で字の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で字の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de じ no mondai ga demashita.",
          "english": "A question about 'Character, Letter' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Huruf / Karakter' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  231: [
      {
          "sentence": "この官の意味をよく理解しました。",
          "furigana": "この官[いみ]をよく[りかい]しました。",
          "romaji": "Kono かん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bureaucrat, Organ' well.",
          "indonesian": "Saya memahami arti dari 'Pemerintah / Pejabat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに官を書いて練習します。",
          "furigana": "[まいにち]ノートに官を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かん o kaite renshuu shimasu.",
          "english": "I practice writing 'Bureaucrat, Organ' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Pemerintah / Pejabat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は官の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は官の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bureaucrat, Organ'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Pemerintah / Pejabat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で官の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で官の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かん no mondai ga demashita.",
          "english": "A question about 'Bureaucrat, Organ' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Pemerintah / Pejabat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  232: [
      {
          "sentence": "この定の意味をよく理解しました。",
          "furigana": "この定[いみ]をよく[りかい]しました。",
          "romaji": "Kono てい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Decide, Determine' well.",
          "indonesian": "Saya memahami arti dari 'Pasti / Menentukan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに定を書いて練習します。",
          "furigana": "[まいにち]ノートに定を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni てい o kaite renshuu shimasu.",
          "english": "I practice writing 'Decide, Determine' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Pasti / Menentukan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は定の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は定の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa てい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Decide, Determine'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Pasti / Menentukan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で定の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で定の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de てい no mondai ga demashita.",
          "english": "A question about 'Decide, Determine' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Pasti / Menentukan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  233: [
      {
          "sentence": "この実の意味をよく理解しました。",
          "furigana": "この実[いみ]をよく[りかい]しました。",
          "romaji": "Kono じつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Fruit, Nut' well.",
          "indonesian": "Saya memahami arti dari 'Nyata / Buah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに実を書いて練習します。",
          "furigana": "[まいにち]ノートに実を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni じつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Fruit, Nut' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Nyata / Buah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は実の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は実の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa じつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Fruit, Nut'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Nyata / Buah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で実の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で実の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de じつ no mondai ga demashita.",
          "english": "A question about 'Fruit, Nut' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Nyata / Buah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  234: [
      {
          "sentence": "この宿の意味をよく理解しました。",
          "furigana": "この宿[いみ]をよく[りかい]しました。",
          "romaji": "Kono やど no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Be Pregnant, Dwell' well.",
          "indonesian": "Saya memahami arti dari 'Menginap / Penginapan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに宿を書いて練習します。",
          "furigana": "[まいにち]ノートに宿を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni やど o kaite renshuu shimasu.",
          "english": "I practice writing 'Be Pregnant, Dwell' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menginap / Penginapan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は宿の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は宿の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa やど no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Be Pregnant, Dwell'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menginap / Penginapan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で宿の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で宿の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de やど no mondai ga demashita.",
          "english": "A question about 'Be Pregnant, Dwell' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menginap / Penginapan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  235: [
      {
          "sentence": "この屋の意味をよく理解しました。",
          "furigana": "この屋[いみ]をよく[りかい]しました。",
          "romaji": "Kono や no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Dealer, House' well.",
          "indonesian": "Saya memahami arti dari 'Toko / Rumah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに屋を書いて練習します。",
          "furigana": "[まいにち]ノートに屋を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni や o kaite renshuu shimasu.",
          "english": "I practice writing 'Dealer, House' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Toko / Rumah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は屋の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は屋の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa や no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Dealer, House'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Toko / Rumah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で屋の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で屋の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de や no mondai ga demashita.",
          "english": "A question about 'Dealer, House' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Toko / Rumah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  236: [
      {
          "sentence": "この工の意味をよく理解しました。",
          "furigana": "この工[いみ]をよく[りかい]しました。",
          "romaji": "Kono こう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Construction, Craft' well.",
          "indonesian": "Saya memahami arti dari 'Keahlian / Konstruksi' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに工を書いて練習します。",
          "furigana": "[まいにち]ノートに工を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni こう o kaite renshuu shimasu.",
          "english": "I practice writing 'Construction, Craft' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Keahlian / Konstruksi' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は工の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は工の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa こう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Construction, Craft'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Keahlian / Konstruksi'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で工の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で工の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de こう no mondai ga demashita.",
          "english": "A question about 'Construction, Craft' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Keahlian / Konstruksi' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  237: [
      {
          "sentence": "この年の意味をよく理解しました。",
          "furigana": "この年[いみ]をよく[りかい]しました。",
          "romaji": "Kono とし no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Counter For Years, Year' well.",
          "indonesian": "Saya memahami arti dari 'Tahun' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに年を書いて練習します。",
          "furigana": "[まいにち]ノートに年を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni とし o kaite renshuu shimasu.",
          "english": "I practice writing 'Counter For Years, Year' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Tahun' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は年の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は年の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa とし no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Counter For Years, Year'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Tahun'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で年の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で年の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de とし no mondai ga demashita.",
          "english": "A question about 'Counter For Years, Year' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Tahun' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  238: [
      {
          "sentence": "この度の意味をよく理解しました。",
          "furigana": "この度[いみ]をよく[りかい]しました。",
          "romaji": "Kono ど no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Attitude, Consider' well.",
          "indonesian": "Saya memahami arti dari 'Derajat / Kali' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに度を書いて練習します。",
          "furigana": "[まいにち]ノートに度を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ど o kaite renshuu shimasu.",
          "english": "I practice writing 'Attitude, Consider' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Derajat / Kali' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は度の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は度の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ど no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Attitude, Consider'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Derajat / Kali'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で度の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で度の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ど no mondai ga demashita.",
          "english": "A question about 'Attitude, Consider' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Derajat / Kali' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  239: [
      {
          "sentence": "この建の意味をよく理解しました。",
          "furigana": "この建[いみ]をよく[りかい]しました。",
          "romaji": "Kono た no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Build' well.",
          "indonesian": "Saya memahami arti dari 'Membangun' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに建を書いて練習します。",
          "furigana": "[まいにち]ノートに建を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni た o kaite renshuu shimasu.",
          "english": "I practice writing 'Build' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Membangun' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は建の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は建の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa た no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Build'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Membangun'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で建の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で建の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de た no mondai ga demashita.",
          "english": "A question about 'Build' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Membangun' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  240: [
      {
          "sentence": "この弓の意味をよく理解しました。",
          "furigana": "この弓[いみ]をよく[りかい]しました。",
          "romaji": "Kono ゆみ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bow, Bow (Archery, Violin)' well.",
          "indonesian": "Saya memahami arti dari 'Busur Panah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに弓を書いて練習します。",
          "furigana": "[まいにち]ノートに弓を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ゆみ o kaite renshuu shimasu.",
          "english": "I practice writing 'Bow, Bow (Archery, Violin)' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Busur Panah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は弓の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は弓の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ゆみ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bow, Bow (Archery, Violin)'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Busur Panah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で弓の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で弓の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ゆみ no mondai ga demashita.",
          "english": "A question about 'Bow, Bow (Archery, Violin)' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Busur Panah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  241: [
      {
          "sentence": "この引の意味をよく理解しました。",
          "furigana": "この引[いみ]をよく[りかい]しました。",
          "romaji": "Kono ひ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Admit, Install' well.",
          "indonesian": "Saya memahami arti dari 'Menarik' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに引を書いて練習します。",
          "furigana": "[まいにち]ノートに引を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ひ o kaite renshuu shimasu.",
          "english": "I practice writing 'Admit, Install' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menarik' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は引の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は引の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ひ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Admit, Install'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menarik'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で引の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で引の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ひ no mondai ga demashita.",
          "english": "A question about 'Admit, Install' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menarik' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  242: [
      {
          "sentence": "この弟の意味をよく理解しました。",
          "furigana": "この弟[いみ]をよく[りかい]しました。",
          "romaji": "Kono おとうと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Faithful Service To Elders, Younger Brother' well.",
          "indonesian": "Saya memahami arti dari 'Adik Laki-laki' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに弟を書いて練習します。",
          "furigana": "[まいにち]ノートに弟を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おとうと o kaite renshuu shimasu.",
          "english": "I practice writing 'Faithful Service To Elders, Younger Brother' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Adik Laki-laki' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は弟の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は弟の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おとうと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Faithful Service To Elders, Younger Brother'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Adik Laki-laki'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で弟の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で弟の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おとうと no mondai ga demashita.",
          "english": "A question about 'Faithful Service To Elders, Younger Brother' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Adik Laki-laki' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  243: [
      {
          "sentence": "この当の意味をよく理解しました。",
          "furigana": "この当[いみ]をよく[りかい]しました。",
          "romaji": "Kono あ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Appropriate, Himself' well.",
          "indonesian": "Saya memahami arti dari 'Tepat / Terkena' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに当を書いて練習します。",
          "furigana": "[まいにち]ノートに当を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あ o kaite renshuu shimasu.",
          "english": "I practice writing 'Appropriate, Himself' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Tepat / Terkena' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は当の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は当の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Appropriate, Himself'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Tepat / Terkena'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で当の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で当の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あ no mondai ga demashita.",
          "english": "A question about 'Appropriate, Himself' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Tepat / Terkena' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  244: [
      {
          "sentence": "この形の意味をよく理解しました。",
          "furigana": "この形[いみ]をよく[りかい]しました。",
          "romaji": "Kono かたち no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Form, Shape' well.",
          "indonesian": "Saya memahami arti dari 'Bentuk' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに形を書いて練習します。",
          "furigana": "[まいにち]ノートに形を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かたち o kaite renshuu shimasu.",
          "english": "I practice writing 'Form, Shape' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bentuk' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は形の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は形の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かたち no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Form, Shape'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bentuk'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で形の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で形の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かたち no mondai ga demashita.",
          "english": "A question about 'Form, Shape' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bentuk' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  245: [
      {
          "sentence": "この悪の意味をよく理解しました。",
          "furigana": "この悪[いみ]をよく[りかい]しました。",
          "romaji": "Kono わる no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bad, Evil' well.",
          "indonesian": "Saya memahami arti dari 'Buruk / Jahat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに悪を書いて練習します。",
          "furigana": "[まいにち]ノートに悪を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni わる o kaite renshuu shimasu.",
          "english": "I practice writing 'Bad, Evil' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Buruk / Jahat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は悪の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は悪の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa わる no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bad, Evil'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Buruk / Jahat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で悪の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で悪の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de わる no mondai ga demashita.",
          "english": "A question about 'Bad, Evil' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Buruk / Jahat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  246: [
      {
          "sentence": "この意の意味をよく理解しました。",
          "furigana": "この意[いみ]をよく[りかい]しました。",
          "romaji": "Kono い no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Care, Desire' well.",
          "indonesian": "Saya memahami arti dari 'Arti / Pikiran' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに意を書いて練習します。",
          "furigana": "[まいにち]ノートに意を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni い o kaite renshuu shimasu.",
          "english": "I practice writing 'Care, Desire' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Arti / Pikiran' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は意の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は意の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa い no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Care, Desire'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Arti / Pikiran'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で意の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で意の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de い no mondai ga demashita.",
          "english": "A question about 'Care, Desire' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Arti / Pikiran' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  247: [
      {
          "sentence": "この戸の意味をよく理解しました。",
          "furigana": "この戸[いみ]をよく[りかい]しました。",
          "romaji": "Kono と no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Counter For Houses, Door' well.",
          "indonesian": "Saya memahami arti dari 'Pintu Tradisional' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに戸を書いて練習します。",
          "furigana": "[まいにち]ノートに戸を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni と o kaite renshuu shimasu.",
          "english": "I practice writing 'Counter For Houses, Door' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Pintu Tradisional' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は戸の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は戸の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa と no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Counter For Houses, Door'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Pintu Tradisional'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で戸の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で戸の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de と no mondai ga demashita.",
          "english": "A question about 'Counter For Houses, Door' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Pintu Tradisional' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  248: [
      {
          "sentence": "この才の意味をよく理解しました。",
          "furigana": "この才[いみ]をよく[りかい]しました。",
          "romaji": "Kono さい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Cubic Shaku, Genius' well.",
          "indonesian": "Saya memahami arti dari 'Bakat / Usia' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに才を書いて練習します。",
          "furigana": "[まいにち]ノートに才を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni さい o kaite renshuu shimasu.",
          "english": "I practice writing 'Cubic Shaku, Genius' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bakat / Usia' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は才の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は才の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa さい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Cubic Shaku, Genius'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bakat / Usia'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で才の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で才の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de さい no mondai ga demashita.",
          "english": "A question about 'Cubic Shaku, Genius' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bakat / Usia' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  249: [
      {
          "sentence": "この数の意味をよく理解しました。",
          "furigana": "この数[いみ]をよく[りかい]しました。",
          "romaji": "Kono かず no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Fate, Figures' well.",
          "indonesian": "Saya memahami arti dari 'Angka / Menghitung' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに数を書いて練習します。",
          "furigana": "[まいにち]ノートに数を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かず o kaite renshuu shimasu.",
          "english": "I practice writing 'Fate, Figures' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Angka / Menghitung' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は数の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は数の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かず no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Fate, Figures'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Angka / Menghitung'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で数の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で数の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かず no mondai ga demashita.",
          "english": "A question about 'Fate, Figures' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Angka / Menghitung' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  250: [
      {
          "sentence": "この文の意味をよく理解しました。",
          "furigana": "この文[いみ]をよく[りかい]しました。",
          "romaji": "Kono ぶん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Art, Decoration' well.",
          "indonesian": "Saya memahami arti dari 'Kalimat / Tulisan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに文を書いて練習します。",
          "furigana": "[まいにち]ノートに文を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ぶん o kaite renshuu shimasu.",
          "english": "I practice writing 'Art, Decoration' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kalimat / Tulisan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は文の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は文の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ぶん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Art, Decoration'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kalimat / Tulisan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で文の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で文の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ぶん no mondai ga demashita.",
          "english": "A question about 'Art, Decoration' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kalimat / Tulisan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  251: [
      {
          "sentence": "この料の意味をよく理解しました。",
          "furigana": "この料[いみ]をよく[りかい]しました。",
          "romaji": "Kono りょう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Fee, Materials' well.",
          "indonesian": "Saya memahami arti dari 'Biaya / Bahan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに料を書いて練習します。",
          "furigana": "[まいにち]ノートに料を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni りょう o kaite renshuu shimasu.",
          "english": "I practice writing 'Fee, Materials' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Biaya / Bahan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は料の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は料の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa りょう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Fee, Materials'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Biaya / Bahan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で料の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で料の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de りょう no mondai ga demashita.",
          "english": "A question about 'Fee, Materials' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Biaya / Bahan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  252: [
      {
          "sentence": "この方の意味をよく理解しました。",
          "furigana": "この方[いみ]をよく[りかい]しました。",
          "romaji": "Kono ほう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Alternative, Direction' well.",
          "indonesian": "Saya memahami arti dari 'Arah / Cara / Orang' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに方を書いて練習します。",
          "furigana": "[まいにち]ノートに方を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ほう o kaite renshuu shimasu.",
          "english": "I practice writing 'Alternative, Direction' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Arah / Cara / Orang' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は方の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は方の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ほう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Alternative, Direction'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Arah / Cara / Orang'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で方の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で方の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ほう no mondai ga demashita.",
          "english": "A question about 'Alternative, Direction' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Arah / Cara / Orang' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  253: [
      {
          "sentence": "この旅の意味をよく理解しました。",
          "furigana": "この旅[いみ]をよく[りかい]しました。",
          "romaji": "Kono たび no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Travel, Trip' well.",
          "indonesian": "Saya memahami arti dari 'Perjalanan / Wisata' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに旅を書いて練習します。",
          "furigana": "[まいにち]ノートに旅を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni たび o kaite renshuu shimasu.",
          "english": "I practice writing 'Travel, Trip' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Perjalanan / Wisata' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は旅の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は旅の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa たび no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Travel, Trip'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Perjalanan / Wisata'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で旅の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で旅の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de たび no mondai ga demashita.",
          "english": "A question about 'Travel, Trip' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Perjalanan / Wisata' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  254: [
      {
          "sentence": "この族の意味をよく理解しました。",
          "furigana": "この族[いみ]をよく[りかい]しました。",
          "romaji": "Kono ぞく no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Family, Tribe' well.",
          "indonesian": "Saya memahami arti dari 'Keluarga / Suku' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに族を書いて練習します。",
          "furigana": "[まいにち]ノートに族を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ぞく o kaite renshuu shimasu.",
          "english": "I practice writing 'Family, Tribe' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Keluarga / Suku' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は族の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は族の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ぞく no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Family, Tribe'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Keluarga / Suku'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で族の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で族の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ぞく no mondai ga demashita.",
          "english": "A question about 'Family, Tribe' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Keluarga / Suku' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  255: [
      {
          "sentence": "この曜の意味をよく理解しました。",
          "furigana": "この曜[いみ]をよく[りかい]しました。",
          "romaji": "Kono よう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Weekday' well.",
          "indonesian": "Saya memahami arti dari 'Hari dalam Seminggu' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに曜を書いて練習します。",
          "furigana": "[まいにち]ノートに曜を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni よう o kaite renshuu shimasu.",
          "english": "I practice writing 'Weekday' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Hari dalam Seminggu' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は曜の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は曜の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa よう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Weekday'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Hari dalam Seminggu'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で曜の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で曜の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de よう no mondai ga demashita.",
          "english": "A question about 'Weekday' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Hari dalam Seminggu' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  256: [
      {
          "sentence": "この有の意味をよく理解しました。",
          "furigana": "この有[いみ]をよく[りかい]しました。",
          "romaji": "Kono あ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Approx, Exist' well.",
          "indonesian": "Saya memahami arti dari 'Ada / Memiliki' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに有を書いて練習します。",
          "furigana": "[まいにち]ノートに有を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あ o kaite renshuu shimasu.",
          "english": "I practice writing 'Approx, Exist' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Ada / Memiliki' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は有の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は有の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Approx, Exist'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Ada / Memiliki'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で有の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で有の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あ no mondai ga demashita.",
          "english": "A question about 'Approx, Exist' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Ada / Memiliki' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  257: [
      {
          "sentence": "この服の意味をよく理解しました。",
          "furigana": "この服[いみ]をよく[りかい]しました。",
          "romaji": "Kono ふく no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Admit, Clothing' well.",
          "indonesian": "Saya memahami arti dari 'Pakaian' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに服を書いて練習します。",
          "furigana": "[まいにち]ノートに服を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ふく o kaite renshuu shimasu.",
          "english": "I practice writing 'Admit, Clothing' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Pakaian' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は服の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は服の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ふく no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Admit, Clothing'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Pakaian'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で服の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で服の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ふく no mondai ga demashita.",
          "english": "A question about 'Admit, Clothing' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Pakaian' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  258: [
      {
          "sentence": "この林の意味をよく理解しました。",
          "furigana": "この林[いみ]をよく[りかい]しました。",
          "romaji": "Kono はやし no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Forest, Grove' well.",
          "indonesian": "Saya memahami arti dari 'Hutan Kecil' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに林を書いて練習します。",
          "furigana": "[まいにち]ノートに林を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はやし o kaite renshuu shimasu.",
          "english": "I practice writing 'Forest, Grove' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Hutan Kecil' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は林の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は林の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はやし no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Forest, Grove'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Hutan Kecil'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で林の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で林の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はやし no mondai ga demashita.",
          "english": "A question about 'Forest, Grove' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Hutan Kecil' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  259: [
      {
          "sentence": "この森の意味をよく理解しました。",
          "furigana": "この森[いみ]をよく[りかい]しました。",
          "romaji": "Kono もり no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Forest, Woods' well.",
          "indonesian": "Saya memahami arti dari 'Hutan Lebat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに森を書いて練習します。",
          "furigana": "[まいにち]ノートに森を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni もり o kaite renshuu shimasu.",
          "english": "I practice writing 'Forest, Woods' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Hutan Lebat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は森の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は森の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa もり no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Forest, Woods'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Hutan Lebat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で森の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で森の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de もり no mondai ga demashita.",
          "english": "A question about 'Forest, Woods' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Hutan Lebat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  260: [
      {
          "sentence": "この業の意味をよく理解しました。",
          "furigana": "この業[いみ]をよく[りかい]しました。",
          "romaji": "Kono ぎょう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Arts, Business' well.",
          "indonesian": "Saya memahami arti dari 'Bisnis / Pekerjaan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに業を書いて練習します。",
          "furigana": "[まいにち]ノートに業を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ぎょう o kaite renshuu shimasu.",
          "english": "I practice writing 'Arts, Business' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bisnis / Pekerjaan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は業の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は業の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ぎょう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Arts, Business'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bisnis / Pekerjaan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で業の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で業の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ぎょう no mondai ga demashita.",
          "english": "A question about 'Arts, Business' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bisnis / Pekerjaan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  261: [
      {
          "sentence": "この正の意味をよく理解しました。",
          "furigana": "この正[いみ]をよく[りかい]しました。",
          "romaji": "Kono ただ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '10**40, Correct' well.",
          "indonesian": "Saya memahami arti dari 'Benar / Tepat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに正を書いて練習します。",
          "furigana": "[まいにち]ノートに正を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ただ o kaite renshuu shimasu.",
          "english": "I practice writing '10**40, Correct' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Benar / Tepat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は正の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は正の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ただ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '10**40, Correct'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Benar / Tepat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で正の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で正の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ただ no mondai ga demashita.",
          "english": "A question about '10**40, Correct' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Benar / Tepat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  262: [
      {
          "sentence": "この死の意味をよく理解しました。",
          "furigana": "この死[いみ]をよく[りかい]しました。",
          "romaji": "Kono し no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Death, Die' well.",
          "indonesian": "Saya memahami arti dari 'Mati / Kematian' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに死を書いて練習します。",
          "furigana": "[まいにち]ノートに死を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni し o kaite renshuu shimasu.",
          "english": "I practice writing 'Death, Die' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Mati / Kematian' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は死の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は死の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa し no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Death, Die'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Mati / Kematian'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で死の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で死の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de し no mondai ga demashita.",
          "english": "A question about 'Death, Die' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Mati / Kematian' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  263: [
      {
          "sentence": "この毎の意味をよく理解しました。",
          "furigana": "この毎[いみ]をよく[りかい]しました。",
          "romaji": "Kono まい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Every' well.",
          "indonesian": "Saya memahami arti dari 'Setiap' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに毎を書いて練習します。",
          "furigana": "[まいにち]ノートに毎を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni まい o kaite renshuu shimasu.",
          "english": "I practice writing 'Every' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Setiap' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は毎の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は毎の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa まい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Every'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Setiap'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で毎の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で毎の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de まい no mondai ga demashita.",
          "english": "A question about 'Every' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Setiap' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  264: [
      {
          "sentence": "この毛の意味をよく理解しました。",
          "furigana": "この毛[いみ]をよく[りかい]しました。",
          "romaji": "Kono け no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Down, Feather' well.",
          "indonesian": "Saya memahami arti dari 'Bulu / Rambut' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに毛を書いて練習します。",
          "furigana": "[まいにち]ノートに毛を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni け o kaite renshuu shimasu.",
          "english": "I practice writing 'Down, Feather' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bulu / Rambut' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は毛の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は毛の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa け no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Down, Feather'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bulu / Rambut'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で毛の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で毛の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de け no mondai ga demashita.",
          "english": "A question about 'Down, Feather' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bulu / Rambut' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  265: [
      {
          "sentence": "この汽の意味をよく理解しました。",
          "furigana": "この汽[いみ]をよく[りかい]しました。",
          "romaji": "Kono き no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Steam, Vapor' well.",
          "indonesian": "Saya memahami arti dari 'Uap Air' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに汽を書いて練習します。",
          "furigana": "[まいにち]ノートに汽を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni き o kaite renshuu shimasu.",
          "english": "I practice writing 'Steam, Vapor' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Uap Air' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は汽の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は汽の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa き no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Steam, Vapor'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Uap Air'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で汽の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で汽の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de き no mondai ga demashita.",
          "english": "A question about 'Steam, Vapor' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Uap Air' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  266: [
      {
          "sentence": "この治の意味をよく理解しました。",
          "furigana": "この治[いみ]をよく[りかい]しました。",
          "romaji": "Kono おさ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Be At Peace, Calm Down' well.",
          "indonesian": "Saya memahami arti dari 'Menyembuhkan / Memerintah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに治を書いて練習します。",
          "furigana": "[まいにち]ノートに治を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おさ o kaite renshuu shimasu.",
          "english": "I practice writing 'Be At Peace, Calm Down' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menyembuhkan / Memerintah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は治の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は治の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おさ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Be At Peace, Calm Down'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menyembuhkan / Memerintah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で治の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で治の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おさ no mondai ga demashita.",
          "english": "A question about 'Be At Peace, Calm Down' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menyembuhkan / Memerintah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  267: [
      {
          "sentence": "この注の意味をよく理解しました。",
          "furigana": "この注[いみ]をよく[りかい]しました。",
          "romaji": "Kono そそ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Annotate, Comment' well.",
          "indonesian": "Saya memahami arti dari 'Menuangkan / Memperhatikan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに注を書いて練習します。",
          "furigana": "[まいにち]ノートに注を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni そそ o kaite renshuu shimasu.",
          "english": "I practice writing 'Annotate, Comment' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menuangkan / Memperhatikan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は注の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は注の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa そそ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Annotate, Comment'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menuangkan / Memperhatikan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で注の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で注の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de そそ no mondai ga demashita.",
          "english": "A question about 'Annotate, Comment' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menuangkan / Memperhatikan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  268: [
      {
          "sentence": "この活の意味をよく理解しました。",
          "furigana": "この活[いみ]をよく[りかい]しました。",
          "romaji": "Kono かつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Being Helped, Lively' well.",
          "indonesian": "Saya memahami arti dari 'Hidup / Aktif' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに活を書いて練習します。",
          "furigana": "[まいにち]ノートに活を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Being Helped, Lively' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Hidup / Aktif' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は活の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は活の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Being Helped, Lively'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Hidup / Aktif'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で活の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で活の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かつ no mondai ga demashita.",
          "english": "A question about 'Being Helped, Lively' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Hidup / Aktif' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  269: [
      {
          "sentence": "この点の意味をよく理解しました。",
          "furigana": "この点[いみ]をよく[りかい]しました。",
          "romaji": "Kono てん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Decimal Point, Mark' well.",
          "indonesian": "Saya memahami arti dari 'Titik / Nilai / Poin' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに点を書いて練習します。",
          "furigana": "[まいにち]ノートに点を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni てん o kaite renshuu shimasu.",
          "english": "I practice writing 'Decimal Point, Mark' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Titik / Nilai / Poin' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は点の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は点の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa てん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Decimal Point, Mark'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Titik / Nilai / Poin'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で点の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で点の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de てん no mondai ga demashita.",
          "english": "A question about 'Decimal Point, Mark' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Titik / Nilai / Poin' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  270: [
      {
          "sentence": "この物の意味をよく理解しました。",
          "furigana": "この物[いみ]をよく[りかい]しました。",
          "romaji": "Kono もの no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Matter, Object' well.",
          "indonesian": "Saya memahami arti dari 'Barang / Benda' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに物を書いて練習します。",
          "furigana": "[まいにち]ノートに物を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni もの o kaite renshuu shimasu.",
          "english": "I practice writing 'Matter, Object' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Barang / Benda' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は物の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は物の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa もの no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Matter, Object'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Barang / Benda'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で物の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で物の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de もの no mondai ga demashita.",
          "english": "A question about 'Matter, Object' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Barang / Benda' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  271: [
      {
          "sentence": "この特の意味をよく理解しました。",
          "furigana": "この特[いみ]をよく[りかい]しました。",
          "romaji": "Kono とく no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Special' well.",
          "indonesian": "Saya memahami arti dari 'Khusus / Istimewa' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに特を書いて練習します。",
          "furigana": "[まいにち]ノートに特を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni とく o kaite renshuu shimasu.",
          "english": "I practice writing 'Special' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Khusus / Istimewa' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は特の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は特の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa とく no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Special'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Khusus / Istimewa'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で特の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で特の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de とく no mondai ga demashita.",
          "english": "A question about 'Special' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Khusus / Istimewa' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  272: [
      {
          "sentence": "この玉の意味をよく理解しました。",
          "furigana": "この玉[いみ]をよく[りかい]しました。",
          "romaji": "Kono たま no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Ball, Jewel' well.",
          "indonesian": "Saya memahami arti dari 'Bola / Permata' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに玉を書いて練習します。",
          "furigana": "[まいにち]ノートに玉を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni たま o kaite renshuu shimasu.",
          "english": "I practice writing 'Ball, Jewel' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bola / Permata' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は玉の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は玉の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa たま no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Ball, Jewel'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bola / Permata'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で玉の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で玉の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de たま no mondai ga demashita.",
          "english": "A question about 'Ball, Jewel' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bola / Permata' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  273: [
      {
          "sentence": "この王の意味をよく理解しました。",
          "furigana": "この王[いみ]をよく[りかい]しました。",
          "romaji": "Kono おう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'King, Magnate' well.",
          "indonesian": "Saya memahami arti dari 'Raja' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに王を書いて練習します。",
          "furigana": "[まいにち]ノートに王を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おう o kaite renshuu shimasu.",
          "english": "I practice writing 'King, Magnate' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Raja' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は王の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は王の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'King, Magnate'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Raja'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で王の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で王の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おう no mondai ga demashita.",
          "english": "A question about 'King, Magnate' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Raja' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  274: [
      {
          "sentence": "この理の意味をよく理解しました。",
          "furigana": "この理[いみ]をよく[りかい]しました。",
          "romaji": "Kono り no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Arrangement, Justice' well.",
          "indonesian": "Saya memahami arti dari 'Alasan / Teori / Logika' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに理を書いて練習します。",
          "furigana": "[まいにち]ノートに理を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni り o kaite renshuu shimasu.",
          "english": "I practice writing 'Arrangement, Justice' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Alasan / Teori / Logika' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は理の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は理の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa り no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Arrangement, Justice'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Alasan / Teori / Logika'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で理の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で理の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de り no mondai ga demashita.",
          "english": "A question about 'Arrangement, Justice' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Alasan / Teori / Logika' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  275: [
      {
          "sentence": "この産の意味をよく理解しました。",
          "furigana": "この産[いみ]をよく[りかい]しました。",
          "romaji": "Kono さん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bear, Childbirth' well.",
          "indonesian": "Saya memahami arti dari 'Melahirkan / Produksi' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに産を書いて練習します。",
          "furigana": "[まいにち]ノートに産を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni さん o kaite renshuu shimasu.",
          "english": "I practice writing 'Bear, Childbirth' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Melahirkan / Produksi' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は産の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は産の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa さん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bear, Childbirth'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Melahirkan / Produksi'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で産の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で産の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de さん no mondai ga demashita.",
          "english": "A question about 'Bear, Childbirth' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Melahirkan / Produksi' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  276: [
      {
          "sentence": "この用の意味をよく理解しました。",
          "furigana": "この用[いみ]をよく[りかい]しました。",
          "romaji": "Kono もち no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Business, Employ' well.",
          "indonesian": "Saya memahami arti dari 'Menggunakan / Keperluan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに用を書いて練習します。",
          "furigana": "[まいにち]ノートに用を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni もち o kaite renshuu shimasu.",
          "english": "I practice writing 'Business, Employ' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menggunakan / Keperluan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は用の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は用の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa もち no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Business, Employ'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menggunakan / Keperluan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で用の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で用の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de もち no mondai ga demashita.",
          "english": "A question about 'Business, Employ' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menggunakan / Keperluan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  277: [
      {
          "sentence": "この界の意味をよく理解しました。",
          "furigana": "この界[いみ]をよく[りかい]しました。",
          "romaji": "Kono かい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Boundary, World' well.",
          "indonesian": "Saya memahami arti dari 'Dunia / Batas' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに界を書いて練習します。",
          "furigana": "[まいにち]ノートに界を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かい o kaite renshuu shimasu.",
          "english": "I practice writing 'Boundary, World' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Dunia / Batas' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は界の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は界の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Boundary, World'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Dunia / Batas'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で界の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で界の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かい no mondai ga demashita.",
          "english": "A question about 'Boundary, World' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Dunia / Batas' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  278: [
      {
          "sentence": "この番の意味をよく理解しました。",
          "furigana": "この番[いみ]をよく[りかい]しました。",
          "romaji": "Kono ばん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Number In A Series, Turn' well.",
          "indonesian": "Saya memahami arti dari 'Nomor / Giliran' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに番を書いて練習します。",
          "furigana": "[まいにち]ノートに番を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ばん o kaite renshuu shimasu.",
          "english": "I practice writing 'Number In A Series, Turn' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Nomor / Giliran' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は番の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は番の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ばん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Number In A Series, Turn'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Nomor / Giliran'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で番の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で番の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ばん no mondai ga demashita.",
          "english": "A question about 'Number In A Series, Turn' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Nomor / Giliran' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  279: [
      {
          "sentence": "この発の意味をよく理解しました。",
          "furigana": "この発[いみ]をよく[りかい]しました。",
          "romaji": "Kono はつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Counter For Gunshots, Departure' well.",
          "indonesian": "Saya memahami arti dari 'Berangkat / Menerbitkan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに発を書いて練習します。",
          "furigana": "[まいにち]ノートに発を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Counter For Gunshots, Departure' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Berangkat / Menerbitkan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は発の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は発の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Counter For Gunshots, Departure'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Berangkat / Menerbitkan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で発の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で発の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はつ no mondai ga demashita.",
          "english": "A question about 'Counter For Gunshots, Departure' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Berangkat / Menerbitkan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  280: [
      {
          "sentence": "この的の意味をよく理解しました。",
          "furigana": "この的[いみ]をよく[りかい]しました。",
          "romaji": "Kono てき no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Adjective Ending, Bull'S Eye' well.",
          "indonesian": "Saya memahami arti dari 'Target / Bersifat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに的を書いて練習します。",
          "furigana": "[まいにち]ノートに的を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni てき o kaite renshuu shimasu.",
          "english": "I practice writing 'Adjective Ending, Bull'S Eye' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Target / Bersifat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は的の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は的の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa てき no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Adjective Ending, Bull'S Eye'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Target / Bersifat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で的の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で的の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de てき no mondai ga demashita.",
          "english": "A question about 'Adjective Ending, Bull'S Eye' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Target / Bersifat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  281: [
      {
          "sentence": "この直の意味をよく理解しました。",
          "furigana": "この直[いみ]をよく[りかい]しました。",
          "romaji": "Kono なお no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Fix, Frankness' well.",
          "indonesian": "Saya memahami arti dari 'Lurus / Memperbaiki' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに直を書いて練習します。",
          "furigana": "[まいにち]ノートに直を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni なお o kaite renshuu shimasu.",
          "english": "I practice writing 'Fix, Frankness' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Lurus / Memperbaiki' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は直の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は直の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa なお no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Fix, Frankness'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Lurus / Memperbaiki'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で直の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で直の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de なお no mondai ga demashita.",
          "english": "A question about 'Fix, Frankness' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Lurus / Memperbaiki' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  282: [
      {
          "sentence": "この真の意味をよく理解しました。",
          "furigana": "この真[いみ]をよく[りかい]しました。",
          "romaji": "Kono ま no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Buddhist Sect, Reality' well.",
          "indonesian": "Saya memahami arti dari 'Sungguh-sungguh / Kebenaran' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに真を書いて練習します。",
          "furigana": "[まいにち]ノートに真を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ま o kaite renshuu shimasu.",
          "english": "I practice writing 'Buddhist Sect, Reality' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Sungguh-sungguh / Kebenaran' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は真の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は真の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ま no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Buddhist Sect, Reality'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Sungguh-sungguh / Kebenaran'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で真の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で真の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ま no mondai ga demashita.",
          "english": "A question about 'Buddhist Sect, Reality' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Sungguh-sungguh / Kebenaran' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  283: [
      {
          "sentence": "この着の意味をよく理解しました。",
          "furigana": "この着[いみ]をよく[りかい]しました。",
          "romaji": "Kono つ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Arrive, Counter For Suits Of Clothing' well.",
          "indonesian": "Saya memahami arti dari 'Tiba / Memakai Baju' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに着を書いて練習します。",
          "furigana": "[まいにち]ノートに着を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni つ o kaite renshuu shimasu.",
          "english": "I practice writing 'Arrive, Counter For Suits Of Clothing' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Tiba / Memakai Baju' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は着の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は着の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa つ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Arrive, Counter For Suits Of Clothing'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Tiba / Memakai Baju'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で着の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で着の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de つ no mondai ga demashita.",
          "english": "A question about 'Arrive, Counter For Suits Of Clothing' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Tiba / Memakai Baju' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  284: [
      {
          "sentence": "この矢の意味をよく理解しました。",
          "furigana": "この矢[いみ]をよく[りかい]しました。",
          "romaji": "Kono や no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Arrow, Dart' well.",
          "indonesian": "Saya memahami arti dari 'Anak Panah' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに矢を書いて練習します。",
          "furigana": "[まいにち]ノートに矢を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni や o kaite renshuu shimasu.",
          "english": "I practice writing 'Arrow, Dart' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Anak Panah' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は矢の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は矢の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa や no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Arrow, Dart'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Anak Panah'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で矢の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で矢の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de や no mondai ga demashita.",
          "english": "A question about 'Arrow, Dart' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Anak Panah' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  285: [
      {
          "sentence": "この私の意味をよく理解しました。",
          "furigana": "この私[いみ]をよく[りかい]しました。",
          "romaji": "Kono わたし no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'I, Me' well.",
          "indonesian": "Saya memahami arti dari 'Saya / Pribadi' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに私を書いて練習します。",
          "furigana": "[まいにち]ノートに私を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni わたし o kaite renshuu shimasu.",
          "english": "I practice writing 'I, Me' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Saya / Pribadi' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は私の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は私の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa わたし no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'I, Me'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Saya / Pribadi'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で私の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で私の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de わたし no mondai ga demashita.",
          "english": "A question about 'I, Me' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Saya / Pribadi' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  286: [
      {
          "sentence": "この科の意味をよく理解しました。",
          "furigana": "この科[いみ]をよく[りかい]しました。",
          "romaji": "Kono か no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Course, Department' well.",
          "indonesian": "Saya memahami arti dari 'Jurusan / Sains' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに科を書いて練習します。",
          "furigana": "[まいにち]ノートに科を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni か o kaite renshuu shimasu.",
          "english": "I practice writing 'Course, Department' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Jurusan / Sains' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は科の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は科の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa か no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Course, Department'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Jurusan / Sains'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で科の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で科の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de か no mondai ga demashita.",
          "english": "A question about 'Course, Department' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Jurusan / Sains' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  287: [
      {
          "sentence": "この竹の意味をよく理解しました。",
          "furigana": "この竹[いみ]をよく[りかい]しました。",
          "romaji": "Kono たけ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bamboo' well.",
          "indonesian": "Saya memahami arti dari 'Bambu' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに竹を書いて練習します。",
          "furigana": "[まいにち]ノートに竹を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni たけ o kaite renshuu shimasu.",
          "english": "I practice writing 'Bamboo' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bambu' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は竹の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は竹の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa たけ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bamboo'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bambu'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で竹の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で竹の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de たけ no mondai ga demashita.",
          "english": "A question about 'Bamboo' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bambu' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  288: [
      {
          "sentence": "この答の意味をよく理解しました。",
          "furigana": "この答[いみ]をよく[りかい]しました。",
          "romaji": "Kono こた no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Answer, Solution' well.",
          "indonesian": "Saya memahami arti dari 'Jawaban / Menjawab' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに答を書いて練習します。",
          "furigana": "[まいにち]ノートに答を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni こた o kaite renshuu shimasu.",
          "english": "I practice writing 'Answer, Solution' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Jawaban / Menjawab' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は答の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は答の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa こた no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Answer, Solution'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Jawaban / Menjawab'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で答の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で答の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de こた no mondai ga demashita.",
          "english": "A question about 'Answer, Solution' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Jawaban / Menjawab' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  289: [
      {
          "sentence": "この算の意味をよく理解しました。",
          "furigana": "この算[いみ]をよく[りかい]しました。",
          "romaji": "Kono さん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Abacus, Calculate' well.",
          "indonesian": "Saya memahami arti dari 'Menghitung / Kalkulasi' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに算を書いて練習します。",
          "furigana": "[まいにち]ノートに算を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni さん o kaite renshuu shimasu.",
          "english": "I practice writing 'Abacus, Calculate' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Menghitung / Kalkulasi' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は算の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は算の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa さん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Abacus, Calculate'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Menghitung / Kalkulasi'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で算の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で算の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de さん no mondai ga demashita.",
          "english": "A question about 'Abacus, Calculate' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Menghitung / Kalkulasi' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  290: [
      {
          "sentence": "この米の意味をよく理解しました。",
          "furigana": "この米[いみ]をよく[りかい]しました。",
          "romaji": "Kono こめ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Usa, Metre' well.",
          "indonesian": "Saya memahami arti dari 'Beras / Amerika' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに米を書いて練習します。",
          "furigana": "[まいにち]ノートに米を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni こめ o kaite renshuu shimasu.",
          "english": "I practice writing 'Usa, Metre' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Beras / Amerika' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は米の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は米の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa こめ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Usa, Metre'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Beras / Amerika'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で米の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で米の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de こめ no mondai ga demashita.",
          "english": "A question about 'Usa, Metre' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Beras / Amerika' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  291: [
      {
          "sentence": "この糸の意味をよく理解しました。",
          "furigana": "この糸[いみ]をよく[りかい]しました。",
          "romaji": "Kono いと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Thread' well.",
          "indonesian": "Saya memahami arti dari 'Benang' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに糸を書いて練習します。",
          "furigana": "[まいにち]ノートに糸を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni いと o kaite renshuu shimasu.",
          "english": "I practice writing 'Thread' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Benang' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は糸の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は糸の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa いと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Thread'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Benang'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で糸の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で糸の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de いと no mondai ga demashita.",
          "english": "A question about 'Thread' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Benang' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  292: [
      {
          "sentence": "この紙の意味をよく理解しました。",
          "furigana": "この紙[いみ]をよく[りかい]しました。",
          "romaji": "Kono かみ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Paper' well.",
          "indonesian": "Saya memahami arti dari 'Kertas' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに紙を書いて練習します。",
          "furigana": "[まいにち]ノートに紙を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かみ o kaite renshuu shimasu.",
          "english": "I practice writing 'Paper' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kertas' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は紙の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は紙の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かみ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Paper'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kertas'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で紙の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で紙の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かみ no mondai ga demashita.",
          "english": "A question about 'Paper' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kertas' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  293: [
      {
          "sentence": "この細の意味をよく理解しました。",
          "furigana": "この細[いみ]をよく[りかい]しました。",
          "romaji": "Kono ほそ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Dainty, Detailed' well.",
          "indonesian": "Saya memahami arti dari 'Halus / Ramping / Sempit' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに細を書いて練習します。",
          "furigana": "[まいにち]ノートに細を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ほそ o kaite renshuu shimasu.",
          "english": "I practice writing 'Dainty, Detailed' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Halus / Ramping / Sempit' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は細の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は細の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ほそ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Dainty, Detailed'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Halus / Ramping / Sempit'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で細の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で細の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ほそ no mondai ga demashita.",
          "english": "A question about 'Dainty, Detailed' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Halus / Ramping / Sempit' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  294: [
      {
          "sentence": "この終の意味をよく理解しました。",
          "furigana": "この終[いみ]をよく[りかい]しました。",
          "romaji": "Kono お no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'End, Finish' well.",
          "indonesian": "Saya memahami arti dari 'Selesai / Berakhir' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに終を書いて練習します。",
          "furigana": "[まいにち]ノートに終を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni お o kaite renshuu shimasu.",
          "english": "I practice writing 'End, Finish' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Selesai / Berakhir' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は終の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は終の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa お no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'End, Finish'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Selesai / Berakhir'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で終の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で終の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de お no mondai ga demashita.",
          "english": "A question about 'End, Finish' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Selesai / Berakhir' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  295: [
      {
          "sentence": "この組の意味をよく理解しました。",
          "furigana": "この組[いみ]をよく[りかい]しました。",
          "romaji": "Kono くみ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Assemble, Association' well.",
          "indonesian": "Saya memahami arti dari 'Kelompok / Merakit' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに組を書いて練習します。",
          "furigana": "[まいにち]ノートに組を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni くみ o kaite renshuu shimasu.",
          "english": "I practice writing 'Assemble, Association' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kelompok / Merakit' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は組の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は組の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa くみ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Assemble, Association'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kelompok / Merakit'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で組の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で組の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de くみ no mondai ga demashita.",
          "english": "A question about 'Assemble, Association' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kelompok / Merakit' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  296: [
      {
          "sentence": "この絵の意味をよく理解しました。",
          "furigana": "この絵[いみ]をよく[りかい]しました。",
          "romaji": "Kono え no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Drawing, Painting' well.",
          "indonesian": "Saya memahami arti dari 'Lukisan / Gambar' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに絵を書いて練習します。",
          "furigana": "[まいにち]ノートに絵を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni え o kaite renshuu shimasu.",
          "english": "I practice writing 'Drawing, Painting' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Lukisan / Gambar' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は絵の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は絵の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa え no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Drawing, Painting'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Lukisan / Gambar'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で絵の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で絵の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de え no mondai ga demashita.",
          "english": "A question about 'Drawing, Painting' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Lukisan / Gambar' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  297: [
      {
          "sentence": "この線の意味をよく理解しました。",
          "furigana": "この線[いみ]をよく[りかい]しました。",
          "romaji": "Kono せん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Line, Track' well.",
          "indonesian": "Saya memahami arti dari 'Garis / Jalur' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに線を書いて練習します。",
          "furigana": "[まいにち]ノートに線を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni せん o kaite renshuu shimasu.",
          "english": "I practice writing 'Line, Track' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Garis / Jalur' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は線の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は線の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa せん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Line, Track'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Garis / Jalur'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で線の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で線の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de せん no mondai ga demashita.",
          "english": "A question about 'Line, Track' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Garis / Jalur' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  298: [
      {
          "sentence": "この羽の意味をよく理解しました。",
          "furigana": "この羽[いみ]をよく[りかい]しました。",
          "romaji": "Kono はね no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Counter For Birds, Rabbits, Feathers' well.",
          "indonesian": "Saya memahami arti dari 'Bulu Sayap / Penghitung Burung' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに羽を書いて練習します。",
          "furigana": "[まいにち]ノートに羽を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はね o kaite renshuu shimasu.",
          "english": "I practice writing 'Counter For Birds, Rabbits, Feathers' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bulu Sayap / Penghitung Burung' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は羽の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は羽の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はね no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Counter For Birds, Rabbits, Feathers'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bulu Sayap / Penghitung Burung'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で羽の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で羽の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はね no mondai ga demashita.",
          "english": "A question about 'Counter For Birds, Rabbits, Feathers' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bulu Sayap / Penghitung Burung' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  299: [
      {
          "sentence": "この自の意味をよく理解しました。",
          "furigana": "この自[いみ]をよく[りかい]しました。",
          "romaji": "Kono じ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Oneself' well.",
          "indonesian": "Saya memahami arti dari 'Diri Sendiri' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに自を書いて練習します。",
          "furigana": "[まいにち]ノートに自を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni じ o kaite renshuu shimasu.",
          "english": "I practice writing 'Oneself' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Diri Sendiri' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は自の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は自の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa じ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Oneself'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Diri Sendiri'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で自の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で自の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de じ no mondai ga demashita.",
          "english": "A question about 'Oneself' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Diri Sendiri' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  300: [
      {
          "sentence": "この船の意味をよく理解しました。",
          "furigana": "この船[いみ]をよく[りかい]しました。",
          "romaji": "Kono ふね no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Boat, Ship' well.",
          "indonesian": "Saya memahami arti dari 'Kapal Laut' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに船を書いて練習します。",
          "furigana": "[まいにち]ノートに船を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ふね o kaite renshuu shimasu.",
          "english": "I practice writing 'Boat, Ship' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kapal Laut' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は船の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は船の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ふね no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Boat, Ship'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kapal Laut'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で船の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で船の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ふね no mondai ga demashita.",
          "english": "A question about 'Boat, Ship' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kapal Laut' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  301: [
      {
          "sentence": "この色の意味をよく理解しました。",
          "furigana": "この色[いみ]をよく[りかい]しました。",
          "romaji": "Kono いろ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Color' well.",
          "indonesian": "Saya memahami arti dari 'Warna' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに色を書いて練習します。",
          "furigana": "[まいにち]ノートに色を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni いろ o kaite renshuu shimasu.",
          "english": "I practice writing 'Color' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Warna' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は色の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は色の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa いろ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Color'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Warna'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で色の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で色の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de いろ no mondai ga demashita.",
          "english": "A question about 'Color' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Warna' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  302: [
      {
          "sentence": "この英の意味をよく理解しました。",
          "furigana": "この英[いみ]をよく[りかい]しました。",
          "romaji": "Kono えい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'England, English' well.",
          "indonesian": "Saya memahami arti dari 'Inggris / Unggul' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに英を書いて練習します。",
          "furigana": "[まいにち]ノートに英を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni えい o kaite renshuu shimasu.",
          "english": "I practice writing 'England, English' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Inggris / Unggul' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は英の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は英の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa えい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'England, English'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Inggris / Unggul'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で英の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で英の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de えい no mondai ga demashita.",
          "english": "A question about 'England, English' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Inggris / Unggul' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  303: [
      {
          "sentence": "この茶の意味をよく理解しました。",
          "furigana": "この茶[いみ]をよく[りかい]しました。",
          "romaji": "Kono ちゃ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Tea' well.",
          "indonesian": "Saya memahami arti dari 'Teh' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに茶を書いて練習します。",
          "furigana": "[まいにち]ノートに茶を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ちゃ o kaite renshuu shimasu.",
          "english": "I practice writing 'Tea' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Teh' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は茶の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は茶の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ちゃ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Tea'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Teh'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で茶の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で茶の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ちゃ no mondai ga demashita.",
          "english": "A question about 'Tea' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Teh' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  304: [
      {
          "sentence": "この草の意味をよく理解しました。",
          "furigana": "この草[いみ]をよく[りかい]しました。",
          "romaji": "Kono くさ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Draft, Grass' well.",
          "indonesian": "Saya memahami arti dari 'Rumput' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに草を書いて練習します。",
          "furigana": "[まいにち]ノートに草を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni くさ o kaite renshuu shimasu.",
          "english": "I practice writing 'Draft, Grass' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Rumput' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は草の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は草の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa くさ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Draft, Grass'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Rumput'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で草の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で草の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de くさ no mondai ga demashita.",
          "english": "A question about 'Draft, Grass' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Rumput' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  305: [
      {
          "sentence": "この虫の意味をよく理解しました。",
          "furigana": "この虫[いみ]をよく[りかい]しました。",
          "romaji": "Kono むし no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bug, Insect' well.",
          "indonesian": "Saya memahami arti dari 'Serangga' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに虫を書いて練習します。",
          "furigana": "[まいにち]ノートに虫を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni むし o kaite renshuu shimasu.",
          "english": "I practice writing 'Bug, Insect' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Serangga' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は虫の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は虫の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa むし no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bug, Insect'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Serangga'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で虫の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で虫の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de むし no mondai ga demashita.",
          "english": "A question about 'Bug, Insect' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Serangga' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  306: [
      {
          "sentence": "この親の意味をよく理解しました。",
          "furigana": "この親[いみ]をよく[りかい]しました。",
          "romaji": "Kono おや no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Dealer (Cards), Familiarity' well.",
          "indonesian": "Saya memahami arti dari 'Orang Tua / Akrab' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに親を書いて練習します。",
          "furigana": "[まいにち]ノートに親を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おや o kaite renshuu shimasu.",
          "english": "I practice writing 'Dealer (Cards), Familiarity' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Orang Tua / Akrab' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は親の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は親の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おや no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Dealer (Cards), Familiarity'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Orang Tua / Akrab'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で親の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で親の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おや no mondai ga demashita.",
          "english": "A question about 'Dealer (Cards), Familiarity' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Orang Tua / Akrab' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  307: [
      {
          "sentence": "この角の意味をよく理解しました。",
          "furigana": "この角[いみ]をよく[りかい]しました。",
          "romaji": "Kono かど no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Angle, Antlers' well.",
          "indonesian": "Saya memahami arti dari 'Sudut / Tanduk' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに角を書いて練習します。",
          "furigana": "[まいにち]ノートに角を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かど o kaite renshuu shimasu.",
          "english": "I practice writing 'Angle, Antlers' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Sudut / Tanduk' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は角の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は角の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かど no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Angle, Antlers'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Sudut / Tanduk'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で角の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で角の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かど no mondai ga demashita.",
          "english": "A question about 'Angle, Antlers' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Sudut / Tanduk' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  308: [
      {
          "sentence": "この計の意味をよく理解しました。",
          "furigana": "この計[いみ]をよく[りかい]しました。",
          "romaji": "Kono はか no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Measure, Plan' well.",
          "indonesian": "Saya memahami arti dari 'Rencana / Mengukur' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに計を書いて練習します。",
          "furigana": "[まいにち]ノートに計を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はか o kaite renshuu shimasu.",
          "english": "I practice writing 'Measure, Plan' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Rencana / Mengukur' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は計の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は計の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はか no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Measure, Plan'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Rencana / Mengukur'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で計の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で計の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はか no mondai ga demashita.",
          "english": "A question about 'Measure, Plan' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Rencana / Mengukur' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  309: [
      {
          "sentence": "この記の意味をよく理解しました。",
          "furigana": "この記[いみ]をよく[りかい]しました。",
          "romaji": "Kono しる no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Account, Narrative' well.",
          "indonesian": "Saya memahami arti dari 'Mencatat / Artikel' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに記を書いて練習します。",
          "furigana": "[まいにち]ノートに記を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni しる o kaite renshuu shimasu.",
          "english": "I practice writing 'Account, Narrative' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Mencatat / Artikel' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は記の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は記の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa しる no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Account, Narrative'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Mencatat / Artikel'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で記の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で記の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de しる no mondai ga demashita.",
          "english": "A question about 'Account, Narrative' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Mencatat / Artikel' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  310: [
      {
          "sentence": "この貝の意味をよく理解しました。",
          "furigana": "この貝[いみ]をよく[りかい]しました。",
          "romaji": "Kono かい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Shellfish' well.",
          "indonesian": "Saya memahami arti dari 'Kerang' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに貝を書いて練習します。",
          "furigana": "[まいにち]ノートに貝を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かい o kaite renshuu shimasu.",
          "english": "I practice writing 'Shellfish' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kerang' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は貝の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は貝の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Shellfish'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kerang'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で貝の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で貝の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かい no mondai ga demashita.",
          "english": "A question about 'Shellfish' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kerang' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  311: [
      {
          "sentence": "この質の意味をよく理解しました。",
          "furigana": "この質[いみ]をよく[りかい]しました。",
          "romaji": "Kono しつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Matter, Quality' well.",
          "indonesian": "Saya memahami arti dari 'Kualitas / Pertanyaan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに質を書いて練習します。",
          "furigana": "[まいにち]ノートに質を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni しつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Matter, Quality' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Kualitas / Pertanyaan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は質の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は質の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa しつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Matter, Quality'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Kualitas / Pertanyaan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で質の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で質の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de しつ no mondai ga demashita.",
          "english": "A question about 'Matter, Quality' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Kualitas / Pertanyaan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  312: [
      {
          "sentence": "この週の意味をよく理解しました。",
          "furigana": "この週[いみ]をよく[りかい]しました。",
          "romaji": "Kono しゅう no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Week' well.",
          "indonesian": "Saya memahami arti dari 'Minggu (Pekan)' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに週を書いて練習します。",
          "furigana": "[まいにち]ノートに週を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni しゅう o kaite renshuu shimasu.",
          "english": "I practice writing 'Week' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Minggu (Pekan)' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は週の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は週の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa しゅう no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Week'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Minggu (Pekan)'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で週の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で週の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de しゅう no mondai ga demashita.",
          "english": "A question about 'Week' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Minggu (Pekan)' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  313: [
      {
          "sentence": "この達の意味をよく理解しました。",
          "furigana": "この達[いみ]をよく[りかい]しました。",
          "romaji": "Kono たち no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Accomplished, Arrive' well.",
          "indonesian": "Saya memahami arti dari 'Mencapai / Jamak' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに達を書いて練習します。",
          "furigana": "[まいにち]ノートに達を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni たち o kaite renshuu shimasu.",
          "english": "I practice writing 'Accomplished, Arrive' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Mencapai / Jamak' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は達の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は達の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa たち no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Accomplished, Arrive'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Mencapai / Jamak'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で達の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で達の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de たち no mondai ga demashita.",
          "english": "A question about 'Accomplished, Arrive' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Mencapai / Jamak' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  314: [
      {
          "sentence": "この部の意味をよく理解しました。",
          "furigana": "この部[いみ]をよく[りかい]しました。",
          "romaji": "Kono ぶ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bureau, Class' well.",
          "indonesian": "Saya memahami arti dari 'Bagian / Bagian Klub' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに部を書いて練習します。",
          "furigana": "[まいにち]ノートに部を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ぶ o kaite renshuu shimasu.",
          "english": "I practice writing 'Bureau, Class' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bagian / Bagian Klub' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は部の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は部の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ぶ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bureau, Class'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bagian / Bagian Klub'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で部の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で部の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ぶ no mondai ga demashita.",
          "english": "A question about 'Bureau, Class' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bagian / Bagian Klub' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  315: [
      {
          "sentence": "この都の意味をよく理解しました。",
          "furigana": "この都[いみ]をよく[りかい]しました。",
          "romaji": "Kono と no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'All, Capital' well.",
          "indonesian": "Saya memahami arti dari 'Ibu Kota / Metropolitan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに都を書いて練習します。",
          "furigana": "[まいにち]ノートに都を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni と o kaite renshuu shimasu.",
          "english": "I practice writing 'All, Capital' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Ibu Kota / Metropolitan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は都の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は都の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa と no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'All, Capital'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Ibu Kota / Metropolitan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で都の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で都の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de と no mondai ga demashita.",
          "english": "A question about 'All, Capital' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Ibu Kota / Metropolitan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  316: [
      {
          "sentence": "この里の意味をよく理解しました。",
          "furigana": "この里[いみ]をよく[りかい]しました。",
          "romaji": "Kono さと no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'League, Parent'S Home' well.",
          "indonesian": "Saya memahami arti dari 'Desa Kampung' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに里を書いて練習します。",
          "furigana": "[まいにち]ノートに里を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni さと o kaite renshuu shimasu.",
          "english": "I practice writing 'League, Parent'S Home' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Desa Kampung' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は里の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は里の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa さと no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'League, Parent'S Home'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Desa Kampung'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で里の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で里の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de さと no mondai ga demashita.",
          "english": "A question about 'League, Parent'S Home' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Desa Kampung' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  317: [
      {
          "sentence": "この重の意味をよく理解しました。",
          "furigana": "この重[いみ]をよく[りかい]しました。",
          "romaji": "Kono おも no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this '-Fold, Esteem' well.",
          "indonesian": "Saya memahami arti dari 'Berat / Berlapis' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに重を書いて練習します。",
          "furigana": "[まいにち]ノートに重を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni おも o kaite renshuu shimasu.",
          "english": "I practice writing '-Fold, Esteem' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Berat / Berlapis' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は重の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は重の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa おも no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use '-Fold, Esteem'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Berat / Berlapis'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で重の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で重の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de おも no mondai ga demashita.",
          "english": "A question about '-Fold, Esteem' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Berat / Berlapis' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  318: [
      {
          "sentence": "この鉄の意味をよく理解しました。",
          "furigana": "この鉄[いみ]をよく[りかい]しました。",
          "romaji": "Kono てつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Iron' well.",
          "indonesian": "Saya memahami arti dari 'Besi' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに鉄を書いて練習します。",
          "furigana": "[まいにち]ノートに鉄を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni てつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Iron' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Besi' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は鉄の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は鉄の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa てつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Iron'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Besi'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で鉄の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で鉄の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de てつ no mondai ga demashita.",
          "english": "A question about 'Iron' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Besi' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  319: [
      {
          "sentence": "この銀の意味をよく理解しました。",
          "furigana": "この銀[いみ]をよく[りかい]しました。",
          "romaji": "Kono ぎん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Silver' well.",
          "indonesian": "Saya memahami arti dari 'Perak' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに銀を書いて練習します。",
          "furigana": "[まいにち]ノートに銀を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni ぎん o kaite renshuu shimasu.",
          "english": "I practice writing 'Silver' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Perak' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は銀の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は銀の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa ぎん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Silver'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Perak'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で銀の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で銀の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de ぎん no mondai ga demashita.",
          "english": "A question about 'Silver' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Perak' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  320: [
      {
          "sentence": "この間の意味をよく理解しました。",
          "furigana": "この間[いみ]をよく[りかい]しました。",
          "romaji": "Kono あいだ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Interval, Space' well.",
          "indonesian": "Saya memahami arti dari 'Antara / Jarak Waktu' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに間を書いて練習します。",
          "furigana": "[まいにち]ノートに間を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あいだ o kaite renshuu shimasu.",
          "english": "I practice writing 'Interval, Space' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Antara / Jarak Waktu' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は間の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は間の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あいだ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Interval, Space'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Antara / Jarak Waktu'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で間の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で間の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あいだ no mondai ga demashita.",
          "english": "A question about 'Interval, Space' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Antara / Jarak Waktu' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  321: [
      {
          "sentence": "この階の意味をよく理解しました。",
          "furigana": "この階[いみ]をよく[りかい]しました。",
          "romaji": "Kono かい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Counter For Storeys Of A Building, Stair' well.",
          "indonesian": "Saya memahami arti dari 'Lantai Tingkat' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに階を書いて練習します。",
          "furigana": "[まいにち]ノートに階を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かい o kaite renshuu shimasu.",
          "english": "I practice writing 'Counter For Storeys Of A Building, Stair' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Lantai Tingkat' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は階の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は階の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Counter For Storeys Of A Building, Stair'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Lantai Tingkat'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で階の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で階の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かい no mondai ga demashita.",
          "english": "A question about 'Counter For Storeys Of A Building, Stair' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Lantai Tingkat' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  322: [
      {
          "sentence": "この集の意味をよく理解しました。",
          "furigana": "この集[いみ]をよく[りかい]しました。",
          "romaji": "Kono あつ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Congregate, Flock' well.",
          "indonesian": "Saya memahami arti dari 'Berkumpul / Mengumpulkan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに集を書いて練習します。",
          "furigana": "[まいにち]ノートに集を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni あつ o kaite renshuu shimasu.",
          "english": "I practice writing 'Congregate, Flock' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Berkumpul / Mengumpulkan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は集の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は集の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa あつ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Congregate, Flock'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Berkumpul / Mengumpulkan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で集の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で集の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de あつ no mondai ga demashita.",
          "english": "A question about 'Congregate, Flock' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Berkumpul / Mengumpulkan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  323: [
      {
          "sentence": "この題の意味をよく理解しました。",
          "furigana": "この題[いみ]をよく[りかい]しました。",
          "romaji": "Kono だい no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Subject, Topic' well.",
          "indonesian": "Saya memahami arti dari 'Judul / Topik' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに題を書いて練習します。",
          "furigana": "[まいにち]ノートに題を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni だい o kaite renshuu shimasu.",
          "english": "I practice writing 'Subject, Topic' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Judul / Topik' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は題の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は題の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa だい no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Subject, Topic'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Judul / Topik'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で題の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で題の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de だい no mondai ga demashita.",
          "english": "A question about 'Subject, Topic' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Judul / Topik' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  324: [
      {
          "sentence": "この飯の意味をよく理解しました。",
          "furigana": "この飯[いみ]をよく[りかい]しました。",
          "romaji": "Kono はん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Boiled Rice, Meal' well.",
          "indonesian": "Saya memahami arti dari 'Nasi / Makanan' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに飯を書いて練習します。",
          "furigana": "[まいにち]ノートに飯を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni はん o kaite renshuu shimasu.",
          "english": "I practice writing 'Boiled Rice, Meal' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Nasi / Makanan' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は飯の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は飯の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa はん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Boiled Rice, Meal'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Nasi / Makanan'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で飯の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で飯の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de はん no mondai ga demashita.",
          "english": "A question about 'Boiled Rice, Meal' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Nasi / Makanan' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  325: [
      {
          "sentence": "この館の意味をよく理解しました。",
          "furigana": "この館[いみ]をよく[りかい]しました。",
          "romaji": "Kono かん no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Building, Large Building' well.",
          "indonesian": "Saya memahami arti dari 'Gedung Fasilitas' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに館を書いて練習します。",
          "furigana": "[まいにち]ノートに館を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni かん o kaite renshuu shimasu.",
          "english": "I practice writing 'Building, Large Building' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Gedung Fasilitas' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は館の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は館の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa かん no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Building, Large Building'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Gedung Fasilitas'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で館の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で館の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de かん no mondai ga demashita.",
          "english": "A question about 'Building, Large Building' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Gedung Fasilitas' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  326: [
      {
          "sentence": "この駅の意味をよく理解しました。",
          "furigana": "この駅[いみ]をよく[りかい]しました。",
          "romaji": "Kono えき no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Station' well.",
          "indonesian": "Saya memahami arti dari 'Stasiun Kereta' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに駅を書いて練習します。",
          "furigana": "[まいにち]ノートに駅を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni えき o kaite renshuu shimasu.",
          "english": "I practice writing 'Station' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Stasiun Kereta' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は駅の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は駅の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa えき no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Station'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Stasiun Kereta'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で駅の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で駅の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de えき no mondai ga demashita.",
          "english": "A question about 'Station' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Stasiun Kereta' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  327: [
      {
          "sentence": "この鳴の意味をよく理解しました。",
          "furigana": "この鳴[いみ]をよく[りかい]しました。",
          "romaji": "Kono な no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Bark, Chirp' well.",
          "indonesian": "Saya memahami arti dari 'Bernyanyi (Suara Hewan)' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに鳴を書いて練習します。",
          "furigana": "[まいにち]ノートに鳴を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni な o kaite renshuu shimasu.",
          "english": "I practice writing 'Bark, Chirp' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Bernyanyi (Suara Hewan)' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は鳴の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は鳴の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa な no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Bark, Chirp'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Bernyanyi (Suara Hewan)'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で鳴の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で鳴の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de な no mondai ga demashita.",
          "english": "A question about 'Bark, Chirp' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Bernyanyi (Suara Hewan)' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  328: [
      {
          "sentence": "この麦の意味をよく理解しました。",
          "furigana": "この麦[いみ]をよく[りかい]しました。",
          "romaji": "Kono むぎ no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Barley, Wheat' well.",
          "indonesian": "Saya memahami arti dari 'Gandum' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに麦を書いて練習します。",
          "furigana": "[まいにち]ノートに麦を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni むぎ o kaite renshuu shimasu.",
          "english": "I practice writing 'Barley, Wheat' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Gandum' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は麦の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は麦の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa むぎ no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Barley, Wheat'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Gandum'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で麦の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で麦の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de むぎ no mondai ga demashita.",
          "english": "A question about 'Barley, Wheat' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Gandum' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
  329: [
      {
          "sentence": "この黄の意味をよく理解しました。",
          "furigana": "この黄[いみ]をよく[りかい]しました。",
          "romaji": "Kono き no imi o yoku rikai shimashita.",
          "english": "I understood the meaning of this 'Yellow' well.",
          "indonesian": "Saya memahami arti dari 'Warna Kuning' ini dengan baik.",
          "grammarNote": "Pola kalimat dasar ~o rikai shimashita (memahami ~ dengan baik)."
      },
      {
          "sentence": "毎日ノートに黄を書いて練習します。",
          "furigana": "[まいにち]ノートに黄を[か]いて[れんしゅう]します。",
          "romaji": "Mainichi nooto ni き o kaite renshuu shimasu.",
          "english": "I practice writing 'Yellow' in my notebook every day.",
          "indonesian": "Setiap hari saya berlatih menulis 'Warna Kuning' di buku catatan.",
          "grammarNote": "Bentuk ~te renshuu shimasu menunjukkan kebiasaan berlatih."
      },
      {
          "sentence": "先生は黄の正しい使い方を教えてくれました。",
          "furigana": "[せんせい]は黄の[ただ]しい[つか]い[かた]を[おし]えてくれました。",
          "romaji": "Sensei wa き no tadashii tsukaikata o oshiete kuremashita.",
          "english": "The teacher kindly taught us the correct way to use 'Yellow'.",
          "indonesian": "Guru telah mengajarkan cara penggunaan yang benar untuk 'Warna Kuning'.",
          "grammarNote": "Pola ~te kuremashita menyatakan perbuatan baik dari orang lain untuk pembicara."
      },
      {
          "sentence": "日本語の試験で黄の問題が出ました。",
          "furigana": "[にほんご]の[しけん]で黄の[もんだい]が[で]ました。",
          "romaji": "Nihongo no shiken de き no mondai ga demashita.",
          "english": "A question about 'Yellow' appeared on the Japanese exam.",
          "indonesian": "Soal tentang 'Warna Kuning' muncul pada ujian bahasa Jepang.",
          "grammarNote": "Partikel de penanda tempat peristiwa, partikel ga penanda subjek alami."
      }
  ],
};

// Returns exactly 4 educational sentences for any kanji
export function getKanjiSentences(kanji: KanjiItem): KanjiSentenceExample[] {
  if (kanji.sentences && kanji.sentences.length > 0) {
    return kanji.sentences;
  }
  if (CURATED_KANJI_SENTENCES[kanji.kanji]) {
    return CURATED_KANJI_SENTENCES[kanji.kanji];
  }
  if ((CURATED_KANJI_SENTENCES as any)[kanji.id]) {
    return (CURATED_KANJI_SENTENCES as any)[kanji.id];
  }

  // Jika data kurasi spesifik belum tersedia, buat struktur data tepat 4 contoh kalimat
  // yang siap diisi kemudian dengan penanda isPlaceholder yang jelas (bukan data fiktif).
  const reading = kanji.reading || kanji.kanji;
  const meaning = kanji.meaning || '';
  const meaningEn = kanji.meaningEn || kanji.meaning || '';

  return [
    {
      sentence: `${kanji.kanji}の例文 01（準備中）`,
      furigana: `${reading}のれいぶん 01`,
      romaji: `${reading} no reibun 01`,
      english: `Example sentence 01 for kanji "${kanji.kanji}" (${meaningEn}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 01 untuk kanji "${kanji.kanji}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      grammarNote: `Slot struktur contoh kalimat 01 untuk kanji ${kanji.kanji}.`,
      isPlaceholder: true
    },
    {
      sentence: `${kanji.kanji}の例文 02（準備中）`,
      furigana: `${reading}のれいぶん 02`,
      romaji: `${reading} no reibun 02`,
      english: `Example sentence 02 for kanji "${kanji.kanji}" (${meaningEn}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 02 untuk kanji "${kanji.kanji}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      grammarNote: `Slot struktur contoh kalimat 02 untuk kanji ${kanji.kanji}.`,
      isPlaceholder: true
    },
    {
      sentence: `${kanji.kanji}の例文 03（準備中）`,
      furigana: `${reading}のれいぶん 03`,
      romaji: `${reading} no reibun 03`,
      english: `Example sentence 03 for kanji "${kanji.kanji}" (${meaningEn}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 03 untuk kanji "${kanji.kanji}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      grammarNote: `Slot struktur contoh kalimat 03 untuk kanji ${kanji.kanji}.`,
      isPlaceholder: true
    },
    {
      sentence: `${kanji.kanji}の例文 04（準備中）`,
      furigana: `${reading}のれいぶん 04`,
      romaji: `${reading} no reibun 04`,
      english: `Example sentence 04 for kanji "${kanji.kanji}" (${meaningEn}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 04 untuk kanji "${kanji.kanji}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      grammarNote: `Slot struktur contoh kalimat 04 untuk kanji ${kanji.kanji}.`,
      isPlaceholder: true
    }
  ];
}
