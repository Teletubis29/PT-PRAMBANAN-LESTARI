import { FaCheckCircle } from "react-icons/fa";

export default function TrustAbout() {
  return (
    <section className="bg-gray-200 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-0">
        {/* Kiri: Video */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/videos/MITRA.mp4" type="video/mp4" />
              <p className="text-gray-500 text-center p-4">
                Browser Anda tidak mendukung video HTML5. 
                <a href="/videos/MITRA.mp4" className="text-orange-500 underline">
                  Download video
                </a>
              </p>
            </video>
          </div>
        </div>
        {/* Kanan: Judul, deskripsi, checklist */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Kami adalah mitra solusi properti anda.
          </h2>
          <div className="font-semibold text-gray-800 mb-4 leading-tight">
            Kepercayaan Anda adalah prioritas kami. Percayakan semua kebutuhan
            properti Anda kepada tim ahli kami, dan saksikan visi Anda menjadi
            nyata.
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-gray-700" />
              <span className="text-gray-700">WAKTU FLEKSIBEL</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-gray-700" />
              <span className="text-gray-700">BERPENGALAMAN</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-gray-700" />
              <span className="text-gray-700">PRIORITAS KLIEN</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-gray-700" />
              <span className="text-gray-700">PORTOFOLIO YANG BERAGAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
