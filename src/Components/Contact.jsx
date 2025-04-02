import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 md:p-10">
        {/* Header */}
        <h1 className="text-3xl font-semibold">Contact Us</h1>
        <Link to="/"><p className="text-gray-500">Home / Contact Us</p></Link>

        {/* Description */}
        <p className="text-gray-600 mt-4">
          Get in touch with our team for inquiries about our products and services.
        </p>

        {/* Contact Section */}
        <div className="mt-10 flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div>
                <label className="block font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-purple-500 outline-none "
                />
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-purple-500  outline-none"
                ></textarea>
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 w-full hover:bg-purple-700">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
            {/* Icons */}
            <div className="flex space-x-4 mb-4">
              <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
                <FaPhoneAlt />
              </div>
              <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
                <FaEnvelope />
              </div>
              <div className="bg-purple-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl">
                <FaMapMarkerAlt />
              </div>
            </div>

            {/* Google Map */}
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-80 rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
