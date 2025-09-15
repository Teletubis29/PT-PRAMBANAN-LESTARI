import React from "react";
import { FaCheckSquare } from "react-icons/fa";

// Data dari gambar
const packages = [
  {
    name: "Basic",
    features: [
      "Konsultasi design interior 2x",
      "Denah rencana / Site plan",
      "Gambar tampak potongan",
      "All view 3D render Interior & Exterior",
      "Rekomendasi 3D design",
      "Gambar kerja Struktur Design interior",
      "Revisi 2x",
    ],
  },
  {
    name: "Gold",
    features: [
      "Konsultasi design interior 2x",
      "Denah rencana / Site plan",
      "Gambar tampak potongan",
      "All view 3D render Interior & Exterior",
      "Rekomendasi 3D design",
      "Gambar kerja Struktur Design interior",
      "Rekomended Material",
      "RAB (Rancangan Anggaran Bangunan)",
      "Video render realists",
      "Revisi 4x",
    ],
  },
  {
    name: "Diamond",
    features: [
      "Konsultasi design interior 2x",
      "Denah layout / Site plan Full",
      "Gambar tampak potongan",
      "All view 3D render Interior & Exterior",
      "Rekomendasi 3D design",
      "Gambar kerja Struktur Design interior",
      "Rekomended Material",
      "RAB (Rancangan Anggaran Bangunan)",
      "Video render realists",
      "Video render ONLINE",
      "Perhitungan Struktur",
      "Revisi Full Service"
    ],
  },
];

const allFeatures = [
  "Konsultasi design interior 2x",
  "Denah rencana / Site plan",
  "Denah layout / Site plan Full",
  "Gambar tampak potongan",
  "All view 3D render Interior & Exterior",
  "Rekomendasi 3D design",
  "Gambar kerja Struktur Design interior",
  "Revisi 2x",
  "Rekomended Material",
  "RAB (Rancangan Anggaran Bangunan)",
  "Video render realists",
  "Revisi 4x",
  "Video render ONLINE",
  "Perhitungan Struktur",  
  "Revisi Full Service"
];

const getFeatureStatus = (pkg, feature) => pkg.features.includes(feature);

const PackageInteriorCards = () => {
  return (
    <section className="py-16 bg-silver-50">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            PAKET INTERIOR DESIGN
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

export default PackageInteriorCards;
