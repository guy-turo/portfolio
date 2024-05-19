import React,{useEffect, useState} from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import ContactSkeleton from './ContactSkeleton';

import { useGetMeQuery } from '../../../redux_tool.js/service/dataApi/apiDataService';
import { useSendEmailMutation } from '../../../redux_tool.js/service/dataApi/apiDataService'


const  Contact=()=> {
  const [sendEmail, {data, isLoading, isError}]= useSendEmailMutation()
  const {data:aboutData , isLoading:aboutLoading, isError:aboutIsError, error:aboutError}=useGetMeQuery()

  const [sender,setSender]=useState('')
  const [name,setName]=useState('')
  const [message,setMessage]=useState('')
  const [subject,setSubject]=useState('')
  const handleSendEmail = async(e) => {
    e.preventDefault();
    try{
      const response= await sendEmail({
         name:name,
         sender:sender,
         subject:subject,
         message:message
       })
       if(response.data){
         console.log(Response.data)
       }
    }catch(error){
      console.log(error.message)
    }
  };
  if(aboutLoading){
  return <><ContactSkeleton/></>  
  }
  if(aboutIsError){
    console.log(aboutError)
  }
  return (
   <section id='contact' className='pb-10'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className=' container flex flex-col items-center space-y-4 md:space-y-0 md:flex-row space-x-8 justify-evenly'>
      <div className='space-y-2'>

        <article className='p-2 border-2 border-solid border-zinc-700 items-center flex flex-col bg-blue-800 rounded-xl'>
        <MdOutlineEmail className='size-6'/>
        <h4>Email</h4>
        <h5 className='text-zinc-300'>{aboutData?.email}</h5>
        <a href="mailto:kasongokakumbiguy@gmail.com" className='bg-blue-900 px-2 rounded-lg border border-solid shadow-xl hover:text-yellow-600'>Send a message</a>
        </article>
       
        <article className='p-2 border-2 border-solid border-zinc-700 items-center flex flex-col bg-blue-800 rounded-xl'>
        <BsWhatsapp className='size-6'/>
        <h4>WhatsApp</h4>
        <h5 className='text-zinc-300'>{aboutData?.phoneNumber}</h5>
        <a href={`https://wa.me/${aboutData?.phoneNumber}`} className='bg-blue-900 px-2 rounded-lg border border-solid shadow-xl hover:text-red-600'>Send a message</a>
        </article >
      </div>
      <form onSubmit={handleSendEmail} className='flex flex-col space-y-4 w-96 justify-start'>
        <input type="text"name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Your Full Name' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="email" value={sender} onChange={(e)=>setSender(e.target.value)} name='email' placeholder='Your Email' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="subject" value={subject} onChange={(e)=>setSubject(e.target.value)} name='subject' placeholder='Your Subject' required className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <textarea name="message" value={message} onChange={(e)=>setMessage(e.target.value)} rows="7" className='p-1 rounded-sm bg-transparent block border border-solid border-blue-800'></textarea>
        <button type='submit'  className='bg-green-800 hover:bg-green-900 w-28 rounded-sm text-zinc-300'>{isLoading?"Sending... Message":"Send Message"} </button>
        {isError?<p className="text-red-600">"Can't send your message, please try again</p>:""}
        {data?<p className=" text-red-600">Message Sent</p>:""}
      </form>
    </div>
   </section>
  )
}

export default Contact
