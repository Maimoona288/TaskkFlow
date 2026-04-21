import { Link } from "react-router-dom";

const AdminSidebar = ({
  stats,
  users,
  tasks,
  activeNav,
  setActiveNav,
  handleLogout,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <>
      {/* OVERLAY for mobil */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden z-40"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white p-5 flex flex-col justify-between z-50
          transform transition-transform duration-300 ease-in-out shadow-xl border-r
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

          {/* NAVIGATION */}
          <div className="mb-6">
            <p className="text-xs text-gray-400 mb-2">ADMIN</p>

            {["overview", "users", "tasks"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveNav(item);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                  activeNav === item
                    ? "bg-indigo-100 text-indigo-600 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* STATS */}
          <div>
            <p className="text-xs text-gray-400 mb-2">OVERVIEW</p>

            <div className="space-y-2">
              <div className="flex justify-between p-2 bg-slate-50 rounded-lg">
                <span>Total Tasks</span>
                <span className="font-semibold">{stats.totalTasks || 0}</span>
              </div>

              <div className="flex justify-between p-2 bg-green-50 rounded-lg">
                <span className="text-green-700">Completed</span>
                <span className="font-semibold text-green-700">
                  {stats.completedTasks || 0}
                </span>
              </div>

              <div className="flex justify-between p-2 bg-yellow-50 rounded-lg">
                <span className="text-yellow-700">Pending</span>
                <span className="font-semibold text-yellow-700">
                  {stats.pendingTasks || 0}
                </span>
              </div>

              <div className="flex justify-between p-2 bg-indigo-50 rounded-lg">
                <span className="text-indigo-700">Users</span>
                <span className="font-semibold text-indigo-700">
                  {users.length}
                </span>
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

export default AdminSidebar;
