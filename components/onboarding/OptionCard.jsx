import Image from "next/image";

export default function OptionCard({
  option,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` overflow-hidden  rounded-2xl border text-left transition-all duration-200
        ${
          selected
            ? "border-[#1de9b6] ring-2 ring-[#1de9b6]"
            : "border-transparent"
        }
      `}
    >
      {option.image && (
        <div className="relative h-[150px] w-full bg-[#202125]">
          <Image
            src={option.image}
            alt={option.title}
            fill
            sizes="(max-width: 768px) 50vw, 260px"
            className=" object-fill "
          />
        </div>
      )}

      <div className="bg-[#373a42] px-4 py-3 text-center">
        <h3 className="text-lg font-bold text-white">
          {option.title}
        </h3>

        {option.description && (
          <p className="mt-1 text-sm text-gray-400">
            {option.description}
          </p>
        )}
      </div>
    </button>
  );
}