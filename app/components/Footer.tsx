export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-2 font-bold tracking-wide">
        <span className="text-[#ccff00]">⚡</span>
        FITLOG
      </div>
      <p className="text-gray-400 text-sm text-center md:text-right">
        © 2026 FitLog — Workout Library. Train hard, log honest.
      </p>
    </footer>
  );
}