import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSection from './HeaderSection'

function HeaderSkeleton() {
  return (
    <section id="#" className="header animate-pulse">
      <div className="container animate-pulse header_container">
        <h5>Hello I'm</h5>
        <h1>...</h1>
        <h5 className="text-light animate-pulse">...</h5>
        <CTA/>
        <div className="sec">
        <div className='me'>
          <img  alt="" className='flex animate-pulse rounded-tr-3xl rounded-tl-3xl'/>
        </div>
        <p className='scroll_down animate-pulse'></p>
      </div>
      <HeaderSection/>
        </div>
    </section>
  )
}

export default HeaderSkeleton
