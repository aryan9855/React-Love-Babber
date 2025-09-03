import { use, useContext, useEffect } from "react"; 
import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { AppContext } from "./context/AppContext.jsx";
import { Route, Routes, useSearchParams } from "react-router-dom";
function App() {
  const { fetchBlogPost } = useContext(AppContext);

  const [searchParams,setSearchParams] = useSearchParams();

  const location = uselocation();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.startsWith("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),null,category);
    }
    else{
      fetchBlogPost(Number(page)); 
    }
  }, [location.pathname,location.search]);

  return (
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/blog/:blogId" element = {<BlogPage/>}/>
      <Route path ="/tags/:tag" element = {<TagPage/>}/>
      <Route path ="/categories/:category" element = {<CategoryPage/>}/>
    </Routes>
  );
}

export default App;
