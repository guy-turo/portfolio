import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSection from './HeaderSection'

import { useGetMeQuery } from '../../../redux_tool.js/service/dataApi/apiDataService'
import HeaderSkeleton from './HeaderSkeleton'

const Header=()=>{
  const {data, isLoading, isError, error}=  useGetMeQuery()
  if(isLoading){
    return <><HeaderSkeleton/></>
  }
  if(isError){
    console.log("Me Error :",error)
  }
  return (
    <section id="#" className="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>{data?.fullName}</h1>
        <h5 className="text-light">{data?.title}</h5>
        <CTA />
        <div className="sec">
        <div className='me'>
          {data &&<img src={data?.pictures[0]} alt="" className='flex rounded-tr-3xl rounded-tl-3xl'/>}
        </div>
        <p className='scroll_down'></p>
      </div>
      <HeaderSection/>
        </div>
       
    </section>
  )
}

export default Header
