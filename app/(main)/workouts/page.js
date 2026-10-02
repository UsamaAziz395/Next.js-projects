

import Link from "next/link";
import workouts from "@/app/data/workouts";

export default function Workouts() {
  return (
    <div>
      <h1>Workouts</h1>

      {workouts.map((workout) => (
        <div key={workout.slug}>
          <Link href={`/workouts/${workout.slug}`}>
            {workout.title}
          </Link>
        </div>
      ))}
    </div>
  );
}