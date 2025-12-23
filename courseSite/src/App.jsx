import { useEffect, useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'

function App() {

  const [courses, setCourses] = useState(null); //All courses coming from API
  const [loading, setLoading] = useState(true); //Show spinner or not
  const [category, setCategory] = useState("All"); //Which filter button is selected

  async function fetchData() { 
   setLoading(true);
      try {
        const res = await fetch(apiUrl); // wait until the API call is complete
        const output = await res.json(); // convert the response to JSON
        setCourses(output.data); // set the courses to the state

      } catch (error) {
        toast.error("Something went wrong "); // show error toast if API call fails
      }
      setLoading(false); // hide spinner if API call is complete
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    // NavBar
    <div className='min-h-screen flex flex-col'> 
      <div>
        <Navbar />
      </div>
      <div className='bg-[#212121] flex-grow pt-6'>
      

   <div>
    
        <Filter filterData={filterData} 
        category = {category}
        setCategory = {setCategory}/>
      </div>


      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap
      justify-center items-center min-h-[50vh]'>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category ={category} />)
        }
      </div>

      </div>
   
    </div>
  )
}

export default App
