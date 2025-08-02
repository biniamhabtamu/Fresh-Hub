import React from 'react';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';
import { FaTelegram, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-700 mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Methods */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Email</h2>
                      <p className="text-gray-500 text-sm sm:text-base mt-1">
                        Typically replies within 24 hours
                      </p>
                    </div>
                  </div>
                  <a 
                    href="mailto:BiniamHabtamu320@gmail.com" 
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    BiniamHabtamu320@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start mb-4">
                    <div className="bg-green-100 p-3 rounded-xl mr-4">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Phone</h2>
                      <p className="text-gray-500 text-sm sm:text-base mt-1">
                        Available 9AM - 5PM, Monday to Friday
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a 
                      href="tel:+251994024681" 
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
                    >
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      +251 99 402 4681
                    </a>
                    <a 
                      href="https://wa.me/251994024681" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors text-sm sm:text-base"
                    >
                      <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Telegram Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <FaTelegram className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Telegram</h2>
                      <p className="text-gray-500 text-sm sm:text-base mt-1">
                        Fast responses via direct message
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://t.me/bh068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                  >
                    <FaTelegram className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    @bh068
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6 sm:p-7">
                  <div className="flex items-start mb-4">
                    <div className="bg-pink-100 p-3 rounded-xl mr-4">
                      <FaInstagram className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Instagram</h2>
                      <p className="text-gray-500 text-sm sm:text-base mt-1">
                        Follow for updates and DMs
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://www.instagram.com/biniamhabtamu320?igsh=MXU5NWY2NjM1eDZkNQ==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-colors text-sm sm:text-base"
                  >
                    <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    @biniamhabtamu320
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                  <Send className="h-6 w-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Send a Message</h2>
              </div>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-7">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Our Location</h2>
            </div>
            <p className="text-gray-600">
              Based in Addis Ababa, Ethiopia<br />
              Serving clients worldwide
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 sm:p-7">
            <div className="flex items-center mb-4">
              <div className="bg-amber-100 p-3 rounded-xl mr-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">Working Hours</h2>
            </div>
            <p className="text-gray-600">
              Monday - Friday: 9:00 AM - 5:00 PM<br />
              Saturday: 10:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;