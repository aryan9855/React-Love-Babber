import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BlogDetails = ({ post }) => {
  const { theme } = useContext(AppContext);
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-xl shadow-md p-5 border hover:shadow-lg transition duration-200 ${
        isDark
          ? "bg-gray-800 border-gray-700 shadow-gray-900/60 hover:shadow-black/50"
          : "bg-white border-gray-100 hover:shadow-lg"
      }`}
    >
      <NavLink to={`/blog/${post.id}`}>
        <h2
          className={`text-xl font-semibold hover:underline ${
            isDark ? "text-blue-300" : "text-blue-700"
          }`}
        >
          {post.title}
        </h2>
      </NavLink>

      <p className={`text-sm mt-1 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        By <span className="font-medium">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className={isDark ? "text-blue-300 hover:underline" : "text-blue-500 hover:underline"}
        >
          {post.category}
        </NavLink>
      </p>

      <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>Posted on {post.date}</p>

      <p className={`mt-3 ${isDark ? "text-gray-200" : "text-gray-700"}`}>{post.content}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className={`text-sm px-2 py-1 rounded-md ${
              isDark
                ? "text-blue-200 bg-blue-900/40 hover:bg-blue-900/60"
                : "text-blue-600 bg-blue-50 hover:bg-blue-100"
            }`}
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
