import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

export default function Achievements() {
  const achievementsData = [
    {
      title: "Java Programming Certificate",
      description:
        "Successfully completed a Java Programming certification course demonstrating skills in OOP, data structures, and problem-solving.",
      certificateLink:
        "https://drive.google.com/file/d/1Wmu1PJibGjY19FxMrN2NlWuW8UYAzTaY/view?usp=sharing",
    },
    {
      title: "Data Structures & Algorithms (DSA)",
      description:
        "Completed an intensive DSA certification course solving 150+ problems and mastering advanced problem-solving techniques.",
      certificateLink:
        "https://drive.google.com/file/d/1zNB9k3KzHD_lfX7JTrbeXWLQz4WaqAgA/view?usp=sharing",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 pt-24 pb-19"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3 mb-12"
      >
        Achievements
      </motion.h2>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

        <div className="space-y-12">
          {achievementsData.map((achieve, index) => (
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
                {/* Title & Button */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {achieve.title}
                  </h3>
                  <a
                    href={achieve.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-transform"
                  >
                    Certificate
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {achieve.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
