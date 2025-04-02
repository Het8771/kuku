import React from "react";
import img from "../assets/images/Vector.png";
import img2 from "../assets/images/Vector (1).png";
import img3 from "../assets/images/Vector (2).png";
import logof from "../assets/images/logof.svg";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-8 mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline Section */}
          <div>
            <Link to="/"><img src={logof} alt="Gracy Jewel Logo" className="" /></Link>
            <p className="mt-4">
              Crafting timeless gold jewelry pieces that celebrate life's
              precious moments.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a
                href="https://www.instagram.com/accounts/login/?hl=en"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt="Instagram"
                  className="bg-white p-2 rounded-full w-8 h-8 object-contain "
                />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img2 || "/placeholder.svg"}
                  alt="whatsapp"
                  className="bg-white p-2 rounded-full w-8 h-8 object-contain"
                />
              </a>
              <a
                href="https://www.facebook.com/yourprofilename"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img3 || "/placeholder.svg"}
                  alt="facebook"
                  className="bg-white p-2 rounded-full w-8  h-8 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Allproduct" className="">
                  All Product
                </Link>
              </li>
              <li>
                <Link to="/Category" className="">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="##" className="">
                  Track Order
                </a>
              </li>
              <li>
                <a href="##" className="">
                  Return & Exchange
                </a>
              </li>
              <li>
                <a href="##" className="">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="##" className="">
                  FAQs
                </a>
              </li>
              <li>
                <a href="##" className="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Jewelry Lane, Gold District</p>
            <p>New York, NY 10001</p>
            <p>Email: info@kukujewels.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 border-t border-purple-400 pt-4">
          © 2025 KUKU JEWELS. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default footer;