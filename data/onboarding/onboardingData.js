const onboardingData = [
  {
    id: 1,
    question: "Let's build your plan — every set, rep, and weight",
    subtitle: "Choose your age · Only used for your plan",

    type: "age",

    options: [
      {
        id: "18-29",
        title: "18–29",
        image: "/images/onboarding/firstimage.webp",
      },
      {
        id: "30-39",
        title: "30–39",
        image: "/images/onboarding/secondimage.webp",
      },
      {
        id: "40-49",
        title: "40–49",
        image: "/images/onboarding/thirdimage.webp",
      },
      {
        id: "50-plus",
        title: "50+",
        image: "/images/onboarding/forthimage.webp",
      },
    ],
  },

  {
    id: 2,
    question: "What is your gender?",
    subtitle:
      "Helps us personalize your training. Never shared anywhere.",

    type: "normal",

    options: [
      {
        id: "male",
        title: "Male",
      },
      {
        id: "female",
        title: "Female",
      },
      {
        id: "non-binary",
        title: "Non-binary",
      },
      {
        id: "prefer-not-to-say",
        title: "Prefer not to say",
      },
    ],
  },

  {
    id: 3,

    type: "intro",

    title: "Time to build the best shape of your life",

    description:
      "The AI coach 3.8M+ people trust builds a plan made for you.",

    buttonText: "Continue",
  },

  {
    id: 4,

    question: "What's your main goal?",
    subtitle: "Choose the goal you want to focus on.",

    type: "normal",

    options: [
      {
        id: "muscle",
        title: "Build Muscle",
      },
      {
        id: "fat-loss",
        title: "Lose Fat",
      },
      {
        id: "strength",
        title: "Build Strength",
      },
      {
        id: "fitness",
        title: "Improve Fitness",
      },
    ],
  },

  {
    id: 5,

    question: "How many days can you train?",
    subtitle:
      "Choose how often you can realistically work out.",

    type: "normal",

    options: [
      {
        id: "2-days",
        title: "2 Days",
      },
      {
        id: "3-days",
        title: "3 Days",
      },
      {
        id: "4-days",
        title: "4 Days",
      },
      {
        id: "5-days",
        title: "5 Days",
      },
    ],
  },
];

export default onboardingData;