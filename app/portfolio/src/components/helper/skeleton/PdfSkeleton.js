import React from 'react'
import { FaRegFilePdf } from "react-icons/fa";

import { MdDelete } from "react-icons/md";


const PdfSkeleton=()=>{
 
  return (
    <div className='flex flex-col animate-pulse  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md'>
   <h1 className='text-gray-400'>CV</h1>
   <div  className="flex cursor-pointer animate-pulse items-center rounded-md border border-solid border-red-800  w-fit bg-red-300 px-2">
   <MdDelete  className="size-6 animate-pulse text-red-600 shadow-2xl" />
  <h2 className='font-normal animate-pulse text-red-500 '>Delete</h2>
   </div>
    <label htmlFor="pdf">
  
      <div className='flex '>
   <div className='w-5 animate-pulse h-5 rounded-full bg-blue-700'></div>
        <h2 className="rounded-sm  px-2 animate-pulse border border-solid border-blue-950 w-fit shadow-lg bg-blue-950 font-normal">Select pdf</h2>
      </div>
        
      
        <div className="flex">
          <div className='flex cursor-pointer hover:bg-blue-900 flex-col items-end p-3 rounded-sm px-2 border border-solid border-blue-950 w-fit shadow-lg  font-normal'>
          <div  className="flex">
          <FaRegFilePdf className="size-10 animate-pulse text-blue-950"/>
          <h2 className="font-normal animate-pulse text-gray-400">...</h2>
          </div>
        </div>
        <h2 className="rounded-sm animate-pulse px-2 items-center flex  w-fit shadow-lg bg-transparent font-normal">Select pdf</h2>
        </div>
      
    </label>
    <input  hidden/>
    <div className='flex flex-col items-center space-y-2 justify-center self-start'>
     
   <button  className="px-4 w-fit animate-pulse bg-green-700 rounded-md">
            
         <h3>uploaded pdf</h3>
          </button>
    <button className="px-4 w-fit animate-pulse bg-green-700 rounded-md">
          ...
          </button>
    </div>
    </div>
  )
}

export default PdfSkeleton
