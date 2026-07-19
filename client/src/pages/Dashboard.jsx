import { useEffect, useState } from "react";
import axios from "axios";
import ScoreCard from "../components/ScoreCard";
import SkillCard from "../components/SkillCard";
import QuestionCard from "../components/QuestionCard";

function Dashboard() {

    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {

        const loadData = async () => {

            const res = await axios.get("http://localhost:5000/api/resume/latest");

            setAnalysis(res.data);

        };

        loadData();

    }, []);

    if (!analysis) return <h2>Loading...</h2>;

    return (

        <div style={{padding:"30px"}}>

            <h1>InterviewDNA Report</h1>

            <div style={{
                display:"flex",
                gap:"20px",
                marginBottom:"30px"
            }}>

                <ScoreCard
                    title="Resume Score"
                    score={analysis.resumeScore}
                />

                <ScoreCard
                    title="ATS Score"
                    score={analysis.atsScore}
                />

            </div>

            <SkillCard
                title="Strengths"
                items={analysis.strengths}
            />

            <SkillCard
                title="Weaknesses"
                items={analysis.weaknesses}
            />

            <SkillCard
                title="Missing Skills"
                items={analysis.missingSkills}
            />

            <QuestionCard
                title="Technical Questions"
                items={analysis.technicalQuestions}
            />

            <QuestionCard
                title="Project Questions"
                items={analysis.projectQuestions}
            />

            <QuestionCard
                title="HR Questions"
                items={analysis.hrQuestions}
            />

        </div>

    );

}

export default Dashboard;