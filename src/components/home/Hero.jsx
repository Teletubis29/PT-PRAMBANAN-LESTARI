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
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Image */}
      <video
        src="/videos/hero-home.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls={false}
      />
    </section>
  );
};

export default Hero;
