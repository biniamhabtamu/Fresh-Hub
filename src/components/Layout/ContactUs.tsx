import React from "react";
import { Mail, Phone, Send } from "lucide-react";
import { FaTelegram, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const App = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      color: "bg-purple-600/20 border-purple-500/30",
      title: "Email",
      btnText: "BiniamHabtamu320@gmail.com",
      link: "mailto:BiniamHabtamu320@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      color: "bg-green-600/20 border-green-500/30",
      title: "Phone",
      btnText: "+251 99 402 4681",
      link: "tel:+251994024681",
    },
    {
      icon: <FaTelegram size={24} />,
      color: "bg-sky-600/20 border-sky-500/30",
      title: "Telegram",
      btnText: "@bh068",
      link: "https://t.me/bh068",
    },
    {
      icon: <FaInstagram size={24} />,
      color: "bg-pink-600/20 border-pink-500/30",
      title: "Instagram",
      btnText: "@biniamhabtamu320",
      link: "https://www.instagram.com/biniamhabtamu320",
    },
    {
      icon: <FaWhatsapp size={24} />,
      color: "bg-emerald-600/20 border-emerald-500/30",
      title: "WhatsApp",
      btnText: "+251 99 402 4681",
      link: "https://wa.me/251994024681",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 flex flex-col items-center font-sans">
      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mt-8 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">Contact Me</h1>
        <p className="mt-2 text-lg text-gray-400">Quick ways to get in touch ✨</p>
      </motion.div>

      {/* Contact Cards */}
      <div className="w-full max-w-md space-y-4">
        {contactMethods.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`flex items-center justify-between p-4 rounded-2xl shadow-lg backdrop-blur-sm ${item.color} border-t border-r`}
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-black/40 text-white shadow-inner">{item.icon}</div>
              <span className="font-semibold text-white">{item.title}</span>
            </div>
            <span className="text-sm text-gray-300">{item.btnText}</span>
          </motion.a>
        ))}
      </div>

      {/* Message Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-10 w-full max-w-md bg-black/40 rounded-2xl p-5 border border-white/20 backdrop-blur-sm shadow-xl"
      >
        <h2 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
          <Send size={20} className="text-blue-400" /> Send Message
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-gray-900/60 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-gray-900/60 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          />
          <textarea
            rows={4}
            placeholder="Message..."
            className="w-full px-4 py-3 rounded-xl bg-gray-900/60 text-white border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold shadow-md hover:from-blue-700 hover:to-cyan-700 transition"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default App;