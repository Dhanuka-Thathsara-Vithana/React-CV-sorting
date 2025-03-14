const _ = require('lodash');
const { JobCard, validate } = require("../models/jobCard");

// Get all Job Cards
const getAllJobCards = async (req, res) => {
    try {
        const jobCards = await JobCard.find().sort('title');
        res.send(jobCards);
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};

// Create a new Job Card
const createJobCard = async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let jobCard = new JobCard(
            _.pick(req.body, ['image', 'title', 'pubDate', 'des1', 'des2'])
        );
        await jobCard.save();
        res.send(_.pick(jobCard, ['_id', 'title', 'pubDate']));
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};

// Get a single Job Card by ID
const getJobCardById = async (req, res) => {
    try {
        const jobCard = await JobCard.findById(req.params.id);
        if (!jobCard) return res.status(404).send("Job Card not found");
        res.send(jobCard);
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};

// Update a Job Card by ID
const updateJobCard = async (req, res) => {
    try {
        const jobCard = await JobCard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!jobCard) return res.status(404).send("Job Card not found");
        res.send(jobCard);
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};

// Delete a Job Card by ID
const deleteJobCard = async (req, res) => {
    try {
        const jobCard = await JobCard.findByIdAndDelete(req.params.id);
        if (!jobCard) return res.status(404).send("Job Card not found");
        res.send({ message: "Job Card deleted successfully" });
    } catch (error) {
        res.status(500).send("Server error: " + error.message);
    }
};

module.exports = {
    getAllJobCards,
    createJobCard,
    getJobCardById,
    updateJobCard,
    deleteJobCard
};