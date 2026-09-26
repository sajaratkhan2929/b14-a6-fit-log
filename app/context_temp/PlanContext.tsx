"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Workout } from "@/app/types/workout";

interface PlanContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    if (storedPlan) setPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, loaded]);

  const addToPlan = (workout: Workout) => {
    setPlan((prev) => (prev.find((w) => w.id === workout.id) ? prev : [...prev, workout]));
  };

  const addToSaved = (workout: Workout) => {
    setSaved((prev) => (prev.find((w) => w.id === workout.id) ? prev : [...prev, workout]));
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
  };

  const isInPlan = (id: number) => plan.some((w) => w.id === id);
  const isInSaved = (id: number) => saved.some((w) => w.id === id);

  return (
    <PlanContext.Provider
      value={{ plan, saved, addToPlan, addToSaved, removeFromPlan, removeFromSaved, isInPlan, isInSaved }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used within a PlanProvider");
  return context;
}