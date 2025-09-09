import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";

function Product({ post }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:scale-105 transition-transform">
      <img src={post.image} alt={post.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-lg font-semibold mt-3">{post.title}</h2>
      <p className="text-gray-500 text-sm">{post.description.substring(0, 60)}...</p>
      <p className="text-green-600 font-bold mt-2">${post.price}</p>

      {cart.some((p) => p.id === post.id) ? (
        <button
          onClick={removeFromCart}
          className="bg-red-500 text-white px-4 py-2 rounded-lg mt-3 w-full hover:bg-red-600"
        >
          Remove Item
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 w-full hover:bg-blue-700"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Product;
