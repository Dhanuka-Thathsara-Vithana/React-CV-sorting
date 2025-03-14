const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

// Middleware to validate token and add user to request
const auth = async (req, res, next) => {
  // Get token from header
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // Check if token exists
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find user by id
    const user = await User.findById(decoded._id);
    
    // Check if user exists
    if (!user) {
      return res.status(404).send("User not found.");
    }
    
    // Add user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send("Invalid token.");
  }
};

module.exports = auth;