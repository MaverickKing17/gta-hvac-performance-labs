import React from 'react';
import { Activity, Receipt, MapPin, ShieldCheck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Accurate Diagnostics',
      description: 'We use advanced tools to pinpoint heating issues effectively. We treat the cause, not just the symptom—saving you money on unnecessary parts.',
      icon: <Activity className="w-8 h-8 text-royal-400" />,
    },
    {
      title: 'Transparent Pricing',
      description: 'Flat-rate quotes provided before we start. No ticking clock, no hidden fees, and no surprise bills at the end of the job.',
      icon: <Receipt className="w-8 h-8 text-royal-400" />,
    },
    {
      title: 'Brampton Specialists',
      description: 'Owned and operated in Brampton. We know the local neighbourhoods, home models, and codes inside out.',
      icon: <MapPin className="w-8 h-8 text-royal-400" />,
    },
    {
      title: 'Workmanship Warranty',
      description: 'We stand behind our repairs with a solid guarantee. If the issue persists, we come back to make it right at no extra cost.',
      icon: <ShieldCheck className="w-8 h-8 text-royal-400" />,
    },
  ];

  return (
    <section className="bg-royal-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-royal-400 tracking-wide uppercase">Why Choose Dr HVAC?</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            The Prescription for Peace of Mind
          </p>
          <p className="mt-4 text-xl text-royal-200">
            We combine technical expertise with honest customer care. Here is what sets us apart from the big chains.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-royal-800 rounded-xl p-8 border border-royal-700 hover:border-royal-500 transition-colors shadow-lg shadow-royal-900/50">
              <div className="inline-flex items-center justify-center p-3 bg-royal-900 rounded-lg border border-royal-600 mb-5 shadow-inner">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-royal-200 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;