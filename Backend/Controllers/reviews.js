const _ = require("lodash");
const { Review } = require("../models/review");

const createReview = async (req, res) => {
  try {
    let review = new Review(_.pick(req.body, ["customerName", "comment", "stars"]));

    await review.save();
    res.send(_.pick(review, ["_id", "comment"]));
  } catch (error) {
    console.error("Error submitting review:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  createReview,
};  
