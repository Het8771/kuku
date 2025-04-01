import { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Logokuku from "../assets/images/Logokuku.png";
import { Link, useLocation } from "react-router-dom";

// Example products data (you can replace this with real data from an API or database)
const products = [
  { id: 1, name: "Gold Infinity Ring", price: "$1,299.00" },
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
        <span>Free shipping on all orders above $100</span>
        <div className="hidden md:flex gap-4">
          <span>+91 82001 81000</span>
          <span>kukuweb@gmail.com</span>
        </div>
      </div>

      {/* Search Bar (Toggle Animation) */}
      <div
        className={`absolute top-0 left-0 w-full bg-gray-100 border-b border-gray-300 transition-transform duration-300 ${
          searchOpen ? "translate-y-0" : "-translate-y-full"
        } z-20`}
      >
        <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="w-24 sm:w-32">
            <Link to="/">
              <img src={Logokuku || "/placeholder.svg"} alt="Gracy Jewel Logo" className="w-full" />
            </Link>
          </div>
          <input
            type="text"
            placeholder="Search product..."
            className="w-full py-2 px-4 bg-transparent text-gray-800 focus:outline-none"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="p-2 bg-purple-500 text-white rounded-lg ml-2"
            aria-label="Close search"
          >
            <X size={20} />
          </button>
        </div>

        {/* Display Search Results when a search is made */}
        {searchQuery && filteredProducts.length > 0 && (
          <div className="mt-4 px-4">
            <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
                  <p className="text-lg font-medium">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
          <div className="md:hidden bg-white shadow-md z-20 p-4 absolute top-0 right-0 w-2/3 h-full transform transition-transform ease-in-out duration-300">
            {/* Logo & Close Button */}
            <div className="flex justify-between items-center mb-4">
              <Link to="/">
                <img src={Logokuku || "/placeholder.svg"} alt="Gracy Jewel Logo" className="w-24" />
              </Link>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={30} className="text-[#9D4BE0]" />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-4 text-lg font-medium">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/Allproduct" onClick={() => setMenuOpen(false)}>All Product</Link></li>
              <li><Link to="/Category" onClick={() => setMenuOpen(false)}>Category</Link></li>
              <li><Link to="/About" onClick={() => setMenuOpen(false)}>About us</Link></li>
              <li><Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
            </ul>

            {/* Icons */}
            <div className="mt-6 flex items-center justify-around">
              <Link to="/Wishlist" onClick={() => setMenuOpen(false)}>
                <Heart size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
              </Link>
              <Link to="/Cart" onClick={() => setMenuOpen(false)}>
                <ShoppingCart size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
              </Link>
              <Link to="/Loginpage" onClick={() => setMenuOpen(false)}>
                <User size={35} className="text-white bg-[#9D4BE0] cursor-pointer p-2 rounded-full" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
