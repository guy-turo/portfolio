import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSection from './HeaderSection'
import me from '../../../assets/me.jpg'
function Header() {
  return (
    <section id="#" className="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Kasongo Kakumbi Guy</h1>
        <h5 className="text-light">Fullstack Developer & Software Engineer</h5>
        <CTA/>
        <div className="sec">
        <div className='me'>
          <img src={me} alt="" className='flex rounded-tr-3xl rounded-tl-3xl'/>
        </div>
        <p className='scroll_down'></p>
      </div>
      <HeaderSection/>
        </div>
       
    </section>
  )
}

export default Header
