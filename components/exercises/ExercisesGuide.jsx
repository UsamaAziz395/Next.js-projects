

"use client";

import { useState } from "react";

import muscleGroups from "@/data/exercises/muscleGroups";
import equipmentList from "@/data/exercises/equipment";
import exercisesData from "@/data/exercises/exercisesData";

export default function ExercisesGuide() {

  // Search input
  const [search, setSearch] = useState("");

  // Selected muscles
  const [selectedMuscles, setSelectedMuscles] = useState([]);

  // Selected equipment
  const [selectedEquipment, setSelectedEquipment] = useState([]);


  // Muscle filter toggle
  const handleMuscleClick = (muscle) => {

    if (selectedMuscles.includes(muscle)) {

      // Remove muscle
      setSelectedMuscles(
        selectedMuscles.filter((item) => item !== muscle)
      );

    } else {

      // Add muscle
      setSelectedMuscles([
        ...selectedMuscles,
        muscle,
      ]);

    }
  };


  // Equipment filter toggle
  const handleEquipmentClick = (equipment) => {

    if (selectedEquipment.includes(equipment)) {

      setSelectedEquipment(
        selectedEquipment.filter(
          (item) => item !== equipment
        )
      );

    } else {

      setSelectedEquipment([
        ...selectedEquipment,
        equipment,
      ]);

    }
  };


  // Convert data into simple exercise list
  const allExercises = exercisesData.flatMap((group) =>
    group.exercises.map((exercise) => ({
      name: exercise,
      muscle: group.muscle,
    }))
  );


  // Apply filters
  const filteredExercises = allExercises.filter((exercise) => {

    // Search filter
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(search.toLowerCase());


    // Muscle filter
    const matchesMuscle =
      selectedMuscles.length === 0 ||
      selectedMuscles.includes(exercise.muscle);


    return matchesSearch && matchesMuscle;
  });


  return (
    <div className="w-full min-h-screen bg-[#0f1115] text-white">

      <main className="max-w-5xl mx-auto px-6 mt-20 md:mt-0 py-16">


        {/* ================= TITLE ================= */}

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Planfit Exercises Guide
        </h1>


        {/* ================= SEARCH ================= */}

        <div className="relative max-w-2xl mx-auto mb-16">

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by exercise name"
            className=" w-full bg-[#1a1d24] text-white placeholder-gray-400 text-lg rounded-xl py-4 px-5 outline-none focus:ring-2 focus:ring-green-500 " />

        </div>


        {/* ================= MUSCLE GROUP ================= */}

        <div className="mb-10">

          <h2 className="text-gray-300 font-semibold mb-4 text-lg">
            Muscle group
          </h2>


          <div className="flex flex-wrap gap-3">

            {muscleGroups.map((muscle) => {

              const isActive =
                selectedMuscles.includes(muscle);

              return (
                <button
                  key={muscle}
                  onClick={() =>
                    handleMuscleClick(muscle)
                  }
                  className={` text-sm px-5 py-2.5 rounded-full transition-colors border border-transparent 
                  ${ isActive ? "bg-[#1aeddfdd] text-black" : "bg-[#1a1d24] text-gray-200 hover:bg-[#222630]" } `} >
                  {muscle}
                </button>
              );

            })}

          </div>

        </div>


        {/* ================= EQUIPMENT ================= */}

        <div className="mb-12">

          <h2 className="text-gray-300 font-semibold mb-4 text-lg">
            Equipment
          </h2>


          <div className="flex flex-wrap gap-3">

            {equipmentList.map((equipment) => {

              const isActive =
                selectedEquipment.includes(equipment);

              return (
                <button
                  key={equipment}
                  onClick={() =>
                    handleEquipmentClick(equipment)
                  }
                  className={` text-sm px-5 py-2.5 rounded-full transition-colors border border-transparent ${ isActive ? "bg-[#1aeddfdd] text-black" : "bg-[#1a1d24] text-gray-200 hover:bg-[#222630]" } `} >
                  {equipment}
                </button>
              );

            })}

          </div>

        </div>


        {/* ================= COUNT ================= */}

        <div className="text-gray-400 mb-8">

          {filteredExercises.length} exercises

        </div>


        {/* ================= EXERCISES ================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">

          {filteredExercises.map((exercise) => (

            <div
              key={`${exercise.muscle}-${exercise.name}`}
              className="group"
            >

              <h3 className="text-xl font-semibold mb-2">
                {exercise.muscle}
              </h3>

              <p className="text-gray-300">
                {exercise.name}
              </p>

            </div>

          ))}


          {/* No result */}

          {filteredExercises.length === 0 && (

            <p className="text-gray-400 col-span-full text-center py-10">
              No exercises found.
            </p>

          )}

        </div>


      </main>

    </div>
  );
}