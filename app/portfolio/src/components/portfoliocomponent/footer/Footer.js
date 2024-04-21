import React,{useState,useEffect} from  'react'
import axios from 'axios'

function Footer() {
  const [SocialsData,setSocialsData]=useState([])

  const firstFourElements = Array.from(SocialsData.values()).slice(0, 4);
  const fetchData=()=>{
    const URI="http://localhost:8000/api/v1/me/socials"
    axios.get(URI)
    .then((response)=>{
      if(response.status===200){
        setSocialsData(response.data)
      }
    })
    .catch(error=>console.error(error.message))
  }
  useEffect(()=>{
    fetchData()
  },[])
  const [portfolioData, setPortfolioData]=useState([])
  const fetchProjectData=()=>{
    const URI="http://localhost:8000/api/v1/me/projects"
    axios.get(URI)
    .then((res)=>{
      setPortfolioData(res.data)
    })
    .catch(error=>
     alert("something went wrong")
      )
  }
  useEffect(()=>{
    fetchProjectData()
  },[])
  return (
    <footer id='footer' className="">
      
      <div className='items-center flex flex-col space-y-10 divide-y-2 divide-solid divide-black'>
      <div className='container pt-10 items-center flex flex-col'>
      <a href="#"  className="space-y-10 "><h1 className='flex font-extrabold underline'>K.K.Guy</h1></a>
      <div className='flex flex-col space-y-4 sm:space-y-0 items-center sm:items-start justify-items-center sm:flex-row  justify-evenly  w-full'>
        <div className='items-center flex flex-col'>
          <h3 className='text-zinc-300 font-semibold'>Navigation</h3>
        <ul className='items-center flex flex-col'>
          <li><a href="#">Home</a></li>
          <li><a href="#about"  className="flex text-nowrap">About</a></li>
          <li><a href="#experience"  className="flex text-nowrap">Experiences</a></li>
          <li><a href="#services"  className="flex text-nowrap">Services</a></li>
          <li><a href="#portfolio"  className="flex text-nowrap">Portfolio</a></li>
          <li><a href="#testimonials"  className="flex text-nowrap">Testimonials</a></li>
          <li><a href="#contact"  className="flex text-nowrap">Contact</a></li>
        </ul>
        </div>
       <div className='items-center flex flex-col'>
        <h3 className='text-zinc-300 font-semibold'>Social</h3>
       <ul className='items-center flex flex-col'>
          {SocialsData && firstFourElements?.map((item, index)=><li key={index}><a href={item.link}  className="flex text-nowrap">{item.title}</a></li>)}
        </ul>
       </div>

        <div className='items-center justify-items-center flex flex-col'>
          <h3 className='text-zinc-300 font-semibold'>Projects</h3>

        <ul className='items-center flex flex-col'>
          {portfolioData && portfolioData.map((item, index)=><li key={index}><a href={item.linkGithub}>{item.title}</a></li>)
            
          }
        </ul>
        </div>
        {/* <div className='items-center justify-items-center flex flex-col'>
          <h3 className='text-zinc-300 font-semibold'>Rules & Others</h3>

        <ul className='items-center flex flex-col'>
          <li><a href=""  className="flex text-nowrap">Conditions of use</a></li>
          <li><a href=""  className="flex text-nowrap">Rules and Securities</a></li>
          <li><a href=""  className="flex text-nowrap">Test new features</a></li>

        </ul>
        </div>
         */}
      </div>
      
      
      </div>
      <p className='font-serif text-zinc-400 '>© 2020 Kodilux || last modif 02/03/2024</p>
      </div>
     
      
    </footer>
  )
}

export default Footer
