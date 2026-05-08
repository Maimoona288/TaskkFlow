import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const ResetPassword = () => {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        `/auth/reset-password/${token}`,
        { password }
      );

      setMessage(res.data.msg);

      setTimeout(() => {
        navigate("/login");
      }, 2000);

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
          Reset Password
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
          type="password"
          placeholder="New Password"
          className="w-full border p-3 rounded-xl mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;