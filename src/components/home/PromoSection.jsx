// src/components/home/PromoSection.jsx
export default function PromoSection() {
  return (
    <section className="py-16 px-6 md:px-12 md:py-20 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
            Promo Akhir Tahun 2025 <br />
            <span className="text-orange-500">GRATIS SOLAR PANEL SURAY</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Gunakan Energi Matahari, Hemat Sepanjang Hari <br /> Wujudkan rumah
            dan bisnis yang mandiri energi bersama Solar Panel Suray. <br />{" "}
            Info lebih lanjut hubungi kami. <br />
          </p>
          <a
            href="https://wa.me/6281188088995" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
          >
            Chat Whatsapp
          </a>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/promo/promo-1.jpeg"
              alt="Promo 1"
              className="w-full h-full object-cover"
            />
            {/* <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition animate-bounce">
              Chat Whatsapp
            </button> */}
          </div>

          {/* Image 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/images/promo/promo-2.jpeg"
              alt="Promo 2"
              className="w-full h-full object-cover"
            />
            {/* <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition animate-bounce">
              Chat Whatsapp
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
