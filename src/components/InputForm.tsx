import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  School, 
  Compass, 
  Target, 
  RefreshCw, 
  CheckCircle2, 
  FileCheck2, 
  ArrowRight,
  Wand2,
  Lightbulb,
  Check,
  BookOpen,
  Layers,
  Plus,
  BookmarkCheck
} from 'lucide-react';
import { InitialDataInput, Jenjang } from '../types/modul';
import { 
  requestSuggestCpTp, 
  generateCurriculumSuggestionOffline, 
  getSmartFieldReferences,
  getModelSyntaxInfo
} from '../services/modulGenerator';
import { ModelMetodeModal } from './ModelMetodeModal';
import { 
  REFERENSI_MODEL_PEMBELAJARAN, 
  REFERENSI_METODE_PEMBELAJARAN, 
  PAKET_KOMBINASI_MODEL_METODE 
} from '../data/modelMetodeReference';

interface InputFormProps {
  formData: InitialDataInput;
  setFormData: React.Dispatch<React.SetStateAction<InitialDataInput>>;
  onGenerate: () => void;
  isGenerating: boolean;
  onSelectQuickPreset?: (jenjang: Jenjang) => void;
}

export const InputForm: React.FC<InputFormProps> = ({
  formData,
  setFormData,
  onGenerate,
  isGenerating,
}) => {
  const [isSuggestingCp, setIsSuggestingCp] = useState(false);
  const [suggestNotification, setSuggestNotification] = useState<string | null>(null);
  const [isModelMetodeModalOpen, setIsModelMetodeModalOpen] = useState(false);
  const [modelMetodeTab, setModelMetodeTab] = useState<'model' | 'metode' | 'paket'>('model');

  // Compute live smart recommendations based on the currently typed topic, subject, school level, and CP/TP context
  const smartReferences = useMemo(() => {
    return getSmartFieldReferences({
      mataPelajaran: formData.mataPelajaran,
      jenjang: formData.jenjang,
      faseKelas: formData.faseKelas,
      materi: formData.materi,
      capaianPembelajaran: formData.capaianPembelajaran,
    });
  }, [formData.mataPelajaran, formData.jenjang, formData.faseKelas, formData.materi, formData.capaianPembelajaran]);

  // Compute live syntax steps for the selected learning model
  const currentModelSyntax = useMemo(() => {
    return getModelSyntaxInfo(formData.modelPembelajaran);
  }, [formData.modelPembelajaran]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate all references at once (CP, Kompetensi Awal 13, Model & Metode 15, Kearifan Lokal 16)
  const handleSuggestAll = async () => {
    if (!formData.materi || !formData.materi.trim()) {
      alert('Silakan isi kolom "11. Materi Pokok / Topik Pembelajaran" terlebih dahulu agar referensi dapat disesuaikan!');
      return;
    }

    setIsSuggestingCp(true);
    setSuggestNotification(null);

    try {
      const suggestion = await requestSuggestCpTp({
        mataPelajaran: formData.mataPelajaran,
        jenjang: formData.jenjang,
        faseKelas: formData.faseKelas,
        materi: formData.materi,
        capaianPembelajaran: formData.capaianPembelajaran,
      });

      if (suggestion.cp) {
        setFormData((prev) => ({
          ...prev,
          capaianPembelajaran: suggestion.cp,
          kompetensiAwal: suggestion.kompetensiAwal,
          modelPembelajaran: suggestion.modelPembelajaran,
          kearifanLokal: suggestion.kearifanLokal,
        }));
        setSuggestNotification('✨ Referensi otomatis berhasil diperbarui untuk: Kompetensi Awal (13), Model & Metode (15), Kearifan Lokal (16), dan Capaian Pembelajaran (17)!');
        setTimeout(() => setSuggestNotification(null), 6000);
      }
    } catch (err) {
      console.error('Error suggesting curriculum:', err);
    } finally {
      setIsSuggestingCp(false);
    }
  };

  // Specific helper to generate single field automatically from current smart references
  const handleSuggestSingleField = (
    field: 'kompetensiAwal' | 'modelPembelajaran' | 'kearifanLokal',
    fieldLabel: string
  ) => {
    if (!formData.materi || !formData.materi.trim()) {
      alert(`Silakan isi kolom "11. Materi Pokok / Topik" terlebih dahulu untuk menyusun referensi ${fieldLabel}!`);
      return;
    }

    const value = smartReferences[field].primary;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setSuggestNotification(`✨ Referensi otomatis ${fieldLabel} berhasil diterapkan sesuai materi "${formData.materi}"!`);
    setTimeout(() => setSuggestNotification(null), 4000);
  };

  // Dedicated helper to synchronize Kearifan Lokal (16) with Jenjang, Mapel, Materi, CP, and TP
  const handleSuggestKearifanLokal = () => {
    if (!formData.materi || !formData.materi.trim()) {
      alert('Silakan isi kolom "11. Materi Pokok / Topik" terlebih dahulu untuk menyelaraskan Kearifan Lokal (16)!');
      return;
    }

    const value = smartReferences.kearifanLokal.primary;
    setFormData((prev) => ({
      ...prev,
      kearifanLokal: value,
    }));

    setSuggestNotification(`✨ Konteks Kearifan Lokal berhasil diselaraskan dengan Jenjang ${formData.jenjang}, Mapel ${formData.mataPelajaran || 'Umum'}, Materi "${formData.materi}", serta Capaian Pembelajaran & TP!`);
    setTimeout(() => setSuggestNotification(null), 5000);
  };

  // Dedicated helper to append an active method to Model & Metode field (15)
  const handleAppendMetode = (metodeLabel: string) => {
    setFormData((prev) => {
      const current = prev.modelPembelajaran.trim();
      if (!current) {
        return { ...prev, modelPembelajaran: `Metode ${metodeLabel}` };
      }
      if (current.toLowerCase().includes(metodeLabel.toLowerCase())) {
        setSuggestNotification(`Metode "${metodeLabel}" sudah tercantum di kolom input.`);
        setTimeout(() => setSuggestNotification(null), 2500);
        return prev;
      }
      let updated = current;
      if (updated.endsWith('.')) {
        updated = updated.slice(0, -1);
      }
      if (
        updated.toLowerCase().includes('dipadukan dengan') || 
        updated.toLowerCase().includes('metode:') || 
        updated.toLowerCase().includes('serta')
      ) {
        updated = `${updated}, ${metodeLabel}.`;
      } else {
        updated = `${updated} dipadukan dengan ${metodeLabel}.`;
      }
      return { ...prev, modelPembelajaran: updated };
    });
    setSuggestNotification(`✨ Metode disisipkan ke Model & Metode (15): ${metodeLabel}`);
    setTimeout(() => setSuggestNotification(null), 3500);
  };

  // Helper to select and apply model pembelajaran
  const handleSelectModel = (text: string, title: string) => {
    setFormData((prev) => ({ ...prev, modelPembelajaran: text }));
    setSuggestNotification(`✨ Model Pembelajaran diterapkan: ${title}`);
    setTimeout(() => setSuggestNotification(null), 3500);
  };

  const handleJenjangChange = (newJenjang: Jenjang) => {
    let defaultFase = 'Fase Fondasi (TK B / Usia 5-6 Tahun)';
    if (newJenjang === 'PAUD' || newJenjang === 'TK B') defaultFase = 'Fase Fondasi (TK B / Usia 5-6 Tahun)';
    else if (newJenjang === 'TK A') defaultFase = 'Fase Fondasi (TK A / Usia 4-5 Tahun)';
    else if (newJenjang === 'KB') defaultFase = 'Fase Fondasi (KB / Usia 2-4 Tahun)';
    else if (newJenjang === 'SD') defaultFase = 'Fase B / Kelas IV';
    else if (newJenjang === 'SMP') defaultFase = 'Fase D / Kelas VII';
    else if (newJenjang === 'SMA') defaultFase = 'Fase E / Kelas X';
    else if (newJenjang === 'SMK') defaultFase = 'Fase F / Kelas XI';

    setFormData((prev) => ({
      ...prev,
      jenjang: newJenjang,
      faseKelas: defaultFase,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      
      {/* Intro Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 text-sm font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-lg">
              Langkah 1: Input Data Awal PAUD
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400 font-semibold">
              Kerangka 8–3–3–4 Deep Learning (Fase Fondasi)
            </span>
            <span className="px-2.5 py-0.5 text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-300 rounded-md border border-purple-200 dark:border-purple-800">
              BSKAP 046/2025 & BSKAP 020/2026
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Perancangan Modul Ajar PAUD Kurikulum Merdeka
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            Lengkapi 17 Data Awal Pembelajaran di bawah ini berfokus pada sasaran <strong className="text-emerald-700 dark:text-emerald-400 font-bold">PAUD (Fase Fondasi - TK A/B, KB)</strong> dengan rujukan resmi <strong>BSKAP Nomor 046 Tahun 2025</strong> dan <strong>BSKAP Nomor 020 Tahun 2026 (Khusus Pendidikan Agama)</strong>. Anda juga dapat memilih contoh modul siap pakai melalui menu <strong className="text-emerald-700 dark:text-emerald-400 font-bold">Contoh Modul</strong> pada sidebar di sebelah kiri.
          </p>
        </div>
      </div>

      {/* Global Notification Banner */}
      {suggestNotification && (
        <div className="p-4 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 rounded-2xl text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-3 animate-fade-in shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>{suggestNotification}</span>
        </div>
      )}

      {/* Main 17-Field Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onGenerate();
        }}
        className="space-y-8"
      >
        {/* Section 1: Identitas Satuan & Guru */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              <School className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                1. Identitas Satuan Pendidikan & Pengajar PAUD
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Data resmi satuan PAUD, pendidik, jenjang fondasi, kelompok usia, dan alokasi waktu main
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                1. Nama Satuan PAUD / TK / KB *
              </label>
              <input
                type="text"
                name="sekolah"
                required
                value={formData.sekolah}
                onChange={handleChange}
                placeholder="Contoh: TK Negeri Pembina Merdeka Belajar"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                2. Nama Guru Pengampu / Pendidik PAUD *
              </label>
              <input
                type="text"
                name="namaGuru"
                required
                value={formData.namaGuru}
                onChange={handleChange}
                placeholder="Contoh: Ibu Ratna Dewi, S.Pd. PAUD"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                3. Lingkup Pembelajaran / Mata Pelajaran *
              </label>
              <input
                type="text"
                name="mataPelajaran"
                required
                value={formData.mataPelajaran}
                onChange={handleChange}
                placeholder="Contoh: Eksplorasi Lingkungan & Bahan Alam / Pendidikan Agama Islam PAUD"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                4. Jenjang Pendidikan *
              </label>
              <select
                name="jenjang"
                value={formData.jenjang}
                onChange={(e) => handleJenjangChange(e.target.value as Jenjang)}
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-semibold cursor-pointer"
              >
                <option value="PAUD" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">PAUD (Fase Fondasi - TK/KB)</option>
                <option value="TK B" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">TK B (Usia 5-6 Tahun - Fase Fondasi)</option>
                <option value="TK A" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">TK A (Usia 4-5 Tahun - Fase Fondasi)</option>
                <option value="KB" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">KB (Kelompok Bermain / Usia 2-4 Tahun)</option>
                <option value="SD" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">SD (Sekolah Dasar)</option>
                <option value="SMP" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">SMP (Sekolah Menengah Pertama)</option>
                <option value="SMA" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">SMA (Sekolah Menengah Atas)</option>
                <option value="SMK" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">SMK (Sekolah Menengah Kejuruan)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                5. Kelompok & Fase *
              </label>
              <input
                type="text"
                name="faseKelas"
                required
                value={formData.faseKelas}
                onChange={handleChange}
                placeholder="Contoh: Fase Fondasi (TK B / Usia 5-6 Tahun)"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                6. Semester *
              </label>
              <select
                name="semester"
                value={formData.semester}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-semibold cursor-pointer"
              >
                <option value="Semester Ganjil" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Semester Ganjil</option>
                <option value="Semester Genap" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">Semester Genap</option>
              </select>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                7. Tahun Pelajaran *
              </label>
              <input
                type="text"
                name="tahunPelajaran"
                required
                value={formData.tahunPelajaran}
                onChange={handleChange}
                placeholder="2025/2026"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                8. Alokasi Waktu *
              </label>
              <input
                type="text"
                name="alokasiWaktu"
                required
                value={formData.alokasiWaktu}
                onChange={handleChange}
                placeholder="Contoh: 180 menit (07.30 - 10.30 WIB / 1 Hari Sentra Main)"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                  9. Jumlah Pertemuan *
                </label>
                <div className="flex items-center gap-1">
                  {['1', '2', '3', '4'].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, jumlahPertemuan: `${num} Pertemuan` }))}
                      className={`px-1.5 py-0.5 text-[11px] font-bold rounded-md border transition-colors cursor-pointer ${
                        formData.jumlahPertemuan?.startsWith(`${num} `) || formData.jumlahPertemuan === `${num} Pertemuan`
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border-slate-300 dark:border-slate-700'
                      }`}
                      title={`Pilih ${num} Pertemuan`}
                    >
                      {num}P
                    </button>
                  ))}
                </div>
              </div>
              <input
                type="text"
                name="jumlahPertemuan"
                required
                value={formData.jumlahPertemuan}
                onChange={handleChange}
                placeholder="Contoh: 1 Pertemuan (atau 1 Pekan Tema)"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-2">
              <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
                10. Jumlah Anak Didik *
              </label>
              <input
                type="text"
                name="jumlahSiswa"
                required
                value={formData.jumlahSiswa}
                onChange={handleChange}
                placeholder="Contoh: 18 anak didik (Kelompok B)"
                className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Topik, Karakteristik & Konteks Pembelajaran */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                2. Topik / Subtopik, Karakteristik Anak & Rangsangan Main
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Landasan esensial pengalaman belajar Memahami (Sensori) → Mengaplikasi (Kreasi Loose Parts) → Merefleksi (Recalling Ceria)
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Topik / Materi with 1-Click All-in-One Generator Button */}
            <div className="p-5 bg-emerald-50/50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <label className="block text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  11. Topik / Subtopik Pembelajaran *
                </label>
                
                {/* 1-Click Auto Fill Button */}
                <button
                  type="button"
                  onClick={handleSuggestAll}
                  disabled={isSuggestingCp}
                  className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-extrabold rounded-xl bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white shadow-xs transition-colors cursor-pointer self-start sm:self-auto"
                  title="Otomatis isi Kompetensi Awal (13), Model & Metode (15), Kearifan Lokal (16), dan CP (17)"
                >
                  {isSuggestingCp ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Merumuskan Referensi PAUD...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>✨ Lengkapi Semua Referensi Sesuai Topik</span>
                    </>
                  )}
                </button>
              </div>

              <input
                type="text"
                name="materi"
                required
                value={formData.materi}
                onChange={handleChange}
                placeholder="Contoh: Eksplorasi Daun, Biji & Ranting Kebun Sekolah / Asmaul Husna Al-Khaliq Ciptaan Allah"
                className="w-full px-4 py-3.5 text-base sm:text-lg bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-bold text-slate-950 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 shadow-2xs"
              />
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 font-semibold">
                <Lightbulb className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Ketik topik main di atas, lalu gunakan tombol referensi otomatis pada setiap kolom di bawah ini.</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* 12. Karakteristik Siswa */}
              <div className="space-y-2">
                <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                  12. Karakteristik Anak Didik *
                </label>
                <textarea
                  name="karakteristikSiswa"
                  rows={4}
                  required
                  value={formData.karakteristikSiswa}
                  onChange={handleChange}
                  placeholder="Contoh: Anak-anak aktif, senang bergerak, memiliki rasa ingin tahu tinggi pada benda alam, menyukai eksplorasi sensori tekstur daun dan batu, antusias mendengarkan cerita bergambar, serta membutuhkan pembiasaan sabar bergantian alat main."
                  className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all leading-relaxed font-medium"
                />
                <span className="text-xs text-slate-500 dark:text-slate-400 block">
                  Profil gaya sensori motorik, minat, dan tahap kesiapan perkembangan anak di kelompok Anda.
                </span>
              </div>

              {/* 13. Kompetensi Awal (Prasyarat) with AUTO-REFERENCING BUTTON & QUICK RECOMMENDATION CARDS */}
              <div className="space-y-2 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                    13. Kompetensi Awal (Prasyarat Perkembangan) *
                  </label>
                  <button
                    type="button"
                    onClick={() => handleSuggestSingleField('kompetensiAwal', 'Kompetensi Awal (13)')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-extrabold bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-lg shadow-2xs transition-colors cursor-pointer"
                    title="Otomatis terapkan referensi kompetensi prasyarat yang sesuai dengan materi pokok"
                  >
                    <Wand2 className="w-3.5 h-3.5 text-amber-300" />
                    <span>✨ Referensi Otomatis</span>
                  </button>
                </div>

                <textarea
                  name="kompetensiAwal"
                  rows={3}
                  required
                  value={formData.kompetensiAwal}
                  onChange={handleChange}
                  placeholder="Contoh: Peserta didik telah mampu membedakan benda hidup (biotik) dan benda mati (abiotik) di lingkungan sekitar rumah dan sekolah."
                  className="w-full px-4 py-3 text-base bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all leading-relaxed shadow-2xs font-medium"
                />

                {/* Interactive Recommendation Chips */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-950 dark:text-emerald-300">
                    <Lightbulb className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>Pilihan Rekomendasi Prasyarat (Klik untuk Terapkan):</span>
                  </div>
                  <div className="space-y-1.5">
                    {smartReferences.kompetensiAwal.options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, kompetensiAwal: opt.text }));
                          setSuggestNotification(`✨ Kompetensi Awal diterapkan: ${opt.title}`);
                          setTimeout(() => setSuggestNotification(null), 3500);
                        }}
                        className="w-full text-left p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/80 bg-white dark:bg-slate-900 hover:bg-emerald-100/60 dark:hover:bg-slate-800 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all text-xs cursor-pointer group shadow-2xs"
                      >
                        <div className="flex items-center justify-between font-bold text-emerald-900 dark:text-emerald-300 group-hover:text-emerald-950 dark:group-hover:text-emerald-200">
                          <span>{opt.title}</span>
                          <span className="text-[11px] font-extrabold text-emerald-700 dark:text-emerald-400 group-hover:underline flex items-center gap-0.5">
                            Pilih <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-200 line-clamp-1 mt-0.5 leading-snug">
                          {opt.text}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-2">
              
              {/* 14. Sarana & Prasarana */}
              <div className="space-y-2 bg-slate-50/70 dark:bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                    14. Sarana dan Prasarana *
                  </label>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Media, alat peraga, bahan ajar, dan fasilitas pendukung belajar di sekolah
                  </span>
                </div>
                <textarea
                  name="sarpras"
                  rows={2}
                  required
                  value={formData.sarpras}
                  onChange={handleChange}
                  placeholder="Contoh: Kebun sekolah, aneka loose parts (batu kali bulat, daun kering aneka bentuk, ranting, biji saga), nampan sensori, celemek main, dan buku cerita bergambar."
                  className="w-full px-4 py-3 text-base bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all leading-relaxed font-medium"
                />
              </div>

              {/* 15. Model & Metode with COMPREHENSIVE PEDAGOGICAL REFERENCES & ACTIVE METHOD BUILDER */}
              <div className="space-y-4 bg-blue-50/40 dark:bg-blue-950/20 p-5 sm:p-6 rounded-3xl border border-blue-200 dark:border-blue-800/70 shadow-xs">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-blue-200/80 dark:border-blue-800/60">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <label className="text-base sm:text-lg font-black text-slate-950 dark:text-white flex items-center gap-2">
                        <span>15. Model & Metode Pembelajaran *</span>
                      </label>
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-200 dark:bg-blue-900/80 text-blue-950 dark:text-blue-200 border border-blue-300 dark:border-blue-700">
                        {currentModelSyntax.namaSingkat} ({currentModelSyntax.jumlahSintak} Sintaks)
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Rujukan resmi sintaks pembelajaran Kemendikbudristek & integrasi ragam metode aktif untuk kegiatan inti mendalam.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsModelMetodeModalOpen(true)}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-extrabold bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white rounded-xl shadow-2xs transition-colors cursor-pointer"
                      title="Buka Ensiklopedia Referensi Model Pembelajaran & Metode Lengkap"
                    >
                      <BookOpen className="w-4 h-4 text-blue-200" />
                      <span>📖 Ensiklopedia Model & Metode</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSuggestSingleField('modelPembelajaran', 'Model & Metode Pembelajaran (15)')}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-extrabold bg-white dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 text-blue-900 dark:text-blue-200 border border-blue-300 dark:border-blue-700 rounded-xl shadow-2xs transition-colors cursor-pointer"
                      title="Otomatis sesuaikan model & metode pembelajaran yang selaras dengan topik dan jenjang"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-amber-500" />
                      <span>✨ Sesuai Materi</span>
                    </button>
                  </div>
                </div>

                {/* 2-Column Responsive Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1">
                  
                  {/* Left Column: Input + Quick Method Chips + Live Syntax Breakdown */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          Rumusan Model & Metode Terpilih:
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                          Dapat diedit atau dikombinasikan secara bebas
                        </span>
                      </div>

                      <textarea
                        name="modelPembelajaran"
                        rows={3}
                        required
                        value={formData.modelPembelajaran}
                        onChange={handleChange}
                        placeholder="Contoh: Problem Based Learning (PBL) dipadukan dengan observasi lapangan, diskusi kelompok terarah, dan Gallery Walk."
                        className="w-full px-4 py-3 text-base bg-white dark:bg-slate-900 border border-blue-400 dark:border-blue-600/80 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all leading-relaxed shadow-2xs font-medium dark:caret-blue-400"
                      />
                    </div>

                    {/* Quick Active Method Insert Chips */}
                    <div className="space-y-2 p-3.5 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-blue-200/80 dark:border-blue-800/60 shadow-2xs">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="text-xs font-black text-slate-900 dark:text-blue-200 flex items-center gap-1.5">
                          <Plus className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                          <span>Sisipkan Metode Aktif Cepat ke Form:</span>
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Klik chip untuk menambahkan langsung
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {[
                          'Diskusi Kelompok Terarah',
                          'Gallery Walk (Pameran Karya)',
                          'Observasi Lapangan / Jelajah Alam',
                          'Eksperimen / Praktikum Terbimbing',
                          'Think-Pair-Share (TPS)',
                          'Metode Jigsaw Kooperatif',
                          'Studi Kasus Kontekstual',
                          'Role Playing & Simulasi',
                          'Tanya Jawab Sokrates',
                          'Mind Mapping Visual',
                          'Game-Based Learning',
                        ].map((mLabel, mIdx) => {
                          const isAlreadyIn = formData.modelPembelajaran.toLowerCase().includes(mLabel.toLowerCase());
                          return (
                            <button
                              key={mIdx}
                              type="button"
                              onClick={() => handleAppendMetode(mLabel)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 border ${
                                isAlreadyIn
                                  ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/80 shadow-2xs'
                                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-blue-100/70 dark:hover:bg-blue-900/60 hover:text-blue-900 dark:hover:text-blue-200 hover:border-blue-400'
                              }`}
                              title={isAlreadyIn ? `Metode ${mLabel} sudah tercantum` : `Klik untuk menyisipkan metode ${mLabel}`}
                            >
                              {isAlreadyIn ? (
                                <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Plus className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                              )}
                              <span>{mLabel}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Live Sintak Model Pembelajaran Terpilih Panel */}
                    <div className="p-4 bg-blue-100/70 dark:bg-blue-950/60 rounded-2xl border border-blue-300 dark:border-blue-800 space-y-2.5 shadow-2xs">
                      <div className="flex items-center justify-between gap-2 pb-2 border-b border-blue-200 dark:border-blue-800/80">
                        <div className="flex items-center gap-1.5 font-black text-xs text-blue-950 dark:text-blue-200">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
                          <span>Alur Sintak Aktif: {currentModelSyntax.namaModel}</span>
                        </div>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-blue-200 dark:bg-blue-900 text-blue-900 dark:text-blue-200">
                          {currentModelSyntax.jumlahSintak} Sintaks Pembelajaran
                        </span>
                      </div>
                      
                      <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-snug">
                        {currentModelSyntax.deskripsiUmum}
                      </p>

                      <div className="space-y-1.5 pt-1">
                        <div className="text-[11px] font-extrabold text-blue-950 dark:text-blue-200 flex items-center justify-between">
                          <span>Rincian Sintak & Pemetaan ke Kegiatan Inti:</span>
                          <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400 italic">
                            {currentModelSyntax.sumberRujukan}
                          </span>
                        </div>
                        
                        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                          {currentModelSyntax.sintakList.map((stk) => (
                            <div
                              key={stk.nomor}
                              className="p-2.5 bg-white dark:bg-slate-800/90 rounded-xl border border-blue-100 dark:border-blue-800/60 text-xs space-y-0.5 shadow-2xs"
                            >
                              <div className="flex items-center justify-between gap-1.5 font-bold">
                                <span className="text-blue-950 dark:text-blue-300">
                                  Sintak {stk.nomor}: {stk.nama}
                                </span>
                                <span
                                  className={`text-[9px] px-1.5 py-0.5 rounded font-black shrink-0 ${
                                    stk.tahapDeepLearning.includes('Memahami')
                                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                                      : stk.tahapDeepLearning.includes('Mengaplikasi')
                                      ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                                      : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                                  }`}
                                >
                                  {stk.tahapDeepLearning}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                                {stk.deskripsi}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Tabbed Quick Reference Explorer */}
                  <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-blue-200/90 dark:border-blue-800/70 shadow-2xs flex flex-col justify-between space-y-3">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          <span>Katalog Pilihan Referensi Cepat:</span>
                        </span>
                        <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300">
                          Jenjang {formData.jenjang}
                        </span>
                      </div>

                      {/* Sub-tabs */}
                      <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-bold">
                        <button
                          type="button"
                          onClick={() => setModelMetodeTab('model')}
                          className={`flex-1 py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
                            modelMetodeTab === 'model'
                              ? 'bg-blue-600 text-white shadow-xs font-black'
                              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                          }`}
                        >
                          Model Utama
                        </button>
                        <button
                          type="button"
                          onClick={() => setModelMetodeTab('metode')}
                          className={`flex-1 py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
                            modelMetodeTab === 'metode'
                              ? 'bg-blue-600 text-white shadow-xs font-black'
                              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                          }`}
                        >
                          Metode Aktif
                        </button>
                        <button
                          type="button"
                          onClick={() => setModelMetodeTab('paket')}
                          className={`flex-1 py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
                            modelMetodeTab === 'paket'
                              ? 'bg-blue-600 text-white shadow-xs font-black'
                              : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                          }`}
                        >
                          Paket Sinergi
                        </button>
                      </div>

                      {/* Tab 1 Content: Model Options */}
                      {modelMetodeTab === 'model' && (
                        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                          {smartReferences.modelPembelajaran.options.map((opt, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSelectModel(opt.text, opt.title)}
                              className="w-full text-left p-3 rounded-xl border border-blue-100 dark:border-blue-800/80 bg-slate-50/70 dark:bg-slate-850 hover:bg-blue-50 dark:hover:bg-slate-800 hover:border-blue-400 transition-all text-xs cursor-pointer group shadow-2xs space-y-1"
                            >
                              <div className="flex items-center justify-between font-bold text-blue-900 dark:text-blue-300 group-hover:text-blue-950 dark:group-hover:text-blue-200">
                                <span>{opt.title}</span>
                                <span className="text-[11px] font-extrabold text-blue-700 dark:text-blue-400 group-hover:underline flex items-center gap-0.5 shrink-0">
                                  Terapkan <ArrowRight className="w-3 h-3" />
                                </span>
                              </div>
                              <p className="text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed text-[11px]">
                                {opt.text}
                              </p>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Tab 2 Content: Active Methods */}
                      {modelMetodeTab === 'metode' && (
                        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                          {REFERENSI_METODE_PEMBELAJARAN.slice(0, 6).map((met) => (
                            <div
                              key={met.id}
                              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 text-xs space-y-1.5 shadow-2xs"
                            >
                              <div className="flex items-center justify-between gap-1.5">
                                <span className="font-bold text-slate-900 dark:text-white">
                                  {met.nama}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleAppendMetode(met.chipLabel)}
                                  className="px-2 py-0.5 rounded-md text-[10px] font-black bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Sisipkan</span>
                                </button>
                              </div>
                              <p className="text-slate-600 dark:text-slate-300 text-[11px] line-clamp-2 leading-snug">
                                {met.deskripsi}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tab 3 Content: Packages */}
                      {modelMetodeTab === 'paket' && (
                        <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                          {PAKET_KOMBINASI_MODEL_METODE.slice(0, 4).map((pkt) => (
                            <div
                              key={pkt.id}
                              className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 text-xs space-y-1.5 shadow-2xs"
                            >
                              <div className="flex items-center justify-between gap-1.5">
                                <span className="font-bold text-slate-900 dark:text-white">
                                  {pkt.judul}
                                </span>
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">
                                  {pkt.jenjang}
                                </span>
                              </div>
                              <p className="text-slate-600 dark:text-slate-300 text-[11px] line-clamp-2 leading-snug">
                                {pkt.uraianLengkap}
                              </p>
                              <button
                                type="button"
                                onClick={() => handleSelectModel(pkt.uraianLengkap, pkt.judul)}
                                className="w-full py-1.5 rounded-lg text-[11px] font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer flex items-center justify-center gap-1"
                              >
                                <span>Terapkan Paket Ini</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA to open full encyclopedia modal */}
                    <button
                      type="button"
                      onClick={() => setIsModelMetodeModalOpen(true)}
                      className="w-full py-2.5 px-3 rounded-xl border border-blue-300 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-900 dark:text-blue-200 text-xs font-black flex items-center justify-center gap-2 transition-colors cursor-pointer mt-2"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Buka Panduan Teori & Sintaks Lengkap →</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* 16. Konteks Lingkungan & Kearifan Lokal with DEEP SYNCHRONIZATION (Jenjang, Mapel, Materi, CP & TP) */}
              <div className="space-y-3 bg-amber-50/50 dark:bg-amber-950/25 p-4 sm:p-5 rounded-2xl border border-amber-300 dark:border-amber-700/70 shadow-2xs">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <label className="text-sm sm:text-base font-black text-slate-950 dark:text-amber-100">
                        16. Kearifan Lokal & Konteks Nyata *
                      </label>
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/80 text-amber-950 dark:text-amber-200">
                        {formData.jenjang}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleSuggestKearifanLokal}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-extrabold bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500 text-white rounded-lg shadow-2xs transition-colors cursor-pointer"
                      title="Otomatis selaraskan kearifan lokal dengan Jenjang, Mata Pelajaran, Topik, serta Capaian Pembelajaran & TP utama"
                    >
                      <Wand2 className="w-3.5 h-3.5 text-amber-200" />
                      <span>✨ Selaraskan dengan Jenjang, Mapel, CP & TP</span>
                    </button>
                  </div>

                  {/* Synchronization context pill */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-amber-900 dark:text-amber-200/90 bg-amber-100/70 dark:bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-200/80 dark:border-amber-800/60">
                    <span className="font-extrabold text-amber-950 dark:text-amber-100">Tersinkronisasi:</span>
                    <span>Jenjang {formData.jenjang}</span>
                    <span>•</span>
                    <span>Mapel {formData.mataPelajaran || 'Mata Pelajaran'}</span>
                    <span>•</span>
                    <span className="truncate max-w-[140px] sm:max-w-[200px]">Materi: {formData.materi || 'Topik'}</span>
                    <span>•</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">Selaras Target CP & TP</span>
                  </div>
                </div>

                <textarea
                  name="kearifanLokal"
                  rows={4}
                  required
                  value={formData.kearifanLokal}
                  onChange={handleChange}
                  placeholder={`Contoh kearifan lokal yang kontekstual dengan jenjang ${formData.jenjang}, mapel ${formData.mataPelajaran || 'mata pelajaran'}, topik pembelajaran, serta capaian pembelajaran dan TP utama...`}
                  className="w-full px-4 py-3.5 text-base bg-white dark:bg-slate-900 border border-amber-400 dark:border-amber-600/80 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all leading-relaxed shadow-xs font-medium dark:caret-amber-400"
                />

                {/* Interactive Kearifan Lokal Options Tailored to Jenjang, Mapel, Materi, CP, and TP */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between gap-1.5 text-xs font-bold text-amber-950 dark:text-amber-300">
                    <div className="flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                      <span>Pilihan Kearifan & Laboratorium Nyata (Klik untuk Terapkan):</span>
                    </div>
                    <span className="text-[10px] font-semibold text-amber-800 dark:text-amber-400 hidden sm:inline">
                      Disesuaikan Jenjang {formData.jenjang}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {smartReferences.kearifanLokal.options.map((opt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, kearifanLokal: opt.text }));
                          setSuggestNotification(`✨ Konteks Kearifan Lokal diterapkan: ${opt.title}`);
                          setTimeout(() => setSuggestNotification(null), 3500);
                        }}
                        className="w-full text-left p-3 rounded-xl border border-amber-200/90 dark:border-amber-800/80 bg-white dark:bg-slate-900 hover:bg-amber-100/50 dark:hover:bg-slate-800 hover:border-amber-500 dark:hover:border-amber-400 transition-all text-xs cursor-pointer group shadow-2xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-amber-950 dark:text-amber-300 group-hover:text-amber-900 dark:group-hover:text-amber-200 text-xs sm:text-sm">
                              {opt.title}
                            </span>
                            {opt.badge && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800/80">
                                {opt.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] font-extrabold text-amber-700 dark:text-amber-400 group-hover:underline flex items-center gap-0.5 shrink-0">
                            Pilih <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-200 line-clamp-2 leading-relaxed text-xs">
                          {opt.text}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 3: Capaian Pembelajaran (CP) dengan Rujukan Resmi BSKAP */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  3. Capaian Pembelajaran (CP)
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Data ke-17: Standar kompetensi fase resmi BSKAP Kemendikbudristek (Nomor 046 Tahun 2025 atau Nomor 020 Tahun 2026)
                </p>
              </div>
            </div>

            {/* Smart CP & TP Button */}
            <button
              type="button"
              onClick={handleSuggestAll}
              disabled={isSuggestingCp}
              className="flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 transition-colors shadow-2xs cursor-pointer self-start sm:self-auto"
            >
              {isSuggestingCp ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-600 dark:text-emerald-400" />
                  <span>Merumuskan CP & Referensi...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>✨ Rumuskan CP & Seluruh Referensi Otomatis</span>
                </>
              )}
            </button>
          </div>

          {/* Official Regulation Callout Banner */}
          <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
            smartReferences.bskapReference.isAgama
              ? 'bg-purple-50/70 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800 text-purple-950 dark:text-purple-200'
              : 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
          }`}>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-xs font-black px-2.5 py-0.5 rounded-md ${
                  smartReferences.bskapReference.isAgama 
                    ? 'bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-700' 
                    : 'bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700'
                }`}>
                  {smartReferences.bskapReference.shortBadge}
                </span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Standar Regulasi Berlaku
                </span>
              </div>
              <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                {smartReferences.bskapReference.fullName}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {smartReferences.bskapReference.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                const citation = `(Rujukan Resmi: ${smartReferences.bskapReference.fullName})\n`;
                if (!formData.capaianPembelajaran.includes(smartReferences.bskapReference.nomor)) {
                  setFormData((prev) => ({
                    ...prev,
                    capaianPembelajaran: citation + prev.capaianPembelajaran.replace(/^\(Rujukan Resmi:.*?\)\n/, '')
                  }));
                  setSuggestNotification(`✨ Rujukan resmi ${smartReferences.bskapReference.shortBadge} disematkan ke rumusan CP!`);
                  setTimeout(() => setSuggestNotification(null), 3500);
                } else {
                  setSuggestNotification(`Rujukan regulasi ${smartReferences.bskapReference.nomor} telah tercantum.`);
                  setTimeout(() => setSuggestNotification(null), 2500);
                }
              }}
              className="shrink-0 px-4 py-2 text-xs sm:text-sm font-extrabold bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-xl transition-colors cursor-pointer shadow-2xs text-slate-900 dark:text-white flex items-center gap-1.5"
            >
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Sematkan Dasar Hukum BSKAP</span>
            </button>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <label className="text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200">
                17. Rumusan Capaian Pembelajaran (CP) *
              </label>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg">
                Merujuk: {smartReferences.bskapReference.shortBadge}
              </span>
            </div>
            
            <textarea
              name="capaianPembelajaran"
              rows={4}
              required
              value={formData.capaianPembelajaran}
              onChange={handleChange}
              placeholder="Peserta didik mengidentifikasi interaksi antar komponen ekosistem serta merancang solusi atas permasalahan lingkungan lokal..."
              className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all leading-relaxed font-medium"
            />
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Ketentuan BSKAP Kemendikbudristek: Rumusan CP untuk <strong>Semua Mata Pelajaran selain Pendidikan Agama</strong> merujuk pada <strong>BSKAP Nomor 046 Tahun 2025</strong>. Khusus untuk <strong>Pendidikan Agama dan Budi Pekerti</strong> merujuk pada <strong>BSKAP Nomor 020 Tahun 2026</strong>.
            </p>
          </div>

          <div>
            <label className="block text-sm sm:text-base font-bold text-slate-800 dark:text-slate-200 mb-2">
              Catatan Khusus / Permintaan Tambahan Guru (Opsional)
            </label>
            <input
              type="text"
              name="catatanTambahan"
              value={formData.catatanTambahan || ''}
              onChange={handleChange}
              placeholder="Contoh: Fokuskan pada penilaian kerja kelompok; siapkan opsi luring tanpa internet..."
              className="w-full px-4 py-3 text-base bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white dark:focus:text-white placeholder:text-slate-400 dark:placeholder:text-slate-400 rounded-xl focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all font-medium"
            />
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-emerald-400" />
              <span className="text-xs sm:text-sm font-bold text-emerald-400 tracking-wider uppercase">
                Siap Melakukan Penerbitan Modul Ajar
              </span>
            </div>
            <p className="text-base sm:text-lg font-semibold text-slate-200 max-w-xl">
              Klik tombol di samping untuk menyusun Modul Ajar Utuh (24 Bagian), Lembar LKPD, dan Rubrik Asesmen 1–4.
            </p>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base sm:text-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shrink-0"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>Menyusun Modul 8-3-3-4...</span>
              </>
            ) : (
              <>
                <span>Rancang Modul Ajar Sekarang</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Ensiklopedia Referensi Model & Metode Pembelajaran Modal */}
      <ModelMetodeModal
        isOpen={isModelMetodeModalOpen}
        onClose={() => setIsModelMetodeModalOpen(false)}
        onSelectModel={handleSelectModel}
        onAppendMetode={handleAppendMetode}
        currentValue={formData.modelPembelajaran}
        selectedJenjang={formData.jenjang}
      />

    </div>
  );
};
