const mongoose = require("mongoose");
const Joi = require('joi');
const boolean = require("joi/lib/types/boolean");

const educationSchema = new mongoose.Schema({
    Institution: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    Major: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
    },
    from: {
      type: String,
      required: true,
      minlength: 5
    },
    to: {
      type: String,
      required: true,
      minlength: 5
    },
    Description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
     },
    Check: {
      type: Boolean,
      required: true
    },
    Degree: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50
     },
     userID: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
     }
  });
  
  const Education = mongoose.model("Education", educationSchema);

  function validateEducation(education) {
    const schema = {
      Institution: Joi.string()
        .min(2)
        .max(50)
        .required(),
      Major: Joi.string()
        .min(2)
        .max(50)
        .required(),
      from: Joi.string()
        .min(3)
        .required(), 
      to: Joi.string()
        .min(5)
        .required(),
      Description: Joi.string()
        .min(3)
        .max(255),
      Check: Joi.boolean().required(),
      Degree: Joi.string()
      .min(2)
      .max(50)
      .required(),
      userID: Joi.string()
      .min(2)
      .max(100)
      .required()
    };
    return Joi.validate(education, schema);
  }

exports.Education = Education;
exports.validate = validateEducation;