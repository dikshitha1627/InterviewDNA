const axios = require("axios");

async function generateInterviewQuestions(resumeText) {
    const prompt = `
You are an experienced software engineer and technical recruiter.

Analyze the following resume.

Return ONLY valid JSON.

The response must exactly follow this structure:

{
  "resumeScore": 0,
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "technicalQuestions": [],
  "projectQuestions": [],
  "hrQuestions": []
}

Rules:
- resumeScore and atsScore should be integers out of 100.
- strengths should contain 4-6 points.
- weaknesses should contain 3-5 points.
- missingSkills should contain 5-8 important skills.
- technicalQuestions should contain exactly 5 interview questions.
- projectQuestions should contain exactly 3 interview questions based on the projects.
- hrQuestions should contain exactly 2 HR interview questions.
- Do NOT use markdown.
- Do NOT wrap the JSON inside \`\`\`.
- Return ONLY the JSON object.

Resume:

${resumeText}
`;

    const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                "Content-Type": "application/json"
            }
        }
    );

    const result = response.data.choices[0].message.content;

    return JSON.parse(result);
}

module.exports = {
    generateInterviewQuestions
};