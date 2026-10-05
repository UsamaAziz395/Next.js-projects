workouts
import exercises from "@/data/exercises/exercisesData";
import workouts from "@/data/workouts";
import Image from "next/image";



export default async function WorkoutPage({ params }) {
  const { slug } = await params;

  // Slug filter
  const workout = workouts.find(
    (item) => item.slug === slug
  );

  // Exercise filter
  const workoutExercises = exercises.filter(
    (exercise) => exercise.workout === slug
  );

  return (
    <main className="min-h-screen bg-[#1a1c23] text-white py-2 px-4 md:px-8">

      {/* Main Container */}
      <div className="max-w-5xl mx-auto">

        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {workout.title}
          </h1>

          <p className="text-gray-400 mt-2">
            Exercises: {workout.exercises}
          </p>
        </div>

        {/* Workout Card */}
        <section className="bg-[#292a2f] rounded-2xl overflow-hidden">

          {/* Workout Title */}
          <div className="px-5 py-6">
            <h2 className="text-xl md:text-2xl font-bold">
              Workout 1
            </h2>
          </div>

          {/* Exercises */}
          <div className="px-4">

            {workoutExercises.map((exercise, index) => (

              <div
                key={exercise.id}
                className={`flex items-center gap-4 py-5 border-b border-white/10 last:border-b-0 hover:bg-white/[0.03] transition `} >

                {/* Exercise Number */}
                <div className="w-8 md:w-10 shrink-0 text-center">
                  <span className="text-lg font-semibold text-gray-300">
                    {index + 1}
                  </span>
                </div>

                {/* Exercise Image Placeholder */}
                <div className="w-20 h-20 md:w-24 md:h-20 rounded-xl">
                  <span >
                       <Image
                    src={exercise.image}
                    alt={exercise.name}
                   width={200}
                   height={200}
                    className="object-contain p-2"
                  />
                
                  </span>
                </div>

                {/* Exercise Information */}
                <div className="flex-1 min-w-0">

                  <h3 className="text-base md:text-xl font-bold">
                    {exercise.name}
                  </h3>

                  <p className="text-sm md:text-base text-gray-400 mt-1">
                    {exercise.muscle}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    3 sets × 8–12 reps · 60s rest
                  </p>

                </div>

                {/* Arrow */}
                <div className="text-gray-400 text-2xl shrink-0">
                  ›
                </div>

              </div>

            ))}

          </div>

        </section>

      </div>

    </main>
  );
}

