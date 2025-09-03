import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import Header from '../components/Header'

function TagPage() {

    const navigation = useNavigation();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);        

  return (
    <div>
      <Header/>
      <div>
        <button onClick={() => NavigationActivation(-1)}>Go Back
        </button>
        <h2>
            Blogs Tagged <span>#{tag} </span>
        </h2>
      </div>
      <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage
