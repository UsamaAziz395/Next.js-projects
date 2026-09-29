import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Age groups ka data
const ageGroups = [
  { id: 1, range: "18~29", img: "/age-18-29.jpg" }, // Apni images ka path daalein
  { id: 2, range: "30~39", img: "/age-30-39.jpg" },
  { id: 3, range: "40~49", img: "/age-40-49.jpg" },
  { id: 4, range: "50+", img: "/age-50-plus.jpg" },
];

export default function OnboardingAgePage() {
  return (
    <div className="min-h-screen bg-[#1a1c23] text-white flex flex-col items-center py-10 px-4 md:px-8 font-sans">
      
      {/* Top Logo */}
      <div className="w-full max-w-4xl mb-6 flex justify-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-300">Planfit</h1>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-12">
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          {/* Yahan width change karke progress dikha sakte hain (e.g., 25%, 50%) */}
          <div className="h-full bg-[#00e5a0] w-1/4 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-2xl flex flex-col">
        
        {/* Heading Section */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
            Let's build your plan — <br />
            every set, rep, and weight
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Choose your age · Only used for your plan
          </p>
        </div>

        {/* Age Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-10">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              className="relative flex flex-col rounded-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#00e5a0] transition-all"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-800">
                {/* Placeholder Image - Aap apni image yahan daalein */}
                <Image
                  src={group.img} 
                  alt={`Age ${group.range}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Label Container */}
              <div className="bg-[#2a2d35] py-4 text-center w-full">
                <span className="text-xl font-bold text-white tracking-wide">
                  {group.range}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer Terms Text */}
        <div className="text-center text-xs md:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
          By continuing, you agree to our{' '}
          <Link href="#" className="underline hover:text-white transition-colors">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="underline hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </div>
  );
}