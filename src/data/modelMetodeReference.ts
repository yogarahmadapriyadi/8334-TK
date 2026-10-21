/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Katalog Referensi Resmi Model dan Metode Pembelajaran
 * Kerangka Deep Learning (8-3-3-4) & Kurikulum Merdeka
 * Kemendikbudristek RI
 */

export interface SintakItem {
  nomor: number;
  nama: string;
  deskripsi: string;
  tahapDeepLearning: 'Tahap 1: Memahami' | 'Tahap 2: Mengaplikasi' | 'Tahap 3: Merefleksi';
}

export interface ModelPembelajaranRef {
  id: string;
  nama: string;
  namaSingkat: string;
  sumberRujukan: string;
  kategori: string;
  tujuanUtama: string;
  karakteristikDeepLearning: string;
  rekomendasiJenjang: string[];
  rekomendasiMapel: string[];
  jumlahSintak: number;
  sintaks: SintakItem[];
  metodePendukung: string[];
  teksRekomendasi: string;
}

export interface MetodePembelajaranRef {
  id: string;
  nama: string;
  kategori: 'Interaksi & Kolaborasi' | 'Eksplorasi & Praktik' | 'Presentasi & Umpan Balik' | 'Penalaran & Analisis' | 'Simulasi & Bermain Peran';
  deskripsi: string;
  peranDeepLearning: string;
  keunggulan: string;
  tipsPenerapan: string;
  chipLabel: string;
}

export interface PaketKombinasiRef {
  id: string;
  judul: string;
  jenjang: string;
  fokus: string;
  model: string;
  metode: string[];
  uraianLengkap: string;
}

// 1. KATALOG MODEL PEMBELAJARAN RESMI
export const REFERENSI_MODEL_PEMBELAJARAN: ModelPembelajaranRef[] = [
  {
    id: 'sentra-paud',
    nama: 'Model Sentra PAUD (Beyond Centers & Circle Time - BCCT)',
    namaSingkat: 'Model Sentra PAUD',
    sumberRujukan: 'Kemendikbudristek RI / Standar Emas Kurikulum Merdeka PAUD',
    kategori: 'Pembelajaran Berpusat pada Anak (Child-Centered)',
    tujuanUtama: 'Menstimulasi 8 dimensi perkembangan anak melalui invitasi main terbuka dengan 4 pijakan pedagogis yang utuh.',
    karakteristikDeepLearning: 'Sangat kuat pada stimulasi panca indera, pembelajaran sensori motorik, kegembiraan bermain (Joyful), dan refleksi recalling.',
    rekomendasiJenjang: ['PAUD', 'TK A', 'TK B', 'KB'],
    rekomendasiMapel: ['Bahan Alam', 'Main Peran', 'Balok', 'Seni & Kreativitas', 'Imtaq / Agama', 'Persiapan Literasi'],
    jumlahSintak: 4,
    sintaks: [
      {
        nomor: 1,
        nama: 'Pijakan Lingkungan Main (Penyediaan Invitasi & Alat)',
        deskripsi: 'Pendidik menata zona main dengan ragam bahan lepas (loose parts) minimal 3 densitas main sebelum anak masuk kelas.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Pijakan Pengalaman Sebelum Main (Circle Time & Doa)',
        deskripsi: 'Duduk melingkar bersama, bernyanyi ceria, membacakan buku cerita bergambar, mendiskusikan gagasan, dan menyepakati aturan main.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Pijakan Pengalaman Saat Main (Eksplorasi Mandiri & Scaffolding)',
        deskripsi: 'Anak memilih dan bermain aktif secara bebas; guru mengamati, memberikan pertanyaan pemantik (scaffolding), dan mencatat anekdot.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Pijakan Pengalaman Setelah Main (Recalling & Beres-Beres)',
        deskripsi: 'Bekerja sama merapikan alat main, duduk melingkar menceritakan pengalaman bermain (recalling), dan evaluasi perasaan gembira.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Eksplorasi Sensori', 'Bahan Lepas (Loose Parts)', 'Bercerita (Storytelling)', 'Tanya Jawab Pemantik', 'Recalling Melingkar'],
    teksRekomendasi: 'Model Sentra Bahan Alam dipadukan dengan Eksplorasi Sensori Loose Parts, Storytelling Buku Bergambar, dan Recalling Ceria.',
  },
  {
    id: 'project-play-paud',
    nama: 'Bermain Berbasis Proyek (Project-Based Play PAUD)',
    namaSingkat: 'PjBL PAUD',
    sumberRujukan: 'Kemendikbudristek RI / Panduan PjBL PAUD Fase Fondasi BSKAP 046/2025',
    kategori: 'Proyek Inkuiri Anak Usia Dini',
    tujuanUtama: 'Mengakomodasi ketertarikan autentik anak dalam menyelidiki dan menghasilkan kreasi nyata bersama teman sebaya.',
    karakteristikDeepLearning: 'Menumbuhkan inisiatif, gotong royong, bernalar kritis pramatematika, serta kebanggaan memamerkan karya.',
    rekomendasiJenjang: ['PAUD', 'TK A', 'TK B', 'KB'],
    rekomendasiMapel: ['STEAM PAUD', 'Jati Diri', 'Nilai Agama & Budi Pekerti', 'Eksplorasi Alam'],
    jumlahSintak: 4,
    sintaks: [
      {
        nomor: 1,
        nama: 'Tahap Permulaan (Menemukan Minat & Pertanyaan Anak)',
        deskripsi: 'Membangun rasa ingin tahu melalui pengamatan langsung fenomena sekitar atau benda konkret.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Tahap Pengembangan (Investigasi & Eksperimen Sederhana)',
        deskripsi: 'Mengumpulkan bahan alam, mencoba tekstur, membandingkan ukuran dan merancang ide proyek.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 3,
        nama: 'Tahap Puncak Proyek (Merangkai Karya Nyata & Unjuk Karya)',
        deskripsi: 'Mewujudkan karya bersama menggunakan loose parts dan mengundang teman/orang tua melihat hasil karya.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Tahap Refleksi & Apresiasi Diri',
        deskripsi: 'Anak mengungkapkan apa yang paling disukainya selama proses proyek dan berterima kasih kepada teman.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Eksplorasi Lapangan', 'Kreasi Loose Parts', 'Wawancara Ceria', 'Pameran Karya Mini'],
    teksRekomendasi: 'Bermain Berbasis Proyek (Project-Based Play) dipadukan dengan Eksplorasi Lapangan dan Pameran Karya Mini.',
  },
  {
    id: 'pbl',
    nama: 'Problem Based Learning (PBL)',
    namaSingkat: 'PBL',
    sumberRujukan: 'Kemendikbudristek / Richard I. Arends (2012)',
    kategori: 'Pemecahan Masalah Autentik',
    tujuanUtama: 'Melatih kemampuan berpikir kritis, penyelidikan berbasis bukti, dan penyelesaian masalah kontekstual nyata.',
    karakteristikDeepLearning: 'Sangat kuat pada pilar "Bermakna" (Meaningful) dan "Berkesadaran" (Mindful); murid memecahkan masalah riil di sekitarnya.',
    rekomendasiJenjang: ['SD', 'SMP', 'SMA', 'SMK'],
    rekomendasiMapel: ['IPA / Sains', 'Matematika', 'IPS / Sejarah', 'Bahasa Indonesia', 'PPKn', 'Informatika'],
    jumlahSintak: 5,
    sintaks: [
      {
        nomor: 1,
        nama: 'Orientasi Peserta Didik pada Masalah',
        deskripsi: 'Guru menyajikan masalah autentik kontekstual, memantik rasa ingin tahu dan kesadaran awal murid terhadap fenomena yang harus diselesaikan.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Mengorganisasikan Peserta Didik untuk Belajar',
        deskripsi: 'Guru memfasilitasi pembentukan kelompok kecil kolaboratif, pembagian peran investigasi, dan pendefinisian fokus masalah pada LKPD.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Membimbing Penyelidikan Mandiri maupun Kelompok',
        deskripsi: 'Guru mendorong pengumpulan data relevan, penyelidikan lapangan/literatur, dan eksperimen pemecahan masalah secara terarah.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Mengembangkan dan Menyajikan Hasil Karya',
        deskripsi: 'Peserta didik merumuskan solusi nyata, menyusun laporan/artefak pemecahan masalah, dan mempresentasikannya (Gallery Walk / presentasi kelas).',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Menganalisis dan Mengevaluasi Proses Pemecahan Masalah',
        deskripsi: 'Guru bersama peserta didik merefleksikan proses investigasi, mengevaluasi efektivitas solusi yang diajukan, dan menyusun simpulan konseptual.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Observasi Lapangan', 'Diskusi Kelompok Terarah', 'Gallery Walk', 'Studi Kasus Kontekstual', 'Tanya Jawab Sokrates'],
    teksRekomendasi: 'Problem Based Learning (PBL) 5 Sintaks dipadukan dengan observasi lapangan, diskusi kelompok terarah, dan presentasi Gallery Walk.',
  },
  {
    id: 'pjbl',
    nama: 'Project Based Learning (PjBL)',
    namaSingkat: 'PjBL',
    sumberRujukan: 'Kemendikbudristek / The George Lucas Educational Foundation',
    kategori: 'Penciptaan Karya & Proyek Nyata',
    tujuanUtama: 'Menghasilkan produk/karya nyata bernilai guna, mengasah kepemimpinan proyek, kolaborasi mendalam, dan inovasi peserta didik.',
    karakteristikDeepLearning: 'Sangat dominan pada pilar "Menggembirakan" (Joyful) dan "Bermakna" (Meaningful); peserta didik mengalami kebanggaan atas karya yang diciptakan.',
    rekomendasiJenjang: ['SMP', 'SMA', 'SMK', 'SD'],
    rekomendasiMapel: ['Prakarya / Seni Budaya', 'Informatika', 'Bahasa', 'STEAM / IPA Terapan', 'Kejuruan / Vokasi'],
    jumlahSintak: 6,
    sintaks: [
      {
        nomor: 1,
        nama: 'Penentuan Pertanyaan Mendasar (Essential Question)',
        deskripsi: 'Guru memantik pembelajaran dengan pertanyaan mendasar berbasis tantangan nyata yang membutuhkan penciptaan karya/solusi produk.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Mendesain Perencanaan Proyek (Design a Plan)',
        deskripsi: 'Kelompok merancang desain karya, menyepakati aturan main, memilih alat/bahan ramah lingkungan, dan membagi tanggung jawab kerja.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Menyusun Jadwal Aktivitas (Create a Schedule)',
        deskripsi: 'Guru dan peserta didik menyusun linimasa tahapan pengerjaan proyek dari perancangan hingga pengujian akhir secara terstruktur.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Memonitor Perkembangan Proyek (Monitor the Progress)',
        deskripsi: 'Guru mendampingi proses pembuatan karya, memantau kemajuan kelompok, dan memfasilitasi scaffolding saat siswa menemui kendala teknis.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Menguji Hasil & Produk Proyek (Assess the Outcome)',
        deskripsi: 'Peserta didik menguji fungsi dan standar kualitas produk yang dibuat, lalu memamerkan karyanya dalam pameran mini atau presentasi terbuka.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 6,
        nama: 'Mengevaluasi Pengalaman Belajar (Evaluate Experience)',
        deskripsi: 'Guru dan siswa merefleksikan seluruh proses perancangan proyek, kendala yang dihadapi, kepuasan berkarya, serta tindak lanjut pengembangan.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Proyek Kolaboratif', 'Pameran Karya (Exhibition)', 'Peer Feedback', 'Demonstrasi Prototipe', 'Observasi Kebutuhan'],
    teksRekomendasi: 'Project Based Learning (PjBL) 6 Sintaks dipadukan dengan perancangan prototipe kreatif, kerja tim kolaboratif, dan gelar pameran karya kelas.',
  },
  {
    id: 'discovery',
    nama: 'Discovery Learning',
    namaSingkat: 'Discovery Learning',
    sumberRujukan: 'Kemendikbudristek / Jerome Bruner',
    kategori: 'Penemuan Konsep Mandiri',
    tujuanUtama: 'Mengarahkan murid menemukan prinsip dan pola konsep secara mandiri melalui induksi data dan pembuktian fakta.',
    karakteristikDeepLearning: 'Membangun pilar "Berkesadaran" (Mindful) saat peserta didik menyadari proses berpikirnya sendiri (metakognisi).',
    rekomendasiJenjang: ['SD', 'SMP', 'SMA'],
    rekomendasiMapel: ['Matematika', 'IPA / Fisika / Biologi', 'Bahasa', 'IPS'],
    jumlahSintak: 6,
    sintaks: [
      {
        nomor: 1,
        nama: 'Pemberian Rangsangan (Stimulation)',
        deskripsi: 'Guru menampilkan fenomena menarik atau pertanyaan membingungkan yang memancing rasa penasaran murid untuk menyelidiki.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Identifikasi Masalah (Problem Statement)',
        deskripsi: 'Peserta didik mengidentifikasi masalah inti dan merumuskan dugaan awal (hipotesis kerja) yang hendak dibuktikan.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Pengumpulan Data (Data Collection)',
        deskripsi: 'Peserta didik mengumpulkan data konkret melalui eksplorasi alat peraga, bahan bacaan, atau eksperimen langsung.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Pengolahan Data (Data Processing)',
        deskripsi: 'Murid menyusun, mengklasifikasi, dan mengolah data temuan dalam kelompok untuk menemukan pola keteraturan.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Pembuktian (Verification)',
        deskripsi: 'Peserta didik memeriksa ketepatan hipotesis awal dengan hasil analisis data dan teori rujukan secara cermat.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 6,
        nama: 'Menarik Simpulan / Generalisasi (Generalization)',
        deskripsi: 'Murid merumuskan prinsip umum atau konsep kesimpulan yang telah ditemukan serta merefleksikan kegunaannya.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Eksplorasi Alat Peraga', 'Tanya Jawab Terarah', 'Diskusi Pasangan (TPS)', 'Latihan Terbimbing'],
    teksRekomendasi: 'Discovery Learning 6 Sintaks dipadukan dengan manipulasi benda konkret, verifikasi data kelompok, dan generalisasi konsep mandiri.',
  },
  {
    id: 'inquiry',
    nama: 'Inquiry Learning (Inkuiri Terbimbing)',
    namaSingkat: 'Inquiry Learning',
    sumberRujukan: 'Kemendikbudristek / Richard Suchman',
    kategori: 'Penyelidikan Ilmiah Sistematis',
    tujuanUtama: 'Membimbing peserta didik melakukan prosedur ilmiah layaknya peneliti untuk membuktikan hipotesis dan membangun nalar analitis.',
    karakteristikDeepLearning: 'Melatih investigasi ilmiah mendalam dan bernalar kritis dengan verifikasi empiris.',
    rekomendasiJenjang: ['SMP', 'SMA', 'SMK', 'SD'],
    rekomendasiMapel: ['IPA / Biologi / Kimia / Fisika', 'Geografi', 'Sosiologi', 'Matematika Terapan'],
    jumlahSintak: 5,
    sintaks: [
      {
        nomor: 1,
        nama: 'Orientasi Masalah Ilmiah (Orientation)',
        deskripsi: 'Guru memusatkan perhatian pada variabel fenomena alam/sosial dan menetapkan fokus investigasi ilmiah bersama siswa.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Merumuskan Masalah & Hipotesis (Formulating Hypothesis)',
        deskripsi: 'Siswa merumuskan pertanyaan operasional penelitian dan mengajukan hipotesis yang dapat diuji secara empiris.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Pengumpulan Data & Eksperimentasi (Experimentation)',
        deskripsi: 'Peserta didik melakukan praktikum/eksperimen, mengukur variabel kontrol dan manipulasi, serta mencatat data logbook.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Analisis & Pengujian Hipotesis (Testing Hypothesis)',
        deskripsi: 'Kelompok menganalisis tren data hasil uji coba, membandingkan dengan teori ilmiah, dan menguji validitas hipotesis awal.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Merumuskan Simpulan & Refleksi Inkuiri (Conclusion)',
        deskripsi: 'Menyusun laporan kesimpulan ilmiah dan merefleksikan reliabilitas proses penyelidikan yang telah dilaksanakan.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Praktikum Laboratorium', 'Pencatatan Logbook Ilmiah', 'Diskusi Hasil Eksperimen', 'Presentasi Data'],
    teksRekomendasi: 'Inquiry Learning (Inkuiri Terbimbing) 5 Sintaks dipadukan dengan praktikum terpadu, lembar kerja ilmiah, dan analisis data kelompok.',
  },
  {
    id: 'experiential',
    nama: 'Experiential Learning (Belajar Berbasis Pengalaman)',
    namaSingkat: 'Experiential Learning',
    sumberRujukan: 'David A. Kolb (Experiential Learning Theory)',
    kategori: 'Transformasi Pengalaman Nyata',
    tujuanUtama: 'Mentransformasikan pengalaman langsung menjadi pemahaman konseptual mendalam dan aksi eksperimentasi aktif yang menyenangkan.',
    karakteristikDeepLearning: 'Sangat ramah anak, sangat cocok untuk jenjang SD, menggembirakan (Joyful), dan berbasis pengalaman langsung (Meaningful).',
    rekomendasiJenjang: ['SD', 'SMP', 'SMA'],
    rekomendasiMapel: ['Semua Mapel SD', 'PJOK', 'Seni Budaya', 'Pendidikan Pancasila / Karakter', 'Prakarya'],
    jumlahSintak: 5,
    sintaks: [
      {
        nomor: 1,
        nama: 'Pengalaman Konkret (Concrete Experience)',
        deskripsi: 'Murid mengalami langsung kegiatan nyata (mengamati tanaman, bermain peran, menyentuh tekstur objek, atau simulasi).',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Observasi Reflektif (Reflective Observation)',
        deskripsi: 'Murid menceritakan apa yang dirasakan, dilihat, dan dialami selama kegiatan berlangsung dari berbagai sudut pandang.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Konseptualisasi Abstrak (Abstract Conceptualization)',
        deskripsi: 'Guru membimbing murid merumuskan konsep, kaidah, atau makna pembelajaran dari pengalaman yang baru saja dilalui.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Eksperimentasi Aktif (Active Experimentation)',
        deskripsi: 'Murid menerapkan konsep baru tersebut ke dalam situasi baru atau tantangan bermain berikutnya secara kreatif.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Konsolidasi & Refleksi Penerapan Sehari-hari',
        deskripsi: 'Murid menarik kesimpulan nilai hidup dan membuat komitmen penerapan perilaku baik dalam keseharian.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Bermain Peran (Role Playing)', 'Observasi Benda Konkret', 'Permainan Edukatif (Games)', 'Sharing Lingkaran'],
    teksRekomendasi: 'Experiential Learning berbasis media konkret di lingkungan kelas/sekolah dengan aktivitas mengamati, mencoba langsung, dan bermain peran.',
  },
  {
    id: 'cooperative',
    nama: 'Cooperative Learning (STAD / Jigsaw / TGT)',
    namaSingkat: 'Cooperative Learning',
    sumberRujukan: 'Kemendikbudristek / Robert Slavin',
    kategori: 'Kolaborasi & Interaksi Sejawat',
    tujuanUtama: 'Membangun saling ketergantungan positif, akuntabilitas individu, gotong royong, dan kesuksesan bersama seluruh anggota kelompok.',
    karakteristikDeepLearning: 'Menghidupkan dimensi profil lulusan Gotong Royong dan Komunikasi secara intensif.',
    rekomendasiJenjang: ['SD', 'SMP', 'SMA', 'SMK'],
    rekomendasiMapel: ['Bahasa', 'IPS', 'Matematika', 'Pendidikan Agama', 'PPKn'],
    jumlahSintak: 6,
    sintaks: [
      {
        nomor: 1,
        nama: 'Menyampaikan Tujuan & Memotivasi Siswa',
        deskripsi: 'Guru menyampaikan tujuan pembelajaran, nilai kolaborasi gotong royong, dan aturan main kerja kelompok.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Menyajikan Informasi Konsep Awal',
        deskripsi: 'Guru memberikan apersepsi dan penjelasan pengantar esensial menggunakan media visual/demonstrasi terarah.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Mengorganisasikan Peserta Didik ke Kelompok Belajar',
        deskripsi: 'Membentuk kelompok heterogen (kombinasi kesiapan belajar dan minat) dan membagikan tugas terstruktur.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Membimbing Kelompok Bekerja dan Belajar',
        deskripsi: 'Mendampingi kelompok saat berdiskusi, saling menjelaskan konsep antar-anggota (peer-tutoring), dan memecahkan soal tim.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Evaluasi & Presentasi Kelompok',
        deskripsi: 'Menguji pemahaman kelompok melalui presentasi, turnamen kuis, atau kuis individual berbobot poin kelompok.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
      {
        nomor: 6,
        nama: 'Memberikan Penghargaan Tim (Team Recognition)',
        deskripsi: 'Memberikan apresiasi bintang prestasi kepada kelompok yang menunjukkan kekompakan dan peningkatan hasil belajar.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Jigsaw (Kelompok Ahli & Asal)', 'Think-Pair-Share', 'Turnamen Kuis Ceria (TGT)', 'Kelompok Belajar STAD'],
    teksRekomendasi: 'Cooperative Learning tipe Jigsaw / STAD dipadukan dengan diskusi kelompok heterogen, saling asah teman sebaya, dan turnamen tim.',
  },
  {
    id: 'tarl',
    nama: 'Teaching at the Right Level (TaRL) / Pembelajaran Berdiferensiasi',
    namaSingkat: 'TaRL Berdiferensiasi',
    sumberRujukan: 'Pratham / Kemendikbudristek (Panduan Pembelajaran & Asesmen)',
    kategori: 'Responsif Kebutuhan Belajar',
    tujuanUtama: 'Menyesuaikan proses belajar, konten materi, dan produk evaluasi berdasarkan tingkat capaian kesiapan belajar (readiness) peserta didik.',
    karakteristikDeepLearning: 'Mewujudkan keadilan belajar yang berpusat pada murid; tidak ada murid yang tertinggal atau merasa bosan.',
    rekomendasiJenjang: ['SD', 'SMP', 'SMA', 'SMK'],
    rekomendasiMapel: ['Semua Mata Pelajaran'],
    jumlahSintak: 4,
    sintaks: [
      {
        nomor: 1,
        nama: 'Asesmen Awal Kesiapan Belajar',
        deskripsi: 'Guru memetakan tingkat kesiapan belajar siswa (kelompok perintis, berkembang, dan mahir) melalui kuis awal atau pertanyaan diagnostik.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Pengelompokan Fleksibel & Penugasan Bertingkat (Tiered Assignment)',
        deskripsi: 'Siswa dibagi dalam kelompok belajar yang dinamis dengan LKPD bertingkat sesuai tingkat pemahaman masing-masing.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Pendampingan Berjenjang (Scaffolding)',
        deskripsi: 'Guru memberikan bimbingan intensif pada kelompok perintis, sedangkan kelompok mahir diberikan tantangan pengayaan/eksplorasi mandiri.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Refleksi Kemajuan Belajar & Rekalibrasi',
        deskripsi: 'Siswa memeriksa kemajuan belajar diri dan guru memperbarui peta capaian belajar siswa untuk sesi berikutnya.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Diferensiasi Konten & Proses', 'Scaffolding Bertingkat', 'Stasiun Belajar (Learning Stations)', 'Penilaian Diri'],
    teksRekomendasi: 'Teaching at the Right Level (TaRL) / Pembelajaran Berdiferensiasi dengan pengelompokan fleksibel kesiapan belajar dan pendampingan bertingkat.',
  },
  {
    id: 'crt',
    nama: 'Culturally Responsive Teaching (CRT)',
    namaSingkat: 'CRT (Kearifan Budaya)',
    sumberRujukan: 'Geneva Gay (2000) / Kemendikbudristek',
    kategori: 'Berbasis Budaya & Konteks Lokal',
    tujuanUtama: 'Mengintegrasikan latar belakang budaya, kearifan lokal, dan nilai-nilai luhur masyarakat ke dalam pembelajaran akademik.',
    karakteristikDeepLearning: 'Membangun pilar "Bermakna" (Meaningful) dan memperkuat identitas kebhinekaan global yang berakar pada kearifan nusantara.',
    rekomendasiJenjang: ['SD', 'SMP', 'SMA', 'SMK'],
    rekomendasiMapel: ['IPS', 'Seni Budaya', 'Bahasa', 'Pancasila', 'IPA / Etnosains', 'Matematika / Etnomatematika'],
    jumlahSintak: 4,
    sintaks: [
      {
        nomor: 1,
        nama: 'Identitas Diri & Kesadaran Kultural (Self-Identification)',
        deskripsi: 'Peserta didik diajak mengenali kekayaan budaya daerahnya yang berkaitan dengan topik pembelajaran.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Eksplorasi Konsep melalui Praktik Budaya Lokal',
        deskripsi: 'Menghubungkan konsep teoritis dengan tradisi, artefak, kuliner, kesenian, atau kearifan hidup masyarakat setempat.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 3,
        nama: 'Refleksi Kritis & Apresiasi Kebhinekaan',
        deskripsi: 'Peserta didik mendiskusikan nilai filosofis dan membandingkan variasi kearifan antardaerah secara inklusif dan apresiatif.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Aksi Nyata Pelestarian & Rekomendasi Budaya',
        deskripsi: 'Merumuskan aksi atau karya nyata yang menghargai dan melestarikan kearifan lokal dalam kehidupan kontemporer.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
    metodePendukung: ['Etnosains / Etnomatematika', 'Wawancara Tetua Adat / Tokoh Lokal', 'Bedah Cerita Rakyat', 'Pameran Budaya'],
    teksRekomendasi: 'Culturally Responsive Teaching (CRT) dipadukan dengan eksplorasi etnosains budaya lokal, wawancara tokoh, dan refleksi nilai tradisi.',
  },
];

// 2. KATALOG METODE PEMBELAJARAN AKTIF RESMI
export const REFERENSI_METODE_PEMBELAJARAN: MetodePembelajaranRef[] = [
  {
    id: 'diskusi-kelompok',
    nama: 'Diskusi Kelompok Terarah (Focus Group Discussion)',
    kategori: 'Interaksi & Kolaborasi',
    deskripsi: 'Peserta didik bertukar pandangan, berargumentasi secara sehat, dan menyatukan pemikiran untuk memecahkan tugas atau lembar kerja tim.',
    peranDeepLearning: 'Membangun saling pengertian, empati, dan komunikasi aktif antar-teman sebaya.',
    keunggulan: 'Melatih kemampuan berpendapat santun, mendengarkan aktif, dan merumuskan konsensus bersama.',
    tipsPenerapan: 'Beri peran spesifik pada tiap anggota (misal: moderator, notulis, penanya, juru bicara) agar semua terlibat aktif.',
    chipLabel: 'Diskusi Kelompok Terarah',
  },
  {
    id: 'gallery-walk',
    nama: 'Gallery Walk (Pameran Karya Berjalan)',
    kategori: 'Presentasi & Umpan Balik',
    deskripsi: 'Hasil karya kelompok ditempel di dinding ruang kelas. Sebagian anggota menjaga galeri untuk menjelaskan, anggota lainnya berkeliling memberikan apresiasi dan catatan umpan balik (sticky notes).',
    peranDeepLearning: 'Menghidupkan pilar "Joyful" dan mengasah kemampuan refleksi melalui apresiasi sejawat yang konstruktif.',
    keunggulan: 'Menghilangkan kebosanan presentasi satu arah konvensional di depan kelas; semua siswa aktif bergerak fisik.',
    tipsPenerapan: 'Siapkan lembar umpan balik atau sticky notes dengan panduan komentar positif: 2 hal hebat (stars) dan 1 saran perbaikan (wish).',
    chipLabel: 'Gallery Walk (Pameran Karya)',
  },
  {
    id: 'observasi-lapangan',
    nama: 'Observasi Lapangan / Jelajah Alam Sekitar (JAS)',
    kategori: 'Eksplorasi & Praktik',
    deskripsi: 'Mengamati objek, fenomena alam, atau interaksi sosial secara langsung di taman sekolah, kantin, pasar, atau lingkungan sekitar sekolah.',
    peranDeepLearning: 'Menghubungkan konsep teoritis dengan kenyataan konkret (Meaningful Learning) secara sensorik.',
    keunggulan: 'Membangkitkan rasa ingin tahu alami dan menghadirkan pengalaman belajar yang tak terlupakan bagi murid.',
    tipsPenerapan: 'Sediakan panduan lembar observasi yang fokus dan jelas sebelum siswa keluar dari ruang kelas.',
    chipLabel: 'Observasi Lapangan / Jelajah Alam',
  },
  {
    id: 'eksperimen-praktikum',
    nama: 'Eksperimen & Praktikum Ilmiah Terbimbing',
    kategori: 'Eksplorasi & Praktik',
    deskripsi: 'Melakukan uji coba, manipulasi variabel, dan pencatatan gejala perubahan menggunakan alat peraga konkret atau bahan ramah lingkungan.',
    peranDeepLearning: 'Melatih nalar induktif, keterampilan motorik ilmiah, dan sikap jujur terhadap data faktual.',
    keunggulan: 'Murid membuktikan sendiri prinsip ilmu pengetahuan daripada sekadar menghafal rumus atau teori buku teks.',
    tipsPenerapan: 'Dahulukan instruksi keselamatan kerja (safety) dan sediakan format tabel pengamatan yang mudah diisi.',
    chipLabel: 'Eksperimen / Praktikum Terbimbing',
  },
  {
    id: 'think-pair-share',
    nama: 'Think-Pair-Share (TPS)',
    kategori: 'Interaksi & Kolaborasi',
    deskripsi: 'Tahap 1: Murid berpikir mandiri merumuskan jawaban (Think). Tahap 2: Berdiskusi berpasangan membandingkan ide (Pair). Tahap 3: Membagikan kesimpulan ke forum kelas (Share).',
    peranDeepLearning: 'Memberikan ruang hening berkesadaran (Mindful) sebelum berbicara, sehingga murid yang pemalu merasa aman untuk berpendapat.',
    keunggulan: 'Meningkatkan partisipasi aktif 100% siswa; tidak hanya murid yang vokal saja yang berbicara.',
    tipsPenerapan: 'Beri jeda hening 1-2 menit untuk tahap Think sebelum memperbolehkan siswa mulai berbicara dengan pasangan.',
    chipLabel: 'Think-Pair-Share (TPS)',
  },
  {
    id: 'jigsaw',
    nama: 'Metode Jigsaw (Kelompok Ahli & Kelompok Asal)',
    kategori: 'Interaksi & Kolaborasi',
    deskripsi: 'Masing-masing anggota kelompok asal mendalami subtopik berbeda di kelompok ahli, lalu kembali ke kelompok asal untuk mengajarkan hasil telaahnya kepada teman kelompok.',
    peranDeepLearning: 'Membangun tanggung jawab tinggi (akuntabilitas diri) dan penguasaan konsep yang mendalam.',
    keunggulan: 'Tiap anak menjadi "guru kecil" bagi temannya, merangsang pemahaman mendalam karena harus mengajarkan konsep kembali.',
    tipsPenerapan: 'Pastikan waktu diskusi di kelompok ahli cukup matang sebelum siswa diminta kembali ke kelompok asal.',
    chipLabel: 'Metode Jigsaw Kooperatif',
  },
  {
    id: 'studi-kasus',
    nama: 'Studi Kasus Kontekstual',
    kategori: 'Penalaran & Analisis',
    deskripsi: 'Menganalisis artikel berita, rekaman peristiwa, atau kasus dilematis riil di masyarakat untuk ditelusuri penyebab, dampak, dan alternatif solusinya.',
    peranDeepLearning: 'Mengasah penalaran kritis tingkat tinggi (HOTS) dan kepekaan sosial terhadap masalah di dunia nyata.',
    keunggulan: 'Menjembatani batas kelas dengan realitas dunia nyata, melatih pengambilan keputusan berbasis bukti.',
    tipsPenerapan: 'Pilih kasus yang dekat dengan usia siswa dan hindari kasus yang memicu trauma atau diskriminasi.',
    chipLabel: 'Studi Kasus Kontekstual',
  },
  {
    id: 'role-playing',
    nama: 'Role Playing & Simulasi (Bermain Peran)',
    kategori: 'Simulasi & Bermain Peran',
    deskripsi: 'Memerankan skenario peran tertentu (pedagang dan pembeli, negosiator, ilmuwan, satwa ekosistem, tokoh sejarah) untuk mendalami perspektif emosional dan logika peran.',
    peranDeepLearning: 'Membangun empati mendalam, rasa percaya diri, dan pembelajaran yang sangat menggembirakan (Joyful).',
    keunggulan: 'Mengubah konsep abstrak menjadi interaksi hidup yang mudah dipahami dan diingat dalam jangka panjang.',
    tipsPenerapan: 'Sediakan skenario singkat dan beri apresiasi atas keberanian siswa dalam menghayati peran.',
    chipLabel: 'Role Playing & Simulasi',
  },
  {
    id: 'tanya-jawab-sokrates',
    nama: 'Tanya Jawab Sokrates / Mindful Questioning',
    kategori: 'Penalaran & Analisis',
    deskripsi: 'Dialog reflektif menggunakan pertanyaan mendalam bertingkat guru-murid yang tidak langsung memberikan jawaban, melainkan menuntun siswa menemukan sendiri kebenarannya.',
    peranDeepLearning: 'Pondasi utama pilar "Berkesadaran" (Mindful), melatih metakognisi dan nalar kritis logis.',
    keunggulan: 'Membongkar miskonsepsi siswa secara halus dan membiasakan siswa tidak langsung puas dengan jawaban dangkal.',
    tipsPenerapan: 'Gunakan pertanyaan: "Mengapa menurutmu begitu?", "Bukti apa yang mendukung hal itu?", "Bagaimana jika situasinya dibalik?".',
    chipLabel: 'Tanya Jawab Sokrates / Mindful Questioning',
  },
  {
    id: 'demonstrasi-interaktif',
    nama: 'Demonstrasi Interaktif & Pemodelan Guru',
    kategori: 'Eksplorasi & Praktik',
    deskripsi: 'Guru atau murid model memperagakan suatu proses atau keterampilan konkret di depan kelas, diselingi pertanyaan prediksi dari audiens sebelum siswa mencoba mandiri.',
    peranDeepLearning: 'Memberikan kejelasan visual (scaffolding) sebelum siswa melangkah ke tahap aplikasi mandiri.',
    keunggulan: 'Mengurangi risiko kesalahan fatal dalam praktik dan memberikan tolok ukur standar mutu yang jelas.',
    tipsPenerapan: 'Ajak siswa menebak hasil ("Apa yang akan terjadi jika bahan ini dicampur?") sebelum peragaan dilakukan.',
    chipLabel: 'Demonstrasi Interaktif',
  },
  {
    id: 'mind-mapping',
    nama: 'Mind Mapping & Peta Konsep Kolaboratif',
    kategori: 'Penalaran & Analisis',
    deskripsi: 'Menyusun bagan representasi visual hubungan antarkonsep menggunakan kata kunci, warna, simbol, dan cabang-cabang pemikiran pada kertas karton atau kanvas digital.',
    peranDeepLearning: 'Membantu otak mengorganisasi informasi kompleks secara holistik dan kreatif.',
    keunggulan: 'Sangat efektif untuk pembelajar visual dan membantu proses merefleksikan benang merah seluruh materi.',
    tipsPenerapan: 'Bebaskan siswa menggunakan ilustrasi dan warna-warni kreasi mereka sendiri.',
    chipLabel: 'Mind Mapping & Peta Konsep',
  },
  {
    id: 'debat-terstruktur',
    nama: 'Debat Terstruktur Ilmiah',
    kategori: 'Penalaran & Analisis',
    deskripsi: 'Dua tim bertukar argumen pro dan kontra terkait suatu mosi isu faktual dengan aturan waktu ketat dan kewajiban menyertakan data rujukan.',
    peranDeepLearning: 'Melatih kemampuan retorika santun, nalar kritis, dan pengendalian emosi saat menghadapi sudut pandang berbeda.',
    keunggulan: 'Melatih kepemimpinan, riset literatur mendalam, dan keberanian berbicara di hadapan publik.',
    tipsPenerapan: 'Fokuskan penilaian pada kekuatan data dan kesantunan berbahasa, bukan pada siapa yang paling keras berbicara.',
    chipLabel: 'Debat Terstruktur Ilmiah',
  },
  {
    id: 'game-based-learning',
    nama: 'Game-Based Learning & Edu-Gamifikasi',
    kategori: 'Simulasi & Bermain Peran',
    deskripsi: 'Mengintegrasikan mekanisme permainan (tantangan berjenjang, poin tim, misi berwaktu, kartu tantangan) ke dalam aktivitas pemahaman konsep.',
    peranDeepLearning: 'Membangkitkan antusiasme tinggi, suasana riang (Joyful), dan keterlibatan aktif semua anak.',
    keunggulan: 'Mereduksi kecemasan belajar (learning anxiety) terutama pada materi yang dianggap sulit seperti matematika atau sains.',
    tipsPenerapan: 'Pastikan fokus utama tetap pada pencapaian tujuan pembelajaran, bukan semata-mata pada persaingan skor.',
    chipLabel: 'Game-Based Learning / Gamifikasi',
  },
];

// 3. PAKET SINERGI KOMBINASI MODEL & METODE (BEST PRACTICES)
export const PAKET_KOMBINASI_MODEL_METODE: PaketKombinasiRef[] = [
  {
    id: 'paket-pbl-sains',
    judul: 'Paket PBL Investigatif (Sains & Lingkungan)',
    jenjang: 'SMP / SMA',
    fokus: 'Penyelidikan berbasis masalah nyata dengan observasi langsung dan presentasi keliling.',
    model: 'Problem Based Learning (PBL)',
    metode: ['Observasi Lapangan', 'Diskusi Kelompok Terarah', 'Gallery Walk', 'Tanya Jawab Sokrates'],
    uraianLengkap: 'Problem Based Learning (PBL) 5 Sintaks dipadukan dengan observasi lapangan langsung, diskusi kelompok terarah, dan presentasi hasil temuan teknik Gallery Walk.',
  },
  {
    id: 'paket-pjbl-karya',
    judul: 'Paket PjBL Kreatif (Karya, Produk & Vokasi)',
    jenjang: 'SMP / SMA / SMK',
    fokus: 'Penciptaan artefak atau prototipe nyata melalui kerja tim dan pameran kelas.',
    model: 'Project Based Learning (PjBL)',
    metode: ['Proyek Kolaboratif', 'Observasi Kebutuhan', 'Demonstrasi Prototipe', 'Gallery Walk'],
    uraianLengkap: 'Project Based Learning (PjBL) 6 Sintaks dipadukan dengan perancangan prototipe inovatif kelompok, mentoring berkala, dan pameran gelar karya kelas.',
  },
  {
    id: 'paket-sd-gembira',
    judul: 'Paket Experiential Gembira (Jenjang SD)',
    jenjang: 'SD',
    fokus: 'Belajar konkret menyenangkan dengan manipulasi benda nyata dan bermain peran.',
    model: 'Experiential Learning & Cooperative Learning',
    metode: ['Observasi Benda Konkret', 'Role Playing & Simulasi', 'Game-Based Learning', 'Think-Pair-Share'],
    uraianLengkap: 'Experiential Learning & Cooperative Learning dipadukan dengan eksplorasi benda konkret di lingkungan sekolah, bermain peran edukatif, dan turnamen kuis ceria.',
  },
  {
    id: 'paket-inkuiri-lab',
    judul: 'Paket Inkuiri Terbimbing (Praktikum & Eksperimen)',
    jenjang: 'SMP / SMA',
    fokus: 'Eksperimen ilmiah terstruktur dengan pengujian hipotesis dan pencatatan data empiris.',
    model: 'Inquiry Learning (Inkuiri Terbimbing)',
    metode: ['Eksperimen / Praktikum Terbimbing', 'Pencatatan Logbook Ilmiah', 'Diskusi Analisis Data'],
    uraianLengkap: 'Inquiry Learning (Inkuiri Terbimbing) 5 Sintaks dipadukan dengan praktikum terpadu, lembar kerja ilmiah, dan verifikasi hipotesis berbasis data eksperimen.',
  },
  {
    id: 'paket-literasi-bahasa',
    judul: 'Paket Kooperatif Literasi & Bahasa',
    jenjang: 'Semua Jenjang',
    fokus: 'Bedah teks kolaboratif, penguasaan struktur, dan saling asah teman sebaya.',
    model: 'Cooperative Learning & Genre-Based Approach',
    metode: ['Metode Jigsaw Kooperatif', 'Think-Pair-Share', 'Bedah Teks Bersama', 'Gallery Walk'],
    uraianLengkap: 'Cooperative Learning tipe Jigsaw dipadukan dengan Think-Pair-Share, diskusi bedah teks autentik bersama tim ahli, dan pameran apresiasi karya tulis.',
  },
  {
    id: 'paket-diferensiasi-tarl',
    judul: 'Paket TaRL Berdiferensiasi Inklusif',
    jenjang: 'Semua Jenjang',
    fokus: 'Penyesuaian pendampingan berjenjang (scaffolding) sesuai kesiapan belajar murid.',
    model: 'Teaching at the Right Level (TaRL)',
    metode: ['Diferensiasi Konten & Proses', 'Scaffolding Bertingkat', 'Diskusi Kelompok Terarah', 'Refleksi Diri'],
    uraianLengkap: 'Teaching at the Right Level (TaRL) / Pembelajaran Berdiferensiasi dengan pengelompokan fleksibel kesiapan belajar, penugasan bertingkat, dan scaffolding guru.',
  },
];
