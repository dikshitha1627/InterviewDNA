const express = require("express");
const router = express.Router();

console.log("Resume Routes Loaded");

router.get("/", (req, res) => {
    res.send("Resume Root Working");
});

router.get("/latest", (req, res) => {
    res.send("Latest Route Working");
});

module.exports = router;