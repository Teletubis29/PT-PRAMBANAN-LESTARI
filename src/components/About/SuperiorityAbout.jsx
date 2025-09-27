import {
  FaUserTie,
  FaClock,
  FaBullhorn,
  FaHandshake,
  FaMoneyBillWave,
  FaCertificate,
  FaCubes,
  FaDraftingCompass,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";

const items = [
  {
    icon: <FaUserTie size={28} className="text-gray-500" />,
    title: "Pengalaman Tim",
    desc: "Didukung oleh tenaga profesional di bidang Arsitek dan Interior design, karena sudah lebih dari 20 tahun pengalaman (sejak 2001) kami telah membuktikan hasil karya yang telah di rancang dengan desain unik, model kekinian dan mampu bersaing.",
  },
  {
    icon: <FaCubes size={28} className="text-gray-500" />,
    title: "Kualitas",
    desc: "Kami memberikan kulitas disetiap bangunan yang kami jalankan, dengan proses pengerjaan yang didukung oleh tenaga ahli yang berpengalaman dibidang kontruksi.",
  },
  {
    icon: <FaHandshake size={28} className="text-gray-500" />,
    title: "Kerjasama",
    desc: "Kepercayaan dalam Kerjasama yang dibangun atas komitmen adalah menjadi prioritas kami untuk setiap project, kami siap menjadi rekan mitra untuk kesuksesan Bersama.",
  },
  {
    icon: <FaMoneyBillWave size={28} className="text-gray-500" />,
    title: "Harga Terjangkau",
    desc: "Kami menawarkan Gedung, Rumah dan jasa layanan berkualitas dengan harga terjangkau, disetiap project yang dibangun. kepercayaan anda adlah prioritas Utama kami.",
  },
  {
    icon: <FaClock size={28} className="text-gray-500" />,
    title: "Pekerjaan Profesional dan Tepat Waktu",
    desc: "Kami sepenuhnya memahi bahwa kepercayaan Klien adalah Aset berharga yang tidak dapat diukuri. Oleh karena itu kami mengutamakan pengerjaan waktu Ketepatan waktu adalah bagian dari komitmen kami. Kami melaksanakan setiap proyek dengan perencanaan yang matang dan eksekusi yang presisi, memastikan hasil terbaik tercapai tepat waktu.",
  },
  {
    icon: <FaBullhorn size={28} className="text-gray-500" />,
    title: "Pemasaran",
    desc: "Kami tidak hanya memasarkan, kami membangun kepercayaan dengan ditangani oleh tim pemasaran yang profesional, kami siap memberikan solusi, mulai dari properti hingga layanan untuk mewujudkan visi Anda.",
  },
  {
    icon: <FaDraftingCompass size={28} className="text-gray-500" />,
    title: "One Stop Solution",
    desc: "Dari perencanaan hingga pembangunan, semua kebutuhan Anda ada di satu tempat. PT Prambanan Lestari hadir sebagai One Stop Solution untuk mewujudkan proyek berkualitas dengan harga.",
  },
  {
    icon: <FaPhoneAlt size={28} className="text-gray-500" />,
    title: "Layanan 24 Jam",
    desc: "Dengan layanan 24/7, kami mengutamakan menjaga kepercayaan dan kerjasama, karena kepuasan pelanggan adalah prioritas kami.",
  },
];

export default function SuperiorityAbout() {
  return (
    <section className=" py-5 md:pb-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-0 items-stretch">
        {/* Judul di atas */}
        <div className=" flex items-center justify-center 2xl p-1 md:p-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-700 leading-tight text-center">
            Kami memiliki keunggulan yang berbeda
          </h2>
        </div>
        {/* Grid keunggulan di bawah */}
        <div className="bg-white rounded-b-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-5">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 mt-1">{item.icon}</div>
              <div>
                <div className="font-bold text-gray-700 mb-1">{item.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
