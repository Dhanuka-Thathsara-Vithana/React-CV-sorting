const mongoose = require("mongoose");
const Joi = require('joi');

const jobDescriptionSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        minlength: 3
    },
    img1: {
      type: String,
      required: true,
      minlength: 3
    },
    logo: {
      type: String,
      required: true,
      minlength: 3
      },
    position: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 255
    },
    comName: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }, 
    aboutCompany: {
        type: String,
        required: true,
        minlength: 3
       },
    location: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 300
       },          
    des1: {
      type: String,
      required: true,
      minlength: 3
     },
    duration: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15
       },
    responsibilities: {
        type: String,
        required: true,
        minlength: 3
       },
    qualifications: {
        type: String,
        required: true,
        minlength: 3
       }, 
    additionalInformation: {
        type: String,
        required: true,
        minlength: 3
       },        
  });
  
  const JobDescription = mongoose.model("JobDescription", jobDescriptionSchema);


exports.JobDescription = JobDescription;
