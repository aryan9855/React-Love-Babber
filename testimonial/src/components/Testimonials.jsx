import React from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = React.useState(0);

  function leftShiftHandler() {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  }

  function rightShiftHandler() {
    setIndex(index + 1 >= reviews.length ? 0 : index + 1);
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="mt-10 flex flex-col items-center">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
      <div>
        <button
          onClick={surpriseHandler}
          className="cursor-pointer bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md text-white mt-4 font-bold"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
