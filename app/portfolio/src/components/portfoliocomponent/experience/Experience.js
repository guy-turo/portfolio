import React,{useEffect,useState} from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import '../../../index.css'
import api from '../../../utils/Helper'

function Experience() {
  const [experiencesData,setExperiencesData]=useState([])
  const fetchExperiences=()=>{
    const URI=`/me/experiences`
    api.get(URI)
    .then((response)=>{
      setExperiencesData(response.data)
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

      <div className=" space-y-10 md:space-y-0 md:space-x-10 items-center md:items-start px-20">
         <ul className="flex object-center justify-center items-center ">
          {experiencesData && experiencesData.map((item, index)=><li className='grid grid-cols-1 place-self-center items-center justify-center  md:grid-cols-2 lg:grid-cols-2 h-fit w-fit space-y-2 md:space-x-2'>
            <div className="items-center hover:bg-slate-600 flex   flex-col space-y-5 bg-slate-900 rounded-2xl w-full md:w-fit    h-full md:h-fit">
          <h2 className='flex text-zinc-300'>Frontend Development</h2>
          <div className=" w-full h-full md:px-20">
            
            <ul  className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 w-full">
              {experiencesData && item.frontend.map((item,index)=><li key={index} className="w-full ">
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
          <div className="items-center hover:bg-slate-600 flex  flex-col space-y-5 bg-slate-900 rounded-2xl w-full md:w-fit   h-full md:fit">
         <h3 className='flex text-zinc-300'>Backend Development</h3> 
          <div className="  w-full h-full md:px-20">
          <ul className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 w-fit">
            {experiencesData&& item.backend.map((item, index)=><li className="w-full">
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
          </li>)}
         </ul>
        
      </div>
    </section>
  )
}

export default Experience
