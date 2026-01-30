import imgAuroLakshmanan2 from "../../assets/Auro.png";

export function Footer() {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Coach Info */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl">
              <img
                src={imgAuroLakshmanan2}
                alt="Auro Lakshmanan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left flex-grow">
            <h3 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-2">
              Auro Lakshmanan
            </h3>
            <p className="font-['Poppins:SemiBold',sans-serif] text-lg md:text-xl text-pink-400 mb-3">
              EX, CSK, Accenture, VS&Co
            </p>
            <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-gray-300 mb-3">
              UXCoach | UX Design Engineer | Product Designer | Tech Freak | Content Creator
            </p>
            <a
              href="https://www.dementee.com"
              className="font-['Poppins:SemiBold',sans-serif] text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              www.dementee.com
            </a>
          </div>
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 border border-pink-500/20 rounded-xl p-6 md:p-8 mb-8">
          <p className="font-['Poppins:Medium',sans-serif] text-lg md:text-xl text-white text-center leading-relaxed">
            "Remember: Success isn't about being the smartest or the most talented.
            <span className="block mt-3 text-pink-400 font-semibold">It's about taking action when everyone else is making excuses.</span>
            <span className="block mt-3">See you in the workshop. Let's make your breakthrough happen together."</span>
          </p>
          <p className="font-['Poppins:SemiBold',sans-serif] text-2xl text-yellow-400 text-center mt-6">
            - Auro
          </p>
        </div>

        {/* Social Proof Footer */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-purple-900/50 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">🏆</p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-white text-sm md:text-base">
              12,000+ Success Stories
            </p>
          </div>
          <div className="bg-purple-900/50 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">💼</p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-white text-sm md:text-base">
              Direct Job Referrals
            </p>
          </div>
          <div className="bg-purple-900/50 rounded-lg p-4 text-center">
            <p className="text-3xl mb-2">🎯</p>
            <p className="font-['Poppins:SemiBold',sans-serif] text-white text-sm md:text-base">
              Proven Results
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-800 pt-8">
          <p className="font-['Poppins:Regular',sans-serif] text-gray-400 text-sm md:text-base">
            © 2026 Dementee. All rights reserved. | Transforming careers, one student at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
