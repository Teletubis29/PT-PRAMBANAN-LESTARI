import React, { useState } from "react";

const PackageInteriors = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <hr className="w-full border-t -mt-14 mb-14 border-gray-300" />
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Paket Interior
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan desain interior rumah dan kantor Anda
          </p>
        </div>

        {/* Main Image Container */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Loading State */}
            {!imageLoaded && !imageError && (
              <div className="w-full h-96 md:h-[500px] lg:h-[600px] bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-500">
                  <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p>Memuat gambar...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {imageError && (
              <div className="w-full h-96 md:h-[500px] lg:h-[600px] bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Gambar tidak dapat dimuat</p>
                  <p className="text-sm">Periksa kembali path file gambar</p>
                </div>
              </div>
            )}

            {/* Main Image */}
            <img
              src="/images/partial/package-interiors.jpg"
              alt="Paket Interior - Desain Interior Profesional"
              className={`w-full h-auto object-cover object-center transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => {
                setImageLoaded(true);
                setImageError(false);
              }}
              onError={() => {
                setImageError(true);
                setImageLoaded(false);
              }}
              style={{ display: imageError ? "none" : "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageInteriors;
