const express = require("express");
const router = express.Router();
const reviewController = require("../Controllers/reviewController");

// Submit a review
router.post("/send", createReview);

module.exports = router;
