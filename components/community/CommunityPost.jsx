import Link from "next/link";

export default function CommunityPost({
  id,
  userName,
  exercise,
  time,
  text,
  initial,
}) {
  const exerciseSlug = exercise
    .toLowerCase()
    .replace(/\s+/g, "-");

  return (
    <Link
      href={`/community/${exerciseSlug}/${id}`}
      className="block"
    >
      <div className="bg-[#202126] border-b border-gray-700 p-8 hover:bg-[#25262c] transition">
        
        {/* User Info */}
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-[#303137] flex items-center justify-center text-[#1de9b6] font-semibold">
            {initial}
          </div>

          <div className="flex items-center gap-2 flex-wrap">

            <h3 className="font-bold text-lg">
              {userName}
            </h3>

            <span className="text-gray-500">
              ·
            </span>

            <span className="text-[#1de9b6]">
              {exercise}
            </span>

            <span className="text-gray-500">
              ·
            </span>

            <span className="text-gray-500">
              {time}
            </span>

          </div>
        </div>

        {/* Post Text */}
        <p className="text-lg text-gray-200 mt-6">
          {text}
        </p>

        {/* Reaction */}
        <div className="flex gap-3 mt-6">

          <button
            onClick={(e) => e.preventDefault()}
            className="px-4 py-2 rounded-full bg-[#303137] text-gray-300"
          >
            👏 0
          </button>

        </div>

      </div>
    </Link>
  );
}