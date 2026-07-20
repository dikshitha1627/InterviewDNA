import { useEffect, useState } from "react";
import axios from "axios";

import ScoreCard from "../components/ScoreCard";
import SkillCard from "../components/SkillCard";
import QuestionCard from "../components/QuestionCard";

function Dashboard() {
  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/resume/latest"
      );

      setAnalysis(res.data);
    };

    loadData();
  }, []);

  if (!analysis)
    return (
      <h2 className="text-center text-2xl mt-20">
        Loading AI Report...
      </h2>
    );

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      {/* AI Header */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 text-white p-10 shadow-2xl mb-10">

        <h1 className="text-5xl font-bold">
          🤖 InterviewDNA AI Recruiter
        </h1>

        <p className="mt-4 text-xl">
          Hello 👋 Welcome Back
        </p>

        <p className="mt-6 text-lg leading-8 text-blue-100">

          Your resume has been analyzed successfully.

          You have good technical skills.

          Improve your weak areas and practice the interview
          questions below to maximize your placement chances.

        </p>

      </div>

      {/* Score Cards */}

      <div className="grid md:grid-cols-2 gap-8 mb-10">

        <ScoreCard
          title="Resume Score"
          score={analysis.resumeScore}
        />

        <ScoreCard
          title="ATS Score"
          score={analysis.atsScore}
        />

      </div>

      {/* Skill Cards */}

      <div className="grid lg:grid-cols-3 gap-8 mb-10">

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <SkillCard
            title="💪 Strengths"
            items={analysis.strengths}
          />

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <SkillCard
            title="⚠ Weaknesses"
            items={analysis.weaknesses}
          />

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6">

          <SkillCard
            title="🚀 Missing Skills"
            items={analysis.missingSkills}
          />

        </div>

      </div>

      {/* Technical */}

      <div className="bg-white rounded-3xl shadow-xl p-7 mb-8">

        <QuestionCard
          title="💻 Technical Interview Questions"
          items={analysis.technicalQuestions}
        />

      </div>

      {/* Project */}

      <div className="bg-white rounded-3xl shadow-xl p-7 mb-8">

        <QuestionCard
          title="📂 Project Interview Questions"
          items={analysis.projectQuestions}
        />

      </div>

      {/* HR */}

      <div className="bg-white rounded-3xl shadow-xl p-7">

        <QuestionCard
          title="👔 HR Interview Questions"
          items={analysis.hrQuestions}
        />

      </div>

    </div>
  );
}

export default Dashboard;