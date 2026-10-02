import React from 'react';
import Image from 'next/image';

export default function ExerciseGuides() {
  return (
    <section className="bg-[#1a1c23] text-white py-8 md:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Phone Image */}
        <div className="relative flex justify-center lg:justify-start w-full order-1 lg:order-1">
          <div className="relative w-full max-w-[300px] hidden md:block skew-x-10">
            <Image
              src="/images/exerciseguaid.avif"
              alt="Detailed Exercise Guide App"
              width={600}
              height={1200}
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col justify-center text-left order-2 lg:order-2">
          
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold uppercase leading-tight tracking-tight mb-6 ">
            Hundreds of Detailed <br className='block md:hidden'/> Exercise Guides
          </h2>

          {/* Subheading */}
          <p className=" text-sm md:text-lg font-bold text-center md:text-start text-white mb-4 md:mb-6">
            Maximize your workouts with proper form
          </p>

          {/* Description */}
          <p className="text-sm sm:text-lg text-white leading-tight tracking-tight max-w-2xl mb-8">
            Knowing which muscles to target leads you to better results. With our clear exercise videos, you'll learn that along with proper form. Detailed instructions cover proper form, trainer tips, alternatives, and even how to breathe while you work out.
          </p>

          {/* Small Exercise Illustration (Optional - Screenshot mein neeche hai) */}
          <div className="relative w-full max-w-[300px] opacity-80">
            {/* <Video
              src="/images/exercise-illustration.png" // <-- Apni illustration image
              alt="Exercise Illustration"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            /> */}
          </div>

         

              <div className="relative w-full block md:hidden max-w-[300px] mx-auto mt-8">
                    <Image
                      src="/images/Analysisimage.avif"
                      alt="Personalized Workout Plan App"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                  </div>

        </div>

      </div>
    </section>
  );
}