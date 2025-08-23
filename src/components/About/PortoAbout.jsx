import React from "react";

const PortoAbout = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0 min-h-[60vh]">
        {/* Kiri: Konten */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-6xl font-bold mb-4 leading-none text-gray-700">PORFOLIO</h1>
          <h2 className="text-2xl font-bold mb-4 leading-tight text-gray-700">
            Kami memiliki prioritas untuk dapat menciptakan kepercayaan anda
          </h2>
          <p className="text-sm italic text-gray-700 mb-1">
            Kami telah dipercaya menangani berbagai proyek bergengsi, mulai dari pembangunan gedung perkantoran yang kokoh dan representatif, apartemen dengan desain modern dan fungsional, hotel yang mengutamakan kenyamanan dan kemewahan, hingga ruang komersial yang dirancang untuk mendukung produktivitas bisnis. Selain itu, kami menyediakan beragam layanan pendukung lain yang disesuaikan dengan kebutuhan klien kami. Kami melaksanakan setiap proyek dengan komitmen tinggi, perencanaan yang detail, dan pengawasan profesional untuk memastikan hasil yang optimal dan tepat waktu.
          </p>
          <button className="mt-8 bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition w-full max-w-[180px] text-base font-semibold">
            Selengkapnya
          </button>
        </div>
        {/* Kanan: Kosong untuk layout sejajar */}
        <div></div>
      </div>
    </section>
  );
};

export default PortoAbout;
