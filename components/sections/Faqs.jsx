

'use client';

import React, { useState } from 'react';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Planfit really free?",
      answer: ' Yes. Core features — AI workout plans, exercise guides, and workout tracking — are free to use for life. Optional premium features add deeper coaching when you want it.'
    },
    {
      question: "What equipment do I need?",
      answer: "Planfit creates plans for any setup — full gym, home gym, dumbbells only, or just bodyweight. Tell the AI what you have, and it builds the optimal plan around your equipment."
    },
    {
      question: "How does the AI personalize my plan?",
      answer: "Planfit AI analyzes your fitness level, goals, available equipment, schedule, and training history to create a program tailored specifically to you. As you train, it adapts based on your progress and feedback."
    },
    {
      question: "Can beginners use Planfit?",
      answer: "Absolutely. Planfit is designed for all fitness levels. Beginners get plans with proper exercise progression, appropriate volume, and detailed video guides for every movement. 3.8M+ users started their fitness journey with Planfit."
    },
    {
      question: "Is there a return policy?",
      answer: "Refunds for premium subscriptions follow the policies of the Apple App Store and Google Play Store. You can cancel anytime from your subscription settings in either store."
    },
    {
      question: "How is Planfit different from other apps?",
      answer: "Planfit brings AI plans, 600+ video exercise guides, voice coaching, and progress tracking together into one all-in-one fitness coach. It's not just a workout log — it's closer to a real personal trainer that adapts to you every session."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1a1c23] text-white py-16 md:py-24 px-4 sm:px-6 md:px-12 font-sans">
      
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl main-font tracking-tight font-bold uppercase">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-700 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left focus:outline-none"
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </span>
                
                {/* Plus/Minus Icon */}
                <span className="flex-shrink-0 text-[#00e5a0] text-2xl font-bold transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer Text */}
              <div 
                className={`pb-5 md:pb-6 text-gray-400 leading-relaxed transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}