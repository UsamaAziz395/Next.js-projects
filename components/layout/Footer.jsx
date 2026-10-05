import React from 'react';
import Link from 'next/link';
// import { Instagram, Github, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2a2d35] text-white pt-16 pb-8 px-6 md:px-16 lg:px-24 w-full font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Top Section: Logo and Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

          {/* Left Side: Logo and Copyright */}
          <div className="flex flex-col gap-4">
            <Link href= "/">
             <h2 className="text-3xl font-extrabold tracking-tight">Planfit</h2>
            </Link>
           
            <p className="text-gray-200 text-sm">
              Copyright © 2026 Planfit Inc.
            </p>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            {/* Primary Links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">
              <Link href="/exercises" className="hover:text-white transition-colors">Exercise Guide</Link>
              <span className="text-gray-500 hidden md:inline">|</span>
              <Link href="/workouts" className="hover:text-white transition-colors">Generate your next workout</Link>
              <span className="text-gray-500 hidden md:inline">|</span>
              <Link href="/worksout" className="hover:text-white transition-colors">AI Workout Generator</Link>
              <span className="text-gray-500 hidden md:inline">|</span>
              <Link href="/workouts" className="hover:text-white transition-colors">AI Workout Planner</Link>
              <span className="text-gray-500 hidden md:inline">|</span>
              <Link href="#" className="hover:text-white transition-colors">Free Workout Plans</Link>
              <span className="text-gray-500 hidden md:inline">|</span>
              <Link href="#" className="hover:text-white transition-colors">Free Tools</Link>
              <span className="text-gray-500 hidden md:inline">|</span>
              <Link href="/about" className="hover:text-white transition-colors">About Planfit</Link>
            </div>

            {/* Bottom Right Section: Socials, Legal Links, and Language */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-4">

              {/* Legal Links */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-300">
                <Link href="#" className="hover:text-white underline underline-offset-4 decoration-gray-500">Privacy policy</Link>
                <span className="text-gray-500">|</span>
                <Link href="#" className="hover:text-white underline underline-offset-4 decoration-gray-500">Terms of Use</Link>
                <span className="text-gray-500">|</span>
                <Link href="#" className="hover:text-white underline underline-offset-4 decoration-gray-500">Blog</Link>
                <span className="text-gray-500">|</span>
                <Link href="#" className="hover:text-white underline underline-offset-4 decoration-gray-500">Cookie Settings</Link>
              </div>

              {/* Social Icons and Language Button */}
              <div className="flex items-center gap-6">
                {/* Social Icons */}
                <div className="flex items-center gap-3">
                  <Link href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                    {/* <Instagram size={18} /> */}
                  </Link>
                  <Link href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
                    {/* <Github size={18} /> */}
                  </Link>
                </div>

                {/* Language Dropdown/Button */}
                <button className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                  {/* <Globe size={16} /> */}
                  English
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}