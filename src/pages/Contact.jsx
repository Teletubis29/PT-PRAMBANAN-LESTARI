import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="min-h-[70vh] w-full bg-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">Kontak Kami</h2>
          <p className="text-gray-600 mb-10">Kami siap membantu Anda</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className={`bg-white rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
              <FaPhoneAlt size={32} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Telepon Kami</h3>
            <a href="tel:+6281234567890" className="text-black  hover:underline hover:text-orange-500">(+62) 812-3456-7890</a>
          </div>
          {/* Card 2 */}
          <div className={`bg-white rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 delay-150'}`}>
            <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
              <FaComments size={32} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Chat Langsung</h3>
            <p className="text-black text-sm mb-2 text-center">Tersedia Senin - Jumat &nbsp; (09.00-17.00 WIB)</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded font-medium mt-2 hover:bg-orange-600 transition">Chat Sekarang</button>
          </div>
          {/* Card 3 */}
          <div className={`bg-white rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 delay-300'}`}>
            <div className="bg-orange-500 rounded-full p-4 mb-4 flex items-center justify-center">
              <FaEnvelope size={32} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-black">Kirim Pertanyaan</h3>
            <p className="text-black text-sm mb-2 text-center">Isi formulir, kami akan balas dalam 24 jam.</p>
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
