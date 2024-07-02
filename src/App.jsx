import React from 'react';
import Navbar from './Components/Header/Navbar';

import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import Portfolio from './Pages/Portfolio/Portfolio';
// import Service from './Pages/Services/Service';
// import Contact from './Pages/ContactUs/Contact';
import './App.css'
import How from './Pages/Howwedo/How';

const App = () => {
  return (
      <div className='app'>
        <Navbar />
        <Home />
        <How/>
        {/* <About />
        <Portfolio />
        <Service />
        <Contact /> */}
      </div>
  );
};

export default App;
