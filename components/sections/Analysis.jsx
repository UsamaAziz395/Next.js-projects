import React from 'react';
import Image from 'next/image';

export default function WorkoutPlanner() {
  return (
    <section className="bg-[#1a1c23] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-25 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Phone Image */}
        <div className="relative flex justify-center lg:justify-start w-full">
          <div className="relative w-full max-w-[300px] ">
            <Image
              src="/images/Analysisimage.avif"
              alt="Workout Planner App"
              width={600}
              height={600}
              className="w-full h-auto object-contain drop-shadow-2xl transform skew-x-10"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center text-left">
        
          {/* Heading */}
          <h2 className="text-2xl font-bold uppercase leading-tight tracking-tight mb-6 md:mb-8">
            Intuitive and Free Workout Planner
          </h2>

          {/* Subheading */}
          <p className=" text-md font-bold text-white mb-4 md:mb-6">
            With visualized progress, keep track of your fitness journey.
          </p>

          {/* Description */}
          <p className="text-md text-white leading-relaxed max-w-md">
            See your muscle recovery for safe workouts, your exercise achievements, how many calories you burned to keep you motivated, and a workout balance that shows which muscles need strengthening.
          </p>

        </div>

      </div>
    </section>
  );
}