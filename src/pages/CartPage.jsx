import React from "react"
import Cart from "../components/Cart";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold">Your Cart</h1> */}
      <Cart />
      <div className="mt-4 text-center">
        <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
