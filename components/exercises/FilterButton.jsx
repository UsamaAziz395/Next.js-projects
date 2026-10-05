export default function FilterButton({
  title,
  active,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        text-sm px-5 py-2.5 rounded-full
        transition-colors
        border border-transparent
        ${
          active
            ? "bg-green-500 text-black"
            : "bg-[#1a1d24] text-gray-200 hover:bg-[#222630]"
        }
      `}
    >
      {title}
    </button>
  );
}