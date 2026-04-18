import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-slate-900 border-t border-slate-800
      px-4 sm:px-6 lg:px-20 py-6
      flex flex-col sm:flex-row items-center justify-between gap-4
      text-sm text-center sm:text-left"
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-1.5">
        <span
          className="font-extrabold text-lg sm:text-xl tracking-tight text-white"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Task<span className="text-indigo-500">it</span>
        </span>
      </Link>

      {/* COPYRIGHT */}
      <p className="text-slate-400">
        © 2025 Taskit. All rights reserved.
      </p>

      {/* LINKS */}
      <div className="flex gap-5">
        
      <a href="#" className="text-slate-400 hover:text-white transition">
          Privacy
        </a>
        <a href="#" className="text-slate-400 hover:text-white transition">
          Terms
        </a>
        
       
      </div>
    </footer>
  );
}