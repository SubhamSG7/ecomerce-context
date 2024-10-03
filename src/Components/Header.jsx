import React from "react";
import { Link } from "react-router-dom";
import { useGlobalCart } from "../Context/CartContext";

export default function Header() {
  const { cart } = useGlobalCart();
  
  return (
    <header className="h-[15vh] w-full flex justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg p-4">
      <div className="flex items-center ml-4 w-[50%]">
        <img src="https://as2.ftcdn.net/v2/jpg/02/48/54/89/1000_F_248548930_7ZtT5VLUrTHBHq4wLTjtTw16AotdL1gI.jpg" alt="Logo" className="h-10 rounded-full " />
      </div>
      <nav className="flex flex-wrap justify-evenly gap-6 mr-4 w-[50%]">
        <Link to="/" className="text-white text-lg hover:text-brown-800 transition duration-300">Home</Link>
        <Link to="/Blog" className="text-white text-lg hover:text-brown-800 transition duration-300">Blog</Link>
        <Link to="/Products" className="text-white text-lg hover:text-brown-800 transition duration-300">Products</Link>
        <Link to="/Cart" className="text-white text-lg hover:text-brown-800 transition duration-300">
          {cart.length === 0 ? "Cart" : `Cart (${cart.length})`}
        </Link>
      </nav>
    </header>
  );
}
