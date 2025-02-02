import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
    const cartItems = useSelector((state) => state.cart.length);

  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold p-2">ShoppyGlobe</Link>
        <nav>
          <Link to="/" className="mx-4">Home</Link>
          <Link to="/cart" className="mx-4">Cart ({cartItems})</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
