"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/app/context/PlanContext";
import WorkoutListItem from "@/app/components/WorkoutListItem";

export default function MyPlan() {
  const { plan, saved } = usePlan();
  const [tab, setTab] = useState<"plan" | "saved">("plan");

  const activeList = tab === "plan" ? plan : saved;

  const totalMinutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold uppercase mb-1">My Plan</h1>
      <p className="text-gray-400 mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-sm mb-1">Exercises</p>
          <p className="text-2xl font-bold text-[#ccff00]">{plan.length}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-sm mb-1">Minutes</p>
          <p className="text-2xl font-bold">{totalMinutes}</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
          <p className="text-gray-400 text-sm mb-1">Calories</p>
          <p className="text-2xl font-bold">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-boxed bg-gray-900 w-fit mb-6">
        <button
          onClick={() => setTab("plan")}
          className={`tab ${tab === "plan" ? "tab-active bg-[#ccff00] text-black" : "text-gray-300"}`}
        >
          Today&apos;s Plan
        </button>
        <button
          onClick={() => setTab("saved")}
          className={`tab ${tab === "saved" ? "tab-active bg-[#ccff00] text-black" : "text-gray-300"}`}
        >
          Saved
        </button>
      </div>

      {/* List */}
      {activeList.length === 0 ? (
        <div className="text-center border border-dashed border-gray-800 rounded-xl py-16">
          <h2 className="font-bold uppercase mb-2">Nothing here yet</h2>
          <p className="text-gray-400 mb-4">
            Browse the library and add a lift to get today moving.
          </p>
          <Link href="/" className="btn bg-[#ccff00] text-black border-none">
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {activeList.map((workout) => (
            <WorkoutListItem key={workout.id} workout={workout} variant={tab} />
          ))}
        </div>
      )}
    </div>
  );
}