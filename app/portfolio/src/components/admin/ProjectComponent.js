import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { LuImagePlus } from "react-icons/lu";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";
import UpdateProject from "./helper/UpdateProject"
import { MdDelete } from "react-icons/md";

function ProjectComponent() {
  const [successMessage,setSuccessMessage]=useState('')
  const [message,setMessage]=useState('')

  const [moreFunction, setMoreFunction]=useState(true)
 
  const [imageProjects, setImageProjects]=useState([])
  const [projectsData,setProjectsData]=useState([])
  
  const [addSe, setAddSe]=useState(false)


const handleFileName=(event)=>{
 const files = Array.from(event.target.files)
 setImageProjects(files)
}

  const [title,setTitle]=useState('')
  const [linkGithub,setLinkGithub]=useState('')
  const [linkLive,setLinkLive]=useState('')
  const [description,setDescription]=useState('')
const addProject=(e)=>{
  e.preventDefault()
  const formData= new FormData()
  if(!imageProjects){
    
    setMessage('Invalid image')
  }
  imageProjects.forEach((image)=>formData.append("file", image))
  formData.append("title",title)
  formData.append("description",description)
  formData.append("linkGithub", linkGithub)
  formData.append("linkLive",linkLive)
  const URI="http://localhost:8000/api/v1/me/projects"
    axios.post(URI, formData)
    .then((response)=>{
     setSuccessMessage(response.data)
     setTimeout(()=>{
      setTitle("")
      setDescription("")
      setLinkGithub('')
      setLinkLive("")
      setImageProjects([])
     },1500)
    })
    .catch(error=>setMessage(error))
}
const fetchProjectData=()=>{
  const URI="http://localhost:8000/api/v1/me/projects"
  axios.get(URI)
  .then((res)=>{
    setProjectsData(res.data)
  })
  .catch(error=>
    console.log(error.message)
    )
}
useEffect(()=>{
  fetchProjectData()
},[])
const deleteProject=(id)=>{
  const URI=`http://localhost:8000/api/v1/me/projects/${id}`
  axios.delete(URI)
    .then((res)=>{
      if(res.status===200){
        console.log("deleted")
      }
    })
    .catch((error)=>{
      console.error(error.message)
    })
}

  return (
    <div className="flex space-y-2 flex-col  container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
    <div className="flex justify-between">
   <h1 className='text-gray-400'>Projects</h1>
   <button onClick={()=>setAddSe(!addSe)} className='border border-solid border-gray-400 rounded-md px-1 m-1'>Add project</button>
   </div>
   <div  className={addSe?"":"hidden"}>
    
   <form onSubmit={addProject}  className=' items-start space-y-2 flex flex-col'>
      <div className=' flex flex-col '>
      <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
      <label htmlFor="title">Title</label>
      <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="live">Description</label>
      <input type="text"  value={description} onChange={e=>setDescription(e.target.value)} id="live" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
     
      <label htmlFor="github">Link Github</label>
      <input type="text" value={linkGithub} onChange={e=>setLinkGithub(e.target.value)} id="github" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
      <label htmlFor="live">Link Live</label>
      <input type="text" value={linkLive} onChange={e=>setLinkLive(e.target.value)} id="live" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
     
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
          <input type="file" required multiple id='images'  onChange={handleFileName} accept='image/*' hidden/>
          </div>
          <button type="submit" className="px-4 bg-green-700 w-full rounded-md">
            {message!=='' && <h3 className='text-red-700'>try again</h3>}
            {!message &&successMessage==="" && <h3>save</h3>}
            {successMessage && <h3>saved</h3>}
          </button>
    </form>
   </div>
   <button className='w-fit' onClick={()=>setMoreFunction(!moreFunction)}>{moreFunction?<FaRegCircleLeft className='size-5 text-blue-500'/>:<FaRegCircleRight  className='size-5 text-blue-500'/>} </button>
    {projectsData.length!==0 && 
      <div className="flex flex-row   rounded-md w-full h-fit bg-transparent border border-solid border-black shadow-md">
        <ul  className=" grid grid-cols-3  px-1 space-x-1 items-center justify-center overflow-x-auto overflow-y-hidden">
          {projectsData.map(
            (item,index)=>(
              <li key={index} className='flex border  border-solid border-gray-500  rounded-md p-2 flex-col justify-center items-center'>
                 <div className={`space-x-2 ${moreFunction?"hidden":"block"} flex justify-between w-full`}>
                    <UpdateProject  item={item}/>
                    <button onClick={()=>deleteProject(item._id)} className=' text-red-600 '><MdDelete className="size-5"/></button>
                  </div>
                 <ul className="flex flex-row">
                  {item.pictures.map((el,index)=><li key={index} className="flex flex-row space-x-1">
                    <img src={el} alt='' className="w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
                  </li>)}
                </ul>
                <h2 className="text-blue-950">{item.title}</h2>
                <h3 className="font-normal">{item.description}</h3>
                <div className="flex space-x-2">
                  <a href={item.live} className='cursor-pointer px-3 rounded-md border border-solid border-blue-950 shadow-lg bg-blue-950'>Live</a>
                  <a href={item.linkGithub} className='cursor-pointer px-3 rounded-md border border-solid border-blue-950 shadow-lg bg-blue-950'>Github</a>
                </div>           
               
               </li>
            )
          )}
        </ul>
      </div>}
  </div>
  )
}

export default ProjectComponent
