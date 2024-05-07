import React,{useState,useEffect} from 'react'
import api from "../../utils/Helper"
import { FaRegCircleRight } from "react-icons/fa6";
import { FaRegCircleLeft } from "react-icons/fa6";


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
  const [process,setProcess]=useState(true)
const addService=(e)=>{

  e.preventDefault()
  setProcess(!process)
  const URI="http://localhost:8000/api/v1/me/services"
    api.post(URI,{
      userExp:userExpS,
      frontend:frontendS,
     backend:backendS,
     other:otherS
    })
    .then((response)=>{
      setSuccessMessage(response.data)
    })
    .catch(error=>setMessage(error.message))
}

const fetchServices=()=>{
  const URI=`http://localhost:8000/api/v1/me/services`
  api.get(URI)
  .then((response)=>{
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
   {servicesData.length===0 && <button onClick={()=>setAddSe(!addSe)} className='border border-solid border-gray-400 rounded-md px-1 m-1'>Add Service</button>}
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
      <button type="submit" className="px-4 bg-green-700 w-fit rounded-md">
            {message!=='' && <h3 className='text-red-700'>try again</h3>}
            {!message &&successMessage==="" && <h3>{process?"save":"saving..."}</h3>}
            {successMessage && <h3>saved</h3>}
            </button>
    </form>
    </div>
    <button className='w-fit' onClick={()=>setMoreFunction(!moreFunction)}>{moreFunction?<FaRegCircleLeft className='size-5 text-blue-500'/>:<FaRegCircleRight  className='size-5 text-blue-500'/>} </button>
    {servicesData && <div className="flex flex-row   rounded-md w-full h-full bg-transparent border border-solid border-black shadow-md">
        <ul className=" flex flex-col place-items-center  w-full mt-1 mb-1  sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-1     overflow-y-auto ">
        {servicesData.map(
        (item,index)=>(
          <li key={index} className="grid grid-cols-2 space-x-1 space-y-1 items-center justify-between w-full ">
            <div className='items-center justify-center flex  border border-solid border-gray-400 rounded-md shadow-md  flex-col'>
            <div className="flex justify-center space-x-3 items-center  w-full px-4 ">
            <div></div><h2 className="underline text-blue-950">UI/Ux</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.userExp} el='userExp' id={item._id}/>
              </div>
            </div>
            <ul>
             {item.userExp.map((itemY)=><li key={item.userExp.length} className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
            <div  className='items-center justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-center space-x-3 items-center  w-full px-4 ">
            <div></div><h2 className="underline text-blue-950">Frontend</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.frontend} el='frontend' id={item._id}/>
              </div> </div>
            <ul>
             {item.frontend.map((itemY)=><li key={item.frontend.length}  className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
            <div  className='items-center justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-center space-x-3 items-center  w-full px-4 ">
            <div></div><h2 className="underline text-blue-950">Backend</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.backend} el='backend' id={item._id}/>
              </div>  </div>
            <ul>
             {item.backend.map((itemY)=><li key={item.backend.length}  className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
            <div  className='items-center justify-center flex  flex-col border border-solid border-gray-400 rounded-md shadow-md'>
            <div className="flex justify-center space-x-3 items-center  w-full px-4 ">
              
              <div></div>
              <h2 className="underline text-blue-950">Other</h2>
              <div className={`${moreFunction?"hidden":""}`}>
              <UpdateServices item={item.other} el='other' id={item._id}  />
              </div>  
            </div>
            <ul>
             {item.other.map((itemY)=><li key={item.other.length}  className="flex flex-col items-center justify-center">
                <h3 className="font-normal">{itemY}</h3>
              </li>)}
            </ul>
            </div>
          </li>)
         )}
        </ul>
   </div>}
  </div>
  )
}

export default ServicesComponent
