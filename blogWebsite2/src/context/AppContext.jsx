// src/context/AppContext.jsx
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext(); // create a global data bucket

function AppContextProvider({ children }) {
  //global state variables
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null); // in footer the previous and next button will be shown based on the total pages
  const navigate = useNavigate();// to navigate to the next or previous page without reloading the page
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") ?? "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fetch Blog Data from the API
  const fetchBlogPosts = async (page = 1, tag = null, category = null) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    if (tag) url += `&tag=${tag}`;
    if (category) url += `&category=${category}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.posts || data.posts.length === 0) {
        throw new Error("Something Went Wrong");
      }

      console.log("API Response", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error in Fetching BlogPosts:", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    } finally {
      setLoading(false);
    }
  };

  // Handle When Next and Previous button are clicked
  const handlePageChange = (newPage) => {
    navigate({ search: `?page=${newPage}` });
    setPage(newPage);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    theme,
    toggleTheme,
  };
// Provide global context values to all child components
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
export default AppContextProvider;
