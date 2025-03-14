const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const moment = require("moment-timezone");

const health = async (req, res) => {
  res.send("OK");     
}

// Get all users with type 'user'
const getUsers = async (req, res) => {
  try {
    const users = await User.find({ type: "user" });
    res.send(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Get all users with type 'company'
const getCompanies = async (req, res) => {
  try {
    const companies = await User.find({ type: "company" });
    res.send(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) return res.status(404).send("User not found.");
    res.send(user);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Internal Server Error");
  }
};

// Get total user count
const getTotalUsers = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.json({ totalUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a user by ID (excluding password)
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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

// Get daily user count
const getDailyUserCount = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const userCount = await User.countDocuments({ createdAt: { $gte: today } });
    res.json({ dailyUserCount: userCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get user count per day for the last 7 days
const getDailyUserCountByDay = async (req, res) => {
  try {
    const currentDate = moment().tz("Asia/Colombo");
    currentDate.startOf("day");
    const startDate = moment(currentDate).subtract(6, "days");
    const endDate = moment().endOf("day");

    const dailyUserCounts = await User.aggregate([
      {
        $match: { createdAt: { $gte: startDate.toDate(), $lte: endDate.toDate() } },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone: "Asia/Colombo" } },
          count: { $sum: 1 },
        },
      },
      {
        $project: { _id: 0, date: "$_id", count: 1 },
      },
      { $sort: { date: 1 } },
    ]);

    res.json({ dailyUserCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  health,
  getUsers,
  getCompanies,
  deleteUser,
  getTotalUsers,
  getUserById,
  createUser,
  getDailyUserCount,
  getDailyUserCountByDay,
};
