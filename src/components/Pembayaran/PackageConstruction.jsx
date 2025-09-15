import React from "react";
import { FaCheckSquare } from "react-icons/fa";

// Data dari gambar
const packages = [
  {
    name: "Basic",
    features: [
      "Konsultasi",
      "Perencanaan & Ijin (IMB)",
      "Pekerjaan Struktur utama (Pengecoran fondasi, kolom, balok, dan dinding beton)",
      "Pekerjaan Dinding (Pemasangan bata merah/bata ringan, plesteran, dan acian)",
      "RAB (Rancangan Anggaran Biaya)",
      "Pekerjaan Atap (Pemasangan rangka atap baja ringan/kayu dan penutup atap)",
      "Instalasi dasar (Pemasangan jalur pipa air bersih/kotor dan jalur kabel listrik)",
      "Pekerjaan Plafon (Pemasangan plafon gypsum standar)",
      "Pemasangan Pintu & Jendela",
      "Survei Lapangan",
    ],
  },
  {
    name: "Gold",
    features: [
      "Konsultasi",
      "Denah & Site plan (2D) Revisi max 2x",
      "Design Exterior / Fasad",
      "Perencanaan & Ijin (IMB)",
      "Pekerjaan Struktur utama (Pengecoran fondasi, kolom, balok, dan dinding beton)",
      "Pekerjaan Dinding (Pemasangan bata merah/bata ringan, plesteran, dan acian)",
      "RAB (Rancangan Anggaran Biaya)",
      "Pekerjaan Atap (Pemasangan rangka atap baja ringan/kayu dan penutup atap)",
      "Instalasi dasar (Pemasangan jalur pipa air bersih/kotor dan jalur kabel listrik)",
      "Pekerjaan Plafon (Pemasangan plafon gypsum standar)",
      "Pemasangan Pintu & Jendela",
      "Pengawasan proyek (mandor)",
      "Survei lapangan",
    ],
  },
  {
    name: "Diamond",
    features: [
      "Konsultasi",
      "Denah & Site plan (2D) (Full service)",
      "Design Exterior & Interior (Render 3D & Visualisasi)",
      "Perencanaan & Ijin (IMB)",
      "Material Premium",
      "Pekerjaan Struktur utama (Pengecoran fondasi, kolom, balok, dan dinding beton)",
      "Pekerjaan Dinding (Pemasangan bata merah/bata ringan, plesteran, dan acian)",
      "RAB (Rancangan Anggaran Biaya)",
      "Pekerjaan Atap (Pemasangan rangka atap baja ringan/kayu dan penutup atap)",
      "Instalasi dasar (Pemasangan jalur pipa air bersih/kotor dan jalur kabel listrik)",
      "Pekerjaan Plafon (Pemasangan plafon gypsum standar)",
      "Pemasangan Pintu & Jendela",
      "Pekerjaan furniture (Pemasangan kabinet dapur dan lemari built-in)",
      "Pekerjaan Exterior & Lanskap",
      "Pengawasan Proyek",
      "Survei Lapangan",
    ],
  },
];

const allFeatures = [
  "Konsultasi",
  "Denah & Site plan (2D) Revisi max 2x",
  "Denah & Site plan (2D) (Full service)",
  "Design Exterior / Fasad",
  "Design Exterior & Interior (Render 3D & Visualisasi)",
  "Perencanaan & Ijin (IMB)",
  "Material Premium",
  "Pekerjaan Struktur utama (Pengecoran fondasi, kolom, balok, dan dinding beton)",
  "Pekerjaan Dinding (Pemasangan bata merah/bata ringan, plesteran, dan acian)",
  "RAB (Rancangan Anggaran Biaya)",
  "Pekerjaan Atap (Pemasangan rangka atap baja ringan/kayu dan penutup atap)",
  "Instalasi dasar (Pemasangan jalur pipa air bersih/kotor dan jalur kabel listrik)",
  "Pekerjaan Plafon (Pemasangan plafon gypsum standar)",
  "Pemasangan Pintu & Jendela",
  "Pekerjaan furniture (Pemasangan kabinet dapur dan lemari built-in)",
  "Pekerjaan Exterior & Lanskap",
  "Pengawasan proyek (mandor)",
  "Pengawasan Proyek",
  "Survei Lapangan",
];

const getFeatureStatus = (pkg, feature) => pkg.features.includes(feature);

const PackageConstructionCards = () => {
  return (
    <section className="py-16 bg-silver-50">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            PAKET KONSTRUKSI
          </h2>
          <div className="w-full grid grid-cols-4 gap-0 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header modern */}
            <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold text-lg py-6 px-4 border-b border-r rounded-tl-xl text-center tracking-wide">Fitur</div>
            {packages.map((pkg, idx) => (
              <div key={pkg.name} className={`bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-bold text-lg py-6 px-4 border-b ${idx < packages.length-1 ? 'border-r' : ''} text-center tracking-wide`}>{pkg.name}</div>
            ))}
            {/* Features modern */}
            {allFeatures.map((feature, i) => (
              <React.Fragment key={feature}>
                <div className={`py-4 px-4 border-b border-r text-gray-700 text-sm bg-gray-50 ${i === allFeatures.length-1 ? 'rounded-bl-xl' : ''}`}>{feature}</div>
                {packages.map((pkg, idx) => (
                  <div key={pkg.name+feature} className={`py-4 px-4 border-b ${idx < packages.length-1 ? 'border-r' : ''} text-center bg-white hover:bg-orange-50 transition-all`}>
                    {getFeatureStatus(pkg, feature) ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 shadow">
                        <FaCheckSquare className="text-lg" />
                      </span>
                    ) : (
                      <span className="inline-block w-6 h-6" />
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageConstructionCards;
