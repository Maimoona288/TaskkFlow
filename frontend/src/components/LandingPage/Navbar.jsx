import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between
      px-4 sm:px-6 lg:px-20 h-14 sm:h-16 transition-all duration-300
      bg-white/85 backdrop-blur-md border-b border-indigo-100/60
      ${scrolled ? "shadow-sm shadow-indigo-100" : ""}`}
    >
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2 no-underline">
        {/* <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 ring-[3px] ring-indigo-100 inline-block" /> */}
        <span
          className="font-extrabold text-lg sm:text-2xl tracking-tight text-slate-900"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Task<span className="text-indigo-500">it</span>
        </span>
      </Link>

      <div className="hidden sm:flex items-center gap-2">
        <Link
          to="/login"
          className="text-sm font-medium text-slate-600 px-4 py-2 rounded-xl
          hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
        >
          Log in
        </Link>

        <Link
          to="/signup"
          className="text-sm font-semibold text-white bg-indigo-500 px-4 py-2 rounded-xl
          shadow-[0_4px_14px_rgba(99,102,241,0.35)]
          hover:bg-indigo-600 hover:-translate-y-0.5
          hover:shadow-[0_7px_20px_rgba(99,102,241,0.42)]
          transition-all duration-200"
        >
          Sign up
        </Link>
      </div>

      <div className="sm:hidden flex items-center">
        <Link
          to="/login"
          className="text-sm font-semibold text-white bg-indigo-500 px-4 py-2 rounded-xl
          shadow-[0_4px_14px_rgba(99,102,241,0.35)]
          hover:bg-indigo-600 transition-all duration-200"
        >
          Log in
        </Link>
        
      </div>
    </nav>
  );
}