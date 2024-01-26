import React from 'react'
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div>
      <form className='flex flex-col max-w-lg mx-auto border p-8 mt-20 shadow-lg justify-center gap-5 uppercase  bg-slate-200'>
      <span className='text-3xl items-center text-center '>sign up</span>

      <input className=' focus:outline-none rounded-lg p-4 ' type="text" name='username' placeholder='username'/>
      <input className=' focus:outline-none rounded-lg p-4 ' type="email" name='email' placeholder='email' />
      <input className=' focus:outline-none rounded-lg p-4 ' type="password" name='password' placeholder='password' />
      <button className='rounded-lg p-4 bg-slate-500 text-white items-center hover:bg-slate-700'>Sign up</button>

      </form>
        <div className='flex justify-center  max-w-lg mx-auto gap-5'>
          <p className=''>have an acount ?</p>
          <Link className='text-slate-500' to="/login">sign in</Link>
        </div>

    </div>
  )
}
