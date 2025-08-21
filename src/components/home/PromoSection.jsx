// src/components/home/PromoSection.jsx
export default function PromoSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
            Dapatkan promo spesial <br /> 
            <span className="text-orange-500">DI SINI.</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Prambanan Lestari adalah perusahaan jasa konstruksi, konsultan arsitektur dan
            desain interior, yang berdiri dan mulai beroperasi di Jakarta sejak tahun 1997.
            Perusahaan yang berpengalaman mengerjakan berbagai proyek bangunan komersial
            hingga residensial seperti rumah keluarga, juga berpengalaman.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
            Chat Whatsapp
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="https://properti123.com/storage/listing_images/10644/NHK63oDgkg4HtdLrKWzvtBexXtH5snbAWOjmsqVL.jpeg"
              alt="Promo 1"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition animate-bounce">
              Chat Whatsapp
            </button>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="https://www.jual-apartemen.com/images4/67382_3.jpg"
              alt="Promo 2"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition animate-bounce">
              Chat Whatsapp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
