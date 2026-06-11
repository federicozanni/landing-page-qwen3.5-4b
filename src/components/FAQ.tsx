const FAQ = () => {
  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: "You get full access to all Pro features for 14 days. No credit card required. Simply sign up and start building immediately.",
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. You\'ll retain access until the end of your billing period.',
    },
    {
      question: 'What happens to my data after cancellation?',
      answer: "Your data remains accessible for 30 days after cancellation so you can export it. After that, we'll archive it securely.",
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: "Absolutely! We provide a 50% discount for registered non-profit organizations. Contact our sales team to learn more.",
    },
    {
      question: 'Can I use NexusAI with my existing API keys?',
      answer: 'Yes, you can integrate NexusAI alongside your current APIs. Our SDK makes it incredibly easy to add AI capabilities to any project.',
    },
  ];

  return (
    <section id="faq" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0c0f1e]/50 backdrop-blur-sm" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group glass-panel rounded-xl overflow-hidden transition-all duration-300 open:ring-1 open:ring-indigo-500/20">
              <summary className="flex items-center justify-between p-8 cursor-pointer text-lg font-semibold hover:text-white transition-colors">
                {faq.question}
                <svg className="w-6 h-6 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <div className="px-8 pb-8 pt-0 text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all font-semibold">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
