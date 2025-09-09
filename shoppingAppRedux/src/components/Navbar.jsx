import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <div className='flex flex-roe justify-between'>
        <NavLink to ='/'>
          <div>
            <img
              src="https://images.pexels.com/photos/6214386/pexels-photo-6214386.jpeg"
              className="h-[100px] w-[100px]"
            />
          </div>
        </NavLink>
        <div>
          <NavLink to ='/'>
          <p>Home</p>
          </NavLink>
          <NavLink to ='/cart'>
            <div>
          <FaShoppingCart />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
