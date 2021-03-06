import React from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import Hero from "../components/main/Hero";
import About from "../components/main/About";
import Speciality from "../components/main/Speciality";
import MedCamp from "../components/main/MedCamp";
import Team from "../components/main/Team";
import Contact from "../components/main/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Speciality />
      <About />
      <MedCamp />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
