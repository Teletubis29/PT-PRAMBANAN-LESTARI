import React, { useState } from "react";

const images = [
  "https://media.istockphoto.com/id/1720607427/id/foto/rumah-kota-modern.jpg?s=2048x2048&w=is&k=20&c=NidhdM1Ioz2CmQO2hdi_u9lknTk4fNgsMfwhaJJoIY0=",
  "https://media.istockphoto.com/id/1393538022/id/foto/desain-townhouse-modern.jpg?s=2048x2048&w=is&k=20&c=pwI0LH7Nm_O0ADLqhWU5MaSFYALvXTc4NZRqMxHR5iU=",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80"
];

const PortfolioSlider = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 4;
  const canPrev = startIdx - visibleCount >= 0;
  const canNext = startIdx + visibleCount < images.length;

  const handlePrev = () => {
    if (canPrev) setStartIdx(startIdx - visibleCount);
  };
  const handleNext = () => {
    if (canNext) setStartIdx(startIdx + visibleCount);
  };

  return (
    <section className=" max-w-7xl w-full mx-auto  flex flex-col md:flex-row items-center justify-center py-16 px-4 bg-white">
      {/* Left: Text */}
      <div className="flex-1 max-w-lg mr-0 md:mr-12 mb-8 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          perhaps you can see that<br />we have quite a portfolio.
        </h2>
        <p className="text-gray-700 text-base md:text-lg font-medium">
          We have been trusted to handle various prestigious projects, from the construction of sturdy and representative office buildings, apartments with modern and functional designs, hotels prioritizing comfort and luxury, to commercial spaces designed to support business productivity. Furthermore, we provide a variety of other supporting services tailored to our clients' needs. We execute each project with high commitment, detailed planning, and professional supervision to ensure optimal and timely results.
        </p>
      </div>
      {/* Right: Images & Slider (4 gambar per kotak, grid 2x2) */}
      <div className="flex-1 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-4 relative">
          {/* Prev Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canPrev}
            className="absolute left-[-32px] top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-2xl text-gray-700 z-10 disabled:opacity-30"
            aria-label="Previous"
          >
            &#8592;
          </button>
          {/* Next Arrow */}
          <button
            onClick={handleNext}
            disabled={!canNext}
            className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-2xl text-gray-700 z-10 disabled:opacity-30"
            aria-label="Next"
          >
            &#8594;
          </button>
          {images.slice(startIdx, startIdx + visibleCount).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Portfolio ${idx}`}
              className="w-48 h-36 md:w-56 md:h-40 object-cover rounded-xl shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSlider;
