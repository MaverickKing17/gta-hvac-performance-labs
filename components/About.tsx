import React from 'react';
import { MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-2xl bg-royal-900">
               <img 
                src="https://i.ibb.co/FqB4n8vr/hunyuan-image-3-0-b-Replace-the-current-2.png" 
                alt="Dr HVAC Team" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-900 via-transparent to-transparent opacity-60"></div>
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