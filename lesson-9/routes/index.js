const express = require("express");

const auth = require("../middleware/auth");

const authRoutes = require("./auth");
const bookRoutes = require("./books");
const userRoutes = require("./users");

const router = express.Router();

// /api
router.use("/auth", authRoutes);
router.use("/books", auth, bookRoutes);
router.use("/users", userRoutes);

module.exports = router;
