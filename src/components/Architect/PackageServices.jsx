import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import architectPackageData from "../../data/ArchitectPackageData";

export default function PackageServices() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packages = [
    {
      id: 1,
      title: "PAKET A1",
      subtitle: "Rumah tinggal",
      type: "standart",
    },
    {
      id: 2,
      title: "PAKET A2",
      subtitle: "Rumah tinggal",
      type: "mewah",
    },
    {
      id: 3,
      title: "PAKET A3",
      subtitle: "Rumah tinggal",
      type: "luxury",
    },
    {
      id: 4,
      title: "Jasa konstruksi",
      subtitle: "Rumah toko",
      type: "",
    },
    {
      id: 5,
      title: "Jasa konstruksi",
      subtitle: "Rumah toko",
      type: "Premium",
    },
    {
      id: 6,
      title: "Jasa konstruksi",
      subtitle: "Gedung",
      type: "5-8 lantai",
    },
  ];

  const handleViewPackage = (packageId) => {
    const packageDetail = architectPackageData.find(
      (pkg) => pkg.id === packageId
    );
    setSelectedPackage(packageDetail);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-600 mb-8">
              Daftar paket pekerjaan jasa konstruksi
            </h2>
          </div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gray-100 rounded-2xl p-8 text-center min-h-[240px] flex flex-col justify-between"
              >
                {/* Text Content */}
                <div className="flex-1 flex flex-col justify-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-1">{pkg.subtitle}</p>
                  {pkg.type && (
                    <p className="text-lg text-gray-700 font-medium">
                      {pkg.type}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  onClick={() => handleViewPackage(pkg.id)}
                  className="bg-orange-400 hover:bg-orange-500 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200"
                >
                  Lihat paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            {/* Modal Header - Fixed */}
            <div className="flex-shrink-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedPackage.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {selectedPackage.subtitle}
                </p>
                <p className="text-sm text-gray-500">
                  {selectedPackage.description}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Price */}
              <div className="mb-6 text-center">
                <span className="inline-block bg-gray-100 text-gray-800 px-6 py-2 rounded-full text-lg font-semibold">
                  {selectedPackage.price}
                </span>
              </div>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Spesifikasi Detail:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPackage.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <span className="font-semibold text-gray-800 block">
                          {spec.feature}:
                        </span>
                        <span className="text-gray-600 text-sm">
                          {spec.detail}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Note */}
              {selectedPackage.additionalNote && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    {selectedPackage.additionalNote}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer - Fixed */}
            <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-2xl">
              <div className="flex gap-4 justify-center">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
