import {
  FaHome,
  FaUpload,
  FaHistory,
  FaRobot,
  FaChartLine,
  FaUser
} from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Home",
      icon: <FaHome />,
      path: "/",
    },
    {
      name: "Upload",
      icon: <FaUpload />,
      path: "/upload",
    },
    {
      name: "Dashboard",
      icon: <FaChartLine />,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: <FaHistory />,
      path: "/history",
    },
    {
      name: "AI Interview",
      icon: <FaRobot />,
      path: "/dashboard",
    },
    {
      name: "Profile",
      icon: <FaUser />,
      path: "/dashboard",
    },
  ];

  return (
    <aside className="w-72 bg-slate-900 text-white flex flex-col">

      <div className="text-center py-8">

        <h1 className="text-3xl font-bold">

          InterviewDNA

        </h1>

        <p className="text-sm text-gray-400 mt-2">

          AI Hiring Simulator

        </p>

      </div>

      <nav className="flex-1 px-4">

        {menus.map((item) => (

          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-4 p-4 rounded-xl mb-3 transition

            ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-700"
            }
            `}
          >
            {item.icon}

            {item.name}

          </Link>
        ))}

      </nav>

    </aside>
  );
}

export default Sidebar;