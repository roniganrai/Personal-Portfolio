import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "SmartQueue",
      description:
        "SmartQueue is a web-based platform that allows users to track queues from home, book appointments, and monitor their live position in real-time. It simplifies queue management for both users and service providers, ensuring a smooth and efficient service experience.",
      screenshot: "/screenshots/SmartQueue.png",
      github: "https://github.com/roniganrai/SmartQueue",
      live: "#",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "MongoDB",
        "Tailwind CSS",
      ],
    },
    {
      title: "CollabCode Editor",
      description:
        "A real-time collaborative code editor with built-in chat, syntax highlighting, and multi-language execution powered by Judge0 API. Users can join rooms, write and run code together, and communicate seamlessly.",
      screenshot: "/screenshots/Collabcode.png",
      github: "https://github.com/roniganrai/CollabCode",
      live: "https://colabcodeeditor.netlify.app/",
      tech: [
        "React",
        "Node.js",
        "Express",
        "Socket.io",
        "MySQL",
        "Sequelize",
        "Tailwind CSS",
        "Judge0 API",
      ],
    },

    {
      title: "Excel Analytics Platform",
      description:
        "A powerful MERN Stack platform for analyzing and visualizing spreadsheet data.",
      screenshot: "/screenshots/ExcelAnalyticsWeb.png",
      github: "https://github.com/roniganrai/excel-analytics-platform",
      live: "https://excel-web-platform.netlify.app/",
      tech: ["React", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio showcasing my skills, projects, and achievements.",
      screenshot: "/screenshots/portfolio.png",
      github: "https://github.com/roniganrai/Personal-Portfolio",
      live: "https://roniganrai.netlify.app/",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      title: "Tic-Tac-Toe Game",
      description:
        "A simple interactive Tic-Tac-Toe game with a beautiful UI and smooth animations.",
      screenshot: "/screenshots/TicTacToe.png",
      github: "https://github.com/roniganrai/tic-tac-toe",
      live: "https://tic-tac-toe-y7be.onrender.com/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Weather App",
      description:
        "A real-time weather app that provides current weather updates using an API.",
      screenshot: "/screenshots/Weather.png",
      github: "https://github.com/roniganrai/weather-app",
      live: "#",
      tech: ["React", "API", "Tailwind CSS"],
    },
    {
      title: "3D Solar System",
      description:
        "A 3D simulation of the Solar System, created using Three.js for rendering 3D graphics.",
      screenshot: "/screenshots/SolarSystem3D.png",
      github: "https://github.com/roniganrai/3D_Solar_System",
      live: "#",
      tech: ["Three.js", "JavaScript", "WebGL"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
      >
        My Projects
      </motion.h2>
      <p className="text-gray-400 max-w-2xl text-center mb-12">
        A collection of my work using modern web technologies.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* Screenshot with Zoom on Hover */}
            <div className="h-52 w-full overflow-hidden relative">
              <img
                src={project.screenshot}
                alt={project.title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content Box with Bottom 3-Side Outline */}
            <div className="p-6 flex flex-col flex-grow transition-all duration-300 border-b-2 border-x-2 border-transparent group-hover:border-purple-500">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-6 mt-6 text-sm font-medium">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
