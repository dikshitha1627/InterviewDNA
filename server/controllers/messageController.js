const getMessage = (req, res) => {
    res.json({
        message: "Hello from InterviewDNA Backend 🚀"
    });
};

module.exports = {
    getMessage
};