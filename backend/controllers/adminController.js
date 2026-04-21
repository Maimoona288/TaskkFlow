const User = require("../models/User");
const Task = require("../models/Task");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate("userId", "email");
  res.json(tasks);
};

exports.getStats = async (req, res) => {
  const totalTasks = await Task.countDocuments();
  const completedTasks = await Task.countDocuments({ status: "completed" });
  const pendingTasks = await Task.countDocuments({ status: "pending" });

  res.json({
    totalTasks,
    completedTasks,
    pendingTasks,
  });
};