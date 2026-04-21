import api from "./api";

export const getUsers = () => api.get("/admin/users");
export const getTasks = () => api.get("/admin/tasks");
export const getStats = () => api.get("/admin/stats");