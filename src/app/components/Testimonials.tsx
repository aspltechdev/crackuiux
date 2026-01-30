import imgImage171 from "../../assets/g1.png";
import imgImage172 from "../../assets/g2.png";
import imgImage173 from "../../assets/g3.png";
import imgImage174 from "../../assets/g4.png";
import imgImage175 from "../../assets/g5.png";
import imgImage176 from "../../assets/g6.png";
import imgImage177 from "../../assets/g7.png";
import imgImage178 from "../../assets/g8.png";
import imgImage179 from "../../assets/g9.png";
import imgImage180 from "../../assets/g10.png";
import imgWhatsAppImage20240324At9144 from "../../assets/w1.png";
import imgWhatsAppImage20240324At9136 from "../../assets/w2.png";
import imgWhatsAppImage20240324At9134 from "../../assets/w3.png";
import imgWhatsAppImage20240324At9138 from "../../assets/w4.png";
import imgWhatsAppImage20240324At9139 from "../../assets/w5.png";
import imgWhatsAppImage20240324At9140 from "../../assets/w6.png";
import imgWhatsAppImage20240324At9141 from "../../assets/w7.png";
import imgWhatsAppImage20240324At9145 from "../../assets/w8.png";
import imgImage181 from "../../assets/g11.png";
import imgImage182 from "../../assets/g12.png";
import imgImage184 from "../../assets/g14.png";
import imgImage185 from "../../assets/g15.png";
import imgImage186 from "../../assets/g16.png";
import imgImage183 from "../../assets/g13.png";
import imgImage187 from "../../assets/g17.png";
import imgImage188 from "../../assets/g18.png";

export function Testimonials() {
  const screenshots = [
    imgImage171, imgImage172, imgImage173, imgImage174, imgImage175,
    imgImage176, imgImage177, imgImage178, imgImage179, imgImage180,
    imgWhatsAppImage20240324At9144, imgWhatsAppImage20240324At9136,
    imgWhatsAppImage20240324At9134, imgWhatsAppImage20240324At9138,
    imgWhatsAppImage20240324At9139, imgWhatsAppImage20240324At9140,
    imgWhatsAppImage20240324At9141, imgWhatsAppImage20240324At9145,
    imgImage181, imgImage182, imgImage184, imgImage185,
    imgImage186, imgImage183, imgImage187, imgImage188
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-6xl text-black mb-6">
            Class Feedback from Real People
          </h2>
          <p className="font-['Poppins:Medium',sans-serif] text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            These aren't staged reviews. These are real messages from real people whose lives changed after taking this workshop.
            <span className="block mt-3 text-pink-600 font-semibold">Your success story could be next.</span>
          </p>
        </div>

        {/* Emotional Hook */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-pink-300 rounded-2xl p-6 md:p-8 mb-12 text-center">
          <p className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-gray-800 mb-4">
            💬 "Will this actually work for me?"
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-base md:text-lg text-gray-700">
            Don't take my word for it. Read what 12,000+ students have to say.
            These are people just like you who took the leap and never looked back.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200"
            >
              <img
                src={screenshot}
                alt={`Student feedback ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Never Stop Learning Section */}
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl lg:text-7xl text-white mb-6">
            Never Stop Learning
          </h3>
          <p className="font-['Poppins:Medium',sans-serif] text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Every single person you see here started where you are right now—uncertain, maybe even scared.
            <span className="block mt-4 text-yellow-400 text-xl md:text-2xl font-semibold">But they chose to invest in themselves.</span>
            <span className="block mt-4">And now? They're living the career they always dreamed of.</span>
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-6 text-center shadow-lg">
            <p className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl text-white mb-2">12,000+</p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white/90">Students Transformed</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-center shadow-lg">
            <p className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl text-white mb-2">98%</p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white/90">Success Rate</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-teal-600 rounded-xl p-6 text-center shadow-lg">
            <p className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl text-white mb-2">4+ Years</p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white/90">Proven Track Record</p>
          </div>
        </div>
      </div>
    </div>
  );
}
