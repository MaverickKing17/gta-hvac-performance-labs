import React from 'react';
import { ThermometerSnowflake } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
             <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-royal-700 rounded flex items-center justify-center text-white">
                  <ThermometerSnowflake size={20} />
                </div>
                <span className="text-xl font-bold">Dr HVAC</span>
             </div>
             <p className="text-royal-200 text-sm">
               Keeping Brampton families warm and comfortable. 
               Owned and operated by Brendon.
             </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-royal-200 tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Furnace Repair</li>
              <li>Diagnosis</li>
              <li>Installation</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-royal-200 tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Phone: (905) 555-0123</li>
              <li>Email: brendon@drhvac-brampton.com</li>
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