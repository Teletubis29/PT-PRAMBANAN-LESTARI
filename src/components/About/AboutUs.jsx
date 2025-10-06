import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="aboutus" className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8">
        {/* Kiri: Teks dan statistik */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-6">VISI & MISI</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">VISI :</h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan pengembang properti komersial & non komersial yang terus tumbuh berkembang dan berkomitmen penuh meningkatkan mutu dan menghasilkan produk properti yang berkualitas, inovatif. Dengan didukung oleh sumber daya manusia, tenaga kerja profesional dibidangnya.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">MISI :</h3>
              <ol className="text-gray-600 leading-relaxed space-y-2 list-decimal list-inside">
                <li>Membangun dan mengembangkan properti dengan kualitas premium dan inovatif.</li>
                <li>Memenuhi kebutuhan klien yang membutuhkan properti untuk kegiatan bisnisnya pada area strategis dan mudah di jangkau baik moda transportasi dengan nilai Asset yang dapat menguntungkan.</li>
                <li>Terus memperluas dan mengembangkan produk properti serta menantang kemajuan jaman dan teknologi yang ada.</li>
                <li>Mewujudkan impian bagi owner yang ingin memiliki hunian, Tempat Usaha & Konsep Interior sesuai keinginan dan harapan.</li>
              </ol>
            </div>
          </div>
          
          {/* Statistik */}
          {/* <div className="flex gap-4 mt-6">
            <div className="bg-gray-300 rounded-lg px-6 py-3 flex flex-col items-center min-w-[90px] flex-1">
              <span className="text-2xl font-bold text-gray-700">20 +</span>
              <span className="text-xs text-gray-600 mt-1">Pengalaman</span>
            </div>
            <div className="bg-gray-300 rounded-lg px-6 py-3 flex flex-col items-center min-w-[90px] flex-1">
              <span className="text-2xl font-bold text-gray-700">40 +</span>
              <span className="text-xs text-gray-600 mt-1">Tim terbaik</span>
            </div>
            <div className="bg-gray-300 rounded-lg px-6 py-3 flex flex-col items-center min-w-[90px] flex-1">
              <span className="text-2xl font-bold text-gray-700">100 +</span>
              <span className="text-xs text-gray-600 mt-1">Total Klien</span>
            </div>
          </div> */}
        </div>
        {/* Kanan: Gambar */}
        <div className="flex justify-center">
          <img
            src="/images/gbr/visi-misi.jpg "
            className="shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
