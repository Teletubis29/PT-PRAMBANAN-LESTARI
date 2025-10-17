import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const pageSize = 8;

const Products = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  
  // Filter hanya property dengan kategori "office"
  const officeProperties = productsData.filter(property => {
    const category = property.category ? property.category.toLowerCase() : "office";
    return category === "office";
  });
  
  const totalPages = Math.ceil(officeProperties.length / pageSize);
  const pagedProducts = officeProperties.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  // Handler untuk navigasi ke detail
  const handleViewProperty = (propertyId) => {
    navigate(`/properti/${propertyId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
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

  return (
    <section id="products-section" className="min-h-screen pt-2">
      <div className="max-w-8xl mx-auto px-4 py-6">
        <h2 className="text-center text-gray-500 text-4xl mb-14  pl-2 font-extrabold mt-4">
          Lihat Semua Properti
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pagedProducts.map((product) => {
            // Helper render icon
            const getIconComponent = (iconName) => {
              if (iconName.startsWith("Fa")) {
                const Icon = FaIcons[iconName];
                return Icon ? <Icon size={20} /> : null;
              }
              if (iconName.startsWith("Md")) {
                const Icon = MdIcons[iconName];
                return Icon ? <Icon size={20} /> : null;
              }
              return null;
            };
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col min-h-[540px] max-h-[600px] border border-gray-200"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-72 max-h-60 object-contain bg-white"
                  />
                  {product.soldOut && (
                    <span className="absolute top-2 right-2 bg-gray-600 text-white text-xs font-bold px-2 py-1 rounded">
                      SOLD OUT
                    </span>
                  )}
                  {product.forSale && !product.soldOut && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      FOR SALE
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1 h-full">
                  <div className="flex flex-col min-h-[210px]">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 min-h-[48px] flex items-center line-clamp-2">
                      {product.address}
                    </p>
                    <hr className="border-t border-gray-300 mb-4" />
                    {/* Facilities */}
                    <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm min-h-[96px]">
                      {product.soldOut ? (
                        <div className="col-span-2 p-4 text-sm text-gray-500 italic text-center">
                          Maaf, properti ini sudah tidak tersedia.
                          <br />
                          Kami siap membantu mencari alternatif terbaik untuk
                          Anda.
                        </div>
                      ) : (
                        product.facilities &&
                        product.facilities.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            {getIconComponent(f.icon)}
                            <span>{f.label}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto pt-6">
                    <button
                      onClick={() => handleViewProperty(product.id)}
                      className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                      View Properties
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Professional Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-6 my-14 pt-5">
            {/* Pagination Info */}
            <div className="text-sm text-slate-600 font-medium">
              Menampilkan {currentPage * pageSize + 1} -{" "}
              {Math.min(
                (currentPage + 1) * pageSize,
                officeProperties.length
              )}{" "}
              dari {officeProperties.length} properti
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
      </div>
    </section>
  );
};

export default Products;
