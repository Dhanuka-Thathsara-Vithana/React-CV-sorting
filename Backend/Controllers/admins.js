const _ = require('lodash');
const bcrypt = require("bcrypt");
const { Admin, validate } = require("../models/admin");
const express = require("express");
const router = express.Router();

router.get("/getDetails", async (req, res) => {
  const admins = await Admin.find().sort('Name');
  res.send(admins);
});





// router.delete("/delete/:_id", async (req, res) => {
//   try {
    
//     const admin = await Admin.findByIdAndRemove(req.params._id);
  
//     console.log(req.params._id);
//     if (!admin) return res.status(404).send("Admin not found");

//     res.send(admin);
//   } catch (error) {
//     res.status(500).send("Something went wrong");
//   }
// });



router.delete("/delete", async (req, res) => {
  
  const admin = await Admin.findByIdAndRemove(req.params._id);

  if (!admin)
    return res.status(404).send("The work Qualification with the given ID was not found.");

  res.send(admin);
});





router.get("/me", async (req, res) => {
  const admin = await Admin.findById(req.user._id).select("password");
  res.send(admin);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let admin = await Admin.findOne({ email: req.body.email });
  if (admin) return res.status(400).send("User already registered.");

  admin = new Admin(_.pick(req.body, ['Name', 'email', 'password', 'confirmPassword', 'key']));

  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);
  
  await admin.save();
  res.send(_.pick(admin, ['_id', 'email']));
});

module.exports = router;
