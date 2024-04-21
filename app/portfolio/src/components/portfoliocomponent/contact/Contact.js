import React,{useEffect, useState} from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import axios from 'axios'

function Contact() {
  const [aboutData, setAboutData]=useState([])
  
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/me/personal"
    axios.get(URI)
    .then(res=>{
      setAboutData(res.data[0])}
    )
    .catch(error=>console.log(error.message))
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
   <section id='contact' className='pb-10'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className=' container flex flex-col items-center space-y-4 md:space-y-0 md:flex-row space-x-8 justify-evenly'>
      <div className='space-y-2'>

        <article className='p-2 border-2 border-solid border-zinc-700 items-center flex flex-col bg-blue-800 rounded-xl'>
        <MdOutlineEmail className='size-6'/>
        <h4>Email</h4>
        <h5 className='text-zinc-300'>{aboutData.email}</h5>
        <a href="mailto:kasongokakumbiguy@gmail.com" className='bg-blue-900 px-2 rounded-lg border border-solid shadow-xl hover:text-yellow-600'>Send a message</a>
        </article>
       
        <article className='p-2 border-2 border-solid border-zinc-700 items-center flex flex-col bg-blue-800 rounded-xl'>
        <BsWhatsapp className='size-6'/>
        <h4>WhatsApp</h4>
        <h5 className='text-zinc-300'>{aboutData.phoneNumber}</h5>
        <a href={`https://wa.me/${aboutData.phoneNumber}`} className='bg-blue-900 px-2 rounded-lg border border-solid shadow-xl hover:text-red-600'>Send a message</a>
        </article >
      </div>
      <form action="" className='flex flex-col space-y-4 w-96 justify-start'>
        <input type="text"name='name' placeholder='Your Full Name' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="email" name='email' placeholder='Your Email' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <textarea name="message" rows="7" className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'></textarea>
        <button type='submit'  className='bg-green-800 hover:bg-green-900 w-28 rounded-sm text-zinc-300'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
