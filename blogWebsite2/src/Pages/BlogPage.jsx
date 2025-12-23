import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="pt-20">
      <Header />
      <div className="w-11/12 max-w-4xl mx-auto space-y-6">
        <div className="pt-2">
          <button
            onClick={() => navigation(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-300 dark:text-blue-200 dark:hover:bg-blue-900/30 transition cursor-pointer"
          >
            ← Back
          </button>
        </div>

        <div>
          {loading ? (
            <p className="text-center text-lg font-semibold text-blue-500">Loading...</p>
          ) : blog ? (
            <div className="space-y-6">
              <BlogDetails post={blog} />
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-200">
                Related Blogs
              </h2>
              {relatedblog.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg font-semibold text-gray-600 dark:text-gray-300">
              No Blog Found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
