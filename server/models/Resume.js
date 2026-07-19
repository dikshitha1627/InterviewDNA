const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
    {
        filename: {
            type: String,
            required: true
        },
        resumeText: {
            type: String,
            required: true
        },
        analysis: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Resume", resumeSchema);