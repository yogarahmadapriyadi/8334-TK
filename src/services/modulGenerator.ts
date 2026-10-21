import { ModulAjar, InitialDataInput } from '../types/modul';

export interface SmartOption {
  title: string;
  text: string;
  badge?: string;
}

export interface BskapReference {
  nomor: string;
  tahun: string;
  fullName: string;
  isAgama: boolean;
  shortBadge: string;
  description: string;
}

export interface ModelSyntaxStep {
  nomor: number;
  nama: string;
  deskripsi: string;
  tahapDeepLearning: 'Tahap 1: Memahami' | 'Tahap 2: Mengaplikasi' | 'Tahap 3: Merefleksi';
}

export interface ModelSyntaxInfo {
  namaModel: string;
  namaSingkat: string;
  jumlahSintak: number;
  sumberRujukan: string;
  deskripsiUmum: string;
  sintakList: ModelSyntaxStep[];
}

export function getModelSyntaxInfo(modelText: string): ModelSyntaxInfo {
  const text = (modelText || '').toLowerCase();

  // 0. MODEL SENTRA PAUD (STANDAR EMAS PEMBELAJARAN ANAK USIA DINI KURIKULUM MERDEKA)
  if (text.includes('sentra') || text.includes('center') || text.includes('bahan alam') || text.includes('nature play') || text.includes('balok') || text.includes('imtaq')) {
    return {
      namaModel: 'Model Sentra (Sentra Bahan Alam / Balok / Main Peran / Imtaq)',
      namaSingkat: 'Model Sentra',
      jumlahSintak: 4,
      sumberRujukan: 'Kemendikbudristek RI / Beyond Centers & Circle Time (BCCT)',
      deskripsiUmum: 'Model pembelajaran sentra yang berfokus pada anak dengan memberikan 4 pijakan (scaffolding) komprehensif saat lingkaran pagi, eksplorasi main mandiri pada aneka invitasi bahan lepasan (loose parts), dan recalling reflektif.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Pijakan Lingkungan Main (Penyediaan Ragam Invitasi Loose Parts)',
          deskripsi: 'Guru menata lingkungan main yang kaya stimulasi sensori, menata nampan loose parts, dan menyiapkan 3–4 pilihan invitasi main terbuka yang aman dan menarik.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Pijakan Pengalaman Sebelum Main (Circle Time & Dongeng Pemantik)',
          deskripsi: 'Duduk melingkar bersama anak, berdoa khusyuk, menyanyi lagu ceria, mendongeng buku bergambar, mengenalkan kosakata baru, dan menyepakati aturan main bersama.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Pijakan Pengalaman Saat Main (Eksplorasi Bebas & Scaffolding Guru)',
          deskripsi: 'Anak bebas memilih dan bermain di zona invitasi; guru mengamati, memberikan pertanyaan pemantik terbuka, mencatat celoteh anak (catatan anekdot), dan mendokumentasikan foto berseri.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Pijakan Pengalaman Setelah Main (Pemberesan & Recalling Reflektif)',
          deskripsi: 'Anak bersama-sama merapikan alat main (beres-beres), lalu duduk melingkar menceritakan kembali karya dan perasaan bermainnya dengan bangga.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 0B. MODEL MAIN PERAN MAKRO / MIKRO PAUD (SOCIO-DRAMATIC PLAY)
  if (text.includes('main peran') || text.includes('socio-dramatic') || text.includes('dramatik') || text.includes('role play') || text.includes('pasar')) {
    return {
      namaModel: 'Model Main Peran Makro (Socio-Dramatic Play)',
      namaSingkat: 'Main Peran Makro',
      jumlahSintak: 4,
      sumberRujukan: 'Kemendikbudristek RI / Smilansky (Dramatic Play)',
      deskripsiUmum: 'Model pembelajaran sosiodramatik yang melatih kecerdasan sosial, empati, kemampuan mengantre, dan negosiasi santun melalui simulasi peran kehidupan nyata (pasar, rumah tangga, dokter, profesi).',
      sintakList: [
        {
          nomor: 1,
          nama: 'Penyiapan Panggung Peran & Kostum Bermain',
          deskripsi: 'Guru dan anak menata kios/ruangan peran, mengenalkan properti nyata (keranjang belanja, sayuran asli, celemek, topi caping, uang koin mainan).',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Kesepakatan Peran Sosial & Garis Antrean Sabar',
          deskripsi: 'Mendiskusikan tugas pedagang, pembeli, dan kasir; menyepakati budaya sabar menunggu giliran (antre) di garis warna lantai.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Aksi Sosiodramatik Jual-Beli & Eksplorasi Pramatematika',
          deskripsi: 'Anak memerankan perannya secara nyata, berdialog santun, menimbang barang belanjaan, dan melakukan transaksi pembayaran.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Pemberesan Kios & Recalling Kebaikan Sosial',
          deskripsi: 'Gotong royong merapikan barang kios dan merefleksikan perasaan berhasil bersabar menunggu antrean bersama guru.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 1. PROJECT BASED LEARNING (PjBL)
  if (text.includes('pjbl') || text.includes('project based') || text.includes('proyek') || text.includes('design thinking') || text.includes('design sprint')) {
    return {
      namaModel: 'Project Based Learning (PjBL)',
      namaSingkat: 'PjBL',
      jumlahSintak: 6,
      sumberRujukan: 'Kemendikbudristek / The George Lucas Educational Foundation',
      deskripsiUmum: 'Model pembelajaran berbasis proyek yang memandu peserta didik merancang dan menghasilkan karya/produk nyata secara kolaboratif guna menjawab tantangan esensial.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Penentuan Pertanyaan Mendasar (Start with the Essential Question)',
          deskripsi: 'Guru memantik pembelajaran dengan pertanyaan mendasar berbasis masalah kontekstual; siswa mengeksplorasi kebutuhan pembuatan karya/produk nyata.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Mendesain Perencanaan Proyek (Design a Plan for the Project)',
          deskripsi: 'Guru dan siswa merancang aturan main, pemilihan aktivitas, serta alat dan bahan kontekstual yang mendukung penyelesaian proyek.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Menyusun Jadwal Aktivitas (Create a Schedule)',
          deskripsi: 'Guru dan siswa membuat alokasi waktu dan batas akhir tahapan pengerjaan proyek secara realistis dan terstruktur.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Memonitor Keaktifan dan Perkembangan Proyek (Monitor the Students & Progress)',
          deskripsi: 'Guru memantau keaktifan peserta didik, membimbing proses pembuatan karya, dan memfasilitasi solusi saat tim menghadapi kendala teknis.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 5,
          nama: 'Menguji Hasil Produk Proyek (Assess the Outcome)',
          deskripsi: 'Menilai ketercapaian standar produk proyek, menguji kelayakan dan fungsionalitas karya, serta memfasilitasi presentasi/pameran karya.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 6,
          nama: 'Mengevaluasi Pengalaman Belajar (Evaluate the Experience)',
          deskripsi: 'Guru dan peserta didik melakukan refleksi mendalam terhadap seluruh proses pembuatan proyek dan menyusun komitmen perbaikan mutu.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 2. DISCOVERY LEARNING
  if (text.includes('discovery') || text.includes('penemuan')) {
    return {
      namaModel: 'Discovery Learning',
      namaSingkat: 'Discovery Learning',
      jumlahSintak: 6,
      sumberRujukan: 'Kemendikbudristek / Jerome Bruner',
      deskripsiUmum: 'Model pembelajaran penemuan yang mengarahkan murid mengorganisasi konsep secara mandiri melalui serangkaian eksplorasi dan pembuktian data faktual.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Pemberian Rangsangan (Stimulation)',
          deskripsi: 'Guru memberikan stimulasi fenomena yang membingungkan atau menarik minat agar timbul dorongan menyelidiki konsep secara mandiri.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Pernyataan / Identifikasi Masalah (Problem Statement)',
          deskripsi: 'Peserta didik mengidentifikasi sebanyak mungkin agenda masalah dan merumuskannya dalam bentuk hipotesis yang akan dibuktikan.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Pengumpulan Data (Data Collection)',
          deskripsi: 'Peserta didik mengumpulkan data relevan melalui observasi, wawancara, membaca literatur, atau uji coba sederhana.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Pengolahan Data (Data Processing)',
          deskripsi: 'Peserta didik mengolah, mengklasifikasi, dan menafsirkan data yang telah dikumpulkan dalam kelompok kerja kolaboratif.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 5,
          nama: 'Pembuktian (Verification)',
          deskripsi: 'Peserta didik memeriksa secara cermat untuk membuktikan kebenaran hipotesis yang telah dirumuskan dengan temuan faktual.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 6,
          nama: 'Menarik Simpulan / Generalisasi (Generalization)',
          deskripsi: 'Menarik simpulan umum berdasarkan hasil verifikasi data dan merefleksikan prinsip umum yang ditemukan untuk memecahkan kasus lain.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 3. INQUIRY LEARNING (INKUIRI TERBIMBING)
  if (text.includes('inkuiri') || text.includes('inquiry')) {
    return {
      namaModel: 'Inquiry Learning (Inkuiri Terbimbing)',
      namaSingkat: 'Inquiry',
      jumlahSintak: 5,
      sumberRujukan: 'Kemendikbudristek / Richard Suchman',
      deskripsiUmum: 'Model pembelajaran penyelidikan ilmiah sistematis untuk mencari dan menemukan sendiri jawaban atas suatu masalah ilmiah secara bernalar kritis.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Orientasi Masalah Ilmiah (Orientation)',
          deskripsi: 'Membangun suasana kondusif, merangsang rasa ingin tahu, dan memusatkan perhatian murid pada topik penyelidikan ilmiah.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Merumuskan Masalah & Hipotesis (Formulating Problem & Hypothesis)',
          deskripsi: 'Membimbing peserta didik merumuskan pertanyaan inti penelitian dan menyusun dugaan sementara (hipotesis operasional).',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Mengumpulkan Data & Eksperimentasi (Collecting Data & Experimentation)',
          deskripsi: 'Peserta didik melakukan pengujian empiris, eksperimen terarah, atau observasi lapangan untuk mengumpulkan bukti ilmiah.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Menguji Hipotesis & Analisis Data (Testing Hypothesis)',
          deskripsi: 'Menganalisis data hasil uji coba, membandingkan dengan hipotesis awal, dan menyimpulkan keterkaitan antar-variabel secara logis.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 5,
          nama: 'Merumuskan Kesimpulan & Refleksi Inkuiri (Conclusion & Reflection)',
          deskripsi: 'Mendeskripsikan temuan kesimpulan akhir dan merefleksikan proses penyelidikan ilmiah yang telah dialami bersama tim.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 4. EXPERIENTIAL LEARNING
  if (text.includes('experiential') || text.includes('pengalaman') || text.includes('kolb')) {
    return {
      namaModel: 'Experiential Learning',
      namaSingkat: 'Experiential Learning',
      jumlahSintak: 5,
      sumberRujukan: 'David A. Kolb (Experiential Learning Theory)',
      deskripsiUmum: 'Model pembelajaran yang berfokus pada transformasi pengalaman nyata menjadi pemahaman konseptual dan aksi eksperimentasi aktif.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Pengalaman Konkret (Concrete Experience)',
          deskripsi: 'Peserta didik mengalami langsung peristiwa belajar nyata melalui observasi objek riil atau simulasi permainan peran aktif.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Observasi Reflektif (Reflective Observation)',
          deskripsi: 'Peserta didik mengamati dan merefleksikan pengalaman yang baru dialami dari berbagai sudut pandang pribadi dan tim.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Konseptualisasi Abstrak (Abstract Conceptualization)',
          deskripsi: 'Peserta didik membentuk teori, kaidah, dan konsep bermakna berdasarkan hasil refleksi pengalaman nyata.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Eksperimentasi Aktif (Active Experimentation)',
          deskripsi: 'Peserta didik menguji dan menerapkan teori baru yang dirumuskan ke dalam situasi atau permasalahan kontekstual lain.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 5,
          nama: 'Konsolidasi & Refleksi Penerapan Lanjutan',
          deskripsi: 'Mengevaluasi hasil eksperimen dan merumuskan komitmen penerapan nilai pembelajaran dalam kehidupan sehari-hari.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 5. COOPERATIVE LEARNING (STAD / TGT / JIGSAW)
  if (text.includes('cooperative') || text.includes('kooperatif') || text.includes('tgt') || text.includes('stad') || text.includes('jigsaw')) {
    return {
      namaModel: 'Cooperative Learning',
      namaSingkat: 'Cooperative Learning',
      jumlahSintak: 6,
      sumberRujukan: 'Kemendikbudristek / Robert Slavin',
      deskripsiUmum: 'Model pembelajaran kooperatif berstruktur yang mengoptimalkan interaksi sejawat, saling ketergantungan positif, dan tanggung jawab individual.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Menyampaikan Tujuan & Memotivasi Siswa',
          deskripsi: 'Guru menyampaikan tujuan pembelajaran, memberikan motivasi kontekstual, dan mengaitkan materi dengan kehidupan.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Menyajikan Informasi Konsep Dasar',
          deskripsi: 'Guru menyajikan materi pengantar esensial melalui demonstrasi konkret atau media visual terarah.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Mengorganisasikan Peserta Didik ke dalam Kelompok Belajar',
          deskripsi: 'Membentuk kelompok heterogen dan menjelaskan prosedur kerja sama kelompok secara jelas.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Membimbing Kelompok Bekerja dan Belajar',
          deskripsi: 'Mendampingi kelompok saat menyelesaikan lembar kerja tim, berdiskusi, dan saling membantu menguasai konsep.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 5,
          nama: 'Evaluasi & Presentasi Hasil Kerja Kelompok',
          deskripsi: 'Menguji penguasaan materi melalui kuis individual atau unjuk presentasi kelompok di hadapan kelas.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
        {
          nomor: 6,
          nama: 'Memberikan Penghargaan Tim (Team Recognition)',
          deskripsi: 'Memberikan apresiasi atas keberhasilan kelompok dan merayakan kemajuan belajar bersama.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 6. TEACHING AT THE RIGHT LEVEL (TaRL) / PEMBELAJARAN BERDIFERENSIASI
  if (text.includes('tarl') || text.includes('diferensiasi') || text.includes('berdiferensiasi') || text.includes('right level')) {
    return {
      namaModel: 'Teaching at the Right Level (TaRL) / Pembelajaran Berdiferensiasi',
      namaSingkat: 'TaRL Berdiferensiasi',
      jumlahSintak: 4,
      sumberRujukan: 'Kemendikbudristek (Panduan Pembelajaran & Asesmen 2024/2025)',
      deskripsiUmum: 'Model pembelajaran responsif yang memetakan kesiapan belajar awal (readiness) murid dan menyediakan pendampingan bertingkat (scaffolding).',
      sintakList: [
        {
          nomor: 1,
          nama: 'Asesmen Awal Kesiapan Belajar (Diagnostic Assessment)',
          deskripsi: 'Guru memetakan kesiapan belajar, gaya belajar, dan minat peserta didik ke dalam kelompok fleksibel.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Pengelompokan Fleksibel & Penugasan Bertingkat (Tiered Assignment)',
          deskripsi: 'Menyajikan materi dan lembar kerja bertingkat (perintis, berkembang, mahir) sesuai zona perkembangan proksimal murid.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Pendampingan Berjenjang & Eksplorasi Kolaboratif',
          deskripsi: 'Guru memberikan bimbingan intensif pada kelompok yang membutuhkan, sementara kelompok mandiri melakukan eksplorasi lanjut.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Refleksi Kemajuan Belajar & Penyesuaian Tindak Lanjut',
          deskripsi: 'Murid merefleksikan pencapaian pribadi dan guru merencanakan penyesuaian target belajar selanjutnya.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 7. CULTURALLY RESPONSIVE TEACHING (CRT)
  if (text.includes('crt') || text.includes('culturally') || text.includes('responsif budaya') || text.includes('etnosains') || text.includes('etnomatematika')) {
    return {
      namaModel: 'Culturally Responsive Teaching (CRT)',
      namaSingkat: 'CRT (Budaya & Etnosains)',
      jumlahSintak: 4,
      sumberRujukan: 'Kemendikbudristek / Geneva Gay (2000)',
      deskripsiUmum: 'Model pembelajaran yang mengintegrasikan kekayaan budaya, tradisi, dan kearifan lokal ke dalam konstruksi pengetahuan akademik.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Identifikasi Diri & Kesadaran Kultural (Self-Identification)',
          deskripsi: 'Guru dan siswa mengidentifikasi kekayaan tradisi lokal yang relevan dengan topik pembelajaran.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Eksplorasi Konsep melalui Konteks Budaya Lokal',
          deskripsi: 'Siswa menyelidiki hubungan antara konsep ilmiah/akademik dengan artefak, kebiasaan, atau kearifan daerah.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 3,
          nama: 'Refleksi Kritis & Apresiasi Kebhinekaan',
          deskripsi: 'Mendiskusikan nilai filosofis budaya dan membandingkan variasi perspektif dengan sikap saling menghargai.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Aksi Nyata Pelestarian Budaya Berkelanjutan',
          deskripsi: 'Merumuskan aksi atau karya kontekstual yang menguatkan pelestarian kearifan lokal di era modern.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // 8. CONTEXTUAL TEACHING AND LEARNING (CTL)
  if (text.includes('ctl') || text.includes('kontekstual') || text.includes('contextual')) {
    return {
      namaModel: 'Contextual Teaching and Learning (CTL)',
      namaSingkat: 'CTL',
      jumlahSintak: 5,
      sumberRujukan: 'Kemendikbudristek / Elaine B. Johnson',
      deskripsiUmum: 'Model pembelajaran yang mengaitkan materi pelajaran dengan situasi dunia nyata peserta didik guna mendorong penerapan dalam kehidupan.',
      sintakList: [
        {
          nomor: 1,
          nama: 'Konstruktivisme & Membangun Makna Awal',
          deskripsi: 'Murid mengaktifkan pengetahuan awal dan membangun pemahaman baru dari pengalaman nyata.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 2,
          nama: 'Inkuiri & Menemukan Sendiri (Inquiring)',
          deskripsi: 'Peserta didik mengamati dan menemukan konsep melalui proses pencarian terstruktur.',
          tahapDeepLearning: 'Tahap 1: Memahami',
        },
        {
          nomor: 3,
          nama: 'Masyarakat Belajar & Dialog Kolaboratif (Learning Community)',
          deskripsi: 'Bekerja sama dalam kelompok untuk saling berbagi data dan memecahkan persoalan kontekstual.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 4,
          nama: 'Pemodelan & Unjuk Kinerja Nyata (Modeling)',
          deskripsi: 'Guru atau rekan sebaya memperagakan aplikasi konsep dan siswa mempraktikkannya.',
          tahapDeepLearning: 'Tahap 2: Mengaplikasi',
        },
        {
          nomor: 5,
          nama: 'Refleksi Otentik & Penilaian Sebenarnya (Authentic Assessment)',
          deskripsi: 'Merefleksikan proses belajar dan mengukur ketercapaian kompetensi melalui unjuk kerja nyata.',
          tahapDeepLearning: 'Tahap 3: Merefleksi',
        },
      ],
    };
  }

  // DEFAULT: PROBLEM BASED LEARNING (PBL) (STANDAR EMAS KURIKULUM MERDEKA DEEP LEARNING)
  return {
    namaModel: 'Problem Based Learning (PBL)',
    namaSingkat: 'PBL',
    jumlahSintak: 5,
    sumberRujukan: 'Kemendikbudristek / Richard I. Arends (2012)',
    deskripsiUmum: 'Model pembelajaran berbasis masalah autentik yang melatih nalar kritis, kemampuan memecahkan masalah kontekstual, dan kemandirian belajar.',
    sintakList: [
      {
        nomor: 1,
        nama: 'Orientasi Peserta Didik pada Masalah',
        deskripsi: 'Guru menyajikan masalah autentik kontekstual, memantik rasa ingin tahu dan kesadaran awal murid terhadap permasalahan yang harus diselesaikan.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 2,
        nama: 'Mengorganisasikan Peserta Didik untuk Belajar',
        deskripsi: 'Guru memfasilitasi pembentukan kelompok, pembagian tugas penyelidikan, dan pendefinisian fokus masalah pada LKPD.',
        tahapDeepLearning: 'Tahap 1: Memahami',
      },
      {
        nomor: 3,
        nama: 'Membimbing Penyelidikan Individu maupun Kelompok',
        deskripsi: 'Guru mendorong pengumpulan data relevan, penyelidikan lapangan/literatur, dan eksperimen pemecahan masalah secara kolaboratif.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 4,
        nama: 'Mengembangkan dan Menyajikan Hasil Karya',
        deskripsi: 'Peserta didik menyusun laporan/karya solusi nyata, menyajikan hasil di hadapan kelas (Gallery Walk), dan mendiskusikan temuan.',
        tahapDeepLearning: 'Tahap 2: Mengaplikasi',
      },
      {
        nomor: 5,
        nama: 'Menganalisis dan Mengevaluasi Proses Pemecahan Masalah',
        deskripsi: 'Guru bersama peserta didik mengevaluasi efektivitas solusi, merefleksikan proses investigasi, dan menarik simpulan bermakna.',
        tahapDeepLearning: 'Tahap 3: Merefleksi',
      },
    ],
  };
}

export function generateIntiSkenarioByModel(
  modelText: string,
  topik: string,
  kearifan: string
): {
  tahap1Memahami: { sintak: string; aktivitas: string; peranGuru: string; peranSiswa: string; waktu: string }[];
  tahap2Mengaplikasi: { sintak: string; aktivitas: string; peranGuru: string; peranSiswa: string; waktu: string }[];
  tahap3Merefleksi: { sintak: string; aktivitas: string; peranGuru: string; peranSiswa: string; waktu: string }[];
} {
  const info = getModelSyntaxInfo(modelText);
  const text = (modelText || '').toLowerCase();

  // PjBL SCENARIO
  if (info.namaSingkat === 'PjBL') {
    return {
      tahap1Memahami: [
        {
          sintak: 'Sintak 1: Penentuan Pertanyaan Mendasar',
          aktivitas: `Eksplorasi Tantangan Nyata & Rumusan Pertanyaan Kunci Proyek ${topik}`,
          peranGuru: `Menyajikan tantangan kontekstual di lingkungan (${kearifan}) dan memantik pertanyaan mendasar yang menuntut solusi produk nyata.`,
          peranSiswa: `Menganalisis urgensi permasalahan, mengidentifikasi kebutuhan pemecahan masalah, dan merumuskan fokus produk proyek tim.`,
          waktu: '15 menit',
        },
        {
          sintak: 'Sintak 2: Mendesain Perencanaan Proyek',
          aktivitas: `Perancangan Sketsa Karya, Alat-Bahan & Pembagian Peran Tim`,
          peranGuru: `Membimbing kelompok merancang sketsa rancangan karya, menyepakati kriteria mutu produk, dan membagikan lembar kerja proyek.`,
          peranSiswa: `Menyusun desain kerja proyek, memilih alat dan bahan kontekstual yang ramah lingkungan, serta membagi peran anggota tim.`,
          waktu: '15 menit',
        },
      ],
      tahap2Mengaplikasi: [
        {
          sintak: 'Sintak 3 & 4: Menyusun Jadwal & Memonitor Pelaksanaan Proyek',
          aktivitas: `Eksekusi Pembuatan Produk & Pemantauan Progres Proyek`,
          peranGuru: `Memonitor keaktifan tiap anggota tim, memeriksa ketepatan tahapan jadwal, dan membimbing penanganan kendala teknis pembuatan produk.`,
          peranSiswa: `Bekerja kolaboratif merealisasikan produk karya, mencatat logbook kemajuan, dan menguji coba fungsi awal prototipe.`,
          waktu: '30 menit',
        },
        {
          sintak: 'Sintak 5: Menguji Hasil Produk Proyek',
          aktivitas: `Uji Kelayakan Karya & Gelar Karya / Presentasi Produk`,
          peranGuru: `Menilai ketercapaian spesifikasi karya berdasarkan rubrik penilaian, memfasilitasi uji coba, dan memandu pameran gelar karya.`,
          peranSiswa: `Mendemonstrasikan fungsi produk karya di depan kelas, menerima masukan uji kelayakan, dan mencatat saran perbaikan.`,
          waktu: '15 menit',
        },
      ],
      tahap3Merefleksi: [
        {
          sintak: 'Sintak 6: Mengevaluasi Pengalaman Belajar',
          aktivitas: `Evaluasi Pengalaman Proyek & Refleksi Nilai Kebermaknaan`,
          peranGuru: `Memfasilitasi diskusi refleksi mengenai kendala, keberhasilan, dan hikmah berharga selama proses perancangan proyek.`,
          peranSiswa: `Mengevaluasi efektivitas produk, mengidentifikasi pembelajaran bermakna (lesson learned), serta menyusun rencana tindak lanjut.`,
          waktu: '10 menit',
        },
      ],
    };
  }

  // DISCOVERY LEARNING SCENARIO
  if (info.namaSingkat === 'Discovery Learning') {
    return {
      tahap1Memahami: [
        {
          sintak: 'Sintak 1: Pemberian Rangsangan (Stimulation)',
          aktivitas: `Pemberian Stimulus Fenomena Pemantik & Pengamatan Objek Konsep ${topik}`,
          peranGuru: `Menyajikan tayangan/benda konkret/kasus anomali terkait ${topik} yang memicu pertanyaan keingintahuan mendalam pada murid.`,
          peranSiswa: `Mengamati stimulus secara cermat, mencatat kejanggalan/keunikan fenomena, dan mengungkapkan rasa ingin tahunya.`,
          waktu: '15 menit',
        },
        {
          sintak: 'Sintak 2: Identifikasi Masalah (Problem Statement)',
          aktivitas: `Perumusan Masalah & Penyusunan Hipotesis Awal`,
          peranGuru: `Membimbing siswa merumuskan pernyataan masalah dan hipotesis dugaan sementara yang relevan untuk diuji.`,
          peranSiswa: `Berdiskusi dalam kelompok merumuskan pertanyaan penyelidikan dan menyusun hipotesis pada lembar kerja.`,
          waktu: '10 menit',
        },
      ],
      tahap2Mengaplikasi: [
        {
          sintak: 'Sintak 3 & 4: Pengumpulan Data & Pengolahan Data',
          aktivitas: `Penyelidikan Empiris, Pengumpulan Fakta & Analisis Data Kontekstual`,
          peranGuru: `Memfasilitasi lembar data, mengarahkan eksplorasi bukti kontekstual (${kearifan}), dan membimbing pengolahan tabel data.`,
          peranSiswa: `Mengumpulkan data dari pengamatan/literatur, mengolah dan mengklasifikasikan informasi ke dalam tabel analisis LKPD.`,
          waktu: '30 menit',
        },
        {
          sintak: 'Sintak 5: Pembuktian (Verification)',
          aktivitas: `Uji Kebenaran Hipotesis & Pembuktian Temuan Melalui Diskusi Kelas`,
          peranGuru: `Memandu diskusi verifikasi antar-kelompok, memeriksa ketepatan pembuktian logika siswa dengan teori keilmuan.`,
          peranSiswa: `Mencocokkan temuan data dengan hipotesis awal, memverifikasi kesesuaian fakta, dan memaparkan bukti pembuktiannya.`,
          waktu: '15 menit',
        },
      ],
      tahap3Merefleksi: [
        {
          sintak: 'Sintak 6: Menarik Simpulan / Generalisasi',
          aktivitas: `Penarikan Simpulan Umum Konsep & Refleksi Prinsip Penemuan`,
          peranGuru: `Menegaskan prinsip umum konsep yang telah ditemukan siswa dan memandu refleksi proses penemuan mandiri.`,
          peranSiswa: `Merumuskan simpulan umum (generalisasi) berdasarkan pembuktian data serta menuliskan refleksi pemahaman bermakna.`,
          waktu: '10 menit',
        },
      ],
    };
  }

  // INQUIRY LEARNING SCENARIO
  if (info.namaSingkat === 'Inquiry') {
    return {
      tahap1Memahami: [
        {
          sintak: 'Sintak 1 & 2: Orientasi Masalah & Perumusan Hipotesis',
          aktivitas: `Orientasi Penyelidikan Ilmiah & Perumusan Hipotesis Penelitian ${topik}`,
          peranGuru: `Mengarahkan fokus masalah ilmiah, memicu nalar kritis siswa dengan data awal, dan membimbing formulasi hipotesis.`,
          peranSiswa: `Menganalisis pertanyaan penyelidikan ilmiah dan menyusun dugaan sementara (hipotesis kerja) secara kelompok.`,
          waktu: '20 menit',
        },
      ],
      tahap2Mengaplikasi: [
        {
          sintak: 'Sintak 3: Mengumpulkan Data & Eksperimentasi',
          aktivitas: `Pelaksanaan Eksperimen Terarah & Pengumpulan Bukti Lapangan`,
          peranGuru: `Mengawasi ketertiban dan keselamatan eksperimen, memberikan scaffolding pertanyaan panduan observasi.`,
          peranSiswa: `Melakukan eksperimen/observasi sistematis, mengukur variabel, dan mencatat data empiris pada lembar kerja inkuiri.`,
          waktu: '25 menit',
        },
        {
          sintak: 'Sintak 4: Menguji Hipotesis & Analisis Data',
          aktivitas: `Analisis Data Hasil Percobaan & Pengujian Hipotesis Ilmiah`,
          peranGuru: `Membimbing analisis grafik/tabel data dan memoderasi presentasi komparasi hasil temuan antar-kelompok.`,
          peranSiswa: `Mengolah data hasil uji coba, membuktikan keabsahan hipotesis, dan mempresentasikan hasil analisis bukti ilmiah.`,
          waktu: '20 menit',
        },
      ],
      tahap3Merefleksi: [
        {
          sintak: 'Sintak 5: Merumuskan Kesimpulan & Refleksi Inkuiri',
          aktivitas: `Formulasi Simpulan Ilmiah & Refleksi Metakognisi Penyelidikan`,
          peranGuru: `Mengajak siswa merajut benang merah konsep ilmiah, menegaskan pemahaman bermakna, dan memandu refleksi metakognisi.`,
          peranSiswa: `Menyimpulkan hukum/konsep esensial yang ditemukan dan merefleksikan keterampilan proses ilmiah yang meningkat.`,
          waktu: '15 menit',
        },
      ],
    };
  }

  // EXPERIENTIAL LEARNING SCENARIO
  if (info.namaSingkat === 'Experiential Learning') {
    return {
      tahap1Memahami: [
        {
          sintak: 'Sintak 1: Pengalaman Konkret (Concrete Experience)',
          aktivitas: `Keterlibatan Langsung pada Pengalaman Nyata & Observasi Objek Konkret`,
          peranGuru: `Menghadirkan stimulus pengalaman langsung (simulasi peran / objek fisik riil lingkungan ${kearifan}) tanpa penghakiman awal.`,
          peranSiswa: `Terlibat aktif merasakan, mengamati, dan berinteraksi langsung dengan objek/peran pengalaman nyata.`,
          waktu: '15 menit',
        },
        {
          sintak: 'Sintak 2: Observasi Reflektif (Reflective Observation)',
          aktivitas: `Pencatatan Perasaan, Pengamatan Fenomena & Refleksi Awal`,
          peranGuru: `Mengajukan pertanyaan reflektif: "Apa yang kalian lihat, rasakan, dan temukan selama pengalaman tadi?"`,
          peranSiswa: `Mendiskusikan pengalaman dari berbagai sudut pandang anggota tim dan mencatat pengamatan kunci pada LKPD.`,
          waktu: '10 menit',
        },
      ],
      tahap2Mengaplikasi: [
        {
          sintak: 'Sintak 3: Konseptualisasi Abstrak (Abstract Conceptualization)',
          aktivitas: `Perumusan Kaidah Teori & Pemodelan Konsep Bermakna ${topik}`,
          peranGuru: `Membantu siswa mengintegrasikan pengalaman nyata dengan teori/konsep ilmiah Kurikulum Merdeka.`,
          peranSiswa: `Menyusun bagan/model konseptual keteraturan yang menjelaskan mengapa pengalaman tersebut terjadi.`,
          waktu: '20 menit',
        },
        {
          sintak: 'Sintak 4: Eksperimentasi Aktif (Active Experimentation)',
          aktivitas: `Uji Coba Penerapan Konsep pada Kasus / Tantangan Kontekstual Baru`,
          peranGuru: `Memberikan skenario tantangan baru di lingkungan sekitar untuk dipecahkan menggunakan konsep yang telah dipahami.`,
          peranSiswa: `Menerapkan konsep yang telah dikonstruksi untuk memecahkan masalah baru dan menciptakan karya solutif.`,
          waktu: '25 menit',
        },
      ],
      tahap3Merefleksi: [
        {
          sintak: 'Sintak 5: Konsolidasi & Refleksi Penerapan Lanjutan',
          aktivitas: `Konsolidasi Belajar Berkesadaran & Janji Aksi Penerapan Nyata`,
          peranGuru: `Memfasilitasi refleksi menyeluruh atas siklus pengalaman yang telah dilalui dan mengapresiasi keterlibatan penuh siswa.`,
          peranSiswa: `Merefleksikan perubahan cara pandang dan merumuskan komitmen tindakan nyata di rumah atau lingkungan sekolah.`,
          waktu: '10 menit',
        },
      ],
    };
  }

  // COOPERATIVE LEARNING SCENARIO
  if (info.namaSingkat === 'Cooperative Learning') {
    return {
      tahap1Memahami: [
        {
          sintak: 'Sintak 1 & 2: Menyampaikan Tujuan, Motivasi & Penyajian Konsep Dasar',
          aktivitas: `Penyampaian Misi Tim & Demonstrasi Pengantar Konsep ${topik}`,
          peranGuru: `Menyampaikan tujuan pembelajaran, skenario kerja tim kooperatif, dan menyajikan materi konsep pengantar yang memikat.`,
          peranSiswa: `Menyimak arahan misi belajar, memahami aturan main kelompok, dan mencatat konsep kunci yang disajikan guru.`,
          waktu: '20 menit',
        },
      ],
      tahap2Mengaplikasi: [
        {
          sintak: 'Sintak 3 & 4: Pengorganisasian Kelompok & Bimbingan Kerja Kolaboratif',
          aktivitas: `Eksplorasi Tim Kooperatif, Penyelesaian LKPD & Saling Mengajar Antarteman`,
          peranGuru: `Membentuk kelompok heterogen, berkeliling mendampingi diskusi tim, dan memastikan terjadinya saling ketergantungan positif.`,
          peranSiswa: `Bekerja sama dalam tim memecahkan tantangan LKPD, saling menjelaskan materi kepada rekan satu tim, dan merangkum hasil bersama.`,
          waktu: '35 menit',
        },
      ],
      tahap3Merefleksi: [
        {
          sintak: 'Sintak 5 & 6: Evaluasi Hasil Kerja Kelompok & Penghargaan Tim (Team Recognition)',
          aktivitas: `Uji Penguasaan Materi, Pameran Hasil Tim & Apresiasi Prestasi Kooperatif`,
          peranGuru: `Memandu evaluasi/kuis tim, memberikan umpan balik menyeluruh, dan memberikan penghargaan prestasi bagi tim berkinerja solid.`,
          peranSiswa: `Mempresentasikan hasil temuan kelompok, merayakan pencapaian tim bersama, dan merefleksikan nilai kerja sama gotong royong.`,
          waktu: '20 menit',
        },
      ],
    };
  }

  // DEFAULT: PROBLEM BASED LEARNING (PBL) SCENARIO
  return {
    tahap1Memahami: [
      {
        sintak: 'Sintak 1: Orientasi peserta didik pada masalah',
        aktivitas: `Orientasi Fenomena Autentik & Pemantik Masalah Kontekstual ${topik}`,
        peranGuru: `Menyajikan masalah nyata di lingkungan sekitar/sekolah (${kearifan}) melalui tayangan gambar/studi kasus, memicu rasa ingin tahu murid.`,
        peranSiswa: `Mengamati fenomena masalah kontekstual, mengidentifikasi isu-isu yang membingungkan, dan merumuskan fokus masalah utama.`,
        waktu: '15 menit',
      },
      {
        sintak: 'Sintak 2: Mengorganisasikan peserta didik untuk belajar',
        aktivitas: `Pengorganisasian Kelompok Belajar & Pembagian Tugas Investigasi`,
        peranGuru: `Membagi kelompok belajar heterogen, membagikan LKPD pemecahan masalah, dan membantu siswa mendefinisikan tugas penyelidikan.`,
        peranSiswa: `Berkumpul bersama kelompok, menyepakati pembagian peran (ketua, pencatat data, juru bicara), dan menelaah langkah kerja LKPD.`,
        waktu: '10 menit',
      },
    ],
    tahap2Mengaplikasi: [
      {
        sintak: 'Sintak 3: Membimbing penyelidikan individu maupun kelompok',
        aktivitas: `Penyelidikan Lapangan / Analisis Data & Pengumpulan Fakta Solutif`,
        peranGuru: `Memfasilitasi akses sumber belajar, berkeliling memberikan bimbingan bertingkat (scaffolding), serta mendorong nalar kritis siswa.`,
        peranSiswa: `Mengumpulkan data dari pengamatan/literatur, menganalisis sebab-akibat masalah, dan mendiskusikan alternatif solusi pada LKPD.`,
        waktu: '25 menit',
      },
      {
        sintak: 'Sintak 4: Mengembangkan dan menyajikan hasil karya',
        aktivitas: `Penyusunan Produk Solusi & Presentasi Karya Interaktif (Gallery Walk)`,
        peranGuru: `Memandu jalannya presentasi/pameran karya (Gallery Walk) antarkelompok, memoderasi tanya jawab, serta memberi apresiasi.`,
        peranSiswa: `Menyusun laporan/infografis/skema solusi, mempresentasikan karya di depan rekan sebaya, serta memberikan umpan balik konstruktif.`,
        waktu: '20 menit',
      },
    ],
    tahap3Merefleksi: [
      {
        sintak: 'Sintak 5: Menganalisis dan mengevaluasi proses pemecahan masalah',
        aktivitas: `Evaluasi Kritis Pemecahan Masalah & Refleksi Pengalaman Belajar`,
        peranGuru: `Membimbing analisis efektivitas solusi yang diajukan, meluruskan miskonsepsi konsep ${topik}, dan memandu refleksi diri murid.`,
        peranSiswa: `Mengevaluasi kelebihan dan keterbatasan solusi kelompok, merefleksikan proses belajar diri, serta menyusun komitmen aksi nyata.`,
        waktu: '15 menit',
      },
    ],
  };
}

export function getBskapReference(mataPelajaran: string): BskapReference {
  const mapel = (mataPelajaran || '').toLowerCase();
  const isAgama = 
    mapel.includes('agama') || 
    mapel.includes('pai') || 
    mapel.includes('islam') || 
    mapel.includes('kristen') || 
    mapel.includes('katolik') || 
    mapel.includes('hindu') || 
    mapel.includes('buddha') || 
    mapel.includes('khonghucu') ||
    mapel.includes('budi pekerti') ||
    mapel.includes('kepercayaan') ||
    mapel.includes('imtaq');

  if (isAgama) {
    return {
      nomor: '020',
      tahun: '2026',
      fullName: 'Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 tentang Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti pada Pendidikan Anak Usia Dini (Fase Fondasi), Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah',
      isAgama: true,
      shortBadge: 'BSKAP No. 020 Tahun 2026 (Pendidikan Agama Fase Fondasi PAUD)',
      description: 'Mata Pelajaran Pendidikan Agama & Budi Pekerti di PAUD (Fase Fondasi) merujuk secara wajib pada standar resmi BSKAP Nomor 020 Tahun 2026.',
    };
  }

  return {
    nomor: '046',
    tahun: '2025',
    fullName: 'Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini (PAUD - Fase Fondasi), Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah',
    isAgama: false,
    shortBadge: 'BSKAP No. 046 Tahun 2025 (Capaian Pembelajaran PAUD Fase Fondasi)',
    description: 'Capaian Pembelajaran PAUD Fase Fondasi (Elemen Nilai Agama & Budi Pekerti, Jati Diri, dan Dasar-dasar Literasi, Matematika, Sains, Teknologi, Rekayasa, dan Seni - STEAM) merujuk pada standar resmi BSKAP Nomor 046 Tahun 2025.',
  };
}

export interface FieldSmartSuggestions {
  primary: string;
  options: SmartOption[];
}

export interface ComprehensiveReferences {
  kompetensiAwal: FieldSmartSuggestions;
  modelPembelajaran: FieldSmartSuggestions;
  kearifanLokal: FieldSmartSuggestions;
  cp: string;
  elemen: string;
  tujuanPembelajaran: string[];
  bskapReference: BskapReference;
}

export interface CurriculumSuggestion {
  cp: string;
  elemen: string;
  tujuanPembelajaran: string[];
  kompetensiAwal: string;
  modelPembelajaran: string;
  kearifanLokal: string;
  pemahamanBermakna: string;
  pertanyaanPemantik: string[];
  fieldReferences?: ComprehensiveReferences;
  bskapReference?: BskapReference;
}

export async function requestSuggestCpTp(input: {
  mataPelajaran: string;
  jenjang: string;
  faseKelas: string;
  materi: string;
  capaianPembelajaran?: string;
}): Promise<CurriculumSuggestion> {
  try {
    const res = await fetch('/api/suggest-cp-tp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data?.cp) {
        return {
          ...generateCurriculumSuggestionOffline(input),
          ...json.data,
        };
      }
    }
  } catch (err) {
    console.warn('API call failed, generating via expert curriculum heuristics:', err);
  }

  // Fallback intelligent formulation based on Kurikulum Merdeka standards
  return generateCurriculumSuggestionOffline(input);
}

export interface SmartKearifanInput {
  jenjang: string;
  mataPelajaran: string;
  materi: string;
  faseKelas?: string;
  capaianPembelajaran?: string;
  tujuanPembelajaran?: string[];
}

export function generateSmartKearifanLokal(input: SmartKearifanInput): FieldSmartSuggestions {
  const { jenjang, mataPelajaran, materi, faseKelas, capaianPembelajaran, tujuanPembelajaran } = input;
  const topik = (materi || '').trim() || 'Topik Pembelajaran';
  const topikLower = topik.toLowerCase();
  const mapel = (mataPelajaran || '').trim() || 'Mata Pelajaran';
  const mapelLower = mapel.toLowerCase();
  const cpText = (capaianPembelajaran || '').toLowerCase();

  // Detect subject cluster
  const isIPA = mapelLower.includes('ipa') || mapelLower.includes('sains') || mapelLower.includes('biologi') || mapelLower.includes('fisika') || mapelLower.includes('kimia') || mapelLower.includes('ipas');
  const isMatematika = mapelLower.includes('matematika') || mapelLower.includes('mtk') || mapelLower.includes('hitung') || mapelLower.includes('aljabar') || mapelLower.includes('geometri');
  const isBahasa = mapelLower.includes('bahasa') || mapelLower.includes('indonesia') || mapelLower.includes('inggris') || mapelLower.includes('sastra') || mapelLower.includes('daerah') || mapelLower.includes('jawa') || mapelLower.includes('sunda');
  const isPancasila = mapelLower.includes('pancasila') || mapelLower.includes('pkn') || mapelLower.includes('kewarganegaraan') || mapelLower.includes('norma');
  const isIPS = mapelLower.includes('ips') || mapelLower.includes('sosial') || mapelLower.includes('sejarah') || mapelLower.includes('geografi') || mapelLower.includes('ekonomi') || mapelLower.includes('sosiologi');
  const isSeniPrakarya = mapelLower.includes('seni') || mapelLower.includes('prakarya') || mapelLower.includes('rupa') || mapelLower.includes('musik') || mapelLower.includes('tari') || mapelLower.includes('kriya') || mapelLower.includes('dkv') || mapelLower.includes('desain');
  const isPJOK = mapelLower.includes('pjok') || mapelLower.includes('olahraga') || mapelLower.includes('penjas');
  const isInformatika = mapelLower.includes('informatika') || mapelLower.includes('komputer') || mapelLower.includes('tik') || mapelLower.includes('koding');
  const isAgama = mapelLower.includes('agama') || mapelLower.includes('pai') || mapelLower.includes('islam') || mapelLower.includes('kristen') || mapelLower.includes('katolik') || mapelLower.includes('hindu') || mapelLower.includes('buddha') || mapelLower.includes('budi pekerti');

  // Extract competence focus from CP / TP
  let kompetensiFokus = 'memahami konsep esensial, menganalisis fenomena nyata, dan menerapkan solusi bermakna';
  if (cpText.includes('menganalisis') || cpText.includes('menyelidiki')) {
    kompetensiFokus = 'menganalisis data lapangan, menyelidiki keterkaitan antar-variabel, dan menarik simpulan ilmiah';
  } else if (cpText.includes('merancang') || cpText.includes('membuat') || cpText.includes('karya')) {
    kompetensiFokus = 'merancang karya inovatif nyata yang memecahkan permasalahan autentik di lingkungan sekitar';
  } else if (cpText.includes('mengevaluasi') || cpText.includes('merefleksikan')) {
    kompetensiFokus = 'mengevaluasi efektivitas solusi kontekstual dan merefleksikan nilai-nilai keberlanjutan hidup';
  } else if (cpText.includes('mempraktikkan') || cpText.includes('mendemonstrasikan')) {
    kompetensiFokus = 'mempraktikkan keterampilan terapan secara kolaboratif dalam situasi nyata';
  }

  // 1. PRIMARY NARRATIVE BY COMBINATION OF JENJANG, MAPEL, MATERI, AND CP/TP
  let primaryText = '';
  let option1: SmartOption;
  let option2: SmartOption;
  let option3: SmartOption;
  let option4: SmartOption;

  if (jenjang === 'PAUD' || jenjang === 'TK A' || jenjang === 'TK B' || jenjang === 'KB' || !jenjang || (faseKelas && faseKelas.toLowerCase().includes('fondasi'))) {
    // PAUD (Fase Fondasi): Loose parts alam, sensori motorik, dolanan tradisional nusantara, dongeng fabel, pembiasaan budi pekerti & adab islami/universal
    if (isAgama) {
      primaryText = `Pembiasaan doa harian dan adab sopan santun, tradisi makan bersama ala santri ramah anak, eksplorasi ciptaan Tuhan melalui tanaman dan hewan peliharaan sekitar, serta nasyid ceria Asmaul Husna Al-Khaliq; diselaraskan dengan Capaian Pembelajaran Pendidikan Agama Fase Fondasi (BSKAP No. 020 Tahun 2026) agar anak mengenal Tuhan Sang Maha Pencipta, mencintai sesama makhluk, dan bersyukur atas nikmat tubuh sehat sejak usia dini.`;
      option1 = {
        title: 'Adab Berdoa & Syukur Makanan Sehat (BSKAP 020/2026)',
        text: `Praktik langsung adab makan dan doa harian dengan kurma/buah lokal serta pembiasaan saling berbagi bekal sehat secara santun di Sentra Imtaq.`,
        badge: 'PAUD · PAI & Budi Pekerti BSKAP 020/2026',
      };
      option2 = {
        title: 'Eksplorasi Keajaiban Alam Ciptaan Tuhan',
        text: `Mengamati bunga, semut, dan dedaunan di kebun sekolah sambil melafalkan kalimat thayyibah/puji syukur atas keteraturan ciptaan-Nya.`,
        badge: 'PAUD · Ketauhidan Ramah Anak',
      };
      option3 = {
        title: 'Kisah Teladan Kasih Sayang & Boneka Tangan',
        text: `Storytelling boneka tangan kisah kasih sayang nabi kepada anak yatim, kucing, dan pepohonan peneduh untuk menumbuhkan empati luhur.`,
        badge: 'PAUD · Akhlak & Budi Pekerti',
      };
      option4 = {
        title: 'Nasyid Ceria & Dolanan Gerak Lagu Religi',
        text: `Bernyanyi gerak lagu rukun iman dan rukun islam dengan tepuk riang anak saleh yang membangkitkan keceriaan spiritual anak.`,
        badge: 'PAUD · Pembelajaran Gembira',
      };
    } else {
      primaryText = `Laboratorium alam kebun dan pekarangan sekolah, eksplorasi aneka bahan lepasan (loose parts: batu, ranting, daun gugur, biji-bijian, pelepah pisang, air, pasir), tembang dolanan anak Nusantara (Cublak-Cublak Suweng, Jamuran), serta bermain peran pasar tradisional; diselaraskan dengan Capaian Pembelajaran Fase Fondasi (BSKAP No. 046 Tahun 2025) untuk menstimulasi panca indera, menguatkan motorik halus-kasar, menumbuhkan rasa ingin tahu STEAM, dan membiasakan kerja sama gotong royong dengan menggembirakan.`;
      option1 = {
        title: 'Bahan Lepasan (Loose Parts) Kebun Sekolah (BSKAP 046/2025)',
        text: `Eksplorasi sensori meraba aneka tekstur daun, ranting, dan kerikil untuk merancang bentuk tanaman atau figur imajinatif anak usia dini.`,
        badge: 'PAUD · STEAM & Loose Parts BSKAP 046/2025',
      };
      option2 = {
        title: 'Dolanan Tradisional & Gerak Lagu Nusantara',
        text: `Permainan Cublak-Cublak Suweng, Ular Naga, dan jamuran untuk melatih kelincahan motorik kasar, keceriaan bersama, dan rasa kebersamaan sebaya.`,
        badge: 'PAUD · Jati Diri & Gotong Royong',
      };
      option3 = {
        title: 'Bermain Peran Pasar Tradisional & Sayur Lokal',
        text: `Simulasi kios pasar rakyat menggunakan keranjang bambu mini dan uang daun untuk melatih antre sabar dan konsep pramatematika menghitung 1-5.`,
        badge: 'PAUD · Literasi & Pramatematika',
      };
      option4 = {
        title: 'Dongeng Fabel Nusantara & Cerita Bergambar',
        text: `Mendengarkan kisah fabel binatang lokal yang menanamkan nilai tolong-menolong, kejujuran, dan kecintaan pada alam sekitar.`,
        badge: 'PAUD · Budi Pekerti Luhur',
      };
    }
  } else if (jenjang === 'SD') {
    // SD (Fase A-C): Concrete experiential, school environment, traditional games, local family/market
    if (isIPA) {
      primaryText = `Laboratorium alam kebun dan pekarangan sekolah ramah anak, pengamatan tanaman obat keluarga (TOGA), serta tradisi menjaga sumber mata air dan pepohonan peneduh desa; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama untuk melatih peserta didik SD mengamati secara konkret komponen materi "${topik}", menumbuhkan rasa ingin tahu, serta kebiasaan memelihara kelestarian lingkungan sejak dini.`;
      option1 = {
        title: 'Kebun Sekolah & Etnosains Konkret (SD)',
        text: `Observasi langsung tanaman pekarangan dan kolam mini sekolah untuk menyelidiki konsep "${topik}" secara konkret dan ramah anak sesuai target CP IPA SD.`,
        badge: 'Jenjang SD · IPA · Selaras CP',
      };
      option2 = {
        title: 'Permainan Tradisional & Alam Nusantara',
        text: `Memadukan permainan tradisional anak nusantara (dakon biji-bijian, engklek tanah) sebagai media eksplorasi bahan alam yang menyenangkan dan bermakna.`,
        badge: 'Jenjang SD · Edukasi Gembira',
      };
      option3 = {
        title: 'Pasar Tradisional & Warung Sayur Lokal',
        text: `Pengenalan bahan pangan dan rempah lokal khas daerah (kunyit, jahe, daun pisang) yang mendukung pemahaman materi "${topik}" dari kehidupan sehari-hari.`,
        badge: 'Jenjang SD · Konteks Kehidupan',
      };
      option4 = {
        title: 'Kearifan Dongeng Fabel Satwa Daerah',
        text: `Cerita kearifan lokal tentang satwa dan tanaman Nusantara untuk menanamkan empati pada makhluk hidup dan ketercapaian TP kepedulian lingkungan.`,
        badge: 'Jenjang SD · Penguatan Karakter',
      };
    } else if (isMatematika) {
      primaryText = `Pemanfaatan media konkret biji congklak/dakon, ragam pola anyaman bambu tikar tradisional, serta simulasi transaksi jual-beli di pasar rakyat lokal; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama Matematika jenjang SD agar peserta didik mampu mengonstruksi penalaran matematis materi "${topik}" secara konkret, visual, dan menggembirakan.`;
      option1 = {
        title: 'Etnomatematika Permainan Congklak & Engklek',
        text: `Memanfaatkan lintasan permainan engklek dan lubang dakon tradisional untuk mengonstruksi pemahaman konsep angka, pola geometris, dan operasi hitung "${topik}".`,
        badge: 'Jenjang SD · Matematika Konkret',
      };
      option2 = {
        title: 'Pola Geometri Anyaman & Motif Batik Nusantara',
        text: `Mengeksplorasi bentuk bangun datar, simetri, dan pengulangan pola pada motif kain batik/anyaman kerajinan daerah setempat.`,
        badge: 'Jenjang SD · Etnomatematika Visual',
      };
      option3 = {
        title: 'Pasar Tradisional & Simulasi Belanja Lokal',
        text: `Aktivitas bermain peran pedagang pasar tradisional menggunakan mata uang mainan untuk melatih keterampilan numerasi kontekstual materi "${topik}".`,
        badge: 'Jenjang SD · Aplikasi Kehidupan',
      };
      option4 = {
        title: 'Takar-Ukur Tradisional Komoditas Dapur',
        text: `Mengenalkan satuan ukuran tradisional sederhana (genggam, jengkal, centong) dibandingkan dengan satuan baku untuk mencapai TP pengukuran.`,
        badge: 'Jenjang SD · Selaras Capaian TP',
      };
    } else if (isBahasa) {
      primaryText = `Penggalian dongeng cerita rakyat daerah setempat, tembang dolanan anak Nusantara (seperti Gundul Pacul, Cublak-Cublak Suweng), dan wawancara sederhana dengan pedagang/keluarga sekitar; diselaraskan dengan Capaian Pembelajaran (CP) dan TP Bahasa SD untuk membangun keterampilan menyimak, berbicara santun, dan mengekspresikan gagasan terkait "${topik}" secara percaya diri.`;
      option1 = {
        title: 'Cerita Rakyat & Fabel Nusantara (SD)',
        text: `Membaca dan memerankan dongeng kearifan lokal daerah yang memuat pesan moral dan kosakata kaya untuk mencapai target CP literasi teks "${topik}".`,
        badge: 'Jenjang SD · Bahasa Indonesia',
      };
      option2 = {
        title: 'Tembang Dolanan & Sastra Lisan Daerah',
        text: `Menyanyikan dan mendiskusikan makna tembang dolanan anak tradisional yang selaras dengan tema pembelajaran "${topik}".`,
        badge: 'Jenjang SD · Seni Berbahasa',
      };
      option3 = {
        title: 'Wawancara Sederhana Lingkungan Keluarga',
        text: `Latihan berbicara santun menanyakan tradisi keluarga atau kebiasaan warga sekitar untuk disusun menjadi teks cerita bergambar.`,
        badge: 'Jenjang SD · Aplikasi Komunikasi',
      };
      option4 = {
        title: 'Pojok Cerita Budaya & Gotong Royong Kelas',
        text: `Menyusun pajangan karya dinding kelas bertema kearifan sopan santun anak nusantara dalam pergaulan sehari-hari.`,
        badge: 'Jenjang SD · Penguatan Profil Lulusan',
      };
    } else if (isPancasila || isIPS) {
      primaryText = `Praktik gotong royong piket kelas ceria, tradisi musyawarah memilih ketua kelas, serta pengenalan rumah adat dan pakaian tradisional daerah nusantara; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama agar peserta didik SD menghayati nilai persatuan, toleransi kebinekaan, dan aturan hidup bersama terkait materi "${topik}".`;
      option1 = {
        title: 'Gotong Royong & Kerja Bakti Ceria (SD)',
        text: `Mempraktikkan tradisi sambatan membersihkan sudut kelas bersama-sama untuk merefleksikan nilai sila ke-3 dan ke-5 Pancasila pada materi "${topik}".`,
        badge: 'Jenjang SD · Pancasila/IPS',
      };
      option2 = {
        title: 'Musyawarah Kelas ala Rembuk Warga',
        text: `Simulasi musyawarah mufakat mengambil keputusan bersama di kelas dengan mengedepankan sikap saling menghargai pendapat rekan sebaya.`,
        badge: 'Jenjang SD · Demokrasi Ramah Anak',
      };
      option3 = {
        title: 'Ragam Budaya & Rumah Adat Sekitar',
        text: `Mengenal keunikan rumah adat, pakaian daerah, dan makanan khas yang mencerminkan kekayaan Bhinneka Tunggal Ika.`,
        badge: 'Jenjang SD · Kebinekaan Global',
      };
      option4 = {
        title: 'Tata Krama & Norma Kesopanan Nusantara',
        text: `Pembiasaan budaya salam, senyum, sapa, sopan, dan santun (5S) warisan luhur ketimuran dalam pergaulan di sekolah dan rumah.`,
        badge: 'Jenjang SD · Budi Pekerti',
      };
    } else {
      primaryText = `Pemanfaatan lingkungan pekarangan sekolah, permainan tradisional anak nusantara, dan nilai kebersamaan gotong royong warga sekitar; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama jenjang SD untuk memfasilitasi penguasaan materi "${topik}" secara konkret dan bermakna.`;
      option1 = {
        title: 'Laboratorium Lingkungan Sekolah (SD)',
        text: `Eksplorasi langsung objek nyata di halaman sekolah untuk menghubungkan materi "${topik}" dengan pengalaman konkret peserta didik SD.`,
        badge: 'Jenjang SD · Selaras CP',
      };
      option2 = {
        title: 'Permainan Tradisional Edukatif',
        text: `Permainan tradisional nusantara yang dimodifikasi untuk memperkuat pemahaman konsep materi dan kerja sama tim.`,
        badge: 'Jenjang SD · Pembelajaran Gembira',
      };
      option3 = {
        title: 'Budaya Santun & Gotong Royong Ceria',
        text: `Penanaman karakter empati dan saling tolong-menolong melalui proyek mini sederhana yang relevan dengan topik "${topik}".`,
        badge: 'Jenjang SD · Karakter Luhur',
      };
      option4 = {
        title: 'Kearifan Seni Kriya Sederhana Bahan Alam',
        text: `Membuat karya sederhana menggunakan daun kering, pelepah pisang, atau cangkang biji lokal yang melatih motorik halus dan kreativitas.`,
        badge: 'Jenjang SD · Karya Kontekstual',
      };
    }
  } else if (jenjang === 'SMP') {
    // SMP (Fase D): Community/village level, local ecosystem, field investigation, peer collaboration
    if (isIPA) {
      primaryText = `Kawasan konservasi mata air desa, sistem perairan persawahan terasering/Subak, serta tradisi larangan merusak pohon pelindung sumber air; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama IPA SMP untuk memampukan peserta didik menyelidiki interaksi alam, menganalisis faktor keseimbangan lingkungan pada materi "${topik}", dan merancang aksi pelestarian nyata di sekitarnya.`;
      option1 = {
        title: 'Etnosains Konservasi Mata Air & Pohon Peneduh (SMP)',
        text: `Meneliti kualitas air dan keanekaragaman hayati di sumber air/sungai desa yang dilindungi adat warga guna membuktikan konsep materi "${topik}" secara empiris.`,
        badge: 'Jenjang SMP · IPA Fase D · Selaras CP',
      };
      option2 = {
        title: 'Sentra Fermentasi Tempe / Tape Tradisional',
        text: `Penyelidikan bioteknologi fermentasi kedelai/singkong perajin lokal dengan pembungkus daun alami untuk menguji faktor-faktor biologis dan kimiawi materi "${topik}".`,
        badge: 'Jenjang SMP · Etnosains Terapan',
      };
      option3 = {
        title: 'Sistem Pertanian Tradisional & Pengendali Hama Alami',
        text: `Mempelajari kearifan petani lokal menanam tanaman refugia (bunga matahari/kenikir) untuk menjaga rantai makanan dan keseimbangan ekologis.`,
        badge: 'Jenjang SMP · Ekologi Kontekstual',
      };
      option4 = {
        title: 'Gerakan Bank Sampah & Bersih Kali Komunitas',
        text: `Partisipasi dalam aksi pemilahan sampah organik-anorganik dan konservasi sungai desa untuk mencapai TP perancangan solusi lingkungan.`,
        badge: 'Jenjang SMP · Aksi Keberlanjutan',
      };
    } else if (isMatematika) {
      primaryText = `Etnomatematika pada pola ragam hias geometri batik pesisiran/pedalaman nusantara, arsitektur rumah panggung tradisional, serta sistem timbangan dan transaksi di pasar tradisional kelurahan; diselaraskan dengan Capaian Pembelajaran (CP) dan TP Matematika SMP untuk melatih nalar kritis peserta didik dalam memodelkan persoalan matematika "${topik}" ke situasi nyata.`;
      option1 = {
        title: 'Geometri Transformasi Motif Batik & Songket (SMP)',
        text: `Analisis matematis refleksi, translasi, rotasi, dan dilatasi pada motif ornamen tradisional daerah untuk mencapai target CP Geometri "${topik}".`,
        badge: 'Jenjang SMP · Etnomatematika Fase D',
      };
      option2 = {
        title: 'Arsitektur Vernakular Rumah Adat Nusantara',
        text: `Menghitung perbandingan rasio, luas permukaan, dan sudut kestabilan rangka atap rumah adat tahan gempa daerah setempat.`,
        badge: 'Jenjang SMP · Pemodelan Nyata',
      };
      option3 = {
        title: 'Analisis Statistik Pasar Tradisional & Inflasi Pangan',
        text: `Mengumpulkan data harga komoditas pangan pokok di pasar daerah untuk diolah menjadi tabel frekuensi, rata-rata, dan diagram analisis data.`,
        badge: 'Jenjang SMP · Statistika Kontekstual',
      };
      option4 = {
        title: 'Sistem Irigasi Terasering & Kalkulasi Debit Air',
        text: `Penerapan konsep perbandingan senilai/berbalik nilai dan luas petak sawah bertingkat dalam pembagian air irigasi desa.`,
        badge: 'Jenjang SMP · Selaras Capaian TP',
      };
    } else if (isBahasa) {
      primaryText = `Literasi sastra tutur legenda cagar budaya daerah, wawancara mendalam dengan sesepuh/perajin lokal desa, serta bedah teks laporan hasil observasi potensi wilayah; diselaraskan dengan Capaian Pembelajaran (CP) dan TP Bahasa SMP agar peserta didik terampil menganalisis struktur kebahasaan dan memproduksi teks komunikatif bermutu terkait "${topik}".`;
      option1 = {
        title: 'Laporan Hasil Observasi Potensi Daerah (SMP)',
        text: `Menyusun teks LHO faktual tentang objek wisata alam atau sentra kerajinan lokal untuk mengasah objektivitas dan nalar kritis sesuai CP.`,
        badge: 'Jenjang SMP · Bahasa Indonesia',
      };
      option2 = {
        title: 'Legenda Asal-Usul & Nilai Luhur Nusantara',
        text: `Menganalisis unsur intrinsik dan pesan kearifan lokal cerita rakyat daerah setempat untuk dialihwahanakan ke naskah drama atau komik.`,
        badge: 'Jenjang SMP · Sastra Kontekstual',
      };
      option3 = {
        title: 'Teks Prosedur Kuliner / Kerajinan Khas Daerah',
        text: `Menuliskan teks prosedur rinci mengenai cara pembuatan olahan pangan atau kriya khas daerah hasil wawancara narasumber perajin.`,
        badge: 'Jenjang SMP · Keterampilan Menulis',
      };
      option4 = {
        title: 'Teks Pidato Persuasif Kampanye Lingkungan Desa',
        text: `Menyusun dan menyampaikan pidato persuasif mengajak warga menjaga kebersihan saluran air dan melestarikan tradisi gotong royong.`,
        badge: 'Jenjang SMP · Retorika & Komunikasi',
      };
    } else if (isPancasila || isIPS) {
      primaryText = `Falsafah musyawarah rembuk desa di balai warga, kearifan gotong royong sambatan/gugur gunung mendirikan rumah warga, serta dinamika ekonomi kerakyatan pasar tradisional; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama agar peserta didik SMP mampu mengkritisi isu sosial, menghayati kebinekaan, dan berkontribusi pada harmoni masyarakat sekitar "${topik}".`;
      option1 = {
        title: 'Tradisi Sambatan & Gotong Royong Warga (SMP)',
        text: `Mengamati dan merefleksikan nilai kesukarelaan tolong-menolong warga tanpa upah materi sebagai modal sosial kebangsaan pada materi "${topik}".`,
        badge: 'Jenjang SMP · Pancasila/IPS Fase D',
      };
      option2 = {
        title: 'Rembuk Desa & Pengambilan Keputusan Mufakat',
        text: `Studi kasus penyelesaian sengketa pemanfaatan sumber daya desa melalui musyawarah adat untuk mencapai target CP demokrasi.`,
        badge: 'Jenjang SMP · Nalar Kritis Kewargaan',
      };
      option3 = {
        title: 'Pasar Tradisional sebagai Simpul Interaksi Sosial-Ekonomi',
        text: `Meneliti rantai pasok dari petani ke pedagang pasar serta peran lembaga sosial ekonomi lokal dalam menjaga stabilitas harga.`,
        badge: 'Jenjang SMP · IPS Kontekstual',
      };
      option4 = {
        title: 'Kampung Moderasi & Kerukunan Lintas Agama',
        text: `Mengidentifikasi praktik toleransi antarumat beragama yang hidup harmonis berdampingan dalam perayaan hari besar dan kegiatan sosial.`,
        badge: 'Jenjang SMP · Harmoni Kebinekaan',
      };
    } else {
      primaryText = `Pemanfaatan dinamika lingkungan komunitas desa, kearifan konservasi alam pepohonan rindang Nusantara, dan tradisi gotong royong warga; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama jenjang SMP untuk memfasilitasi pencapaian kompetensi materi "${topik}" secara kolaboratif dan mendalam.`;
      option1 = {
        title: 'Laboratorium Alam & Komunitas Desa (SMP)',
        text: `Studi lapangan mengamati fenomena kontekstual materi "${topik}" di lingkungan sekitar sekolah yang melibatkan wawancara warga.`,
        badge: 'Jenjang SMP · Penyelidikan Lapangan',
      };
      option2 = {
        title: 'Kearifan Tradisi Berkelanjutan Daerah',
        text: `Penggalian nilai filosofi lokal menjaga kelestarian lingkungan dan tatanan sosial yang memperkuat pemahaman mendalam.`,
        badge: 'Jenjang SMP · Nilai Luhur Nusantara',
      };
      option3 = {
        title: 'Sentra Produksi & Usaha Mikro Sekitar',
        text: `Menghubungkan teori pembelajaran dengan praktik nyata di bengkel kerja atau unit usaha masyarakat dekat sekolah.`,
        badge: 'Jenjang SMP · Konteks Kehidupan',
      };
      option4 = {
        title: 'Proyek Kolaborasi Aksi Nyata Pelajar',
        text: `Merancang aksi nyata sederhana bersama kelompok untuk memberikan solusi kontekstual atas permasalahan materi "${topik}".`,
        badge: 'Jenjang SMP · Selaras Capaian TP',
      };
    }
  } else if (jenjang === 'SMA') {
    // SMA (Fase E-F): Higher-order critical reasoning, scientific research, ethnobotanical/ethnomathematical modeling, philosophical inquiry
    if (isIPA) {
      primaryText = `Riset etnosains kearifan konservasi hutan lindung adat (seperti Hutan Larangan Adat/Awig-awig), analisis biokimiawi fermentasi pangan tradisional, serta pemodelan termodinamika rumah adat panggung vernakular Nusantara; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama SMA untuk mengasah nalar kritis tingkat tinggi (HOTS) peserta didik dalam mengevaluasi materi "${topik}" berbasis data empiris dan kearifan ekologis bangsa.`;
      option1 = {
        title: 'Riset Etnosains & Konservasi Biodiversitas Adat (SMA)',
        text: `Analisis ilmiah terhadap efektivitas zonasi hutan adat atau konservasi pesisir (Sasi laut) dalam menjaga keseimbangan materi "${topik}" sesuai CP SMA.`,
        badge: 'Jenjang SMA · IPA Fase E/F · Riset Ilmiah',
      };
      option2 = {
        title: 'Biokimiawi & Bioteknologi Pangan Tradisional',
        text: `Eksperimen laboratorium menguji kinetika enzim, respirasi mikroorganisme, dan pH pada fermentasi dadih/tempe/tape khas daerah.`,
        badge: 'Jenjang SMA · Praktikum Mendalam',
      };
      option3 = {
        title: 'Termodinamika & Mitigasi Gempa Arsitektur Tradisional',
        text: `Analisis fisika terhadap sirkulasi udara, isolasi termal, dan elastisitas sambungan pasak kayu pada rumah adat Nusantara.`,
        badge: 'Jenjang SMA · Fisika Vernakular',
      };
      option4 = {
        title: 'Filosofi Ekologis Tri Hita Karana & Memayu Hayuning Bawana',
        text: `Refleksi filosofis menyelaraskan kemajuan sains modern dengan kearifan menjaga harmoni kosmos alam warisan leluhur.`,
        badge: 'Jenjang SMA · Refleksi Filosofis',
      };
    } else if (isMatematika) {
      primaryText = `Pemodelan etnomatematika fraktal pada motif batik keraton/songket, kalkulasi kalkulus/trigonometri konstruksi kubah dan atap joglo/tongkonan, serta analisis algoritma statistika ekonomi daerah; diselaraskan dengan Capaian Pembelajaran (CP) dan TP Matematika SMA untuk membuktikan penerapan konsep matematis tingkat lanjut materi "${topik}" dalam mahakarya peradaban Nusantara.`;
      option1 = {
        title: 'Pemodelan Geometri Fraktal Batik & Ornamen Tradisional (SMA)',
        text: `Menganalisis iterasi pola fraktal dan dimensi kurva pada motif ragam hias daerah menggunakan konsep barisan/deret dan fungsi matematis.`,
        badge: 'Jenjang SMA · Matematika Lanjut · Selaras CP',
      };
      option2 = {
        title: 'Trigonometri & Statika Struktur Candi / Rumah Adat',
        text: `Penerapan aturan sinus, kosinus, dan vektor pada analisis kemiringan bidang atap vernakular serta pembebanan struktur batu candi.`,
        badge: 'Jenjang SMA · Kalkulasi Nyata',
      };
      option3 = {
        title: 'Analisis Ekonometrika & Regresi Pasar Komoditas Lokal',
        text: `Membuat model regresi linier dan prediksi fluktuasi harga komoditas pertanian daerah berbasis data deret waktu (time series).`,
        badge: 'Jenjang SMA · Statistika Lanjut',
      };
      option4 = {
        title: 'Kalkulus Optimalisasi Sistem Irigasi Tradisional',
        text: `Menerapkan konsep turunan maksimum-minimum dalam merancang debit optimal saluran irigasi pertanian berkelanjutan.`,
        badge: 'Jenjang SMA · Selaras Capaian TP',
      };
    } else if (isBahasa) {
      primaryText = `Kajian kritis filologi teks naskah kuno/babad daerah, dekonstruksi wacana kritis artikel opini isu lingkungan daerah, serta penulisan karya ilmiah bertema kearifan lokal; diselaraskan dengan Capaian Pembelajaran (CP) dan TP Bahasa SMA untuk memfasilitasi argumentasi logis, penguasaan laras ilmiah, dan pelestarian nilai luhur bangsa melalui materi "${topik}".`;
      option1 = {
        title: 'Kajian Kritis Wacana & Isu Kearifan Lingkungan (SMA)',
        text: `Menganalisis artikel opini dan menyusun esai argumentatif kritis mengenai benturan modernisasi dengan kearifan adat lokal sesuai CP SMA.`,
        badge: 'Jenjang SMA · Bahasa Indonesia Fase F',
      };
      option2 = {
        title: 'Filologi & Nilai Filosofis Naskah Sastra Daerah',
        text: `Mengkaji falsafah kepemimpinan dan moralitas dalam karya sastra klasik daerah (Gurindam 12, Serat Wedhatama, La Galigo).`,
        badge: 'Jenjang SMA · Sastra Mendalam',
      };
      option3 = {
        title: 'Penerbitan Antologi Esai / Karya Ilmiah Remaja',
        text: `Proyek penelitian mini dan penulisan karya tulis ilmiah terstruktur yang mendokumentasikan kearifan teknologi lokal.`,
        badge: 'Jenjang SMA · Karya Tulis Ilmiah',
      };
      option4 = {
        title: 'Debat Terbuka & Retorika Kebijakan Budaya Daerah',
        text: `Simulasi sidang debat menguji kelayakan regulasi perlindungan cagar budaya daerah dengan etika komunikasi akademik.`,
        badge: 'Jenjang SMA · Retorika Tingkat Tinggi',
      };
    } else if (isPancasila || isIPS) {
      primaryText = `Analisis sosiologis sistem hukum adat (hukum ulayat), kearifan resolusi konflik berbasis kekeluargaan (seperti Pela Gandong atau Isen Mulang), serta kajian geopolitik ketahanan pangan lokal; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama agar peserta didik SMA mampu mengkritisi dinamika kebangsaan dan merumuskan solusi berakar pada nilai Pancasila terkait "${topik}".`;
      option1 = {
        title: 'Kajian Hukum Adat & Pengelolaan Hak Ulayat (SMA)',
        text: `Menelaah sinkronisasi hukum positif nasional dengan hukum adat lokal dalam perlindungan wilayah kelola rakyat pada materi "${topik}".`,
        badge: 'Jenjang SMA · Pancasila/Sosiologi Fase F',
      };
      option2 = {
        title: 'Kearifan Tradisi Resolusi Konflik Nusantara',
        text: `Menganalisis efektivitas pranata adat perdamaian lokal (seperti Pela Gandong di Maluku) sebagai inspirasi integrasi nasional.`,
        badge: 'Jenjang SMA · Sosiologi & Harmoni',
      };
      option3 = {
        title: 'Ketahanan Pangan Berbasis Lumbung Padi Desa',
        text: `Studi ekonomi pembangunan terhadap kedaulatan pangan lumbung desa tradisional menghadapi krisis iklim global.`,
        badge: 'Jenjang SMA · Ekonomi Pembangunan',
      };
      option4 = {
        title: 'Demokrasi Deliberatif & Revitalisasi Rembuk Adat',
        text: `Merumuskan naskah kebijakan rekomendasi partisipasi publik berbasis nilai musyawarah mufakat sila ke-4 Pancasila.`,
        badge: 'Jenjang SMA · Advokasi Kebijakan',
      };
    } else {
      primaryText = `Penyelidikan kritis berbasis riset etnosains/etnososial, kajian filosofi kearifan masyarakat adat Nusantara, dan advokasi pelestarian nilai luhur; diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama jenjang SMA untuk mengarahkan peserta didik menguasai materi "${topik}" secara mendalam dan berwawasan masa depan.`;
      option1 = {
        title: 'Riset Kontekstual & Penalaran Kritis (SMA)',
        text: `Penyelidikan mendalam menguji teori keilmuan dengan fenomena adat dan kearifan masyarakat lokal untuk mencapai target CP.`,
        badge: 'Jenjang SMA · Selaras CP & TP',
      };
      option2 = {
        title: 'Filosofi Luhur Kearifan Nusantara',
        text: `Penggalian falsafah hidup bangsa sebagai pedoman etika moral dan tanggung jawab keilmuan di era globalisasi.`,
        badge: 'Jenjang SMA · Wawasan Luhur',
      };
      option3 = {
        title: 'Studi Kebijakan & Dampak Lingkungan Daerah',
        text: `Menganalisis dampak sosio-ekologis pembangunan lokal dan merumuskan alternatif solusi berakar kearifan daerah.`,
        badge: 'Jenjang SMA · Nalar Kritis',
      };
      option4 = {
        title: 'Publikasi Karya Tulis & Pameran Riset Pelajar',
        text: `Mempublikasikan hasil kajian kontekstual dalam bentuk poster ilmiah atau gelar wicara panelis di hadapan komunitas sekolah.`,
        badge: 'Jenjang SMA · Gelar Karya Mandiri',
      };
    }
  } else {
    // SMK (Fase E-F Vokasi): Industry standard, partnership with MSMEs (UMKM), vocational craft, production efficiency, branding/packaging
    primaryText = `Kemitraan dengan sentra UMKM dan industri daerah (seperti sentra kerajinan kriya, kuliner olahan lokal, agribisnis terpadu, atau bengkel rekayasa teknik daerah); diselaraskan dengan Capaian Pembelajaran (CP) dan TP utama SMK untuk memandu peserta didik menerapkan standar industri pada materi "${topik}", merancang produk/layanan bernilai tambah tinggi, dan memecahkan kendala teknis nyata di dunia kerja lokal.`;
    option1 = {
      title: 'Digitalisasi & Inovasi Nilai Tambah UMKM Lokal (SMK)',
      text: `Membantu mitra UMKM sentra kerajinan/kuliner sekitar sekolah merancang purwarupa produk, standardisasi alur kerja, dan katalog digital terkait materi "${topik}".`,
      badge: 'Jenjang SMK · Vokasi Terapan · Selaras CP',
    };
    option2 = {
      title: 'Revitalisasi Ragam Hias Kriya & Identitas Visual Daerah',
      text: `Mengadopsi motif ukir, tenun, atau ornamen tradisional daerah ke dalam desain produk modern berdaya saing pasar industri kreatif.`,
      badge: 'Jenjang SMK · Desain & Manufaktur',
    };
    option3 = {
      title: 'Efisiensi Kerja Industri & Standardisasi Mutu Daerah',
      text: `Analisis alur produksi, sanitasi, dan quality control (QC) pada industri olahan lokal berbasis SOP industri modern dan prinsip ramah lingkungan.`,
      badge: 'Jenjang SMK · Standar Industri Nyata',
    };
    option4 = {
      title: 'Teaching Factory (TeFa) Berbasis Komoditas Unggulan Wilayah',
      text: `Menjalankan unit produksi sekolah yang menyerap potensi bahan baku lokal daerah untuk menghasilkan produk komersial bernilai jual.`,
      badge: 'Jenjang SMK · Kewirausahaan Terapan',
    };
  }

  // Adjust tailored topic keywords if user provided distinctive topics like 'tempe', 'ui/ux', 'sampah', 'energi'
  if (topikLower.includes('tempe') || topikLower.includes('fermentasi') || topikLower.includes('bioteknologi')) {
    primaryText = `Sentra perajin tempe/tape tradisional nusantara, pemanfaatan pembungkus alami daun pisang/daun jati, dan gerakan kedaulatan pangan lokal; diselaraskan dengan jenjang ${jenjang}, mata pelajaran ${mapel}, dan target Capaian Pembelajaran (CP) agar peserta didik mampu ${kompetensiFokus} melalui investigasi langsung proses bioteknologi fermentasi warisan leluhur.`;
  } else if (topikLower.includes('desain') || topikLower.includes('kemasan') || topikLower.includes('ui/ux') || topikLower.includes('antarmuka')) {
    primaryText = `Perancangan identitas visual dan kemasan ramah lingkungan bagi produk UMKM unggulan daerah (keripik, batik, olahan jamu lokal); diselaraskan dengan jenjang ${jenjang}, mapel ${mapel}, serta CP dan TP utama agar peserta didik mempraktikkan keterampilan ${kompetensiFokus} guna meningkatkan daya saing ekonomi kreatif masyarakat sekitar.`;
  } else if (topikLower.includes('sampah') || topikLower.includes('limbah') || topikLower.includes('plastik') || topikLower.includes('polusi')) {
    primaryText = `Gerakan Bank Sampah unit desa, tradisi pengomposan dedaunan gugur pekarangan (jugangan), dan aksi bersih sungai/pesisir gotong royong; diselaraskan dengan jenjang ${jenjang}, mapel ${mapel}, dan CP/TP untuk menugaskan peserta didik ${kompetensiFokus} demi mewujudkan kelestarian ekologis lingkungan belajar.`;
  } else if (topikLower.includes('pancasila') || topikLower.includes('musyawarah') || topikLower.includes('norma')) {
    primaryText = `Falsafah musyawarah mufakat di balai warga desa, tradisi sambatan gotong royong warga, dan harmoni kampung moderasi beragama; diselaraskan dengan jenjang ${jenjang}, mapel ${mapel}, dan target Capaian Pembelajaran (CP) agar peserta didik menginternalisasi karakter luhur dan ${kompetensiFokus} dalam kehidupan bermasyarakat.`;
  }

  return {
    primary: primaryText,
    options: [option1, option2, option3, option4],
  };
}

export function getSmartFieldReferences(input: {
  mataPelajaran: string;
  jenjang: string;
  faseKelas: string;
  materi: string;
  capaianPembelajaran?: string;
  tujuanPembelajaran?: string[];
}): ComprehensiveReferences {
  const { mataPelajaran, faseKelas, materi, jenjang } = input;
  const topik = materi.trim() || 'Topik Pembelajaran';
  const topikLower = topik.toLowerCase();
  const mapelLower = (mataPelajaran || '').toLowerCase();
  const fase = faseKelas || 'Fase Terpilih';

  // 1. KOMPETENSI AWAL (PRASYARAT) HEURISTICS
  let primaryKompetensi = `Peserta didik telah memahami pengantar konsep dasar ${topik}, memiliki rasa ingin tahu tinggi, serta terbiasa melakukan pengamatan dan diskusi kelompok terbimbing.`;
  let kompetensiOptions: SmartOption[] = [
    {
      title: 'Pemahaman Konsep Kunci',
      text: `Peserta didik telah memahami konsep dasar dan peristilahan penting yang melandasi materi ${topik}.`,
    },
    {
      title: 'Keterampilan Proses & Analisis',
      text: `Peserta didik telah terampil mengamati fenomena, mencatat data sederhana, dan mendiskusikan temuan dalam kelompok.`,
    },
    {
      title: 'Pengalaman Keseharian',
      text: `Peserta didik telah mengenali contoh dan peristiwa nyata terkait ${topik} yang sering dijumpai di lingkungan sekitar rumah dan sekolah.`,
    },
  ];

  if (jenjang === 'PAUD' || jenjang === 'TK A' || jenjang === 'TK B' || jenjang === 'KB' || !jenjang || (faseKelas && faseKelas.toLowerCase().includes('fondasi'))) {
    primaryKompetensi = 'Anak telah terbiasa menyapa guru dan teman dengan senyuman ceria di pagi hari, mampu mengekspresikan emosi senang atau rasa ingin tahu, mengenali warna dan bentuk sederhana, serta senang mengeksplorasi benda konkret sensori.';
    kompetensiOptions = [
      {
        title: 'Sensori Motorik & Eksplorasi Benda Nyata (PAUD)',
        text: 'Anak terbiasa meraba tekstur kasar-halus, memegang benda dengan koordinasi motorik halus, dan antusias bergerak aktif di kebun sekolah.',
      },
      {
        title: 'Sosial Emosional & Pembiasaan Mandiri (PAUD)',
        text: 'Anak mampu beradaptasi di lingkungan kelas, mau berbagi alat main bersama teman, dan mulai belajar bersabar menunggu giliran.',
      },
      {
        title: 'Komunikasi & Minat Menyimak Cerita (PAUD)',
        text: 'Anak antusias mendengarkan dongeng buku bergambar, mampu menjawab pertanyaan pemantik sederhana, dan berani menceritakan karyanya.',
      },
    ];
  } else if (topikLower.includes('ekosistem') || topikLower.includes('rantai makanan') || topikLower.includes('lingkungan') || topikLower.includes('biodiversitas') || topikLower.includes('habitat')) {
    primaryKompetensi = 'Peserta didik telah mampu membedakan komponen hidup (biotik) dan tak hidup (abiotik) serta mengenali kebutuhan dasar organisme di lingkungan sekitar rumah dan sekolah.';
    kompetensiOptions = [
      {
        title: 'Komponen Biotik & Abiotik',
        text: 'Peserta didik telah mampu mengidentifikasi komponen biotik dan abiotik di pekarangan rumah atau sekolah secara mandiri.',
      },
      {
        title: 'Hubungan Makan & Dimakan',
        text: 'Peserta didik telah memahami konsep bahwa makhluk hidup membutuhkan makanan dan energi untuk bertumbuh dan bertahan hidup.',
      },
      {
        title: 'Kepedulian Lingkungan',
        text: 'Peserta didik telah menunjukkan kebiasaan memelihara tanaman, tidak merusak tanaman, dan membuang sampah pada tempatnya.',
      },
    ];
  } else if (topikLower.includes('bioteknologi') || topikLower.includes('fermentasi') || topikLower.includes('sel') || topikLower.includes('mikro') || topikLower.includes('genetika')) {
    primaryKompetensi = 'Peserta didik telah memahami struktur sel mikroskopis (jamur/bakteri), konsep respirasi anaerob dasar, dan memiliki kepedulian terhadap higienitas alat laboratorium.';
    kompetensiOptions = [
      {
        title: 'Struktur Sel & Mikroorganisme',
        text: 'Peserta didik telah memahami perbedaan organisme uniseluler dan multiseluler serta cara kerja mikroorganisme sederhana (ragi/bakteri).',
      },
      {
        title: 'Konsep Kimia / Biologi Dasar',
        text: 'Peserta didik telah memahami prinsip perubahan zat (fisika dan kimia) serta faktor-faktor yang memengaruhi reaksi fermentasi.',
      },
      {
        title: 'Budaya Higienitas Pangan',
        text: 'Peserta didik terbiasa menerapkan standar sanitasi, kebersihan tangan, dan kehati-hatian dalam memperlakukan bahan makanan tradisional.',
      },
    ];
  } else if (topikLower.includes('ui/ux') || topikLower.includes('desain') || topikLower.includes('antarmuka') || topikLower.includes('figma') || topikLower.includes('grafis') || topikLower.includes('kemasan')) {
    primaryKompetensi = 'Peserta didik telah menguasai prinsip dasar tata letak visual (grid, kontras warna, hierarki teks) dan memiliki keterampilan dasar mengoperasikan perangkat komputer grafis.';
    kompetensiOptions = [
      {
        title: 'Prinsip Desain & Tata Letak',
        text: 'Peserta didik telah menguasai unsur visual berupa garis, bentuk, warna, dan hierarki tipografi dalam media komunikasi visual.',
      },
      {
        title: 'Literasi Digital & Software',
        text: 'Peserta didik telah mengenal antarmuka perangkat lunak desain berbasis vektor/layar serta terbiasa menyimpan berkas secara rapi.',
      },
      {
        title: 'Empati Pengguna (User-Centered)',
        text: 'Peserta didik memiliki kepekaan terhadap kenyamanan dan kemudahan masyarakat saat menggunakan media informasi atau produk kemasan.',
      },
    ];
  } else if (topikLower.includes('gaya') || topikLower.includes('energi') || topikLower.includes('gerak') || topikLower.includes('listrik') || topikLower.includes('magnet') || topikLower.includes('tekanan')) {
    primaryKompetensi = 'Peserta didik telah mengenal jenis-jenis gaya dalam kehidupan sehari-hari (dorongan dan tarikan) serta memahami bahwa energi tidak dapat dimusnahkan melainkan berpindah bentuk.';
    kompetensiOptions = [
      {
        title: 'Hukum Gerak & Pengukuran',
        text: 'Peserta didik telah terbiasa menggunakan alat ukur panjang dan waktu serta memahami konsep kecepatan dasar.',
      },
      {
        title: 'Bentuk Perubahan Energi',
        text: 'Peserta didik telah mampu memberikan contoh perubahan energi listrik menjadi panas, gerak, dan cahaya di rumah.',
      },
      {
        title: 'Keselamatan Penggunaan Energi',
        text: 'Peserta didik memahami bahaya kelistrikan dan pentingnya sikap hemat energi dalam kehidupan sehari-hari.',
      },
    ];
  } else if (topikLower.includes('pecahan') || topikLower.includes('aljabar') || topikLower.includes('statistika') || topikLower.includes('geometri') || topikLower.includes('persamaan') || mapelLower.includes('matematika')) {
    primaryKompetensi = 'Peserta didik telah menguasai operasi hitung dasar bilangan cacah/bulat dan mampu membaca serta merepresentasikan informasi matematis secara sistematis.';
    kompetensiOptions = [
      {
        title: 'Keterampilan Numerasi Dasar',
        text: 'Peserta didik lancar dalam operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan real.',
      },
      {
        title: 'Penalaran Matematis Logis',
        text: 'Peserta didik telah mampu menerjemahkan masalah cerita kontekstual ke dalam bentuk model matematika sederhana.',
      },
      {
        title: 'Penyajian & Visualisasi Data',
        text: 'Peserta didik telah terbiasa membaca tabel frekuensi dan diagram batang sederhana.',
      },
    ];
  } else if (topikLower.includes('teks') || topikLower.includes('cerita') || topikLower.includes('laporan') || topikLower.includes('puisi') || topikLower.includes('observasi') || mapelLower.includes('bahasa')) {
    primaryKompetensi = 'Peserta didik telah mampu mengidentifikasi ide pokok dalam sebuah paragraf dan terbiasa menuliskan gagasan dengan ejaan serta tanda baca yang tepat.';
    kompetensiOptions = [
      {
        title: 'Literasi Membaca & Menyimak',
        text: 'Peserta didik mampu menemukan gagasan utama dan informasi tersurat maupun tersirat dalam bacaan informatif/naratif.',
      },
      {
        title: 'Keterampilan Menulis Terstruktur',
        text: 'Peserta didik terbiasa menyusun kalimat efektif sesuai kaidah PUEBI/tata bahasa yang baik.',
      },
      {
        title: 'Kemampuan Berbicara & Percaya Diri',
        text: 'Peserta didik terbiasa menyampaikan pendapat dalam forum diskusi kelas dengan santun dan berani.',
      },
    ];
  } else if (topikLower.includes('pancasila') || topikLower.includes('norma') || topikLower.includes('hukum') || topikLower.includes('demokrasi') || mapelLower.includes('pkn') || mapelLower.includes('pancasila')) {
    primaryKompetensi = 'Peserta didik telah mengenali hak dan kewajiban dasar sebagai warga sekolah serta terbiasa bermusyawarah dalam mengambil keputusan bersama di kelas.';
    kompetensiOptions = [
      {
        title: 'Nilai-Nilai Pancasila',
        text: 'Peserta didik hafal kelima sila Pancasila dan dapat mencontohkan perilaku sila ke-1 sampai ke-5 di rumah.',
      },
      {
        title: 'Ketaatan terhadap Norma',
        text: 'Peserta didik telah memahami aturan-aturan yang berlaku di lingkungan keluarga dan tata tertib sekolah.',
      },
      {
        title: 'Toleransi & Kebinekaan',
        text: 'Peserta didik memiliki sikap saling menghormati perbedaan suku, agama, dan latar belakang antarteman sekelas.',
      },
    ];
  } else if (topikLower.includes('sejarah') || topikLower.includes('pasar') || topikLower.includes('peta') || topikLower.includes('sosial') || mapelLower.includes('ips')) {
    primaryKompetensi = 'Peserta didik telah mengenal letak lingkungan tempat tinggalnya serta terbiasa mengamati kegiatan jual-beli dan interaksi sosial masyarakat sekitar.';
    kompetensiOptions = [
      {
        title: 'Pemahaman Spasial & Peta',
        text: 'Peserta didik telah dapat membaca peta mata angin dan simbol-simbol geografis dasar.',
      },
      {
        title: 'Kegiatan Ekonomi Sehari-hari',
        text: 'Peserta didik memahami peran produsen, distributor, dan konsumen yang ada di pasar atau warung terdekat.',
      },
      {
        title: 'Kesadaran Sejarah Kebangsaan',
        text: 'Peserta didik telah mengenal tokoh-tokoh pahlawan nasional dan momentum penting kemerdekaan Indonesia.',
      },
    ];
  }

  // 2. MODEL & METODE PEMBELAJARAN HEURISTICS
  let primaryModel = 'Problem Based Learning (PBL) dipadukan dengan observasi lapangan, diskusi kelompok terarah, dan presentasi Gallery Walk.';
  let modelOptions: SmartOption[] = [
    {
      title: 'Problem Based Learning (PBL)',
      text: `Problem Based Learning (PBL) 5 Sintaks: Orientasi masalah kontekstual ${topik}, penyelidikan kelompok, dan presentasi solusi nyata.`,
    },
    {
      title: 'Project Based Learning (PjBL)',
      text: `Project Based Learning (PjBL): Peserta didik merancang dan menghasilkan karya/produk kreatif terkait ${topik} melalui unjuk kerja kolaboratif.`,
    },
    {
      title: 'Inkuiri Terbimbing / Experiential',
      text: `Inkuiri Terbimbing (Guided Inquiry): Eksplorasi langsung fenomena ${topik}, uji coba sederhana, dan penarikan kesimpulan mandiri.`,
    },
  ];

  if (jenjang === 'PAUD' || jenjang === 'TK A' || jenjang === 'TK B' || jenjang === 'KB' || !jenjang || (faseKelas && faseKelas.toLowerCase().includes('fondasi'))) {
    primaryModel = 'Model Sentra Bahan Alam dipadukan dengan Eksplorasi Sensori Loose Parts, Storytelling Buku Bergambar, dan Recalling Ceria.';
    modelOptions = [
      {
        title: 'Model Sentra (Bahan Alam / Balok / Main Peran / Imtaq)',
        text: 'Model Sentra 4 Pijakan (Lingkungan, Sebelum Main, Saat Main, Setelah Main) yang memfasilitasi kebebasan memilih ragam invitasi main loose parts.',
      },
      {
        title: 'Project-Based Play (Bermain Proyek Anak Usia Dini)',
        text: 'Pembelajaran Berbasis Proyek Anak yang memandu eksplorasi mendalam atas topik ketertarikan anak melalui kreasi bahan lepasan (loose parts).',
      },
      {
        title: 'Eksplorasi Sensori & Guided Play (STEAM PAUD)',
        text: 'Bermain terbimbing yang mengaktifkan panca indera, menguji coba sifat benda alam (air, pasir, daun), dan menstimulasi rasa takjub.',
      },
      {
        title: 'Model Main Peran Makro (Socio-Dramatic Play)',
        text: 'Bermain peran kehidupan nyata (pasar tradisional, keluarga, dokter, petani) untuk melatih kecerdasan sosial, empati, dan regulasi antre sabar.',
      },
    ];
  } else if (jenjang === 'SD') {
    primaryModel = 'Experiential Learning & Cooperative Learning tipe Teams Games Tournament (TGT) dengan media konkret, nyanyian edukasi, dan eksplorasi gembira.';
    modelOptions = [
      {
        title: 'Experiential & Konkret (SD)',
        text: 'Experiential Learning berbantuan benda konkret di lingkungan kelas/sekolah dengan aktivitas mengamati, memegang, dan bermain peran.',
      },
      {
        title: 'Cooperative Learning (TGT/STAD)',
        text: 'Pembelajaran Kooperatif kelompok kecil dengan turnamen kuis ceria, kartu tantangan edukatif, dan apresiasi bintang prestasi.',
      },
      {
        title: 'Discovery Learning Terbimbing',
        text: 'Model Penemuan Terbimbing di mana guru menuntun siswa menemukan sendiri pola konsep melalui pertanyaan pemantik ramah anak.',
      },
    ];
  } else if (jenjang === 'SMK' || topikLower.includes('desain') || topikLower.includes('proyek') || topikLower.includes('produk') || topikLower.includes('kemasan')) {
    primaryModel = 'Project Based Learning (PjBL) terintegrasi metodologi industri Design Thinking & Design Sprint (Empathize, Define, Ideate, Prototype, Testing).';
    modelOptions = [
      {
        title: 'Design Thinking & PjBL Vokasi',
        text: 'PjBL dengan alur industri: Riset kebutuhan pasar/klien, pembuatan sketsa alternatif, purwarupa (prototyping), dan validasi pengguna.',
      },
      {
        title: 'Teaching Factory (TeFa)',
        text: 'Pembelajaran berbasis standar industri nyata dengan pembagian peran spesifik (Project Manager, Visual Designer, Quality Control).',
      },
      {
        title: 'Problem Based Learning Kontekstual',
        text: 'PBL berbasis brief pesanan nyata dari UMKM/mitra dunia usaha lokal untuk menyelesaikan masalah branding/fungsional.',
      },
    ];
  } else if (topikLower.includes('eksperimen') || topikLower.includes('praktikum') || topikLower.includes('bioteknologi') || topikLower.includes('kimia') || topikLower.includes('fisika')) {
    primaryModel = 'Project Based Learning (PjBL) terintegrasi pendekatan STEAM dengan praktikum terpadu, lembar kerja ilmiah, dan gelar karya sains.';
    modelOptions = [
      {
        title: 'STEAM PjBL (Sains & Teknologi)',
        text: 'PjBL berbasis STEAM: Perancangan eksperimen/produk olahan berbasis investigasi variabel kontrol dan pencatatan logbook ilmiah.',
      },
      {
        title: 'Guided Inquiry Laboratory',
        text: 'Inkuiri Terbimbing di laboratorium: Menguji hipotesis melalui pengamatan mikroskop/reaksi, analisis data, dan verifikasi teori.',
      },
      {
        title: 'Problem Based Learning (PBL)',
        text: 'PBL berbasis isu krisis lokal: Analisis dampak dan rancangan solusi teknologi tepat guna yang ramah lingkungan.',
      },
    ];
  } else if (topikLower.includes('teks') || topikLower.includes('puisi') || topikLower.includes('cerpen') || mapelLower.includes('bahasa')) {
    primaryModel = 'Genre-Based Approach (Pedagogi Genre) dipadukan dengan Think-Pair-Share, diskusi bedah teks autentik, dan pameran karya tulis (Gallery Walk).';
    modelOptions = [
      {
        title: 'Pedagogi Genre (BKP, MD, BTM, BM)',
        text: 'Membangun Konteks, Menelaah Model Teks (Dekonstruksi), Mengonstruksi Bersama, dan Mengonstruksi Teks Mandiri.',
      },
      {
        title: 'Project Based Learning (Penerbitan Karya)',
        text: 'PjBL menyusun majalah dinding / antologi karya teks kreatif peserta didik yang dipresentasikan ke audiens kelas.',
      },
      {
        title: 'Cooperative Jigsaw & Gallery Walk',
        text: 'Diskusi kelompok ahli untuk menelaah struktur teks, lalu berkeliling mengapresiasi dan memberikan umpan balik sticky notes.',
      },
    ];
  }

  const bskap = getBskapReference(mataPelajaran);

  const isPaudFase = jenjang === 'PAUD' || jenjang === 'TK A' || jenjang === 'TK B' || jenjang === 'KB' || !jenjang || (faseKelas && faseKelas.toLowerCase().includes('fondasi'));

  let calculatedCp = '';
  if (input.capaianPembelajaran && input.capaianPembelajaran.trim().length > 10) {
    calculatedCp = input.capaianPembelajaran;
  } else if (isPaudFase) {
    if (bskap.isAgama) {
      calculatedCp = `(Rujukan Resmi: ${bskap.fullName})\nAnak mengenal dan percaya kepada Allah SWT / Tuhan Yang Maha Esa sebagai Sang Maha Pencipta; mempraktikkan doa harian dan ibadah sederhana sesuai ajaran agamanya; membiasakan perilaku berakhlak mulia dengan merawat kebersihan tubuh serta menyayangi sesama ciptaan Tuhan; dan menunjukkan rasa syukur serta adab sopan santun kepada orang tua, guru, dan teman sebaya.`;
    } else {
      calculatedCp = `(Rujukan Resmi: ${bskap.fullName})\nAnak menunjukkan rasa ingin tahu melalui eksplorasi, penyelidikan, dan eksperimen menggunakan aneka bahan alam sekitar (loose parts); mengenali ciri-ciri makhluk hidup ciptaan Tuhan; mengenali dan mengelola emosi diri serta membangun hubungan sosial yang sehat; mengekspresikan imajinasi dan ide kreatif melalui karya seni rupa, gerak, dan musik; serta membiasakan perilaku hidup bersih, sehat, dan mandiri pada Fase Fondasi.`;
    }
  } else {
    calculatedCp = `(Rujukan Resmi: ${bskap.fullName})\nPada akhir ${fase}, peserta didik memiliki kemampuan menganalisis, mengaplikasikan konsep, dan mengevaluasi fenomena terkait ${topik} dalam konteks ${mataPelajaran || 'Mata Pelajaran'} secara kritis, mandiri, dan berkesadaran lingkungan untuk memecahkan permasalahan nyata dalam kehidupan sehari-hari.`;
  }

  let calculatedTp: string[] = [];
  if (input.tujuanPembelajaran && input.tujuanPembelajaran.length > 0) {
    calculatedTp = input.tujuanPembelajaran;
  } else if (isPaudFase) {
    calculatedTp = [
      `Anak mampu mengamati, meraba, dan mengeksplorasi ragam benda konkret terkait ${topik} menggunakan panca inderanya dengan penuh rasa takjub.`,
      `Anak mampu merancang dan menyusun karya kreatif menggunakan bahan lepasan (loose parts) atau media konkret secara mandiri dan imajinatif.`,
      `Anak mampu menceritakan kembali proses bermain dan karyanya (recalling) serta bekerja sama merapikan alat main kembali ke tempatnya dengan gembira.`
    ];
  } else {
    calculatedTp = [
      `Mengidentifikasi dan menganalisis prinsip-prinsip esensial ${topik} melalui pengamatan fenomena nyata dan penyelidikan terbimbing secara cermat.`,
      `Menerapkan konsep ${topik} untuk merumuskan dan memecahkan permasalahan kontekstual di lingkungan sekitar peserta didik secara bernalar kritis dan kreatif.`,
      `Merancang karya/solusi nyata sederhana yang relevan dengan ${topik} dan mengomunikasikannya secara kolaboratif dengan bahasa yang santun dan berkesadaran.`
    ];
  }

  const calculatedElemen = isPaudFase
    ? (bskap.isAgama 
        ? 'Nilai Agama dan Budi Pekerti (Fase Fondasi BSKAP 020/2026)' 
        : 'Nilai Agama & Budi Pekerti, Jati Diri, serta Dasar-dasar Literasi, Matematika, Sains, Teknologi, Rekayasa, dan Seni (STEAM - BSKAP 046/2025)')
    : 'Pemahaman Konsep & Keterampilan Proses Penyelidikan Kontekstual';

  const smartKearifan = generateSmartKearifanLokal({
    jenjang,
    mataPelajaran,
    materi,
    faseKelas,
    capaianPembelajaran: calculatedCp,
    tujuanPembelajaran: calculatedTp,
  });

  return {
    kompetensiAwal: {
      primary: primaryKompetensi,
      options: kompetensiOptions,
    },
    modelPembelajaran: {
      primary: primaryModel,
      options: modelOptions,
    },
    kearifanLokal: smartKearifan,
    cp: calculatedCp,
    elemen: calculatedElemen,
    tujuanPembelajaran: calculatedTp,
    bskapReference: bskap,
  };
}

export function generateCurriculumSuggestionOffline(input: {
  mataPelajaran: string;
  jenjang: string;
  faseKelas: string;
  materi: string;
}): CurriculumSuggestion {
  const smart = getSmartFieldReferences(input);
  const { materi, jenjang } = input;
  const topik = materi.trim() || 'Topik Pembelajaran';

  return {
    cp: smart.cp,
    elemen: smart.elemen,
    tujuanPembelajaran: smart.tujuanPembelajaran,
    kompetensiAwal: smart.kompetensiAwal.primary,
    modelPembelajaran: smart.modelPembelajaran.primary,
    kearifanLokal: smart.kearifanLokal.primary,
    pemahamanBermakna: `Mempelajari ${topik} bukan sekadar menghafal teori, melainkan membekali diri dengan cara berpikir kritis untuk memahami cara kerja dunia, mengapresiasi keagungan alam, dan berkontribusi nyata bagi kelestarian lingkungan serta kemajuan masyarakat.`,
    pertanyaanPemantik: [
      `Bagaimana peristiwa atau fenomena terkait ${topik} memengaruhi kehidupan kita dan orang-orang di sekitar kita setiap hari?`,
      `Apa yang dapat kita pelajari dari lingkungan sekitar untuk memecahkan masalah yang berkaitan dengan ${topik}?`
    ],
    fieldReferences: smart,
    bskapReference: smart.bskapReference,
  };
}

export async function generateFullModul(input: InitialDataInput): Promise<ModulAjar> {
  try {
    const res = await fetch('/api/generate-modul', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success && json.data?.identitas) {
        return {
          id: `modul-${Date.now()}`,
          createdAt: new Date().toISOString().split('T')[0],
          ...json.data,
          identitas: {
            ...input,
            ...json.data.identitas,
          }
        };
      }
    }
  } catch (err) {
    console.warn('API call failed, generating via expert curriculum generator:', err);
  }

  // Fallback high-fidelity Deep Learning 8-3-3-4 generation
  return generateFullModulOffline(input);
}

function generateFullModulOffline(input: InitialDataInput): ModulAjar {
  const mapel = input.mataPelajaran || 'Pendidikan Anak Usia Dini (PAUD - Fase Fondasi)';
  const topik = input.materi || 'Eksplorasi Keajaiban Lingkungan & Kreasi Loose Parts';
  const jenjang = input.jenjang || 'PAUD';
  const fase = input.faseKelas || 'Fase Fondasi (TK B / Usia 5-6 Tahun)';
  const sekolah = input.sekolah || 'TK Negeri Pembina Merdeka Belajar';
  const guru = input.namaGuru || 'Ibu Ratna Dewi, S.Pd. PAUD';
  const kearifan = input.kearifanLokal || 'Pekarangan kebun sekolah, aneka bahan lepasan (loose parts), dan tembang dolanan anak Nusantara';
  const model = input.modelPembelajaran || 'Model Sentra Bahan Alam dipadukan dengan Eksplorasi Sensori Loose Parts dan Storytelling';
  const modelSyntaxInfo = getModelSyntaxInfo(model);
  const bskap = getBskapReference(mapel);
  const isPaud = jenjang === 'PAUD' || jenjang === 'TK A' || jenjang === 'TK B' || jenjang === 'KB' || !jenjang || fase.toLowerCase().includes('fondasi');

  if (isPaud) {
    const cp = input.capaianPembelajaran && input.capaianPembelajaran.trim().length > 15
      ? input.capaianPembelajaran
      : bskap.isAgama
      ? `(Rujukan Resmi: ${bskap.fullName})\nAnak mengenal dan percaya kepada Allah SWT / Tuhan Yang Maha Esa; mempraktikkan doa harian dan ibadah sederhana sesuai ajaran agamanya; membiasakan perilaku berakhlak mulia dengan merawat kebersihan tubuh serta menyayangi sesama ciptaan Tuhan; dan menunjukkan rasa syukur serta adab sopan santun kepada orang tua, guru, dan teman sebaya.`
      : `(Rujukan Resmi: ${bskap.fullName})\nAnak menunjukkan rasa ingin tahu melalui eksplorasi, penyelidikan, dan eksperimen menggunakan aneka bahan alam sekitar (loose parts); mengenali ciri-ciri tanaman dan makhluk hidup ciptaan Tuhan; mengenali dan mengelola emosi diri serta membangun hubungan sosial yang sehat; mengekspresikan imajinasi dan ide kreatif melalui karya seni rupa, gerak, dan musik; serta membiasakan perilaku hidup bersih, sehat, dan mandiri pada Fase Fondasi.`;

    return {
      id: `modul-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      identitas: {
        ...input,
        sekolah,
        namaGuru: guru,
        mataPelajaran: mapel,
        jenjang: jenjang as any,
        materi: topik,
        faseKelas: fase,
        jumlahPertemuan: input.jumlahPertemuan || '1 Pertemuan',
        jumlahSiswa: input.jumlahSiswa || '18 anak didik (Kelompok B)',
        modelPembelajaran: model,
        kearifanLokal: kearifan,
        capaianPembelajaran: cp,
      },
      capaianPembelajaran: cp,
      tujuanPembelajaran: [
        `Anak mampu mengamati, meraba, dan mengelompokkan ragam bahan alam konkret terkait ${topik} melalui panca inderanya dengan penuh rasa takjub.`,
        `Anak mampu merancang dan menyusun karya kreatif menggunakan bahan lepasan (loose parts) kebun sekolah sesuai imajinasi dan daya ciptanya.`,
        `Anak mampu menceritakan kembali proses bermain dan karyanya (recalling) serta bekerja sama merapikan alat main kembali ke tempatnya dengan gembira.`
      ],
      kompetensiAwal: input.kompetensiAwal || `Anak telah terbiasa menyapa guru dan teman dengan senyuman ceria di pagi hari, mampu mengenali warna-warna dasar, dan senang mengeksplorasi benda konkret sensori.`,
      karakteristikSiswa: input.karakteristikSiswa || `Anak-anak sangat aktif, antusias bergerak dan mengeksplorasi lingkungan, memiliki rasa ingin tahu tinggi terhadap benda-benda alam sekitar, senang menyentuh tekstur, dan membutuhkan kegiatan bermain konkret berbasis sensori.`,
      kebutuhanBelajar: `Anak membutuhkan ragam pilihan main terbuka (open-ended play), stimulasi sensori motorik yang aman, dukungan pijakan guru (scaffolding) tanpa membatasi imajinasi, serta suasana belajar ceria yang kaya apresiasi.`,
      pemahamanBermakna: `Melalui eksplorasi ${topik}, anak mengenal kebesaran dan keindahan ciptaan Tuhan, melatih panca indera dan motorik halus secara alami, serta belajar hidup rukun, saling berbagi, dan menyayangi lingkungan sekitar.`,
      pertanyaanPemantik: [
        `Apa yang paling membuatmu penasaran saat melihat dan memegang benda-benda alam di kebun sekolah kita hari ini?`,
        `Kira-kira kreasi istimewa apa yang bisa kita ciptakan dari dedaunan dan ranting ini ya?`
      ],
      pertanyaanEsensial: [
        `Mengapa Tuhan menciptakan bermacam-macam bentuk tanaman dan benda yang ada di sekitar kita?`,
        `Bagaimana cara kita merawat sarana main dan menyayangi teman saat bermain bersama?`
      ],
      materiEsensial: [
        {
          subtopik: `Pengenalan Sensori & Ciri Konkret ${topik}`,
          uraian: `Mengenalkan warna, bentuk, tekstur (kasar-halus), dan aroma benda nyata di lingkungan sekolah melalui panca indera.`
        },
        {
          subtopik: `Eksplorasi Kreasi Bahan Lepasan (Loose Parts)`,
          uraian: `Menyusun, menggabungkan, atau menata benda alam lepas (daun, batu, ranting, biji) membentuk karya figuratif atau konstruksi imajinatif.`
        },
        {
          subtopik: `Pembiasaan Adab, Budi Pekerti & Tanggung Jawab`,
          uraian: `Membiasakan doa harian, sabar menunggu giliran, bekerja sama saat beres-beres mainan, dan menceritakan perasaan (recalling).`
        }
      ],
      dimensiProfilLulusan: [
        {
          dimensi: 'Keimanan dan Ketakwaan kepada Tuhan YME',
          keterkaitan: `Mengenal dan mengagumi ciptaan Tuhan melalui eksplorasi ${topik} serta melafalkan doa sebelum dan sesudah kegiatan.`,
          aktivitas: `Berdoa bersama di awal lingkaran pagi, bersyukur atas nikmat panca indera, dan merawat tanaman dengan lembut.`,
          indikator: `Menunjukkan sikap takjub pada ciptaan Tuhan dan mengikuti doa dengan tertib.`
        },
        {
          dimensi: 'Kemandirian',
          keterkaitan: `Mampu memilih ragam main invitasi yang diminati dan bertanggung jawab atas barang serta alat mainnya.`,
          aktivitas: `Memilih nampan main sendiri, memakai celemek main, dan merapikan mainan ke rak secara mandiri.`,
          indikator: `Menyelesaikan aktivitas bermain yang dipilih dan mandiri dalam mengelola peralatannya.`
        },
        {
          dimensi: 'Kreativitas',
          keterkaitan: `Mengekspresikan imajinasi orisinal melalui penggabungan berbagai bahan lepasan menjadi karya baru.`,
          aktivitas: `Merangkai loose parts membentuk pola atau bentuk unik sesuai daya ciptanya.`,
          indikator: `Menghasilkan karya yang orisinal dan bebas mengekspresikan ide imajinasinya.`
        },
        {
          dimensi: 'Bernalar Kritis (Sensori STEAM PAUD)',
          keterkaitan: `Mengeksplorasi sebab-akibat sederhana dan membandingkan sifat-sifat benda konkret.`,
          aktivitas: `Mengelompokkan bahan berdasarkan ukuran, warna, atau uji coba sederhana (apung-tenggelam).`,
          indikator: `Mampu mengutarakan penemuan sederhana dengan celoteh ceria.`
        },
        {
          dimensi: 'Gotong Royong & Sosial',
          keterkaitan: `Berbagi alat main, tidak berebut bahan, dan bersabar menunggu giliran antre.`,
          aktivitas: `Bermain bersama di zona invitasi dan saling membantu saat waktu beres-beres tiba.`,
          indikator: `Mau berbagi bahan main, bekerja sama, dan bersikap ramah kepada teman sebaya.`
        },
        {
          dimensi: 'Komunikasi',
          keterkaitan: `Menceritakan kembali pengalaman bermain dan ide karya yang dibuatnya kepada guru dan teman.`,
          aktivitas: `Sesi recalling melingkar (circle time penutup) menceritakan karya buatannya.`,
          indikator: `Mampu mengungkapkan kalimat sederhana dengan percaya diri dan ekspresi ceria.`
        }
      ],
      prinsipDeepLearning: {
        berkesadaran: {
          deskripsi: `Anak diajak hadir utuh dengan kesadaran penuh panca indera, menyadari perasaan bahagianya, dan menyadari bahwa ia adalah bagian dari alam ciptaan Tuhan.`,
          penerapan: `Guru membuka sesi dengan "Napas Balon Ceria" (menghirup napas tenang) dan mengajak anak memejamkan mata sejenak mendengarkan suara alam sekitar.`
        },
        bermakna: {
          deskripsi: `Belajar berakar langsung pada lingkungan nyata yang dipijak anak, menggunakan bahan konkret dan loose parts pekarangan sekolah.`,
          penerapan: `Anak mengamati dan memegang objek nyata secara langsung, bukan sekadar melihat gambar di buku atau lembar kerja kertas.`
        },
        menggembirakan: {
          deskripsi: `Suasana sentra penuh dengan tawa, nyanyian gerak tubuh, tepuk riang, kebebasan bereksplorasi tanpa takut dinilai salah, dan banjir apresiasi kasih sayang.`,
          penerapan: `Bernyanyi lagu gerak tubuh ceria, tepuk anak hebat, dan pemberian stiker bintang apresiasi kasih sayang untuk setiap anak.`
        }
      },
      pengalamanBelajar: {
        memahami: `Anak mengamati dan memegang objek nyata terkait ${topik}, menyimak buku cerita bergambar, dan mengidentifikasi ciri-ciri benda melalui panca indera.`,
        mengaplikasi: `Anak bebas memilih dan bermain di 4 pilihan ragam main invitasi loose parts, berkreasi menyusun bahan alam, dan bermain peran bersama teman.`,
        merefleksi: `Anak menceritakan kembali karya yang dibuatnya (recalling), merapikan alat main bersama, dan mengungkapkan rasa syukurnya.`
      },
      kerangkaPembelajaran: {
        praktikPedagogis: {
          pendekatan: `Pembelajaran Berpusat pada Anak (Child-Centered Play-Based Learning)`,
          model: `${model}`,
          sintakModel: modelSyntaxInfo.sintakList.map((s) => `Sintak ${s.nomor}: ${s.nama}`),
          metode: `Eksplorasi Sensori, Observasi Nyata, Bermain Loose Parts, Storytelling Buku Bergambar, Gerak dan Lagu Ceria`,
          strategi: `Penyediaan Pilihan Invitasi Main Bebas Terbuka (Open-Ended Materials) & Pendampingan Penuh Kasih Sayang`,
          diferensiasi: `Penyediaan bahan ukuran besar untuk anak yang memerlukan dukungan motorik dan tantangan pola bertingkat bagi anak yang sudah lincah.`
        },
        kemitraanPembelajaran: {
          peranGuru: `Fasilitator kasih sayang, perancang invitasi main menarik, pengamat penuh kesabaran, dan mitra bermain anak.`,
          peranSiswa: `Penjelajah cilik yang aktif berinisiatif, memilih mainan, mencoba ide baru, dan berekspresi tanpa rasa takut.`,
          temanSebaya: `Sahabat bermain yang saling berbagi bahan alam, bekerja sama, dan mengagumi karya teman.`,
          orangTuaMasyarakat: `Orang tua diajak membiasakan anak merawat tanaman di rumah dan mengirimkan foto kegiatan bermain bersama keluarga.`
        },
        lingkunganPembelajaran: {
          ruangKelas: `Sentra Pembelajaran dengan karpet bersih, nampan-nampan bambu tempat loose parts terorganisasi rapi, dan display foto karya anak setinggi mata anak.`,
          lingkunganSekitar: `Pekarangan kebun sekolah, area rumput, sudut tanaman toga, dan tempat cuci tangan berkeran rendah ramah anak.`,
          ruangDigital: `Audio pemutar musik instrumen kicau burung alam yang menenangkan selama kegiatan bermain eksplorasi.`
        },
        pemanfaatanDigital: {
          opsiOnline: `Dokumentasi foto berseri perkembangan anak oleh guru yang diunggah ke grup komunikasi portofolio orang tua murid.`,
          opsiOffline: `Lembar observasi ceklis perkembangan fisik, kartu foto berseri anak, serta nampan eksplorasi loose parts fisik.`
        }
      },
      skenarioPembelajaran: {
        pendahuluan: [
          {
            fase: '1. Penyambutan Ceria & SOP Kedatangan Mandiri',
            kegiatan: 'Guru menyambut anak di gerbang sekolah dengan senyuman ramah dan pelukan ceria. Anak membiasakan menaruh sepatu dan tas secara mandiri di loker masing-masing.',
            waktu: '15 menit'
          },
          {
            fase: '2. Lingkaran Pagi (Circle Time) & Doa Berkesadaran',
            kegiatan: 'Duduk melingkar di karpet bersama guru. Menyanyi lagu pembuka, berdoa sebelum belajar dengan khusyuk, dan memeriksa kehadiran teman lewat lagu ceria.',
            waktu: '15 menit'
          },
          {
            fase: '3. Gerak & Lagu Motorik Kasar Ceria',
            kegiatan: `Melakukan senam pohon/gerak lagu ceria bertema ${topik} untuk melatih koordinasi fisik dan kebugaran tubuh.`,
            waktu: '10 menit'
          },
          {
            fase: '4. Apersepsi Buku Cerita Bergambar & Kesepakatan Main',
            kegiatan: `Guru membacakan buku cerita bergambar bertema ${topik}, melontarkan pertanyaan pemantik, menjelaskan 4 pilihan ragam main invitasi, dan menyepakati aturan main bersama (sayang teman, berbagi mainan, dan beres-beres bersama).`,
            waktu: '15 menit'
          }
        ],
        inti: {
          tahap1Memahami: [
            {
              sintak: 'Pijakan Pengalaman Sebelum Main (Eksplorasi Sensori)',
              aktivitas: `Eksplorasi Sensori dan Pengenalan Bahan Nyata ${topik}`,
              peranGuru: 'Menghadirkan nampan bahan konkret/loose parts, mengajak anak meraba, mencium, dan mengamati dengan kaca pembesar plastik.',
              peranSiswa: 'Anak mengamati benda konkret secara langsung, merasakan tekstur kasar-halus, dan mencurahkan rasa ingin tahunya.',
              waktu: '20 menit'
            }
          ],
          tahap2Mengaplikasi: [
            {
              sintak: 'Pijakan Pengalaman Saat Main (Eksplorasi 4 Ragam Invitasi Main)',
              aktivitas: `Bermain Bebas Terbimbing pada 4 Pilihan Invitasi Main Loose Parts`,
              peranGuru: 'Berkeliling mengamati, memberikan pertanyaan pemantik terbuka (scaffolding), mencatat celoteh anak (catatan anekdot), dan mendokumentasikan foto berseri proses berkarya.',
              peranSiswa: `Anak bebas memilih dan bermain di 4 invitasi:\n- Invitasi 1: "Yuk Membuat Karya Kreasi ${topik} dari Bahan Lepasan!"\n- Invitasi 2: "Mengelompokkan Benda Berdasarkan Warna dan Ukuran"\n- Invitasi 3: "Mencap dan Mencetak Pola Tekstur Alami"\n- Invitasi 4: "Eksperimen Sensori & Eksplorasi Bentuk Bebas"`,
              waktu: '45 menit'
            }
          ],
          tahap3Merefleksi: [
            {
              sintak: 'Pemberesan Alat Main (Beres-Beres Bersama)',
              aktivitas: 'Lagu Beres-Beres dan Mengembalikan Mainan ke Rak Secara Rapi',
              peranGuru: 'Menyanyikan lagu beres-beres mainan dengan riang, memberi semangat dan pujian pada anak yang tekun mengembalikan bahan.',
              peranSiswa: 'Semua anak bersama-sama mengembalikan alat dan bahan main ke rak secara tertib dan mandiri.',
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
            kegiatan: 'Guru menyampaikan pesan moral budi pekerti hari ini, ditutup dengan doa pulang bersama, bernyanyi lagu ceria, dan salam perpisahan dengan senyuman hangat.',
            waktu: '10 menit'
          }
        ]
      },
      lkpd: {
        judul: `Panduan Invitasi Main & Lembar Dokumentasi Pengalaman Bermain Anak: Eksplorasi ${topik}`,
        tujuan: `1. Memberikan pijakan lingkungan main yang kaya stimulasi sensori bagi anak.\n2. Mendorong kebebasan berimajinasi dan berekspresi menggunakan bahan lepasan alam (loose parts).\n3. Mendokumentasikan ide, hasil karya, dan celoteh anak sebagai bukti ketercapaian Fase Fondasi.`,
        petunjuk: `1. Siapkan 4 ragam main invitasi dengan bahan konkret yang bersih dan aman.\n2. Berikan kebebasan kepada anak untuk memilih dan mengeksplorasi bahan tanpa dipaksa menghasilkan bentuk seragam.\n3. Guru mengamati, mengajukan pertanyaan pemantik saat anak bermain, dan mencatat celoteh anak pada lembar pengamatan.`,
        stimulusKonteks: `Bermain adalah cara anak usia dini belajar dan memahami dunianya. Melalui interaksi dengan ${topik} dan bahan lepasan pekarangan sekolah, anak mengasah rasa takjub, daya cipta, serta kepekaan motorik dan sosialnya secara utuh.`,
        pertanyaanPemantik: `Kira-kira apa yang bisa kita ciptakan dari bahan-bahan indah ini ya? Bagaimana caramu menyusunnya agar menjadi karya istimewa?`,
        langkahKegiatan: [
          `Anak mengamati aneka bahan lepasan yang disiapkan di nampan-nampan sentra.`,
          `Anak memilih zona invitasi main yang paling disukainya.`,
          `Anak mengeksplorasi tekstur, menyusun, mencocokkan, atau menggabungkan bahan menjadi bentuk imajinatifnya.`,
          `Guru mendengarkan celoteh anak dan mencatatnya di lembar observasi.`,
          `Guru memotret hasil karya anak untuk ditempel di lembar portofolio anak.`
        ],
        tabelPengamatan: {
          judul: `Matriks Dokumentasi Observasi Invitasi Main Anak Usia Dini`,
          kolom: [`No`, `Nama Anak`, `Pilihan Ragam Main`, `Celoteh & Perilaku Anak Saat Bermain`, `Capaian Fase Fondasi (BSB/BSH/MB/BB)`],
          barisContoh: [
            [`1`, `Ahmad Farhan (5 Thn)`, `Invitasi 1: Membuat Kreasi Bentuk Bebas`, `"Lihat bu, aku buat jembatan tinggi dari ranting dan batu!" — Mampu menyusun 6 elemen secara mandiri.`, `BSB (Berkembang Sangat Baik)`],
            [`2`, `Aisyah Putri (5 Thn)`, `Invitasi 2: Memilah Warna & Ukuran`, `"Ini yang besar untuk ibu, yang kecil untuk adek!" — Mengelompokkan benda dengan benar.`, `BSH (Berkembang Sesuai Harapan)`],
            [`3`, `Bima Arya (6 Thn)`, `Invitasi 3: Mencap Tekstur Alami`, `Mencap pola tekstur pada kertas dan tersenyum bangga memperlihatkan ke temannya.`, `BSB (Berkembang Sangat Baik)`],
            [`4`, `Chika Amanda (5 Thn)`, `Invitasi 4: Eksplorasi Sensori`, `Awalnya ragu menyentuh bahan bertekstur kasar, lalu mau mencoba setelah didampingi guru.`, `MB (Mulai Berkembang)`]
          ]
        },
        pertanyaanAnalisis: [
          `Bagaimana antusiasme dan fokus anak saat berinteraksi dengan bahan lepasan (loose parts) alam?`,
          `Konsep pramatematika atau literasi apa yang muncul secara alami dari celoteh anak saat bermain?`,
          `Dukungan pijakan (scaffolding) apa yang perlu diberikan kepada anak yang masih ragu mengeksplorasi bahan?`
        ],
        tugasPenerapan: `Ajak orang tua di rumah untuk melakukan kegiatan eksplorasi bersama anak di halaman rumah dan mencatat celoteh anak di buku penghubung keluarga.`,
        kesimpulan: `Bermain bahan lepasan alam memberikan kebebasan imajinasi tanpa batas bagi anak usia dini, memperkuat sensori motorik, serta menumbuhkan cinta mendalam pada keagungan ciptaan Sang Pencipta.`,
        refleksiSiswa: `Emotikon Perasaan Anak Hari Ini: [😊 Senang Sekali]  [😃 Bangga Berkarya]  [🤗 Ingin Main Lagi]\nKata Anak: "Besok aku mau main nampan batu lagi ya bu guru!"`
      },
      asesmen: {
        diagnostik: {
          tujuan: `Mengetahui kesiapan fisik-emosional anak di pagi hari, minat sensori terhadap materi ${topik}, dan adaptasi sosial.`,
          teknik: `Observasi saat kedatangan pagi, senyum salam, dan interaksi awal lingkaran pagi (circle time).`,
          instrumen: `Lembar ceklis kesiapan emosi dan respon panca indera anak.`,
          tindakLanjut: `Memberikan pelukan hangat dan pendampingan lembut bagi anak yang terlihat lesu atau cemas berpisah dengan orang tua.`
        },
        formatif: {
          tujuan: `Memantau perkembangan motorik halus, keaktifan berimajinasi dengan loose parts, kemampuan berbahasa (celoteh), dan interaksi sebaya.`,
          teknik: `Catatan Anekdot (peristiwa bermakna yang spontan), Lembar Ceklis Capaian Perkembangan, dan Foto Berseri (Documentation of Learning).`,
          instrumen: `Catatan anekdotal harian guru dan instrumen ceklis capaian Fase Fondasi (BSB, BSH, MB, BB).`,
          tindakLanjut: `Guru memberikan provokasi pertanyaan terbuka untuk memperdalam ide bermain anak tanpa menginterupsi kesenangannya.`
        },
        sumatif: {
          tujuan: `Menyimpulkan ketercapaian elemen Fase Fondasi (Nilai Agama & Budi Pekerti, Jati Diri, Dasar Literasi & STEAM) pada akhir topik.`,
          teknik: `Analisis Portofolio Karya Anak dan Narasi Laporan Capaian Perkembangan Anak Usia Dini.`,
          instrumen: `Rubrik penilaian portofolio dan lembar narasi deskriptif rapor PAUD Kurikulum Merdeka.`,
          kriteriaKetuntasan: `Anak mencapai Fase Fondasi secara optimal apabila minimal mencapai predikat "Berkembang Sesuai Harapan" (BSH) pada seluruh indikator esensial.`
        }
      },
      rubrikPenilaian: [
        {
          aspek: `Eksplorasi Sensori & Bahan Alam (STEAM PAUD)`,
          skor4: `BSB (Berkembang Sangat Baik): Mengamati, meraba, dan membedakan tekstur/ukuran aneka bahan alam secara mandiri dan antusias; menciptakan kombinasi kreasi unik dan mengajak teman mencobanya.`,
          skor3: `BSH (Berkembang Sesuai Harapan): Mampu mengamati dan menggunakan aneka bahan alam secara mandiri sesuai dengan ide yang direncanakannya.`,
          skor2: `MB (Mulai Berkembang): Mulai mau menyentuh dan mengeksplorasi bahan alam setelah diberikan dorongan atau contoh oleh guru.`,
          skor1: `BB (Belum Berkembang / Perlu Bimbingan): Belum mau menyentuh bahan alam dan masih memerlukan pendampingan intensif dari guru.`
        },
        {
          aspek: `Kreativitas & Daya Cipta Loose Parts`,
          skor4: `BSB (Berkembang Sangat Baik): Menghasilkan susunan loose parts yang sangat variatif, detail, dan orisinal; mampu menceritakan makna karyanya secara runtut dan ekspresif.`,
          skor3: `BSH (Berkembang Sesuai Harapan): Menghasilkan karya bentuk dari loose parts dan dapat menyebutkan nama bagian karyanya.`,
          skor2: `MB (Mulai Berkembang): Menyusun loose parts dalam pola sederhana dan membutuhkan sedikit pancingan ide dari guru.`,
          skor1: `BB (Belum Berkembang / Perlu Bimbingan): Hanya memegang atau mengacak bahan tanpa mencoba merangkai menjadi suatu bentuk karya.`
        },
        {
          aspek: `Kemandirian & Tanggung Jawab (Jati Diri)`,
          skor4: `BSB (Berkembang Sangat Baik): Memilih kegiatan main secara mandiri, tekun menyelesaikan hingga tuntas, dan berinisiatif mengajak teman membereskan mainan bersama.`,
          skor3: `BSH (Berkembang Sesuai Harapan): Mampu memilih mainan sendiri dan ikut serta merapikan peralatan main saat lagu beres-beres berbunyi.`,
          skor2: `MB (Mulai Berkembang): Masih berpindah-pindah mainan dengan cepat dan perlu diingatkan guru untuk merapikan mainan.`,
          skor1: `BB (Belum Berkembang / Perlu Bimbingan): Meninggalkan mainan berserakan dan enggan ikut merapikan meskipun telah diarahkan guru.`
        },
        {
          aspek: `Nilai Agama & Rasa Syukur Ciptaan Tuhan`,
          skor4: `BSB (Berkembang Sangat Baik): Spontan mengucap rasa syukur atas ciptaan Tuhan, berdoa khusyuk, dan memperlakukan alam/teman dengan sangat lembut penuh kasih sayang.`,
          skor3: `BSH (Berkembang Sesuai Harapan): Mengetahui bahwa alam semesta diciptakan oleh Tuhan dan mengikuti doa dengan tertib.`,
          skor2: `MB (Mulai Berkembang): Mulai mengikuti lafal doa harian dengan bimbingan dan diingatkan untuk bersikap santun.`,
          skor1: `BB (Belum Berkembang / Perlu Bimbingan): Belum menunjukkan perhatian saat berdoa dan masih memerlukan bimbingan intensif.`
        }
      ],
      diferensiasi: {
        konten: {
          bimbingan: `Disediakan bahan lepasan dengan ukuran besar dan tekstur halus yang mudah digenggam (daun lebar, balok kayu halus, spons).`,
          sedang: `Disediakan aneka loose parts standar yang bervariasi warna, bentuk, dan teksturnya.`,
          pengayaan: `Disediakan alat bantu eksplorasi tambahan seperti lup pembesar mini, penjepit kayu, timbangan sederhana, dan kartu tantangan pola.`
        },
        proses: {
          bimbingan: `Guru mendampingi secara langsung, memberikan sentuhan lembut, dan memodelkan cara menyusun bahan bersama.`,
          sedang: `Guru memberikan kebebasan anak bermain mandiri di zona invitasi sambil sesekali mengajukan pertanyaan pemantik.`,
          pengayaan: `Anak diberikan tantangan membuat cerita mini dari susunan loose parts dan menjadi pemimpin cilik di zonanya.`
        },
        produk: {
          bimbingan: `Karya susunan 2-3 elemen loose parts sederhana di atas nampan dengan dokumentasi catatan lisan guru.`,
          sedang: `Karya konstruksi loose parts utuh dengan celoteh anak yang terekam pada lembar portofolio.`,
          pengayaan: `Karya bertingkat lengkap dengan presentasi cerita lisan kepada teman-teman saat recalling.`
        }
      },
      remedialDanPengayaan: {
        kriteriaRemedial: `Anak yang masih mengalami hambatan sensori taktil atau kesulitan fokus merapikan mainan.`,
        programRemedial: `Bermain sensori bertahap menggunakan media yang lebih disukai anak, lalu perlahan diperkenalkan pada media baru dengan sentuhan kasih sayang.`,
        kriteriaPengayaan: `Anak yang memiliki kepekaan motorik dan daya cipta di atas rata-rata usia perkembangannya.`,
        programPengayaan: `Diberikan kesempatan membuat buku cerita bergambar mini dari foto karyanya yang dibantu cetak oleh guru untuk dipajang di pojok baca kelas.`
      },
      refleksi: {
        guru: [
          `Apakah ragam invitasi main yang disiapkan berhasil membangkitkan rasa takjub dan imajinasi seluruh anak?`,
          `Apakah penataan lingkungan main di sentra sudah cukup aman dan memberikan keleluasaan gerak anak?`,
          `Bagaimana saya dapat memperkaya dokumentasi celoteh anak untuk laporan perkembangan mingguan?`
        ],
        siswa: [
          `Bagian mana yang paling membuatmu senang dan tersenyum saat bermain tadi?`,
          `Bahan apa yang ingin kamu mainkan lagi besok pagi bersama teman-teman?`
        ]
      },
      produkAkhir: `Foto Berseri Karya Loose Parts Anak, Lembar Celoteh Dokumentasi Pembelajaran, dan Portofolio Hasil Karya Anak.`,
      sumberBelajar: [
        `Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 tentang Capaian Pembelajaran pada Pendidikan Anak Usia Dini (PAUD - Fase Fondasi).`,
        `Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 tentang Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti Fase Fondasi.`,
        `Buku Panduan Guru Capaian Pembelajaran Elemen Dasar Literasi dan STEAM PAUD - Kemendikbudristek RI.`,
        `Lingkungan sekolah, tanaman pekarangan, dan sumber bahan alam sekitar.`
      ]
    };
  }

  const intiSkenario = generateIntiSkenarioByModel(model, topik, kearifan);
  const cp = input.capaianPembelajaran || `Peserta didik mampu menganalisis, mengaplikasikan konsep, dan mengevaluasi fenomena terkait ${topik} dalam konteks ${mapel} pada ${fase} secara kritis, kolaboratif, dan solutif.`;

  return {
    id: `modul-${Date.now()}`,
    createdAt: new Date().toISOString().split('T')[0],
    identitas: {
      ...input,
      sekolah,
      namaGuru: guru,
      mataPelajaran: mapel,
      materi: topik,
      faseKelas: fase,
      jumlahPertemuan: input.jumlahPertemuan || '1 Pertemuan',
      modelPembelajaran: model,
      kearifanLokal: kearifan,
      capaianPembelajaran: cp,
    },
    capaianPembelajaran: cp,
    tujuanPembelajaran: [
      `Menganalisis prinsip-prinsip esensial dari ${topik} melalui pengamatan fenomena nyata dan penyelidikan terbimbing secara mendalam.`,
      `Mengaplikasikan konsep ${topik} untuk merumuskan dan menyelesaikan permasalahan kontekstual di lingkungan peserta didik secara bernalar kritis dan kreatif.`,
      `Mengevaluasi hasil karya/solusi yang dibuat serta merefleksikan proses belajar dan komitmen tindak lanjut secara berkesadaran.`
    ],
    kompetensiAwal: input.kompetensiAwal || `Peserta didik telah memiliki pengetahuan dasar tentang fenomena sekitar yang melandasi topik ${topik} dan mampu bekerja sama dalam kelompok.`,
    karakteristikSiswa: input.karakteristikSiswa || `Peserta didik memiliki gaya belajar bervariasi (visual, auditori, kinestetik) dan memerlukan stimulasi masalah kontekstual yang dekat dengan kehidupan mereka.`,
    kebutuhanBelajar: `Diferensiasi pembelajaran melalui variasi media dan pendampingan bertingkat (scaffolding) untuk mengakomodasi kelompok perintis, cakap, dan mahir.`,
    pemahamanBermakna: `Pemahaman terhadap ${topik} memberikan peserta didik kemampuan melihat keteraturan alam dan kehidupan, memecahkan masalah praktis, serta bertanggung jawab terhadap kelestarian lingkungan dan masyarakat sekitar.`,
    pertanyaanPemantik: [
      `Pernahkah kalian menjumpai peristiwa terkait ${topik} di sekitar rumah atau sekolah? Apa yang membuat hal itu terjadi?`,
      `Bagaimana jika kita menggunakan pemahaman tentang ${topik} ini untuk menyelesaikan masalah yang dihadapi masyarakat kita saat ini?`
    ],
    pertanyaanEsensial: [
      `Mengapa konsep ${topik} sangat penting dipelajari untuk masa depan kita dan keberlanjutan lingkungan hidup?`,
      `Bagaimana cara terbaik menerapkan ilmu tentang ${topik} agar bermanfaat bagi orang banyak?`
    ],
    materiEsensial: [
      {
        subtopik: `Konsep Dasar dan Karakteristik ${topik}`,
        uraian: `Membahas hakikat, definisi operasional, dan prinsip dasar yang mengatur ${topik} dalam kehidupan sehari-hari.`
      },
      {
        subtopik: `Mekanisme dan Hubungan Sebab-Akibat`,
        uraian: `Analisis cara kerja fenomena ${topik}, faktor-faktor yang memengaruhi, serta dampaknya terhadap lingkungan sekitar.`
      },
      {
        subtopik: `Aplikasi Nyata dan Solusi Kontekstual`,
        uraian: `Pemanfaatan prinsip ${topik} dalam rekayasa solusi, studi kasus lokal (${kearifan}), dan mitigasi risiko masalah di masa depan.`
      }
    ],
    dimensiProfilLulusan: [
      {
        dimensi: 'Keimanan dan Ketakwaan kepada Tuhan YME',
        keterkaitan: `Menginsafi kebesaran Sang Pencipta melalui keteraturan dan keajaiban ilmu ${mapel} pada topik ${topik}.`,
        aktivitas: `Berdoa dengan khusyuk di awal dan akhir kegiatan, serta merawat sarana belajar sebagai wujud rasa syukur.`,
        indikator: `Menunjukkan sikap takjub, bersyukur, dan menjaga amanah kebaikan selama kegiatan belajar.`
      },
      {
        dimensi: 'Penalaran Kritis',
        keterkaitan: `Menganalisis data, membedah fakta vs opini, dan mengevaluasi efektivitas solusi atas masalah ${topik}.`,
        aktivitas: `Memecahkan studi kasus kontekstual pada LKPD dan menguji argumen hipotesis secara ilmiah.`,
        indikator: `Mampu mengajukan pertanyaan mendalam, mengidentifikasi bias, dan menarik kesimpulan berdasarkan data yang valid.`
      },
      {
        dimensi: 'Kreativitas',
        keterkaitan: `Menghasilkan gagasan orisinal, model representasi visual, atau produk karya solusi ${topik}.`,
        aktivitas: `Merancang prototipe, poster infografis, atau skema alur pemecahan masalah dengan ide-ide baru.`,
        indikator: `Menghasilkan gagasan atau karya yang fleksibel, orisinal, serta memiliki nilai guna praktis.`
      },
      {
        dimensi: 'Kolaborasi',
        keterkaitan: `Bekerja sama dalam regu belajar untuk mengumpulkan informasi, berdiskusi, dan menuntaskan tugas bersama.`,
        aktivitas: `Pembagian peran aktif dalam diskusi kelompok, saling mendukung, dan mendengarkan pendapat rekan tim.`,
        indikator: `Menunjukkan sikap terbuka, saling menghargai, dan berkontribusi seimbang dalam kelompok.`
      },
      {
        dimensi: 'Kemandirian',
        keterkaitan: `Mengelola waktu belajar, memantau kemajuan diri, dan bertanggung jawab atas hasil kerja individu.`,
        aktivitas: `Menyelesaikan target tahapan belajar pada lembar kerja dan mengisi rubrik penilaian diri sendiri.`,
        indikator: `Mampu memprakarsai tindakan belajar tanpa bergantung sepenuhnya pada perintah guru.`
      },
      {
        dimensi: 'Komunikasi',
        keterkaitan: `Menyampaikan gagasan, hasil penyelidikan, dan tanggapan dengan bahasa yang santun, runtut, dan jelas.`,
        aktivitas: `Mempresentasikan hasil kerja kelompok dan memberikan umpan balik konstruktif pada kelompok lain.`,
        indikator: `Mengartikulasikan pemikiran secara sistematis dan menjadi pendengar yang empatik.`
      }
    ],
    prinsipDeepLearning: {
      berkesadaran: {
        deskripsi: `Peserta didik mengetahui dengan jelas tujuan belajar materi ${topik}, memahami mengapa materi ini esensial, menyadari proses berpikirnya, dan memantau kemajuan diri.`,
        penerapan: `Guru membuka kelas dengan transparan mengenai kriteria sukses (learning intentions & success criteria) dan memberi waktu hening untuk menetapkan target personal siswa.`
      },
      bermakna: {
        deskripsi: `Pembelajaran berakar pada kehidupan nyata, mengaitkan dengan pengalaman awal siswa, memanfaatkan konteks ${kearifan}, dan memberi ruang aplikasi langsung.`,
        penerapan: `Studi kasus dan contoh yang diangkat bersumber dari lingkungan terdekat yang dikenali peserta didik sehingga konsep ${topik} tidak abstrak melainkan hidup.`
      },
      menggembirakan: {
        deskripsi: `Menciptakan iklim kelas yang aman secara psikologis, memicu antusiasme, memberikan tantangan yang seimbang dengan kemampuan (zone of proximal development), dan kaya apresiasi.`,
        penerapan: `Menggunakan strategi interaktif, permainan edukatif, diskusi dinamis, dan budaya saling mengapresiasi keberanian mencoba tanpa takut salah.`
      }
    },
    pengalamanBelajar: {
      memahami: `Peserta didik mengamati fenomena pemantik, membaca materi stimulus, mengeksplorasi data awal, dan mengidentifikasi konsep esensial terkait ${topik}.`,
      mengaplikasi: `Peserta didik menerapkan konsep dalam memecahkan masalah kontekstual, melakukan penyelidikan/proyek bersama tim, dan menghasilkan karya nyata.`,
      merefleksi: `Peserta didik mengevaluasi proses berpikir, mengidentifikasi kekuatan dan kendala belajar, merumuskan kesimpulan bermakna, dan merencanakan tindak lanjut.`
    },
    kerangkaPembelajaran: {
      praktikPedagogis: {
        pendekatan: `Pembelajaran Berpusat pada Peserta Didik (Student-Centered) & Deep Learning`,
        model: `${model}`,
        sintakModel: modelSyntaxInfo.sintakList.map((s) => `Sintak ${s.nomor}: ${s.nama}`),
        metode: `Eksplorasi Terbimbing, Diskusi Kolaboratif, Pemecahan Masalah, Presentasi Interaktif`,
        strategi: `Scaffolding bertingkat dan diferensiasi berbasis kesiapan belajar`,
        diferensiasi: `Penyediaan bantuan bertahap bagi kelompok perintis dan pemberian tantangan analisis tingkat tinggi bagi kelompok mahir.`
      },
      kemitraanPembelajaran: {
        peranGuru: `Fasilitator, perancang pengalaman belajar, pemantik nalar kritis, dan mitra refleksi.`,
        peranSiswa: `Pelaku utama belajar yang aktif mengeksplorasi, berkreasi, dan mengambil keputusan.`,
        temanSebaya: `Mitra kolaborasi dan pemberi umpan balik konstruktif dalam suasana saling mendukung.`,
        orangTuaMasyarakat: `Mitra penguat pengalaman kontekstual di rumah dan lingkungan masyarakat sekitar (${kearifan}).`
      },
      lingkunganPembelajaran: {
        ruangKelas: `Pengaturan meja fleksibel untuk memfasilitasi kerja kelompok, diskusi, dan pameran karya.`,
        lingkunganSekitar: `Pemanfaatan lingkungan sekolah dan masyarakat sebagai laboratorium nyata observasi fenomena.`,
        ruangDigital: `Pemanfaatan sumber belajar digital dan media interaktif untuk memperluas cakrawala berpikir.`
      },
      pemanfaatanDigital: {
        opsiOnline: `Pencarian referensi digital, presentasi multimedia interaktif, dan kuis refleksi daring.`,
        opsiOffline: `Pemanfaatan LKPD cetak kontekstual, media konkret manipulatif, kartu konsep, dan papan pajang karya fisik.`
      }
    },
    skenarioPembelajaran: {
      pendahuluan: [
        {
          fase: `1. Pembukaan & Pemeriksaan Kesiapan Belajar (Berkesadaran)`,
          kegiatan: `Guru menyapa peserta didik dengan hangat, memandu doa bersama, memeriksa kehadiran, dan mengajak siswa melakukan latihan fokus sejenak (teknik pernapasan sadar).`,
          waktu: `5 menit`
        },
        {
          fase: `2. Apersepsi & Pertanyaan Pemantik (Bermakna)`,
          kegiatan: `Guru mengaitkan materi sebelumnya dengan topik hari ini (${topik}) melalui penyajian gambar/video/cerita fenomena kontekstual di lingkungan sekitar. Guru melontarkan pertanyaan pemantik untuk memicu rasa ingin tahu.`,
          waktu: `7 menit`
        },
        {
          fase: `3. Penyampaian Tujuan & Motivasi (Menggembirakan)`,
          kegiatan: `Guru menyampaikan tujuan pembelajaran, manfaat mempelajari ${topik} dalam kehidupan nyata, garis besar alur kegiatan, dan membentuk kelompok kolaboratif secara adil.`,
          waktu: `3 menit`
        }
      ],
      inti: intiSkenario,
      penutup: [
        {
          kegiatan: `Guru bersama siswa menyimpulkan keseluruhan pembelajaran hari ini. Guru memberikan apresiasi menyeluruh atas keterlibatan aktif peserta didik, menyampaikan rencana materi pertemuan berikutnya, serta menutup dengan doa dan salam.`,
          waktu: `5 menit`
        }
      ]
    },
    lkpd: {
      judul: `Lembar Kerja Peserta Didik (LKPD): Eksplorasi Mendalam ${topik}`,
      tujuan: `1. Menemukan konsep esensial dan pola interaksi dalam materi ${topik}.\n2. Menerapkan konsep untuk memecahkan studi kasus kontekstual di lingkungan sekitar.\n3. Menyusun kesimpulan dan refleksi diri mengenai proses belajar yang telah dialami.`,
      petunjuk: `1. Bacalah basmalah / berdoalah sebelum memulai kegiatan.\n2. Tuliskan identitas anggota kelompokmu pada kolom yang disediakan.\n3. Cermati stimulus konteks dan diskusikan setiap langkah kerja bersama rekan kelompokmu.\n4. Tanyakan kepada guru apabila terdapat instruksi yang belum jelas.`,
      stimulusKonteks: `Dalam kehidupan sehari-hari, kita tidak pernah lepas dari pengaruh ${topik}. Banyak tantangan di sekitar kita (${kearifan}) yang membutuhkan pemahaman mendalam tentang prinsip-prinsip ini agar tercipta solusi yang berkelanjutan dan bermanfaat bagi masyarakat luas.`,
      pertanyaanPemantik: `Bagaimana kita dapat membuktikan bahwa konsep ${topik} benar-benar bekerja dan memberi dampak nyata di lingkungan tempat tinggal kita?`,
      langkahKegiatan: [
        `Diskusikan bersama kelompok mengenai fenomena ${topik} yang tertera pada stimulus di atas.`,
        `Identifikasi minimal 3 fakta penting dan 2 pertanyaan mendasar yang muncul dalam pikiran kalian.`,
        `Kumpulkan data dan informasi pendukung melalui bahan bacaan atau pengamatan lingkungan.`,
        `Tuangkan hasil temuan kalian ke dalam Tabel Analisis di bawah ini.`,
        `Diskusikan solusi atas pertanyaan analisis kasus dan rumuskan simpulan bersama.`
      ],
      tabelPengamatan: {
        judul: `Tabel Analisis dan Data Pengamatan ${topik}`,
        kolom: [`No`, `Aspek yang Diamati`, `Kondisi Fakta Nyata`, `Faktor Penyebab`, `Dampak yang Ditimbulkan`],
        barisContoh: [
          [`1`, `Kondisi Eksisting di Lingkungan`, `Terjadi ketidaksesuaian dengan prinsip ideal`, `Kurangnya kesadaran dan pemahaman konsep`, `Efisiensi menurun dan terjadi pemborosan`],
          [`2`, `Upaya Perbaikan yang Pernah Dilakukan`, `Bersifat sementara dan belum menyentuh akar masalah`, `Pendekatan parsial tanpa kolaborasi bersama`, `Masalah berulang kembali di kemudian hari`],
          [`3`, `Peluang Solusi Berkelanjutan`, `Menerapkan konsep ${topik} secara utuh`, `Inisiatif kelompok pemuda/pelajar`, `Tercipta lingkungan yang lebih sehat dan harmonis`]
        ]
      },
      pertanyaanAnalisis: [
        `Berdasarkan data pada tabel di atas, apa hubungan mendasar antara faktor penyebab dengan dampak yang terjadi? Jelaskan secara logis!`,
        `Bagaimana konsep esensial dari ${topik} dapat dijadikan landasan ilmiah untuk merancang solusi yang efektif atas masalah tersebut?`,
        `Tantangan apa saja yang mungkin dihadapi saat menerapkan solusi tersebut di masyarakat nyata, dan bagaimana cara kalian mengatasinya?`
      ],
      tugasPenerapan: `Rancanglah sebuah rencana aksi nyata atau produk sederhana (skema alur / infografis / prototipe karya) yang mendemonstrasikan penerapan ${topik} sebagai solusi di lingkungan sekolah atau tempat tinggal kalian!`,
      kesimpulan: `Tuliskan simpulan kelompokmu mengenai prinsip utama yang kalian pelajari hari ini dan bagaimana ilmu ini mengubah cara pandang kalian terhadap lingkungan sekitar:`,
      refleksiSiswa: `Lingkari pilihan perasaanmu: [ Sangat Puas & Paham ]  [ Cukup Paham ]  [ Masih Bingung ]\nSatu hal paling berharga yang kupelajari hari ini adalah: ................................................................`
    },
    asesmen: {
      diagnostik: {
        tujuan: `Mengidentifikasi kompetensi awal, kesiapan belajar (readiness), dan minat peserta didik terhadap materi ${topik}.`,
        teknik: `Pertanyaan apersepsi lisan, survei minat singkat, atau kuis pemetaan konsep awal.`,
        instrumen: `Daftar 3 pertanyaan pemantik esensial dan lembar observasi respons awal siswa.`,
        tindakLanjut: `Pengelompokan heterogen fleksibel dan penyiapan bahan belajar bertingkat sesuai kesiapan siswa.`
      },
      formatif: {
        tujuan: `Memantau perkembangan penalaran kritis, kolaborasi, dan pemahaman konsep selama proses pembelajaran berlangsung.`,
        teknik: `Observasi kinerja diskusi kelompok, penilaian lembar kerja (LKPD), dan umpan balik lisan langsung.`,
        instrumen: `Lembar ceklis observasi dimensi profil lulusan dan catatan anekdotal guru selama pendampingan.`,
        tindakLanjut: `Pemberian bimbingan langsung (scaffolding) bagi kelompok yang mengalami kesulitan dan pemberian pertanyaan pengayaan bagi kelompok yang bergerak cepat.`
      },
      sumatif: {
        tujuan: `Mengukur pencapaian Tujuan Pembelajaran secara komprehensif pada akhir siklus pembelajaran.`,
        teknik: `Penilaian Produk / Portofolio (Hasil LKPD & Solusi Karya) serta Tes Tertulis Penalaran Kontekstual.`,
        instrumen: `Rubrik penilaian autentik produk skala 1-4 dan soal uraian berbasis masalah nyata (HOTS).`,
        kriteriaKetuntasan: `Peserta didik dinyatakan mencapai KKTP apabila mencapai minimal kategori "Cakap" (Skor 3 dari skala 1-4) pada seluruh kriteria ketercapaian esensial.`
      }
    },
    rubrikPenilaian: [
      {
        aspek: `Pemahaman Konsep & Penalaran Kritis`,
        skor4: `Sangat Mahir: Menguasai konsep ${topik} secara mendalam, mampu mengidentifikasi akar masalah dengan tepat, menganalisis data secara tajam, dan menyajikan argumen berbasis bukti yang kokoh.`,
        skor3: `Cakap: Memahami konsep ${topik} dengan baik, mampu menganalisis hubungan sebab-akibat, dan menyusun argumen yang logis.`,
        skor2: `Berkembang: Memahami konsep dasar namun analisis sebab-akibat masih sederhana dan membutuhkan arahan untuk menghubungkan konsep dengan fakta.`,
        skor1: `Perlu Bimbingan: Mengalami kesulitan dalam menjelaskan konsep esensial dan belum mampu menganalisis masalah tanpa bimbingan intensif.`
      },
      {
        aspek: `Kolaborasi & Partisipasi Aktif`,
        skor4: `Sangat Mahir: Menunjukkan kepemimpinan positif, membagi peran secara adil, mendengarkan aktif setiap pendapat anggota, dan proaktif membantu menyelesaikan tugas tim.`,
        skor3: `Cakap: Terlibat aktif dalam kerja kelompok, menjalankan peran dengan penuh tanggung jawab, dan bekerja sama dengan baik bersama rekan kerja.`,
        skor2: `Berkembang: Ikut serta dalam diskusi kelompok namun partisipasinya masih pasif atau membutuhkan dorongan sesekali dari rekan atau guru.`,
        skor1: `Perlu Bimbingan: Cenderung pasif, menarik diri dari kerja kelompok, atau mendominasi tanpa menghargai pendapat orang lain.`
      },
      {
        aspek: `Kreativitas & Kualitas Solusi Karya`,
        skor4: `Sangat Mahir: Solusi atau karya yang dihasilkan sangat orisinal, relevan secara kontekstual, estetis, serta memiliki kelayakan implementasi yang tinggi.`,
        skor3: `Cakap: Menghasilkan solusi atau karya yang runtut, memenuhi seluruh kriteria fungsional, dan dapat diimplementasikan dengan baik.`,
        skor2: `Berkembang: Karya yang dihasilkan cukup baik namun masih meniru contoh yang sudah ada dan kurang memperlihatkan eksplorasi gagasan baru.`,
        skor1: `Perlu Bimbingan: Karya belum selesai sesuai batas waktu dan belum memenuhi kriteria fungsional dasar yang diharapkan.`
      },
      {
        aspek: `Komunikasi Ilmiah & Presentasi`,
        skor4: `Sangat Mahir: Menyampaikan gagasan dengan bahasa yang sangat runtut, santun, artikulatif, menggunakan media visual yang efektif, serta sigap menanggapi pertanyaan.`,
        skor3: `Cakap: Menyampaikan presentasi dengan jelas, terstruktur, percaya diri, dan mampu menjawab pertanyaan inti dari audiens.`,
        skor2: `Berkembang: Menyampaikan materi namun masih terpaku membaca teks presentasi dan kurang melakukan kontak mata dengan audiens.`,
        skor1: `Perlu Bimbingan: Mengalami kesulitan dalam mengartikulasikan ide dan belum siap melakukan presentasi di hadapan kelas.`
      }
    ],
    diferensiasi: {
      konten: {
        bimbingan: `Disediakan ringkasan materi bergambar dengan panduan kosakata kunci dan diagram alur terarah.`,
        sedang: `Disediakan bahan ajar kontekstual standar dengan studi kasus lingkungan sekitar.`,
        pengayaan: `Disediakan artikel ilmiah populer atau studi kasus kompleks multi-variabel untuk ditelaah secara kritis.`
      },
      proses: {
        bimbingan: `Guru memberikan pendampingan intensif (scaffolding bertahap) dan pemodelan langkah kerja secara langsung.`,
        sedang: `Peserta didik bekerja dalam kelompok kolaboratif dengan pemantauan berkala dan konsultasi mandiri saat menghadapi kendala.`,
        pengayaan: `Peserta didik memimpin penyelidikan inkuiri secara independen dan dapat berperan sebagai tutor sebaya bagi kelompok lain.`
      },
      produk: {
        bimbingan: `Menyajikan hasil analisis dalam bentuk format tabel isian terstruktur atau diagram visual sederhana.`,
        sedang: `Menyajikan laporan hasil telaah dalam bentuk poster infografis atau ringkasan presentasi digital.`,
        pengayaan: `Menyajikan proposal solusi komprehensif, video edukasi kontekstual, atau prototipe karya nyata yang siap dipamerkan.`
      }
    },
    remedialDanPengayaan: {
      kriteriaRemedial: `Peserta didik yang belum mencapai batas minimal predikat Cakap (Skor < 3) pada indikator pemahaman konsep inti ${topik}.`,
      programRemedial: `Bimbingan khusus secara individual atau kelompok kecil melalui penjelasan ulang konsep dengan analogi konkret, dilanjutkan dengan pengerjaan latihan terbimbing hingga konsep esensial terkuasai.`,
      kriteriaPengayaan: `Peserta didik yang telah mencapai predikat Sangat Mahir (Skor 4) pada seluruh indikator ketercapaian tujuan pembelajaran.`,
      programPengayaan: `Pemberian proyek eksploratif lanjutan, misalnya merancang modul aksi advokasi lingkungan, menguji hipotesis baru, atau mendalami aplikasi teknologi modern terkait ${topik}.`
    },
    refleksi: {
      guru: [
        `Apakah skenario pembelajaran yang dirancang berhasil membangkitkan rasa ingin tahu dan keterlibatan aktif seluruh peserta didik?`,
        `Bagian mana dari aktivitas yang paling menantang bagi siswa, dan penyesuaian apa yang perlu saya lakukan pada pertemuan berikutnya?`,
        `Apakah diferensiasi pembelajaran yang diterapkan sudah tepat sasaran dalam memfasilitasi keberagaman kebutuhan belajar siswa?`
      ],
      siswa: [
        `Apa konsep atau wawasan paling bermakna yang saya temukan dan pahami dari pembelajaran hari ini?`,
        `Pada bagian mana saya merasa paling tertantang, dan strategi apa yang saya gunakan untuk mengatasi kesulitan tersebut?`,
        `Bagaimana saya akan menerapkan pemahaman baru ini dalam tindakan nyata di kehidupan sehari-hari?`
      ]
    },
    produkAkhir: `Laporan Hasil Penyelidikan Kontekstual ${topik}, Portofolio Lembar Kerja Peserta Didik (LKPD), serta Karya/Prototipe Solusi Berkelanjutan.`,
    sumberBelajar: [
      `Buku Panduan Guru & Siswa ${mapel} ${fase} Kemendikbudristek Kurikulum Merdeka.`,
      `Lingkungan sekolah dan sumber kearifan lokal sekitar (${kearifan}).`,
      `Bahan bacaan digital dan video pembelajaran interaktif terkait materi ${topik}.`,
      `Alat dan bahan kontekstual yang tersedia di satuan pendidikan.`
    ]
  };
}
