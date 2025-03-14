const mongoose = require("mongoose");
const Joi = require('joi');

const workSchema = new mongoose.Schema({
  
    Title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25
    },
    Company: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25
    },
    OfficeLocation: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255
    },
    from: {
        type: String,
        required: true,
        minlength: 6
      },
    to: {
        type: String,
        required: true,
        minlength: 6
    },
    Description: {
      type: String,
      minlength: 3,
      maxlength: 255
     },
     Check: {
      type: Boolean,
      required: true
    },
    userID: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
     }
  });

  const Work = mongoose.model("Work", workSchema);

  function validateWork(work) {
    const schema = {
      Title: Joi.string()
        .min(2)
        .max(50)
        .required(),
      Company: Joi.string()
        .min(2)
        .max(50)
        .required(),
      OfficeLocation: Joi.string()
        .min(2)
        .max(50)
        .required(),  
      from: Joi.string()
        .min(5)
        .required(), 
      to: Joi.string()
        .min(5)
        .required(),
      Description: Joi.string()
        .min(3)
        .max(255),
      Check: Joi.boolean().required(),  
      userID: Joi.string()
            .min(2)
            .max(100)
            .required()
    };
    return Joi.validate(work, schema);
  }

exports.Work = Work;
exports.validate = validateWork;