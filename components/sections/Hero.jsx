import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <main className="max-h-screen  bg-[#0a0a0a] mt-20 md:mt-0 text-white flex flex-col relative overflow-hidden z-10">
      
    
     <div  
  className="absolute inset-0 mt-10 z-0 pointer-events-none" style={{ backgroundImage: "url('/images/home/hero-bg.avif')" }}
></div>
      
      {/* Main Content Section */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 pt-16 pb-28 md:px-16 lg:px-24 md:py-24 max-w-7xl mx-auto w-full flex-grow gap-12">
        
        {/* Left Side: Text Content */}
        <div data-aos="fade-up"  className="flex-1 flex flex-col justify-center w-full max-w-xl">
          <h1 className="text-xl md:text-4xl font-extrabold uppercase leading-tight tracking-tight mb-8">
            AI-Powered <br />
            Personal Training App <br />
            For Gym Beginners
          </h1>
          
          <p className="text-white text-sm  md:text-lg mb-10 leading-relaxed">
            Get a personalized workout plan and < br/> personal training from an AI trainer. <br />
            Easy to use, effective workout planner.
          </p>

       
          <div className="hidden md:block">
            <Link
            href="/onboarding"
            className="ml-2 rounded-full bg-[#22E6C3] px-8 py-3  text-[18px] font-bold text-black transition hover:bg-[#18ceb0]">
            Find Your AI Plan
          </Link>
          </div>
        </div>

        {/* Right Side: Image Content */}
        <div className="flex-1 w-full flex justify-center md:justify-end relative">
       
          <div  data-aos="zoom-in"
           className="relative w-[300px] md:w-[400px] lg:w-[500px] h-[400px] md:h-[500px]  bg-no-repeat   "    style={{ backgroundImage: "url('/images/home/twinphone.avif')",backgroundSize : '100%' }}>

          </div>
        </div>

      </div>

      {/* Mobile Button (Fixed at bottom, centered) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-[#0a0a0a]/90 backdrop-blur-sm z-50 flex justify-center border-t border-white/10">
       <Link
            href="/onboarding"
                 className="bg-[#70e7c3] text-black text-center font-bold text-lg px-8 py-4 rounded-full w-full max-w-sm shadow-[0_0_15px_rgba(0,229,160,0.5)]"> 
                       Find Your AI Plan
          </Link>

        
      </div>

    </main>
  );
}