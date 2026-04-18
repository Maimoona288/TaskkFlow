import { useState } from "react";
import { useEffect } from "react"
import { useRef } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { Routes, Route } from "react-router-dom"

const TaskForm = ({
  handleAddTask,
  title,
  setTitle,
  priority,
  setPriority,
  dueDate,
  setDueDate,
}) => {
  return (
    <form
      onSubmit={handleAddTask}
      className="bg-white border rounded-xl p-5 mb-6 shadow-sm"
    >
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded mb-3"
        required
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="flex-1 border p-2 rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
      </div>

      <button className="bg-indigo-600 text-white px-4 py-2 rounded">
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;