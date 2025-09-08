import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfoliodata.json";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Gemini API setup
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Roni's AI Assistant. Ask me anything about Roni!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const formatMessage = (text) => {
    if (!text) return "";
    const linkedText = text.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" class="underline text-blue-400 hover:text-blue-300">$1</a>'
    );
    return linkedText
      .replace(/\n\s*\n/g, "<br/>")
      .replace(/(\d+)\.\s/g, "<br/><strong>$1.</strong> ")
      .replace(/- /g, "<br/>• ")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const result = await model.generateContent(
        `You are Roni's AI assistant. Use this portfolio data: ${JSON.stringify(
          portfolioData
        )}. Answer questions about Roni's portfolio. If asked about yourself, respond as "I am Roni's AI Assistant, here to help you to know more about Roni." User asked: ${input}`
      );

      const botMsg = { sender: "bot", text: result.response.text() };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Oops! Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Chat cleared! I'm ready for your next question.",
      },
    ]);
  };

  return (
    <div className="fixed bottom-3 right-2 z-50 flex flex-col items-end">
      {/* Chat Window above button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{
              duration: 0.35,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="mb-3 bg-gray-900/95 w-80 sm:w-96 md:w-[26rem] shadow-2xl rounded-2xl border border-gray-700 p-2 flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Roni's AI Assistant
              </h2>
              <button
                onClick={clearChat}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-xs cursor-pointer"
              >
                Clear
              </button>
            </div>

            {/* Chat Messages */}
            <div
              ref={chatContainerRef}
              className="h-[26rem] sm:h-[28rem] md:h-[30rem] overflow-y-auto p-3 bg-gray-800 rounded-lg mb-3 custom-scrollbar"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`my-2 p-2 rounded-2xl max-w-[80%] break-words ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white ml-auto shadow-lg"
                      : "bg-gray-700 text-gray-200 shadow-sm"
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                />
              ))}
              {loading && (
                <div className="bg-gray-700 text-gray-200 text-sm p-2 rounded-2xl inline-block animate-pulse">
                  Typing...
                </div>
              )}
            </div>

            {/* Input Box */}
            <div className="flex gap-2">
              <input
                className="flex-1 border border-gray-600 rounded-2xl p-2 text-sm bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className={`px-4 rounded-2xl text-white ${
                  loading
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500"
                }`}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fixed Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg cursor-pointer text-xl"
      >
        {isOpen ? "✖" : "💬"}
      </motion.button>
    </div>
  );
}
