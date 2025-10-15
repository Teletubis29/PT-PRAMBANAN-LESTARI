import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaRulerCombined,
  FaExpand,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import productsData from "../../data/productsData";

const ExperienceContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const uniqueCategories = [
    ...new Set(
      productsData.map((p) =>
        p.category ? p.category.toLowerCase() : "office"
      )
    ),
  ];

  const getCategoryDisplayName = (category) => {
    if (!category) return "Galeries Gedung";
    switch (category.toLowerCase()) {
      case "office":
        return "Galeries Gedung";
      case "residential":
        return "Galeries Residential";
      case "commercial":
        return "Galeries Commercials";
      default:
        return "Galeries Gedung";
    }
  };

  // Only show All, Residential, and Commercial (exclude Galeries Gedung)
  const categories = ["All", "Galeries Residential", "Galeries Commercials"];

  const filteredProjects = selectedCategory === "All" 
    ? productsData.filter(property => {
        const category = property.category ? property.category.toLowerCase() : "office";
        return category === "office" || category === "residential" || category === "commercial";
      })
    : productsData.filter((property) => {
        const categoryDisplayName = getCategoryDisplayName(property.category);
        return categoryDisplayName === selectedCategory;
      });

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  React.useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory]);

  const scrollToTop = () => {
    const categorySection = document.querySelector(".category-filter-section");
    if (categorySection) {
      categorySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({
        top: window.pageYOffset - 200,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    scrollToTop();
  };

  const getPaginationPages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(0, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (range[0] > 1) {
      rangeWithDots.push(0, "...");
    } else if (range[0] === 1) {
      rangeWithDots.push(0);
    }

    rangeWithDots.push(...range);

    if (range[range.length - 1] < totalPages - 2) {
      rangeWithDots.push("...", totalPages - 1);
    } else if (range[range.length - 1] === totalPages - 2) {
      rangeWithDots.push(totalPages - 1);
    }

    return rangeWithDots;
  };

  const isVideo = (fileName) => {
    return (
      fileName &&
      (fileName.includes(".mp4") ||
        fileName.includes(".webm") ||
        fileName.includes(".ogg"))
    );
  };

  // Helper untuk truncate text
  const truncateText = (text, maxLength = 30) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  // Helper untuk check if text is truncated
  const isTextTruncated = (text, maxLength = 30) => {
    if (!text) return false;
    return text.length > maxLength;
  };

  const openModal = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      const images = selectedProject.experienceImages || selectedProject.images || [selectedProject.image];
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      const images = selectedProject.experienceImages || selectedProject.images || [selectedProject.image];
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16 font-poppins max-w-7xl">
        {/* Category Filter */}
        <div className="category-filter-section flex justify-center space-x-4 -mt-20 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-md font-semibold shadow-md transition ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProjects.map((property) => {
            const images = property.experienceImages || property.images || [property.image];
            const mainImage = images[0];

            return (
              <div
                key={property.id}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] border border-slate-100"
              >
                {/* Main Image */}
                <div className="relative overflow-hidden h-64 bg-slate-100">
                  {isVideo(mainImage) ? (
                    <video
                      src={mainImage}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      muted
                      loop
                      controls={false}
                    />
                  ) : (
                    <img
                      src={mainImage}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}

                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />

                  {/* Image Count Badge */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {images.length} media
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => openModal(property, 0)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-opacity-100 transition-all">
                      <FaExpand className="w-6 h-6 text-slate-700" />
                    </div>
                  </button>
                </div>

                {/* Property Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-500 transition-colors">
                    {property.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center text-slate-600 mb-4">
                    <FaMapMarkerAlt className="w-4 h-4 mr-2 text-blue-500" />
                    <span className="text-sm" title={property.address}>
                      {truncateText(property.address, 40)}
                    </span>
                  </div>

                  {/* Property Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center">
                      <FaRulerCombined className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-slate-600" title={`LT: ${property.luasTanahSertifikat}`}>
                        LT: {truncateText(property.luasTanahSertifikat, 15)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <FaBuilding className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-slate-600" title={`LB: ${property.luasBangunan}`}>
                        LB: {truncateText(property.luasBangunan, 15)}
                      </span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <FaBuilding className="w-4 h-4 mr-2 text-purple-500" />
                      <span className="text-slate-600" title={property.bangunan}>
                        {truncateText(property.bangunan, 20)}
                      </span>
                    </div>
                  </div>

                  {/* Show "Lihat Detail" button if any text is truncated */}
                  {(isTextTruncated(property.luasTanahSertifikat, 15) || 
                    isTextTruncated(property.luasBangunan, 15) || 
                    isTextTruncated(property.bangunan, 20) ||
                    isTextTruncated(property.address, 40)) && (
                    <div className="mb-4">
                      <button
                        onClick={() => openModal(property, 0)}
                        className="text-orange-500 hover:text-orange-600 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <FaExpand className="w-3 h-3" />
                        Lihat Detail Lengkap
                      </button>
                    </div>
                  )}

                  {/* Thumbnail Images */}
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.slice(1, 4).map((media, idx) => (
                      <button
                        key={idx}
                        onClick={() => openModal(property, idx + 1)}
                        className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors relative"
                      >
                        {isVideo(media) ? (
                          <video
                            src={media}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                            muted
                          />
                        ) : (
                          <img
                            src={media}
                            alt={`${property.title} ${idx + 2}`}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-200"
                          />
                        )}
                        {isVideo(media) && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                              <div className="w-0 h-0 border-l-2 border-l-black border-y-1 border-y-transparent ml-0.5"></div>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                    {images.length > 4 && (
                      <button
                        onClick={() => openModal(property, 4)}
                        className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-blue-400 transition-colors bg-slate-100 flex items-center justify-center"
                      >
                        <span className="text-sm font-bold text-slate-600">
                          +{images.length - 4}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 mb-1 pt-5">
            {/* Pagination Info */}
            <div className="text-sm text-slate-600 font-medium">
              Menampilkan {currentPage * itemsPerPage + 1} -{" "}
              {Math.min(
                (currentPage + 1) * itemsPerPage,
                filteredProjects.length
              )}{" "}
              dari {filteredProjects.length} properti
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-3">
              {/* Previous Page */}
              <button
                onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:border-orange-400 hover:text-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                title="Halaman Sebelumnya"
              >
                <FaChevronLeft className="w-3 h-3" />
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-2">
                {getPaginationPages().map((page, idx) => {
                  if (page === "...") {
                    return (
                      <span
                        key={`dots-${idx}`}
                        className="px-3 py-2 text-slate-400 font-medium"
                      >
                        ...
                      </span>
                    );
                  }

                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-12 h-12 rounded-xl font-semibold transition-all duration-200 shadow-sm ${
                        isActive
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105 border-2 border-orange-500"
                          : "bg-white border-2 border-slate-200 text-slate-700 hover:border-orange-400 hover:text-orange-600 hover:shadow-md hover:transform hover:scale-105"
                      }`}
                    >
                      {page + 1}
                    </button>
                  );
                })}
              </div>

              {/* Next Page */}
              <button
                onClick={() =>
                  handlePageChange(Math.min(totalPages - 1, currentPage + 1))
                }
                disabled={currentPage === totalPages - 1}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border-2 border-slate-200 text-slate-700 hover:border-orange-400 hover:text-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
                title="Halaman Selanjutnya"
              >
                <FaChevronRight className="w-3 h-3" />
              </button>
            </div>

            {/* Quick Jump (if many pages) */}
            {totalPages > 5 && (
              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-600 font-medium">
                  Lompat ke halaman:
                </span>
                <select
                  value={currentPage}
                  onChange={(e) => handlePageChange(parseInt(e.target.value))}
                  className="px-3 py-2 rounded-lg border-2 border-slate-200 text-slate-700 focus:border-orange-400 focus:outline-none transition-colors bg-white shadow-sm"
                >
                  {Array.from({ length: totalPages }, (_, i) => (
                    <option key={i} value={i}>
                      Halaman {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-5xl max-h-full bg-white rounded-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
              >
                <FaTimes className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row max-h-[90vh]">
                {/* Image/Video Section */}
                <div className="lg:w-2/3 relative bg-black">
                  {(() => {
                    const images = selectedProject.experienceImages || selectedProject.images || [
                      selectedProject.image,
                    ];
                    const currentMedia = images[currentImageIndex];

                    return isVideo(currentMedia) ? (
                      <video
                        src={currentMedia}
                        className="w-full h-full object-contain max-h-[60vh] lg:max-h-[90vh]"
                        controls
                        autoPlay
                        muted
                      />
                    ) : (
                      <img
                        src={currentMedia}
                        alt={selectedProject.title}
                        className="w-full h-full object-contain max-h-[60vh] lg:max-h-[90vh]"
                      />
                    );
                  })()}

                  {/* Navigation Arrows */}
                  {(() => {
                    const images = selectedProject.experienceImages || selectedProject.images || [
                      selectedProject.image,
                    ];
                    return (
                      images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all"
                          >
                            <FaChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all"
                          >
                            <FaChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )
                    );
                  })()}

                  {/* Image Counter */}
                  {(() => {
                    const images = selectedProject.experienceImages || selectedProject.images || [
                      selectedProject.image,
                    ];
                    return (
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full text-sm">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    );
                  })()}
                </div>

                {/* Property Details Section */}
                <div className="lg:w-1/3 p-6 overflow-y-auto max-h-[40vh] lg:max-h-[90vh]">
                  <h2 className="text-2xl font-bold text-slate-800 mb-3">
                    {selectedProject.title}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <p className="font-medium text-slate-800">Lokasi</p>
                        <p className="text-slate-600">
                          {selectedProject.lokasi}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaRulerCombined className="w-5 h-5 mr-3 text-green-500" />
                      <div>
                        <p className="font-medium text-slate-800">Luas Tanah</p>
                        <p className="text-slate-600">
                          {selectedProject.luasTanah}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaBuilding className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <p className="font-medium text-slate-800">
                          Luas Bangunan
                        </p>
                        <p className="text-slate-600">
                          {selectedProject.luasBangunan}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <FaBuilding className="w-5 h-5 mr-3 text-purple-500" />
                      <div>
                        <p className="font-medium text-slate-800">
                          Jumlah Lantai
                        </p>
                        <p className="text-slate-600">
                          {selectedProject.bangunan} Lantai
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  {selectedProject.kamarTidur && (
                    <div className="border-t pt-4">
                      <h3 className="font-semibold text-slate-800 mb-3">
                        Detail Properti
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-slate-600">Kamar Tidur</p>
                          <p className="font-medium">
                            {selectedProject.kamarTidur}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-600">Kamar Mandi</p>
                          <p className="font-medium">
                            {selectedProject.kamarMandi}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-600">Carport</p>
                          <p className="font-medium">
                            {selectedProject.carport}
                          </p>
                        </div>
                        <div>
                          <p className="text-slate-600">Listrik</p>
                          <p className="font-medium">
                            {selectedProject.listrik}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Disclaimer */}
                  {selectedProject.disclaimer && (
                    <div className="border-t pt-4 mt-4">
                      <p className="text-xs text-slate-500 italic">
                        {selectedProject.disclaimer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr className="w-full border-t  border-gray-300" />
    </>
  );
};

export default ExperienceContent;
