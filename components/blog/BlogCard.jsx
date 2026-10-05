import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <article
        className=" mx-0 flex flex-col gap-6 border-b border-[#292a2d] py-8 sm:mx-0 sm:py-9 md:mx-15 md:flex-row md:justify-between md:gap-6 md:py-10 " >

        {/* LEFT CONTENT */}
        <div className="min-w-0 flex-1">

          {/* Category */}
          <div className="mb-4 sm:mb-5">
            <span
              className=" inline-block rounded-md bg-[#173d38] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#1de9b6] sm:text-xs " >
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h2
            className=" max-w-3xl font-serif text-xl font-bold leading-tight text-white sm:text-2xl md:text-[26px] " >
            {post.title}
          </h2>

          {/* Studies */}
          <div className="mt-4 sm:mt-5">
            <span
              className=" inline-block rounded-md border border-[#31594f] bg-[#17231f] px-3 py-2 text-[11px] text-[#8ee8ce] sm:text-xs " >
              {post.studies}
            </span>
          </div>

          {/* Description */}
          <p
            className=" mt-4 max-w-3xl text-sm leading-6 text-gray-400 sm:mt-5 "
          >
            {post.description}
          </p>
        </div>


        {/* RIGHT IMAGE */}
        <div
          className=" relative h-[190px] w-full shrink-0 overflow-hidden rounded-lg sm:h-[200px] md:h-[170px] md:w-[255px] " >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="
              (max-width: 767px) 100vw,
              255px
            "
            className=" object-cover object-center transition-transform duration-500 group-hover:scale-105 " />
        </div>

      </article>
    </Link>
  );
}