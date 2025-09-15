import React from "react";
import { FaCheckSquare } from "react-icons/fa";

const packages = [
  {
    name: "Basic",
    features: [
      "Konsultasi 2x",
      "Sketsa konsep desain (2D)",
      "Denah Lantai dasar",
      "Gambar kerja detail",
      "Revisi 1x",
    ],
  },
  {
    name: "Gold",
    features: [
      "Konsultasi 4x",
      "Design 2D",
      "Design 3D",
      "Gambar kerja (MEP dasar, Struktur, arsitektur)",
      "Perencanaan & Spesifikasi material",
      "Supervisi Langsung proyek",
      "Revisi 2x",
    ],
  },
  {
    name: "Diamond",
    features: [
      "Konsultasi full",
      "Design 2D",
      "Design 3D",
      "Rendering",
      "FREE design interior",
      "Gambar kerja lengkap",
      "Pemilihan Spesifikasi material",
      "MEP dasar & Struktur",
      "RAB full",
      "Revisi design berdasarkan kondisi lapangan",
      "Pemantauan Proyek Berkala (Kunjungan Lapangan Terjadwal)",
    ],
  },
];

const allFeatures = [
  "Konsultasi 2x",
  "Konsultasi 4x",
  "Konsultasi full",
  "Sketsa konsep desain (2D)",
  "Design 2D",
  "Design 3D",
  "Denah Lantai dasar",
  "Gambar kerja detail",
  "Gambar kerja (MEP dasar, Struktur, arsitektur)",
  "Rendering",
  "FREE design interior",
  "Gambar kerja lengkap",
  "Perencanaan & Spesifikasi material",
  "Pemilihan Spesifikasi material",
  "MEP dasar & Struktur",
  "RAB full",
  "Supervisi Langsung proyek",
  "Revisi 1x",
  "Revisi 2x",
  "Revisi design berdasarkan kondisi lapangan",
  "Pemantauan Proyek Berkala (Kunjungan Lapangan Terjadwal)",
];

const getFeatureStatus = (pkg, feature) => pkg.features.includes(feature);

const PackageCards = () => {
  return (
    <section className="py-16 bg-silver-50">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            PAKET ARSITEK
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

export default PackageCards;
