import Blogfive from "@/public/images/Blog/Blogfive.avif";
import Blogfour from "@/public/images/Blog/Blogfour.avif";
import Blogone from "@/public/images/Blog/Blogone.avif";
import Blogtwo from "@/public/images/Blog/Blogtwo.avif";
import Blogthree from "@/public/images/Blog/Blogthree.avif";

const blogPosts = [
  {
    id: 1,
    slug: "shoulder-pain-during-bench-press",

    category: "Beginner Mistakes",

    // Browse by Topic filter
    topics: ["Pain", "Routines"],

    title: "Shoulder pain during bench press: 4 fixes",

    studies: "5 studies · 1,387-athlete survey",

    description:
      "Shoulder pain during bench press is almost always a form or load problem — not a shoulder problem. Here are the 4 fixes, per a 1,387-athlete study.",

    readTime: "7 min read",

    image: Blogone,

    content: [
      {
        type: "heading",
        text: "Bench press is the most pain-prone free-weight exercise",
      },
      {
        type: "paragraph",
        text: "Bench press primarily trains the chest while the shoulders and triceps assist.",
      },
      {
        type: "heading",
        text: "The 4 form mistakes",
      },
      {
        type: "paragraph",
        text: "Keep your elbows controlled and maintain a stable shoulder position.",
      },
    ],
  },

  {
    id: 2,
    slug: "how-many-reps-per-set",

    category: "Numbers Don't Lie",

    topics: ["Muscle growth", "Routines"],

    title: "How many reps per set? 2–6 for strength, 6–20 for size",

    studies: "3 studies · Int J Sports Med, J Strength Cond Res",

    description:
      "How many sets of push-ups should you do? 3 sets to failure, 3×/week: +16% arm and +27% core size in 8 weeks, per a 2019 sling push-up study.",

    readTime: "6 min read",

    image: Blogtwo,

    content: [
      {
        type: "heading",
        text: "Reps depend on your goal",
      },
      {
        type: "paragraph",
        text: "Different repetition ranges can be useful for strength and muscle growth.",
      },
    ],
  },

  {
    id: 3,
    slug: "tempo-training-lifting-slower",

    category: "Numbers Don't Lie",

    topics: ["Muscle growth", "Routines"],

    title: "Tempo training: what 6 reviews say about lifting slower",

    studies: "6 studies · Sports Med 2021 review",

    description:
      "Tempo training changes how long your muscles stay under tension. Here is what research says about lifting slower and muscle growth.",

    readTime: "6 min read",

    image: Blogthree,

    content: [
      {
        type: "heading",
        text: "What is tempo training?",
      },
      {
        type: "paragraph",
        text: "Tempo training controls the speed of each phase of an exercise, including the lowering and lifting portions.",
      },
      {
        type: "heading",
        text: "Does slower lifting build more muscle?",
      },
      {
        type: "paragraph",
        text: "Research suggests that controlled repetitions can be useful, but simply slowing every repetition does not automatically produce more muscle growth.",
      },
    ],
  },

  {
    id: 4,
    slug: "muscle-pump-after-workout",

    category: "Numbers Don't Lie",

    topics: ["Muscle growth", "Recovery"],

    title: "The pump lasts 30–60 min after a workout — not growth",

    studies: "3 studies · Int J Sports Med, J Strength Cond Res",

    description:
      "A pump lasts 30–60 minutes after a workout, then fades — and a 2025 review found it does not build muscle on its own. Here is the physiology.",

    readTime: "5 min read",

    image: Blogfour,

    content: [
      {
        type: "heading",
        text: "What causes the muscle pump?",
      },
      {
        type: "paragraph",
        text: "The muscle pump happens when increased blood flow and fluid accumulation temporarily make the trained muscle appear larger.",
      },
      {
        type: "heading",
        text: "Does the pump mean muscle growth?",
      },
      {
        type: "paragraph",
        text: "A strong pump can happen during training, but the pump itself should not be treated as proof that muscle growth has occurred.",
      },
    ],
  },

  {
    id: 5,
    slug: "barbell-front-squat-form",

    category: "Beginner Mistakes",

    topics: ["Routines", "Muscle growth"],

    title: "Barbell front squat form: 5 mistakes, backed by 4 studies",

    studies: "4 studies · Int J Sports Med, J Strength Cond Res",

    description:
      "Elbows dropping, heels rising, chest caving — barbell front squat form errors are specific. Here is how to fix all 5, backed by 4 studies.",

    readTime: "7 min read",

    image: Blogfive,

    content: [
      {
        type: "heading",
        text: "Why front squat form matters",
      },
      {
        type: "paragraph",
        text: "Good front squat technique helps you maintain a stable torso and distribute the load effectively throughout the movement.",
      },
      {
        type: "heading",
        text: "The 5 common mistakes",
      },
      {
        type: "paragraph",
        text: "Common mistakes include dropping the elbows, allowing the heels to rise, losing torso position, and using a load that is too heavy.",
      },
    ],
  },
];

export default blogPosts;