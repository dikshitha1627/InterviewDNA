import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function UploadResume() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const uploadResume = async () => {
    try {
      const formData = new FormData();
      formData.append("resume", file);

      const res = await api.post("/resume/upload", formData);

      localStorage.setItem(
        "analysis",
        JSON.stringify(res.data.analysis)
      );

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Upload Failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Upload Resume</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={uploadResume}>
        Upload Resume
      </button>
    </div>
  );
}

export default UploadResume;