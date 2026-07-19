function QuestionCard({ title, questions }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <ol className="space-y-3 list-decimal list-inside">
        {questions.map((q, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-lg"
          >
            {q}
          </li>
        ))}
      </ol>

    </div>
  );
}

export default QuestionCard;