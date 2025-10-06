import React from "react";

export default function IntroArchitect() {
  const questions = [
    "Butuh kontraktor office, rumah dan komersil tetapi tidak tahu harus kemana?",
    "Ingin membangun office, rumah dan komersil tetapi biaya kontraktor mahal?",
    "Ingin membuat office, rumah dan komersil tetapi kontraktor belom dapat ?",
    "Ingin merenovasi office, rumah dan komersil tetapi khawatir hasilnya tidak sesuai ekspetasi / keinginan anda?",
    "Ingin membangun office, rumah dan komersil tetapi khawatir kualitas konstruksi buruk dan tidak awet?"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl p-8 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Construction Planning"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-30"
              />
              
              {/* Overlay Content */}
              <div className="relative z-10 text-center max-w-md">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  Mungkin saat ini anda
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                  Tengah merasakan hal
                </h3>
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                  seperti berikut :
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white/30 rounded-lg transform rotate-12"></div>
              <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Questions */}
          <div className="space-y-3">
            {questions.map((question, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 border-l-4 border-orange-500 hover:bg-gray-100 transition-colors duration-200"
              >
                <p className="text-gray-700 leading-relaxed font-medium">
                  {question}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
