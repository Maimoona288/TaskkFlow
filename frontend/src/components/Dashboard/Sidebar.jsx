import { Link } from "react-router-dom";

const Sidebar = ({
  tasks,
  completedCount,
  pendingCount,
  highCount,
  progress,
  activeFilter,
  setActiveFilter,
  handleLogout,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      {/* OVERLAY (mobile) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
           fixed top-0 left-0 h-full w-64 bg-white border-r p-5 flex flex-col justify-between z-50
  transform transition-transform duration-300 ease-in-out
  shadow-xl
  ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
  md:translate-x-0
        `}
      >
        {/* CLOSE BUTTON (mobile) */}
        {/* <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden mb-4"
        >
          ✕ Close
        </button> */}
        <button
  onClick={() => setSidebarOpen(false)}
  className="md:hidden self-end w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition"
>
  ✕
</button>

        <div>
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Task<span className="text-indigo-500">it</span>
            </span>
          </Link>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-2 md:block md:space-y-3 mb-6">
            {[
              { label: "Total", value: tasks.length, color: "text-indigo-600" },
              { label: "Done", value: completedCount, color: "text-green-600" },
              { label: "Pending", value: pendingCount, color: "text-yellow-600" },
              { label: "High", value: highCount, color: "text-red-600" },
            ].map((s) => (
              <div key={s.label} className="bg-slate-50 p-3 rounded-xl border">
                <p className="text-xs text-gray-400">{s.label}</p>
                <p className={`text-lg font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* PROGRESS */}
          <div className="mb-6">
            <div className="flex justify-between text-xs mb-1 text-gray-500">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-indigo-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="space-y-1">
            {["all", "pending", "completed", "high"].map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                  activeFilter === f
                    ? "bg-indigo-100 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="bg-red-50 border border-red-200 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-100"
        >
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;