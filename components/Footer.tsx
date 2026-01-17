import React from 'react';
import { ThermometerSnowflake } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
             <a href="#" onClick={scrollToTop} className="flex items-center gap-2 mb-4 hover:opacity-90 transition-opacity inline-flex cursor-pointer">
                <div className="w-8 h-8 bg-royal-700 rounded flex items-center justify-center text-white">
                  <ThermometerSnowflake size={20} />
                </div>
                <span className="text-xl font-bold">Dr HVAC</span>
             </a>
             <p className="text-royal-200 text-sm">
               Keeping Brampton families warm and comfortable. 
               Owned and operated by Brendon.
             </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-royal-200 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Furnace Repair</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Diagnosis</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Installation</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-white transition-colors cursor-pointer">Maintenance</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-royal-200 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="tel:+19055550123" className="hover:text-white transition-colors">Phone: (905) 555-0123</a></li>
              <li><a href="mailto:brendon@drhvac-brampton.com" className="hover:text-white transition-colors">Email: brendon@drhvac-brampton.com</a></li>
              <li>Brampton, ON</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-royal-800 pt-8 flex justify-between items-center text-sm text-royal-400">
          <p>&copy; {new Date().getFullYear()} Dr HVAC. All rights reserved.</p>
          <p>Remix Design</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;