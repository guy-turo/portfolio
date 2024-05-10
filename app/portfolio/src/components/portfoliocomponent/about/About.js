import React,{useEffect,useState} from 'react'
import './about.css'
import { FaAward } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import api from '../../../utils/Helper';
const  About=()=> {
  const [image,setImage]=useState('')
  const [aboutData, setAboutData]=useState([])
  
  const fetchData=()=>{
    const URI="/me/personal"
    api.get(URI)
    .then(res=>{
      setImage(res.data[0].pictures[1])
      setAboutData(res.data[0])}
    )
    .catch(error=>console.log(error.message))
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container flex flex-col md:space-x-8 md:flex-row">
      <div className="about_me ">
        <div className="about_me-image">
          <img src={image} alt="About Image" />
        </div>
      </div>
      <div className="flex items-center md:items-start justify-center flex-col space-y-8 h-3/4">
        <div className='grid grid-cols-1  w-full md:grid-cols-3'>
          <article className='flex flex-col items-center cursor-pointer '>
          <FaAward  className='about_icon'/>
            <h5>Experience</h5>
            <small>{aboutData.experienceYear}+ Years Working</small>
          </article>
          <article className='flex flex-col items-center cursor-pointer'>
          <FaUsers  className='about_icon'/>
            <h5>Clients</h5>
            <small>{aboutData.clients}+ worldwide</small>
          </article>
          <article className='flex flex-col items-center cursor-pointer'>
          <AiOutlineFundProjectionScreen  className='about_icon'/>
            <h5>Projects</h5>
            <small>{aboutData.projects}+ Completed </small>
          </article>
        </div>
        <p>{aboutData.description}</p>
        <a href="#contact" className='p-10 bg-blue-400 w-40 h-3 items-center flex rounded-lg text-black font-semibold'>Let's Talk</a>
      </div>
    </div>
   </section>
  )
}

export default About
