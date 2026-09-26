import Link from "next/link";
import { Workout } from "@/app/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-[#ccff00] transition block"
    >
      <img
        src={workout.image}
        alt={workout.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <div className="flex gap-2 flex-wrap">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="badge badge-sm bg-[#ccff00] text-black border-none font-medium uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-bold uppercase tracking-wide">{workout.name}</h3>
        <p className="text-gray-400 text-sm">{workout.equipment}</p>
        <div className="flex items-center gap-4 text-sm text-gray-300 pt-1">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}