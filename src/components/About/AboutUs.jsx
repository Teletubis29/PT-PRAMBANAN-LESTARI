import React from "react";

export default function AboutUs() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8">
        {/* Kiri: Teks dan statistik */}
        <div>
          {/* <p className="text-sm text-gray-400 mb-2 italic">About us</p> */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-1">
            Siapa kami ?
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-500 mb-4">
            Kami adalah PT Prambanan Lestari
          </h3>
          <p className="text-gray-600 mb-2">
            Kami Direksi dan segenap Staff PT Prambanan Lestari senantiasa
            berusaha semaksimal mungkin dalam menjalankan perusahaan agar dapat
            memberikan pelayanan terbaik dan bertanggung jawab sesuai dengan
            harapan Anda.
          </p>
          <p className="text-gray-600 mb-6">
            Didukung oleh tenaga ahli berpengalaman dan profesional dibidangnya
            dalam mengerjakan proyek-proyek secara detail dan komprehensif, kami
            siap memberi konsultasi dan membantu mewujudkan ide atau gagasan
            sesuai keinginan konsumen, dari proyek rumah tinggal, ruko,
            perkantoran, interior dan banyak lagi proyek yang telah dikerjakan.
          </p>
          {/* Statistik */}
          <div className="flex gap-4 mt-6">
            <div className="bg-gray-300 rounded-lg px-6 py-3 flex flex-col items-center min-w-[90px] flex-1">
              <span className="text-2xl font-bold text-gray-700">20 +</span>
              <span className="text-xs text-gray-600 mt-1">Pengalaman</span>
            </div>
            <div className="bg-gray-300 rounded-lg px-6 py-3 flex flex-col items-center min-w-[90px] flex-1">
              <span className="text-2xl font-bold text-gray-700">40 +</span>
              <span className="text-xs text-gray-600 mt-1">Tim terbaik</span>
            </div>
            <div className="bg-gray-300 rounded-lg px-6 py-3 flex flex-col items-center min-w-[90px] flex-1">
              <span className="text-2xl font-bold text-gray-700">100 +</span>
              <span className="text-xs text-gray-600 mt-1">Total Klien</span>
            </div>
          </div>
        </div>
        {/* Kanan: Gambar */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gedung PT Prambanan Lestari"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
