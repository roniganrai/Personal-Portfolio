import { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiIntellijidea,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "programming", label: "Programming" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools" },
  ];

  const skills = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
      },
    ],
    programming: [
      { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
      {
        name: "SQL",
        icon: <SiMysql className="text-blue-400 text-5xl" />,
      },
    ],
    databases: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-5xl" />,
      },
    ],
    tools: [
      { name: "Git", icon: <FaGitAlt className="text-orange-400 text-5xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-white text-5xl" /> },
      {
        name: "VS Code",
        icon: <VscVscode className="text-blue-500 text-5xl" />,
      },
      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea className="text-purple-400 text-5xl" />,
      },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col bg-gray-900 text-white pt-24 px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-4"
      >
        My Skills
      </motion.h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
        Tools, technologies & languages that I use to build projects.
      </p>

      {/* Tabs with underline animation */}
      <div className="flex justify-center flex-wrap gap-3 mb-12 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 font-medium relative transition-all duration-300 ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills[activeTab].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
            className="relative bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl 
                       flex flex-col items-center justify-center p-6 shadow-lg 
                       transition-all duration-300 group"
          >
            {/* Icon glow on hover */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-2xl transition" />
              {skill.icon}
            </motion.div>
            <span className="mt-4 text-gray-200 font-medium text-lg">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
