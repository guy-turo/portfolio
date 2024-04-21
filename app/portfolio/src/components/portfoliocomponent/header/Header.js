import React, {useEffect,useState} from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSection from './HeaderSection'
import axios from 'axios'

function Header() {
  const [image,setImage]=useState('')
  const [personalData,setPersonalData]=useState([])
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/me/personal"
    axios.get(URI)
    .then(res=>{
      setPersonalData(res.data[0])
      setImage(res.data[0].pictures[0])
    }
    )
    .catch(error=>alert("Something went wrong try again"))
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <section id="#" className="header">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>{personalData?.fullName}</h1>
        <h5 className="text-light">{personalData?.title}</h5>
        <CTA />
        <div className="sec">
        <div className='me'>
          {personalData&&<img src={image} alt="" className='flex rounded-tr-3xl rounded-tl-3xl'/>}
        </div>
        <p className='scroll_down'></p>
      </div>
      <HeaderSection/>
        </div>
       
    </section>
  )
}

export default Header
