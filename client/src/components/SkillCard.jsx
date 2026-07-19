function SkillCard({ title, items }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">

      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-lg"
          >
            {item}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default SkillCard;