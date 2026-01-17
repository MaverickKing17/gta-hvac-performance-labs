import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Application State managed at top level
  const [headline, setHeadline] = useState('Brampton’s Trusted Heating Doctors – Keeping Your Home Healthy and Warm.');
  const [subheadline] = useState('Fast, Professional Diagnosis & Repair.');
  const [heroImage, setHeroImage] = useState<string | null>('https://i.ibb.co/PZDsc82k/gemini-3-pro-image-preview-2k-a-Replace-the-current.png');

  const handleHeroUpdate = (data: { headline?: string; image?: string }) => {
    if (data.headline) setHeadline(data.headline);
    if (data.image) setHeroImage(data.image);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero 
        headline={headline}
        subheadline={subheadline}
        image={heroImage}
        onUpdate={handleHeroUpdate}
      />
      <WhyChooseUs />
      <Services />
      <About />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;