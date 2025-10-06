import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ServicesDropdown() {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const services = [
    {
      id: 1,
      title: "Pengerjaan yang Profesional dan Efisien",
      description: "Kontraktor memiliki tim yang ahli dan berpengalaman dalam berbagai aspek pembangunan, mulai dari arsitek, insinyur sipil, hingga tukang. Mereka tahu cara terbaik untuk menyelesaikan proyek, memastikan pekerjaan selesai tepat waktu dan sesuai standar."
    },
    {
      id: 2,
      title: "Pengelolaan Proyek yang Terstruktur",
      description: "Kontraktor bertanggung jawab atas seluruh proses, termasuk perencanaan, perizinan, pengadaan material, manajemen anggaran, dan pengawasan di lapangan. Ini mengurangi beban Anda dan memastikan proyek berjalan tertib mulai dari awal sampai akhir."
    },
    {
      id: 3,
      title: "Kualitas material dan Jaminan Mutu",
      description: "Kontraktor profesional memiliki standar kualitas yang tinggi. Mereka menggunakan material terbaik dan metode pengerjaan yang benar. Biasanya, mereka juga memberikan garansi atau masa pemeliharaan setelah proyek selesai, memberikan rasa aman bagi Anda."
    },
    {
      id: 4,
      title: "Hemat Waktu dan Tenaga",
      description: "Anda tidak perlu repot mencari dan mengkoordinasikan banyak pihak (tukang, pemasok material, dll.). Semua hal ini diurus oleh kontraktor, sehingga Anda bisa fokus pada hal lain."
    },
    {
      id: 5,
      title: "Manajemen Anggaran yang Lebih Baik",
      description: "Kontraktor membantu menyusun Rencana Anggaran Biaya (RAB) yang terperinci dan transparan, sehingga Anda dapat mengontrol pengeluaran. Mereka juga tahu cara mendapatkan material dengan harga terbaik, yang bisa menghemat biaya keseluruhan."
    },
    {
      id: 6,
      title: "Tim Profesional dan Terlatih",
      description: "Proyek Anda akan dikerjakan oleh tim ahli yang terlatih dan berpengalaman di bidangnya, mulai, mandor, dan tukang yang berpengalaman di bidangnya. Kami memastikan setiap detail dikerjakan dengan presisi sesuai standar konstruksi yang berlaku. Pengawasan rutin di lapangan dapat memastikan pekerjaan berjalan sesuai spesifikasi dan kualitas yang telah disepakati."
    },
    {
      id: 7,
      title: "Kualitas dan Pengawasan Terjamin",
      description: "Ada pengawas lapangan (mandor atau insinyur) yang memastikan pekerjaan sesuai dengan gambar dan jadwal, serta mengatasi masalah yang mungkin muncul, sehingga semua pekerjaan mendapatkan update info secara realtime."
    }
  ];

  const toggleDropdown = (serviceId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            Apa yang anda dapatkan dari menggunakan jasa Kontruksi kami ?
          </h2>
        </div>

        {/* Services Dropdown List - Full Width */}
        <div className="max-w-4xl mx-auto space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleDropdown(service.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 flex-1">
                  {service.title}
                </h3>
                {openDropdowns[service.id] ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {openDropdowns[service.id] && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-3">
                    {service.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}