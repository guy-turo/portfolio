import React,{useEffect, useState} from 'react'
import {BiCheck} from 'react-icons/bi'
import axios from 'axios'

function Services() {
  const [servicesData,setServicesData]=useState([])
  const fetchServices=()=>{
    const URI=`http://localhost:8000/api/v1/me/services`
    axios.get(URI)
    .then((response)=>{
      setServicesData(response.data)
    })
    .catch(error=>console.log(error.message))
  }
  useEffect(()=>{
    fetchServices()
  },[])
  return (
    <section id='services' className='flex flex-col items-center justify-center'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className=' flex items-center justify-center'>
        <ul className='flex items-center'>
          {servicesData && servicesData.map((item,index)=><li key={index} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-fit w-fit space-y-2 md:space-x-2'>
          <article className='flex rounded-2xl flex-col w-3/4   md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>Other</h3>
          </div>
          <ul className='w-full flex flex-col  px-8'>
             {item.other.map((itemY)=><li key={item.other.length} className="flex flex-row w-full items-center space-x-2">
             <BiCheck className='text-green-300 size-5'/>
             <p className='flex text-zinc-300 '>{itemY}</p>
              </li>)}
            </ul>
        </article>
          <article className='flex rounded-2xl flex-col w-3/4  md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>UI/UX Design</h3>
          </div>
          <ul className='w-full flex flex-col  px-8'>
             {item.userExp.map((itemY)=><li key={item.userExp.length} className="flex flex-row w-full items-center space-x-2">
             <BiCheck className='text-green-300 size-5'/>
             <p className='flex text-zinc-300 '>{itemY}</p>
              </li>)}
            </ul>
        </article>
        <article className='flex rounded-2xl flex-col w-3/4  md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>Front End Developer</h3>
          </div>
          <ul className='w-full flex flex-col  px-8'>
             {item.frontend.map((itemY)=><li key={item.frontend.length} className="flex flex-row w-full items-center space-x-2">
             <BiCheck className='text-green-300 size-5'/>
             <p className='flex text-zinc-300 '>{itemY}</p>
              </li>)}
            </ul>
        </article>
        <article className='flex rounded-2xl flex-col w-3/4  md:w-fit h-fit items-center border-gray-800 border-2 bg-slate-700 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>Back End Developer</h3>
          </div>
          <ul className='w-full flex flex-col  px-8'>
             {item.backend.map((itemY)=><li key={item.backend.length} className="flex flex-row w-full items-center space-x-2">
             <BiCheck className='text-green-300 size-5'/>
             <p className='flex text-zinc-300 '>{itemY}</p>
              </li>)}
            </ul>
        </article>
       
          </li>)}
        </ul>
      </div>
    </section>
  )
}

export default Services
