import React from "react";

const ClientAbout = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0">
        {/* Kiri: Judul dan deskripsi */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Klient Kami</h1>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4">Maybe you need to know some of our clients!</h2>
          <p className="text-sm italic text-gray-700 mb-1 max-w-md">
            We have been trusted to handle various prestigious projects, from the construction of sturdy and representative office buildings, apartments with modern and functional designs, hotels prioritizing comfort and luxury, to commercial spaces designed to support business productivity. Furthermore, we provide a variety of other supporting services tailored to our clients' needs. We execute each project with high commitment, detailed planning, and professional supervision to ensure optimal and timely results.
          </p>
        </div>
        {/* Kanan: Grid logo klien (sementara 1 div gambar) */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl h-64 bg-white rounded-lg shadow flex items-center justify-center border border-gray-200">
            <span className="text-gray-400 text-xl">[Gambar Logo Klien Placeholder]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientAbout;
