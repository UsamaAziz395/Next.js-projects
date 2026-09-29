
import React from 'react';
import Image from 'next/image';

export default function PersonalizedPlan() {
  return (
    <section
      className="  text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 font-sans overflow-hidden  bg-black bg-no-repeat bg-[position:center_95%] md:bg-center "
      style={{
        backgroundImage: "url('/images/workoutplanbg.avif')",
        backgroundSize: "170%",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center text-left order-1">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight tracking-tight text-center md:text-start mb-6 md:mb-8">
            Personalized
            <br className="block md:hidden" />
            {' '}Workout Plan
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
            No more guessing — just do the workout
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
            AI builds you a personalized plan for free — one that works best for you.
            It generates workouts tailored to your goals, strength and training ability,
            past workouts, and gym setup.

            <br /><br />

            AI also optimizes sets, reps, and weight for every exercise in every workout.
          </p>

        </div>


        {/* Right Side: Phone Image */}
        <div className="relative flex justify-center lg:justify-end w-full order-2">

          <div
            className="  relative  w-full  max-w-[300px] lg:-skew-x-8 "
          >
            <Image
              src="/images/workoutroutine.avif"
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