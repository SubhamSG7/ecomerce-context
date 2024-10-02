import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="h-[15vh] w-full flex flex-wrap justify-between items-center bg-gradient-to-r from-blue-400 to-purple-900">
      <div className="ml-4 w-[50%]">Image</div>
      <div className="flex flex-wrap justify-evenly gap-4 mr-4 w-[50%]">
        <Link to="/" className="w-[20%]">
          Home
        </Link>
        <Link to="/Blog" className="w-[20%]">
          Blog
        </Link>
        <Link to="/Products" className="w-[20%]">
          Products
        </Link>
        <Link to="/Cart" className="w-[20%]">
          Cart
        </Link>
      </div>
    </header>
  );
}
