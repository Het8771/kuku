import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import highangle from "../assets/images/highangle.png";

const products = [
  { id: 1, name: "Gold Infinity Ring", price: "$1,299.00" },
  { id: 2, name: "Silver Eternity Band", price: "$899.00" },
  { id: 3, name: "Diamond Solitaire Ring", price: "$2,499.00" },
  { id: 4, name: "Pearl Accent Ring", price: "$1,099.00" },
];

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Initialize navigate function

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleViewAll = () => {
    navigate("/Allproduct"); // Navigate to All Product page
  };

  return (
    <div className="bg-slate-100">
      <div className="max-w-7xl mx-auto p-3 md:p-8">
        {/* Header Section with "View All" aligned to the end */}
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-3">Best Sellers</h3>
            <p className="mt-3">Trending now! Shop our most-loved best sellers today.</p>
          </div>
          <button onClick={handleViewAll} className="cursor-pointer">
            View All →
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative bg-white p-2 md:p-4 border border-purple-200 hover:border-purple-600 shadow-sm hover:shadow-md group overflow-hidden transition-all duration-300"
              onTouchStart={() => handleTouch(index)}
            >
              {/* Product Image */}
              <div className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] overflow-hidden">
                <img
                  src={highangle}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[300ms]"
                />
                {/* Wishlist Button */}
                <button className="absolute top-[6px] right-[6px] md:top-[10px] md:right-[10px] bg-purple-600 p-[6px] md:p-[8px] rounded-full md:opacity-0 opacity-70 transform scale-[0.9] group-hover:scale-[1] group-hover:opacity-100 transition-all duration-[300ms]">
                  <Heart className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] text-white" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-2 md:p-4 text-center">
                <h3 className="font-medium text-xs sm:text-sm md:text-base truncate">
                  {product.name}
                </h3>
                <p className="text-purple-600 font-semibold text-xs sm:text-sm">
                  {product.price}
                </p>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-purple-600 text-white py-[6px] md:py-[10px] flex items-center justify-center gap-x-[6px] md:gap-x-[10px] text-xs md:text-sm md:opacity-0 md:transform md:translate-y-[20px] group-hover:translate-y-[0] group-hover:opacity-100 transition-all duration-[300ms]">
                <ShoppingCart className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                <span>Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;