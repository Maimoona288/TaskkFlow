const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/users", auth, admin, adminController.getUsers);
router.get("/tasks", auth, admin, adminController.getTasks);
router.get("/stats", auth, admin, adminController.getStats);



module.exports = router;
