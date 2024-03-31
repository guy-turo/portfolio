import React,{useState,useEffect} from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './testimonial.css'
const peoples = [
  {
    id: 1,
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
    name: 'maria ferguson',
    title: 'office manager',
    quote:
      'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
  },
  {
    id: 2,
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
    name: 'john doe',
    title: 'regular guy',
    quote:
      'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
  },
  {
    id: 3,
    image: 'https://www.course-api.com/images/people/person-3.jpeg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
  },
  {
    id: 4,
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
    name: 'susan andersen',
    title: 'the boss',
    quote:
      'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
  },
];
function Testimonial() {
  const [people,setPeople]=useState(peoples)
  const [index , setIndex]=useState(0)

  useEffect(()=>{
    const lastIndex= people.length-1;
    if(index<0){
      setIndex(lastIndex)
    }if(index>lastIndex){
      setIndex(0)
    }
  },[index ,people])
  useEffect(()=>{
    let slider=setInterval(()=>{
      setIndex(index+1)
    },5000);
    return ()=>{
      clearInterval(slider)
    }
  },[index])
  return (
    <section className="section">
      <div className="title">
        <h2 className='text-blue-300'>
          <span>/</span>Testimonials
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article >
              <div className={`${position} absolute top-0  left-0 w-full h-full opacity-0 items-center flex flex-col transition-transform` } key={id}>
              <div className='flex rounded-full bg-blue-300'>
              <img src={image} alt={name} className="person-img " />
              </div>
              
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
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
