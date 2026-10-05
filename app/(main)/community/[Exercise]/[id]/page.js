import Link from "next/link";
import communityPosts from "@/data/community/communityPosts";

export default async function CommunityPostPage({ params }) {
  const { id } = await params;

  const post = communityPosts.find(
    (post) => post.id === Number(id)
  );

  if (!post) {
    return (
      <main className="min-h-screen bg-[#18191d] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Post not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#18191d] text-white">

      <div className="max-w-6xl mx-auto px-6 py-32">

        {/* Back */}
        <Link
          href="/community"
          className="text-[#1de9b6] text-lg hover:underline"
        >
          ← Back to Community
        </Link>

        {/* Post */}
        <div className="mt-20 bg-[#202126] border border-[#303137] rounded-2xl p-10">

          {/* User */}
          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-[#303137] flex items-center justify-center text-[#1de9b6] font-semibold text-lg">
              {post.initial}
            </div>

            <div className="flex items-center gap-3 flex-wrap">

              <h2 className="font-bold text-xl">
                {post.userName}
              </h2>

              <span className="text-gray-500">
                ·
              </span>

              <span className="text-[#1de9b6] text-lg">
                {post.exercise}
              </span>

              <span className="text-gray-500">
                ·
              </span>

              <span className="text-gray-500">
                {post.time}
              </span>

            </div>
          </div>

          {/* Text */}
          <p className="text-xl mt-8 text-gray-200">
            {post.text}
          </p>

          {/* Reaction */}
          <div className="mt-8">

            <button className="px-5 py-3 rounded-full bg-[#303137] text-gray-300">
               0
            </button>

          </div>

        </div>

        {/* Comment */}
        <div className="mt-10 bg-[#303137] rounded-2xl p-7 text-center">
<Link href="/login">
          <button  className="text-[#1de9b6] text-xl font-semibold">
            Sign in to write a comment
          </button>
          </Link>

        </div>

      </div>

    </main>
  );
}