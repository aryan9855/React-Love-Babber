import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-inner py-3 flex justify-center items-center gap-4">
      {/* Previous button */}
      {page > 1 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-300"
        >
          Previous
        </button>
      )}

      {/* Page info */}
      <p>
        Page <span className="font-bold">{page}</span> of{" "}
        <span className="font-bold">{totalPages}</span>
      </p>

      {/* Next button */}
      {page < totalPages && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-blue-300"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
