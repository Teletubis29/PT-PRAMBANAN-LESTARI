import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import productsData from "../../data/productsData";

export default function FeaturedProperties() {
  const navigate = useNavigate();

  // Ambil semua property dari productsData
  const properties = productsData;

  // Handler untuk navigasi ke detail
  const handleViewProperty = (propertyId) => {
    navigate(`/properti/${propertyId}`);
  };
  // Helper untuk render icon dari string
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
    <section className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-4xl font-bold tracking-widest uppercase mb-10 text-orange-500">
          Market Properties
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative z-10"
        >
          <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #f97316 !important; /* Tailwind orange-500 */
          z-index: 20;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
          {properties.map((property) => (
            <SwiperSlide key={property.id} className="h-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col min-h-[540px] max-h-[600px] justify-between relative">
                {/* For Sale Badge */}
                {property.forSale && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
                    FOR SALE
                  </div>
                )}
                {/* Sold Out Badge */}
                {property.soldOut && (
                  <div className="absolute top-4 right-4 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 shadow-lg">
                    SOLD OUT
                  </div>
                )}
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-72 max-h-60 object-contain bg-white"
                />
                <div className="p-6 flex flex-col h-full flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 h-14 flex items-start leading-tight">
                      <span className="line-clamp-2">{property.title}</span>
                    </h3>
                    <hr className="border-t border-gray-300" />
                    <p className="text-gray-600 text-sm mb-1 min-h-[48px] flex items-center">
                      {property.address}
                    </p>
                    <hr className="border-t border-gray-300 mb-4" />
                    {/* Facilities */}
                    <div className="grid grid-cols-2 gap-4 text-gray-600 text-sm mb-6 min-h-[96px]">
                      {property.soldOut ? (
                        <div className="col-span-2 p-4 text-sm text-gray-500 italic text-center">
                          Maaf, properti ini sudah tidak tersedia.
                          <br />
                          Kami siap membantu mencari alternatif terbaik untuk
                          Anda.
                        </div>
                      ) : (
                        property.facilities &&
                        property.facilities.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            {getIconComponent(f.icon)}
                            <span>{f.label}</span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => handleViewProperty(property.id)}
                      className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                      View Properties
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
