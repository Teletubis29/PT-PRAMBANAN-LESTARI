import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaComments } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../utils/emailConfig";
import kontakBanner from "/images/partial/kontakfix.jpg";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);

    // Inisialisasi EmailJS
    emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      // Validasi konfigurasi
      if (
        !EMAIL_CONFIG.SERVICE_ID ||
        !EMAIL_CONFIG.TEMPLATE_ID ||
        !EMAIL_CONFIG.PUBLIC_KEY
      ) {
        throw new Error("Konfigurasi EmailJS belum lengkap");
      }

      // Debug log
      console.log("Sending email with config:", {
        serviceId: EMAIL_CONFIG.SERVICE_ID,
        templateId: EMAIL_CONFIG.TEMPLATE_ID,
        publicKey: EMAIL_CONFIG.PUBLIC_KEY ? "SET" : "NOT_SET",
      });

      // Prepare template params
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: "dev.prambananlestari@gmail.com",
        from_name: "Website Prambanan Lestari",
        time: new Date().toLocaleString("id-ID", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Jakarta",
        }),
      };

      console.log("Template params:", templateParams);

      // Kirim email menggunakan EmailJS dengan template params
      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      console.log("EmailJS Result:", result);

      if (result.status === 200) {
        setStatusMessage(
          "Pesan berhasil dikirim! Kami akan menghubungi Anda segera."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);

      let errorMessage = "Maaf, terjadi kesalahan saat mengirim pesan.";

      if (error.text) {
        switch (error.text) {
          case "The public key is required":
            errorMessage = "Konfigurasi EmailJS: Public Key tidak valid.";
            break;
          case "Template not found":
            errorMessage = "Konfigurasi EmailJS: Template tidak ditemukan.";
            break;
          case "Service not found":
            errorMessage = "Konfigurasi EmailJS: Service tidak ditemukan.";
            break;
          default:
            errorMessage = `Error: ${error.text}`;
        }
      } else if (error.status === 400) {
        errorMessage =
          "Konfigurasi EmailJS tidak valid. Silakan periksa Service ID, Template ID, dan Public Key.";
      }

      setStatusMessage(errorMessage + " (Cek console untuk detail)");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="min-h-[70vh] w-full bg-slate-50">
      <div className="relative w-full h-[60vh] md:h-[90vh]">
        <img
          src={kontakBanner}
          alt="Banner Kontak"
          className="w-full h-full md:h-full object-cover shadow"
        />
        <div className="absolute inset-0 bg-black/40  flex items-center">
          <div
            className={`pl-8 md:pl-52 text-left transition-all duration-1000 ${
              animate
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-2xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
              Kontak Kami
            </h2>
            <p className="text-white text-lg md:text-2xl drop-shadow mb-0 ml-1">
              Kami siap membantu Anda
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-28">
          {/* Card 1 */}
          <div
            className={`bg-[#6D777D] rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center">
              <FaPhoneAlt size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Telepon Kami
            </h3>
            {/* <a href="tel:+6281234567890" className="text-white  hover:underline hover:text-orange-500"></a> */}
            <p className="text-white">(+62) 21-8509305</p>
          </div>
          {/* Card 2 */}
          <div
            className={`bg-[#6D777D] rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 delay-150"
            }`}
          >
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center">
              <FaComments size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Chat Langsung
            </h3>
            <p className="text-white text-sm mb-2 text-center">
              Tersedia Senin - Jumat &nbsp; (09.00-17.00 WIB)
            </p>
            <a
              href="https://wa.me/6281188088995" // Menggunakan format wa.me dengan kode negara 62
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer" // Praktik keamanan yang baik
              className="bg-orange-500 text-white px-4 py-2 rounded font-medium mt-2 hover:bg-orange-600 transition"
            >
              Chat Sekarang
            </a>

          </div>
          {/* Card 3 */}
          <div
            className={`bg-[#6D777D] rounded-xl shadow flex flex-col items-center py-8 px-4 transition-all duration-700 ${
              animate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8 delay-300"
            }`}
          >
            <div className="bg-white rounded-full p-4 mb-4 flex items-center justify-center">
              <FaEnvelope size={32} className="text-orange-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Kirim Pertanyaan
            </h3>
            <p className="text-white text-sm mb-2 text-center">
              Isi formulir, kami akan balas dalam 24 jam.
            </p>
            <a
              href="mailto:dev.prambananlestari@gmail.com?subject=Pertanyaan dari Website Prambanan Lestari&body=Halo Tim Prambanan Lestari,%0D%0A%0D%0ASaya ingin bertanya tentang:%0D%0A%0D%0A[Tulis pertanyaan Anda di sini]%0D%0A%0D%0ATerima kasih."
              className="bg-orange-500 text-white px-4 py-2 rounded font-medium mt-2 hover:bg-orange-600 transition inline-block text-center"
            >
              Mulai
            </a>
          </div>
        </div>
        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-28">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-700 mb-6 text-center">
              Formulir Kontak
            </h4>

            {/* Status Message */}
            {statusMessage && (
              <div
                className={`p-4 rounded-lg text-center ${
                  statusMessage.includes("berhasil")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {statusMessage}
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="email@anda.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Pesan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Tulis pesan Anda..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-semibold py-3 rounded-lg shadow transition ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600"
              } text-white`}
            >
              {isLoading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
