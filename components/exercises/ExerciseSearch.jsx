export default function ExerciseSearch() {
  return (
    <div className="relative max-w-2xl mx-auto mb-16">
      <input
        type="text"
        placeholder="Search by exercise name"
        className="w-full bg-[#1a1d24] text-white
        placeholder-gray-400 text-lg rounded-xl
        py-4 px-5 outline-none"
      />
    </div>
  );
}