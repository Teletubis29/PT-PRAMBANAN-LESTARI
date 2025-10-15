import React from "react";

const QuestionSection = () => {
  const questions = [
    "Ingin membuat design interior office, rumah, dan komersial tetapi tidak tahu harus kemana?",
    "Ingin merancang design interior office, rumah dan komersial tetapi masih bingung memilih model dan tema yang cocok?",
    "Ingin merenovasi design interior office, rumah dan komersial tetapi khawatir hasil tidak sesuai ekspektasi / keinginan anda?",
    "Ingin membangun design interior office, rumah dan komersial tetapi khawatir kualitas bahan material tidak sesuai keinginan anda?"
  ];

  return (
    <section className="py-16 bg-gray-100 mb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Side - Simple Question Mark Box */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-gray-300 rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-6">
                  Mungkin saat ini anda<br />
                  Tengah merasakan hal<br />
                  seperti berikut :
                </h3>
                <div className="text-6xl text-gray-600 font-bold">
                  ?
                </div>
              </div>
            </div>

            {/* Right Side - Simple Questions List */}
            <div className="flex-1">
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={index} className="text-gray-600 text-lg leading-relaxed">
                    {question}
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

export default QuestionSection;