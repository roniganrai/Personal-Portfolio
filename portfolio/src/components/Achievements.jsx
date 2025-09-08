import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function Achievements() {
  const achievementsData = [
    {
      title:
        "INSPIRE Award – Science Project (Automatic Street Light) 2016 - 2017",
      description:
        "Received the prestigious INSPIRE Award from the Department of Science & Technology, Government of India, for developing an innovative 'Automatic Street Light' project. Selected among top students to participate in the District Level Exhibition & Project Competition (DLEPC).",
      certificateLink:
        "https://drive.google.com/file/d/1QJSlz6G1tgzGot_3sChV5rtKQoVbhxDA/view?usp=sharing",
    },
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

  const codingProfiles = [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/u/roniganrai20/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      color: "from-yellow-400 to-yellow-600",
      problems: "50+ Problems Solved",
      description:
        "Consistently solving problems and enhancing algorithmic thinking while learning optimized approaches through detailed explanations and coding contests.",
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/roniganreoqj/?_gl=1*11eadx7*_up*MQ..*_gs*MQ..&gclid=Cj0KCQjw7dm-BhCoARIsALFk4v_VoystXG1PGmXFRkMzspfwmZTydCpYQNjF4tomA6AC_59e9PrybvgaAsgGEALw_wcB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
      color: "from-green-400 to-green-600",
      problems: "100+ Problems Solved",
      description:
        "Practicing data structures and algorithms regularly, solving diverse coding challenges to strengthen problem-solving and competitive programming skills.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-900 pt-24 pb-24 overflow-x-hidden"
    >
      {/* Achievements Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-3 mb-12"
      >
        Achievements & Certifications
      </motion.h2>

      {/* Achievements Timeline */}
      <div className="relative w-full max-w-3xl mb-16">
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
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  {achieve.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coding Profiles Section */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 flex items-center gap-3 mb-8"
      >
        <FaCode className="text-green-400" /> Coding Profiles
      </motion.h2>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform hover:shadow-xl cursor-pointer`}
          >
            <div className="w-16 h-16 mb-4">
              <img
                src={profile.logo}
                alt={profile.platform}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-white">
              {profile.platform}
            </h3>
            <p className="text-gray-300 text-sm mt-2">{profile.problems}</p>
            <p className="text-gray-400 text-xs mt-2 text-center px-3">
              {profile.description}
            </p>
            <div
              className={`mt-4 bg-gradient-to-r ${profile.color} text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90`}
            >
              Visit Profile
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
