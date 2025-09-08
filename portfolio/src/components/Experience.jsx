import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "Zidio Development",
      duration: "June 2025 – July 2025",
      description: [
        "Worked in a team of 4 to develop an Excel Analytics Platform for data visualization.",
        "Developed responsive UI using React.js and Tailwind CSS with reusable components.",
        "Integrated REST APIs for dynamic data handling and real-time updates.",
        "Collaborated with backend developers to ensure smooth data flow.",
      ],
      certificate:
        "https://drive.google.com/file/d/1aprJoocMbd_9iOdivtiNbSoyWcSVykz9/view?usp=sharing",
    },
    {
      role: "Java Development Intern",
      company: "Oasis Infobyte",
      duration: "Oct 2023 – Nov 2023",
      description: [
        "Developed a console-based ATM Interface using Java OOPs concepts.",
        "Created a Number Guessing Game demonstrating logical problem-solving.",
        "Built a Student Management System to manage student records via console.",
        "Strengthened understanding of Java, OOP principles, and basic data handling.",
      ],
      certificate:
        "https://drive.google.com/file/d/1rKiP_NktVYOv9q08c7GIsbpO0bhgpx01/view?usp=sharing",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 pt-24 pb-19 overflow-x-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3 mb-12"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-16"
            >
              {/* Dot */}
              <div className="absolute left-3 top-2 w-6 h-6 bg-blue-500 border-4 border-gray-900 rounded-full shadow-lg"></div>

              {/* Card */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:scale-[1.02] hover:shadow-xl transition-transform">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {exp.role} —{" "}
                    <span className="text-purple-400">{exp.company}</span>
                  </h3>
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-transform"
                  >
                    Certificate
                  </a>
                </div>
                <p className="text-gray-400 mt-1">{exp.duration}</p>
                <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
