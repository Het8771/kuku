import { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Logokuku from "../assets/images/Logokuku.png";
import { Link, useLocation } from "react-router-dom";
import highangle from "../assets/images/highangle.png";

// Example products data (you can replace this with real data from an API or database)
const products = [
  { id: 1, name: "Gold Infinity Ring", price: "$1,299.00", image: highangle },
  { id: 2, name: "Silver Eternity Band", price: "$899.00" },
  { id: 3, name: "Diamond Solitaire Ring", price: "$2,499.00" },
  { id: 4, name: "Pearl Accent Ring", price: "$1,099.00" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  return (
    <div className="bg-white shadow relative">
      {/* Preheader */}
      <div className="bg-purple-600 text-white text-sm py-2 flex justify-between px-4 md:px-10">
        <span>Buy & Get 15% Extra off</span>
        <div className="hidden md:flex gap-4">
          <span>+91 82001 81000</span>
          <span>kukuweb@gmail.com</span>
        </div>
      </div>

      {/* Search Bar (Toggle Animation) */}
      <div
        className={`absolute top-0 left-0 w-full h-auto self-start bg-white transition-transform duration-300 ${searchOpen ? "translate-y-0" : "-translate-y-full"
          } z-20`}
      >
        <div className="flex items-center h-30 max-w-3xl space-x-9 mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="w-24 sm:w-32">
            <Link to="/">
              <img src={Logokuku || "/placeholder.svg"} alt="Gracy Jewel Logo" className="w-full" />
            </Link>
          </div>
          <input
            type="text"
            placeholder="Search product..."
            className="w-full py-2 px-4 bg-purple-500 text-white focus:outline-none border border-purple-600"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="p-2 bg-purple-500 text-white ml-2"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Display Search Results when a search is made */}
        {searchQuery && filteredProducts.length > 0 && (
          <div className="mx-auto container max-w-7xl px-10 py-4">
            <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="relative bg-white p-2 md:p-4 border border-purple-200 hover:border-purple-600 shadow-sm hover:shadow-md group overflow-hidden transition-all duration-300">
                  {/* Wishlist Button */}
                  <button className="absolute top-[6px] right-[6px] md:top-[10px] md:right-[10px] bg-purple-600 p-[6px] md:p-[8px] rounded-full md:opacity-0 opacity-70 z-20 transform scale-[0.9] group-hover:scale-[1] group-hover:opacity-100 transition-all duration-[300ms]">
                    <Heart className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] text-white" />
                  </button>

                  {/* Product Image */}
                  <img src={product.image} alt={product.name} className="relative w-full h-[120px] sm:h-[100px] md:h-[180px] lg:h-[200px] overflow-hidden" />

                  {/* Product Name & Price */}
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
        )
        }
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-white text-black py-3 flex items-center justify-between relative z-10">
          <div className="w-24 sm:w-32">
            <Link to="/">
              <img src={Logokuku || "/placeholder.svg"} alt="Gracy Jewel Logo" className="w-full" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-lg font-medium">
            <Link to="/">Home</Link>
            <Link to="/Allproduct">All Product</Link>
            <Link to="/Category">Category</Link>
            <Link to="/About">About us</Link>
            <Link to="/Contact">Contact us</Link>
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-3">
            {!searchOpen && (
              <button onClick={() => setSearchOpen(true)} aria-label="Search">
                <Search size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
              </button>
            )}
            <Link to="/Wishlist" className="hidden md:inline-block">
              <Heart size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
            </Link>
            <Link to="/Cart" className="hidden md:inline-block">
              <ShoppingCart size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
            </Link>
            <Link to="/Loginpage" className="hidden md:inline-block">
              <User size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
            </Link>
            {/* Mobile Menu Toggle Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label="Toggle menu">
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
        <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 p-5 transform  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Logo & Close Button */}
        <div className="flex justify-between items-center mb-6">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={Logokuku || "/placeholder.svg"}
              alt="Gracy Jewel Logo"
              className="w-24"
            />
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={30} className="text-[#9D4BE0]" />
          </button>
        </div>
  
        {/* Navigation Links */}
        <ul className="space-y-5 text-lg font-medium">
          {[
            { to: "/", text: "Home" },
            { to: "/Allproduct", text: "All Product" },
            { to: "/Category", text: "Category" },
            { to: "/About", text: "About us" },
            { to: "/Contact", text: "Contact us" },
          ].map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={() => setMenuOpen(false)} className="block py-2 text-gray-700 hover:text-[#9D4BE0] transition">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
  
        {/* Icons */}
        <div className="mt-8 flex justify-around">
          <Link to="/Wishlist" onClick={() => setMenuOpen(false)}>
            <Heart size={35} className="text-white bg-[#9D4BE0] p-2 rounded-full hover:scale-110 transition" />
          </Link>
          <Link to="/Cart" onClick={() => setMenuOpen(false)}>
            <ShoppingCart size={35} className="text-white bg-[#9D4BE0] p-2 rounded-full hover:scale-110 transition" />
          </Link>
          <Link to="/Loginpage" onClick={() => setMenuOpen(false)}>
            <User size={35} className="text-white bg-[#9D4BE0] p-2 rounded-full hover:scale-110 transition" />
          </Link>
        </div>
      </div>
        )}
      </div>
    </div>
  );
}
