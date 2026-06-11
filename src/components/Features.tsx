const Features = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast',
      description: 'Process millions of requests per second with our distributed edge network.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9a2 2 0 012-2h4.5L15 8" />
        </svg>
      ),
      title: 'Secure by Design',
      description: 'Enterprise-grade security with SOC 2 compliance and end-to-end encryption.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 22l4-16a3 3 0 014 0h4a3 3 0 014 0l4 16M7 22V9a8 8 0 0116 0v13" />
        </svg>
      ),
      title: 'Real-time Analytics',
      description: 'Monitor your AI models and performance with live dashboards.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.429 4.673A15.353 15.353 0 0112.858 1c-2.415 0-4.71.87-6.544 2.366a15.344 15.344 0 01-6.544-2.366C3.09 5.55 1.071 9.612 1.071 14c0 4.388 2.018 8.45 5.268 11.335a15.344 15.344 0 016.544-2.366 15.344 15.344 0 016.544 2.366C21.928 22.45 23.947 18.388 23.947 14c0-4.388-2.018-8.45-5.268-11.327zM10 14l-2.5 2.5L14 18" />
        </svg>
      ),
      title: 'AI-Powered',
      description: 'Machine learning models that adapt and improve with every interaction.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time editing and version control.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Scalable Infrastructure',
      description: 'Automatically scales with your user base without any manual intervention.',
    },
  ];

  return (
    <section id="features" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0c0f1e]/50 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features designed for modern teams building the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all text-lg font-semibold shadow-xl shadow-indigo-500/25">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
