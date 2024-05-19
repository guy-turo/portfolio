import React from 'react'

const  AboutSkeleton=()=> {
  
  return (
   <section className='animate-pulse' >
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container animate-pulse flex flex-col md:space-x-8 md:flex-row">
      <div className="about_me  animate-pulse">
        <div className="about_me-image w-60 h-60  animate-pulse">
         
        </div>
      </div>
      <div className="flex items-center animate-pulse md:items-start justify-center flex-col space-y-8 h-3/4">
        <div className='grid grid-cols-1 animate-pulse w-full md:grid-cols-3'>
          <article className='flex flex-col animate-pulse items-center cursor-pointer '>
         
            <h5>Experience</h5>
            <small className='animate-pulse'> Years Working</small>
          </article>
          <article className='flex animate-pulse flex-col items-center cursor-pointer'>
         
            <h5>Clients</h5>
            <small className='animate-pulse'>+ worldwide</small>
          </article>
          <article className='flex animate-pulse flex-col items-center cursor-pointer'>
            <h5>Projects</h5>
            <small className='animate-pulse'>+ Completed </small>
          </article>
        </div>
        <p className='animate-pulse w-10'></p>
        <a href="#contact" className='p-10 bg-blue-400  w-40 h-3 items-center flex rounded-lg text-black font-semibold'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default AboutSkeleton
