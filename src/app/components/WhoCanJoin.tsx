export function WhoCanJoin() {
  const personas = [
    {
      title: "Students",
      description: "You're in college or just graduated. Stop worrying about 'not having experience.' Learn to position yourself as hire-ready from day one.",
      gradient: "from-pink-600 to-red-600",
      icon: "🎓"
    },
    {
      title: "UI UX Designer",
      description: "You know the tools, but interviews still feel like a mystery. Master the art of showcasing your work and communicating your design thinking.",
      gradient: "from-purple-600 to-pink-600",
      icon: "🎨"
    },
    {
      title: "Graphic Designer",
      description: "Ready to level up from graphics to UX? Learn the skills and interview strategies to make that transition smooth and lucrative.",
      gradient: "from-red-600 to-orange-600",
      icon: "✏️"
    },
    {
      title: "IT Professionals",
      description: "Stuck in a job that drains you? Transition to UX design with a proven roadmap. Your tech background is an advantage—we'll show you how.",
      gradient: "from-blue-600 to-purple-600",
      icon: "💻"
    },
    {
      title: "Non-IT Professionals",
      description: "Think IT is not for you? Think again. We've helped teachers, accountants, and artists break into UX. Your unique perspective is your strength.",
      gradient: "from-green-600 to-teal-600",
      icon: "🌟"
    },
    {
      title: "IT la Work Poganum",
      description: "You just want to get into IT and build a stable, high-paying career. This is your ticket in. No connections needed—just commitment.",
      gradient: "from-yellow-600 to-orange-600",
      icon: "🚀"
    }
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black via-purple-950 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Who Can Join?
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            If you're reading this, you're already qualified. The only requirement is 
            <span className="text-pink-400 font-semibold"> the desire to change your career story.</span>
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="text-5xl mb-4">{persona.icon}</div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-2xl md:text-3xl text-white mb-4">
                  {persona.title}
                </h3>
                <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90 leading-relaxed flex-grow">
                  {persona.description}
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-yellow-300 font-['Poppins:Medium',sans-serif] text-sm">
                    ✓ You belong here
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusive Message */}
        <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 border-2 border-pink-500/30 rounded-2xl p-8 md:p-10 text-center">
          <p className="font-['Poppins:SemiBold',sans-serif] text-2xl md:text-3xl text-white mb-4">
            "But will this work for someone like me?"
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            I've heard every excuse. Too old. Too young. Wrong degree. No degree. No experience. Too much experience.
          </p>
          <p className="font-['Poppins:Medium',sans-serif] text-xl md:text-2xl text-pink-400 mb-4">
            Here's the truth: None of that matters.
          </p>
          <p className="font-['Poppins:Regular',sans-serif] text-lg text-white/90 max-w-3xl mx-auto">
            What matters is showing up, putting in the work, and following a proven system. 
            <span className="block mt-3 text-yellow-400 font-semibold">12,000+ people from all backgrounds have done this. You can too.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
