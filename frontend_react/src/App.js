import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from './components/Navbar'; 

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  )
}

export default App;