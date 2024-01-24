import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='flex justify-between p-4 gap-2 bg-slate-200 max-w-16xl mx-auto shadow-md items-center'>
        <Link to='/'>
        <div className='flex items-center space-x-2 flex-wrap'>
            <span className='font-bold text-slate-500 text-sm sm:text-xl item-center'>Eneyew</span>
            <span className='text-slate-500 text-sm sm:text-xl item-center'>Realstate</span>
        </div>
        </Link>
       

        <form action="" className='flex p-1 rounded items-center gap-1 bg-slate-100 cornered '>
            <input className='p-2 bg-transparent w-24 sm:w-64 focus:outline-none'  type="text" placeholder='Search' name='search' />
            <button><FaSearch className='text-slate-500 text-sm sm:text-xl' /></button>
        </form>

        <ul className='flex space-x-3 items-center p-2'>
    <Link to={"/"}> <li className='hidden sm:inline text-slate-500 text-sm sm:text-xl'>Home</li></Link>           
           <Link to={"/about"}> <li className='hidden sm:inline text-slate-500 text-sm sm:text-xl'>About</li></Link>
          <Link to={"/login"}><li className='text-slate-500 text-sm sm:text-xl flex-nowrap'>Sign in</li></Link>  
            
        </ul>



    </header>
  )
}
