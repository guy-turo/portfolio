import React from 'react'
const  PortfolioSkeleton=()=> {
  return (
    <section id='portfolio' className='animate-pulse'>
       <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className=''>
        <ul className=' grid  animate-pulse sm:grid-cols-3 sm:space-y-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center'>
         <li  className='h-fit justify-center animate-pulse flex items-center'>
          <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <ul>
            <li className='animate-pulse'>
              <img  alt=""  className='flex animate-pulse size-36 rounded-3xl'/>
              </li>
            </ul>
          </div>
          <div className="flex animate-pulse items-center justify-between w-full px-3 ">
            <div></div>
          <h3 className="text-zinc-300">...</h3>
          </div>
          <div className='flex flex-row animate-pulse justify-evenly w-full'>
          <a target='-blank' className='text-zinc-300 animate-pulse bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a target='_black' className='border-2 animate-pulse border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
          </div>
        </article>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default PortfolioSkeleton
