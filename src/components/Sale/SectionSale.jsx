import React from "react";

const sectionData = [
  {
    title: "Gedung",
    subtitle: "Projek baru",
    desc: "mengapa memilih pt prambanan lestari untuk Gedung, rumah dan jasa layanan kebutuhan anda?",
    bg: "bg-gray-300",
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Residentials",
    subtitle: "Projek baru",
    desc: "mengapa memilih pt prambanan lestari untuk Gedung, rumah dan jasa layanan kebutuhan anda?",
    bg: "bg-white",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    title: "Commercials",
    subtitle: "Projek baru",
    desc: "mengapa memilih pt prambanan lestari untuk Gedung, rumah dan jasa layanan kebutuhan anda?",
    bg: "bg-gray-300",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

const SectionSale = () => {
  return (
    <div className="w-full">
      {sectionData.map((section, idx) => (
        <div key={idx} className={`${section.bg} py-8 px-0`}> 
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-0">
            {/* Kiri: Teks */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
              <div className="text-gray-600 text-2xl font-bold mb-1">{section.subtitle}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">{section.title}</div>
              <div className="text-gray-800 text-base md:text-lg font-semibold max-w-xs">{section.desc}</div>
            </div>
            {/* Kanan: Gambar */}
            <div className="flex-1 flex flex-row gap-4 items-center justify-center p-8 md:p-12">
              {section.images.map((img, i) => (
                <img key={i} src={img} alt={section.title + i} className="w-56 h-56 object-cover rounded shadow" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionSale;
