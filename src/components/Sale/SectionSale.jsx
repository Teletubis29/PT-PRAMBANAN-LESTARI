import React from "react";

const sectionData = [
  {
    title: "Gedung",
    subtitle: "Projek baru",
    desc: "Gedung & 2 unit Rukan Kalimalang - Kami hadir dengan proyek gedung yang dirancang untuk mendukung setiap ambisi, mengubah visi Anda menjadi kenyataan yang megah. Setiap Ide Bisnis layak punya tempat terbaik. Bangunan kantor yang di rancang dengan keunikan model menjadikan sebuah Icon perusahaan. Desain yang kami kerjakan dengan ketinggian dibawah 10 lantai guna mempermudah maintenance gedung. Komersial properti meliputi perkantoran, pabrik, mal, kafe, restoran, ritel, apartemen, pusat medis, rumah sakit dan lainnya.",
    bg: "bg-white",
    images: ["/images/gbr/proyek-baru-gedung.jpg"],
  },
  // {
  //   title: "Residentials",
  //   subtitle: "Projek baru",
  //   desc: "Masa depan hunian idaman dimulai sekarang, dengan proyek Residential yang akan menjadi tempat terbaik bagi Anda bersama keluarga.  Kami siap membangun impian Anda. Rumah memiliki ragam model, kontemporer hingga kolonial, kadang memiliki dua atau lebih gaya sekaligus. Prinsip utamanya adalah aman, nyaman dan fungsional.",
  //   bg: "bg-gray-300",
  //   images: [
  //     "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  //   ],
  // },
  // {
  //   title: "Commercials",
  //   subtitle: "Projek baru",
  //   desc: "Perkantoran adalah tempat peluang untuk merintis dari usaha yang di bangun agar menjadi lebih maju dan besar. Karena setiap ide bisnis layak punya tempat terbaik. Kami hadir dengan proyek komersial yang dirancang untuk mendukung setiap ambisi, mengubah visi Anda menjadi kenyataan. Dengan inovasi desain kekinian menjadikan kantor yang bergengsi.",
  //   bg: "bg-white",
  //   images: [
  //     "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  //   ],
  // },
];

const SectionSale = () => {
  return (
    <div className="w-full mt-16 md:mt-1">
      <hr className="border-t border-gray-300" />

      {sectionData.map((section, idx) => (
        <div key={idx} className={`${section.bg} py-8 px-0`}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-0">
            {/* Kiri: Teks */}
            <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
              <div className="text-gray-600 text-2xl font-bold mb-1">
                {section.subtitle}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-5">
                {section.title}
              </div>
              <div className="text-gray-800 text-base md:text-lg font-semibold ">
                {section.desc}
              </div>
            </div>
            {/* Kanan: Gambar */}
            <div className="flex-1 flex flex-row gap-4 items-center justify-center p-8 md:p-6">
              {section.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={section.title + i}
                  className="w-72 h-72 object-cover rounded shadow"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionSale;
