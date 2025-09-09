import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { remove } from "../redux/Slices/CartSlice"
import { toast } from "react-toastify";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex items-center justify-between border p-4 rounded-lg shadow-md mb-4 bg-white">
      <div className="w-24 h-24 flex-shrink-0">
        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
      </div>

      <div className="flex-1 px-4">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-gray-500">{item.description}</p>
        <p className="text-green-600 font-bold mt-2">${item.price}</p>
      </div>

      <button
        onClick={removeFromCart}
        className="text-red-500 hover:text-red-700 text-2xl"
      >
        <FcDeleteDatabase />
      </button>
    </div>
  );
}

export default CartItem;
