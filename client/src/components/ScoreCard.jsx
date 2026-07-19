function ScoreCard({ title, score }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,.1)"
      }}
    >
      <h2>{title}</h2>

      <h1>{score}/100</h1>
    </div>
  );
}

export default ScoreCard;