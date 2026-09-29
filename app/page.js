import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowITWorks';
import GymSection from '@/components/sections/GymSection';
import Plans from '@/components/sections/Plans';
// import Aiplan from '@/components/sections/Aiplan';
import Services from '@/components/sections/Services';
import Faqs from '@/components/sections/Faqs';
import Phoneimage from '@/components/sections/Phoneimage'
import Analysis from '@/components/sections/Analysis'
import Stats from '@/components/sections/Stats';
import Workoutplan from '@/components/sections/WorkoutPlan';
import Exerciseguaid from '@/components/sections/Exerciseguaid';
import AnimatedCards from '@/components/sections/AnimatedCards';


export default function HomePage() {
  return (
    <>
       <Hero />
       <AnimatedCards />
       <Stats />
      <HowItWorks />
      <Workoutplan />
      <Exerciseguaid />
       <Services />
       <Analysis />
       <GymSection />
       <Plans />
      {/* <Aiplan /> */}
      <Faqs />
      <Phoneimage />
    </>
  );
}