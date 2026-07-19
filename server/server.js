console.log("THIS IS MY SERVER FILE");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const historyRoutes = require("./routes/historyRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
console.log(resumeRoutes);
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", messageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/history", historyRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("InterviewDNA Backend Running 🚀");
});


const PORT = process.env.PORT || 5000;
console.log(process.env.GEMINI_API_KEY);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.use("/api/resume", (req, res, next) => {
    console.log("Resume route hit:", req.method, req.url);
    next();
});

app.use("/api/resume", resumeRoutes);