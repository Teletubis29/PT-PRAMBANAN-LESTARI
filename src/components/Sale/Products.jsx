import React, { useState } from "react";
import productsData from "../../data/productsData";
import { FaHome, FaToilet, FaWater, FaBolt, FaBuilding, FaLayerGroup } from "react-icons/fa";
const iconMap = {
  FaHome: FaHome,
  FaToilet: FaToilet,
  FaWater: FaWater,
  FaBolt: FaBolt,
  FaBuilding: FaBuilding,
  FaLayerGroup: FaLayerGroup,
};

const pageSize = 8;

const Products = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(productsData.length / pageSize);
  const pagedProducts = productsData.slice((page - 1) * pageSize, page * pageSize);

  return (
    <section className=" min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-gray-400 text-2xl mb-10 pl-2 font-bold">Menu/Categories/Building</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {pagedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow flex flex-col border border-gray-200 relative overflow-hidden">
              <div className="relative">
                <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
                {product.soldOut && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SOLD OUT</span>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="font-semibold text-sm text-gray-800 mb-1">{product.title}</div>
                <div className="text-sm text-gray-600 mb-4">{product.address}</div>
                {/* Fasilitas */}
                <div className="grid grid-cols-3 gap-x-2 gap-y-2 text-xs text-gray-600 mb-4">
                  {product.facilities.map((f, i) => {
                    const Icon = iconMap[f.icon];
                    return (
                      <div key={i} className="flex items-center gap-1">
                        {Icon && <Icon size={16} />}
                        <span>{f.label}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex-1"></div>
                <div className="flex flex-col gap-2 mt-2">
                  <button className="bg-orange-400 text-white text-xs font-bold py-2 rounded hover:bg-orange-500 transition">View Properties</button>
                  {/* <button className="bg-orange-100 text-orange-500 text-xs font-bold py-2 rounded hover:bg-orange-200 transition border border-orange-300">Chat Whatsapp</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-7 h-7 rounded text-sm font-bold border border-gray-300 flex items-center justify-center ${page === i + 1 ? 'bg-gray-400 text-white' : 'bg-white text-gray-500 hover:bg-gray-200'}`}
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
