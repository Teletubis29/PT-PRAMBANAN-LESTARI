import React from "react";

export default function SolutionAbout() {
  return (
      <section className="bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-0 mb-16">
          <div className="bg-gray-400 flex flex-col justify-center h-full w-full p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 leading-tight">
              Mungkin saat ini Anda<br />sedang mengalami hal berikut:
            </h2>
            <ul className="space-y-4">
              <li className="text-white text-base md:text-lg font-normal">Ingin menginvestasikan dana dan mencari gedung property?</li>
              <li className="text-white text-base md:text-lg font-normal">Ingin membangun atau membeli gedung dan juga desain interiornya, tapi khawatir desainnya kurang menarik?</li>
              <li className="text-white text-base md:text-lg font-normal">Ingin membuat desain interior ruangan kantor, rumah, tapi khawatir tidak sesuai harapan?</li>
              <li className="text-white text-base md:text-lg font-normal">Anda memiliki kendala yang dihadapi dunia property, salah memilih lokasi, salah menentukan design, salah pengerjaan konstruksi dan salah dalam pengecekan legal?</li>
              <li className="text-white text-base md:text-lg font-bold bg-orange-500 p-3 rounded">Dari hal tersebut diatas, kami akan memberikan solusinya secara profesional & bertanggung jawab.</li>
            </ul>
          </div>
          <div className="h-full w-full">
            <img
              src="/images/gbr/solusi.jpg"
              alt="Solusi Gedung Rumah"
              className="w-full h-full object-cover"
              style={{ minHeight: '100%', minWidth: '100%' }}
            />
          </div>
        </div>
      </section>
  );
}
