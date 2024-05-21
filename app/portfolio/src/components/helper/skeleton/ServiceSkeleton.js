import React from 'react'
import { FaRegCircleRight } from "react-icons/fa6";
const  ServicesSkeleton=()=> {

  return (
    <div className="flex animate-pulse flex-col  container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
   <div className="flex  animate-pulse justify-between">
   <h1 className='text-gray-400'>Services</h1>
   <button  className='border animate-pulse border-solid border-gray-400 rounded-md px-1 m-1'>Add Service</button>
   </div>
    <div className="bloc">
    <form className=' items-start animate-pulse space-y-2 flex flex-col'>
      <div className=' flex animate-pulse flex-col  '>
      <div className='grid animate-pulse grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
      <label htmlFor="ui/ux">UI/UX</label>
      <input type="text"  id="ui/ux" className=" bg-gray-300 animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="clients">Frontend</label>
      <input type="text" id="frontend" className=" bg-gray-300 animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="backend">Backend</label>
      <input type="text"  id="backend" className=" bg-gray-300 animate-pulse border rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="other">Other</label>
      <input type="text" id="other" className=" bg-gray-300 border animate-pulse rounded-md px-2 text-black border-solid border-blue-800"/>
      </div>
      </div>
      <button type="submit" className="px-4 bg-green-700 animate-pulse w-fit rounded-md">
           ....
        </button>
    </form>
    </div>
    <button className='w-fit' ><FaRegCircleRight  className='size-5 text-blue-500'/> </button>
    <div className="flex flex-row   rounded-md w-full animate-pulse h-full bg-transparent border border-solid border-black shadow-md">
        <ul className=" flex flex-col place-items-center animate-pulse  w-full mt-1 mb-1  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-1     overflow-y-auto ">
       
    
          <li className="grid grid-cols-2 space-x-1 space-y-1 animate-pulse items-center justify-between w-full ">
            <div className='items-center justify-center flex animate-pulse  border border-solid border-gray-400 rounded-md shadow-md  flex-col'>
            <div className="flex justify-center space-x-3 animate-pulse items-center  w-full px-4 ">
            <div></div><h2 className="underline animate-pulse text-blue-950">UI/Ux</h2>
            </div>
            <ul>
         <li  className="flex flex-col items-center animate-pulse justify-center">
                <h3 className="font-normal">...</h3>
              </li>
            </ul>
            </div>
             <div className="flex justify-center animate-pulse space-x-3 items-center  w-full px-4 ">
           
            <ul>
           <li   className="flex flex-col items-center animate-pulse justify-center">
                <h3 className="font-normal">...</h3>
              </li>
            </ul>
            </div>
            <div  className='items-center animate-pulse justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-center animate-pulse space-x-3 items-center  w-full px-4 ">
            <div>
                </div>
                    <h2 className="underline animate-pulse text-blue-950">Backend</h2>
                </div>
            <ul>
            <li  className="flex flex-col animate-pulse items-center justify-center">
                <h3 className="font-normal">...</h3>
              </li>
            </ul>
            </div>
            <div  className='items-center animate-pulse justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-center space-x-3 animate-pulse items-center  w-full px-4 ">
              
              <div></div>
              <h2 className="underline animate-pulse text-blue-950">Other</h2>
             
            </div>
            <ul>
      <li  className="flex flex-col  animate-pulse items-center justify-center">
                <h3 className="font-normal">...</h3>
              </li>
            </ul>
            </div>
          </li>
         
        </ul>
   </div>
  </div>
  )
}

export default ServicesSkeleton
