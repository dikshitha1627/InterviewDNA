const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  uploadResume,
  getLatestResume,
} = require("../controllers/resumeController");

console.log("Resume Routes Loaded");

// Upload Resume
router.post("/upload", upload.single("resume"), uploadResume);

// Get Latest Resume Analysis
router.get("/latest", getLatestResume);

module.exports = router;