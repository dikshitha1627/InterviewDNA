const axios = require("axios");

async function generateInterviewQuestions(resumeText) {

const prompt = `
You are a Senior Software Engineer, Hiring Manager and Technical Interviewer.

Analyze the resume carefully.

Return ONLY valid JSON.

DO NOT RETURN MARKDOWN.

DO NOT WRITE EXPLANATIONS.

Return exactly this structure.

{
  "resumeScore": 92,
  "atsScore": 88,

  "strengths":[
    "..."
  ],

  "weaknesses":[
    "..."
  ],

  "missingSkills":[
    "..."
  ],

  "technicalQuestions":[
    {
      "question":"",
      "answer":"",
      "difficulty":"",
      "expectedTime":"",
      "tip":""
    }
  ],

  "projectQuestions":[
    {
      "question":"",
      "answer":"",
      "difficulty":"",
      "expectedTime":"",
      "tip":""
    }
  ],

  "hrQuestions":[
    {
      "question":"",
      "answer":"",
      "difficulty":"",
      "expectedTime":"",
      "tip":""
    }
  ],

  "summary":"",

  "roadmap":[
    "...",
    "...",
    "...",
    "...",
    "..."
  ]
}

Rules

resumeScore:
0-100 integer

atsScore:
0-100 integer

strengths:
6 points

weaknesses:
5 points

missingSkills:
6 points

technicalQuestions:
Exactly 5

projectQuestions:
Exactly 3

hrQuestions:
Exactly 3

For EVERY QUESTION provide

question

answer

difficulty
(Easy, Medium, Hard)

expectedTime

tip

summary should be around 80 words.

roadmap should contain 5 learning steps.

Resume

${resumeText}

`;

const response = await axios.post(

"https://api.groq.com/openai/v1/chat/completions",

{
model:"llama-3.3-70b-versatile",

messages:[
{
role:"user",
content:prompt
}
],

temperature:0.5

},

{

headers:{

Authorization:`Bearer ${process.env.GROQ_API_KEY}`,

"Content-Type":"application/json"

}

}

);

const result=response.data.choices[0].message.content;
console.log(result);
return JSON.parse(result);

}

module.exports={
generateInterviewQuestions
};