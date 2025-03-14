const mongoose = require("mongoose");
const Joi = require('joi');

const applicationSchema = new mongoose.Schema({
    jobId: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
      },
    fName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25
    },
    lName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 25
    },
    age: {
      type: Number,
      required: true,
      minlength: 1,
      maxlength: 3
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30
    },
    confirmEmail: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 30
    },
    residence: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
     },
    phone: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
    },
    linkedin: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
       },
    facebook1: {
        type: String,
        minlength: 3,
        maxlength: 30
       },
    message: {
        type: String,
        minlength: 3,
        maxlength: 255
       }, 
       applicationDate: {
        type: Date,
        default: Date.now,
      },
      
  });
  
  const Application = mongoose.model("Application", applicationSchema);

  function validateApplication(application) {
    const schema = {
      jobId: Joi.string()
        .min(2)
        .max(255)
        .required(),  
      fName: Joi.string()
        .min(2)
        .max(50)
        .required(),
      lName: Joi.string()
        .min(2)
        .max(50)
        .required(),
      age: Joi.number()
        .max(500)
        .required(),  
      email: Joi.string()
        .min(3)
        .max(40)
        .required(), 
      confirmEmail: Joi.string()
        .min(5)
        .max(40)
        .required(),
      residence: Joi.string()
        .min(5)
        .max(15)
        .required(),
      phone: Joi.string()
        .min(5)
        .max(15)
        .required(), 
      linkedin: Joi.string()
        .min(5)
        .max(15)
        .required(), 
      facebook1: Joi.string()
        .min(5)
        .max(255),
      message: Joi.string()
        .min(5)
        .max(255),

              
    };
    return Joi.validate(application, schema);
  }

exports.Application = Application;
exports.validate = validateApplication;