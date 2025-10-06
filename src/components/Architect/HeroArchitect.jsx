import React, { useEffect, useState } from "react";

export default function HeroArchitect() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden flex items-center">
      <img
        src="/images/gbr/our-experience1.jpeg"
        alt="Our Experience"
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable="false"
      />

      {/* Konten tanpa overlay */}
      <div className="relative z-10 max-w-3xl ml-8 md:ml-16 p-8 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-slate-700/30">
        <h1
          className={`text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-100 mb-4 leading-tight transition-all duration-1000 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-32"
          }`}
        >
          Dari Konsep Hingga Kenyamanan — Kami Design Interior untuk Anda
        </h1>
      </div>
    </section>
  );
}
