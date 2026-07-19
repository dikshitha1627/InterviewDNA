import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularScore({ title, score }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-64 text-center">
      <h2 className="text-xl font-bold mb-5">{title}</h2>

      <div className="w-36 h-36 mx-auto">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textSize: "18px",
            pathColor: "#2563eb",
            textColor: "#111827",
            trailColor: "#E5E7EB",
          })}
        />
      </div>
    </div>
  );
}

export default CircularScore;