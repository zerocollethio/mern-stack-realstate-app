import React from 'react'
// import Link from 'react-router-dom'
import { Link ,useNavigate} from 'react-router-dom'
export default function Signup() {
const navigate=useNavigate()
const [formData,setFormData]=React.useState({})
const [loading,setLoading]=React.useState(false)
const [error,setError]=React.useState(null)

  const formHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
}

const submitHandler= async(e)=>{
  e.preventDefault()
  setLoading(true)
  try{
    const res=await fetch('/api/users/auth/signup',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    const data=await res.json()
    console.log(data)
   
    if(data.sucsses===false){
      setError(data.message)
      setLoading(false)
      return
    }

    setError(null)
    setLoading(false)
    navigate('/login')
  
   
    
  }catch(e){
      setLoading(false)
      setError(e.message)
      console.log(e)
  }
    

}



  return (
    <div>
      <form className='flex flex-col max-w-lg mx-auto border p-8 mt-20 shadow-lg justify-center gap-5 uppercase  bg-slate-200'>
      <span className='text-3xl items-center text-center '>sign up</span>

      <input className=' focus:outline-none rounded-lg p-4 ' type="text" name='userName' placeholder='username' onChange={formHandler}/>
      <input className=' focus:outline-none rounded-lg p-4 ' type="email" name='email' placeholder='email' onChange={formHandler}/>
      <input className=' focus:outline-none rounded-lg p-4 ' type="password" name='password' placeholder='password' onChange={formHandler}/>
      <button disabled={loading} className='rounded-lg p-4 bg-slate-500 text-white items-center hover:bg-slate-700' onClick={submitHandler}>{!loading?'Sign up':'Loading...'}</button>

      </form>
        <div className='flex justify-center  max-w-lg mx-auto gap-5'>
          <p className=''>have an acount ?</p>
          <Link className='text-slate-500' to="/login">sign in</Link>
        </div>
        <p className='text-red-500 mt-3 mx-auto max-w-lg p-5'>{error}</p>
        
    </div>
  )
}
