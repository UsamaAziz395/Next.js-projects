const workouts = [
  {
    slug: "full-body",
    title: "Full Body Workout",

    workouts: [
      {
        id: 1,
        title: "Workout 1",

        exercises: [
          {
            id: 1,
            name: "Barbell Squat",
            image: "/images/exercises/barbell.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
          {
            id: 2,
            name: "Deadlift",
            image: "/images/exercises/deadlift.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
          {
            id: 3,
            name: "Dumbbell Shoulder Press",
            image: "/images/exercises/Dumbell.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
          {
            id: 4,
            name: "Romanian Deadlift",
            image: "/images/exercises/romanian.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
          {
            id: 5,
            name: "Shoulder Press Machine",
            image: "/images/exercises/shoulderpress.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
        ],
      },

      {
        id: 2,
        title: "Workout 2",

        exercises: [
          {
            id: 6,
            name: "Lunges",
            image: "/images/exercises/lunges.png",
            sets: 3,
            reps: "10–12",
            rest: "60s",
          },
          {
            id: 7,
            name: "Push Ups",
            image: "/images/exercises/push-ups.png",
            sets: 3,
            reps: "10–15",
            rest: "60s",
          },
        ],
      },
    ],
  },

  {
    slug: "upper-body",
    title: "Upper Body Workout",

    workouts: [
      {
        id: 1,
        title: "Workout 1",

        exercises: [
          {
            id: 1,
            name: "Bench Press",
            image: "/images/exercises/bench-press.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
          {
            id: 2,
            name: "Shoulder Press",
            image: "/images/exercises/shoulder-press.png",
            sets: 3,
            reps: "8–12",
            rest: "60s",
          },
        ],
      },
    ],
  },
];

export default workouts;
