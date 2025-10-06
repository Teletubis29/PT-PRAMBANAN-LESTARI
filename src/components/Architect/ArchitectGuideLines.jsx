import React from "react";

export default function ArchitectGuidelines() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Single Card Container */}
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                alt="Pekerja konstruksi"
                className="w-full h-full min-h-[500px] object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-8 lg:p-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-snug mb-6">
                  Sebelum merancang / membangun,
                  <br />
                  <span className="text-orange-600">
                    Office, Rumah & Komersial,
                  </span>
                  <br />
                  pastikan Anda memahami hal berikut:
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Model
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Menentukan terlebih dahulu model atau konsep bangunan yang
                      akan anda inginkan. Jika masih bingung, anda bisa
                      berkonsultasi dengan tim kami.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Estetika
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Bangunan konstruksi harus dipadukan dengan gaya model yang
                      diinginkan sehingga hasil akhir sesuai keinginan anda.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Tata letak
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Desain bangunan office, rumah, dan komersial harus memiliki
                      tata letak yang menawarkan akses serta pergerakan mudah untuk
                      kenyamanan penghuni atau pengunjung.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Biaya
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ada baiknya mengetahui biaya jasa kontraktor bangunan agar
                      dapat memperkirakan estimasi anggaran yang perlu disiapkan.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      Material
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Pastikan anda memahami dan memilih jenis material yang tepat
                      beserta kelebihan dan kekurangannya masing-masing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
