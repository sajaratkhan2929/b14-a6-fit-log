import { getAllWorkouts } from "@/app/lib/api";
import WorkoutCard from "@/app/components/WorkoutCard";

export default async function Home() {
  const workouts = await getAllWorkouts();

  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
        <div className="flex-1">
          <p className="text-[#ccff00] font-semibold tracking-widest text-sm mb-3">
            WORKOUT LIBRARY
          </p>
          <h1 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-4">
            Train with intent. Log every set.
          </h1>
          <p className="text-gray-400 mb-6 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="inline-block bg-[#ccff00] text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#b3e600] transition-colors"
          >
            Explore the Library
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/banner.png"
            alt="Hero banner"
            className="rounded-xl max-h-80 object-contain"
          />
        </div>
      </section>

      {/* Library Section */}
      <section id="library" className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold uppercase mb-1">The Library</h2>
        <p className="text-gray-400 mb-8">
          Twelve lifts covering every major muscle group.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </section>
    </div>
  );
}