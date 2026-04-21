// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import AdminSidebar from "../components/Admin/Sidebar";

// import { getUsers, getTasks, getStats } from "../services/adminService";
// import { logout } from "../services/authService";

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const [stats, setStats] = useState({});
//   const [users, setUsers] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeNav, setActiveNav] = useState("overview");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [statsRes, usersRes, tasksRes] = await Promise.all([
//         getStats(),
//         getUsers(),
//         getTasks(),
//       ]);

//       setStats(statsRes.data);
//       setUsers(usersRes.data);
//       setTasks(tasksRes.data);
//     } catch (err) {
//       console.error("Admin dashboard error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-slate-50">
//         <p className="text-gray-400">Loading dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex">

//       {/* SIDEBAR */}
//       <AdminSidebar
//         stats={stats}
//         users={users}
//         tasks={tasks}
//         activeNav={activeNav}
//         setActiveNav={setActiveNav}
//         handleLogout={handleLogout}
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//       />

//       {/* MAIN */}
//       <main className="flex-1 ml-0 md:ml-64 p-4 sm:p-6 bg-slate-50 min-h-screen">

//         {/* HEADER */}
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
//           <div>
//             <h2 className="text-xl font-bold text-slate-900">
//               Admin Dashboard
//             </h2>
//             <p className="text-sm text-gray-400">
//               {new Date().toDateString()}
//             </p>
//           </div>

//           <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-sm font-semibold">
//             Admin
//           </span>

//           {/* MOBILE MENU */}
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="md:hidden fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100"
//           >
//             ☰
//           </button>
//         </div>

//         {/* STATS */}
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white border rounded-xl p-4 hover:shadow-sm">
//             <p className="text-xs text-gray-400">Total Tasks</p>
//             <p className="text-lg font-bold text-slate-900">
//               {stats.totalTasks || 0}
//             </p>
//           </div>

//           <div className="bg-white border rounded-xl p-4 hover:shadow-sm">
//             <p className="text-xs text-gray-400">Completed</p>
//             <p className="text-lg font-bold text-green-600">
//               {stats.completedTasks || 0}
//             </p>
//           </div>

//           <div className="bg-white border rounded-xl p-4 hover:shadow-sm">
//             <p className="text-xs text-gray-400">Pending</p>
//             <p className="text-lg font-bold text-yellow-600">
//               {stats.pendingTasks || 0}
//             </p>
//           </div>

//           <div className="bg-white border rounded-xl p-4 hover:shadow-sm">
//             <p className="text-xs text-gray-400">Users</p>
//             <p className="text-lg font-bold text-indigo-600">
//               {users.length}
//             </p>
//           </div>
//         </div>

//         {/* USERS */}
//         <div className="mb-6">
//           <h3 className="text-sm text-gray-400 mb-2">Users</h3>

//           {users.length === 0 ? (
//             <p className="text-gray-400">No users found</p>
//           ) : (
//             users.map((u) => (
//               <div
//                 key={u._id}
//                 className="bg-white border rounded-xl p-4 mb-3 flex justify-between hover:shadow-sm"
//               >
//                 <div>
//                   <p className="font-medium text-slate-900">
//                     {u.name || "No Name"}
//                   </p>
//                   <p className="text-sm text-gray-400">{u.email}</p>
//                 </div>
//                 <span className="inline-flex items-center text-[11px] px-2 py-0.5 rounded-full font-medium bg-indigo-50 text-indigo-600 leading-none">
//   {u.role}
// </span>
//               </div>
//             ))
//           )}
//         </div>

//         {/* TASKS */}
//         <div>
//           <h3 className="text-sm text-gray-400 mb-2">Tasks</h3>

//           {tasks.length === 0 ? (
//             <p className="text-gray-400">No tasks found</p>
//           ) : (
//             tasks.map((t) => (
//               <div
//                 key={t._id}
//                 className="bg-white border rounded-xl p-4 mb-3 flex justify-between hover:shadow-sm"
//               >
//                 <p className="text-slate-900 font-medium">{t.title}</p>

//                 <span
//                   className={`inline-flex items-center text-[11px] px-2 py-0.5 rounded-full font-medium leading-none" ${
//                     t.priority === "high"
//                       ? "bg-red-100 text-red-600"
//                       : t.priority === "medium"
//                       ? "bg-yellow-100 text-yellow-600"
//                       : "bg-green-100 text-green-600"
//                   }`}
//                 >
//                   {t.priority}
//                 </span>
//               </div>
//             ))
//           )}
//         </div>

//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "../components/Admin/Sidebar";

import { getUsers, getTasks, getStats } from "../services/adminService";
import { logout } from "../services/authService";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [statsRes, usersRes, tasksRes] = await Promise.all([
        getStats(),
        getUsers(),
        getTasks(),
      ]);

      setStats(statsRes.data);
      setUsers(usersRes.data);
      setTasks(tasksRes.data);
    } catch (err) {
      console.error("Admin dashboard error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <p className="text-gray-400">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="flex overflow-hidden">

      {/* SIDEBAR */}
      <AdminSidebar
        stats={stats}
        users={users}
        tasks={tasks}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        handleLogout={handleLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN */}
      <main className="flex-1 w-full md:ml-64 p-3 sm:p-6 bg-slate-50 min-h-screen overflow-x-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Admin Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              {new Date().toDateString()}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-sm font-semibold">
              Admin
            </span>

            {/* HAMBURGER */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-200 transition"
            >
              ☰
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-white border rounded-xl p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs text-gray-400">Total Tasks</p>
            <p className="text-base sm:text-lg font-bold">
              {stats.totalTasks || 0}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs text-gray-400">Completed</p>
            <p className="text-base sm:text-lg font-bold text-green-600">
              {stats.completedTasks || 0}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs text-gray-400">Pending</p>
            <p className="text-base sm:text-lg font-bold text-yellow-600">
              {stats.pendingTasks || 0}
            </p>
          </div>

          <div className="bg-white border rounded-xl p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs text-gray-400">Users</p>
            <p className="text-base sm:text-lg font-bold text-indigo-600">
              {users.length}
            </p>
          </div>
        </div>

        {/* USERS */}
        <div className="mb-6">
          <h3 className="text-xs sm:text-sm text-gray-400 mb-2">Users</h3>

          {users.length === 0 ? (
            <p className="text-gray-400">No users found</p>
          ) : (
            users.map((u) => (
              <div
                key={u._id}
                className="bg-white border rounded-xl p-3 sm:p-4 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="min-w-0">
                  <p className="font-medium text-sm sm:text-base truncate">
                    {u.name || "No Name"}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {u.email}
                  </p>
                </div>

                <span className="self-start sm:self-auto text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
                  {u.role}
                </span>
              </div>
            ))
          )}
        </div>

        {/* TASKS */}
        <div>
          <h3 className="text-xs sm:text-sm text-gray-400 mb-2">Tasks</h3>

          {tasks.length === 0 ? (
            <p className="text-gray-400">No tasks found</p>
          ) : (
            tasks.map((t) => (
              <div
                key={t._id}
                className="bg-white border rounded-xl p-3 sm:p-4 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <p className="text-sm sm:text-base font-medium truncate">
                  {t.title}
                </p>

                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    t.priority === "high"
                      ? "bg-red-100 text-red-600"
                      : t.priority === "medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {t.priority}
                </span>
              </div>
            ))
          )}
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;