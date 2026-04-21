import api from "./api";

// LOGIN
export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

//signup
export const signup = async (formData) => {
  const payload = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  };

  console.log("Sending payload:", payload); // debug

  const res = await api.post("/auth/signup", payload);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

// LOGOUT
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getToken = () => localStorage.getItem("token");