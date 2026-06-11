const Testimonials = () => {
  const testimonials = [
    {
      quote: "NexusAI transformed how we build. What used to take weeks now takes hours.",
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      avatar: "SC",
    },
    {
      quote: "The best AI platform I've ever used. Clean, fast, and incredibly powerful.",
      author: "Marcus Johnson",
      role: "Founder at StartUp Inc",
      avatar: "MJ",
    },
    {
      quote: "Our team productivity increased by 300% since integrating NexusAI into our workflow.",
      author: "Elena Rodriguez",
      role: "Product Lead at Innovate",
      avatar: "ER",
    },
  ];

  return (
    <section id="testimonials" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0c0f1e]/50 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Loved by{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-500"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Cloud */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">Trusted by innovative teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {['Acme', 'Global', 'Spherotech', 'DigiCorp', 'Umbrella'].map((company, index) => (
              <div key={index} className="text-xl font-bold text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
