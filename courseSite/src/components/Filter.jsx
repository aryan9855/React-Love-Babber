import React from 'react';

function Filter({ filterData, category, setCategory }) { 
  function filterHandler(selectedCategory) {
    setCategory(selectedCategory); // Pass selectedCategory to update state
  }

  return (
    <div className="w-11/12 flex flex-wrap justify-center items-center gap-4 mx-auto my-6">
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => filterHandler(data.title)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white ${
            category === data.title ? "bg-black/80" : "bg-black"
          } hover:bg-black/50 border-2 transition-all duration-300 cursor-pointer
          ${category === data.title ? "border-white opacity-60" : "border-transparent opacity-40"}`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}

export default Filter;
