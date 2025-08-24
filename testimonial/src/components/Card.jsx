import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function Card({ review }) {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-[350px] md:w-[400px] relative">
      <div className="w-[140px] h-[140px] rounded-full border-4 border-violet-500 absolute left-1/2 -top-16 transform -translate-x-1/2 z-10">
        <img src={review.image} alt={review.name} className="w-full h-full object-cover rounded-full" />
      </div>

      <div
        className="w-[140px] h-[140px] left-[10px] bg-violet-500 rounded-full absolute top-[-6px]"
        style={{ zIndex: -10 }}
      ></div>

      <div className="text-center mt-20">
        <p className="font-bold text-2xl capitalize">{review.name}</p>
        <p className="text-violet-300 uppercase text-sm">{review.job}</p>
      </div>

      <div className="text-violet-400 text-3xl mt-4">
        <FaQuoteLeft />
      </div>

      <p className="text-center mt-4 text-slate-500">{review.text}</p>

      <div className="text-violet-400 text-3xl mt-4">
        <FaQuoteRight />
      </div>
    </div>
  );
}

export default Card;
