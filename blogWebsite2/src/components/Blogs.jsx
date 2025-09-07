import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-6 my-6 w-11/12 max-w-3xl mx-auto">
      {loading ? (
        <div className="min-h-[70vh] flex justify-center items-center">
          <p className="text-center font-bold text-2xl animate-pulse text-blue-600">
            Loading...
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[70vh] flex justify-center items-center">
          <p className="text-center font-bold text-2xl text-gray-500">
            No Blogs Found!
          </p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}
