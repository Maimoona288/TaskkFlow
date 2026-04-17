const express = require("express");
require("dotenv").config();

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
const PORT = process.env.PORT || 5000;
const authMiddleware = require("./middleware/authMiddleware");
const mongoose = require("mongoose");
const User = require("./models/User");

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);


app.get("/protected", authMiddleware, (req, res) => {
  res.json({ msg: "Protected route accessed" });
});

const adminMiddleware = require("./middleware/adminMiddleware");

app.get("/admin", authMiddleware, adminMiddleware, (req, res) => {
  res.json({ msg: "Admin dashboard" });
});
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));


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