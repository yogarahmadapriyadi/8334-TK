import { ModulAjar } from '../types/modul';

export const PRESET_MODULS: ModulAjar[] = [
  // PRESET 1: PAUD TK B (Tema Eksplorasi Tanaman & Loose Parts Kebun Sekolah) - Standar BSKAP 046/2025 & 020/2026
  {
    id: 'preset-paud-looseparts-kebun',
    createdAt: '2026-10-20',
    identitas: {
      sekolah: 'TK Negeri Pembina Merdeka Belajar',
      namaGuru: 'Ratna Dewi, S.Pd. PAUD',
      mataPelajaran: 'Pendidikan Anak Usia Dini (PAUD - Fase Fondasi)',
      jenjang: 'PAUD',
      faseKelas: 'Fase Fondasi (TK B / Usia 5-6 Tahun)',
      semester: 'Semester Ganjil',
      tahunPelajaran: '2025/2026',
      materi: 'Eksplorasi Keajaiban Tanaman Ciptaan Tuhan & Kreasi Bahan Lepasan (Loose Parts) Kebun Sekolah',
      alokasiWaktu: '150 menit (1 Hari Pertemuan Sentra Bahan Alam)',
      jumlahPertemuan: '1 Pertemuan',
      jumlahSiswa: '18 anak didik (Kelompok B)',
      karakteristikSiswa: 'Anak-anak sangat aktif, antusias bergerak dan mengeksplorasi lingkungan, memiliki rasa ingin tahu tinggi terhadap benda-benda alam sekitar, senang menyentuh tekstur, dan membutuhkan kegiatan bermain konkret berbasis sensori.',
      kompetensiAwal: 'Anak sudah terbiasa menyapa guru dan teman dengan senyuman ceria di pagi hari, mampu mengenali warna-warna dasar, dan dapat membedakan tekstur kasar-halus pada permukaan daun atau batu.',
      sarpras: 'Pekarangan kebun sekolah ramah anak, aneka loose parts alam (daun kering, kelopak bunga, ranting halus, biji jagung, kerikil halus, pelepah pisang, wadah air, kaca pembesar plastik ramah anak), celemek main, dan nampan bambu.',
      modelPembelajaran: 'Model Sentra Bahan Alam dipadukan dengan Eksplorasi Sensori Loose Parts dan Storytelling Buku Bergambar',
      kearifanLokal: 'Pemanfaatan tanaman obat keluarga (TOGA) kebun sekolah (kunyit, pandan, serai), tembang dolanan anak Nusantara "Cublak-Cublak Suweng", serta pembiasaan saling berbagi bekal buah sehat.',
      capaianPembelajaran: '(Rujukan Resmi: Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran Fase Fondasi PAUD)\nAnak menunjukkan rasa ingin tahu melalui eksplorasi, penyelidikan, dan eksperimen menggunakan aneka bahan alam sekitar (loose parts); mengenali ciri-ciri tanaman sebagai makhluk hidup ciptaan Tuhan; mengekspresikan imajinasi dan gagasan kreatif melalui karya seni rupa bahan alam; serta membiasakan menjaga kebersihan diri dan keasrian lingkungan bermain secara mandiri.',
      catatanTambahan: 'Memanfaatkan media loose parts alam pekarangan sekolah tanpa biaya, menjamin keamanan anak dari benda tajam, dan memfasilitasi kebebasan memilih ragam main invitasi.'
    },
    capaianPembelajaran: '(Rujukan Resmi: Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran Fase Fondasi PAUD)\nAnak menunjukkan rasa ingin tahu melalui eksplorasi, penyelidikan, dan eksperimen menggunakan aneka bahan alam sekitar (loose parts); mengenali ciri-ciri tanaman sebagai makhluk hidup ciptaan Tuhan; mengekspresikan imajinasi dan gagasan kreatif melalui karya seni rupa bahan alam; serta membiasakan menjaga kebersihan diri dan keasrian lingkungan bermain secara mandiri.',
    tujuanPembelajaran: [
      'Anak mampu mengamati, meraba, dan mengelompokkan ragam bahan alam (daun, ranting, bunga, batu) berdasarkan tekstur, warna, dan ukuran dengan penuh antusias.',
      'Anak mampu merancang dan menyusun bahan lepasan (loose parts) membentuk karya bentuk tanaman ciptaan Tuhan sesuai imajinasi dan kreativitasnya.',
      'Anak mampu menceritakan kembali hasil karya yang dibuatnya (recalling) serta bekerja sama merapikan alat main kembali ke tempatnya dengan gembira.'
    ],
    kompetensiAwal: 'Anak sudah terbiasa menyapa guru dan teman dengan senyuman ceria di pagi hari, mampu mengenali warna-warna dasar, dan dapat membedakan tekstur kasar-halus pada permukaan daun atau batu.',
    karakteristikSiswa: 'Anak-anak sangat aktif, antusias bergerak dan mengeksplorasi lingkungan, memiliki rasa ingin tahu tinggi terhadap benda-benda alam sekitar, senang menyentuh tekstur, dan membutuhkan kegiatan bermain konkret berbasis sensori.',
    kebutuhanBelajar: 'Anak membutuhkan ragam pilihan main terbuka (open-ended play), stimulasi sensori motorik yang aman, dukungan pijakan guru (scaffolding) tanpa membatasi imajinasi, serta suasana belajar ceria yang kaya apresiasi.',
    pemahamanBermakna: 'Tanaman di kebun sekolah adalah makhluk hidup ciptaan Tuhan yang memberi oksigen segar, keindahan, dan aroma wangi; dengan menyayangi tanaman dan memanfaatkan bahan alam yang telah gugur, anak belajar merawat bumi dengan gembira.',
    pertanyaanPemantik: [
      'Bagaimana ya rasanya daun mangga yang masih segar jika dibandingkan dengan daun yang sudah kering di bawah pohon?',
      'Jika daun-daun gugur dan ranting kecil ini kita kumpulkan, kira-kira bisa kita sulap menjadi gambar pohon ajaib apa ya?'
    ],
    pertanyaanEsensial: [
      'Mengapa Tuhan menciptakan bermacam-macam bentuk daun dan bunga di kebun sekolah kita?',
      'Apa yang bisa kita lakukan setiap hari agar tanaman di sekitar kita tetap subur dan hijau?'
    ],
    materiEsensial: [
      {
        subtopik: 'Mengenal Ciri dan Bagian Tanaman Ciptaan Tuhan',
        uraian: 'Mengenalkan akar, batang, daun, bunga, dan buah melalui pengamatan langsung di pekarangan kebun sekolah; membedakan warna hijau, kuning, dan cokelat pada daun.'
      },
      {
        subtopik: 'Eksplorasi Sensori & Sifat Bahan Lepasan (Loose Parts)',
        uraian: 'Mengeksplorasi tekstur halus, kasar, licin, aroma daun pandan/serai, serta ukuran panjang-pendek ranting kayu menggunakan indera peraba dan penglihatan.'
      },
      {
        subtopik: 'Kreasi Kolase & Konstruksi Bentuk Bebas',
        uraian: 'Menyusun dedaunan gugur, kerikil, dan ranting di atas nampan atau kertas gambar membentuk figur tanaman, hewan kebun, atau pola geometri mandiri.'
      }
    ],
    dimensiProfilLulusan: [
      {
        dimensi: 'Keimanan dan Ketakwaan kepada Tuhan YME',
        keterkaitan: 'Mengenal tanaman dan semesta sebagai ciptaan Tuhan Yang Maha Esa serta menyayangi tanaman dengan tidak memetik daun sembarangan.',
        aktivitas: 'Berdoa sebelum bermain, melafalkan kalimat syukur (Alhamdulillah / Puji Tuhan) saat melihat bunga mekar, dan menyiram tanaman.',
        indikator: 'Menunjukkan rasa kagum pada ciptaan Tuhan dan memperlakukan tanaman dengan lembut.'
      },
      {
        dimensi: 'Kemandirian',
        keterkaitan: 'Mampu memilih sendiri kegiatan main invitasi yang diminati dan bertanggung jawab merapikan alat main.',
        aktivitas: 'Memilih nampan main loose parts sendiri, mengenakan celemek main tanpa bantuan penuh, dan membereskan alat main.',
        indikator: 'Menyelesaikan aktivitas bermain yang dipilih dan mandiri dalam mengelola peralatannya.'
      },
      {
        dimensi: 'Kreativitas',
        keterkaitan: 'Mengekspresikan imajinasi orisinal melalui penggabungan berbagai bahan lepasan menjadi karya bentuk baru.',
        aktivitas: 'Menata daun, batu, dan ranting membentuk wajah tersenyum atau pohon impian.',
        indikator: 'Menghasilkan susunan loose parts yang unik dan mengekspresikan ide sendiri secara bebas.'
      },
      {
        dimensi: 'Penalaran Kritis',
        keterkaitan: 'Mengeksplorasi sebab-akibat sederhana (daun basah vs kering, ringan tertiup angin vs berat tenggelam di air).',
        aktivitas: 'Mencelupkan daun kering dan kerikil ke dalam wadah air untuk melihat apa yang terapung dan tenggelam.',
        indikator: 'Mampu mengutarakan temuan sederhana: "Kerikilnya tenggelam bu guru, karena berat!"'
      },
      {
        dimensi: 'Kolaborasi & Gotong Royong',
        keterkaitan: 'Berbagi alat dan bahan main dengan teman sebaya serta saling membantu saat mengumpulkan daun gugur.',
        aktivitas: 'Mengumpulkan daun bersama dalam keranjang besar dan saling meminjamkan kaca pembesar.',
        indikator: 'Mau berbagi bahan main, tidak berebut, dan membantu teman merapikan mainan.'
      },
      {
        dimensi: 'Komunikasi',
        keterkaitan: 'Menceritakan kembali pengalaman bermain dan ide karya yang dibuatnya kepada guru dan teman.',
        aktivitas: 'Sesi recalling melingkar (circle time penutup) menceritakan "Pohon Daun Buatanku".',
        indikator: 'Mampu mengungkapkan kalimat sederhana dengan percaya diri dan ekspresi ceria.'
      }
    ],
    prinsipDeepLearning: {
      berkesadaran: {
        deskripsi: 'Anak diajak hadir utuh dengan kesadaran penuh panca indera, menyadari perasaan bahagianya, dan menyadari bahwa ia adalah bagian dari alam ciptaan Tuhan.',
        penerapan: 'Guru membuka sesi dengan "Napas Balon Ceria" (menghirup udara segar kebun sekolah) dan mengajak anak memejamkan mata 10 detik mendengarkan gesekan daun tertiup angin.'
      },
      bermakna: {
        deskripsi: 'Belajar berakar langsung pada lingkungan nyata yang dipijak anak, menggunakan bahan konkret yang ditemukan di kebun sekolah, bukan lembar kerja pensil-kertas kering.',
        penerapan: 'Anak turun langsung ke tanah pekarangan, memegang tanah gembur, memungut daun jatuh yang nyata, dan memahami mengapa daun layu berubah warna menjadi cokelat.'
      },
      menggembirakan: {
        deskripsi: 'Suasana kelas dan sentra penuh dengan tawa, nyanyian gerak tubuh, tepuk riang, kebebasan bereksplorasi tanpa takut dinilai salah, dan banjir apresiasi kasih sayang.',
        penerapan: 'Lagu "Lihat Kebunku Penuh dengan Bunga" dengan tarian menirukan pohon tertiup angin sepoi-sepoi dan yel-yel "Anak Hebat, Anak Kreatif!".'
      }
    },
    pengalamanBelajar: {
      memahami: 'Anak mengamati tanaman di kebun sekolah, menyentuh aneka daun dan bunga gugur, mencium aroma tanah dan daun pandan, serta menyimak dongeng "Kisah Pohon Mangga yang Ramah".',
      mengaplikasi: 'Anak mengelompokkan bahan alam dan merancang kreasi loose parts di atas nampan bambu dengan memilih ragam main invitasi sesuai minatnya.',
      merefleksi: 'Anak menceritakan perasaannya saat bermain, menunjukkan bagian karya yang paling disukainya, dan melakukan aksi pembiasaan merawat tanaman sekolah.'
    },
    kerangkaPembelajaran: {
      praktikPedagogis: {
        pendekatan: 'Pembelajaran Berpusat pada Anak (Child-Centered Play-Based Learning)',
        model: 'Model Sentra Bahan Alam (Sentra Nature Play)',
        sintakModel: [
          'Pijakan Lingkungan Main (Penyediaan 4 Ragam Invitasi Loose Parts)',
          'Pijakan Pengalaman Sebelum Main (Circle Time, Dongeng & Kesepakatan Main)',
          'Pijakan Pengalaman Saat Main (Scaffolding, Observasi Guru, Dialog Pemantik)',
          'Pijakan Pengalaman Setelah Main (Pemberesan & Recalling Reflektif)'
        ],
        metode: 'Eksplorasi Sensori, Observasi Nyata, Bermain Loose Parts, Storytelling Buku Bergambar, Gerak dan Lagu Ceria',
        strategi: 'Penyediaan Pilihan Invitasi Main Bebas Terbuka (Open-Ended Materials) & Pendampingan Kasih Sayang',
        diferensiasi: 'Bagi anak yang masih ragu menyentuh tanah/tekstur kasar, disediakan kuas atau daun bertekstur halus; bagi anak yang sangat lincah, disediakan tantangan menyusun konstruksi rantai ranting bertingkat.'
      },
      kemitraanPembelajaran: {
        peranGuru: 'Fasilitator kasih sayang, perancang invitasi main menarik, pengamat penuh kesabaran, dan mitra bermain anak.',
        peranSiswa: 'Penjelajah cilik yang aktif berinisiatif, memilih mainan, mencoba ide baru, dan berekspresi tanpa rasa takut.',
        temanSebaya: 'Sahabat bermain yang saling berbagi bahan alam, bekerja sama, dan mengagumi karya teman.',
        orangTuaMasyarakat: 'Orang tua diajak membiasakan anak merawat pot bunga di teras rumah dan mengirimkan foto kegiatan menyiram tanaman bersama keluarga.'
      },
      lingkunganPembelajaran: {
        ruangKelas: 'Sentra Bahan Alam dengan karpet bersih, nampan-nampan bambu tempat loose parts terorganisasi rapi, dan display foto karya anak setinggi mata anak.',
        lingkunganSekitar: 'Pekarangan kebun sekolah, area rumput, sudut tanaman toga, dan tempat cuci tangan berkeran rendah ramah anak.',
        ruangDigital: 'Audio pemutar musik instrumen kicau burung alam pedesaan yang menenangkan selama kegiatan bermain eksplorasi.'
      },
      pemanfaatanDigital: {
        opsiOnline: 'Dokumentasi foto berseri perkembangan anak oleh guru yang diunggah ke grup komunikasi portofolio orang tua murid.',
        opsiOffline: 'Lembar observasi ceklis perkembangan fisik, kartu foto berseri anak, serta nampan eksplorasi loose parts fisik.'
      }
    },
    skenarioPembelajaran: {
      pendahuluan: [
        {
          fase: '1. Penyambutan Ceria & Pijakan Lingkungan Awal (SOP Kedatangan)',
          kegiatan: 'Guru menyambut anak di gerbang sekolah dengan senyuman ramah, sapaan hangat, dan pelukan ceria. Anak membiasakan menaruh sepatu dan tas secara mandiri di loker masing-masing.',
          waktu: '15 menit'
        },
        {
          fase: '2. Lingkaran Pagi (Circle Time) & Doa Berkesadaran',
          kegiatan: 'Anak duduk melingkar di karpet bersama guru. Bernyanyi lagu pembuka "Selamat Pagi Ibu Guru", berdoa sebelum belajar dengan khusyuk, dan memeriksa kehadiran teman lewat lagu "Siapa Namamu?".',
          waktu: '15 menit'
        },
        {
          fase: '3. Gerak & Lagu Motorik Kasar Ceria',
          kegiatan: 'Melakukan senam pohon ceria: merentangkan tangan seperti dahan pohon, bergoyang pelan menirukan angin sepoi-sepoi, dan melompat gembira seperti kelinci di kebun.',
          waktu: '10 menit'
        },
        {
          fase: '4. Apersepsi Buku Cerita Bergambar & Pertanyaan Pemantik',
          kegiatan: 'Guru membacakan buku cerita besar (Big Book) bergambar: "Sahabat Kebun Kita". Guru mengajukan pertanyaan pemantik: "Siapa yang di rumahnya punya pohon mangga atau tanaman bunga? Apa yang terjadi jika daunnya rontok?" Guru menjelaskan 4 pilihan ragam main invitasi hari ini dan menyepakati aturan main bersama (sayang teman, berbagi mainan, dan merapikan alat setelah selesai).',
          waktu: '15 menit'
        }
      ],
      inti: {
        tahap1Memahami: [
          {
            sintak: 'Pijakan Pengalaman Sebelum Main (Eksplorasi Sensori Kebun)',
            aktivitas: 'Petualangan Detektif Daun di Kebun Sekolah & Pengenalan Loose Parts',
            peranGuru: 'Mendampingi anak berjalan santai di kebun sekolah, memberikan kaca pembesar plastik, dan memantik pengamatan: "Ayo raba daun ini, halus atau berbulu ya?"',
            peranSiswa: 'Anak memegang aneka daun yang gugur, mencium aroma daun serai dan pandan, membandingkan ukuran batu kerikil dan ranting kayu.',
            waktu: '20 menit'
          }
        ],
        tahap2Mengaplikasi: [
          {
            sintak: 'Pijakan Pengalaman Saat Main (Eksplorasi 4 Ragam Invitasi Main)',
            aktivitas: 'Bermain Bebas Terarah pada 4 Pilihan Invitasi Main Loose Parts',
            peranGuru: 'Berkeliling mengamati, mencatat celoteh anak (catatan anekdot), memotret proses berkarya (foto berseri), serta memberikan scaffolding: "Wah, batunya tinggi sekali, apa yang akan kamu tambahkan di sampingnya?"',
            peranSiswa: 'Anak memilih dan bermain di invitasi yang disukai:\n- Invitasi 1: "Yuk Membuat Pohon Impian dari Daun dan Ranting!" (Menata loose parts pada nampan).\n- Invitasi 2: "Mengelompokkan Warna dan Ukuran Harta Karun Kebun" (Memilah biji, daun hijau, dan daun cokelat ke mangkuk kayu).\n- Invitasi 3: "Cap Pola Dedaunan" (Mencap tekstur tulang daun menggunakan pewarna makanan alami kunyit/pandan).\n- Invitasi 4: "Eksperimen Mengapung dan Tenggelam" (Mencelupkan batu dan daun ke wadah air transparan).',
            waktu: '45 menit'
          }
        ],
        tahap3Merefleksi: [
          {
            sintak: 'Pemberesan Alat Main (Beres-Beres Bersama)',
            aktivitas: 'Lagu "Beres-beres Mainan" dan Pengembalian Bahan ke Tempatnya',
            peranGuru: 'Menyanyikan lagu beres-beres mainan dengan riang, memberi semangat dan pujian pada anak yang tekun mengembalikan bahan.',
            peranSiswa: 'Semua anak bersama-sama mengembalikan daun, batu, dan nampan ke rak mainan secara tertib dan mandiri.',
            waktu: '10 menit'
          }
        ]
      },
      penutup: [
        {
          fase: '1. Istirahat, SOP Cuci Tangan & Makan Bekal Bersama',
          kegiatan: 'Mempraktikkan cuci tangan 6 langkah dengan air mengalir dan sabun, berdoa sebelum dan sesudah makan, menikmati bekal sehat bersama teman sambil berbincang santun, lalu bermain bebas di arena bermain luar yang aman.',
          waktu: '20 menit'
        },
        {
          fase: '2. Recalling & Refleksi Perasaan Ceria',
          kegiatan: 'Duduk melingkar kembali bersama guru. Beberapa anak secara bergantian menceritakan karya dan perasaannya: "Bagian apa yang paling kamu sukai saat bermain tadi?" Guru memberikan bintang apresiasi kasih sayang untuk setiap anak.',
          waktu: '15 menit'
        },
        {
          fase: '3. Pesan Moral, Doa Pulang & Salam Perpisahan Penuh Kasih',
          kegiatan: 'Guru menyampaikan pesan moral: "Nanti di rumah, jangan lupa sapa tanaman ibu dan siram dengan segelas air ya!" Ditutup dengan doa pulang bersama, bernyanyi lagu "Sayonara", dan salam perpisahan dengan senyuman hangat.',
          waktu: '10 menit'
        }
      ]
    },
    lkpd: {
      judul: 'Panduan Invitasi Main & Lembar Dokumentasi Pengalaman Bermain Anak (Loose Parts Kebun Sekolah)',
      tujuan: '1. Memberikan pijakan lingkungan main yang kaya stimulasi sensori bagi anak.\n2. Mendorong kebebasan berimajinasi dan berekspresi menggunakan bahan lepasan alam (loose parts).\n3. Mendokumentasikan ide, hasil karya, dan celoteh anak sebagai bukti ketercapaian Fase Fondasi.',
      petunjuk: '1. Siapkan 4 ragam main invitasi dengan bahan alam yang bersih dan aman.\n2. Berikan kebebasan kepada anak untuk memilih dan mengeksplorasi bahan tanpa dipaksa menghasilkan bentuk seragam.\n3. Guru mengamati, mengajukan pertanyaan pemantik saat anak bermain, dan mencatat celoteh anak pada lembar pengamatan.',
      stimulusKonteks: 'Kebun sekolah adalah laboratorium kehidupan yang menakjubkan bagi anak usia dini. Dedaunan rontok, ranting kecil, dan batu kerikil bukan sekadar sampah, melainkan "harta karun mainan" alami ciptaan Tuhan yang memantik rasa takjub, daya cipta, serta kepekaan motorik halus anak.',
      pertanyaanPemantik: 'Kira-kira apa yang bisa kita buat dari ranting panjang dan dedaunan indah ini ya? Bagaimana caramu menyusunnya agar menjadi karya istimewa?',
      langkahKegiatan: [
        'Anak diajak berjalan di kebun sekolah mengumpulkan bahan alam yang jatuh di tanah (daun kering, kelopak bunga, ranting rapuh).',
        'Anak duduk di dekat nampan main dan memilih bahan loose parts yang disukainya.',
        'Anak mengeksplorasi tekstur, menyusun, mencocokkan, atau menggabungkan bahan alam menjadi bentuk imajinatifnya.',
        'Guru mendengarkan celoteh anak: "Ini rumah burung di pohon besar, bu guru!" lalu mencatatnya di lembar observasi.',
        'Anak menempelkan karya atau guru memotret hasil karya anak untuk ditempel di portofolio.'
      ],
      tabelPengamatan: {
        judul: 'Matriks Dokumentasi Observasi Invitasi Main Anak Usia Dini',
        kolom: ['No', 'Nama Anak', 'Pilihan Ragam Main', 'Celoteh & Perilaku Anak Saat Bermain', 'Capaian Fase Fondasi (BSB/BSH/MB/BB)'],
        barisContoh: [
          ['1', 'Ahmad Farhan (5 Thn)', 'Invitasi 1: Membuat Pohon Loose Parts', '"Pohonku ada sarang burungnya bu, ini dari ranting kering!" — Mampu menata 8 ranting dan 12 daun secara mandiri.', 'BSB (Berkembang Sangat Baik)'],
          ['2', 'Aisyah Putri (5 Thn)', 'Invitasi 3: Mencap Tulang Daun Alami', '"Lihat bu, warnanya kuning seperti matahari terbit!" — Terampil menekan daun ke kertas dan tersenyum bangga.', 'BSH (Berkembang Sesuai Harapan)'],
          ['3', 'Bima Arya (6 Thn)', 'Invitasi 4: Uji Apung & Tenggelam', '"Batu ini berat jadi tidur di dasar air, daunnya bisa berenang di atas!" — Menunjukkan nalar sebab-akibat sederhana.', 'BSB (Berkembang Sangat Baik)'],
          ['4', 'Chika Amanda (5 Thn)', 'Invitasi 2: Memilah Biji & Daun', 'Awalnya ragu menyentuh daun kering berbulu, lalu mau mencoba setelah guru mencontohkan mengusap lembut.', 'MB (Mulai Berkembang)']
        ]
      },
      pertanyaanAnalisis: [
        'Bagaimana antusiasme dan fokus anak saat berinteraksi dengan bahan lepasan (loose parts) alam?',
        'Konsep pramatematika atau literasi apa yang muncul secara alami dari celoteh anak saat bermain (misal: menyebutkan jumlah, membedakan besar-kecil, warna, bentuk)?',
        'Dukungan pijakan (scaffolding) apa yang perlu diberikan kepada anak yang masih ragu mengeksplorasi bahan?'
      ],
      tugasPenerapan: 'Ajak orang tua di rumah untuk melakukan kegiatan "Petualangan Halaman Rumah": memungut 3 jenis daun berbeda bersama anak dan menempelkannya di buku jurnal bermain keluarga.',
      kesimpulan: 'Bermain bahan lepasan alam memberikan kebebasan imajinasi tanpa batas bagi anak usia dini, memperkuat sensori motorik, serta menumbuhkan cinta mendalam pada keagungan ciptaan Sang Pencipta.',
      refleksiSiswa: 'Emotikon Perasaan Anak Hari Ini: [😊 Senang Sekali]  [😃 Bangga Berkarya]  [🤗 Ingin Main Lagi]\nKata Anak: "Besok aku mau bikin jembatan batu lagi ya bu guru!"'
    },
    asesmen: {
      diagnostik: {
        tujuan: 'Mengetahui kesiapan fisik-emosional anak di pagi hari, minat sensori terhadap bahan alam, dan kemampuan adaptasi sosial.',
        teknik: 'Observasi saat penyambutan pagi, senyum salam, dan interaksi awal lingkaran pagi (circle time).',
        instrumen: 'Lembar ceklis kesiapan emosi dan respon panca indera anak.',
        tindakLanjut: 'Memberikan pelukan hangat dan pendampingan lembut bagi anak yang terlihat lesu atau cemas berpisah dengan orang tua.'
      },
      formatif: {
        tujuan: 'Memantau perkembangan motorik halus, keaktifan berimajinasi dengan loose parts, kemampuan berbahasa (celoteh), dan interaksi sebaya.',
        teknik: 'Catatan Anekdot (peristiwa bermakna yang spontan), Lembar Ceklis Capaian Perkembangan, dan Foto Berseri (Documentation of Learning).',
        instrumen: 'Catatan anekdotal harian guru dan instrumen ceklis capaian Fase Fondasi (BSB, BSH, MB, BB).',
        tindakLanjut: 'Guru memberikan provokasi pertanyaan terbuka untuk memperdalam ide bermain anak tanpa menginterupsi kesenangannya.'
      },
      sumatif: {
        tujuan: 'Menyimpulkan ketercapaian elemen Fase Fondasi (Nilai Agama & Budi Pekerti, Jati Diri, Dasar Literasi & STEAM) pada akhir topik.',
        teknik: 'Analisis Portofolio Karya Anak dan Narasi Laporan Capaian Perkembangan Anak Usia Dini.',
        instrumen: 'Rubrik penilaian portofolio dan lembar narasi deskriptif rapor PAUD Kurikulum Merdeka.',
        kriteriaKetuntasan: 'Anak mencapai Fase Fondasi secara optimal apabila minimal mencapai predikat "Berkembang Sesuai Harapan" (BSH) pada seluruh indikator esensial.'
      }
    },
    rubrikPenilaian: [
      {
        aspek: 'Eksplorasi Sensori & Bahan Alam (STEAM PAUD)',
        skor4: 'BSB (Berkembang Sangat Baik): Mengamati, meraba, dan membedakan tekstur/ukuran aneka bahan alam secara mandiri dan antusias; menciptakan kombinasi kreasi unik dan mengajak teman mencobanya.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu mengamati dan menggunakan aneka bahan alam secara mandiri sesuai dengan ide yang direncanakannya.',
        skor2: 'MB (Mulai Berkembang): Mulai mau menyentuh dan mengeksplorasi bahan alam setelah diberikan dorongan atau contoh oleh guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Belum mau menyentuh bahan alam dan masih memerlukan pendampingan intensif dari guru.'
      },
      {
        aspek: 'Kreativitas & Daya Cipta Loose Parts',
        skor4: 'BSB (Berkembang Sangat Baik): Menghasilkan susunan loose parts yang sangat variatif, detail, dan orisinal; mampu menceritakan makna karyanya secara runtut dan ekspresif.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Menghasilkan karya bentuk tanaman/lingkungan dari loose parts dan dapat menyebutkan nama bagian karyanya.',
        skor2: 'MB (Mulai Berkembang): Menyusun loose parts dalam pola sederhana dan membutuhkan sedikit pancingan ide dari guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Hanya memegang atau mengacak bahan tanpa mencoba merangkai menjadi suatu bentuk karya.'
      },
      {
        aspek: 'Kemandirian & Tanggung Jawab (Jati Diri)',
        skor4: 'BSB (Berkembang Sangat Baik): Memilih kegiatan main secara mandiri, tekun menyelesaikan hingga tuntas, dan berinisiatif mengajak teman membereskan mainan bersama.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu memilih mainan sendiri dan ikut serta merapikan peralatan main saat lagu beres-beres berbunyi.',
        skor2: 'MB (Mulai Berkembang): Masih berpindah-pindah mainan dengan cepat dan perlu diingatkan guru untuk merapikan mainan.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Meninggalkan mainan berserakan dan enggan ikut merapikan meskipun telah diarahkan guru.'
      },
      {
        aspek: 'Nilai Agama & Rasa Syukur Ciptaan Tuhan',
        skor4: 'BSB (Berkembang Sangat Baik): Spontan mengucap rasa syukur atas keindahan tanaman ciptaan Tuhan, berdoa khusyuk, dan memperlakukan tanaman/alam dengan sangat lembut penuh kasih sayang.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mengetahui bahwa tanaman diciptakan oleh Tuhan dan mengikuti doa dengan tertib.',
        skor2: 'MB (Mulai Berkembang): Mulai mengikuti lafal doa harian dengan bimbingan dan diingatkan untuk tidak mencabut tanaman sembarangan.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Belum menunjukkan perhatian saat berdoa dan masih sering memetik tanaman secara sembarangan.'
      }
    ],
    diferensiasi: {
      konten: {
        bimbingan: 'Disediakan bahan lepasan dengan ukuran besar dan tekstur halus yang mudah digenggam (daun puring lebar, balok kayu halus, spons basah).',
        sedang: 'Disediakan aneka loose parts standar (daun aneka warna, ranting, bunga kamboja gugur, batu kerikil aman).',
        pengayaan: 'Disediakan alat bantu eksplorasi tambahan seperti lup pembesar mini, penjepit kayu, timbangan sederhana, dan cermin pantul eksplorasi simetri.'
      },
      proses: {
        bimbingan: 'Guru duduk berdampingan dengan anak, memberikan sentuhan lembut, memodelkan cara meraba daun dan menyusun pola bersama.',
        sedang: 'Guru memberikan kebebasan anak bermain mandiri di zona invitasi sambil sesekali mengajukan pertanyaan pemantik.',
        pengayaan: 'Anak diberikan tantangan membuat cerita mini dari susunan loose parts dan menjadi "pemimpin cilik" di zonanya.'
      },
      produk: {
        bimbingan: 'Karya susunan 2-3 elemen loose parts sederhana di atas nampan dengan dokumentasi catatan lisan guru.',
        sedang: 'Karya kolase atau konstruksi tanaman utuh dengan celoteh anak yang terekam pada lembar portofolio.',
        pengayaan: 'Karya lanskap kebun bertingkat lengkap dengan presentasi cerita lisan kepada teman-teman saat recalling.'
      }
    },
    remedialDanPengayaan: {
      kriteriaRemedial: 'Anak yang masih mengalami hambatan sensori taktil (geli/takut memegang benda alam) atau kesulitan fokus merapikan mainan.',
      programRemedial: 'Bermain sensori bertahap menggunakan media yang lebih disukai (misal air bersih dengan spons lembut), lalu perlahan diperkenalkan pada daun bertekstur lembut.',
      kriteriaPengayaan: 'Anak yang memiliki kepekaan motorik dan daya cipta loose parts di atas rata-rata usia perkembangannya.',
      programPengayaan: 'Diberikan kesempatan membuat buku cerita bergambar mini dari foto karyanya yang dibantu cetak oleh guru untuk dipajang di pojok baca kelas.'
    },
    refleksi: {
      guru: [
        'Apakah ragam invitasi main yang disiapkan berhasil membangkitkan rasa takjub dan imajinasi seluruh anak?',
        'Apakah penataan lingkungan main di kebun sekolah sudah cukup aman dan memberikan keleluasaan gerak anak?',
        'Bagaimana saya dapat memperkaya dokumentasi celoteh anak untuk laporan perkembangan mingguan?'
      ],
      siswa: [
        'Bagian mana yang paling membuatmu senang dan tersenyum saat bermain di kebun tadi?',
        'Bahan apa yang ingin kamu mainkan lagi besok pagi bersama teman-teman?'
      ]
    },
    produkAkhir: 'Foto Berseri Karya Loose Parts Anak, Lembar Celoteh Dokumentasi Pembelajaran, dan Pajangan Kolase Bahan Alam.',
    sumberBelajar: [
      'Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini (PAUD - Fase Fondasi).',
      'Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 tentang Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti Fase Fondasi.',
      'Buku Panduan Guru Capaian Pembelajaran Elemen Dasar Literasi dan STEAM PAUD - Kemendikbudristek RI.',
      'Buku Panduan Pemanfaatan Bahan Lepasan (Loose Parts) dalam Pembelajaran Anak Usia Dini.',
      'Lingkungan kebun sekolah, tanaman toga pekarangan, dan sumber alam sekitar.'
    ]
  },

  // PRESET 2: PAUD TK B - PENDIDIKAN AGAMA ISLAM & BUDI PEKERTI (BSKAP 020/2026)
  {
    id: 'preset-paud-pai-adab',
    createdAt: '2026-10-20',
    identitas: {
      sekolah: 'TK Islam Terpadu Al-Fatih',
      namaGuru: 'Ustadzah Nurul Hidayah, S.Pd.I.',
      mataPelajaran: 'Pendidikan Agama Islam & Budi Pekerti PAUD (Sentra Imtaq)',
      jenjang: 'PAUD',
      faseKelas: 'Fase Fondasi (TK B / Usia 5-6 Tahun)',
      semester: 'Semester Ganjil',
      tahunPelajaran: '2025/2026',
      materi: 'Mengenal Asmaul Husna Al-Khaliq, Adab Bersyukur & Merawat Tubuh Sehat Ciptaan Allah',
      alokasiWaktu: '150 menit (1 Hari Pertemuan Sentra Imtaq)',
      jumlahPertemuan: '1 Pertemuan',
      jumlahSiswa: '16 anak didik (Kelompok B)',
      karakteristikSiswa: 'Anak-anak senang mendengarkan cerita nabi dan kisah teladan bernada ceria, menyukai nyanyian nasyid berirama riang, serta senang mempraktikkan gerakan wudu dan adab makan bersama.',
      kompetensiAwal: 'Anak terbiasa mengucapkan salam "Assalamu\'alaikum", mampu menyebutkan nama Allah, dan dapat menirukan lafal basmalah sebelum melakukan kegiatan.',
      sarpras: 'Sentra Imtaq beralas karpet empuk, cermin besar seukuran tubuh anak, buku cerita bergambar "Tubuhku Ciptaan Allah", buah kurma dan air minum bersih, kartu bergambar adab makan.',
      modelPembelajaran: 'Project-Based Play Sentra Imtaq dipadukan dengan Storytelling Kisah Teladan, Nasyid Ceria, dan Praktik Adab Makan Mandiri',
      kearifanLokal: 'Pembiasaan tradisi makan bekal bersama ala santri ("Mayor / Kembul Bujana" beralas daun pisang), saling membagikan kurma/buah lokal, dan doa harian.',
      capaianPembelajaran: '(Rujukan Resmi: Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 tentang Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti Fase Fondasi PAUD)\nAnak mengenal dan percaya kepada Allah SWT sebagai Tuhan Yang Maha Esa dan Maha Pencipta (Al-Khaliq); mempraktikkan ibadah harian sederhana seperti melafalkan doa sebelum dan sesudah makan; membiasakan perilaku berakhlak mulia dengan merawat kebersihan tubuh ciptaan Allah; serta menunjukkan kasih sayang dan adab sopan santun kepada orang tua, ustadzah, dan teman sebaya.',
      catatanTambahan: 'Menekankan penanaman akidah dan akhlak yang menggembirakan tanpa pemaksaan hafalan, menggunakan pendekatan keteladanan cinta kasih.'
    },
    capaianPembelajaran: '(Rujukan Resmi: Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 tentang Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti Fase Fondasi PAUD)\nAnak mengenal dan percaya kepada Allah SWT sebagai Tuhan Yang Maha Esa dan Maha Pencipta (Al-Khaliq); mempraktikkan ibadah harian sederhana seperti melafalkan doa sebelum dan sesudah makan; membiasakan perilaku berakhlak mulia dengan merawat kebersihan tubuh ciptaan Allah; serta menunjukkan kasih sayang dan adab sopan santun kepada orang tua, ustadzah, dan teman sebaya.',
    tujuanPembelajaran: [
      'Anak mampu menyebutkan nama Allah Al-Khaliq (Maha Pencipta) dan menunjukkan rasa syukur atas panca indera yang sehat melalui cermin diri dengan gembira.',
      'Anak mampu mempraktikkan adab makan dan minum Islami (cuci tangan, duduk tertib, membaca basmalah & doa makan, menggunakan tangan kanan) secara mandiri.',
      'Anak mampu menyayangi tubuhnya dengan memilih makanan sehat halal dan mempraktikkan tutur kata santun kepada ustadzah dan teman sebaya.'
    ],
    kompetensiAwal: 'Anak terbiasa mengucapkan salam "Assalamu\'alaikum", mampu menyebutkan nama Allah, dan dapat menirukan lafal basmalah sebelum melakukan kegiatan.',
    karakteristikSiswa: 'Anak-anak senang mendengarkan cerita nabi dan kisah teladan bernada ceria, menyukai nyanyian nasyid berirama riang, serta senang mempraktikkan gerakan wudu dan adab makan bersama.',
    kebutuhanBelajar: 'Membutuhkan contoh keteladanan konkret (modeling) dari guru, aktivitas fisik yang menyenangkan, visualisasi gambar yang cerah, dan pengulangan doa dengan irama yang merdu.',
    pemahamanBermakna: 'Mata untuk melihat keindahan, telinga untuk mendengar kebaikan, tangan untuk menolong teman, dan mulut untuk berbicara santun; semua adalah hadiah cinta dari Allah Al-Khaliq yang harus kita rawat dengan penuh syukur.',
    pertanyaanPemantik: [
      'Siapa yang menciptakan mata kita yang indah ini ya teman-teman? Bagaimana cara kita mengucapkan terima kasih kepada Allah?',
      'Sebelum kita menyantap buah kurma yang manis ini, adab baik apa yang diajarkan oleh Nabi Muhammad SAW kepada kita?'
    ],
    pertanyaanEsensial: [
      'Mengapa kita harus makan sambil duduk tenang dan menggunakan tangan kanan?',
      'Bagaimana cara kita menjaga tangan dan mulut kita agar selalu disayang oleh Allah SWT?'
    ],
    materiEsensial: [
      {
        subtopik: 'Mengenal Asmaul Husna: Al-Khaliq (Allah Maha Pencipta)',
        uraian: 'Mengenalkan bahwa Allah yang menciptakan manusia, langit, bumi, dan makanan lezat bergizi; mengamati diri di cermin dan bersyukur atas tubuh sehat.'
      },
      {
        subtopik: 'Adab Makan dan Minum Sesuai Sunnah Rasulullah',
        uraian: 'Urutan adab: mencuci tangan bersih, duduk dengan tertib, membaca doa sebelum makan, makan dengan tangan kanan, tidak meniup makanan panas, dan membaca doa sesudah makan.'
      },
      {
        subtopik: 'Akhlak Terpuji & Berbagi Makanan Halal Thayyib',
        uraian: 'Membiasakan saling membagikan bekal kurma/biskuit kepada teman, mengucapkan "Terima kasih / Jazaakallahu khairan", dan membersihkan sisa makanan secara mandiri.'
      }
    ],
    dimensiProfilLulusan: [
      {
        dimensi: 'Keimanan dan Ketakwaan kepada Tuhan YME',
        keterkaitan: 'Meyakini Allah SWT sebagai Sang Pencipta dan membiasakan zikir syukur "Alhamdulillah".',
        aktivitas: 'Melafalkan doa sebelum dan sesudah makan, serta bernyanyi nasyid Asmaul Husna Al-Khaliq.',
        indikator: 'Hafal dan terbiasa membaca doa makan secara mandiri dengan tartil dan tertib.'
      },
      {
        dimensi: 'Kewargaan & Sosial',
        keterkaitan: 'Menghargai teman sebaya, berbagi bekal dengan ikhlas, dan menjaga adab santun.',
        aktivitas: 'Membagikan potongan buah kurma kepada teman di sebelahnya dengan senyuman tulus.',
        indikator: 'Menunjukkan sikap ramah, murah senyum, dan rela berbagi makanan tanpa pamrih.'
      },
      {
        dimensi: 'Kemandirian',
        keterkaitan: 'Mampu mencuci tangan sendiri dengan sabun dan makan sendiri tanpa disuapi.',
        aktivitas: 'Membuka wadah bekal sendiri, makan dengan tenang, dan membuang bungkus ke tempat sampah.',
        indikator: 'Makan secara mandiri dengan rapi tanpa menumpahkan makanan ke lantai.'
      },
      {
        dimensi: 'Komunikasi',
        keterkaitan: 'Menyampaikan ucapan terima kasih dan mendoakan kebaikan bagi orang tua dan guru.',
        aktivitas: 'Menceritakan rasa buah kurma dan mengucapkan "Alhamdulillahirobbil \'alamin".',
        indikator: 'Mampu mengungkapkan rasa syukur dengan kalimat santun dan jelas.'
      }
    ],
    prinsipDeepLearning: {
      berkesadaran: {
        deskripsi: 'Anak diajak menyadari setiap suapan makanan yang masuk ke tubuhnya adalah rezeki berkah dari Allah yang harus dinikmati dengan tenang dan beradab.',
        penerapan: 'Membiasakan anak berhenti sejenak sebelum makan, melihat makanan di piring, bernapas tenang, dan melafalkan basmalah dengan penuh penghayatan.'
      },
      bermakna: {
        deskripsi: 'Materi adab tidak sekadar teori lisan, melainkan langsung dipraktikkan saat jam makan bekal bersama setiap hari di sekolah.',
        penerapan: 'Praktik langsung adab makan berjamaah beralas tikar bersih, mencuci tangan 6 langkah, dan saling membantu membersihkan nampan makan.'
      },
      menggembirakan: {
        deskripsi: 'Sentra Imtaq diisi dengan nyanyian nasyid gembira, tepuk anak saleh, cerita boneka tangan yang jenaka, dan suasana kasih sayang.',
        penerapan: 'Tepuk "Adab Makan" ceria: (Tepuk 3x) Cuci tangan, (Tepuk 3x) Duduk tenang, (Tepuk 3x) Tangan kanan, (Tepuk 3x) Bismillah, Nyam.. Nyam.. Nyam!'
      }
    },
    pengalamanBelajar: {
      memahami: 'Anak bercermin mengamati wajah dan tangannya, menyimak dongeng boneka tangan "Kisah Si Kancil Belajar Doa Makan", dan mengenal nama Allah Al-Khaliq.',
      mengaplikasi: 'Anak mencuci tangan 6 langkah, duduk bersila di karpet sentra, melafalkan doa sebelum makan, dan menikmati bekal buah kurma bersama teman.',
      merefleksi: 'Anak mengungkapkan perasaannya setelah makan tertib, mengucapkan doa sesudah makan, dan berjanji akan selalu makan sambil duduk di rumah.'
    },
    kerangkaPembelajaran: {
      praktikPedagogis: {
        pendekatan: 'Pembelajaran Tematik Terpadu Berbasis Karakter Islami Ramah Anak',
        model: 'Model Sentra Imtaq (Ibadah & Budi Pekerti)',
        sintakModel: [
          'Pijakan Sebelum Main (Circle Time, Shalawat & Dongeng Adab Boneka Tangan)',
          'Pijakan Saat Main (Eksplorasi Cermin Diri, Kartu Adab & Praktik Makan Bersama)',
          'Pijakan Setelah Main (Pemberesan Tempat Makan & Muhasabah Ceria)'
        ],
        metode: 'Bercerita Boneka Tangan, Praktik Langsung Adab (Modeling), Nasyid & Tepuk Ceria, Eksplorasi Cermin Diri',
        strategi: 'Keteladanan Nyata (Uswatun Hasanah) & Pembiasaan Rutin Harian',
        diferensiasi: 'Bagi anak yang terbiasa makan terburu-buru, guru mendampingi dengan duduk di sampingnya sambil mengajak menghitung kunyahan secara perlahan.'
      },
      kemitraanPembelajaran: {
        peranGuru: 'Pendidik teladan (uswatun hasanah) yang lemah lembut, penuh kasih sayang, dan konsisten mencontohkan adab islami.',
        peranSiswa: 'Anak saleh-salehah yang antusias meniru kebaikan, belajar mandiri, dan menyayangi sesama teman.',
        temanSebaya: 'Saudara seiman yang saling mengingatkan kebaikan secara santun: "Ayo duduk dulu makannya, teman!"',
        orangTuaMasyarakat: 'Orang tua mendukung pembiasaan adab makan duduk dan doa bersama di meja makan keluarga di rumah.'
      },
      lingkunganPembelajaran: {
        ruangKelas: 'Sentra Imtaq bernuansa islami, karpet bersih, sajadah mini, cermin seukuran anak, dan poster adab bergambar menarik.',
        lingkunganSekitar: 'Tempat wudu berundak rendah ramah anak dan wastafel cuci tangan dengan sabun busa ramah kulit anak.',
        ruangDigital: 'Video pendek animasi 3D "Kisah Nusa & Rara: Adab Makan Sesuai Sunnah".'
      },
      pemanfaatanDigital: {
        opsiOnline: 'Laporan portofolio video mini rekaman celoteh anak saat mempraktikkan doa makan yang dibagikan kepada orang tua.',
        opsiOffline: 'Kartu gambar langkah adab makan fisik yang dapat diurutkan anak dan buku jurnal hafalan doa ceria.'
      }
    },
    skenarioPembelajaran: {
      pendahuluan: [
        {
          fase: '1. Penyambutan Salam & Ikrar Pagi Ceria',
          kegiatan: 'Ustadzah menyambut anak di teras kelas dengan ucapan salam hangat dan senyuman. Bersama-sama melafalkan ikrar santri cilik di halaman kelas.',
          waktu: '15 menit'
        },
        {
          fase: '2. Lingkaran Pagi (Circle Time) & Asmaul Husna',
          kegiatan: 'Duduk melingkar di Sentra Imtaq. Melafalkan basmalah, membaca Surah Al-Fatihah bersama, dan bernyanyi nasyid Asmaul Husna: "Al-Khaliq Allah Maha Pencipta".',
          waktu: '15 menit'
        },
        {
          fase: '3. Dongeng Boneka Tangan: "Pipi Si Kelinci yang Lupa Cuci Tangan"',
          kegiatan: 'Ustadzah mendongeng menggunakan boneka tangan kelinci lucu yang sakit perut karena terburu-buru makan tanpa cuci tangan dan tidak berdoa. Anak diajak menyimpulkan mengapa kita harus berdoa dan menjaga kebersihan.',
          waktu: '15 menit'
        }
      ],
      inti: {
        tahap1Memahami: [
          {
            sintak: 'Eksplorasi Cermin Diri & Mensyukuri Nikmat Tubuh Sehat',
            aktivitas: 'Bercermin dan Mengenal Anggota Tubuh Ciptaan Allah Al-Khaliq',
            peranGuru: 'Mengajak anak bergantian berdiri di depan cermin besar: "Coba lihat, siapa yang memberikan kita mata yang bening dan tangan yang kuat ini?"',
            peranSiswa: 'Anak mengamati wajah dan kedua tangannya di cermin, mengusap kedua tangan ke wajah sambil mengucapkan "Alhamdulillah".',
            waktu: '20 menit'
          }
        ],
        tahap2Mengaplikasi: [
          {
            sintak: 'Praktik Langsung 4 Zona Main Adab & Kebaikan',
            aktivitas: 'Bermain Bermakna di 4 Ragam Invitasi Sentra Imtaq',
            peranGuru: 'Mendampingi anak di zona main, memberikan bimbingan lafal doa, dan mencatat respon perkembangan anak (catatan anekdot).',
            peranSiswa: 'Anak memilih ragam main:\n- Zona 1: "Mengurutkan Kartu Bergambar Adab Makan Sunnah" (Mencuci tangan → Duduk → Bismillah → Tangan kanan).\n- Zona 2: "Praktik Cuci Tangan 6 Langkah di Wastafel" (Menggunakan sabun dan air mengalir).\n- Zona 3: "Merias Piring Sehat Halal" (Menyusun miniatur buah kurma, pisang, dan sayur tiruan di atas piring mainan).\n- Zona 4: "Mewarnai Kaligrafi Al-Khaliq dengan Pasir Warna" (Melatih motorik halus dan konsentrasi).',
            waktu: '45 menit'
          }
        ],
        tahap3Merefleksi: [
          {
            sintak: 'Pemberesan Sentra & Pijakan Setelah Main',
            aktivitas: 'Merapikan Kartu dan Mengembalikan Media Mainan ke Rak',
            peranGuru: 'Memandu proses pemberesan dengan tepuk riang anak saleh.',
            peranSiswa: 'Anak saling membantu merapikan alat mewarnai dan kartu gambar secara mandiri.',
            waktu: '10 menit'
          }
        ]
      },
      penutup: [
        {
          fase: '1. Praktik Nyata Makan Bekal Bersama Sesuai Sunnah',
          kegiatan: 'Makan bekal bersama di karpet sentra. Anak mempraktikkan langsung: duduk rapi, membaca doa sebelum makan bersama ustadzah, makan menggunakan tangan kanan secara tenang, dan membaca doa sesudah makan.',
          waktu: '20 menit'
        },
        {
          fase: '2. Recalling & Tanya Jawab Reflektif',
          kegiatan: 'Ustadzah bertanya: "Bagaimana rasanya makan sambil duduk tenang? Apa doa yang kita baca tadi?" Anak menjawab dengan penuh percaya diri.',
          waktu: '15 menit'
        },
        {
          fase: '3. Doa Pulang & Pelukan Hangat Ustadzah',
          kegiatan: 'Membaca doa penutup majelis (Kafaratul Majelis), bersalaman dengan ustadzah, dan dijemput oleh orang tua dengan tertib.',
          waktu: '10 menit'
        }
      ]
    },
    lkpd: {
      judul: 'Panduan Pembiasaan Adab & Lembar Observasi Perkembangan Spiritual Anak (Sentra Imtaq PAUD)',
      tujuan: '1. Membimbing anak mengenal Allah Al-Khaliq melalui pengamatan tubuh diri sendiri.\n2. Membiasakan adab makan dan doa harian secara mandiri dan gembira.\n3. Mendokumentasikan perkembangan nilai agama dan moral anak usia dini.',
      petunjuk: '1. Guru menciptakan suasana kelas yang teduh dan penuh keteladanan.\n2. Sediakan cermin, kartu adab bergambar, dan media makan bersih.\n3. Catat respon ucapan dan tindakan anak pada lembar pengamatan.',
      stimulusKonteks: 'Makan dan minum bukan sekadar rutinitas mengisi perut, melainkan media pendidikan tauhid dan akhlak luhur bagi anak usia dini. Dengan mengenalkan adab makan islami sejak usia fondasi, anak bertumbuh menjadi pribadi yang santun, bersyukur, dan menyayangi sesama.',
      pertanyaanPemantik: 'Bagaimana perasaanmu ketika mengucapkan "Bismillah" sebelum makan? Mengapa kita tidak boleh makan sambil berlari-lari?',
      langkahKegiatan: [
        'Anak mengamati kartu bergambar adab makan Rasulullah SAW.',
        'Anak diajak menirukan gerakan mencuci tangan 6 langkah.',
        'Anak duduk bersila dengan tenang dan melafalkan doa sebelum makan.',
        'Anak mencicipi buah kurma dengan tangan kanan dan mengucapkan rasa syukur.',
        'Guru mencatat kemampuan anak melafalkan doa dan ketertiban adabnya.'
      ],
      tabelPengamatan: {
        judul: 'Ceklis Capaian Nilai Agama dan Budi Pekerti (BSKAP No. 020 Tahun 2026)',
        kolom: ['No', 'Nama Anak', 'Lafal Doa Sebelum Makan', 'Adab Duduk & Tangan Kanan', 'Sikap Syukur & Berbagi', 'Kategori Capaian'],
        barisContoh: [
          ['1', 'Abdullah Zikri (5 Thn)', 'Lancar dan jelas melafalkan doa tanpa bantuan', 'Konsisten duduk tertib dan menggunakan tangan kanan', 'Mau berbagi kurma dengan teman di sebelahnya', 'BSB (Berkembang Sangat Baik)'],
          ['2', 'Fatima Azzahra (5 Thn)', 'Mampu melafalkan doa mengikuti panduan guru', 'Duduk tenang dan memegang cangkir dengan tangan kanan', 'Tersenyum dan mengucapkan Alhamdulillah', 'BSH (Berkembang Sesuai Harapan)'],
          ['3', 'Muhammad Rizky (6 Thn)', 'Lafal doa masih terbata-bata', 'Sempat ingin berdiri saat makan, lalu duduk kembali setelah diingatkan', 'Senang menikmati bekal buahnya', 'MB (Mulai Berkembang)']
        ]
      },
      pertanyaanAnalisis: [
        'Apakah anak sudah mampu menunjukkan kesadaran beradab makan tanpa harus ditegur berkali-kali?',
        'Bagaimana keterlibatan emosi anak saat melafalkan puji syukur kepada Allah Al-Khaliq?',
        'Upaya pembiasaan apa yang perlu dikoordinasikan dengan orang tua di rumah agar adab ini konsisten?'
      ],
      tugasPenerapan: 'Berikan stiker bintang kebaikan untuk buku penghubung keluarga bagi anak yang telah berhasil mempraktikkan makan sambil duduk di rumah.',
      kesimpulan: 'Penanaman nilai agama pada fase fondasi harus berbasis pengalaman nyata yang menyenangkan dan teladan penuh cinta, sehingga anak merasa bangga dan bahagia berakhlak mulia.',
      refleksiSiswa: 'Perasaan Anak: [⭐ Sangat Bersemangat]  [🤲 Senang Berdoa]  [😊 Sayang Ustadzah]\nCeloteh Anak: "Nanti di rumah aku mau pimpin doa makan buat ayah dan bunda!"'
    },
    asesmen: {
      diagnostik: {
        tujuan: 'Mengetahui kebiasaan awal anak dalam melafalkan doa dan adab makan di rumah.',
        teknik: 'Wawancara santai dengan anak dan angket komunikasi awal dengan orang tua.',
        instrumen: 'Lembar observasi kebiasaan harian anak.',
        tindakLanjut: 'Memberikan penguatan bertahap bagi anak yang belum terbiasa berdoa sebelum makan.'
      },
      formatif: {
        tujuan: 'Memantau perkembangan kemandirian makan, ketertiban adab, dan kelancaran doa harian selama pembelajaran sentra.',
        teknik: 'Catatan Anekdot dan Lembar Ceklis Capaian Pembelajaran BSKAP 020/2026.',
        instrumen: 'Format catatan anekdot peristiwa bermakna anak saat makan bersama.',
        tindakLanjut: 'Memberikan pujian spesifik: "Masya Allah, tangan kanan Farhan hebat sekali memegang sendoknya dengan tenang!"'
      },
      sumatif: {
        tujuan: 'Menilai pemahaman nilai tauhid dasar (Allah Al-Khaliq) dan pembiasaan adab islami anak pada akhir semester.',
        teknik: 'Penilaian Unjuk Kerja Praktik Ibadah Mandiri dan Lembar Portofolio Kebaikan Anak.',
        instrumen: 'Rubrik penilaian capaian Fase Fondasi Pendidikan Agama Islam skala 1-4 (BSB, BSH, MB, BB).',
        kriteriaKetuntasan: 'Anak mencapai fase fondasi agama jika minimal berpredikat BSH (Berkembang Sesuai Harapan).'
      }
    },
    rubrikPenilaian: [
      {
        aspek: 'Mengenal Allah Al-Khaliq & Rasa Syukur (BSKAP 020/2026)',
        skor4: 'BSB (Berkembang Sangat Baik): Mengungkapkan spontan rasa syukur kepada Allah Al-Khaliq atas nikmat tubuh dan makanan, serta mengajak teman melafalkan kalimat thayyibah.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu menyebutkan bahwa Allah adalah pencipta tubuh manusia dan makanan bergizi ketika ditanya guru.',
        skor2: 'MB (Mulai Berkembang): Mulai mengenal nama Allah Al-Khaliq setelah mendengarkan cerita dan bimbingan guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Belum mampu merespons konsep Allah sebagai Sang Pencipta dan butuh bimbingan penuh.'
      },
      {
        aspek: 'Lafal Doa Sebelum dan Sesudah Makan',
        skor4: 'BSB (Berkembang Sangat Baik): Melafalkan doa sebelum dan sesudah makan secara mandiri, fasih, tartil, dan dengan sikap tangan menengadah khusyuk.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu melafalkan doa sebelum dan sesudah makan bersama-sama dengan tertib.',
        skor2: 'MB (Mulai Berkembang): Mulai menirukan lafal doa makan meskipun masih terputus-putus atau dibimbing kata demi kata.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Belum mau menirukan lafal doa makan saat diajak berdoa bersama.'
      },
      {
        aspek: 'Penerapan Adab Makan Sunnah (Duduk & Tangan Kanan)',
        skor4: 'BSB (Berkembang Sangat Baik): Konsisten makan dan minum sambil duduk tertib, selalu menggunakan tangan kanan, serta merapikan tempat makannya secara mandiri.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Makan sambil duduk menggunakan tangan kanan dengan tertib sesuai arahan guru.',
        skor2: 'MB (Mulai Berkembang): Duduk saat makan namun sesekali masih menggunakan tangan kiri atau perlu diingatkan guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Masih sering makan sambil berjalan-jalan atau menolak duduk tertib.'
      },
      {
        aspek: 'Kasih Sayang & Sikap Berbagi (Akhlak Karimah)',
        skor4: 'BSB (Berkembang Sangat Baik): Dengan senang hati menawarkan dan membagikan makanannya kepada teman yang tidak membawa bekal serta mengucapkan terima kasih dengan tulus.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Bersedia berbagi makanan saat diminta guru dan berperilaku ramah kepada teman sebaya.',
        skor2: 'MB (Mulai Berkembang): Mulai mau berbagi makanan setelah dibujuk secara lembut oleh guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Cenderung menolak berbagi dan menunjukkan sikap posesif terhadap mainan/makanannya.'
      }
    ],
    diferensiasi: {
      konten: {
        bimbingan: 'Disediakan kartu bergambar langkah doa makan dengan ilustrasi kartun yang besar dan minim teks.',
        sedang: 'Disediakan buku cerita bergambar adab makan dan miniatur perlengkapan makan aman.',
        pengayaan: 'Disediakan kartu kaligrafi Asmaul Husna Al-Khaliq dan lafal doa lengkap dengan arti sederhana.'
      },
      proses: {
        bimbingan: 'Ustadzah membimbing secara individual lafal doa dengan metode pengulangan berirama 3-4 kata.',
        sedang: 'Anak mempraktikkan adab makan dalam kelompok kecil secara mandiri dengan pengawasan berkala.',
        pengayaan: 'Anak yang sudah lancar diberi kesempatan memimpin lafal doa makan di depan teman-temannya.'
      },
      produk: {
        bimbingan: 'Mampu menirukan 2 langkah adab makan (cuci tangan dan duduk rapi).',
        sedang: 'Mampu mempraktikkan seluruh urutan adab makan dan doa dengan baik.',
        pengayaan: 'Mampu menceritakan kembali kisah boneka tangan dan mempraktikkan adab secara sempurna.'
      }
    },
    remedialDanPengayaan: {
      kriteriaRemedial: 'Anak yang masih kesulitan duduk tenang saat makan atau belum hafal lafal doa makan.',
      programRemedial: 'Pendampingan khusus tatap muka dengan metode bernyanyi nasyid doa makan berulang-ulang dalam suasana ceria tanpa tekanan.',
      kriteriaPengayaan: 'Anak yang sudah hafal doa makan dengan fasih dan memiliki kemandirian makan sangat tinggi.',
      programPengayaan: 'Diberikan amanah sebagai "Duta Cilik Adab Makan" yang memimpin pembacaan doa makan di kelas.'
    },
    refleksi: {
      guru: [
        'Apakah pendekatan keteladanan dan kisah boneka tangan berhasil menyentuh hati anak untuk mempraktikkan adab secara ikhlas?',
        'Bagaimana keterlibatan anak saat praktik makan bersama di sentra?'
      ],
      siswa: [
        'Senang tidak makan kurma manis bersama teman-teman tadi?',
        'Nanti malam saat makan malam bersama ayah dan bunda, apa yang mau kamu bacakan?'
      ]
    },
    produkAkhir: 'Lembar Catatan Anekdot Pembiasaan Adab Makan, Foto Berseri Praktik Wudu & Makan Mandiri, serta Kartu Syukur Portofolio Anak.',
    sumberBelajar: [
      'Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 tentang Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti Fase Fondasi.',
      'Al-Qur\'an dan Hadis Riwayat Bukhari-Muslim tentang Adab Makan bagi Anak.',
      'Buku Panduan Guru Pendidikan Agama Islam dan Budi Pekerti untuk TK/PAUD - Kemendikbudristek RI.',
      'Buku Cerita Bergambar Seri Balita Cerdas & Berakhlak Mulia.'
    ]
  },

  // PRESET 3: PAUD TK A (Tema Main Peran Makro Pasar Tradisional - Jati Diri & Gotong Royong BSKAP 046/2025)
  {
    id: 'preset-paud-pasar-peran',
    createdAt: '2026-10-20',
    identitas: {
      sekolah: 'TK Ceria Mandiri Nusantara',
      namaGuru: 'Ibu Sri Wahyuni, S.Pd.',
      mataPelajaran: 'PAUD - Fase Fondasi (Sentra Main Peran Makro)',
      jenjang: 'PAUD',
      faseKelas: 'Fase Fondasi (TK A / Usia 4-5 Tahun)',
      semester: 'Semester Ganjil',
      tahunPelajaran: '2025/2026',
      materi: 'Bermain Peran Pasar Tradisional: Belajar Mengantre, Menghitung Uang Mainan, dan Berbagi Sayur Lokal',
      alokasiWaktu: '150 menit (1 Hari Pertemuan Sentra Main Peran)',
      jumlahPertemuan: '1 Pertemuan',
      jumlahSiswa: '15 anak didik (Kelompok A)',
      karakteristikSiswa: 'Anak usia 4-5 tahun memiliki daya imajinasi tinggi, senang meniru perilaku orang dewasa, sedang belajar mengendalikan emosi saat menunggu giliran, dan menyukai interaksi bermain peran bersama teman sebaya.',
      kompetensiAwal: 'Anak sudah mampu mengucapkan salam, mengenal nama sayuran sederhana (wortel, bayam, tomat), dan dapat berhitung 1 sampai 5 secara lisan.',
      sarpras: 'Sentra Main Peran yang disulap menjadi kios pasar mini, keranjang belanja anyaman bambu mini, replika sayur buah lokal (atau sayur sungguhan dari kebun), celemek pedagang, uang daun koin mainan, dan timbangan kue mini.',
      modelPembelajaran: 'Model Main Peran Makro (Socio-Dramatic Play) dipadukan dengan Inkuiri Konsep Nilai Jual-Beli Ramah Anak dan Praktik Antre Berkesadaran',
      kearifanLokal: 'Suasana pasar rakyat tradisional desa, sapaan santun bahasa daerah setempat ("Monggo bu, Bade mundut napa?"), tradisi menimbang sayur dengan ramah, dan penggunaan kantong belanja kain ramah lingkungan.',
      capaianPembelajaran: '(Rujukan Resmi: Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran Fase Fondasi PAUD - Elemen Jati Diri & Dasar-dasar Literasi dan STEAM)\nAnak mengenali, mengelola, dan mengekspresikan emosi diri dalam interaksi sosial; belajar bersabar menunggu giliran (mengantre); mengenal konsep pramatematika (menghitung jumlah barang belanjaan 1-5 dan membedakan berat-ringan pada timbangan); serta menghargai keberagaman profesi pedagang dan petani dengan tutur kata yang ramah.',
      catatanTambahan: 'Memfasilitasi pengalaman sosiodramatik yang kaya kosakata, melatih emosi bersabar, dan menumbuhkan rasa percaya diri anak dalam berbicara.'
    },
    capaianPembelajaran: '(Rujukan Resmi: Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran Fase Fondasi PAUD - Elemen Jati Diri & Dasar-dasar Literasi dan STEAM)\nAnak mengenali, mengelola, dan mengekspresikan emosi diri dalam interaksi sosial; belajar bersabar menunggu giliran (mengantre); mengenal konsep pramatematika (menghitung jumlah barang belanjaan 1-5 dan membedakan berat-ringan pada timbangan); serta menghargai keberagaman profesi pedagang dan petani dengan tutur kata yang ramah.',
    tujuanPembelajaran: [
      'Anak mampu memerankan peran sosial (sebagai pedagang pasar yang ramah atau pembeli yang santun) dengan ekspresi percaya diri.',
      'Anak mampu mempraktikkan keterampilan sosial menunggu giliran (antre) saat membayar belanjaan dengan sabar.',
      'Anak mampu menggunakan konsep pramatematika sederhana (menghitung 1-5 buah tomat/wortel dan menimbang sayuran) selama kegiatan bermain peran pasar.'
    ],
    kompetensiAwal: 'Anak sudah mampu mengucapkan salam, mengenal nama sayuran sederhana (wortel, bayam, tomat), dan dapat berhitung 1 sampai 5 secara lisan.',
    karakteristikSiswa: 'Anak usia 4-5 tahun memiliki daya imajinasi tinggi, senang meniru perilaku orang dewasa, sedang belajar mengendalikan emosi saat menunggu giliran, dan menyukai interaksi bermain peran bersama teman sebaya.',
    kebutuhanBelajar: 'Anak membutuhkan skenario peran yang sederhana dan jelas, kostum/properti bermain yang nyata dan menarik, serta bimbingan guru dalam menyelesaikan konflik kecil saat berebut barang belanjaan.',
    pemahamanBermakna: 'Pasar tradisional adalah tempat berkumpulnya orang-orang baik yang saling tolong-menolong; pedagang menyediakan sayur sehat dari petani, dan pembeli membayar dengan senyuman serta uang yang sah; hidup rukun dan sabar mengantre membuat semua orang bahagia.',
    pertanyaanPemantik: [
      'Pernahkah kalian diajak ibu atau ayah pergi ke pasar tradisional? Suara apa saja yang kalian dengar di sana?',
      'Jika ada 3 orang pembeli yang sama-sama ingin membeli wortel, bagaimana cara kita bergantian agar tidak bertengkar?'
    ],
    pertanyaanEsensial: [
      'Mengapa kita harus bersabar menunggu giliran (antre) saat berbelanja di pasar?',
      'Dari mana asalnya sayur-sayuran segar yang dijual oleh bapak dan ibu pedagang?'
    ],
    materiEsensial: [
      {
        subtopik: 'Profesi di Pasar Tradisional & Etika Berdagang',
        uraian: 'Mengenal peran pedagang, pembeli, dan petani; kata-kata ajaib dalam transaksi ("Permisi", "Berapa harganya?", "Terima kasih", "Sama-sama").'
      },
      {
        subtopik: 'Konsep Pramatematika: Berhitung & Menimbang',
        uraian: 'Menghitung 1, 2, 3 buah wortel ke dalam kantong belanja; mengamati jarum timbangan bergerak saat sayuran diletakkan.'
      },
      {
        subtopik: 'Keterampilan Mengelola Emosi: Sabar Mengantre',
        uraian: 'Memahami garis antrean lantai, berdiri di belakang teman tanpa mendorong, dan bangga bisa bersabar menunggu giliran.'
      }
    ],
    dimensiProfilLulusan: [
      {
        dimensi: 'Kewargaan & Sosial',
        keterkaitan: 'Mengenal aturan sosial di ruang publik dan menghargai profesi pedagang pasar rakyat.',
        aktivitas: 'Berperilaku santun saat tawar-menawar ramah dan mengucapkan terima kasih.',
        indikator: 'Mengucapkan kata tolong dan terima kasih saat melakukan transaksi belanja.'
      },
      {
        dimensi: 'Kemandirian & Regulasi Emosi',
        keterkaitan: 'Mampu menahan diri dan bersabar menunggu giliran di antrean kasir pasar.',
        aktivitas: 'Berdiri tertib di garis antre berwarna-warni tanpa menyerobot teman di depannya.',
        indikator: 'Menunjukkan kesabaran menunggu giliran tanpa menangis atau marah.'
      },
      {
        dimensi: 'Komunikasi',
        keterkaitan: 'Mengembangkan perbendaharaan kata lisan yang kaya terkait sayuran, harga, dan sapaan.',
        aktivitas: 'Melakukan dialog bermain peran: "Saya mau beli bayam 2 ikat ya bu!"',
        indikator: 'Berbicara dengan intonasi ramah, ekspresif, dan kontak mata yang baik.'
      },
      {
        dimensi: 'Kreativitas',
        keterkaitan: 'Menggunakan benda simbolik (daun/karton sebagai uang, balok sebagai kasir).',
        aktivitas: 'Mengatur display kios sayuran agar terlihat rapi dan menarik bagi pembeli.',
        indikator: 'Menata barang dagangan dengan rapi dan menggunakan alat peran secara imajinatif.'
      }
    ],
    prinsipDeepLearning: {
      berkesadaran: {
        deskripsi: 'Anak menyadari perannya dalam kelompok, menyadari emosinya saat harus menunggu, dan belajar mengendalikan dorongan ingin mendahului.',
        penerapan: 'Guru mengenalkan "Langkah Kaki Sabar": saat berdiri di garis antre, anak diajak menarik napas perlahan sambil tersenyum menatap punggung teman di depannya.'
      },
      bermakna: {
        deskripsi: 'Pengalaman belanja pasar tradisional terhubung langsung dengan pengalaman nyata anak bersama keluarga di lingkungan tempat tinggalnya.',
        penerapan: 'Menggunakan sayuran sungguhan hasil panen kebun sekolah (kangkung, cabai merah, tomat) yang dapat diraba, dicium aromanya, dan ditimbang secara nyata.'
      },
      menggembirakan: {
        deskripsi: 'Bermain peran dipenuhi gelak tawa, memakai topi caping petani mini, membawa keranjang belanjaan lucu, dan bernyanyi lagu "Menanam Jagung".',
        penerapan: 'Lagu "Ayo ke Pasar Tradisional" dengan irama tepuk tangan riang dan yel-yel pedagang ramah.'
      }
    },
    pengalamanBelajar: {
      memahami: 'Anak menyimak tayangan gambar/dongeng tentang pasar tradisional nusantara, mengidentifikasi peran pedagang dan pembeli, serta mendiskusikan aturan bermain peran.',
      mengaplikasi: 'Anak memakai celemek/keranjang belanja, memilih peran yang diminati, melakukan interaksi jual-beli, menghitung sayuran, dan mengantre di kasir kios.',
      merefleksi: 'Anak menceritakan barang apa yang dibelinya, bagaimana rasanya menjadi pedagang yang ramah, dan mengungkapkan rasa senangnya bisa bersabar mengantre.'
    },
    kerangkaPembelajaran: {
      praktikPedagogis: {
        pendekatan: 'Pembelajaran Sosiodramatik Berbasis Pengalaman Nyata (Dramatic Play Approach)',
        model: 'Model Sentra Main Peran Makro (Socio-Dramatic Play)',
        sintakModel: [
          'Pijakan Sebelum Main (Penataan Kios Pasar, Kesepakatan Peran, & Kosakata Kunci)',
          'Pijakan Saat Main (Observasi Transaksi, Scaffolding Interaksi Sosial, & Resolusi Konflik)',
          'Pijakan Setelah Main (Pemberesan Sayur/Kios & Recalling Emosi Sabar Mengantre)'
        ],
        metode: 'Bermain Peran Makro, Simulasi Antrean, Praktik Pramatematika Menimbang, Dialog Interaktif',
        strategi: 'Pemberian Properti Riil dan Penanda Visual Lantai yang Jelas',
        diferensiasi: 'Bagi anak yang masih pemalu berbicara, ditemani guru menjadi pembeli pendamping; bagi anak yang sangat vokal, diberikan peran kasir yang bertugas menghitung koin daun.'
      },
      kemitraanPembelajaran: {
        peranGuru: 'Sutradara pembelajaran yang bijaksana, penengah konflik ramah anak, dan pemodel dialog santun.',
        peranSiswa: 'Aktor cilik yang bebas memerankan karakter dengan sopan, mandiri, dan gembira.',
        temanSebaya: 'Mitra transaksi yang saling mendengarkan dan saling menghargai antrean.',
        orangTuaMasyarakat: 'Orang tua diajak mengajak anak ke pasar tradisional sungguhan di akhir pekan untuk memperkuat pengalaman belajarnya.'
      },
      lingkunganPembelajaran: {
        ruangKelas: 'Sentra Main Peran ditata menjadi 3 kios pasar: Kios Sayuran Hijau, Kios Buah-Buahan Manis, dan Meja Kasir Ramah.',
        lingkunganSekitar: 'Jalur antrean bergaris warna-warni di lantai kelas.',
        ruangDigital: 'Audio latar suara hiruk-pikuk pasar tradisional yang ceria dan musik gamelan calung riang.'
      },
      pemanfaatanDigital: {
        opsiOnline: 'Video rekaman aksi bermain peran anak yang diunggah ke channel komunikasi orang tua sekolah.',
        opsiOffline: 'Keranjang anyaman bambu fisik, sayuran asli dari kebun sekolah, dan koin daun mainan.'
      }
    },
    skenarioPembelajaran: {
      pendahuluan: [
        {
          fase: '1. Penyambutan & Sapaan Pedagang Ceria',
          kegiatan: 'Guru menyambut anak dengan topi caping petani mini. Anak meletakkan tas dan saling menyapa dengan bahasa santun.',
          waktu: '15 menit'
        },
        {
          fase: '2. Circle Time & Pembagian Peran',
          kegiatan: 'Guru dan anak duduk melingkar. Membicarakan profesi pedagang pasar dan pembeli. Menentukan siapa yang menjadi pedagang, pembeli, dan kasir secara bergantian dan adil.',
          waktu: '20 menit'
        }
      ],
      inti: {
        tahap1Memahami: [
          {
            sintak: 'Pengenalan Kios Pasar & Uang Daun Mainan',
            aktivitas: 'Orientasi Kios Sayur dan Tata Cara Belanja Santun',
            peranGuru: 'Memperlihatkan sayuran di kios: "Ini bayam segar, ini tomat merah. Harganya 1 koin daun untuk 2 buah tomat ya!"',
            peranSiswa: 'Anak memegang uang koin daun, memeriksa keranjang belanjaan, dan bersiap memainkan perannya.',
            waktu: '15 menit'
          }
        ],
        tahap2Mengaplikasi: [
          {
            sintak: 'Pelaksanaan Bermain Peran Makro Pasar Tradisional',
            aktivitas: 'Aksi Jual-Beli, Menimbang Sayur, dan Antre di Kasir',
            peranGuru: 'Mengamati interaksi sosial, mendampingi kasir menghitung koin daun, dan memuji anak yang sabar menunggu antrean.',
            peranSiswa: 'Pembeli mendatangi kios, menyapa pedagang: "Selamat pagi pak pedagang, saya mau beli wortel 3 buah!". Pedagang menaruh wortel di timbangan, memasukkan ke keranjang, dan pembeli mengantre di kasir dengan tertib.',
            waktu: '50 menit'
          }
        ],
        tahap3Merefleksi: [
          {
            sintak: 'Pemberesan Kios Pasar (Beres-Beres Bersama)',
            aktivitas: 'Mengembalikan Sayuran dan Keranjang Belanja ke Rak',
            peranGuru: 'Menyanyikan lagu beres-beres dan memotivasi kerja sama tim.',
            peranSiswa: 'Semua anak bergotong royong mengelompokkan sayuran kembali ke kotaknya dan merapikan uang koin mainan.',
            waktu: '15 menit'
          }
        ]
      },
      penutup: [
        {
          fase: '1. Istirahat & Makan Sayur Bersama',
          kegiatan: 'Cuci tangan 6 langkah, menikmati bekal sayur sop sehat bersama teman-teman, dan minum air putih.',
          waktu: '20 menit'
        },
        {
          fase: '2. Recalling & Refleksi Sabar Mengantre',
          kegiatan: 'Duduk melingkar menceritakan pengalaman: "Siapa tadi yang berhasil menunggu antrean sampai gilirannya tiba tanpa menyerobot?" Anak yang sabar diberi kalung medali "Anak Sabar & Santun". Ditutup dengan doa dan salam pulang.',
          waktu: '15 menit'
        }
      ]
    },
    lkpd: {
      judul: 'Panduan Skenario Main Peran & Lembar Observasi Perkembangan Sosial-Emosional (Sentra Main Peran)',
      tujuan: '1. Melatih keterampilan komunikasi dan negosiasi santun dalam interaksi sosial.\n2. Mengembangkan kemampuan regulasi emosi sabar menunggu giliran (mengantre).\n3. Mengenalkan konsep nilai kuantitas pramatematika secara konkret dan menyenangkan.',
      petunjuk: '1. Rancang kios pasar mini dengan label harga sederhana (1-3 koin daun).\n2. Berikan garis batas antrean yang jelas di lantai menggunakan selotip warna-warni.\n3. Amati kemampuan anak dalam berkomunikasi dan menahan diri saat mengantre.',
      stimulusKonteks: 'Melalui bermain peran pasar tradisional, anak usia 4-5 tahun mempraktikkan keterampilan hidup esensial: bagaimana menyapa sesama manusia dengan hangat, bagaimana menimbang rasa keadilan, serta bagaimana membiasakan budaya antre yang tertib sejak dini.',
      pertanyaanPemantik: 'Apa yang kamu katakan kepada temanmu jika keranjang belanjamu sudah penuh dengan sayur lezat?',
      langkahKegiatan: [
        'Anak memakai atribut peran (celemek/keranjang belanja/topi petani).',
        'Anak berkeliling melihat barang dagangan di kios sayur.',
        'Anak melakukan dialog jual-beli dengan pedagang.',
        'Anak berjalan menuju meja kasir dan berdiri di garis antre menunggu giliran.',
        'Anak membayar belanjaan dengan koin mainan dan mengucapkan terima kasih.'
      ],
      tabelPengamatan: {
        judul: 'Lembar Ceklis Capaian Elemen Jati Diri & STEAM PAUD (BSKAP 046/2025)',
        kolom: ['No', 'Nama Anak', 'Interaksi Peran (Pedagang/Pembeli)', 'Sikap Sabar Mengantre', 'Konsep Hitung 1-5', 'Predikat Perkembangan'],
        barisContoh: [
          ['1', 'Rian Bagaskara (4 Thn)', 'Percaya diri menawarkan dagangan wortel sambil tersenyum', 'Menunggu giliran dengan tenang di garis kuning', 'Menghitung 3 koin daun dengan tepat', 'BSB (Berkembang Sangat Baik)'],
          ['2', 'Nabila Zahra (5 Thn)', 'Mampu bertanya harga sayur dengan santun', 'Sempat ingin menyalip, lalu kembali ke garis setelah diingatkan guru', 'Menghitung 2 buah tomat', 'BSH (Berkembang Sesuai Harapan)'],
          ['3', 'Danu Pratama (4 Thn)', 'Cenderung diam dan memegang erat keranjang belanja', 'Masih perlu digandeng guru saat berdiri di antrean', 'Mulai menunjuk sayur bayam', 'MB (Mulai Berkembang)']
        ]
      },
      pertanyaanAnalisis: [
        'Bagaimana respon anak ketika melihat temannya sedang dilayani di kasir? Apakah sudah muncul kesadaran mengantre?',
        'Kosakata baru apa saja yang berhasil diucapkan anak selama kegiatan jual-beli berlangsung?',
        'Bagaimana guru dapat membantu anak yang masih cemas atau takut berbicara dalam kegiatan bermain peran?'
      ],
      tugasPenerapan: 'Minta orang tua memberikan kesempatan kepada anak untuk menyerahkan uang pembayaran saat membeli roti atau buah di warung terdekat.',
      kesimpulan: 'Bermain peran makro pasar tradisional terbukti sangat efektif menumbuhkan kecerdasan sosial, kesabaran mengantre, dan literasi finansial pranyata bagi anak usia dini.',
      refleksiSiswa: 'Emotikon Anak Hari Ini: [🥕 Suka Sekali Jadi Pedagang]  [🛒 Senang Belanja]  [🤝 Bangga Antre Tertib]\nKata Anak: "Besok aku mau jualan semangka manis ya bu guru!"'
    },
    asesmen: {
      diagnostik: {
        tujuan: 'Mengidentifikasi keberanian berbicara dan kemampuan anak berhitung 1-5 sebelum bermain peran.',
        teknik: 'Tanya jawab santai tentang sayuran kesukaan anak saat lingkaran pagi.',
        instrumen: 'Lembar ceklis observasi respons vokal anak.',
        tindakLanjut: 'Membimbing anak yang pemalu dengan memberikan peran pembeli bersama pasangan teman yang ramah.'
      },
      formatif: {
        tujuan: 'Memantau perkembangan sosial-emosional anak saat mengantre dan ketepatan menghitung barang belanjaan.',
        teknik: 'Catatan Anekdot dan Foto Berseri saat proses interaksi bermain peran di kios pasar.',
        instrumen: 'Format catatan anekdot guru PAUD.',
        tindakLanjut: 'Guru memberikan penguatan positif langsung saat anak berhasil mengantre tanpa mengeluh.'
      },
      sumatif: {
        tujuan: 'Menilai capaian Elemen Jati Diri dan Keterampilan Sosial Fase Fondasi pada akhir tema.',
        teknik: 'Portofolio Foto Berseri dan Evaluasi Perkembangan Sosial Anak.',
        instrumen: 'Rubrik penilaian skala 1-4 (BSB, BSH, MB, BB).',
        kriteriaKetuntasan: 'Anak mencapai fase fondasi apabila minimal mencapai predikat BSH pada seluruh aspek.'
      }
    },
    rubrikPenilaian: [
      {
        aspek: 'Keterampilan Berperan & Komunikasi Santun',
        skor4: 'BSB (Berkembang Sangat Baik): Berperan secara sangat aktif dan mandiri, menggunakan kosakata jual-beli yang kaya dan santun, serta mampu mengajak teman lain berdialog secara wajar.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu menjalankan perannya sebagai pedagang atau pembeli dan menggunakan kalimat sederhana yang sopan.',
        skor2: 'MB (Mulai Berkembang): Mau ikut bermain peran namun masih banyak meniru kalimat teman atau butuh dorongan guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Menolak memakai atribut peran atau pasif di sudut kelas tanpa berkomunikasi.'
      },
      {
        aspek: 'Regulasi Diri: Sabar Menunggu Giliran (Antre)',
        skor4: 'BSB (Berkembang Sangat Baik): Berdiri tertib di garis antrean tanpa menyerobot, mengingatkan teman lain dengan santun, dan menunjukkan ketenangan emosi yang matang.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu berdiri di antrean menunggu gilirannya dilayani kasir dengan tertib.',
        skor2: 'MB (Mulai Berkembang): Mulai bisa mengantre namun sesekali terlihat gelisah atau perlu diingatkan untuk tidak maju sebelum gilirannya.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Menyerobot antrean teman, menangis, atau marah jika tidak langsung dilayani lebih dulu.'
      },
      {
        aspek: 'Konsep Pramatematika (Menghitung & Menimbang)',
        skor4: 'BSB (Berkembang Sangat Baik): Menghitung barang belanjaan (1-5) dengan korespondensi satu-satu yang tepat, serta memahami konsep berat-ringan pada timbangan secara mandiri.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Mampu menghitung 1-3 buah sayur dan memasukkannya ke dalam keranjang belanja.',
        skor2: 'MB (Mulai Berkembang): Mulai bisa menghitung benda dengan bimbingan atau menghitung sambil dituntun guru.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Belum mampu menghubungkan lambang bilangan dengan jumlah benda belanjaan.'
      },
      {
        aspek: 'Kerapian & Tanggung Jawab Bersama',
        skor4: 'BSB (Berkembang Sangat Baik): Berinisiatif memimpin pemberesan mainan pasar dan memastikan seluruh sayur dan uang mainan kembali ke tempatnya.',
        skor3: 'BSH (Berkembang Sesuai Harapan): Ikut serta membereskan kios dan keranjang belanja saat waktu bermain usai.',
        skor2: 'MB (Mulai Berkembang): Merapikan mainan setelah diingatkan dan diarahkan guru secara langsung.',
        skor1: 'BB (Belum Berkembang / Perlu Bimbingan): Meninggalkan area mainan dalam keadaan berantakan dan enggan ikut merapikan.'
      }
    ],
    diferensiasi: {
      konten: {
        bimbingan: 'Disediakan sayuran replika berukuran besar dengan warna kontras dan uang koin mainan bernomor 1.',
        sedang: 'Disediakan sayuran nyata bervariasi dengan label koin 1-3.',
        pengayaan: 'Disediakan timbangan kue dengan jarum penunjuk angka dan buku catatan struk belanja bergambar.'
      },
      proses: {
        bimbingan: 'Guru mendampingi langsung anak yang pemalu saat mendatangi kios dan membantu memilih kata sapaan.',
        sedang: 'Guru memberikan kebebasan interaksi jual beli sambil memantau dari kejauhan.',
        pengayaan: 'Anak diberikan peran sebagai manajer pasar mini yang bertugas memeriksa persediaan sayuran.'
      },
      produk: {
        bimbingan: 'Berhasil membeli 1 jenis sayur dan berdiri di antrean.',
        sedang: 'Berhasil melakukan transaksi 2-3 jenis sayur dengan percakapan yang lengkap.',
        pengayaan: 'Mampu menjadi pedagang yang mencatat pesanan pembeli dengan stempel gambar.'
      }
    },
    remedialDanPengayaan: {
      kriteriaRemedial: 'Anak yang masih menangis saat harus menunggu antrean atau enggan berinteraksi dengan teman.',
      programRemedial: 'Latihan antre dalam permainan sederhana berdua dengan guru diiringi lagu dan pujian setiap berhasil sabar selama 10 detik.',
      kriteriaPengayaan: 'Anak yang memiliki kelancaran berbicara dan empati tinggi.',
      programPengayaan: 'Diberikan kesempatan memandu teman-temannya dalam permainan peran lanjutan "Pasar Buah Nusantara".'
    },
    refleksi: {
      guru: [
        'Apakah media kios pasar dan garis antrean di lantai efektif melatih regulasi emosi anak?',
        'Bagaimana saya dapat memperkaya jenis kearifan lokal pasar tradisional pada pertemuan berikutnya?'
      ],
      siswa: [
        'Tadi seru tidak waktu jadi penjual sayur di pasar?',
        'Siapa yang besok mau coba jadi kasir yang menghitung koin daun?'
      ]
    },
    produkAkhir: 'Foto Dokumentasi Berseri Bermain Peran, Lembar Catatan Anekdot Sabar Mengantre, dan Portofolio Struk Belanja Gambar Anak.',
    sumberBelajar: [
      'Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran Fase Fondasi PAUD.',
      'Buku Panduan Guru Elemen Jati Diri Anak Usia Dini - Kemendikbudristek RI.',
      'Pasar tradisional lingkungan desa sekitar sekolah dan hasil kebun sekolah.'
    ]
  }
];
