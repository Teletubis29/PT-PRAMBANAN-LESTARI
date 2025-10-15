import React, { useEffect, useState } from "react";

export default function HeroAbout() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[60vh] md:h-[90vh] flex items-center justify-start bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/banners/header-properti1.jpg")'
      }}
    >
      {/* Overlay putih transparan (bukan mengaburkan gambar, hanya membuat teks lebih terbaca) */}
      {/* <div className="absolute inset-0 bg-white bg-opacity-70" /> */}

      {/* Konten teks */}
      <div className="relative z-10 max-w-2xl ml-8 md:ml-16 p-6 rounded-lg">
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight transition-all duration-1000 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
          }`}
        >
          Memaksimalkan Aspek Visual & Fungsional Arsitektur
        </h1>

        <p
          className={`text-white text-base md:text-lg font-medium transition-all duration-1000 ${
            animate ? "opacity-100 translate-x-0 delay-300" : "opacity-0 translate-x-32"
          }`}
        >
          Kami berkomitmen menghadirkan desain arsitektur yang tidak hanya indah,
          namun juga fungsional serta berkelanjutan — menciptakan ruang yang
          nyaman dan bermakna.
        </p>
      </div>
    </section>
  );
}
