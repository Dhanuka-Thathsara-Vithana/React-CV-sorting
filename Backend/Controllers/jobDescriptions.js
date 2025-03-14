const _ = require("lodash");
const { JobDescription } = require("../models/jobDescription");

// Get a job description by ID
const getJobDescriptionById = async (req, res) => {
  try {
    console.log(req.body);
    const jobDescription = await JobDescription.findOne({ id: req.body.id });

    if (!jobDescription) return res.status(404).json({ message: "Job not found" });

    console.log(jobDescription);
    res.send(jobDescription);
  } catch (error) {
    console.error("Error fetching job description:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get total jobs grouped by position
const getTotalJobsByPosition = async (req, res) => {
  try {
    const positions = await JobDescription.aggregate([
      { $group: { _id: "$position", count: { $sum: 1 } } },
    ]);

    res.json({ positions });
  } catch (error) {
    console.error("Error fetching total jobs by position:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get total jobs grouped by company
const getTotalJobsByCompany = async (req, res) => {
  try {
    const companies = await JobDescription.aggregate([
      { $group: { _id: "$comName", count: { $sum: 1 } } },
    ]);

    res.json({ companies });
  } catch (error) {
    console.error("Error fetching total jobs by company:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get total number of jobs
const getTotalJobs = async (req, res) => {
  try {
    const totalJobs = await JobDescription.countDocuments();
    res.json({ totalJobs });
  } catch (error) {
    console.error("Error fetching total jobs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a new job description
const addJobDescription = async (req, res) => {
  try {
    console.log(req.body);

    let jobDescription = new JobDescription(
      _.pick(req.body, [
        "id",
        "img1",
        "logo",
        "position",
        "comName",
        "aboutCompany",
        "location",
        "des1",
        "duration",
        "responsibilities",
        "qualifications",
        "additionalInformation",
      ])
    );

    await jobDescription.save();
    res.status(201).json(_.pick(jobDescription, ["id", "position", "comName"]));
  } catch (error) {
    console.error("Error adding job description:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export all controller functions
module.exports = {
  getJobDescriptionById,
  getTotalJobsByPosition,
  getTotalJobsByCompany,
  getTotalJobs,
  addJobDescription,
};
