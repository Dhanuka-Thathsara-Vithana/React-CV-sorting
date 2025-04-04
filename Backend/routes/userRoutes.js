const express = require("express");
const router = express.Router();
const {
    createUser,
    health,
    getCurrentUser} = require("../Controllers/users");


router.post("/createUser", createUser);
router.get("/", health);
router.get("/me", getCurrentUser); // Route for getting current user

module.exports = router;
