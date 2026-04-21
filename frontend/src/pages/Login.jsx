import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();
  const cardRef = useRef(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [localError, setLocalError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.opacity = "1";
        cardRef.current.style.transform = "translateY(0)";
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    if (!form.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Please enter a valid email address";
    if (!form.password.trim()) return "Password is required";
    if (form.password.length < 6)
      return "Password must be at least 6 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    const validationError = validate();
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    try {
      const res = await login(form);

      // 🔑 token extraction (supports different backend response shapes)
      const token = res?.token || res?.data?.token;

      if (!token) {
        setLocalError("Invalid login response (no token)");
        return;
      }

      localStorage.setItem("token", token);

      // 🔓 decode JWT payload safely
      const payload = JSON.parse(atob(token.split(".")[1]));

      // 🚦 role-based redirect
      if (payload.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }

    } catch (error) {
      console.log("Login error:", error);
      setLocalError("Login failed. Please try again.");
    }
  };

  const displayError = localError || error;

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-8"
      style={{
        background: "linear-gradient(180deg, #eef2ff 0%, #f8fafc 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        ref={cardRef}
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.10)",
          opacity: 0,
          transform: "translateY(40px)",
          transition: "all 0.9s ease",
          borderRadius: "22px",
          padding: "2.8rem 2.6rem",
          width: "100%",
          maxWidth: "520px",
        }}
      >
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h2>
          <p className="text-slate-500 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {displayError && (
            <div className="mb-4 px-4 py-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {displayError}
            </div>
          )}

          <InputField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700">
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
              />
              Remember me
            </label>

            <Link to="/forgotpassword" className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button text="Login" loading={loading} type="submit" />
        </form>

        <p className="text-center mt-6 text-sm text-slate-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
