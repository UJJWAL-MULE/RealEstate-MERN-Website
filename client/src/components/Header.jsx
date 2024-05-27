import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between max-w-6xl mx-auto items-center p-3' >
        <div className='font-bold flex text-lg lg:text-4xl flex-wrap justify-center'>
          <NavLink to={'/'}>
          <span className='text-slate-400 '>USM</span>
          <span className='text-slate-700 '>Estate</span>
          </NavLink>
          
        </div>
        <form className='flex p-3 item-center justify-between bg-slate-100 rounded-lg '>
          <input type="text" placeholder='Search' className=' bg-transparent focus:outline-none w-24 sm:w-64 ' />
          <FaSearch className='text-slate-700 text-lg'/>
        </form>
        
          <ul className='flex gap-5 '>
            <li className='hidden sm:inline text- text-slate-700 hover:underline'><NavLink to={'/'}>Home</NavLink></li>
            <li className='hidden sm:inline text- text-slate-700 hover:underline'><NavLink to={'/about'}>About</NavLink></li>
            <li className='hidden sm:inline text- text-slate-700 hover:underline'><NavLink to={'/sign-in'}>Sign-in</NavLink></li>
          </ul>
      </div>
    </header>
  )
}

export default Header
