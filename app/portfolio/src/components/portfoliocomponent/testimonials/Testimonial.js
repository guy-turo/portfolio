import React,{useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import api from '../../../utils/Helper';
import './testimonial.css'
import { useGetTestimonialQuery } from '../../../redux_tool.js/service/dataApi/apiDataService';
import TestimonialSkeleton from './TestimonialSkeleton';
const  Testimonial=()=> {
  const [index , setIndex]=useState(0)
 
  const {data:testimonialData, isLoading, isError, error}=useGetTestimonialQuery()
  
  useEffect(()=>{
    const lastIndex= testimonialData?.length-1;
    if(index<0){
      setIndex(lastIndex)
    }if(index>lastIndex){
      setIndex(0)
    }
  },[index ,testimonialData])
  useEffect(()=>{
    let slider=setInterval(()=>{
      setIndex(index+1)
    },5000);
    return ()=>{
      clearInterval(slider)
    }
  },[index])
  if(isLoading){
    return <><TestimonialSkeleton/></>
  }
  if(isError){
    console.log("Testimonial Error: ", error)
  }
  return (
    <section id="testimonials" className="section">
      <div className="title">
        <h2 className='text-blue-300'>
          <span>/</span>Testimonials
        </h2>
      </div>
      <div className="section-center">
        {testimonialData && testimonialData.map((person, personIndex) => {
          const { _id, pictures, name, title, testimonials } = person;
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === testimonialData?.length - 1)
          ) {
            position = 'lastSlide';
          }
          return (
            <article >
              <div className={`${position} absolute top-0  left-0 w-full h-full opacity-0 items-center flex flex-col transition-transform` } key={_id}>
              <div className='flex rounded-full bg-blue-300'>
              <img src={pictures} alt={name} className="person-img " />
              </div>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{testimonials}</p>
              <FaQuoteRight className=" size-10 text-blue-300"/>
            </div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft className=' text-blue-300'/>
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight  className=' text-blue-300'/>
        </button>
      </div>
    </section>
  );
}

export default Testimonial
