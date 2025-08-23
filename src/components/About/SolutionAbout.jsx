import React from "react";

export default function SolutionAbout() {
  return (
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 mb-20">
          <div className="bg-gray-400 flex flex-col justify-center h-full w-full p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
              Mungkin saat ini Anda<br />sedang mengalami hal berikut:
            </h2>
            <ul className="space-y-4">
              <li className="text-white text-base md:text-lg font-normal">Ingin mencari gedung tapi bingung mau ke mana?</li>
              <li className="text-white text-base md:text-lg font-normal">Ingin membangun atau membeli gedung & desain interior rumah tapi khawatir desainnya kurang menarik.</li>
              <li className="text-white text-base md:text-lg font-normal">Ingin membuat desain interior rumah tapi bingung mau ke mana?</li>
              <li className="text-white text-base md:text-lg font-normal">Ingin merenovasi gedung atau interior rumah tapi khawatir hasilnya tidak sesuai harapan?</li>
            </ul>
          </div>
          <div className="h-full w-full">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20240822/pngtree-a-photo-of-beautiful-new-modern-houses-in-residential-area-with-image_16171409.jpg"
              alt="Solusi Gedung Rumah"
              className="w-full h-full object-cover"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>
        </div>
      </section>
  );
}
