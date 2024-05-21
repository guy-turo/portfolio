import React,{useState,useEffect} from 'react'
import api from "../../utils/Helper"
import { LuImagePlus } from "react-icons/lu";
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";
import UpdateProject from "./helper/UpdateProject"
import { MdDelete } from "react-icons/md";
import { useGetProjectQuery,useDeleteProjectMutation, useAddProjectMutation,  } from '../../redux_tool.js/service/dataApi/apiDataService';
import ProjectSkeleton from '../helper/skeleton/ProjectSkeleton';
import CustomAlert from '../helper/CustomAlert';
import Loading from '../helper/loadingComponent/Loading';

function ProjectComponent() {
  const [moreFunction, setMoreFunction]=useState(true)
 
  const [imageProjects, setImageProjects]=useState([])

  const [addSe, setAddSe]=useState(false)

const {data:projectsData, isLoading, isError, error}=useGetProjectQuery()
const [deleteProject,{data:deleteData, isLoading:deleteLoading, isError:deleteIsError, error:deleteError}]= useDeleteProjectMutation()
const [addProject,{data:addData, isLoading:addLoading,isError:addIsError,error:addError}]=useAddProjectMutation() 
const handleFileName=(event)=>{
 const files = Array.from(event.target.files)
 setImageProjects(files)
}

  const [title,setTitle]=useState('')
  const [linkGithub,setLinkGithub]=useState('')
  const [linkLive,setLinkLive]=useState('')
  const [description,setDescription]=useState('')
const handleAddProject=async(e)=>{
  e.preventDefault()
  try{
    const formData= new FormData()
    if(!imageProjects){
      alert("please select image")
     return
    }
    imageProjects.forEach((image)=>formData.append("file", image))
    formData.append("title",title)
    formData.append("description",description)
    formData.append("linkGithub", linkGithub)
    formData.append("linkLive",linkLive)
    const response= await addProject({data:formData})
    if(response){
      setTimeout(()=>{
        setTitle("")
        setDescription("")
        setLinkGithub('')
        setLinkLive("")
        setImageProjects([])
       },1500)
    }
  }catch(error){
    console.error(error.message)
  }
}

const handleDeleteProject=async(id)=>{
  try{
    const response = await deleteProject(id)
    if(response){
      console.log(response)
    }
  }catch(error){
    console.error(error)
  }
 
}
if(isLoading){
  return <><ProjectSkeleton/></>
}
  return (
    <div className="flex space-y-2 flex-col  container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
    <div className="flex justify-between">
   <h1 className='text-gray-400'>Projects</h1>
   <button onClick={()=>setAddSe(!addSe)} className='border border-solid border-gray-400 rounded-md px-1 m-1'>Add project</button>
   </div>
   <div  className={addSe?"":"hidden"}>
    
   <form onSubmit={handleAddProject}  className=' items-start space-y-2 flex flex-col'>
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
          <button type="submit" className="px-4 bg-green-700 w-fit rounded-md">
            {addIsError && <h3 className='text-red-700'>try again</h3>}
            {!addIsError &&addData===undefined && <h3>{addLoading?"saving...":"save"}</h3>}
            {addData && <h3>saved</h3>}
          </button>
    </form>
   </div>
   <button className='w-fit' onClick={()=>setMoreFunction(!moreFunction)}>{moreFunction?<FaRegCircleLeft className='size-5 text-blue-500'/>:<FaRegCircleRight  className='size-5 text-blue-500'/>} </button>
    {projectsData.length!==0 && 
      <div className=" rounded-md w-full h-fit bg-transparent border border-solid border-black shadow-md">
        <ul  className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-1 sm:space-y-1 space-x-1 items-center justify-around overflow-x-auto overflow-y-hidden">
          {projectsData.map(
            (item,index)=>(
              <li key={index} className='flex border  border-solid border-gray-500  rounded-md p-2 flex-col justify-center items-center'>
                 <div className={`space-x-2 ${moreFunction?"hidden":"block"} flex justify-between w-full`}>
                    <UpdateProject  item={item}/>
                    <button onClick={()=>handleDeleteProject(item._id)} className=' text-red-600 '><MdDelete className="size-5"/> {deleteLoading &&<Loading/>}</button>
                  </div>
                <img src={item.pictures[0]} alt='' className="w-16 h-16  shadow-md rounded-md pb-1 border border-solid border-gray-500"/>
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
      {error && isError && <CustomAlert message={error.data} variant='error' dismissible/>}
        {deleteError && deleteIsError && <CustomAlert message={deleteError.data} variant='error' dismissible/>}
        {deleteData && deleteIsError===false && <CustomAlert message="Delete successfully" variant='success' dismissible/>}
        {addError && addIsError && <CustomAlert message={addError.data} variant='error' dismissible/>}
      {addData && addIsError===false && <CustomAlert message="Add successfully" variant='success' dismissible/>}
 
  </div>
  )
}

export default ProjectComponent
