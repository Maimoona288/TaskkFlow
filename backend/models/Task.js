const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,        // a task must have a name
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  },
  dueDate: {
    type: Date,            // stores as ISO date, e.g. "2025-06-01"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',           // links task to the User who owns it
    required: true,        // CRITICAL — this is what isolates data per user
  },
}, { timestamps: true });  // auto-adds createdAt and updatedAt

module.exports = mongoose.model('Task', taskSchema);