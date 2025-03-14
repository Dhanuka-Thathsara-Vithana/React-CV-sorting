const mongoose = require("mongoose");
const Joi = require('joi');

const userReviewSchema = new mongoose.Schema({
  
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }, // Reference to the User model
    companyName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  userComment: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },

  reviewValue:{
    type: number,
  },
 
});

const UserReview = mongoose.model("UserReview", userReviewSchema);

exports.UserReview = UserReview;