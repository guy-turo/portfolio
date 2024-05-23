import React,{useState} from 'react'
import { LuImagePlus } from "react-icons/lu"
import { useGetMeQuery,useAddMeMutation ,useUpdateMeMutation,} from '../../redux_tool.js/service/dataApi/apiDataService'
import ProfileSkeleton from '../helper/skeleton/ProfileSkeleton'
import CustomAlert from '../helper/CustomAlert'

function ProfileComponent({meData}) {
  
  const [meImage,setMeImage]=useState([])
  const {data,isError,isLoading, error}= useGetMeQuery()
  const [addMe,{data:addMeData,isLoading:isLoadingAddMe,isError:isErrorAddMe,error:errorAdd}]=useAddMeMutation() 
  const [updateMe,{data:updateMeData,isLoading:isLoadingUpdateMe,isError:isErrorUpdateMe , error:errorUpdateMe}]=useUpdateMeMutation()

  const handleImage=(event)=>{
    const files=Array.from(event.target.files)
    setMeImage(files)
  }
  const [fullName,setFullName]=useState([data?.fullName])
  const [title,setTitle]=useState([data?.title])
  const [email ,setEmail]=useState([data?.email])
  const [phoneNumber,setPhoneNumber]=useState([data?.phoneNumber])
  const [experienceYear,setExperienceYear]=useState([data?.experienceYear])
  const [clients, setClients]=useState([data?.clients])
  const [description,setDescription]=useState([data?.description])
  const [projects,setProjects]=useState([data?.projects])
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
        const response =await addMe({formData})
        if (response.data) {
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
    }catch(error){
     console.log(error.message)
    }
  }

const updateProfile=async(id)=>{
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
  try{
      const response =await updateMe({id:id, data:formDataUpdate,})
      if(response){
        console.log(response)
      }
  }catch(error){
   console.log(error.message)
  }
}

if(isLoading){
  return <><ProfileSkeleton/></>
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
           placeholder={data?.fullName}
           id="fullName" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="title">Title</label>
          <input type="text"
          value={title} 
          onChange={(e)=>setTitle(e.target.value)}
          placeholder={data?.title} 
          id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>

          <label htmlFor="email">Email</label>
          <input type="text" 
          value={email} 
          placeholder={data?.email}
          onChange={(e)=>setEmail(e.target.value)} 
          id="email" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="text" 
          value={phoneNumber} 
          placeholder={data?.phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)} 
          id="phoneNumber" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>

          <div className='grid grid-cols-2 space-y-1'>
          <label htmlFor="experienceYear">Experience Year</label>
          <input type="text"
          value={experienceYear} 
          placeholder={data?.experienceYear}
          onChange={(e)=>setExperienceYear(e.target.value)} 
          id="experienceYear" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="clients">Clients</label>
          <input type="text"
          value={clients} 
          placeholder={data?.clients}
          onChange={(e)=>setClients(e.target.value)} 
          id="clients" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="projects">Projects</label>
          <input type="text"
          value={projects} 
          placeholder={data?.projects}
          onChange={(e)=>setProjects(e.target.value)} 
          id="projects" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
         
          <label htmlFor="description">Description</label>
          <textarea type="text"
          value={description} 
          placeholder={data?.description}
          onChange={(e)=>setDescription(e.target.value)} 
          id="description" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
          <div >
            <div>
            </div>
          <label htmlFor='role' className="flex w-full overflow-x-auto rounded-md shadow-md border border-solid border-gray-400 items-center space-x-2  cursor-pointer">
          <div className=" flex items-center    rounded-md border border-solid border-blue-700">
            {meImage?.length===0  && data?.length===0 &&
            <LuImagePlus className="flex size-20 "/>}
            {meImage?.length===0 && data?.length!==0 &&
              <ul className='flex'>
                {data?.pictures.map((item, index)=><li key={index}>
                  <img src={item} alt="" className=' flex size-20 rounded-md object-cover'/>
                </li>)}
              </ul>
           }
           {error && isError && <CustomAlert message={error?.data} variant='error' dismissible/>}
            {data&& 
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
      {data&&<div className="space-y-1">
      {isError && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{error}</textarea>}
      {data && isError===undefined && <textarea rows="1" cols="40" value={data?.message} className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center'></textarea>}
      {isErrorUpdateMe && errorUpdateMe && <CustomAlert message={errorUpdateMe?.data} variant='error' dismissible/>}
      {updateMeData && isLoadingUpdateMe===false && <CustomAlert message="updated successfully" variant='success' dismissible/>}
 
      <button disabled={isLoadingUpdateMe} onClick={()=>{updateProfile(data._id,)}
        } className="px-4 bg-green-700 w-fit rounded-md hover:text-blue-400">
            {isErrorUpdateMe&& <h3 className='text-red-700'>try again to Update </h3>}
           {<h3 >{isLoadingUpdateMe?"updating...":"update"}</h3>}
            {updateMeData!==undefined&& data &&error===undefined && <h3>updated</h3>}
            </button>
          </div>}
          {!data&&<div className="space-y-1">
        {isErrorAddMe && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{errorAdd}</textarea>}
        {addMeData!==undefined && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
        {errorAdd && isErrorAddMe && <CustomAlert message={errorAdd?.data} variant='error' dismissible/>}
        {addMeData && isLoadingAddMe===false && <CustomAlert message="Added successfully" variant='success' dismissible/>}
 
        <button disabled={isLoadingAddMe} onSubmit={addProfile()} className="px-4 bg-green-700 w-fit rounded-md">
          {isErrorAddMe && <h3 className='text-red-700'>try again to create</h3>}
          { <h3>{isLoadingAddMe?"saving...":"save"}</h3>}
          {addMeData!==undefined && <h3>saved</h3>}
          </button>
        </div>}
        </div>
      </div>
  )
}

// const mapStateToProps= (state)=>{
//   return{
//     meData:state.me,
//     updateData:state.updateMe,
//   }
// }
// const mapDispatchToProps=(dispatch)=>{
// return {
//   fetchMe: ()=>dispatch(fetchMe())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)
export default ProfileComponent