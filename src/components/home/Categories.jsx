import { FaBuilding, FaHome, FaDraftingCompass, FaTools, FaCity, FaCouch } from "react-icons/fa";

const Categories = () => {
  const items = [
    { icon: <FaBuilding size={48} />, label: "Gedung" },
    { icon: <FaCity size={48} />, label: "Apart / Ruko" },
    { icon: <FaHome size={48} />, label: "Rumah" },
    { icon: <FaDraftingCompass size={48} />, label: "Jasa Arsitek" },
    { icon: <FaCouch size={48} />, label: "Jasa Design Interior" },
    { icon: <FaTools size={48} />, label: "Jasa Konstruksi" },
  ];

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
