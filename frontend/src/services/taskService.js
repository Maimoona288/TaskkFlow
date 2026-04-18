import api from "./api";

// Get all tasks for logged-in user
export const fetchTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

// Create a new task
export const createTask = async (taskData) => {
  const res = await api.post("/tasks", taskData);
  return res.data;
};

// Update a task by id
export const updateTask = async (id, taskData) => {
  const res = await api.put(`/tasks/${id}`, taskData);
  return res.data;
};

// Delete a task by id
export const deleteTask = async (id) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};