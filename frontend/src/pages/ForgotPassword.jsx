import { useState } from "react";
import api from "../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      const res = await api.post("/auth/forgot-password", {
        email,
      });

      setMessage(res.data.msg);

    } catch (err) {
      setError(err.response?.data?.msg || "Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-5">
          Forgot Password
        </h2>

        {message && (
          <div className="mb-4 text-green-600">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 text-red-500">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-3 rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;