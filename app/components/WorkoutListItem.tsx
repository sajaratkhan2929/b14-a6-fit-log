"use client";

import Link from "next/link";
import { toast } from "react-toastify";
import { Workout } from "@/app/types/workout";
import { usePlan } from "@/app/context/PlanContext";

export default function WorkoutListItem({
  workout,
  variant,
}: {
  workout: Workout;
  variant: "plan" | "saved";
}) {
  const { removeFromPlan, removeFromSaved } = usePlan();

  const handleRemove = () => {
    if (variant === "plan") {
      removeFromPlan(workout.id);
      toast.info("Removed from today's plan");
    } else {
      removeFromSaved(workout.id);
      toast.info("Removed from saved");
    }
  };

  const handleMarkDone = () => {
    toast.success(`${workout.name} marked as done!`);
  };

  return (
    <div className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-xl p-3">
      <img
        src={workout.image}
        alt={workout.name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-bold uppercase text-sm">{workout.name}</h3>
        <p className="text-gray-400 text-xs mb-1">{workout.equipment}</p>
        <div className="flex gap-3 text-xs text-gray-300">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link href={`/workouts/${workout.id}`} className="btn btn-sm btn-outline border-gray-600 text-white">
          View Details
        </Link>
        {variant === "plan" && (
          <button onClick={handleMarkDone} className="btn btn-sm bg-[#ccff00] text-black border-none">
            ✓ Done
          </button>
        )}
        <button onClick={handleRemove} className="btn btn-sm btn-circle btn-ghost text-gray-400 hover:text-red-400">
          ✕
        </button>
      </div>
    </div>
  );
}