import React, { useEffect, useState } from "react";

export default function HeroAbout() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-center">
      {/* Gambar full, proporsional, tajam */}
      <img
        src="/images/banners/header-tentang-kami.jpg"
        alt="Tentang Kami"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable="false"
      />

      {/* Konten teks */}
      <div className="relative z-10 max-w-2xl ml-8 md:ml-16 p-6">
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-xl mb-4 leading-tight transition-all duration-1000 ${
            animate
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-32"
          }`}
        >
          Memaksimalkan Aspek Visual & Fungsional Arsitektur
        </h1>
      </div>
    </section>
  );
}
