const express = require("express");
const {
  getEducationById,
  getAllEducation,
  createEducation,
  deleteEducation,
} = require("../Controllers/educations");

const router = express.Router();

router.post("/:id", getEducationById);
router.get("/", getAllEducation);
router.post("/", createEducation);
router.delete("/:id", deleteEducation);

module.exports = router;
