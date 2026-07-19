const Resume = require("../models/Resume");

const getHistory = async (req, res) => {
    try {
        const resumes = await Resume.find().sort({ createdAt: -1 });

        res.json(resumes);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getHistory
};