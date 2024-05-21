import React from 'react'
import ViewDetailPortfolio from './helper/ViewDetailPortfolio'
import { useGetProjectQuery } from '../../../redux_tool.js/service/dataApi/apiDataService'
import PortfolioSkeleton from './PortfolioSkeleton'
const  Portfolio=()=> {
  const {data:portfolioData , isLoading, isError, error}= useGetProjectQuery()
  if(isLoading){
    return <><PortfolioSkeleton/></>
  }
  if(isError){
    console.log(error)
  }
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className=''>
        <ul className=' grid sm:grid-cols-3 sm:space-y-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center'>
          {portfolioData && portfolioData.map((item, index)=><li key={index} className='h-fit justify-center flex items-center'>
          <article className='bg-blue-900 hover:bg-blue-800 w-44 h-56 rounded-xl py-2 flex flex-col items-center'>
          <div className='shadow-2xl w-36 h-36 '>
            <ul>
              {item.pictures.map((image,index)=><li key={index}>
              <img src={image} alt=""  className='flex size-36 rounded-3xl'/>
              </li>).slice(0,1)}
            </ul>
          </div>
          <div className="flex items-center justify-between w-full px-3 ">
            <div></div>
          <h3 className="text-zinc-300">{item.title}</h3>
          <ViewDetailPortfolio item={item}/>
          </div>
          <div className='flex flex-row justify-evenly w-full'>
          <a href={item.linkGithub} target='-blank' className='text-zinc-300 bg-transparent border border-solid rounded-lg border-indigo-200 px-2 hover:border-indigo-600'>Github</a>
          <a href={item.liveLink} target='_black' className='border-2 border-black rounded-md px-6 font-semibold text-black bg-blue-800 hover:bg-blue-900  border-solid  bg-transparent'>Live</a>
          </div>
        </article>
          </li>)}
        </ul>
      </div>
    </section>
  )
}

export default Portfolio
