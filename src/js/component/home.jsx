import React from "react";
import Boostrap from 'react-bootstrap';
import Navbar from "./navbar";
import Footer from "./footer";
import Card from "./card";
import Tagline from "./tagline";



const Home = () => {
  return (
    <div className="main-contain">
      <Navbar />

      <Tagline />
      
      <Card />

      <Footer />
    </div>
  );
};
export default Home;
