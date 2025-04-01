import { useState, useEffect, useRef } from "react"
import { FaHeart } from "react-icons/fa"
import { CiShoppingCart } from "react-icons/ci"
import { ChevronDown, ChevronUp, FilterIcon, X } from "lucide-react"
import highangle from "../assets/images/highangle.png"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer";
import Subscribe from "./Subscribe"

// Extended product data with categories and materials
const allProducts = [
  {
    id: 1,
    name: "Gold Infinity Ring",
    price: "$1,299.00",
    priceValue: 1299,
    category: "Rings",
    material: "18K Gold",
    image: highangle
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    price: "$899.00",
    priceValue: 899,
    category: "Earrings",
    material: "18K Gold",
    image: highangle
  },
  {
    id: 3,
    name: "Pearl Necklace",
    price: "$1,499.00",
    priceValue: 1499,
    category: "Necklaces",
    material: "White Gold",
    image: highangle
  },
  {
    id: 4,
    name: "Rose Gold Bracelet",
    price: "$799.00",
    priceValue: 799,
    category: "Bracelets",
    material: "Rose Gold",
    image: highangle
  },
  {
    id: 5,
    name: "Gold Bangle Set",
    price: "$1,199.00",
    priceValue: 1199,
    category: "Bangles",
    material: "22K Gold",
    image: highangle
  },
  {
    id: 6,
    name: "Heart Pendant",
    price: "$599.00",
    priceValue: 599,
    category: "Pendants",
    material: "Rose Gold",
    image: highangle
  }
]

const categories = [
  "Rings",
  "Earrings",
  "Necklaces",
  "Bracelets",
  "Bangles",
  "Pendants"
]
const materials = ["18K Gold", "22K Gold", "Rose Gold", "White Gold"]

const ProductPage = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const productRefs = useRef([])

  // Filter states
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Handle click outside to dismiss active product on mobile
  useEffect(() => {
    if (!isMobile) return

    const handleClickOutside = event => {
      if (
        activeIndex !== null &&
        !productRefs.current[activeIndex]?.contains(event.target)
      ) {
        setActiveIndex(null)
      }
    }

    document.addEventListener("touchstart", handleClickOutside)
    return () => document.removeEventListener("touchstart", handleClickOutside)
  }, [activeIndex, isMobile])

  // Apply filters whenever filter criteria change
  useEffect(() => {
    applyFilters()
  }, [selectedCategories, selectedMaterials])

  const handleProductInteraction = index => {
    if (isMobile) {
      // On mobile, toggle the active state
      setActiveIndex(activeIndex === index ? null : index)
    }
    // On desktop, hover effects are handled by CSS
  }

  const toggleFilter = () => {
    setFilterOpen(!filterOpen)
  }

  const handleCategoryChange = category => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const handleMaterialChange = material => {
    setSelectedMaterials(prev => {
      if (prev.includes(material)) {
        return prev.filter(mat => mat !== material)
      } else {
        return [...prev, material]
      }
    })
  }

  const applyFilters = () => {
    let filtered = [...allProducts]

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.category)
      )
    }

    // Filter by materials
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter(product =>
        selectedMaterials.includes(product.material)
      )
    }

    // Filter by price range
    if (minPrice !== "" || maxPrice !== "") {
      filtered = filtered.filter(product => {
        const price = product.priceValue
        const min = minPrice === "" ? 0 : Number.parseFloat(minPrice)
        const max =
          maxPrice === ""
            ? Number.POSITIVE_INFINITY
            : Number.parseFloat(maxPrice)
        return price >= min && price <= max
      })
    }

    setFilteredProducts(filtered)
  }

  const handlePriceApply = () => {
    applyFilters()
  }

  return (
    <>
    <Navbar/>
    <div>
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-semibold">All Products</h1>
        <Link to ="/"><p className="text-gray-500">Home / All Products</p></Link>

        {/* Mobile Filter Toggle Button */}
        <button
          className="md:hidden flex items-center gap-2 mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg w-full justify-center"
          onClick={toggleFilter}
        >
          <FilterIcon size={18} />
          {filterOpen ? "Hide Filters" : "Show Filters"}
          {filterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Sidebar Filter - Hidden by default on mobile, shown when filterOpen is true */}
          <aside
            className={`${filterOpen ? "block" : "hidden"
              } md:block w-full md:w-1/4 xl:w-1/5 p-4 border border-purple-600 transition-all duration-300 relative`}
          >
            {/* Close button for mobile */}
            <button
              className="absolute top-2 right-2 md:hidden text-gray-500"
              onClick={toggleFilter}
            >
              <X size={20} />
            </button>

            <h2 className="font-semibold text-lg mb-3">Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    className="form-checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </li>
              ))}
            </ul>

            <h2 className="font-semibold text-lg mt-4">Price Range</h2>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                placeholder="Min"
                className="border p-1 w-1/2"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max"
                className="border p-1 w-1/2"
                value={maxPrice}
                onChange={e => setMaxPrice(e.target.value)}
              />
            </div>
            <button
              className="bg-purple-600 text-white w-full mt-3 py-2"
              onClick={handlePriceApply}
            >
              Apply
            </button>

            <h2 className="font-semibold text-lg mt-4">Material</h2>
            <ul className="space-y-2">
              {materials.map(material => (
                <li key={material} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`material-${material}`}
                    className="form-checkbox"
                    checked={selectedMaterials.includes(material)}
                    onChange={() => handleMaterialChange(material)}
                  />
                  <label htmlFor={`material-${material}`}>{material}</label>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Grid */}
          <section className="w-full md:w-3/4 xl:w-4/5 px-2 md:px-0 mt-4 md:mt-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg text-gray-500">
                  No products match your filters.
                </p>
                <button
                  className="mt-4 bg-purple-600 text-white px-4 py-2"
                  onClick={() => {
                    setSelectedCategories([])
                    setSelectedMaterials([])
                    setMinPrice("")
                    setMaxPrice("")
                    setFilteredProducts(allProducts)
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    ref={el => (productRefs.current[index] = el)}
                    className={`relative bg-white p-2 md:p-4 border border-purple-200 hover:border-purple-600 shadow-sm hover:shadow-md group overflow-hidden transition-all duration-300"
                      ${activeIndex === index ? "ring-2 ring-purple-600" : ""}
                      ${!isMobile ? "group hover:scale-105" : ""}
                    `}
                    onClick={() => handleProductInteraction(index)}
                  >
                    {/* Product Image */}
                    <Link to="/SingleAllproduct"> <div className="relative w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[250px] overflow-hidden">
                      <img
                        src={highangle}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-all duration-300
                          ${!isMobile
                            ? "group-hover:scale-105"
                            : activeIndex === index
                              ? "scale-105"
                              : ""
                          }
                        `}
                      />
                      <Link to="/Wishlist">
                        <button
                          className={`absolute top-2 right-2 bg-purple-600 p-1.5 sm:p-2 rounded-full transition-all duration-300 cursor-pointer
                            ${!isMobile
                              ? "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                              : "opacity-100 scale-100"
                            }
                              `}
                        >
                          <FaHeart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </button>
                      </Link>

                    </div></Link>

                    {/* Product Details */}
                    <div className="mt-2 sm:mt-4 text-center">
                      <h3 className="font-medium text-xs sm:text-sm md:text-base lg:text-lg truncate">
                        {product.name}
                      </h3>
                      <p className="text-purple-600 font-semibold text-xs sm:text-sm">
                        {product.price}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {product.category} • {product.material}
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <Link to="/Cart">
                      <button
                        className={`w-full mt-2 sm:mt-4 bg-purple-600 text-white py-1.5 sm:py-2  flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm transition-all duration-300 cursor-pointer
      ${!isMobile
                            ? "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                            : "opacity-100 translate-y-0"
                          }
    `}
                      >
                        <CiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default ProductPage
