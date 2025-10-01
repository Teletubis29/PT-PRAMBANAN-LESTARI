
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import kontakBanner from "/images/partial/kontakfix.jpg";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="min-h-[70vh] w-full bg-slate-50">
        <div className="relative w-full h-[60vh] md:h-[70vh]">
          <img
            src={kontakBanner}
            alt="Banner Kontak"
            className="w-full h-full md:h-full object-cover shadow"
          />
          <div className="absolute inset-0 bg-black/40  flex items-center">
            <div className="pl-8 md:pl-52 text-left">
              <h2 className="text-2xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">Kontak Kami</h2>
              <p className="text-white text-lg md:text-2xl drop-shadow mb-0 ml-1">Kami siap membantu Anda</p>
            </div>
          </div>
        </div>
      <div className="max-w-5xl mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-28">
          {/* Card 1 */}
          <div className={`bg-[#6D777D] rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center">
              <FaPhoneAlt size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Telepon Kami</h3>
            <a href="tel:+6281234567890" className="text-white  hover:underline hover:text-orange-500">(+62) 812-3456-7890</a>
          </div>
          {/* Card 2 */}
          <div className={`bg-[#6D777D] rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 delay-150'}`}>
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center">
              <FaComments size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Chat Langsung</h3>
            <p className="text-white text-sm mb-2 text-center">Tersedia Senin - Jumat &nbsp; (09.00-17.00 WIB)</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded font-medium mt-2 hover:bg-orange-600 transition">Chat Sekarang</button>
          </div>
          {/* Card 3 */}
          <div className={`bg-[#6D777D] rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 delay-300'}`}>
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center">
              <FaEnvelope size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Kirim Pertanyaan</h3>
            <p className="text-white text-sm mb-2 text-center">Isi formulir, kami akan balas dalam 24 jam.</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded font-medium mt-2 hover:bg-orange-600 transition">Mulai</button>
          </div>
        </div>
        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-700 mb-6 text-center">Formulir Kontak</h4>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nama</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="email@anda.com" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pesan</label>
              <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tulis pesan Anda..." />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg shadow hover:bg-orange-600 transition">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
