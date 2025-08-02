import React from 'react';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-[#fdf4ff] to-[#ffe4e6] py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 drop-shadow-sm">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-3 max-w-2xl mx-auto">
            We'd love to hear from you! Choose your preferred method below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Reusable Card */}
              {[
                {
                  icon: <Mail className="text-blue-600" />,
                  color: "bg-blue-100",
                  title: "Email",
                  text: "Typically replies within 24 hours",
                  btnText: "BiniamHabtamu320@gmail.com",
                  link: "mailto:BiniamHabtamu320@gmail.com",
                  bg: "bg-blue-600",
                  hover: "hover:bg-blue-700",
                },
                {
                  icon: <Phone className="text-green-600" />,
                  color: "bg-green-100",
                  title: "Phone",
                  text: "Available 9AM - 5PM, Mon–Fri",
                  btnText: "+251 99 402 4681",
                  link: "tel:+251994024681",
                  bg: "bg-green-600",
                  hover: "hover:bg-green-700",
                },
                {
                  icon: <FaTelegram className="text-blue-500" />,
                  color: "bg-blue-100",
                  title: "Telegram",
                  text: "Fast responses via direct message",
                  btnText: "@bh068",
                  link: "https://t.me/bh068",
                  bg: "bg-blue-500",
                  hover: "hover:bg-blue-600",
                },
                {
                  icon: <FaInstagram className="text-pink-600" />,
                  color: "bg-pink-100",
                  title: "Instagram",
                  text: "Follow for updates and DMs",
                  btnText: "@biniamhabtamu320",
                  link: "https://www.instagram.com/biniamhabtamu320",
                  bg: "bg-gradient-to-r from-pink-500 to-purple-600",
                  hover: "hover:from-pink-600 hover:to-purple-700",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-all hover:shadow-2xl hover:-translate-y-1 duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className={`${item.color} p-3 rounded-xl mr-4`}>
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                      <p className="text-gray-500 text-sm mt-1">{item.text}</p>
                    </div>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full px-4 py-3 text-white rounded-lg transition-colors text-sm font-medium ${item.bg} ${item.hover}`}
                  >
                    {item.icon}
                    <span className="ml-2">{item.btnText}</span>
                  </a>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/251994024681"
              target="_blank"
              rel="noopener noreferrer"
              className="block md:hidden w-full text-center px-4 py-3 rounded-xl bg-[#25D366] text-white font-medium shadow-md hover:bg-[#128C7E] transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Message Form */}
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                <Send className="text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
            </div>
            <form className="space-y-5">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder={`Your ${field}`}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <MapPin className="text-purple-600" />,
              color: "bg-purple-100",
              title: "Our Location",
              content: (
                <>
                  Addis Ababa, Ethiopia <br /> Serving clients worldwide
                </>
              ),
            },
            {
              icon: <Clock className="text-amber-600" />,
              color: "bg-amber-100",
              title: "Working Hours",
              content: (
                <>
                  Mon - Fri: 9:00 AM - 5:00 PM <br />
                  Sat: 10:00 AM - 2:00 PM <br />
                  Sun: Closed
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-md p-6 sm:p-7 transition hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className={`${item.color} p-3 rounded-xl mr-4`}>{item.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              </div>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
