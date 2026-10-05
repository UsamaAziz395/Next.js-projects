"use client";

const communityExercises = [
  "Lat Pulldown",
  "Shoulder Press",
  "Leg Extension",
  "Leg Press",
  "Dumbbell Bench Press",
  "Barbell Row",
];

export default function CommunityExercise({
  selectedExercises,
  setSelectedExercises,
}) {
  const handleClick = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      // Agar already selected hai to remove
      setSelectedExercises(
        selectedExercises.filter(
          (item) => item !== exercise
        )
      );
    } else {
      // Agar selected nahi hai to add
      setSelectedExercises([
        ...selectedExercises,
        exercise,
      ]);
    }
  };

  return (
    <aside>
      <h2 className="text-xl font-bold mb-6">
        Exercise Communities
      </h2>

      <div className="flex flex-wrap gap-3">
        {communityExercises.map((exercise) => {
          const isActive =
            selectedExercises.includes(exercise);

          return (
            <button
              key={exercise}
              onClick={() => handleClick(exercise)}
              className={`
                px-5 py-3
                rounded-full
                text-sm
                transition-all
                ${
                  isActive
                    ? "bg-[#1de9b6] text-black"
                    : "bg-[#303137] text-gray-400 hover:bg-[#3a3b42]"
                }
              `}
            >
              {exercise}
            </button>
          );
        })}
      </div>
    </aside>
  );
}