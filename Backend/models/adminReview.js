const mongoose = require("mongoose");
const Joi = require('joi');

const adminReviewSchema = new mongoose.Schema({
    companyName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  adminComment: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
 
});

const AdminReview = mongoose.model("AdminReview", adminReviewSchema);

exports.AdminReview = AdminReview;