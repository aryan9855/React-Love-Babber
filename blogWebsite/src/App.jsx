import { useContext, useEffect } from "react"; 
import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext.jsx";

function App() {
  const { fetchBlogPost } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPost();
  }, []);

  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
