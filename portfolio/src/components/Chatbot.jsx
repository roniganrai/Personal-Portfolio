import { useState, useEffect, useRef } from "react";
import axios from "axios";
import portfolioData from "../data/portfoliodata.json";

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

  // ✅ Format AI response and make URLs clickable
  const formatMessage = (text) => {
    if (!text) return "";

    // Trim each line and remove multiple empty lines
    let lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
    let cleanText = lines.join("\n");

    // Make links clickable
    cleanText = cleanText.replace(
      /(https?:\/\/[^\s]+)/g,
      '<a href="$1" target="_blank" class="underline text-blue-400 hover:text-blue-300">$1</a>'
    );

    // Replace bullets and numbering
    cleanText = cleanText.replace(/^(\d+)\.\s/gm, "<br/><strong>$1.</strong> ");
    cleanText = cleanText.replace(/^- /gm, "• ");

    // Bold formatting
    cleanText = cleanText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Replace remaining newlines with <br/>
    cleanText = cleanText.replace(/\n/g, "<br/>");

    return cleanText;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are Roni's AI assistant. Introduce yourself as "Roni's AI Assistant". Only answer the specific question asked, Do not add extra details unless explicitly requested. Use the following data to answer questions:Use this data:\n\n**Portfolio Data:** ${JSON.stringify(
                portfolioData
              )}\n\nAlways respond with structured answers using bullet points or numbered lists.`,
            },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const botMsg = {
        sender: "bot",
        text: response.data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: " Oops! Something went wrong. Please try again later.",
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
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 cursor-pointer"
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="bg-gray-900/95 w-80 sm:w-96 md:w-[26rem] shadow-2xl rounded-2xl border border-gray-700 p-4 animate-fade-in flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-full  opacity-70 blur-lg transition duration-500"></div>
                <img
                  src="/chat-bot-icon.webp"
                  alt="Roni"
                  className="relative w-10 h-10 rounded-full border-2 border-gray-800 object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Roni's AI Assistant
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-xs cursor-pointer transition transform hover:scale-105"
              >
                Clear
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-red-500 hover:text-red-400 text-xl cursor-pointer transition transform hover:scale-110"
              >
                ✖
              </button>
            </div>
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
        </div>
      )}
    </div>
  );
}
