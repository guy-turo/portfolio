import React from 'react'
import me1 from "../../assets/me1.png"
import {Link} from "react-router-dom"



function SignUpPage() {
  return (
    <div  className='  static flex w-full snap-y   snap-mandatory h-screen overflow-x-hidden overflow-y-hidden  lg:justify-between items-center px-10 place-content-center'>
     <div className=' w-80    hidden lg:block h-80 rounded-full m-20 border border-solid border-blue-900 shadow-2xl'>
     <img src={me1} alt="" className='w-96  absolute object-contain  top-0   h-96 rounded-full '/>
    
     </div>
      <div  className="flex snap-center  flex-col  items-center space-y-4 bg-blue-950 justify-evenly rounded-md p-5 py-10 w-96 h-fit">

      <form action="" className='w-full space-y-5'>
      <h1 className="text-gray-300 block text-xl mb-10">Sign Up to Portfolio</h1>
      <div className='w-full'>
      <label htmlFor="username" className='block text-sm mb-2'>Username </label>
      <input type="text" id='username'  placeholder="e.g James" name="username" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
      
      <label htmlFor="email" className='block text-sm mb-2'>Email Address</label>
      <input type="text" id='email'  placeholder="e.g example@email.com" name="Email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
      </div>
      <div className='w-full '>
        <div className='flex justify-between items-center '>
          <label htmlFor="password"  className='block text-sm mb-2'>Password</label>
          <button className='text-green-600 font-semibold'>Forgot password</button>
        </div>
        <div className='relative'>
        <div class="max-w-sm ">
   <input id="hs-toggle-password-with-checkbox" type="password" class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter current password" value="12345qwerty"/>


  <div class="flex mt-4">
    <input data-hs-toggle-password='{
        "target": "#hs-toggle-password-with-checkbox"
      }' id="hs-toggle-password-checkbox" type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"/>
    <label for="hs-toggle-password-checkbox" class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Show password</label>
  </div>

</div>
        </div>
         </div>
      <button className='rounded-lg bg-green-600 w-full p-1 text-black font-semibold'>Sign Up</button>
      </form>
      <p className='flex place-items-center items-center justify-center '>Don't have an account?<span className='text-green-500 space-x-3 font-semibold hover:text-blue-600 cursor-pointer'><Link to="/signin">Sign In</Link></span></p>
     </div>
    </div>
  )
}

export default SignUpPage
