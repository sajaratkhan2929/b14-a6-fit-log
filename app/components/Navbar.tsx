"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/app/context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const linkClass = (path: string) =>
  pathname === path
    ? "font-semibold px-4 py-1.5 rounded-full "
    : "text-gray-300 hover:text-white transition px-4 py-1.5 text-sm";

const linkStyle = (path: string) =>
  pathname === path
    ? {
        backgroundColor: "rgba(204, 255, 0, 0.12)",
        color: "#ccff00",
        borderColor: "rgba(204, 255, 0, 0.4)",
      }
    : {};


  return (
    <header className="bg-black border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-wide">
        <img src="/logo.png" alt="FitLog logo" className="w-6 h-6" />
        FITLOG
      </Link>
<nav className="hidden md:flex items-center gap-8">
  <Link href="/" className={linkClass("/")} style={linkStyle("/")}>
    Workouts
  </Link>
  <Link href="/my-plan" className={linkClass("/my-plan")} style={linkStyle("/my-plan")}>
    My Plan
  </Link>
</nav>

     <div className="flex items-center gap-4">
  <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 text-sm">
    Plan
    <span className="badge badge-sm bg-[#ccff00] text-black border-none font-bold w-5 h-5">
      {plan.length}
    </span>
  </Link>
  <Link href="/my-plan" className="flex items-center gap-2 text-gray-300 text-sm">
    Saved
    <span className="badge badge-sm badge-outline text-gray-300 border-gray-600 font-bold w-5 h-5">
      {saved.length}
    </span>
  </Link>
</div>
    </header>
  );
}