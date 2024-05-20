import React from 'react'
const  CTASkeleton=()=>{
   
  return (
    <div className="cta">
      <a className="animate-pulse" rel="noreferrer"> ...</a>
       <div className='w-5 h-5 rounded-full bg-blue-950 animate-pulse'></div>
      <a href="#contact" className='btn btn-primary animate-pulse'>Let's Talk</a>
    </div>
  )
}

export default CTASkeleton
