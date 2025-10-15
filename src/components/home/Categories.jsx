import { FaBuilding, FaHome, FaDraftingCompass, FaTools, FaCity, FaCouch , FaWarehouse} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const items = [
    { icon: <FaBuilding size={48} />, label: "Penjualan Properti" },
    { icon: <FaTools size={48} />, label: "Jasa Arsitektur" },
    { icon: <FaCouch size={48} />, label: "Jasa Interior" },
    { icon: <FaDraftingCompass size={48} />, label: "Our Experience" },
  ];
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-100 text-center">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-12 text-gray-500">
        Kategori
      </h2>

      {/* Grid Icons */}
      <div className="flex flex-wrap justify-center gap-12">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => {
              if (item.label === "Penjualan Properti") {
                navigate("/properti");
                // Scroll ke Products section setelah navigasi
                setTimeout(() => {
                  const productsSection = document.getElementById('products-section');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              } else if (item.label === "Jasa Arsitektur") {
                navigate("/jasa-arsitektur");
                // Scroll ke paling atas setelah navigasi
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else if (item.label === "Jasa Interior") {
                navigate("/interiors");
                // Scroll ke paling atas setelah navigasi
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              } else if (item.label === "Our Experience") {
                navigate("/our-experience");
                // Scroll ke paling atas setelah navigasi
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }
            }}
          >
            {/* Circle Icon */}
            <div className="w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:bg-orange-500 transition duration-300">
              <span className="text-gray-700 group-hover:text-white">
                {item.icon}
              </span>
            </div>
            {/* Label */}
            <span className="mt-4 text-base font-medium text-gray-700 group-hover:text-orange-600 transition">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
