import React from 'react'
import me from '../../../assets/me.jpg'
function Portfolio() {
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='items-center justify-items-center container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 space-x-2 space-y-2'>
        
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
          </div>
        </article>
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
         </div>
        </article>
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
         </div>
        </article>
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
        </div>
        </article>
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
         </div>
        </article>
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
          </div>
        </article>
        <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <img src={me} alt=""  className='flex size-36 rounded-3xl'/>
          </div>
          <h3 className="text-zinc-300">Anniversary Reminder</h3>
          <div className='flex flex-row justify-evenly w-full'>
          <a href="https://github.com" target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href="https://www.google.com" target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
           </div>
        </article>
        
       
        
      </div>
    </section>
  )
}

export default Portfolio
