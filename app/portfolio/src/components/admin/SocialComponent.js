import React,{useEffect, useState} from 'react'
import api from "../../utils/Helper"
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";
import UpdateSocials from './helper/UpdateSocial'

function SocialComponent() {
  const [successMessage,setSuccessMessage]=useState('')
  const [message,setMessage]=useState('')

  const [moreFunction, setMoreFunction]=useState(true)
  const [addSo, setAddSo]=useState(false)

  const [titleSC,setTitleSC]=useState('')
  const [linkSC,setLinkSC]=useState('')

  const [socialsData, setSocialData]=useState([])
  const [process,setProcess]=useState(true)
const addSocial=(e)=>{
  e.preventDefault()
  setProcess(!process)
  const URI="http://localhost:8000/api/v1/me/socials"
    api.post(URI,{
     title:titleSC,
      link:linkSC,
    })
    .then((response)=>{
      if(response.status===200){
        setProcess(!process)
        setSuccessMessage('success')
        setTimeout(() => {
          setLinkSC('')
          setTitleSC('')
          setSuccessMessage("")
        }, 1500);
      }
    })
    .catch(error=>setMessage(error.message))
}


const deleteSocial=(id)=>{
  const URI=`http://localhost:8000/api/v1/me/socials/${id}`
  api.delete(URI)
  .then((response)=>{
    if(response.status===200){
     console.log(response.data)
    }
  })
  .catch(error=>console.error(error.message))
}
const fetchData=()=>{
  const URI="http://localhost:8000/api/v1/me/socials"
  api.get(URI)
  .then((response)=>{
    if(response.status===200){
      setSocialData(response.data)
    }
  })
  .catch(error=>console.error(error.message))
}
useEffect(()=>{
  fetchData()
},[])
  return (
    <div className="flex flex-col container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
        <div className="flex justify-between">
        <h1 className='text-gray-400'>Social</h1>
        <button onClick={()=>setAddSo(!addSo)} className='border border-solid border-gray-400 rounded-md px-1 m-1'>Add Social</button>
        </div>
        <div className={addSo?"":"hidden"}>
        <form onSubmit={addSocial} className=' items-start space-y-2 flex flex-col'>
          <div className=' flex flex-col  '>
          <div className='grid grid-cols-2 sm:grid-cols-4 space-x-2 sm:space-y-1'>
          <label htmlFor="title">Title</label>
          <input type="text" required value={titleSC} onChange={e=>setTitleSC(e.target.value)} id="title" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          <label htmlFor="link">Link</label>
          <input type="text" required value={linkSC} onChange={e=>setLinkSC(e.target.value)} id="link" className=" bg-gray-300 border rounded-md px-2 text-black border-solid border-blue-800"/>
          </div>
          </div>
        
          <div className="space-y-1">
          {message && <textarea rows="1" cols="40" className='text-black  rounded-md  bg-red-500'>{message}</textarea>}
          {successMessage && <textarea rows="1" cols="40" value="Image uploaded successfully" className='text-black items-center justify-center flex  rounded-md  bg-green-500 text-center text-blue-800'></textarea>}
          <button type="submit" className="px-4 bg-green-700 w-fit rounded-md">
            {message!=='' && <h3 className='text-red-700'>try again</h3>}
            {!message &&successMessage==="" && <h3>{process?'save':'saving...'}</h3>}
            {successMessage && <h3>saved</h3>}
            </button>
      
          </div>
        </form>
        </div>
        <button className='w-fit' onClick={()=>setMoreFunction(!moreFunction)}>{moreFunction?<FaRegCircleLeft className='size-5 text-blue-500'/>:<FaRegCircleRight  className='size-5 text-blue-500'/>} </button>
        {socialsData.length!==0 && <div className="flex flex-row   rounded-md w-full h-full bg-transparent border border-solid border-black shadow-md">
        <ul className=" grid grid-cols-1 place-items-center  w-full mt-1 mb-1  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-1     overflow-y-auto ">
        {socialsData.map(
        (item,index)=>(
        <li key={index} className=' shadow-2xl border mb-1 mt-1 border-solid border-gray-500  space-y-1 sm:space-y-0 sm:space-x-1 rounded-md w-56 h-24 items-center flex flex-col justify-center'>

          <h2 className='underline px-1 rounded-sm text-blue-950'>{item.title}</h2>
          <h3 className='border-solid text-clip h-20 mx-2 font-normal border-gray-400  rounded-sm'>{item.link}</h3>
          <div className={`space-x-2 ${moreFunction?"hidden":"block"}`}>
            <UpdateSocials  item={item}/>
            <button onClick={()=>deleteSocial(item._id)} className='border border-solid bg-red-800 border-gray-400 px-1 rounded-md'>Delete</button>
          </div>
        </li>)
         )}
        </ul>
   </div>}
      </div>
  )
}

export default SocialComponent
