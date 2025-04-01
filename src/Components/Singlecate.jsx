
import { useState } from "react"
import { Heart, ShoppingCart } from "lucide-react"
import highangle from "../assets/images/highangle.png";
import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Sample Product Data
const products = [
  { id: 1, name: "Gold Infinity Ring", price: "$1,299.00"},
  { id: 2, name: "Gold Infinity Ring", price: "$1,299.00" },
  { id: 3, name: "Gold Infinity Ring", price: "$1,299.00" },
  { id: 4, name: "Gold Infinity Ring", price: "$1,299.00" },
  { id: 5, name: "Gold Infinity Ring", price: "$1,299.00" },
  { id: 6, name: "Gold Infinity Ring", price: "$1,299.00" },
  { id: 7, name: "Silver Eternity Band", price: "$899.00" },
  { id: 8, name: "Diamond Solitaire Ring", price: "$2,499.00" },
  { id: 9, name: "Pearl Accent Ring", price: "$1,099.00" },
  { id: 10, name: "Rose Gold Twist Ring", price: "$1,199.00" },
  { id: 11, name: "Sapphire Halo Ring", price: "$1,899.00" },
  { id: 12, name: "Platinum Wedding Band", price: "$1,599.00" }
]

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  // State for visible products and show all functionality
  const [visibleProducts, setVisibleProducts] = useState(6) // Initially show 6 products
  const [showAllProducts, setShowAllProducts] = useState(false)

  const handleTouch = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  // Function to handle View All button click
  const handleViewAll = () => {
    setShowAllProducts(true)
    setVisibleProducts(products.length)
  }

  return (
    <>
    <Navbar/>
    <div>
      <div className="max-w-7xl mx-auto p-3 md:p-8">
        {/* Breadcrumb - More compact on mobile */}
        <p className="text-gray-500 text-sm mb-2 md:mb-4">Home / Rings</p>

        {/* Page Title - Responsive font size */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">
          Rings
        </h1>

        {/* View All header section */}
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-lg md:text-xl font-semibold">Our Collection</h2>
          {!showAllProducts && products.length > visibleProducts && (
            <button
              onClick={handleViewAll}
              className="text-purple-600 text-sm font-medium hover:underline hidden md:block cursor-pointer"
            >
              View All →
            </button>
          )}
        </div>

        {/* Product Grid - Smaller gap on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.slice(0, visibleProducts).map((product, index) => (
            <div
              key={product.id}
              className="relative bg-white p-2 md:p-4 border border-purple-200 hover:border-purple-600  shadow-sm hover:shadow-md group overflow-hidden transition-all duration-300"
              onTouchStart={() => handleTouch(index)}
            >
              {/* Product Image - Responsive height */}
              <div className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] overflow-hidden">
                <img
                  src={highangle}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[300ms]"
                />
                {/* Wishlist Button - Visible on mobile without hover */}
                <button className="absolute top-[6px] right-[6px] md:top-[10px] md:right-[10px] bg-purple-600 p-[6px] md:p-[8px] rounded-full md:opacity-0 opacity-70 transform scale-[0.9] group-hover:scale-[1] group-hover:opacity-100 transition-all duration-[300ms]">
                  <Link to ="/Wishlist"><Heart className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] text-white" /></Link>
                </button>
              </div>

              {/* Product Details - Smaller padding and font on mobile */}
              <div className="p-2 md:p-4 text-center">
                <h3 className="font-medium text-xs sm:text-sm md:text-base truncate">
                  {product.name}
                </h3>
                <p className="text-purple-600 font-semibold text-xs sm:text-sm">
                  {product.price}
                </p>
              </div>

              {/* Add to Cart Button - Always visible on mobile */}
              <Link to ="/Cart"><button className="w-full bg-purple-600 text-white py-[6px] md:py-[10px] flex items-center justify-center gap-x-[6px] md:gap-x-[10px] text-xs md:text-sm md:opacity-0 md:transform md:translate-y-[20px] group-hover:translate-y-[0] group-hover:opacity-100 transition-all duration-[300ms] cursor-pointer">
              <ShoppingCart className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                <span>Add to Cart</span>
              </button></Link>
            </div>
          ))}
        </div>

        {/* Mobile "View More" button - Styled like in ProductDetails */}
        {!showAllProducts && visibleProducts < products.length && (
          <div className="mt-6 flex justify-center md:hidden">
            <button
              onClick={handleViewAll}
              className="bg-purple-100 text-purple-600 border border-purple-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-200 transition-colors duration-200 w-full max-w-xs"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Add padding at the bottom to account for the fixed filter bar */}
        <div className="h-16 md:h-0"></div>
      </div>
      </div>
      <Subscribe />
      <Footer/>
    </>
  )
}

export default ProductPage
