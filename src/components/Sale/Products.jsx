import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../../data/productsData";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const pageSize = 8;

const Products = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  
  // Filter hanya property dengan kategori "office"
  const officeProperties = productsData.filter(property => {
    const category = property.category ? property.category.toLowerCase() : "office";
    return category === "office";
  });
  
  const totalPages = Math.ceil(officeProperties.length / pageSize);
  const pagedProducts = officeProperties.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Handler untuk navigasi ke detail
  const handleViewProperty = (propertyId) => {
    navigate(`/properti/${propertyId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
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
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-7 h-7 rounded text-sm font-bold border border-gray-300 flex items-center justify-center ${
                page === i + 1
                  ? "bg-gray-400 text-white"
                  : "bg-white text-gray-500 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
