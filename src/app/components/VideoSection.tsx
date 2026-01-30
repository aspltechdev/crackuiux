export function VideoSection() {
  return (
    <div className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-purple-950 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-['Poppins:Bold',sans-serif] text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Watch This Before You Decide
          </h2>
          <p className="font-['Poppins:Regular',sans-serif] text-lg md:text-xl text-gray-300">
            See what makes this workshop different and how it can transform your career
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
            src="https://www.youtube.com/embed/CxljaL11ctc"
            title="Workshop Introduction Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Call to Action after video */}
        <div className="mt-8 text-center">
          <p className="font-['Poppins:Medium',sans-serif] text-xl md:text-2xl text-yellow-400 mb-4">
            Ready to Transform Your Career?
          </p>
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
  );
}
