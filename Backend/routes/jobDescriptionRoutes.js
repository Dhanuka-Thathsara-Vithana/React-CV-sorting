const express = require("express");
const {
  getJobDescriptionById,
  getTotalJobsByPosition,
  getTotalJobsByCompany,
  getTotalJobs,
  addJobDescription,
} = require("../Controllers/jobDescriptions");

const router = express.Router();

router.post("/", getJobDescriptionById);
router.get("/totalJobsByPosition", getTotalJobsByPosition);
router.get("/totalJobsByCompany", getTotalJobsByCompany);
router.get("/totalJobs", getTotalJobs);
router.post("/add", addJobDescription);

module.exports = router;
