import React from 'react';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="bg-[#29292a] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden relative">
      
      {/* Text Section */}
      <h2 className="text-4xl font-bold uppercase leading-tight tracking-tight max-w-5xl mx-auto mb-12 md:mb-20">
        <span className="block text-white">
          Without any workout worries,
        </span>
        <span className="block text-white">
          Just follow along,
        </span>
        <span className="block text-[#00e5a0]">
          And the change begins.
        </span>
      </h2>

      {/* Image Section */}
      <div
       
      className="relative w-full max-w-4xl mx-auto flex justify-center items-center overflow-hidden">
        
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00e5a0]/15 to-transparent blur-3xl -z-10"></div>

        {/* Single Image (Dono Phones Ek Hi Image Mein) */}
        <Image
    
          src="/images/Phoneimage.avif"
          alt="Workout App Phones"
          width={900}
          height={900}
          className="w-full h-auto object-contain scale-110 mix-blend-lighten drop-shadow-2xl"
          priority
        />
      </div>

      {/* Bottom CTA Section */}
      <div className="flex flex-col items-center justify-center gap-4 mt-12 md:mt-16">
        <button className="bg-[#5eefc3] text-black font-bold w-4xl text-lg px-12 py-4 rounded-full hover:bg-[#52d8ae] transition-colors shadow-[0_0_15px_rgba(0,229,160,0.3)]">
          Find Your AI Plan
        </button>
        
        {/* Users Choice Badge */}
        <div className="flex items-center gap-2 text-gray-400 text-md mt-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#00e5a0" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>3.8M+ Users' Choice</span>
        </div>
      </div>

    </section>
  );
}