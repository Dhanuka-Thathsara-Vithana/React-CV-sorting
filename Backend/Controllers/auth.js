const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();
const _ = require("lodash");

// User Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("Invalid email or password.");
  
  // Validate password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");
  
  let userObj = _.pick(user, ["_id", "fName", "email", "type"]);
  
  // Generate JWT Token with longer expiration
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  
  res.send({ token, userObj });
};

// Get current user from token
exports.getCurrentUser = async (req, res) => {
  const userObj = _.pick(req.user, ["_id", "fName", "email", "type"]);
  res.send(userObj);
};