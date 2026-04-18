
import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../services/authService";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Full name is required";
    if (!form.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Please enter a valid email address";
    if (!form.password.trim()) return "Password is required";
    if (form.password.length < 6) return "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) return "Passwords do not match";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await signup({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Create Account
          </h2>
          <p className="text-slate-500 text-sm">
            Join us today — it's free
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 px-4 py-2.5 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* NAME */}
          <InputField
            label="Full Name"
            name="name"
            type="text"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />

          {/* EMAIL */}
          <InputField
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />

          {/* PASSWORD */}
          <InputField
            label="Password"
            name="password"
            type="password"
            placeholder="Min. 6 characters"
            value={form.password}
            onChange={handleChange}
          />

          {/* CONFIRM PASSWORD */}
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {/* SUBMIT BUTTON */}
          <Button
            text="Create Account"
            loading={loading}
            type="submit"
          />
        </form>
      
        {/* Footer */}
        <p className="text-center mt-6 text-sm text-slate-600">
          Already have an account?{" "}
          <Link to="/" className="text-indigo-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;