import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            <img src="../logo.jpeg" alt="" className='h-14' />
          </div>
        </NavLink>

        <div className='flex items-center mr-5 space-x-6 font-medium text-slate-100'>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className='relative'>
              {
                cart.length > 0 &&
                <span className='absolute flex items-start justify-center w-4 h-4 text-xs text-white bg-green-600 rounded right-rounded-full animate-bounce'>
                  {cart.length}
                </span>
              }
              <FaShoppingCart className='text-2xl'/>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
