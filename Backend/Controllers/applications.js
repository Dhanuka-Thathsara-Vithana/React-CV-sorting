const _ = require("lodash");
const { Application, validate } = require("../models/application");

// Get all applications, sorted by jobId
const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort("jobId");
    res.send(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get applications by ID
const getApplicationById = async (req, res) => {
  try {
    console.log(req.body);
    const application = await Application.find({ id: req.body.dataId });
    console.log(application);
    res.send(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get applications by jobId and sort by count
const getApplicationsByJobId = async (req, res) => {
  try {
    console.log(req.body);
    const applications = await Application.find({ jobId: req.body.id }).sort("count");
    applications.sort((a, b) => b.count - a.count);
    console.log(applications);
    res.send(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get total application count
const getTotalApplications = async (req, res) => {
  try {
    const totalApplications = await Application.countDocuments();
    res.json({ totalApplications });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new application
const createApplication = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    console.log(req.body);

    let application = new Application(
      _.pick(req.body, [
        "jobId",
        "fName",
        "lName",
        "email",
        "confirmEmail",
        "residence",
        "phone",
        "linkedin",
        "facebook1",
        "message",
        "age",
      ])
    );

    await application.save();

    res.send(_.pick(application, ["jobId", "fName"]));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get daily application counts
const getDailyApplicationCounts = async (req, res) => {
  try {
    const dailyApplicationCounts = await Application.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$applicationDate" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json({ dailyApplicationCounts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export all functions
module.exports = {
  getAllApplications,
  getApplicationById,
  getApplicationsByJobId,
  getTotalApplications,
  createApplication,
  getDailyApplicationCounts,
};
