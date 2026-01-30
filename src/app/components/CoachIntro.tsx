import imgAuroLakshmanan2 from "../../assets/Auro.png";
import imgImage168 from "../../assets/community_check.png";

export function CoachIntro() {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Coach Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl transform rotate-3"></div>
              <img
                src={imgAuroLakshmanan2}
                alt="Auro Lakshmanan"
                className="relative rounded-3xl w-full object-cover shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Coach Info */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <div className="mb-6">
              <h2 className="font-['Poppins:Bold',sans-serif] text-4xl md:text-5xl lg:text-6xl text-pink-500 mb-2">
                Auro Lakshmanan
              </h2>
              <p className="font-['Poppins:SemiBold',sans-serif] text-lg md:text-xl text-white">
                EX, CSK, Accenture, VS&Co
              </p>
              <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-gray-300 mt-2">
                UXCoach | UX Design Engineer | Product Designer | Tech Freak | Content Creator
              </p>
            </div>

            {/* Emotional Copy */}
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-xl p-6 mb-6">
              <p className="text-white text-base md:text-lg leading-relaxed font-['Poppins:Regular',sans-serif]">
                "I know exactly how it feels to stare at rejection emails. I've been there.
                But here's the truth: <span className="text-yellow-400 font-semibold">You're not failing because you lack talent.</span>
                You're struggling because nobody taught you how to crack interviews like a pro."
              </p>
            </div>

            <div className="bg-purple-800/40 rounded-xl p-6">
              <p className="font-['Poppins:Medium',sans-serif] text-xl md:text-2xl text-white text-center mb-3">
                I will be your coach for 30 Days
              </p>
              <p className="text-yellow-400 font-['Poppins:SemiBold',sans-serif] text-center text-lg">
                (Free Bonus Content)
              </p>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-purple-800 to-pink-700 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <img
              src={imgImage168}
              alt="Community"
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <div className="text-center md:text-left">
              <h3 className="font-['Poppins:SemiBold',sans-serif] text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                12000+ Learners from Tamil UX Community
              </h3>
              <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-white/90">
                Trained over 12K Students in Last 4 Years
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-yellow-300 font-['Poppins:Medium',sans-serif] text-base md:text-lg">
              Join a community that actually cares about your success. These aren't just numbers—
              <span className="block mt-2 text-white font-semibold">they're real people who transformed their careers, just like you will.</span>
            </p>
          </div>

          {/* Join Now Button */}
          <div className="mt-8 text-center">
            <a
              href="https://chat.whatsapp.com/GZ7WWgIZVug0qQAD1LOrw0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-['Poppins:Bold',sans-serif] text-xl md:text-2xl text-black">
                Join Now 🚀
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}