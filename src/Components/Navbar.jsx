import { useState, useEffect } from "react";
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import Logokuku from "../assets/images/Logokuku.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <div className="bg-white shadow">
      {/* Preheader */}
      <div className="bg-purple-600 text-white text-sm py-2 flex justify-between px-4 md:px-10">
        <span>Free shipping on all orders above $100</span>
        <div className="hidden md:flex gap-4">
          <span>+91 82001 81000</span>
          <span>kukuweb@gmail.com</span>
        </div>
      </div>

      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="bg-white text-black py-3 flex items-center justify-between relative z-10">
          <div className="w-24 sm:w-32">
            <Link to="/">
              <img src={Logokuku || "/placeholder.svg"} alt="Gracy Jewel Logo" className="w-full" />
            </Link>
          </div>

          {/* Navigation Links or Search Bar */}
          {searchOpen ? (
            <div className="flex w-full max-w-lg items-center bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
              <input
                type="text"
                placeholder="Search product..."
                className="w-full py-2 px-4 bg-transparent text-gray-800 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 bg-purple-500 text-white rounded-r-lg"
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <ul className="hidden md:flex space-x-6 text-lg font-medium">
              <Link to="/">Home</Link>
              <Link to="/Allproduct">All Product</Link>
              <Link to="/Category">Category</Link>
              <Link to="/About">About us</Link>
              <Link to="/Contact">Contact us</Link>
            </ul>
          )}

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
