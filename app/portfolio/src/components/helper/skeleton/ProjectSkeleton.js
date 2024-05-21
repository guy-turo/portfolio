import React from 'react'
import { LuImagePlus } from "react-icons/lu";
import { FaRegCircleRight } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";

function ProjectSkeleton() {
  
  return (
    <div className="flex animate-pulse space-y-2 flex-col  container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
    <div className="flex animate-pulse justify-between">
   <h1 className='text-gray-400 animate-pulse'>Projects</h1>
   <button  className='border animate-pulse border-solid border-gray-400 rounded-md px-1 m-1'>Add project</button>
   </div>
   <form   className=' items-start animate-pulse space-y-2 flex flex-col'>
      <div className=' flex flex-col animate-pulse'>
      <div className='grid grid-cols-2 animate-pulse sm:grid-cols-4 space-x-2 sm:space-y-1'>
      <label htmlFor="title ">Title</label>
      <input type="text"   id="title" className=" bg-gray-300 border animate-pulse rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="live">Description</label>
      <input type="text"   id="live" className=" bg-gray-300 animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
     
      <label htmlFor="github">Link Github</label>
      <input type="text"  id="github" className=" bg-gray-300  animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="live">Link Live</label>
      <input type="text" id="live" className=" bg-gray-300 border animate-pulse rounded-md px-2 text-black border-solid border-blue-800"/>
     
      </div>
      </div>
      <div className="">
          <label htmlFor='images' className="flex w-full animate-pulse overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
          <div className=" flex items-center     rounded-md  animate-pulse border border-solid border-blue-700">
        <LuImagePlus className="flex size-20 animate-pulse"/>
        
           
             
              <img alt="" className='size-20 animate-pulse rounded-md object-cover'/>
                
         
          </div>
          <h2 className="flex font-normal animate-pulse px-2">Select project pictures</h2>
         </label>
          <input type="file" required multiple id='images'   accept='image/*' hidden/>
          </div>
          <button type="submit" className="px-4 bg-green-700 animate-pulse w-fit rounded-md">
            ...
          </button>
    </form>
   
   <button className='w-fit' ><FaRegCircleRight  className='size-5 text-blue-500'/> </button>

      <div className=" rounded-md w-full animate-pulse h-fit bg-transparent border border-solid border-black shadow-md">
        <ul  className=" grid grid-cols-1 animate-pulse sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-1 sm:space-y-1 space-x-1 items-center justify-around overflow-x-auto overflow-y-hidden">
 
      
              <li  className='flex border animate-pulse  border-solid border-gray-500  rounded-md p-2 flex-col justify-center items-center'>
                 <div className={`space-x-2 animate-pulse "block" flex justify-between w-full`}>
                
                    <button className='animate-pulse text-red-600 '><MdDelete className="size-5"/></button>
                  </div>
                <img alt='' className="w-16 h-16 animate-pulse  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
                
                <h2 className="text-blue-950">...</h2>
                <h3 className="font-normal">....</h3>
                <div className="flex space-x-2">
                  <a  className='cursor-pointer animate-pulse px-3 rounded-md border border-solid border-blue-950 shadow-lg bg-blue-950'>Live</a>
                  <a  className='cursor-pointer animate-pulse px-3 rounded-md border border-solid border-blue-950 shadow-lg bg-blue-950'>Github</a>
                </div>           
               
               </li>
            
          
        </ul>
      </div>
  </div>
  )
}

export default ProjectSkeleton
