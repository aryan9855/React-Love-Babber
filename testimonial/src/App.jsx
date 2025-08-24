import './App.css';
import Testimonials from './components/Testimonials';
import reviews from './data';

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 gap-4">
      {/* Heading Section */}
      <div className="text-center mb-2">
        <h1 className="text-4xl font-bold mb-2">Our Testimonial</h1>
        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto"></div>
      </div>

      {/* Testimonials Component */}
      <Testimonials reviews={reviews} />
    </div>
  );
}

export default App;
