import React,{useState, useEffect} from 'react'
import UploadImage from './helper/UploadImage'

import axios from 'axios'


import TestimonialsComponent from './TestimonialsComponents';
import SocialComponent from './SocialComponent';
import ServicesComponent from './ServicesComponent';
import ProjectComponent from './ProjectComponent';
function AdminPage() {
  const [images, setImages]=useState([])

  // profile
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/images/profileImage"
    axios.get(URI)
    .then((res)=>{
      setImages(res.data)
    })
    .catch(error=>
      console.log(error.message)
      )
  }
useEffect(()=>{
    fetchData()
  },[])
  const [fullName,setFullName]=useState('')
  const [title,setTitle]=useState('')
  const [email ,setEmail]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [experienceYear,setExperienceYear]=useState('')
  const [clients, setClients]=useState('')
  const [description,setDescription]=useState('')
  const addProfile=()=>{
      const URI="http://localhost:8000/api/v1/me"
      axios.post(URI,{
        fullName:fullName,
        title:title,
        email:email,
        phoneNumber:phoneNumber,
        experienceYear:experienceYear,
        clients:clients,
        description:description
      })
      .then((response)=>{
        console.log(response.data)
      })
      .catch(error=>console.log(error))
    }
    
  
  // Project
  
// experience
const [frontendExp,setFrontendExp]=useState('')
  const [backendExp,setBackendExp]=useState('')
  const [otherExp,setOtherExp]=useState('')

const addExperience=()=>{
  const URI="http://localhost:8000/api/v1/me/experiences"
    axios.post(URI,{
     frontend:frontendExp,
      backend:backendExp,
      other:otherExp,
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error=>console.log(error))
} 

return (
    <div className='w-full  flex-col   self-center space-y-2  flex items-center divide-y-2 divide-solid divide-gray-800'>
      <div className="flex flex-col  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md" >
        
        <div className="flex justify-between">
        <h1 className='text-gray-400'>profile</h1>
        <UploadImage model="upload"/>
        </div>
        
        <form onSubmit={addProfile} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col md:flex-row justify-between  md:space-x-4 '>
          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="fullName">Full Name</label>
          <input type="text"
           value={fullName} 
           onChange={(e)=>setFullName(e.target.value)} 
           id="fullName" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text"
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} 
          id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="email">Email</label>
          <input type="text" 
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
          id="email" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" 
          value={phoneNumber} 
          onChange={(e)=>setPhoneNumber(e.target.value)} 
          id="phoneNumber" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          </div>
          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="experienceYear">Experience Year</label>
          <input type="text"
          value={experienceYear} 
          onChange={(e)=>setExperienceYear(e.target.value)} 
          id="experienceYear" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="clients">Clients</label>
          <input type="text"
          value={clients} 
          onChange={(e)=>setClients(e.target.value)} 
          id="clients" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="description">Description</label>
          <input type="text"
          value={description} 
          onChange={(e)=>setDescription(e.target.value)} 
          id="description" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          
          
          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
       {images.length!==0 && <div className="flex flex-row   rounded-md w-full h-20 bg-transparent border border-solid border-black shadow-md">
        <ul className=" flex flex-row px-1 space-x-1 items-center overflow-x-auto overflow-y-hidden">
          {images.map(
            (item,index)=>(
            <li key={index}>
              
              <img src={item.imageUrl} alt={item.title} className="w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
            </li>)
            )}
        </ul>
       </div>}
      </div>
      <ProjectComponent/>
      <TestimonialsComponent/>
      <ServicesComponent/>
      <SocialComponent/>
      <div className="flex flex-col  container shadow-2xl border border-solid border-gray-400 mt-4  p-2 rounded-md">
        <h1 className='text-gray-400'>Experiences</h1>
        <form onSubmit={addExperience} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1 '>
          
          <label htmlFor="frontend">Frontend</label>
          <input type="text" value={frontendExp} onChange={e=>setFrontendExp(e.target.value)} id="frontend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="backend">Backend</label>
          <input type="text" value={backendExp} onChange={e=>setBackendExp(e.target.value)} id="backend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="other">Other</label>
          <input type="text" value={otherExp} onChange={e=>setOtherExp(e.target.value)} id="other" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
        </div>
  )
}

export default AdminPage