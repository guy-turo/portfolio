import React from 'react'
import './about.css'
import me from '../../../assets/me.jpg'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
function About() {
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container flex flex-col md:space-x-8 md:flex-row">
      <div className="about_me ">
        <div className="about_me-image">
          <img src={me} alt="About Image" />
        </div>
      </div>
      <div className="flex items-center md:items-start justify-center flex-col space-y-8 h-3/4">
        <div className='grid grid-cols-1  w-full md:grid-cols-3'>
          <article className='flex flex-col items-center cursor-pointer '>
          <FaAward  className='about_icon'/>
            <h5>Experience</h5>
            <small>5+ Years Working</small>
          </article>
          <article className='flex flex-col items-center cursor-pointer'>
          <FaUsers  className='about_icon'/>
            <h5>Clients</h5>
            <small>20+ worldwide</small>
          </article>
          <article className='flex flex-col items-center cursor-pointer'>
          <AiOutlineFundProjectionScreen  className='about_icon'/>
            <h5>Projects</h5>
            <small>25+ Completed </small>
          </article>
        </div>
        <p>Senior Software Engineer
          🧊Innovator and full-stack software engineer, open source development, systems architecture and product design, chatbots and AI models, FinTech and blockchain development.
          🔑Imagination is the centerpiece of creation; limitation is the barrier to cross.🪞If we have not yet conquered death, it is because we are limited, simply our imagination is limited at the moment.
        </p>
        <a href="#contact" className='p-10 bg-blue-400 w-40 h-3 items-center flex rounded-lg text-black font-semibold'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
