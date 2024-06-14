import React from "react";
import './Home.css'
import Navbar from "../../Components/Header/Navbar/Navbar";
import Hero from "../../Components/Header/Hero/Hero";
//import Programs from "../../Components/Header/Programs/Programs";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
