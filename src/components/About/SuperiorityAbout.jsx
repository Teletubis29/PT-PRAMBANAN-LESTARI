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
    title: "Profesional",
    desc: "Setiap proyek dikerjakan oleh tim yang kompeten dengan standar kerja yang ketat dan menjunjung tinggi nilai-nilai profesional.",
  },
  {
    icon: <FaClock size={28} className="text-gray-500" />,
    title: "Tepat waktu",
    desc: "Ketepatan waktu adalah bagian dari komitmen kami. Kami melaksanakan setiap proyek dengan perencanaan yang matang dan eksekusi yang presisi, memastikan hasil terbaik tercapai tepat waktu.",
  },
  {
    icon: <FaCubes size={28} className="text-gray-500" />,
    title: "Kualitas",
    desc: "Kami memberikan kualitas di setiap bangunan yang kami jalankan, dengan proses pengerjaan yang didukung oleh tenaga ahli yang berpengalaman di bidang kontruksi.",
  },
  {
    icon: <FaBullhorn size={28} className="text-gray-500" />,
    title: "Pemasaran",
    desc: "Kami tidak hanya memasarkan, kami membangun kepercayaan dengan diangkat oleh tim pemasaran yang profesional, kami siap memberikan solusi, mulai dari properti hingga layanan untuk mewujudkan visi Anda.",
  },
  {
    icon: <FaHandshake size={28} className="text-gray-500" />,
    title: "Kerjasama",
    desc: "Kepercayaan dalam Kerjasama yang dibangun atas komitmen adalah menjadi prioritas kami untuk setiap project, kami siap menjadi rekan mitra untuk kesuksesan Bersama.",
  },
  {
    icon: <FaCubes size={28} className="text-gray-500" />,
    title: "One stop solusi",
    desc: "Dari perencanaan hingga pembangunan, semua kebutuhan Anda ada di satu tempat. PT Prambanan Lestari hadir sebagai One Stop Solution untuk mewujudkan proyek berkualitas dengan harga.",
  },
  {
    icon: <FaMoneyBillWave size={28} className="text-gray-500" />,
    title: "Harga terjangkau",
    desc: "Kami menawarkan Gedung, Rumah dan jasa layanan berkualitas dengan harga terjangkau, di setiap project yang didukung, kepercayaan anda adalah prioritas Utama kami.",
  },
  {
    icon: <MdOutlineDesignServices size={28} className="text-gray-500" />,
    title: "Tim Arsitektur & Design Interior",
    desc: "Didukung oleh tenaga profesional di bidang arsitektur & interior design berpengalaman di bidangnya lebih dari 10 tahun, setiap perencanaan kami berikan secara detail dan lengkap.",
  },
  {
    icon: <FaCertificate size={28} className="text-gray-500" />,
    title: "Sertifikat",
    desc: "Kami selalu berkomitmen untuk menyediakan sertifikat yang memenuhi persyaratan keaslian pemerintah dan juga PPATK.",
  },
  {
    icon: <FaPhoneAlt size={28} className="text-gray-500" />,
    title: "Layanan 24 jam",
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
