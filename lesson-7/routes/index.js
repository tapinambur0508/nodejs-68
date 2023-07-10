const express = require("express");

const checkAuth = require("../middleware/check-auth");

const authRoutes = require("./auth");
const bookRoutes = require("./books");

const router = express.Router();

// /api
router.use("/auth", authRoutes);
router.use("/books", checkAuth, bookRoutes);

module.exports = router;
