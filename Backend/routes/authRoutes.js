const express = require("express");
const { login, getCurrentUser } = require("../Controllers/auth");
const auth = require("../middleware/auth"); // Import the auth middleware

const router = express.Router();

// Route for user login
router.post("/", login);

// Route to get current user (protected by auth middleware)
router.get("/user", auth, getCurrentUser);

// Health check route
router.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = router;