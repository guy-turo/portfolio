import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const  TestimonialSkeleton=()=> {
  return (
    <section id="testimonials" className="section animate-pulse">
      <div className="title animate-pulse">
        <h2 className='text-blue-300 animate-pulse'>
          <span>/</span>Testimonials
        </h2>
      </div>
      <div className="section-center animate-pulse">
            <article >
              <div className="animate-pulse absolute top-0  left-0 w-full h-full opacity-0 items-center flex flex-col transition-transform">
              <div className='flex animate-pulse rounded-full bg-blue-300'>
              <img alt='' className="person-img animate-pulse" />
              </div>
              <h4>...</h4>
              <p className="title">...</p>
              <p className="text">...</p>
              <FaQuoteRight className=" size-10 animate-pulse text-blue-300"/>
            </div>
            </article>
        <button className="prev animate-pulse">
          <FiChevronLeft className=' text-blue-300'/>
        </button>
        <button className="next animate-pulse">
          <FiChevronRight  className=' text-blue-300 animate-pulse'/>
        </button>
      </div>
    </section>
  );
}

export default TestimonialSkeleton
