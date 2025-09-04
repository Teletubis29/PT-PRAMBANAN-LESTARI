import React from "react";

const GallerySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-10 pb-20">
      
      {/* Breadcrumb (kiri) */}
      <div className="mb-11">
        <p className="text-gray-400 text-2xl mb-10 pl-2 font-bold">
          Menu / Categories / Building / Gallery project
        </p>
      </div>

      {/* Title Button Style (center) */}
      <div className="text-center">
        <div className="inline-block bg-gray-600 text-white font-semibold tracking-widest px-32 py-3 rounded-md shadow-md mb-10 mt-4">
          GALERIES
        </div>
      </div>

      {/* Content (center) */}
      <div className="space-y-5 text-black leading-relaxed text-center mt-6">
        <p className="text-black">
          This gallery is a window into the work we have created.
          Every project featured here, whether residential or commercial,
          is a testament to our expertise, meticulousness, and commitment
          to delivering the best results for each client.
        </p>

        <p className="text-black">
          We don't just build and sell buildings; we also create spaces
          that are aesthetically pleasing, functionally optimized, and long-term durable.
          From comfortable private residences and commercial buildings
          to magnificent business centers, every detail is designed to meet
          the highest quality standards.
        </p>

        <p className="text-black">
          Each photo showcases the process we undertake responsibly,
          from the design concept and material selection to the precision craftsmanship
          and perfect finishing. The trust placed in our clients is our primary motivation
          for continuous innovation and professionalism at every stage of the project.
        </p>

        <p className="text-black">
          Through this gallery, we invite you to see more than just buildings.
          This is the work that has shaped our reputation—work that combines
          the art of design, reliable construction, and enduring investment value.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
