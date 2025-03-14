const express = require("express");
const router = express.Router();
const {getWorkById,
    getAllWork,
    createWork,
    deleteWork} = require("../Controllers/works");

// Get work by ID
router.post("/:id", getWorkById);

// Get all work entries
router.get("/", getAllWork);

// Create a new work entry
router.post("/", createWork);

// Delete a work entry by ID
router.delete("/:id", deleteWork);

module.exports = router;
