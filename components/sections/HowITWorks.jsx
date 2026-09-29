import React from 'react';

export default function HowItWorks() {
  // Steps ka data
  const steps = [
    {
      number: "1",
      title: "Set Your Profile",
      description: "Tell us your fitness level, goals, and available equipment. It takes less than 30 seconds."
    },
    {
      number: "2",
      title: "Get Your AI Plan",
      description: "Our AI instantly creates a personalized workout plan tailored to your body and goals — no cost, no catch."
    },
    {
      number: "3",
      title: "Start Training",
      description: "Follow along with video guides, voice coaching, and real-time tracking. Your AI trainer adapts as you progress."
    }
  ];

  return (
    <section className="bg-[#1a1c23] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 font-sans">
      
      {/* Header Section */}
      <div data-aos="fade-up"  className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
        <h2   className="text-4xl main-font tracking-tight  font-bold uppercase mb-4">
          How It Works
        </h2>
        <p  className="text-[#63edc4] text-lg md:text-xl font-medium">
          Get your personalized plan in 30 seconds — free forever
        </p>
      </div>

      {/* Cards Grid Section */}
      <div data-aos="fade-up"  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col p-8 rounded-2xl bg-[#2a2d35] "
          >
            {/* Number Circle */}
            <div className="w-12 h-12 rounded-full bg-[#59eabe] flex items-center justify-center mb-6">
              <span className="text-black font-bold text-xl">{step.number}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-4 text-white">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}