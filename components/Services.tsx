import React from 'react';
import { Wrench, Search, ShieldCheck, Thermometer, Flame, Fan } from 'lucide-react';

const services = [
  {
    icon: <Search className="h-8 w-8 text-white" />,
    title: "Fast Diagnosis",
    desc: "We pinpoint the issue quickly using advanced diagnostic tools. No guesswork, just answers.",
    highlight: true
  },
  {
    icon: <Wrench className="h-8 w-8 text-white" />,
    title: "Precision Repair",
    desc: "Our fully stocked blue vans mean most repairs happen on the spot. We get your heat back on fast.",
    highlight: true
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "Safety Inspections",
    desc: "Complete safety checks for carbon monoxide and gas leaks to keep your Brampton home safe.",
    highlight: false
  },
  {
    icon: <Flame className="h-8 w-8 text-white" />,
    title: "Furnace Installation",
    desc: "Time for a new unit? We install high-efficiency systems that lower your bills.",
    highlight: false
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-royal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-royal-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Complete Heating Solutions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Specializing in fast turnarounds for Brampton homeowners.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-royal-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 ${service.highlight ? 'border-2 border-royal-200' : 'border border-gray-100'}`}
            >
              <div>
                <span className={`rounded-lg inline-flex p-3 ring-4 ring-white ${service.highlight ? 'bg-royal-600 shadow-lg shadow-royal-200' : 'bg-royal-400'}`}>
                  {service.icon}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-royal-600 transition-colors">
                  <a href="#contact" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;