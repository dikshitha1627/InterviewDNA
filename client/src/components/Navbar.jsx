import { FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-white shadow flex justify-between items-center px-8 py-5">

      <div>

        <h2 className="text-3xl font-bold text-slate-800">

          Welcome 👋

        </h2>

        <p className="text-gray-500">

          Let's crack your dream company interview.

        </p>

      </div>

      <div className="flex items-center gap-5">

        <FaBell size={22} />

        <img
          src="https://i.pravatar.cc/100"
          alt=""
          className="w-12 h-12 rounded-full"
        />

      </div>
    </header>
  );
}

export default Navbar;