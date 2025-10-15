import React from "react";

const InteriorServices = () => {
  const services = [
    {
      title: "Model",
      description: "Menentukan model terlebih dahulu model atau konsep interior yang akan anda inginkan, jika masih bingung anda bisa berkonsultasi dengan team marketing dari kami."
    },
    {
      title: "Estetika",
      description: "design, warna, pola dan tektur harus dipadukan sedemikian rupa sehingga menciptakan thema sesuai keinginan anda, sehingga thema yang anda ciptakan menjadi tempat yang nyaman."
    },
    {
      title: "Tata letak",
      description: "design interior office, rumah dan komersial yang bagus harus memiliki tata letak yang menawarkan akses dan pergerakan"
    }
  ];

  return (
    <section className="py-16 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Interior Images */}
            <div className="relative flex justify-center py-10">
              {/* Gambar pertama (pojok kiri atas) */}
              <div className="absolute -top-4  -translate-x-1/2 z-10  rounded-2xl overflow-hidden shadow-lg w-72 h-96 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
                  alt="Living Room"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Gambar kedua (kanan bawah) */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-72 h-96 ml-48 mt-40">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                  alt="Dining Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Sebelum merancang pekerjaan Design Interior bangunan Office,
                  Rumah, dan Komersial
                  <span className="block text-lg font-normal text-gray-600 mt-2">
                    pastikan Anda memahami hal berikut
                  </span>
                </h2>
              </div>

              {/* Services List */}
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    {/* Bullet point */}
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-600 rounded-full mt-2"></div>

                    {/* Content */}
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorServices;
