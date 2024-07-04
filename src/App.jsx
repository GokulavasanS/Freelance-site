import React from 'react';
import CursorFollower from './CursorFollower';
import Navbar from './Components/Header/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
// import Portfolio from './Pages/Portfolio/Portfolio';
import Service from './Pages/Services/Service';
import Contact from './Pages/ContactUs/Contact';
import './App.css'


const App = () => {
  return (
      <div className='app'>
        <CursorFollower />
        <Navbar />
        <Home />
        <About />
        <Service />
        {/* <Portfolio /> */}
        <Contact />
      </div>
  );
};

export default App;
