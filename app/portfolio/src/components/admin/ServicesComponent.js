import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";

import { MdDelete } from "react-icons/md";

import UpdateServices from './helper/UpdateServices'
function ServicesComponent() {
  const [successMessage,setSuccessMessage]=useState('')
  const [message,setMessage]=useState('')

  const [moreFunction, setMoreFunction]=useState(true)
  const [addSe, setAddSe]=useState(false)


  const [userExpS,setUserExpS]=useState('')
  const [frontendS,setFrontendS]=useState('')
  const [backendS,setBackendS]=useState('')
  const [otherS, setOtherS]=useState('')

  const [servicesData,setServicesData]=useState([])
const addService=(e)=>{
  e.preventDefault()
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
const deleteServices=(id)=>{
  const URI=`http://localhost:8000/api/v1/me/services/${id}`
  axios.delete(URI)
  .then((response)=>{
    console.log(response.data)
  })
  .catch(error=>console.log(error.message))
} 
const fetchServices=()=>{
  const URI=`http://localhost:8000/api/v1/me/services`
  axios.get(URI)
  .then((response)=>{
    console.log(response.data)
    setServicesData(response.data)
  })
  .catch(error=>console.log(error.message))
}
useEffect(()=>{
  fetchServices()
},[])
  return (
    <div className="flex flex-col  container shadow-2xl border border-solid border-gray-400 mt-4 p-2 rounded-md">
   <div className="flex justify-between">
   <h1 className='text-gray-400'>Services</h1>
   {servicesData.length===0 && <button onClick={()=>setAddSe(!addSe)} className='border border-solid border-gray-400 rounded-md px-1 m-1'>Add Social</button>}
   </div>
    <div className={addSe?"":"hidden"}>
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
    <button className='w-fit' onClick={()=>setMoreFunction(!moreFunction)}>{moreFunction?<FaRegCircleLeft className='size-5 text-blue-500'/>:<FaRegCircleRight  className='size-5 text-blue-500'/>} </button>
    {servicesData && <div className="flex flex-row   rounded-md w-full h-full bg-transparent border border-solid border-black shadow-md">
        <ul className=" flex flex-col place-items-center  w-full mt-1 mb-1  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-1     overflow-y-auto ">
        {servicesData.map(
        (item,index)=>(
          <li key={index} className="grid grid-cols-2 space-x-1 space-y-1 items-center justify-between w-full ">
            <div className='items-center justify-center flex  border border-solid border-gray-400 rounded-md shadow-md  flex-col'>
            <div className="flex justify-between items-center  w-full px-4 ">
              <MdDelete onClick={()=>deleteServices(item.userExp)} className={`${moreFunction?"hidden":""} text-red-400 cursor-pointer `}/>
              <h2 className="underline">UI/Ux</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.userExp}/>
              </div>
            </div>
            <ul>
             {item.userExp.map((itemY)=><li key={item.userExp.length} className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
            <div  className='items-center justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-between items-center  w-full px-4 ">
              <MdDelete className={`${moreFunction?"hidden":""} text-red-400 cursor-pointer `}/>
              <h2 className="underline">Frontend</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.frontend}/>
              </div> </div>
            <ul>
             {item.frontend.map((itemY)=><li key={item.frontend.length}  className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
            <div  className='items-center justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-between items-center  w-full px-4 ">
              <MdDelete className={`${moreFunction?"hidden":""} text-red-400 cursor-pointer `}/>
              <h2 className="underline">Backend</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.backend}/>
              </div>  </div>
            <ul>
             {item.backend.map((itemY)=><li key={item.backend.length}  className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
            <div  className='items-center justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-between items-center  w-full px-4 ">
              <MdDelete className={`${moreFunction?"hidden":""} text-red-400 cursor-pointer `}/>
              <h2 className="underline">Other</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.other}/>
              </div>  </div>
            <ul>
             {item.other.map((itemY)=><li key={item.other.length}  className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
          </li>
           
      )
         )}
        </ul>
   </div>}
  </div>
  )
}

export default ServicesComponent
