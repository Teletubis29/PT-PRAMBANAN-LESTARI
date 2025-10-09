import React from "react";

const ClientAbout = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0">
        {/* Kiri: Judul dan deskripsi */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">Klien Kami</h1>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4">Mungkin Anda perlu tahu beberapa klien kami!</h2>
          <p className="text-sm italic text-gray-700 mb-1 max-w-md">
            Kami telah dipercaya untuk menangani berbagai proyek bergengsi, mulai dari pembangunan gedung perkantoran yang kokoh dan representatif, apartemen dengan desain modern dan fungsional, hotel yang mengutamakan kenyamanan dan kemewahan, hingga ruang komersial yang dirancang untuk mendukung produktivitas bisnis. Selain itu, kami menyediakan berbagai layanan pendukung lainnya yang disesuaikan dengan kebutuhan klien kami. Kami melaksanakan setiap proyek dengan komitmen tinggi, perencanaan yang matang, dan pengawasan profesional untuk memastikan hasil yang optimal dan tepat waktu.
          </p>
        </div>
        {/* Kanan: Grid logo klien (sementara 1 div gambar) */}
        <div className="flex justify-center items-center">
          {/* <div className="w-full max-w-2xl h-64 rounded-lg shadow flex items-center justify-center border border-gray-200 overflow-hidden"> */}
            <img
              src="/images/client/partner.jpg"
              alt="Logo Klien Partner"
              className="object-cover w-[93%] h-full"
            />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default ClientAbout;
