import Image from "next/image";
import Link from "next/link";

export default function BlogArticle({ post }) {
  return (
    <main className="min-h-screen bg-[#151619] text-white">

      <article className="mx-auto max-w-4xl px-5 py-16 md:py-24">

        {/* Category */}
        <div>
          <span
            className=" inline-block rounded-md bg-[#173d38] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#1de9b6] " >
            {post.category}
          </span>
        </div>


        {/* Title */}
        <h1
          className=" mt-7 max-w-4xl font-serif text-4xl font-bold leading-tight text-white md:text-6xl " >
          {post.title}
        </h1>


        {/* Studies */}
        <div className="mt-8">
          <span
            className=" inline-block rounded-md border border-[#31594f] bg-[#17231f] px-4 py-2 text-sm text-[#8ee8ce] " >
            {post.studies}
          </span>
        </div>


        {/* Description */}
        <p
          className=" mt-8 text-lg italic leading-8 text-gray-300 md:text-xl " >
          {post.description}
        </p>


        {/* Read Time */}
        <p className="mt-6 text-sm text-gray-500">
          {post.readTime}
        </p>


        {/* Hero Image */}
        <div
          className=" relative mt-10 h-[300px] w-full overflow-hidden rounded-2xl md:h-[500px] " >
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>


        {/* Article Content */}
        <div className="mt-14">

          {post.content.map((section, index) => {

            {/* Heading */}
            if (section.type === "heading") {
              return (
                <h2
                  key={index}
                  className=" mt-12 text-2xl font-bold leading-tight text-white md:text-3xl " >
                  {section.text}
                </h2>
              );
            }


            {/* Paragraph */}
            if (section.type === "paragraph") {
              return (
                <p
                  key={index}
                  className=" mt-5 text-base leading-8 text-gray-300 md:text-lg " >
                  {section.text}
                </p>
              );
            }


            {/* Quote */}
            if (section.type === "quote") {
              return (
                <blockquote
                  key={index}
                  className=" my-10 border-l-4 border-[#1de9b6] bg-[#1c1d21] px-6 py-5 text-lg italic leading-8 text-gray-200 " >
                  {section.text}
                </blockquote>
              );
            }

            return null;
          })}

        </div>


        {/* Back Button */}
        <div className="mt-16 border-t border-[#292a2d] pt-8">

          <Link
            href="/blog"
            className=" inline-flex rounded-full bg-[#1de9b6] px-6 py-3 font-semibold text-black transition hover:bg-[#15c99d] " >
            ← Back to Blog
          </Link>

        </div>

      </article>

    </main>
  );
}