import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold">
          InterviewDNA
        </h1>

        <div className="space-x-6">

          <Link to="/">Home</Link>

          <Link to="/upload">Upload Resume</Link>

          <Link to="/dashboard">Dashboard</Link>
          
          <Link to="/history">History</Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;