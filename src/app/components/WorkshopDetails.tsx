import imgWorkshop21FlattenedFlattened from "../../assets/workshop2.png";

export function WorkshopDetails() {
  const modules = [
    {
      title: "Portfolio That Makes Recruiters Say 'WOW'",
      description: "Stop sending portfolios that get ignored. Learn to craft a portfolio that tells your story and makes hiring managers reach for their phone.",
      icon: "🎨"
    },
    {
      title: "Personal Website That Screams 'Hire Me'",
      description: "Stand out from the crowd. We'll help you create a stunning personal brand that positions you as the obvious choice.",
      icon: "🌐"
    },
    {
      title: "Resume That Gets Past ATS & Impresses Humans",
      description: "Your resume is your first impression. Make it count. No more generic templates—build one that opens doors.",
      icon: "📄"
    },
    {
      title: "Mock Interviews (Realistic UX Q/A)",
      description: "Practice doesn't make perfect. Perfect practice does. Face real interview scenarios and crush them with confidence.",
      icon: "💼"
    },
    {
      title: "Communication Skills That Win Jobs",
      description: "Your ideas are brilliant. Now learn to articulate them so everyone else sees it too. Communication is your superpower.",
      icon: "🗣️"
    },
    {
      title: "90-Day Design Challenge",
      description: "Consistency beats talent. Transform your skills day by day with challenges that build your confidence and portfolio.",
      icon: "🚀"
    },
    {
      title: "1:1 Mentor Connects",
      description: "Get personalized guidance. No cookie-cutter advice—real solutions for your unique challenges.",
      icon: "🤝"
    },
    {
      title: "Job Referrals from Us",
      description: "Stop applying into the void. Get direct referrals to companies actively hiring. This alone is worth 10x the workshop fee.",
      icon: "✉️"
    },
    {
      title: "Freelancing Tips to Earn While You Learn",
      description: "Don't wait to get hired. Start earning immediately with proven freelancing strategies.",
      icon: "💰"
    },
    {
      title: "Entrepreneurship Tips",
      description: "Dream bigger. Learn how to build your own design agency and create the career you've always wanted.",
      icon: "🏆"
    }
  ];

  const bonuses = [
    "Community Access to Our Job Referral Community",
    "Free e-books Worth ₹5000",
    "Roadmap to crack interviews in TOP MNC's",
    "Lifetime Access to Workshop Materials",
    "Weekly Q&A Sessions for 30 Days"
  ];

  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black to-purple-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Workshop Details
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            This isn't just another course. It's a complete transformation system that takes you from
            <span className="text-pink-400 font-semibold"> interview anxiety to interview confidence</span> in 30 days.
          </p>
        </div>

        {/* Workshop Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative max-w-2xl w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
            <img
              src={imgWorkshop21FlattenedFlattened}
              alt="Workshop"
              className="relative rounded-2xl w-full shadow-2xl"
            />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="mb-12">
          <h3 className="font-['Poppins:SemiBold',sans-serif] text-2xl md:text-3xl text-white text-center mb-8">
            What You'll Master in 30 Days
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-600 to-purple-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">{module.icon}</div>
                  <div>
                    <h4 className="font-['Poppins:SemiBold',sans-serif] text-lg md:text-xl text-white mb-2">
                      {index + 1}. {module.title}
                    </h4>
                    <p className="font-['Poppins:Regular',sans-serif] text-sm md:text-base text-white/90 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <p className="font-['Baloo_Thambi:Regular',sans-serif] text-3xl md:text-4xl lg:text-5xl text-yellow-200 mb-2">
              🎁 Free Bonus
            </p>
            <p className="font-['Poppins:Medium',sans-serif] text-xl md:text-2xl text-white">
              Worth ₹15,000 - Yours FREE Today
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3"
              >
                <div className="text-2xl flex-shrink-0">✅</div>
                <p className="font-['Poppins:Medium',sans-serif] text-base md:text-lg text-white">
                  {bonus}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="font-['Poppins:Regular',sans-serif] text-white/90 text-sm md:text-base">
              These bonuses alone are worth more than the entire workshop fee.
              <span className="block mt-2 text-yellow-200 font-semibold">But they're yours completely FREE when you join today.</span>
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