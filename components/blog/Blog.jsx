"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import blogPosts from "../../data/blog/blogPosts";

export default function Blog() {
  const categories = [
    "Routines",
    "Recovery",
    "Pain",
    "Nutrition",
    "Cardio",
    "Muscle growth",
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);

  const filteredPosts = selectedTopic
    ? blogPosts.filter((post) =>
        post.topics.includes(selectedTopic)
      )
    : blogPosts;

  return (
    <main className="min-h-screen bg-[#151619] px-5 py-24 text-white">

      {/* Header */}
      <section className="mx-auto max-w-5xl">

        <h1 className="text-2xl font-bold md:text-4">
          Planfit Blog
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-300">
          Hypertrophy, fat loss, recovery — every gym question
          answered with peer-reviewed research.
        </p>

      </section>


      {/* Browse By Topic */}
      <section className="mx-auto mt-16 max-w-5xl">

        <h2 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-400">
          Browse by topic
        </h2>

        <div className="flex flex-wrap gap-3">

          {categories.map((category) => {

            const count = blogPosts.filter((post) =>
              post.topics.includes(category)
            ).length;

            const isActive = selectedTopic === category;

            return (
              <button
                key={category}
                onClick={() =>
                  setSelectedTopic(
                    isActive ? null : category
                  )
                }
                className={` rounded-full border px-5 py-3 text-sm transition
                  ${
                    isActive
                      ? "border-[#1de9b6] bg-[#1de9b6] text-black"
                      : "border-[#303137] bg-[#202125] text-gray-300 hover:border-[#1de9b6]"
                  }
                `}
              >
                {category}

                <span className="ml-2 text-xs opacity-60">
                  {count}
                </span>
              </button>
            );
          })}

        </div>

      </section>


      {/* Divider */}
      <section className="mx-auto mt-8 max-w-5xl">
        <div className="border-t border-[#292a2d]" />
      </section>


      {/* Blog Cards */}
      <section className="mx-auto mt-2 max-w-5xl">

        {filteredPosts.length > 0 ? (

          filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))

        ) : (

          <div className="py-20 text-center">
            <p className="text-gray-400">
              No articles found for this topic.
            </p>
          </div>

        )}

      </section>

    </main>
  );
}