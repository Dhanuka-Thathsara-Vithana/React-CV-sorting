const mongoose = require("mongoose");
const Joi = require('joi');

const jobCardSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true,
      minlength: 3
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25
    },
    pubDate: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 15
    },
    des1: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10
     },
    des2: {
        type: String,
        required: true,
        minlength: 3
       }
  });
  
  const JobCard = mongoose.model("JobCard", jobCardSchema);

  function validateJobCard(job) {
    const schema = {
      image: Joi.string()
        .min(2)
        .required(),
      title: Joi.string()
        .min(2)
        .max(25)
        .required(),
      pubDate: Joi.string()
        .min(5)
        .max(15)
        .required(),  
      des1: Joi.string()
        .min(3)
        .max(10)
        .required(),
      des2: Joi.string()
        .min(3)
        .required()
    };
    return Joi.validate(job, schema);
  }

exports.JobCard = JobCard;
exports.validate = validateJobCard;