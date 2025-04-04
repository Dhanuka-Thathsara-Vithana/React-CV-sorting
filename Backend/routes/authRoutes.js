const express = require("express");
const { loginUser, refreshToken, logoutUser  } = require("../Controllers/auth");
const auth = require("../middleware/auth"); // Import the auth middleware

const router = express.Router();

// Route for user login
router.post("/", loginUser);
router.get("/refresh-token", refreshToken); // Route for refreshing token
router.post("/logout", logoutUser); // Route for user logout

// Health check route
router.get("/health", (req, res) => {
  res.send("OK");
});

module.exports = router;