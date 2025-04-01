import React from "react";
import highangle from "../assets/images/highangle.png";
import { div } from "framer-motion/client";
import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const categories = [
  "Rings", "Earrings", "Necklaces", "Bracelets", "Bangles", "Pendants", "Chains", "Anklets"
];

const CategoryPage = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-semibold">Browse Categories</h1>
      <Link to ="/"><p className="text-gray-500">Home / Category</p></Link>
      
      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 ">
        {categories.map((category, index) => (
          <Link to ="/Singlecate"><div key={index} className="relative bg-gray-200  overflow-hidden shadow-md ">
          <img 
              src={highangle}
              alt={category} 
              className="w-full h-50 object-cover bg-green-200 bg-opacity-100"
            />
            <div className="absolute inset-0  flex flex-col items-center justify-center text-white">
              <h3 className="text-lg font-semibold">{category}</h3>
              <p className="text-sm">42 Product</p>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
    <Subscribe/>
    </div>
    <Footer/>
    </>
  );
};

export default CategoryPage;