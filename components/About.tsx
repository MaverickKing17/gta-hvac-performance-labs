import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-2xl bg-royal-900">
               {/* Placeholder for Brendon */}
               <img 
                src="https://picsum.photos/600/400?grayscale" 
                alt="Brendon, Owner of Dr HVAC" 
                className="object-cover w-full h-full mix-blend-overlay opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-2xl font-bold">Brendon</p>
                <p className="text-royal-200">Owner & Lead Technician</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-royal-800 sm:text-4xl">
              Neighbors Helping Neighbors in Brampton
            </h2>
            <div className="mt-4 text-lg text-gray-500 space-y-4">
              <p>
                Hi, I'm Brendon. I started Dr HVAC with a simple mission: to provide honest, transparent heating diagnostics to my neighbors right here in Brampton.
              </p>
              <p>
                Unlike the big chains, we don't just try to sell you a new furnace. We are "Doctors" for your home – we diagnose the actual problem and prescribe the best solution, whether that's a simple repair or a necessary upgrade.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-royal-600 font-semibold bg-royal-50 p-4 rounded-lg inline-block">
              <MapPin size={20} />
              <span>Serving all of Brampton and Peel Region</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;