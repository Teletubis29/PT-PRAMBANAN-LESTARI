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
        if (e.key === 'ArrowLeft') {
          prevImage();
        } else if (e.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
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
                {/* Main Image */}
                <div className="relative h-64 md:h-[570px] overflow-hidden">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${property.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain bg-gray-100 transition-transform duration-300"
                  />
                  
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

                  {/* Dots Indicator */}
                  {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            currentImageIndex === index
                              ? 'bg-white'
                              : 'bg-white bg-opacity-50 hover:bg-opacity-75'
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
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            currentImageIndex === index
                              ? 'border-orange-500 opacity-100'
                              : 'border-gray-200 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            {/* Facilities */}
            {property.facilities && (
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
            {property.fasilitasUmum && (
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
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6 sticky top-6 z-10 h-fit">
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
                <button className="w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition">
                  <FaIcons.FaWhatsapp className="inline mr-2" />
                  Chat WhatsApp
                </button>
                <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition">
                  <FaIcons.FaPhone className="inline mr-2" />
                  Telepon Sekarang
                </button>
                <button className="w-full border border-orange-500 text-orange-500 py-3 px-4 rounded-lg font-medium hover:bg-orange-50 transition">
                  <FaIcons.FaEnvelope className="inline mr-2" />
                  Kirim Email
                </button>
              </div>
            </div>

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
