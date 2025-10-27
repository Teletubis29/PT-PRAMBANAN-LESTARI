import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import productsData from "../data/productsData";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = productsData.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Membuat array gambar - jika ada multiple images gunakan itu, jika tidak gunakan image utama
  const images = property?.images || [property?.image];

  // Helper untuk mendeteksi apakah file adalah video
  const isVideo = (fileName) => {
    return (
      fileName &&
      (fileName.includes(".mp4") ||
        fileName.includes(".webm") ||
        fileName.includes(".ogg"))
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (images.length > 1) {
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [images.length]);

  // Helper untuk render icon dari string
  const getIconComponent = (iconName) => {
    if (iconName.startsWith("Fa")) {
      const Icon = FaIcons[iconName];
      return Icon ? <Icon size={24} className="text-orange-500" /> : null;
    }
    if (iconName.startsWith("Md")) {
      const Icon = MdIcons[iconName];
      return Icon ? <Icon size={24} className="text-orange-500" /> : null;
    }
    return null;
  };

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Properti Tidak Ditemukan
          </h2>
          <Link
            to="/properti"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Kembali ke Daftar Properti
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm mt-4">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <nav className="text-sm text-gray-500 mb-4">
            <Link to="/" className="text-orange-500 hover:text-blue-500">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              to="/properti"
              className="text-orange-500 hover:text-blue-500"
            >
              Properti
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{property.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {property.title}
          </h1>
          <p className="text-gray-600 mt-2">{property.address}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery Slider */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative">
                {/* Main Image/Video */}
                <div className="relative h-64 md:h-[570px] overflow-hidden">
                  {isVideo(images[currentImageIndex]) ? (
                    <video
                      src={images[currentImageIndex]}
                      className="w-full h-full object-contain bg-gray-100"
                      controls
                      autoPlay
                      muted
                      loop
                    >
                      <p>Browser Anda tidak mendukung video HTML5.</p>
                    </video>
                  ) : (
                    <img
                      src={images[currentImageIndex]}
                      alt={`${property.title} - ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain bg-gray-100 transition-transform duration-300"
                    />
                  )}

                  {/* Navigation Arrows - Only show if more than 1 image */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronLeftIcon className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200"
                      >
                        <ChevronRightIcon className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  {images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndex + 1} / {images.length}
                    </div>
                  )}

                  {/* For Sale Badge */}
                  {property.forSale && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      FOR SALE
                    </div>
                  )}

                  {/* Sold Out Badge */}
                  {property.soldOut && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      SOLD OUT
                    </div>
                  )}

                  {/* Dots Indicator */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentImageIndex === index
                              ? "bg-white"
                              : "bg-white bg-opacity-50 hover:bg-opacity-75"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Thumbnail Navigation - Only show if more than 1 image */}
                {images.length > 1 && (
                  <div className="p-4 bg-gray-50">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
                            currentImageIndex === index
                              ? "border-orange-500 opacity-100"
                              : "border-gray-200 opacity-70 hover:opacity-100"
                          }`}
                        >
                          {isVideo(image) ? (
                            <>
                              <video
                                src={image}
                                className="w-full h-full object-cover"
                                muted
                              />
                              {/* Video Play Icon Overlay */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                <FaIcons.FaPlay className="text-white text-xs" />
                              </div>
                            </>
                          ) : (
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Detail Properti
              </h2>

              <div className="space-y-8">
                {/* Spesifikasi */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-500 mb-4">
                    Spesifikasi
                  </h3>
                  <div className="space-y-3">
                    {property.luasTanah && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Luas Tanah:</span>
                        <span className="font-medium">
                          {typeof property.luasTanah === "object"
                            ? `A: ${property.luasTanah.A}, B: ${property.luasTanah.B}`
                            : property.luasTanah}
                        </span>
                      </div>
                    )}
                    {property.luasBangunan && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Luas Bangunan:</span>
                        <span className="font-medium">
                          {typeof property.luasBangunan === "object"
                            ? `A: ${property.luasBangunan.A}, B: ${property.luasBangunan.B}`
                            : property.luasBangunan}
                        </span>
                      </div>
                    )}
                    {property.luasTanahSertifikat && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Luas Tanah (Sertifikat):
                        </span>
                        <span className="font-medium">
                          {property.luasTanahSertifikat}
                        </span>
                      </div>
                    )}
                    {property.sertifikat && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sertifikat:</span>
                        <span className="font-medium">
                          {property.sertifikat}
                        </span>
                      </div>
                    )}
                    {property.bangunan && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bangunan:</span>
                        <span className="font-medium">{property.bangunan}</span>
                      </div>
                    )}
                    {property.dayaListrik && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daya Listrik:</span>
                        <span className="font-medium">
                          {property.dayaListrik}
                        </span>
                      </div>
                    )}
                    {property.lift && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lift:</span>
                        <span className="font-medium">{property.lift}</span>
                      </div>
                    )}
                    {property.telekomunikasi && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Telekomunikasi:</span>
                        <span className="font-medium">
                          {property.telekomunikasi}
                        </span>
                      </div>
                    )}
                    {property.ac && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">AC:</span>
                        <span className="font-medium">{property.ac}</span>
                      </div>
                    )}
                    {property.fireSystem && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Fire System:</span>
                        <span className="font-medium">
                          {property.fireSystem}
                        </span>
                      </div>
                    )}
                    {property.kamarMandi && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Kamar Mandi:</span>
                        <span className="font-medium">
                          {property.kamarMandi}
                        </span>
                      </div>
                    )}
                    {property.sanitary && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sanitary:</span>
                        <span className="font-medium">{property.sanitary}</span>
                      </div>
                    )}
                    {property.air && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Air:</span>
                        <span className="font-medium">{property.air}</span>
                      </div>
                    )}
                    {property.lantai && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Lantai:</span>
                        <span className="font-medium">{property.lantai}</span>
                      </div>
                    )}
                    {property.plafon && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plafon:</span>
                        <span className="font-medium">{property.plafon}</span>
                      </div>
                    )}
                    {property.aksesJalan && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Akses Jalan:</span>
                        <span className="font-medium">
                          {property.aksesJalan}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Status */}
                <div>
                  <h3 className="text-lg font-semibold text-orange-500 mb-4">
                    Status
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          property.soldOut
                            ? "bg-red-100 text-red-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {property.soldOut ? "Sold Out" : "Tersedia"}
                      </span>
                    </div>
                    {property.sertifikatBerlaku && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Berlaku Sampai:</span>
                        <span className="font-medium">
                          {property.sertifikatBerlaku}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Detail Lantai */}
            {property.detailLantai && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Detail Lantai
                </h2>
                <ul className="space-y-2">
                  {property.detailLantai.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaIcons.FaBuilding
                        className="text-orange-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fasilitas Tambahan (selain facilities) */}
            {property.fasilitas && property.fasilitas.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Fasilitas Tambahan
                </h2>
                <ul className="space-y-2">
                  {property.fasilitas.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaIcons.FaPlus
                        className="text-blue-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Facilities */}
            {property.facilities && property.facilities.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Fasilitas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      {getIconComponent(facility.icon)}
                      <span className="text-gray-700">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fasilitas Umum */}
            {property.fasilitasUmum && property.fasilitasUmum.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Fasilitas Umum
                </h2>
                <ul className="space-y-2">
                  {property.fasilitasUmum.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <FaIcons.FaCheck
                        className="text-green-500 mt-1 flex-shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Lokasi */}
            {property.lokasi && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Lokasi Strategis
                </h2>
                <div className="space-y-3">
                  {property.lokasi.map((loc, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                      {getIconComponent(loc.icon)}
                      <span className="text-gray-700">{loc.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 h-fit">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Hubungi Kami
              </h3>

              {property.marketingContact && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">
                    Marketing Contact:
                  </h4>
                  <div className="space-y-2">
                    {property.marketingContact.map((contact, index) => (
                      <a
                        key={index}
                        href={`tel:${contact}`}
                        className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition"
                      >
                        <FaIcons.FaPhone size={16} />
                        <span>{contact}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <a
                  href="https://wa.me/6281188088995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition inline-flex items-center justify-center" // Menambahkan 'inline-flex items-center justify-center' untuk penataan ikon dan teks yang lebih baik di dalam tautan.
                >
                  <FaIcons.FaWhatsapp className="inline mr-2" />
                  Chat WhatsApp
                </a>
                <a
                  href="tel:0218509305"
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition inline-flex items-center justify-center"
                >
                  <FaIcons.FaPhone className="inline mr-2" />
                  Telepon Sekarang
                </a>
                <a
                  href="mailto:dev.prambananlestari@gmail.com" // Menggunakan skema "mailto:" dengan alamat email tujuan
                  className="w-full border border-orange-500 text-orange-500 py-3 px-4 rounded-lg font-medium hover:bg-orange-50 transition inline-flex items-center justify-center"
                >
                  <FaIcons.FaEnvelope className="inline mr-2" />
                  Kirim Email
                </a>
              </div>
            </div>

            {/* Additional Note */}
            {property.additionalNote && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  <FaIcons.FaExclamationTriangle className="inline mr-2" />
                  Catatan Penting
                </h3>
                <p className="text-yellow-700 text-sm italic">
                  {property.additionalNote}
                </p>
              </div>
            )}

            {/* Google Maps Link */}
            {property.googleMapsLink && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Lokasi di Peta
                </h2>
                <a
                  href={property.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition"
                >
                  <FaIcons.FaMapMarkerAlt size={20} />
                  Lihat di Google Maps
                </a>
              </div>
            )}

            {/* Disclaimer */}
            {property.disclaimer && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  <FaIcons.FaExclamationTriangle className="inline mr-2" />
                  Disclaimer
                </h3>
                <p className="text-yellow-700 text-sm italic">
                  {property.disclaimer}
                </p>
              </div>
            )}

            {/* Quick Info */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                Informasi Penting
              </h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>✓ Konsultasi gratis</li>
                <li>✓ Survey lokasi tersedia</li>
                <li>✓ Proses legal aman</li>
                <li>✓ After sales service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
