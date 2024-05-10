import React,{useEffect, useState} from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import api from '../../../utils/Helper'
import axios from "axios"


const  Contact=()=> {
  const [aboutData, setAboutData]=useState([])
  
  const fetchData=()=>{
    const URI="/me/personal"
    api.get(URI)
    .then(res=>{
      setAboutData(res.data[0])}
    )
    .catch(error=>console.log(error.message))
  }
  useEffect(()=>{
    fetchData()
  },[])
  const [sender,setSender]=useState('')
  const [name,setName]=useState('')
  const [message,setMessage]=useState('')
  const [subject,setSubject]=useState('')
  const [process,setProcess]=useState(true)

  const sendEmail = (e) => {
    e.preventDefault();
    setProcess(!process)
      const URI="http://localhost:8000/api/v1/me/sendEmail"
      axios.post(URI,{
        name:name,
        sender:sender,
        subject:subject,
        message:message
      })
      .then((re)=>{
        if(re.status===200){
          setProcess(!process)
        }
      })
    .catch(error=>alert("try again"))
  };
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
      <form onSubmit={sendEmail} className='flex flex-col space-y-4 w-96 justify-start'>
        <input type="text"name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Full Name' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="email" value={sender} onChange={(e)=>setSender(e.target.value)} name='email' placeholder='Your Email' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} name='subject' placeholder='Your Subject' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} rows="7" className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'></textarea>
        <button type='submit'  className='bg-green-800 hover:bg-green-900 w-28 rounded-sm text-zinc-300'>{process?"Send Message":"Sending... Message"}</button>
      </form>
    </div>
   </section>
  )
}

export default Contact
