import { useState } from "react";
import { FaCreditCard, FaUniversity, FaWallet } from "react-icons/fa";

const paymentMethods = [
  { 
    id: "bank", 
    name: "Transfer Bank", 
    icon: <FaUniversity className="text-blue-600 text-xl" />, 
    detail: "BCA - 1234567890 a.n PT Prambanan Lestari"
  },
  { 
    id: "ewallet", 
    name: "E-Wallet", 
    icon: <FaWallet className="text-green-600 text-xl" />, 
    detail: "OVO / GoPay / Dana - 081234567890 a.n Prambanan Lestari"
  },
  { 
    id: "credit", 
    name: "Kartu Kredit", 
    icon: <FaCreditCard className="text-purple-600 text-xl" />, 
    detail: "Visa / Mastercard - Hubungi admin"
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState(paymentMethods[0].id); // default pilih pertama

  const activeMethod = paymentMethods.find((m) => m.id === selected);

  return (
    <div className="p-6 pb-28 max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-12 text-gray-500">Metode Pembayaran</h2>


      <div className="grid grid-cols-3 gap-6">
        {/* Kolom kiri: list metode */}
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelected(method.id)}
              className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition ${
                selected === method.id ? "border-blue-600 bg-blue-50" : "border-gray-300"
              }`}
            >
              {method.icon}
              <span className="font-medium text-sm">{method.name}</span>
            </div>
          ))}
        </div>

        {/* Kolom kanan: detail metode */}
        <div className="col-span-2 border rounded-lg p-4 bg-gray-50">
          <h3 className="font-semibold text-blue-600 mb-2">{activeMethod.name}</h3>
          <p className="text-gray-700 text-sm">{activeMethod.detail}</p>
        </div>
      </div>
    </div>
  );
}
