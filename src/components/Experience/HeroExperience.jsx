import React, { useEffect, useState } from "react";

const images = [
  "/images/gbr/experience2.jpg",
  "/images/gbr/experience3.jpg",
  "/images/gbr/experience1.jpg",
];

const HeroExperience = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-400 min-h-[600px] flex items-center justify-center py-12">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8 px-4">
        {/* Kiri: Teks */}
        <div className="flex-1 flex flex-col justify-center text-left text-white max-w-xl">
          <h1
            className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight transition-all duration-1000 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            OUR EXPERIENCE
          </h1>
          <div className="h-2 w-3/4 bg-white rounded mb-6"></div>
          <p
            className="italic text-lg md:text-xl tracking-wide opacity-90"
            style={{ letterSpacing: "0.08em" }}
          >
            "Setiap bangunan yang kami ciptakan adalah wujud dedikasi dan
            keahlian bertahun-tahun. Melalui galeri ini, kami mengundang Anda
            melihat perjalanan kami dalam mewujudkan impian menjadi kenyataan.
            Dari konsep hingga realisasi, setiap detail mencerminkan komitmen
            kami untuk memberikan yang terbaik."
         
          </p>
        </div>
        {/* Kanan: Gambar */}
        <div className="flex-1 flex items-center justify-center relative min-h-[420px]">
          {/* Gambar kiri belakang */}
          <img
            src={images[0]}
            alt="gallery1"
            className={`rounded-3xl w-64 h-80 object-cover absolute left-0 top-0 z-10 shadow-xl transition-all duration-1000 ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
            style={{ boxShadow: "0 8px 32px #0003" }}
          />
          {/* Gambar kanan belakang */}
          <img
            src={images[1]}
            alt="gallery2"
            className={`rounded-3xl w-64 h-80 object-cover absolute right-0 top-0 z-10 shadow-xl transition-all duration-1000 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
            style={{ boxShadow: "0 8px 32px #0003" }}
          />
          {/* Gambar tengah depan */}
          <img
            src={images[2]}
            alt="gallery3"
            className={`rounded-3xl w-72 h-[370px] object-cover absolute left-1/2 top-1/2 z-20 shadow-2xl transition-all duration-1000 ${
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
    </section>
  );
};

export default HeroExperience;
