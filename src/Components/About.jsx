import React from "react";
import About from "../assets/images/About.png";
import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="max-w-7xl mx-auto p-6 md:p-10">
          {/* Header */}
          <h1 className="text-3xl font-semibold">About Us</h1>
          <Link to="/"><p className="text-gray-500">Home / About</p></Link>

          {/* Our Story Section */}
          <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
            <img
              src={About}
              alt="Jewelry"
              className="w-full md:w-1/2 h-80 object-cover shadow-md"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="text-gray-600 mt-4">
                Founded in 2010, KUKU JEWELS began as a small family-owned business
                with a passion for crafting exquisite gold jewelry. What started as
                a modest workshop has now grown into a renowned brand synonymous
                with quality, craftsmanship, and timeless elegance.
              </p>
              <p className="text-gray-600 mt-2">
                Our founder, Amelia Kuku, believed that jewelry should not only be
                beautiful but also tell a story. This philosophy continues to guide
                our design process, ensuring that each piece we create carries
                meaning and emotion.
              </p>
            </div>
          </div>

          {/* Commitment to Excellence */}
          <h2 className="text-2xl font-semibold text-center mt-16">
            Our Commitment to Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                id: 1,
                title: "Quality Materials",
                description:
                  "We use only the finest 18K and 22K gold, ethically sourced gemstones, and diamonds in all our creations.",
              },
              {
                id: 2,
                title: "Master Craftsmanship",
                description:
                  "Our skilled artisans combine traditional techniques with modern innovation to create jewelry of exceptional quality.",
              },
              {
                id: 3,
                title: "Ethical Practices",
                description:
                  "We are committed to responsible sourcing and sustainable practices throughout our supply chain.",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="p-6 border border-purple-400 shadow-md text-center"
              >
                <div className="bg-purple-100 text-purple-600 w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full mx-auto">
                  {item.id}
                </div>
                <h3 className="font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Our Vision */}
          <h2 className="text-2xl font-semibold text-center mt-16">Our Vision</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
            At KUKU JEWELS, we envision a world where jewelry is not just an
            accessory but a meaningful expression of one's personality and values.
            We strive to create pieces that become cherished heirlooms, passed down
            through generations, carrying with them stories and memories.
          </p>
        </div>
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};
export default AboutUs;
