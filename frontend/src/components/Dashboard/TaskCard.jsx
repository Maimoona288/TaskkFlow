import { useState } from "react";
import { useEffect } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const TaskCard = ({ task, handleToggle, handleDelete }) => {
  const colors = {
    high: "bg-red-100 text-red-600",
    medium: "bg-yellow-100 text-yellow-600",
    low: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white border rounded-xl p-4  items-center hover:shadow-sm transition flex flex-col sm:flex-row sm:items-center justify-between gap-3">

      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={task.status === "completed"}
          onChange={() => handleToggle(task)}
          className="w-4 h-4 accent-indigo-600"
        />

        <div className="flex-1">
          <p
            className={`font-medium break-words">${
              task.status === "completed"
                ? "line-through text-gray-400"
                : "text-gray-800"
            }`}
          >
            {task.title}
          </p>

          <div className="flex flex-wrap gap-2 mt-1 text-xs">
            <span className={`px-2 py-1 rounded-full ${colors[task.priority]}`}>
              {task.priority}
            </span>

            {task.dueDate && (
              <span className="text-gray-400">
                {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={() => handleDelete(task._id)}
        className="text-red-500 text-sm ml-3"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;