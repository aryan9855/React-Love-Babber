import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-3 border-t shadow-md">
      <div className="flex items-center gap-4 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
          >
            Next
          </button>
        )}

        <p className="text-sm font-semibold ml-auto text-gray-600">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
