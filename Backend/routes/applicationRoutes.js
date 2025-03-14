const express = require("express");
const {
  getAllApplications,
  getApplicationById,
  getApplicationsByJobId,
  getTotalApplications,
  createApplication,
  getDailyApplicationCounts,
} = require("../Controllers/applicationController");

const router = express.Router();

router.get("/", getAllApplications);
router.post("/id", getApplicationById);
router.post("/id", getApplicationsByJobId); // This needs to be changed to avoid duplicate routes
router.get("/totalApplications", getTotalApplications);
router.post("/", createApplication);
router.get("/dailyApplicationCounts", getDailyApplicationCounts);

module.exports = router;
