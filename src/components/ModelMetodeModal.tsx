/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modal Ensiklopedia & Referensi Model dan Metode Pembelajaran
 * Kerangka Deep Learning (8-3-3-4) & Kurikulum Merdeka
 */

import React, { useState, useMemo } from 'react';
import { 
  X, 
  Search, 
  BookOpen, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Plus, 
  Lightbulb, 
  GraduationCap, 
  Compass, 
  BookmarkCheck,
  Check
} from 'lucide-react';
import { 
  REFERENSI_MODEL_PEMBELAJARAN, 
  REFERENSI_METODE_PEMBELAJARAN, 
  PAKET_KOMBINASI_MODEL_METODE,
  ModelPembelajaranRef,
  MetodePembelajaranRef,
  PaketKombinasiRef
} from '../data/modelMetodeReference';

interface ModelMetodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModel: (text: string, title: string) => void;
  onAppendMetode: (metodeName: string) => void;
  currentValue: string;
  selectedJenjang?: string;
}

export const ModelMetodeModal: React.FC<ModelMetodeModalProps> = ({
  isOpen,
  onClose,
  onSelectModel,
  onAppendMetode,
  currentValue,
  selectedJenjang = 'Semua',
}) => {
  const [activeTab, setActiveTab] = useState<'model' | 'metode' | 'paket'>('model');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterJenjang, setFilterJenjang] = useState<string>('Semua');
  const [selectedKategoriMetode, setSelectedKategoriMetode] = useState<string>('Semua');
  const [expandedModelId, setExpandedModelId] = useState<string | null>('sentra-paud');

  // Filtered Models
  const filteredModels = useMemo(() => {
    return REFERENSI_MODEL_PEMBELAJARAN.filter((m) => {
      const matchQuery = 
        m.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.kategori.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.tujuanUtama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.sumberRujukan.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchJenjang = 
        filterJenjang === 'Semua' || 
        m.rekomendasiJenjang.includes(filterJenjang as any);

      return matchQuery && matchJenjang;
    });
  }, [searchQuery, filterJenjang]);

  // Filtered Methods
  const filteredMetode = useMemo(() => {
    return REFERENSI_METODE_PEMBELAJARAN.filter((m) => {
      const matchQuery = 
        m.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.deskripsi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.keunggulan.toLowerCase().includes(searchQuery.toLowerCase());

      const matchKategori = 
        selectedKategoriMetode === 'Semua' || 
        m.kategori === selectedKategoriMetode;

      return matchQuery && matchKategori;
    });
  }, [searchQuery, selectedKategoriMetode]);

  // Filtered Packages
  const filteredPaket = useMemo(() => {
    return PAKET_KOMBINASI_MODEL_METODE.filter((p) => {
      const matchQuery = 
        p.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fokus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.uraianLengkap.toLowerCase().includes(searchQuery.toLowerCase());

      return matchQuery;
    });
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-2xl shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white serif-heading">
                  Referensi Model & Metode Pembelajaran
                </h3>
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Kurikulum Merdeka & Deep Learning
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Rujukan resmi sintaks model pembelajaran dan ragam metode aktif untuk kegiatan inti bermakna, berkesadaran, dan menggembirakan.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors cursor-pointer self-end sm:self-auto"
            aria-label="Tutup Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation & Search Bar */}
        <div className="px-5 sm:px-6 pt-4 pb-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl overflow-x-auto text-xs sm:text-sm font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('model')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'model'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Model Pembelajaran ({filteredModels.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('metode')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'metode'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Metode Pembelajaran Aktif ({filteredMetode.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('paket')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'paket'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Paket Terpadu ({filteredPaket.length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px] sm:min-w-[280px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari model, sintak, metode..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">

          {/* TAB 1: MODEL PEMBELAJARAN */}
          {activeTab === 'model' && (
            <div className="space-y-4">
              {/* Quick Jenjang Filter */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Filter Jenjang:</span>
                  {(['Semua', 'PAUD', 'SD', 'SMP', 'SMA', 'SMK'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setFilterJenjang(lvl)}
                      className={`px-2.5 py-1 rounded-md text-xs font-extrabold transition-all cursor-pointer ${
                        filterJenjang === lvl
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Rujukan Resmi BSKAP / Panduan Pembelajaran & Asesmen
                </span>
              </div>

              {/* Models List */}
              <div className="space-y-4">
                {filteredModels.map((model) => {
                  const isExpanded = expandedModelId === model.id;
                  const isCurrentlyUsed = currentValue.toLowerCase().includes(model.namaSingkat.toLowerCase()) || currentValue.toLowerCase().includes(model.nama.toLowerCase());

                  return (
                    <div
                      key={model.id}
                      className={`rounded-2xl border transition-all ${
                        isCurrentlyUsed
                          ? 'border-blue-400 dark:border-blue-600 bg-blue-50/30 dark:bg-blue-950/20 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90'
                      }`}
                    >
                      {/* Model Card Header */}
                      <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-base sm:text-lg font-black text-slate-950 dark:text-white">
                              {model.nama}
                            </span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                              {model.kategori}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {model.jumlahSintak} Sintaks
                            </span>
                            {isCurrentlyUsed && (
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center gap-1 border border-emerald-300 dark:border-emerald-700">
                                <Check className="w-3 h-3" /> Aktif di Form
                              </span>
                            )}
                          </div>
                          
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                            {model.tujuanUtama}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">Rujukan: {model.sumberRujukan}</span>
                            <span>•</span>
                            <span>Jenjang Cocok: {model.rekomendasiJenjang.join(', ')}</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            type="button"
                            onClick={() => setExpandedModelId(isExpanded ? null : model.id)}
                            className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"
                          >
                            {isExpanded ? 'Tutup Rincian' : 'Lihat Sintaks'}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              onSelectModel(model.teksRekomendasi, model.nama);
                            }}
                            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white shadow-2xs cursor-pointer transition-colors"
                          >
                            <span>Gunakan Model Ini</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Expanded Syntax Breakdown */}
                      {isExpanded && (
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                          <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl text-xs space-y-1">
                            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                              <span>Relevansi dengan Prinsip Pembelajaran Mendalam (Deep Learning):</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300">
                              {model.karakteristikDeepLearning}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                              Alur Sintak Resmi & Pemetaan ke Pengalaman Belajar:
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                              {model.sintaks.map((stk) => (
                                <div
                                  key={stk.nomor}
                                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 space-y-1 shadow-2xs"
                                >
                                  <div className="flex items-center justify-between gap-1.5 font-bold text-xs">
                                    <span className="text-blue-900 dark:text-blue-300">
                                      Sintak {stk.nomor}: {stk.nama}
                                    </span>
                                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-black shrink-0 ${
                                      stk.tahapDeepLearning.includes('Memahami')
                                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                                        : stk.tahapDeepLearning.includes('Mengaplikasi')
                                        ? 'bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                                        : 'bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800'
                                    }`}>
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

                          {/* Suggested Methods for this Model */}
                          <div className="pt-2 flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="font-bold text-slate-700 dark:text-slate-300">
                              Metode Pendukung yang Disarankan:
                            </span>
                            {model.metodePendukung.map((met, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => onAppendMetode(met)}
                                className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-[11px] font-semibold cursor-pointer flex items-center gap-1"
                                title={`Klik untuk menambahkan metode ${met} ke kolom input`}
                              >
                                <Plus className="w-3 h-3" />
                                <span>{met}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: METODE PEMBELAJARAN AKTIF */}
          {activeTab === 'metode' && (
            <div className="space-y-4">
              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-1.5 pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 mr-1">
                  Kategori Metode:
                </span>
                {([
                  'Semua', 
                  'Interaksi & Kolaborasi', 
                  'Eksplorasi & Praktik', 
                  'Presentasi & Umpan Balik', 
                  'Penalaran & Analisis', 
                  'Simulasi & Bermain Peran'
                ] as const).map((kat) => (
                  <button
                    key={kat}
                    type="button"
                    onClick={() => setSelectedKategoriMetode(kat)}
                    className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                      selectedKategoriMetode === kat
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {kat}
                  </button>
                ))}
              </div>

              {/* Methods Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredMetode.map((metode) => {
                  const isIncludedInForm = currentValue.toLowerCase().includes(metode.chipLabel.toLowerCase()) || currentValue.toLowerCase().includes(metode.nama.toLowerCase());

                  return (
                    <div
                      key={metode.id}
                      className={`p-4 rounded-2xl border transition-all space-y-3 flex flex-col justify-between ${
                        isIncludedInForm
                          ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50/30 dark:bg-emerald-950/20'
                          : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="font-black text-sm sm:text-base text-slate-950 dark:text-white block">
                              {metode.nama}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-200 inline-block mt-0.5">
                              {metode.kategori}
                            </span>
                          </div>

                          {isIncludedInForm ? (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center gap-1 border border-emerald-300 dark:border-emerald-700 shrink-0">
                              <Check className="w-3 h-3" /> Ada di Form
                            </span>
                          ) : null}
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {metode.deskripsi}
                        </p>

                        <div className="p-2.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-1 text-[11px]">
                          <div className="text-slate-700 dark:text-slate-300">
                            <strong>Peran Deep Learning:</strong> {metode.peranDeepLearning}
                          </div>
                          <div className="text-slate-600 dark:text-slate-400">
                            <strong>Tips Guru:</strong> {metode.tipsPenerapan}
                          </div>
                        </div>
                      </div>

                      {/* Add Method Action Button */}
                      <button
                        type="button"
                        onClick={() => onAppendMetode(metode.chipLabel)}
                        className={`w-full py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isIncludedInForm
                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-2xs'
                        }`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isIncludedInForm ? 'Tambahkan Lagi ke Form' : 'Sisipkan Metode Ini ke Form'}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: PAKET KOMBINASI TERPADU */}
          {activeTab === 'paket' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50/70 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800/60 text-xs text-amber-950 dark:text-amber-200 space-y-1">
                <div className="font-black flex items-center gap-1.5 text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Paket Sinergi Model & Metode Siap Pakai</span>
                </div>
                <p>
                  Kombinasi model dan ragam metode terpadu yang telah disesuaikan dengan praktik pembelajaran mendalam (Deep Learning) untuk berbagai karakteristik mata pelajaran.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredPaket.map((paket) => (
                  <div
                    key={paket.id}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-2xs flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="font-black text-sm sm:text-base text-slate-950 dark:text-white">
                          {paket.judul}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950 text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800">
                          {paket.jenjang}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                        {paket.fokus}
                      </p>

                      <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl space-y-1.5 text-xs">
                        <div>
                          <span className="font-bold text-blue-900 dark:text-blue-300">Model Inti: </span>
                          <span className="text-slate-700 dark:text-slate-200">{paket.model}</span>
                        </div>
                        <div>
                          <span className="font-bold text-emerald-900 dark:text-emerald-300">Metode Terpadu: </span>
                          <span className="text-slate-600 dark:text-slate-300">{paket.metode.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectModel(paket.uraianLengkap, paket.judul)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-black bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 shadow-2xs cursor-pointer transition-colors"
                    >
                      <span>Terapkan Paket Ini ke Form</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/60 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
            Kombinasi model & metode akan secara otomatis memandu penyusunan sintaks kegiatan inti modul ajar.
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer ml-auto"
          >
            Tutup Panduan
          </button>
        </div>
      </div>
    </div>
  );
};
