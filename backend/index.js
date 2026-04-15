const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// mongoose.connect("mongodb://localhost:27017/")
// .then(() => console.log("DB Connected"))
// .catch(err => console.log(err));

app.get("/test-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Test",
      email: "test@test.com",
      password: "123456"
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});