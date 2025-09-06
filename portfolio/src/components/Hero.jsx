import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";
import SocialLinks from "./SocialLinks";
import BottomNav from "./BottomNav";

export default function Hero() {
  return (
    <section className="flex flex-col items-center bg-gray-900 justify-center text-center min-h-[100vh] px-4">
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        className="relative group"
      >
        {/* Glowing Border Effect */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-70 group-hover:opacity-100 blur-lg transition duration-500"></div>

        {/* Profile Image */}
        <img
          src={profile}
          alt="Profile"
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-gray-800 shadow-xl object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-6 text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        Hi, I'm RONI GANRAI
      </motion.h1>

      {/* Typing Effect */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-2 text-xl md:text-2xl font-medium text-gray-300"
      >
        <Typewriter
          words={[
            "Frontend Developer",
            "React Enthusiast",
            "Turning ideas into interactive experiences",
            "Building for the web of tomorrow",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h2>

      {/* Short Description */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-3 text-lg md:text-xl text-gray-300 max-w-xl"
      >
        Aspiring Full Stack Developer. I am always looking for new challenges
        and opportunities to learn and grow. I enjoy building responsive,
        user-friendly web applications and eager to apply my skills in
        real-world projects.
      </motion.p>

      {/* ✅ Social Links Component */}
      <SocialLinks />
      <motion.a
        href="/resume.pdf" // 🔹 Place your resume inside the public folder
        download
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-4 mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-purple-500/50 font-semibold text-lg"
      >
        📄 Download Resume
      </motion.a>
      <BottomNav />
    </section>
  );
}
