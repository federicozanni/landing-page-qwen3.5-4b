import { NavLink } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Perfect for individuals and hobby projects.',
      features: ['5,000 API calls/month', 'Basic AI models', 'Email support', '1 project'],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'For growing teams and serious projects.',
      features: ['50,000 API calls/month', 'Advanced AI models', 'Priority support', 'Unlimited projects', 'Custom integrations'],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale deployments and custom needs.',
      features: ['Unlimited API calls', 'All Pro features', '24/7 dedicated support', 'SLA guarantee', 'On-premise deployment'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0c0f1e]/50 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Simple,{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 inline-flex items-center border border-white/10">
            {['Monthly', 'Yearly'].map((period, index) => (
              <button
                key={period}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  index === 0 ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-panel rounded-2xl p-8 transition-all duration-500 ${
                plan.popular ? 'border-indigo-500/50 bg-white/10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-xs font-semibold tracking-wide uppercase">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-500">/month</span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                plan.popular 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25' 
                  : 'bg-white/5 hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <NavLink to="#faq" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium flex items-center justify-center space-x-2">
            <span>Have questions?</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
