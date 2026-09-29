import React from 'react';

export default function Services() {
  // 4 Features ka data
  const features = [
    {
      title: "Video Exercise Demos",
      description: "HD video demonstrations for every exercise so you always know proper form and technique."
    },
    {
      title: "Voice Coaching",
      description: "Audio guidance talks you through each set, rep, and rest period — like having a coach beside you."
    },
    {
      title: "Progress Tracking",
      description: "Visualize your strength gains, workout streaks, and muscle recovery at a glance."
    },
    {
      title: "Detailed Workout Logs",
      description: "Every set, rep, and weight is automatically logged so you can see exactly how far you've come."
    }
  ];

  return (
    <section className="bg-[#1a1c23] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 font-sans">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl font-bold uppercase main-font tracking-tight mb-4">
            Everything You Need To Train Easier
          </h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium">
            Planfit packs a full personal trainer experience into one free app
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col p-7 md:p-8 rounded-2xl bg-[#2a2d35]"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}