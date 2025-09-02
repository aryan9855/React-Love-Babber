import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
import Spinner from "./Spinner.jsx";

function Blogs() {
  const { loading, posts } = useContext(AppContext);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center text-gray-600 text-lg font-medium py-10">
          <p>No Posts Found</p>
        </div>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="p-6 mb-6 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              By <span className="font-semibold">{post.author}</span> on{" "}
              <span className="italic">{post.category}</span>
            </p>
            <p className="text-xs text-gray-400 mb-4">Posted on {post.date}</p>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
