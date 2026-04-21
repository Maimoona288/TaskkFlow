import { Link } from "react-router-dom";

const Sidebar = ({
  user,
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
      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white  p-5 flex flex-col justify-between z-50
          transform transition-transform duration-300 ease-in-out shadow-xl
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* TOP SECTION */}
        <div>
          {/* SIDEBAR HEADER */}
          <div className="flex items-center justify-between mb-6">
            {/* LOGO */}
            <Link to="/" className="block">
              <span className="font-extrabold text-xl text-slate-900">
                Task<span className="text-indigo-500">it</span>
              </span>
            </Link>

            {/* CLOSE BUTTON (TOP RIGHT) */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition"
            >
              ✕
            </button>
          </div>
          {/* ADMIN LINK */}
          {user?.role === "admin" && (
            <Link
              to="/admin"
              className="block mb-4 px-3 py-2 rounded-lg text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition"
            >
              Admin Panel
            </Link>
          )}
          {/* PROGRESS SECTION */}
          <div className="mb-6">
            <p className="text-xs text-slate-400 mb-1">PROJECT PROGRESS</p>

            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>Completion</span>
              <span>{progress}%</span>
            </div>

            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-2 bg-indigo-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* FILTERS */}
          <div className="mb-6">
            <p className="text-xs text-slate-400 mb-2">FILTERS</p>

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
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="mb-6">
            <p className="text-xs text-slate-400 mb-2">OVERVIEW</p>

            <div className="space-y-2">
              <div className="flex justify-between p-2 rounded-lg bg-slate-50">
                <span className="text-sm">Total</span>
                <span className="font-semibold">{tasks.length}</span>
              </div>

              <div className="flex justify-between p-2 rounded-lg bg-green-50">
                <span className="text-sm text-green-700">Completed</span>
                <span className="font-semibold text-green-700">
                  {completedCount}
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-lg bg-yellow-50">
                <span className="text-sm text-yellow-700">Pending</span>
                <span className="font-semibold text-yellow-700">
                  {pendingCount}
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-lg bg-red-50">
                <span className="text-sm text-red-700">High Priority</span>
                <span className="font-semibold text-red-700">{highCount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-50 border border-red-200 text-red-600 py-2 rounded-lg text-sm font-semibold hover:bg-red-100 transition"
        >
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
