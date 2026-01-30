export function CareerTransformation() {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            What Will Change In Your Career?
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Imagine waking up knowing you have the skills, confidence, and connections to land any UX job you want. 
            <span className="block mt-3 text-pink-400 font-semibold">That's not a dream. That's your reality in 30 days.</span>
          </p>
        </div>

        {/* Transformation Diagram */}
        <div className="relative py-12 mb-12">
          {/* Center Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-black leading-tight">
                      Career Breakthrough
                    </p>
                    <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-gray-600 mt-2">
                      Your Future Starts Here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Pillar 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl p-6 md:p-8 text-center shadow-lg h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-white mb-3">
                  Right Road Map
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90 leading-relaxed">
                  Stop wandering aimlessly. Get a crystal-clear path from where you are to where you want to be. 
                  Every step planned, every milestone defined.
                </p>
              </div>
              {/* Connector Line - Hidden on mobile */}
              <div className="hidden md:block absolute top-0 left-1/2 w-px h-[-120px] bg-white/30 -translate-y-full"></div>
            </div>

            {/* Pillar 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl p-6 md:p-8 text-center shadow-lg h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-white mb-3">
                  Growth Mindset for Your Career
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90 leading-relaxed">
                  Transform your thinking from "I hope I get hired" to "Companies compete to hire me." 
                  Mindset is everything.
                </p>
              </div>
              {/* Connector Line - Hidden on mobile */}
              <div className="hidden md:block absolute top-0 left-1/2 w-px h-[-120px] bg-white/30 -translate-y-full"></div>
            </div>

            {/* Pillar 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl p-6 md:p-8 text-center shadow-lg h-full flex flex-col justify-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-white mb-3">
                  Right Career Strategies
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90 leading-relaxed">
                  Learn insider strategies that top UX designers use to get hired, get promoted, and get paid what they deserve.
                </p>
              </div>
              {/* Connector Line - Hidden on mobile */}
              <div className="hidden md:block absolute top-0 left-1/2 w-px h-[-120px] bg-white/30 -translate-y-full"></div>
            </div>
          </div>
        </div>

        {/* Emotional Impact Statement */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-pink-500/30 rounded-2xl p-8 md:p-10">
          <p className="font-['Poppins:Medium',sans-serif] text-xl md:text-2xl text-white text-center leading-relaxed">
            "Six months from now, you'll either look back and say 
            <span className="block mt-3 text-yellow-400 text-2xl md:text-3xl font-semibold">'That workshop changed everything'</span>
            <span className="block mt-3">or you'll still be wondering 'what if?' </span>
            <span className="block mt-4 text-pink-400 font-semibold">Which story do you want to tell?</span>
          </p>
        </div>
      </div>
    </div>
  );
}
