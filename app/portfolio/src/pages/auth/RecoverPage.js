import React from 'react'
import me from "../../assets/me.png"
import {Link} from "react-router-dom"

function RecoverPage() {
  return (
    <div  className='relative flex w-full snap-y   snap-mandatory h-screen overflow-x-hidden overflow-y-hidden  lg:justify-between items-center px-10 place-content-center'>
     <div></div>
     <img src={me} alt="" className='w-80 absolute hidden lg:block h-80 rounded-full m-20 border border-solid border-blue-900 shadow-2xl'/>
     <div  className="flex snap-center  flex-col  items-center space-y-4 bg-blue-950 justify-evenly rounded-md p-5 py-10 w-96 h-fit">

      <form action="" className='w-full space-y-5'>
      <h1 className="text-gray-300 block text-xl mb-10">Recover</h1>
      <div className='w-full'>
      <label htmlFor="email" className='block text-sm mb-2'>Email Address</label>
      <input type="text" id='email'  placeholder="e.g example@email.com" name="Email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
      </div>
      <button className='rounded-lg bg-green-600 w-full p-1 text-black font-semibold'>Recover</button>
      </form>
        </div>
    </div>
  )
}

export default RecoverPage
