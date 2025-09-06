import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="flex gap-6 mt-6 text-4xl text-gray-300"
    >
      <a href="https://github.com/roniganrai" className="hover:text-blue-400">
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/roni-ganrai-20jun2004"
        className="hover:text-blue-400"
      >
        <FaLinkedin />
      </a>
      <a href="mailto:roniganrai2029@gmail.com" className="hover:text-blue-400">
        <FaEnvelope />
      </a>
    </motion.div>
  );
}
