import React from 'react';
import Hero from '../hero/Hero';
import About from '../about/About';
import Services from '../services/Services';
import Contact from '../contact/Contact';
import Header from "../header/Header"
import "../../App.css"

const HomePage = () => {
  return (
    <div>
    <Header/>
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default HomePage;
