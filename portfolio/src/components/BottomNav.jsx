import {
  FaHome,
  FaGraduationCap,
  FaCog,
  FaFolder,
  FaTrophy,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const navItems = [
    { to: "/", icon: <FaHome size={22} />, label: "Home" },
    {
      to: "/education",
      icon: <FaGraduationCap size={22} />,
      label: "Education",
    },
    { to: "/skills", icon: <FaCog size={22} />, label: "Skills" },
    { to: "/projects", icon: <FaFolder size={22} />, label: "Projects" },
    {
      to: "/achievements",
      icon: <FaTrophy size={22} />,
      label: "Achievements",
    },
  ];

  return (
    <div
      className="fixed bottom-3 left-1/2 transform -translate-x-1/2 
                 bg-gradient-to-r from-gray-800 to-gray-900
                 shadow-lg rounded-full px-8 py-3 flex gap-10 
                 text-gray-400 backdrop-blur-md z-50"
    >
      {navItems.map((item, i) => (
        <NavLink
          key={i}
          to={item.to}
          className={({ isActive }) =>
            `relative flex flex-col items-center group transition-all ${
              isActive ? "text-blue-400" : "text-gray-400"
            }`
          }
        >
          {/* Icon */}
          {item.icon}

          {/* Tooltip Label */}
          <span
            className="absolute -top-8 opacity-0 group-hover:opacity-100 
                       group-hover:translate-y-[-4px] transition-all duration-300 
                       text-xs bg-gray-800 text-white px-2 py-1 rounded-md shadow-md"
          >
            {item.label}
          </span>
        </NavLink>
      ))}
    </div>
  );
}
