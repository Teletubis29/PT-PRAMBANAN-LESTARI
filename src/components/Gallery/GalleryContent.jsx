import React, { useState } from "react";

const categories = [
  "Galeries Gedung",
  "Galeries Residential",
  "Galeries Commercials",
];

const projects = [
  {
    id: 1,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 2,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 3,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 4,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 5,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 6,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      ,
    ],
  },
  {
    id: 7,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 8,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
  {
    id: 9,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
   {
    id: 10,
    title: "Menara Mandiri",
    images: [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    ],
  },
];

export default function GalleryContent() {
  const [activeCategory, setActiveCategory] = useState("Galeries Residential");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [page, setPage] = useState(0);

  // Pagination logic: 2 baris per halaman, 3 kolom per baris
  const itemsPerPage = 2 * 3; // 2 baris x 3 kolom
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const paginatedProjects = projects.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  // Open modal with images and selected index
  const openModal = (images, idx) => {
    setModalImages(images);
    setModalIndex(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const nextImg = () => setModalIndex((prev) => (prev + 1) % modalImages.length);
  const prevImg = () => setModalIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);

  return (
    <section className="bg-gray-50 py-12 px-6  border-t border-b border-gray-400">
      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-md font-semibold shadow-md transition ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Gallery Grid - 2 baris per halaman */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-md overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-1">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={project.title}
                    className="w-full h-32 object-cover cursor-pointer hover:scale-105 transition"
                    onClick={() => openModal(project.images, i)}
                  />
                ))}
              </div>
              <div className="p-4 flex justify-between items-center border-t">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <button className="bg-orange-500 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-orange-600" onClick={() => openModal(project.images, 0)}>
                  View Photo
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal Preview */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
            <div className="relative max-w-4xl w-full mx-2 md:mx-8" onClick={e => e.stopPropagation()}>
              <img
                src={modalImages[modalIndex]}
                alt="Preview"
                className="w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
              {/* Close Button */}
              <button
                className="absolute top-2 right-4 text-3xl text-orange-500 font-bold focus:outline-none"
                onClick={closeModal}
                style={{ background: 'none', border: 'none', boxShadow: 'none', padding: 0 }}
              >
                &times;
              </button>
              {/* Prev Button */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-md p-2 shadow hover:bg-orange-600"
                onClick={prevImg}
              >
                &#8592;
              </button>
              {/* Next Button */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-md p-2 shadow hover:bg-orange-600"
                onClick={nextImg}
              >
                &#8594;
              </button>
              {/* Dots */}
              <div className="flex justify-center mt-4 gap-2">
                {modalImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${idx === modalIndex ? 'bg-orange-500' : 'bg-gray-300'}`}
                    onClick={() => setModalIndex(idx)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pagination Dots Dinamis untuk halaman */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === page ? 'bg-orange-500' : 'bg-gray-300'}`}
              style={{ cursor: 'pointer' }}
              onClick={() => setPage(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
