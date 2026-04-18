import { useState } from "react";
import { useEffect } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-20 pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">

      <h1 className="mt-20 text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-[1.1] text-slate-900 max-w-3xl mb-5">
        Manage your tasks{" "}
        <span className="bg-gradient-to-br from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
          the right way
        </span>
      </h1>

      <p className="text-slate-500 max-w-lg mb-10">
        Task management built for real teams and real work.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
        <Link
          to="/signup"
          className="text-white bg-indigo-500 px-7 py-3 rounded-xl font-semibold"
        >
          Get started free
        </Link>

        <a
          href="#features"
          className="bg-white border border-slate-200 px-7 py-3 rounded-xl"
        >
          See features
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1100"
        alt="dashboard"
        className="rounded-2xl shadow-lg  w-full max-w-[900px] mx-auto"
      />
    </section>
  );
}