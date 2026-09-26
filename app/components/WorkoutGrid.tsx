"use client";

import { useState } from "react";
import { Workout } from "@/app/types/workout";
import WorkoutCard from "@/app/components/WorkoutCard";

export default function WorkoutGrid({ workouts }: { workouts: Workout[] }) {
  const [sortBy, setSortBy] = useState<"duration" | "caloriesBurned" | "rating">("duration");

  const sorted = [...workouts].sort((a, b) => b[sortBy] - a[sortBy]);

  return (
    <div>
      <div className="flex justify-end mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="select select-bordered bg-gray-900 text-white border-gray-700"
        >
          <option value="duration">Sort By: Duration</option>
          <option value="caloriesBurned">Sort By: Calories</option>
          <option value="rating">Sort By: Rating</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}