"use client";

import { toast } from "react-toastify";
import { usePlan } from "@/app/context/PlanContext";
import { Workout } from "@/app/types/workout";

export default function ActionButtons({ workout }: { workout: Workout }) {
  const { plan, addToPlan, addToSaved, isInPlan, isInSaved } = usePlan();

  const handleAddToPlan = () => {
    if (isInPlan(workout.id)) return;
    if (plan.length >= 5) {
      toast.error("Plan is full — max 5 lifts for today.");
      return;
    }
    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    if (isInSaved(workout.id)) return;
    addToSaved(workout);
    toast.success("Saved for later");
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAddToPlan}
        disabled={isInPlan(workout.id) || plan.length >= 5}
        className="btn bg-[#ccff00] text-black border-none font-semibold disabled:opacity-40"
      >
        {isInPlan(workout.id) ? "Added to plan" : "Add to today's plan"}
      </button>
      <button
        onClick={handleSave}
        disabled={isInSaved(workout.id)}
        className="btn btn-outline border-gray-600 text-white disabled:opacity-40"
      >
        {isInSaved(workout.id) ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}