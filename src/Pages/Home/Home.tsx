import React from "react";
import './Home.css'
import Navbar from "../../Components/Header/Navbar/Navbar";
import Hero from "../../Components/Header/Hero/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
