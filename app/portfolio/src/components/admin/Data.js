import React,{useState, useEffect} from 'react'
import UploadImage from './helper/UploadImage'
import axios from 'axios'
import { LuImagePlus } from "react-icons/lu";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";
function AdminPage() {

  const [moreFunction, setMoreFunction]=useState(false)
  const [images, setImages]=useState([])
  const [imageProject, setImageProject]=useState([])
  const [imageTestimonial,setImageTestimonial]=useState([])

  const [message,setMessage]=useState('')
  const [successMessage, setSuccessMessage]=useState("")

  const [imageProjects,setImageProjects]=useState([])

  const [imageTestimonials,setImageTestimonials]=useState([])
  const [nameT,setNameT]=useState('')
  const [titleT,setTitleT]=useState('')
  const [testimonialsT,setTestimonialsT]=useState('')

const handleFileName=(event)=>{
 const files = event.target.files
 setImageProjects([...files])
}

const handleTestimonialFileName=(event)=>{
  const files=event.target.files
  setImageTestimonials([...files])
}
  const addData=()=>{
    console.log('added')
  }
// testimonials
const fetchTestimonialData=()=>{
  const URI="http://localhost:8000/api/v1/me/testimonials"
  axios.get(URI)
  .then((res)=>{
    console.log(res)
    setImageTestimonial(res.data)
  })
  .catch(error=>
    console.log(error.message)
    )
}


// project
const fetchProjectData=()=>{
  const URI="http://localhost:8000/api/v1/images/projectImage"
  axios.get(URI)
  .then((res)=>{
    
    console.log(res)
    setImageProject(res.data)
  })
  .catch(error=>
    console.log(error.message)
    )
}


  // profile
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/images/profileImage"
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
    fetchTestimonialData()
    fetchProjectData()
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
    
  const addTestimonial=(e)=>{
    e.preventDefault()
    if(!testimonialsT){
      setMessage("please select a file to upload")
      return
    }
      const formData=new FormData()
      if(imageTestimonials.length>0){
        for(let i=0;i<imageTestimonials.length;i++){
          formData.append('file',imageTestimonials[i])
        }
      }
      formData.append('name', nameT)
      formData.append('title',titleT)
      formData.append('testimonials',testimonialsT)
    const URI="http://localhost:8000/api/v1/me/testimonials"
      axios.post(URI,formData)
      .then((response)=>{
        if(response.status===200){
          setMessage('testimonial has been created')
          setTimeout(()=>{
            
            setImageTestimonials([])
            setSuccessMessage('')
            setNameT("")
            setTitleT("")
            setTestimonialsT("")
          },1500)
          
        }
      })
      .catch(error=>console.log(error))
  }
  // Project
  const [titleP,setTitleP]=useState('')
  const [linkGithubP,setLinkGithubP]=useState('')
  const [linkLiveP,setLinkLiveP]=useState('')
const addProject=()=>{
  const URI="http://localhost:8000/api/v1/me/projects"
    axios.post(URI,{
      title:titleP,
      linkGithub:linkGithubP,
     linkLive:linkLiveP,
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error=>console.log(error))
}
// Services
const [userExpS,setUserExpS]=useState('')
  const [frontendS,setFrontendS]=useState('')
  const [backendS,setBackendS]=useState('')
  const [otherS, setOtherS]=useState('')
const addService=()=>{
  const URI="http://localhost:8000/api/v1/me/services"
    axios.post(URI,{
      userExp:userExpS,
      frontend:frontendS,
     backend:backendS,
     other:otherS
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error=>console.log(error))
}
// socilaContact
const [titleSC,setTitleSC]=useState('')
  const [linkSC,setLinkSC]=useState('')

const addSocial=()=>{
  const URI="http://localhost:8000/api/v1/me/socials"
    axios.post(URI,{
     title:titleSC,
      link:linkSC,
    
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error=>console.log(error))
} 
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
      <div className="flex flex-col  container space-y-2">
        
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
      <div className="flex space-y-2 flex-col  container">
       
        <h1 className='text-gray-400'>Project</h1>
       
        
        <form onSubmit={addProject}  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" value={titleP} onChange={(e)=>setTitleP(e.target.value)} id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="github">Link Github</label>
          <input type="text" value={linkGithubP} onChange={e=>setLinkGithubP(e.target.value)} id="github" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="live">Link Live</label>
          <input type="text" value={linkLiveP} onChange={e=>setLinkLiveP(e.target.value)} id="live" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          </div>
          </div>
          <div className="">
              <label htmlFor='images' className="flex w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
              <div className=" flex items-center     rounded-md border border-solid border-blue-700">
                {imageProjects===null &&<LuImagePlus className="flex size-20 "/>}
                {imageProjects!==null&& (
               <ul className='flex bg-blue-900 items-center'>
                  {imageProjects.map((item,index)=><li key={index} className="">
                  <img src={URL.createObjectURL(item)} alt="" className='size-20  rounded-md object-cover'/>
                    </li>)}
               </ul>
                )}
              </div>
              <h2 className="flex font-normal px-2">Select project pictures</h2>
             </label>
              <input type="file" multiple id='images'  onChange={handleFileName} accept='image/*' hidden/>
              </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
        {imageProject.length!==0 && 
          <div className="flex flex-row   rounded-md w-full h-20 bg-transparent border border-solid border-black shadow-md">
            <ul  className=" flex flex-row px-1 space-x-1 items-center overflow-x-auto overflow-y-hidden">
              {imageProject.map(
                (item,index)=>(
                  <li key={index}>
                  <img src={item.imageUrl} alt={item.title} className="w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
                  </li>
                )
              )}
            </ul>
          </div>}
      </div>
      <div className="flex space-y-2 flex-col container">
      
        <h1 className='text-gray-400'>Testimonials</h1>
        
        
      
        <form onSubmit={addTestimonial}  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="name">Name</label>
          <input type="text" value={nameT} onChange={(e)=>setNameT(e.target.value)} id="name" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text" value={titleT} onChange={(e)=>setTitleT(e.target.value)} id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="testimonial">Testimonial</label>
          <input type="text" value={testimonialsT} onChange={(e)=>setTestimonialsT(e.target.value)} id="testimonial" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>


          </div>
          <div >
              <label htmlFor='files' className="flex w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
              <div className=" flex items-center    rounded-md border border-solid border-blue-700">
                {imageTestimonials===null &&<LuImagePlus className="flex size-20 "/>}
                {imageTestimonials!==null&& 
                  <ul className="flex bg-blue-900">
                    {imageTestimonials.map((item, index)=>
                      <li key={index}>

                        <img src={URL.createObjectURL(item)} alt="" className=' flex size-20 rounded-md object-cover'/>
                      </li>
                   )}
                  </ul>
                 }
              </div>
              <h2 className="flex font-normal px-2">Select testimonial pictures</h2>
             </label>
            <input type="file" multiple id='files'  onChange={handleTestimonialFileName} accept='image/*' hidden/>
            
              </div>
              <div className="space-y-1">
              {message && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{message}</textarea>}
              {successMessage && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
              <button type="submit" className="px-4 bg-green-700 w-full rounded-md">
                {message && <h3 className='text-red-700'>try again</h3>}
                {!message &&successMessage==="" && <h3>save</h3>}
                {successMessage && <h3>saved</h3>}
                </button>
          
              </div>
        </form>
        <button onClick={()=>setMoreFunction(!moreFunction)}>{moreFunction?<FaRegCircleLeft/>:<FaRegCircleRight/>} </button>
        {imageTestimonial.length!==0 && <div className="flex flex-row   rounded-md w-full h-full bg-transparent border border-solid border-black shadow-md">
        <ul className=" grid grid-cols-1 mt-1 mb-1 sm:grid-cols-2 md:grid-cols-3 px-1 justify-center  sm:space-y-1 space-x-1 items-center overflow-y-auto overflow-y-hidden">
          {imageTestimonial.map(
            (item,index)=>(
            <li key={index} className=' border mb-1 border-solid border-gray-400  space-y-1 rounded-md w-60 h-60 items-center flex flex-col justify-center'>
                <ul className='flex flex-row px-1 space-x-1 items-center overflow-x-auto overflow-y-hidden'>
                  {item.pictures.map((pic,index)=><li key={index}>
                    <img src={pic} alt={item.title} className="w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
                  </li>
                )}
                </ul>
              <h2 className='underline px-1 rounded-sm'>{item.name}</h2>
              <h2 className='underline font-normal px-1 rounded-sm'>{item.title}</h2>
              <h3 className='   border-solid font-normal border-gray-400  rounded-sm'>{item.testimonials}</h3>
              
              
              <div className={`space-x-2 ${moreFunction?"hidden":"block"}`}>
                <button className='border border-solid border-gray-400 px-1 rounded-md'>Update</button>
                <button className='border border-solid bg-red-800 border-gray-400 px-1 rounded-md'>Delete</button>
              </div>
            </li>)
            )}
        </ul>
       </div>}
      </div>
      <div className="flex flex-col  container">
        <h1 className='text-gray-400'>Services</h1>
        <form onSubmit={addService} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="ui/ux">UI/UX</label>
          <input type="text" value={userExpS} onChange={e=>setUserExpS(e.target.value)} id="ui/ux" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Frontend</label>
          <input type="text" value={frontendS} onChange={e=>setFrontendS(e.target.value)} id="frontend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="backend">Backend</label>
          <input type="text" value={backendS} onChange={e=>setBackendS(e.target.value)} id="backend" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="other">Other</label>
          <input type="text" value={otherS} onChange={e=>setOtherS(e.target.value)} id="other" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
      <div className="flex flex-col container">
        <h1 className='text-gray-400'>Social</h1>
        <form onSubmit={addSocial} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" value={titleSC} onChange={e=>setTitleSC(e.target.value)} id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="link">Link</label>
          <input type="text" value={linkSC} onChange={e=>setLinkSC(e.target.value)} id="link" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <button type="submit" className="px-4 bg-blue-700 rounded-sm">Save</button>
        </form>
      </div>
      <div className="flex flex-col  container">
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