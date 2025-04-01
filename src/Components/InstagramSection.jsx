import React from "react";
import { FaInstagram } from "react-icons/fa";
import highhangle from "../assets/images/highangle.png";
import closeupshort from "../assets/images/closeupshort.png";
import fullframe from "../assets/images/fullframe.svg";
import setgold from "../assets/images/setgold.png";
import celebration from "../assets/images/celebration.png";
import necklase from "../assets/images/necklase.svg";

const images = [highhangle, closeupshort, fullframe, setgold, celebration, necklase];

const InstagramSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Follow Us on Instagram</h2>
        <p className="text-gray-600 text-lg mb-6">@kukujewels</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-center">
          {images.map((image, index) => (
            <div key={index} className="relative w-full aspect-square overflow-hidden group">
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaInstagram className="text-white text-4xl" />
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 bg-purple-600 text-white px-6 sm:px-12 py-2 text-lg hover:bg-purple-700 transition">
          View Instagram
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
