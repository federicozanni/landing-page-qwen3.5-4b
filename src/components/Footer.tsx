import { NavLink } from "react-router-dom";

const Footer = () => {
  const links = {
    product: ['Features', 'Pricing', 'API Docs', 'Integrations', 'Changelog'],
    company: ['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
  };

  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <NavLink to="/" className="text-2xl font-bold tracking-tight mb-4 block">
              Nexus<span className="text-indigo-500">AI</span>
            </NavLink>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the future of artificial intelligence, one API at a time.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 text-gray-300">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <NavLink to={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-500 hover:text-white transition-colors">
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-1">Subscribe to our newsletter</h3>
              <p className="text-gray-500 text-sm">Get the latest AI insights delivered weekly.</p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 rounded-lg bg-white/10 border border-white/10 text-sm focus:outline-none focus:border-indigo-500 transition-colors w-full md:w-64"
              />
              <button className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2024 NexusAI Inc. All rights reserved.</p>

          <div className="flex space-x-6">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
