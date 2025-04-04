const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const moment = require("moment-timezone");

const health = async (req, res) => {
  res.send("OK");     
}

// Register a new user
const createUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");

    user = new User(
      _.pick(req.body, ["fName", "lName", "email", "telephone", "password", "confirmPassword", "status", "field", "type", "age"])
    );
    user.createdAt = moment().tz("Asia/Colombo").toDate();
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    
    await user.save();
    res.send(_.pick(user, ["_id", "fName", "lName", "email", "type"]));
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const getCurrentUser = async (req, res) => {
  try {
    console.log("hitted getCurrentUser");
  
    const user = await User.findById(req.user._id).select('_id fName type');
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    res.json(user);
  } catch (error) {
    console.error("Error getting current user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  health,
  createUser,
  getCurrentUser
};
