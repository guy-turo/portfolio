import React,{useState, useEffect} from 'react'
import UploadImage from './helper/UploadImage'
import axios from 'axios'
function AdminPage() {
  const [images, setImages]=useState([])
  const addData=()=>{
    console.log('added')
  }
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/images"
    axios.get(URI)
    .then((res)=>{
      
      console.log(res)
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
      const URI=""
      axios.post(URI,{
        name:fullName,
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
    
  
  return (
    <div className='w-full  flex-col   self-center space-y-2  flex items-center divide-y-2 divide-solid divide-gray-800'>
      <div className="flex flex-col  container space-y-2">
        
        <div className="flex justify-between">
        <h1 className='text-gray-400'>profile</h1>
        <UploadImage/>
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
          value={title} 
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
          value={clients.length} 
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
       
       <div className="flex flex-row   rounded-md w-full h-20 bg-transparent border border-solid border-black shadow-md">
        <ul className=" flex flex-row px-1 space-x-1 items-center overflow-x-auto overflow-y-hidden">
          {images.map(
            (item,index)=>(
            <li key={index}>
              
              <img src={item.imageUrl} alt={item.title} className="w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
            </li>)
            )}
        </ul>
       </div>
      </div>
      <div className="flex   flex-col  container">
        <div className="flex justify-between">
        <h1 className='text-gray-400'>Project</h1>
        <UploadImage/>
        </div>
        <form  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="github">Link Github</label>
          <input type="text" id="github" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="live">Link Live</label>
          <input type="text" id="live" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          
          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
      </div>
      <div className="flex flex-col container">
      <div className="flex justify-between">
        <h1 className='text-gray-400'>Testimonials</h1>
        <UploadImage/>
        </div>
      
        <form  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="testimonial">Testimonial</label>
          <input type="text" id="testimonial" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>

          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>

      </div>
      <div className="flex flex-col  container">
        <h1 className='text-gray-400'>Services</h1>
        <form className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="ui/ux">UI/UX</label>
          <input type="text" id="ui/ux" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Frontend</label>
          <input type="text" id="frontend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="backend">Backend</label>
          <input type="text" id="backend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="other">Other</label>
          <input type="text" id="other" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
      <div className="flex flex-col container">
        <h1 className='text-gray-400'>Social</h1>
        <form  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="link">Link</label>
          <input type="text" id="link" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>

          </div>
          </div>
          
         
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
       
      </div>
      <div className="flex flex-col  container">
        <h1 className='text-gray-400'>Experiences</h1>
        <form  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1 '>
          
          <label htmlFor="frontend">Frontend</label>
          <input type="text" id="frontend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="backend">Backend</label>
          <input type="text" id="backend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="other">Other</label>
          <input type="text" id="other" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
        </div>
  )
}

export default AdminPage