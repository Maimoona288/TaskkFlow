import { useState } from "react";
import { useEffect } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const Header = ({ showForm, setShowForm , setSidebarOpen}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">My Tasks</h2>
        <p className="text-sm text-gray-400">
          {new Date().toDateString()}
        </p>
      </div>
 <button
  onClick={() => setSidebarOpen(true)}
  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
>
  ☰
</button>
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700"
      >
        {showForm ? "Cancel" : "+ Add Task"}
      </button>
    </div>
  );
};

export default Header;