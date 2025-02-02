import React from "react"
import { useSelector } from "react-redux";
import { useState } from "react";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="border p-4 mb-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.title} (x{item.quantity})</span>
              <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        )}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleOrder} className="space-y-4">
        <h2 className="text-xl font-semibold">Shipping Details</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Shipping Address"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <h2 className="text-xl font-semibold">Payment Details</h2>

        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
