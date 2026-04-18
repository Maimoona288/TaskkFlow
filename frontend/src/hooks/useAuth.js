import { useState } from "react";
import { login as loginService, signup as signupService } from "../services/authService";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const login = async (formData) => {
    setLoading(true);
    setError("");
    try {
      const data = await loginService(formData.email, formData.password);
      return data; // { token, role, ... }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (formData) => {
    setLoading(true);
    setError("");
    try {
      const data = await signupService(formData.name, formData.email, formData.password);
      return data;
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, signup, loading, error };
};

export default useAuth;