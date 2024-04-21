import React,{useState, useEffect} from 'react'
import { LuImagePlus } from "react-icons/lu";
import axios from 'axios'

function ProfileComponent() {
  const [meData, setMeData]=useState([])
  const [meImage,setMeImage]=useState([])


  const [message,setMessage]=useState('')
  const [successMessage,setSuccessMessage]=useState('')

  const handleImage=(event)=>{
    const files=Array.from(event.target.files)
    setMeImage(files)
  }
  const [fullName,setFullName]=useState('')
  const [title,setTitle]=useState('')
  const [email ,setEmail]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [experienceYear,setExperienceYear]=useState('')
  const [clients, setClients]=useState('')
  const [description,setDescription]=useState('')
  const [projects,setProjects]=useState('')
  const [process,setProcess]=useState(true)
  const addProfile=(e)=>{
    e.preventDefault()
    setProcess(!process)
    const formData=new FormData()
    meImage.forEach(image=>formData.append("file",image))
    formData.append("fullName", fullName)
    formData.append("title",title)
    formData.append("description",description)
    formData.append("email",email)
    formData.append("phoneNumber",phoneNumber)
    formData.append("experienceYear",experienceYear)
    formData.append("clients",clients)
    formData.append("projects",projects)
      const URI="http://localhost:8000/api/v1/me/personal"
      axios.post(URI,formData)
      .then((response)=>{
        if(response.status===200){
          console.log('created')
          setSuccessMessage('profile has been created successfully')
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
        }
      })
      .catch(error=>setMessage(error.message))
    }

const fetchData=()=>{
  const URI="http://localhost:8000/api/v1/me/personal"
  axios.get(URI)
  .then(res=>{
    console.log(res.data[0])
    setMeData(res.data[0])}
    
  )
  .catch(error=>console.log(error.message))
}
useEffect(()=>{
  fetchData()
},[])

const updateProfile=(id)=>{
 setProcess(!process)
  const formDataUpdate=new FormData()
  meImage.forEach(image=>formDataUpdate.append("file",image))
  console.log(meImage)
  formDataUpdate.append("fullName", fullName)
  formDataUpdate.append("title",title)
  formDataUpdate.append("description",description)
  formDataUpdate.append("email",email)
  formDataUpdate.append("phoneNumber",phoneNumber)
  formDataUpdate.append("experienceYear",experienceYear)
  formDataUpdate.append("clients",clients)
  formDataUpdate.append("projects",projects)
  const URI=`http://localhost:8000/api/v1/me/personal/${id}`
  axios.put(URI, formDataUpdate)
  .then(re=>{
    setProcess(!process)
    setSuccessMessage("Data has been Updated successfully")
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
  })
  .catch(error=>setMessage(error.message))
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
           placeholder={meData?.fullName}
           id="fullName" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text"
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          placeholder={meData?.title} 
          id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="email">Email</label>
          <input type="text" 
          value={email} 
          placeholder={meData?.email}
          onChange={(e)=>setEmail(e.target.value)} 
          id="email" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" 
          value={phoneNumber} 
          placeholder={meData?.phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)} 
          id="phoneNumber" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>

          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="experienceYear">Experience Year</label>
          <input type="text"
          value={experienceYear} 
          placeholder={meData?.experienceYear}
          onChange={(e)=>setExperienceYear(e.target.value)} 
          id="experienceYear" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Clients</label>
          <input type="text"
          value={clients} 
          placeholder={meData?.clients}
          onChange={(e)=>setClients(e.target.value)} 
          id="clients" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="projects">Projects</label>
          <input type="text"
          value={projects} 
          placeholder={meData?.projects}
          onChange={(e)=>setProjects(e.target.value)} 
          id="projects" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="description">Description</label>
          <input type="text"
          value={description} 
          placeholder={meData?.description}
          onChange={(e)=>setDescription(e.target.value)} 
          id="description" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <div >
            <div>
              
            </div>
          <label htmlFor='role' className="flex w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
          <div className=" flex items-center    rounded-md border border-solid border-blue-700">
            {meImage.length===0 &&meData?.length===0 &&
            <LuImagePlus className="flex size-20 "/>}
            {meImage.length===0 &&meData?.length!==0 &&
              <ul className='flex'>
                {meData?.pictures.map((item, index)=><li key={index}>
                  <img src={item} alt="" className=' flex size-20 rounded-md object-cover'/>
                </li>)}
              </ul>
           }
            {meData?.length!==0&& 
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
      {meData?.length!==0&&<div className="space-y-1">
          {message && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{message}</textarea>}
          {successMessage && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
          <button onClick={()=>{
            console.log("id:"+meData._id)
            updateProfile(meData._id)}
            } className="px-4 bg-green-700 w-fit rounded-md hover:text-blue-400">
            {message!=='' && <h3 className='text-red-700'>try again to Update</h3>}
            {!message &&successMessage==="" && <h3 >{process?"update":"updating..."}</h3>}
            {successMessage && <h3>updated</h3>}
            </button>
      
          </div>}
          {!meData&&<div className="space-y-1">
        {message && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{message}</textarea>}
        {successMessage && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
        <button onSubmit={addProfile()} className="px-4 bg-green-700 w-fit rounded-md">
          {message!=='' && <h3 className='text-red-700'>try again to create</h3>}
          {!message &&successMessage==="" && <h3>{process?"save":"saving..."}</h3>}
          {successMessage && <h3>saved</h3>}
          </button>
        </div>}
        </div>
      </div>
  )
}
export default ProfileComponent