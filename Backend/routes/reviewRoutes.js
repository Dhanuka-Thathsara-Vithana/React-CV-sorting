const express = require("express");
const router = express.Router();
const { health } = require("../Controllers/reviews");

// Submit a review

router.get('/', health)

module.exports = router;
