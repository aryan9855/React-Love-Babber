import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages, theme } = useContext(AppContext);
  const isDark = theme === "dark";

  if (!totalPages) return null;

  return (
    <div
      className={`fixed bottom-0 inset-x-0 py-3 border-t shadow-md transition-colors duration-200 ${
        isDark ? "bg-gray-900 border-gray-800 shadow-gray-900/60" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-4 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className={`px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer ${
              isDark
                ? "border border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className={`px-4 py-2 rounded-lg transition-colors duration-150 cursor-pointer ${
              isDark
                ? "border border-gray-700 bg-gray-800 text-gray-100 hover:bg-gray-700"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        )}

        <p
          className={`text-sm font-semibold ml-auto ${
            isDark ? "text-gray-200" : "text-gray-600"
          }`}
        >
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
