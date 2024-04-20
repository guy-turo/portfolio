import React,{useEffect,useState} from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import '../../../index.css'
import axios from 'axios'

function Experience() {
  const [experiencesData,setExperiencesData]=useState([])
  const fetchExperiences=()=>{
    const URI=`http://localhost:8000/api/v1/me/experiences`
    axios.get(URI)
    .then((response)=>{
      console.log(response.data[0])
      setExperiencesData(response.data[0])
    })
    .catch(error=>console.log(error.message))
  }
  useEffect(()=>{
    fetchExperiences()
  },[])
  
  return (
    <section id='experience'  className='p-2'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="flex flex-col md:flex-row  md:justify-evenly space-y-10 md:space-y-0 md:space-x-10 items-center md:items-start px-20">
         <div className="items-center hover:bg-slate-600 flex   flex-col space-y-5 bg-slate-900 rounded-2xl w-full md:w-1/2    h-full md:h-fit">
          <h2 className='flex text-zinc-300'>Frontend Development</h2>
          <div className=" w-full h-full md:px-20">
            
            <ul  className="grid grid-cols-3 w-full">
              {experiencesData && experiencesData.frontend.map((item,index)=><li key={index} className="w-full">
              <article className='flex space-x-2 items-start'>
              <BsPatchCheckFill />
              <div>
              <h4>{item}</h4>
              <small className='flex text-zinc-400'>Experienced</small>
              </div>
            </article>
              </li>)}
            </ul>
            
           
          </div>
          </div>
          <div className="items-center hover:bg-slate-600 flex  flex-col space-y-5 bg-slate-900 rounded-2xl w-full md:w-1/2  h-full md:fit">
         <h3 className='flex text-zinc-300'>Backend Development</h3> 
          <div className="  w-full h-full md:px-20">
          <ul className="grid grid-cols-3   w-fit">
            {experiencesData&& experiencesData.backend.map((item, index)=><li className="w-full">
              <article className='flex  space-x-2 '>
              <BsPatchCheckFill/>
              <div>
              <h4>{item}</h4>
              <small className='flex text-zinc-400'>Experienced</small>

              </div>
               </article>
            </li>)}
          </ul>
          
          </div>

        
            
           
          </div>
      </div>
    </section>
  )
}

export default Experience
