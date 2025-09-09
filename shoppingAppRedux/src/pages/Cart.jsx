import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="p-6">
      {cart.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white border rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-2xl font-bold mb-4">Your Cart Summary</h2>
            <p className="mb-2">Total Items: {cart.length}</p>
            <p className="text-green-600 font-bold mb-4">Total: ${totalAmount}</p>
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-2xl font-bold mb-4">Cart is Empty 🛒</h1>
          <Link to="/">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
