import React from "react";
import About from "../assets/images/About.png";
import Subscribe from "./Subscribe";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
    <Navbar/>
    <div>
    <div className="min-h-screen mt-5 flex justify-center px-4 md:px-10">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Check Out</h2>
          <p className="text-sm text-gray-500">Home / Check Out</p>
          
          <h3 className="mt-6 text-lg font-semibold">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input type="text" placeholder="Enter your first name" className="border border-gray-300 outline-none p-2 rounded w-full" />
            <input type="text" placeholder="Enter your last name" className="border border-gray-300 outline-none p-2 rounded w-full" />
            <input type="email" placeholder="Enter your email" className="border border-gray-300 outline-none p-2 rounded w-full" />
            <input type="tel" placeholder="Enter your phone number" className="border border-gray-300 outline-none p-2 rounded w-full" />
          </div>
          
          <h3 className="mt-6 text-lg font-semibold">Shipping Address</h3>
          <input type="text" placeholder="Enter your address" className="border border-gray-300 outline-none p-2 rounded w-full mt-2" />
          <input type="text" placeholder="Apartment, suite, etc." className="border border-gray-300 outline-none p-2 rounded w-full mt-2" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <input type="text" placeholder="Enter your City" className="border border-gray-300 outline-none p-2 rounded w-full" />
            <select className="border border-gray-300 outline-none p-2 rounded w-full">
              <option>Select State</option>
            </select>
            <input type="text" placeholder="Enter ZIP Code" className="border border-gray-300 outline-none p-2 rounded w-full" />
          </div>
          
          <h3 className="mt-6 text-lg font-semibold">Payment Method</h3>
          <div className="p-4 rounded flex flex-col gap-4 border border-gray-300 outline-none w-full">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked />
              Credit/Debit Card
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input type="text" placeholder="0000 0000 0000" className="border border-gray-300 outline-none p-2 rounded w-full" />
              <input type="text" placeholder="MM / YY" className="border border-gray-300 outline-none p-2 rounded w-full" />
              <input type="text" placeholder="CVC" className="border border-gray-300 outline-none p-2 rounded w-full" />
            </div>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Online Payment
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              Cash on Delivery
            </label>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 ">
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center">
              <img src={About} alt="Product" className="w-12 h-12 rounded" />
              <span>Revitalizing Hair Serum</span>
              <span>₹120</span>
            </div>
            <div className="flex justify-between items-center">
              <img src={About} alt="Product" className="w-12 h-12 rounded" />
              <span>Revitalizing Hair Serum</span>
              <span>₹120</span>
            </div>
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹120.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹20.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>₹20.00</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹160.00</span>
            </div>
          </div>
          <Link to ="/Orderconform"><button className="w-full bg-purple-600 text-white p-3 rounded mt-4">Place Order</button></Link>
          <p className="text-xs text-center text-gray-500 mt-2">By placing your order, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </div>
    <Subscribe/>
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
