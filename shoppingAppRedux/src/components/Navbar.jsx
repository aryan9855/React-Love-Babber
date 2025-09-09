import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-lg">
      <NavLink to="/">
        <img
          src="https://images.pexels.com/photos/6214386/pexels-photo-6214386.jpeg"
          className="h-12 w-12 rounded-full object-cover"
          alt="Logo"
        />
      </NavLink>

      <div className="flex items-center gap-6">
        <NavLink to="/" className="hover:text-yellow-400">Home</NavLink>
        <NavLink to="/cart" className="relative">
          <FaShoppingCart className="text-xl hover:text-yellow-400" />
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
