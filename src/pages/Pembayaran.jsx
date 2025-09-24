import React, { useState, useEffect } from "react";
import { FaDraftingCompass, FaCouch, FaHardHat } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PaymentMethod from "../components/Pembayaran/paymentMethod";


const icons = [
  {
    icon: FaDraftingCompass,
    label: "Paket Arsitektur",
    url: "/pembayaran/jasa-arsitektur",
  },
  {
    icon: FaCouch,
    label: "Paket Interior",
    url: "/pembayaran/jasa-interior",
  },
  {
    icon: FaHardHat,
    label: "Paket Konstruksi",
    url: "/pembayaran/jasa-konstruksi",
  },
];

const Pembayaran = () => {
  const navigate = useNavigate();
  const [showIcons, setShowIcons] = useState([false, false, false]);

  useEffect(() => {
    const timers = icons.map((_, i) =>
      setTimeout(() => {
        setShowIcons(prev => {
          const arr = [...prev];
          arr[i] = true;
          return arr;
        });
      }, 200 + i * 200)
    );
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div>
      <section className="py-20 text-center">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-12 text-gray-500">DAFTAR PAKE JASA</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {icons.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center group cursor-pointer"
              onClick={() => navigate(item.url)}
            >
              <div className={`w-28 h-28 flex items-center justify-center rounded-full bg-white shadow-lg group-hover:bg-orange-500 transition duration-300
                ${showIcons[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} transition-all duration-700`}
              >
                <span className="text-orange-500 transition group-hover:text-white">
                  {React.createElement(item.icon, { size: 64 })}
                </span>
              </div>
              <span className="mt-4 text-base font-medium text-gray-700 group-hover:text-orange-600 transition">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="max-w-7xl mx-auto">
        <hr className="my-6 border-gray-300" />
      </div> */}
      {/* <PaymentMethod /> */}
    </div>
  );
};

export default Pembayaran;
