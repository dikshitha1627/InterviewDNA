import { useEffect, useState } from "react";
import api from "../services/api";

function ResumeHistory() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        fetchHistory();

    }, []);

    const fetchHistory = async () => {

        const res = await api.get("/history");

        setHistory(res.data);

    };

    return (

        <div className="p-10">

            <h1 className="text-4xl font-bold mb-8">

                Resume History

            </h1>

            {history.map((resume) => (

                <div
                    key={resume._id}
                    className="bg-white shadow rounded-xl p-6 mb-5"
                >

                    <h2 className="text-xl font-bold">

                        {resume.filename}

                    </h2>

                    <p>

                        Uploaded :
                        {" "}
                        {new Date(resume.createdAt).toLocaleString()}

                    </p>

                    <p>

                        Resume Score :
                        {" "}
                        {resume.analysis.resumeScore}

                    </p>

                    <p>

                        ATS Score :
                        {" "}
                        {resume.analysis.atsScore}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default ResumeHistory;