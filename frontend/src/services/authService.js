// import API from "./api";

// export const loginUser = (data) => {
//   return API.post("/auth/login", data);
// };

// export const signupUser = (data) => {
//   return API.post("/auth/signup", data);
// };

import api from "./api";

export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  // Save token to localStorage so it persists on page refresh
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const signup = async (name, email, password) => {
  const res = await api.post("/auth/signup", { name, email, password });
  localStorage.setItem("token", res.data.token);
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const getToken = () => localStorage.getItem("token");