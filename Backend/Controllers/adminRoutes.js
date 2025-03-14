const express = require('express');
const router = express.Router();
const { Admin } = require('./adminModel'); // Assuming your admin model is defined in adminModel.js

router.get('/admins', async (req, res) => {
  try {
    const admins = await Admin.find({}, 'Name email'); // Fetch only the necessary fields
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admin data: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
