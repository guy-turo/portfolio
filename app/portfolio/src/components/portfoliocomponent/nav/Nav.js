import React,{useState} from 'react'
import { IoMdHome } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { AiFillMessage } from "react-icons/ai";
import { FaPeoplePulling } from "react-icons/fa6";
import { SiOpenproject } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";
import './nav.css'
import {Link} from "react-router-dom"


function Nav() {
  const [activeNav,setActiveNav]=useState('#')
  return (
    
     <nav>
      <a href="#" className={activeNav==='#'?"active":""}><IoMdHome /></a>
      <a href="#about" onClick={()=>setActiveNav('#about') } className={activeNav==='#about'?"active":""}><FaRegUser /></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience') } className={activeNav==='#experience'?"active":""}><FaBookReader /></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio') } className={activeNav==='#portfolio'?"active":""}><SiOpenproject /></a>
      
      <a href="#services" onClick={()=>setActiveNav('#services') } className={activeNav==='#services'?"active":""}><GrServices /></a>
      <a href="#testimonials" onClick={()=>setActiveNav('#testimonials') } className={activeNav==='#testimonials'?"active":""}><FaPeoplePulling /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact') } className={activeNav==='#contact'?"active":""}><AiFillMessage /></a>
      <a href="#admin" onClick={()=>setActiveNav('#admin') } className={activeNav==='#admin'?"active":""}><Link to="/admin" className='p-0'><SiPhpmyadmin /></Link></a>
    </nav>
    
    
   
  )
}

export default Nav
