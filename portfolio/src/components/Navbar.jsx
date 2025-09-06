import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 
                 flex justify-between items-center 
                 px-6 md:px-12 py-2 
                 bg-gradient-to-r from-indigo-900 to-purple-900 
                 text-white shadow-lg"
    >
      {/* Logo */}
      <Link to="/">
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer hover:text-blue-400 transition duration-300">
          Roni's Portfolio
        </h1>
      </Link>

      {/* Navbar Items */}
      <ul className="hidden md:flex gap-8 font-medium items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`cursor-pointer transition duration-300 ${
                location.pathname === item.path
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "hover:text-blue-400"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 py-2 rounded-xl shadow-lg transition-transform transform hover:scale-105"
        >
          Resume
        </a>
      </ul>
    </motion.nav>
  );
}
