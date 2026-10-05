"use client";
import { usePathname } from 'next/navigation';
import React from 'react';

const workoutsData = [
  { title: "Full Body Workout", count: 120 },
  { title: "Upper Body Workout", count: 120 },
   { title: "Push up Workout", count: 120 },
  { title: "Deadlift Workout", count: 120 },
  
  
];

 function WorkoutsPage() {

  const pathname = usePathname();
  return (
    <div className="w-full mt-20 md:mt-0 bg-[#0f1115] text-white font-sans min-h-screen">
      
    
      <main className="max-w-5xl mx-auto px-10 py-12">

    <p className='text-white'>{ pathname } </p>
       
        {/* Header Section */}
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Generate your next workouts
        </h1>
        <p className="text-gray-400 mb-12 text-lg">
          Pick a focus to start — each of these 77 lists comes with workouts built for your goal and level.
        </p>


                <h1 className='text-2xl font-bold my-5'>Browse by workout split</h1>
        {/* Workout Grid (Pichli image jaisa style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

         
          {workoutsData.map((workout, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between bg-gray-800 p-3 rounded-xl cursor-pointer"
            >
              <span className="font-medium text-gray-100">{workout.title}</span>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-400 text-sm">
                  {workout.count} exercises
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-500 group-hover:text-white transition-colors"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

export default WorkoutsPage