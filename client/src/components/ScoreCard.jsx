import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ScoreCard({ title, score }) {
  const getColor = () => {
    if (score >= 85) return "#16a34a";
    if (score >= 70) return "#2563eb";
    if (score >= 50) return "#f59e0b";
    return "#dc2626";
  };

  const getStatus = () => {
    if (score >= 85) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Average";
    return "Needs Improvement";
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-xl p-6 w-72 text-center border border-gray-100"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-5">
        {title}
      </h2>

      <div className="w-36 h-36 mx-auto">

        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: getColor(),
            textColor: "#111827",
            trailColor: "#e5e7eb",
            textSize: "18px",
          })}
        />

      </div>

      <div className="mt-5">

        <span
          className="px-4 py-2 rounded-full text-white font-semibold"
          style={{
            backgroundColor: getColor(),
          }}
        >
          {getStatus()}
        </span>

      </div>

      <div className="mt-5">

        <div className="flex justify-between text-sm text-gray-500">

          <span>Progress</span>

          <span>{score}%</span>

        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

          <div
            className="h-3 rounded-full"
            style={{
              width: `${score}%`,
              backgroundColor: getColor(),
            }}
          />

        </div>

      </div>

    </motion.div>
  );
}

export default ScoreCard;