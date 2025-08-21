"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    "https://panangianschool.com/wp-content/uploads/2022/12/Mengapa-Tinggal-di-Apartemen-Semakin-Populer-1200px-x-675px-1200x675.jpg",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536242017885-d46ddf800d1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Image */}
      <img
        src={slides[current]}
        alt="Hero Slide"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug max-w-3xl">
          Selamat datang di website Prambanan Lestari
        </h1>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition"
      >
        <FaArrowRight size={20} />
      </button>
    </section>
  );
};

export default Hero;
