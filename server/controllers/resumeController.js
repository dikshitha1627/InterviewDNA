const Resume = require("../models/Resume");
const { generateInterviewQuestions } = require("../services/geminiService");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const uploadResume = async (req, res) => {
    try {
        // Read uploaded PDF
        const dataBuffer = fs.readFileSync(req.file.path);

        // Extract text from PDF
        const pdfData = await pdfParse(dataBuffer);

        // Generate AI analysis/questions
       const analysis = await generateInterviewQuestions(pdfData.text);

await Resume.create({
    filename: req.file.originalname,
    resumeText: pdfData.text,
    analysis
});


        // Send response
        res.json({
            message: "Resume Uploaded Successfully",
            analysis
        });

    } catch (error) {
        console.log("===== ERROR START =====");
        console.dir(error, { depth: null });
        console.log("===== ERROR END =====");

        res.status(500).json({
            message: error.message
        });
    }
};
const getLatestResume = async (req, res) => {

    try {

        const latest = await Resume.findOne().sort({ createdAt: -1 });

        if (!latest) {
            return res.status(404).json({
                message: "No resume found"
            });
        }

        res.json(latest.analysis);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

module.exports = {
    uploadResume,
    getLatestResume
};