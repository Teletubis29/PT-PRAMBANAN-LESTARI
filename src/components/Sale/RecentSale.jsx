import React from "react";
import productsData from "../../data/productsData";
import { FaHome, FaToilet, FaWater, FaBolt, FaBuilding, FaLayerGroup } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const iconMap = {
  FaHome: FaHome,
  FaToilet: FaToilet,
  FaWater: FaWater,
  FaBolt: FaBolt,
  FaBuilding: FaBuilding,
  FaLayerGroup: FaLayerGroup,
};

const RecentSale = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-400">RECENT</h2>
        
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          className="relative"
        >
         <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #f97316 !important; /* Tailwind orange-500 */
          z-index: 20;
        }
      `}</style>
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white rounded-lg shadow flex flex-col border border-gray-200 relative overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
                  {product.soldOut && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SOLD OUT</span>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="font-semibold text-sm text-gray-800 mb-1">{product.title}</div>
                  <div className="text-sm text-gray-600 mb-4">{product.address}</div>
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentSale;
