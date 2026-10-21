import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
// Support dynamic port provided by Railway, Cloud Run, Heroku, etc.
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json({ limit: '10mb' }));

// Health check endpoints for Railway / cloud monitoring
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

// Server-side Gemini initialization with required user-agent
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

// API Route: Suggest Capaian Pembelajaran (CP) & Tujuan Pembelajaran (TP)
app.post('/api/suggest-cp-tp', async (req, res) => {
  try {
    const { mataPelajaran, jenjang, faseKelas, materi, capaianPembelajaran } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(200).json({
        success: false,
        fallback: true,
        message: 'No active API key found; falling back to offline curated knowledge base.',
      });
    }

    const mapelLower = (mataPelajaran || '').toLowerCase();
    const isAgama = 
      mapelLower.includes('agama') || 
      mapelLower.includes('pai') || 
      mapelLower.includes('islam') || 
      mapelLower.includes('kristen') || 
      mapelLower.includes('katolik') || 
      mapelLower.includes('hindu') || 
      mapelLower.includes('buddha') || 
      mapelLower.includes('khonghucu') || 
      mapelLower.includes('budi pekerti') ||
      mapelLower.includes('kepercayaan');
    
    const bskapRegulationText = isAgama
      ? 'Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 (Standar Capaian Pembelajaran Pendidikan Agama dan Budi Pekerti Fase Fondasi PAUD dan Dasar-Menengah)'
      : 'Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 (Standar Capaian Pembelajaran pada Pendidikan Anak Usia Dini / PAUD Fase Fondasi, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah)';

    const prompt = `Anda adalah ahli kurikulum PAUD Kemendikbudristek Indonesia dan pengembang Kurikulum Merdeka Pendidikan Anak Usia Dini (Fase Fondasi).
Tolong rumuskan referensi otomatis yang selaras dengan Kurikulum Merdeka PAUD dan Pembelajaran Mendalam (Deep Learning: Mindful, Meaningful, Joyful) untuk topik berikut:
- Sasaran Jenjang: ${jenjang || 'PAUD'} (Fase Fondasi)
- Satuan: PAUD / TK / KB / RA
- Fase / Usia: ${faseKelas || 'Fase Fondasi (TK B / Usia 5-6 Tahun)'}
- Mata Pelajaran / Elemen: ${mataPelajaran || 'Pendidikan Anak Usia Dini (PAUD - Fase Fondasi)'}
- Topik / Materi: ${materi || 'Eksplorasi Lingkungan & Bahan Alam'}
${capaianPembelajaran ? `- Capaian Pembelajaran Guru: ${capaianPembelajaran}` : ''}

ATURAN STANDAR KOMPETENSI RESMI BSKAP KEMENDIKBUDRISTEK:
Capaian Pembelajaran (CP) WAJIB merujuk pada:
- ${bskapRegulationText}.
Di Fase Fondasi (PAUD / TK), Capaian Pembelajaran berakar pada:
${isAgama 
  ? '1. Elemen Nilai Agama dan Budi Pekerti (BSKAP 020/2026): Anak mengenal dan percaya kepada Tuhan YME / Allah SWT, mempraktikkan ibadah harian & doa makan/tidur, menyayangi ciptaan Tuhan, membiasakan adab sopan santun, dan saling menghargai.'
  : '1. Elemen Nilai Agama dan Budi Pekerti (BSKAP 046/2025)\n2. Elemen Jati Diri (BSKAP 046/2025): Regulasi emosi, interaksi sosial sehat, antre sabar, kebersihan dan keselamatan diri, motorik kasar-halus.\n3. Elemen Dasar-dasar Literasi, Matematika, Sains, Teknologi, Rekayasa, dan Seni (STEAM - BSKAP 046/2025): Rasa ingin tahu, eksplorasi sensori dan loose parts alam, pramatematika berhitung 1-5 & menimbang, prabaca-tulis bermakna, karya seni imajinatif.'
}
Cantumkan klausul rujukan resmi BSKAP ini secara eksplisit pada awal teks Capaian Pembelajaran (CP).

Secara khusus, buatkan:
1. Capaian Pembelajaran (CP) resmi/rekomendasi sesuai regulasi resmi di atas untuk Fase Fondasi PAUD
2. 3 Tujuan Pembelajaran (TP) operasional ramah anak usia dini (Anak mampu mengamati..., Anak mampu merancang karya loose parts..., Anak mampu menceritakan kembali / recalling...)
3. Kompetensi Awal: Pengalaman keseharian anak usia dini (kebiasaan menyapa ceria, motorik kasar-halus meraba tekstur, menyimak cerita bergambar)
4. Model & Metode Pembelajaran (Data ke-15): Rekomendasi model khas PAUD (Model Sentra Bahan Alam/Balok/Main Peran/Imtaq 4 Pijakan, Project-Based Play Anak Usia Dini, Inkuiri Sensori Loose Parts, atau Sosiodramatik Main Peran Makro) dipadukan dengan metode aktif ramah anak (eksplorasi panca indera, storytelling buku bergambar, gerak dan lagu ceria, praktik adab langsung, dan recalling reflektif).
5. Konteks Lingkungan & Kearifan Lokal (Data ke-16): WAJIB diselaraskan dengan dunia anak usia dini: pemanfaatan bahan lepasan alam pekarangan sekolah (daun kering, ranting, batu kali, pelepah pisang, biji-bijian, air, pasir), dolanan tradisional nusantara (Cublak-cublak suweng, jamuran, ular naga), dongeng fabel lokal, pasar rakyat, dan pembiasaan budaya gotong royong serta antre sabar.
6. Pemahaman Bermakna & Pertanyaan Pemantik yang memicu rasa takjub dan imajinasi anak.

Format respons dalam format JSON valid dengan struktur:
{
  "cp": "Teks Capaian Pembelajaran yang lengkap diawali rujukan regulasi resmi BSKAP...",
  "elemen": "Elemen Capaian PAUD yang relevan (misal: Nilai Agama & Budi Pekerti / Jati Diri / Dasar Literasi & STEAM)",
  "tujuanPembelajaran": [
    "TP 1...",
    "TP 2...",
    "TP 3..."
  ],
  "kompetensiAwal": "Deskripsi kompetensi prasyarat spesifik anak usia dini...",
  "modelPembelajaran": "Rekomendasi model sentra/bermain dan metode ramah anak...",
  "kearifanLokal": "Deskripsi kontekstual kearifan lokal PAUD (loose parts, dolanan anak, kebun sekolah, budaya santun)...",
  "pemahamanBermakna": "Inti pemahaman bermakna yang dekat dengan dunia anak...",
  "pertanyaanPemantik": [
    "Pertanyaan 1...",
    "Pertanyaan 2..."
  ]
}
HANYA kembalikan JSON murni tanpa markdown wrapper.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ success: true, data: parsed });
  } catch (error: any) {
    console.error('Error in /api/suggest-cp-tp:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// API Route: Generate Full Modul Ajar Deep Learning (8-3-3-4)
app.post('/api/generate-modul', async (req, res) => {
  try {
    const data = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(200).json({
        success: false,
        fallback: true,
        message: 'No active API key found; will use built-in expert Deep Learning generator.',
      });
    }

    const mapelLower = (data.mataPelajaran || '').toLowerCase();
    const isAgama = 
      mapelLower.includes('agama') || 
      mapelLower.includes('pai') || 
      mapelLower.includes('islam') || 
      mapelLower.includes('kristen') || 
      mapelLower.includes('katolik') || 
      mapelLower.includes('hindu') || 
      mapelLower.includes('buddha') || 
      mapelLower.includes('khonghucu') || 
      mapelLower.includes('budi pekerti') ||
      mapelLower.includes('kepercayaan') ||
      mapelLower.includes('imtaq');
    
    const bskapRegulationText = isAgama
      ? 'Keputusan Kepala BSKAP Kemendikbudristek Nomor 020 Tahun 2026 (Pendidikan Agama dan Budi Pekerti Fase Fondasi PAUD)'
      : 'Keputusan Kepala BSKAP Kemendikbudristek Nomor 046 Tahun 2025 (Pendidikan Anak Usia Dini / PAUD Fase Fondasi)';

    const systemInstruction = `Anda adalah ahli kurikulum nasional PAUD (Pendidikan Anak Usia Dini / TK / KB / RA) Kemendikbudristek RI dan master trainer Pembelajaran Mendalam (Deep Learning) Fase Fondasi.
Tugas Anda adalah merancang Rencana Pembelajaran / Modul Ajar PAUD yang SANGAT LENGKAP, OTENTIK, RAMAH ANAK, MENGGEMBIRAKAN, dan SIAP DIGUNAKAN DI KELAS PAUD dengan KERANGKA 8-3-3-4:
1. 8 Dimensi Profil Lulusan Pelajar (Keimanan & Ketakwaan Tuhan YME, Kemandirian, Kreativitas, Bernalar Kritis, Gotong Royong / Sosial, Komunikasi, Kesehatan, Kewargaan).
2. 3 Prinsip Deep Learning PAUD:
   - Berkesadaran (Mindful): Hadir utuh, kesadaran panca indera, napas balon ceria, hening sejenak saat circle time.
   - Bermakna (Meaningful): Benda konkret di kebun/halaman sekolah, bahan lepasan (loose parts: daun, batu, ranting, pasir, air), bukan drill lembar kerja kertas.
   - Menggembirakan (Joyful): Bermain adalah hakiki belajar, nyanyian gerak lagu, tepuk riang, kebebasan berekspresi tanpa takut salah, dan banjir apresiasi kasih sayang.
3. 3 Pengalaman Belajar PAUD (Memahami -> Mengaplikasi -> Merefleksi):
   - Memahami: Eksplorasi sensori objek nyata, menyimak buku cerita bergambar, mengamati tanaman/lingkungan.
   - Mengaplikasi: Bermain mandiri & kelompok di 3-4 ragam main invitasi loose parts / bermain peran makro.
   - Merefleksi: Recalling menceritakan karya dan perasaan, saling membantu beres-beres alat main.
4. 4 Kerangka Pembelajaran (Praktik Pedagogis Ramah Anak 4 Pijakan Sentra, Kemitraan Orang Tua & Komunitas, Lingkungan Aman Kaya Stimulasi Sensori, Pemanfaatan Media Konkret Loose Parts).

ATURAN SKENARIO PEMBELAJARAN PAUD:
- Pembukaan: Penyambutan ceria di gerbang, Lingkaran Pagi (Circle Time) & doa khusyuk, Gerak lagu motorik kasar, Apersepsi cerita buku bergambar & kesepakatan main.
- Inti: Pijakan sebelum main (pengenalan bahan konkret), Pijakan saat main (anak memilih 3-4 ragam main invitasi loose parts, scaffolding guru, catatan anekdot & dokumentasi foto berseri), Pijakan setelah main (lagu beres-beres bersama).
- Penutup: SOP cuci tangan 6 langkah & makan bekal bersama, Recalling anak menceritakan karya dan perasaan, Pesan budi pekerti & doa pulang.

ATURAN LKPD & ASESMEN PAUD:
- LKPD disajikan sebagai: "Panduan Invitasi Main & Lembar Dokumentasi Pengalaman Bermain Anak (Loose Parts & Eksplorasi Sensori)".
- Asesmen menggunakan 3 teknik resmi PAUD: Catatan Anekdot, Lembar Ceklis Capaian Fase Fondasi, dan Foto Berseri (Documentation of Learning).
- Rubrik Penilaian Skala 1-4 WAJIB menggunakan predikat resmi PAUD:
  * Skor 4: BSB (Berkembang Sangat Baik)
  * Skor 3: BSH (Berkembang Sesuai Harapan)
  * Skor 2: MB (Mulai Berkembang)
  * Skor 1: BB (Belum Berkembang / Perlu Bimbingan)
- CP Agama merujuk BSKAP 020 Tahun 2026; CP Non-Agama merujuk BSKAP 046 Tahun 2025.`;

    const userPrompt = `Rancang modul ajar Kurikulum Merdeka PAUD Fase Fondasi dengan data berikut:
- Satuan Pendidikan: ${data.sekolah || 'TK Negeri Pembina Merdeka Belajar'}
- Nama Guru: ${data.namaGuru || 'Ibu Ratna Dewi, S.Pd. PAUD'}
- Mata Pelajaran / Elemen: ${data.mataPelajaran || 'Pendidikan Anak Usia Dini (PAUD - Fase Fondasi)'}
- Jenjang: ${data.jenjang || 'PAUD'}
- Fase & Kelas / Kelompok: ${data.faseKelas || 'Fase Fondasi (TK B / Usia 5-6 Tahun)'}
- Semester & Tahun: ${data.semester || 'Semester Ganjil'} / ${data.tahunPelajaran || '2025/2026'}
- Materi / Topik: ${data.materi || 'Eksplorasi Keajaiban Tanaman & Kreasi Bahan Lepasan (Loose Parts)'}
- Alokasi Waktu: ${data.alokasiWaktu || '150 menit (1 Hari Pertemuan Sentra)'}
- Jumlah Pertemuan: ${data.jumlahPertemuan || '1 Pertemuan'}
- Jumlah Siswa / Anak: ${data.jumlahSiswa || '18 anak didik'}
- Karakteristik Anak: ${data.karakteristikSiswa || 'Sangat aktif, rasa ingin tahu tinggi, senang bergerak dan eksplorasi sensori'}
- Kompetensi Awal: ${data.kompetensiAwal || 'Terbiasa menyapa ramah, koordinasi motorik memegang benda, menyimak cerita'}
- Sarana & Prasarana: ${data.sarpras || 'Pekarangan kebun sekolah, aneka loose parts alam, wadah air, celemek main, buku cerita'}
- Model & Metode: ${data.modelPembelajaran || 'Model Sentra Bahan Alam dipadukan Eksplorasi Sensori Loose Parts dan Storytelling'}
- Konteks Lingkungan / Kearifan Lokal: ${data.kearifanLokal || 'Tanaman toga pekarangan, dolanan tradisional anak nusantara, budaya antre dan berbagi'}
- Capaian Pembelajaran: ${data.capaianPembelajaran || 'Anak menunjukkan rasa ingin tahu melalui eksplorasi loose parts, merawat ciptaan Tuhan, mengelola emosi, dan berkarya kreatif'}
- Dasar Regulasi Resmi Standar Kompetensi BSKAP: ${bskapRegulationText}
- Catatan Tambahan: ${data.catatanTambahan || '-'}

Kembalikan dokumen lengkap dalam format JSON terstruktur dengan skema berikut:
{
  "identitas": {
    "sekolah": "...",
    "namaGuru": "...",
    "mataPelajaran": "...",
    "jenjang": "...",
    "faseKelas": "...",
    "semester": "...",
    "tahunPelajaran": "...",
    "materi": "...",
    "alokasiWaktu": "...",
    "jumlahPertemuan": "...",
    "jumlahSiswa": "..."
  },
  "capaianPembelajaran": "...",
  "tujuanPembelajaran": ["TP 1...", "TP 2...", "TP 3..."],
  "kompetensiAwal": "...",
  "karakteristikSiswa": "...",
  "kebutuhanBelajar": "...",
  "pemahamanBermakna": "...",
  "pertanyaanPemantik": ["..."],
  "pertanyaanEsensial": ["..."],
  "materiEsensial": [
    { "subtopik": "...", "uraian": "..." }
  ],
  "dimensiProfilLulusan": [
    { "dimensi": "Penalaran Kritis", "keterkaitan": "...", "aktivitas": "...", "indikator": "..." }
  ],
  "prinsipDeepLearning": {
    "berkesadaran": { "deskripsi": "...", "penerapan": "..." },
    "bermakna": { "deskripsi": "...", "penerapan": "..." },
    "menggembirakan": { "deskripsi": "...", "penerapan": "..." }
  },
  "pengalamanBelajar": {
    "memahami": "...",
    "mengaplikasi": "...",
    "merefleksi": "..."
  },
  "kerangkaPembelajaran": {
    "praktikPedagogis": { "pendekatan": "...", "model": "...", "sintakModel": ["Sintak 1: ...", "Sintak 2: ..."], "metode": "...", "strategi": "...", "diferensiasi": "..." },
    "kemitraanPembelajaran": { "peranGuru": "...", "peranSiswa": "...", "temanSebaya": "...", "orangTuaMasyarakat": "..." },
    "lingkunganPembelajaran": { "ruangKelas": "...", "lingkunganSekitar": "...", "ruangDigital": "..." },
    "pemanfaatanDigital": { "opsiOnline": "...", "opsiOffline": "..." }
  },
  "skenarioPembelajaran": {
    "pendahuluan": [
      { "fase": "Orientasi & Apersepsi", "kegiatan": "...", "waktu": "10 menit" }
    ],
    "inti": {
      "tahap1Memahami": [
        { "sintak": "Sintak 1: ...", "aktivitas": "...", "peranGuru": "...", "peranSiswa": "...", "waktu": "20 menit" }
      ],
      "tahap2Mengaplikasi": [
        { "sintak": "Sintak 3: ...", "aktivitas": "...", "peranGuru": "...", "peranSiswa": "...", "waktu": "35 menit" }
      ],
      "tahap3Merefleksi": [
        { "sintak": "Sintak 5: ...", "aktivitas": "...", "peranGuru": "...", "peranSiswa": "...", "waktu": "15 menit" }
      ]
    },
    "penutup": [
      { "kegiatan": "...", "waktu": "10 menit" }
    ]
  },
  "lkpd": {
    "judul": "...",
    "tujuan": "...",
    "petunjuk": "...",
    "stimulusKonteks": "...",
    "pertanyaanPemantik": "...",
    "langkahKegiatan": ["..."],
    "tabelPengamatan": {
      "judul": "...",
      "kolom": ["No", "..."],
      "barisContoh": [["1", "..."]]
    },
    "pertanyaanAnalisis": ["..."],
    "tugasPenerapan": "...",
    "kesimpulan": "...",
    "refleksiSiswa": "..."
  },
  "asesmen": {
    "diagnostik": { "tujuan": "...", "teknik": "...", "instrumen": "...", "tindakLanjut": "..." },
    "formatif": { "tujuan": "...", "teknik": "...", "instrumen": "...", "tindakLanjut": "..." },
    "sumatif": { "tujuan": "...", "teknik": "...", "instrumen": "...", "kriteriaKetuntasan": "..." }
  },
  "rubrikPenilaian": [
    {
      "aspek": "Penalaran Kritis & Pemecahan Masalah",
      "skor4": "Deskripsi sangat mahir...",
      "skor3": "Deskripsi cakap...",
      "skor2": "Deskripsi berkembang...",
      "skor1": "Deskripsi perlu bimbingan..."
    }
  ],
  "diferensiasi": {
    "konten": { "bimbingan": "...", "sedang": "...", "pengayaan": "..." },
    "proses": { "bimbingan": "...", "sedang": "...", "pengayaan": "..." },
    "produk": { "bimbingan": "...", "sedang": "...", "pengayaan": "..." }
  },
  "remedialDanPengayaan": {
    "kriteriaRemedial": "...",
    "programRemedial": "...",
    "kriteriaPengayaan": "...",
    "programPengayaan": "..."
  },
  "refleksi": {
    "guru": ["Apa yang berhasil?", "Apa tantangan?", "Apa perbaikan?"],
    "siswa": ["Apa yang saya pahami?", "Apa yang menantang?", "Bagaimana menerapkannya?"]
  },
  "produkAkhir": "...",
  "sumberBelajar": ["..."]
}
HANYA berikan output JSON yang valid tanpa markdown codeblock.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.4,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ success: true, data: parsed });
  } catch (error: any) {
    console.error('Error generating modul:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// API Route: Enrich or Regenerate Section (e.g. LKPD, Rubrik, Asesmen, Skenario)
app.post('/api/refine-section', async (req, res) => {
  try {
    const { sectionName, currentData, promptModifier } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(200).json({
        success: false,
        fallback: true,
        message: 'No active API key found.',
      });
    }

    const prompt = `Anda adalah ahli kurikulum Merdeka dan Pembelajaran Mendalam (Deep Learning).
Perbaiki atau kembangkan bagian "${sectionName}" dari Modul Ajar berikut berdasarkan instruksi: "${promptModifier || 'Tingkatkan kualitas, rincian aktivitas, dan nilai kontekstualnya'}".

Data bagian saat ini:
${JSON.stringify(currentData, null, 2)}

Format jawaban HANYA berupa JSON valid yang memperbarui objek data bagian tersebut.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.4,
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    return res.json({ success: true, data: parsed });
  } catch (error: any) {
    console.error('Error in /api/refine-section:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// Start server with Vite middleware in dev or static serving in production
async function startServer() {
  const isCompiledJs = __filename.endsWith('.js');
  const isProd = process.env.NODE_ENV === 'production' || isCompiledJs;
  const distPath = path.resolve(process.cwd(), 'dist');

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Robust resolution of dist directory in production
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'Endpoint API tidak ditemukan' });
      }
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT} (mode: ${isProd ? 'production' : 'development'})`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
