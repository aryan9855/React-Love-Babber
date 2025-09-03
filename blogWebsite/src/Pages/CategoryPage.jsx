import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import Header from '../components/Header'

function categoryPage() {
    const navigation = useNavigation();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={() => navigation(-1)}
        >Go Back
        </button>
        <h2>
            Blogs on <span>#{category} </span>
        </h2>
      </div>
    </div>
  )
}

export default categoryPage
