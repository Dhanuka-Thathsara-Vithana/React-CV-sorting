const _ = require('lodash');
const bcrypt = require("bcrypt");
const { Admin } = require('../models/admin')
const express = require("express");
const router = express.Router();
const Joi = require('joi');

const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    
  }));

router.post("/", async (req, res) => {
     const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
   
     let admin = await Admin.findOne({ email: req.body.email });
     if (!admin) return res.status(400).send("Inavild email or password.");
     
     const vaildPassword = await bcrypt.compare(req.body.password, admin.password)
     if (!vaildPassword) return res.status(400).send('Invalid email or password.')
     res.send(admin)
     console.log(admin)
     
   });

   function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(req, schema);
   }

   module.exports = router;