import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  console.log("product", product)

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg h-14 font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <div className="h-fit flex justify-between items-center mt-3">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
