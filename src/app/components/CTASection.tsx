export function CTASection() {
  return (
    <div className="py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black via-purple-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Fix Your Career with Auro Lakshmanan Today
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-gray-300 mb-8">
            Every day you wait is another day staying stuck in the same place. 
            <span className="block mt-3 text-pink-400 font-semibold">The choice is yours. Make it count.</span>
          </p>
        </div>

        {/* Price Section */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl p-8 md:p-12 mb-8 shadow-2xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white text-center leading-relaxed">
              This investment will feed your career for a lifetime.
              <span className="block mt-2 text-yellow-400 font-semibold">Your transformation starts now.</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="https://chat.whatsapp.com/GZ7WWgIZVug0qQAD1LOrw0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 md:px-12 py-4 md:py-6 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="font-['Poppins:Bold',sans-serif] text-2xl md:text-3xl text-black">
                Join Now 🚀
              </span>
            </a>
            <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/70 mt-4">
              Secure your spot in the next batch
            </p>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-lg md:text-xl text-white mb-2">
              30-Day Money Back Guarantee
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90">
              Not satisfied? Get a full refund. No questions asked.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🎁</div>
            <p className="font-['Poppins:SemiBold',sans-serif] text-lg md:text-xl text-white mb-2">
              Lifetime Access
            </p>
            <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90">
              All materials, updates, and bonuses—forever.
            </p>
          </div>
        </div>

        {/* Final Emotional Push */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-pink-500/30 rounded-2xl p-8 md:p-10">
          <p className="font-['Poppins:SemiBold',sans-serif] text-xl md:text-2xl text-white text-center mb-6">
            "What if I told you that a year from now..."
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-lg text-gray-300 text-center mb-4">
            You could be working at your dream company, earning more than you ever thought possible, 
            and actually loving what you do every single day.
          </p>
          <p className="font-['Poppins:Medium',sans-serif] text-xl md:text-2xl text-pink-400 text-center mb-6">
            Would this investment seem significant then?
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-base md:text-lg text-white text-center">
            Or would it seem like the <span className="text-yellow-400 font-semibold">best decision you ever made?</span>
          </p>
        </div>

        {/* Urgency Element */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-red-600 px-6 py-3 rounded-full animate-pulse">
            <p className="font-['Poppins:Bold',sans-serif] text-white text-sm md:text-base">
              ⏰ Only 50 Seats Available This Batch - Don't Miss Out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}