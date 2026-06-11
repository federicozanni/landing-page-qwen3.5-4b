import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            Nexus<span className="text-indigo-500">AI</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'Testimonials', 'Pricing'].map((item) => (
              <NavLink
                key={item}
                to={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all text-sm font-semibold shadow-lg shadow-indigo-500/25">
              Get Started
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
