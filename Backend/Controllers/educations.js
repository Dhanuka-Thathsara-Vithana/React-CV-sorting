const _ = require("lodash");
const { Education, validate } = require("../models/education");

// Get education by ID
const getEducationById = async (req, res) => {
  try {
    const education = await Education.find({ id: req.body.id });
    res.send(education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all education records, sorted by Company
const getAllEducation = async (req, res) => {
  try {
    const education = await Education.find().sort("Company");
    res.send(education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new education entry
const createEducation = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    console.log(req.body);

    let education = new Education(
      _.pick(req.body, [
        "Institution",
        "Major",
        "from",
        "to",
        "Description",
        "Check",
        "Degree",
        "userID"
      ])
    );

    await education.save();
    res.send(_.pick(education, ["Institution", "Major"]));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete an education record by ID
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndRemove(req.params.id);
    if (!education)
      return res
        .status(404)
        .send("The Education Qualification with the given ID was not found.");
    
    res.send(education);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export all functions
module.exports = {
  getEducationById,
  getAllEducation,
  createEducation,
  deleteEducation,
};
