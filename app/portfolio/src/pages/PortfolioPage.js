import React from 'react';
import Header from '../components/portfoliocomponent/header/Header';
import Nav from '../components/portfoliocomponent/nav/Nav';
import Experience from '../components/portfoliocomponent/experience/Experience';
import Services from '../components/portfoliocomponent/services/Services';
import Portfolio from '../components/portfoliocomponent/portfolio/Portfolio';
import Testimonial from '../components/portfoliocomponent/testimonials/Testimonial';
import Contact from '../components/portfoliocomponent/contact/Contact';
import Footer from '../components/portfoliocomponent/footer/Footer';
import About from '../components/portfoliocomponent/about/About';
import {Outlet} from "react-router-dom"
const PortfolioPage=()=> {
  return (
    <>
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
    <Outlet/>
    </>
    
  );
}

export default PortfolioPage;
