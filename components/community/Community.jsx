"use client";

import { useState } from "react";

import CommunityExercise from "./CommunityExercise";
import CommunityPost from "./CommunityPost";

import communityPosts from "../../data/community/communityPosts";
export default function Community() {
  const [selectedExercises, setSelectedExercises] = useState([]);

  // Selected exercises ke according posts filter
  const filteredPosts =
    selectedExercises.length === 0
      ? communityPosts
      : communityPosts.filter((post) =>
          selectedExercises.includes(post.exercise)
        );

  return (
    <main className="min-h-screen bg-[#18191d] text-white">

      <div className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-16">

          {/* LEFT SIDE */}
          <CommunityExercise
            selectedExercises={selectedExercises}
            setSelectedExercises={setSelectedExercises}
          />

          {/* RIGHT SIDE */}
          <section>

            <h1 className="text-4xl font-bold mb-3">
              Community
            </h1>

            <p className="text-gray-500 mb-10">
              {filteredPosts.length} posts
            </p>

            {/* NEW / TOP */}
            <div className="flex gap-10 border-b border-gray-700 mb-8">

              <button className="text-[#1de9b6] font-semibold pb-4 border-b-2 border-[#1de9b6]">
                New
              </button>

              <button className="text-gray-500 font-semibold pb-4">
                Top
              </button>

            </div>

            {/* POSTS */}
            <div className="rounded-2xl overflow-hidden">

              {filteredPosts.length > 0 ? (

                filteredPosts.map((post) => (
                  <CommunityPost
                    key={post.id}
                    id={post.id}
                    userName={post.userName}
                    exercise={post.exercise}
                    time={post.time}
                    text={post.text}
                    initial={post.initial}
                  />
                ))

              ) : (

                <div className="bg-[#202126] p-10 text-center text-gray-500">
                  No posts found for selected exercises.
                </div>

              )}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}