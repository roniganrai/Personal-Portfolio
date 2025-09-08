import { motion } from "framer-motion";

export default function AboutEducation() {
  const educationData = [
    {
      degree: "B.Tech - Electronics and Communication Engineering",
      board: "Heritage Institute of Technology, Kolkata",
      duration: "2022 – 2026",
      score: "CGPA: 7.79 / 10",
    },
    {
      degree: "Higher Secondary (PCMB)",
      board: "WBCHSE — Suri Benimadhab Institution, Suri",
      duration: "2020 – 2022",
      score: "85.6%",
    },
    {
      degree: "Secondary",
      board: "WBBSE — Parulia Sri Ramkrishna Vidyalaya, Parulia",
      duration: "2020",
      score: "75.71%",
    },
  ];

  return (
    <section
      id="about-education"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 py-16 pb-19 overflow-x-hidden"
    >
      {/* -------- About Me Section -------- */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3 mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 max-w-3xl text-center text-lg leading-relaxed mb-6"
      >
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">
          Roni Ganrai
        </span>
        , currently pursuing B.Tech in Electronics and Communication Engineering
        at Heritage Institute of Technology, Kolkata (2022–2026). Along with my
        core engineering studies, I have a solid foundation in various
        programming languages like Java, C++, SQL.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-300 max-w-3xl text-center text-lg leading-relaxed mb-16"
      >
        I also work on Frontend Development with React.js, where I enjoy
        building interactive and user-friendly web applications, and I'm
        constantly exploring web technologies to expand my knowledge. I believe
        in the power of Technology to create innovative solutions and improve
        lives. solve complex problems, and collaborate with like-minded
        individuals to build innovative solutions.
      </motion.p>

      {/* -------- Education Section -------- */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3 mb-12"
      >
        Education
      </motion.h2>

      <div className="relative w-full max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
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
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-300">{edu.board}</p>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>{edu.duration}</span>
                  <span>{edu.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
