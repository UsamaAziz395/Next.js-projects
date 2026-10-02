import React from 'react';

export default function NewToGymSection() {
  // Features ki list (Aap yahan text change kar sakte hain)
  const features = [
    "Don't know what to do at the gym? AI tells you exactly what to do today",
    "Video guides for every exercise — never worry about bad form again",
    "Get personal training-level plans for free — no expensive PT sessions needed"
  ];

  return (
    <section className="min-h-screen bg-[#1a1c23] text-white py-20 px-6 md:px-16 flex flex-col items-center justify-center font-sans">
      
      {/* Header Section */}
      <div
      data-aos="fade-up"
       className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl md:text-4xl  font-extrabold uppercase tracking-tight mb-6 leading-tight">
          New to the gym? No problem.
        </h2>
        <p className="text-gray-300 text-md md:text-xl font-medium max-w-3xl mx-auto">
          Planfit helps you work out confidently — no personal <br className='block md:hidden'/> trainer needed
        </p>
      </div>

      {/* Features List Section */}
      <div
      data-aos="fade-right" 
       className="flex flex-col gap-8 max-w-4xl w-full mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-5">
            
            {/* Green Checkmark Icon */}
            <div className="flex-shrink-0 mt-1">
              <div className=" w-4 md:w-7 h-4 md:h-7 rounded-full bg-[#00e5a0] flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="black" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>

            {/* Feature Text */}
            <p className="text-sm md:text-xl font-semibold leading-tight md:leading-relaxed text-gray-100 opacity-100">
              {feature}
            </p>
            
          </div>
        ))}
      </div>

    </section>
  );
}