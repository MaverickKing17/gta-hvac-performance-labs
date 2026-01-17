import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Fast, Professional Diagnosis & Repair',
      description: 'We use advanced diagnostics to pinpoint issues quickly and get your heat back on without delay.',
    },
    {
      title: 'Experienced Technicians',
      description: 'Our team is fully licensed, trained on all major brands, and brings years of local Brampton expertise.',
    },
    {
      title: 'Reliable Service',
      description: 'We respect your time and your home. Expect punctual arrivals, clean workspaces, and transparent communication.',
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description: 'Your comfort is our top priority. We stand behind our workmanship to ensure you are completely happy.',
    },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="bg-royal-900 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-bold text-royal-300 tracking-wider uppercase">Why Choose Dr HVAC?</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            The Right Choice for Brampton Homeowners
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  {/* High contrast bullet point */}
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white text-royal-700 shadow-lg">
                    <CheckCircle2 size={24} strokeWidth={3} />
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white leading-6 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-royal-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action specific to this section */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-royal-900 bg-white hover:bg-royal-50 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
          >
            Schedule Your Service Today
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;