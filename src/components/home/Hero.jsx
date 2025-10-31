"use client";
import { useState, useEffect } from "react";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    "/images/banners/header.jpg",
    "/images/banners/header1.jpg",
    "/images/banners/header2.jpg",
    "/images/banners/header3.jpg",
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
    <section className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden bg-black">
      {/* Video Hero - Responsive (Full visible di mobile) */}
      <video
        src="/videos/hero-home.mp4"
        poster="/images/banners/header.jpg"
        className="absolute inset-0 w-full h-full object-contain md:object-cover"
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        preload="auto"
      />
      
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
};

export default Hero;
