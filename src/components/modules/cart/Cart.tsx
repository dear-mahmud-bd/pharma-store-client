"use client";

import Image from "next/image";
import { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Ibuprofen", price: 55.0, quantity: 1 },
    { id: 2, name: "Bioderma", price: 49.0, quantity: 1 },
  ]);

  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Product</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Quantity</th>
              <th className="p-3 border">Total</th>
              <th className="p-3 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="text-center">
                <td className="p-3 border">
                  <Image
                    src="https://i.ibb.co.com/hFYKj5fG/medicine.jpg"
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                </td>
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">${item.price.toFixed(2)}</td>
                <td className="p-3 border">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-3 border">${(item.price * item.quantity).toFixed(2)}</td>
                <td className="p-3 border">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => removeItem(item.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Summary */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-start">
        <div className="space-y-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Update Cart
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded ml-2">
            Continue Shopping
          </button>
          <div className="mt-3">
            <label className="block font-semibold">Coupon</label>
            <p className="text-sm text-gray-600">Enter your coupon code if you have one.</p>
            <div className="flex mt-2">
              <input
                type="text"
                className="border p-2 flex-grow"
                placeholder="Coupon Code"
              />
              <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-md w-full md:w-1/3 mt-6 md:mt-0">
          <h3 className="text-lg font-semibold border-b pb-2">Cart Totals</h3>
          <div className="flex justify-between mt-3">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-3 font-semibold">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="bg-blue-500 text-white w-full mt-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
