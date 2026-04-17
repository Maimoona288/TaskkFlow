import { useState } from "react";
import { loginUser, signupUser } from "../services/authService";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await loginUser(data);

      // const token = res.data?.token;
       const { token, role } = res.data;
      if (token) {
        localStorage.setItem("token", token);
      }

      return { token, role };
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await signupUser(data);

      const token = res.data?.token;
      if (token) {
        localStorage.setItem("token", token);
      }

      return res;
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  return { login, signup, logout, loading, error };
};

export default useAuth;