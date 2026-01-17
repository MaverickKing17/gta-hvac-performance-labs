import React, { useState } from 'react';
import { Calendar, CheckCircle, ArrowRight, Wand2, Loader2, Image as ImageIcon } from 'lucide-react';
import { generateMarketingCopy, generateHeroImage } from '../services/geminiService';

interface HeroProps {
  headline: string;
  subheadline: string;
  image: string | null;
  onUpdate: (data: { headline?: string; image?: string }) => void;
}

const Hero: React.FC<HeroProps> = ({ headline, subheadline, image, onUpdate }) => {
  const [isRegeneratingText, setIsRegeneratingText] = useState(false);
  const [isRegeneratingImage, setIsRegeneratingImage] = useState(false);

  // Default fallback image if none provided
  const bgImage = image || "https://picsum.photos/800/800?random=1";

  const handleRemixText = async () => {
    setIsRegeneratingText(true);
    const newHeadline = await generateMarketingCopy(headline, "Make it urgent but friendly, focusing on heating repair in Brampton.");
    onUpdate({ headline: newHeadline });
    setIsRegeneratingText(false);
  };

  const handleRemixImage = async () => {
    setIsRegeneratingImage(true);
    // Prompt engineered based on user request
    const prompt = "A split screen composition. Left side: clean white space. Right side: A royal blue HVAC service van parked in a suburban driveway in winter, next to a friendly female customer service representative wearing a royal blue polo shirt smiling warmly. Professional photography, bright lighting, high quality.";
    const newImage = await generateHeroImage(prompt);
    if (newImage) {
      onUpdate({ image: newImage });
    }
    setIsRegeneratingImage(false);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 min-h-[600px] flex flex-col justify-center">
          
          {/* Diagonal Slice Background for Desktop */}
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-0 lg:px-8 xl:mt-0 pt-10">
            <div className="sm:text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-royal-50 text-royal-700 text-sm font-semibold mb-6 border border-royal-100">
                <CheckCircle size={16} className="mr-2" />
                #1 HVAC Team in Brampton
              </div>

              {/* Dynamic Headline */}
              <div className="group relative">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline leading-tight">
                    {headline}
                  </span>
                </h1>
                
                {/* AI Remix Button (Hidden by default, shown on hover/group) */}
                <button 
                  onClick={handleRemixText}
                  disabled={isRegeneratingText}
                  className="absolute -top-8 right-0 lg:right-auto lg:left-0 opacity-0 group-hover:opacity-100 transition-opacity bg-royal-100 text-royal-700 text-xs px-2 py-1 rounded flex items-center gap-1 hover:bg-royal-200"
                >
                  {isRegeneratingText ? <Loader2 className="animate-spin" size={12}/> : <Wand2 size={12}/>}
                  Remix Text
                </button>
              </div>

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-medium text-royal-600">
                {subheadline}
              </p>
              
              <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-4 md:text-lg md:px-10 transition-all"
                  >
                    Book Diagnosis
                    <ArrowRight className="ml-2" size={20}/>
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-royal-700 bg-royal-100 hover:bg-royal-200 md:py-4 md:text-lg md:px-10 transition-all"
                  >
                    <Calendar className="mr-2" size={20}/>
                    Check Availability
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* Right Side Image Area */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50 group">
        <img
          className="h-56 w-full object-cover object-right sm:h-72 md:h-96 lg:w-full lg:h-full transition-opacity duration-500"
          src={bgImage}
          alt="Dr HVAC Van and Team"
          style={{ opacity: isRegeneratingImage ? 0.5 : 1 }}
        />
        
        {/* Loading Overlay */}
        {isRegeneratingImage && (
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white/80 p-4 rounded-lg shadow-lg flex items-center gap-2">
                <Loader2 className="animate-spin text-royal-600" />
                <span className="text-royal-800 font-medium">Generating Custom Visuals...</span>
             </div>
          </div>
        )}

        {/* AI Image Remix Button */}
        <button 
          onClick={handleRemixImage}
          disabled={isRegeneratingImage}
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur text-royal-700 text-sm px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-white font-medium"
        >
          <ImageIcon size={16}/>
          Generate Van & CSR
        </button>

        {/* Caption for Placeholder Context */}
        {!image && !isRegeneratingImage && (
          <div className="absolute bottom-4 left-4 bg-royal-900/80 text-white text-xs px-3 py-1 rounded backdrop-blur-sm">
            Example Composition
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;