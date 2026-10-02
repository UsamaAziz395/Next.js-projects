"use client";
import Link from "next/link";
import React from "react";
import MarqueeRow from "@/components/ui/MarqueeRow";
import { IoStar } from "react-icons/io5";
import Image from "next/image";
import Defian from "../../public/images/Defian.jpg";
import Deez from "../../public/images/Deez.png"
import Maya from "../../public/images/Maya.png";
import christopher from "../../public/images/christopher.webp"
import jason from "../../public/images/jason.jpg"
import Saumya from "../../public/images/Saumya.png"
import Gardunio from "../../public/images/Gardunio.png"
import jusbran from "../../public/images/jusbran.png"
import Okandi from "../../public/images/Okandi.png"
import Robert from "../../public/images/Robert.jpg"
// import Diego from "../../public/images/Diego.jpg"
import appstorelogo from "../../public/images/appstorelogo.svg";
import playstorelogo from "../../public/images/playstorelogo.svg";

export default function AnimatedCards() {
  // Row 1 ke cards
  const row1Cards = [
    {
      id: 1,
      storeurl: "https://apps.apple.com/us/app/planfit-ai-gym-workout-planner/id1511876936",
      image: Deez,
      title: "Deez1421",
      logo: appstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description: "Best fitness app on the market!",
      date: "May 29, 2025",
    },

    {
      id: 2,
      storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",

         image: jason,
      title: "Jason Draven",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>),
      description:
        "this is a great app so many exercises to choose from and it's awesome having my rest, timed so I don't sit on the machines for too long.",
      date: "Nov 4, 2025",
    },

    {
      id: 3,
            storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",

         image: Robert,
      title: "Robert Thomas",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description:
        "I've been working out for many years. This app has did wonders for my growth.",
      date: "Feb 25, 2026",
    },

    {
      id: 4,
         storeurl: "https://apps.apple.com/us/app/planfit-ai-gym-workout-planner/id1511876936",
         image: jusbran,
      title: "@itsjusbran",
      logo: appstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description:
        "This is life changing! Do it if you’re not able to get personal coaching.",
      date: "Feb 24, 2026",
    },

    {
      id: 5,
            storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",

         image: christopher,
      title: "Christopher Cluck",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description:
        "I love my exercise app because it pushes me, tracks my progress, and gives me that hit of motivation I didn’t know I needed. It turns effort into achievements, routines into momentum, and ever",
      date: "Dec 10, 2025",
    },

    {
      id: 6,
            storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",

         image: Defian,
      title: "DefiantN8tv",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description:
        "first time using it. it's nice having a little coach in my pocket",
      date: "Nov 4, 2025",
    },
  ];

  // Row 2 ke cards
  const row2Cards = [
    {
      id: 8,
         storeurl: "https://apps.apple.com/us/app/planfit-ai-gym-workout-planner/id1511876936",
         image: Okandi ,
      title: "Okanadi",
      logo: appstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description: "Best fitness app on the market!",
      date: "Dec 18, 2025",
    },

    {
      id: 9, 
            storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",

          image: christopher,
      title: "Christopher Cluck",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
        </>
      ),
      description:
        "I love my exercise app because it pushes me, tracks my progress, and gives me that hit of motivation I didn’t know I needed. It turns effort into achievements, routines into momentum, and ever",
      date: "Dec 10, 2025",
    },

    {
      id: 10,
         storeurl: "https://apps.apple.com/us/app/planfit-ai-gym-workout-planner/id1511876936",
         image: Saumya,
      title: "Saum____ya",
      logo: appstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
        </>
      ),
      description:
        "Thanks so much for this lovely app! I absolutely love it. One suggestion would be to allow me to post 9:16 aspect ratio pictures (full size). Or if that is not possible then please allow 3:4 ratio. Because I click",
      date: "Mar 10, 2025",
    },

    {
      id: 11,
            storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",

         image: Maya,
      title: "Maya Stravinskaya",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
        </>
      ),
      description:
        "Of all the apps I tested, I liked this one the most and ended up subscribing. What I really appreciate is the option to listen to music while still receiving voice cues from the trainer or hearing the repetition",
      date: "Mar 16, 2026",
    },

    {
      id: 12,
         storeurl: "https://apps.apple.com/us/app/planfit-ai-gym-workout-planner/id1511876936",
         image: Deez,
      title: "Deez1421",
      logo: appstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
        </>
      ),
      description: "Best fitness app on the market!",
      date: "May 29, 2025",
    },

    {
      id: 13,
      storeurl : "https://play.google.com/store/apps/details?id=com.mih.planfit&reviewId=dffcbc95-e818-43da-8a0a-695f97051bca",
         image: Gardunio,
      title: "Bernadette Gardunio",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
        </>
      ),
      description:
        "Very helpful app. Started 6 weeks ago and am making great progress.",
      date: "Mar 23, 2025",
    },
  ];

  return (
    <section className="overflow-hidden bg-[#1a1c23] py-16 text-white md:py-24">

      {/* Header */}
      <div className="mb-12 px-4 md:px-12">
        <h2 className="text-2xl font-bold uppercase leading-tight md:text-4xl">
          backed of tens of <br className="block md:hidden" /> thousand of reviews
        </h2>
      </div>

      {/* ROW 1*/}

      <MarqueeRow direction="left" speed={50}>
        {row1Cards.map((card) => (
          <div
            key={card.id}
            className=" relative flex-shrink-0  w-[420px] h-[220px] rounded-2xl border border-gray-700 bg-[#1a1c23] p-5 transition-colors hover:border-[#5df0c4]">

            {/* Top: Name + Logo */}

            <Link href={card.storeurl} >
            <div className="flex items-center justify-between">

              <div className="flex gap-2">
             <Image
                src={card.image}
                alt="image"
                width={24}
                height={24}
                className="h-6 w-6 object-contain rounded-full"/>

              <h3 className="text-lg font-bold">
                {card.title}
              </h3>

              </div>

              <Image
                src={card.logo}
                alt="store logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />

            </div>


            {/* Stars */}
            <div className="mt-1 flex gap-1 text-[#18e0d0]">
              {card.rating}
            </div>


            {/* Description */}
            <p
              className=" mt-1 text-sm leading-6  text-white line-clamp-4 " >
              {card.description}
            </p>


            {/* DATE */}
            <span
              className=" absolute  bottom-5 left-5  text-xs font-medium  text-gray-400 " >
              {card.date}
            </span>
</Link>
          </div>
        ))}
      </MarqueeRow>


      {/* ROW 2 */}

      <MarqueeRow direction="right" speed={50}>
         {row2Cards.map((card) => (
          <div
            key={card.id}
            className=" relative flex-shrink-0 w-[280px] md:w-[400px] h-[220px] md:h-[240px] rounded-2xl border border-gray-700 bg-[#1a1c23] p-5 transition-colors hover:border-[#5df0c4]">

            {/* Top: Name + Logo */}

            <Link href={card.storeurl}>
            <div className="flex items-center justify-between">

              <div className="flex gap-2">
                      <Image
                src={card.image}
                alt="image"
                width={24}
                height={24}
                className="h-6 w-6 object-contain rounded-full"/>

              <h3 className="text-lg font-bold">
                {card.title}
              </h3>

              </div>

             

              <Image
                src={card.logo}
                alt="store logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />

            </div>


            {/* Stars */}
            <div className="mt-1 flex gap-1 text-[#18e0d0]">
              {card.rating}
            </div>


            {/* Description */}
            <p
              className="mt-1 text-sm leading-6 text-white " >
              {card.description}
            </p>


            {/* DATE */}
            <span
              className="absolute bottom-5 left-5 text-xs font-medium  text-gray-400 " >
              {card.date}
            </span>

            </Link>

          </div>
        ))}
      </MarqueeRow>

    </section>
  );
}