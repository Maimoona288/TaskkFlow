import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import InputField from "../components/InputField";
import Button from "../components/Button";
import googleIcon from "../assets/images/image.png";

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

    const res = await login(form);

if (res) {
  if (res.role === "admin") {
    navigate("/admin-dashboard");
  } else {
    navigate("/user-dashboard");
  }
}

  

  const displayError = localError || error;

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-8"
      style={{
        background: "linear-gradient(180deg, #eef2ff 0%, #f8fafc 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Card */}
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
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h2>
          <p className="text-slate-500 text-sm">
            Sign in to continue to your account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Error */}
          {displayError && (
            <div className="mb-4 px-4 py-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {displayError}
            </div>
          )}

          {/* EMAIL (Component) */}
          <InputField
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          {/* PASSWORD (Component) */}
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          {/* Remember + Forgot */}
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

            <Link to="/forgotpassword" className="text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* BUTTON (Component) */}
          <Button text="Login" loading={loading} type="submit" />
        </form>

        {/* Divider */}
        <div className="relative text-center my-6">
          <span className="relative z-10 bg-white px-3 text-slate-500 text-sm">
            or continue with
          </span>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-200" />
        </div>

        {/* Google Button (with your image) */}
        <button
          type="button"
          className="w-full bg-white border border-slate-200 rounded-xl py-2.5 flex items-center justify-center gap-2 font-medium text-sm"
        >
          <img src={googleIcon} alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-slate-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};
}
export default Login;
