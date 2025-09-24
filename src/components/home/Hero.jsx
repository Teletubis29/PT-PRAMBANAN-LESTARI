// "use client";
// import { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   const slides = [
//     "/images/banners/header.jpg",
//     "/images/banners/header1.jpg",
//     "/images/banners/header2.jpg",
//     "/images/banners/header3.jpg",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden">
//       {/* Image */}
//       <img
//         src={slides[current]}
//         alt="Hero Slide"
//         className="w-full h-full object-cover"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center px-4">
//         {/* Animated Header Text */}
//         {(() => {
//           const [animate1, setAnimate1] = useState(false);
//           const [animate2, setAnimate2] = useState(false);
//           useEffect(() => {
//             const timer1 = setTimeout(() => setAnimate1(true), 100);
//             const timer2 = setTimeout(() => setAnimate2(true), 400);
//             return () => {
//               clearTimeout(timer1);
//               clearTimeout(timer2);
//             };
//           }, []);
//           return (
//             <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-snug max-w-3xl flex flex-col items-center">
//               <span
//                 className={`block transition-all duration-1000 ${animate1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32'}`}
//               >
//                 Selamat datang di website
//               </span>
//               <span
//                 className={`block transition-all duration-1000 ${animate2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'}`}
//               >
//                 Prambanan Lestari
//               </span>
//             </h1>
//           );
//         })()}
//       </div>

//       {/* Prev Button */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition"
//       >
//         <FaArrowLeft size={20} />
//       </button>

//       {/* Next Button */}
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition"
//       >
//         <FaArrowRight size={20} />
//       </button>
//     </section>
//   );
// };

// export default Hero;

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
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Image */}
      <video
        src="/videos/videos.mp4"
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
