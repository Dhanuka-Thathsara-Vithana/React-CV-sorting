const _ = require("lodash");
const { Work, validate } = require("../models/work");

const getWorkById = async (req, res) => {
  try {
    const work = await Work.find({ id: req.body.id });
    res.send(work);
  } catch (error) {
    console.error("Error fetching work by ID:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllWork = async (req, res) => {
  try {
    const work = await Work.find().sort("Company");
    res.send(work);
  } catch (error) {
    console.error("Error fetching all work:", error);
    res.status(500).send("Internal Server Error");
  }
};

const createWork = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let work = new Work(
      _.pick(req.body, [
        "Title",
        "Company",
        "OfficeLocation",
        "from",
        "to",
        "Description",
        "Check",
        "userID"
      ])
    );

    await work.save();
    res.send(_.pick(work, ["Title", "Company"]));
  } catch (error) {
    console.error("Error creating work entry:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndRemove(req.params.id);
    if (!work)
      return res.status(404).send("The work qualification with the given ID was not found.");

    res.send(work);
  } catch (error) {
    console.error("Error deleting work entry:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getWorkById,
  getAllWork,
  createWork,
  deleteWork,
};
