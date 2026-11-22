import type { KotobaItem, KotobaSentenceExample } from '../types';

// Curated 4 sentence examples for common vocabulary
export const KOTOBA_SENTENCES: Record<string, KotobaSentenceExample[]> = {
  "私": [
    {
      "sentence": "私はインドネシアから参りました田中と申します。",
      "furigana": "わたしはいんどねしあからまいりましたたなかともうします。",
      "romaji": "Watashi wa Indoneshia kara mairimashita Tanaka to moushimasu.",
      "english": "I am Tanaka, having come from Indonesia.",
      "indonesian": "Saya Tanaka, datang dari Indonesia.",
      "highlight": "私",
      "grammarNote": "Bentuk merendah (kenjougo) [参りました (datang)] dan [申します (bernama)]."
    },
    {
      "sentence": "私のかばんは黒くて軽いです。",
      "furigana": "わたしのかばんはくろくてかるいです。",
      "romaji": "Watashi no kaban wa kurokute karui desu.",
      "english": "My bag is black and light.",
      "indonesian": "Tas saya berwarna hitam dan ringan.",
      "highlight": "私",
      "grammarNote": "Partikel kepemilikan [の] + penyambung kata sifat-i bentuk te [黒くて]."
    },
    {
      "sentence": "私達は毎朝日本語の単語を練習します。",
      "furigana": "わたしたちはまいあさにほんごのたんごをれんしゅうします。",
      "romaji": "Watashitachi wa maiasa nihongo no tango o renshuu shimasu.",
      "english": "We practice Japanese vocabulary every morning.",
      "indonesian": "Kami berlatih kosakata bahasa Jepang setiap pagi.",
      "highlight": "私",
      "grammarNote": "Bentuk jamak [私達 (kami/kita)] + kata keterangan frekuensi [毎朝]."
    },
    {
      "sentence": "私の趣味は写真を撮ることと音楽を聴くことです。",
      "furigana": "わたしのしゅみはしゃしんをとることとおんがくをきくことです.",
      "romaji": "Watashi no shumi wa shashin o toru koto to ongaku o kiku koto desu.",
      "english": "My hobbies are taking photos and listening to music.",
      "indonesian": "Hobi saya adalah memotret dan mendengarkan musik.",
      "highlight": "私",
      "grammarNote": "Pola nominalisasi menyatakan hobi [Kata Kerja Kamus + ことです]."
    }
  ],
  "わたし": [
    {
      "sentence": "私はインドネシアから参りました田中と申します。",
      "furigana": "わたしはいんどねしあからまいりましたたなかともうします。",
      "romaji": "Watashi wa Indoneshia kara mairimashita Tanaka to moushimasu.",
      "english": "I am Tanaka, having come from Indonesia.",
      "indonesian": "Saya Tanaka, datang dari Indonesia.",
      "highlight": "私",
      "grammarNote": "Bentuk merendah (kenjougo) [参りました (datang)] dan [申します (bernama)]."
    },
    {
      "sentence": "私のかばんは黒くて軽いです。",
      "furigana": "わたしのかばんはくろくてかるいです。",
      "romaji": "Watashi no kaban wa kurokute karui desu.",
      "english": "My bag is black and light.",
      "indonesian": "Tas saya berwarna hitam dan ringan.",
      "highlight": "私",
      "grammarNote": "Partikel kepemilikan [の] + penyambung kata sifat-i bentuk te [黒くて]."
    },
    {
      "sentence": "私達は毎朝日本語の単語を練習します。",
      "furigana": "わたしたちはまいあさにほんごのたんごをれんしゅうします。",
      "romaji": "Watashitachi wa maiasa nihongo no tango o renshuu shimasu.",
      "english": "We practice Japanese vocabulary every morning.",
      "indonesian": "Kami berlatih kosakata bahasa Jepang setiap pagi.",
      "highlight": "私",
      "grammarNote": "Bentuk jamak [私達 (kami/kita)] + kata keterangan frekuensi [毎朝]."
    },
    {
      "sentence": "私の趣味は写真を撮ることと音楽を聴くことです。",
      "furigana": "わたしのしゅみはしゃしんをとることとおんがくをきくことです.",
      "romaji": "Watashi no shumi wa shashin o toru koto to ongaku o kiku koto desu.",
      "english": "My hobbies are taking photos and listening to music.",
      "indonesian": "Hobi saya adalah memotret dan mendengarkan musik.",
      "highlight": "私",
      "grammarNote": "Pola nominalisasi menyatakan hobi [Kata Kerja Kamus + ことです]."
    }
  ],
  "あなた": [
    {
      "sentence": "あなたのお名前は何とお読みすればよろしいですか。",
      "furigana": "あなたのおなまえはなんとおよみすればよろしいですか。",
      "romaji": "Anata no onamae wa nan to oyomi sureba yoroshii desu ka.",
      "english": "How should I read your name?",
      "indonesian": "Bagaimanakah cara membaca nama Anda dengan tepat?",
      "highlight": "あなた",
      "grammarNote": "Ungkapan santun bisnis [お〜すればよろしいですか (bagaimana sebaiknya)]."
    },
    {
      "sentence": "あなたはどの国の文化に一番興味がありますか。",
      "furigana": "あなたはどのくにのぶんかにいちばんきょうみがありますか。",
      "romaji": "Anata wa dono kuni no bunka ni ichiban kyoumi ga arimasu ka.",
      "english": "Which country s culture are you most interested in?",
      "indonesian": "Budaya negara manakah yang paling Anda minati?",
      "highlight": "あなた",
      "grammarNote": "Pola minat/ketertarikan [〜に興味がある (tertarik pada...)]."
    },
    {
      "sentence": "あなたの夢がいつか実現することを応援しています。",
      "furigana": "あなたのゆめがいつかじつげんすることをおうえんしています。",
      "romaji": "Anata no yume ga itsuka jitsugen suru koto o ouen shite imasu.",
      "english": "I am rooting for your dream to come true someday.",
      "indonesian": "Saya senantiasa mendukung agar impian Anda suatu hari kelak dapat terwujud.",
      "highlight": "あなた",
      "grammarNote": "Bentuk progresif dukungan [応援しています (sedang/terus mendukung)]."
    },
    {
      "sentence": "これはあなたのために心を込めて選んだプレゼントです。",
      "furigana": "これはあなたのためにこころをこめてえらんだぷれぜんとです。",
      "romaji": "Kore wa anata no tame ni kokoro o komete eranda purezento desu.",
      "english": "This is a gift I picked out with all my heart just for you.",
      "indonesian": "Ini adalah hadiah yang saya pilihkan dengan sepenuh hati khusus untuk Anda.",
      "highlight": "あなた",
      "grammarNote": "Pola peruntukan [〜のために (demi/untuk...)] + idiom [心を込めて]."
    }
  ],
  "先生": [
    {
      "sentence": "山田先生は優しくて分かりやすく教えてくださいます。",
      "furigana": "やまだせんせいはやさしくてわかりやすくおしえてくださいます。",
      "romaji": "Yamada-sensei wa yasashikute wakariyasuku oshiete kudasaimasu.",
      "english": "Teacher Yamada is kind and teaches in an easy-to-understand manner.",
      "indonesian": "Bapak Guru Yamada sangat ramah dan mengajarkan materi secara mudah dipahami.",
      "highlight": "先生",
      "grammarNote": "Bentuk kehormatan memberi kebaikan [〜てくださいます] untuk atasan/guru."
    },
    {
      "sentence": "先生、この文法の使い方がよく分からないので教えていただけますか。",
      "furigana": "せんせい、このぶんぽうのつかいかたがよくわからないのでおしえていただけますか。",
      "romaji": "Sensei, kono bunpou no tsukaikata ga yoku wakaranai node oshiete itadakemasu ka.",
      "english": "Teacher, I don t understand how to use this grammar well, could you please teach me?",
      "indonesian": "Bapak Guru, karena saya belum memahami penggunaan tata bahasa ini, sudihkah Bapak menjelaskannya?",
      "highlight": "先生",
      "grammarNote": "Permohonan sopan tingkat tinggi [〜ていただけますか]."
    },
    {
      "sentence": "将来は日本語の先生になって多くの人に教えたいです。",
      "furigana": "しょうらいはにほんごのせんせいになっておおくのひとにおしえたいです。",
      "romaji": "Shourai wa nihongo no sensei ni natte ooku no hito ni oshietai desu.",
      "english": "In the future, I want to become a Japanese teacher and teach many people.",
      "indonesian": "Di masa depan saya ingin menjadi guru bahasa Jepang dan mengajar banyak orang.",
      "highlight": "先生",
      "grammarNote": "Pola menjadi profesi [Nomina + になる] + keinginan [〜たい]."
    },
    {
      "sentence": "先生のアドバイスのおかげで無事に試験に合格できました。",
      "furigana": "せんせいのあどばいすのおかげでぶじにしけんにごうかくできました。",
      "romaji": "Sensei no adobaisu no okage de buji ni shiken ni goukaku dekimashita.",
      "english": "Thanks to the teacher s advice, I was able to pass the exam safely.",
      "indonesian": "Berkat petunjuk bimbingan guru, saya berhasil lulus ujian dengan lancar.",
      "highlight": "先生",
      "grammarNote": "Pola rasa terima kasih atas bantuan [〜のおかげで] + verba potensial [合格できた]."
    }
  ],
  "せんせい": [
    {
      "sentence": "山田先生は優しくて分かりやすく教えてくださいます。",
      "furigana": "やまだせんせいはやさしくてわかりやすくおしえてくださいます。",
      "romaji": "Yamada-sensei wa yasashikute wakariyasuku oshiete kudasaimasu.",
      "english": "Teacher Yamada is kind and teaches in an easy-to-understand manner.",
      "indonesian": "Bapak Guru Yamada sangat ramah dan mengajarkan materi secara mudah dipahami.",
      "highlight": "先生",
      "grammarNote": "Bentuk kehormatan memberi kebaikan [〜てくださいます] untuk atasan/guru."
    },
    {
      "sentence": "先生、この文法の使い方がよく分からないので教えていただけますか。",
      "furigana": "せんせい、このぶんぽうのつかいかたがよくわからないのでおしえていただけますか。",
      "romaji": "Sensei, kono bunpou no tsukaikata ga yoku wakaranai node oshiete itadakemasu ka.",
      "english": "Teacher, I don t understand how to use this grammar well, could you please teach me?",
      "indonesian": "Bapak Guru, karena saya belum memahami penggunaan tata bahasa ini, sudihkah Bapak menjelaskannya?",
      "highlight": "先生",
      "grammarNote": "Permohonan sopan tingkat tinggi [〜ていただけますか]."
    },
    {
      "sentence": "将来は日本語の先生になって多くの人に教えたいです。",
      "furigana": "しょうらいはにほんごのせんせいになっておおくのひとにおしえたいです。",
      "romaji": "Shourai wa nihongo no sensei ni natte ooku no hito ni oshietai desu.",
      "english": "In the future, I want to become a Japanese teacher and teach many people.",
      "indonesian": "Di masa depan saya ingin menjadi guru bahasa Jepang dan mengajar banyak orang.",
      "highlight": "先生",
      "grammarNote": "Pola menjadi profesi [Nomina + になる] + keinginan [〜たい]."
    },
    {
      "sentence": "先生のアドバイスのおかげで無事に試験に合格できました。",
      "furigana": "せんせいのあどばいすのおかげでぶじにしけんにごうかくできました。",
      "romaji": "Sensei no adobaisu no okage de buji ni shiken ni goukaku dekimashita.",
      "english": "Thanks to the teacher s advice, I was able to pass the exam safely.",
      "indonesian": "Berkat petunjuk bimbingan guru, saya berhasil lulus ujian dengan lancar.",
      "highlight": "先生",
      "grammarNote": "Pola rasa terima kasih atas bantuan [〜のおかげで] + verba potensial [合格できた]."
    }
  ],
  "学生": [
    {
      "sentence": "彼は大学で情報工学を真面目に学んでいる学生です。",
      "furigana": "かれはだいがくでじょうほうこうがくをまじめにまなんでいるがくせいです。",
      "romaji": "Kare wa daigaku de jouhou kougaku o majime ni manande iru gakusei desu.",
      "english": "He is a student who earnestly studies information engineering at university.",
      "indonesian": "Dia adalah seorang mahasiswa yang tekun mempelajari teknik informatika di kampus.",
      "highlight": "学生",
      "grammarNote": "Klausa relatif pemodifikasi nomina [〜学んでいる + 学生]."
    },
    {
      "sentence": "駅前のカフェはいつも大勢の学生でにぎわっています。",
      "furigana": "えきまえのかふぇはいつもおおぜいのがくせでにぎわっています。",
      "romaji": "Ekimae no kafe wa itsumo oozei no gakusei de nigiwatte imasu.",
      "english": "The cafe in front of the station is always bustling with many students.",
      "indonesian": "Kafe depan stasiun selalu ramai dipadati oleh banyak pelajar.",
      "highlight": "学生",
      "grammarNote": "Partikel [で] penanda penyebab keramaian + verba keadaan [にぎわっている]."
    },
    {
      "sentence": "学生証を提示すると電車の定期券が割引になります。",
      "furigana": "がくせいしょうをていじするとでんしゃのていきけんがわりびきになります。",
      "romaji": "Gakuseishou o teiji suru to densha no teikiken ga waribiki ni narimasu.",
      "english": "If you present your student ID, the train commuter pass will be discounted.",
      "indonesian": "Jika menunjukkan kartu tanda pelajar, tiket komuter kereta akan mendapatkan potongan diskon.",
      "highlight": "学生",
      "grammarNote": "Kartu pelajar [学生証 (gakuseishou)] + pola pengandaian alami [〜すると]."
    },
    {
      "sentence": "世界各国から集まった留学生と友達になりました。",
      "furigana": "せかいかっこくからあつまったりゅうがくせいとともだちになりました。",
      "romaji": "Sekai kakkoku kara atsumatta ryuugakusei to tomodachi ni narimashita.",
      "english": "I became friends with international students gathered from all over the world.",
      "indonesian": "Saya berteman dengan para mahasiswa asing yang berkumpul dari berbagai penjuru dunia.",
      "highlight": "学生",
      "grammarNote": "Mahasiswa asing [留学生 (ryuugakusei)] + pola persahabatan [友達になる]."
    }
  ],
  "がくせい": [
    {
      "sentence": "彼は大学で情報工学を真面目に学んでいる学生です。",
      "furigana": "かれはだいがくでじょうほうこうがくをまじめにまなんでいるがくせいです。",
      "romaji": "Kare wa daigaku de jouhou kougaku o majime ni manande iru gakusei desu.",
      "english": "He is a student who earnestly studies information engineering at university.",
      "indonesian": "Dia adalah seorang mahasiswa yang tekun mempelajari teknik informatika di kampus.",
      "highlight": "学生",
      "grammarNote": "Klausa relatif pemodifikasi nomina [〜学んでいる + 学生]."
    },
    {
      "sentence": "駅前のカフェはいつも大勢の学生でにぎわっています。",
      "furigana": "えきまえのかふぇはいつもおおぜいのがくせでにぎわっています。",
      "romaji": "Ekimae no kafe wa itsumo oozei no gakusei de nigiwatte imasu.",
      "english": "The cafe in front of the station is always bustling with many students.",
      "indonesian": "Kafe depan stasiun selalu ramai dipadati oleh banyak pelajar.",
      "highlight": "学生",
      "grammarNote": "Partikel [で] penanda penyebab keramaian + verba keadaan [にぎわっている]."
    },
    {
      "sentence": "学生証を提示すると電車の定期券が割引になります。",
      "furigana": "がくせいしょうをていじするとでんしゃのていきけんがわりびきになります。",
      "romaji": "Gakuseishou o teiji suru to densha no teikiken ga waribiki ni narimasu.",
      "english": "If you present your student ID, the train commuter pass will be discounted.",
      "indonesian": "Jika menunjukkan kartu tanda pelajar, tiket komuter kereta akan mendapatkan potongan diskon.",
      "highlight": "学生",
      "grammarNote": "Kartu pelajar [学生証 (gakuseishou)] + pola pengandaian alami [〜すると]."
    },
    {
      "sentence": "世界各国から集まった留学生と友達になりました。",
      "furigana": "せかいかっこくからあつまったりゅうがくせいとともだちになりました。",
      "romaji": "Sekai kakkoku kara atsumatta ryuugakusei to tomodachi ni narimashita.",
      "english": "I became friends with international students gathered from all over the world.",
      "indonesian": "Saya berteman dengan para mahasiswa asing yang berkumpul dari berbagai penjuru dunia.",
      "highlight": "学生",
      "grammarNote": "Mahasiswa asing [留学生 (ryuugakusei)] + pola persahabatan [友達になる]."
    }
  ],
  "会社員": [
    {
      "sentence": "父は大手自動車メーカーで働く会社員です。",
      "furigana": "ちちはおおてじどうしゃめーかーではたらくかいしゃいんです。",
      "romaji": "Chichi wa oote jidousha meekaa de hataraku kaishain desu.",
      "english": "My father is a company employee working at a major automaker.",
      "indonesian": "Ayah saya adalah karyawan yang bekerja di produsen otomotif terkemuka.",
      "highlight": "会社員",
      "grammarNote": "Karyawan perusahaan [会社員 (kaishain)] sebagai pelengkap predikat nomina."
    },
    {
      "sentence": "日本の会社員は時間をとても大切に守ります。",
      "furigana": "にほんのかいしゃいんはじかんをとてもたいせつにまもります。",
      "romaji": "Nihon no kaishain wa jikan o totemo taisetsu ni mamorimasu.",
      "english": "Japanese company employees value time and observe it very punctually.",
      "indonesian": "Para karyawan kantor di Jepang sangat menghargai dan menepati waktu.",
      "highlight": "会社員",
      "grammarNote": "Adverbia cara [大切に (dengan menghargai/sungguh-sungguh)] + verba [守る]."
    },
    {
      "sentence": "大学を卒業したらいつか立派な会社員になりたいです。",
      "furigana": "だいがくをそつぎょうしたらいつかりっぱなかいしゃいんになりたいです。",
      "romaji": "Daigaku o sotsugyou shitara itsuka rippa na kaishain ni naritai desu.",
      "english": "After graduating from university, I want to become a respectable company employee someday.",
      "indonesian": "Setelah lulus kuliah, suatu hari nanti saya ingin menjadi karyawan perusahaan yang berdedikasi.",
      "highlight": "会社員",
      "grammarNote": "Pola setelah pengandaian [〜たら] + kata sifat-na pemodifikasi [立派な]."
    },
    {
      "sentence": "多くの会社員が朝の通勤ラッシュで満員電車に乗っています。",
      "furigana": "おおくのかいしゃいんがあさのつうきんらっしゅでまんいんでんしゃにのっています。",
      "romaji": "Ooku no kaishain ga asa no tsuukin rasshu de man in densha ni notte imasu.",
      "english": "Many company employees ride crowded trains during the morning rush hour.",
      "indonesian": "Banyak pekerja kantor menaiki kereta yang penuh sesak pada jam sibuk berangkat kerja pagi hari.",
      "highlight": "会社員",
      "grammarNote": "Kondisi kereta penuh penumpang [満員電車 (man in densha)]."
    }
  ],
  "かいしゃいん": [
    {
      "sentence": "父は大手自動車メーカーで働く会社員です。",
      "furigana": "ちちはおおてじどうしゃめーかーではたらくかいしゃいんです。",
      "romaji": "Chichi wa oote jidousha meekaa de hataraku kaishain desu.",
      "english": "My father is a company employee working at a major automaker.",
      "indonesian": "Ayah saya adalah karyawan yang bekerja di produsen otomotif terkemuka.",
      "highlight": "会社員",
      "grammarNote": "Karyawan perusahaan [会社員 (kaishain)] sebagai pelengkap predikat nomina."
    },
    {
      "sentence": "日本の会社員は時間をとても大切に守ります。",
      "furigana": "にほんのかいしゃいんはじかんをとてもたいせつにまもります。",
      "romaji": "Nihon no kaishain wa jikan o totemo taisetsu ni mamorimasu.",
      "english": "Japanese company employees value time and observe it very punctually.",
      "indonesian": "Para karyawan kantor di Jepang sangat menghargai dan menepati waktu.",
      "highlight": "会社員",
      "grammarNote": "Adverbia cara [大切に (dengan menghargai/sungguh-sungguh)] + verba [守る]."
    },
    {
      "sentence": "大学を卒業したらいつか立派な会社員になりたいです。",
      "furigana": "だいがくをそつぎょうしたらいつかりっぱなかいしゃいんになりたいです。",
      "romaji": "Daigaku o sotsugyou shitara itsuka rippa na kaishain ni naritai desu.",
      "english": "After graduating from university, I want to become a respectable company employee someday.",
      "indonesian": "Setelah lulus kuliah, suatu hari nanti saya ingin menjadi karyawan perusahaan yang berdedikasi.",
      "highlight": "会社員",
      "grammarNote": "Pola setelah pengandaian [〜たら] + kata sifat-na pemodifikasi [立派な]."
    },
    {
      "sentence": "多くの会社員が朝の通勤ラッシュで満員電車に乗っています。",
      "furigana": "おおくのかいしゃいんがあさのつうきんらっしゅでまんいんでんしゃにのっています。",
      "romaji": "Ooku no kaishain ga asa no tsuukin rasshu de man in densha ni notte imasu.",
      "english": "Many company employees ride crowded trains during the morning rush hour.",
      "indonesian": "Banyak pekerja kantor menaiki kereta yang penuh sesak pada jam sibuk berangkat kerja pagi hari.",
      "highlight": "会社員",
      "grammarNote": "Kondisi kereta penuh penumpang [満員電車 (man in densha)]."
    }
  ],
  "本": [
    {
      "sentence": "毎晩寝る前にベッドで本を三十ページ読みます。",
      "furigana": "まいばんねるまえにべっどでほんをさんじゅっぺーじよみます。",
      "romaji": "Maiban neru mae ni beddo de hon o sanjup-peeji yomimasu.",
      "english": "I read thirty pages of a book in bed every night before going to sleep.",
      "indonesian": "Setiap malam sebelum tidur saya membaca tiga puluh halaman buku di ranjang.",
      "highlight": "本",
      "grammarNote": "Objek bacaan [本を] + hitungan halaman buku [〜ページ]."
    },
    {
      "sentence": "この本には日本の歴史が分かりやすく書かれています。",
      "furigana": "このほんにはにほんのれきしがわかりやすくかかれています。",
      "romaji": "Kono hon ni wa nihon no rekishi ga wakariyasuku kakarete imasu.",
      "english": "Japanese history is written in an easy-to-understand way in this book.",
      "indonesian": "Di dalam buku ini sejarah Jepang dituliskan secara gamblang dan mudah dipahami.",
      "highlight": "本",
      "grammarNote": "Bentuk pasif penulisan [書かれている (tertulis / dituliskan)]."
    },
    {
      "sentence": "図書館で日本語の文法に関する本を二冊借りました。",
      "furigana": "としょかんでにほんごのぶんぽうにかんするほんをにさつかりました。",
      "romaji": "Toshokan de nihongo no bunpou ni kansuru hon o nisatsu karimashita.",
      "english": "I borrowed two books related to Japanese grammar at the library.",
      "indonesian": "Saya meminjam dua jilid buku perihal tata bahasa Jepang di perpustakaan.",
      "highlight": "本",
      "grammarNote": "Pola perihal/topik [〜に関する + Nomina (berkaitan dengan...)] + kata bantu jilid [〜冊]."
    },
    {
      "sentence": "本を読むことで新しい世界や知識が広がります。",
      "furigana": "ほんをよむことであたらしいせかいやちしきがひろがります。",
      "romaji": "Hon o yomu koto de atarashii sekai ya chishiki ga hirogarimasu.",
      "english": "By reading books, new worlds and knowledge expand.",
      "indonesian": "Dengan membaca buku, cakrawala dunia dan wawasan baru kita kian meluas.",
      "highlight": "本",
      "grammarNote": "Pola sarana/metode perantara [Nominalisasi + ことで (dengan jalan...)]."
    }
  ],
  "ほん": [
    {
      "sentence": "毎晩寝る前にベッドで本を三十ページ読みます。",
      "furigana": "まいばんねるまえにべっどでほんをさんじゅっぺーじよみます。",
      "romaji": "Maiban neru mae ni beddo de hon o sanjup-peeji yomimasu.",
      "english": "I read thirty pages of a book in bed every night before going to sleep.",
      "indonesian": "Setiap malam sebelum tidur saya membaca tiga puluh halaman buku di ranjang.",
      "highlight": "本",
      "grammarNote": "Objek bacaan [本を] + hitungan halaman buku [〜ページ]."
    },
    {
      "sentence": "この本には日本の歴史が分かりやすく書かれています。",
      "furigana": "このほんにはにほんのれきしがわかりやすくかかれています。",
      "romaji": "Kono hon ni wa nihon no rekishi ga wakariyasuku kakarete imasu.",
      "english": "Japanese history is written in an easy-to-understand way in this book.",
      "indonesian": "Di dalam buku ini sejarah Jepang dituliskan secara gamblang dan mudah dipahami.",
      "highlight": "本",
      "grammarNote": "Bentuk pasif penulisan [書かれている (tertulis / dituliskan)]."
    },
    {
      "sentence": "図書館で日本語の文法に関する本を二冊借りました。",
      "furigana": "としょかんでにほんごのぶんぽうにかんするほんをにさつかりました。",
      "romaji": "Toshokan de nihongo no bunpou ni kansuru hon o nisatsu karimashita.",
      "english": "I borrowed two books related to Japanese grammar at the library.",
      "indonesian": "Saya meminjam dua jilid buku perihal tata bahasa Jepang di perpustakaan.",
      "highlight": "本",
      "grammarNote": "Pola perihal/topik [〜に関する + Nomina (berkaitan dengan...)] + kata bantu jilid [〜冊]."
    },
    {
      "sentence": "本を読むことで新しい世界や知識が広がります。",
      "furigana": "ほんをよむことであたらしいせかいやちしきがひろがります。",
      "romaji": "Hon o yomu koto de atarashii sekai ya chishiki ga hirogarimasu.",
      "english": "By reading books, new worlds and knowledge expand.",
      "indonesian": "Dengan membaca buku, cakrawala dunia dan wawasan baru kita kian meluas.",
      "highlight": "本",
      "grammarNote": "Pola sarana/metode perantara [Nominalisasi + ことで (dengan jalan...)]."
    }
  ],
  "車": [
    {
      "sentence": "週末は家族と一緒に車で海へドライブに行きました。",
      "furigana": "しゅうまつはかぞくといっしょにくるまでうみへどらいぶにいきました。",
      "romaji": "Shuumatsu wa kazoku to issho ni kuruma de umi e doraibu ni ikimashita.",
      "english": "On the weekend, I went on a drive to the sea by car with my family.",
      "indonesian": "Pada akhir pekan saya pergi berkendara mobil ke laut bersama keluarga.",
      "highlight": "車",
      "grammarNote": "Partikel [で] menyatakan sarana alat transportasi [車で (dengan mobil)]."
    },
    {
      "sentence": "車を運転するときは常に周りの安全を確認してください。",
      "furigana": "くるまをうんてんするときはつねにまわりのあんぜんをかくにんしてください。",
      "romaji": "Kuruma o unten suru toki wa tsune ni mawari no anzen o kakunin shite kudasai.",
      "english": "When driving a car, please always check the safety around you.",
      "indonesian": "Saat mengemudikan mobil, harap senantiasa memastikan keselamatan situasi sekeliling.",
      "highlight": "車",
      "grammarNote": "Kolokasi menyetir [車を運転する] + pola waktu kejadian [〜するときは]."
    },
    {
      "sentence": "環境に優しいハイブリッド車が世界中で注目されています。",
      "furigana": "かんきょうにやさしいはいぶりっどしゃがせかいじゅうでちゅうもくされています。",
      "romaji": "Kankyou ni yasashii haiburiddosha ga sekaijuu de chuumoku sarete imasu.",
      "english": "Eco-friendly hybrid cars are attracting attention around the world.",
      "indonesian": "Mobil hibrida yang ramah lingkungan sedang menjadi sorotan di seluruh dunia.",
      "highlight": "車",
      "grammarNote": "Frasa ramah lingkungan [環境に優しい] + sufiks kendaraan [〜車]."
    },
    {
      "sentence": "駐車場に車を止めてから歩いてショッピングモールへ向かいました。",
      "furigana": "ちゅうしゃじょうにくるまをとめてからあるいてしょっぴんぐもーるへむかいました。",
      "romaji": "Chuushajou ni kuruma o tomete kara aruite shoppingu mooru e mukaimashita.",
      "english": "After parking the car in the parking lot, I walked toward the shopping mall.",
      "indonesian": "Setelah memarkir mobil di area parkir, saya berjalan kaki menuju pusat perbelanjaan.",
      "highlight": "車",
      "grammarNote": "Kolokasi memarkir mobil [車を止める] + pola urutan [〜てから]."
    }
  ],
  "くるま": [
    {
      "sentence": "週末は家族と一緒に車で海へドライブに行きました。",
      "furigana": "しゅうまつはかぞくといっしょにくるまでうみへどらいぶにいきました。",
      "romaji": "Shuumatsu wa kazoku to issho ni kuruma de umi e doraibu ni ikimashita.",
      "english": "On the weekend, I went on a drive to the sea by car with my family.",
      "indonesian": "Pada akhir pekan saya pergi berkendara mobil ke laut bersama keluarga.",
      "highlight": "車",
      "grammarNote": "Partikel [で] menyatakan sarana alat transportasi [車で (dengan mobil)]."
    },
    {
      "sentence": "車を運転するときは常に周りの安全を確認してください。",
      "furigana": "くるまをうんてんするときはつねにまわりのあんぜんをかくにんしてください。",
      "romaji": "Kuruma o unten suru toki wa tsune ni mawari no anzen o kakunin shite kudasai.",
      "english": "When driving a car, please always check the safety around you.",
      "indonesian": "Saat mengemudikan mobil, harap senantiasa memastikan keselamatan situasi sekeliling.",
      "highlight": "車",
      "grammarNote": "Kolokasi menyetir [車を運転する] + pola waktu kejadian [〜するときは]."
    },
    {
      "sentence": "環境に優しいハイブリッド車が世界中で注目されています。",
      "furigana": "かんきょうにやさしいはいぶりっどしゃがせかいじゅうでちゅうもくされています。",
      "romaji": "Kankyou ni yasashii haiburiddosha ga sekaijuu de chuumoku sarete imasu.",
      "english": "Eco-friendly hybrid cars are attracting attention around the world.",
      "indonesian": "Mobil hibrida yang ramah lingkungan sedang menjadi sorotan di seluruh dunia.",
      "highlight": "車",
      "grammarNote": "Frasa ramah lingkungan [環境に優しい] + sufiks kendaraan [〜車]."
    },
    {
      "sentence": "駐車場に車を止めてから歩いてショッピングモールへ向かいました。",
      "furigana": "ちゅうしゃじょうにくるまをとめてからあるいてしょっぴんぐもーるへむかいました。",
      "romaji": "Chuushajou ni kuruma o tomete kara aruite shoppingu mooru e mukaimashita.",
      "english": "After parking the car in the parking lot, I walked toward the shopping mall.",
      "indonesian": "Setelah memarkir mobil di area parkir, saya berjalan kaki menuju pusat perbelanjaan.",
      "highlight": "車",
      "grammarNote": "Kolokasi memarkir mobil [車を止める] + pola urutan [〜てから]."
    }
  ],
  "食べる": [
    {
      "sentence": "朝ご飯をしっかり食べると一日元気に過ごせます。",
      "furigana": "あさごはんをしっかりたべるといちにちげんきにすごせます。",
      "romaji": "Asagohan o shikkari taberu to ichinichi genki ni sugosemasu.",
      "english": "When you eat a hearty breakfast, you can spend the day full of energy.",
      "indonesian": "Bila makan sarapan dengan baik, Anda dapat menjalani hari dengan penuh semangat.",
      "highlight": "食べる",
      "grammarNote": "Pola kepastian kausalitas alami [Bentuk Kamus + と]."
    },
    {
      "sentence": "昨日友達と新しいレストランでおいしいピザを食べました。",
      "furigana": "きのうともだちとあたらしいれすとらんでおいしいぴざをたべました。",
      "romaji": "Kinou tomodachi to atarashii resutoran de oishii piza o tabemashita.",
      "english": "Yesterday I ate delicious pizza with friends at a new restaurant.",
      "indonesian": "Kemarin saya menyantap pizza yang lezat bersama kawan di restoran baru.",
      "highlight": "食べました",
      "grammarNote": "Bentuk lampau sopan [食べました] + partikel tempat aktivitas [で]."
    },
    {
      "sentence": "日本に来たらぜひ本場のラーメンを食べてみてください。",
      "furigana": "にほんにきたらぜひほんばのらーめんをたべてみてください。",
      "romaji": "Nihon ni kitara zehi honba no raamen o tabete mite kudasai.",
      "english": "When you come to Japan, please be sure to try eating authentic ramen.",
      "indonesian": "Jika berkunjung ke Jepang, pastikan untuk mencoba mencicipi ramen otentik setempat.",
      "highlight": "食べて",
      "grammarNote": "Pola mencoba melakukan sesuatu [〜てみる (mencoba...)] + ajakan [ぜひ]."
    },
    {
      "sentence": "私は辛い食べ物を食べることができません。",
      "furigana": "わたしはからいたべものをたべることができません。",
      "romaji": "Watashi wa karai tabemono o taberu koto ga dekimasen.",
      "english": "I cannot eat spicy food.",
      "indonesian": "Saya tidak sanggup memakan makanan yang pedas.",
      "highlight": "食べる",
      "grammarNote": "Pola kemampuan potensial formal [Kata Kerja Kamus + ことができる/できない]."
    }
  ],
  "たべる": [
    {
      "sentence": "朝ご飯をしっかり食べると一日元気に過ごせます。",
      "furigana": "あさごはんをしっかりたべるといちにちげんきにすごせます。",
      "romaji": "Asagohan o shikkari taberu to ichinichi genki ni sugosemasu.",
      "english": "When you eat a hearty breakfast, you can spend the day full of energy.",
      "indonesian": "Bila makan sarapan dengan baik, Anda dapat menjalani hari dengan penuh semangat.",
      "highlight": "食べる",
      "grammarNote": "Pola kepastian kausalitas alami [Bentuk Kamus + と]."
    },
    {
      "sentence": "昨日友達と新しいレストランでおいしいピザを食べました。",
      "furigana": "きのうともだちとあたらしいれすとらんでおいしいぴざをたべました。",
      "romaji": "Kinou tomodachi to atarashii resutoran de oishii piza o tabemashita.",
      "english": "Yesterday I ate delicious pizza with friends at a new restaurant.",
      "indonesian": "Kemarin saya menyantap pizza yang lezat bersama kawan di restoran baru.",
      "highlight": "食べました",
      "grammarNote": "Bentuk lampau sopan [食べました] + partikel tempat aktivitas [で]."
    },
    {
      "sentence": "日本に来たらぜひ本場のラーメンを食べてみてください。",
      "furigana": "にほんにきたらぜひほんばのらーめんをたべてみてください。",
      "romaji": "Nihon ni kitara zehi honba no raamen o tabete mite kudasai.",
      "english": "When you come to Japan, please be sure to try eating authentic ramen.",
      "indonesian": "Jika berkunjung ke Jepang, pastikan untuk mencoba mencicipi ramen otentik setempat.",
      "highlight": "食べて",
      "grammarNote": "Pola mencoba melakukan sesuatu [〜てみる (mencoba...)] + ajakan [ぜひ]."
    },
    {
      "sentence": "私は辛い食べ物を食べることができません。",
      "furigana": "わたしはからいたべものをたべることができません。",
      "romaji": "Watashi wa karai tabemono o taberu koto ga dekimasen.",
      "english": "I cannot eat spicy food.",
      "indonesian": "Saya tidak sanggup memakan makanan yang pedas.",
      "highlight": "食べる",
      "grammarNote": "Pola kemampuan potensial formal [Kata Kerja Kamus + ことができる/できない]."
    }
  ],
  "たべます": [
    {
      "sentence": "朝ご飯をしっかり食べると一日元気に過ごせます。",
      "furigana": "あさごはんをしっかりたべるといちにちげんきにすごせます。",
      "romaji": "Asagohan o shikkari taberu to ichinichi genki ni sugosemasu.",
      "english": "When you eat a hearty breakfast, you can spend the day full of energy.",
      "indonesian": "Bila makan sarapan dengan baik, Anda dapat menjalani hari dengan penuh semangat.",
      "highlight": "食べる",
      "grammarNote": "Pola kepastian kausalitas alami [Bentuk Kamus + と]."
    },
    {
      "sentence": "昨日友達と新しいレストランでおいしいピザを食べました。",
      "furigana": "きのうともだちとあたらしいれすとらんでおいしいぴざをたべました。",
      "romaji": "Kinou tomodachi to atarashii resutoran de oishii piza o tabemashita.",
      "english": "Yesterday I ate delicious pizza with friends at a new restaurant.",
      "indonesian": "Kemarin saya menyantap pizza yang lezat bersama kawan di restoran baru.",
      "highlight": "食べました",
      "grammarNote": "Bentuk lampau sopan [食べました] + partikel tempat aktivitas [で]."
    },
    {
      "sentence": "日本に来たらぜひ本場のラーメンを食べてみてください。",
      "furigana": "にほんにきたらぜひほんばのらーめんをたべてみてください。",
      "romaji": "Nihon ni kitara zehi honba no raamen o tabete mite kudasai.",
      "english": "When you come to Japan, please be sure to try eating authentic ramen.",
      "indonesian": "Jika berkunjung ke Jepang, pastikan untuk mencoba mencicipi ramen otentik setempat.",
      "highlight": "食べて",
      "grammarNote": "Pola mencoba melakukan sesuatu [〜てみる (mencoba...)] + ajakan [ぜひ]."
    },
    {
      "sentence": "私は辛い食べ物を食べることができません。",
      "furigana": "わたしはからいたべものをたべることができません。",
      "romaji": "Watashi wa karai tabemono o taberu koto ga dekimasen.",
      "english": "I cannot eat spicy food.",
      "indonesian": "Saya tidak sanggup memakan makanan yang pedas.",
      "highlight": "食べる",
      "grammarNote": "Pola kemampuan potensial formal [Kata Kerja Kamus + ことができる/できない]."
    }
  ],
  "食べます": [
    {
      "sentence": "朝ご飯をしっかり食べると一日元気に過ごせます。",
      "furigana": "あさごはんをしっかりたべるといちにちげんきにすごせます。",
      "romaji": "Asagohan o shikkari taberu to ichinichi genki ni sugosemasu.",
      "english": "When you eat a hearty breakfast, you can spend the day full of energy.",
      "indonesian": "Bila makan sarapan dengan baik, Anda dapat menjalani hari dengan penuh semangat.",
      "highlight": "食べる",
      "grammarNote": "Pola kepastian kausalitas alami [Bentuk Kamus + と]."
    },
    {
      "sentence": "昨日友達と新しいレストランでおいしいピザを食べました。",
      "furigana": "きのうともだちとあたらしいれすとらんでおいしいぴざをたべました。",
      "romaji": "Kinou tomodachi to atarashii resutoran de oishii piza o tabemashita.",
      "english": "Yesterday I ate delicious pizza with friends at a new restaurant.",
      "indonesian": "Kemarin saya menyantap pizza yang lezat bersama kawan di restoran baru.",
      "highlight": "食べました",
      "grammarNote": "Bentuk lampau sopan [食べました] + partikel tempat aktivitas [で]."
    },
    {
      "sentence": "日本に来たらぜひ本場のラーメンを食べてみてください。",
      "furigana": "にほんにきたらぜひほんばのらーめんをたべてみてください。",
      "romaji": "Nihon ni kitara zehi honba no raamen o tabete mite kudasai.",
      "english": "When you come to Japan, please be sure to try eating authentic ramen.",
      "indonesian": "Jika berkunjung ke Jepang, pastikan untuk mencoba mencicipi ramen otentik setempat.",
      "highlight": "食べて",
      "grammarNote": "Pola mencoba melakukan sesuatu [〜てみる (mencoba...)] + ajakan [ぜひ]."
    },
    {
      "sentence": "私は辛い食べ物を食べることができません。",
      "furigana": "わたしはからいたべものをたべることができません。",
      "romaji": "Watashi wa karai tabemono o taberu koto ga dekimasen.",
      "english": "I cannot eat spicy food.",
      "indonesian": "Saya tidak sanggup memakan makanan yang pedas.",
      "highlight": "食べる",
      "grammarNote": "Pola kemampuan potensial formal [Kata Kerja Kamus + ことができる/できない]."
    }
  ],
  "飲む": [
    {
      "sentence": "朝起きたらコップ一杯の温かい白湯を飲みます。",
      "furigana": "あさおきたらこっぷいっぱいのあたたかいさゆをのみます。",
      "romaji": "Asa okitara koppu ippai no atatakai sayu o nomimasu.",
      "english": "When I wake up in the morning, I drink a glass of warm plain water.",
      "indonesian": "Saat bangun di pagi hari, saya meminum segelas air putih hangat.",
      "highlight": "飲みます",
      "grammarNote": "Air putih hangat sehat [白湯 (sayu)] + verba minum non-lampau."
    },
    {
      "sentence": "喫茶店で香りの良いドリップコーヒーを飲みました。",
      "furigana": "きっさてんでかおりのよいどりっぷこーひーをのみました。",
      "romaji": "Kissaten de kaori no yoi dorippu koohii o nomimashita.",
      "english": "I drank aromatic drip coffee at the coffee shop.",
      "indonesian": "Saya meminum kopi seduh tetes yang harum aromanya di kedai kopi.",
      "highlight": "飲みました",
      "grammarNote": "Bentuk lampau santun [飲みました] dari kata kerja golongan 1 [飲む]."
    },
    {
      "sentence": "風邪をひいたので病院で処方された薬を飲みました。",
      "furigana": "かぜをひいたのでびょういんでしょほうされたくすりをのみました。",
      "romaji": "Kaze o hiita node byouin de shohou sareta kusuri o nomimashita.",
      "english": "Because I caught a cold, I took the medicine prescribed at the hospital.",
      "indonesian": "Karena terserang flu, saya meminum obat yang diresepkan oleh rumah sakit.",
      "highlight": "飲みました",
      "grammarNote": "Kolokasi meminum obat [薬を飲む] + konjungsi alasan sebab [ので]."
    },
    {
      "sentence": "運動した後は冷たい水を一気に飲み干しました。",
      "furigana": "うんどうしたあとはつめたいみずをいっきにのみほしました。",
      "romaji": "Undou shita ato wa tsumetai mizu o ikki ni nomihoshimashita.",
      "english": "After exercising, I drank up cold water in one gulp.",
      "indonesian": "Setelah berolahraga, saya meneguk habis air dingin dalam sekali teguk.",
      "highlight": "飲み",
      "grammarNote": "Verba majemuk meneguk habis [飲み干す (nomihosu)]."
    }
  ],
  "のむ": [
    {
      "sentence": "朝起きたらコップ一杯の温かい白湯を飲みます。",
      "furigana": "あさおきたらこっぷいっぱいのあたたかいさゆをのみます。",
      "romaji": "Asa okitara koppu ippai no atatakai sayu o nomimasu.",
      "english": "When I wake up in the morning, I drink a glass of warm plain water.",
      "indonesian": "Saat bangun di pagi hari, saya meminum segelas air putih hangat.",
      "highlight": "飲みます",
      "grammarNote": "Air putih hangat sehat [白湯 (sayu)] + verba minum non-lampau."
    },
    {
      "sentence": "喫茶店で香りの良いドリップコーヒーを飲みました。",
      "furigana": "きっさてんでかおりのよいどりっぷこーひーをのみました。",
      "romaji": "Kissaten de kaori no yoi dorippu koohii o nomimashita.",
      "english": "I drank aromatic drip coffee at the coffee shop.",
      "indonesian": "Saya meminum kopi seduh tetes yang harum aromanya di kedai kopi.",
      "highlight": "飲みました",
      "grammarNote": "Bentuk lampau santun [飲みました] dari kata kerja golongan 1 [飲む]."
    },
    {
      "sentence": "風邪をひいたので病院で処方された薬を飲みました。",
      "furigana": "かぜをひいたのでびょういんでしょほうされたくすりをのみました。",
      "romaji": "Kaze o hiita node byouin de shohou sareta kusuri o nomimashita.",
      "english": "Because I caught a cold, I took the medicine prescribed at the hospital.",
      "indonesian": "Karena terserang flu, saya meminum obat yang diresepkan oleh rumah sakit.",
      "highlight": "飲みました",
      "grammarNote": "Kolokasi meminum obat [薬を飲む] + konjungsi alasan sebab [ので]."
    },
    {
      "sentence": "運動した後は冷たい水を一気に飲み干しました。",
      "furigana": "うんどうしたあとはつめたいみずをいっきにのみほしました。",
      "romaji": "Undou shita ato wa tsumetai mizu o ikki ni nomihoshimashita.",
      "english": "After exercising, I drank up cold water in one gulp.",
      "indonesian": "Setelah berolahraga, saya meneguk habis air dingin dalam sekali teguk.",
      "highlight": "飲み",
      "grammarNote": "Verba majemuk meneguk habis [飲み干す (nomihosu)]."
    }
  ],
  "のみます": [
    {
      "sentence": "朝起きたらコップ一杯の温かい白湯を飲みます。",
      "furigana": "あさおきたらこっぷいっぱいのあたたかいさゆをのみます。",
      "romaji": "Asa okitara koppu ippai no atatakai sayu o nomimasu.",
      "english": "When I wake up in the morning, I drink a glass of warm plain water.",
      "indonesian": "Saat bangun di pagi hari, saya meminum segelas air putih hangat.",
      "highlight": "飲みます",
      "grammarNote": "Air putih hangat sehat [白湯 (sayu)] + verba minum non-lampau."
    },
    {
      "sentence": "喫茶店で香りの良いドリップコーヒーを飲みました。",
      "furigana": "きっさてんでかおりのよいどりっぷこーひーをのみました。",
      "romaji": "Kissaten de kaori no yoi dorippu koohii o nomimashita.",
      "english": "I drank aromatic drip coffee at the coffee shop.",
      "indonesian": "Saya meminum kopi seduh tetes yang harum aromanya di kedai kopi.",
      "highlight": "飲みました",
      "grammarNote": "Bentuk lampau santun [飲みました] dari kata kerja golongan 1 [飲む]."
    },
    {
      "sentence": "風邪をひいたので病院で処方された薬を飲みました。",
      "furigana": "かぜをひいたのでびょういんでしょほうされたくすりをのみました。",
      "romaji": "Kaze o hiita node byouin de shohou sareta kusuri o nomimashita.",
      "english": "Because I caught a cold, I took the medicine prescribed at the hospital.",
      "indonesian": "Karena terserang flu, saya meminum obat yang diresepkan oleh rumah sakit.",
      "highlight": "飲みました",
      "grammarNote": "Kolokasi meminum obat [薬を飲む] + konjungsi alasan sebab [ので]."
    },
    {
      "sentence": "運動した後は冷たい水を一気に飲み干しました。",
      "furigana": "うんどうしたあとはつめたいみずをいっきにのみほしました。",
      "romaji": "Undou shita ato wa tsumetai mizu o ikki ni nomihoshimashita.",
      "english": "After exercising, I drank up cold water in one gulp.",
      "indonesian": "Setelah berolahraga, saya meneguk habis air dingin dalam sekali teguk.",
      "highlight": "飲み",
      "grammarNote": "Verba majemuk meneguk habis [飲み干す (nomihosu)]."
    }
  ],
  "飲みます": [
    {
      "sentence": "朝起きたらコップ一杯の温かい白湯を飲みます。",
      "furigana": "あさおきたらこっぷいっぱいのあたたかいさゆをのみます。",
      "romaji": "Asa okitara koppu ippai no atatakai sayu o nomimasu.",
      "english": "When I wake up in the morning, I drink a glass of warm plain water.",
      "indonesian": "Saat bangun di pagi hari, saya meminum segelas air putih hangat.",
      "highlight": "飲みます",
      "grammarNote": "Air putih hangat sehat [白湯 (sayu)] + verba minum non-lampau."
    },
    {
      "sentence": "喫茶店で香りの良いドリップコーヒーを飲みました。",
      "furigana": "きっさてんでかおりのよいどりっぷこーひーをのみました。",
      "romaji": "Kissaten de kaori no yoi dorippu koohii o nomimashita.",
      "english": "I drank aromatic drip coffee at the coffee shop.",
      "indonesian": "Saya meminum kopi seduh tetes yang harum aromanya di kedai kopi.",
      "highlight": "飲みました",
      "grammarNote": "Bentuk lampau santun [飲みました] dari kata kerja golongan 1 [飲む]."
    },
    {
      "sentence": "風邪をひいたので病院で処方された薬を飲みました。",
      "furigana": "かぜをひいたのでびょういんでしょほうされたくすりをのみました。",
      "romaji": "Kaze o hiita node byouin de shohou sareta kusuri o nomimashita.",
      "english": "Because I caught a cold, I took the medicine prescribed at the hospital.",
      "indonesian": "Karena terserang flu, saya meminum obat yang diresepkan oleh rumah sakit.",
      "highlight": "飲みました",
      "grammarNote": "Kolokasi meminum obat [薬を飲む] + konjungsi alasan sebab [ので]."
    },
    {
      "sentence": "運動した後は冷たい水を一気に飲み干しました。",
      "furigana": "うんどうしたあとはつめたいみずをいっきにのみほしました。",
      "romaji": "Undou shita ato wa tsumetai mizu o ikki ni nomihoshimashita.",
      "english": "After exercising, I drank up cold water in one gulp.",
      "indonesian": "Setelah berolahraga, saya meneguk habis air dingin dalam sekali teguk.",
      "highlight": "飲み",
      "grammarNote": "Verba majemuk meneguk habis [飲み干す (nomihosu)]."
    }
  ],
  "行く": [
    {
      "sentence": "毎朝七時半に家を出て学校へ行きます。",
      "furigana": "まいあさしちじはんにいえをでてがっこうへいきます。",
      "romaji": "Maiasa shichijihan ni ie o dete gakkou e ikimasu.",
      "english": "I leave home at 7:30 every morning and go to school.",
      "indonesian": "Setiap pagi pukul 7:30 saya berangkat dari rumah lalu pergi ke sekolah.",
      "highlight": "行きます",
      "grammarNote": "Partikel arah tujuan [へ] + kata kerja pergi [行きます]."
    },
    {
      "sentence": "去年の秋休みに友達と京都へ行きました。",
      "furigana": "きょねんのあきやすみにともだちときょうとへいきました。",
      "romaji": "Kyonen no akiyasumi ni tomodachi to Kyouto e ikimashita.",
      "english": "I went to Kyoto with friends during last year s autumn break.",
      "indonesian": "Pada liburan musim gugur tahun lalu saya pergi ke Kyoto bersama kawan.",
      "highlight": "行きました",
      "grammarNote": "Bentuk lampau [行きました] dari kata kerja tidak beraturan [行く -> 行った]."
    },
    {
      "sentence": "今度の連休は温泉旅館へゆっくり温泉に入りに行きたいです。",
      "furigana": "こんどのれんきゅうはおんせんりょかんへゆっくりおんせんにはいりにいきたいです。",
      "romaji": "Kondo no renkyuu wa onsen ryokan e yukkuri onsen ni hairi ni ikitai desu.",
      "english": "During the upcoming long weekend, I want to go to a hot spring inn to leisurely soak in the onsen.",
      "indonesian": "Pada liburan panjang mendatang, saya ingin pergi ke penginapan ryokan untuk berendam santai di air panas.",
      "highlight": "行きたい",
      "grammarNote": "Pola tujuan bepergian [Kata Kerja stem + に行く] + keinginan [〜たい]."
    },
    {
      "sentence": "この道をまっすぐ行くと右側に大きな郵便局があります。",
      "furigana": "このみちをまっすぐいくとみぎがわにおおきなゆうびんきょくがあります。",
      "romaji": "Kono michi o massugu iku to migigawa ni ookina yuubinkyoku ga arimasu.",
      "english": "If you go straight down this street, there is a large post office on the right side.",
      "indonesian": "Bila Anda lurus menyusuri jalan ini, di sebelah kanan ada kantor pos besar.",
      "highlight": "行く",
      "grammarNote": "Partikel lintasan rute [道を] + pengandaian penunjuk arah [〜と]."
    }
  ],
  "いく": [
    {
      "sentence": "毎朝七時半に家を出て学校へ行きます。",
      "furigana": "まいあさしちじはんにいえをでてがっこうへいきます。",
      "romaji": "Maiasa shichijihan ni ie o dete gakkou e ikimasu.",
      "english": "I leave home at 7:30 every morning and go to school.",
      "indonesian": "Setiap pagi pukul 7:30 saya berangkat dari rumah lalu pergi ke sekolah.",
      "highlight": "行きます",
      "grammarNote": "Partikel arah tujuan [へ] + kata kerja pergi [行きます]."
    },
    {
      "sentence": "去年の秋休みに友達と京都へ行きました。",
      "furigana": "きょねんのあきやすみにともだちときょうとへいきました。",
      "romaji": "Kyonen no akiyasumi ni tomodachi to Kyouto e ikimashita.",
      "english": "I went to Kyoto with friends during last year s autumn break.",
      "indonesian": "Pada liburan musim gugur tahun lalu saya pergi ke Kyoto bersama kawan.",
      "highlight": "行きました",
      "grammarNote": "Bentuk lampau [行きました] dari kata kerja tidak beraturan [行く -> 行った]."
    },
    {
      "sentence": "今度の連休は温泉旅館へゆっくり温泉に入りに行きたいです。",
      "furigana": "こんどのれんきゅうはおんせんりょかんへゆっくりおんせんにはいりにいきたいです。",
      "romaji": "Kondo no renkyuu wa onsen ryokan e yukkuri onsen ni hairi ni ikitai desu.",
      "english": "During the upcoming long weekend, I want to go to a hot spring inn to leisurely soak in the onsen.",
      "indonesian": "Pada liburan panjang mendatang, saya ingin pergi ke penginapan ryokan untuk berendam santai di air panas.",
      "highlight": "行きたい",
      "grammarNote": "Pola tujuan bepergian [Kata Kerja stem + に行く] + keinginan [〜たい]."
    },
    {
      "sentence": "この道をまっすぐ行くと右側に大きな郵便局があります。",
      "furigana": "このみちをまっすぐいくとみぎがわにおおきなゆうびんきょくがあります。",
      "romaji": "Kono michi o massugu iku to migigawa ni ookina yuubinkyoku ga arimasu.",
      "english": "If you go straight down this street, there is a large post office on the right side.",
      "indonesian": "Bila Anda lurus menyusuri jalan ini, di sebelah kanan ada kantor pos besar.",
      "highlight": "行く",
      "grammarNote": "Partikel lintasan rute [道を] + pengandaian penunjuk arah [〜と]."
    }
  ],
  "いきます": [
    {
      "sentence": "毎朝七時半に家を出て学校へ行きます。",
      "furigana": "まいあさしちじはんにいえをでてがっこうへいきます。",
      "romaji": "Maiasa shichijihan ni ie o dete gakkou e ikimasu.",
      "english": "I leave home at 7:30 every morning and go to school.",
      "indonesian": "Setiap pagi pukul 7:30 saya berangkat dari rumah lalu pergi ke sekolah.",
      "highlight": "行きます",
      "grammarNote": "Partikel arah tujuan [へ] + kata kerja pergi [行きます]."
    },
    {
      "sentence": "去年の秋休みに友達と京都へ行きました。",
      "furigana": "きょねんのあきやすみにともだちときょうとへいきました。",
      "romaji": "Kyonen no akiyasumi ni tomodachi to Kyouto e ikimashita.",
      "english": "I went to Kyoto with friends during last year s autumn break.",
      "indonesian": "Pada liburan musim gugur tahun lalu saya pergi ke Kyoto bersama kawan.",
      "highlight": "行きました",
      "grammarNote": "Bentuk lampau [行きました] dari kata kerja tidak beraturan [行く -> 行った]."
    },
    {
      "sentence": "今度の連休は温泉旅館へゆっくり温泉に入りに行きたいです。",
      "furigana": "こんどのれんきゅうはおんせんりょかんへゆっくりおんせんにはいりにいきたいです。",
      "romaji": "Kondo no renkyuu wa onsen ryokan e yukkuri onsen ni hairi ni ikitai desu.",
      "english": "During the upcoming long weekend, I want to go to a hot spring inn to leisurely soak in the onsen.",
      "indonesian": "Pada liburan panjang mendatang, saya ingin pergi ke penginapan ryokan untuk berendam santai di air panas.",
      "highlight": "行きたい",
      "grammarNote": "Pola tujuan bepergian [Kata Kerja stem + に行く] + keinginan [〜たい]."
    },
    {
      "sentence": "この道をまっすぐ行くと右側に大きな郵便局があります。",
      "furigana": "このみちをまっすぐいくとみぎがわにおおきなゆうびんきょくがあります。",
      "romaji": "Kono michi o massugu iku to migigawa ni ookina yuubinkyoku ga arimasu.",
      "english": "If you go straight down this street, there is a large post office on the right side.",
      "indonesian": "Bila Anda lurus menyusuri jalan ini, di sebelah kanan ada kantor pos besar.",
      "highlight": "行く",
      "grammarNote": "Partikel lintasan rute [道を] + pengandaian penunjuk arah [〜と]."
    }
  ],
  "行きます": [
    {
      "sentence": "毎朝七時半に家を出て学校へ行きます。",
      "furigana": "まいあさしちじはんにいえをでてがっこうへいきます。",
      "romaji": "Maiasa shichijihan ni ie o dete gakkou e ikimasu.",
      "english": "I leave home at 7:30 every morning and go to school.",
      "indonesian": "Setiap pagi pukul 7:30 saya berangkat dari rumah lalu pergi ke sekolah.",
      "highlight": "行きます",
      "grammarNote": "Partikel arah tujuan [へ] + kata kerja pergi [行きます]."
    },
    {
      "sentence": "去年の秋休みに友達と京都へ行きました。",
      "furigana": "きょねんのあきやすみにともだちときょうとへいきました。",
      "romaji": "Kyonen no akiyasumi ni tomodachi to Kyouto e ikimashita.",
      "english": "I went to Kyoto with friends during last year s autumn break.",
      "indonesian": "Pada liburan musim gugur tahun lalu saya pergi ke Kyoto bersama kawan.",
      "highlight": "行きました",
      "grammarNote": "Bentuk lampau [行きました] dari kata kerja tidak beraturan [行く -> 行った]."
    },
    {
      "sentence": "今度の連休は温泉旅館へゆっくり温泉に入りに行きたいです。",
      "furigana": "こんどのれんきゅうはおんせんりょかんへゆっくりおんせんにはいりにいきたいです。",
      "romaji": "Kondo no renkyuu wa onsen ryokan e yukkuri onsen ni hairi ni ikitai desu.",
      "english": "During the upcoming long weekend, I want to go to a hot spring inn to leisurely soak in the onsen.",
      "indonesian": "Pada liburan panjang mendatang, saya ingin pergi ke penginapan ryokan untuk berendam santai di air panas.",
      "highlight": "行きたい",
      "grammarNote": "Pola tujuan bepergian [Kata Kerja stem + に行く] + keinginan [〜たい]."
    },
    {
      "sentence": "この道をまっすぐ行くと右側に大きな郵便局があります。",
      "furigana": "このみちをまっすぐいくとみぎがわにおおきなゆうびんきょくがあります。",
      "romaji": "Kono michi o massugu iku to migigawa ni ookina yuubinkyoku ga arimasu.",
      "english": "If you go straight down this street, there is a large post office on the right side.",
      "indonesian": "Bila Anda lurus menyusuri jalan ini, di sebelah kanan ada kantor pos besar.",
      "highlight": "行く",
      "grammarNote": "Partikel lintasan rute [道を] + pengandaian penunjuk arah [〜と]."
    }
  ],
  "来る": [
    {
      "sentence": "明日の午後、私の部屋に友達が遊びに来ます。",
      "furigana": "あしたのごご、わたしのへやにともだちがあそびにきます。",
      "romaji": "Ashita no gogo, watashi no heya ni tomodachi ga asobi ni kimasu.",
      "english": "Tomorrow afternoon, my friend will come over to my room to hang out.",
      "indonesian": "Besok siang, teman saya akan datang bermain ke kamar saya.",
      "highlight": "来ます",
      "grammarNote": "Pola datang untuk berkunjung [遊びに来る (asobi ni kuru)]."
    },
    {
      "sentence": "日本へ来てから日本語の勉強を真剣に始めました。",
      "furigana": "にほんへきてからにほんごのべんきょうをしんけんにはじめました。",
      "romaji": "Nihon e kite kara nihongo no benkyou o shinken ni hajimemashita.",
      "english": "Since coming to Japan, I have started studying Japanese seriously.",
      "indonesian": "Sejak datang ke Jepang, saya mulai belajar bahasa Jepang dengan sungguh-sungguh.",
      "highlight": "来て",
      "grammarNote": "Bentuk Te dari kata kerja kuru adalah [来て (kite)] + [〜から (sejak...)]."
    },
    {
      "sentence": "春になると公園の桜の木に鳥がたくさんやって来ます。",
      "furigana": "はるになるとこうえんのさくらのきにとりがたくさんやってきます。",
      "romaji": "Haru ni naru to kouen no sakura no ki ni tori ga takusan yatte kimasu.",
      "english": "When spring arrives, many birds come visiting the cherry blossom trees in the park.",
      "indonesian": "Bila musim semi tiba, banyak burung berdatangan ke pohon sakura di taman.",
      "highlight": "来ます",
      "grammarNote": "Verba kedatangan berdatangan [やって来る (yatte kuru)]."
    },
    {
      "sentence": "駅のホームで電車が来るのを静かに待っています。",
      "furigana": "えきのほーむででんしゃがくるのをしずかにまっています。",
      "romaji": "Eki no hoomu de densha ga kuru no o shizuka ni matte imasu.",
      "english": "I am quietly waiting on the station platform for the train to arrive.",
      "indonesian": "Saya menunggu dengan tenang di peron stasiun hingga kereta tiba.",
      "highlight": "来る",
      "grammarNote": "Nominalisasi klausa objek penantian [電車が来るの + を待つ]."
    }
  ],
  "くる": [
    {
      "sentence": "明日の午後、私の部屋に友達が遊びに来ます。",
      "furigana": "あしたのごご、わたしのへやにともだちがあそびにきます。",
      "romaji": "Ashita no gogo, watashi no heya ni tomodachi ga asobi ni kimasu.",
      "english": "Tomorrow afternoon, my friend will come over to my room to hang out.",
      "indonesian": "Besok siang, teman saya akan datang bermain ke kamar saya.",
      "highlight": "来ます",
      "grammarNote": "Pola datang untuk berkunjung [遊びに来る (asobi ni kuru)]."
    },
    {
      "sentence": "日本へ来てから日本語の勉強を真剣に始めました。",
      "furigana": "にほんへきてからにほんごのべんきょうをしんけんにはじめました。",
      "romaji": "Nihon e kite kara nihongo no benkyou o shinken ni hajimemashita.",
      "english": "Since coming to Japan, I have started studying Japanese seriously.",
      "indonesian": "Sejak datang ke Jepang, saya mulai belajar bahasa Jepang dengan sungguh-sungguh.",
      "highlight": "来て",
      "grammarNote": "Bentuk Te dari kata kerja kuru adalah [来て (kite)] + [〜から (sejak...)]."
    },
    {
      "sentence": "春になると公園の桜の木に鳥がたくさんやって来ます。",
      "furigana": "はるになるとこうえんのさくらのきにとりがたくさんやってきます。",
      "romaji": "Haru ni naru to kouen no sakura no ki ni tori ga takusan yatte kimasu.",
      "english": "When spring arrives, many birds come visiting the cherry blossom trees in the park.",
      "indonesian": "Bila musim semi tiba, banyak burung berdatangan ke pohon sakura di taman.",
      "highlight": "来ます",
      "grammarNote": "Verba kedatangan berdatangan [やって来る (yatte kuru)]."
    },
    {
      "sentence": "駅のホームで電車が来るのを静かに待っています。",
      "furigana": "えきのほーむででんしゃがくるのをしずかにまっています。",
      "romaji": "Eki no hoomu de densha ga kuru no o shizuka ni matte imasu.",
      "english": "I am quietly waiting on the station platform for the train to arrive.",
      "indonesian": "Saya menunggu dengan tenang di peron stasiun hingga kereta tiba.",
      "highlight": "来る",
      "grammarNote": "Nominalisasi klausa objek penantian [電車が来るの + を待つ]."
    }
  ],
  "きます": [
    {
      "sentence": "明日の午後、私の部屋に友達が遊びに来ます。",
      "furigana": "あしたのごご、わたしのへやにともだちがあそびにきます。",
      "romaji": "Ashita no gogo, watashi no heya ni tomodachi ga asobi ni kimasu.",
      "english": "Tomorrow afternoon, my friend will come over to my room to hang out.",
      "indonesian": "Besok siang, teman saya akan datang bermain ke kamar saya.",
      "highlight": "来ます",
      "grammarNote": "Pola datang untuk berkunjung [遊びに来る (asobi ni kuru)]."
    },
    {
      "sentence": "日本へ来てから日本語の勉強を真剣に始めました。",
      "furigana": "にほんへきてからにほんごのべんきょうをしんけんにはじめました。",
      "romaji": "Nihon e kite kara nihongo no benkyou o shinken ni hajimemashita.",
      "english": "Since coming to Japan, I have started studying Japanese seriously.",
      "indonesian": "Sejak datang ke Jepang, saya mulai belajar bahasa Jepang dengan sungguh-sungguh.",
      "highlight": "来て",
      "grammarNote": "Bentuk Te dari kata kerja kuru adalah [来て (kite)] + [〜から (sejak...)]."
    },
    {
      "sentence": "春になると公園の桜の木に鳥がたくさんやって来ます。",
      "furigana": "はるになるとこうえんのさくらのきにとりがたくさんやってきます。",
      "romaji": "Haru ni naru to kouen no sakura no ki ni tori ga takusan yatte kimasu.",
      "english": "When spring arrives, many birds come visiting the cherry blossom trees in the park.",
      "indonesian": "Bila musim semi tiba, banyak burung berdatangan ke pohon sakura di taman.",
      "highlight": "来ます",
      "grammarNote": "Verba kedatangan berdatangan [やって来る (yatte kuru)]."
    },
    {
      "sentence": "駅のホームで電車が来るのを静かに待っています。",
      "furigana": "えきのほーむででんしゃがくるのをしずかにまっています。",
      "romaji": "Eki no hoomu de densha ga kuru no o shizuka ni matte imasu.",
      "english": "I am quietly waiting on the station platform for the train to arrive.",
      "indonesian": "Saya menunggu dengan tenang di peron stasiun hingga kereta tiba.",
      "highlight": "来る",
      "grammarNote": "Nominalisasi klausa objek penantian [電車が来るの + を待つ]."
    }
  ],
  "来ます": [
    {
      "sentence": "明日の午後、私の部屋に友達が遊びに来ます。",
      "furigana": "あしたのごご、わたしのへやにともだちがあそびにきます。",
      "romaji": "Ashita no gogo, watashi no heya ni tomodachi ga asobi ni kimasu.",
      "english": "Tomorrow afternoon, my friend will come over to my room to hang out.",
      "indonesian": "Besok siang, teman saya akan datang bermain ke kamar saya.",
      "highlight": "来ます",
      "grammarNote": "Pola datang untuk berkunjung [遊びに来る (asobi ni kuru)]."
    },
    {
      "sentence": "日本へ来てから日本語の勉強を真剣に始めました。",
      "furigana": "にほんへきてからにほんごのべんきょうをしんけんにはじめました。",
      "romaji": "Nihon e kite kara nihongo no benkyou o shinken ni hajimemashita.",
      "english": "Since coming to Japan, I have started studying Japanese seriously.",
      "indonesian": "Sejak datang ke Jepang, saya mulai belajar bahasa Jepang dengan sungguh-sungguh.",
      "highlight": "来て",
      "grammarNote": "Bentuk Te dari kata kerja kuru adalah [来て (kite)] + [〜から (sejak...)]."
    },
    {
      "sentence": "春になると公園の桜の木に鳥がたくさんやって来ます。",
      "furigana": "はるになるとこうえんのさくらのきにとりがたくさんやってきます。",
      "romaji": "Haru ni naru to kouen no sakura no ki ni tori ga takusan yatte kimasu.",
      "english": "When spring arrives, many birds come visiting the cherry blossom trees in the park.",
      "indonesian": "Bila musim semi tiba, banyak burung berdatangan ke pohon sakura di taman.",
      "highlight": "来ます",
      "grammarNote": "Verba kedatangan berdatangan [やって来る (yatte kuru)]."
    },
    {
      "sentence": "駅のホームで電車が来るのを静かに待っています。",
      "furigana": "えきのほーむででんしゃがくるのをしずかにまっています。",
      "romaji": "Eki no hoomu de densha ga kuru no o shizuka ni matte imasu.",
      "english": "I am quietly waiting on the station platform for the train to arrive.",
      "indonesian": "Saya menunggu dengan tenang di peron stasiun hingga kereta tiba.",
      "highlight": "来る",
      "grammarNote": "Nominalisasi klausa objek penantian [電車が来るの + を待つ]."
    }
  ],
  "見る": [
    {
      "sentence": "日曜日の夜は家族みんなでリビングでテレビを見ます。",
      "furigana": "にちようびのよるはかぞくみんなでりびんぐでてれびをみます。",
      "romaji": "Nichiyoubi no yoru wa kazoku minna de ribingu de terebi o mimasu.",
      "english": "On Sunday evenings, our whole family watches television in the living room.",
      "indonesian": "Pada Minggu malam sekeluarga menonton televisi bersama di ruang keluarga.",
      "highlight": "見ます",
      "grammarNote": "Menonton televisi [テレビを見る (terebi o miru)]."
    },
    {
      "sentence": "美術館で有名な画家の素晴らしい絵画を見ました。",
      "furigana": "びじゅつかんでゆうめいながかのすばらしいかいがをみました。",
      "romaji": "Bijutsukan de yuumei na gaka no subarashii kaiga o mimashita.",
      "english": "I viewed wonderful paintings by a famous painter at the art museum.",
      "indonesian": "Saya menyaksikan lukisan indah karya pelukis ternama di museum seni rupa.",
      "highlight": "見ました",
      "grammarNote": "Bentuk lampau [見ました] dari kata kerja golongan 2 ichidan [見る]."
    },
    {
      "sentence": "この展望台からは街の夜景が一望に見渡せます。",
      "furigana": "このてんぼうだいからはまちのやけいがいちぼうにみわたせます。",
      "romaji": "Kono tenboudai kara wa machi no yakei ga ichibou ni miwatasemasu.",
      "english": "From this observation deck, you can overlook the city nightscape in one glance.",
      "indonesian": "Dari gardu pandang ini kita dapat memandang pemandangan malam kota secara menyeluruh.",
      "highlight": "見",
      "grammarNote": "Verba majemuk memandang luas [見渡す (miwatasu)]."
    },
    {
      "sentence": "分からない単語があれば辞書を見て確認しましょう。",
      "furigana": "わからないたんごがあればじしょをみてかくにんしましょう。",
      "romaji": "Wakaranai tango ga areba jisho o mite kakunin shimashou.",
      "english": "If there are words you don t understand, let s look at the dictionary and check.",
      "indonesian": "Jika ada kosakata yang tidak dimengerti, mari kita lihat kamus dan pastikan artinya.",
      "highlight": "見て",
      "grammarNote": "Kolokasi memeriksa kamus [辞書を見る] + bentuk Te penyambung urutan."
    }
  ],
  "みる": [
    {
      "sentence": "日曜日の夜は家族みんなでリビングでテレビを見ます。",
      "furigana": "にちようびのよるはかぞくみんなでりびんぐでてれびをみます。",
      "romaji": "Nichiyoubi no yoru wa kazoku minna de ribingu de terebi o mimasu.",
      "english": "On Sunday evenings, our whole family watches television in the living room.",
      "indonesian": "Pada Minggu malam sekeluarga menonton televisi bersama di ruang keluarga.",
      "highlight": "見ます",
      "grammarNote": "Menonton televisi [テレビを見る (terebi o miru)]."
    },
    {
      "sentence": "美術館で有名な画家の素晴らしい絵画を見ました。",
      "furigana": "びじゅつかんでゆうめいながかのすばらしいかいがをみました。",
      "romaji": "Bijutsukan de yuumei na gaka no subarashii kaiga o mimashita.",
      "english": "I viewed wonderful paintings by a famous painter at the art museum.",
      "indonesian": "Saya menyaksikan lukisan indah karya pelukis ternama di museum seni rupa.",
      "highlight": "見ました",
      "grammarNote": "Bentuk lampau [見ました] dari kata kerja golongan 2 ichidan [見る]."
    },
    {
      "sentence": "この展望台からは街の夜景が一望に見渡せます。",
      "furigana": "このてんぼうだいからはまちのやけいがいちぼうにみわたせます。",
      "romaji": "Kono tenboudai kara wa machi no yakei ga ichibou ni miwatasemasu.",
      "english": "From this observation deck, you can overlook the city nightscape in one glance.",
      "indonesian": "Dari gardu pandang ini kita dapat memandang pemandangan malam kota secara menyeluruh.",
      "highlight": "見",
      "grammarNote": "Verba majemuk memandang luas [見渡す (miwatasu)]."
    },
    {
      "sentence": "分からない単語があれば辞書を見て確認しましょう。",
      "furigana": "わからないたんごがあればじしょをみてかくにんしましょう。",
      "romaji": "Wakaranai tango ga areba jisho o mite kakunin shimashou.",
      "english": "If there are words you don t understand, let s look at the dictionary and check.",
      "indonesian": "Jika ada kosakata yang tidak dimengerti, mari kita lihat kamus dan pastikan artinya.",
      "highlight": "見て",
      "grammarNote": "Kolokasi memeriksa kamus [辞書を見る] + bentuk Te penyambung urutan."
    }
  ],
  "みます": [
    {
      "sentence": "日曜日の夜は家族みんなでリビングでテレビを見ます。",
      "furigana": "にちようびのよるはかぞくみんなでりびんぐでてれびをみます。",
      "romaji": "Nichiyoubi no yoru wa kazoku minna de ribingu de terebi o mimasu.",
      "english": "On Sunday evenings, our whole family watches television in the living room.",
      "indonesian": "Pada Minggu malam sekeluarga menonton televisi bersama di ruang keluarga.",
      "highlight": "見ます",
      "grammarNote": "Menonton televisi [テレビを見る (terebi o miru)]."
    },
    {
      "sentence": "美術館で有名な画家の素晴らしい絵画を見ました。",
      "furigana": "びじゅつかんでゆうめいながかのすばらしいかいがをみました。",
      "romaji": "Bijutsukan de yuumei na gaka no subarashii kaiga o mimashita.",
      "english": "I viewed wonderful paintings by a famous painter at the art museum.",
      "indonesian": "Saya menyaksikan lukisan indah karya pelukis ternama di museum seni rupa.",
      "highlight": "見ました",
      "grammarNote": "Bentuk lampau [見ました] dari kata kerja golongan 2 ichidan [見る]."
    },
    {
      "sentence": "この展望台からは街の夜景が一望に見渡せます。",
      "furigana": "このてんぼうだいからはまちのやけいがいちぼうにみわたせます。",
      "romaji": "Kono tenboudai kara wa machi no yakei ga ichibou ni miwatasemasu.",
      "english": "From this observation deck, you can overlook the city nightscape in one glance.",
      "indonesian": "Dari gardu pandang ini kita dapat memandang pemandangan malam kota secara menyeluruh.",
      "highlight": "見",
      "grammarNote": "Verba majemuk memandang luas [見渡す (miwatasu)]."
    },
    {
      "sentence": "分からない単語があれば辞書を見て確認しましょう。",
      "furigana": "わからないたんごがあればじしょをみてかくにんしましょう。",
      "romaji": "Wakaranai tango ga areba jisho o mite kakunin shimashou.",
      "english": "If there are words you don t understand, let s look at the dictionary and check.",
      "indonesian": "Jika ada kosakata yang tidak dimengerti, mari kita lihat kamus dan pastikan artinya.",
      "highlight": "見て",
      "grammarNote": "Kolokasi memeriksa kamus [辞書を見る] + bentuk Te penyambung urutan."
    }
  ],
  "見ます": [
    {
      "sentence": "日曜日の夜は家族みんなでリビングでテレビを見ます。",
      "furigana": "にちようびのよるはかぞくみんなでりびんぐでてれびをみます。",
      "romaji": "Nichiyoubi no yoru wa kazoku minna de ribingu de terebi o mimasu.",
      "english": "On Sunday evenings, our whole family watches television in the living room.",
      "indonesian": "Pada Minggu malam sekeluarga menonton televisi bersama di ruang keluarga.",
      "highlight": "見ます",
      "grammarNote": "Menonton televisi [テレビを見る (terebi o miru)]."
    },
    {
      "sentence": "美術館で有名な画家の素晴らしい絵画を見ました。",
      "furigana": "びじゅつかんでゆうめいながかのすばらしいかいがをみました。",
      "romaji": "Bijutsukan de yuumei na gaka no subarashii kaiga o mimashita.",
      "english": "I viewed wonderful paintings by a famous painter at the art museum.",
      "indonesian": "Saya menyaksikan lukisan indah karya pelukis ternama di museum seni rupa.",
      "highlight": "見ました",
      "grammarNote": "Bentuk lampau [見ました] dari kata kerja golongan 2 ichidan [見る]."
    },
    {
      "sentence": "この展望台からは街の夜景が一望に見渡せます。",
      "furigana": "このてんぼうだいからはまちのやけいがいちぼうにみわたせます。",
      "romaji": "Kono tenboudai kara wa machi no yakei ga ichibou ni miwatasemasu.",
      "english": "From this observation deck, you can overlook the city nightscape in one glance.",
      "indonesian": "Dari gardu pandang ini kita dapat memandang pemandangan malam kota secara menyeluruh.",
      "highlight": "見",
      "grammarNote": "Verba majemuk memandang luas [見渡す (miwatasu)]."
    },
    {
      "sentence": "分からない単語があれば辞書を見て確認しましょう。",
      "furigana": "わからないたんごがあればじしょをみてかくにんしましょう。",
      "romaji": "Wakaranai tango ga areba jisho o mite kakunin shimashou.",
      "english": "If there are words you don t understand, let s look at the dictionary and check.",
      "indonesian": "Jika ada kosakata yang tidak dimengerti, mari kita lihat kamus dan pastikan artinya.",
      "highlight": "見て",
      "grammarNote": "Kolokasi memeriksa kamus [辞書を見る] + bentuk Te penyambung urutan."
    }
  ],
  "友達": [
    {
      "sentence": "大学に入学して新しい友達がたくさんできました。",
      "furigana": "だいがくににゅうがくしてあたらしいともだちがたくさんできました。",
      "romaji": "Daigaku ni nyuugaku shite atarashii tomodachi ga takusan dekimashita.",
      "english": "I made many new friends after entering university.",
      "indonesian": "Setelah masuk kuliah saya mendapatkan banyak kawan baru.",
      "highlight": "友達",
      "grammarNote": "Pola mendapatkan kawan [友達ができる (tomodachi ga dekiru)]."
    },
    {
      "sentence": "週末に友達と映画館へ話題の映画を見に行きました。",
      "furigana": "しゅうまつにともだちとえいがかんへわだいのえいがをみにいきました。",
      "romaji": "Shuumatsu ni tomodachi to eigakan e wadai no eiga o mi ni ikimashita.",
      "english": "I went to the cinema with friends on the weekend to watch a popular movie.",
      "indonesian": "Pada akhir pekan saya pergi ke bioskop bersama kawan untuk menonton film yang sedang populer.",
      "highlight": "友達",
      "grammarNote": "Partikel kebersamaan kawan [友達と (bersama kawan)]."
    },
    {
      "sentence": "遠くに住んでいる友達に近況を伝えるメッセージを送りました。",
      "furigana": "とおくにすんでいるともだちにきんきょうをつたえるめっせーじをおくりました。",
      "romaji": "Tooku ni sunde iru tomodachi ni kinkyou o tsutaeru messeeji o okurimashita.",
      "english": "I sent a message to my friend living far away sharing my recent updates.",
      "indonesian": "Saya mengirimkan pesan bertukar kabar kepada teman yang bertempat tinggal jauh.",
      "highlight": "友達",
      "grammarNote": "Penerima pesan [友達に] + klausa modifikasi nomina [住んでいる友達]."
    },
    {
      "sentence": "困った時に助け合える親友をずっと大切にしたいです。",
      "furigana": "こまったときにたすけあえるしんゆうをずっとたいせつにしたいです。",
      "romaji": "Komatta toki ni tasukeaeru shinyuu o zutto taisetsu ni shitai desu.",
      "english": "I want to forever cherish close friends who can help each other in times of trouble.",
      "indonesian": "Saya ingin senantiasa menghargai sahabat sejati yang dapat saling menopang di masa sukar.",
      "highlight": "友",
      "grammarNote": "Sahabat karib [親友 (shinyuu)] + pola menghargai [大切にする]."
    }
  ],
  "ともだち": [
    {
      "sentence": "大学に入学して新しい友達がたくさんできました。",
      "furigana": "だいがくににゅうがくしてあたらしいともだちがたくさんできました。",
      "romaji": "Daigaku ni nyuugaku shite atarashii tomodachi ga takusan dekimashita.",
      "english": "I made many new friends after entering university.",
      "indonesian": "Setelah masuk kuliah saya mendapatkan banyak kawan baru.",
      "highlight": "友達",
      "grammarNote": "Pola mendapatkan kawan [友達ができる (tomodachi ga dekiru)]."
    },
    {
      "sentence": "週末に友達と映画館へ話題の映画を見に行きました。",
      "furigana": "しゅうまつにともだちとえいがかんへわだいのえいがをみにいきました。",
      "romaji": "Shuumatsu ni tomodachi to eigakan e wadai no eiga o mi ni ikimashita.",
      "english": "I went to the cinema with friends on the weekend to watch a popular movie.",
      "indonesian": "Pada akhir pekan saya pergi ke bioskop bersama kawan untuk menonton film yang sedang populer.",
      "highlight": "友達",
      "grammarNote": "Partikel kebersamaan kawan [友達と (bersama kawan)]."
    },
    {
      "sentence": "遠くに住んでいる友達に近況を伝えるメッセージを送りました。",
      "furigana": "とおくにすんでいるともだちにきんきょうをつたえるめっせーじをおくりました。",
      "romaji": "Tooku ni sunde iru tomodachi ni kinkyou o tsutaeru messeeji o okurimashita.",
      "english": "I sent a message to my friend living far away sharing my recent updates.",
      "indonesian": "Saya mengirimkan pesan bertukar kabar kepada teman yang bertempat tinggal jauh.",
      "highlight": "友達",
      "grammarNote": "Penerima pesan [友達に] + klausa modifikasi nomina [住んでいる友達]."
    },
    {
      "sentence": "困った時に助け合える親友をずっと大切にしたいです。",
      "furigana": "こまったときにたすけあえるしんゆうをずっとたいせつにしたいです。",
      "romaji": "Komatta toki ni tasukeaeru shinyuu o zutto taisetsu ni shitai desu.",
      "english": "I want to forever cherish close friends who can help each other in times of trouble.",
      "indonesian": "Saya ingin senantiasa menghargai sahabat sejati yang dapat saling menopang di masa sukar.",
      "highlight": "友",
      "grammarNote": "Sahabat karib [親友 (shinyuu)] + pola menghargai [大切にする]."
    }
  ]
};

// Returns exactly 4 educational sentences for any Kotoba word
export function getKotobaSentences(word: KotobaItem): KotobaSentenceExample[] {
  // Check if item has custom sentences attached
  if (word.sentences && word.sentences.length >= 4) {
    return word.sentences.slice(0, 4);
  }

  // Lookup in curated dictionary by kanji, kana, or id
  const target = word.kanji || word.kana;
  const match = KOTOBA_SENTENCES[word.id] || KOTOBA_SENTENCES[word.kanji] || KOTOBA_SENTENCES[word.kana];
  if (match && match.length >= 4) {
    return match.slice(0, 4);
  }

  // Jika data kurasi spesifik belum tersedia, buat struktur data tepat 4 contoh kalimat
  // yang siap diisi kemudian dengan penanda isPlaceholder yang jelas (bukan data fiktif).
  const wordDisplay = word.kanji || word.kana;
  const reading = word.kana || word.romaji || wordDisplay;
  const meaning = word.arti || '';

  return [
    {
      sentence: `${wordDisplay}の例文 01（準備中）`,
      furigana: `${reading}のれいぶん 01`,
      romaji: `${word.romaji || reading} no reibun 01`,
      english: `Example sentence 01 for vocabulary "${wordDisplay}" (${meaning}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 01 untuk kosakata "${wordDisplay}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      highlight: wordDisplay,
      grammarNote: `Slot struktur contoh kalimat 01 untuk kosakata ${wordDisplay} (Bab ${word.bab}).`,
      isPlaceholder: true
    },
    {
      sentence: `${wordDisplay}の例文 02（準備中）`,
      furigana: `${reading}のれいぶん 02`,
      romaji: `${word.romaji || reading} no reibun 02`,
      english: `Example sentence 02 for vocabulary "${wordDisplay}" (${meaning}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 02 untuk kosakata "${wordDisplay}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      highlight: wordDisplay,
      grammarNote: `Slot struktur contoh kalimat 02 untuk kosakata ${wordDisplay} (Bab ${word.bab}).`,
      isPlaceholder: true
    },
    {
      sentence: `${wordDisplay}の例文 03（準備中）`,
      furigana: `${reading}のれいぶん 03`,
      romaji: `${word.romaji || reading} no reibun 03`,
      english: `Example sentence 03 for vocabulary "${wordDisplay}" (${meaning}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 03 untuk kosakata "${wordDisplay}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      highlight: wordDisplay,
      grammarNote: `Slot struktur contoh kalimat 03 untuk kosakata ${wordDisplay} (Bab ${word.bab}).`,
      isPlaceholder: true
    },
    {
      sentence: `${wordDisplay}の例文 04（準備中）`,
      furigana: `${reading}のれいぶん 04`,
      romaji: `${word.romaji || reading} no reibun 04`,
      english: `Example sentence 04 for vocabulary "${wordDisplay}" (${meaning}) — structured slot ready for upcoming curated data.`,
      indonesian: `Contoh kalimat 04 untuk kosakata "${wordDisplay}" (${meaning}) — struktur data siap diisi kurasi kemudian.`,
      highlight: wordDisplay,
      grammarNote: `Slot struktur contoh kalimat 04 untuk kosakata ${wordDisplay} (Bab ${word.bab}).`,
      isPlaceholder: true
    }
  ];
}
