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
    { to: "/", icon: <FaHome size={22} /> },
    { to: "/education", icon: <FaGraduationCap size={22} /> },
    { to: "/skills", icon: <FaCog size={22} /> },
    { to: "/projects", icon: <FaFolder size={22} /> },
    { to: "/achievements", icon: <FaTrophy size={22} /> },
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
            `transition-all ${isActive ? "text-blue-400" : "text-gray-400"}`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </div>
  );
}
