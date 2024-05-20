import React from  'react'
import { useGetSocialQuery, useGetProjectQuery} from '../../../redux_tool.js/service/dataApi/apiDataService'

const  Footer=()=> {
  const {data:SocialsData,isError:socialIsError,isLoading:socialIsLoading, error:socialError}=  useGetSocialQuery()
  const {data:portfolioData, isError:portfolioIsError, error:portfolioError, isLoading:portfolioIsLoading}= useGetProjectQuery()
  const firstFourElements = portfolioData?.slice(0,7);
  console.log(SocialsData)
  if(socialIsError){
    console.log("Social error: ", socialError)
  }
  if(portfolioIsError){
    console.log('Portfolio error: ', portfolioError)
  }
 
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
          {SocialsData && SocialsData?.map((item, index)=><li key={index}><a href={item.link}  className="flex text-nowrap">{item.title}</a></li>)}
          {socialIsLoading&& <li><a   className="flex text-nowrap animate-pulse ">...</a></li>}
        </ul>
       </div>
        <div className='items-center justify-items-center flex flex-col'>
          <h3 className='text-zinc-300 font-semibold'>Projects</h3>
        <ul className='items-center flex flex-col'>
          {portfolioData && firstFourElements.map((item, index)=><li key={index}><a href={item.linkGithub}>{item.title}</a></li>)}
          {portfolioIsLoading && <li><a  className=" animate-pulse">....</a></li> }
          <a href="https://github.com/guy-turo?tab=repositories"  className="flex text-nowrap">more...</a>
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
