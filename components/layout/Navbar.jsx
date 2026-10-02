
"use client";

import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 z-50 w-full bg-[#1F2025] text-white">

      {/* Desktop Navbar*/}

      <div className="mx-auto flex h-[80px] max-w-[1360px] items-center justify-between px-2 lg:px-25">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className=" cursor-pointer text-3xl font-bold tracking-tight lg:text-[30px] " >
            Planfit
          </Link>
        </div>


        {/* DESKTOP MENU  */}

        <div className="hidden items-center gap-7 lg:flex">

          {/* Exercises */}
          <Link
            href="/exercises"
            className=" text-[16px] font-bold transition hover:text-[#22E6C3] " >
            Exercises
          </Link>


          {/* Workouts */}
          <Link
            href="/workouts"
            className=" text-[16px] font-bold transition hover:text-[#22E6C3] "
 >
            Workouts
          </Link>


          {/* Community */}
          <Link
            href="/community"
            className=" text-[16px] font-bold  transition hover:text-[#22E6C3]">
            Community
          </Link>


          {/* Blog */}
          <Link
            href="/blog"
            className=" text-[16px] font-bold transition  hover:text-[#22E6C3] " >
            Blog
          </Link>


          {/* About */}
          <Link
            href="/about"
            className=" text-[16px] font-bold transition hover:text-[#22E6C3]">
            About
          </Link>


          {/* Find Your AI Plan */}
          <Link
            href="/onboarding"
            className="ml-2 rounded-full bg-[#22E6C3] px-8 py-3 text-[16px] font-medium text-black transition hover:bg-[#18ceb0]">
            Find Your AI Plan
          </Link>


          {/* Sign In */}
          <Link
            href="/login"
            className=" rounded-full border border-[#3b3d43] px-7 py-3 text-[16px] text-gray-400 transition hover:border-white hover:text-white" >
            Sign in
          </Link>

        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <RxCross1 /> : <VscThreeBars />}
        </button>

      </div>


      {/* MOBILE MENU  */}

      {isOpen && (
        <div
          className=" h-screen border-t border-gray-700 bg-[#1F2025] px-2 py-8 lg:hidden "
        >

          <div className="flex flex-col gap-7">

            {/* Exercises */}
            <Link
              href="/exercises"
               className=" text-3xl font-bold transition hover:text-[#22E6C3] "
              onClick={() => setIsOpen(false)}
            >
              EXERCISES
            </Link>


            {/* Workouts */}
            <Link
              href="/workouts"
              className=" text-3xl font-bold transition hover:text-[#22E6C3] "
              onClick={() => setIsOpen(false)}
            >
              WORKOUTS
            </Link>


            {/* Community */}
            <Link
              href="/community"
              className=" text-3xl font-bold transition hover:text-[#22E6C3] "
              onClick={() => setIsOpen(false)}
            >
              COMMUNITY
            </Link>


            {/* Blog */}
            <Link
              href="/blog"
              className=" text-3xl font-bold transition hover:text-[#22E6C3] "
              onClick={() => setIsOpen(false)}
            >
              BLOG
            </Link>


            {/* About */}
            <Link
              href="/about"
              className="
                text-3xl font-bold transition hover:text-[#22E6C3] "
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>


         

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
