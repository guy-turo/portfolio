import React from 'react'
import {BiCheck} from 'react-icons/bi'

const Services=()=>{
  return (
    <section id='services' className='flex animate-pulse flex-col items-center justify-center'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className=' flex items-center animate-pulse justify-center'>
        <ul className='flex animate-pulse items-center'>
        <li className='grid animate-pulse grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-fit w-fit space-y-2 md:space-x-2'>
          <article className='flex animate-pulse rounded-2xl flex-col w-3/4   md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 animate-pulse flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex animate-pulse items-center'>Other</h3>
          </div>
          <ul className='w-full animate-pulse flex flex-col  px-8'>
          <li  className="flex flex-row animate-pulse w-full items-center space-x-2">
             <BiCheck className='text-green-300 animate-pulse size-5'/>
             <p className='flex animate-pulse text-zinc-300 '>...</p>
              </li>
            </ul>
        </article>
          <article className='flex animate-pulse rounded-2xl flex-col w-3/4  md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 animate-pulse flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>UI/UX Design</h3>
          </div>
          <ul className='w-full flex flex-col  animate-pulse px-8'>
          <li className="flex flex-row w-full animate-pulse items-center space-x-2">
             <BiCheck className='text-green-300 animate-pulse size-5'/>
             <p className='flex text-zinc-300 animate-pulse'>...</p>
              </li>
            </ul>
        </article>
        <article className='flex rounded-2xl animate-pulse flex-col w-3/4  md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 animate-pulse flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center animate-pulse'>Front End Developer</h3>
          </div>
          <ul className='w-full flex flex-col animate-pulse px-8'>
             <li className="flex flex-row w-full animate-pulse items-center space-x-2">
             <BiCheck className='text-green-300 animate-pulse size-5'/>
             <p className='flex text-zinc-300 animate-pulse'>...</p>
              </li>
            </ul>
        </article>
        <article className='flex rounded-2xl animate-pulse flex-col w-3/4  md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 animate-pulse flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center animate-pulse'>Back End Developer</h3>
          </div>
          <ul className='w-full flex flex-col animate-pulse px-8'>
             <li className="flex flex-row w-full animate-pulse items-center space-x-2">
             <BiCheck className='text-green-300 animate-pulse size-5'/>
             <p className='flex text-zinc-300 animate-pulse'>...</p>
              </li>
            </ul>
        </article>
       
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services
