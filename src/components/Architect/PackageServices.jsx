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
      type: "3 Pilihan Paket",
    },
    {
      id: 2,
      title: "PAKET A2",
      subtitle: "Gedung",
      type: "1 Pilihan Paket",
    },
    {
      id: 3,
      title: "PAKET A3",
      subtitle: "Ruko",
      type: "2 Pilihan Paket",
    },
    {
      id: 4,
      title: "PAKET A4",
      subtitle: "Gudang",
      type: "1 Pilihan Paket",
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

          {/* Package Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gray-100 rounded-2xl p-8 text-center min-h-[280px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
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
              {/* Check if selectedPackage has packages array (multiple packages) */}
              {selectedPackage.packages ? (
                // Multiple packages display
                <div className="space-y-8">
                  {selectedPackage.packages.map((pkg, pkgIndex) => (
                    <div
                      key={pkg.packageId}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      {/* Package Header */}
                      <div className="mb-4 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {pkg.title}
                        </h3>
                        <p className="text-lg text-gray-600 mb-2">
                          {pkg.subtitle}
                        </p>
                        <div className="mb-4">
                          <span className="inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-lg font-semibold">
                            {pkg.price}
                          </span>
                        </div>
                      </div>

                      {/* Package Specifications */}
                      <div className="mb-4">
                        <h4 className="text-lg font-bold text-gray-800 mb-3">
                          Spesifikasi:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {pkg.specifications.map((spec, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 p-2 bg-gray-50 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold text-gray-800 block text-sm">
                                  {spec.feature}:
                                </span>
                                <span className="text-gray-600 text-xs">
                                  {spec.detail}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Package Additional Note */}
                      {pkg.additionalNote && (
                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                          <p className="text-xs text-yellow-800">
                            {pkg.additionalNote}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Single package display (original structure)
                <>
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
                </>
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
