import React, { useEffect, useState } from "react";

const images = [
  "/images/banners/KONTEN FOTO HEADER OUR EXP 1.jpg",
  "/images/banners/KONTEN FOTO HEADER OUR EXP 3.jpg",
  "/images/banners/KONTEN FOTO HEADER OUR EXP 2.jpg",
];
const HeroExperience = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-400 min-h-[70vh] md:h-[90vh] flex items-center justify-center py-8 sm:py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 px-4">
        
        {/* === Kiri: Teks === */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left text-white max-w-xl items-center md:items-start">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight transition-all duration-1000 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            OUR EXPERIENCE
          </h1>

          {/* Garis hanya tampil di layar ≥ sm */}
          <div
            className="hidden sm:block h-1 md:h-2 bg-white rounded mb-4 md:mb-6 w-16 sm:w-1/2 md:w-3/4 transition-all"
            aria-hidden="true"
          />

          <p
            className="italic text-sm sm:text-base md:text-xl tracking-wide opacity-90 px-2 sm:px-4 md:px-0"
            style={{ letterSpacing: "0.08em" }}
          >
            "Setiap bangunan yang kami ciptakan adalah wujud dedikasi dan
            keahlian bertahun-tahun. Melalui galeri ini, kami mengundang Anda
            melihat perjalanan kami dalam mewujudkan impian menjadi kenyataan.
            Dari konsep hingga realisasi, setiap detail mencerminkan komitmen
            kami untuk memberikan yang terbaik."
          </p>
        </div>

        {/* === Kanan: Gambar === */}
        <div className="flex-1 flex items-center justify-center relative min-h-[300px] sm:min-h-[400px] md:min-h-[420px]">
          
          {/* === Mobile layout → hanya gambar tengah === */}
          <div className="flex sm:hidden items-center justify-center">
            <img
              src={images[2]}
              alt="gallery3"
              className={`rounded-2xl w-72 h-52 object-cover shadow-2xl border-4 border-white transition-all duration-1000 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                boxShadow: "0 10px 30px #0003",
                background: "#b0aeae",
              }}
            />
          </div>

          {/* === Desktop layout → tiga gambar bertumpuk === */}
          <div className="hidden sm:block w-full h-full relative">
            {/* Gambar kiri belakang */}
            <img
              src={images[0]}
              alt="gallery1"
              className={`rounded-3xl w-56 md:w-64 h-72 md:h-80 object-cover absolute left-0 top-0 z-10 shadow-xl transition-all duration-1000 ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
              }`}
              style={{ boxShadow: "0 8px 32px #0003" }}
            />

            {/* Gambar kanan belakang */}
            <img
              src={images[1]}
              alt="gallery2"
              className={`rounded-3xl w-56 md:w-64 h-72 md:h-80 object-cover absolute right-0 top-0 z-10 shadow-xl transition-all duration-1000 ${
                animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
              }`}
              style={{ boxShadow: "0 8px 32px #0003" }}
            />

            {/* Gambar tengah depan */}
            <img
              src={images[2]}
              alt="gallery3"
              className={`rounded-3xl w-64 md:w-72 h-[340px] md:h-[370px] object-cover absolute left-1/2 top-1/2 z-20 shadow-2xl transition-all duration-1000 ${
                animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{
                transform: `translate(-50%, -50%)`,
                boxShadow: "0 12px 40px #0004",
                border: "6px solid #fff",
                background: "#b0aeae",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroExperience;
