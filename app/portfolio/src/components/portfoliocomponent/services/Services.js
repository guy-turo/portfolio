import React from 'react'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-evenly'>
        <article className='flex rounded-2xl flex-col w-3/4  md:w-1/4 h-3/4 items-center border-gray-800 border-2 bg-slate-500 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>UI/UX Design</h3>
          </div>
          <ul className='w-full flex flex-col  px-8'>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>User research</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Information architecture</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>User journey mapping</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Wireframing and prototyping</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Visual design</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Usability testing</p>
            </li>
          </ul>
        </article>
        <article className='flex rounded-2xl flex-col w-3/4  md:w-1/4 h-3/4 items-center border-gray-800 border-2 bg-slate-500 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>Front End Developer</h3>
          </div>
          <ul className='w-full flex flex-col px-8'>
            <li className='flex flex-row w-full items-start space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Front-End Development with Core Technologies</p>
            </li>
            <li className='flex flex-row w-full items-start space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Single Page Application (SPA) development</p>
            </li>
            <li className='flex flex-row w-full items-start space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Progressive Web App (PWA) Development</p>
            </li>
            <li className='flex flex-row w-full items-start space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Legacy Front-End Modernization</p>
            </li>
            <li className='flex flex-row w-full items-start space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>CMS Theming and Integration</p>
            </li>
            <li className='flex flex-row w-full items-start space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300'>Front-End Maintenance and support</p>
            </li>
          </ul>
        </article>
        <article className='flex rounded-2xl flex-col w-3/4  md:w-1/4 h-3/4 items-center border-gray-800 border-2 bg-slate-500 hover:bg-slate-800'>
          <div className=' p-0 bg-gray-900 flex items-center justify-center w-full h-20 rounded-br-2xl rounded-bl-2xl self-center'>
            <h3 className='flex items-center'>Back End developer</h3>
          </div>
          <ul className='w-full flex flex-col px-8'>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Backend Web Application Development</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Mobile App Backend Development</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>API Development and Integration</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Cloud Backend Development</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Database Design and Management</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Enterprises Backend Solutions</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Backend Security</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>DevOps Integration</p>
            </li>
            <li className='flex flex-row w-full items-center space-x-2'>
              <BiCheck className='text-green-300 size-5'/>
              <p className='flex text-zinc-300 '>Technical Backend Audits</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
