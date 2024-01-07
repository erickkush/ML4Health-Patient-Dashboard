import React from 'react';
import BannerBackground from "../images/home-banner-background.png";
import BannerImage from "../images/home-banner-image.jpg";
import Navbar from './Navbar'
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
  <div className= "home-container">
    <Navbar/>
    <div className="home-banner-container">
        <div className="home-bannerImage-container">
            <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
                Wellness Redefined, Detect Pneumonia Early          
            </h1>
            <p className="primary-text">
                We harness the cutting-edge capabilities of machine learning to 
                revolutionize the way pneumonia is diagnosed. Our advanced AI-driven 
                platform is designed to provide accurate and rapid pneumonia detection, 
                offering a lifeline to both healthcare professionals and patients.
            </p>
            <button className="secondary-button">
                Book Today <FiArrowRight/>{" "}
            </button>
        </div>
        <div className="home-image-section">
            <img src={BannerImage} alt=""/>
        </div>
    </div>
  </div>
  );
};

export default Home;