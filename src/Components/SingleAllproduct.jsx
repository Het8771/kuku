import { useState } from "react"
import About from "../assets/images/About.png";
import { FaHeart, FaStar } from "react-icons/fa"
import highangle from "../assets/images/highangle.png";
import { CiShoppingCart } from "react-icons/ci"
import Subscribe from "./Subscribe";
import login from "../assets/images/login.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


const ProductDetails = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("18K Gold")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = type => {
    if (type === "increment") {
      setQuantity(quantity + 1)
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  // Update the products array to include more items for the "View All" functionality
  const products = [
    { id: 1, name: "Gold Infinity Ring", price: "$1,299.00" },
    { id: 2, name: "Gold Infinity Ring", price: "$1,299.00" },
    { id: 3, name: "Gold Infinity Ring", price: "$1,299.00" },
    { id: 4, name: "Gold Infinity Ring", price: "$1,299.00" },
    { id: 5, name: "Silver Eternity Band", price: "$899.00" },
    { id: 6, name: "Diamond Solitaire Ring", price: "$2,499.00" },
    { id: 7, name: "Pearl Accent Ring", price: "$1,099.00" },
    { id: 8, name: "Rose Gold Twist Ring", price: "$1,199.00" },
    { id: 9, name: "Sapphire Halo Ring", price: "$1,899.00" },
    { id: 10, name: "Emerald Cut Ring", price: "$2,199.00" },
    { id: 11, name: "Ruby Cluster Ring", price: "$1,799.00" },
    { id: 12, name: "Platinum Wedding Band", price: "$1,599.00" }
  ]

  // Replace the existing visibleCount state and handleShowMore function with this improved version
  const [visibleProducts, setVisibleProducts] = useState(4) // Initially show 4 products
  const [showAllProducts, setShowAllProducts] = useState(false)

  const handleViewAll = () => {
    setShowAllProducts(true)
    setVisibleProducts(products.length)
  }

  // State to manage active index
  const [activeIndex, setActiveIndex] = useState(null)

  // Function to handle touch event
  const handleTouch = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const [activeTab, setActiveTab] = useState("description")

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      date: "March 20, 2025",
      comment: "Excellent product!"
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      date: "March 22, 2025",
      comment: "Very good, but could be improved."
    }
  ])

  const [showModal, setShowModal] = useState(false)
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" })

  const handleRatingChange = rating => {
    setNewReview({ ...newReview, rating })
  }

  const handleSubmit = () => {
    if (newReview.comment.trim() === "" || newReview.rating === 0) {
      alert("Please provide a rating and comment.")
      return
    }

    const newReviewEntry = {
      id: reviews.length + 1,
      name: "Anonymous", // Replace with authenticated user name if available
      rating: newReview.rating,
      date: new Date().toLocaleDateString(),
      comment: newReview.comment
    }

    setReviews([...reviews, newReviewEntry])
    setShowModal(false)
    setNewReview({ rating: 0, comment: "" })
  }

  return (
    <>
    <Navbar/>
      <div>
        <div className="max-w-7xl mx-auto p-4 md:p-8">
          {/* Breadcrumb */}
          <p className="text-gray-500 mb-4">
            Home / Product / Gold Infinity Ring
          </p>

          {/* Update the main product grid to be more mobile-friendly */}
          {/* Replace the grid div with this */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {/* Left Section: Product Images */}
            <div>
              <div className="w-full h-[550px] overflow-hidden ">
                <img
                  src={About}
                  alt="Gold Infinity Ring"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnail Images */}
              <div className="flex gap-4 mt-4">
                {[1, 2, 3, 4].map((_, index) => (
                  <div
                    key={index}
                    className="w-[80px] h-[80px] border border-gray-300 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={login}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section: Product Details */}
            <div>
              <h1 className="text-2xl font-semibold">Gold Infinity Ring</h1>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
                <p className="text-gray-500">(42 Reviews)</p>
              </div>
              <p className="text-purple-600 text-xl font-bold mt-4">
                ₹1,222.99
              </p>

              {/* Product Description */}
              <p className="text-gray-600 mt-4">
                This exquisite piece features a stunning design crafted from the
                finest 18K gold. The intricate detailing and premium
                craftsmanship make it a timeless addition to any jewelry
                collection.
              </p>

              {/* Update the Material Selection section to be more mobile-friendly */}
              {/* Replace the Material Selection section with this */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-700">Material</h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {["18K Gold", "22K Gold", "Rose Gold"].map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`px-3 py-2 border rounded-md text-sm ${
                        selectedMaterial === material
                          ? "border-purple-600 bg-purple-100 text-purple-600"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Update the Size Selection section to be more mobile-friendly */}
              {/* Replace the Size Selection section with this */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-700">Size</h3>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  {["XS", "S", "M", "L", "XL"].map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 border rounded-md ${
                        selectedSize === size
                          ? "border-purple-600 bg-purple-100 text-purple-600"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-700">Quantity</h3>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="px-[10px] py-[5px] border border-gray-300 rounded-md text-lg font-semibold hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="px-[10px] py-[5px] border border-gray-300 rounded-md text-lg font-semibold hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Update the product details section to be more mobile-friendly */}
              {/* Replace the "Add to Cart and Buy Now Buttons" section with this */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full">
                <Link to ={'/Cart'}><button className="w-full px-4 py-3 bg-purple-600 text-white border border-purple-600 font-medium rounded-md hover:bg-purple-700 transition duration-200 flex items-center justify-center">
                  <CiShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button></Link>
                <Link to ="/"><button className="w-full px-4 py-3 border border-purple-600 bg-white text-purple-600 hover:text-white font-medium rounded-md hover:bg-purple-700 transition duration-200">
                  Buy Now
                </button></Link>
              </div>

              {/* Additional Information */}
              <ul className="list-disc pl-[20px] mt-[20px] text-sm text-gray-600 space-y-[5px]">
                <li>Free shipping on orders over ₹499</li>
                <li>2-year warranty on all products</li>
                <li>30-day return policy</li>
              </ul>
            </div>
          </div>

          {/* Update the tab navigation to be more mobile-friendly */}
          {/* Replace the tab navigation section with this */}
          <div className="border-b border-gray-200 mt-8 overflow-x-auto">
            <nav className="flex space-x-4 md:space-x-8 whitespace-nowrap">
              {["Description", "Specifications", "Reviews (42)"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`py-3 px-1 text-sm font-medium ${
                    activeTab === tab.toLowerCase()
                      ? "text-purple-600 border-b-2 border-purple-600"
                      : "text-gray-500 hover:text-purple-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mt-6">
            {activeTab === "description" && (
              <div>
                <p className="text-gray-700">
                  This exquisite piece features a stunning design crafted from
                  the finest 18K gold. The intricate detailing and premium
                  craftsmanship make it a timeless addition to any jewelry
                  collection.
                </p>
                <p className="text-gray-700 mt-4">
                  Each piece is meticulously handcrafted by our skilled
                  artisans, ensuring exceptional quality and attention to
                  detail. The elegant design combines traditional techniques
                  with contemporary aesthetics, resulting in a piece that is
                  both classic and modern.
                </p>
                <p className="text-gray-700 mt-4">
                  Whether worn for special occasions or as an everyday luxury,
                  this piece is designed to make a statement while offering
                  comfort and durability. The high-quality gold ensures a
                  lustrous finish that will maintain its beauty for years to
                  come.
                </p>
              </div>
            )}
            {activeTab === "specifications" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                {/* Left Column */}
                <div>
                  <p className="text-gray-700">
                    <span className="font-medium">Material:</span> 18K Gold
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Dimensions:</span> 15mm x 10mm
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Hallmark:</span> Yes
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Warranty:</span> 2 Years
                  </p>
                </div>

                {/* Right Column */}
                <div>
                  <p className="text-gray-700">
                    <span className="font-medium">Weight:</span> 8.5g
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Purity:</span> 750/1000
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Certification:</span> BIS
                    Certified
                  </p>
                  <p className="text-gray-700 mt-2">
                    <span className="font-medium">Country of Origin:</span>{" "}
                    India
                  </p>
                </div>
              </div>
            )}
            {activeTab === "reviews (42)" && (
              <div className="max-w-7xl mx-auto p-4 md:p-8">
                {/* Reviews Section */}
                <h2 className="text-2xl font-semibold mb-6">Reviews</h2>

                {/* Write a Review Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setShowModal(true)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors duration-200"
                  >
                    Write a Review
                  </button>
                </div>

                {/* Reviews List */}
                {reviews.map(review => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6 mb-6"
                  >
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center gap-x-2 mt-1">
                      {/* Star Rating */}
                      <span className="text-purple-600 text-lg">
                        {"★".repeat(review.rating)}
                        {"☆".repeat(5 - review.rating)}
                      </span>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                    <p className="text-gray-700 mt-3">{review.comment}</p>
                  </div>
                ))}

                {/* Modal for Writing a Review */}
                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
                      {/* Close Button */}
                      <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                      >
                        ✕
                      </button>

                      <h3 className="text-lg font-medium mb-4">
                        Write a Review
                      </h3>

                      {/* Star Rating */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Rating
                        </label>
                        <div className="flex items-center space-x-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => handleRatingChange(i + 1)}
                              className={`text-xl ${
                                i + 1 <= newReview.rating
                                  ? "text-purple-600"
                                  : "text-gray-300"
                              }`}
                            >
                              <FaStar />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Feedback Input */}
                      <div className="mb-4">
                        <label
                          htmlFor="comment"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Feedback*
                        </label>
                        <textarea
                          id="comment"
                          value={newReview.comment}
                          onChange={e =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value
                            })
                          }
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                          placeholder="Write your feedback here..."
                        ></textarea>
                      </div>

                      {/* Save Button */}
                      <button
                        onClick={handleSubmit}
                        className="bg-purple-600 text-white px-4 py-2 rounded-md w-full font-medium hover:bg-purple-700 transition-colors duration-200"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Replace the entire Recommendations Section with this code */}
          <div className="mt-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">You May Also Like</h2>
              {!showAllProducts && (
                <button
                  onClick={handleViewAll}
                  className="text-purple-600 text-sm font-medium hover:underline"
                >
                  View All →
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.slice(0, visibleProducts).map((product, index) => (
                <div
                  key={product.id}
                  className="relative bg-white p-2 md:p-4 border border-purple-200 hover:border-purple-600 rounded-lg shadow-sm hover:shadow-md group overflow-hidden transition-all duration-300"
                  onTouchStart={() => handleTouch(index)}
                >
                  {/* Product Image */}
                  <div className="relative w-full h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] overflow-hidden rounded-md">
                    <img
                      src={highangle}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[300ms]"
                    />
                    {/* Wishlist Button - Visible on mobile without hover */}
                    <button className="absolute top-[10px] right-[10px] bg-purple-600 p-[6px] md:p-[8px] rounded-full md:opacity-0 opacity-70 transform scale-[0.9] group-hover:scale-[1] group-hover:opacity-100 transition-all duration-[300ms]">
                      <FaHeart className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] text-white" />
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

                  {/* Add to Cart Button - Always visible on mobile */}
                  <button className="w-full bg-purple-600 text-white py-[6px] md:py-[10px] rounded-lg flex items-center justify-center gap-x-[6px] md:gap-x-[10px] text-xs md:text-sm md:opacity-0 transform md:translate-y-[20px] group-hover:translate-y-[0] group-hover:opacity-100 transition-all duration-[300ms]">
                    <CiShoppingCart className="w-[14px] h-[14px] md:w-[16px] md:h-[16px]" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
            {/* Mobile "View More" button */}
            {!showAllProducts && visibleProducts < products.length && (
              <div className="mt-6 flex justify-center md:hidden">
                <button
                  onClick={handleViewAll}
                  className="bg-purple-100 text-purple-600 border border-purple-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-200 transition-colors duration-200"
                >
                  View All Products
                </button>
              </div>
            )}
          </div>
        </div>
        {/* <Subscribe/> */}
      </div>
      <Footer/>
    </>
  )
}

export default ProductDetails;

