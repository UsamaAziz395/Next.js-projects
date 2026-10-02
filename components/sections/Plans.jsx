'use client'; // Yeh line zaroori hai kyunki hum useState use kar rahe hain

import React, { useState } from 'react';
import Link from 'next/link';

// Card ka data
const plans = [
  {
    id: 1,
    title: "Build Muscle",
    description: "Progressive overload programs designed to maximize hypertrophy for any experience level.",
  },
  {
    id: 2,
    title: "Lose Weight",
    description: "High-intensity and metabolic workouts that burn calories and build lean muscle simultaneously.",
  },
  {
    id: 3,
    title: "Get Fit & Healthy",
    description: "Balanced routines combining strength, cardio, and flexibility for overall fitness and wellbeing.",
  },
];

export default function PerfectPlanSection() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen bg-[#1a1c23] text-white py-16 px-4 md:px-8 flex flex-col items-center justify-center font-sans relative">
      
      {/* Header Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className=" text-2xl md:text-5xl font-bold uppercase tracking-tight mb-4">
          Find Your Perfect Plan
        </h1>
        <p className="text-gray-200 font-semibold text-lg md:text-xl">
          Whether you're a beginner or advanced, Planfit has a plan for your goal
        </p>
      </div>

      {/* Cards Grid Section */}
      <div data-aos="zoom-in-up"  className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-20">
        {plans.map((plan) => (
          <div
            key={plan.id}
          
            className="flex flex-col justify-between p-8 rounded-2xl cursor-pointer transition-all duration-300 bg-[#2a2d35] md:hover:border-[#16e6a7]"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-gray-200 leading-relaxed mb-8">
                {plan.description}
              </p>
            </div>
            
        
            <Link  href="/onboarding"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-[#00e5a0] font-semibold hover:text-[#00c98a] transition-colors group w-fit"
            >
              Start Free 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href= "/onboarding" className="bg-[#5cf0d5]  text-black font-bold text-lg px-12 py-4 rounded-full shadow-[0_0_15px_rgba(0,229,160,0.3)]">
          Find Your AI Plan
        </Link>
        
        {/* Users Choice Badge */}
        <div className="flex items-center gap-2  text-sm mt-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <span>3.8M+ Users' Choice</span>
        </div>
      </div>

    
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="bg-[#1a1c23] border border-gray-700 p-8 rounded-2xl max-w-md w-full mx-4 text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#00e5a0]">Coming Soon!</h3>
            <p className="text-gray-400 mb-8">
              The AI plan generator is currently under construction. Please check back later.
            </p>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="bg-[#00e5a0] text-black font-bold px-8 py-3 rounded-full hover:bg-[#00c98a] transition-colors w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </section>
  );
}