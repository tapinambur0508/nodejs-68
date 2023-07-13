const express = require("express");

const auth = require("../middleware/auth");

const authRoutes = require("./auth");
const bookRoutes = require("./books");

const router = express.Router();

// /api
router.use("/auth", authRoutes);
router.use("/books", auth, bookRoutes);

module.exports = router;
