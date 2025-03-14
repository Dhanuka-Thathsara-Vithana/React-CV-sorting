const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const userSchema = new mongoose.Schema({
  fName: { type: String, required: true, minlength: 3, maxlength: 25 },
  lName: { type: String, required: true, minlength: 3, maxlength: 25 },
  email: { type: String, required: true, minlength: 5, maxlength: 255, unique: true },
  telephone: { type: String, required: true, minlength: 5, maxlength: 15, unique: true },
  status: { type: String, minlength: 3, maxlength: 25 },
  field: { type: String, minlength: 3, maxlength: 25 },
  password: { type: String, required: true, minlength: 5, maxlength: 255 },
  age: { type: Number, required: true, minlength: 1, maxlength: 35 },
  type: { type: String, required: true, minlength: 3, maxlength: 10 },
  createdAt: { type: Date, default: Date.now }
});

// 🔹 Generate JWT Token
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, type: this.type },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

const User = mongoose.model("User", userSchema);

// 🔹 Validate User Data
function validateUser(user) {
  const schema = Joi.object({
    fName: Joi.string().min(2).max(50).required(),
    lName: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    telephone: Joi.string().min(5).max(15).required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string(),
    age: Joi.number().min(1).max(35).required(),
    type: Joi.string().min(3).max(10).required(),
    status: Joi.string(),
    field: Joi.string()
  });

  return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
