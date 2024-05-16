import React,{useState, useEffect} from 'react'
import { LuImagePlus } from "react-icons/lu";
import api from "../../utils/Helper"
import { connect } from 'react-redux';
import { fetchMe } from '../../redux/personalRequestRedux/me/me_actions';
import { useDispatch } from 'react-redux';
import { 
  addMeRequest,
  addMeSuccess, 
  addMeFailure,  
  updateMeRequest,
  updateMeSuccess,
  updateMeFailure
} from '../../redux/personalRequestRedux/me/me_actions';

function ProfileComponent({meData,fetchMe}) {
  
  const [meImage,setMeImage]=useState([])
  const dispatch= useDispatch()

  const [message,setMessage]=useState('')
  const [successMessage,setSuccessMessage]=useState('')

  const handleImage=(event)=>{
    const files=Array.from(event.target.files)
    setMeImage(files)
  }
  const [fullName,setFullName]=useState([meData?.data[0]?.fullName])
  const [title,setTitle]=useState([meData?.data[0]?.title])
  const [email ,setEmail]=useState([meData?.data[0]?.email])
  const [phoneNumber,setPhoneNumber]=useState([meData?.data[0]?.phoneNumber])
  const [experienceYear,setExperienceYear]=useState([meData?.data[0]?.experienceYear])
  const [clients, setClients]=useState([meData?.data[0]?.clients])
  const [description,setDescription]=useState([meData?.data[0]?.description])
  const [projects,setProjects]=useState([meData?.data[0]?.projects])
  const [process,setProcess]=useState(true)
  const addProfile=async(e)=>{
    e.preventDefault()
    try{
         const formData = new FormData()
        meImage.forEach(image => formData.append("file", image))
        formData.append("fullName", fullName)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("email", email)
        formData.append("phoneNumber", phoneNumber)
        formData.append("experienceYear", experienceYear)
        formData.append("clients", clients)
        formData.append("projects", projects)
        const URI = "/me/personal"
        dispatch(addMeRequest)
        const response =await api.post(URI, formData)
        if (response.status === 200) {
          const data = response.data
          setTimeout(()=>{
            setMeImage([])
            setTitle('')
            setFullName('')
            setDescription('')
            setEmail('')
            setPhoneNumber('')
            setExperienceYear('')
            setClients('')
            setProjects('')
          },1500)
          dispatch(addMeSuccess(data))
      }
    }catch(error){
      dispatch(addMeFailure(error.message))
    }
  }
useEffect(()=>{
  fetchMe()
},[])
const updateProfile=async(id)=>{
  try{
      const formDataUpdate = new FormData()
      meImage.forEach(image => formDataUpdate.append("file", image))
      formDataUpdate.append("fullName", fullName)
      formDataUpdate.append("title", title)
      formDataUpdate.append("description", description)
      formDataUpdate.append("email", email)
      formDataUpdate.append("phoneNumber", phoneNumber)
      formDataUpdate.append("experienceYear", experienceYear)
      formDataUpdate.append("clients", clients)
      formDataUpdate.append("projects", projects)
      const URI=`/me/personal/${id}`
      dispatch(updateMeRequest())
      const response =await api.put(URI, formDataUpdate)
      if (response.status === 200) {
        const data = response.data
        setTimeout(()=>{
          setMeImage([])
          setTitle('')
          setFullName('')
          setDescription('')
          setEmail('')
          setPhoneNumber('')
          setExperienceYear('')
          setClients('')
          setProjects('')
        },1500)
        dispatch(updateMeSuccess(data))
    }
  }catch(error){
    dispatch(updateMeFailure(error.message))
  }
}
  return (
    <div className="flex flex-col  container space-y-2 shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md" >
        <h1 className='text-gray-400'>profile</h1>
        <div  className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col md:flex-row justify-between  md:space-x-4 '>
         
          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="fullName">Full Name</label>
          <input type="text"
           value={fullName} 
           onChange={(e)=>setFullName(e.target.value)}
           placeholder={meData?.data[0]?.fullName}
           id="fullName" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text"
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          placeholder={meData?.data[0]?.title} 
          id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="email">Email</label>
          <input type="text" 
          value={email} 
          placeholder={meData?.data[0]?.email}
          onChange={(e)=>setEmail(e.target.value)} 
          id="email" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" 
          value={phoneNumber} 
          placeholder={meData?.data[0]?.phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)} 
          id="phoneNumber" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>

          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="experienceYear">Experience Year</label>
          <input type="text"
          value={experienceYear} 
          placeholder={meData?.data[0]?.experienceYear}
          onChange={(e)=>setExperienceYear(e.target.value)} 
          id="experienceYear" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Clients</label>
          <input type="text"
          value={clients} 
          placeholder={meData?.data[0]?.clients}
          onChange={(e)=>setClients(e.target.value)} 
          id="clients" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="projects">Projects</label>
          <input type="text"
          value={projects} 
          placeholder={meData?.data[0]?.projects}
          onChange={(e)=>setProjects(e.target.value)} 
          id="projects" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="description">Description</label>
          <textarea type="text"
          value={description} 
          placeholder={meData?.data[0]?.description}
          onChange={(e)=>setDescription(e.target.value)} 
          id="description" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <div >
            <div>
              
            </div>
          <label htmlFor='role' className="flex w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
          <div className=" flex items-center    rounded-md border border-solid border-blue-700">
            {meImage.length===0  && meData?.data?.length===0 &&
            <LuImagePlus className="flex size-20 "/>}
            {meImage.length===0 && meData?.data?.length!==0 &&
              <ul className='flex'>
                {meData?.data[0]?.pictures.map((item, index)=><li key={index}>
                  <img src={item} alt="" className=' flex size-20 rounded-md object-cover'/>
                </li>)}
              </ul>
           }
            {meData?.data?.length!==0&& 
              <ul className='flex'>
                {meImage.map((item, index)=><li key={index}>
                <img src={URL.createObjectURL(item)} alt="" className=' flex size-20 rounded-md object-cover'/>
                </li>)}
              </ul>
             }
          </div>
          <h2 className="flex font-normal px-2 rounded bg-blue-950 ">Select image</h2>
         </label>
        <input type="file" required multiple id='role'  onChange={handleImage} accept='image/*' hidden/>
        
      </div>
      <p className='flex font-mono  w-full text-gray-400'>You only need 2 pictures</p>
      {meData?.data?.length!==0&&<div className="space-y-1">
          {meData.error && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{meData.error}</textarea>}
          {meData?.data?.length!==0 && meData.error==='' && <textarea rows="1" cols="40" value={meData?.data?.message} className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
          <button onClick={()=>{
            updateProfile(meData?.data[0]?._id)}
            } className="px-4 bg-green-700 w-fit rounded-md hover:text-blue-400">
            {meData.error!==''&&meData.loading===false && <h3 className='text-red-700'>try again to Update</h3>}
           {meData.error==="" &&!meData.data&&<h3 >{meData.loading?"update":"updating..."}</h3>}
            {meData.loading===false&& meData.data &&meData.error==='' && <h3>updated</h3>}
            </button>
          </div>}
          {!meData&&<div className="space-y-1">
        {meData.error && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{meData.error}</textarea>}
        {meData.data && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
        <button onSubmit={addProfile()} className="px-4 bg-green-700 w-fit rounded-md">
          {meData!=='' && <h3 className='text-red-700'>try again to create</h3>}
          {!meData &&meData?.data?.length!==0 && <h3>{process?"save":"saving..."}</h3>}
          {successMessage && <h3>saved</h3>}
          </button>
        </div>}
        </div>
      </div>
  )
}

const mapStateToProps= (state)=>{
  return{
    meData:state.me,
    updateData:state.updateMe,
  }
}
const mapDispatchToProps=(dispatch)=>{
return {
  fetchMe: ()=>dispatch(fetchMe())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)