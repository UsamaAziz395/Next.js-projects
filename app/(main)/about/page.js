export default function Page() {
  // 1. Saara data ek array of objects mein
  const sections = [
  
    {
      title: "Planfit by the numbers",
      items: [
        "3.8M+ people train with Planfit",
        "16M+ workouts logged",
        "87M+ exercises logged",
        "300M+ sets recorded",
        "245,000+ gyms across 150 countries",
        "9M+ pieces of equipment mapped, so plans match what your gym actually has",
        "4.7 out of 5, from 67,000+ ratings on the App Store and Google Play",
      ],
    },
    {
      title: "Awards and recognition",
      items: [
        "Selected as App of the Day in 114 App Store storefronts (2024)",
        "Selected for Google's Changgu program for Google Play developers (2022)",
        "Selected for the Korean government TIPS R&D program (2022)",
        "Excellence Award, Chung Ju-yung Entrepreneurship Competition (2023)",
      ],
    },
  {   
    title: " Company",
    items: [
      "Founded by june 2021 by Hyeonwoo Beak",
      "Seed round by Springboot(2021)"
    ]

  },
   {   
    title: " In the press",
    items: ["Planfit raises seed funding — VentureSquare",
      
    ]

  },
  ];

  return (
    <section className="bg-[#111111]  px-6 mt-20 py-20 md:px-12 lg:px-24">

         <div className=" max-w-3xl mx-auto space-y-4 text-white">
      <h1 className="text-3xl font-bold">About Planfit</h1>
      <p className="text-gray-400">Planfit is an AI personal trainer app. It builds a workout plan around your goal, equipment and schedule, adjusts it as you get stronger, and guides every exercise with video and voice coaching.</p>
    </div>


      <div className="max-w-3xl mx-auto my-15">
        
        {/* 2. Array par map chala kar dono sections render karein */}
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-16 last:mb-0">

            {/* Section Heading */}
            <h2 className="text-xl font-bold mb-5 text-white">
              {section.title}
            </h2>

            {/* Section Items */}
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="text-[#00ffdd] mr-3 text-xl leading-none mt-1">
                    •
                  </span>
                  <span className="text-gray-400 text-md leading-tighter font-mono">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}