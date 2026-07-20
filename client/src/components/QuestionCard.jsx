import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCopy,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";

function QuestionCard({ title, items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const copyQuestion = (text) => {
    navigator.clipboard.writeText(text);
    alert("Question copied!");
  };

  const getColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {title}
      </h2>

      <div className="space-y-6">

        {items.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
          >

            <div className="p-6">

              <div className="flex justify-between items-center mb-4">

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${getColor(
                    item.difficulty
                  )}`}
                >
                  {item.difficulty}
                </span>

                <button
                  onClick={() => copyQuestion(item.question)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaCopy size={18} />
                </button>

              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                Question {index + 1}
              </h3>

              <p className="mt-4 text-lg text-gray-700 leading-8">
                {item.question}
              </p>

              <div className="flex items-center gap-2 mt-5 text-gray-500">
                <FaClock />
                <span>
                  Expected Time : {item.expectedTime}
                </span>
              </div>

              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center gap-3 transition-all"
              >

                {openIndex === index ? (
                  <>
                    <FaChevronUp />
                    Hide Answer
                  </>
                ) : (
                  <>
                    <FaChevronDown />
                    Show Answer
                  </>
                )}

              </button>

              {openIndex === index && (

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-600">

                  <div className="flex items-center gap-2 mb-4">

                    <FaLightbulb className="text-yellow-500 text-xl" />

                    <h4 className="text-xl font-bold">
                      AI Suggested Answer
                    </h4>

                  </div>

                  <p className="leading-8 text-gray-700 whitespace-pre-line">
                    {item.answer}
                  </p>

                  <div className="mt-6 bg-yellow-100 rounded-xl p-5">

                    <h4 className="font-bold text-lg">
                      💡 Interview Tip
                    </h4>

                    <p className="mt-2 text-gray-700">
                      {item.tip}
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;