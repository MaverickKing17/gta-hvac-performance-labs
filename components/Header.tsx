import React, { useState } from 'react';
import { Phone, Menu, X, ThermometerSnowflake } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-royal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-10 h-10 bg-royal-600 rounded-lg flex items-center justify-center text-white group-hover:bg-royal-700 transition-colors">
              <ThermometerSnowflake size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-royal-800 tracking-tight leading-none group-hover:text-royal-900 transition-colors">Dr HVAC</h1>
              <p className="text-xs text-royal-500 font-medium tracking-wider uppercase">Brampton</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-600 hover:text-royal-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-royal-600 font-medium transition-colors">About Brendon</a>
            <a href="#reviews" className="text-gray-600 hover:text-royal-600 font-medium transition-colors">Reviews</a>
            <a 
              href="tel:+19055550123" 
              className="bg-royal-600 text-white px-6 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-royal-700 transition-all shadow-lg hover:shadow-royal-200"
            >
              <Phone size={18} />
              (905) 555-0123
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-royal-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-royal-600 hover:bg-royal-50 rounded-md">Services</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-royal-600 hover:bg-royal-50 rounded-md">About Brendon</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-royal-600 hover:bg-royal-50 rounded-md">Reviews</a>
            <a href="tel:+19055550123" className="block px-3 py-3 text-base font-bold text-royal-600 bg-royal-50 rounded-md">
              Call Now: (905) 555-0123
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;