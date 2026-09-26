import { Workout } from "@/app/types/workout";

const BASE_URL = "https://api.api-store.workers.dev/api/fitlog";

export async function getAllWorkouts(): Promise<Workout[]> {
  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });

    if (!res.ok) {
      console.error("API responded with status:", res.status, res.statusText);
      throw new Error(`Failed to fetch workouts: ${res.status}`);
    }

    return res.json();
  } catch (err) {
    console.error("Fetch error details:", err);
    throw err;
  }
}

export async function getWorkoutById(id: string): Promise<Workout | null> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return null;
  }

  return res.json();
}