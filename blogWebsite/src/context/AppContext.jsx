import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl.js";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  async function fetchBlogPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      setPage(data.page);
    } catch (error) {
      console.log("Error fetching blog posts:", error);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogPost(page);
  }

  const value = {
    loading, setLoading,
    posts, setPosts,
    page, setPage,
    totalPages, setTotalPages,
    fetchBlogPost,
    handlePageChange,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
