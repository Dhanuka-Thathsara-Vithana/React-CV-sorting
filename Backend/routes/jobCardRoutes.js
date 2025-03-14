const express = require("express");
const {  getAllJobCards,
    createJobCard,
    getJobCardById,
    updateJobCard,
    deleteJobCard } = require("../Controllers/jobCards");

const router = express.Router();

router.get("/", getAllJobCards);
router.post("/", createJobCard);

module.exports = router;
