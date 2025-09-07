import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition duration-200">
      <NavLink to={`/blog/${post.id}`}>
        <h2 className="text-xl font-semibold text-blue-700 hover:underline">
          {post.title}
        </h2>
      </NavLink>

      <p className="text-gray-600 text-sm mt-1">
        By <span className="font-medium">{post.author}</span> on{" "}
        <NavLink
          to={`/categories/${post.category.replaceAll(" ", "-")}`}
          className="text-blue-500 hover:underline"
        >
          {post.category}
        </NavLink>
      </p>

      <p className="text-xs text-gray-400">Posted on {post.date}</p>

      <p className="mt-3 text-gray-700">{post.content}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-md hover:bg-blue-100"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
