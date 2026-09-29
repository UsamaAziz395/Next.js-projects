"use client";

import React from "react";
import MarqueeRow from "@/components/ui/MarqueeRow";
import { IoStar } from "react-icons/io5";
import Image from "next/image";

import appstorelogo from "../../public/images/appstorelogo.svg";
import playstorelogo from "../../public/images/playstorelogo.svg";

export default function AnimatedCards() {
  // Row 1 ke cards
  const row1Cards = [
    {
      id: 1,
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
      title: "Jason Draven",
      logo: playstorelogo,
      rating: (
        <> <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar /> </>
      ),
      description:
        "this is a great app so many exercises to choose from and it's awesome having my rest, timed so I don't sit on the machines for too long.",
      date: "Nov 4, 2025",
    },

    {
      id: 3,
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
          backed of tens thousand of reviews
        </h2>
      </div>

      {/* ROW 1*/}

      <MarqueeRow direction="left" speed={30}>
        {row1Cards.map((card) => (
          <div
            key={card.id}
            className=" relative flex-shrink-0 w-[280px] md:w-[410px] h-[220px] md:h-[240px] rounded-2xl border border-gray-700 bg-[#1a1c23] p-5 transition-colors hover:border-[#5df0c4]">

            {/* Top: Name + Logo */}
            <div className="flex items-center justify-between">

              <h3 className="text-lg font-bold">
                {card.title}
              </h3>

              <Image
                src={card.logo}
                alt="store logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />

            </div>


            {/* Stars */}
            <div className="mt-4 flex gap-1 text-[#18e0d0]">
              {card.rating}
            </div>


            {/* Description */}
            <p
              className=" mt-4 text-sm font-medium leading-6  text-white line-clamp-4 " >
              {card.description}
            </p>


            {/* DATE */}
            <span
              className=" absolute  bottom-5 left-5  text-xs font-medium  text-gray-400 " >
              {card.date}
            </span>

          </div>
        ))}
      </MarqueeRow>


      {/* ================= ROW 2 ================= */}

      <MarqueeRow direction="right" speed={30}>
        {row2Cards.map((card) => (
          <div
            key={card.id}
            className="  relative  flex-shrink-0  w-[280px]  md:w-[420px]  h-[220px] md:h-[240px] rounded-2xl border border-gray-700 bg-[#1a1c23] p-5transition-colors hover:border-[#5df0c4]">

            {/* Top: Name + Logo */}
            <div className="flex items-center justify-between">

              <h3 className="text-lg font-bold">
                {card.title}
              </h3>

              <Image
                src={card.logo}
                alt="store logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />

            </div>


            {/* Stars */}
            <div className="mt-4 flex gap-1 text-[#18e0d0]">
              {card.rating}
            </div>


            {/* Description */}
            <p
              className=" mt-4 text-sm font-medium leading-6 text-white line-clamp-4" >
              {card.description}
            </p>


            {/* DATE */}
            <span
              className=" absolute bottom-5 left-5 text-xs font-medium  text-gray-400 ">
              {card.date}
            </span>

          </div>
        ))}
      </MarqueeRow>

    </section>
  );
}