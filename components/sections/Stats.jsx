import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Stats() {
  return (
    <>
    <section className="relative bg-[#1a1c23] opacity-100 text-white py-16 md:py-30 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden "
      
        style={{ backgroundImage: "url('/images/statbg.avif')" }}
>
      <div  
       className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        
        {/* Column 1: Workouts Logged */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-[#78ecc9] mb-3">
            87M +
          </h3>
          <p className="  text-sm md:text-lg text-gray-300 mb-10">
            Workouts Logged
          </p>
          
       
        </div>

        {/* Column 2: App Users Worldwide */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-[#78ecc9] mb-3">
            3.8M +
          </h3>
          <p className="text-sm md:text-lg text-gray-300 mb-10">
            App Users Worldwide
          </p>
          
          
          <div className="flex items-center justify-center gap-2">
         
          
          

          </div>
        </div>

        {/* Column 3: Store Rating */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-[#78ecc9] mb-3">
            4.7
          </h3>
          <p className="text-lg text-gray-300">
            Store Rating
          </p>
          <p className="text-sm text-gray-300 mt-1 mb-10">
            67,000+ Ratings
          </p>
          
        

          </div>
              {/* App Store logo */}
          <div className="flex items-center justify-center gap-2">
         
         <Image
         src="/images/applelogo.avif" alt="Pattern" className="object-cover"
         width={150}
         height={200}
         
         
         /></div>

         {/* play store logo */}

            <div className="flex flex-col items-center">  
         <Image
         src="/images/playstore.avif" alt="Pattern" className="object-cover"
         width={150}
         height={200}
         
        />
            </div>

              {/* GQ Logo */}
          <div className="flex items-center justify-center">
            <span className="text-6xl font-black text-white tracking-tighter">
              GQ
            </span>
        </div>

      </div>

      
    </section>

     <div className=" bg-black flex flex-col items-center justify-center gap-4 py-20 ">
        <Link href="/onboarding" className="bg-[#5cf0d5]  text-black font-bold text-lg px-12 py-4 rounded-full shadow-[0_0_15px_rgba(0,229,160,0.3)] cursor-pointer">
          Find Your AI Plan
        </Link>
        
        {/* Users Choice Badge */}
        <div className="flex items-center gap-2  text-sm mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg>
          <span className='text-white'>3.8M+ Users' Choice</span>
        </div>
      </div>
      </>
  );
}