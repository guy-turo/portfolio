import React,{useEffect,useState} from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import '../../../index.css'
import api from '../../../utils/Helper'

const  ExperienceSkeleton=()=> {
 
  
  return (
    <section id='experience'  className='p-2 animate-pulse'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className=" space-y-10 animate-pulse md:space-y-0 md:space-x-10 items-center md:items-start px-20">
         <ul className="flex object-center animate-pulse justify-center items-center ">
          <li className='grid grid-cols-1 animate-pulse place-self-center items-center justify-center  md:grid-cols-2 lg:grid-cols-2 h-fit w-fit space-y-2 md:space-x-2'>
            <div className="items-center animate-pulse hover:bg-slate-600 flex   flex-col space-y-5 bg-slate-900 rounded-2xl w-full md:w-fit    h-full md:h-fit">
          <h2 className='flex animate-pulse text-zinc-300'>Frontend Development</h2>
          <div className=" w-full animate-pulse h-full md:px-20">
            
            <ul  className="grid animate-pulse grid-cols-3 md:grid-cols-2 lg:grid-cols-3 w-full">
             <li className="w-full animate-pulse">
              <article className='flex animate-pulse space-x-2 items-start'>
              <BsPatchCheckFill />
              <div>
              <h4 className='w-10 animate-pulse'>h</h4>
              <small className='flex animate-pulse text-zinc-400'>Experienced</small>
              </div>
            </article>
              </li>
            </ul>
          </div>
          </div>
          <div className="items-center animate-pulse hover:bg-slate-600 flex  flex-col space-y-5 bg-slate-900 rounded-2xl w-full md:w-fit   h-full md:fit">
         <h3 className='flex animate-pulse text-zinc-300'>Backend Development</h3> 
          <div className="  w-full h-full animate-pulse md:px-20">
          <ul className="grid grid-cols-3 animate-pulse md:grid-cols-2 lg:grid-cols-3 w-fit">
           <li className="w-full">
              <article className='flex animate-pulse space-x-2 '>
              <BsPatchCheckFill/>
              <div>
              <h4 className="w-10 animate-pulse">...</h4>
              <small className='flex animate-pulse text-zinc-400'>Experienced</small>
              </div>
               </article>
            </li>
          </ul>
          </div>
          </div>
          </li>
         </ul>
        
      </div>
    </section>
  )
}

export default ExperienceSkeleton
