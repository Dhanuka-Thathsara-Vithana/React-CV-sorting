const express = require("express");
const router = express.Router();
const {getUsers,
    getCompanies,
    deleteUser,
    getTotalUsers,
    getUserById,
    createUser,
    getDailyUserCount,
    getDailyUserCountByDay,
    health} = require("../Controllers/users");

router.post("/createUser", createUser);
router.get("/getUserById/:id", getUserById);    
// Fetch users
router.get("/getUsers", getUsers);
router.get("/getCompanies", getCompanies);
router.get("/", health);
// Delete user
router.delete("/deleteUser/:id", deleteUser);

// Get user statistics
router.get("/totalUsers", getTotalUsers);
router.get("/dailyUserCount", getDailyUserCount);
router.get("/dailyUserCountByDay", getDailyUserCountByDay);

module.exports = router;
