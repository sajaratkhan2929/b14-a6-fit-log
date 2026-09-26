import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 text-center">
      <h1 className="text-6xl font-bold text-[#ccff00] mb-4">404</h1>
      <h2 className="text-2xl font-bold uppercase mb-2">Page not found</h2>
      <p className="text-gray-400 mb-6">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn bg-[#ccff00] text-black border-none">
        Go to workouts
      </Link>
    </div>
  );
}