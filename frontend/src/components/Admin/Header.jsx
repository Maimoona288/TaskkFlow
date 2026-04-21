{/* HEADER */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative">

  <div>
    <h2 className="text-xl font-bold text-slate-900">
      Admin Dashboard
    </h2>
    <p className="text-sm text-gray-400">
      {new Date().toDateString()}
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex items-center gap-3">

    <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-sm font-semibold">
      Admin
    </span>

    {/* HAMBURGER (MOBILE ONLY) */}
    <button
      onClick={() => setSidebarOpen(true)}
      className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition"
    >
      ☰
    </button>

  </div>
</div>