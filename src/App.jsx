import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Allproduct from "./Components/Allproduct";
import Category from "./Components/Category";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Singlecate from "./Components/Singlecate";
import SingleAllproduct from "./Components/SingleAllproduct";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Wishlist from "./Components/Wishlist";
import Orderconform from "./Components/Orderconform";
import Loginpage from "./Components/Loginpage";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Allproduct" element={<Allproduct />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/About" element={< About/>} />
          <Route path="/Contact" element={< Contact/>} />
          <Route path="/Singlecate" element={< Singlecate/>} />
          <Route path="/SingleAllproduct" element={< SingleAllproduct/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/Orderconform" element={<Orderconform/>} />
          <Route path="/Loginpage" element={<Loginpage/>} />
          <Route path="/Signup" element={<Signup/>} />
        </Routes>
      </Router>
    </>

  );
};

export default App;
