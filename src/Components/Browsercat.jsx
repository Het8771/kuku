import React from "react";
import highhangle from "../assets/images/highangle.png";
import closeupshort from "../assets/images/closeupshort.png";
import fullframe from "../assets/images/fullframe.svg";
import setgold from "../assets/images/setgold.png";
import celebration from "../assets/images/celebration.png";
import necklase from "../assets/images/necklase.svg";

const categories = [
  { name: "Rings", image: highhangle },
  { name: "Earrings", image: closeupshort },
  { name: "Necklaces", image: fullframe },
  { name: "Bracelet", image: setgold },
  { name: "Bangles", image: celebration  },
  { name: "Pendants", image: necklase },
];

const CategoriesSection = () => {
  return (
    <section className=" max-w-7xl mx-auto px-7  py-10 bg-white text-left overflow-hidden">
      <h2 className="text-3xl font-semibold text-gray-900 mb-3 text-center">Browse Categories</h2>
      <p className="text-gray-600 mb-6 text-center">Discover our exquisite collection by category</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 ">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover shadow-md transition-transform transform hover:scale-105"
            />
            <p className="mt-2 font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
