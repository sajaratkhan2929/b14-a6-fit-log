import { getWorkoutById } from "@/app/lib/api";
import { notFound } from "next/navigation";
import ActionButtons from "./ActionButtons";


export default async function WorkoutDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left: Image */}
      <div>
        <img
          src={workout.image}
          alt={workout.name}
          className="w-full h-full object-cover rounded-xl max-h-[500px]"
        />
      </div>

      {/* Right: Details */}
      <div>
        <h1 className="text-3xl font-bold uppercase mb-2">{workout.name}</h1>
        <p className="text-gray-400 mb-4">{workout.description}</p>

        <div className="flex gap-2 mb-6">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="badge bg-[#ccff00] text-black border-none font-medium uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key Specs */}
        <div className="border border-gray-800 rounded-lg divide-y divide-gray-800 mb-6">
          {[
            ["Equipment", workout.equipment],
            ["Difficulty", workout.difficulty],
            ["Sets", workout.sets],
            ["Reps", workout.reps],
            ["Duration", `${workout.duration} min`],
            ["Calories", `${workout.caloriesBurned} kcal`],
            ["Rating", workout.rating],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between px-4 py-2 text-sm">
              <span className="text-gray-400 uppercase">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <h2 className="font-bold uppercase mb-2">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-300 space-y-1 mb-6">
          {workout.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        {/* Buttons */}
        <ActionButtons workout={workout} />
      </div>
    </div>
  );
}