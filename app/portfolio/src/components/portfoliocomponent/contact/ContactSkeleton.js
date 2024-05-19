import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'



const  ContactSkeleton=()=> {

  return (
   <section id='contact' className='pb-10 animate-pulse'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className=' container  animate-pulse flex flex-col items-center space-y-4 md:space-y-0 md:flex-row space-x-8 justify-evenly'>
      <div className='space-y-2 animate-pulse'>

        <article className='p-2 animate-pulse border-2 border-solid border-zinc-700 items-center flex flex-col bg-blue-800 rounded-xl'>
        <MdOutlineEmail className='size-6'/>
        <h4>Email</h4>
        <h5 className='text-zinc-300 animate-pulse'>email</h5>
        <a className='bg-blue-900 animate-pulse px-2 rounded-lg border border-solid shadow-xl hover:text-yellow-600'>Send a message</a>
        </article>
       
        <article className='p-2 border-2 animate-pulse border-solid border-zinc-700 items-center flex flex-col bg-blue-800 rounded-xl'>
        <BsWhatsapp className='size-6 animate-pulse'/>
        <h4>WhatsApp</h4>
        <h5 className='text-zinc-300'>phoneNumber</h5>
        <a className='bg-blue-900 px-2 animate-pulse rounded-lg border border-solid shadow-xl hover:text-red-600'>Send a message</a>
        </article >
      </div>
      <form  className='flex flex-col animate-pulse space-y-4 w-96 justify-start'>
        <input type="text"name='name'  placeholder='Your Full Name' required className='p-1 animate-pulse rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="email" name='email' placeholder='Your Email' required className='p-1 animate-pulse rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <input type="subject"  name='subject' placeholder='Your Subject' required className='p-1 animate-pulse rounded-sm bg-transparent block border border-solid border-blue-800'/>
        <textarea name="message"  rows="7" className='p-1 rounded-sm bg-transparent block border animate-pulse border-solid border-blue-800'></textarea>
        <button type='submit'  className='bg-green-800 hover:bg-green-900 w-28 animate-pulse rounded-sm text-zinc-300'>
            Send Message
        </button>
      </form>
    </div>
   </section>
  )
}

export default ContactSkeleton
