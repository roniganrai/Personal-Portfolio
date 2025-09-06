import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import SocialLinks from "./SocialLinks";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          alert("❌ Failed to send message. Try again!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8"
      >
        Contact Me
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-300 text-lg max-w-xl text-center mb-12"
      >
        Have a project in mind or just want to say hi? Drop me a message and
        let's connect!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Left Section - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-gray-800/80 backdrop-blur-lg p-5 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/40 transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-white mb-5">
            Get in Touch
          </h3>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 text-xl" />
              <p className="text-gray-300">roniganrai2029@gmail.com.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-400 text-xl" />
              <p className="text-gray-300">+91 7001736980</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
              <p className="text-gray-300">Kolkata, India</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-5">
            <SocialLinks />
          </div>
        </motion.div>

        {/* Right Section - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-gray-800/80 backdrop-blur-lg p-5 rounded-xl shadow-lg border border-gray-700 hover:shadow-purple-500/40 transition-shadow"
        >
          <h3 className="text-2xl font-semibold text-white mb-5">
            Send a Message
          </h3>
          <div className="space-y-3">
            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-blue-500 transition"
              required
            ></textarea>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:shadow-purple-500/50 transition"
            >
              {loading ? "Sending..." : "Send Message "}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
