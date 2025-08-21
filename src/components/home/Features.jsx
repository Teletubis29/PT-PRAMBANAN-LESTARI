import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaToilet, FaWater, FaBolt, FaBuilding } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdOutlineLayers } from "react-icons/md";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Building",
      address: "Jl. Tanah Koja no. 17 dan sebagainya",
      image:
        "https://plus.unsplash.com/premium_photo-1676467492300-344de29e3161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      facilities: [
        { icon: <FaHome size={20} />, label: "Lift" },
        { icon: <FaToilet size={20} />, label: "Toilet" },
        { icon: <FaWater size={20} />, label: "Water" },
        { icon: <FaBolt size={20} />, label: "Listrik" },
        { icon: <MdOutlineLayers size={20} />, label: "Lantai keramik" },
        { icon: <FaBuilding size={20} />, label: "Ciling tinggi" },
      ],
    },
    {
      id: 2,
      title: "Apartemen",
      address: "Jl. Sudirman no. 25, Surabaya",
      image:
        "https://plus.unsplash.com/premium_photo-1676467492300-344de29e3161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      facilities: [
        { icon: <FaHome size={20} />, label: "Lift" },
        { icon: <FaToilet size={20} />, label: "Toilet" },
        { icon: <FaWater size={20} />, label: "Water" },
        { icon: <FaBolt size={20} />, label: "Listrik" },
      ],
    },
    {
      id: 3,
      title: "Rumah",
      address: "Jl. Setiabudi no. 10, Bandung",
      image:
        "https://plus.unsplash.com/premium_photo-1676467492300-344de29e3161?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      facilities: [
        { icon: <FaToilet size={20} />, label: "Toilet" },
        { icon: <FaWater size={20} />, label: "Water" },
        { icon: <FaBolt size={20} />, label: "Listrik" },
      ],
    },
    {
      id: 4,
      title: "Apartemen",
      address: "Jl. Setiabudi no. 10, Jakarta",
      image:
        "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?_gl=1*1pk0d47*_ga*MTc2NTU0NDU4LjE3MzAzMDY3MjA.*_ga_8JE65Q40S6*czE3NTU3NzkwMjAkbzQkZzEkdDE3NTU3NzkwMjMkajU3JGwwJGgw",
      facilities: [
        { icon: <FaToilet size={20} />, label: "Toilet" },
        { icon: <FaWater size={20} />, label: "Water" },
        { icon: <FaBolt size={20} />, label: "Listrik" },
        { icon: <MdOutlineLayers size={20} />, label: "Lantai keramik" },
        { icon: <FaBuilding size={20} />, label: "Ciling tinggi" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-4xl font-bold tracking-widest uppercase mb-10 text-orange-500">
          Featured Properties
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
          {/* Custom style untuk panah Swiper agar selalu terlihat dan oranye */}
          <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #f97316 !important; /* Tailwind orange-500 */
          z-index: 20;
        }
      `}</style>
          {properties.map((property) => (
            <SwiperSlide key={property.id} className="h-full">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col min-h-[540px]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-72 object-contain bg-white"
                />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {property.address}
                    </p>

                    {/* Facilities */}
                    <div className="grid grid-cols-3 gap-4 text-gray-600 text-sm mb-6 min-h-[72px]">
                      {property.facilities.map((f, i) => (
                        <div key={i} className="flex items-center gap-2">
                          {f.icon}
                          <span>{f.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                      View Properties
                    </button>
                    <button className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-100 transition">
                      Chat WhatsApp
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
