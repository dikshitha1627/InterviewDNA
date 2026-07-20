import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import { FiUploadCloud } from "react-icons/fi";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import api from "../services/api";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const uploadResume = async () => {
    if (!file) {
      Swal.fire({
        icon: "warning",
        title: "No Resume Selected",
        text: "Please choose your PDF resume first.",
      });
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", file);

      const res = await api.post("/resume/upload", formData);

      localStorage.setItem(
        "analysis",
        JSON.stringify(res.data.analysis)
      );

      Swal.fire({
        icon: "success",
        title: "Resume Uploaded!",
        text: "AI Analysis Generated Successfully",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/dashboard");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upload Failed",
        text: err.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">

      <div className="bg-white shadow-2xl rounded-3xl w-[650px] p-10">

        <div className="text-center">

          <FaCloudUploadAlt
            className="mx-auto text-blue-600"
            size={70}
          />

          <h1 className="text-4xl font-bold mt-4">
            Upload Resume
          </h1>

          <p className="text-gray-500 mt-2">
            Upload your resume and let AI analyze it.
          </p>

        </div>

        <div className="mt-10 border-2 border-dashed border-blue-400 rounded-2xl p-10 text-center hover:bg-blue-50 transition">

          <FiUploadCloud
            size={55}
            className="mx-auto text-blue-600"
          />

          <p className="mt-4 font-semibold">
            Drag & Drop your Resume
          </p>

          <p className="text-gray-500 text-sm mb-5">
            PDF only
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="block mx-auto"
          />

        </div>

        {file && (

          <div className="bg-green-50 rounded-xl p-4 mt-8 flex items-center gap-4">

            <FaFilePdf
              size={35}
              className="text-red-600"
            />

            <div>

              <h3 className="font-semibold">

                {file.name}

              </h3>

              <p className="text-gray-500 text-sm">

                {(file.size / 1024).toFixed(2)} KB

              </p>

            </div>

          </div>

        )}

        <button
          onClick={uploadResume}
          disabled={loading}
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          {loading ? (
            <div className="flex justify-center">
              <ColorRing
                height={40}
                width={40}
              />
            </div>
          ) : (
            "Generate AI Report"
          )}
        </button>

      </div>

    </div>
  );
}

export default UploadResume;