import FilterButton from "./FilterButton";

export default function FilterSection({
  title,
  items,
  selected,
  setSelected,
}) {
  return (
    <div className="mb-10">
      <h2 className="text-gray-300 font-semibold mb-4 text-lg">
        {title}
      </h2>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <FilterButton
            key={item}
            title={item}
            active={selected === item}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>
    </div>
  );
}
