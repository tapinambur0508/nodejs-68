const express = require("express");

const checkAuth = require("../middleware/check-auth");

const bookRoutes = require("./books");

const router = express.Router();

// /api
router.use("/books", checkAuth, bookRoutes);

module.exports = router;
