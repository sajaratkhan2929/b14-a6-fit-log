"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/app/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const linkClass = (path: string) =>
    pathname === path
      ? "text-[#ccff00] font-semibold"
      : "text-gray-300 hover:text-white transition";

  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-wide">
        <img src="/logo.png" alt="FitLog logo" className="w-6 h-6" />
        FITLOG
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className={linkClass("/")}>
          Workouts
        </Link>
        <Link href="/my-plan" className={linkClass("/my-plan")}>
          My Plan
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          href="/my-plan"
          className="badge px-3 py-3 bg-[#ccff00] text-black border-none font-medium gap-1"
        >
          Plan <span className="font-bold">{plan.length}</span>
        </Link>
        <Link
          href="/my-plan"
          className="badge px-3 py-3 badge-outline text-gray-300 border-gray-600 gap-1"
        >
          Saved <span className="font-bold">{saved.length}</span>
        </Link>
      </div>
    </header>
  );
}