import React from 'react';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Component for a styled button with an icon
const IconButton = ({ children, className, ...props }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`inline-flex items-center justify-center font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </motion.a>
);

const App = () => {
  const contactMethods = [
    {
      icon: <Mail className="text-pink-500" />,
      color: "bg-pink-100",
      title: "Email",
      text: "Typically replies within 24 hours.",
      btnText: "BiniamHabtamu320@gmail.com",
      link: "mailto:BiniamHabtamu320@gmail.com",
    },
    {
      icon: <Phone className="text-emerald-500" />,
      color: "bg-emerald-100",
      title: "Phone",
      text: "Available 9AM - 5PM, Mon-Fri.",
      btnText: "+251 99 402 4681",
      link: "tel:+251994024681",
    },
    {
      icon: <FaTelegram className="text-blue-500" />,
      color: "bg-blue-100",
      title: "Telegram",
      text: "Fast responses via direct message.",
      btnText: "@bh068",
      link: "https://t.me/bh068",
    },
    {
      icon: <FaInstagram className="text-purple-500" />,
      color: "bg-purple-100",
      title: "Instagram",
      text: "Follow for updates and DMs.",
      btnText: "@biniamhabtamu320",
      link: "https://www.instagram.com/biniamhabtamu320",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans p-4 sm:p-8">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.8 }}
          className="text-center mb-16 pt-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-tight tracking-tight">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            We're here to help! Whether you have questions or feedback, we'd love to hear from you.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Methods and WhatsApp Button */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                  className="bg-gray-800 rounded-3xl p-6 md:p-8 shadow-xl border border-gray-700 backdrop-blur-sm transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start mb-4">
                    <div className={`${item.color} p-4 rounded-xl mr-4 flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{item.title}</h2>
                      <p className="text-gray-400 text-sm mt-1">{item.text}</p>
                    </div>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-white rounded-xl transition-all font-semibold bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200"
                  >
                    <span className="ml-2">{item.btnText}</span>
                  </a>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="https://wa.me/251994024681"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="w-full text-center px-6 py-4 rounded-2xl bg-[#25D366] text-white font-bold shadow-lg hover:bg-[#128C7E] transition-all flex items-center justify-center transform hover:-translate-y-1"
            >
              <FaWhatsapp className="mr-3" size={24} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          {/* Message Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-700 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-4 rounded-xl mr-4 flex-shrink-0">
                <Send className="text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>
            <form className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-400 mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-700 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01, boxShadow: "0 5px 15px rgba(139, 92, 246, 0.4)" }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-purple-600 text-white rounded-xl font-bold shadow-lg hover:bg-purple-700 transition-all text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
