import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import TaskCard from "../components/Dashboard/TaskCard";
import TaskForm from "../components/Dashboard/TaskForm";

import {
  fetchTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/taskService";
import { logout } from "../services/authService";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // LOAD TASKS
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  // ADD TASK
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = await createTask({
      title,
      priority,
      dueDate,
      status: "pending",
    });

    setTasks([newTask, ...tasks]);
    setTitle("");
    setPriority("medium");
    setDueDate("");
    setShowForm(false);
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  // TOGGLE
  const handleToggle = async (task) => {
    const newStatus =
      task.status === "completed" ? "pending" : "completed";

    const updated = await updateTask(task._id, {
      status: newStatus,
    });

    setTasks(tasks.map((t) => (t._id === task._id ? updated : t)));
  };

  // LOGOUT
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // FILTER
  const filtered = tasks.filter((t) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "pending") return t.status === "pending";
    if (activeFilter === "completed") return t.status === "completed";
    if (activeFilter === "high") return t.priority === "high";
    return true;
  });

  // STATS
  const completedCount = tasks.filter(
    (t) => t.status === "completed"
  ).length;
  const pendingCount = tasks.filter(
    (t) => t.status !== "completed"
  ).length;
  const highCount = tasks.filter(
    (t) => t.priority === "high"
  ).length;

  const progress = tasks.length
    ? Math.round((completedCount / tasks.length) * 100)
    : 0;

  return (
    <div className="flex">
      <Sidebar
        tasks={tasks}
        completedCount={completedCount}
        pendingCount={pendingCount}
        highCount={highCount}
        progress={progress}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        handleLogout={handleLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="flex-1 ml-0 md:ml-64 p-4 sm:p-6 bg-slate-50 min-h-screen">
        <Header
          showForm={showForm}
          setShowForm={setShowForm}
          setSidebarOpen={setSidebarOpen}
        />

        {showForm && (
          <TaskForm
            handleAddTask={handleAddTask}
            title={title}
            setTitle={setTitle}
            priority={priority}
            setPriority={setPriority}
            dueDate={dueDate}
            setDueDate={setDueDate}
          />
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          filtered.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Dashboard;