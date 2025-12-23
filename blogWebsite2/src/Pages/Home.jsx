import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="pt-20"> {/* padding-top so blogs don't hide under header */}
      <Header />
      <div className="pb-24"> {/* padding-bottom so content doesn't sit under pagination */}
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
